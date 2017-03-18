webpackJsonp([1,2],[,,,,,,function(t,n,e){"use strict";var o=e(1),s=e(131),a=e(116),c=e.n(a),i=e(119),u=e.n(i),r=e(121),l=e.n(r),p=e(120),f=e.n(p);o.default.use(s.a),n.a=new s.a({routes:[{path:"/",component:c.a},{path:"/sign_in",name:"Users.sign_in",component:c.a},{path:"/posts",name:"Posts.index",component:u.a},{path:"/posts/new",name:"Posts.new",component:f.a},{path:"/posts/:id",name:"Posts.show",component:l.a}]})},,,,function(t,n,e){"use strict";var o=e(1),s=e(20);n.a={login(t,n,e){console.log(s.a);var a={user:{email:t,password:n}};o.default.$http.post("/users/api_sign_in.json",a).then(function(t){s.a.dispatch("login"),e(t.data)}).catch(function(t){s.a.dispatch("logout")})},logout(t){console.log(s.a),o.default.$http.delete("/users/api_sign_out.json").then(function(n){s.a.dispatch("logout"),t(n.data)}).catch(function(t){s.a.dispatch("logout")})},checkLoggedIn(){o.default.$http.get("/users/check_signed_in.json").then(function(t){s.a.dispatch("login")}).catch(function(t){s.a.dispatch("logout")})}}},,,function(t,n,e){"use strict";var o=e(1);n.a={getPosts(t,n){o.default.$http.get("/posts.json").then(function(n){t(n.data)}).catch(function(t){n(t)})},getPost(t,n,e){o.default.$http.get(`/posts/${t}.json`).then(function(t){n(t.data)}).catch(function(t){e(t)})},createPost(t,n,e){var s={post:t};o.default.$http.post("/posts.json",s).then(function(t){n(t.data)}).catch(function(t){e(t)})}}},,,,,,,function(t,n,e){"use strict";var o=e(1),s=e(133),a=e(6);o.default.use(s.a);const c={auth:!1},i={login(t){console.log("mutations login"),t.auth=!0,a.a.push({name:"Posts.index"})},logout(t){console.log("mutations logout"),t.auth=!1,a.a.push({name:"Users.sign_in"})}},u={login:({commit:commit})=>commit("login"),logout:({commit:commit})=>commit("logout")},r={loggedIn:t=>t.auth};n.a=new s.a.Store({state:c,getters:r,actions:u,mutations:i})},,,,,,,function(t,n,e){"use strict";var o=e(1);n.a={getComments(t,n,e){o.default.$http.get(`/posts/${t}/comments.json`).then(function(t){n(t.data)}).catch(function(t){console.log(t)})},createComment(t,n,e,s){var a={comment:{content:n}};o.default.$http.post(`/posts/${t}/comments.json`,a).then(function(t){e(t.data)}).catch(function(t){console.log(t)})}}},,,,,,,,function(t,n,e){e(106);var o=e(4)(e(86),e(123),null,null);t.exports=o.exports},,,function(t,n){},function(t,n,e){e(110);var o=e(4)(e(79),e(127),null,null);t.exports=o.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"app",components:{Iccs340LeftSidenav:e(115)}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(6),s=e(10);n.default={data(){return{activeIndex:"1"}},methods:{handleSelect(t,n){console.log(t,n)},index(){o.a.push({name:"Posts.index"})},newPost(){o.a.push({name:"Posts.new"})},logout(){s.a.logout(),o.a.push({name:"Users.sign_in"})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(10),s=e(6);n.default={name:"sign-in",data(){return{email:"",password:""}},methods:{login(){console.log("methods.login"),o.a.login(this.email,this.password,function(t){s.a.push({name:"Posts.index"})})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"comment",props:{comment:{type:Object,required:!1,default:{}}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(27),s=e(6);n.default={name:"new-comment",data(){return{comment:{content:""}}},props:{post:{type:Object,required:!1,default:{}}},methods:{createComment(){var t=this.post.id,n=this.comment.content;this.comment.content="",o.a.createComment(t,n,function(n){console.log(n),s.a.push({name:"Posts.show",params:{post_id:t},query:{t:new Date}})})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(13);n.default={name:"posts",components:{Iccs340Post:e(35)},data(){return{posts:null,error:null}},beforeRouteEnter(t,n,e){o.a.getPosts(t=>{e(n=>{n.posts=t})})},watch:{$route(){o.a.getPosts(t=>{this.posts=t})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(13),s=e(6);n.default={name:"new-post",data(){return{post:{name:"",content:""}}},methods:{createPost(){o.a.createPost(this.post,function(t){s.a.push({name:"Posts.index"})})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"post",props:{post:{type:Object,required:!1,default:{}}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(13),s=e(27);n.default={name:"post",components:{Iccs340Post:e(35),Iccs340Comment:e(117),Iccs340NewComment:e(118)},data(){return{post:{},comments:[],error:null}},created(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData(){o.a.getPost(this.$route.params.id,t=>{this.post=t,s.a.getComments(t.id,t=>{this.comments=t})})}}}},,,,,,,,,,,,,,,,,,function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},,function(t,n,e){e(112);var o=e(4)(e(80),e(129),null,null);t.exports=o.exports},function(t,n,e){e(108);var o=e(4)(e(81),e(125),"data-v-4cc1b64a",null);t.exports=o.exports},function(t,n,e){e(109);var o=e(4)(e(82),e(126),"data-v-6980c3dd",null);t.exports=o.exports},function(t,n,e){e(113);var o=e(4)(e(83),e(130),"data-v-ebe7ccc4",null);t.exports=o.exports},function(t,n,e){e(107);var o=e(4)(e(84),e(124),null,null);t.exports=o.exports},function(t,n,e){e(105);var o=e(4)(e(85),e(122),null,null);t.exports=o.exports},function(t,n,e){e(111);var o=e(4)(e(87),e(128),null,null);t.exports=o.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"new-post"},[e("h1",[t._v("New Post")]),t._v(" "),e("label",[t._v("Name")]),t._v(" "),e("el-input",{attrs:{placeholder:""},model:{value:t.post.name,callback:function(n){t.post.name=n},expression:"post.name"}}),t._v(" "),e("br"),e("br"),t._v(" "),e("label",[t._v("Content")]),t._v(" "),e("el-input",{attrs:{type:"textarea",rows:2,placeholder:""},model:{value:t.post.content,callback:function(n){t.post.content=n},expression:"post.content"}}),t._v(" "),e("br"),e("br"),t._v(" "),e("el-button",{attrs:{type:"primary"},nativeOn:{click:function(n){t.createPost(n)}}},[t._v("Save")])],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"post"},[e("span",[t._v(t._s(t.post.name))]),t._v(" "),e("p",[t._v(t._s(t.post.content))])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"posts"},t._l(t.posts,function(t){return e("div",[e("router-link",{attrs:{to:{name:"Posts.show",params:{id:t.id}}}},[e("el-card",{staticClass:"box-card"},[e("iccs340-post",{attrs:{post:t}})],1)],1)],1)}))},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"sign-in"},[e("h1",[t._v("Sign In")]),t._v(" "),e("label",[t._v("Email")]),t._v(" "),e("el-input",{attrs:{placeholder:""},model:{value:t.email,callback:function(n){t.email=n},expression:"email"}}),t._v(" "),e("br"),e("br"),t._v(" "),e("label",[t._v("Password")]),t._v(" "),e("el-input",{attrs:{placeholder:"",type:"password"},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}}),t._v(" "),e("br"),e("br"),t._v(" "),e("el-button",{attrs:{type:"primary"},nativeOn:{click:function(n){t.login(n)}}},[t._v("Login")])],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"comment"},[e("div",{staticClass:"md-list-text-container"},[e("span",[t._v(t._s(t.comment.user.email))]),t._v(" "),e("i",{staticClass:"el-icon-share"}),t._v(" "),e("br"),e("br"),t._v(" "),e("span",[t._v(t._s(t.comment.content))])])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[t.$store.getters.loggedIn?e("div",[e("iccs340-left-sidenav")],1):t._e(),t._v(" "),e("router-view")],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"post"},[e("h2",[t._v("Post Content")]),t._v(" "),e("iccs340-post",{attrs:{post:t.post}}),t._v(" "),e("h2",[t._v("Comment Section")]),t._v(" "),t._l(t.comments,function(t){return e("div",[e("el-card",{staticClass:"box-card"},[e("iccs340-comment",{attrs:{comment:t}})],1)],1)}),t._v(" "),e("iccs340-new-comment",{attrs:{post:t.post}})],2)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[e("el-submenu",{attrs:{index:"1"}},[e("template",{slot:"title"},[t._v("Menu")]),t._v(" "),e("el-menu-item",{attrs:{index:"2-1"},nativeOn:{click:function(n){t.index(n)}}},[t._v("Index")]),t._v(" "),e("el-menu-item",{attrs:{index:"2-2"},nativeOn:{click:function(n){t.newPost(n)}}},[t._v("New Post")]),t._v(" "),e("el-menu-item",{attrs:{index:"2-3"},nativeOn:{click:function(n){t.logout(n)}}},[t._v("Logout")])],2)],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"new-post"},[e("br"),e("br"),t._v(" "),e("h1",[t._v("Add Comment")]),t._v(" "),e("el-input",{attrs:{placeholder:""},model:{value:t.comment.content,callback:function(n){t.comment.content=n},expression:"comment.content"}}),t._v(" "),e("br"),e("br"),t._v(" "),e("el-button",{attrs:{type:"primary"},nativeOn:{click:function(n){t.createComment(n)}}},[t._v("Save")])],1)},staticRenderFns:[]}},,,,,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(1),s=e(39),a=e.n(s),c=e(6),i=e(20),u=e(37),r=e.n(u),l=e(38),p=(e.n(l),e(36)),f=e.n(p),d=e(10);o.default.use(r.a),o.default.$http=f.a,f.a.defaults.baseURL="https://iccs340-backend-rails-veeravit.herokuapp.com/",f.a.defaults.headers.common.Accept="application/json",f.a.defaults.withCredentials=!0,o.default.config.productionTip=!1,d.a.checkLoggedIn(),new o.default({el:"#app",router:c.a,store:i.a,template:"<App/>",components:{App:a.a}})}],[135]);
//# sourceMappingURL=app.c24beccd3308244d6062.js.map