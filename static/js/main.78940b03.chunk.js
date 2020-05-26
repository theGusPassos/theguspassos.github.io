(this["webpackJsonpportfolio-theguspassos"]=this["webpackJsonpportfolio-theguspassos"]||[]).push([[0],{26:function(e,n,t){e.exports=t.p+"static/media/portfolio-site.d95969b5.png"},30:function(e,n,t){e.exports=t.p+"static/media/unity-state-machine.759ae1bd.gif"},31:function(e,n,t){e.exports=t.p+"static/media/acadev-logo.82e87316.png"},33:function(e,n,t){e.exports=t.p+"static/media/gmail.62549d5c.png"},34:function(e,n,t){e.exports=t.p+"static/media/github.9f96cfd1.png"},35:function(e,n,t){e.exports=t.p+"static/media/linkedin.07265057.png"},42:function(e,n,t){e.exports=t(56)},47:function(e,n,t){},48:function(e,n,t){},54:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(9),i=t.n(o),c=(t(47),t(48),t(2)),u=t(3),l=t(10),s=t(11),m=t(36),p=t(26),d=t.n(p),f="#5655A3",h="#fff",b="#fff";function g(){var e=Object(c.a)(["\n  line-height: 1.7;\n\n  p a,\n  ul li a {\n    color: ",";\n  }\n\n  abbr {\n    text-decoration: none;\n  }\n"]);return g=function(){return e},e}var v=Object(u.a)(g(),f),E=function(e){var n=window.open(e,"_blank");n&&(n.opener=null)};function y(){var e=Object(c.a)(["\n  cursor: pointer;\n  transition: background-color 1s ease;\n  outline: none;\n  -webkit-tap-highlight-color: transparent;\n\n  :hover {\n    background-color: #00000055;\n  }\n"]);return y=function(){return e},e}function w(){var e=Object(c.a)(["\n  text-align: center;\n  margin: auto;\n  border: none;\n  background-color: ",";\n\n  -webkit-tap-highlight-color: transparent;\n  text-decoration: none;\n  outline: none;\n  cursor: pointer;\n\n  :active,\n  :focus,\n  :hover {\n    text-decoration: underline;\n  }\n"]);return w=function(){return e},e}var j=Object(u.a)(w(),b),x=Object(u.a)(y());function O(){var e=Object(c.a)(["\n  background-color: ",";\n  color: ",";\n\n  font-size: 1.4em;\n  width: 100%;\n\n  ",";\n"]);return O=function(){return e},e}var k=u.b.button(O(),b,f,j),T=function(e){return r.a.createElement(k,{onClick:function(){return E(e.url)},onKeyDown:function(n){return function(e,n){13!==e.keyCode&&13!==e.charCode||E(n)}(n,e.url)}},e.children)};function C(){var e=Object(c.a)(["\n  ","\n"]);return C=function(){return e},e}var I=u.b.section(C(),v),F=function(){return r.a.createElement(I,null,r.a.createElement("p",null,"This website was designed and developed by me using"," ",r.a.createElement("strong",null,"React"),". The early prototypes were made with ",r.a.createElement("b",null,"Figma"),"."),r.a.createElement(T,{url:"https://github.com/theGusPassos/theguspassos.github.io"},"Check the source code here"),r.a.createElement("p",null,"I'm using ",r.a.createElement("strong",null,"github pages")," to host the source code for free. The build process consists on the generation of a production build from the development branch and pushing the transpiled files into the upstream master branch. The files are then served as a github page."," ",r.a.createElement("a",{href:"https://github.com/gitname/react-gh-pages",target:"_blank",rel:"noopener noreferrer"},"Here")," ","is the step by step guide on how configure this build process."),r.a.createElement("p",null,"Since this is just a static page without any back-end server, the projects that populate the website are added manualy into a static list. Every project has its own component with the HTML info (like this one you're reading right now). It's definetly time consuming to add new projects into the system, however this process won't be so frequent. Besides, the component by project info page is a very flexible approach, which is great."),r.a.createElement("p",null,"I plan to make changes to the website by improving some responsivity and accessibility problems. I'm 100% open to feedback, so if you have any suggestion feel free to contact me =)"))},z={id:1,name:"My Portfolio",description:"The website you're accessing right now was designed and developed by me.",tags:["react"],imageAlt:"an image of this very own website",image:d.a,projectInfo:F},A=t(30),P=t.n(A);function S(){var e=Object(c.a)(["\n  ","\n"]);return S=function(){return e},e}var M=u.b.section(S(),v),D=function(){return r.a.createElement(M,null,r.a.createElement("p",null,"This is a sample project in ",r.a.createElement("strong",null,"Unity")," that implements a"," ",r.a.createElement("strong",null,"Finite State Machine")," for character behaviour."),r.a.createElement(T,{url:"https://github.com/theGusPassos/unity-finite-state-machine"},"Check the source code here"),r.a.createElement("p",null,"The ",r.a.createElement("abbr",{title:"Finite State Machine"},"FSM")," is a design pattern used for various scenarios other than character behaviour, more on that can be read in Robert Nystrom's"," ",r.a.createElement("a",{href:"https://gameprogrammingpatterns.com/contents.html",target:"_blak",rel:"noopener noreferrer"},"Game Programming Patterns book"),"."),r.a.createElement("p",null,"This implementation does use"," ",r.a.createElement("abbr",{title:"Object Oriented Programming"},"OOP")," design but still allows the standard component design through customization and extension."),r.a.createElement("p",null,"The setup consists of States that defines character's behaviour, Transitions that defines how states change between themselves and the"," ",r.a.createElement("abbr",{title:"Finite State Machine"},"FSM")," class that holds every State and sets every Transition for a given character."),r.a.createElement("p",null,"An Awareness interface is also included to receive input from external objects, in the demo it's used to get the distance between the non playable character and the player, when the player is close enough a transition is triggered. But it can also be used for other types of external events."),r.a.createElement("p",null,"The demo is pretty simple and easily extensible. Feel free to use it as you like =)"))},L={id:2,name:"Unity State Machine",description:"Implementation of a finite state machine for NPC behaviour in Unity",tags:["C#","Unity"],imageAlt:"The gif shows a 2D scrolling game with two squares, a blue one representing the player and a red one as the enemy. The enemy has a text showing 'Patrol State' over his head and is walking from one side to the other. When the blue character (the player) gets closer, the text change to 'Follow State' and the enemy starts following the player",image:P.a,projectInfo:D},R=t(31),U=t.n(R);function G(){var e=Object(c.a)(["\n  ",";\n"]);return G=function(){return e},e}var H=u.b.section(G(),v),N=function(){return r.a.createElement(H,null,r.a.createElement("p",null,"Developed using ",r.a.createElement("strong",null,"Vue.js")," and served as a github page just like this website."),r.a.createElement(T,{url:"https://github.com/theGusPassos/blog"},"Check the source code here"),r.a.createElement("p",null,"Since there's no back-end for this website I needed a different approach to storing post data. This very website has a approach for this situation where every project of mine is stored in a object that references a React component, when the user go to a project page the component is rendered. The problem with this approach is that everything is transpiled in build time, creating a bigger package than it could have been. Since posts might have way more content than my projects, I couldn't rely on the same approach."),r.a.createElement("p",null,"In the Academic Developer webiste, posts are stored in .md files that are only fetched from the server when the user opens its post page. A list still holds data from posts, however the post actual data and images are only fetched when necessary."),r.a.createElement("p",null,"After fetching an .md file, there's a process where image references are updated to link the server url. The .md file is then rendered as an HTML."),r.a.createElement("p",null,"Just like my portfolio site, the AcaDev has some issues when creating new posts, however I plan to fix it as I go along writing new resources."))},B=[{id:3,name:"Academic Developer",description:"Personal blog where I write about software development",tags:["vue"],imageAlt:"Academic Developer blog logo",image:U.a,projectInfo:N},z,L];function _(){var e=Object(c.a)(["\n  padding: 10px 20px;\n  color: ",";\n\n  strong {\n    display: block;\n    margin-bottom: 10px;\n    font-size: 1.5em;\n  }\n\n  span {\n    font-size: 1.2em;\n  }\n"]);return _=function(){return e},e}function q(){var e=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  ",";\n"]);return q=function(){return e},e}function J(){var e=Object(c.a)(["\n  position: relative;\n  background-color: #fff;\n  margin-bottom: 30px;\n  padding: 0;\n  border: none;\n  box-shadow: 1px 2px 2px 1px #00000075;\n  text-align: initial;\n  font-size: 1em;\n\n  img {\n    width: 100%;\n  }\n"]);return J=function(){return e},e}var K=u.b.button(J()),W=u.b.div(q(),x),X=u.b.div(_(),f),V=function(e){var n=Object(s.k)();return r.a.createElement(K,{onClick:function(){n.push("/project/"+e.project.id)}},r.a.createElement(W,null),r.a.createElement("img",{src:e.project.image,alt:e.project.imageAlt}),r.a.createElement(X,null,r.a.createElement("strong",null,e.project.name),r.a.createElement("span",null,e.project.description)))},Y=500,Q=920;function Z(e){return e>Q}var $={tablet:"(min-width: ".concat(Y,"px)"),desktop:"(min-width: ".concat(Q,"px)")};function ee(){var e=Object(c.a)(["\n  max-width: 500px;\n  margin: auto;\n"]);return ee=function(){return e},e}function ne(){var e=Object(c.a)(["\n  margin-top: 0;\n  margin-bottom: 30px;\n  color: ",";\n  text-align: center;\n"]);return ne=function(){return e},e}function te(){var e=Object(c.a)(["\n  position: absolute;\n  background-color: ",";\n  z-index: -9999;\n  right: 0;\n  top: 0;\n  left: 0;\n  bottom: 80%;\n"]);return te=function(){return e},e}function ae(){var e=Object(c.a)(["\n  padding: 10%;\n  position: relative;\n  padding-bottom: 0 !important;\n\n  button {\n    color: ",";\n    margin-bottom: 30px;\n  }\n\n  @media "," {\n    padding: 3%;\n  }\n"]);return ae=function(){return e},e}var re=u.b.section(ae(),f,$.desktop),oe=u.b.div(te(),f),ie=u.b.h1(ne(),h),ce=u.b.section(ee()),ue=function(){return r.a.createElement(re,null,r.a.createElement(oe,null),r.a.createElement(ie,null,"my projects"),r.a.createElement(ce,null,B.map((function(e,n){return r.a.createElement(V,{key:n,project:e})}))))};function le(){var e=Object(c.a)(["\n  text-align: center;\n  margin: auto;\n  font-size: 1.6em;\n\n  a {\n    color: ",";\n\n    background-color: "," !important;\n\n    ",";\n  }\n"]);return le=function(){return e},e}function se(){var e=Object(c.a)(["\n  display: flex;\n"]);return se=function(){return e},e}var me=u.b.div(se()),pe=u.b.div(le(),(function(e){return e.useMainColor?f:h}),(function(e){return e.useMainColor?b:f}),j),de=function(e){return r.a.createElement(me,null,r.a.createElement(pe,{useMainColor:e.useMainColor},r.a.createElement(l.Link,{to:e.link},e.children)))};function fe(){var e=Object(c.a)(["\n  padding: 10%;\n"]);return fe=function(){return e},e}var he=Object(u.a)(fe());function be(){var e=Object(c.a)(["\n  font-size: 1.3em;\n  margin: auto;\n\n  ",";\n  ",";\n\n  a {\n    color: "," !important;\n  }\n"]);return be=function(){return e},e}var ge=u.b.div(be(),he,v,b);function ve(){var e=Object(c.a)(["\n    &.animation-enter {\n      transform: ",";\n    }\n\n    &.animation-enter-active {\n      transform: translateX(0);\n      transition-timing-function: ease-in-out;\n      transition: transform ","ms;\n    }\n\n    &.animation-exit {\n      transform: translateX(0);\n    }\n\n    &.animation-exit-active {\n      transform: ",";\n      transition-timing-function: ease-in-out;\n      transition: transform ","ms;\n    }\n  "]);return ve=function(){return e},e}var Ee;!function(e){e[e.FromUp=0]="FromUp",e[e.FromDown=1]="FromDown",e[e.FromRight=2]="FromRight",e[e.FromLeft=3]="FromLeft"}(Ee||(Ee={}));var ye=function(e){return Object(u.b)(e)(ve(),(function(e){return je(e.transform)}),550,(function(e){return je(e.transform)}),550)},we=function(e){switch(e){case Ee.FromUp:return{x:0,y:-150};case Ee.FromDown:return{x:0,y:150};case Ee.FromLeft:return{x:-150,y:0};case Ee.FromRight:return{x:150,y:0}}},je=function(e){return"translate(".concat(e.x,"%, ").concat(e.y,"%)")};function xe(){var e=Object(c.a)(["\n  position: absolute;\n"]);return xe=function(){return e},e}var Oe=Object(u.a)(xe());function ke(){var e=Object(c.a)(["\n  ",";\n\n  h1 {\n    font-size: 2.3em;\n    margin: 0;\n  }\n\n  span {\n    font-size: 1.8em;\n  }\n"]);return ke=function(){return e},e}function Te(){var e=Object(c.a)(["\n  display: grid;\n  grid-template-rows: 20% 70% 10%;\n  height: 100%;\n  ",";\n"]);return Te=function(){return e},e}var Ce=ye(u.b.section(Te(),Oe)),Ie=we(Ee.FromLeft),Fe=u.b.div(ke(),he),ze=function(){return r.a.createElement(Ce,{transform:Ie},r.a.createElement(Fe,null,r.a.createElement("h1",null,"Gustavo Passos"),r.a.createElement("span",null,"Software and Game Developer")),r.a.createElement(ge,null,r.a.createElement("p",null,"I'm a 22 years old developer who's been delivering software professionally for 5 years."),r.a.createElement("p",null,"You can check my personal projects and my"," ",r.a.createElement("a",{href:"https://theguspassos.github.io/blog",target:"_blank",rel:"noopener noreferrer"},"blog")," ","if you're interested.")),r.a.createElement(de,{link:"/about"},"more about me"))},Ae=t(39),Pe=t(61),Se=t(14),Me=function(e){e.url?E(e.url):(!function(e){var n=document.createElement("input");n.setAttribute("value",e),document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)}(e.contactText),Se.b.info("my e-mail has been copied to your clipboard =)",{position:"bottom-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!1}))};function De(){var e=Object(c.a)(["\n  align-self: flex-end;\n\n  span,\n  strong {\n    display: block;\n    margin-left: 10px;\n  }\n"]);return De=function(){return e},e}function Le(){var e=Object(c.a)(["\n  width: 15%;\n  height: 15%;\n"]);return Le=function(){return e},e}function Re(){var e=Object(c.a)(["\n  padding: 5% 10%;\n  display: flex;\n  font-size: 1em;\n\n  ",";\n"]);return Re=function(){return e},e}var Ue=u.b.div(Re(),x),Ge=u.b.img(Le()),He=u.b.div(De()),Ne=function(e){return r.a.createElement(Ue,{onClick:function(){return Me(e.contact)}},r.a.createElement(Ge,{src:e.contact.image,alt:e.contact.altImage}),r.a.createElement(He,null,r.a.createElement("strong",null,e.contact.message),r.a.createElement("span",null,e.contact.contactText)))},Be=t(33),_e=t.n(Be),qe=t(34),Je=t.n(qe),Ke=t(35),We=t.n(Ke),Xe=[{image:_e.a,altImage:"gmail logo",message:"mail me",contactText:"theguspassos@gmail.com"},{image:We.a,altImage:"linkedin logo",message:"connect with me",contactText:"linkedin.com/in/theguspassos/",url:"https://www.linkedin.com/in/theguspassos/"},{image:Je.a,altImage:"github logo",message:"code with me",contactText:"github/theguspassos",url:"https://github.com/theGusPassos"}];function Ve(){var e=Object(c.a)(["\n  &.animation-enter {\n    opacity: 0;\n\n    > div:first-child {\n      transform: translate(0, 100%);\n    }\n  }\n\n  &.animation-enter-active {\n    opacity: 1;\n    transition: opacity ","ms;\n\n    > div:first-child {\n      transform: translate(0, 0);\n      transition-timing-function: ease-in-out;\n      transition: transform ","ms;\n    }\n  }\n\n  &.animation-exit {\n    opacity: 1;\n\n    > div:first-child {\n      transform: translate(0, 0);\n    }\n  }\n\n  &.animation-exit-active {\n    opacity: 0;\n    transition: opacity ","ms;\n\n    > div:first-child {\n      transform: translate(0, 100%);\n      transition-timing-function: ease-in-out;\n      transition: transform ","ms;\n    }\n  }\n"]);return Ve=function(){return e},e}var Ye=Object(u.a)(Ve(),550,550,550,550);function Qe(){var e=Object(c.a)(["\n  color: ",";\n  font-size: 1.4em;\n  width: 100%;\n  box-shadow: 0px 3px 11px 0px #0000009c;\n  padding: 10px 20px;\n  background-color: ",";\n\n  ",";\n"]);return Qe=function(){return e},e}function Ze(){var e=Object(c.a)(["\n  padding: 20px;\n\n  > div:nth-child(2) {\n    border-top: 1px solid ",";\n    border-bottom: 1px solid ",";\n  }\n"]);return Ze=function(){return e},e}function $e(){var e=Object(c.a)(["\n  background-color: #fff;\n  z-index: 999999;\n  width: 100%;\n  max-width: 400px;\n"]);return $e=function(){return e},e}function en(){var e=Object(c.a)(["\n  background: rgba(0, 0, 0, 0.2);\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  ",";\n"]);return en=function(){return e},e}var nn=u.b.div(en(),Ye),tn=u.b.div($e()),an=u.b.div(Ze(),f,f),rn=u.b.button(Qe(),f,b,j),on=function(e){var n=r.a.createElement(nn,null,r.a.createElement(tn,null,r.a.createElement(an,null,Xe.map((function(e,n){return r.a.createElement(Ne,{key:n,contact:e})}))),r.a.createElement(rn,{onClick:function(){return e.onClose()}},"Close")));return i.a.createPortal(n,document.body)};function cn(){var e=Object(c.a)(["\n  font-size: 1.6em;\n  ",";\n"]);return cn=function(){return e},e}function un(){var e=Object(c.a)(["\n  display: flex;\n"]);return un=function(){return e},e}var ln=u.b.div(un()),sn=u.b.button(cn(),j),mn=function(){var e=r.a.useState(!1),n=Object(Ae.a)(e,2),t=n[0],a=n[1];return r.a.createElement(ln,null,r.a.createElement(sn,{onClick:function(){return a(!0)}},"my contacts"),r.a.createElement(Pe.a,{in:t,classNames:"animation",unmountOnExit:!0,timeout:550},r.a.createElement(on,{onClose:function(){return a(!1)}})))},pn=t(23);function dn(){var e=Object(c.a)(["\n  background: #fff !important;\n  color: "," !important;\n"]);return dn=function(){return e},e}function fn(){var e=Object(c.a)(["\n  background: "," !important;\n"]);return fn=function(){return e},e}var hn=Object(u.b)(pn.a)(fn(),f);Object(u.b)(pn.a)(dn(),f);function bn(){var e=Object(c.a)(["\n  opacity: 0.3;\n  width: 10%;\n  margin: auto;\n\n  :hover,\n  :focus {\n    cursor: pointer;\n    opacity: 1;\n  }\n"]);return bn=function(){return e},e}function gn(){var e=Object(c.a)(["\n  width: 50%;\n  margin: auto;\n  display: flex;\n  flex: 1;\n"]);return gn=function(){return e},e}var vn=u.b.div(gn()),En=u.b.img(bn()),yn=function(){return r.a.createElement(vn,null,Xe.map((function(e,n){return r.a.createElement(En,{onClick:function(){return Me(e)},onKeyDown:function(n){return function(e,n){13!==e.keyCode&&13!==e.charCode||Me(n)}(n,e)},src:e.image,key:n,"data-tip":e.message})})),r.a.createElement(hn,null))},wn=function(e){return e.deviceType.isTablet?r.a.createElement(yn,null):r.a.createElement(mn,null)};function jn(){var e=Object(c.a)(["\n  display: grid;\n  height: 100%;\n  grid-template-rows: 90% 10%;\n  ",";\n\n  button {\n    color: ",";\n    background-color: "," !important;\n  }\n"]);return jn=function(){return e},e}var xn=ye(u.b.section(jn(),Oe,h,f)),On=we(Ee.FromRight),kn=function(e){return r.a.createElement(xn,{transform:On},r.a.createElement(ge,null,r.a.createElement("p",null,"I'm interested in developing any kind of software or game, regardless of the tech stack."),r.a.createElement("p",null,"The software quality and user experience are the most important things to me. I look forward to working with people that value the same."),r.a.createElement("p",null,"If you need help in a project of yours feel free to contact me =)"))," ",r.a.createElement(wn,{deviceType:e.deviceType}))},Tn=("#".concat("/"),"#".concat("/about"),"#".concat("/projects"),"#".concat("/project/:id"),t(57));function Cn(){var e=Object(c.a)(["\n  max-width: ","px;\n  margin: auto;\n"]);return Cn=function(){return e},e}var In=Object(u.a)(Cn(),700);function Fn(){var e=Object(c.a)(["\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n\n  ",";\n"]);return Fn=function(){return e},e}var zn=Object(u.b)(Tn.a)(Fn(),In);function An(){var e=Object(c.a)(["\n  background-color: ",";\n  color: ",";\n"]);return An=function(){return e},e}function Pn(){var e=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-rows: 90% 10%;\n  background-color: white;\n  z-index: 10;\n\n  @media "," {\n    grid-template-rows: 80% 20%;\n  }\n"]);return Pn=function(){return e},e}var Sn=u.b.section(Pn(),$.tablet),Mn=u.b.div(An(),f,h),Dn=function(e){return r.a.createElement(Sn,null,r.a.createElement(Mn,null,r.a.createElement(s.d,{render:function(n){var t=n.location;return r.a.createElement(zn,null,r.a.createElement(Pe.a,{key:null===t||void 0===t?void 0:t.pathname,classNames:"animation",timeout:550},r.a.createElement(s.g,{location:t},r.a.createElement(s.d,{exact:!0,path:"/"},r.a.createElement(ze,null)),r.a.createElement(s.d,{exact:!0,path:"/about"},r.a.createElement(kn,{deviceType:e.deviceType})))))}})),r.a.createElement(de,{link:"/projects",useMainColor:!0},"see my projects"))};function Ln(){var e=Object(c.a)(["\n  padding: 5%;\n"]);return Ln=function(){return e},e}function Rn(){var e=Object(c.a)(["\n  ",";\n  font-size: 1.2em;\n  padding-top: 5%;\n"]);return Rn=function(){return e},e}function Un(){var e=Object(c.a)(["\n  width: 100%;\n"]);return Un=function(){return e},e}function Gn(){var e=Object(c.a)(["\n  ",";\n  padding: 0 5% 5% 5%;\n\n  button {\n    color: ",";\n    padding: 10px;\n  }\n\n  @media "," {\n    padding: 0;\n  }\n"]);return Gn=function(){return e},e}function Hn(){var e=Object(c.a)(["\n  color: ",";\n  font-size: 1.4em;\n"]);return Hn=function(){return e},e}function Nn(){var e=Object(c.a)(["\n  color: ",";\n  font-size: 2em;\n  margin: 0;\n"]);return Nn=function(){return e},e}function Bn(){var e=Object(c.a)(["\n  ",";\n"]);return Bn=function(){return e},e}var _n=u.b.section(Bn(),In),qn=u.b.h1(Nn(),f),Jn=u.b.span(Hn(),f),Kn=u.b.div(Gn(),In,f,$.tablet),Wn=u.b.img(Un()),Xn=u.b.section(Rn(),v),Vn=u.b.div(Ln()),Yn=function(e){var n,t=(n=Number(e.projectId),B.filter((function(e){return e.id===n}))[0]);return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),r.a.createElement(_n,null,r.a.createElement(Wn,{src:t.image,alt:t.imageAlt}),r.a.createElement(Kn,null,r.a.createElement(qn,null,t.name),r.a.createElement(Jn,null,"built with ",t.tags.join(" and ")),r.a.createElement(Xn,null,t.projectInfo()),r.a.createElement(Vn,null,r.a.createElement(wn,{deviceType:e.deviceType}))))},Qn=t(17),Zn=function(e){return Object(a.useEffect)((function(){Qn.a.pageview(window.location.hash)}),[]),r.a.createElement(s.g,{location:e.location},r.a.createElement(s.d,{exact:!0,path:"/projects"},r.a.createElement(ue,null)),r.a.createElement(s.d,{exact:!0,path:"/project/:id",render:function(n){return r.a.createElement(Yn,{projectId:n.match.params.id,deviceType:e.deviceType})}}),r.a.createElement(s.d,{path:"/"},r.a.createElement(Dn,{deviceType:e.deviceType})))},$n=t(60);function et(){var e=Object(c.a)(["\n  height: 100%;\n  margin: auto;\n"]);return et=function(){return e},e}var nt=u.b.div(et()),tt=Object($n.a)((function(e){var n,t={isTablet:(n=e.width,n>Y),isDesktop:Z(e.width)};return r.a.createElement(nt,null,r.a.createElement(l.HashRouter,{basename:"/"},r.a.createElement(m.LastLocationProvider,null,r.a.createElement(s.d,{render:function(e){var n=e.location;return r.a.createElement(Zn,{deviceType:t,location:n})}}))))}));t(54),t(55);Se.b.configure(),Qn.a.initialize("UA-163830671-1");var at=function(){return r.a.createElement(tt,{handleWidth:!0},r.a.createElement(Se.a,null))};i.a.render(r.a.createElement(at,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.78940b03.chunk.js.map