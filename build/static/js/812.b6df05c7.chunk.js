"use strict";(self.webpackChunkcvwo_2024_winter_assignment_frontend=self.webpackChunkcvwo_2024_winter_assignment_frontend||[]).push([[812],{812:(e,t,l)=>{l.r(t),l.d(t,{default:()=>u});var s=l(791),a=l(294),r=l(600),n=l(844),o=l(352),i=l(630),d=l(184);function c(e){if(!("value"in e))throw new Error("Element is not a form field element")}const u=function(e){let{post:t}=e;const[l]=(0,r.Z)(["token"]),[u]=(0,s.useContext)(o.i),[f,h]=(0,s.useState)(!1);return console.log(t),(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("br",{}),!f&&(0,d.jsx)(i.default,{onClick:()=>{h(!0)},children:"Edit Post"})]}),f&&(0,d.jsxs)("form",{className:"z-40 h-full w-full absolute top-0 left-0 bg-gray-100 mx-20",onSubmit:function(e){e.preventDefault();const s=e.currentTarget[1],r=e.currentTarget[2],n=e.currentTarget[3];c(s),function(e){if(!("value"in e))throw new Error("Element is not a form field element")}(r),c(n);var o=[];for(let t=0;t<r.selectedOptions.length;t++)o=[...o,r.selectedOptions[t].id];const i={id:t.id,token:l.token,title:s.value,labels:o,description:n.value};a.Z.post("/update_post",i).then((e=>{if(0===e.data.status)alert("Post saved!"),window.location.href="/post/"+e.data.post.id;else if(1===e.data.status)alert("Please relog in before trying again.");else if(0===e.data.error.title.length)alert("An unexpected error has occured, please refresh the page and try again");else{let t="";e.data.error.title.length>0&&(t+="Post title "+e.data.error.title+"\n"),alert(t)}})).catch((e=>console.log(e)))},children:[(0,d.jsxs)("h1",{className:"font-bold",children:[(0,d.jsx)(i.default,{type:"button",onClick:()=>{h(!1)},children:(0,d.jsx)(n.Z,{})})," Editing Post"]}),(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),(0,d.jsx)("label",{className:"w-auto",children:"Title: "}),(0,d.jsx)("input",{type:"text",className:"border border-slate-400",defaultValue:t.title}),(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),(0,d.jsx)("label",{children:"Categories: "}),(0,d.jsx)("select",{multiple:!0,className:"flex",defaultValue:t.labels,children:u.map((e=>(0,d.jsx)("option",{id:e.id,value:e.id,children:e.label_name},e.id)))}),(0,d.jsx)("br",{}),(0,d.jsx)("label",{className:"w-auto",children:"Post: "}),(0,d.jsx)("br",{}),(0,d.jsx)("textarea",{className:"border border-slate-400 w-3/4 h-40 p-1",style:{resize:"none"},defaultValue:t.description}),!1,(0,d.jsx)("br",{}),(0,d.jsx)(i.default,{className:"self-end",style:{transform:"translateX(65vw)"},children:"Save Edit"})]})]})}}}]);
//# sourceMappingURL=812.b6df05c7.chunk.js.map