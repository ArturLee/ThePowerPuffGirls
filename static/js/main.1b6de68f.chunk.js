(this["webpackJsonpthe-powerpuff-girls"]=this["webpackJsonpthe-powerpuff-girls"]||[]).push([[0],{28:function(e,t,a){e.exports=a(57)},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(25),r=a.n(s),l=a(14),m=a(11),i=a.n(m),o=a(8),u=a(6),d=function(e){var t=e.show,a=e.episodes;return c.a.createElement("div",null,c.a.createElement("h1",{className:"title"},t.name),c.a.createElement("div",{className:"content"},c.a.createElement("img",{src:t.image.medium,alt:t.name}),c.a.createElement("div",{className:"info"},c.a.createElement("h3",null,"Summary"),c.a.createElement("div",{className:"summary",dangerouslySetInnerHTML:{__html:t.summary}}),c.a.createElement("div",{className:"episodeList"},c.a.createElement("h3",null,"Episodes"),a.map((function(e){return c.a.createElement("div",{key:e.id},c.a.createElement(o.b,{className:"link",to:"/episodes/".concat(e.id)},c.a.createElement("button",{type:"button"},"s:",e.season,"e:",e.number," - ",e.name)))}))))))},p=function(e){var t=e.show,a=e.episodes,n=Object(u.f)().id,s=a.find((function(e){return e.id===Number(n)}));return c.a.createElement("div",{className:"content"},c.a.createElement("h1",{className:"title"},t.name),null!=s.image&&c.a.createElement("img",{src:s.image.original,alt:s.name}),c.a.createElement("div",{className:"info"},c.a.createElement("h2",null,s.name),c.a.createElement("span",{dangerouslySetInnerHTML:{__html:s.summary}})))},E=function(){return c.a.createElement("div",{className:"spinner"},c.a.createElement("span",{className:"spinner-inner-1"}),c.a.createElement("span",{className:"spinner-inner-2"}),c.a.createElement("span",{className:"spinner-inner-3"}))};a(56);var h=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(),m=Object(l.a)(r,2),h=m[0],f=m[1];return Object(n.useEffect)((function(){i.a.get("https://api.tvmaze.com/shows/6771").then((function(e){s(e.data)})).catch((function(e){return console.log(e)})),i.a.get("https://api.tvmaze.com/shows/6771/episodes").then((function(e){f(e.data)})).catch((function(e){return console.log(e)}))}),[]),a&&h?c.a.createElement(o.a,null,c.a.createElement("div",null,c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/",children:c.a.createElement(d,{show:a,episodes:h})}),c.a.createElement(u.a,{path:"/episodes/:id",children:c.a.createElement(p,{show:a,episodes:h})})))):c.a.createElement(E,null)};r.a.render(c.a.createElement(h,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.1b6de68f.chunk.js.map