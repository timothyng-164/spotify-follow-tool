(this["webpackJsonpspotify-follow-tool"]=this["webpackJsonpspotify-follow-tool"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),r=a.n(c),s=a(20),o=a.n(s),i=(a(27),a(6)),l="access_token",u="spotify_auth_state";function p(e){var t=function(){for(var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);e=a.exec(n);)t[e[1]]=decodeURIComponent(e[2]);return t}();console.log(1);var a=t.access_token,n=t.state,c=localStorage.getItem(u);console.log(2),a&&(localStorage.setItem(l,a),e(!0),console.log("Set access token")),!a||null!=n&&n===c?(console.log("Removing state key"),localStorage.removeItem(u)):(console.log("Attempting to access without state"),e(!1))}function d(e){localStorage.removeItem(l),e(!1)}function f(e){e.preventDefault();var t=function(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n++)t+=a.charAt(Math.floor(Math.random()*a.length));return t}(16);localStorage.setItem(u,t);var a="https://accounts.spotify.com/authorize";a+="?response_type=token",a+="&client_id="+encodeURIComponent("4e3f7aa0c77e44e09d1b7778b4f63ad7"),a+="&scope="+encodeURIComponent("user-follow-modify user-library-read user-follow-read"),a+="&redirect_uri="+encodeURIComponent("https://timothyng-164.github.io/spotify-follow-tool"),a+="&state="+encodeURIComponent(t),console.log("redirect url",a),window.location=a}var b="rounded-pill px-3 py-2 font-weight-bold mx-2",h=Object(n.jsx)("img",{src:"./images/loading-svgrepo-com.svg",length:"20",width:"20",className:"load-img ml-2",alt:"loading-icon"}),j=function(e){var t=e.setAuthenticated;return Object(n.jsx)("button",{onClick:function(e){f(e),t(!0)},className:"btn-success ".concat(b),children:"Login"})},x=(a(28),function(e){var t=e.id,a=e.artistMap,c=e.setArtistMap;return Object(n.jsxs)("tr",{className:a.get(t).checked?"row-checked":a.get(t).following?"row-following":"row-not-following",onClick:function(){var e=new Map(a),n=a.get(t);n=Object.assign(n,{checked:!a.get(t).checked}),e.set(t,n),c(e)},children:[Object(n.jsx)("td",{children:Object(n.jsx)("input",{type:"checkbox",className:"checkbox checkbox-artist",checked:a.get(t).checked})}),Object(n.jsx)("td",{children:a.get(t).name}),Object(n.jsx)("td",{children:a.get(t).following?"Following":"Not Following"}),Object(n.jsx)("td",{children:Object(n.jsx)("a",{href:a.get(t).uri,children:"Link"})})]})}),m=a(3);function v(e,t,a){var n=new Map(t);document.querySelector(".checkbox-all-artist").checked=e;var c,r=Object(m.a)(t.entries());try{for(r.s();!(c=r.n()).done;){var s=Object(i.a)(c.value,2),o=s[0],l=s[1];n.set(o,Object.assign(l,{checked:e}))}}catch(u){r.e(u)}finally{r.f()}a(n)}a(29);var O=function(e){var t=e.artistMap,a=e.setArtistMap,c=Array.from(t.values()).map((function(e){return Object(n.jsx)(x,{id:e.id,artistMap:t,setArtistMap:a},e.id)}));return Object(n.jsx)("div",{className:"artist-container my-5 ",children:Object(n.jsxs)("table",{className:"table table-dark m-0 mx-auto",style:t.size<1?{display:"none"}:null,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:Object(n.jsx)("input",{type:"checkbox",className:"checkbox-all-artist",onChange:function(e){v(e.target.checked,t,a)}})}),Object(n.jsx)("th",{scope:"col",children:"Artist"}),Object(n.jsx)("th",{scope:"col",children:"Following"}),Object(n.jsx)("th",{scope:"col",children:"Link"})]})}),Object(n.jsx)("tbody",{children:c})]})})},k=a(1),g=a.n(k),w=a(4);function y(e,t,a){return{method:e,url:t,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}}}function M(e,t){var a=[];if(t<=0)return a;for(var n=0,c=e.length;n<c;n+=t)a.push(e.slice(n,n+t));return a}var N=a(11);function A(e,t){return S.apply(this,arguments)}function S(){return(S=Object(w.a)(g.a.mark((function e(t,a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem(l),e.next=3,N(y(t,a,n));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){return I.apply(this,arguments)}function I(){return(I=Object(w.a)(g.a.mark((function e(t,a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.join(","),e.next=3,A(t,"https://api.spotify.com/v1/me/following?type=artist&ids=".concat(n));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return R.apply(this,arguments)}function R(){return(R=Object(w.a)(g.a.mark((function e(t){var a,n,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("delete follow request"),e.prev=1,a=Object(m.a)(M(t,50)),e.prev=3,a.s();case 5:if((n=a.n()).done){e.next=12;break}return c=n.value,console.log("unfollowing artists",t),e.next=10,C("delete",c);case 10:e.next=5;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),a.e(e.t0);case 17:return e.prev=17,a.f(),e.finish(17);case 20:e.next=26;break;case 22:if(e.prev=22,e.t1=e.catch(1),401!==e.t1.response.status){e.next=26;break}throw e.t1;case 26:case"end":return e.stop()}}),e,null,[[1,22],[3,14,17,20]])})))).apply(this,arguments)}function q(e){return U.apply(this,arguments)}function U(){return(U=Object(w.a)(g.a.mark((function e(t){var a,n,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("put follow request"),e.prev=1,a=Object(m.a)(M(t,50)),e.prev=3,a.s();case 5:if((n=a.n()).done){e.next=12;break}return c=n.value,console.log("following artists",t),e.next=10,C("put",c);case 10:e.next=5;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),a.e(e.t0);case 17:return e.prev=17,a.f(),e.finish(17);case 20:e.next=26;break;case 22:if(e.prev=22,e.t1=e.catch(1),401!==e.t1.response.status){e.next=26;break}throw e.t1;case 26:case"end":return e.stop()}}),e,null,[[1,22],[3,14,17,20]])})))).apply(this,arguments)}function _(){return z.apply(this,arguments)}function z(){return(z=Object(w.a)(g.a.mark((function e(){var t,a,n,c,r,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],e.prev=1,a="https://api.spotify.com/v1/me/following?type=artist&limit=50";case 3:if(!a){e.next=13;break}return e.next=6,A("get",a);case 6:n=e.sent,console.log("Retreived followed artists",n),c=Object(m.a)(n.data.artists.items);try{for(c.s();!(r=c.n()).done;)s=r.value,t.push(s.id)}catch(o){c.e(o)}finally{c.f()}a=n.data.artists.next,e.next=3;break;case 13:console.log("all followed ids",t),e.next=20;break;case 16:if(e.prev=16,e.t0=e.catch(1),401!==e.t0.response.status){e.next=20;break}throw e.t0;case 20:return e.abrupt("return",t);case 21:case"end":return e.stop()}}),e,null,[[1,16]])})))).apply(this,arguments)}var L=function(e){var t=e.artistMap,a=e.setArtistMap,r=e.setAuthenticated,s=Object(c.useState)(!1),o=Object(i.a)(s,2),l=o[0],u=o[1],p=Object(c.useState)(!1),f=Object(i.a)(p,2),j=f[0],x=f[1];function v(){return Array.from(t.values()).flatMap((function(e){return e.checked?e.id:[]}))}function O(e,n){var c,r=new Map(t),s=Object(m.a)(e);try{for(s.s();!(c=s.n()).done;){var o=c.value,i=t.get(o);r.set(o,Object.assign(i,{following:n}))}}catch(l){s.e(l)}finally{s.f()}a(r)}function k(){return(k=Object(w.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),O(t=v(),!1),e.prev=3,e.next=6,F(t);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),401===e.t0.response.status&&(d(r),x(!1));case 11:x(!1);case 12:case"end":return e.stop()}}),e,null,[[3,8]])})))).apply(this,arguments)}function y(){return(y=Object(w.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),O(t=v(),!0),e.prev=3,e.next=6,q(t);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),401===e.t0.response.status&&(d(r),u(!1));case 11:u(!1);case 12:case"end":return e.stop()}}),e,null,[[3,8]])})))).apply(this,arguments)}return Object(n.jsx)("div",{className:"row follow-container col-12",children:Object(n.jsxs)("div",{className:"mx-auto",children:[Object(n.jsxs)("button",{onClick:function(){return y.apply(this,arguments)},className:"btn-success ".concat(b),disabled:l||j,children:["Follow",l&&h]}),Object(n.jsxs)("button",{onClick:function(){return k.apply(this,arguments)},className:"btn-danger ".concat(b),disabled:l||j,children:["Unfollow",j&&h]})]})})},T=a(7),B=a(11);function E(e){var t,a=new Map,n=Object(m.a)(e.data.items);try{for(n.s();!(t=n.n()).done;){var c,r=t.value.track,s=Object(m.a)(r.artists);try{for(s.s();!(c=s.n()).done;){var o=c.value;a.set(o.id,{id:o.id,name:o.name,uri:o.uri})}}catch(i){s.e(i)}finally{s.f()}}}catch(i){n.e(i)}finally{n.f()}return a}function G(e){return e.data.next}function J(e){var t,a=new Map,n=Object(m.a)(e.data.items);try{for(n.s();!(t=n.n()).done;){var c,r=t.value.album,s=Object(m.a)(r.artists);try{for(s.s();!(c=s.n()).done;){var o=c.value;a.set(o.id,{id:o.id,name:o.name,uri:o.uri})}}catch(i){s.e(i)}finally{s.f()}}}catch(i){n.e(i)}finally{n.f()}return a}function D(e){var t,a=new Map,n=Object(m.a)(e.data.artists.items);try{for(n.s();!(t=n.n()).done;){var c=t.value;a.set(c.id,{id:c.id,name:c.name,uri:c.uri})}}catch(r){n.e(r)}finally{n.f()}return a}function H(e){return e.data.artists.next}function K(e,t,a){return P.apply(this,arguments)}function P(){return(P=Object(w.a)(g.a.mark((function e(t,a,n){var c,r,s,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=new Map,e.prev=1,r=localStorage.getItem(l),s=t;case 4:if(!s){e.next=12;break}return e.next=7,B(y("get",s,r));case 7:o=e.sent,c=new Map([].concat(Object(T.a)(c),Object(T.a)(a(o)))),s=n(o),e.next=4;break;case 12:e.next=18;break;case 14:if(e.prev=14,e.t0=e.catch(1),401!==e.t0.response.status){e.next=18;break}throw e.t0;case 18:return e.abrupt("return",c);case 19:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}function Q(e,t,a){return V.apply(this,arguments)}function V(){return(V=Object(w.a)(g.a.mark((function e(t,a,n){var c,r,s,o,l,u,p,d,f,b,h,j,x,v;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=new Map,!t){e.next=6;break}return e.next=4,K("https://api.spotify.com/v1/me/tracks?offset=0&limit=50",E,G);case 4:r=e.sent,c=new Map([].concat(Object(T.a)(c),Object(T.a)(r)));case 6:if(!a){e.next=11;break}return e.next=9,K("https://api.spotify.com/v1/me/albums?offset=0&limit=50",J,G);case 9:s=e.sent,c=new Map([].concat(Object(T.a)(c),Object(T.a)(s)));case 11:if(!n){e.next=16;break}return e.next=14,K("https://api.spotify.com/v1/me/following?type=artist&limit=50",D,H);case 14:o=e.sent,c=new Map([].concat(Object(T.a)(c),Object(T.a)(o)));case 16:l=Object(m.a)(c.entries());try{for(l.s();!(u=l.n()).done;)p=Object(i.a)(u.value,2),d=p[0],f=p[1],c.set(d,Object.assign(f,{following:!1,checked:!1}))}catch(O){l.e(O)}finally{l.f()}return e.next=20,_();case 20:b=e.sent,h=Object(m.a)(b),e.prev=22,h.s();case 24:if((j=h.n()).done){e.next=32;break}if(x=j.value,v=c.get(x)){e.next=29;break}return e.abrupt("continue",30);case 29:c.set(x,Object.assign(v,{following:!0}));case 30:e.next=24;break;case 32:e.next=37;break;case 34:e.prev=34,e.t0=e.catch(22),h.e(e.t0);case 37:return e.prev=37,h.f(),e.finish(37);case 40:return e.abrupt("return",c);case 41:case"end":return e.stop()}}),e,null,[[22,34,37,40]])})))).apply(this,arguments)}a(49);var W=function(e){var t=e.artistMap,a=e.setArtistMap,r=e.setAuthenticated,s=Object(c.useState)(!1),o=Object(i.a)(s,2),l=o[0],u=o[1];function p(){return(p=Object(w.a)(g.a.mark((function e(){var t,n,c,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),t=document.querySelector("#checkbox-tracks").checked,n=document.querySelector("#checkbox-albums").checked,c=document.querySelector("#checkbox-followed").checked,s=new Map,e.prev=5,e.next=8,Q(t,n,c);case 8:s=e.sent,e.next=17;break;case 11:if(e.prev=11,e.t0=e.catch(5),401!==e.t0.response.status){e.next=17;break}return d(r),u(!1),e.abrupt("return");case 17:v(!1,s,a),u(!1);case 19:case"end":return e.stop()}}),e,null,[[5,11]])})))).apply(this,arguments)}return Object(n.jsxs)("div",{className:"menu-container",children:[Object(n.jsx)("div",{className:"row col-12 my-3",children:Object(n.jsx)("div",{className:"mx-auto",children:Object(n.jsxs)("button",{id:"button-update-artists",onClick:function(){return p.apply(this,arguments)},className:"btn-success ".concat(b),disabled:l,children:["Get Artists",l&&h]})})}),Object(n.jsx)("div",{className:"row col-12 my-3",children:Object(n.jsxs)("div",{className:"mx-auto d-flex",children:[Object(n.jsxs)("div",{className:"artist-option",children:[Object(n.jsx)("input",{type:"checkbox",id:"checkbox-tracks",defaultChecked:!0,className:"mx-1"}),Object(n.jsx)("label",{htmlFor:"checkbox-tracks",className:"mr-3",children:"Saved Tracks"})]}),Object(n.jsxs)("div",{className:"artist-option",children:[Object(n.jsx)("input",{type:"checkbox",id:"checkbox-albums",defaultChecked:!0,className:"mx-1"}),Object(n.jsx)("label",{htmlFor:"checkbox-albums",className:"mr-3",children:"Saved Albums"})]}),Object(n.jsxs)("div",{className:"artist-option",children:[Object(n.jsx)("input",{type:"checkbox",id:"checkbox-followed",defaultChecked:!0,className:"mx-1"}),Object(n.jsx)("label",{htmlFor:"checkbox-followed",className:"mr-3",children:"Followed Artists"})]})]})}),t.size>0&&Object(n.jsx)(L,{artistMap:t,setArtistMap:a,setAuthenticated:r})]})},X=(a(50),function(e){var t=e.artistMap,a=e.setArtistMap,c=e.authenticated,r=e.setAuthenticated;return Object(n.jsxs)("div",{className:"main-page mt-5",children:[Object(n.jsxs)("div",{className:"menu-container col-7 mx-auto p-4 border border-secondary rounded",children:[Object(n.jsx)("h1",{children:"Spotify Follow Tool"}),Object(n.jsx)("p",{}),c?Object(n.jsx)("div",{className:"page app-container",children:Object(n.jsx)(W,{artistMap:t,setArtistMap:a,setAuthenticated:r})}):Object(n.jsx)("div",{className:"page login-container",children:Object(n.jsx)(j,{setAuthenticated:r})})]}),c&&Object(n.jsx)(O,{artistMap:t,setArtistMap:a})]})}),Y=(a(51),function(){var e=Object(c.useState)(new Map),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(null!=localStorage.getItem(l)),o=Object(i.a)(s,2),u=o[0],d=o[1];return Object(c.useEffect)((function(){p(d),d(null!=localStorage.getItem(l))})),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(X,{artistMap:a,setArtistMap:r,authenticated:u,setAuthenticated:d}),Object(n.jsx)("footer",{className:"m-4",children:Object(n.jsx)("a",{href:"https://github.com/timothyng-164/spotify-follow-tool",children:Object(n.jsx)("img",{src:"./images/GitHub-Mark-Light-64px.png",length:"30",width:"30"})})})]})});o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(Y,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.1a340ca7.chunk.js.map