(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[7],{228:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(3),s=n(33),o=n(34),i=n(36),a=n(35),c=n(0),u=n.n(c),l=n(7),g=n(20),f=n(2),p=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var t=function(t){Object(i.a)(c,t);var n=Object(a.a)(c);function c(){return Object(s.a)(this,c),n.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return this.props.isAuth?Object(f.jsx)(e,Object(r.a)({},this.props)):Object(f.jsx)(l.a,{to:"/login"})}}]),c}(u.a.Component);return Object(g.b)(p)(t)}},234:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(57);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,s=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){s=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(s)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},248:function(e,t,n){},297:function(e,t,n){},301:function(e,t,n){"use strict";n.r(t);var r=n(33),s=n(34),o=n(36),i=n(35),a=n(0),c=n.n(a),u=n(20),l=n(72),g=(n(248),n(234)),f=(n(297),n(2)),p=function(e){for(var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,o=e.portionSize,i=void 0===o?10:o,c=Math.ceil(t/n),u=[],l=1;l<=c;l++)u.push(l);var p=Math.ceil(c/i),b=Object(a.useState)(1),j=Object(g.a)(b,2),h=j[0],d=j[1],O=(h-1)*n+1,m=h*n;return Object(f.jsxs)("div",{className:"pagination",children:[h>1&&Object(f.jsx)("button",{className:"pagination__btn pagination__btn--prev",onClick:function(){d(h-1)},children:"\u2190 prev"}),Object(f.jsx)("div",{className:"pagination__pages-number",children:u.filter((function(e){return e>=O&&e<=m})).map((function(e){return Object(f.jsx)("span",{onClick:function(t){s(e)},className:'pagination__btn" '.concat(r===e?"active-page":""),children:e})}))}),p>h&&Object(f.jsx)("button",{className:"pagination__btn pagination__btn--next",onClick:function(){d(h+1)},children:"next \u2192"})]})},b=n.p+"static/media/user_icon.6243cb6f.png",j=n(17),h=function(e){var t=e.user,n=e.isFollowingProgress,r=e.followUser,s=e.unfollowUser;return Object(f.jsxs)("div",{className:"user__item",children:[Object(f.jsxs)("div",{className:"user__avatar",children:[Object(f.jsx)("div",{className:"user__photo",children:Object(f.jsx)(j.b,{to:"/profile/"+t.id,children:Object(f.jsx)("img",{src:null!==t.photos.small?t.photos.small:b,alt:""})})}),t.followed?Object(f.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},className:"user__btn user__btn--unfollow",children:"unfollow"}):Object(f.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},className:"user__btn user__btn--follow",children:"follow"})]}),Object(f.jsx)("div",{className:"user__info",children:Object(f.jsxs)("div",{className:"user__info-left",children:[Object(f.jsx)("div",{className:"user__name",children:t.name}),Object(f.jsx)("div",{className:"user__status",children:t.status})]})})]})},d=function(e){return Object(f.jsxs)("div",{className:"user__page",children:[Object(f.jsx)("div",{className:"user__list",children:e.users.map((function(t){return Object(f.jsx)(h,{user:t,isFollowingProgress:e.isFollowingProgress,followUser:e.followUser,unfollowUser:e.unfollowUser},t.id)}))}),Object(f.jsx)(p,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged})]})},O=n(27),m=n(228),_=n(22),v=function(e){return e.usersPage.users},w=function(e){return e.usersPage.pageSize},P=function(e){return e.usersPage.totalUsersCount},x=function(e){return e.usersPage.currentPage},U=function(e){return e.usersPage.isFetching},C=function(e){return e.usersPage.isFollowingProgress},y=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).onPageChanged=function(t){var n=e.props;(0,n.getUsers)(t,n.pageSize)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.getUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[this.props.isFetching?Object(f.jsx)(O.a,{}):null,Object(f.jsx)(d,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,toggleIsFollowingProgress:this.props.toggleIsFollowingProgress,isFollowingProgress:this.props.isFollowingProgress,followUser:this.props.followUser,unfollowUser:this.props.unfollowUser})]})}}]),n}(c.a.Component),N=Object(_.d)(Object(u.b)((function(e){return{users:v(e),pageSize:w(e),totalUsersCount:P(e),currentPage:x(e),isFetching:U(e),isFollowingProgress:C(e)}}),{follow:l.b,unfollow:l.g,setCurrentPage:l.e,toggleIsFollowingProgress:l.f,getUsers:l.d,followUser:l.c,unfollowUser:l.h}),m.a)(y);t.default=N}}]);
//# sourceMappingURL=7.98e28eeb.chunk.js.map