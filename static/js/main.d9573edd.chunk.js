(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{53:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(19),s=n(20),a=n(8),i=n(7),o=n.n(i),u=n(21),l=n.n(u),j=n(1);function h(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(null),u=Object(a.a)(i,2),h=u[0],d=u[1],b=function(){var e=Object(s.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://api.tvmaze.com/search/shows?q=".concat(n));case 2:t=e.sent,console.log(t.data[0].show.image.medium),c=t.data.map((function(e){var t,n;return Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:e.show.name}),Object(j.jsx)("img",{src:null===e||void 0===e||null===(t=e.show)||void 0===t||null===(n=t.image)||void 0===n?void 0:n.medium,alt:""}),Object(j.jsxs)("p",{children:["status: ",e.show.status]})]},e.show.id)})),d(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"tv "}),Object(j.jsx)("input",{type:"text",value:n,placeholder:"search",onChange:function(e){return r(e.target.value)}}),Object(j.jsx)("button",{onClick:function(){return b()},children:"serch"}),null!==h&&Object(j.jsx)("ul",{children:h})]})}var d=document.getElementById("root");Object(r.createRoot)(d).render(Object(j.jsx)(c.StrictMode,{children:Object(j.jsx)(h,{})}))}},[[53,1,2]]]);
//# sourceMappingURL=main.d9573edd.chunk.js.map