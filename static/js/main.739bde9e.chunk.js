(this.webpackJsonpfiles=this.webpackJsonpfiles||[]).push([[0],{17:function(e,t,s){},19:function(e,t,s){},20:function(e,t,s){},21:function(e,t,s){},22:function(e,t,s){"use strict";s.r(t);var n=s(2),c=s.n(n),a=s(9),r=s.n(a),i=(s(8),s(3)),l=(s(17),s(1));var o=function(e){var t=e.mode,s=e.setMode;return Object(l.jsxs)("div",{className:"btn-container",children:[Object(l.jsx)("button",{className:"mode-btn ".concat(t?"active-btn":""),onClick:function(){return s(!0)},children:"Edit"}),Object(l.jsx)("button",{className:"mode-btn ".concat(t?"":"active-btn"),onClick:function(){return s(!1)},children:"Preview"})]})},j=(s(19),s(10));var d=function(e){var t=e.mode,s=e.setMode;return Object(l.jsxs)("header",{children:[Object(l.jsxs)("h2",{children:["CV Maker ",Object(l.jsx)(j.a,{size:"25px"})]}),Object(l.jsx)(o,{mode:t,setMode:s}),Object(l.jsx)("a",{href:"https://github.com/minho-sama/CV-maker",children:"minh 2021"})]})},u=s(4);var b=function(e){var t=e.infoProps,s=t.firstName,n=t.setFirstName,c=t.lastName,a=t.setLastName,r=t.address,i=t.setAddress,o=t.phoneNum,j=t.setPhoneNum,d=t.emailAddress,b=t.setEmailAddress;return Object(l.jsxs)("section",{className:"info-container",children:[Object(l.jsx)("h2",{children:"Info"}),Object(l.jsx)(u.a,{className:"icon-logo",size:"30px"}),Object(l.jsx)("label",{children:"First name: "}),Object(l.jsx)("input",{type:"text",value:s,onChange:function(e){return n(e.target.value)},name:"firstName",placeholder:"Enter Your first name"}),Object(l.jsx)("label",{children:"Last name: "}),Object(l.jsx)("input",{type:"text",value:c,onChange:function(e){return a(e.target.value)},name:"lastName",placeholder:"Enter Your last name"}),Object(l.jsx)("label",{children:"address: "}),Object(l.jsx)("input",{type:"text",value:r,onChange:function(e){return i(e.target.value)},name:"address",placeholder:"Enter Your address"}),Object(l.jsx)("label",{children:" phone: "}),Object(l.jsx)("input",{type:"number",value:o,onChange:function(e){return j(e.target.value)},name:"phone",placeholder:"Enter Your phone number"}),Object(l.jsx)("label",{children:"email: "}),Object(l.jsx)("input",{type:"text",value:d,onChange:function(e){return b(e.target.value)},name:"email",placeholder:"Enter Your email adress"})]})},h=(s(20),s(11));var O=function(e){var t=e.eduProps,s=t.schoolName,n=t.fromDate,c=t.toDate,a=t.degree,r=t.achievements,i=t.setSchoolName,o=t.setFromDate,j=t.setToDate,d=t.setDegree,u=t.setAchievements;return Object(l.jsxs)("section",{className:"info-container edu-border",children:[Object(l.jsxs)("h2",{children:[" Education",Object(l.jsx)(h.a,{className:"icon-logo",size:"30px"})]}),Object(l.jsx)("label",{children:"School, University: "}),Object(l.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}}),Object(l.jsxs)("div",{className:"edu-date",children:[Object(l.jsx)("label",{children:"from: "}),Object(l.jsx)("input",{type:"text",value:n,onChange:function(e){return o(e.target.value)},placeholder:"MM/DD/YYYY"}),Object(l.jsx)("label",{children:"to: "}),Object(l.jsx)("input",{type:"text",value:c,onChange:function(e){return j(e.target.value)},placeholder:"Present"})]}),Object(l.jsx)("label",{children:"Degree or Stream: "}),Object(l.jsx)("input",{type:"text",value:a,onChange:function(e){return d(e.target.value)}}),Object(l.jsx)("label",{children:"Further description, achievements: "}),Object(l.jsx)("textarea",{type:"textarea",value:r,onChange:function(e){return u(e.target.value)}})]})},m=s(5),x=s(6);var f=function(e){var t=e.skillsProps,s=t.skills,n=t.setSkills,c=t.addSkill,a=t.removeSkill,r=t.skillsArray,i=t.showSkillsEdit,o=t.setSkillsEdit;return Object(l.jsxs)("section",{className:"info-container skills-container",children:[Object(l.jsx)("h2",{children:"Skills"}),Object(l.jsx)(m.b,{className:"icon-logo",size:"20px"}),i?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{type:"text",value:s,onChange:function(e){return n(e.target.value)}}),Object(l.jsxs)("div",{className:"skill-buttons",children:[Object(l.jsx)("button",{onClick:function(){o(!1),n("")},className:"cancelSkill-btn",children:"cancel"}),Object(l.jsx)("button",{onClick:function(){return c()},className:"addSkill-btn",children:"Submit"})]})]}):Object(l.jsx)("button",{className:"addSkill-btn",onClick:function(){return o(!i)},children:"Add skill +"}),r.map((function(e,t){return Object(l.jsxs)("div",{className:"skill-item",children:[Object(l.jsx)("li",{children:e}),Object(l.jsx)("button",{onClick:function(){return a(t)},children:Object(l.jsx)(x.a,{size:"25px"})})]},t)}))]})};var p=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("article",{children:Object(l.jsx)(b,{infoProps:e})}),Object(l.jsx)("article",{children:Object(l.jsx)(O,{eduProps:e})}),Object(l.jsx)("article",{children:Object(l.jsx)("p",{children:"work"})}),Object(l.jsx)("article",{children:Object(l.jsx)(f,{skillsProps:e})})]})},v=(s(21),s(12));var N=function(e){var t=e.userInfo,s=e.eduInfo,n=t.firstName,c=t.lastName,a=t.address,r=t.phoneNum,i=t.emailAddress,o=s.schoolName,j=s.fromDate,d=s.toDate,b=s.degree,h=s.achievements;return Object(l.jsxs)("section",{className:"preview-form",children:[Object(l.jsxs)("div",{className:"info-box",children:[Object(l.jsxs)("div",{className:"name-container",children:[Object(l.jsx)("p",{children:""===n?"First Name":"".concat(n)}),Object(l.jsx)("p",{children:""===c?"Last Name":"".concat(c)})]}),Object(l.jsxs)("div",{className:"data-container",children:[Object(l.jsxs)("p",{children:[" ",Object(l.jsx)(m.a,{})," ",""===a?"address":"".concat(a)]}),Object(l.jsxs)("p",{children:[" ",Object(l.jsx)(u.b,{})," ",""===r?"00-000-000":"".concat(r)]}),Object(l.jsxs)("p",{children:[" ",Object(l.jsx)(x.b,{})," ",""===i?"email":"".concat(i)]})]})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"education-container",children:[Object(l.jsx)("h2",{children:"Education"}),Object(l.jsx)("div",{className:"edu-inline",children:Object(l.jsxs)("p",{children:[o," ",Object(l.jsx)(v.a,{})," ",b]})}),Object(l.jsxs)("p",{children:[j," - ",""===d?"Present":"".concat(d)]}),Object(l.jsx)("p",{className:"underline",children:"Description, Achievements: "}),Object(l.jsx)("p",{className:"indent",children:h})]}),Object(l.jsx)("hr",{})]})};var g=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),s=t[0],c=t[1],a=Object(n.useState)(""),r=Object(i.a)(a,2),o=r[0],j=r[1],u=Object(n.useState)(""),b=Object(i.a)(u,2),h=b[0],O=b[1],m=Object(n.useState)(""),x=Object(i.a)(m,2),f=x[0],v=x[1],g=Object(n.useState)(""),k=Object(i.a)(g,2),S=k[0],C=k[1],D=Object(n.useState)(""),y=Object(i.a)(D,2),E=y[0],A=y[1],F={firstName:o,lastName:h,address:f,phoneNum:S,emailAddress:E},P=Object(n.useState)(""),Y=Object(i.a)(P,2),M=Y[0],w=Y[1],I=Object(n.useState)(""),L=Object(i.a)(I,2),z=L[0],T=L[1],B=Object(n.useState)(""),J=Object(i.a)(B,2),V=J[0],U=J[1],q=Object(n.useState)(""),G=Object(i.a)(q,2),H=G[0],K=G[1],Q=Object(n.useState)(""),R=Object(i.a)(Q,2),W=R[0],X=R[1],Z={schoolName:M,fromDate:z,toDate:V,degree:H,achievements:W},$=Object(n.useState)([]),_=Object(i.a)($,2),ee=_[0],te=_[1],se=Object(n.useState)([]),ne=Object(i.a)(se,2),ce=ne[0],ae=ne[1],re=Object(n.useState)(!1),ie=Object(i.a)(re,2),le=ie[0],oe=ie[1];return console.log(ce),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{mode:s,setMode:c}),Object(l.jsx)("div",{className:"form",children:s?Object(l.jsx)(p,{firstName:o,lastName:h,address:f,phoneNum:S,emailAddress:E,setFirstName:j,setLastName:O,setAddress:v,setPhoneNum:C,setEmailAddress:A,schoolName:M,fromDate:z,toDate:V,degree:H,achievements:W,setSchoolName:w,setFromDate:T,setToDate:U,setDegree:K,setAchievements:X,skills:ee,setSkills:te,addSkill:function(){ae((function(){return ce.concat(ee)})),te(""),oe(!1)},removeSkill:function(e){console.log(e);var t=ce.filter((function(t){return ce[e]!==t}));console.log(t),ae(t)},skillsArray:ce,showSkillsEdit:le,setSkillsEdit:oe}):Object(l.jsx)(N,{userInfo:F,eduInfo:Z})})]})},k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,23)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),n(e),c(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),k()},8:function(e,t,s){}},[[22,1,2]]]);
//# sourceMappingURL=main.739bde9e.chunk.js.map