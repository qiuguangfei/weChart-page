webpackJsonp([1],{142:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(24),l=a(173),u=function(e){return e&&e.__esModule?e:{default:e}}(l),o=(0,n.combineReducers)({Home:u.default});t.default=o},143:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),u=n(l),o=a(34),i=a(166),r=n(i),c=a(167),s=n(c),d=a(170),f=n(d),m=a(171),p=n(m),h=a(85),g=n(h),E=function(){return u.default.createElement(o.Router,{history:o.hashHistory},u.default.createElement(o.Redirect,{from:"/",to:"home"}),u.default.createElement(o.Route,{path:"/",component:r.default},u.default.createElement(o.IndexRoute,{component:s.default}),u.default.createElement(o.Route,{path:"home",component:s.default}),u.default.createElement(o.Route,{path:"policiesRegulations",component:f.default}),u.default.createElement(o.Route,{path:"popleInterview",component:p.default}),u.default.createElement(o.Route,{path:"article",component:g.default},u.default.createElement(o.Route,{path:":aid",component:g.default}))))};t.default=E},145:function(e,t){},164:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBannerList=void 0;var n=a(89),l=function(e){return e&&e.__esModule?e:{default:e}}(n),u=a(87),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(u),i=a(19),r=a(35),c={type:o.NEWS_LIST};t.getBannerList=function(){return function(e,t){(0,i.AjaxByToken)("/mobile/api/ad_show/getWxPhotoList",{head:{transcode:"F00009",type:"h"}}).then(function(t){e((0,l.default)({},c,{photolist:t.data}))},function(e){r.Modal.error({title:""+e.data.returnMsg})})}}},165:function(e,t,a){"use strict";var n=a(164),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(n);e.exports={HomeActions:l}},166:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(7),u=n(l),o=a(8),i=n(o),r=a(9),c=n(r),s=a(11),d=n(s),f=a(10),m=n(f),p=a(0),h=n(p),g=a(168),E=n(g),v=a(86),_=n(v),y=a(85),w=n(y),L=a(53),N=n(L),k=a(169),b=n(k),M=a(30),A=(n(M),a(19)),D=a(54),C=n(D),I=a(24),P=a(36),j=a(165),S=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(j),x=function(e){function t(){(0,i.default)(this,t);var e=(0,d.default)(this,(t.__proto__||(0,u.default)(t)).call(this));return e.functionBtn=function(){e.setState({btn:"show"===e.state.btn?"close":"show",switchState:!e.state.switchState})},e.goBack=function(){window.history.back(-1)},e.showAppDownLoad=function(){e.setState({isAppDownLoad:!0})},e.hideAppDownLoad=function(){e.setState({isAppDownLoad:!1})},e.getBannerList=function(){(0,A.AjaxByToken)("/mobile/api/ad_show/getWxPhotoList",{head:{transcode:"F00009",type:"h"}}).then(function(t){e.setState({photolist:t.data})},function(e){console.log(e)})},e.backTop=function(){window.scroll(0,0)},e.state={btn:"show",switchState:!0,isAppDownLoad:!1,photolist:[],isBanner:!1},e}return(0,m.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({isBanner:!0})},300),this.props.getBannerList()}},{key:"render",value:function(){var e=this.props.location,t=e.pathname,a=e.query,n=!0,l=!0;/article/.test(t)&&(n=!1,l=!1);var u=this.state,o=u.btn,i=u.switchState,r=u.isAppDownLoad,c=u.isBanner,s=this.props.photolist;return h.default.createElement("div",null,r&&h.default.createElement(b.default,{hideAppDownLoad:this.hideAppDownLoad}),!r&&h.default.createElement("div",{className:"top-contaner"},h.default.createElement("div",{className:"top"},!n&&h.default.createElement("div",{className:"back",onClick:this.goBack},h.default.createElement("img",{src:"static/images/back.png"})),h.default.createElement("div",{className:"top-img"},h.default.createElement("img",{src:"static/images/logo.png"})),l&&h.default.createElement("div",{className:"functionBtn",onClick:this.functionBtn},h.default.createElement("img",{src:"static/images/"+o+".png"}))),!l&&h.default.createElement(w.default,{showAppDownLoad:this.showAppDownLoad.bind(this),query:a,pathname:t}),l&&h.default.createElement("div",{className:"article"},!i&&h.default.createElement(N.default,{showAppDownLoad:this.showAppDownLoad.bind(this)}),i&&h.default.createElement("div",{className:"bottom"},c&&h.default.createElement(_.default,{photolist:s}),h.default.createElement(E.default,null),h.default.createElement("div",null,this.props.children),h.default.createElement("div",{className:"article-content"},h.default.createElement(C.default,{showAppDownLoad:this.showAppDownLoad,backTop:this.backTop}))))))}}]),t}(h.default.Component),T=function(e){return{photolist:e.Home.photolist}},B=function(e){return{getBannerList:(0,I.bindActionCreators)(S.HomeActions.getBannerList,e)}};t.default=(0,P.connect)(T,B)(x)},167:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(7),u=n(l),o=a(8),i=n(o),r=a(9),c=n(r),s=a(11),d=n(s),f=a(10),m=n(f),p=a(0),h=n(p),g=a(86),E=(n(g),a(79)),v=(n(E),a(29)),_=n(v),y=a(30),w=n(y),L=a(34),N=a(35),k=a(19),b=function(e){function t(){(0,i.default)(this,t);var e=(0,d.default)(this,(t.__proto__||(0,u.default)(t)).call(this));return e.getContents=function(){e.props.getContents()},e.getjrqInfoList=function(t){e.setState({isLoading:!0}),(0,k.AjaxByToken)("/mobile/api/ad_show/getWxInfo",{head:{transcode:"F00010",type:"h"},data:{startIndex:t,pageNum:"10"}}).then(function(t){e.setState({infoList:t.data,numFound:t.numFound,isLoading:!1,isEmpty:!0})},function(e){console.log(e)})},e.pageChange=function(t,a){e.getjrqInfoList(""+10*(t-1)),setTimeout(function(){window.scroll(0,0)},100)},e.backTop=function(){window.scroll(0,0)},e.state={infoList:[],numFound:"",isLoading:!1,isEmpty:!1},e}return(0,m.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.getjrqInfoList("0")}},{key:"render",value:function(){var e=this.state,t=e.infoList,a=e.numFound,n=e.isLoading,l=e.isEmpty;return h.default.createElement("div",{className:"contentSelect",id:"test"},h.default.createElement("div",{className:"content"},n&&h.default.createElement(w.default,null),0===t.length&&l&&h.default.createElement("div",{className:"emptyIcon"},h.default.createElement("img",{src:"/static/images/emptyIcon.png"}),h.default.createElement("e",{className:"emptyContent"},"暂时没有新的内容")),0!==t.length&&t.map(function(e,t){return h.default.createElement("div",{className:"contentList"},h.default.createElement(L.Link,{className:"contentImg",to:{pathname:"article",query:{id:""+e.infoid,title:""+e.groupname}}},h.default.createElement("img",{src:e.photourl?e.photourl:"",alt:e.title})),h.default.createElement("div",{className:"contentDate"},e.pubdate?(0,_.default)(e.pubdate).format("YYYY-MM-DD"):"暂无日期"),h.default.createElement("h2",null,h.default.createElement(L.Link,{to:{pathname:"article",query:{id:""+e.infoid,title:""+e.groupname}}},e.title?e.title:"")),h.default.createElement("p",null,h.default.createElement(L.Link,{to:{pathname:"article",query:{id:""+e.infoid,title:""+e.groupname}}},e.preview_text?e.preview_text.slice(0,70)+"  . . . . . .":"")))}),0!==t.length&&h.default.createElement("div",{className:"page"},h.default.createElement(N.Pagination,{defaultCurrent:1,total:a,onChange:this.pageChange}))))}}]),t}(h.default.Component);t.default=b},168:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(7),u=n(l),o=a(8),i=n(o),r=a(9),c=n(r),s=a(11),d=n(s),f=a(10),m=n(f),p=a(0),h=n(p),g=a(34),E=function(e){function t(){return(0,i.default)(this,t),(0,d.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return h.default.createElement("div",{className:"nav"},h.default.createElement("ul",null,h.default.createElement("li",null,h.default.createElement(g.Link,{to:"home",activeClassName:"active"},"金融圈")),h.default.createElement("li",null,h.default.createElement(g.Link,{to:"policiesRegulations",activeClassName:"active"},"政策法规")),h.default.createElement("li",null,h.default.createElement(g.Link,{to:"popleInterview",activeClassName:"active"},"人物专访"))))}}]),t}(h.default.Component);t.default=E},169:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(7),u=n(l),o=a(8),i=n(o),r=a(9),c=n(r),s=a(11),d=n(s),f=a(10),m=n(f),p=a(0),h=n(p),g=a(37),E=(n(g),function(e){function t(){var e,a,n,l;(0,i.default)(this,t);for(var o=arguments.length,r=Array(o),c=0;c<o;c++)r[c]=arguments[c];return a=n=(0,d.default)(this,(e=t.__proto__||(0,u.default)(t)).call.apply(e,[this].concat(r))),n.goBack=function(){n.props.hideAppDownLoad()},l=a,(0,d.default)(n,l)}return(0,m.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return h.default.createElement("div",{className:"appDownLoad"},h.default.createElement("div",{className:"down-back",onClick:this.goBack},h.default.createElement("img",{src:"/static/images/back.png"})),h.default.createElement("h1",null,"金融人才求职招聘"),h.default.createElement("p",null,"51金融圈-金融职业专家"),h.default.createElement("div",{className:"personal"},h.default.createElement("a",null,"个人版下载")),h.default.createElement("div",{className:"company"},h.default.createElement("a",null,"企业版下载")),h.default.createElement("div",{className:"appDownLoad-img"},h.default.createElement("img",{src:"/static/images/phone.png"})))}}]),t}(p.Component));t.default=E},170:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(7),u=n(l),o=a(8),i=n(o),r=a(9),c=n(r),s=a(11),d=n(s),f=a(10),m=n(f),p=a(0),h=n(p),g=a(30),E=n(g),v=a(19),_=a(29),y=n(_),w=a(34),L=a(35),N=a(54),k=(n(N),function(e){function t(){(0,i.default)(this,t);var e=(0,d.default)(this,(t.__proto__||(0,u.default)(t)).call(this));return e.getzcfgInfoList=function(t){e.setState({isLoading:!0}),(0,v.AjaxByToken)("/mobile/api/ad_show/getWxInfo",{head:{transcode:"F00011",type:"h"},data:{startIndex:t,pageNum:"10"}}).then(function(t){e.setState({infoList:t.data,numFound:t.numFound,isLoading:!1,isEmpty:!0})},function(e){L.Modal.error({title:""+e.data.returnMsg})})},e.pageChange=function(t,a){e.getzcfgInfoList(""+10*(t-1)),setTimeout(function(){window.scroll(0,0)},100)},e.backTop=function(){window.scroll(0,0)},e.state={infoList:[],numFound:"",isLoading:!1,isEmpty:!1},e}return(0,m.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.getzcfgInfoList("0")}},{key:"render",value:function(){var e=this.state,t=e.infoList,a=e.numFound,n=e.isLoading,l=e.isEmpty;return h.default.createElement("div",{className:"contentSelect"},h.default.createElement("div",{className:"content"},n&&h.default.createElement(E.default,null),0==t.length&&l&&h.default.createElement("div",{className:"emptyIcon"},h.default.createElement("img",{src:"/static/images/emptyIcon.png"}),h.default.createElement("e",{className:"emptyContent"},"暂时没有新的内容")),0!==t.length&&t.map(function(e,t){return h.default.createElement("div",{className:"contentList"},h.default.createElement(w.Link,{className:"contentImg",to:{pathname:"article",query:{id:""+e.infoid,title:""+e.groupname}}},h.default.createElement("img",{src:e.photourl?e.photourl:"",alt:e.title})),h.default.createElement("div",{className:"contentDate"},e.pubdate?(0,y.default)(e.pubdate).format("YYYY-MM-DD"):"暂无日期"),h.default.createElement("h2",null,h.default.createElement(w.Link,{to:{pathname:"article",query:{id:""+e.infoid,title:""+e.groupname}}},e.title?e.title:"")),h.default.createElement("p",null,h.default.createElement(w.Link,{to:{pathname:"article",query:{id:""+e.infoid,title:""+e.groupname}}},e.preview_text?e.preview_text.slice(0,45)+". . . . . .":"")))}),0!==t.length&&h.default.createElement("div",{className:"page"},h.default.createElement(L.Pagination,{defaultCurrent:1,total:a,onChange:this.pageChange}))))}}]),t}(h.default.Component));t.default=k},171:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(7),u=n(l),o=a(8),i=n(o),r=a(9),c=n(r),s=a(11),d=n(s),f=a(10),m=n(f),p=a(0),h=n(p),g=a(30),E=n(g),v=a(19),_=a(29),y=(n(_),a(34)),w=a(35),L=function(e){function t(){(0,i.default)(this,t);var e=(0,d.default)(this,(t.__proto__||(0,u.default)(t)).call(this));return e.getPersonInfoList=function(t){e.setState({isLoading:!0}),(0,v.AjaxByToken)("/mobile/api/ad_show/getWxInfo",{head:{transcode:"F00012",type:"h"},data:{startIndex:t,pageNum:"10"}}).then(function(t){e.setState({infoList:t.data,numFound:t.numFound,isLoading:!1,isEmpty:!0})},function(e){w.Modal.error({title:""+e.data.returnMsg})})},e.pageChange=function(t,a){e.getPersonInfoList(""+10*(t-1)),setTimeout(function(){window.scroll(0,0)},100)},e.backTop=function(){window.scroll(0,0)},e.state={infoList:[],numFound:"",isEmpty:!1},e}return(0,m.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.getPersonInfoList("0")}},{key:"render",value:function(){var e=this.state,t=e.infoList,a=e.numFound,n=e.isLoading,l=e.isEmpty;return h.default.createElement("div",{className:"contentSelect"},h.default.createElement("div",{className:"content"},n&&h.default.createElement(E.default,null),0===t.length&&l&&h.default.createElement("div",{className:"emptyIcon"},h.default.createElement("img",{src:"/static/images/emptyIcon.png"}),h.default.createElement("e",{className:"emptyContent"},"暂时没有新的内容")),0!==t.length&&t.map(function(e,t){return h.default.createElement("div",{className:"contentList"},h.default.createElement(y.Link,{className:"peopleImg",to:{pathname:"article",query:{id:""+e.famousPersonId,title:"人物专访",people:!0}}},h.default.createElement("img",{src:e.imageUrl?e.imageUrl:"",alt:e.name})),h.default.createElement("div",{className:"people"},h.default.createElement("h2",null,h.default.createElement(y.Link,{to:{pathname:"article",query:{id:""+e.famousPersonId,title:"人物专访",people:!0}}},e.name?e.name:"")),h.default.createElement("p",null,h.default.createElement(y.Link,{to:{pathname:"article",query:{id:""+e.famousPersonId,title:"人物专访",people:!0}}},e.profile?e.profile.slice(0,40)+" . . . . . .":""))))}),0!==t.length&&h.default.createElement("div",{className:"page"},h.default.createElement(w.Pagination,{defaultCurrent:1,total:a,onChange:this.pageChange}))))}}]),t}(h.default.Component);t.default=L},172:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var l=a(0),u=n(l),o=a(37),i=n(o);a(145);var r=a(143),c=n(r),s=a(24),d=a(36),f=a(51),m=n(f),p=a(142),h=n(p),g=(0,s.createStore)(h.default,(0,s.applyMiddleware)(m.default));i.default.render(u.default.createElement(d.Provider,{store:g},u.default.createElement(c.default,null)),document.getElementById("app"))},173:function(e,t,a){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case o.NEWS_LIST:return(0,u.default)({},e,{photolist:t.photolist});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(89),u=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=n;var o=a(87),i={photolist:[]}},19:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.AjaxByToken=t.AjaxByPost=void 0;var l=a(180),u=n(l),o=a(177),i=n(o),r=a(79),c=n(r),s=a(286),d=n(s),f=a(287),m=n(f),p=c.default.CancelToken,h=[],g=t.AjaxByPost=function(e,t){return new i.default(function(a,n){(0,c.default)({url:""+e,method:"post",data:(0,d.default)(t,{head:{type:"h"}}),header:{contentType:"application/json;charset=utf-8"},cancelToken:new p(function(t){h.push((0,u.default)({},e,t))})}).then(function(e){var t=e.data,l=t.returnCode,u=t.returnMsg;"AAAAAAA"===l&&"查询成功!"===u?a((0,m.default)(t,["returnCode","returnMsg"])):n(e)}).catch(function(e,t){console.log("网络错误",e.message)})})};t.AjaxByToken=function(e,t){return g(e,t)}},30:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(7),u=n(l),o=a(8),i=n(o),r=a(9),c=n(r),s=a(11),d=n(s),f=a(10),m=n(f),p=a(0),h=n(p),g=function(e){function t(){return(0,i.default)(this,t),(0,d.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){this.props.show;return h.default.createElement("div",{className:"load-wrapper"},h.default.createElement("div",{className:"wrapper"},h.default.createElement("div",{className:"line1"}),h.default.createElement("div",{className:"line2"}),h.default.createElement("div",{className:"line3"}),h.default.createElement("div",{className:"line4"}),h.default.createElement("div",{className:"line5"}),h.default.createElement("div",{className:"line6"}),h.default.createElement("div",{className:"line7"}),h.default.createElement("div",{className:"line8"}),h.default.createElement("div",{className:"line9"}),h.default.createElement("div",{className:"line10"}),h.default.createElement("div",{className:"line11"}),h.default.createElement("div",{className:"line12"})),h.default.createElement("div",{className:"load"},"正在加载"))}}]),t}(h.default.Component);t.default=g},35:function(e,t){e.exports=antd},53:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(7),u=n(l),o=a(8),i=n(o),r=a(9),c=n(r),s=a(11),d=n(s),f=a(10),m=n(f),p=a(0),h=n(p),g=function(e){function t(){var e,a,n,l;(0,i.default)(this,t);for(var o=arguments.length,r=Array(o),c=0;c<o;c++)r[c]=arguments[c];return a=n=(0,d.default)(this,(e=t.__proto__||(0,u.default)(t)).call.apply(e,[this].concat(r))),n.appDownLoad=function(){n.props.showAppDownLoad()},l=a,(0,d.default)(n,l)}return(0,m.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return h.default.createElement("div",{className:"functions"},h.default.createElement("ul",{className:"functions-content"},h.default.createElement("li",null,h.default.createElement("a",null,"找工作"),h.default.createElement("img",{src:"/static/images/arrowRight.png"})),h.default.createElement("li",{onClick:this.appDownLoad.bind(this)},h.default.createElement("a",null,"APP下载"),h.default.createElement("img",{src:"/static/images/arrowRight.png"}))))}}]),t}(h.default.Component);t.default=g},54:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(7),u=n(l),o=a(8),i=n(o),r=a(9),c=n(r),s=a(11),d=n(s),f=a(10),m=n(f),p=a(0),h=n(p),g=a(53),E=n(g),v=function(e){function t(){var e,a,n,l;(0,i.default)(this,t);for(var o=arguments.length,r=Array(o),c=0;c<o;c++)r[c]=arguments[c];return a=n=(0,d.default)(this,(e=t.__proto__||(0,u.default)(t)).call.apply(e,[this].concat(r))),n.appDownLoad=function(){n.props.showAppDownLoad()},l=a,(0,d.default)(n,l)}return(0,m.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=(e.query,e.showAppDownLoad),a=e.backTop;return h.default.createElement("div",null,h.default.createElement("div",{className:"share"},h.default.createElement("img",{src:"/static/images/wechat.png"}),h.default.createElement("a",{href:"https://passport.weibo.cn/signin/login"},h.default.createElement("img",{src:"/static/images/Weibo.png"})),h.default.createElement("a",{href:"https://www.linkedin.com"},h.default.createElement("img",{src:"/static/images/in.png"}))),h.default.createElement(E.default,{showAppDownLoad:t}),h.default.createElement("div",{className:"foot"},"©2014 51jrq.com 沪ICP备14045153号-1",h.default.createElement("div",{className:"backTop",onClick:a},h.default.createElement("img",{src:"/static/images/feiji.png"}))))}}]),t}(h.default.Component);t.default=v},85:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(7),u=n(l),o=a(8),i=n(o),r=a(9),c=n(r),s=a(11),d=n(s),f=a(10),m=n(f),p=a(0),h=n(p),g=a(53),E=(n(g),a(19)),v=a(30),_=n(v),y=a(29),w=n(y),L=a(54),N=n(L),k=a(35),b=function(e){function t(){(0,i.default)(this,t);var e=(0,d.default)(this,(t.__proto__||(0,u.default)(t)).call(this));return e.backTop=function(){window.scroll(0,0)},e.state={content:{},imgUrl:"",isLoading:!1,isEmpty:!1},e.getDetailData=e.getDetailData.bind(e),e}return(0,m.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.props.query.people?this.getDetailData("F00014"):this.getDetailData("F00013")}},{key:"getDetailData",value:function(e){var t=this;this.setState({isLoading:!0});var a=this.props.query;(0,E.AjaxByToken)("/mobile/api/ad_show/getNewsInfo",{head:{transcode:""+e,type:"h"},data:{id:a.id}}).then(function(e){t.setState({content:e.data,imgUrl:e.imgurl,isLoading:!1,isEmpty:!0})},function(e){k.Modal.error({title:""+e.data.returnMsg})})}},{key:"render",value:function(){var e=this.props,t=e.showAppDownLoad,a=e.query,n=this.state,l=n.content,u=n.imgUrl,o=n.isLoading,i=n.isEmpty;return h.default.createElement("div",{className:"article"},o&&h.default.createElement(_.default,null),!a.people&&!o&&h.default.createElement("div",{className:"article-img"},h.default.createElement("img",{src:u,alt:l.title}),h.default.createElement("div",{className:"timeandReadnum"},h.default.createElement("span",{style:{color:"#A0A0A0"}},l.pubdate?(0,w.default)(l.pubdate).format("YYYY-MM-DD"):""),"   ",h.default.createElement("span",{style:{color:"#A0A0A0"}},h.default.createElement("span",{style:{color:"#000"}},l.redsum)," 阅读"))),a.people&&!o&&h.default.createElement("div",{className:"article-img"},h.default.createElement("img",{className:"headImg",src:l.imageUrl,alt:l.title})),h.default.createElement("div",{className:"article-content"},!a.people&&h.default.createElement("h2",{className:"article-title"},l.title),!a.people&&h.default.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:l.mobile_text}}),a.people&&h.default.createElement("div",{className:"content personalContent"},l.profile),a.people&&h.default.createElement("div",{className:"personalExperience",dangerouslySetInnerHTML:{__html:l.text}}),!l.text&&i&&h.default.createElement("div",{className:"emptyIcon"},h.default.createElement("img",{src:"/static/images/emptyIcon.png"}),h.default.createElement("e",{className:"emptyContent"},"暂时没有新的内容")),!o&&h.default.createElement("div",null,h.default.createElement("p",{style:{textAlign:"right",fontSize:"16px",lineHeight:"40px"}},h.default.createElement("span",null,(0,w.default)(l.updatedate).format("YYYY-MM-DD")),"    ",h.default.createElement("span",{style:{color:"#000"}},l.redsum)," 阅读数"),h.default.createElement("p",{className:"lm"},"栏目：",h.default.createElement("span",{className:"lmtitle"},a.title)),h.default.createElement(N.default,{showAppDownLoad:t,backTop:this.backTop}))))}}]),t}(h.default.Component);t.default=b},86:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(7),u=n(l),o=a(8),i=n(o),r=a(9),c=n(r),s=a(11),d=n(s),f=a(10),m=n(f),p=a(0),h=n(p),g=(a(19),function(e){function t(){return(0,i.default)(this,t),(0,d.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){new Swipe($(".swiper-container")[0],{auto:2e3,continuous:!0,stopPropation:!0,callback:function(e,t){$(".swiper-container .swiper-pagination li").removeClass("actve"),$(".swiper-container .swiper-pagination li").eq(e).addClass("actve")}})}},{key:"render",value:function(){var e=this.props.photolist;return h.default.createElement("div",{className:"swiper-container"},h.default.createElement("ul",{className:"swiper-wrapper"},0!=e.length?e.map(function(e,t){return h.default.createElement("li",{className:"swiper-slide"},h.default.createElement("img",{src:e.photourl}))}):h.default.createElement("li",null,h.default.createElement("img",{src:"/static/images/banner.jpg"}))),h.default.createElement("div",{className:"swiper-pagination"},0!=e.length&&e.map(function(e,t){return h.default.createElement("li",{className:0===t&&"actve"})})))}}]),t}(h.default.Component));t.default=g},87:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.NEWS_LIST="NEWS_LIST"}},[172]);
//# sourceMappingURL=app.4a47d2b63a9af1ef013a.js.map