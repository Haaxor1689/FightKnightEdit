(this["webpackJsonpfight-knight-edit"]=this["webpackJsonpfight-knight-edit"]||[]).push([[0],{114:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var r,i=n(0),a=n(29),o=n.n(a),c=n(8),s=n(158),l=n(163),u=n(164),d=n(160),b=n(159),p=function(){var e=Object(b.a)("(max-width:1366px)"),t=Object(b.a)("(max-width:1920px)");return e?3:t?4:5},h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),f=function(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!==n&&(n.onstatechange=function(){var r,i;"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),null===t||void 0===t||null===(r=t.onUpdate)||void 0===r||r.call(t,e)):(console.log("Content is cached for offline use."),null===t||void 0===t||null===(i=t.onSuccess)||void 0===i||i.call(t,e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))},j=function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!==r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))},m=n(6),v=n(21),g=n(80),O=n(151),x=n.p+"static/media/sArrow_0.414d5640.png",y=n(74),k=n(12),w=n(25),_=(n(149),function(e){return new Promise((function(t,n){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){var e,n;return t(null!==(e=null===(n=r.result.match(/;base64,(.*)/))||void 0===n?void 0:n[1])&&void 0!==e?e:"")},r.onerror=function(e){return n(e)}}))}),S=function(e,t){var n=window.URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,r.click()},I=function(e,t){return function(e,t){return(Object(k.a)(Array(t).keys()).map((function(){return"0"})).join("")+e).slice(-t)}(e.toString(16),t).toUpperCase()},C=function(e){return parseInt("0x".concat(e))},A=Object(w.b)(r||(r=Object(y.a)(["\n\t8% {\n\t\ttransform: translateX(5%);\n\t}\n\t25% {\n\t\ttransform: translateX(-5%);\n\t}\n\t41% {\n\t\ttransform: translateX(3%);\n\t}\n\t58% {\n\t\ttransform: translateX(-3%);\n\t}\n\t75% {\n\t\ttransform: translateX(2%);\n\t}\n\t91% {\n\t\ttransform: translateX(-2%);\n\t}\n"]))),F=n(75),N=n.p+"static/media/sFont_primary.1dbb1c01.png",E=n.p+"static/media/sFont_secondary.8fa0a812.png",R=n.p+"static/media/dither.f770c8f5.png",z=n(60),W=(n(114),n.p+"static/media/sOpening_17.aba4b902.png"),D=function(e){return Object(z.a)({palette:{primary:{main:"#fedd00"},secondary:{main:"#fe2300"},background:{default:"#2c0b32"},mode:"dark"},typography:{fontFamily:'"Nintendo DS BIOS", sans-serif'},spacing:e,components:{MuiCssBaseline:{styleOverrides:{"*":{imageRendering:"pixelated"},body:{position:"relative"},"body:before":{content:'" "',position:"absolute",bottom:0,right:0,height:"100%",width:"100%",zIndex:-1,opacity:.2,backgroundImage:"url(".concat(W,")"),backgroundPosition:"bottom right",backgroundSize:"cover",filter:"blur(10px)",mixBlendMode:"hard-light"}}}}})},H=n(1),T=["chars","sx"],P=["size","variant","hasHover","children"],q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"--bitmap-url":"url(".concat(E,")"),"--dither-url":"url(".concat(R,")"),":hover,:focus-visible":Object(m.a)(Object(m.a)({},e),{},{"--bitmap-url":"url(".concat(N,")"),"--dither-url":"none"})}},G={" ":[3,3],"!":[1,3],'"':[2,4],"'":[2,6],"(":[1,3],")":[1,3],",":[1,3],".":[1,3],"/":[1,2],1:[1,2],":":[1,3],";":[1,3],I:[0,2],T:[2,2],"[":[1,3],"]":[1,3],_:[2,2],"`":[2,2],i:[2,4],j:[3,2],k:[1,2],l:[1,3],t:[1,2],"|":[1,5]},L=function(e){var t,n,r,i,a=e.char,o=e.variant,c=e.hasHover,s=a.charCodeAt(0)-32;return"\n"===a?Object(H.jsx)("br",{}):s<0||s>223?null:Object(H.jsx)(O.a,{component:"span",sx:Object(m.a)(Object(m.a)({},c?{}:{"--bitmap-url":"url(".concat("primary"===o?N:E,")"),"--dither-url":"url(".concat(R,")")}),{},{position:"relative",display:"inline-block",width:function(e){return e.spacing(9)},height:function(e){return e.spacing(14)},whiteSpace:"pre",color:"transparent",textAlign:"center",pl:1,mb:-3,ml:-(null!==(t=null===(n=G[a])||void 0===n?void 0:n[0])&&void 0!==t?t:1),mr:-(null!==(r=null===(i=G[a])||void 0===i?void 0:i[1])&&void 0!==r?r:1),mt:2.5,backgroundImage:"var(--bitmap-url)",backgroundPositionX:function(e){return e.spacing(-s%95*13)},backgroundPositionY:function(e){return e.spacing(-15*Math.floor(s/95))},backgroundSize:function(e){return e.spacing(1235)},textShadow:"none",lineHeight:function(e){return e.spacing(11)},fontSize:function(e){return e.spacing(16)},overflow:"hidden"},"secondary"===o?{"::after":{content:'""',position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:"var(--dither-url)",maskImage:"var(--bitmap-url)",maskPosition:function(e){return"".concat(e.spacing(-s%95*13)," ").concat(e.spacing(-15*Math.floor(s/95)))},maskSize:function(e){return e.spacing(1235)},mixBlendMode:"darken"}}:{}),children:a})},M=function(e){var t=e.chars,n=e.sx,r=Object(v.a)(e,T);return t.length<=0?null:Object(H.jsx)(O.a,{component:"span",sx:n,children:Object(k.a)(Array(t.length).keys()).map((function(e){return Object(H.jsx)(L,Object(m.a)({char:t[e]},r),e)}))})},U=["sm","md","lg"],X=function(e){var t=e.size,n=void 0===t?"md":t,r=e.variant,a=void 0===r?"primary":r,o=e.hasHover,c=e.children,l=Object(v.a)(e,P),u=p();return Object(H.jsx)(O.a,Object(m.a)(Object(m.a)({},l),{},{sx:Object(m.a)({display:"inline-block"},l.sx),children:Object(H.jsx)(s.a,{theme:D(Math.max(u+U.indexOf(n)-2,1)),children:i.Children.map(i.Children.toArray(c),(function(e){return"string"!==typeof e?e:Object(F.layoutItemsFromString)(e,(function(e){return e.length})).map((function(e,t){return"box"===e.type?Object(H.jsx)(M,{chars:e.text,variant:a,hasHover:o,sx:{display:"inline-block"}},t):"glue"===e.type?Object(H.jsx)(M,{chars:e.text,variant:a,hasHover:o},t):null}))}))})}))},B=["children","sx"],J=function(e){var t=e.children,n=e.sx,r=":hover,:focus-visible",i=(n=void 0===n?{}:n)[r],a=void 0===i?{}:i,o=Object(v.a)(n,[r].map(g.a)),c=Object(v.a)(e,B);return Object(H.jsx)(O.a,Object(m.a)(Object(m.a)({component:"button",type:"button","data-text":"".concat(t)},c),{},{sx:Object(m.a)(Object(m.a)({flexShrink:0,border:"none",m:0,py:2,background:"none",":hover::before,:focus-visible::before":{content:'""',display:"inline-block",backgroundImage:"url(".concat(x,")"),backgroundSize:"contain",width:function(e){return e.spacing(7.5)},height:function(e){return e.spacing(7.5)},ml:-9.5,mr:2}},q(Object(m.a)(Object(m.a)({},a),{},{outline:"none",animation:"".concat(A," 1s ease-in-out")}))),o),children:Object(H.jsx)(X,{component:"span",variant:"secondary",hasHover:!0,children:t})}))},K=n(34),V=n.n(K),$=n(46),Y=n(47),Q=n.n(Y),Z=n(24),ee=n(79),te=function(e){var t=e.id,n=e.label,r=e.helperText,i=e.required,a=e.disabled,o=e.acceptFileTypes,c=Object(Z.b)(t,{subscription:{value:!0,error:!0,submitError:!0,touched:!0},type:"file",parse:function(e){return e}}),s=c.input,l=s.value,u=s.onChange,d=c.meta,b=Object(ee.a)({onDrop:function(e){return u(null===e||void 0===e?void 0:e[0])},maxFiles:1}),p=b.getRootProps,h=b.getInputProps,f=b.isDragActive;return Object(H.jsxs)(O.a,Object(m.a)(Object(m.a)({},p({onClick:function(e){return e.stopPropagation()}})),{},{sx:{display:"flex",flexDirection:"column",border:function(e){return"".concat(e.spacing(1)," dashed ").concat(e.palette.primary.main,"99")},p:4},children:[Object(H.jsxs)(O.a,{sx:{display:"flex",gap:4,alignItems:"baseline"},children:[Object(H.jsx)(J,{component:"label",htmlFor:t,disabled:a,children:n}),Object(H.jsx)("input",Object(m.a)(Object(m.a)({id:t},h()),{},{accept:o&&o.length>1?o.join(", "):null===o||void 0===o?void 0:o[0],required:i})),Object(H.jsx)(X,{size:"sm",children:f?"Drop files here to upload":l?l.name:"No file selected"})]}),((d.error||d.submitError)&&d.touched||r)&&Object(H.jsx)(X,{variant:"secondary",size:"sm",sx:{mt:1,textAlign:"center"},children:(d.error||d.submitError)&&d.touched?d.submitError||d.error:r})]}))},ne=n(57),re=["img","width","height","size","sx"],ie=function(e){var t,n,r=e.img,a=e.width,o=e.height,s=e.size,l=void 0===s?1:s,u=e.sx,d=Object(v.a)(e,re),b=Object(ne.a)(),p=Number(null!==(t=null===(n=b.spacing(1).match(/(\d+)/))||void 0===n?void 0:n[1])&&void 0!==t?t:1),h=Object(i.useRef)(),f=Object(i.useState)(!1),j=Object(c.a)(f,2),g=j[0],x=j[1],y=Object(i.useState)(),k=Object(c.a)(y,2),w=k[0],_=k[1],S=a||o?a:null===w||void 0===w?void 0:w[0],I=a||o?o:null===w||void 0===w?void 0:w[1];return Object(i.useEffect)((function(){return x(!1)}),[r]),r?Object(H.jsx)(O.a,Object(m.a)(Object(m.a)({ref:h,component:"img",src:r},d),{},{style:g?{width:S?S*p*l:void 0,height:I?I*p*l:void 0}:void 0,onLoad:function(){var e,t,n,r;g||(x(!0),_([null!==(e=null===(t=h.current)||void 0===t?void 0:t.clientWidth)&&void 0!==e?e:0,null!==(n=null===(r=h.current)||void 0===r?void 0:r.clientHeight)&&void 0!==n?n:0]))},sx:Object(m.a)(Object(m.a)({},u),{},{visibility:w?"visible":"hidden",objectFit:"contain"})})):null},ae=function(){var e=Object(Z.c)().submit,t=Object(Z.d)({subscription:{pristine:!0,values:!0}}),n=t.pristine,r=t.values;return Object(i.useEffect)((function(){!n&&e()}),[r]),null},oe=n(152),ce=["initialValues","onSubmit","validate","children"],se=function(e){var t=e.initialValues,n=e.onSubmit,r=e.validate,i=e.children,a=Object(v.a)(e,ce);return Object(H.jsx)(Z.a,{initialValues:t,onSubmit:n,validate:r,subscription:{active:!0,submitting:!0},render:function(e){var t=e.handleSubmit;return Object(H.jsx)(oe.a,Object(m.a)(Object(m.a)({component:"form",display:"flex",flexDirection:"column",onSubmit:t},a),{},{children:i}))}})},le=n(7),ue=n(77),de=n(13),be=de.a.string().regex(/^-?\d+\.\d+$/).transform((function(e){return Number(e)})),pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de.a.number();return e.transform((function(e){return e.toFixed(6)}))},he=de.a.string().regex(/^([0-9A-F]{24})+$/).transform((function(e){var t=function(e,t,n){return Object(k.a)(Array(e.length/t).keys()).map((function(e){return e*t})).map((function(n){return e.slice(n,n+t)})).map(n)}(e,24,(function(e){return e})),n=Object(ue.a)(t),r=n[0],i=n.slice(1);return{width:C(r.slice(4,10)),height:C(r.slice(12,18)),data:i.reduce((function(e,t,n){return C(t)?Object(m.a)(Object(m.a)({},e),{},Object(le.a)({},n,t)):e}),{})}})),fe=de.a.object({width:de.a.number(),height:de.a.number(),data:de.a.record(de.a.string())}).transform((function(e){return["5B02".concat(I(e.width,6),"00").concat(I(e.height,6),"000000")].concat(Object(k.a)(Object(k.a)(Array(e.width*e.height).keys()).map((function(t){var n;return null!==(n=e.data[t])&&void 0!==n?n:I(0,24)})))).join("")})),je=de.a.object({0:be}).transform((function(e){return e[0]})),me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de.a.number();return pe(e).transform((function(e){return{0:e}}))},ve=de.a.object({0:he}).transform((function(e){return null===e||void 0===e?void 0:e[0]})),ge=fe.transform((function(e){return{0:e}})),Oe=de.a.record(be).transform((function(e){return Object.values(e).reduceRight((function(e,t){return 0!==e.length||t?[t].concat(Object(k.a)(e)):[]}),[])})),xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:99,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:de.a.number();return de.a.array(pe(t)).transform((function(t){return Object(k.a)(Array(e).keys()).reduce((function(e,n){var r;return Object(m.a)(Object(m.a)({},e),{},Object(le.a)({},n,null!==(r=t[n])&&void 0!==r?r:Number(1).toFixed(6)))}),{})}))},ye=de.a.record(he).transform((function(e){return Object.values(null!==e&&void 0!==e?e:{}).reduceRight((function(e,t){return 0!==e.length||t?[t].concat(Object(k.a)(e)):[]}),[])})),ke=de.a.array(fe).transform((function(e){return Object(k.a)(Array(e.length).keys()).reduce((function(t,n){var r;return Object(m.a)(Object(m.a)({},t),{},Object(le.a)({},n,null!==(r=e[n])&&void 0!==r?r:Number(0).toFixed(6)))}),{})})),we=de.a.object({consumable_slot_count:je,consumables:Oe,equip_gauntlet:je,hp_slot_count:je,inn_que_trigger:Oe,inv_monster:Oe,inv_quest:Oe,lvlslot_auto:ve.optional(),mapdun:ye,mapwalked:ve,npc_partsgiven:ve.optional(),npc_triggers:ve.optional(),save:de.a.object({0:be,1:be,2:be,3:be,fisher:be,fisher_price:be,plus:be}),shop_gauntlet:Oe,shop_monster:Oe,shop_potion_recipe:Oe,shop_potions:Oe,shop_special:Oe,special_inv:Oe,specialatk_slot_count:je,specialcharge_slot_count:je,triggers:ve}).strict(),_e=de.a.object({consumable_slot_count:me(de.a.number().max(8)),consumables:xe(7),equip_gauntlet:me(),hp_slot_count:me(),inn_que_trigger:xe(),inv_monster:xe(),inv_quest:xe(),lvlslot_auto:ge.optional(),mapdun:ke,mapwalked:ge,npc_partsgiven:ge.optional(),npc_triggers:ge.optional(),save:de.a.object({0:pe(),1:pe(),2:pe(),3:pe(),fisher:pe(),fisher_price:pe(),plus:pe()}),shop_gauntlet:xe(),shop_monster:xe(),shop_potion_recipe:xe(),shop_potions:xe(),shop_special:xe(),special_inv:xe(7),specialatk_slot_count:me(),specialcharge_slot_count:me(),triggers:ge}).strict(),Se=function(e){var t=e.setWorldData;return Object(H.jsxs)(se,{initialValues:{file:void 0},onSubmit:function(){var e=Object($.a)(V.a.mark((function e(n){var r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.file,e.prev=1,e.t0=t,e.t1=r.name,e.t2=we,e.t3=Q.a,e.t4=atob,e.next=9,_(r);case 9:e.t5=e.sent,e.t6=(0,e.t4)(e.t5),e.t7=e.t3.parse.call(e.t3,e.t6),e.t8=e.t2.parse.call(e.t2,e.t7),e.t9=[e.t1,e.t8],(0,e.t0)(e.t9),e.next=21;break;case 17:return e.prev=17,e.t10=e.catch(1),console.error(e.t10),e.abrupt("return",{file:"Failed to parse file"});case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),validate:function(e){var t=e.file;return t?t.name.endsWith(".sav")?void 0:{file:"Wrong file type"}:{file:"Required"}},sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexGrow:1,gap:14},children:[Object(H.jsx)(ie,{img:"".concat("/FightKnightEdit","/assets/logo-512.png"),height:160,sx:{aspectRatio:"1",imageRendering:"initial",my:-36}}),Object(H.jsxs)(X,{textAlign:"center",children:["Start by locating your save files in"," ",Object(H.jsxs)(X,{component:"span",variant:"secondary",children:["C:\\Users\\","{{USER_NAME}}","\\AppData\\Local\\FIGHTKNIGHT\\"]}),". Then pick a slot from one of the"," ",Object(H.jsx)(X,{component:"span",variant:"secondary",children:"FIGHTKNIGHT_save_X"})," ","folders and select"," ",Object(H.jsx)(X,{component:"span",variant:"secondary",children:"save_gamestate.sav"})," ","file."]}),Object(H.jsx)(te,{id:"file",label:"Select",acceptFileTypes:[".sav"]}),Object(H.jsx)(ae,{})]})},Ie=n(156),Ce=n(157),Ae=n(161),Fe=n(162),Ne=n(78),Ee=n.n(Ne),Re=(n(125),n(126),n(127),function(){var e=Object(Z.d)({subscription:{values:!0}}).values,t=Object(Z.c)().reset,n=Object(i.useState)(!1),r=Object(c.a)(n,2),a=r[0],o=r[1],s=Object(i.useState)(JSON.stringify(e,null,2)),l=Object(c.a)(s,2),u=l[0],d=l[1],b=Object(i.useState)(!1),p=Object(c.a)(b,2),h=p[0],f=p[1],j=Object(i.useState)(),m=Object(c.a)(j,2),v=m[0],g=m[1],O=Object(i.useState)(),x=Object(c.a)(O,2),y=x[0],k=x[1];return Object(i.useEffect)((function(){d(JSON.stringify(e,null,2))}),[e]),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(J,{onClick:function(){return o(!0)},sx:{opacity:.2,transition:"opacity 0.2s",":hover,:focus-visible":{opacity:1}},children:"Edit JSON"}),Object(H.jsxs)(Ie.a,{open:a,onClose:function(){return o(!1)},fullScreen:!0,sx:{"& .error-marker":{position:"absolute",opacity:.35,backgroundColor:function(e){return e.palette.error.main}}},children:[Object(H.jsx)(Ce.a,{children:Object(H.jsx)(X,{children:"JSON save data"})}),Object(H.jsx)(Ae.a,{sx:{display:"flex",flexDirection:"column",gap:4,p:0},children:Object(H.jsx)(Ee.a,{mode:"json",theme:"github",value:u,onChange:function(e){h&&f(!1),d(e)},showGutter:!0,highlightActiveLine:!0,width:"100%",height:"100%",markers:y})}),Object(H.jsxs)(Fe.a,{sx:{alignItems:"baseline"},children:[v?Object(H.jsx)(X,{size:"sm",sx:{mr:2},children:v}):h&&Object(H.jsx)(X,{size:"sm",sx:{mr:2},children:"Changes saved"}),Object(H.jsx)(J,{onClick:function(){return o(!1)},children:"Close"}),Object(H.jsx)(J,{disabled:h,onClick:function(){try{g(void 0),k([]),t(JSON.parse(u)),f(!0)}catch(c){var e,n;if(!(c instanceof SyntaxError))return;g(c.message);var r=Number(null!==(e=null===(n=c.message.match(/position (\d+)/))||void 0===n?void 0:n[1])&&void 0!==e?e:-1);if(r<0)return;var i=u.slice(0,r).split("\n"),a=i.length-1,o=i[i.length-1].length;console.log({position:r,row:a,col:o}),g("".concat(c.message," (line: ").concat(a+1,")")),k([{type:"text",className:"error-marker",startRow:a,endRow:a,startCol:o,endCol:o+1},{type:"fullLine",className:"error-marker",startRow:a,endRow:a,startCol:o,endCol:o+1}])}},children:"Save changes"})]})]})]})}),ze=function(e){var t=e.name,n=e.reset;return Object(H.jsxs)(d.a,{sx:{position:"sticky",top:0,display:"flex",alignItems:"center",alignSelf:"stretch",zIndex:3,gap:3,p:3},children:[Object(H.jsx)(X,{flexGrow:1,children:t}),Object(H.jsx)(Re,{}),Object(H.jsx)(J,{onClick:n,children:"Discard"}),Object(H.jsx)(J,{type:"submit",children:"Save"})]})},We=function(e){var t=Object(c.a)(e.save,2),n=t[0],r=t[1],i=e.reset;return Object(H.jsx)(se,{initialValues:r,onSubmit:function(){var e=Object($.a)(V.a.mark((function e(t){var r,i,a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Q.a.stringify(_e.parse(t)),i="data:application/octet-stream;base64,".concat(btoa(r)),e.next=4,fetch(i).then((function(e){return e.blob()}));case 4:a=e.sent,S(a,n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),sx:{display:"flex",alignItems:"center",gap:6},children:Object(H.jsx)(ze,{name:n,reset:i})})},De=function(){var e=Object(i.useState)(),t=Object(c.a)(e,2),n=t[0],r=t[1],a=p(),o=Object(i.useState)(),b=Object(c.a)(o,2),m=b[0],v=b[1];Object(i.useEffect)((function(){!function(e){if("serviceWorker"in navigator){if(new URL("/FightKnightEdit",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/FightKnightEdit","/service-worker.js");h?(j(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):f(t,e)}))}}({onUpdate:function(e){v(e.waiting)}})}),[]);return Object(H.jsxs)(s.a,{theme:D(a),children:[Object(H.jsx)(l.a,{}),Object(H.jsxs)(u.a,{maxWidth:"lg",component:"main",sx:{position:"relative",display:"flex",flexDirection:"column",minHeight:"100vh",py:0},children:[n?Object(H.jsx)(We,{save:n,reset:function(){return r(void 0)}}):Object(H.jsx)(Se,{setWorldData:r}),m&&Object(H.jsxs)(d.a,{sx:{position:"absolute",bottom:0,display:"flex",alignItems:"center",width:"100%",zIndex:3,gap:3,p:3},children:[Object(H.jsx)(X,{variant:"secondary",sx:{flexShrink:0},children:"!!!"}),Object(H.jsx)(X,{size:"sm",flexGrow:1,children:"You are viewing outdated version of this app, please reload the page."}),Object(H.jsx)(J,{onClick:function(){null===m||void 0===m||m.postMessage({type:"SKIP_WAITING"}),window.location.reload()},children:"Reload"})]})]})]})};o.a.render(Object(H.jsx)(i.StrictMode,{children:Object(H.jsx)(De,{})}),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.aea83648.chunk.js.map