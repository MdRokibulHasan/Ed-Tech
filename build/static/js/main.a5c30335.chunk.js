(this["webpackJsonpsoftware-company"]=this["webpackJsonpsoftware-company"]||[]).push([[0],{49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},54:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},63:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(39),i=c.n(n),l=(c(49),c(50),c(19)),r=c(8),d=c(11),j=(c(51),c(52),c(0)),o=function(e){var t=e.whylearing,c=t.Title,s=t.Details,a=t.images;return Object(j.jsx)("div",{className:"col-lg-6 col-md-6 col-12 g-3",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"card-body ",children:[Object(j.jsx)("div",{className:"text-center icon-color",children:Object(j.jsx)("i",{className:a})}),Object(j.jsxs)("h5",{className:"card-title text-white",children:[" ",c]}),Object(j.jsxs)("p",{className:"card-text text-white",children:[" ",s]})]})})})},b=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){fetch("./whyjoinus.json").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"aboutus",children:[Object(j.jsx)("h1",{className:"text-center text-white about-us pt-5",children:" WHY JOIN AMARSCHOOL"}),Object(j.jsx)("hr",{className:"w-25 m-auto text-color "}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row pb-5",children:c.map((function(e){return Object(j.jsx)(o,{whylearing:e},e.id)}))})})]})})},h=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){fetch("./course.json").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]),[c]},m=(c(54),function(e){var t=e.course,c=t.id,s=t.price,a=t.image,n=t.subject,i=(t.title,t.details),r=t.totalstudent;return Object(j.jsx)("div",{className:"col-lg-3 col-md-3 col-12 g-3 ",children:Object(j.jsxs)("div",{class:"card course-card border-0  shadoaa",style:{borderRadius:"10px "},children:[Object(j.jsx)("img",{className:"card-img-top",src:a,style:{minHeight:"30%",maxHeight:200,borderRadius:"10px 10px 0px 0px"},alt:"Card image cap"}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(j.jsx)("div",{children:Object(j.jsx)("h5",{className:"card-title",children:n})}),Object(j.jsx)("div",{children:Object(j.jsxs)("span",{className:"course-price",children:[" ",s]})})]}),Object(j.jsx)("p",{className:"card-text",children:i})]}),Object(j.jsx)("div",{class:"card-footer",children:Object(j.jsxs)("div",{className:"d-flex justify-content-around d-flex align-items-center",children:[Object(j.jsxs)("div",{className:"",children:[r," Student"]}),Object(j.jsx)(l.b,{to:"/booking/".concat(c),children:Object(j.jsx)("button",{type:"button",class:"my-2 px-3",style:{backgroundColor:"#A12C2F",fontWeight:500,border:0,padding:"7px",color:"white",borderRadius:"50px 50px"},children:"Enroll Now"})})]})})]})})}),x=(c(59),function(){var e=Object(r.h)().serviceId;return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"headerdiv",children:Object(j.jsx)("h1",{children:e})})})}),O=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(x,{})})},u=function(){var e=h(),t=Object(d.a)(e,1)[0];return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row mt-3 mb-3",children:t.map((function(e){return Object(j.jsx)(m,{course:e},e.id)}))})})},p=(c(60),function(){return Object(j.jsxs)("div",{className:"pt-5",children:[Object(j.jsx)("h1",{className:"text-center service ",children:" LATEST COURSES "}),Object(j.jsx)(u,{})]})}),f=(c(61),function(){return Object(j.jsx)("footer",{className:"footer ",children:Object(j.jsxs)("section",{className:"container ",children:[Object(j.jsxs)("div",{className:"row pt-5",children:[Object(j.jsxs)("div",{className:"col-lg-3",children:[Object(j.jsx)("h5",{children:" BROWSE "}),Object(j.jsx)("hr",{className:"w-25 mx-auto",style:{height:4,color:"white"}}),Object(j.jsx)("p",{children:" Prices "}),Object(j.jsx)("p",{children:" Courses "}),Object(j.jsx)("p",{children:" Blog "}),Object(j.jsx)("p",{children:" Contact Us"})]}),Object(j.jsxs)("div",{className:"col-lg-3 ",children:[Object(j.jsx)("h5",{children:" NEXT COURSES "}),Object(j.jsx)("hr",{className:"w-25 mx-auto",style:{height:4,color:"white"}}),Object(j.jsx)("p",{children:" Flutter "}),Object(j.jsx)("p",{children:" Dart "}),Object(j.jsx)("p",{children:" SQL "}),Object(j.jsx)("p",{children:" Oracle "})]}),Object(j.jsxs)("div",{className:"col-lg-3 ",children:[Object(j.jsx)("h5",{children:" ABPUT LEARN "}),Object(j.jsx)("hr",{className:"w-25 mx-auto",style:{height:4,color:"white"}}),Object(j.jsx)("p",{children:" Prices "}),Object(j.jsx)("p",{children:" Apply "}),Object(j.jsx)("p",{children:" Tearms & Condition "}),Object(j.jsx)("p",{children:" Register"})]}),Object(j.jsxs)("div",{className:"col-lg-3 ",children:[Object(j.jsx)("h5",{children:" WORK WITH US "}),Object(j.jsx)("hr",{className:"w-25 mx-auto",style:{height:4,color:"white"}}),Object(j.jsx)("p",{children:" Our Team "}),Object(j.jsx)("p",{children:" Instactor "})]})]}),Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsxs)("div",{className:"pt-3 pb-0",children:[Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsx)("div",{children:Object(j.jsxs)("span",{className:"d-flex text-dark py-3 ms-auto ",children:[Object(j.jsx)("div",{className:"social-icons-f",children:Object(j.jsx)("a",{href:"",target:"_blank",children:Object(j.jsx)("span",{className:"icon-users rounded-circle  p-3",children:Object(j.jsx)("i",{className:"fab fa-facebook-f"})})})}),Object(j.jsx)("div",{className:"social-icons-f ms-3 ",children:Object(j.jsx)("a",{href:"",target:"_blank",children:Object(j.jsx)("span",{className:"icon-users rounded-circle  p-3",children:Object(j.jsx)("i",{className:"fab fa-twitter"})})})}),Object(j.jsx)("div",{className:"social-icons-f ms-3 ",children:Object(j.jsx)("a",{href:"",target:"_blank",children:Object(j.jsx)("span",{className:"icon-users rounded-circle  p-3",children:Object(j.jsx)("i",{className:"fab fa-linkedin-in"})})})}),Object(j.jsx)("div",{className:"social-icons-f ms-3 ",children:Object(j.jsx)("a",{href:"",target:"_blank",children:Object(j.jsx)("span",{className:"icon-users rounded-circle  p-3",children:Object(j.jsx)("i",{className:"fab fa-instagram"})})})})]})})}),Object(j.jsx)("p",{className:"text-center text-white ",children:"Copyright \xa9 2020 AmarSoft All Rights Reserved by j Islam ."})]})})]})})}),v=(c(62),c.p+"static/media/logo.7e138b10.png"),g=(c(63),c(24)),N=c(42),y={apiKey:"AIzaSyAFxdI0i0bMG2eB-jpQ6dThNRi03Ragypg",authDomain:"amarschool-85de4.firebaseapp.com",projectId:"amarschool-85de4",storageBucket:"amarschool-85de4.appspot.com",messagingSenderId:"310682578003",appId:"1:310682578003:web:9cdbdc19f06b34edff6aa6",measurementId:"G-NPRYLPY6JL"};(function(){Object(N.a)(y)})();var w=Object(g.c)(),C=function(){var e=Object(s.useState)({}),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!0),i=Object(d.a)(n,2),l=i[0],r=i[1];Object(s.useEffect)((function(){var e=Object(g.d)(w,(function(e){a(e||{}),r(!1)}));return function(){return e}}),[]);return{users:c,signinUsingGoogle:function(){r(!0);var e=new g.b;Object(g.e)(w,e).then((function(e){var t=e.user,c=t.displayName,s=t.email,n=t.photoURL;console.log(e.user),a({name:c,email:s,photo:n})})).finally((function(){return r(!1)}))},FacebookSignin:function(){var e=new g.a;Object(g.e)(w,e).then((function(e){var t=e.user,c=t.displayName,s=t.email,n=t.photoURL;t.uid;console.log(e.user),a({name:c,email:s,photo:n})})).finally((function(){return r(!1)}))},isloading:l,logOut:function(){r(!0),Object(g.f)(w).then((function(){})).finally((function(){return r(!1)}))}}},k=Object(s.createContext)(),S=function(e){var t=e.children,c=C();return Object(j.jsx)(k.Provider,{value:c,children:t})},E=function(){return Object(s.useContext)(k)},R=c(23),A=function(){var e=E(),t=e.users,c=e.logOut;return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg ",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("a",{className:"navbar-brand fw-bold",href:"#",children:[Object(j.jsx)("img",{src:v,width:"40",height:"40",class:"d-inline-block align-top",alt:""}),"AMAR ",Object(j.jsx)("span",{className:"schol-name-color",children:" SCHOOL "})]}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon ",children:Object(j.jsx)("i",{class:"fa fa-navicon","aria-hidden":"true"})})}),Object(j.jsx)("div",{className:"collapse navbar-collapse fw-bold",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0 ms-auto",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(R.a,{to:"/",className:"nav-link menu-link",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(R.a,{to:"/about",className:"nav-link menu-link",children:"About"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(R.a,{to:"/services",className:"nav-link menu-link",children:"Services"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(R.a,{to:"/contact",className:"nav-link menu-link",children:"Contact Us"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(R.a,{to:"/blogs",className:"nav-link menu-link",children:"Blogs"})})]})}),Object(j.jsxs)("div",{className:"d-flex flex-row-reverse align-items-center",children:[Object(j.jsx)("div",{className:"ms-3",children:t.email||t.uid?Object(j.jsx)("img",{src:null===t||void 0===t?void 0:t.photoURL,alt:t.name,width:"35",height:"35",style:{borderRadius:"50px"}}):Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:t.uid||t.email?Object(j.jsx)(R.a,{to:"",className:"signin",onClick:c,children:"Log Out"}):Object(j.jsx)(R.a,{to:"/singin",className:" signin ",children:"Sign In"})})]})]})})},I=function(){return Object(j.jsx)("div",{className:"container text-center",children:Object(j.jsx)("h1",{className:"p-5 text-danger",children:" 404 !! Not Found  "})})},L=c.p+"static/media/freelance-young-asian-businesswoman-casual-wear-using-laptop-working-living-room-home_7861-3022.0d870132.jpg",H=c.p+"static/media/top-view-person-writing-laptop-with-copy-space_23-2148708035.776c1ee0.jpg",T=c.p+"static/media/1_dLaDL-lSN0iprzmOpmM7zQ.adcd0b33.png",U=(c(65),function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{id:"carouselExampleCaptions",className:"carousel slide","data-bs-ride":"carousel",children:[Object(j.jsxs)("div",{className:"carousel-indicators",children:[Object(j.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(j.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(j.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),Object(j.jsxs)("div",{className:"carousel-inner",children:[Object(j.jsxs)("div",{className:"carousel-item active",children:[Object(j.jsx)("img",{src:L,className:"d-block w-100",style:{minHeight:"10%",maxHeight:400},alt:"..."}),Object(j.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(j.jsx)("h1",{children:" ENJOY&IMPROVE YOUR SKILLS "}),Object(j.jsx)("p",{className:"text-dark fs-5",children:"Slider Revolution is the highly acclaimed slide-based displaying solution, thousands of businesses, theme developers and everyday people use and love!"})]})]}),Object(j.jsxs)("div",{className:"carousel-item",children:[Object(j.jsx)("img",{src:H,style:{minHeight:"10%",maxHeight:400},className:"d-block w-100",alt:"..."}),Object(j.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(j.jsx)("h1",{children:"ENJOY&SHARE YOUR SKILLS"}),Object(j.jsx)("p",{className:"text-dark fs-5",children:"Slider Revolution is the highly acclaimed slide-based displaying solution, thousands of businesses, theme developers and everyday people use and love!"})]})]}),Object(j.jsxs)("div",{className:"carousel-item",children:[Object(j.jsx)("img",{src:T,style:{minHeight:"10%",maxHeight:400},className:"d-block w-100",alt:"..."}),Object(j.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(j.jsx)("h1",{children:" Learn Hot React"}),Object(j.jsx)("p",{className:"text-dark fs-5",children:"A JavaScript library for building user interfaces"})]})]})]}),Object(j.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev",children:[Object(j.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(j.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(j.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next",children:[Object(j.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(j.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})})}),P=(c(66),function(e){var t=e.ourexpertice,c=t.Title,s=t.discripton,a=t.icon;return Object(j.jsx)("div",{className:"col-lg-4 col-md-4 col-12 g-5",children:Object(j.jsx)("div",{className:"our-expertice-card",children:Object(j.jsxs)("div",{className:"card-body ",children:[Object(j.jsx)("div",{className:"text-center icon-color p-3",children:Object(j.jsx)("i",{className:a})}),Object(j.jsxs)("div",{className:"pb-2 text-center",children:[Object(j.jsx)("h3",{className:"card-title",children:c}),Object(j.jsx)("p",{className:"card-text expertice-card-details fs-6",children:s})]})]})})})}),F=(c(67),c(25)),M=c.n(F),B=(c(31),function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){fetch("./ourexpertice.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(s.useEffect)((function(){M.a.init({duration:2e3})}),[]),Object(j.jsxs)("div",{className:"container mt-5 mb-5","data-aos":"fade-right",children:[Object(j.jsx)("h1",{className:"text-center",children:"OUR EXPERTICES"}),Object(j.jsx)("div",{className:"row mt-2 mb-4",children:c.map((function(e){return Object(j.jsx)(P,{ourexpertice:e},e.id)}))})]})}),_=(c(68),c.p+"static/media/francis_angelyn_logo2020.da14c6d6.jpg"),D=function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("h1",{className:"text-center pt-5 student-perception-header",children:[" ","Students & Parents Opinion"," "]}),Object(j.jsxs)("div",{className:"container ",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-center py-4",children:[Object(j.jsx)("img",{className:"card-img-top rounded-circle",src:_,style:{height:60,width:60},alt:"Card image cap"})," "]}),Object(j.jsx)("div",{className:"row d-flex justify-content-center",children:Object(j.jsx)("div",{className:"col-md-7 col-12 pb-4",children:Object(j.jsx)("p",{children:Object(j.jsx)("q",{children:" Replenish him third creature and meat blessed void a fruit gathered you\u2019re, they\u2019re two waters own morning gathered greater shall had behold had seed. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it. "})})})})]})]})},G=function(){var e=h(),t=Object(d.a)(e,1)[0];Object(r.g)();return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"text-center service pt-4",children:" LATEST COURSES "}),Object(j.jsx)("div",{className:"container","data-aos":"fade-left",children:Object(j.jsx)("div",{className:"row mb-3",children:t.slice(0,4).map((function(e){return Object(j.jsx)(m,{course:e},e.id)}))})})]})},J=c.p+"static/media/about2-education.ccf5119e.jpg",W=(c(69),function(){return Object(s.useEffect)((function(){M.a.init({duration:2e3})}),[]),Object(j.jsx)("div",{className:"bg-white",children:Object(j.jsx)("div",{className:"container","data-aos":"fade-up",children:Object(j.jsxs)("div",{className:"row d-flex align-items-center",children:[Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsx)("img",{src:J,class:"img-fluid p-5",alt:"Responsive image"})}),Object(j.jsx)("div",{className:"col-lg-6 ",children:Object(j.jsxs)("div",{className:"text-start",children:[Object(j.jsx)("h2",{children:"About Amrschool"}),Object(j.jsxs)("h1",{className:"fw-bold my-3",children:["Welcome to Our"," ",Object(j.jsxs)("span",{style:{color:"#A12C2F",padding:10},children:[" ","Online Learning Center"]}),". We\u2019re the most experienced online learning provider"]}),Object(j.jsxs)("div",{className:"my-3",children:[Object(j.jsx)("li",{children:"Leverage agile frameworks to provide a robust synopsis for high level"}),Object(j.jsx)("li",{children:"Disruptive innovation via workplace diversity and empowerment."})]}),Object(j.jsx)("p",{children:"Disruptive innovation via workplace diversity and empowerment. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test holistic world view of disruptive innovation."}),Object(j.jsx)("button",{type:"button",class:"readmore my-2",children:"Register"})]})})]})})})}),Y=function(){return console.log("hello world !"),Object(s.useEffect)((function(){fetch("../teachers.json").then((function(e){return e.json()})).then((function(e){return console.log(e)}))})),Object(j.jsx)("div",{})},z=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(U,{children:" "}),Object(j.jsx)(B,{}),Object(j.jsx)(W,{}),Object(j.jsx)(G,{children:" "}),Object(j.jsx)(D,{}),Object(j.jsx)(Y,{})]})},K=(c(70),function(){var e=E(),t=e.signinUsingGoogle,c=e.FacebookSignin;return Object(j.jsx)("div",{className:"d-flex justify-content-center ",children:Object(j.jsxs)("div",{className:"sign-in shadow-lg my-5  px-5",children:[Object(j.jsx)("h3",{className:"text-center pt-5",children:" LOGIN TO AMARSCHOOL"}),Object(j.jsx)("hr",{className:"w-75 ms-auto me-auto"}),Object(j.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(j.jsx)("button",{type:"button",class:"fb my-2 ",onClick:c,children:"Facebook"}),Object(j.jsx)("button",{type:"button",class:"gmail  my-2 ",onClick:t,children:"Gmail"})]}),Object(j.jsx)("hr",{className:"w-75 ms-auto me-auto"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("div",{className:"form-group pb-2",children:Object(j.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"password",className:"form-control my-3",id:"exampleInputPassword1",placeholder:"Password"})}),Object(j.jsxs)("div",{class:"form-check",children:[Object(j.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"}),Object(j.jsx)("label",{className:"form-check-label",for:"exampleCheck1",children:"Check me out"})]}),Object(j.jsxs)("button",{type:"button",class:"btn my-2 mt-3",children:["LOG IN"," "]}),Object(j.jsx)(l.b,{to:"/register",children:Object(j.jsx)("button",{type:"button",class:"reg my-2",children:"Register"})})]})]})})}),Q=function(){return Object(j.jsx)("div",{className:"d-flex justify-content-center ",children:Object(j.jsxs)("div",{className:"sign-in shadow-lg my-5  px-5",children:[Object(j.jsx)("h3",{className:"text-center pt-5",children:" CREATE AN ACCOUNT"}),Object(j.jsx)("hr",{className:"w-75 ms-auto me-auto"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("div",{className:"form-group my-4",children:Object(j.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"User Name "})}),Object(j.jsx)("div",{className:"form-group my-4",children:Object(j.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Email"})}),Object(j.jsx)("div",{className:"form-group my-4",children:Object(j.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Password "})}),Object(j.jsx)("div",{className:"form-group my-4",children:Object(j.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Confirm Password"})}),Object(j.jsxs)("button",{type:"button",class:"btn my-2 mt-3",children:["CREATE AN ACCOUNT"," "]})]})]})})},q=(c(71),c.p+"static/media/9f41e2d14093da80356873e2b8745950.d062a972.jpg"),X=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:q,style:{minHeight:"10%",maxHeight:350},className:"d-block w-100",alt:"..."}),Object(j.jsxs)("div",{class:"centered text-center text-white",children:[Object(j.jsx)("h1",{className:"fw-bold display-4",children:"AMARSCHOOL BLOG "}),Object(j.jsx)("h5",{children:"Ex utamur fierent tacimates duis choro an"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet, ius minim gubergren ad. At mei sumo sonet audiam, ad mutat elitr platonem vix. Ne nisl idque fierent vix."})]})]})},V=(c(72),function(e){var t=e.recentblog,c=t.images,s=t.title,a=t.discripton,n=t.date,i=t.authorname;return Object(j.jsx)("div",{className:"col-lg-3 col-md-3 col-12 g-3 ",children:Object(j.jsxs)("div",{class:"card course-card shadow-lg rounded-3 hovereffect",children:[Object(j.jsx)("img",{className:"card-img-top",src:c,style:{minHeight:"30%",maxHeight:200},alt:"Card image cap"}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("div",{className:"d-flex justify-content-between",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h5",{className:"card-title",children:s}),Object(j.jsx)("p",{className:"card-text",children:a})]})})}),Object(j.jsx)("div",{class:"card-footer",children:Object(j.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(j.jsx)("div",{children:Object(j.jsx)("p",{className:"card-text",children:i})}),Object(j.jsx)("div",{children:Object(j.jsxs)("span",{className:"course-price",children:[" ",n]})})]})})]})})}),Z=(c(73),function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){fetch("./recent_blog.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(j.jsx)("div",{className:"mb-5",children:Object(j.jsxs)("div",{className:"container mt-3",children:[Object(j.jsx)("h2",{className:" mt-3 recent-blogs-header",style:{textAlign:"left"},children:" Recent Posts "}),Object(j.jsx)("div",{className:"row mt-1 mb-3",children:c.map((function(e){return Object(j.jsx)(V,{recentblog:e},e.id)}))})]})})}),$=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){fetch("./recent_blog.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"container ",children:[Object(j.jsx)("h2",{className:" mt-5 recent-blogs-header",style:{textAlign:"left"},children:" Featured Posts "}),Object(j.jsx)("div",{className:"row mt-1 mb-3",children:c.map((function(e){return Object(j.jsx)(V,{recentblog:e},e.id)}))})]})})},ee=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(X,{}),Object(j.jsx)($,{}),Object(j.jsx)(Z,{})]})},te=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(W,{}),Object(j.jsx)(b,{})]})},ce=c(36),se=c(44),ae=["children"],ne=function(e){var t=e.children,c=Object(se.a)(e,ae),s=E(),a=s.users;return s.isloading?Object(j.jsx)("div",{children:" loading"}):Object(j.jsx)(r.b,Object(ce.a)(Object(ce.a)({},c),{},{render:function(e){var c=e.location;return a.email?t:Object(j.jsxs)(r.a,{children:["to=",{pathname:"/signin",state:{from:c}}]})}}))},ie=(c(74),function(){return Object(s.useEffect)((function(){M.a.init()})),Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:q,style:{minHeight:"10%",maxHeight:250},className:"d-block w-100",alt:"..."}),Object(j.jsxs)("div",{className:"centered text-center text-white",children:[Object(j.jsx)("h1",{className:"fw-bold display-4 fw-bold",children:"Contact US "}),Object(j.jsx)("h5",{children:"Get in touch with us"})]}),Object(j.jsxs)("div",{className:"container px-4 my-5",children:[Object(j.jsxs)("div",{className:"row gx-5 gy-5",children:[Object(j.jsx)("div",{className:"col","data-aos":"fade-right","data-aos-delay":"270",children:Object(j.jsxs)("div",{className:"p-3 border-none bg-light",children:[Object(j.jsxs)("div",{className:"text-header bg-gray ",children:[Object(j.jsx)("span",{className:"span6",style:{textAlign:"left"}}),Object(j.jsx)("span",{className:"ms-5 fw-bold p-2",children:" LOCATION MAP "})]}),Object(j.jsxs)("div",{className:"text-body p-4 ",style:{color:"red"},children:["Map Intreagrate Commig soon"," "]})]})}),Object(j.jsx)("div",{className:"col","data-aos":"fade-left","data-aos-delay":"270",children:Object(j.jsxs)("div",{className:"p-3 border-none bg-light",children:[Object(j.jsx)("span",{className:"span6",style:{textAlign:"left"}}),Object(j.jsx)("span",{className:"ms-5 fw-bold p-2",children:"CONTACT US "}),Object(j.jsx)("div",{className:"text-body p-4",children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Full Name "})}),Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("input",{type:"email",className:"form-control",placeholder:"Email "})})]}),Object(j.jsx)("div",{className:"col mt-3",children:Object(j.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3"})}),Object(j.jsxs)("button",{type:"button",class:"btn btn-primary float-left",style:{borderRadius:0,width:180,marginTop:10,alignItems:"left"},children:[" ","Submit Message"," "]})]})})]})})]}),Object(j.jsx)("div",{className:"container mt-5 ",children:Object(j.jsx)("div",{class:"container px-4",children:Object(j.jsxs)("div",{class:"row gx-5 gy-3 ",children:[Object(j.jsx)("div",{class:"col","data-aos":"fade-right","data-aos-delay":"290",children:Object(j.jsxs)("div",{class:"p-4 border-none bg-light address1",style:{backgroundColor:"white"},children:[Object(j.jsx)("p",{children:" ADDRESS INFO "}),Object(j.jsx)("p",{children:" Dhaka-1229,Bangladesh "})]})}),Object(j.jsxs)("div",{class:"col","data-aos":"fade-up","data-aos-anchor-placement":"bottom-bottom","data-aos-delay":"320",children:[Object(j.jsxs)("div",{class:"p-4 border-none bg-light address1",style:{backgroundColor:"white"},children:[Object(j.jsx)("p",{children:" EMAIL INFO"}),Object(j.jsx)("p",{children:" educa@university.com"})]})," "]}),Object(j.jsxs)("div",{class:"col","data-aos":"fade-left","data-aos-delay":"350",children:[Object(j.jsxs)("div",{class:"p-4 border-none bg-light address1",style:{backgroundColor:"white"},children:[Object(j.jsx)("p",{children:" PHONE NUMBER"}),Object(j.jsx)("p",{children:" +880 0123456789 "})]})," "]})]})})})]})]})}),le=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(ie,{})})};var re=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(S,{children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(A,{children:" "}),Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{exact:!0,path:"/",children:Object(j.jsx)(z,{})}),Object(j.jsx)(r.b,{path:"/home",children:Object(j.jsx)(z,{})}),Object(j.jsx)(r.b,{path:"/ourexprtice",children:Object(j.jsx)(B,{})}),Object(j.jsx)(r.b,{path:"/about",children:Object(j.jsx)(te,{})}),Object(j.jsx)(r.b,{path:"/services",children:Object(j.jsx)(p,{})}),Object(j.jsxs)(r.b,{path:"/contact",children:[Object(j.jsx)(le,{})," "]}),Object(j.jsx)(ne,{path:"/blogs",children:Object(j.jsx)(ee,{})}),Object(j.jsx)(r.b,{path:"/singin",children:Object(j.jsx)(K,{})}),Object(j.jsx)(r.b,{path:"/register",children:Object(j.jsx)(Q,{})}),Object(j.jsx)(r.b,{path:"/booking/:serviceId",children:Object(j.jsx)(O,{})}),Object(j.jsx)(r.b,{path:"*",children:Object(j.jsx)(I,{})})]}),Object(j.jsx)(f,{})]})})})},de=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,76)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(re,{})}),document.getElementById("root")),de()}},[[75,1,2]]]);
//# sourceMappingURL=main.a5c30335.chunk.js.map