"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),primaryProjects=[{title:"TAP into CMA",url:"http://tours.columbiamuseum.org",githubUrl:"https://github.com/jgoley/museum-tour-web",appUrl:"https://itunes.apple.com/us/app/tap-into-cma/id1129913149?mt=8",backlogUrl:"https://trello.com/b/jlc34JoD/tap",description:"Web-based mobile tour application for the Columbia Museum of Art. The application allows the museum to offer an immersive multimedia (audio, video, imagery) experience on in-house iPods and visitor mobile devices.",type:"primary",roles:["UX/UI Design","Full-Stack Development","Dev-Ops"],tech:["Meteor.js","MongoDb","AWS","CoffeeScript","Jade/Pug","Stylus"],openSource:!0,images:[],video:"images/eidr-connect.mov",order:1},{title:"Animal Foster Availability Management",url:"http://54.175.158.93/",githubUrl:"https://github.com/jgoley/animal-foster-management",description:"Application allowing animal foster organizations to view fosters who are available to help with animals. Originally developed for NYCACC and in beta.",type:"primary",roles:["UX/UI Design","Full-Stack Development","Dev-Ops"],tech:["React","Meteor.js","MongoDb","AWS","JSX","Jade/Pug","Stylus"],openSource:!0,images:[],video:"images/eidr-connect.mov"},{title:"Pollinate",githubUrl:"https://github.com/jgoley/Pollinate",appUrl:"",description:"An application that helps farmers with beekeepers who offer pollination services. Farmers can search for beekeepers, view details about the costs associated with each beekeeper's operation then make a request for hives. Users can review and message each other.",type:"primary",roles:["UX/UI Design","Full-Stack Development"],tech:["Backbone.js","Parse"],openSource:!0,images:[],video:"images/eidr-connect.mov"}],secondaryProjects=[{title:"Eidr-Connect",url:"https://eidr-connect.eha.io",githubUrl:"https://github.com/ecohealthalliance/eidr-connect",appUrl:"",description:"EIDR Connect is a centralized web platform dedicated to tracking Emerging Infectious Diseases (EIDs). Through EIDR Connect, ongoing EID events can be curated by experts compared and individual emergence events can be explored in depth.",type:"secondary",roles:["UX/UI Design","Front End Development"],tech:["Meteor.js","MongoDb","CoffeeScript","Jade/Pug","Stylus"],openSource:!0,images:[],video:""},{title:"FLIRT",url:"https://flirt.eha.io/",githubUrl:"https://github.com/ecohealthalliance/flirt",appUrl:"",description:"Network analysis tool that enables users to examine flight networks to identify where infected travelers and contaminated goods are likely to travel. Connectedness between airports is calculated using passenger, cargo, and network data.",type:"secondary",roles:["UX/UI Design","Front End Development"],tech:["Meteor.js","MongoDb","CoffeeScript","Jade/Pug","Stylus"],openSource:!0,images:[],video:""},{title:"NIAM",url:"https://niam.eha.io/",githubUrl:"https://github.com/ecohealthalliance/nia-monitor",appUrl:"",description:"Novel Infectious Agent Monitor highlights and discovers newly trending infectious diseases within ProMED mail posts using an advanced algorithm that analyzes historical data and disease mentions.",type:"secondary",roles:["UX/UI Design","Front End Development"],tech:["Meteor.js","MongoDb","CoffeeScript","Jade/Pug","Stylus"],openSource:!0,images:[],video:""},{title:"Tater",githubUrl:"",appUrl:"",description:"An easy to use annotation application that allows users to code, analyze and cross-analyze, store, and export text data.",type:"secondary",roles:["UX/UI Design","Front End Development"],tech:["Meteor.js","MongoDb","CoffeeScript","Jade/Pug","Stylus"],openSource:!0,images:[],video:""},{title:"Global Ranavirus Reporting System",url:"https://mantle.io/grrs",githubUrl:"",appUrl:"",description:"The Global Ranavirus Reporting System allows users to create and manage records for Ranavirus studies and reports, import and export data, view tables and maps of reports, and leave reviews and comments on reports.",type:"secondary",roles:["UX/UI Design","Front End Development"],tech:["Meteor.js","MongoDb","CoffeeScript","Jade/Pug","Stylus"],openSource:!0,images:[],video:""}],skills=["Javascript","Meteor","React","MongoDb","CoffeScript","Jade/Pug","Stylus","SASS"],WebDeveloper=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return React.createElement("div",{className:"web-projects"},React.createElement(Skills,{skills:skills}),React.createElement(WebProjects,{projects:primaryProjects,type:"primary"}),React.createElement("h1",null,"[@EcoHealthAlliance]"),React.createElement(WebProjects,{projects:secondaryProjects,type:"secondary"}))}}]),t}(React.Component),WebProjects=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"renderChildren",value:function(){var e=this.props.projects.map(function(e,t){return React.createElement(WebProject,{project:e,key:t})});return e}},{key:"render",value:function(){return React.createElement("div",{className:this.props.type},this.renderChildren())}}]),t}(React.Component),List=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){var e=[];return this.props.listItems.forEach(function(t,r){e.push(React.createElement("li",{key:r},t))}),React.createElement("ul",{className:this.props.listType}," ",e," ")}}]),t}(React.Component),WebsiteVideo=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){return React.createElement("video",{src:"../"+this.props.video,controls:!0})}}]),t}(React.Component),WebProject=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"interwebsUrl",value:function(){var e=this.props.project;return e.url?React.createElement("li",null,React.createElement("a",{href:e.url},React.createElement("i",{className:"fa fa-globe"}),"On the Interwebs")):null}},{key:"otherUrl",value:function(e){var t=this.props.project,r="",o="";return"appUrl"===e?(r="In the App Store",o="mobile"):(r="Backlog",o="list"),t[e]&&t[e].length>0?React.createElement("li",null,React.createElement("a",{href:t[e],title:r},React.createElement("i",{className:"fa fa-"+o}),r)):null}},{key:"render",value:function(){var e=this.props.project;return React.createElement("article",null,React.createElement("h1",null,e.title),React.createElement("div",{className:"web-project--info"},React.createElement("div",null,React.createElement("p",null,e.description),React.createElement("div",{className:"list-set"},React.createElement(List,{listItems:e.tech,listType:"tech"}),React.createElement(List,{listItems:e.roles,listType:"roles"})),React.createElement("ul",{className:"links"},React.createElement("li",null,React.createElement("a",{href:e.githubUrl},React.createElement("i",{className:"fa fa-github"}),"Github Repo")),this.interwebsUrl(),this.otherUrl("appUrl"),this.otherUrl("backlogUrl",!1)))))}}]),t}(React.Component);ReactDOM.render(React.createElement(WebDeveloper,null),document.getElementById("web-developer"));