(this["webpackJsonpthe-powerpuff-girls"]=this["webpackJsonpthe-powerpuff-girls"]||[]).push([[0],{28:function(e,t,a){e.exports=a(57)},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(25),r=a.n(c),l=a(14),m=a(11),i=a.n(m),o=a(8),u=a(6),d=function(e){var t=e.show,a=e.episodes;return s.a.createElement("div",null,s.a.createElement("h1",{className:"title"},t.name),s.a.createElement("div",{className:"content"},s.a.createElement("img",{src:t.image.medium,alt:t.name}),s.a.createElement("div",{className:"info"},s.a.createElement("h3",null,"Summary"),s.a.createElement("div",{className:"summary",dangerouslySetInnerHTML:{__html:t.summary}}),s.a.createElement("div",{className:"episodeList"},s.a.createElement("h3",null,"Episodes"),a.map((function(e){return s.a.createElement("div",{key:e.id},s.a.createElement(o.b,{className:"link",to:"/episodes/".concat(e.id)},s.a.createElement("button",{type:"button"},"s:",e.season,"e:",e.number," - ",e.name)))}))))))},p=function(e){var t=e.show,a=e.episodes,n=Object(u.f)().id,c=a.find((function(e){return e.id===Number(n)}));return s.a.createElement("div",{className:"content"},s.a.createElement("h1",{className:"title"},t.name),null!=c.image&&s.a.createElement("img",{src:c.image.original,alt:c.name}),s.a.createElement("div",{className:"info"},s.a.createElement("h2",null,c.name),s.a.createElement("span",{dangerouslySetInnerHTML:{__html:c.summary}})))},E=function(){return s.a.createElement("div",{className:"spinner"},s.a.createElement("span",{className:"spinner-inner-1"}),s.a.createElement("span",{className:"spinner-inner-2"}),s.a.createElement("span",{className:"spinner-inner-3"}))};a(56);var h=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(),m=Object(l.a)(r,2),h=m[0],f=m[1];return Object(n.useEffect)((function(){i.a.get("https://api.tvmaze.com/shows/6771").then((function(e){c(e.data)})).catch((function(e){return console.log("show",e)})),i.a.get("https://api.tvmaze.com/shows/6771/episodes").then((function(e){f(e.data)})).catch((function(e){return console.log("episodes",e)}))}),[]),a&&h?s.a.createElement(o.a,null,s.a.createElement("div",null,s.a.createElement(u.c,null,s.a.createElement(u.a,{exact:!0,path:"/",children:s.a.createElement(d,{show:a,episodes:h})}),s.a.createElement(u.a,{path:"/episodes/:id",children:s.a.createElement(p,{show:a,episodes:h})})))):s.a.createElement(E,null)};r.a.render(s.a.createElement(h,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.28fcc64e.chunk.js.map