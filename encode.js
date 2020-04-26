if(typeof(W)=="function"){A=AddWinLoadEvent=W}else{W=A=AddWinLoadEvent=function(a){if(_w.addEventListener){_w.addEventListener("load",a,false)}else if(_w.attachEvent){_w.attachEvent('onload',a)}else{if(typeof(_w.onload)=="function"){var b=_w.onload;_w.onload=function(){b();a()}}else{_w.onload=a}}}}
function setAttributeOnload(a,b,c){W(function(){a[b]=c})}
GetBody=function(){return S.getBody()}
getEl=function(el,a){return S.getEl(el,a)}
function PageQuery(a){this.ParamValues={};this.ParamNo=0;var b,c="";if(a&&a.length>0){b=a}else{if(location.search.length>0){b=location.href}else{b=""}};this.ParseQuery=function(a){var d=/[?&]([^=]+)(?:=([^&#]*))?/g,e=/(\#.*$)/,f,h,i,j=0;while(f=d.exec(a)){h=denc(f[1]);val=denc(f[2]);if(this.ParamValues[h]){if(h&&h!="")this.ParamValues[h]=this.ParamValues[h]+","+val}else{this.ParamValues[h]=val;j++}};this.ParamNo=j;i=e.exec(a);if(i)c=i[0].replace("#","")};if(b.length){this.ParseQuery(b)};this.GetValue=function(h){if(!this.ParamValues[h])return "";return this.ParamValues[h]};this.GetAnchor=c;this.OutputParams=function(){var k="";if(this.ParamValues&&this.ParamNo>0){for(var h in this.ParamValues){k+=h+": "+this.ParamValues[h]+"\n"}};if(c!="")k+="Anchor: "+c+"\n";return k}}
enc=function(v){return S.enc(v)}
denc=function(v){return S.denc(v)}
function setCode(){var a,b,c=_d.getElementsByTagName("DIV");if(c&&c.length){for(var x=0;x<c.length;x++){if(c[x].className!="code"){if(c[x].firstChild&&c[x].firstChild.nextSibling){a=c[x].firstChild.nextSibling;if(a&&a.nodeType!=3&&a.tagName=="PRE"){b=a.firstChild;if(b&&b.nodeType!=3&&b.tagName=="CODE"){c[x].className="code"}}}}}}}
fncGetEmailAddr=function(s,f){return S.getEmailAddress(s,f)}
function unbold2(){var a=G('DIV.post-body B').setAtts('className','unbold');a=G('DIV.post-body SPAN').setAtts('className','unbold');a=G('DIV.post-body STRONG').setAtts('className','unbold')}
function rebold(){var a=G('.unbold').each(function(){S.delClass(this,'unbold')})}
if(typeof(Getme)!="undefined"){DOM(function(){D.ForceCustomDebug=true;G('#blogoptions').setStyle('display','block');var ck=S.readCookie('unbold');if(!S.isEmpty(ck)){if(ck=="true"){unbold2();setMenuA()}}})}
function setMenuA(){var a=G('#boldcook').get();if(S.hasClass(a,'bon')){a.onclick=function(){S.createCookie('unbold',false);rebold();setMenuA();return false};a.title="Turn on bold highlighting for all blog articles";a.innerHTML="Turn on for all pages";a.className='boff';setMenuB('on')}else{a.onclick=function(){S.createCookie('unbold',true);unbold2();setMenuA();return false};a.title="Turn off bold highlighting for all blog articles";a.innerHTML="Turn off for all pages";a.className='bon';setMenuB('off')}}
function setMenuB(v){var a=G('#boldopt').get();if(S.hasClass(a,'bon')||v=='on'){a.onclick=function(){rebold();setMenuB();return false};a.title="Turn on bold highlighting on this blog article";a.innerHTML="Turn on bold highlighting";a.className='boff'}else if(S.hasClass(a,'boff')||v=='off'){a.onclick=function(){unbold2();setMenuB();return false};a.title="Turn off bold highlighting on this blog article";a.innerHTML="Turn off bold highlighting";a.className='bon'}}




//////////////////////***************http://ykubnay.yn.lt***************//////////////////
