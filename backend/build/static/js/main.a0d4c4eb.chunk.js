(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(20),s=n.n(c),o=n(13),i=(n(97),n(98),n(8)),l=n(9),u=n(3),d=n(7),j=n(11),p=n(141),b=n(146),O=n(142),m=n(15),f=(n(43),n(35)),h=n(45),v=n(82),x=n(81),g="USER_LOGIN_REQUEST",y="USER_LOGIN_SUCCESS",S="USER_LOGIN_FAIL",E="USER_REGISTER_REQUEST",N="USER_REGISTER_SUCCESS",C="USER_REGISTER_FAIL",w="USER_REGISTER_RESET",_="USER_LOGOUT",k="GET_USER_REQUEST",T="GET_USER_SUCCESS",U="GET_USER_FAIL",I="GET_LOGGEDIN_USER_REQUEST",R="GET_LOGGEDIN_USER_SUCCESS",P="GET_LOGGEDIN_USER_FAIL",G="USER_UPDATE_REQUEST",F="USER_UPDATE_SUCCESS",D="USER_UPDATE_FAIL",B="GET_FRIENDS_REQUEST",L="GET_FRIENDS_SUCCESS",J="GET_FRIENDS_FAIL",A={user:{},loading:!1,error:"",success:!1},Q={user:{},loading:!1,error:"",success:!1},H={friends:[],loading:!1,error:"",success:!1},z="CREATE_POST_REQUEST",Y="CREATE_POST_SUCCESS",M="CREATE_POST_REQUEST",K="GET_POST_REQUEST",W="GET_POST_SUCCESS",q="GET_POST_REQUEST",V="GET_POST_BY_ID_REQUEST",X="GET_POST_BY_ID_SUCCESS",Z="GET_POST_BY_ID_REQUEST",$="UPDATE_POST_REQUEST",ee="UPDATE_POST_SUCCESS",te="UPDATE_POST_REQUEST",ne="UPDATE_POST_RESET",ae={post:{},loading:!1,success:!1,error:""},re={posts:[],loading:!1,success:!1,error:""},ce={post:{},loading:!1,success:!1,error:""},se=Object(h.combineReducers)({userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case y:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,success:!0,error:""});case S:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:t.payload});case _:return Object(u.a)(Object(u.a)({},e),{},{user:null,loading:!1,success:!1,error:""});default:return e}},getLoggedInUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case R:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,success:!0,user:t.payload,error:""});case P:return Object(u.a)(Object(u.a)({},e),{},{error:t.payload});default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case N:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,user:t.payload,success:!0,error:""});case C:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:t.payload});case w:return Object(u.a)(Object(u.a)({},e),{},{success:!1});default:return e}},getUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case T:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,success:!0,user:t.payload,error:""});case U:return Object(u.a)(Object(u.a)({},e),{},{error:t.payload});default:return e}},updateUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case F:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,success:!0,user:t.payload,error:""});case D:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:t.payload});default:return e}},createPost:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case Y:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,post:t.payload,success:!0,error:""});case M:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:t.payload});default:return e}},getPosts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case W:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,posts:t.payload,error:""});case q:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:t.payload});default:return e}},updatePost:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case ee:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,post:t.payload,success:!0,error:""});case te:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:t.payload});case ne:return Object(u.a)(Object(u.a)({},e),{},{success:!1});default:return e}},getPostById:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case X:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,post:t.payload,error:""});case Z:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:t.payload});default:return e}},getFriends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case L:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,success:!0,friends:t.payload,error:""});case J:return Object(u.a)(Object(u.a)({},e),{},{loading:!1,error:t.payload});default:return e}}}),oe=[v.a],ie=Object(h.createStore)(se,Object(x.composeWithDevTools)(h.applyMiddleware.apply(void 0,oe))),le=o.c,ue=ie,de=(n(99),n(16)),je=n(10),pe=n.n(je),be=n(17),Oe=n.n(be);Oe.a.defaults.withCredentials=!0;var me=function(e){return function(){var t=Object(de.a)(pe.a.mark((function t(n){var a,r;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:k}),t.prev=1,t.next=4,Oe.a.get("/user/"+e);case 4:a=t.sent,r=a.data,n({type:T,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:U,payload:t.t0.messge});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},fe=function(e,t){return function(){var n=Object(de.a)(pe.a.mark((function n(a){var r,c;return pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:G}),n.prev=1,n.next=4,Oe.a.put("/user/"+e,t);case 4:r=n.sent,c=r.data,a({type:F,payload:c}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),a({type:D,payload:n.t0.message});case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},he=n(70),ve=n.n(he);function xe(){var e,t=ve.a.get("token")?null===(e=ve.a.get("token"))||void 0===e?void 0:e.split(":")[4].split("}")[0].slice(1,-1):null;localStorage.setItem("user",JSON.stringify(t))}function ge(e,t,n){return ye.apply(this,arguments)}function ye(){return(ye=Object(de.a)(pe.a.mark((function e(t,n,a){var r;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(r=new FormData).append("".concat(n),t),"post"!==a){e.next=9;break}return e.next=6,Oe.a.post("/posts/upload",r,{headers:{"Content-Type":"multipart/form-data"}});case 6:e.t0=e.sent,e.next=19;break;case 9:if("cover"!==a){e.next=15;break}return e.next=12,Oe.a.post("/user/upload/cover",r,{headers:{"Content-Type":"multipart/form-data"}});case 12:e.t1=e.sent,e.next=18;break;case 15:return e.next=17,Oe.a.post("/user/upload/profile",r,{headers:{"Content-Type":"multipart/form-data"}});case 17:e.t1=e.sent;case 18:e.t0=e.t1;case 19:return e.abrupt("return",e.t0);case 22:e.prev=22,e.t2=e.catch(0),m.b.error("Image Upload Failed");case 25:case"end":return e.stop()}}),e,null,[[0,22]])})))).apply(this,arguments)}function Se(e,t){return e?"/".concat(e):"cover"===t?"images/cover.jpg":"profile"===t?"images/sample-profile-pic.png":""}function Ee(e,t){return e===t}function Ne(e,t){return null===e||void 0===e?void 0:e.some((function(e){return e===t}))}var Ce=n(2),we=function(){var e=Object(o.b)(),t=Object(i.f)(),n=le((function(e){return e.userLogin})),r=n.success,c=n.loading,s=Object(a.useState)({email:"",password:""}),h=Object(d.a)(s,2),v=h[0],x=h[1],E=v.email,N=v.password;function C(e){var t=e.currentTarget,n=t.name,a=t.value;x(Object(u.a)(Object(u.a)({},v),{},Object(l.a)({},n,a)))}function w(t){t.preventDefault(),e(function(e,t){return function(){var n=Object(de.a)(pe.a.mark((function n(a){return pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:g}),n.prev=1,n.next=4,Oe.a.post("/auth/login",{email:e,password:t});case 4:n.sent.data,a({type:y}),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),a({type:S,payload:n.t0.message}),m.b.error("Invalid Credentials");case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()}(E,N))}return Object(a.useEffect)((function(){r&&(xe(),t("/"))}),[r]),Object(Ce.jsxs)(Ce.Fragment,{children:[Object(Ce.jsx)(m.a,{position:"top-right",autoClose:5e3}),c?Object(Ce.jsx)(p.a,{animation:"border",variant:"primary"}):Object(Ce.jsx)("div",{className:"login-form",children:Object(Ce.jsxs)(b.a,{className:"form",children:[Object(Ce.jsx)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(Ce.jsx)(b.a.Control,{className:"input",type:"email",name:"email",placeholder:"Enter email",onChange:C})}),Object(Ce.jsx)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(Ce.jsx)(b.a.Control,{className:"input",type:"password",name:"password",placeholder:"Password",onChange:C})}),Object(Ce.jsx)(O.a,{variant:"outline-dark",className:"sub-btn w-100 my-2",type:"submit",onClick:function(e){return w(e)},children:"Login"}),Object(Ce.jsxs)("p",{children:["Do not have an account? ",Object(Ce.jsx)(j.b,{style:{textDecoration:"none"},to:"/register",children:"Register Here!!"})]}),Object(Ce.jsx)("h4",{children:"OR"}),Object(Ce.jsxs)(O.a,{variant:"outline-dark",className:"sub-btn w-100 my-2",type:"submit",onClick:function(e){return function(e){e.preventDefault(),window.open("/google","_self")}(e)},children:[Object(Ce.jsx)("span",{children:Object(Ce.jsx)(f.b,{})})," Login with Google"]})]})})]})},_e=(n(120),function(){return Object(Ce.jsx)("div",{className:"main",children:Object(Ce.jsx)(we,{})})}),ke=(n(121),function(){var e=Object(o.b)(),t=le((function(e){return e.userRegister})),n=t.loading,r=t.success,c=Object(i.f)(),s=Object(a.useState)({name:"",email:"",password:"",phone:"",location:"",confirmPassword:""}),f=Object(d.a)(s,2),h=f[0],v=f[1],x=h.name,g=h.email,y=h.password,S=h.confirmPassword,_=h.phone,k=h.location;function T(e){var t=e.currentTarget,n=t.name,a=t.value;v(Object(u.a)(Object(u.a)({},h),{},Object(l.a)({},n,a)))}function U(t){return t.preventDefault(),x&&g&&y&&S&&_&&k?y!==S?alert("Password and Confirm Password must be same"):void e(function(e,t,n,a,r){return function(){var c=Object(de.a)(pe.a.mark((function c(s){var o,i;return pe.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s({type:E}),c.prev=1,c.next=4,Oe.a.post("/auth/register",{name:e,email:t,password:n,phone:a,location:r});case 4:o=c.sent,i=o.data,s({type:N,payload:i}),m.b.success("Registration Successful"),c.next=14;break;case 10:c.prev=10,c.t0=c.catch(1),s({type:C,payload:c.t0.message}),m.b.error("Registration Failed");case 14:case"end":return c.stop()}}),c,null,[[1,10]])})));return function(e){return c.apply(this,arguments)}}()}(x,g,y,_,k)):alert("Please fill all the fields")}return Object(a.useEffect)((function(){r&&(c("/login"),e({type:w}))}),[r]),Object(Ce.jsxs)(Ce.Fragment,{children:[Object(Ce.jsx)(m.a,{position:"top-right",autoClose:5e3}),n?Object(Ce.jsx)(p.a,{animation:"border",variant:"primary"}):Object(Ce.jsx)("div",{className:"register-form",children:Object(Ce.jsxs)(b.a,{className:"form",children:[Object(Ce.jsx)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(Ce.jsx)(b.a.Control,{className:"input",name:"name",type:"text",placeholder:"Enter Name",onChange:T})}),Object(Ce.jsx)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(Ce.jsx)(b.a.Control,{className:"input",name:"email",type:"email",placeholder:"Enter email",onChange:T})}),Object(Ce.jsx)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(Ce.jsx)(b.a.Control,{className:"input",name:"phone",type:"text",placeholder:"Enter phone number",onChange:T})}),Object(Ce.jsx)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(Ce.jsx)(b.a.Control,{className:"input",name:"location",type:"text",placeholder:"Enter your location",onChange:T})}),Object(Ce.jsx)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(Ce.jsx)(b.a.Control,{className:"input",name:"password",type:"password",placeholder:"Password",onChange:T})}),Object(Ce.jsx)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:Object(Ce.jsx)(b.a.Control,{className:"input",name:"confirmPassword",type:"password",placeholder:"Confirm Password",onChange:T})}),Object(Ce.jsx)(O.a,{variant:"outline-dark",className:"sub-btn w-100 my-2",type:"submit",onClick:function(e){return U(e)},children:"Register"}),Object(Ce.jsxs)("p",{children:["Already have an account? ",Object(Ce.jsx)(j.b,{style:{textDecoration:"none"},to:"/login",children:"Login Here!!"})]})]})})]})}),Te=(n(122),function(){return Object(Ce.jsx)("div",{className:"main",children:Object(Ce.jsx)(ke,{})})}),Ue=n(143),Ie=n(144),Re=n(83),Pe=(n(123),n(147)),Ge=n(145),Fe=function(){var e=Object(o.b)(),t=Object(i.f)(),n=le((function(e){return e.getUser})),r=(n.loading,n.error,n.user);return Object(a.useEffect)((function(){xe(),e(me(JSON.parse("".concat(localStorage.getItem("user"))))),JSON.parse("".concat(localStorage.getItem("user")))&&null!==JSON.parse("".concat(localStorage.getItem("user")))||t("/login")}),[e]),Object(Ce.jsx)(Pe.a,{collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"dark",children:Object(Ce.jsxs)(Ue.a,{children:[Object(Ce.jsx)(Pe.a.Brand,{as:j.b,to:"/",children:"Facebook"}),Object(Ce.jsx)(Pe.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(Ce.jsx)(Pe.a.Collapse,{id:"responsive-navbar-nav",children:Object(Ce.jsxs)(Ge.a,{className:"nav-right",children:[Object(Ce.jsxs)(Ge.a.Link,{as:j.b,to:"/profile",style:{color:"white"},children:["Hi ",null===r||void 0===r?void 0:r.name]}),Object(Ce.jsx)(Ge.a.Link,{as:O.a,style:{color:"white"},eventKey:2,onClick:function(){return e((n=t,function(){var e=Object(de.a)(pe.a.mark((function e(t){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Oe.a.get("/auth/logout");case 3:t({type:_}),localStorage.removeItem("user"),n("/login"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()));var n},children:"Logout"})]})})]})})};Oe.a.defaults.withCredentials=!0;var De=function(e,t,n){return function(){var a=Object(de.a)(pe.a.mark((function a(r){var c,s;return pe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:z}),a.prev=1,a.next=4,Oe.a.post("/posts/create",{description:e,image:t,postedBy:n});case 4:c=a.sent,s=c.data,r({type:Y,payload:s}),m.b.success("Post Created"),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(1),r({type:M,payload:a.t0.message}),m.b.error("Post Creation Failed");case 14:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}()},Be=function(){return function(){var e=Object(de.a)(pe.a.mark((function e(t){var n,a;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:K}),e.prev=1,e.next=4,Oe.a.get("/posts");case 4:n=e.sent,a=n.data,t({type:W,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:q,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},Le=function(e,t){return function(){var n=Object(de.a)(pe.a.mark((function n(a){var r,c;return pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:$}),n.prev=1,n.next=4,Oe.a.put("/posts/"+e,t);case 4:r=n.sent,c=r.data,a({type:ee,payload:c}),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),a({type:te,payload:n.t0.message}),m.b.error("Operation failed due to ".concat(n.t0.message," error"));case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},Je=(n(127),n(48)),Ae=function(e){var t,n,r,c,s,l=e.post,u=Object(a.useState)(""),p=Object(d.a)(u,2),f=p[0],h=p[1],v=Object(a.useState)(!1),x=Object(d.a)(v,2),g=x[0],y=x[1],S=Object(o.b)(),E=le((function(e){return e.updatePost})),N=E.post,C=E.success,w=Object(i.f)();return Object(a.useEffect)((function(){C&&g&&(h(""),y(!1),w("/posts/".concat(N._id)))}),[C,N]),Object(Ce.jsxs)(Ce.Fragment,{children:[Object(Ce.jsx)(m.a,{position:"top-right",autoClose:5e3}),Object(Ce.jsxs)("div",{className:"post-main",children:[Object(Ce.jsxs)("div",{className:"post-top",children:[Object(Ce.jsx)("img",{src:Se(null===(t=l.postedBy)||void 0===t?void 0:t.profilepic,"profile"),alt:"profilepic"}),Object(Ce.jsx)(j.b,{to:"/profile/".concat(null===(n=l.postedBy)||void 0===n?void 0:n._id),style:{textDecoration:"none"},children:Object(Ce.jsx)("p",{children:null===(r=l.postedBy)||void 0===r?void 0:r.name})})]}),l.image&&Object(Ce.jsx)("div",{className:"img-container",children:Object(Ce.jsx)(j.b,{to:"/posts/".concat(l._id),children:Object(Ce.jsx)("img",{src:"".concat("http://localhost:5000","/").concat(l.image),alt:"post"})})}),l.description&&Object(Ce.jsx)("div",{className:"content",children:Object(Ce.jsx)(j.b,{to:"/posts/".concat(l._id),style:{textDecoration:"none",color:"#000"},children:Object(Ce.jsx)("p",{children:l.description})})}),Object(Ce.jsxs)("div",{className:"like",children:[Object(Ce.jsx)("div",{className:"like-sub1",children:Object(Ce.jsxs)("span",{style:{color:"green",cursor:"pointer"},onClick:function(){return e=l._id,void S(Le(e,{likes:JSON.parse("".concat(localStorage.getItem("user")))}));var e},children:[Object(Ce.jsx)(Je.b,{}),null===(c=l.likes)||void 0===c?void 0:c.length]})}),Object(Ce.jsx)("div",{className:"like-sub2",children:Object(Ce.jsxs)("span",{style:{color:"red",cursor:"pointer"},onClick:function(){return e=l._id,void S(Le(e,{dislikes:JSON.parse("".concat(localStorage.getItem("user")))}));var e},children:[Object(Ce.jsx)(Je.a,{}),null===(s=l.dislikes)||void 0===s?void 0:s.length]})})]}),Object(Ce.jsx)("div",{className:"comment",children:Object(Ce.jsx)(b.a,{children:Object(Ce.jsxs)(b.a.Group,{className:"comment-gp",controlId:"exampleForm.ControlTextarea1",children:[Object(Ce.jsx)(b.a.Control,{type:"text",id:"comment",name:"comment",onChange:function(e){return h(e.currentTarget.value)}}),Object(Ce.jsx)(O.a,{variant:"outline-primary",id:"btn",onClick:function(e){return function(e,t,n){e.preventDefault(),""===f||void 0===f?alert("Please enter a comment"):(S(Le(t,{comments:{comment:f,commentedBy:n}})),y(!0))}(e,null===l||void 0===l?void 0:l._id,JSON.parse("".concat(localStorage.getItem("user"))))},children:"comment"})]})})})]})]})},Qe=(n(128),function(){var e=Object(o.b)(),t=le((function(e){return e.createPost})).success,n=le((function(e){return e.getPosts})).posts,r=le((function(e){return e.updatePost})),c=r.post,s=r.success;return Object(a.useEffect)((function(){e({type:ne}),e(Be())}),[t,e,s,c]),Object(Ce.jsx)("div",{className:"postloader-main",children:n&&n.map((function(e,t){return Object(Ce.jsx)(Ae,{post:e},t)}))})}),He=(n(129),n(149)),ze=function(){var e=Object(o.b)(),t=le((function(e){return e.getFriends})),n=t.friends;t.loading;return Object(a.useEffect)((function(){var t;e((t=JSON.parse("".concat(localStorage.getItem("user"))),function(){var e=Object(de.a)(pe.a.mark((function e(n){var a,r;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:B}),e.prev=1,e.next=4,Oe.a.get("/user/"+t+"/friends");case 4:a=e.sent,r=a.data,n({type:L,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n({type:J,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()))}),[]),Object(Ce.jsxs)("div",{className:"sidebar-main",children:[Object(Ce.jsx)("h3",{children:"Friends Online"}),0!==n.length?null===n||void 0===n?void 0:n.map((function(e,t){return Object(Ce.jsx)(j.b,{style:{textDecoration:"none",color:"#000"},to:"/profile/".concat(e._id),children:Object(Ce.jsxs)(He.a,{className:"card",body:!0,children:[Object(Ce.jsxs)("div",{className:"card-sub",children:[Object(Ce.jsx)("img",{src:Se(e.profilepic,"profile"),alt:"profile-img"}),Object(Ce.jsx)("h5",{children:e.name})]}),Object(Ce.jsx)("div",{className:"card-online"})]})},t)})):Object(Ce.jsx)("h5",{children:"None of your friends are online"})]})},Ye=(n(130),function(){var e=Object(o.b)(),t=le((function(e){return e.getUser})).user._id,n=le((function(e){return e.createPost})).post,r=Object(a.useState)(),c=Object(d.a)(r,2),s=c[0],i=c[1],l=Object(a.useState)(""),u=Object(d.a)(l,2),j=u[0],p=u[1];function f(){return(f=Object(de.a)(pe.a.mark((function n(a){var r,c;return pe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),s||j){n.next=4;break}return m.b.warning("Please select an image or write a description"),n.abrupt("return");case 4:if(s&&null!=s){n.next=9;break}e(De(j,"",t)),p(""),n.next=15;break;case 9:return n.next=11,ge(s,"post","post");case 11:r=n.sent,(c=r.data)&&e(De(j,c.file.path,t)),p("");case 15:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(a.useEffect)((function(){e(Be())}),[n,e]),Object(Ce.jsxs)(Ce.Fragment,{children:[Object(Ce.jsx)(m.a,{position:"top-right",autoClose:5e3}),Object(Ce.jsx)("div",{className:"topbar-main",children:Object(Ce.jsxs)(b.a,{className:"topbar-form",children:[Object(Ce.jsxs)(b.a.Group,{className:"topbar-form-group1",controlId:"formText",children:[Object(Ce.jsx)(b.a.Control,{as:"textarea",rows:2,cols:10,id:"text",value:j,name:"desc",onChange:function(e){return p(e.target.value)}}),Object(Ce.jsx)(b.a.Control,{type:"file",id:"post",name:"image",onChange:function(e){var t=e.target.files;if(t){var n=t[0];i(n)}}})]}),Object(Ce.jsx)(b.a.Group,{className:"topbar-form-group2",children:Object(Ce.jsx)(O.a,{id:"btn",type:"submit",variant:"outline-primary",onClick:function(e){return function(e){return f.apply(this,arguments)}(e)},children:"Post"})})]})})]})}),Me=(n(131),function(){return Object(Ce.jsxs)("div",{className:"home-main",children:[Object(Ce.jsx)(Fe,{}),Object(Ce.jsx)(Ue.a,{fluid:!0,className:"home-container",children:Object(Ce.jsxs)(Ie.a,{children:[Object(Ce.jsxs)(Re.a,{md:8,children:[Object(Ce.jsx)(Ye,{}),Object(Ce.jsx)(Qe,{})]}),Object(Ce.jsx)(Re.a,{md:4,children:Object(Ce.jsx)(ze,{})})]})})]})}),Ke=(n(132),n(148)),We=(n(133),function(e){var t=Object(o.b)(),n=le((function(e){return e.getUser})).user,r=le((function(e){return e.updateUser})),c=r.success,s=r.user,i=Object(a.useState)(),l=Object(d.a)(i,2),j=l[0],p=l[1];function m(){return m=Object(de.a)(pe.a.mark((function a(r,c){var s,o,i,l;return pe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c.preventDefault(),r&&null!=r){a.next=5;break}e.onHide(!1),a.next=18;break;case 5:if("cover"!==e.type){a.next=13;break}return a.next=8,ge(r,"cover","".concat(e.type));case 8:s=a.sent,o=s.data,t(fe(n._id,{coverpic:null===o||void 0===o?void 0:o.file.path})),a.next=18;break;case 13:return a.next=15,ge(r,"profile","".concat(e.type));case 15:i=a.sent,l=i.data,t(fe(n._id,{profilepic:null===l||void 0===l?void 0:l.file.path}));case 18:case"end":return a.stop()}}),a)}))),m.apply(this,arguments)}return Object(a.useEffect)((function(){c&&e.onHide(!1)}),[c,s]),Object(Ce.jsxs)(Ke.a,Object(u.a)(Object(u.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(Ce.jsx)(Ke.a.Header,{closeButton:!0,children:Object(Ce.jsxs)(Ke.a.Title,{id:"contained-modal-title-vcenter",children:["Upload ",e.type," picture"]})}),Object(Ce.jsx)(Ke.a.Body,{children:Object(Ce.jsx)(b.a,{className:"modal-form",children:Object(Ce.jsx)(b.a.Group,{className:"modal-form-group1",controlId:"formText",children:Object(Ce.jsx)(b.a.Control,{type:"file",id:"post",name:"image",onChange:function(e){var t=e.target.files;if(t){var n=t[0];p(n)}}})})})}),Object(Ce.jsx)(Ke.a.Footer,{children:Object(Ce.jsx)(O.a,{onClick:function(e){return function(e,t){return m.apply(this,arguments)}(j,e)},children:"Upload"})})]}))}),qe=function(){var e,t,n,r,c,s,h,v=Object(o.b)(),x=le((function(e){return e.getUser})).user,g=le((function(e){return e.getLoggedInUser})).user,y=le((function(e){return e.updateUser})),S=y.success,E=y.user,N=y.loading,C=Object(i.g)().id,w=Object(a.useState)(!1),_=Object(d.a)(w,2),k=_[0],T=_[1],U=Object(a.useState)(""),G=Object(d.a)(U,2),F=G[0],D=G[1],B=Object(a.useState)(!1),L=Object(d.a)(B,2),J=L[0],A=L[1],Q=Object(a.useState)(!1),H=Object(d.a)(Q,2),z=H[0],Y=H[1],M=Object(a.useState)(!1),K=Object(d.a)(M,2),W=K[0],q=K[1],V=Object(a.useState)({location:x.location,phone:x.phone,email:x.email}),X=Object(d.a)(V,2),Z=X[0],$=X[1],ee=Z.location,te=Z.phone,ne=Z.email;function ae(e){$(Object(u.a)(Object(u.a)({},Z),{},Object(l.a)({},e.target.name,e.target.value)))}function re(e){"profile"===e?(D("profile"),T(!0)):"cover"===e&&(D("cover"),T(!0))}function ce(e){"location"===e?(v(fe(JSON.parse("".concat(localStorage.getItem("user"))),{location:ee})),A(!1)):"phone"===e?(v(fe(JSON.parse("".concat(localStorage.getItem("user"))),{phone:te})),Y(!1)):"email"===e&&(v(fe(JSON.parse("".concat(localStorage.getItem("user"))),{email:ne})),q(!1))}return Object(a.useEffect)((function(){v(function(e){return function(){var t=Object(de.a)(pe.a.mark((function t(n){var a,r;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:I}),t.prev=1,t.next=4,Oe.a.get("/user/"+e);case 4:a=t.sent,r=a.data,n({type:R,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:P,payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(JSON.parse("".concat(localStorage.getItem("user"))))),v(me(C||JSON.parse("".concat(localStorage.getItem("user")))))}),[S,v,E]),Object(Ce.jsxs)(Ce.Fragment,{children:[Object(Ce.jsx)(m.a,{position:"top-right",autoClose:5e3}),Object(Ce.jsxs)("div",{className:"banner-main",children:[Object(Ce.jsx)(We,{show:k,onHide:T,type:F}),Object(Ce.jsx)("div",{className:"cover-img-container",children:Object(Ce.jsx)("img",{className:"cover-img",src:Se(null===x||void 0===x?void 0:x.coverpic,"cover"),alt:"cover-img"})}),Object(Ce.jsx)("div",{className:"profile-img-container",children:Object(Ce.jsx)("img",{className:"profile-img",src:Se(null===x||void 0===x?void 0:x.profilepic,"profile"),alt:"profile-img"})}),Object(Ce.jsxs)("div",{className:"banner-details",children:[Object(Ce.jsx)("h1",{children:x.name}),Object(Ce.jsxs)("div",{className:"banner-details-top",children:[Object(Ce.jsx)("p",{children:1===(null===x||void 0===x||null===(e=x.followers)||void 0===e?void 0:e.length)?"".concat(null===(t=x.followers)||void 0===t?void 0:t.length," follower"):"".concat(null===(n=x.followers)||void 0===n?void 0:n.length," followers")}),Object(Ce.jsxs)("p",{children:[null===x||void 0===x||null===(r=x.following)||void 0===r?void 0:r.length," following"]}),Object(Ce.jsx)("p",{children:1===(null===x||void 0===x||null===(c=x.friends)||void 0===c?void 0:c.length)?"".concat(null===(s=x.friends)||void 0===s?void 0:s.length," friend"):"".concat(null===(h=x.friends)||void 0===h?void 0:h.length," friends")})]}),Ee(JSON.parse("".concat(localStorage.getItem("user"))),x._id)?Object(Ce.jsxs)("div",{className:"banner-btn-container",children:[Object(Ce.jsx)(O.a,{variant:"outline-primary",className:"banner-btn",onClick:function(){return re("profile")},children:"Change Profile Pic"}),Object(Ce.jsx)(O.a,{variant:"outline-primary",className:"banner-btn",onClick:function(){return re("cover")},children:"Change Cover Pic"})]}):Object(Ce.jsxs)("div",{className:"banner-btn-container",children:[Object(Ce.jsx)(O.a,{variant:"outline-primary",className:"banner-btn",onClick:function(){v(fe(JSON.parse("".concat(localStorage.getItem("user"))),{friends:C}))},children:Ne(null===g||void 0===g?void 0:g.friends,C)?"Unfriend":"Add Friend"}),Object(Ce.jsx)(O.a,{variant:"outline-primary",className:"banner-btn",onClick:function(){v(fe(JSON.parse("".concat(localStorage.getItem("user"))),{following:C}))},children:Ne(null===g||void 0===g?void 0:g.following,C)?"Unfollow":"Follow"})]}),Object(Ce.jsxs)("div",{className:"banner-description",children:[J?Object(Ce.jsxs)(b.a,{className:"banner-form",children:[Object(Ce.jsx)(b.a.Group,{className:"mb-3",children:Object(Ce.jsx)(b.a.Control,{className:"input",type:"text",name:"location",value:ee,onChange:ae,placeholder:"Enter location"})}),Object(Ce.jsxs)(b.a.Group,{className:"mb-3",children:[Object(Ce.jsx)(O.a,{variant:"outline-primary",className:"banner-btn",type:"button",onClick:function(){return ce("location")},children:N?Object(Ce.jsx)(Ce.Fragment,{children:Object(Ce.jsx)(p.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})}):"Update"}),Object(Ce.jsx)(O.a,{variant:"outline-primary",className:"banner-btn",type:"button",onClick:function(){return A((function(e){return!e}))},children:"Cancel"})]})]}):Object(Ce.jsxs)("p",{children:[Object(Ce.jsx)("span",{style:{color:"blueviolet"},children:Object(Ce.jsx)(f.d,{})})," ",x.location,Ee(JSON.parse("".concat(localStorage.getItem("user"))),x._id)&&Object(Ce.jsx)(f.a,{style:{cursor:"pointer"},onClick:function(){return A((function(e){return!e}))}})]}),z?Object(Ce.jsxs)(b.a,{className:"banner-form",children:[Object(Ce.jsx)(b.a.Group,{className:"mb-3",children:Object(Ce.jsx)(b.a.Control,{className:"input",type:"text",name:"phone",value:te,onChange:ae,placeholder:"Enter phone"})}),Object(Ce.jsxs)(b.a.Group,{className:"mb-3",children:[Object(Ce.jsx)(O.a,{variant:"outline-primary",className:"banner-btn",type:"submit",onClick:function(){return ce("phone")},children:N?Object(Ce.jsx)(Ce.Fragment,{children:Object(Ce.jsx)(p.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})}):"Update"}),Object(Ce.jsx)(O.a,{variant:"outline-primary",className:"banner-btn",type:"button",onClick:function(){return Y((function(e){return!e}))},children:"Cancel"})]})]}):Object(Ce.jsxs)("p",{children:[Object(Ce.jsx)("span",{style:{color:"green"},children:Object(Ce.jsx)(f.c,{})})," ",x.phone,Ee(JSON.parse("".concat(localStorage.getItem("user"))),x._id)&&Object(Ce.jsx)(f.a,{style:{cursor:"pointer"},onClick:function(){return Y((function(e){return!e}))}})]}),W?Object(Ce.jsxs)(b.a,{className:"banner-form",children:[Object(Ce.jsx)(b.a.Group,{className:"mb-3",children:Object(Ce.jsx)(b.a.Control,{className:"input",type:"email",name:"email",value:ne,onChange:ae,placeholder:"Enter email"})}),Object(Ce.jsxs)(b.a.Group,{className:"mb-3",children:[Object(Ce.jsx)(O.a,{variant:"outline-primary",className:"banner-btn",type:"submit",onClick:function(){return ce("email")},children:N?Object(Ce.jsx)(Ce.Fragment,{children:Object(Ce.jsx)(p.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})}):"Update"}),Object(Ce.jsx)(O.a,{variant:"outline-primary",className:"banner-btn",type:"button",onClick:function(){return q((function(e){return!e}))},children:"Cancel"})]})]}):Object(Ce.jsxs)("p",{children:[Object(Ce.jsx)("span",{style:{color:""},children:Object(Ce.jsx)(Je.c,{})})," ",x.email,Ee(JSON.parse("".concat(localStorage.getItem("user"))),x._id)&&Object(Ce.jsx)(f.a,{style:{cursor:"pointer"},onClick:function(){return q((function(e){return!e}))}})]})]}),Object(Ce.jsx)(j.b,{to:"/",className:"btn btn-outline-primary banner-btn",children:"Back Home"})]})]})]})},Ve=(n(134),function(){return Object(Ce.jsx)("div",{className:"profile-main",children:Object(Ce.jsx)(qe,{})})}),Xe=(n(135),n(136),function(e){var t=e.comments;return console.log(t),Object(Ce.jsxs)("div",{className:"comments-main",children:[Object(Ce.jsx)("h3",{children:"Comments"}),null===t||void 0===t?void 0:t.map((function(e,t){return Object(Ce.jsxs)(He.a,{className:"card",body:!0,children:[Object(Ce.jsxs)("div",{className:"card-sub",children:[Object(Ce.jsx)(j.b,{to:"/profile/".concat(e.commentedBy._id),children:Object(Ce.jsx)("img",{src:Se(null===e||void 0===e?void 0:e.commentedBy.profilepic,"profile"),alt:"profilepic"})}),Object(Ce.jsx)("h5",{children:e.commentedBy.name})]}),Object(Ce.jsx)("p",{children:e.comment})]})}))]})}),Ze=function(){var e=Object(i.g)().id,t=Object(o.b)(),n=le((function(e){return e.getPostById})).post,r=le((function(e){return e.updatePost})),c=r.success,s=r.post;return Object(a.useEffect)((function(){t(function(e){return function(){var t=Object(de.a)(pe.a.mark((function t(n){var a,r;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:V}),t.prev=1,t.next=4,Oe.a.get("/posts/"+e);case 4:a=t.sent,r=a.data,n({type:X,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:Z,payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[e,t,c,s]),Object(Ce.jsx)("div",{className:"view-post-main",children:Object(Ce.jsx)(Ue.a,{fluid:!0,children:Object(Ce.jsxs)(Ie.a,{children:[Object(Ce.jsx)(Re.a,{md:8,children:Object(Ce.jsx)(Ae,{post:n})}),Object(Ce.jsx)(Re.a,{md:4,children:Object(Ce.jsx)(Xe,{comments:null===n||void 0===n?void 0:n.comments})})]})})})},$e=(n(137),function(){return Object(Ce.jsxs)("div",{className:"view-main",children:[Object(Ce.jsx)(Fe,{}),Object(Ce.jsx)(Ze,{})]})});var et=function(){return Object(Ce.jsxs)(i.c,{children:[Object(Ce.jsx)(i.a,{path:"/",element:Object(Ce.jsx)(Me,{})}),Object(Ce.jsx)(i.a,{path:"/login",element:Object(Ce.jsx)(_e,{})}),Object(Ce.jsx)(i.a,{path:"/register",element:Object(Ce.jsx)(Te,{})}),Object(Ce.jsx)(i.a,{path:"/profile",element:Object(Ce.jsx)(Ve,{})}),Object(Ce.jsx)(i.a,{path:"/profile/:id",element:Object(Ce.jsx)(Ve,{})}),Object(Ce.jsx)(i.a,{path:"/posts/:id",element:Object(Ce.jsx)($e,{})})]})},tt=(n(138),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,150)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))});s.a.render(Object(Ce.jsx)(r.a.StrictMode,{children:Object(Ce.jsx)(j.a,{children:Object(Ce.jsx)(o.a,{store:ue,children:Object(Ce.jsx)(et,{})})})}),document.getElementById("root")),tt()},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[139,1,2]]]);
//# sourceMappingURL=main.a0d4c4eb.chunk.js.map