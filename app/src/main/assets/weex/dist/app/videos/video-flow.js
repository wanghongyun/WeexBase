// { "framework": "Vue"} 

!function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=583)}({1:function(e,t,i){var n,o,s=[];n=i(3),o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="E:\\AndroidSpace\\FireAdmin\\code\\web\\src\\common\\common-module.vue",o.style=o.style||{},s.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,s),e.exports=n},160:function(e,t,i){"use strict";var n=(weex.requireModule("modal"),i(2)),o=function(){return n.debug,"/fireapi/vod"};t.getVideoList=function(e,t,i){var s=o()+"/getVideoList";n.getReq(s,e,function(e,i,n,o){t(e,i,n,o)},i)},t.getPlayInfo=function(e,t,i){var s=o()+"/GetPlayInfo/"+e;n.getReq(s,{},function(e,i,n,o){t(e,i,n,o)},i)},t.addVidSvideocomment=function(e,t,i){var s=o()+"/addVidSvideocomment";n.postReq(s,e,function(e,i,n,o){t(e,i,n,o)},i)},t.addVidSvideoplay=function(e,t,i){var s=o()+"/addVidSvideoplay/"+e;n.getReq(s,{},function(e,i,n,o){t(e,i,n,o)},i)},t.seeVidwatchtime=function(e,t,i){var s=o()+"/seeVidwatchtime/"+e;n.getReq(s,{},function(e,i,n,o){t(e,i,n,o)},i)},t.getVideocommentList=function(e,t,i){var s=o()+"/getVideocommentList";n.getReq(s,e,function(e,i,n,o){t(e,i,n,o)},i)},t.getVideocommentTree=function(e,t,i){var s=o()+"/getVideocommentTree/"+e;n.getReq(s,{},function(e,i,n,o){t(e,i,n,o)},i)},t.videoDetail=function(e,t,i){var s=o()+"/detail/"+e.allsvduid;n.getReq(s,e,function(e,i,n,o){t(e,i,n,o)},i)}},165:function(e,t,i){var n,o,s=[];n=i(160),o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="E:\\AndroidSpace\\FireAdmin\\code\\web\\src\\http\\video.vue",o.style=o.style||{},s.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,s),e.exports=n},2:function(e,t,i){var n,o,s=[];n=i(5),o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="E:\\AndroidSpace\\FireAdmin\\code\\web\\src\\http\\connect.vue",o.style=o.style||{},s.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,s),e.exports=n},203:function(e,t,i){"use strict";var n=i(1),o=(weex.requireModule("modal"),i(165));e.exports={components:{},data:function(){return{pageNumber:1,pageSize:10,total:0,videoList:[],videoIndex:0,timer:null,updateInterval:5,firstLoad:!0}},props:{},computed:{platform:{get:function(){return(weex.config.env||WXEnvironment).platform}},isApp:{get:function(){return"android"==this.platform||"iOS"==this.platform}}},created:function(){},mounted:function(){this.startTimer(),this.requestNew()},beforeDestroy:function(){this.timer&&clearInterval(this.timer)},methods:{startTimer:function(){var e=this;this.timer=setInterval(function(){e.requestWatchTime()},1e3*this.updateInterval)},requestWatchTime:function(){var e=this;this.videoIndex<this.videoList.length&&(null!=this.videoList[this.videoIndex].readbhvid?o.seeVidwatchtime(this.videoList[this.videoIndex].readbhvid,function(e,t,i,n){},!0):o.addVidSvideoplay(this.videoList[this.videoIndex].allsvduid,function(t,i,n,o){null!=t&&null!=t.readbhvid&&e.videoIndex<e.videoList.length&&(e.videoList[e.videoIndex].readbhvid=t.readbhvid)},!0))},requestNew:function(){this.pageNumber=1,this.requestMore()},requestMore:function(){var e=this,t={pageNumber:this.pageNumber,pageSize:this.pageSize,vodtype:"recommend"};this.firstLoad&&n.startWaitting(),o.getVideoList(t,function(t,i,s,r){if(e.firstLoad&&(e.firstLoad=!1,n.stopWaitting()),null!=t)if(e.total=t.total,1==e.pageNumber&&t.list.length>0){var a=t.list;o.getPlayInfo(a[0].allsvduid,function(t,i,n,o){null!=t&&null!=t.playInfoList&&t.playInfoList.length>0&&(a[0].svideourl=t.playInfoList[0].playURL),e.setupList(a)},!0)}else e.setupList(t.list)})},setupList:function(e){var t=[];this.pageNumber>1&&(t=this.videoList.slice());for(var i=0;i<e.length;i++)t.push(e[i]);this.videoList=t,this.pageNumber++},videoRefresh:function(){this.requestNew()},videoChange:function(e){this.videoIndex=e.index,e.index==(this.pageNumber-1)*this.pageSize-3&&this.requestMore()},videoComment:function(e){var t=this.videoList[e.index];n.openPage("news/comment-list.js",{allsvduid:t.allsvduid,pageTitle:t.svideotitle})}}}},207:function(e,t){e.exports={}},212:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[null!=e.videoList&&e.videoList.length>0?i("videolist",{staticStyle:{width:"750px",flex:"1"},attrs:{items:e.videoList},on:{videoRefresh:e.videoRefresh,videoChange:e.videoChange,videoComment:e.videoComment}}):e._e()],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},3:function(e,t,i){"use strict";var n=weex.requireModule("modal"),o=weex.requireModule("AppModule"),s=weex.requireModule("picker"),r=["#9a89b9","#bd84cd","#ff8e6b","#78c06e","#f6bf26","#3bc2b5","#78919d","#a1887f","#5e97f6","#6bb5ce","#5ec9f6"];t.shareDomainName="https://app.berryee.com/",t.getEnv=function(){return weex.config.env||WXEnvironment},t.getPlatform=function(){return(weex.config.env||WXEnvironment).platform},t.isApp=function(){var e=this.getPlatform();return"android"==e||"iOS"==e},t.isIOS=function(){return"iOS"==this.getPlatform()},t.isAndroid=function(){return"android"==this.getPlatform()},t.isWeb=function(){return"Web"==this.getPlatform()},t.versionCompare=function(e){if(null!=e){var t=this.getEnv().appVersion,i=t.split("."),n=e.split(".");if(3==i.length&&3==n.length)try{var o=100*parseInt[i[0]]+10*parseInt[i[1]]+parseInt[i[2]],s=100*parseInt[n[0]]+10*n[i[1]]+n[i[2]];return o==s?0:o<s?1:-1}catch(e){}}return-2},t.randomColor=function(){return r[Math.round(Math.random()*(r.length-1))]},t.setUserInfo=function(e){this.setKeyValue("userInfo",e)},t.getUserInfo=function(e){this.getKeyValue("userInfo",e)},t.getAppKey=function(e){this.getUserInfo(function(t){e(null!=t?t.logintoken:null)})},t.getUserCache=function(e,t){this.getKeyValue(e,function(e){t(null!=e&&null!=e.cache?e.cache:null)})},t.setUserCache=function(e,t){this.setKeyValue(e,{cache:t})},t.clearUserCache=function(){this.setKeyValue("news_recommend",{}),this.setKeyValue("news_banner",{}),this.setKeyValue("news_kind",{}),this.setKeyValue("search_key",{})},t.openPage=function(e,t){if(null==e||0==e.length)return void n.toast({message:"地址为空！",duration:1});if(this.isApp())o.openPage(e,t);else{var i="?page="+e;if(null!=t)for(var s=Object.keys(t),r=0;r<s.length;r++){var a=s[r];i+="&"+a+"="+t[a]}window.location.href=i}},t.toBack=function(e){this.isApp()?o.toBack(e):window.history.go(-1)},t.phoneCall=function(e){this.isApp()?o.phoneCall(e):window.location.href="tel:"+e.phone},t.sendSms=function(e){if(this.isApp())o.sendSms(e);else{var t="sms:"+e.phone;null!=e.body&&(t=t+"?body="+e.body),window.location.href=t}},t.startWaitting=function(e){this.isApp()&&o.startWaitting(e)},t.stopWaitting=function(){this.isApp()&&o.stopWaitting()},t.setKeyValue=function(e,t){this.isApp()?o.setKeyValue(e,t):window.localStorage&&window.localStorage.setItem(e,JSON.stringify(t))},t.getKeyValue=function(e,t){if(this.isApp())o.getKeyValue(e,t);else if(null!=t){if(window.localStorage){var i=window.localStorage.getItem(e);if(null!=i){try{t(JSON.parse(i))}catch(e){t(i)}return}}t(null)}};var a=function(e){return e<10?"0"+e:e};t.formatDate=function(e){var t=new Date(e),i=a(t.getMonth()+1),n=a(t.getDate());return[t.getFullYear(),i,n].join("-")},t.formatTime=function(e){var t=new Date(e);return a(t.getHours())+":"+a(t.getMinutes())},t.getRelativeTime=function(e){var t=(new Date).getTime(),i=t-e;if(!(i<0)){var n=i/864e5,o=i/36e5,s=i/6e4;return n>=1?this.formatDate(e):o>=1?parseInt(o)+"小时前":s>=1?parseInt(s)+"分钟前":"刚刚"}},t.pickDate=function(e,t){if(this.isApp())if(this.isIOS()){var i=weex.config.env||WXEnvironment;if(i.osVersion.indexOf("11.0")>=0){var n={dateType:"date"};null!=e.value&&e.value.length>0&&(n.date=Date.parse(e.value));var r=this;o.pickDate(n,function(e){var i={};null!=e&&null!=e.date?(i.result="success",i.data=r.formatDate(e.date)):i.result="cancel",null!=t&&t(i)})}else s.pickDate(e,t)}else s.pickDate(e,t)},t.pickTime=function(e,t){if(this.isApp())if(this.isIOS()){var i=weex.config.env||WXEnvironment;if(i.osVersion.indexOf("11.0")>=0){var n={dateType:"time"},r=this;o.pickDate(n,function(e){var i={};null!=e&&null!=e.date?(i.result="success",i.data=r.formatTime(e.date)):i.result="cancel",null!=t&&t(i)})}else s.pickTime(e,t)}else s.pickTime(e,t)},t.pickList=function(e,t){this.isApp()&&o.pickList(e,t)},t.pickImage=function(e,t){this.isApp()&&o.pickImage(e,t)},t.pickVideo=function(e,t){this.isApp()&&o.pickVideo(e,t)},t.pickAudio=function(e){this.isApp()&&o.pickAudio({},e)},t.pick=function(e,t){if(this.isApp())if(this.isIOS()){var i=weex.config.env||WXEnvironment;if(i.osVersion.indexOf("11.0")>=0){var n={};null!=e.items&&(n.list=e.items),o.pickList(n,function(e){var i={};null!=e&&e.index>=0?(i.result="success",i.data=e.index):i.result="cancel",null!=t&&t(i)})}else s.pick(e,t)}else s.pick(e,t)},t.uploadFiles=function(e,t){if(this.isApp()){var i=this.getPlatform();"android"==i&&o.startWaitting(),o.uploadFiles(e,function(e){"android"==i&&o.stopWaitting(),t(e)})}},t.uploadShortVideo=function(e,t){this.isApp()&&o.uploadShortVideo(e,function(e){t(e)})},t.requestLocation=function(e){this.isApp()&&o.requestLocation(e)},t.socialShare=function(e,t){this.isApp()&&o.socialShare(e,t)},t.socialAuth=function(e,t){this.isApp()&&o.socialAuth(e,t)},t.log=function(e){this.isApp()?o.log(e):console.log(e)},t.setStatusBarColor=function(e){this.isAndroid()&&o.setStatusBarColor(e)},t.setInterceptBack=function(){this.isAndroid()&&o.setInterceptBack()},t.versionUpgrade=function(e){this.isAndroid()&&o.versionUpgrade(e)},t.setBadge=function(e){this.isIOS()&&o.setBadge(e)},t.qrCodeScan=function(e,t){this.isAndroid()&&o.qrCodeScan(e,t),this.isIOS()&&o.qrCodeScan(e,t)};var u=function(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[null,""])[1].replace(/\+/g,"%20"))||null};t.initWebURLParameters=function(e,t){if(null!=t&&t.length>0)for(var i=0;i<t.length;i++){var n=u(t[i]);null!=n&&(e[t[i]]=n)}},t.fireGlobalEvent=function(e,t){this.isApp()&&o.fireGlobalEvent(e,t)},t.toRichEditor=function(e,t,n){var s="";s=i(2).debug?"http://192.168.1.61/static/html/":"https://app.berryee.com/resource/static/html/";var r="?";if(null!=t)for(var a=Object.keys(t),u=0;u<a.length;u++){var l=a[u];r+=l+"="+t[l],u!=a.length-1&&(r+="&")}o.openPage("common/rich-editor.js",{src:s+e+r,toBackPage:n})};var l=null;t.getSafeArea=function(e){null==l?o.getSafeArea(function(t){l=t,e(t)}):e(l)},t.uploadShortVideo=function(e,t){o.uploadShortVideo(e,t)},t.getCachePath=function(e){o.getCachePath(e)},t.handlePushData=function(e){var t=null,n={};if("exam_examinmanage"==e.type?(t="study/exam.js",n.examanuid=e.id):"std_studytask"==e.type?(t="study/study.js",n.stdfinishid=e.id):"man_noticeinfo_w"==e.type?(t="notice/detail.js",n.noticeid=e.id):"man_noticeinfo_m"==e.type?(t="notice/detail.js",n.noticeid=e.id):"lman_firemanleave"==e.type?(t="leave/detail.js",n.fmleaveid=e.id):"man_drinkreport"==e.type&&(t="drinkreport/detail.js",n.drkrptid=e.id),e.usermsgid){var s={usermsgid:e.usermsgid};i(6).messageSee(s,function(e,t,i,n){})}null!=t&&o.openPage(t,n)}},4:function(e,t,i){"use strict";var n=(i(1),weex.requireModule("modal"),i(2)),o=function(){return n.debug,"/fireapi"};t.sysparam=function(e,t,i){var s=o()+"/sysparam/list";n.getReq(s,e,function(e,i,n,o){t(e,i,n,o)},i)},t.messageSee=function(e,t,i){var s=o()+"/usermessage/see/"+e.usermsgid;n.getReq(s,e,function(e,i,n,o){t(e,i,n,o)},i)}},5:function(e,t,i){"use strict";var n=weex.requireModule("modal"),o=weex.requireModule("stream"),s=i(1);t.debug=!0;var r=function(){return"http://171.221.244.22:9601"};t.server=r,t.getReq=function(e,t,i,n){var o="http://171.221.244.22:9601"+e,s="";if(null!=t)for(var r=Object.keys(t),u=0;u<r.length;u++){var l=r[u];s+=l+"="+t[l],u!=r.length-1&&(s+="&")}o+="?"+s,a({method:"GET",headers:{},url:o,type:"json",timeout:3e4},i,n)},t.postReq=function(e,t,i,n){a({method:"POST",url:"http://171.221.244.22:9601"+e,headers:{"Content-Type":"application/json;charset:UTF-8"},type:"json",body:t,timeout:3e4},i,n)};var a=function(e,t,i){var r=!0;null!=i&&(r=!i);var a="",l="",c="";"POST"==e.method?(l=e.url,c="param = "+JSON.stringify(e.body)):(l=e.url.split("?").shift(),c="query ===>> "+e.url.split("?").pop());for(var d="-",f=0;f<l.length;f++)d+="-";d+="---",a="\n\n\t"+d+"\n\t| "+l+" |\n\t"+d+"\n\n"+c+"\n\n--";var p=function(e){o.fetch(e,function(e){var i="\n\n",o=e;200==e.status?0==e.data.status?(o=e.data,t(o.data,!0,o.status,o.message)):(r&&n.toast({message:e.data.message,duration:1}),t(null,!1,e.data.status,e.data.message),i="\n\n**********API failed:***********\n"):(r&&n.toast({message:"连接服务器失败",duration:1}),t(null,!1,-1,"连接服务器失败"),i="\n\n**********connect failed:***********\n"),i=i+JSON.stringify(o,null,4)+"\n========================================",u(a+i)},function(e){})},h=weex.config.env||WXEnvironment,v={mobiletype:h.platform,mobilemodel:h.deviceModel,mobileos:h.osVersion,appversion:h.appVersion};s.getKeyValue("cache_location",function(i){null!=i&&(v.latitude=i.latitude,v.longitude=i.longitude);var o=e;o.headers.sourceInfo=JSON.stringify(v),-1==e.url.indexOf("/login")&&-1==e.url.indexOf("/regist")&&-1==e.url.indexOf("/getBySysparamcode")&&-1==e.url.indexOf("/version/last")?s.getAppKey(function(e){null!=e?(o.headers.Authorization="Bearer "+e,p(o)):(t(null,!1,-1,"请先登录"),n.toast({message:"请先登录",duration:1}),u(a+"\n!!! need token !!!\n========================================"))}):p(e)})},u=function(e){var t=weex.config.env||WXEnvironment,i=t.platform;"iOS"!=i&&"android"!=i||s.log(e),console.log(e)}},583:function(e,t,i){var n,o,s=[];s.push(i(207)),n=i(203);var r=i(212);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="E:\\AndroidSpace\\FireAdmin\\code\\web\\src\\videos\\video-flow.vue",o.render=r.render,o.staticRenderFns=r.staticRenderFns,o._scopeId="data-v-59744df8",o.style=o.style||{},s.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,s),e.exports=n,e.exports.el="true",new Vue(e.exports)},6:function(e,t,i){var n,o,s=[];n=i(4),o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o=n=n.default),"function"==typeof o&&(o=o.options),o.__file="E:\\AndroidSpace\\FireAdmin\\code\\web\\src\\http\\common.vue",o.style=o.style||{},s.forEach(function(e){for(var t in e)o.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,s),e.exports=n}});