"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[914],{1914:function(e,n,r){r.r(n),r.d(n,{default:function(){return f}});var i=r(5861),t=r(9439),s=r(7757),c=r.n(s),a=r(2791),o=r(7689),l=r(1087),d="MovieDetails_movie-details__img__JN1rF",h="MovieDetails_movie-details__2Nu2w",u="MovieDetails_movie-details__list__BUWx5",v="MovieDetails_additional__wrapper__5UIK7",x="MovieDetails_additional__+f3rh",_=r(184),f=function(){var e=(0,a.useState)([]),n=(0,t.Z)(e,2),r=n[0],s=n[1],f=(0,o.UO)().movieId,j="https://api.themoviedb.org/3/movie/".concat(f,"?api_key=").concat("5576770c01d63e1242c2c0a47f8d9a02");(0,a.useEffect)((function(){var e=function(){var e=(0,i.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j).then((function(e){return e.json()})).catch((function(e){return console.log("There was an error",e)}));case 2:n=e.sent,s(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[j]);var p="https://image.tmdb.org/t/p/w500".concat(r.poster_path),m=1e3*r.vote_average/100;return(0,_.jsxs)("main",{children:[(0,_.jsx)(l.rU,{to:"/",className:"return__btn",children:"Go back"}),(0,_.jsxs)("div",{className:h,children:[(0,_.jsx)("img",{src:p,alt:r.title,className:d}),(0,_.jsxs)("ul",{className:u,children:[(0,_.jsx)("li",{children:(0,_.jsx)("h1",{children:r.title})}),(0,_.jsx)("li",{children:(0,_.jsxs)("p",{children:["User score: ",(0,_.jsxs)("span",{children:[m,"%"]})]})}),(0,_.jsx)("li",{children:(0,_.jsx)("h3",{children:"Overview"})}),(0,_.jsx)("li",{children:(0,_.jsx)("p",{children:r.overview})}),(0,_.jsx)("li",{children:(0,_.jsx)("h3",{children:"Genres"})}),(0,_.jsx)("li",{children:void 0!==r.genres&&(0,_.jsx)("span",{children:"".concat(r.genres.map((function(e){return e.name})).join(", "))})})]})]}),(0,_.jsxs)("div",{className:x,children:[(0,_.jsx)("h3",{children:"Additional informations"}),(0,_.jsxs)("div",{className:v,children:[(0,_.jsx)(l.rU,{to:"cast",children:(0,_.jsx)("p",{children:"Cast"})}),(0,_.jsx)(l.rU,{to:"reviews",children:(0,_.jsx)("p",{children:"Reviews"})})]}),(0,_.jsx)(o.j3,{})]})]})}},5861:function(e,n,r){function i(e,n,r,i,t,s,c){try{var a=e[s](c),o=a.value}catch(l){return void r(l)}a.done?n(o):Promise.resolve(o).then(i,t)}function t(e){return function(){var n=this,r=arguments;return new Promise((function(t,s){var c=e.apply(n,r);function a(e){i(c,t,s,a,o,"next",e)}function o(e){i(c,t,s,a,o,"throw",e)}a(void 0)}))}}r.d(n,{Z:function(){return t}})}}]);
//# sourceMappingURL=914.5e14f104.chunk.js.map