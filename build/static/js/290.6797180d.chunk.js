"use strict";(self.webpackChunkangolosport=self.webpackChunkangolosport||[]).push([[290],{5513:(e,t,r)=>{r.d(t,{A:()=>ae});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),a=Math.abs,s=String.fromCharCode,c=Object.assign;function i(e){return e.trim()}function o(e,t,r){return e.replace(t,r)}function u(e,t){return e.indexOf(t)}function l(e,t){return 0|e.charCodeAt(t)}function f(e,t,r){return e.slice(t,r)}function d(e){return e.length}function h(e){return e.length}function v(e,t){return t.push(e),e}var p=1,m=1,g=0,y=0,b=0,k="";function w(e,t,r,n,a,s,c){return{value:e,root:t,parent:r,type:n,props:a,children:s,line:p,column:m,length:c,return:""}}function x(e,t){return c(w("",null,null,"",null,null,0),e,{length:-e.length},t)}function C(){return b=y>0?l(k,--y):0,m--,10===b&&(m=1,p--),b}function A(){return b=y<g?l(k,y++):0,m++,10===b&&(m=1,p++),b}function $(){return l(k,y)}function S(){return y}function E(e,t){return f(k,e,t)}function _(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function O(e){return p=m=1,g=d(k=e),y=0,[]}function N(e){return k="",e}function T(e){return i(E(y-1,z(91===e?e+2:40===e?e+1:e)))}function P(e){for(;(b=$())&&b<33;)A();return _(e)>2||_(b)>3?"":" "}function R(e,t){for(;--t&&A()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return E(e,S()+(t<6&&32==$()&&32==A()))}function z(e){for(;A();)switch(b){case e:return y;case 34:case 39:34!==e&&39!==e&&z(b);break;case 40:41===e&&z(e);break;case 92:A()}return y}function I(e,t){for(;A()&&e+b!==57&&(e+b!==84||47!==$()););return"/*"+E(t,y-1)+"*"+s(47===e?e:A())}function M(e){for(;!_($());)A();return E(e,y)}var j="-ms-",G="-moz-",L="-webkit-",F="comm",W="rule",H="decl",J="@keyframes";function q(e,t){for(var r="",n=h(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function D(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case H:return e.return=e.return||e.value;case F:return"";case J:return e.return=e.value+"{"+q(e.children,n)+"}";case W:e.value=e.props.join(",")}return d(r=q(e.children,n))?e.return=e.value+"{"+r+"}":""}function Y(e){return N(B("",null,null,null,[""],e=O(e),0,[0],e))}function B(e,t,r,n,a,c,i,f,h){for(var p=0,m=0,g=i,y=0,b=0,k=0,w=1,x=1,E=1,_=0,O="",N=a,z=c,j=n,G=O;x;)switch(k=_,_=A()){case 40:if(108!=k&&58==l(G,g-1)){-1!=u(G+=o(T(_),"&","&\f"),"&\f")&&(E=-1);break}case 34:case 39:case 91:G+=T(_);break;case 9:case 10:case 13:case 32:G+=P(k);break;case 92:G+=R(S()-1,7);continue;case 47:switch($()){case 42:case 47:v(Z(I(A(),S()),t,r),h);break;default:G+="/"}break;case 123*w:f[p++]=d(G)*E;case 125*w:case 59:case 0:switch(_){case 0:case 125:x=0;case 59+m:-1==E&&(G=o(G,/\f/g,"")),b>0&&d(G)-g&&v(b>32?K(G+";",n,r,g-1):K(o(G," ","")+";",n,r,g-2),h);break;case 59:G+=";";default:if(v(j=U(G,t,r,p,m,a,f,O,N=[],z=[],g),c),123===_)if(0===m)B(G,t,j,j,N,c,g,f,z);else switch(99===y&&110===l(G,3)?100:y){case 100:case 108:case 109:case 115:B(e,j,j,n&&v(U(e,j,j,0,0,a,f,O,a,N=[],g),z),a,z,g,f,n?N:z);break;default:B(G,j,j,j,[""],z,0,f,z)}}p=m=b=0,w=E=1,O=G="",g=i;break;case 58:g=1+d(G),b=k;default:if(w<1)if(123==_)--w;else if(125==_&&0==w++&&125==C())continue;switch(G+=s(_),_*w){case 38:E=m>0?1:(G+="\f",-1);break;case 44:f[p++]=(d(G)-1)*E,E=1;break;case 64:45===$()&&(G+=T(A())),y=$(),m=g=d(O=G+=M(S())),_++;break;case 45:45===k&&2==d(G)&&(w=0)}}return c}function U(e,t,r,n,s,c,u,l,d,v,p){for(var m=s-1,g=0===s?c:[""],y=h(g),b=0,k=0,x=0;b<n;++b)for(var C=0,A=f(e,m+1,m=a(k=u[b])),$=e;C<y;++C)($=i(k>0?g[C]+" "+A:o(A,/&\f/g,g[C])))&&(d[x++]=$);return w(e,t,r,0===s?W:l,d,v,p)}function Z(e,t,r){return w(e,t,r,F,s(b),f(e,2,-2),0)}function K(e,t,r,n){return w(e,t,r,H,f(e,0,n),f(e,n+1,-1),n)}var Q=function(e,t,r){for(var n=0,a=0;n=a,a=$(),38===n&&12===a&&(t[r]=1),!_(a);)A();return E(e,y)},V=function(e,t){return N(function(e,t){var r=-1,n=44;do{switch(_(n)){case 0:38===n&&12===$()&&(t[r]=1),e[r]+=Q(y-1,t,r);break;case 2:e[r]+=T(n);break;case 4:if(44===n){e[++r]=58===$()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=s(n)}}while(n=A());return e}(O(e),t))},X=new WeakMap,ee=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||X.get(r))&&!n){X.set(e,!0);for(var a=[],s=V(t,a),c=r.props,i=0,o=0;i<s.length;i++)for(var u=0;u<c.length;u++,o++)e.props[o]=a[i]?s[i].replace(/&\f/g,c[u]):c[u]+" "+s[i]}}},te=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function re(e,t){switch(function(e,t){return 45^l(e,0)?(((t<<2^l(e,0))<<2^l(e,1))<<2^l(e,2))<<2^l(e,3):0}(e,t)){case 5103:return L+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return L+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return L+e+G+e+j+e+e;case 6828:case 4268:return L+e+j+e+e;case 6165:return L+e+j+"flex-"+e+e;case 5187:return L+e+o(e,/(\w+).+(:[^]+)/,L+"box-$1$2"+j+"flex-$1$2")+e;case 5443:return L+e+j+"flex-item-"+o(e,/flex-|-self/,"")+e;case 4675:return L+e+j+"flex-line-pack"+o(e,/align-content|flex-|-self/,"")+e;case 5548:return L+e+j+o(e,"shrink","negative")+e;case 5292:return L+e+j+o(e,"basis","preferred-size")+e;case 6060:return L+"box-"+o(e,"-grow","")+L+e+j+o(e,"grow","positive")+e;case 4554:return L+o(e,/([^-])(transform)/g,"$1"+L+"$2")+e;case 6187:return o(o(o(e,/(zoom-|grab)/,L+"$1"),/(image-set)/,L+"$1"),e,"")+e;case 5495:case 3959:return o(e,/(image-set\([^]*)/,L+"$1$`$1");case 4968:return o(o(e,/(.+:)(flex-)?(.*)/,L+"box-pack:$3"+j+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+L+e+e;case 4095:case 3583:case 4068:case 2532:return o(e,/(.+)-inline(.+)/,L+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(d(e)-1-t>6)switch(l(e,t+1)){case 109:if(45!==l(e,t+4))break;case 102:return o(e,/(.+:)(.+)-([^]+)/,"$1"+L+"$2-$3$1"+G+(108==l(e,t+3)?"$3":"$2-$3"))+e;case 115:return~u(e,"stretch")?re(o(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==l(e,t+1))break;case 6444:switch(l(e,d(e)-3-(~u(e,"!important")&&10))){case 107:return o(e,":",":"+L)+e;case 101:return o(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+L+(45===l(e,14)?"inline-":"")+"box$3$1"+L+"$2$3$1"+j+"$2box$3")+e}break;case 5936:switch(l(e,t+11)){case 114:return L+e+j+o(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return L+e+j+o(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return L+e+j+o(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return L+e+j+e+e}return e}var ne=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case H:e.return=re(e.value,e.length);break;case J:return q([x(e,{value:o(e.value,"@","@"+L)})],n);case W:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return q([x(e,{props:[o(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return q([x(e,{props:[o(t,/:(plac\w+)/,":"+L+"input-$1")]}),x(e,{props:[o(t,/:(plac\w+)/,":-moz-$1")]}),x(e,{props:[o(t,/:(plac\w+)/,j+"input-$1")]})],n)}return""}))}}],ae=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a=e.stylisPlugins||ne;var s,c,i={},o=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)i[t[r]]=!0;o.push(e)}));var u,l,f=[D,(l=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&l(e)})],d=function(e){var t=h(e);return function(r,n,a,s){for(var c="",i=0;i<t;i++)c+=e[i](r,n,a,s)||"";return c}}([ee,te].concat(a,f));c=function(e,t,r,n){u=r,q(Y(e?e+"{"+t.styles+"}":t.styles),d),n&&(v.inserted[t.name]=!0)};var v={key:t,sheet:new n({key:t,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:c};return v.sheet.hydrate(o),v}},5756:(e,t,r)=>{r.d(t,{C:()=>f,E:()=>g,T:()=>h,c:()=>p,h:()=>u,i:()=>o,w:()=>d});var n=r(5043),a=r(5513),s=r(1722),c=r(2830),i=r(9436),o=!0,u={}.hasOwnProperty,l=n.createContext("undefined"!==typeof HTMLElement?(0,a.A)({key:"css"}):null);var f=l.Provider,d=function(e){return(0,n.forwardRef)((function(t,r){var a=(0,n.useContext)(l);return e(t,a,r)}))};o||(d=function(e){return function(t){var r=(0,n.useContext)(l);return null===r?(r=(0,a.A)({key:"css"}),n.createElement(l.Provider,{value:r},e(t,r))):e(t,r)}});var h=n.createContext({});var v="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",p=function(e,t){var r={};for(var n in t)u.call(t,n)&&(r[n]=t[n]);return r[v]=e,r},m=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return(0,s.SF)(t,r,n),(0,i.s)((function(){return(0,s.sk)(t,r,n)})),null};var g=d((function(e,t,r){var a=e.css;"string"===typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var i=e[v],o=[a],l="";"string"===typeof e.className?l=(0,s.Rk)(t.registered,o,e.className):null!=e.className&&(l=e.className+" ");var f=(0,c.J)(o,void 0,n.useContext(h));l+=t.key+"-"+f.name;var d={};for(var p in e)u.call(e,p)&&"css"!==p&&p!==v&&(d[p]=e[p]);return d.ref=r,d.className=l,n.createElement(n.Fragment,null,n.createElement(m,{cache:t,serialized:f,isStringTag:"string"===typeof i}),n.createElement(i,d))}))},3290:(e,t,r)=>{r.d(t,{AH:()=>l,Y:()=>o,i7:()=>f,mL:()=>u});var n=r(5756),a=r(5043),s=r(1722),c=r(9436),i=r(2830),o=(r(5513),r(219),function(e,t){var r=arguments;if(null==t||!n.h.call(t,"css"))return a.createElement.apply(void 0,r);var s=r.length,c=new Array(s);c[0]=n.E,c[1]=(0,n.c)(e,t);for(var i=2;i<s;i++)c[i]=r[i];return a.createElement.apply(null,c)}),u=(0,n.w)((function(e,t){var r=e.styles,o=(0,i.J)([r],void 0,a.useContext(n.T));if(!n.i){for(var u,l=o.name,f=o.styles,d=o.next;void 0!==d;)l+=" "+d.name,f+=d.styles,d=d.next;var h=!0===t.compat,v=t.insert("",{name:l,styles:f},t.sheet,h);return h?null:a.createElement("style",((u={})["data-emotion"]=t.key+"-global "+l,u.dangerouslySetInnerHTML={__html:v},u.nonce=t.sheet.nonce,u))}var p=a.useRef();return(0,c.i)((function(){var e=t.key+"-global",r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),n=!1,a=document.querySelector('style[data-emotion="'+e+" "+o.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==a&&(n=!0,a.setAttribute("data-emotion",e),r.hydrate([a])),p.current=[r,n],function(){r.flush()}}),[t]),(0,c.i)((function(){var e=p.current,r=e[0];if(e[1])e[1]=!1;else{if(void 0!==o.next&&(0,s.sk)(t,o.next,!0),r.tags.length){var n=r.tags[r.tags.length-1].nextElementSibling;r.before=n,r.flush()}t.insert("",o,r,!1)}}),[t,o.name]),null}));function l(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.J)(t)}var f=function(){var e=l.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},2830:(e,t,r)=>{r.d(t,{J:()=>v});var n={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},a=r(918),s=/[A-Z]|^ms/g,c=/_EMO_([^_]+?)_([^]*?)_EMO_/g,i=function(e){return 45===e.charCodeAt(1)},o=function(e){return null!=e&&"boolean"!==typeof e},u=(0,a.A)((function(e){return i(e)?e:e.replace(s,"-$&").toLowerCase()})),l=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(c,(function(e,t,r){return d={name:t,styles:r,next:d},t}))}return 1===n[e]||i(e)||"number"!==typeof t||0===t?t:t+"px"};function f(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return d={name:r.name,styles:r.styles,next:d},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)d={name:n.name,styles:n.styles,next:d},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=f(e,t,r[a])+";";else for(var s in r){var c=r[s];if("object"!==typeof c)null!=t&&void 0!==t[c]?n+=s+"{"+t[c]+"}":o(c)&&(n+=u(s)+":"+l(s,c)+";");else if(!Array.isArray(c)||"string"!==typeof c[0]||null!=t&&void 0!==t[c[0]]){var i=f(e,t,c);switch(s){case"animation":case"animationName":n+=u(s)+":"+i+";";break;default:n+=s+"{"+i+"}"}}else for(var d=0;d<c.length;d++)o(c[d])&&(n+=u(s)+":"+l(s,c[d])+";")}return n}(e,t,r);case"function":if(void 0!==e){var a=d,s=r(e);return d=a,f(e,t,s)}}if(null==t)return r;var c=t[r];return void 0!==c?c:r}var d,h=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var v=function(e,t,r){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";d=void 0;var s=e[0];null==s||void 0===s.raw?(n=!1,a+=f(r,t,s)):a+=s[0];for(var c=1;c<e.length;c++)a+=f(r,t,e[c]),n&&(a+=s[c]);h.lastIndex=0;for(var i,o="";null!==(i=h.exec(a));)o+="-"+i[1];var u=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(a)+o;return{name:u,styles:a,next:d}}},9436:(e,t,r)=>{var n;r.d(t,{i:()=>i,s:()=>c});var a=r(5043),s=!!(n||(n=r.t(a,2))).useInsertionEffect&&(n||(n=r.t(a,2))).useInsertionEffect,c=s||function(e){return e()},i=s||a.useLayoutEffect},1722:(e,t,r)=>{r.d(t,{Rk:()=>n,SF:()=>a,sk:()=>s});function n(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var a=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},s=function(e,t,r){a(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var s=t;do{e.insert(t===s?"."+n:"",s,e.sheet,!0),s=s.next}while(void 0!==s)}}}}]);
//# sourceMappingURL=290.6797180d.chunk.js.map