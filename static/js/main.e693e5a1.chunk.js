(this["webpackJsonptrending-movies-react"]=this["webpackJsonptrending-movies-react"]||[]).push([[0],{11:function(e,t,r){},14:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(5),s=r.n(a),i=(r(11),r(3)),o=r.n(i),l=r(6),j=r(4),u="1a370dccfcd184463a26c0b62f9375c9",d=function(e){var t=c.a.useState(null),r=Object(j.a)(t,2),n=r[0],a=r[1],s=c.a.useState(null),i=Object(j.a)(s,2),u=i[0],d=i[1];return c.a.useEffect((function(){(function(){var t=Object(l.a)(o.a.mark((function t(){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return r=t.sent,t.next=6,r.json();case 6:n=t.sent,a(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),d(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}),[]),{response:n,error:u}},b=function(e){return"https://image.tmdb.org/t/p/w154/".concat(e)},h=function(e){return"https://www.imdb.com/title/".concat(e)},m=function(e){return"https://www.youtube.com/results?search_query=".concat(e,"+trailer")},p=function(e){var t=new RegExp(/^(?:https?:)?(?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n]+)/gim).exec(e)[1];switch(t){case"netflix.com":return"Netflix";case"warnerbros.com":return"Warner Bros";case"play.hbomax.com":return"HBO Max";case"spiral.movie":return"Spiral Movie";case"disneyplus.com":return"Disney Plus";case"movies.disney.com":return"Disney Movies";case"thefastsaga.com":return"The Fast Saga";case"aquietplacemovie.com":return"A Quiet Place Movie";case"paramountplus.com":return"Paramount Plus";case"dreamworks.com":return"DreamWorks";case"miramax.com":return"Miramax";case"base-fx.com":return"Base FX";case"sonypictures.com":return"Sony Pictures";case"hbo.com":return"HBO";case"amazon.com":return"Amazon Prime Video";case"hulu.com":return"Hulu";case"roku.com":return"Roku";case"cbs.com":return"CBS";case"tv.apple.com":return"Apple TV";default:return t}},x=r(0);function f(e){var t=e.id,r=d(function(e){return"https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(u)}(t));if(!r.response)return Object(x.jsx)("div",{children:"Loading..."});var n=r.response,c=function(){for(var e=n.genres,t="",r=0;r<e.length;r++)t+=e[r].name,void 0!==e[r+1]&&(t+=", ");return t},a=function(){var e=n.homepage;return e?Object(x.jsxs)("p",{children:["Playing On: ",function(e){return Object(x.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:p(e)})}(e)]}):Object(x.jsx)("p",{})},s=function(){var e=m(n.title);return Object(x.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:"Watch Trailer"})};return Object(x.jsxs)("tr",{className:"tableRow",children:[Object(x.jsx)("td",{className:"tableImage",children:Object(x.jsx)("a",{href:h(n.imdb_id),target:"_blank",rel:"noreferrer",children:Object(x.jsx)("img",{src:b(n.poster_path),alt:"movie-img"})})}),Object(x.jsxs)("td",{className:"tableInfos",children:[Object(x.jsxs)("span",{style:{fontSize:12},children:[Object(x.jsx)("span",{style:{fontSize:24},children:n.vote_average})," / 10"]}),Object(x.jsx)("a",{style:{textDecoration:"none"},href:h(n.imdb_id),target:"_blank",rel:"noreferrer",children:Object(x.jsx)("p",{style:{fontSize:16},children:n.title})}),Object(x.jsx)(c,{}),Object(x.jsx)(a,{}),Object(x.jsx)(s,{})]})]})}function O(){var e=d("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(u));if(!e.response)return Object(x.jsx)("div",{children:"Loading..."});var t=e.response.results,r=function(){return t.map((function(e){return Object(x.jsx)(f,{id:e.id},e.id)}))};return Object(x.jsx)("div",{className:"trendingMovies",children:Object(x.jsxs)("table",{cellPadding:"10",cellSpacing:"0",children:[Object(x.jsx)("thead",{children:Object(x.jsx)("tr",{children:Object(x.jsx)("th",{children:"Trending Movies"})})}),Object(x.jsx)("tbody",{children:Object(x.jsx)(r,{})})]})})}function v(e){var t=e.id,r=e.title,n=d(function(e){return"https://api.themoviedb.org/3/tv/".concat(e,"?api_key=").concat(u)}(t));if(!n.response)return Object(x.jsx)("div",{children:"Loading..."});var c=n.response,a=function(){for(var e=c.genres,t="",r=0;r<e.length;r++)t+=e[r].name,void 0!==e[r+1]&&(t+=", ");return t},s=function(){var e=c.homepage;return e?Object(x.jsxs)("p",{children:["Playing On: ",function(e){return Object(x.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:p(e)})}(e)]}):Object(x.jsx)("p",{})},i=function(){var e=m(r);return Object(x.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:"Watch Trailer"})};return Object(x.jsxs)("tr",{className:"tableRow",children:[Object(x.jsx)("td",{className:"tableImage",children:Object(x.jsx)("a",{href:c.homepage,target:"_blank",rel:"noreferrer",children:Object(x.jsx)("img",{src:b(c.poster_path),alt:"tvShow-img"})})}),Object(x.jsxs)("td",{className:"tableInfos",children:[Object(x.jsxs)("span",{style:{fontSize:12},children:[Object(x.jsx)("span",{style:{fontSize:24},children:c.vote_average})," / 10"]}),Object(x.jsx)("a",{style:{textDecoration:"none"},href:c.homepage,target:"_blank",rel:"noreferrer",children:Object(x.jsx)("p",{style:{fontSize:16},children:r})}),Object(x.jsx)(a,{}),Object(x.jsx)(s,{}),Object(x.jsx)(i,{})]})]})}function g(){var e=d("https://api.themoviedb.org/3/trending/tv/week?api_key=".concat(u));if(!e.response)return Object(x.jsx)("div",{children:"Loading..."});var t=e.response.results,r=function(){return t.map((function(e){return Object(x.jsx)(v,{id:e.id,title:e.name},e.id)}))};return Object(x.jsx)("div",{className:"trendingMovies",children:Object(x.jsxs)("table",{cellPadding:"10",cellSpacing:"0",children:[Object(x.jsx)("thead",{children:Object(x.jsx)("tr",{children:Object(x.jsx)("th",{children:"Trending TV Shows"})})}),Object(x.jsx)("tbody",{children:Object(x.jsx)(r,{})})]})})}r(14);var y=function(){return Object(x.jsxs)("div",{className:"app",children:[Object(x.jsx)("div",{className:"header",children:Object(x.jsx)("h1",{children:"Trending Movies and TV Shows - React Project"})}),Object(x.jsxs)("div",{className:"app-container",children:[Object(x.jsx)(O,{}),Object(x.jsx)("div",{className:"divider"}),Object(x.jsx)(g,{})]})]})};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e693e5a1.chunk.js.map