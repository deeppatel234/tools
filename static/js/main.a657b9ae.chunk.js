(this.webpackJsonptools=this.webpackJsonptools||[]).push([[0],{42:function(e,t,a){e.exports=a(74)},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),o=a.n(r),l=a(18),i=a(4),s=a(17),u=a(19),d=a(3),m=a(14),p=c.a.createContext({});p.displayName="AppData";var v=p,f=a(15),b=a(12),h=a.n(b),E=a(10),j=a(33),O=a.n(j),g=a(24),N=(a(54),a(55),a(56),a(57),a(58),a(59),a(60),a(61),a(11)),C=a.n(N),x=a(16),w=(a(63),Object(n.forwardRef)((function(e,t){var a=e.children,n=e.className,r=Object(f.a)(e,["children","className"]);return c.a.createElement("svg",Object.assign({className:h()("icon",n),width:"1em",height:"1em",fill:"currentColor",focusable:"false"},r,{ref:t}),a)}))),y=Object(n.forwardRef)((function(e,t){return c.a.createElement(w,Object.assign({},e,{ref:t,viewBox:"0 0 16 16"}),c.a.createElement("path",{fillRule:"evenodd",d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}),c.a.createElement("path",{fillRule:"evenodd",d:"M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"}))})),k=function(e){return new Promise((function(t,a){var n=document.createElement("textarea");n.value=e,n.style.top="-100px",n.style.left="-100px",n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();var c=!1;try{c=document.execCommand("copy")}catch(r){}document.body.removeChild(n),c?t():a()}))},V=function(){var e=Object(x.a)(C.a.mark((function e(t){var a,n,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,e.prev=1,!(null===(n=navigator)||void 0===n||null===(c=n.clipboard)||void 0===c?void 0:c.writeText)){e.next=6;break}return e.next=5,navigator.clipboard.writeText(t);case 5:a=!0;case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:if(e.prev=10,a){e.next=15;break}return e.next=14,k(t);case 14:a=!0;case 15:e.next=19;break;case 17:e.prev=17,e.t1=e.catch(10);case 19:return e.abrupt("return",a);case 20:case"end":return e.stop()}}),e,null,[[1,8],[10,17]])})));return function(t){return e.apply(this,arguments)}}(),D=function(e){var t=e.text,a=Object(m.useToasts)().addToast,n=function(){var e=Object(x.a)(C.a.mark((function e(n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.stopPropagation(),e.next=3,V(t);case 3:e.sent?a("Text successfully copied to clipboard",{appearance:"success"}):a("Error in copy text to clipboard",{appearance:"error"});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(E.a,{content:"Copy"},c.a.createElement(y,{onClick:n}))},M=Object(n.forwardRef)((function(e,t){return c.a.createElement(w,Object.assign({},e,{ref:t,viewBox:"0 0 16 16"}),c.a.createElement("path",{fillRule:"evenodd",d:"M.5 8a.5.5 0 0 1 .5.5V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5A.5.5 0 0 1 .5 8z"}),c.a.createElement("path",{fillRule:"evenodd",d:"M5 7.5a.5.5 0 0 1 .707 0L8 9.793 10.293 7.5a.5.5 0 1 1 .707.707l-2.646 2.647a.5.5 0 0 1-.708 0L5 8.207A.5.5 0 0 1 5 7.5z"}),c.a.createElement("path",{fillRule:"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8A.5.5 0 0 1 8 1z"}))})),R=function(e){var t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download","download"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},S=function(e){var t=e.text,a=e.className,n=function(){var e=Object(x.a)(C.a.mark((function e(a){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.stopPropagation(),R(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(E.a,{content:"Download"},c.a.createElement(M,{className:a,onClick:n}))},A=Object(n.forwardRef)((function(e,t){return c.a.createElement(w,Object.assign({},e,{ref:t,viewBox:"0 0 16 16"}),c.a.createElement("path",{d:"M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z"}))})),J=a(34),B=a.n(J),z=(a(64),function(e){var t=e.data;return c.a.createElement("div",{className:"tree-view"},c.a.createElement(B.a,{name:null,theme:"railscasts",indentWidth:2,collapsed:1,src:t,enableClipboard:!0}))}),T=a(35),P=a(36),I=a(40),L=a(39),F=function(e){Object(I.a)(a,e);var t=Object(L.a)(a);function a(){return Object(T.a)(this,a),t.apply(this,arguments)}return Object(P.a)(a,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.value,n={};try{n=JSON.parse(a)}catch(r){return c.a.createElement("div",{className:"invalid-json-error"},r.message)}return t({data:n})}}]),a}(c.a.PureComponent);a(65);window.jsonlint=O.a;var U={theme:"material-ocean",lineNumbers:!0,lineWrapping:!0,matchBrackets:!0,autoCloseBrackets:!0},W=Object(i.a)(Object(i.a)({},U),{},{mode:"application/json",lint:!0,gutters:["CodeMirror-lint-markers"],styleActiveLine:!0}),H=Object(n.memo)((function(e){var t=e.title,a=e.value,r=e.onValueChange,o=e.jsonEditor,l=e.jsonModeEnabled,i=Object(f.a)(e,["title","value","onValueChange","jsonEditor","jsonModeEnabled"]),u=Object(n.useState)(l),d=Object(s.a)(u,2),p=d[0],v=d[1],b=Object(n.useState)(!1),j=Object(s.a)(b,2),O=j[0],N=j[1],C=Object(m.useToasts)().addToast;return c.a.createElement("div",{className:"editor-wrapper"},c.a.createElement("div",{className:"editor-header"},c.a.createElement("h3",{className:"title"},t),c.a.createElement("div",{className:"actions"},o?c.a.createElement(c.a.Fragment,null,p?c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{content:"JSON Formate"},c.a.createElement("span",{className:"action-item",onClick:function(){try{r(JSON.stringify(JSON.parse(a),null,2))}catch(e){C("Invalid JSON data",{appearance:"error"})}}},"Beautify")),c.a.createElement(E.a,{content:"JSON Tree View"},c.a.createElement(A,{className:h()("action-item",{active:O}),onClick:function(){N(!O)}}))):null,l?null:c.a.createElement(E.a,{content:"JSON Mode"},c.a.createElement("span",{className:h()("action-item",{active:p}),onClick:function(){v(!p)}},"JSON"))):null,c.a.createElement(S,{className:"action-item",text:a}),c.a.createElement(D,{text:a}))),p?c.a.createElement(c.a.Fragment,null,O?c.a.createElement(F,{value:a},(function(e){var t=e.data;return c.a.createElement(z,{data:t})})):c.a.createElement(g.Controlled,Object.assign({key:"json-editor"},i,{options:W,value:a,onBeforeChange:function(e,t,a){r(a)}}))):c.a.createElement(g.Controlled,Object.assign({key:"text-editor"},i,{options:U,value:a,onBeforeChange:function(e,t,a){r(a)}})))}));H.defaultProps={jsonEditor:!1,jsonModeEnabled:!1};var $=H,q=(a(66),function(e){var t=e.children,a=e.outline,n=e.className,r=Object(f.a)(e,["children","outline","className"]);return c.a.createElement("button",Object.assign({className:h()({button:!0,outline:a},n)},r),t)});q.defaultProps={outline:!1};var G=q,K=function(e){return c.a.createElement(w,Object.assign({},e,{viewBox:"0 0 16 16"}),c.a.createElement("path",{fillRule:"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}))},Q=function(e){return c.a.createElement(w,Object.assign({},e,{viewBox:"0 0 16 16"}),c.a.createElement("path",{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}))},X=(a(67),function(){var e=Object(n.useContext)(v),t=e.appData,a=e.onChangeAppData,r=t.uri||{},o=r.decodedData,l=void 0===o?"":o,s=r.encodedData,u=void 0===s?"":s,d=function(e){a("uri",Object(i.a)(Object(i.a)({},r),{},{encodedData:e}))},m=function(e){a("uri",Object(i.a)(Object(i.a)({},r),{},{decodedData:e}))};return c.a.createElement("section",{className:"app uri-app"},c.a.createElement("div",{className:"uri-section"},c.a.createElement($,{title:"Encoded",value:u,onValueChange:d})),c.a.createElement("div",{className:"action-section"},c.a.createElement(G,{onClick:function(){d(encodeURIComponent(l))}},c.a.createElement(K,{className:"button-icon-left"})," Encode"),c.a.createElement(G,{onClick:function(){m(decodeURIComponent(u))}},"Decode ",c.a.createElement(Q,{className:"button-icon-right"}))),c.a.createElement("div",{className:"uri-section"},c.a.createElement($,{title:"Decoded",value:l,onValueChange:m,jsonEditor:!0})))}),Y=(a(68),function(){var e=Object(n.useContext)(v),t=e.appData,a=e.onChangeAppData,r=t.json||{},o=r.text;return c.a.createElement("section",{className:"app json-app"},c.a.createElement($,{title:"JSON Editor",value:o,onValueChange:function(e){a("json",Object(i.a)(Object(i.a)({},r),{},{text:e}))},jsonEditor:!0,jsonModeEnabled:!0,enableJSONLint:!0}))}),Z=(a(69),[{label:"URI",url:"uri"},{label:"JSON",url:"json"}]),_=function(){return c.a.createElement("aside",{className:"sidebar"},Z.map((function(e){var t=e.label,a=e.url;return c.a.createElement(u.b,{key:a,className:"menu-item",to:a},t)})))};var ee=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],r=t[1];return c.a.createElement(u.a,null,c.a.createElement(v.Provider,{value:{appData:a,onChangeAppData:function(e,t){r(Object(i.a)(Object(i.a)({},a),{},Object(l.a)({},e,t)))}}},c.a.createElement(m.ToastProvider,{placement:"bottom-right",autoDismiss:!0,autoDismissTimeout:4e3},c.a.createElement(_,null),c.a.createElement(d.d,null,c.a.createElement(d.b,{path:"/uri"},c.a.createElement(X,null)),c.a.createElement(d.b,{path:"/json"},c.a.createElement(Y,null)),c.a.createElement(d.a,{to:"/uri"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=a(38),ae=(a(72),a(73),document.getElementById("root"));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(ee,null)),ae),Object(te.a)(ae,{debugReducer:!1}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.a657b9ae.chunk.js.map