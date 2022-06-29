import ini from 'ini';
import { useEffect, useState } from 'react';

import TextButton from 'components/layout/TextButton';
import Header from 'components/Header';
import Form from 'components/form/Form';
import { RawSaveFileSchema, SaveFile } from 'utils/types';
import { downloadBlob } from 'utils';
import WorldTab from 'tabs/world/WorldTab';
import EditJsonTab from 'tabs/editJson/EditJsonTab';
import EditorLogo from 'components/EditorLogo';

const tabs = [
	{
		name: 'World map',
		component: <WorldTab />
	},
	{
		name: 'Edit JSON',
		component: <EditJsonTab />
	}
] as const;

type TabName = typeof tabs[number]['name'];

type Props = {
	save: [string, SaveFile];
	reset: () => void;
};

const WorldEditForm = ({ save: [name, world], reset }: Props) => {
	const [activeTab, setActiveTab] = useState<TabName>();
	const tab = tabs.find(t => t.name === activeTab);
	useEffect(() => {
		document.title = `${name} | Archvale Save Edit`;
		return () => {
			document.title = 'Archvale Save Edit';
		};
	}, [name]);

	return (
		<Form
			initialValues={world}
			onSubmit={async values => {
				const data = ini.stringify(RawSaveFileSchema.parse(values));
				const base = `data:application/octet-stream;base64,${btoa(data)}`;
				const blob = await fetch(base).then(r => r.blob());
				downloadBlob(blob, name);
			}}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				flexGrow: 1,
				justifyContent: !tab ? 'center' : undefined
			}}
		>
			{tab ? (
				<>
					<Header name={tab.name} goBack={() => setActiveTab(undefined)} />
					{tab.component}
				</>
			) : (
				<>
					<EditorLogo />
					{tabs.map(t => (
						<TextButton key={t.name} onClick={() => setActiveTab(t.name)}>
							{t.name}
						</TextButton>
					))}
					<TextButton type="submit" variant="success">
						Save
					</TextButton>
					<TextButton onClick={reset}>Quit</TextButton>
				</>
			)}
		</Form>
	);
};

export default WorldEditForm;
