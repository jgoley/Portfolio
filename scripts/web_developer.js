"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_toPropertyKey(r.key),r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0===n)return("string"===t?String:Number)(e);n=n.call(e,t||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(n){var r=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(n);return _possibleConstructorReturn(this,r?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,t,n,r,a,o){e.GoogleAnalyticsObject=r,e.ga||(e.ga=function(){(e.ga.q=e.ga.q||[]).push(arguments)}),e.ga.l=+new Date,a=t.createElement(n),o=t.getElementsByTagName(n)[0],a.src="https://www.google-analytics.com/analytics.js",o.parentNode.insertBefore(a,o)}(window,document,"script","ga"),ga("create","UA-3725995-7"),ga("send","pageview"),function(){function e(){}function o(r,a,e){function n(e){var t=l,n=s;return l=s=E,f=e,p=r.apply(n,t)}function o(e){var t=e-d;return e-=f,d===E||a<=t||t<0||g&&u<=e}function i(){if(o(n=_()))return c(n);var e=setTimeout,t=n-f,n=a-(n-d);t=g?j(n,u-t):n,m=e(i,t)}function c(e){return m=E,y&&l?n(e):(l=s=E,p)}function t(){var e=_(),t=o(e);if(l=arguments,s=this,d=e,t){if(m===E)return f=e=d,m=setTimeout(i,a),h?n(e):p;if(g)return m=setTimeout(i,a),n(d)}return m===E&&(m=setTimeout(i,a)),p}var l,s,u,p,m,d,f=0,h=!1,g=!1,y=!0;if("function"!=typeof r)throw new TypeError("Expected a function");return a=v(a)||0,b(e)&&(h=!!e.leading,u=(g="maxWait"in e)?R(v(e.maxWait)||0,a):u,y="trailing"in e?!!e.trailing:y),t.cancel=function(){m!==E&&clearTimeout(m),f=0,l=d=s=m=E},t.flush=function(){return m===E?p:c(_())},t}function b(e){var t=_typeof(e);return null!=e&&("object"==t||"function"==t)}function i(e){return null!=e&&"object"==_typeof(e)}function n(e){if(!(t="symbol"==_typeof(e))&&(t=i(e))){if(null==e)e=e===E?"[object Undefined]":"[object Null]";else if(g&&g in Object(e)){var t=f.call(e,g),n=e[g];try{e[g]=E;var r=!0}catch(e){}var a=h.call(e);r&&(t?e[g]=n:delete e[g]),e=a}else e=h.call(e);t="[object Symbol]"==e}return t}function v(e){if("number"==typeof e)return e;if(n(e))return r;if("string"!=typeof(e=b(e)?b(e="function"==typeof e.valueOf?e.valueOf():e)?e+"":e:e))return 0===e?e:+e;e=e.replace(a,"");var t=l.test(e);return t||s.test(e)?u(e.slice(2),t?2:8):c.test(e)?r:+e}function _(){return p.Date.now()}var E,r=NaN,a=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt,t="object"==("undefined"==typeof self?"undefined":_typeof(self))&&self&&self.Object===Object&&self,p="object"==("undefined"==typeof global?"undefined":_typeof(global))&&global&&global.Object===Object&&global||t||Function("return this")(),m=(t="object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&exports&&!exports.nodeType&&exports)&&"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module&&!module.nodeType&&module,d=Object.prototype,f=d.hasOwnProperty,h=d.toString,g=(d=p.Symbol)?d.toStringTag:E,R=Math.max,j=Math.min;e.debounce=o,e.throttle=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),o(e,t,{leading:r,maxWait:t,trailing:a})},e.isObject=b,e.isObjectLike=i,e.isSymbol=n,e.now=_,e.toNumber=v,e.VERSION="4.17.4","function"==typeof define&&"object"==_typeof(define.amd)&&define.amd?(p._=e,define(function(){return e})):m?((m.exports=e)._=e,t._=e):p._=e}.call(void 0);var HeaderNavItem=function(){_inherits(t,React.Component);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.apply(this,arguments)}return _createClass(t,[{key:"isActive",value:function(e){var t=getPagePath(),n=this.props.item.pageTitle.replace(" ","-").toLowerCase();return t.includes(n)?"active":""}},{key:"relativePath",value:function(){var e=getPagePath(),t="";return"object"===_typeof(e=e.match(/\//g))&&1<e.length&&e.pop(),e.forEach(function(){return t+="../"}),t+=this.props.item.url}},{key:"render",value:function(){var e=this.props.item;return React.createElement("li",{className:this.isActive()},React.createElement("a",{href:this.relativePath()},React.createElement("span",null,e.pageTitle)))}}]),t}(),HeaderNav=function(){return"/"!==getPagePath()?null:React.createElement("nav",{id:"main-nav"},React.createElement("button",{class:"show-menu"}),React.createElement("ul",null,[{url:"web-developer.html",pageTitle:"Web Developer"},{url:"photographer/",pageTitle:"Photographer"},{url:"videographer.html",pageTitle:"Videographer"},{url:"designer.html",pageTitle:"Designer"}].map(function(e){return React.createElement(HeaderNavItem,{item:e})}),React.createElement("li",{className:"exit"})))},Header=function(){return React.createElement("header",{id:"main-header"},React.createElement("a",{href:"/"},React.createElement("span",{class:"badge"})),React.createElement("a",{href:"/"},React.createElement("h1",{class:"jgo-name"},"Jonathan Golightly")),React.createElement(HeaderNav,null))},Skills=function(e){e=e.skills;return React.createElement("div",{className:"skills"},React.createElement("h1",null,"Skills"),React.createElement("p",null,React.createElement("span",null,"["),React.createElement("span",null," ",e.join(", ")," "),React.createElement("span",null,"]")))},SocialNavItem=function(){_inherits(t,React.Component);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.apply(this,arguments)}return _createClass(t,[{key:"render",value:function(){var e=this.props.item;return React.createElement("li",null,React.createElement("a",{href:e.url,title:e.title},React.createElement("i",{className:"fa fa-".concat(e.icon)})))}}]),t}(),SocialNav=function(){_inherits(t,React.Component);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.apply(this,arguments)}return _createClass(t,[{key:"renderChildren",value:function(){var t=[];return[{url:"mailto:jkgolight@gmail.com",title:"Email",icon:"envelope"},{url:"https://github.com/jgoley",title:"Github",icon:"github-square"},{url:"https://twitter.com/jgoley",title:"Twitter",icon:"twitter-square"},{url:"https://www.linkedin.com/in/jgoley/",title:"LinkedIn",icon:"linkedin-square"}].forEach(function(e){t.push(React.createElement(SocialNavItem,{item:e}))}),t}},{key:"render",value:function(){return[React.createElement("a",{href:"/about.html"},"About J.Go"),React.createElement("ul",null,this.renderChildren())]}}]),t}(),TABvar_BREAKPOINT=1e3,lastScrollPosition=0,header=document.getElementsByTagName("header").item(0);function getPagePath(){return window.location.pathname.replace(/\.html$/,"")}function adjustTextSize(e){}function handleHeaderState(e){100<document.body.scrollTop?header.classList.add("hidden"):lastScrollPosition<document.body.scrollTop&&header.classList.remove("hidden"),lastScrollPosition=document.body.scrollTop}function transition(e){document.body.classList.add("transitioning"),setTimeout(function(){return document.body.classList.add(e)},0),setTimeout(function(){return document.body.classList.remove("transitioning")},1e3)}function returnState(e){document.body.classList.add("transitioning");var t=800,n=(window.innerWidth<=650&&(t=0),e.currentTarget.parentElement.classList.add("active"),e.currentTarget.getAttribute("href"));e.preventDefault(),document.body.classList.remove("artist"),setTimeout(function(){window.location.href=n},t),setTimeout(function(){return document.body.classList.remove("transitioning")},1e3)}function toggleNavs(){[document.getElementById("main-nav"),document.getElementById("social-nav")].forEach(function(e){e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")})}document.addEventListener("scroll",_.throttle(handleHeaderState,100)),document.addEventListener("DOMContentLoaded",function(e){var t=document.getElementsByClassName("show-menu").item(0),n=document.getElementsByClassName("exit").item(0),t=(t&&t.addEventListener("click",toggleNavs),n&&n.addEventListener("click",toggleNavs),getPagePath());"/"===t?toggleNavs():t.includes("artist")?(transition("artist"),n=document.getElementsByTagName("a"),(n=[].slice.call(n)).forEach(function(e){e.addEventListener("click",returnState)})):t.includes("documentarian")&&transition("documentarian")}),ReactDOM.render(React.createElement(Header,null),header),ReactDOM.render(React.createElement(SocialNav,null),document.getElementById("social-nav"));try{console.log("%c    ___        ________   ________ \n    |\\  \\      |\\   ____\\ |\\   __  \\ \n    \\ \\  \\     \\ \\  \\___| \\ \\  \\|\\  \\ \n  __ \\ \\  \\     \\ \\  \\  ___\\ \\  \\\\\\  \\ \n |\\  \\\\_\\  \\  ___\\ \\  \\|\\  \\\\ \\  \\\\\\  \\   \n \\ \\________\\|\\__\\\\ \\_______\\\\ \\_______\\ \n  \\|________|\\|__| \\|_______| \\|_______| \n\n\n %cHey, How's it going?\n\n Email: %cjgoley@gmail.com \n %cGithub: %chttp://github.com/jgoley \n %cTwitter: %chttp://twitter.com/jgoley \n ","color:rgba(242, 100, 66, 1)","color:rgba(90, 102, 107, 1);","color:rgba(136, 136, 136, 1)","color:rgba(90, 102, 107, 1)","color:rgba(136, 136, 136, 1)","color:rgba(90, 102, 107, 1)","color:rgba(136, 136, 136, 1)")}catch(e){}var primaryProjects={type:"primary",projects:[{title:"TAP into CMA",url:"http://tours.columbiamuseum.org",githubUrl:"https://github.com/jgoley/museum-tour-web",appUrl:"https://itunes.apple.com/us/app/tap-into-cma/id1129913149?mt=8",backlogUrl:"https://trello.com/b/jlc34JoD/tap",description:"Web-based mobile tour application for the Columbia Museum of Art. The application allows the museum to offer an immersive multimedia (audio, video, imagery) experience on in-house iPods and visitor mobile devices.",roles:["UX/UI Design","Full-Stack Development","Dev-Ops"],tech:["Meteor.js","MongoDb","AWS","CoffeeScript","Jade/Pug","Stylus"],openSource:!0,images:[],order:1},{title:"Animal Foster Availability Management",url:"http://54.175.158.93/",githubUrl:"https://github.com/jgoley/animal-foster-management",description:"Application allowing animal foster organizations to view fosters who are available to help with animals. Originally developed for NYCACC and in beta.",roles:["UX/UI Design","Full-Stack Development","Dev-Ops"],tech:["React","Meteor.js","MongoDb","AWS","JSX","Jade/Pug","Stylus"],openSource:!0,images:[],order:2},{title:"Atom autocomplete for Meteor packages",githubUrl:"https://github.com/jgoley/atom-autocomplete-meteor-packages",url:"https://atom.io/packages/autocomplete-meteor-packages",description:"Atom Editor package that helps Meteor.js users when importing packages to project. Reads versions or packages file in Meteor projects and offers autocomplete suggestions when importing Meteor packages (using require or import) or including packages in package.js with api.use(.... The package name is automatically prepended with meteor/ when importing.",roles:["Development"],tech:["Atom Editor API","CoffeeScript"],openSource:!0,images:[],order:3},{title:"Pollinate",githubUrl:"https://github.com/jgoley/Pollinate",appUrl:"",description:"An application that helps connect farmers with beekeepers who offer pollination services. Farmers can search for beekeepers, view details about the costs associated with each beekeeper's operation then make a request for hives. Users can review and message each other.",roles:["UX/UI Design","Full-Stack Development"],tech:["Backbone.js","Parse"],openSource:!0,images:[]}]},yakShaving={type:"secondary",projects:[{title:"Dotfiles",url:"",githubUrl:"https://github.com/jgoley/dotfiles",appUrl:"",description:"Collection of dotfiles including custom keyboard remaps using <a href='https://github.com/tekezo/Karabiner-Elements'</a>Karabiner Elements</a>, customly configed window management with <a href='https://github.com/kasper/phoenix'>Phoenix</a> and the typical dotfiles in the yak shavers kit.",roles:["Development","Shearing"],tech:["Bash","AppleScript","CoffeScript","CSON/JSON"],openSource:!0,images:[]}]},currentProjects={type:"secondary",projects:[{title:"My Healthy Community",url:"https://myhealthycommunity.dhss.delaware.gov",githubUrl:"",appUrl:"",description:"",roles:["Front End Development"],tech:["Next.js","Ruby on Rails","GraphQL","React","Typescript","Material UI","Storybook","Chromatic"],openSource:!1,images:[]},{title:"ICER Analytics",url:"https://analytics.icer.org/",githubUrl:"",appUrl:"",description:"",roles:["Front End Development","UX/UI Design"],tech:["React","Material UI","Redux","Ruby on Rails"],openSource:!1,images:[]}]},secondaryProjects={type:"secondary",projects:[{title:"Eidr-Connect",url:"https://eidr-connect.eha.io",githubUrl:"https://github.com/ecohealthalliance/eidr-connect",appUrl:"",description:"EIDR Connect is a centralized web platform dedicated to tracking Emerging Infectious Diseases (EIDs). Through EIDR Connect, ongoing EID events can be curated by experts compared and individual emergence events can be explored in depth.",roles:["UX/UI Design","Front End Development"],tech:["Meteor.js","MongoDb","CoffeeScript","Jade/Pug","Stylus"],openSource:!0,images:[]},{title:"FLIRT",url:"https://flirt.eha.io/",githubUrl:"https://github.com/ecohealthalliance/flirt",appUrl:"",description:"Network analysis tool that enables users to examine flight networks to identify where infected travelers and contaminated goods are likely to travel. Connectedness between airports is calculated using passenger, cargo, and network data.",roles:["UX/UI Design","Front End Development"],tech:["Meteor.js","MongoDb","CoffeeScript","Jade/Pug","Stylus"],openSource:!0,images:[]},{title:"NIAM",url:"https://niam.eha.io/",githubUrl:"https://github.com/ecohealthalliance/nia-monitor",appUrl:"",description:"Novel Infectious Agent Monitor highlights and discovers newly trending infectious diseases within ProMED mail posts using an advanced algorithm that analyzes historical data and disease mentions.",roles:["UX/UI Design","Front End Development"],tech:["Meteor.js","MongoDb","CoffeeScript","Jade/Pug","Stylus"],openSource:!0,images:[]},{title:"Tater",githubUrl:"",appUrl:"",description:"An easy to use annotation application that allows users to code, analyze and cross-analyze, store, and export text data.",roles:["UX/UI Design","Front End Development"],tech:["Meteor.js","MongoDb","CoffeeScript","Jade/Pug","Stylus"],openSource:!0,images:[],order:2},{title:"Global Ranavirus Reporting System",url:"https://mantle.io/grrs",githubUrl:"",appUrl:"",description:"The Global Ranavirus Reporting System allows users to create and manage records for Ranavirus studies and reports, import and export data, view tables and maps of reports, and leave reviews and comments on reports.",roles:["UX/UI Design","Front End Development"],tech:["Meteor.js","MongoDb","CoffeeScript","Jade/Pug","Stylus"],openSource:!0,images:[]}]},SKILLS=["Javascript","React","Typescript","Rails","Ruby","Sass","Storybook","Chromatic"],WebDeveloper=function(){return React.createElement("div",{className:"web-projects"},React.createElement(Skills,{skills:SKILLS}),React.createElement("div",{style:{display:"flex",gap:"10px",alignItems:"baseline"}},React.createElement("h1",null,"[@GreenRiver]"),React.createElement("a",{href:"//greenriver.com",target:"_blank"},"Website")),React.createElement(WebProjects,{projectGroup:currentProjects}),React.createElement(WebProjects,{projectGroup:primaryProjects}),React.createElement("h1",null,"[Yak Shaving]"),React.createElement(WebProjects,{projectGroup:yakShaving}),React.createElement("div",{style:{display:"flex",gap:"10px",alignItems:"baseline"}},React.createElement("h1",null,"[@EcoHealthAlliance]"),React.createElement("a",{href:"//ecohealthalliance.org",target:"_blank"},"Website")),React.createElement(WebProjects,{projectGroup:secondaryProjects}))},WebProjects=function(e){e=e.projectGroup;return React.createElement("div",{className:e.type},e.projects.map(function(e,t){return React.createElement(WebProject,{project:e,key:t})}))},List=function(e){var t=e.listItems,e=e.listType;return React.createElement("ul",{className:e},t.map(function(e,t){return React.createElement("li",{key:t},e)}))},WebsiteVideo=function(e){e=e.video;return React.createElement("video",{src:"../".concat(e),controls:!0})},WebProject=function(){_inherits(t,React.Component);var e=_createSuper(t);function t(){return _classCallCheck(this,t),e.apply(this,arguments)}return _createClass(t,[{key:"createMarkup",value:function(){return{__html:this.props.project.description}}},{key:"parsedDescription",value:function(){var e=this.props.project.description;return e.match(/<a/)?React.createElement("p",{dangerouslySetInnerHTML:this.createMarkup()}):React.createElement("p",null,e)}},{key:"render",value:function(){var e=this.props.project,t=e.title,n=e.url,r=e.tech,a=e.roles,o=e.githubUrl;return React.createElement("article",null,React.createElement("h1",null,t),React.createElement("div",{className:"web-project--info"},React.createElement("div",null,this.parsedDescription(),React.createElement("div",{className:"list-set"},React.createElement(List,{listItems:r,listType:"tech"}),React.createElement(List,{listItems:a,listType:"roles"})),React.createElement("ul",{className:"links"},o&&React.createElement("li",null,React.createElement("a",{href:o},React.createElement("i",{className:"fa fa-github"}),"Github Repo")),n&&React.createElement("li",null,React.createElement("a",{href:e.url},React.createElement("i",{className:"fa fa-globe"}),"On the Interwebs"))))))}}]),t}();ReactDOM.render(React.createElement(WebDeveloper,null),document.getElementById("web-developer"));