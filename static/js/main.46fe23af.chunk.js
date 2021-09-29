(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[1],{133:function(e,t,n){},134:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){},162:function(e,t,n){},223:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(44),c=n.n(s),i=(n(133),n(33)),u=n(34),o=n(36),l=n(35),f=n(7),d=n(17),b=n(3),j=(n(134),n(2)),p=function(e){return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("div",{className:"header__logo",children:Object(j.jsx)("a",{className:"header__icon",children:"Comma"})}),Object(j.jsx)("div",{className:"header__login",children:e.isAuth?Object(j.jsxs)("div",{children:[e.login,Object(j.jsx)("button",{className:"header__link header__link--logout",onClick:e.logout,children:"Log Out"})]}):Object(j.jsx)(d.b,{to:"/login",className:"header__link",children:"Log In"})})]})},h=n(20),O=n(25),g=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsx)(p,Object(b.a)({},this.props))}}]),n}(a.a.Component),m=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:O.d})(g),v=(n(159),function(e){var t=e.sidebar.friends.map((function(e){return Object(j.jsxs)("li",{className:"friends-panel__item",children:[Object(j.jsx)("div",{className:"friends-panel__avatar",children:Object(j.jsx)("img",{src:"https://images.app.goo.gl/x1HjNjZABTm4CZ3C7"})}),Object(j.jsx)("div",{className:"friends-panel__name",children:e.name})]})}));return Object(j.jsx)("div",{className:"friends-panel",children:Object(j.jsx)("ul",{className:"friends-panel__items",children:t})})}),x=(n(160),function(e){return Object(j.jsxs)("nav",{className:"sidebar",children:[Object(j.jsxs)("div",{className:"sidebar__links",children:[Object(j.jsx)(d.b,{className:"sidebar__link",to:"/profile",children:"Profile"}),Object(j.jsx)(d.b,{className:"sidebar__link",to:"/messages",children:"Messages"}),Object(j.jsx)(d.b,{className:"sidebar__link",to:"/users",children:"Users"}),Object(j.jsx)("a",{className:"sidebar__link",href:"#",children:"News"}),Object(j.jsx)("a",{className:"sidebar__link",href:"#",children:"Music"}),Object(j.jsx)("a",{className:"sidebar__link",href:"#",children:"Settings"})]}),Object(j.jsx)(v,{sidebar:e.sidebar})]})}),w=Object(h.b)((function(e){return{sidebar:e.sidebar}}))(x),_="SET-INITIALIZING ",y={initializing:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:var n=Object(b.a)(Object(b.a)({},e),{},{initializing:!0});return n;default:return e}},k=(n(161),n(22)),N=n(27),T=n(56),E=n(71),I={friends:[{name:"Sasha Torn"},{name:"Hope Smith"},{name:"John Campbell"},{name:"Alex Vega"},{name:"Tom Burkard"},{name:"Billy Torton"}]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;return e},U=n(72),C=n(80),A=n(78),F=Object(k.c)({profilePage:T.b,messagesPage:E.b,sidebar:P,usersPage:U.a,auth:O.a,form:A.a,app:S}),L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.d,z=Object(k.e)(F,L(Object(k.a)(C.a))),R=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,302))})),D=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,300))})),G=a.a.lazy((function(){return n.e(7).then(n.bind(null,301))})),M=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,299))})),H=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initialize()}},{key:"render",value:function(){return this.props.initializing?Object(j.jsxs)("div",{className:"app-wrapper",children:[Object(j.jsx)(m,{}),Object(j.jsx)(w,{}),Object(j.jsxs)("main",{className:"app-wrapper__content",children:[Object(j.jsx)(f.b,{path:"/profile/:userId?",render:function(){return Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)(N.a,{}),children:Object(j.jsx)(D,{})})}}),Object(j.jsx)(f.b,{path:"/messages",render:function(){return Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)(N.a,{}),children:Object(j.jsx)(R,{})})}}),Object(j.jsx)(f.b,{path:"/users",render:function(){return Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)(N.a,{}),children:Object(j.jsx)(G,{})})}}),Object(j.jsx)(f.b,{path:"/login",render:function(){return Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)(N.a,{}),children:Object(j.jsx)(M,{})})}})]})]}):Object(j.jsx)(N.a,{})}}]),n}(a.a.Component),B=Object(k.d)(f.f,Object(h.b)((function(e){return{initializing:e.app.initializing}}),{initialize:function(){return function(e){var t=e(Object(O.b)());Promise.all([t]).then((function(){e({type:_})}))}}}))(H),J=function(e){return Object(j.jsx)(d.a,{children:Object(j.jsx)(h.a,{store:z,children:Object(j.jsx)(B,{})})})};c.a.render(Object(j.jsx)(J,{}),document.getElementById("root"))},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return j}));var r=n(6),a=n.n(r),s=n(12),c=n(3),i=n(9),u=n(45),o="auth/SET-AUTH-USER-DATA",l={userId:null,email:null,login:null,isAuth:!1},f=function(e,t,n,r){return{type:o,payload:{userId:e,email:t,login:n,isAuth:r}}},d=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.getUserData();case 2:0===(n=e.sent).resultCode&&(r=n.data,s=r.id,c=r.email,u=r.login,t(f(s,c,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(e,t,n){return function(){var r=Object(s.a)(a.a.mark((function r(s){var c,o,l;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.logIn(e,t,n);case 2:0===(c=r.sent).resultCode?s(d()):(o=c.messages.length>0?c.messages[0]:"Something went wrong",l=Object(u.a)("login",{_error:o}),s(l));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},j=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logOut();case 2:0===e.sent.resultCode&&t(f(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n=Object(c.a)(Object(c.a)({},e),t.payload);return n;default:return e}}},27:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/spinner.241a2171.svg",a=(n(162),n(2));t.a=function(e){return Object(a.jsx)("div",{className:"preloader",children:Object(a.jsx)("img",{src:r})})}},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return O}));var r=n(6),a=n.n(r),s=n(12),c=n(26),i=n(3),u=n(9),o="profile/ADD-POST",l="profile/SET-USER-PROFILE",f="profile/SET-USER-STATUS",d={posts:[{id:1,name:"Sasha Torn",postText:"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0434\u0432\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0442\u0440\u0430\u043a\u0442\u043e\u0432\u043a\u0438 \u043f\u043e\u043d\u044f\u0442\u0438\u044f \xab\u0442\u0435\u043a\u0441\u0442\xbb: \u0438\u043c\u043c\u0430\u043d\u0435\u043d\u0442\u043d\u0430\u044f (\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u0430\u044f, \u0444\u0438\u043b\u043e\u0441\u043e\u0444\u0441\u043a\u0438 \u043d\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u0430\u044f) \u0438 \u0440\u0435\u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0442\u0438\u0432\u043d\u0430\u044f (\u0431\u043e\u043b\u0435\u0435 \u0447\u0430\u0441\u0442\u043d\u0430\u044f)."},{id:2,name:"Hope Smith",postText:"\u0418\u043c\u043c\u0430\u043d\u0435\u043d\u0442\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043f\u043e\u0434\u0440\u0430\u0437\u0443\u043c\u0435\u0432\u0430\u0435\u0442 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u043a \u0442\u0435\u043a\u0441\u0442\u0443 \u043a\u0430\u043a \u043a \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u043e\u0439 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438, \u043d\u0430\u0446\u0435\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043d\u0430 \u0432\u044b\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0435\u0433\u043e \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b."}],profile:null,status:""},b=function(e){return{type:o,newPost:e}},j=function(e){return{type:f,status:e}},p=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getProfile(e);case 2:r=t.sent,n({type:l,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(j(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(j(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n={id:3,name:"Tom Burkard",postText:t.newPost},r=Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n])});return r;case l:var a=Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});return a;case f:var s=Object(i.a)(Object(i.a)({},e),{},{status:t.status});return s;default:return e}}},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(26),a=n(3),s="ADD-MESSAGE",c={dialogs:[{id:1,name:"John"},{id:2,name:"Antony"},{id:3,name:"Mia"},{id:4,name:"Jessica"},{id:5,name:"Alex"}],messages:[{id:1,message:"Hi!"},{id:2,message:"Hello!"},{id:3,message:"How are you?"},{id:4,message:"Thanks, I'm fine."}]},i=function(e){return{type:s,newMessage:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:6,message:t.newMessage},i=Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});return i;default:return e}}},72:function(e,t,n){"use strict";n.d(t,"b",(function(){return O})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return m})),n.d(t,"f",(function(){return x})),n.d(t,"d",(function(){return w})),n.d(t,"h",(function(){return y})),n.d(t,"c",(function(){return S}));var r=n(6),a=n.n(r),s=n(12),c=n(26),i=n(3),u=n(9),o="users/FOLLOW",l="users/UNFOLLOW",f="users/SET-USERS",d="users/SET-CURRENT-PAGE",b="users/SET-TOTAL-USERS-COUNT",j="users/TOGGLE-IS-FETCHING",p="users/TOGGLE-IS-FOLLOWING-PROGRESS",h={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,isFollowingProgress:[]},O=function(e){return{type:o,userId:e}},g=function(e){return{type:l,userId:e}},m=function(e){return{type:d,currentPage:e}},v=function(e){return{type:j,isFetching:e}},x=function(e,t){return{type:p,isFetching:e,userId:t}},w=function(e,t){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(v(!0)),r(m(e)),n.next=4,u.c.getUsers(e,t);case 4:s=n.sent,r(v(!1)),r((c=s.items,{type:f,users:c})),r((a=s.totalCount,{type:b,totalUsersCount:a}));case 8:case"end":return n.stop()}var a,c}),n)})));return function(e){return n.apply(this,arguments)}}()},_=function(){var e=Object(s.a)(a.a.mark((function e(t,n,r,s){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(s(n)),t(x(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),y=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=u.c.unfollowUser.bind(u.c),_(n,e,r,g);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=u.c.followUser.bind(u.c),_(n,e,r,O);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n=Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});return n;case l:var r=Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});return r;case f:var a=Object(i.a)(Object(i.a)({},e),{},{users:t.users});return a;case d:var s=Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});return s;case b:var u=Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsersCount});return u;case j:var O=Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});return O;case p:var g=Object(i.a)(Object(i.a)({},e),{},{isFollowingProgress:t.isFetching?[].concat(Object(c.a)(e.isFollowingProgress),[t.userId]):e.isFollowingProgress.filter((function(e){return e!=t.userId}))});return g;default:return e}}},9:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(79),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"0283ad88-0b5d-4502-b0e0-83f1356d4474"}}),s={getProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status ",{status:e}).then((function(e){return e.data}))}},c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollowUser:function(e){return a.delete("follow/".concat(e),{}).then((function(e){return e.data}))},followUser:function(e){return a.post("follow/".concat(e),{},{}).then((function(e){return e.data}))}},i={getUserData:function(){return a.get("auth/me").then((function(e){return e.data}))},logIn:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logOut:function(){return a.delete("auth/login").then((function(e){return e.data}))}}}},[[223,2,3]]]);
//# sourceMappingURL=main.46fe23af.chunk.js.map