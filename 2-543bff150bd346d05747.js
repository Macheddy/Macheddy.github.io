(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{187:function(A,e,a){"use strict";a.d(e,"b",function(){return d});var t=a(0),n=a.n(t),s=a(4),c=a.n(s),i=a(29),r=a.n(i);a.d(e,"a",function(){return r.a});a(216);var o=n.a.createContext({}),d=function(A){return n.a.createElement(o.Consumer,null,function(e){return A.data||e[A.query]&&e[A.query].data?(A.render||A.children)(A.data?A.data.data:e[A.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},190:function(A,e,a){},192:function(A,e,a){"use strict";var t=a(266),n=a(0),s=a.n(n),c=a(4),i=a.n(c),r=a(267),o=a.n(r),d=a(187);function l(A){var e=A.description,a=A.lang,n=A.meta,c=A.keywords,i=A.title;return s.a.createElement(d.b,{query:m,render:function(A){var t=e||A.site.siteMetadata.description;return s.a.createElement(o.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+A.site.siteMetadata.title,meta:[{name:"description",content:t},{property:"og:title",content:i},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:A.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:t}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(n)})},data:t})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},e.a=l;var m="1025518380"},196:function(A,e,a){"use strict";var t=a(234),n=a(0),s=a.n(n),c=a(4),i=a.n(c),r=a(187),o=a(37),d=a.n(o),l=a(6),m=a.n(l),E=(a(191),a(190),a(236)),f=function(A){function e(e){var a;return(a=A.call(this,e)||this).state={active:!1},a.toggleClass=a.toggleClass.bind(d()(a)),a}m()(e,A);var a=e.prototype;return a.toggleClass=function(){this.setState(function(A){return{active:!A.active}})},a.render=function(){return s.a.createElement("header",{className:"hero"},s.a.createElement("nav",{className:"navbar has-shadow"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement("div",{className:"navbar-item"},s.a.createElement(r.a,{className:"",to:"/"},s.a.createElement("div",{className:"title is-3"},s.a.createElement("span",{className:"icon is-large has-text-primary"},s.a.createElement("i",{className:"fa fa-flask"})),this.props.siteTitle))),s.a.createElement("div",{role:"button","aria-hidden":"true",onClick:this.toggleClass,className:this.state.active?"navbar-burger is-active burger":"navbar-burger burger"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement("div",{className:this.state.active?"is-active navbar-menu":"navbar-menu"},s.a.createElement("div",{className:"navbar-start"},s.a.createElement(r.a,{className:"navbar-item ",to:"/blog"},s.a.createElement("span",{className:"icon is-medium has-text-info"},s.a.createElement("i",{className:"fa fa-th-large"})),"Blog"),s.a.createElement(r.a,{className:"navbar-item ",to:"/about"},s.a.createElement("span",{className:"icon is-medium has-text-success"},s.a.createElement("i",{className:"fa fa-user-circle"})),"About me"),s.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},s.a.createElement("div",{className:"navbar-link"},s.a.createElement("span",{className:"icon is-medium has-text-danger"},s.a.createElement("i",{className:"fa fa-briefcase"})),"Side Projects"),s.a.createElement("div",{className:"navbar-dropdown"},s.a.createElement(r.a,{className:"navbar-item ",to:"/"},"Working in Progress",s.a.createElement("br",null),"One day..")))),s.a.createElement("div",{className:"navbar-end"},s.a.createElement(E.OutboundLink,{className:"navbar-item ",href:this.props.repo},s.a.createElement("span",{className:"icon is-large has-text-black-bis"},s.a.createElement("i",{className:"fa fa-github"})),"Github repo"))))))},e}(s.a.Component),g=a(237),p=a(238),b=a.n(p),u=(a(241),a(242)),B=a.n(u),w=a(243),Q=a(198),h=a(257),N=a.n(h),Y=function(A){function e(e){var a;return(a=A.call(this,e)||this).onCloseModal=function(){a.setState({open:!1})},a.state={open:!1,err:"",img:"2_pay_mm_off.png"},a.onOpenModal=a.onOpenModal.bind(d()(a)),a.startmetamask=a.startmetamask.bind(d()(a)),a}m()(e,A);var a=e.prototype;return a.onOpenModal=function(A){this.setState({open:!0,err:A})},a.startmetamask=function(){var A=B()(b.a.mark(function A(){var e,a;return b.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(void 0!==window.ethereum){A.next=3;break}return this.onOpenModal("You need to install MetaMask to use this feature. Download here: https://metamask.io"),A.abrupt("return");case 3:return A.next=5,window.ethereum.enable();case 5:e=A.sent,a=e[0],window.web3.eth.sendTransaction({to:"0xEddae736256B1F3cf1a9F278CfdcB1E45f4c5515",from:a,value:window.web3.toWei("0.01","ether")},function(A,e){if(A)return this.onOpenModal("Oh no!: "+A.message);this.onOpenModal("Transaction successful! Thank you so much. You can track your transaction here: "+e)});case 8:case"end":return A.stop()}},A,this)}));return function(){return A.apply(this,arguments)}}(),a.render=function(){return s.a.createElement("div",null,s.a.createElement("button",{className:"tip-button","aria-hidden":"true",onClick:this.startmetamask},s.a.createElement(Q.a,{imgsrc:this.state.img})),s.a.createElement(w.a,{open:this.state.open,onClose:this.onCloseModal,center:!0},s.a.createElement("br",null),s.a.createElement(N.a,null,this.state.err)))},e}(s.a.Component),C=a(219),D=a.n(C),j=function(){return s.a.createElement(r.b,{query:"3627576170",render:function(A){return s.a.createElement("footer",{className:"footer has-background-white-ter"},s.a.createElement("div",{className:"container has-text-grey-dark hero-body"},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column"},"Contact",s.a.createElement("br",null),"+60179882188",s.a.createElement("br",null),"edmundtay96@gmail.com"),s.a.createElement("div",{className:"column"},"Repository info",s.a.createElement("br",null),"Last commited on ",D()(1e3*A.gitCommit.commitDate).format("DD MMM YYYY LT"),s.a.createElement("br",null),A.gitCommit.commitSubject),s.a.createElement("div",{className:"column"},"Donations",s.a.createElement(Y,null),"Btc:1Bqwtx1tDmrxsrZpyqiU8sMiT2jYiwYgoj",s.a.createElement("br",null),"Eth:0xEddae736256B1F3cf1a9F278CfdcB1E45f4c5515")),s.a.createElement("div",{className:"has-text-centered is-size-7"},"© ",(new Date).getFullYear(),", Built by Edmund. ",s.a.createElement(r.a,{className:"has-text-link",to:"/privacy"},"Privacy Policy"))))},data:g})},v=function(A){var e=A.children;return s.a.createElement(r.b,{query:"2263432981",render:function(A){return s.a.createElement("article",null,s.a.createElement(f,{siteTitle:A.site.siteMetadata.title,repo:A.site.siteMetadata.repo}),s.a.createElement("main",null,e),s.a.createElement(j,null))},data:t})};v.propTypes={children:i.a.node.isRequired};e.a=v},198:function(A,e,a){"use strict";a.d(e,"a",function(){return l});a(121),a(106);var t=a(6),n=a.n(t),s=a(255),c=a(0),i=a.n(c),r=a(187),o=a(256),d=a.n(o),l=function(A){function e(){return A.apply(this,arguments)||this}return n()(e,A),e.prototype.render=function(){var A=this;return i.a.createElement(r.b,{query:"3703113417",render:function(e){return i.a.createElement(d.a,{style:A.props.style,className:A.props.className,fluid:e.allImageSharp.edges.find(function(e){return console.log(e.node.fluid.src.split("/").pop()),e.node.fluid.src.split("/").pop()===A.props.imgsrc}).node.fluid,alt:A.props.imgsrc})},data:s})},e}(i.a.Component)},216:function(A,e,a){var t;A.exports=(t=a(235))&&t.default||t},234:function(A){A.exports={data:{site:{siteMetadata:{title:"Eddayy",repo:"https://github.com/Eddayy/Eddayy.github.io/tree/development"}}}}},235:function(A,e,a){"use strict";a.r(e);a(32);var t=a(0),n=a.n(t),s=a(4),c=a.n(s),i=a(75),r=a(2),o=function(A){var e=A.location,a=r.default.getResourcesForPathnameSync(e.pathname);return n.a.createElement(i.a,Object.assign({location:e,pageResources:a},a.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=o},237:function(A){A.exports={data:{gitCommit:{commitDate:"1550712324",commitSubject:"Merge branch 'development' of github.com:Macheddy/Macheddy.github.io into development"}}}},255:function(A){A.exports={data:{allImageSharp:{edges:[{node:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABsElEQVQY0yWMS2/TQBRGzZIVa9as+C+sYcWGX4CEkFiAxBKpC1QQC15iVymotF2EljatqshqeQTaOg+Spk6bpLE9fsyMx2MHxZ7Rh5Ne6dM9956ra1DKlqXgZ2mOY1nAyqSwOOcWY9RKZGrFcbxgzpglElk6ZkWBb8VCLNz8tsxxzHmfMfbGCIi3tfPqEc5Wn4Huv8Tnp/cQM4qBdYij7Qra5hYu+204gy4O197hot1A98cuTva+IJgMMSs0ZJpiXuXDmkF5vLH+/C4OHlzLuw+v67f3b+vAJzp0x3rQauhh67sOR11NnYG+6DW1N7K1Nz7Xo9O2DoijReRqTqN8liXzh1+NiNINtXIH9uMbs86TmypeuqVY5CvZ21XTX+/VtPFByU5VyeaaylqrKj2pqLTxseR1JUsWnU0lD17n+fk+qMyrBo3Cb2iu4O/2JxzVKkjqy5hmEkVkI/eaKOwdFEEPhddC0d+EsmvIw1OoBZfu8idmvSog+mAi3TM8z33hsuyPz9N6wBLT5f9MQohJ/MAkATWJ55jEGZezb5JIlLvwyoXsKpNh2Xm99L89d7L0H/FFnboAqjsNAAAAAElFTkSuQmCC",aspectRatio:3.261627906976744,src:"/static/58e23f2ef6a928cbc50e86df2801fd2b/103e9/2_pay_mm_off.png",srcSet:"/static/58e23f2ef6a928cbc50e86df2801fd2b/2311d/2_pay_mm_off.png 300w,\n/static/58e23f2ef6a928cbc50e86df2801fd2b/103e9/2_pay_mm_off.png 561w",sizes:"(max-width: 561px) 100vw, 561px"}}},{node:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABmklEQVQY0yWQv28TMRzFj5GZnYF/gP+Blf+BAQmBGJFgYK3E1A2JAVEm1Ko/xFBRolOAhgpE1DSIRIG0lIgmtHc5c77cD9tn+4wfvpzlj96z3teSnz3O2IZiqbQA+QfQSmRUyZKWnDmVVApOS5Yvz7Wv4XlKZSmWc/WMg2gpy1KIbS9bJP7rldsYrd1FtPsYL+7fgLuAs2EXR3uvMOzsIpiMMT87xeetZ5iOejjuvsO39haS8A/qpZReqnvcB48L+fb96i0c3rlU/Xxw2a7fu255kVuREhtPT+zi98CKcGwlmdhFOLNFHFgWXzg/ta6M1WlgVU4rGAHBedsr8vwN1m9i/PCK6j+6aorVa6ZkmdGTfVMdPTe6v2bUpGPUSctUo22jBxtG9V+a6vuOUcNNI0/bRn55qjE7AK/ge4IV+5i63fPx6+sB1GAHTY8YKOdAdOi6nANsBsy77qf7gKaNj3pA8gMInLcEpdSfvDAMV0gmP9JMtJKs8KNc+4QQR+yTv4mD+iSKGk2YT+K0yWjeUGdJ0XJ5JwwunvwHOrqm1mwT32AAAAAASUVORK5CYII=",aspectRatio:3.261627906976744,src:"/static/4aed3957db1107506d9937c13f78ea9f/103e9/2_pay_mm_over.png",srcSet:"/static/4aed3957db1107506d9937c13f78ea9f/2311d/2_pay_mm_over.png 300w,\n/static/4aed3957db1107506d9937c13f78ea9f/103e9/2_pay_mm_over.png 561w",sizes:"(max-width: 561px) 100vw, 561px"}}},{node:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAABDUlEQVQoz9WSO2+DMBSF+dcoIwMwMGQiC2JKFn4ICwNIoDCQkaeIMeEdCjU9kKqqoixVh6pnuLKP/fk+ZG75hbj/BjPGPuH3TWzTY4F43/S2LHfG5s3BzWEYpml6wHBW2HVd0zQNw7BtW9d1x3EQKaUlpUEU2pcLoTTLsq7rEPM8L8uyqipsV9iyLE3TeJ4/Ho+73U6W5f1+j7Pb7TZ0XUEIgCAIwjBEtnmePc9L03Qt2/d9VVUlSTocDqIoKooiCMLpdGqaJkkSJCFFEUXR9XoFj+dQEXxCSN/3HAo4n8+oZxxHvB3HMY6RCn5d1+gNnSPbo2HAbdvOm+BzPxrv87S/JvxST8B3E4u/+2Ef25LlBL7XGe4AAAAASUVORK5CYII=",aspectRatio:1.5,src:"/static/194d07ff6dfba4dab01b65eb2d860fbf/aa3c9/jamstack.png",srcSet:"/static/194d07ff6dfba4dab01b65eb2d860fbf/87a27/jamstack.png 300w,\n/static/194d07ff6dfba4dab01b65eb2d860fbf/d2054/jamstack.png 600w,\n/static/194d07ff6dfba4dab01b65eb2d860fbf/aa3c9/jamstack.png 900w",sizes:"(max-width: 900px) 100vw, 900px"}}},{node:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAbY83Tjrsc4NNhUQCf/EABwQAAICAgMAAAAAAAAAAAAAAAECAAMREhMhMv/aAAgBAQABBQJrrNOS0RrnUocnoLvCY3nJn//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhAR/9oACAEDAQE/AUjIir//xAAYEQACAwAAAAAAAAAAAAAAAAAAARARIf/aAAgBAgEBPwFs2KP/xAAdEAACAgIDAQAAAAAAAAAAAAAAAQIhEBEDEjFh/9oACAEBAAY/Ak4zVl8mzXaLLVDo8wvuP//EABwQAQACAwADAAAAAAAAAAAAAAEAESExQRBRcf/aAAgBAQABPyGwEqtalXDdBE1EP0A8cKczhTcsNcntuGZV2f/aAAwDAQACAAMAAAAQO/8Aw//EABgRAQADAQAAAAAAAAAAAAAAAAEAEBEx/9oACAEDAQE/EBTaOGaz/8QAGBEBAQEBAQAAAAAAAAAAAAAAAQARIVH/2gAIAQIBAT8QQctidLHl/8QAHBABAAMBAQADAAAAAAAAAAAAAQARITFBUWFx/9oACAEBAAE/EOcX+XN235kB8IAKLV55FA06lL/ajW4DoUbLBADn3BsMPaTk1nGVA1YM67U5tB8lz//Z",aspectRatio:1,src:"/static/acbeaa5c29247788a5b1f3911bddd5dc/24789/profilepic.jpeg",srcSet:"/static/acbeaa5c29247788a5b1f3911bddd5dc/24789/profilepic.jpeg 200w",sizes:"(max-width: 200px) 100vw, 200px"}}},{node:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADAElEQVQ4y42Vz2sTQRTH3+7mN7a0VfyBXrzoSbBaEPEk9C8QexQ8iRfBg3oR6cEfh56VFvVqpf6oNslmZ9Mf9gdo1ZLaZLO7SdrU6lGK4KW2TTLOm5lNtmkJLizzNrvzme977zsTAP9FR6Azm+LhtcUEgEsCGIddcj1cIDf5C9cInM6N87BrkbA5r2Dvi73okLAbVhrATnmwy+CkKBRNGnLIFf6BrQfOLE3ysHNP6ONH0GEZPLw7b/phfUwRhWycwtJYrRnanfVBa34opWL4W0aYWleGsFwCgRV2Vzm4WWlGQDsyTBAdkMBlgGM/WF0sncNCrtHXBKPy3g11E8rRJbMp5blvEM7pCoZtjrFfyet/2OoNGKabjdckVPxWIDRoG1cFNKW0Z1HhQwmcGIagl6pt9ICVREiVQxowL0boFmbAFt7ocs3DOC+WMxWg92T91mdAc4mGLwIFcglWxhFYqYN2wiqQT1LFSm6HHdLLBTlEPZJ5J9U9uAOx2TirX4IDNSt5G75PIXBbwOogAUNlVrIWcc1ema7aaG6nGBX3LUDB5EDVNYZgddIHxBryscoWRdh62DUvii4LewGNw4EFnY3D7OH5UzjosC5Z73lTVCuZbkqZypGrU/N6pkgp/zZiCxGBHIHY79GGwaN5sUOO//oaVGzdlmau+urmmbuCi6n51OeT5dkIt5iEajkTogiFsVEIZROK6JR+SLES67zL/ob4m4KlKE8i9NMJD+pIpTb6cWaEGZnwwkYKZg8sp3en61mnAd2S0I/nfn4J4dyga8rmDD2DWJHwsHt1WtPs1AtY+yAmtYZuQimNNV1sl15kNlLqHY8WzPoDgw63gAr7YFyeQHOvxGzjFFdZTDPG4CBEHbEXozZR/wO6hdsOG6c5qYFbK/NciFYab/hR23wNkSxpBd2uq1qbwjQtdhpd8L4LF0T9lFK6cT4ENlpAceeglaSqs6tzAe/03ucSqXACYgtvdh46LZS+ZLUqsb+B83UBcmeB/QTaitOgpO8D9PfDPxswd/iUW8MkAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/da2bbcffa531f198663850f47f891270/0742b/bulma.png",srcSet:"/static/da2bbcffa531f198663850f47f891270/0742b/bulma.png 64w",sizes:"(max-width: 64px) 100vw, 64px"}}},{node:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAER0lEQVQ4y2WUe2xTVRzHT1vilNGN9u4h62SDoZkPogyEhMzbx9jsTIjEx3zERP8wxj80Gk1MDIRojI8/jOILnUyRx9qua1kJA4wwDbDs0bVlW+c2MdFo4oORGFzW9d57Hj/PY7QgNzm555x7fp/z/T3uD6Glx+q/HdHwSruYk17PYdxb2yH3ox6HeexeZCS2yHNwfD0a3NWKAJAccg/QtQ+8V4HIsTvR5VfU2jyszVihyrSYL3yAbPCi2sffblbnX0CITT2K6Oxjcs0uPInm5pqLQHaJq4rX2+Th7+4qx+GK3yGhAYmv3iH25gceX/bzxTmpHp9ukTZ03G9nGV3ZjKxH/052XAU8UYdwtFZ+xPH6RhzSTOh1AY5UTcoQxGpfprFVR6VxDNnx6FZ7wbvhe4qeXnEdPncieqTGIW8+4nkA4hqwbpcFMTdYiYZXWUSbgv6VYPXdVvCLTgWfp9n7n5X2kwH75dkOBH+9zxdDHsQ+8SAc1iQQ99z8knCXhVyYhFzM6HSBtd9JIO4EGq36XsKywafgtzYg4y1K9fhWez4VLLpMEtU8w2USSKLVn0GfmwPd2DroYrk3S9nCRysYRMqAHigl1pkt+0gmYELWByQdGBM2f9fwsE3vQDDPBcPeJkRPbkD4C6RiGK48BXE30Iib5D8ug8XdHPi2k+X33cSMxFoG2QCQUZ1Bygsk459jMw9WSCHjQRs7s6QQxxtULM/5Skik4ifo5bE74KK5t1awRT5yO0tY7tAawOkAI0kvwaM65QNoygc02363DMNEm50NP8yl9jfyDK9W6vrW1eJubYFF3JDfU8Zyb3DYrhvB6KpnJMWVJXXGQQIq3gR+DACdbHtEAVsdMLuJA7sbEI3X2FWGb2mGqAbmfhdX5uSwEgHjsfIDTuogVAnYEhDDbAuQ89t2SpczXgcd2M7d7NYQDlWqDIdXPQ19Gix+WI5zr5cw4yuujMNIESbfWCr1YpgOiEwfUgqbHXSsXbhZgkjEpTIcq34HetzAY4aNrjoOC1wHW1rLWMIkvywTGBG2+Xe5/SyPIZzSUa5rmXTZjFbHYM9yMDrrMFfGroMV5wJIIS0z/QeZfqhcepgJ2pARW1OoR2OvMwnf1In6Iv9LQAGm9lUcxYUk5bPozPZGVfDtHNi7TmbY+Lqyyuq51QQZM691lTKGr4UzBZblY8IvrcBLpkM1jG0OZPZvlOoWP11bipO+gzDhB8j6BQhzJaQALYJEDVpw3gciKXyeMs5575CiBr021VyPNhXcNgfva8ZJ71lRYzDuEwYWd5cSBbXEHyLKhZ/51RrSn7lih0d9CoaPb1Kg+AYEE3qhLZlD+hPc6IIwhjT/I7g6mJGgeWtY330pvHm5alnPIWvErzp9mvfKfLwc5c76CgqtUa8DIChv+7Nz4w3msP4aV3aRJ8CwRvQvc6ebPQVVY17HPxHVxfM/6GhxoAn9Bw0YFz7L9ewRAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/9e00034db354721e064920bc7e6c8870/0742b/firebase.png",srcSet:"/static/9e00034db354721e064920bc7e6c8870/0742b/firebase.png 64w",sizes:"(max-width: 64px) 100vw, 64px"}}},{node:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADcklEQVQ4y3WUT0wTQRTGF9SbBg8aEsJBE/GgF+jMbksjClEPcDKevShC/7e0wRjDwZMX9YIYpO12uy2iKIgkHiUxJsoBPapEoycPJkpCFMECLev3ZmZJU7HJ687szvze996beVqE3dPinmca/SLc3qWpX0QvtAR5Lhlg2Vf9nvTvPs/YRoBlvgSYORzm+U7npyPXsXx9xLDFOOTN0d9zOdHzAhbW800A2di8nvQ9dgZ8j5yYcV9YwvvQSbVPOXDmBLj5JsStHtrjOXJVCxtWnSuGIBLG7dNQtDTgm3TCuu0EWfY14ENQeA7WDXWBIDMn4WzVXRPiuVsuJ6BbAiJgIZ4nWIWU4Pke3jvofUov7IaiY7C2GLcPKMf7AbYhRKjG2hF6H3VVBrnVRMoUbE7mEJu4OQE1v+BMqMG4ApVvAegW+1gu0c/SZdqHSALbIZM3CgGwDyqfBsalmDFOEAcF2YJVsNkhVXHvBAFuizCZORsV67JLYW41kvyWfhSAEg2PJ2H78PEPckOgdUC2amyTHEAlOXuJ+RrmZXKOiIY0VCtJ1QTkhfSYFR772FiJFNFmF4Z39HTEGBBSq+abNMbeBQAy83HvA6gzp1UIqahedEGVKkA1TKQAtqmeFUoNbFnDcSjBc5mgCHNEQeNR4x+oo5TSOqqsMOQSlnW/lzWZ7Awmmbm4IZI9uhOUnqJALL2K8YnLbaOHettGj/Z50sdhp7DmO0J2KOQvdJaQ0EsI+8IV/yxBd1Jalo7TKJgVxDE6D7sYZrhZrLAX39ZgJSrCcMo3RQmdVkdoYLB9phoaqw2fikaWxD6E3woxZ0kUgJ/oUHeKu8kyK4AcroHe+U/4qzR3ReD5hO441mU19WKBDjZAuarDnqhRmnCh8maYn+UtM7tCojDC/Orq5XrkRUflWC5eBU0N+p/SwrsuVDYNc0beqFwzIvsmasDMcdlpeL5eQW+q80iAG8n2qT0K2puSuZLhc+ugaiZdBBN7uLkY4maDAEZ5QTvTmpA9EV3D7X1IwztqsPjeDOh16ouYDwPcgbY2S9Go07EY5cVm1QbrZdc18tvNEQsDgP0gAF1JbKCj8hW2QeEmoIgKoHJWDBl2g+xOsqcCZqqObWlBI1snPRUbAb4G8DyOwjIdWBxeVDizgjA/ApQJ6bZ/W4RuCWVxr639BZ/5i/y6rIwnAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/74940f817f33b5a924f1d4212d30651e/0742b/gatsbyjs.png",srcSet:"/static/74940f817f33b5a924f1d4212d30651e/0742b/gatsbyjs.png 64w",sizes:"(max-width: 64px) 100vw, 64px"}}},{node:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADn0lEQVQ4y41UXWxMQRSe3bspElJPRBCJh4qI0NbM3V2kJVKpSkgkiIi+4MmDxgNBkPCAVCIhiIr6LdXu/dn+Ldptg/JA4y8khIcmre5Wd1vdLtHqjm/mTnf3oRI3OTl35pzznXO+OTOEZH0/p34j4/M6yWdfHYnk15P95afk/ndmHogyszpG7fliHdNtl9C9y66T1OKPJJUNksxvc3RRE0mseEg4+SbXA8zKUbp8zP+Y//Y94v3MbFN7nl5aL/2Gl4ZIclUL4TuMDGiEGcJJ62eGFtUNd1wPahO278yyhvQG3kfreZQaQ4N6MC9jM4W/JjT8XE6GwkYy2QenkhizwgPMfBShgQikF4BdMWa3I/mJyWIGadCVXiB4DxzPIsgLfRvyAqDL0eYNSPlnb3UO1s8i1CiA7eIAs7uwLkNle5CkEjI7DYaAXaPgaNjbyFHJHwRUiP0oNYsQ9DTtR80KrG85BdgsyowPCW8TH/e3gV8jlA14TADCQXDVndX2K9hWSgDq8Iq95/DbILmngZOjzmEJfj9lxkVvzsVmKxySCNiqkhzE/03xj0PREOCWVTOjRLSuaJqL/ReIGxpkwXUSLM5sTeli8HHHCQrMQtA76Dli3UcNSTaCNJWsDi3uc2gxtqD9S07iRo8YC7fipBQgD2Rb1LwmaJAzp1seobm/B8D1EjiyIrAQvu+dto2t4LxKArIGLRtwI5yu9tAHwvn14UW7ZXA3rSUjvhaS9IfUwNseVWWlSNpHA2sAWJ0GHFCAquVLcKpFOztVUI6wI4Eb8yg1WtQ456S7sGYG1u04+eMo5nS65T7ddCmCD0Rp4BfAbpD//ABYigRJJG4ZYaHpaQPa2P5Db+S4VmIO22K6VQTuNkPKIBsmkU14INZGWOCoGJmEt5kD3CZZA3s85Q/zXlonHwEYH0POQe5A7im5D6lR+gpALyP5qLjnwxhuHM6XTIW6PQuZwij/K+QCeAshaO+/WoVPHrqpAndn8N8KmnoQs0kaE6wpfaG5r2OaOox5cLgLeYXDWI/AbeD4KGQJZvE8XqMm/Ben41Z3yqdulDU7G3G9wfUm/7rTvm56MtxaPshbwe8IeEKiOCrbPWH/oTd4cmcumMBwq3ZbJk5MAKi7bbniuj1FvYdHxvytHDben8UT9p0bRi0ZZxdsdwypUuc9TBWHSZJ2YJZM8pJdFbfFpapcAJ46cQBRgOyQI+ZVl4EGSaLwCeFFYaf1U4fIX/CEYowqoU5/AAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/4fe994fce9c955d6f058077b0fa2018a/0742b/graphql.png",srcSet:"/static/4fe994fce9c955d6f058077b0fa2018a/0742b/graphql.png 64w",sizes:"(max-width: 64px) 100vw, 64px"}}},{node:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADq0lEQVQ4y21VXUgUURS+7loPRVJSL9Gb0Es/EoERYT9YkEGRYPSSmzszu6b9mCX1YlgQ2M9LhVmCJklZYT8PiSgpRmmYJFRbKrk7u7OrmJREVls6987tm5m7O2t04TL3nnvOd79zzj1nCMHYO8SJJ6SbS7JncJrIUeYy1/4YcykRe20OOUTTfDHDba59GkuTIzTNkocp2TfCSXJ4NGdTMZlyIIZvzHD7NBvo36FEKfnvKA3EiTLOLTaKxkqVKHuBeUfW2MaEjlfVF+PsMuTd+N72jtKFplwCw/zWFCKFAU6koG7Rl1R9lRxhrz3Ds1kwKoDLbzFPKDGWDfAAZOc8gXgm3L2hRGi1zZK5i1XBtJByUvmTm6zcwgUPlK+ksscFL/0TnMuqvjohk0I0V9FoixWSccNVouokh4OlT2VEuCkAmQl41QGjawHYLIfZdehUzAVkd+3kGe5N6jdSohkisMhWAlAKAkCj7QDaAQZ+SaVfkcUBOaLXWizD9DJ086FTg/X5ZOKEvQXmZIzth3IbQOJwvQ4GU2BSi3WOL0rzpJBeYJ1p7BbORjGHYVMtRegSC1Q8N1KsziyAW21QfCqrdD3YNeJ7Fm4+EBeBLTsm4nkUoNeg04JvHs6qcPYB++1O0DXagNvOJPdhfXvJZ869IbgfpjtLpzg/8oNzADy2zlUahLwlJZ6IM+2HbLkAZJ1Q3pJUGNWzwY4f+KgvhFLZ4WnOSyYBGKIB+2mxPujfmPsSaC9mtu1yUIebbAjUj9oZp1UA7IHsoiitRoD1+8doFuS5mN2I/SNvaGYRyKyDXT8uOEdSA4kqWIF4NOPwGYwnAFKOGfIG9d2WXtjIKOz9Md9MBJhUAaAPwIOw6cDFBVbZ6jwRM6cBQHEbjN6D5QUYPgF4HGyeKzF6D+vvOAcIvYSzdujVJ59NzHAVDcbxKDUmQGm6yOIuuFGXvCBMj2G2AqwMOp1O4thmeNMkwOZ5Bn6JgjcMUv7FIKhVl3giRTC0Sq9swm4W2LeZmZbUP5nJRhHUN8KLhxbgpJHmR/urfyUqxf+Zm6lPGOfCxQ77OegZYHETzeE+XDwF9n1Y5wq9Q9g3CIZuT/CfNnZwZJYcp1zUNW0CUBfY9uBbs+fNtEuEYydkXWY1mZnFJWuEvoucTmlfK9/ZG1m0oJw8bmZ/A2K31Ak6S0+WqPlUosYy0Ris0h3gvx3ASrQd+ZP9C1DCc6mb7hSPzoq6Z66TMw4TX9SwfxXjjGztteP3F2pdvZ96xgAaAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/8fc76aaf44dfeeb63231b5ba1d2310eb/0742b/react.png",srcSet:"/static/8fc76aaf44dfeeb63231b5ba1d2310eb/0742b/react.png 64w",sizes:"(max-width: 64px) 100vw, 64px"}}},{node:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAECAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAePpKzaEH//EABkQAAMBAQEAAAAAAAAAAAAAAAABAhESQf/aAAgBAQABBQLBQVGPzTtn/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFREBAQAAAAAAAAAAAAAAAAAAACH/2gAIAQIBAT8BV//EABYQAAMAAAAAAAAAAAAAAAAAAAAgMf/aAAgBAQAGPwJaf//EABsQAQEAAgMBAAAAAAAAAAAAAAEAESExQVGR/9oACAEBAAE/ITSVw9LMoC23lZibfs+q/9oADAMBAAIAAwAAABAfP//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPxBQiP/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAgBAgEBPxC6p//EABwQAQEAAgIDAAAAAAAAAAAAAAERACExYUFRwf/aAAgBAQABPxC9I8/MWkgDjYe8HsAbnWJQ1d8ZaAp5IytnfW1z/9k=",aspectRatio:1.5,src:"/static/04a8347fee2fc26d4ceb167174fdd5e5/7c6fc/kl-fireworks.jpeg",srcSet:"/static/04a8347fee2fc26d4ceb167174fdd5e5/0bf89/kl-fireworks.jpeg 300w,\n/static/04a8347fee2fc26d4ceb167174fdd5e5/21886/kl-fireworks.jpeg 600w,\n/static/04a8347fee2fc26d4ceb167174fdd5e5/7c6fc/kl-fireworks.jpeg 900w",sizes:"(max-width: 900px) 100vw, 900px"}}},{node:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUDBAb/xAAWAQEBAQAAAAAAAAAAAAAAAAADAQL/2gAMAwEAAhADEAAAAX9CVBldQLin/8QAHBAAAQMFAAAAAAAAAAAAAAAAAgEDEQAEEyNB/9oACAEBAAEFAqzQ6iyjxEIctXdP/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAgBAwEBPwGI0axn/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8BZ//EABoQAAMAAwEAAAAAAAAAAAAAAAABEQIQIRL/2gAIAQEABj8COteSocxqmo7w/8QAGBABAQEBAQAAAAAAAAAAAAAAAREAIWH/2gAIAQEAAT8hzydWXACUc0+Q3KVkOYIBVOG//9oADAMBAAIAAwAAABD7P//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/ECKrOhf/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8QWQ3/xAAbEAEBAAMAAwAAAAAAAAAAAAABEQAhMUFhwf/aAAgBAQABPxDmR6BbCSajgYBURomPJsNtlJZ6xT44h1cJQmFEnfuf/9k=",aspectRatio:1.2288,src:"/static/f6b8cc203cd7335f4530413a55956bc5/7117f/frontend.jpg",srcSet:"/static/f6b8cc203cd7335f4530413a55956bc5/50211/frontend.jpg 300w,\n/static/f6b8cc203cd7335f4530413a55956bc5/31bff/frontend.jpg 600w,\n/static/f6b8cc203cd7335f4530413a55956bc5/7117f/frontend.jpg 768w",sizes:"(max-width: 768px) 100vw, 768px"}}}]}}}},266:function(A){A.exports={data:{site:{siteMetadata:{title:"Eddayy",description:"My name's Edmund Tay, a developer from Malaysia",author:"Edmund Tay"}}}}}}]);
//# sourceMappingURL=2-543bff150bd346d05747.js.map