(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[4],{224:function(t,e,s){"use strict";s.d(e,"b",(function(){return u})),s.d(e,"a",(function(){return l}));var n=s(3),r=s(236),a=(s(0),s(225),s(2)),i=["input","meta","child"],c=["input","meta","child"],o=function(t){t.input;var e=t.meta,s=t.children,n=e.touched,r=e.error,i=n&&r;return Object(a.jsxs)("div",{className:"form-control "+(i?"error":""),children:[s,i&&Object(a.jsx)("span",{children:r})]})},u=function(t){var e=t.input,s=(t.meta,t.child,Object(r.a)(t,i));return Object(a.jsx)(o,Object(n.a)(Object(n.a)({},t),{},{children:Object(a.jsx)("textarea",Object(n.a)(Object(n.a)({},e),s))}))},l=function(t){var e=t.input,s=(t.meta,t.child,Object(r.a)(t,c));return Object(a.jsx)(o,Object(n.a)(Object(n.a)({},t),{},{children:Object(a.jsx)("input",Object(n.a)(Object(n.a)({},e),s))}))}},225:function(t,e,s){},226:function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"a",(function(){return r}));var n=function(t){if(!t)return"Field is required"},r=function(t){return function(e){if(e.length>t)return"Max length is"+t+"symbols"}}},228:function(t,e,s){"use strict";s.d(e,"a",(function(){return d}));var n=s(3),r=s(33),a=s(34),i=s(36),c=s(35),o=s(0),u=s.n(o),l=s(7),p=s(20),j=s(2),b=function(t){return{isAuth:t.auth.isAuth}},d=function(t){var e=function(e){Object(i.a)(o,e);var s=Object(c.a)(o);function o(){return Object(r.a)(this,o),s.apply(this,arguments)}return Object(a.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(j.jsx)(t,Object(n.a)({},this.props)):Object(j.jsx)(l.a,{to:"/login"})}}]),o}(u.a.Component);return Object(p.b)(b)(e)}},234:function(t,e,s){"use strict";e.a=s.p+"static/media/user_icon.6243cb6f.png"},235:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s(57);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],n=!0,r=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(s.push(i.value),!e||s.length!==e);n=!0);}catch(o){r=!0,a=o}finally{try{n||null==c.return||c.return()}finally{if(r)throw a}}return s}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},293:function(t,e,s){},294:function(t,e,s){},295:function(t,e,s){},296:function(t,e,s){},297:function(t,e,s){},301:function(t,e,s){"use strict";s.r(e);var n=s(3),r=s(33),a=s(34),i=s(36),c=s(35),o=s(0),u=s.n(o),l=s(20),p=(s(293),s(27)),j=s(235),b=(s(294),s(2)),d=function(t){var e=Object(o.useState)(!1),s=Object(j.a)(e,2),n=s[0],r=s[1],a=Object(o.useState)(t.status),i=Object(j.a)(a,2),c=i[0],u=i[1];Object(o.useEffect)((function(){u(t.status)}),[t.status]);return Object(b.jsxs)("div",{className:"status",children:[!n&&Object(b.jsx)("div",{className:"status__state",onDoubleClick:function(){r(!0)},children:t.status||"Status empty"}),n&&Object(b.jsx)("input",{className:"status__input",type:"text",value:t.status,onBlur:function(){r(!1)},onChange:function(e){u(e.currentTarget.value),t.updateUserStatus(c)},autoFocus:!0})]})},f=s(234),h=s(56),O=function(t){var e=t.profile,s=t.status,n=t.updateUserStatus,r=t.isOwner,a=t.saveUserPhoto;if(!e)return Object(b.jsx)(p.a,{});return Object(b.jsxs)("div",{className:"profile__info",children:[Object(b.jsxs)("div",{className:"profile__photo",children:[Object(b.jsx)("img",{src:e.photos.large||f.a}),r&&Object(b.jsxs)("label",{for:"upload-photo",className:"profile__btn-upload",children:[Object(b.jsx)("span",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e"}),Object(b.jsx)("input",{id:"upload-photo",type:"file",onChange:function(t){t.target.files.length&&a(t.target.files[0])}})]})]}),Object(b.jsxs)("div",{className:"profile__data",children:[Object(b.jsx)("div",{className:"profile__name",children:e.fullName}),Object(b.jsx)(d,{status:s,updateUserStatus:n}),Object(b.jsxs)("ul",{className:"profile__items",children:[Object(b.jsxs)("li",{className:"profile__item birth-date",children:["Date of birth:",Object(b.jsx)("span",{className:"date",children:"XX"}),Object(b.jsx)("span",{className:"month",children:"XX"}),Object(b.jsx)("span",{className:"year",children:"XXXX"})]}),Object(b.jsxs)("li",{className:"profile__item",children:["City: ",Object(b.jsx)("span",{children:"Unknown"})]}),Object(b.jsxs)("li",{className:"profile__item",children:["Education: ",Object(b.jsx)("span",{children:"Unknown"})]}),Object(b.jsxs)("li",{className:"profile__item",children:["Website: ",Object(b.jsx)("span",{children:"Unknown"})]})]})]})]})},m=(s(295),s(296),s(102)),x=s(103),v=s(226),_=s(224),N=u.a.memo((function(t){var e=t.posts.map((function(t){return Object(b.jsxs)("li",{className:"post__item",children:[Object(b.jsx)("div",{className:"post__photo",children:Object(b.jsx)("img",{src:""})}),Object(b.jsxs)("div",{className:"post__content",children:[Object(b.jsx)("div",{className:"post__name",children:t.name}),Object(b.jsx)("p",{className:"post__text",children:t.postText})]})]})}));return Object(b.jsxs)("div",{className:"post__wrapper",children:[Object(b.jsx)("ul",{className:"post__list",children:e}),Object(b.jsx)(U,{onSubmit:function(e){t.addPost(e.newPost)}})]})})),y=Object(v.a)(10),U=Object(x.a)({form:"posts"})((function(t){var e=t.handleSubmit;return Object(b.jsxs)("form",{onSubmit:e,className:"post-form",children:[Object(b.jsx)(m.a,{className:"post-form__field",name:"newPost",component:_.b,validate:[v.b,y]}),Object(b.jsx)("button",{className:"post-form__btn",children:"Add Post"})]})})),g=N,P=Object(l.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(h.a)(e))}}}))(g),S=(s(297),function(t){return Object(b.jsxs)("div",{className:"profile",children:[Object(b.jsx)(O,{profile:t.profile,status:t.status,updateUserStatus:t.updateUserStatus,isOwner:t.isOwner,saveUserPhoto:t.saveUserPhoto}),Object(b.jsx)(P,{})]})}),w=s(7),k=s(228),I=s(22),A=function(t){Object(i.a)(s,t);var e=Object(c.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(a.a)(s,[{key:"updateProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"componentDidMount",value:function(){this.updateProfile()}},{key:"componentDidUpdate",value:function(t,e,s){this.props.match.params.userId!=t.match.params.userId&&this.updateProfile()}},{key:"render",value:function(){return Object(b.jsx)(S,Object(n.a)(Object(n.a)({},this.props),{},{rofile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,isOwner:!this.props.match.params.userId,saveUserPhoto:this.props.saveUserPhoto}))}}]),s}(u.a.Component),X=Object(I.d)(Object(l.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:h.c,getUserStatus:h.d,updateUserStatus:h.f,saveUserPhoto:h.e}),w.f,k.a)(A);e.default=X}}]);
//# sourceMappingURL=4.c48b501d.chunk.js.map