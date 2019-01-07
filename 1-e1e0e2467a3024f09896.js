(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{134:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return f}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return p});var n=t(0),r=t.n(n),i=t(4),s=t.n(i),c=t(135),l=t.n(c);t.d(a,"Link",function(){return l.a}),t.d(a,"withPrefix",function(){return c.withPrefix}),t.d(a,"navigate",function(){return c.navigate}),t.d(a,"push",function(){return c.push}),t.d(a,"replace",function(){return c.replace}),t.d(a,"navigateTo",function(){return c.navigateTo});var o=t(143),u=t.n(o);t.d(a,"PageRenderer",function(){return u.a});var m=t(43);t.d(a,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},136:function(e,a,t){},138:function(e,a,t){"use strict";var n=t(150),r=t(0),i=t.n(r),s=t(4),c=t.n(s),l=t(151),o=t.n(l),u=t(134);function m(e){var a=e.description,t=e.lang,r=e.meta,s=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:d,render:function(e){var n=a||e.site.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},a.a=m;var d="1025518380"},139:function(e,a,t){"use strict";var n=t(146),r=t(0),i=t.n(r),s=t(4),c=t.n(s),l=t(134),o=t(6),u=t.n(o),m=t(46),d=t.n(m),p=(t(137),t(136),t(149)),f=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={active:!1},t.toggleClass=t.toggleClass.bind(d()(d()(t))),t}u()(a,e);var t=a.prototype;return t.toggleClass=function(){this.setState(function(e){return{active:!e.active}})},t.render=function(){return i.a.createElement("header",{className:"hero"},i.a.createElement("nav",{className:"navbar has-shadow"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement("div",{className:"navbar-item"},i.a.createElement(l.Link,{className:"",to:"/"},i.a.createElement("div",{className:"title is-3"},i.a.createElement("span",{className:"icon is-large has-text-primary"},i.a.createElement("i",{className:"fa fa-flask"})),this.props.siteTitle))),i.a.createElement("div",{role:"button",onClick:this.toggleClass,className:this.state.active?"navbar-burger is-active burger":"navbar-burger burger"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null))),i.a.createElement("div",{className:this.state.active?"is-active navbar-menu":"navbar-menu"},i.a.createElement("div",{className:"navbar-start"},i.a.createElement(l.Link,{className:"navbar-item ",to:"/blog"},i.a.createElement("span",{className:"icon is-medium has-text-info"},i.a.createElement("i",{className:"fa fa-th-large"})),"Blog"),i.a.createElement(l.Link,{className:"navbar-item ",to:"/about"},i.a.createElement("span",{className:"icon is-medium has-text-success"},i.a.createElement("i",{className:"fa fa-user-circle"})),"About me"),i.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},i.a.createElement("div",{className:"navbar-link"},i.a.createElement("span",{className:"icon is-medium has-text-danger"},i.a.createElement("i",{className:"fa fa-briefcase"})),"Side Projects"),i.a.createElement("div",{className:"navbar-dropdown"},i.a.createElement(l.Link,{className:"navbar-item ",to:"/"},"Working in Progress",i.a.createElement("br",null),"One day..")))),i.a.createElement("div",{className:"navbar-end"},i.a.createElement(p.OutboundLink,{className:"navbar-item ",href:this.props.repo},i.a.createElement("span",{className:"icon is-large has-text-black-bis"},i.a.createElement("i",{className:"fa fa-github"})),"Github repo"))))))},a}(i.a.Component),v=function(){return i.a.createElement("footer",{class:"footer"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"content has-text-centered"},i.a.createElement("p",null,"Create by Edmund"))))},h=function(e){var a=e.children;return i.a.createElement(l.StaticQuery,{query:"2263432981",render:function(e){return i.a.createElement("article",null,i.a.createElement(f,{siteTitle:e.site.siteMetadata.title,repo:e.site.siteMetadata.repo}),i.a.createElement("main",null,a),i.a.createElement(v,null))},data:n})};h.propTypes={children:c.a.node.isRequired};a.a=h},143:function(e,a,t){var n;e.exports=(n=t(148))&&n.default||n},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Eddayy",repo:"https://github.com/Eddayy/Eddayy.github.io/tree/development"}}}}},148:function(e,a,t){"use strict";t.r(a);t(28);var n=t(0),r=t.n(n),i=t(4),s=t.n(i),c=t(61),l=t(2),o=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json))};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=o},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Eddayy",description:"My name's Edmund Tay, a developer from Malaysia",author:"Edmund Tay"}}}}}}]);
//# sourceMappingURL=1-e1e0e2467a3024f09896.js.map