(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{183:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(196),i=a(192),o=a(212);t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(i.a,{title:"Home",keywords:["gatsby","application","react","bulma","github"]}),r.a.createElement(o.a,{perpage:3}))}},212:function(e,t,a){"use strict";a(104),a(105),a(85),a(57),a(92),a(213);var n=a(6),r=a.n(n),s=a(215),i=a(0),o=a.n(i),c=(a(191),a(187)),l=a(4),m=a.n(l),d=(a(190),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={max_page:0,current_page:Array.from(Array(a.props.perpage).keys()),perpage:a.props.perpage},a}return r()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(c.b,{query:"3424129496",render:function(t){var a=t.allMarkdownRemark,n=-1,r=a.edges;return o.a.createElement("section",{className:"hero"},o.a.createElement("div",{className:"columns "},o.a.createElement("div",{className:"container hero-body"},r.map(function(t){var a=t.node,r=a.frontmatter.title,s=a.frontmatter.date,i=a.frontmatter.path,l=a.excerpt,m=a.timeToRead,d=a.frontmatter.tags;return n++,e.state.current_page.includes(n)?o.a.createElement("div",{key:r,className:"is-three-fifths column has-shadow"},o.a.createElement("div",{className:"title"},o.a.createElement(c.a,{className:"title",to:i},r)),o.a.createElement("div",{className:"subtitle is-6 columns is-multiline"},o.a.createElement("div",null,o.a.createElement("span",{className:"icon is-medium has-text-danger"},o.a.createElement("i",{className:"fa fa-calendar"})),s,o.a.createElement("span",{className:"icon is-medium has-text-primary"},o.a.createElement("i",{className:"fa fa-book"})),m," min"),o.a.createElement("div",{className:""},o.a.createElement("span",{className:"icon is-medium has-text-success"},o.a.createElement("i",{className:"fa fa-tags"})),d.map(function(e){return o.a.createElement("span",{key:e,className:"blogtag is-light tag"},e)}))),o.a.createElement("div",{className:"has-text-grey-dark"},l,o.a.createElement(c.a,{className:"has-text-link",to:i},"Read more"))):o.a.createElement("div",null)}))))},data:s})},t}(o.a.Component));d.propTypes={perpage:m.a.number},t.a=d},213:function(e,t,a){"use strict";var n=a(19),r=a(13),s=a(41),i=a(95),o=a(96),c=a(34),l=a(214),m=a(97);r(r.S+r.F*!a(98)(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,r,d,u=s(e),p="function"==typeof this?this:Array,h=arguments.length,f=h>1?arguments[1]:void 0,g=void 0!==f,y=0,w=m(u);if(g&&(f=n(f,h>2?arguments[2]:void 0,2)),null==w||p==Array&&o(w))for(a=new p(t=c(u.length));t>y;y++)l(a,y,g?f(u[y],y):u[y]);else for(d=w.call(u),a=new p;!(r=d.next()).done;y++)l(a,y,g?i(d,f,[r.value,y],!0):r.value);return a.length=y,a}})},214:function(e,t,a){"use strict";var n=a(23),r=a(55);e.exports=function(e,t,a){t in e?n.f(e,t,r(0,a)):e[t]=a}},215:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{date:"11 February 2019",title:"Front end Engineer identity crisis",path:"/blog/front-end-engineer-identity-crisis",tags:["Discussion","Front-end","Technology"]},headings:[],excerpt:'So recently, I listened to a topic about two vastly different approach to front end development on the JS party podcast(great podcast btw you can find it  here ). It was talking about  this  article from CSS-trick, "the great divide". The main idea is that there is two types of front-end engineers…',timeToRead:3}},{node:{frontmatter:{date:"09 January 2019",title:"JamStack: Jamming without headaches",path:"/blog/JamStack",tags:["Technology","JamStack","Serverless"]},headings:[],excerpt:"\nJavascript, API and Markup. That is what the Jam in the stack stand for. Javascript for dynamic content, APIs that abstract database and Markup for the static content for the website. During the development of this website, I come across this term when looking for cheap and fast design pattern to…",timeToRead:2}},{node:{frontmatter:{date:"02 January 2019",title:"I just started this website",path:"/blog/My-first-post",tags:["Announcement","Features"]},headings:[],excerpt:"Hey! Welcome to the front page of me. For my new year resolution, I wanna start writing more to improve ways to express myself. For some reason I always struggle with writing, whether its for assignment or work. Its just that went I start writing, its a struggle to express the message I want to…",timeToRead:3}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-2d31615b4ce03c425fab.js.map