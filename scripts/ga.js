"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function getPagePath(){return window.location.pathname.replace(/\.html$/,"")}function adjustTextSize(e){var t=window.innerWidth;if(!(t<TABvar_BREAKPOINT-50&&"resize"===e.type))for(var n=document.getElementsByClassName("page"),r=0;r<n.length;r++){var o=n[r],a=o.parentNode.offsetHeight,i=a,l=o.style;o.offsetHeight;l.height=i+"px",l.fontSize=i+"px",o.classList.add("sized")}}function handleHeaderState(e){document.body.scrollTop>100?header.classList.add("hidden"):lastScrollPosition<document.body.scrollTop&&header.classList.remove("hidden"),lastScrollPosition=document.body.scrollTop}function transition(e){document.body.classList.add("transitioning"),setTimeout(function(){return document.body.classList.add(e)},0),setTimeout(function(){return document.body.classList.remove("transitioning")},1e3)}function returnState(e){document.body.classList.add("transitioning");var t=800;window.innerWidth<=650&&(t=0),e.currentTarget.parentElement.classList.add("active");var n=e.currentTarget.getAttribute("href");e.preventDefault(),document.body.classList.remove("artist"),setTimeout(function(){window.location.href=n},t),setTimeout(function(){return document.body.classList.remove("transitioning")},1e3)}function toggleNavs(){var e=document.getElementById("main-nav"),t=document.getElementById("social-nav"),n=[e,t];n.forEach(function(e){e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")})}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};(function(){function e(){}function t(e,t,r){function o(t){var n=f,r=d;return f=d=i,y=t,_=e.apply(r,n)}function l(e){var n=e-h;return e-=y,h===i||n>=t||0>n||b&&e>=p}function c(){var e=w();if(l(e))return s(e);var n,r=setTimeout;n=e-y,e=t-(e-h),n=b?E(e,p-n):e,m=r(c,n)}function s(e){return m=i,R&&f?o(e):(f=d=i,_)}function u(){var e=w(),n=l(e);if(f=arguments,d=this,h=e,n){if(m===i)return y=e=h,m=setTimeout(c,t),g?o(e):_;if(b)return m=setTimeout(c,t),o(h)}return m===i&&(m=setTimeout(c,t)),_}var f,d,p,_,m,h,y=0,g=!1,b=!1,R=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return t=a(t)||0,n(r)&&(g=!!r.leading,p=(b="maxWait"in r)?v(a(r.maxWait)||0,t):p,R="trailing"in r?!!r.trailing:R),u.cancel=function(){m!==i&&clearTimeout(m),y=0,f=h=d=m=i},u.flush=function(){return m===i?_:s(w())},u}function n(e){var t="undefined"==typeof e?"undefined":_typeof(e);return null!=e&&("object"==t||"function"==t)}function r(e){return null!=e&&"object"==("undefined"==typeof e?"undefined":_typeof(e))}function o(e){var t;if(!(t="symbol"==("undefined"==typeof e?"undefined":_typeof(e)))&&(t=r(e))){if(null==e)e=e===i?"[object Undefined]":"[object Null]";else if(b&&b in Object(e)){t=y.call(e,b);var n=e[b];try{e[b]=i;var o=!0}catch(e){}var a=g.call(e);o&&(t?e[b]=n:delete e[b]),e=a}else e=g.call(e);t="[object Symbol]"==e}return t}function a(e){if("number"==typeof e)return e;if(o(e))return l;if(n(e)&&(e="function"==typeof e.valueOf?e.valueOf():e,e=n(e)?e+"":e),"string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var t=u.test(e);return t||f.test(e)?d(e.slice(2),t?2:8):s.test(e)?l:+e}var i,l=NaN,c=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,d=parseInt,p="object"==("undefined"==typeof self?"undefined":_typeof(self))&&self&&self.Object===Object&&self,_="object"==("undefined"==typeof global?"undefined":_typeof(global))&&global&&global.Object===Object&&global||p||Function("return this")(),m=(p="object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&exports&&!exports.nodeType&&exports)&&"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module&&!module.nodeType&&module,h=Object.prototype,y=h.hasOwnProperty,g=h.toString,b=(h=_.Symbol)?h.toStringTag:i,v=Math.max,E=Math.min,w=function(){return _.Date.now()};e.debounce=t,e.throttle=function(e,r,o){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return n(o)&&(a="leading"in o?!!o.leading:a,i="trailing"in o?!!o.trailing:i),t(e,r,{leading:a,maxWait:r,trailing:i})},e.isObject=n,e.isObjectLike=r,e.isSymbol=o,e.now=w,e.toNumber=a,e.VERSION="4.17.4","function"==typeof define&&"object"==_typeof(define.amd)&&define.amd?(_._=e,define(function(){return e})):m?((m.exports=e)._=e,p._=e):_._=e}).call(void 0);var HeaderNavItem=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"isActive",value:function(e){var t=getPagePath(),n=this.props.item.pageTitle.replace(" ","-").toLowerCase();return t.includes(n)?"active":""}},{key:"relativePath",value:function n(){var e=getPagePath(),n="";return e=e.match(/\//g),"object"===("undefined"==typeof e?"undefined":_typeof(e))&&e.length>1&&e.pop(),e.forEach(function(){return n+="../"}),n+=this.props.item.url}},{key:"render",value:function(){var e=this.props.item;return React.createElement("li",{className:this.isActive()},React.createElement("a",{href:this.relativePath()},React.createElement("span",null,e.pageTitle)))}}]),t}(React.Component),HeaderNav=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"show",value:function(){return"/"!==getPagePath()}},{key:"renderChildren",value:function(){var e=[],t=[{url:"web-developer.html",pageTitle:"Web Developer"},{url:"photographer/",pageTitle:"Photographer"},{url:"videographer.html",pageTitle:"Videographer"},{url:"designer.html",pageTitle:"Designer"}];return t.forEach(function(t){e.push(React.createElement(HeaderNavItem,{item:t}))}),e}},{key:"render",value:function(){return this.show()?React.createElement("nav",{id:"main-nav"},React.createElement("button",{"class":"show-menu"}),React.createElement("ul",null,this.renderChildren(),React.createElement("li",{className:"exit"}))):null}}]),t}(React.Component),Header=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return[React.createElement("a",{href:"/"},React.createElement("span",{"class":"badge"})),React.createElement("a",{href:"/"},React.createElement("h1",{"class":"jgo-name"},"Jonathan Goley")),React.createElement(HeaderNav,null)]}}]),t}(React.Component),Skills=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return React.createElement("div",{className:"skills"},React.createElement("h1",null,"Skills"),React.createElement("p",null,React.createElement("span",null,"["),React.createElement("span",null," ",this.props.skills.join(", ")," "),React.createElement("span",null,"]")))}}]),t}(React.Component),SocialNavItem=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){var e=this.props.item;return React.createElement("li",null,React.createElement("a",{href:e.url,title:e.title},React.createElement("i",{className:"fa fa-"+e.icon})))}}]),t}(React.Component),SocialNav=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"renderChildren",value:function(){var e=[],t=[{url:"mailto:jgoley@gmail.com",title:"Email",icon:"envelope"},{url:"https://github.com/jgoley",title:"Github",icon:"github-square"},{url:"https://twitter.com/jgoley",title:"Twitter",icon:"twitter-square"},{url:"https://www.linkedin.com/in/jgoley/",title:"LinkedIn",icon:"linkedin-square"}];return t.forEach(function(t){e.push(React.createElement(SocialNavItem,{item:t}))}),e}},{key:"render",value:function(){return[React.createElement("a",{href:"/about.html"},"About J.Go"),React.createElement("ul",null,this.renderChildren())]}}]),t}(React.Component),TABvar_BREAKPOINT=1e3,lastScrollPosition=0,header=document.getElementsByTagName("header").item(0);document.addEventListener("scroll",_.throttle(handleHeaderState,100)),window.addEventListener("resize",_.debounce(adjustTextSize,100)),document.addEventListener("DOMContentLoaded",function(e){var t=document.getElementsByClassName("show-menu").item(0),n=document.getElementsByClassName("exit").item(0);t&&t.addEventListener("click",toggleNavs),n&&n.addEventListener("click",toggleNavs);var r=getPagePath();if("/"===r)adjustTextSize(e),toggleNavs();else if(r.includes("artist")){transition("artist");var o=document.getElementsByTagName("a");o=[].slice.call(o),o.forEach(function(e){e.addEventListener("click",returnState)})}else r.includes("documentarian")&&transition("documentarian")}),ReactDOM.render(React.createElement(Header,null),header),ReactDOM.render(React.createElement(SocialNav,null),document.getElementById("social-nav"));try{console.log("%c    ___        ________   ________ \n    |\\  \\      |\\   ____\\ |\\   __  \\ \n    \\ \\  \\     \\ \\  \\___| \\ \\  \\|\\  \\ \n  __ \\ \\  \\     \\ \\  \\  ___\\ \\  \\\\\\  \\ \n |\\  \\\\_\\  \\  ___\\ \\  \\|\\  \\\\ \\  \\\\\\  \\   \n \\ \\________\\|\\__\\\\ \\_______\\\\ \\_______\\ \n  \\|________|\\|__| \\|_______| \\|_______| \n\n\n %cHey, How's it going?\n\n Email: %cjgoley@gmail.com \n %cGithub: %chttp://github.com/jgoley \n %cTwitter: %chttp://twitter.com/jgoley \n ","color:rgba(242, 100, 66, 1)","color:rgba(90, 102, 107, 1);","color:rgba(136, 136, 136, 1)","color:rgba(90, 102, 107, 1)","color:rgba(136, 136, 136, 1)","color:rgba(90, 102, 107, 1)","color:rgba(136, 136, 136, 1)")}catch(e){}!function(e,t,n,r,o,a){e.GoogleAnalyticsObject=r,e[r]||(e[r]=function(){(e[r].q=e[r].q||[]).push(arguments)}),e[r].l=+new Date,o=t.createElement(n),a=t.getElementsByTagName(n)[0],o.src="https://www.google-analytics.com/analytics.js",a.parentNode.insertBefore(o,a)}(window,document,"script","ga"),ga("create","UA-3725995-7"),ga("send","pageview");