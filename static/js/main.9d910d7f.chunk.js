(this["webpackJsonptravclan-assignment-test"]=this["webpackJsonptravclan-assignment-test"]||[]).push([[0],{45:function(t,e,n){},49:function(t,e,n){},52:function(t,e,n){},53:function(t,e,n){},54:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),s=n(19),r=n.n(s),i=n(32),o=n(25),l=n(2),m=Object(a.createContext)();function u(t){var e=Object(a.useState)([]),n=Object(o.a)(e,2),c=n[0],s=n[1];Object(a.useEffect)((function(){fetch("https://intense-tor-76305.herokuapp.com/merchants").then((function(t){return t.json()})).then((function(t){return function(t){for(var e=[],n=0;n<t.length;n++)t[n].firstname&&e.push(t[n]);var a=e.map((function(t){var e=0,n=0,a=t.bids.map((function(t,e){return t.amount}));return"undefined"!==typeof(a=a.sort())&&("undefined"!==typeof a[a.length-1]&&(e=a[a.length-1]),"undefined"!==typeof a[0]&&(n=a[0])),Object(i.a)(Object(i.a)({},t),{},{largeAmount:e,smallAmount:n})}));return s(a),!0}(t)}))}),[]);var r={customerList:c,sortCustomerList:function(t,e){return"Ascending"===e?t?void s(c.sort((function(t,e){return t.largeAmount-e.largeAmount}))):void s(c.sort((function(t,e){return t.smallAmount-e.smallAmount}))):t?void s(c.sort((function(t,e){return e.largeAmount-t.largeAmount}))):void s(c.sort((function(t,e){return e.smallAmount-t.smallAmount})))}};return Object(l.jsx)(m.Provider,{value:r,children:t.children})}n(45);var j=n(78),d=n(75),b=c.a.memo((function(t){var e=t.props,n=t.toggle;return Object(l.jsxs)(d.a,{className:"card",component:"span",p:1,m:1,bgcolor:"background.paper",children:[Object(l.jsx)(j.a,{src:e.avatarUrl,alt:e.firstname,className:"avatar-image"}),Object(l.jsxs)("h3",{className:"avatar-name",children:[e.firstname," ",e.lastname]}),Object(l.jsx)("h3",{className:"avatar-email",children:e.email}),n?Object(l.jsxs)("h3",{className:"avatar-amount",children:["\u20b9 ",e.largeAmount]}):Object(l.jsxs)("h3",{className:"avatar-amount",children:["\u20b9 ",e.smallAmount]})]})})),h=n(76),O=n(22),g=n.p+"static/media/up-arrow.f2915874.svg",f=n.p+"static/media/down-arrow.ae83fa63.svg",p=(n(49),c.a.memo((function(){var t=Object(a.useContext)(m),e=t.sortCustomerList,n=Object(a.useState)(!0),c=Object(o.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)("Ascending"),u=Object(o.a)(i,2),j=u[0],d=u[1],p=t.customerList;return Object(l.jsxs)("div",{className:"cardPage",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsxs)(h.a,{onClick:function(){r(!s)},className:"toggle",color:"primary",variant:"contained",component:"span",children:["Show ",s?"Minimum":"Maximum"," Price"]}),Object(l.jsx)("button",{onClick:function(){return d("Ascending"===j?"Decending":"Ascending"),void e(s,j)},className:"order",children:"Ascending"===j?Object(l.jsx)("img",{src:g,alt:"Ascending"}):Object(l.jsx)("img",{src:f,alt:"Descending"})})]}),Object(l.jsx)("div",{className:"cardDetail",children:p.map((function(t){return Object(l.jsx)(O.b,{to:"/arploit/TravClan-assignment-test/customer/".concat(t.id),className:"link",children:Object(l.jsx)(b,{props:t,toggle:s},t.id)})}))})]},new Date)}))),v=n(5),x=n(73),A=n(72),N=n(71);n(52);var C=function(){var t=Object(a.useContext)(m),e=Object(v.e)().key,n=t.customerList.filter((function(t){return t.id===e}));return console.log(n),Object(l.jsx)("div",{className:"custWindow",children:n.map((function(t){return Object(l.jsxs)("div",{className:"custCard",children:[Object(l.jsx)(N.a,{component:"img",alt:t.firstname,height:"200",image:t.avatarUrl,title:"Contemplative Reptile"}),Object(l.jsxs)(A.a,{children:[Object(l.jsxs)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[t.firstname," ",t.lastname]}),Object(l.jsxs)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:[Object(l.jsx)("strong",{children:"Email"}),": ",t.email,Object(l.jsx)("br",{}),Object(l.jsx)("strong",{children:"Maximum Bid"})," : \u20b9 ",t.largeAmount,Object(l.jsx)("br",{}),Object(l.jsx)("strong",{children:"Lowest Bid"})," : \u20b9 ",t.smallAmount]})]})]})}))})};n(53);var k=function(){return Object(l.jsx)(u,{children:Object(l.jsx)(O.a,{children:Object(l.jsxs)("div",{className:"main",children:[Object(l.jsx)(v.a,{exact:!0,path:"/arploit/TravClan-assignment-test/",component:p}),Object(l.jsx)(v.a,{exact:!0,path:"/arploit/TravClan-assignment-test/customer/:key",component:C})]})})})};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.9d910d7f.chunk.js.map