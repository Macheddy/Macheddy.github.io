(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{187:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=n(197),o=n(193),r=(n(192),n(191),n(234)),l=n.n(r),c=n(199),d=function(){return a.a.createElement("section",{className:"hero"},a.a.createElement("div",{className:"container hero-body"},a.a.createElement("div",{className:"columns is-12 landingpage"},a.a.createElement("div",{className:"column is-1-tablet is-2-mobile"},a.a.createElement("div",{className:"image is-64x64 is-32x32-mobile is-centered'"},a.a.createElement(c.a,{imgsrc:"profilepic.jpg",style:{borderRadius:"50%"}}))),a.a.createElement("div",{className:"column is-6-desktop  is-9-tablet is-12-mobile"},a.a.createElement("div",{className:"title"},a.a.createElement(l.a,{bottom:!0},"Hi! I'm Edmund")),a.a.createElement("div",{className:"subtitle"},a.a.createElement(l.a,{bottom:!0},a.a.createElement("span",null,"Personal blog by ",a.a.createElement("a",{className:"has-text-link",href:"https://www.linkedin.com/in/eddyble/"},"Edmund Tay"))),a.a.createElement("br",null),a.a.createElement(l.a,{bottom:!0},"Full Stack web and mobile developer, amateur ML data scientist, generalist programmer"))))))},u=n(361),p=n(188),h=function(e){switch(e){case"react.png":return"https://reactjs.org/";case"gatsbyjs.png":return"https://www.gatsbyjs.org/";case"bulma.png":return"https://bulma.io/";case"firebase.png":return"https://firebase.google.com/";case"graphql.png":return"https://graphql.org/"}return"/"},m=function(){return a.a.createElement(p.b,{query:"214844614",render:function(e){var t=e.allFile;return a.a.createElement("section",{className:"hero"},a.a.createElement("div",{className:"columns"},a.a.createElement("div",{className:"container hero-body"},a.a.createElement(l.a,{bottom:!0},a.a.createElement("div",{className:"has-text-grey-dark",style:{paddingLeft:"0.75rem"}},"Built on:")),a.a.createElement("div",{className:"column is-mobile"},t.edges.map(function(e){var t=e.node;return a.a.createElement("div",{key:t.base,className:"image is-64x64",style:{marginRight:"0.75rem"}},a.a.createElement("a",{href:h(t.base)},a.a.createElement(c.a,{imgsrc:t.base})))})))))},data:u})},f=n(6),v=n.n(f),y=n(214),b=function(){return a.a.createElement("section",{className:"hero"},a.a.createElement("div",{className:"columns"},a.a.createElement("div",{className:"container hero-body"},a.a.createElement("div",{className:"column"},"Soon.."))))},w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={blog:!0,side:!1},n}return v()(t,e),t.prototype.render=function(){var e=this;return a.a.createElement("div",null,a.a.createElement("section",{className:"hero"},a.a.createElement("div",{className:"columns"},a.a.createElement("div",{className:"container hero-body"},a.a.createElement("div",{className:"tabs"},a.a.createElement("ul",null,a.a.createElement("li",{className:this.state.blog?"is-active":"",title:"list of blog posts",onClick:function(){e.setState({blog:!0,side:!1})}},a.a.createElement(p.a,{to:"/"},"Blog")),a.a.createElement("li",{className:this.state.side?"is-active":"",title:"list of side projects",onClick:function(){e.setState({side:!0,blog:!1})}},a.a.createElement(p.a,{to:"/"},"Side Projects"))))))),this.state.blog?a.a.createElement(y.a,{perpage:3}):a.a.createElement(b,null))},t}(a.a.Component);t.default=function(){return a.a.createElement(s.a,null,a.a.createElement(o.a,{title:"Home",keywords:["gatsby","application","react","bulma","github"]}),a.a.createElement(d,null),a.a.createElement(m,null),a.a.createElement(w,null))}},214:function(e,t,n){"use strict";n(105),n(106),n(86),n(59),n(30),n(93),n(215);var i=n(6),a=n.n(i),s=n(217),o=n(0),r=n.n(o),l=(n(192),n(188)),c=n(4),d=n.n(c),u=(n(191),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={max_page:0,current_page:Array.from(Array(n.props.perpage).keys()),perpage:n.props.perpage},n}return a()(t,e),t.prototype.render=function(){var e=this;return r.a.createElement(l.b,{query:"3424129496",render:function(t){var n=t.allMarkdownRemark,i=-1,a=n.edges;return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"columns "},r.a.createElement("div",{className:"container hero-body"},a.map(function(t){var n=t.node,a=n.frontmatter.title,s=n.frontmatter.date,o=n.frontmatter.path,c=n.excerpt,d=n.timeToRead,u=n.frontmatter.tags;return i++,e.state.current_page.includes(i)?r.a.createElement("div",{key:a,className:"is-three-fifths column has-shadow"},r.a.createElement("div",{className:"title"},r.a.createElement(l.a,{className:"title",to:o},a)),r.a.createElement("div",{className:"subtitle is-6 columns is-multiline"},r.a.createElement("div",null,r.a.createElement("span",{className:"icon is-medium has-text-danger"},r.a.createElement("i",{className:"fa fa-calendar"})),s,r.a.createElement("span",{className:"icon is-medium has-text-primary"},r.a.createElement("i",{className:"fa fa-book"})),d," min"),r.a.createElement("div",{className:""},r.a.createElement("span",{className:"icon is-medium has-text-success"},r.a.createElement("i",{className:"fa fa-tags"})),u.map(function(e){return r.a.createElement("span",{key:e,className:"blogtag is-light tag"},e)}))),r.a.createElement("div",{className:"has-text-grey-dark"},c,r.a.createElement(l.a,{className:"has-text-link",to:o},"Read more"))):r.a.createElement("div",null)}))))},data:s})},t}(r.a.Component));u.propTypes={perpage:d.a.number},t.a=u},215:function(e,t,n){"use strict";var i=n(19),a=n(13),s=n(42),o=n(96),r=n(97),l=n(35),c=n(216),d=n(98);a(a.S+a.F*!n(99)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,u,p=s(e),h="function"==typeof this?this:Array,m=arguments.length,f=m>1?arguments[1]:void 0,v=void 0!==f,y=0,b=d(p);if(v&&(f=i(f,m>2?arguments[2]:void 0,2)),null==b||h==Array&&r(b))for(n=new h(t=l(p.length));t>y;y++)c(n,y,v?f(p[y],y):p[y]);else for(u=b.call(p),n=new h;!(a=u.next()).done;y++)c(n,y,v?o(u,f,[a.value,y],!0):a.value);return n.length=y,n}})},216:function(e,t,n){"use strict";var i=n(23),a=n(57);e.exports=function(e,t,n){t in e?i.f(e,t,a(0,n)):e[t]=n}},217:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{date:"11 February 2019",title:"Front end Engineer identity crisis",path:"/blog/front-end-engineer-identity-crisis",tags:["Discussion","Front-end","Technology"]},headings:[],excerpt:'So recently, I listened to a topic about two vastly different approach to front end development on the JS party podcast(great podcast btw you can find it  here ). It was talking about  this  article from CSS-trick, "the great divide". The main idea is that there is two types of front-end engineers…',timeToRead:3}},{node:{frontmatter:{date:"09 January 2019",title:"JamStack: Jamming without headaches",path:"/blog/JamStack",tags:["Technology","JamStack","Serverless"]},headings:[],excerpt:"\nJavascript, API and Markup. That is what the Jam in the stack stand for. Javascript for dynamic content, APIs that abstract database and Markup for the static content for the website. During the development of this website, I come across this term when looking for cheap and fast design pattern to…",timeToRead:2}},{node:{frontmatter:{date:"02 January 2019",title:"I just started this website",path:"/blog/My-first-post",tags:["Announcement","Features"]},headings:[],excerpt:"Hey! Welcome to the front page of me. For my new year resolution, I wanna start writing more to improve ways to express myself. For some reason I always struggle with writing, whether its for assignment or work. Its just that went I start writing, its a struggle to express the message I want to…",timeToRead:3}}]}}}},234:function(e,t,n){"use strict";function i(e,t){var n=t.distance,i=t.left,a=t.right,s=t.up,o=t.down,l=t.top,c=t.bottom,d=t.big,p=t.mirror,h=t.opposite,m=(n?n.toString():0)+((i?1:0)|(a?2:0)|(l||o?4:0)|(c||s?8:0)|(p?16:0)|(h?32:0)|(e?64:0)|(d?128:0));if(u.hasOwnProperty(m))return u[m];var f=i||a||s||o||l||c,v=void 0,y=void 0;if(f){if(!p!=!(e&&h)){var b=[a,i,c,l,o,s];i=b[0],a=b[1],l=b[2],c=b[3],s=b[4],o=b[5]}var w=n||(d?"2000px":"100%");v=i?"-"+w:a?w:"0",y=o||l?"-"+w:s||c?w:"0"}return u[m]=(0,r.animation)((e?"to":"from")+" {opacity: 0;"+(f?" transform: translate3d("+v+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),u[m]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,a=(e.out,e.forever),s=e.timeout,o=e.duration,l=void 0===o?r.defaults.duration:o,d=e.delay,u=void 0===d?r.defaults.delay:d,p=e.count,h=void 0===p?r.defaults.count:p,m=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(e,["children","out","forever","timeout","duration","delay","count"]),f={make:i,duration:void 0===s?l:s,delay:u,forever:a,count:h,style:{animationFillMode:"both"},reverse:m.left};return t?(0,c.default)(m,f,f,n):f}Object.defineProperty(t,"__esModule",{value:!0});var s,o=n(4),r=n(235),l=n(359),c=(s=l)&&s.__esModule?s:{default:s},d={out:o.bool,left:o.bool,right:o.bool,top:o.bool,bottom:o.bool,big:o.bool,mirror:o.bool,opposite:o.bool,duration:o.number,timeout:o.number,distance:o.string,delay:o.number,count:o.number,forever:o.bool},u={};a.propTypes=d,t.default=a,e.exports=t.default},235:function(e,t,n){"use strict";function i(e){try{return m.insertRule(e,m.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function a(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",a,!0),i("."+s+" { opacity: 0; }"),window.removeEventListener("orientationchange",a,!0),window.document.removeEventListener("visibilitychange",a))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=i,t.cascade=function(e,t,n,i,a){var s=Math.log(i),o=(Math.log(a)-s)/(n-t);return Math.exp(s+o*(e-t))},t.animation=function(e){if(!m)return"";var t="@keyframes "+(f+p)+"{"+e+"}",n=h[e];return n?""+f+n:(m.insertRule(t,m.cssRules.length),h[e]=p,""+f+p++)},t.hideAll=a,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var s=t.namespace="react-reveal",o=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),r=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=o=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),u=(t.ie10=!1,t.collapseend=void 0),p=1,h={},m=!1,f=s+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=r="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=o=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),o&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=o=!1),o&&window.setTimeout(c,1500),r||(t.collapseend=u=document.createEvent("Event"),u.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(m=v.sheet,window.addEventListener("scroll",a,!0),window.addEventListener("orientationchange",a,!0),window.document.addEventListener("visibilitychange",a))}},359:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e,t,n,i){return"in"in e&&(e.when=e.in),s.default.Children.count(i)<2?s.default.createElement(o.default,a({},e,{inEffect:t,outEffect:n,children:i})):(i=s.default.Children.map(i,function(i){return s.default.createElement(o.default,a({},e,{inEffect:t,outEffect:n,children:i}))}),"Fragment"in s.default?s.default.createElement(s.default.Fragment,null,i):s.default.createElement("span",null,i))};var s=i(n(0)),o=i(n(360));e.exports=t.default},360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,a=!1,s=void 0;try{for(var o,r=e[Symbol.iterator]();!(i=(o=r.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){a=!0,s=e}finally{try{!i&&r.return&&r.return()}finally{if(a)throw s}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(0),c=(i=l)&&i.__esModule?i:{default:i},d=n(4),u=n(235),p=(0,d.shape)({make:d.func,duration:d.number.isRequired,delay:d.number.isRequired,forever:d.bool,count:d.number.isRequired,style:d.object.isRequired,reverse:d.bool}),h={collapse:d.bool,collapseEl:d.element,cascade:d.bool,wait:d.number,force:d.bool,disabled:d.bool,appear:d.bool,enter:d.bool,exit:d.bool,fraction:d.number,refProp:d.string,innerRef:d.func,onReveal:d.func,unmountOnExit:d.bool,mountOnEnter:d.bool,inEffect:p.isRequired,outEffect:(0,d.oneOfType)([p,(0,d.oneOf)([!1])]).isRequired,ssrReveal:d.bool,collapseOnly:d.bool,ssrFadeout:d.bool},m={transitionGroup:d.object},f=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.isOn=void 0===e.when||!!e.when,i.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:i.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},i.savedChild=!1,i.isShown=!1,u.observerMode?i.handleObserve=i.handleObserve.bind(i):(i.revealHandler=i.makeHandler(i.reveal),i.resizeHandler=i.makeHandler(i.resize)),i.saveRef=i.saveRef.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.default.Component),r(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?o({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!u.observerMode&&this.props.collapse&&window.document.dispatchEvent(u.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var i=this,a=n.forever,s=n.count,o=n.delay,r=n.duration;if(!a){this.animationEndTimeout=window.setTimeout(function(){i&&i.el&&(i.animationEndTimeout=void 0,e.call(i))},o+(r+(t?r:0)*s))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var i=n.duration+(t.cascade?n.duration:0),a=this.isOn?this.getDimensionValue():0,s=void 0,o=void 0;if(t.collapseOnly)s=n.duration/3,o=n.delay;else{var r=i>>2,l=r>>1;s=r,o=n.delay+(this.isOn?0:i-r-l),e.style.animationDuration=i-r+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?r-l:0)+"ms"}return e.collapse={height:a,transition:"height "+s+"ms ease "+o+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],i="style"in n&&n.style.animationName||void 0,a=void 0;e.collapseOnly?a={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(i=n.make),a={hasAppeared:!0,hasExited:!1,collapse:void 0,style:o({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:i}),className:n.className}),this.setState(e.collapse?this.collapse(a,e,n):a),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),u.ssr&&(0,u.disableSsr)()}},{key:"handleObserve",value:function(e,t){s(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&u.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.globalHide||(0,u.hideAll)(),this&&this.el&&(e||(e=this.props),u.ssr&&(0,u.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):n||this.inViewport(e)||e.force?this.animate(e):u.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,i=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!i||u.ssr&&!u.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):u.ssr&&(u.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map(function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):c.default.Children.toArray(e);var i=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],s=i.duration,r=i.reverse,l=n.length,d=2*s;this.props.collapse&&(d=parseInt(this.state.style.animationDuration,10),s=d/2);var p=r?l:0;return n.map(function(e){return"object"===(void 0===e?"undefined":a(e))&&e?c.default.cloneElement(e,{style:o({},e.props.style,t.state.style,{animationDuration:Math.round((0,u.cascade)(r?p--:p++,0,l,s,d))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===a(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,i=t.props,a=i.style,s=i.className,r=i.children,l=this.props.disabled?s:(this.props.outEffect?u.namespace:"")+(this.state.className?" "+this.state.className:"")+(s?" "+s:"")||void 0,d=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&r&&this.state.style.animationName?(n=this.cascade(r),d=o({},a,{opacity:1})):d=this.props.disabled?a:o({},a,this.state.style);var p=o({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:d},this.props.refProp,this.saveRef)),h=c.default.cloneElement(t,p,e?n||r:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:o({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,u.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,i=window.pageYOffset-t.getTop(this.el),a=Math.min(n,window.innerHeight)*(u.globalHide?e.fraction:0);return i>a-window.innerHeight&&i<n-a}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){u.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!u.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}();f.propTypes=h,f.defaultProps={fraction:.2,refProp:"ref"},f.contextTypes=m,f.displayName="RevealBase",t.default=f,e.exports=t.default},361:function(e){e.exports={data:{allFile:{edges:[{node:{base:"bulma.png"}},{node:{base:"firebase.png"}},{node:{base:"gatsbyjs.png"}},{node:{base:"graphql.png"}},{node:{base:"react.png"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-4385d97eb471db0d0a76.js.map