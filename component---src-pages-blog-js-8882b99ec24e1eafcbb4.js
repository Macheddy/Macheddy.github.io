(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(139),l=a(138),i=a(140);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react","bulma","github"]}),r.a.createElement(i.a,null))}},140:function(e,t,a){"use strict";var n=a(6),r=a.n(n),o=a(141),l=a(0),i=a.n(l),s=(a(137),a(134)),c=(a(136),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={query:'query{\n        allMarkdownRemark(filter:{frontmatter:{path:{glob:"/blog/*"}}}) {\n          edges {\n            node {\n              frontmatter{\n                title\n                path\n              }\n            }\n          }\n        }\n      }'},a}return r()(t,e),t.prototype.render=function(){return i.a.createElement(s.StaticQuery,{query:"544611255",render:function(e){var t=e.allMarkdownRemark.edges;return i.a.createElement("section",{className:"hero"},i.a.createElement("div",{className:"columns "},i.a.createElement("div",{className:"container hero-body"},t.map(function(e){var t=e.node;return i.a.createElement("div",{className:"is-three-fifths column has-shadow"},i.a.createElement("div",{className:"title"},t.frontmatter.title),i.a.createElement("div",null,t.excerpt,i.a.createElement(s.Link,{to:t.frontmatter.path},"Read more")))}))))},data:o})},t}(i.a.Component));t.a=c},141:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{date:"2018-12-21",title:"I just started a website",path:"/blog/My-first-post"},headings:[],excerpt:"Hey! Welcome to the frontpage of me. For my new year resolution, I wanna start writing more to improve my self expression. For a long time I always struggle with writing, whether its for assignment or…"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-8882b99ec24e1eafcbb4.js.map