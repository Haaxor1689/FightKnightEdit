import ini from 'ini';

import Header from 'components/Header';
import Form from 'components/form/Form';
import { RawSaveFileSchema, SaveFile } from 'utils/types';
import { downloadBlob } from 'utils';

type Props = {
	save: [string, SaveFile];
	reset: () => void;
};

const WorldEditForm = ({ save: [name, world], reset }: Props) => (
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
			alignItems: 'center',
			gap: 6
		}}
	>
		<Header name={name} reset={reset} />
	</Form>
);

export default WorldEditForm;
