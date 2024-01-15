"use strict";(self.webpackChunkcvwo_2024_winter_assignment_frontend=self.webpackChunkcvwo_2024_winter_assignment_frontend||[]).push([[356],{356:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var s=n(791),a=n(600),o=n(689),l=n(844),i=n(294),r=n(568),d=n(630),c=n(184);const m=function(e){let{variant:t,id:n,post_id:o="0"}=e;const[l]=(0,a.Z)(["token"]),[r,m]=(0,s.useState)(!1);return(0,c.jsx)("div",{className:"w-11/12 mx-1 h-auto flex-col",children:(0,c.jsxs)("form",{className:"h-auto w=auto",onSubmit:function(e){e.preventDefault();const s=e.currentTarget[0];!function(e){if(!("value"in e))throw new Error("Element is not a form field element")}(s);const a={token:l.token,comment:s.value,variant:t,id:n,post_id:o};i.Z.post("/post_comment",a).then((e=>{0===e.data.status?alert("Comment posted!"):1===e.data.status?alert("Please relog in before trying again."):alert("There was a problem creating the post, please try again")})).catch((e=>console.log(e)))},children:[(0,c.jsx)("input",{type:"text",className:"border border-slate-400",placeholder:"Add a comment",onFocus:()=>m(!0)}),r&&(0,c.jsxs)("div",{children:[(0,c.jsx)(d.default,{className:"self-end",style:{transform:"translateX(50vw)"},onClick:()=>m(!1),children:"Cancel"}),(0,c.jsx)(d.default,{className:"self-end",style:{transform:"translateX(50vw)"},children:"Comment"})]})]})})},h=(0,s.lazy)((()=>Promise.resolve().then(n.bind(n,630)))),u=(0,s.lazy)((()=>n.e(171).then(n.bind(n,171))));const f=function(e){let{id:t,comment:n,date:o,parent_comment_id:l,post_id:r,user_id:d,author:f}=e;const[j]=(0,a.Z)(["token","username"]),[p]=(0,s.useState)({}),b=null!=j.token;return(0,c.jsx)("div",{id:"1",className:"w-128 h-auto border-l border-gray-500 flex justify-between",children:(0,c.jsxs)("div",{className:"h-auto flex-col justify-between",children:[(0,c.jsx)("div",{className:"h-10 flex overflow-y-hidden justify-between",children:(0,c.jsx)("label",{children:n})}),(0,c.jsxs)("div",{className:"h-10 flex justify-between",children:[(0,c.jsxs)("p",{children:[o," -",f]}),j.username===f&&(0,c.jsxs)(s.Suspense,{children:[(0,c.jsx)(u,{id:t,comment:n}),(0,c.jsx)(h,{onClick:function(){i.Z.post("/delete_comment",{id:t,token:j.token}).then((e=>{0===e.data.status?(alert("Comment deleted!"),window.location.href="/"):alert("Error, please try relogging in before trying again.")})).catch((e=>console.log(e)))},children:"Delete Comment"})]})]}),b&&(0,c.jsx)(m,{variant:"comment",id:t}),p&&(0,c.jsx)(x,{variant:"comment",id:t})]})})};const x=function(e){let{variant:t,id:n,...o}=e;const[l]=(0,a.Z)(["token"]),[r,d]=(0,s.useState)({}),h=null!=l.token,[u,x]=(0,s.useState)([]);return(0,s.useEffect)((()=>{i.Z.post("/get_comments",{variant:t,id:n}).then((e=>{0===e.data.status&&(x(e.data.comments),d(e.data.hasChild))})).catch((e=>console.log(e)))}),[]),(0,c.jsxs)("div",{...o,className:"w-128 h-auto m-5 space-y-1 flex-col",children:[h&&"post"==t&&(0,c.jsx)(m,{variant:t,id:n}),Array.isArray(u)&&u.map((e=>(0,c.jsx)(f,{id:e.id,comment:e.comment,date:e.date,parent_comment_id:e.parent_comment_id,post_id:e.post_id,user_id:e.user_id,author:e.author,hasChild:r[e.id]},e.id)))]})},j=(0,s.lazy)((()=>n.e(812).then(n.bind(n,812))));const p=function(){const[e,t,n]=(0,a.Z)(["token","username"]),m=(0,o.UO)(),[h,u]=(0,s.useState)({id:"0",title:"Fetching post",description:"",author:"",date:"",labels:[]});return(0,s.useEffect)((()=>{var e;null!=m.id?(e=m.id,i.Z.post("/get_post",{id:e}).then((e=>{0===e.data.status?u({...e.data.post,labels:e.data.labels}):(alert("Error fetching post, going back to main page"),window.location.href="/")})).catch((e=>console.log(e)))):window.location.href="/"}),[m.id]),(0,c.jsxs)("div",{className:"top-0 left-0 h-screen w-128 mx-20 overflow-y-hidden",children:[(0,c.jsx)(r.Z,{}),(0,c.jsxs)("div",{className:"mx-10 my-10 h-3/4 flex-col bg-gray-100 bg-opacity-100 overflow-x-hidden",children:[(0,c.jsxs)("div",{className:"flex",children:[(0,c.jsx)(d.default,{onClick:()=>{window.location.href="/"},children:(0,c.jsx)(l.Z,{})}),(0,c.jsx)("h1",{className:"ml-10 font-bold",children:h.title})]}),(0,c.jsxs)("div",{className:"flex-col",children:[(0,c.jsx)("label",{children:h.description}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsxs)("label",{children:["- ",h.author]}),e.username===h.author&&(0,c.jsx)(s.Suspense,{fallback:(0,c.jsx)("h1",{children:"Loading Form..."}),children:(0,c.jsx)(j,{post:h})}),(0,c.jsx)("br",{}),e.username===h.author&&(0,c.jsx)(d.default,{onClick:function(){i.Z.post("/delete_post",{id:m.id,token:e.token}).then((e=>{0===e.data.status?(alert("Post deleted!"),window.location.href="/"):alert("Error, please try relogging in before trying again.")})).catch((e=>console.log(e)))},children:"Delete Post"}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{className:"font-bold",children:"Comments"}),null!=m.id&&(0,c.jsx)(x,{variant:"post",id:m.id})]})]})]})}}}]);
//# sourceMappingURL=356.0871871d.chunk.js.map