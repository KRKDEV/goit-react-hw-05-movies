"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[290],{421:function(e,t,r){r.d(t,{a:function(){return c}});var n=r(643),a="Loader_loader__+lRPl",s=r(184),c=function(){return(0,s.jsx)("div",{className:a,children:(0,s.jsx)(n.rj,{height:"80",width:"80",color:"#f08080",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{},wrapperClass:"",visible:!0})})}},290:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(433),a=r(861),s=r(439),c=r(757),i=r.n(c),o=r(791),u=r(87),l="Home_trending__list__PrLYE",h="Home_trending__card__94YAH",d="Home_trending__vote__+v5h9",p=r(421),f=r(184),_=function(){var e="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("5576770c01d63e1242c2c0a47f8d9a02"),t=(0,o.useState)([]),r=(0,s.Z)(t,2),c=r[0],_=r[1],v=(0,o.useState)(!1),m=(0,s.Z)(v,2),g=m[0],x=m[1],w=function(){var t=(0,a.Z)(i().mark((function t(){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(!0),t.next=3,fetch(e).then((function(e){return e.json()})).catch((function(e){return console.log("There was an error",e)}));case 3:if(!(r=t.sent)){t.next=10;break}return x(!1),a=(0,n.Z)(r.results),t.abrupt("return",a.map((function(e){return{title:e.title,id:e.id,poster_path:e.poster_path,vote_average:e.vote_average.toString().slice(0,1)}})));case 10:console.log("There was an error with fetch");case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,_(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)("main",{children:[(0,f.jsx)("h1",{children:"Trending today..."}),(0,f.jsx)("ul",{className:l,children:g?(0,f.jsx)(p.a,{}):c&&c.length&&c.map((function(e){var t=e.id,r=e.title,n=e.poster_path,a=e.vote_average;return(0,f.jsx)("li",{className:h,children:(0,f.jsxs)(u.rU,{to:"/movies/".concat(t),children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:"Poster"}),(0,f.jsx)("p",{children:r}),(0,f.jsxs)("p",{className:d,children:[(0,f.jsx)("span",{children:a})," / 10"]})]})},t)}))})]})}}}]);
//# sourceMappingURL=290.4359a906.chunk.js.map