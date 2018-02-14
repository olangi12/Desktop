/*!CK:786947725!*//*1457028692,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["xQjaB"]); }

__d("NavigationMetricsEnumJS",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={NAVIGATION_START:"navigationStart",UNLOAD_EVENT_START:"unloadEventStart",UNLOAD_EVENT_END:"unloadEventEnd",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",CONNECT_END:"connectEnd",SECURE_CONNECTION_START:"secureConnectionStart",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd",DOM_LOADING:"domLoading",DOM_INTERACTIVE:"domInteractive",DOM_CONTENT_LOADED_EVENT_START:"domContentLoadedEventStart",DOM_CONTENT_LOADED_EVENT_END:"domContentLoadedEventEnd",DOM_COMPLETE:"domComplete",LOAD_EVENT_START:"loadEventStart",LOAD_EVENT_END:"loadEventEnd"};},null);
__d("PagePluginActions",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={PAGE_AVATAR:"page_avatar",PAGE_CTA:"page_cta",PAGE_LIKE:"page_like",PAGE_PERMALINK:"page_permalink",PAGE_SHARE:"page_share",PAGE_UNLIKE:"page_unlike"};},null);
__d("PagePluginActionTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CLICK:"click"};},null);
__d("PerfXClientMetricsConfig",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={LOGGER_CONFIG:"PerfXClientMetricsLoggerConfig"};},null);
__d("PixelRatioConst",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={cookieName:"dpr"};},null);
__d("ResourceTimingMetricsEnumJS",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={START_TIME:"startTime",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",SECURE_CONNECTION_START:"secureConnectionStart",CONNECT_END:"connectEnd",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd"};},null);
__d('clearImmediatePolyfill',['ImmediateImplementation'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports=b.clearImmediate||c('ImmediateImplementation').clearImmediate;},null);
__d('sourceMetaToString',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){var k;if(i.name){k=i.name;if(i.module)k=i.module+'.'+k;}else if(i.module)k=i.module+'.<anonymous>';if(j&&i.line){k=(k?k:'<anonymous>')+':'+i.line;if(i.column)k+=':'+i.column;}return k;}f.exports=h;},null);
__d('clearImmediate',['TimerStorage','clearImmediatePolyfill'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports=function(){for(var h=arguments.length,i=Array(h),j=0;j<h;j++)i[j]=arguments[j];c('TimerStorage').unset(c('TimerStorage').IMMEDIATE,i[0]);return Function.prototype.apply.call(c('clearImmediatePolyfill'),b,i);};},null);
__d('PerfXFlusher',['invariant','BanzaiLogger','PerfXClientMetricsConfig'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('PerfXClientMetricsConfig').LOGGER_CONFIG,j=['perfx_page','perfx_page_type','tti','e2e'];function k(m){j.forEach(function(n){!(n in m)?h(0):undefined;});}var l={flush:function(m,n){k(n);n.lid=m;if(n.fbtrace_id){c('BanzaiLogger').log(i,n,{delay:10*1000});}else c('BanzaiLogger').log(i,n);}};f.exports=l;},null);
__d('legacy:onload-action',['PageHooks'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b._domreadyHook=c('PageHooks')._domreadyHook;b._onloadHook=c('PageHooks')._onloadHook;b.runHook=c('PageHooks').runHook;b.runHooks=c('PageHooks').runHooks;b.keep_window_set_as_loaded=c('PageHooks').keepWindowSetAsLoaded;},3);
__d('AsyncRequestNectarLogging',['AsyncRequest','Nectar'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();Object.assign(c('AsyncRequest').prototype,{setNectarModuleData:function(h){if(this.method=='POST')c('Nectar').addModuleData(this.data,h);},setNectarImpressionId:function(){if(this.method=='POST')c('Nectar').addImpressionID(this.data);}});},null);
__d('ClickRefUtils',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={get_intern_ref:function(i){if(!!i){var j={profile_minifeed:1,gb_content_and_toolbar:1,gb_muffin_area:1,ego:1,bookmarks_menu:1,jewelBoxNotif:1,jewelNotif:1,BeeperBox:1,searchBarClickRef:1};for(var k=i;k&&k!=document.body;k=k.parentNode){if(!k.id||typeof k.id!=='string')continue;if(k.id.substr(0,8)=='pagelet_')return k.id.substr(8);if(k.id.substr(0,8)=='box_app_')return k.id;if(j[k.id])return k.id;}}return '-';},get_href:function(i){var j=i.getAttribute&&(i.getAttribute('ajaxify')||i.getAttribute('data-endpoint'))||i.action||i.href||i.name;return typeof j==='string'?j:null;},should_report:function(i,j){if(j=='FORCE')return true;if(j=='INDIRECT')return false;return i&&(h.get_href(i)||i.getAttribute&&i.getAttribute('data-ft'));}};f.exports=h;},null);
__d("setUECookie",["Env"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){if(!c("Env").no_cookies)document.cookie="act="+encodeURIComponent(i)+"; path=/; domain="+window.location.hostname.replace(/^.*(\.facebook\..*)$/i,'$1');}f.exports=h;},null);
__d('ClickRefLogger',['Arbiter','Banzai','ClickRefUtils','Env','ScriptPath','SessionName','Vector','$','collectDataAttributes','ge','pageID','setUECookie'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={delay:0,retry:true};function i(m){if(!c('ge')('content'))return [0,0,0,0];var n=c('$')('content'),o=c('Vector').getEventPosition(m);return [o.x,o.y,n.offsetLeft,n.clientWidth];}function j(m,n,event,o){var p='r',q=[0,0,0,0],r,s;if(!!event){r=event.type;if(r=='click'&&c('ge')('content'))q=i(event);var t=0;event.ctrlKey&&(t+=1);event.shiftKey&&(t+=2);event.altKey&&(t+=4);event.metaKey&&(t+=8);if(t)r+=t;}if(!!n)s=c('ClickRefUtils').get_href(n);var u=c('collectDataAttributes')(!!event?event.target||event.srcElement:n,['ft','gt']);Object.assign(u.ft,o.ft);Object.assign(u.gt,o.gt);if(typeof u.ft.ei==='string')delete u.ft.ei;var v=[m._ue_ts,m._ue_count,s||'-',m._context,r||'-',c('ClickRefUtils').get_intern_ref(n),p,b.URI?b.URI.getRequestURI(true,true).getUnqualifiedURI().toString():location.pathname+location.search+location.hash,u].concat(q).concat(c('pageID')).concat(c('ScriptPath').getScriptPath());return v;}c('Arbiter').subscribe("ClickRefAction/new",function(m,n){if(c('ClickRefUtils').should_report(n.node,n.mode)){var o=j(n.cfa,n.node,n.event,n.extra_data);c('setUECookie')(n.cfa.ue);var p=[c('SessionName').getName(),Date.now(),'act'];c('Banzai').post('click_ref_logger',Array.prototype.concat(p,o),h);}});function k(m){function n(v){var w='';for(var x=0;x<v.length;x++)w+=String.fromCharCode(1^v.charCodeAt(x));return w;}function o(v,w,x,y){var z=w[x];if(z&&v&&z in v)if(x+1<w.length){o(v[z],w,x+1,y);}else{var aa=v[z],ba=function(){setTimeout(y.bind(null,arguments));return aa.apply(this,arguments);};ba.toString=aa.toString.bind(aa);Object.defineProperty(v,z,{configurable:false,writable:true,value:ba});}}var p={},q={},r=false;function s(v,w){if(q[v])return;q[v]=p[v]=1;}var t=m[n('jiri')];if(t){var u=[];n(t).split(',').map(function(v,w){var x=v.substring(1).split(':'),y;switch(v.charAt(0)){case '1':y=new RegExp('\\b('+x[0]+')\\b','i');u.push(function(z){var aa=y.exec(Object.keys(window));if(aa)s(w,''+aa);});break;case '2':y=new RegExp(x[0]);o(window,x,2,function(z){var aa=z[x[1]];if(typeof aa==='string'&&y.test(aa))s(w,v);});break;case '3':o(window,x,0,function(){for(var z=u.length;z--;)u[z]();var aa=Object.keys(p);if(aa.length){p={};setTimeout(c('Banzai')[n('qnru')].bind(c('Banzai'),n('islg'),{m:''+aa}),5000);}});break;case '4':r=true;break;}});}}try{k(c('Env'));}catch(l){}},null);
__d('PixelRatio',['Arbiter','Cookie','PixelRatioConst','Run'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('PixelRatioConst').cookieName,i,j;function k(){return window.devicePixelRatio||1;}function l(){c('Cookie').set(h,k());}function m(){c('Cookie').clear(h);}function n(){var p=k();if(p!==i){l();}else m();}var o={startDetecting:function(p){i=p||1;m();if(j)return;j=[c('Arbiter').subscribe('pre_page_transition',n)];c('Run').onBeforeUnload(n);}};f.exports=o;},null);
__d('PostLoadJS',['Bootloader','Run','emptyFunction'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k){c('Run').onAfterLoad(function(){c('Bootloader').loadModules.call(c('Bootloader'),[j],k);});}var i={loadAndRequire:function(j){h(j,c('emptyFunction'));},loadAndCall:function(j,k,l){h(j,function(m){m[k].apply(m,l);});}};f.exports=i;},null);
__d('UserActionHistory',['Arbiter','ClickRefUtils','ScriptPath','throttle','WebStorage'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={click:1,submit:1},i=false,j={log:[],len:0},k=c('throttle').acrossTransitions(function(){try{i._ua_log=JSON.stringify(j);}catch(n){i=false;}},1000);function l(){var n=c('WebStorage').getSessionStorage();if(n){i=n;i._ua_log&&(j=JSON.parse(i._ua_log));}else i=false;j.log[j.len%10]={ts:Date.now(),path:'-',index:j.len,type:'init',iref:'-'};j.len++;c('Arbiter').subscribe("UserAction/new",function(o,p){var q=p.ua,r=p.node,event=p.event;if(!event||!(event.type in h))return;var s={path:c('ScriptPath').getScriptPath(),type:event.type,ts:q._ue_ts,iref:c('ClickRefUtils').get_intern_ref(r)||'-',index:j.len};j.log[j.len++%10]=s;i&&k();});}function m(){return j.log.sort(function(n,o){return o.ts!=n.ts?o.ts-n.ts:o.index-n.index;});}l();f.exports={getHistory:m};},null);
__d('ImageTimingHelper',['Arbiter','BigPipe','URI'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i={};c('Arbiter').subscribe(c('BigPipe').Events.init,function(j,k){if(k.lid&&k.lid!=='0')k.arbiter.subscribe('images_displayed',function(l,m){var n=h[m.lid];if(!n)n=h[m.lid]=[];m.images.forEach(function(o){var p=new (c('URI'))(o);o=p.setFragment('').toString();if(i[o])return;i[o]=true;n.push({pagelet:m.pagelet,timeslice:m.timeslice,ts:m.ts,uri:o});});});});f.exports.getImageTimings=function(j){return h[j]||[];};},null);
__d('NavigationTimingHelper',['NavigationMetricsEnumJS','forEachObject','performance'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k){var l={};c('forEachObject')(c('NavigationMetricsEnumJS'),function(m){var n=k[m];if(n)l[m]=n+j;});return l;}var i={getAsyncRequestTimings:function(j){if(!j||!c('performance').timing||!c('performance').getEntriesByName)return undefined;var k=c('performance').getEntriesByName(j);if(k.length===0)return undefined;return h(c('performance').timing.navigationStart,k[0]);},getNavTimings:function(){if(!c('performance').timing)return undefined;return h(0,c('performance').timing);}};f.exports=i;},null);
__d('PageletEventsHelper',['Arbiter','PageletEventConstsJS'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='BigPipe/init',i='pagelet_event',j='phase_begin',k={},l=false;function m(){return {pagelets:{},categories:{},phase_start:{}};}function n(q,r,s,t){if(k[t].pagelets[r]==undefined)k[t].pagelets[r]={};k[t].pagelets[r][q]=s;}function o(q){q.subscribe(i,function(r,s){var event=s.event,t=s.ts,u=s.id,v=s.lid,w=s.phase,x=s.categories;n(event,u,t,v);var y=k[v],z=y.pagelets[u];if(event===c('PageletEventConstsJS').ARRIVE_END)z.phase=w;if((event===c('PageletEventConstsJS').ONLOAD_END||event===c('PageletEventConstsJS').DISPLAY_END)&&x)x.forEach(function(aa){if(y.categories[aa]==undefined)y.categories[aa]={};y.categories[aa][event]=t;});});q.subscribe(j,function(event,r){k[r.lid].phase_start[r.phase]=r.ts;});}var p={init:function(){if(l)return;c('Arbiter').subscribe(h,function(event,q){var r=q.lid,s=q.arbiter;k[r]=m();o(s);});l=true;},getMetrics:function(q){if(k[q])return JSON.parse(JSON.stringify(k[q]));return null;}};f.exports=p;},null);
__d('ResourceTimingBootloaderHelper',['BigPipeExperiments','Bootloader','ResourceTimingMetricsEnumJS','ImageTimingHelper','Set','URI','forEachObject','isEmpty','performance'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i={};function j(p,q,r){if(!c('performance').timing||!c('performance').getEntriesByType)return;var s={};if(c('BigPipeExperiments').link_images_to_pagelets)s=c('ImageTimingHelper').getImageTimings(r).sort(function(ja,ka){return ja.ts-ka.ts;}).reduce(function(ja,ka){if(ja[ka.uri])return ja;ja[ka.uri]=ka.pagelet;return ja;},{});var t=c('performance').getEntriesByType('resource'),u=0,v=0,w=0;for(var x=0;x<t.length;x++){var y=t[x];if(y.duration<=0||y.startTime<q)continue;var z='',aa='',ba='',ca='',da='',ea=y.initiatorType;switch(ea){case 'css':case 'link':case 'script':var fa=n(y.name);aa=fa[0];z=fa[1];if(!aa||!z)continue;if(z==='css'||z==='js'){ca=z;var ga=i[y.name]||v++;ba=ga+'_'+aa;}else{var ha=m(y.name);da=ha[0];ca=ha[1];ba=u+++'_'+da;}break;case 'img':ba=u+++'_'+k(y.name);ca='img';break;case 'iframe':ba=w+++'_'+k(y.name)+l(y.name);ca='iframe';break;default:continue;}if(p[y.name]==undefined)p[y.name]=[];var ia={};c('forEachObject')(c('ResourceTimingMetricsEnumJS'),function(ja){var ka=y[ja];if(ka)ia[ja]=ka+c('performance').timing.navigationStart;});ia.type=ca;ia.desc=ba;if(ca=='img'&&s.hasOwnProperty(y.name))ia.pagelet=s[y.name];p[y.name].push(ia);}}function k(p){var q=new (c('URI'))(p).getDomain();return q;}function l(p){var q=new (c('URI'))(p).getPath();return q;}function m(p){return [k(p),'img'];}function n(p){var q=p.match(/\/rsrc\.php\/.*\/([^\?]+)/);if(!q)return [];var r=q[1],s='',t=r.match(/\.(\w+)$/);if(t)s=t[1];return [r,s];}var o={addBootloaderMetricsToResourceTimings:function(){var p=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],q=arguments.length<=1||arguments[1]===undefined?{}:arguments[1],r=arguments.length<=2||arguments[2]===undefined?true:arguments[2];if(c('isEmpty')(i))i=c('Bootloader').getURLToHashMap();var s={};c('forEachObject')(i,function(v,w){s[v]=w;});var t=new (c('Set'))(['bootload','js_exec','start_bootload','tag_bootload']),u=[];c('forEachObject')(q,function(v,w){var x=w.indexOf('/');if(x===-1)return;var y=w.substring(0,x);if(!t.has(y))return;u.push(w);var z=w.substring(x+1),aa=s[z];if(!aa)return;if(p[aa]==null)p[aa]=[{}];p[aa].forEach(function(ba){ba.bootloader_hash=z;ba[y]=v;});});if(!r)u.forEach(function(v){delete q[v];});return p;},getLastTTIAndE2EImageResponseEnds:function(p,q,r){var s={TTI:p,E2E:q};if(!c('performance').timing)return s;var t=r.filter(function(w){return w.ts<=p;}).map(function(w){return w.uri;}).reduce(function(w,x){w[x]=true;return w;},{}),u=r.map(function(w){return w.uri;}).reduce(function(w,x){w[x]=true;return w;},{});for(var v in h)h[v].forEach(function(w){if(w.type==='img'){if(t[v])s.TTI=Math.max(s.TTI,w.responseEnd);if(u[v])s.E2E=Math.max(s.E2E,w.responseEnd);}});return s;},getMetrics:function(p,q){h={};if(c('isEmpty')(i))i=c('Bootloader').getURLToHashMap();j(h,p,q);return h;}};f.exports=o;},null);
__d('TimeSliceHelper',['ArtilleryExperiments','LogBuffer','sourceMetaToString'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={getMetrics:function(i,j,k,l){var m=c('LogBuffer').read('time_slice'),n,o=[],p=function(q){var r;if(q.guard){var s=c('sourceMetaToString')(q),t=q.guard.toString();r=s?t+' at '+s:t;}else r='JS['+q.count+']';if(c('ArtilleryExperiments').artillery_timeslice_edges){o.push({begin:q.begin,end:q.end,name:r,id:q.id,parentID:q.parentID});}else o.push({begin:q.begin,end:q.end,name:r});};m.forEach(function(q){if(i&&q.end<i||j&&q.begin>j)return;if(q.end-q.begin<k){if(n&&q.begin-n.end<l){n.end=q.end;n.count++;}else{if(n)p(n.count==1?n.first:n);n={begin:q.begin,end:q.end,count:1,first:q,guard:false,id:undefined,parentID:undefined};}}else p(q);});if(n)p(n.count==1?n.first:n);return o;}};f.exports=h;},null);
__d('PerfXLogger',['Arbiter','LogBuffer','PageEvents','PerfXFlusher','NavigationMetrics','Set','performance'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i=['e2e','tti','all_pagelets_displayed','all_pagelets_loaded'],j={},k,l={_listenersSetUp:false,_setupListeners:function(){if(this.listenersSetUp)return;this._subscribeToNavigationDoneEvent();this.listenersSetUp=true;},_init:function(m,n,o){h[m]={perfx_page:n,perfx_page_type:o,tags:new (c('Set'))()};this._setupListeners();},initForPageLoad:function(m,n,o){k=m;this._init(m,n,o);},initForQuickling:function(m,n,o,p){this._init(m,n,o);j[m]=p;},updateProperties:function(m,n,o){var p=h[m];if(p){p.perfx_page=n;p.perfx_page_type=o;}},addTag:function(m,n){var o=h[m];if(o)o.tags.add(n);},_subscribeToNavigationDoneEvent:function(){c('NavigationMetrics').addListener(c('NavigationMetrics').Events.NAVIGATION_DONE,function(m,n){var o=n.serverLID;if(!(o in h))return;h[o].tti=n.tti;h[o].e2e=n.e2e;h[o].all_pagelets_displayed=n.extras.all_pagelets_displayed;h[o].all_pagelets_loaded=n.extras.all_pagelets_loaded;var p=n.pageType;if(this._validateValues(o))if(p==='normal'){this._finishPageload(o);}else if(p==='quickling')this._finishQuickling(o);}.bind(this));},_generatePayload:function(m,n){var o=h[m];if(o.fbtrace_id){o.js_tti=this._getJSTime(n,o.tti);o.js_e2e=this._getJSTime(n,o.e2e);}var p=Object.assign({},o),q=document.querySelector('[id^="hyperfeed_story_id"]');if(q){var r=JSON.parse(q.getAttribute('data-ft'));if(r)p.mf_query_id=r.qid;}p.tags=Array.from(o.tags);this._adjustValues(p,n);return p;},_getPageloadPayload:function(m){if(!(m in h))return;if(!c('performance').timing){delete h[m];return;}var n=c('performance').timing.fetchStart;return this._generatePayload(m,n);},_getQuicklingPayload:function(m){if(!(m in j)||!(m in h))return;if(!c('performance').timing||!c('performance').getEntriesByName){delete j[m];delete h[m];return;}var n=j[m],o=c('performance').getEntriesByName(n);if(o.length===0)return;var p=o[0],q=c('performance').timing.navigationStart+p.fetchStart;return this._generatePayload(m,q);},_finishPageload:function(m){var n=this._getPageloadPayload(m);if(n)this._log(m,n);},_finishQuickling:function(m){var n=this._getQuicklingPayload(m);if(n)this._log(m,n);},_log:function(m,n){c('PerfXFlusher').flush(m,n);},_adjustValues:function(m,n){for(var o=0;o<i.length;o++){var p=i[o],q=m[p];m[p]=q-n;}},_validateValues:function(m){if(!(m in h))return false;var n=h[m];for(var o=0;o<i.length;o++){var p=i[o];if(!n[p])return false;}return true;},getPayload:function(m){if(!(m in h))return;var n=h[m].perfx_page_type;if(n==="normal"){return this._getPageloadPayload(m);}else if(n==="quickling")return this._getQuicklingPayload(m);},setFBTraceID:function(m,n){if(m in h)h[m].fbtrace_id=n;},_getJSTime:function(m,n){if(m>n)return 0;var o=0;c('LogBuffer').read('time_slice').forEach(function(p){var q=p.begin,r=p.end;if(q>r)return;if(m<=q&&r<=n){o+=r-q;}else if(q<=m&&n<=r){o+=n-m;}else if(q<=m&&m<=r){o+=r-m;}else if(q<=n&&n<=r)o+=n-q;});return o;}};f.exports=l;},null);
__d('PluginCSSReflowHack',['Style'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={trigger:function(i){setTimeout(function(){var j='border-bottom-width',k=c('Style').get(i,j);c('Style').set(i,j,parseInt(k,10)+1+'px');var l=i.offsetHeight;c('Style').set(i,j,k);return l;},1000);}};f.exports=h;},null);
__d('PluginPageActionLogger',['BanzaiLogger','DOM','Event','PagePluginActions','PagePluginActionTypes'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={initializeClickLoggers:function(i,j,k,l,m,n,o,p,q,r){var s=function(t,u){try{var w=c('DOM').find(l,'.'+t);c('Event').listen(w,'click',function(x){c('BanzaiLogger').log('PagePluginActionsLoggerConfig',{page_id:j,page_plugin_action:u,page_plugin_action_type:c('PagePluginActionTypes').CLICK,referer_url:k,is_sdk:i});});}catch(v){}};s(m,c('PagePluginActions').PAGE_LIKE);s(n,c('PagePluginActions').PAGE_UNLIKE);s(o,c('PagePluginActions').PAGE_AVATAR);s(p,c('PagePluginActions').PAGE_PERMALINK);s(q,c('PagePluginActions').PAGE_SHARE);s(r,c('PagePluginActions').PAGE_CTA);}};f.exports=h;},null);
__d('KappaWrapper',['AsyncSignal','setTimeoutAcrossTransitions'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false;f.exports={forceStart:function(i,j,k){var l=0,m=function(){new (c('AsyncSignal'))('/si/kappa/',{Ko:"a"}).send();if(++l<i)c('setTimeoutAcrossTransitions')(m,j*1000);};c('setTimeoutAcrossTransitions')(m,(j+k)*1000);},start:function(i,j,k){if(!h){h=true;this.forceStart(i,j,k);}}};},null);
__d('Chromedome',['fbt'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();g.start=function(i){if(i.off||top!==window||!/(^|\.)facebook\.(com|sg)$/.test(document.domain))return;var j=i.stop||h._("Stop!"),k=i.text||h._("This is a browser feature intended for developers. If someone told you to copy-paste something here to enable a Facebook feature or \"hack\" someone's account, it is a scam and will give them access to your Facebook account."),l=i.more||h._("See {url} for more information.",[h.param('url','https://www.facebook.com/selfxss')]);if((window.chrome||window.safari)&&!i.textonly){var m='font-family:helvetica; font-size:20px; ';[[j,i.c1||m+'font-size:50px; font-weight:bold; '+'color:red; -webkit-text-stroke:1px black;'],[k,i.c2||m],[l,i.c3||m],['','']].map(function(s){setTimeout(console.log.bind(console,'\n%c'+s[0],s[1]));});}else{var n=['',' .d8888b.  888                       888','d88P  Y88b 888                       888','Y88b.      888                       888',' "Y888b.   888888  .d88b.  88888b.   888','    "Y88b. 888    d88""88b 888 "88b  888','      "888 888    888  888 888  888  Y8P','Y88b  d88P Y88b.  Y88..88P 888 d88P',' "Y8888P"   "Y888  "Y88P"  88888P"   888','                           888','                           888','                           888'],o=(''+k).match(/.{35}.+?\s+|.+$/g),p=Math.floor(Math.max(0,(n.length-o.length)/2));for(var q=0;q<n.length||q<o.length;q++){var r=n[q];n[q]=r+new Array(45-r.length).join(' ')+(o[q-p]||'');}console.log('\n\n\n'+n.join('\n')+'\n\n'+l+'\n');return;}};},null);