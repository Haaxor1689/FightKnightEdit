(this["webpackJsonpfight-knight-edit"]=this["webpackJsonpfight-knight-edit"]||[]).push([[0],{114:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var i,r=n(0),a=n(29),o=n.n(a),c=n(8),s=n(158),l=n(163),u=n(164),d=n(160),b=n(159),p=function(){var e=Object(b.a)("(max-width:1366px)"),t=Object(b.a)("(max-width:1920px)");return e?3:t?4:5},h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),f=function(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!==n&&(n.onstatechange=function(){var i,r;"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),null===t||void 0===t||null===(i=t.onUpdate)||void 0===i||i.call(t,e)):(console.log("Content is cached for offline use."),null===t||void 0===t||null===(r=t.onSuccess)||void 0===r||r.call(t,e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))},j=function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!==i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))},v=n(6),g=n(21),m=n(80),O=n(151),x=n.p+"static/media/sArrow_0.414d5640.png",y=n(74),k=n(12),w=n(25),_=(n(149),function(e){return new Promise((function(t,n){var i=new FileReader;i.readAsDataURL(e),i.onload=function(){var e,n;return t(null!==(e=null===(n=i.result.match(/;base64,(.*)/))||void 0===n?void 0:n[1])&&void 0!==e?e:"")},i.onerror=function(e){return n(e)}}))}),S=function(e,t){var n=window.URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=t,i.click()},C=function(e,t){return function(e,t){return(Object(k.a)(Array(t).keys()).map((function(){return"0"})).join("")+e).slice(-t)}(e.toString(16),t).toUpperCase()},I=function(e){return parseInt("0x".concat(e))},F=function(e){return"".concat(function(e){return Object(w.b)(i||(i=Object(y.a)(["\n\t8% {\n\t\ttransform: translateX(",");\n\t}\n\t25% {\n\t\ttransform: translateX(",");\n\t}\n\t41% {\n\t\ttransform: translateX(",");\n\t}\n\t58% {\n\t\ttransform: translateX(",");\n\t}\n\t75% {\n\t\ttransform: translateX(",");\n\t}\n\t91% {\n\t\ttransform: translateX(",");\n\t}\n"])),e.spacing(2),e.spacing(-2),e.spacing(1),e.spacing(-1),e.spacing(.5),e.spacing(-.5))}(e)," 1s ease-in-out")},A=n(75),N=n.p+"static/media/sFont_primary.1dbb1c01.png",E=n.p+"static/media/sFont_secondary.8fa0a812.png",R=n.p+"static/media/sFont_success.5b5014c5.png",z=n.p+"static/media/sFont_successHover.f443e114.png",W=n.p+"static/media/sFont_disabled.1756ca3c.png",D=n.p+"static/media/dither.f770c8f5.png",H=n(60),T=(n(114),n.p+"static/media/sOpening_17.aba4b902.png"),P=function(e){return Object(H.a)({palette:{primary:{main:"#fedd00"},secondary:{main:"#fe2300"},background:{default:"#2c0b32"},mode:"dark"},typography:{fontFamily:'"Nintendo DS BIOS", sans-serif'},spacing:e,components:{MuiCssBaseline:{styleOverrides:{"*":{imageRendering:"pixelated"},body:{position:"relative"},"body:before":{content:'" "',position:"absolute",bottom:0,right:0,height:"100%",width:"100%",zIndex:-1,opacity:.2,backgroundImage:"url(".concat(T,")"),backgroundPosition:"bottom right",backgroundSize:"cover",filter:"blur(10px)",mixBlendMode:"hard-light"}}}}})},q=n(1),G=["chars","sx"],L=["size","variant","hasHover","children"],M={" ":[3,3],"!":[1,3],'"':[2,4],"'":[2,6],"(":[1,3],")":[1,3],",":[1,3],".":[1,3],"/":[1,2],1:[1,2],":":[1,3],";":[1,3],I:[0,2],T:[2,2],"[":[1,3],"]":[1,3],_:[2,2],"`":[2,2],i:[2,4],j:[3,2],k:[1,2],l:[1,3],t:[1,2],"|":[1,5]},U={primary:N,secondary:E,success:R,disabled:W},X={primary:N,secondary:N,success:z,disabled:W},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{"--bitmap-url":"url(".concat(U[e],")"),"--dither-url":"url(".concat(D,")"),":hover,:focus-visible":Object(v.a)(Object(v.a)({},t),{},{"--bitmap-url":"url(".concat(X[e],")"),"--dither-url":"none"})}},J=function(e){var t,n,i,r,a=e.char,o=e.variant,c=e.hasHover,s=a.charCodeAt(0)-32;return"\n"===a?Object(q.jsx)("br",{}):s<0||s>223?null:Object(q.jsx)(O.a,{component:"span",sx:Object(v.a)(Object(v.a)({},c?{}:{"--bitmap-url":"url(".concat(U[o],")"),"--dither-url":"url(".concat(D,")")}),{},{position:"relative",display:"inline-block",width:function(e){return e.spacing(9)},height:function(e){return e.spacing(14)},whiteSpace:"pre",color:"transparent",textAlign:"center",pl:1,mb:-3,ml:-(null!==(t=null===(n=M[a])||void 0===n?void 0:n[0])&&void 0!==t?t:1),mr:-(null!==(i=null===(r=M[a])||void 0===r?void 0:r[1])&&void 0!==i?i:1),mt:2.5,backgroundImage:"var(--bitmap-url)",backgroundPositionX:function(e){return e.spacing(-s%95*13)},backgroundPositionY:function(e){return e.spacing(-15*Math.floor(s/95))},backgroundSize:function(e){return e.spacing(1235)},textShadow:"none",lineHeight:function(e){return e.spacing(11)},fontSize:function(e){return e.spacing(16)},overflow:"hidden"},"primary"!==o?{"::after":{content:'""',position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:"var(--dither-url)",backgroundSize:function(e){return e.spacing(1)},maskImage:"var(--bitmap-url)",maskPosition:function(e){return"".concat(e.spacing(-s%95*13)," ").concat(e.spacing(-15*Math.floor(s/95)))},maskSize:function(e){return e.spacing(1235)},mixBlendMode:"darken"}}:{}),children:a})},K=function(e){var t=e.chars,n=e.sx,i=Object(g.a)(e,G);return t.length<=0?null:Object(q.jsx)(O.a,{component:"span",sx:n,children:Object(k.a)(Array(t.length).keys()).map((function(e){return Object(q.jsx)(J,Object(v.a)({char:t[e]},i),e)}))})},V=["sm","md","lg"],$=function(e){var t=e.size,n=void 0===t?"md":t,i=e.variant,a=void 0===i?"primary":i,o=e.hasHover,c=e.children,l=Object(g.a)(e,L),u=p();return Object(q.jsx)(O.a,Object(v.a)(Object(v.a)({},l),{},{sx:Object(v.a)({display:"inline-block"},l.sx),children:Object(q.jsx)(s.a,{theme:P(Math.max(u+V.indexOf(n)-2,1)),children:r.Children.map(r.Children.toArray(c),(function(e){return"string"!==typeof e?e:Object(A.layoutItemsFromString)(e,(function(e){return e.length})).map((function(e,t){return"box"===e.type?Object(q.jsx)(K,{chars:e.text,variant:a,hasHover:o,sx:{display:"inline-block"}},t):"glue"===e.type?Object(q.jsx)(K,{chars:e.text,variant:a,hasHover:o},t):null}))}))})}))},Y=["variant","disabled","children","onClick","sx"],Q=function(e){var t=e.variant,n=void 0===t?"secondary":t,i=e.disabled,r=e.children,a=e.onClick,o=e.sx,c=":hover,:focus-visible",s=(o=void 0===o?{}:o)[c],l=void 0===s?{}:s,u=Object(g.a)(o,[c].map(m.a)),d=Object(g.a)(e,Y);return Object(q.jsx)(O.a,Object(v.a)(Object(v.a)({component:"button",type:"button","data-text":"".concat(r),onClick:i?void 0:a},d),{},{sx:Object(v.a)(Object(v.a)({flexShrink:0,border:"none",m:0,py:2,background:"none"},i?{}:Object(v.a)({":hover::before,:focus-visible::before":{content:'""',display:"inline-block",backgroundImage:"url(".concat(x,")"),backgroundSize:"contain",width:function(e){return e.spacing(7.5)},height:function(e){return e.spacing(7.5)},ml:-9.5,mr:2}},B(n,Object(v.a)(Object(v.a)({},l),{},{outline:"none",animation:F})))),u),children:Object(q.jsx)($,{component:"span",variant:i?"disabled":n,hasHover:!i,children:r})}))},Z=n(34),ee=n.n(Z),te=n(46),ne=n(47),ie=n.n(ne),re=n(24),ae=n(79),oe=function(e){var t=e.id,n=e.label,i=e.helperText,r=e.required,a=e.disabled,o=e.acceptFileTypes,c=Object(re.b)(t,{subscription:{value:!0,error:!0,submitError:!0,touched:!0},type:"file",parse:function(e){return e}}),s=c.input,l=s.value,u=s.onChange,d=c.meta,b=Object(ae.a)({onDrop:function(e){return u(null===e||void 0===e?void 0:e[0])},maxFiles:1}),p=b.getRootProps,h=b.getInputProps,f=b.isDragActive;return Object(q.jsxs)(O.a,Object(v.a)(Object(v.a)({},p({onClick:function(e){return e.stopPropagation()}})),{},{sx:{display:"flex",flexDirection:"column",border:function(e){return"".concat(e.spacing(1)," dashed ").concat(e.palette.primary.main,"99")},p:4},children:[Object(q.jsxs)(O.a,{sx:{display:"flex",gap:4,alignItems:"baseline"},children:[Object(q.jsx)(Q,{component:"label",htmlFor:t,disabled:a,children:n}),Object(q.jsx)("input",Object(v.a)(Object(v.a)({id:t},h()),{},{accept:o&&o.length>1?o.join(", "):null===o||void 0===o?void 0:o[0],required:r})),Object(q.jsx)($,{size:"sm",children:f?"Drop files here to upload":l?l.name:"No file selected"})]}),((d.error||d.submitError)&&d.touched||i)&&Object(q.jsx)($,{variant:"secondary",size:"sm",sx:{mt:1,textAlign:"center"},children:(d.error||d.submitError)&&d.touched?d.submitError||d.error:i})]}))},ce=n(57),se=["img","width","height","size","sx"],le=function(e){var t,n,i=e.img,a=e.width,o=e.height,s=e.size,l=void 0===s?1:s,u=e.sx,d=Object(g.a)(e,se),b=Object(ce.a)(),p=Number(null!==(t=null===(n=b.spacing(1).match(/(\d+)/))||void 0===n?void 0:n[1])&&void 0!==t?t:1),h=Object(r.useRef)(),f=Object(r.useState)(!1),j=Object(c.a)(f,2),m=j[0],x=j[1],y=Object(r.useState)(),k=Object(c.a)(y,2),w=k[0],_=k[1],S=a||o?a:null===w||void 0===w?void 0:w[0],C=a||o?o:null===w||void 0===w?void 0:w[1];return Object(r.useEffect)((function(){return x(!1)}),[i]),i?Object(q.jsx)(O.a,Object(v.a)(Object(v.a)({ref:h,component:"img",src:i},d),{},{style:m?{width:S?S*p*l:void 0,height:C?C*p*l:void 0}:void 0,onLoad:function(){var e,t,n,i;m||(x(!0),_([null!==(e=null===(t=h.current)||void 0===t?void 0:t.clientWidth)&&void 0!==e?e:0,null!==(n=null===(i=h.current)||void 0===i?void 0:i.clientHeight)&&void 0!==n?n:0]))},sx:Object(v.a)(Object(v.a)({},u),{},{visibility:w?"visible":"hidden",objectFit:"contain"})})):null},ue=function(){var e=Object(re.c)().submit,t=Object(re.d)({subscription:{pristine:!0,values:!0}}),n=t.pristine,i=t.values;return Object(r.useEffect)((function(){!n&&e()}),[i]),null},de=n(152),be=["initialValues","onSubmit","validate","children"],pe=function(e){var t=e.initialValues,n=e.onSubmit,i=e.validate,r=e.children,a=Object(g.a)(e,be);return Object(q.jsx)(re.a,{initialValues:t,onSubmit:n,validate:i,subscription:{active:!0,submitting:!0},render:function(e){var t=e.handleSubmit;return Object(q.jsx)(de.a,Object(v.a)(Object(v.a)({component:"form",display:"flex",flexDirection:"column",onSubmit:t},a),{},{children:r}))}})},he=n(7),fe=n(77),je=n(13),ve=je.a.string().regex(/^-?\d+\.\d+$/).transform((function(e){return Number(e)})),ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je.a.number();return e.transform((function(e){return e.toFixed(6)}))},me=je.a.string().regex(/^([0-9A-F]{24})+$/).transform((function(e){var t=function(e,t,n){return Object(k.a)(Array(e.length/t).keys()).map((function(e){return e*t})).map((function(n){return e.slice(n,n+t)})).map(n)}(e,24,(function(e){return e})),n=Object(fe.a)(t),i=n[0],r=n.slice(1);return{width:I(i.slice(4,10)),height:I(i.slice(12,18)),data:r.reduce((function(e,t,n){return I(t)?Object(v.a)(Object(v.a)({},e),{},Object(he.a)({},n,t)):e}),{})}})),Oe=je.a.object({width:je.a.number(),height:je.a.number(),data:je.a.record(je.a.string())}).transform((function(e){return["5B02".concat(C(e.width,6),"00").concat(C(e.height,6),"000000")].concat(Object(k.a)(Object(k.a)(Array(e.width*e.height).keys()).map((function(t){var n;return null!==(n=e.data[t])&&void 0!==n?n:C(0,24)})))).join("")})),xe=je.a.object({0:ve}).transform((function(e){return e[0]})),ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je.a.number();return ge(e).transform((function(e){return{0:e}}))},ke=je.a.object({0:me}).transform((function(e){return null===e||void 0===e?void 0:e[0]})),we=Oe.transform((function(e){return{0:e}})),_e=je.a.record(ve).transform((function(e){return Object.values(e).reduceRight((function(e,t){return 0!==e.length||t?[t].concat(Object(k.a)(e)):[]}),[])})),Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:99,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:je.a.number();return je.a.array(ge(t)).transform((function(t){return Object(k.a)(Array(e).keys()).reduce((function(e,n){var i;return Object(v.a)(Object(v.a)({},e),{},Object(he.a)({},n,null!==(i=t[n])&&void 0!==i?i:Number(1).toFixed(6)))}),{})}))},Ce=je.a.record(me).transform((function(e){return Object.values(null!==e&&void 0!==e?e:{}).reduceRight((function(e,t){return 0!==e.length||t?[t].concat(Object(k.a)(e)):[]}),[])})),Ie=je.a.array(Oe).transform((function(e){return Object(k.a)(Array(e.length).keys()).reduce((function(t,n){var i;return Object(v.a)(Object(v.a)({},t),{},Object(he.a)({},n,null!==(i=e[n])&&void 0!==i?i:Number(0).toFixed(6)))}),{})})),Fe=je.a.object({consumable_slot_count:xe,consumables:_e,equip_gauntlet:xe,hp_slot_count:xe,inn_que_trigger:_e,inv_monster:_e,inv_quest:_e,lvlslot_auto:ke.optional(),mapdun:Ce,mapwalked:ke,npc_partsgiven:ke.optional(),npc_triggers:ke.optional(),save:je.a.object({0:ve,1:ve,2:ve,3:ve,fisher:ve,fisher_price:ve,plus:ve}),shop_gauntlet:_e,shop_monster:_e,shop_potion_recipe:_e,shop_potions:_e,shop_special:_e,special_inv:_e,specialatk_slot_count:xe,specialcharge_slot_count:xe,triggers:ke}).strict(),Ae=je.a.object({consumable_slot_count:ye(je.a.number().max(8)),consumables:Se(7),equip_gauntlet:ye(),hp_slot_count:ye(),inn_que_trigger:Se(),inv_monster:Se(),inv_quest:Se(),lvlslot_auto:we.optional(),mapdun:Ie,mapwalked:we,npc_partsgiven:we.optional(),npc_triggers:we.optional(),save:je.a.object({0:ge(),1:ge(),2:ge(),3:ge(),fisher:ge(),fisher_price:ge(),plus:ge()}),shop_gauntlet:Se(),shop_monster:Se(),shop_potion_recipe:Se(),shop_potions:Se(),shop_special:Se(),special_inv:Se(7),specialatk_slot_count:ye(),specialcharge_slot_count:ye(),triggers:we}).strict(),Ne=function(e){var t=e.setWorldData;return Object(q.jsxs)(pe,{initialValues:{file:void 0},onSubmit:function(){var e=Object(te.a)(ee.a.mark((function e(n){var i;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.file,e.prev=1,e.t0=t,e.t1=i.name,e.t2=Fe,e.t3=ie.a,e.t4=atob,e.next=9,_(i);case 9:e.t5=e.sent,e.t6=(0,e.t4)(e.t5),e.t7=e.t3.parse.call(e.t3,e.t6),e.t8=e.t2.parse.call(e.t2,e.t7),e.t9=[e.t1,e.t8],(0,e.t0)(e.t9),e.next=21;break;case 17:return e.prev=17,e.t10=e.catch(1),console.error(e.t10),e.abrupt("return",{file:"Failed to parse file"});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),validate:function(e){var t=e.file;return t?t.name.endsWith(".sav")?void 0:{file:"Wrong file type"}:{file:"Required"}},sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexGrow:1,gap:14},children:[Object(q.jsx)(le,{img:"".concat("/FightKnightEdit","/assets/logo-512.png"),height:160,sx:{aspectRatio:"1",imageRendering:"initial",my:-36}}),Object(q.jsxs)($,{textAlign:"center",children:["Start by locating your save files in"," ",Object(q.jsxs)($,{component:"span",variant:"success",children:["C:\\Users\\","{{USER_NAME}}","\\AppData\\Local\\FIGHTKNIGHT\\"]}),". Then pick a slot from one of the"," ",Object(q.jsx)($,{component:"span",variant:"success",children:"FIGHTKNIGHT_save_X"})," ","folders and select"," ",Object(q.jsx)($,{component:"span",variant:"success",children:"save_gamestate.sav"})," ","file."]}),Object(q.jsx)(oe,{id:"file",label:"Select",acceptFileTypes:[".sav"]}),Object(q.jsx)(ue,{})]})},Ee=n(156),Re=n(157),ze=n(161),We=n(162),De=n(78),He=n.n(De),Te=(n(125),n(126),n(127),function(){var e=Object(re.d)({subscription:{values:!0}}).values,t=Object(re.c)().reset,n=Object(r.useState)(!1),i=Object(c.a)(n,2),a=i[0],o=i[1],s=Object(r.useState)(JSON.stringify(e,null,2)),l=Object(c.a)(s,2),u=l[0],d=l[1],b=Object(r.useState)(!1),p=Object(c.a)(b,2),h=p[0],f=p[1],j=Object(r.useState)(),v=Object(c.a)(j,2),g=v[0],m=v[1],O=Object(r.useState)(),x=Object(c.a)(O,2),y=x[0],k=x[1];return Object(r.useEffect)((function(){d(JSON.stringify(e,null,2))}),[e]),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Q,{onClick:function(){return o(!0)},sx:{opacity:.2,transition:"opacity 0.2s",":hover,:focus-visible":{opacity:1}},children:"Edit JSON"}),Object(q.jsxs)(Ee.a,{open:a,onClose:function(){return o(!1)},fullScreen:!0,sx:{"& .error-marker":{position:"absolute",opacity:.35,backgroundColor:function(e){return e.palette.error.main}}},children:[Object(q.jsx)(Re.a,{children:Object(q.jsx)($,{children:"JSON save data"})}),Object(q.jsx)(ze.a,{sx:{display:"flex",flexDirection:"column",gap:4,p:0},children:Object(q.jsx)(He.a,{mode:"json",theme:"github",value:u,onChange:function(e){h&&f(!1),d(e)},showGutter:!0,highlightActiveLine:!0,width:"100%",height:"100%",markers:y})}),Object(q.jsxs)(We.a,{sx:{alignItems:"baseline"},children:[g?Object(q.jsx)($,{size:"sm",sx:{mr:2},children:g}):h&&Object(q.jsx)($,{size:"sm",sx:{mr:2},children:"Changes saved"}),Object(q.jsx)(Q,{onClick:function(){return o(!1)},children:"Close"}),Object(q.jsx)(Q,{variant:"success",disabled:h,onClick:function(){try{m(void 0),k([]),t(JSON.parse(u)),f(!0)}catch(c){var e,n;if(!(c instanceof SyntaxError))return;m(c.message);var i=Number(null!==(e=null===(n=c.message.match(/position (\d+)/))||void 0===n?void 0:n[1])&&void 0!==e?e:-1);if(i<0)return;var r=u.slice(0,i).split("\n"),a=r.length-1,o=r[r.length-1].length;console.log({position:i,row:a,col:o}),m("".concat(c.message," (line: ").concat(a+1,")")),k([{type:"text",className:"error-marker",startRow:a,endRow:a,startCol:o,endCol:o+1},{type:"fullLine",className:"error-marker",startRow:a,endRow:a,startCol:o,endCol:o+1}])}},children:"Save changes"})]})]})]})}),Pe=function(e){var t=e.name,n=e.reset;return Object(q.jsxs)(d.a,{sx:{position:"sticky",top:0,display:"flex",alignItems:"center",alignSelf:"stretch",zIndex:3,gap:4,p:3},children:[Object(q.jsx)($,{flexGrow:1,children:t}),Object(q.jsx)(Te,{}),Object(q.jsx)(Q,{onClick:n,children:"Discard"}),Object(q.jsx)(Q,{type:"submit",variant:"success",children:"Save"})]})},qe=function(e){var t=Object(c.a)(e.save,2),n=t[0],i=t[1],r=e.reset;return Object(q.jsx)(pe,{initialValues:i,onSubmit:function(){var e=Object(te.a)(ee.a.mark((function e(t){var i,r,a;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ie.a.stringify(Ae.parse(t)),r="data:application/octet-stream;base64,".concat(btoa(i)),e.next=4,fetch(r).then((function(e){return e.blob()}));case 4:a=e.sent,S(a,n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),sx:{display:"flex",alignItems:"center",gap:6},children:Object(q.jsx)(Pe,{name:n,reset:r})})},Ge=function(){var e=Object(r.useState)(),t=Object(c.a)(e,2),n=t[0],i=t[1],a=p(),o=Object(r.useState)(),b=Object(c.a)(o,2),v=b[0],g=b[1];Object(r.useEffect)((function(){!function(e){if("serviceWorker"in navigator){if(new URL("/FightKnightEdit",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/FightKnightEdit","/service-worker.js");h?(j(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):f(t,e)}))}}({onUpdate:function(e){g(e.waiting)}})}),[]);return Object(q.jsxs)(s.a,{theme:P(a),children:[Object(q.jsx)(l.a,{}),Object(q.jsxs)(u.a,{maxWidth:"lg",component:"main",sx:{position:"relative",display:"flex",flexDirection:"column",minHeight:"100vh",py:0},children:[n?Object(q.jsx)(qe,{save:n,reset:function(){return i(void 0)}}):Object(q.jsx)(Ne,{setWorldData:i}),v&&Object(q.jsxs)(d.a,{sx:{position:"absolute",bottom:0,display:"flex",alignItems:"center",width:"100%",zIndex:3,gap:3,p:3},children:[Object(q.jsx)($,{variant:"secondary",sx:{flexShrink:0},children:"!!!"}),Object(q.jsx)($,{size:"sm",flexGrow:1,children:"You are viewing outdated version of this app, please reload the page."}),Object(q.jsx)(Q,{onClick:function(){null===v||void 0===v||v.postMessage({type:"SKIP_WAITING"}),window.location.reload()},children:"Reload"})]})]})]})};o.a.render(Object(q.jsx)(r.StrictMode,{children:Object(q.jsx)(Ge,{})}),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.08fc78a1.chunk.js.map