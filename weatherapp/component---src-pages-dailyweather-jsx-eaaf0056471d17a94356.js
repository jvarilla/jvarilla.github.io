(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(160),o=a(0),u=a.n(o),s=a(149),c=(a(154),a(157)),l=a(158),p=a(139),d=a.n(p),f=a(156),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).focusOnDay=function(e){a.setState({dayOfWeatherData:e},function(){console.log(a.state.dayOfWeatherData)})},a.state={x:"hi",dayOfWeatherData:{temperatureLow:"low"}},a}r()(t,e);var a=t.prototype;return a.onComponentDidMount=function(){console.log(this.state.x)},a.render=function(){return u.a.createElement(s.StaticQuery,{query:"1967195074",render:function(e){return u.a.createElement(f.a,null,u.a.createElement("div",null,u.a.createElement("h1",null,"8 Day Forecast"),u.a.createElement(l.a,null,e.weatherData.daily.data.map(function(e,t){return u.a.createElement(c.a,{className:d.a.weathercard,key:t,dailyWeatherData:e})}))))},data:i})},t}(u.a.Component);t.default=m},148:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(151)),i=n(a(152)),o=n(a(7)),u=n(a(52)),s=n(a(53)),c=n(a(4)),l=n(a(0)),p=a(16),d=a(149);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var a;a=e.call(this,t)||this,(0,s.default)((0,u.default)((0,u.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,u.default)((0,u.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,o=void 0===n?this.defaultGetProps:n,u=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var y=f(a);return l.default.createElement(p.Link,(0,i.default)({to:y,state:c,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,d.parsePath)(a).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),v(a,{state:c,replace:m})),!0}},h))},t}(l.default.Component);h.propTypes=(0,i.default)({},m,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var y=l.default.forwardRef(function(e,t){return l.default.createElement(h,(0,i.default)({innerRef:t},e))});t.default=y;var v=function(e,t){window.___navigate(f(e),t)};t.navigate=v;var w=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=w;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),w(e)}},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return f}),a.d(t,"useStaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(148),s=a.n(u);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return u.withPrefix}),a.d(t,"navigate",function(){return u.navigate}),a.d(t,"push",function(){return u.push}),a.d(t,"replace",function(){return u.replace}),a.d(t,"navigateTo",function(){return u.navigateTo});var c=a(150),l=a.n(c);a.d(t,"PageRenderer",function(){return l.a});var p=a(32);a.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},m=function(e){r.a.useContext;var t=r.a.useContext(d);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},151:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},152:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},153:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(54),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},154:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("h1",null,e.headerText)}},155:function(e,t,a){"use strict";t.a={months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],daysOfWeek:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],hours:["12 am","1 am","2 am","3 am","4 am","5 am","6 am","7 am","8 am","9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm","8 pm","9 pm","10 pm","11 pm"]}},156:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(149),o=a(140),u=a.n(o);t.a=function(e){return r.a.createElement("div",{className:u.a.weathernavigation},r.a.createElement(i.Link,{to:"/"},r.a.createElement("div",{className:u.a.tab},"Home")),r.a.createElement(i.Link,{to:"/dailyweather/"},r.a.createElement("div",{className:u.a.tab},"8 Day")),r.a.createElement(i.Link,{to:"/hourlyweather/"},r.a.createElement("div",{className:u.a.tab},"Hourly")),e.children)}},157:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(149),a(155)),o=a(139),u=a.n(o);t.a=function(e){e.key;var t=e.dailyWeatherData,a=new Date(1e3*t.time);return r.a.createElement("div",{className:u.a.weathercard},r.a.createElement("h3",null,r.a.createElement("span",null,i.a.daysOfWeek[a.getDay()]),r.a.createElement("br",null),r.a.createElement("span",null,i.a.months[a.getMonth()]," "),r.a.createElement("span",null,a.getDate())),r.a.createElement("h4",null,"High: ",t.temperatureHigh,"°F"),r.a.createElement("h4",null,"Low: ",t.temperatureLow,"°F"))}},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(149),a(139)),o=a.n(i);t.a=function(e){return r.a.createElement("div",{className:o.a.cardcontainer},e.children)}},160:function(e){e.exports={data:{weatherData:{latitude:42.0334,longitude:-87.8834,locationName:"",daily:{summary:"Snow (3–7 in.) tomorrow through Wednesday, with high temperatures bottoming out at 27°F on Tuesday.",data:[{time:1550296800,temperatureHigh:28.61,temperatureLow:23.92,precipProbability:.08,precipType:"snow"},{time:1550383200,temperatureHigh:28.25,temperatureLow:23.35,precipProbability:.36,precipType:"snow"},{time:1550469600,temperatureHigh:27.51,temperatureLow:15.49,precipProbability:.17,precipType:"snow"},{time:1550556e3,temperatureHigh:27.27,temperatureLow:18.75,precipProbability:.07,precipType:"snow"},{time:1550642400,temperatureHigh:34.31,temperatureLow:26.01,precipProbability:.49,precipType:"snow"},{time:1550728800,temperatureHigh:33.63,temperatureLow:14.79,precipProbability:.12,precipType:"snow"},{time:1550815200,temperatureHigh:35.03,temperatureLow:25.56,precipProbability:.06,precipType:"snow"},{time:1550901600,temperatureHigh:38.82,temperatureLow:29.67,precipProbability:.81,precipType:"rain"}]}}}}}}]);
//# sourceMappingURL=component---src-pages-dailyweather-jsx-eaaf0056471d17a94356.js.map