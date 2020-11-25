(this["webpackJsonpwidget-page"]=this["webpackJsonpwidget-page"]||[]).push([[0],{100:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(0),r=n.n(c),i=n(12),s=n.n(i),o=(n(93),n(163)),l=n(21),j=Object(l.a)(),u=n(22),b=n(4),d=n(170),O=n(8),h=n(151),g=n(152),x=n(145),m=n(153),f=n(154),p=n(155),v=n(156),N=n(157),y=n(76),S=n(71),k=n.n(S),C=n(34),w=n(140),I=n(143),F=n(165),D=n(144),T=n(70),B=n.n(T),J=function(e){var t=Object(C.a)({},e),n=t.title,c=t.titleVariant,r=t.additionalButtonComponent,i=t.callback;return Object(a.jsx)(w.a,{container:!0,spacing:3,children:Object(a.jsxs)(w.a,{item:!0,xs:12,children:[Object(a.jsxs)(w.a,{container:!0,justify:"space-between",children:[Object(a.jsx)(y.a,{variant:c||"h4",align:"left",display:"inline",children:n}),i&&Object(a.jsx)("div",{style:{display:"-webkit-box"},children:r||Object(a.jsx)(I.a,{startIcon:Object(a.jsx)(B.a,{}),variant:"contained",color:"primary",onClick:i,children:"Add New"})})]}),Object(a.jsx)(F.a,{py:2,children:Object(a.jsx)(D.a,{})})]})})},L=n(169),A=n(147),H=n(148),P=n(149),q=n(150),E=function(e){var t=Object(C.a)({},e),n=t.open,c=t.onYesHandler,r=t.onNoHandler;return Object(a.jsxs)(L.a,{open:n,onClose:r,children:[Object(a.jsx)(A.a,{children:"Delete Confirmation"}),Object(a.jsx)(H.a,{children:Object(a.jsx)(P.a,{children:"Are you sure you want to delete?"})}),Object(a.jsxs)(q.a,{children:[Object(a.jsx)(I.a,{onClick:r,color:"default",children:"No"}),Object(a.jsx)(I.a,{onClick:c,color:"primary",children:"Yes"})]})]})},Y="/",z="/add-details",W=Object(b.a)((function(e){return Object(d.a)({head:{backgroundColor:Object(O.c)(e.palette.common.black,.15),color:e.palette.common.black},body:{fontSize:20}})}))(h.a),M=function(){var e=r.a.useState(!1),t=Object(u.a)(e,2),n=t[0],i=t[1],s=r.a.useState(0),o=Object(u.a)(s,2),l=o[0],b=o[1],d=r.a.useState([]),O=Object(u.a)(d,2),S=O[0],C=O[1];Object(c.useEffect)((function(){var e=localStorage.getItem("languageData")?JSON.parse(localStorage.getItem("languageData")||""):[];C(e)}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(J,{title:"Linguistic Details",callback:function(){return j.push(z)}}),Object(a.jsx)(g.a,{component:x.a,children:Object(a.jsxs)(m.a,{"aria-label":"simple table",children:[Object(a.jsx)(f.a,{children:Object(a.jsxs)(p.a,{children:[Object(a.jsx)(W,{children:"Name"}),Object(a.jsx)(W,{align:"right",children:"Language"}),Object(a.jsx)(W,{})]})}),Object(a.jsxs)(v.a,{children:[S.map((function(e,t){return Object(a.jsxs)(p.a,{children:[Object(a.jsx)(h.a,{component:"th",scope:"row",children:e.name}),Object(a.jsx)(h.a,{align:"right",children:e.language}),Object(a.jsx)(h.a,{align:"right",children:Object(a.jsx)(N.a,{color:"secondary",onClick:function(){i(!0),b(t)},children:Object(a.jsx)(k.a,{})})})]},e.name)})),!(null===S||void 0===S?void 0:S.length)&&Object(a.jsx)(p.a,{children:Object(a.jsx)(h.a,{component:"th",scope:"row",children:Object(a.jsx)(y.a,{variant:"body1",gutterBottom:!0,children:"No data available"})})},"none")]})]})}),n&&Object(a.jsx)(E,{open:n,onYesHandler:function(){var e=S.filter((function(e,t){return t!==l}));C(e),localStorage.setItem("languageData",JSON.stringify(e)),i(!1)},onNoHandler:function(){return i(!1)}})]})},R=n(74),U=n(158),V=n(164),G=n(159),K=n(171),Q=n(160),X=n(168),Z=n(161),$=n(162),_=n(166),ee=["Mandarin Chinese","Spanish","English","Hindi/Urdu","Arabic","Bengali","Portuguese","Russian","Japanese","German","Javanese","Punjabi","Wu","French","Telugu","Vietnamese","Marathi","Korean","Tamil","Italian","Turkish","Cantonese/Yue"],te=function(e){var t=e.change,n=e.val,c=e.error;return Object(a.jsx)(_.a,{value:""===n?null:n,onChange:t,autoHighlight:!0,options:ee,renderInput:function(e){return Object(a.jsx)(V.a,Object(C.a)(Object(C.a)({},e),{},{margin:"dense",size:"medium",required:!0,label:"Language",error:c,helperText:c&&"Please select your language.",variant:"outlined"}))}})},ne=function(e,t){return{name:e,language:t}},ae=(n(100),Object(U.a)((function(e){return Object(d.a)({root:{width:"100%"},button:{marginRight:e.spacing(1)},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}})}))),ce=function(){var e=ae(),t=Object(c.useState)(0),n=Object(u.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)(""),o=Object(u.a)(s,2),l=o[0],b=o[1],d=Object(c.useState)(""),O=Object(u.a)(d,2),h=O[0],g=O[1],m=Object(c.useState)(""),f=Object(u.a)(m,2),p=f[0],v=f[1],N=["Add name","Select language"];Object(c.useEffect)((function(){v("")}),[l,h]);var S=function(){var e=localStorage.getItem("languageData");e=e?JSON.parse(e):[],e=[].concat(Object(R.a)(e),[ne(l,h)]),localStorage.setItem("languageData",JSON.stringify(e))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(J,{title:"Add New"}),Object(a.jsxs)(G.a,{className:e.root,component:x.a,children:[Object(a.jsx)(K.a,{alternativeLabel:!0,activeStep:r,children:N.map((function(e){return Object(a.jsx)(Q.a,{children:Object(a.jsx)(X.a,{children:e})},e)}))}),Object(a.jsx)("div",{children:r===N.length?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"form-content",children:Object(a.jsx)(y.a,{className:e.instructions,children:"Added Successfully"})}),Object(a.jsx)("div",{className:"form-actions",children:Object(a.jsx)(I.a,{variant:"contained",color:"primary",onClick:function(){i(0),j.goBack()},className:e.button,children:"Done"})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"form-content",children:function(e){switch(e){case 0:return Object(a.jsx)(V.a,{value:l,label:"Name",variant:"outlined",size:"small",fullWidth:!0,required:!0,error:!!p,helperText:p,onChange:function(e){return b(e.target.value)}});case 1:return Object(a.jsx)(te,{error:!!p,val:h,change:function(e,t){return g(t)}});case 2:return;default:return"Unknown"}}(r)}),Object(a.jsxs)("div",{className:"form-actions",children:[Object(a.jsx)(I.a,{startIcon:Object(a.jsx)(Z.a,{}),color:"primary",disabled:0===r,onClick:function(){i((function(e){return e-1}))},className:e.button,children:"Back"}),Object(a.jsx)(I.a,{startIcon:Object(a.jsx)($.a,{}),variant:"contained",color:"primary",onClick:function(){switch(r){case 0:if(!l)return void v("Name is required");break;case 1:if(!h)return void v("Language is required");S()}i((function(e){return e+1}))},className:e.button,children:r===N.length-1?"Finish":"Next"})]})]})})]})]})},re=function(){return Object(a.jsx)("div",{style:{marginTop:"10%"},children:Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:Y,render:function(){return Object(a.jsx)(M,{})}}),Object(a.jsx)(o.a,{exact:!0,path:z,render:function(){return Object(a.jsx)(ce,{})}})]})})},ie=(n(104),function(){return Object(a.jsx)(o.b,{history:j,children:Object(a.jsx)(G.a,{maxWidth:"sm",children:Object(a.jsx)(re,{})})})}),se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,174)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(ie,{}),document.getElementById("root")),se()},93:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.6acb7c7b.chunk.js.map