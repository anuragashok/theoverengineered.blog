(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"9rRx":function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var r=n("q1tI"),a=n.n(r),o=n("i8i4");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c={position:"fixed",left:0,top:0,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.4)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",zIndex:1400};function l(e){var t=e.children,n=e.onClose;return a.a.createElement("div",{onClick:function(e){e.target===e.currentTarget&&n(e)},className:"web-share-fade",style:c},a.a.createElement("style",{children:".web-share-fade{animation:simpleFade 0.5s;animation-fill-mode:both }@keyframes simpleFade{0%{opacity:0 }100%{opacity:1 }}.web-share-fade-in-up{animation:fadeInUp 0.5s;animation-fill-mode:both }@keyframes fadeInUp{0%{opacity:0;transform:translateY(20px) }100%{opacity:1;transform:translateY(0) }}"}),t)}var u=function(e){return window.open(e,"_blank","noopener")},s={facebook:{path:a.a.createElement("path",{d:"M24 12a12 12 0 10-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.6-4.7l2.6.2v3h-1.5c-1.5 0-2 .9-2 1.8V12h3.4l-.5 3.5h-2.8v8.4A12 12 0 0024 12z"}),color:"#0076FB",e:function(e){return u("https://www.facebook.com/sharer/sharer.php?u="+e)}},twitter:{path:a.a.createElement("path",{d:"M24 4.6a10 10 0 01-2.9.7 5 5 0 002.2-2.7c-1 .6-2 1-3.1 1.2a5 5 0 00-8.4 4.5A14 14 0 011.6 3.2 4.8 4.8 0 001 5.6a5 5 0 002.2 4.1 4.9 4.9 0 01-2.3-.6A5 5 0 005 14a5 5 0 01-2.2 0 5 5 0 004.6 3.5 9.9 9.9 0 01-6.1 2.1H0a14 14 0 007.6 2.2c9 0 14-7.5 14-14V7A10 10 0 0024 4.6z"}),color:"#1DA1F2",e:function(e,t){return u("https://twitter.com/intent/tweet?text="+t+"&url="+e)}},whatsapp:{path:a.a.createElement("path",{d:"M17.5 14.4l-2-1c-.3 0-.5-.1-.7.2l-1 1.1c-.1.2-.3.3-.6.1s-1.3-.5-2.4-1.5a9 9 0 01-1.7-2c-.1-.3 0-.5.2-.6l.4-.6c.2-.1.2-.3.3-.5v-.5L9 7c-.2-.6-.4-.5-.6-.5h-.6c-.2 0-.5 0-.8.4-.2.3-1 1-1 2.5s1 2.8 1.2 3c.2.2 2.1 3.2 5.1 4.5l1.7.6a4 4 0 001.9.2c.5-.1 1.7-.8 2-1.5.2-.6.2-1.2.1-1.4l-.5-.3M12 21.8a9.9 9.9 0 01-5-1.4l-.4-.2-3.7 1 1-3.7-.2-.3a9.9 9.9 0 01-1.5-5.3 9.9 9.9 0 0116.8-7 9.8 9.8 0 013 7 9.9 9.9 0 01-10 9.9m8.4-18.3A11.8 11.8 0 0012.1 0 12 12 0 001.8 17.8L0 24l6.4-1.6a11.9 11.9 0 005.6 1.4 12 12 0 0012-11.9 11.8 11.8 0 00-3.5-8.4z"}),color:"#25D366",e:function(e,t){return u("https://api.whatsapp.com/send?text="+t+" "+e)}},reddit:{path:a.a.createElement("path",{d:"M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm5.01 4.74c.69 0 1.25.56 1.25 1.25a1.25 1.25 0 01-2.5.06l-2.6-.55-.8 3.75c1.83.07 3.48.63 4.68 1.49.3-.31.73-.5 1.2-.5.97 0 1.76.8 1.76 1.76 0 .72-.43 1.33-1.01 1.61a3.11 3.11 0 01.04.52c0 2.7-3.13 4.87-7 4.87-3.88 0-7-2.17-7-4.87 0-.18 0-.36.04-.53A1.75 1.75 0 014.03 12a1.75 1.75 0 012.96-1.26 8.52 8.52 0 014.74-1.5l.89-4.17a.34.34 0 01.14-.2.35.35 0 01.24-.04l2.9.62a1.21 1.21 0 011.11-.7zM9.25 12a1.25 1.25 0 101.25 1.25c0-.69-.56-1.25-1.25-1.25zm5.5 0a1.25 1.25 0 000 2.5 1.25 1.25 0 000-2.5zm-5.47 3.99a.33.33 0 00-.23.1.33.33 0 000 .46c.84.84 2.49.91 2.96.91.48 0 2.1-.06 2.96-.91a.36.36 0 00.03-.47.33.33 0 00-.46 0c-.55.54-1.68.73-2.51.73-.83 0-1.98-.2-2.51-.73a.33.33 0 00-.24-.1z"}),color:"#FF4500",e:function(e,t){return u("https://www.reddit.com/submit?url="+e+"&title="+t)}},telegram:{path:a.a.createElement("path",{d:"M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7.85 12c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"}),color:"#0088CC",e:function(e,t){return u("https://telegram.me/share/msg?url="+e+"&text="+t)}},linkedin:{path:a.a.createElement("path",{d:"M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"}),color:"#0073b1",e:function(e,t,n){return u("https://www.linkedin.com/shareArticle?mini=true&url="+e+"&title="+n+"&summary="+t)}},mail:{path:a.a.createElement("path",{d:"M20 4H4a2 2 0 00-2 2v12c0 1.1.9 2 2 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),color:"#E53E3E",e:function(e,t){return u("mailto:?body="+e+"&subject="+t)}},copy:{path:a.a.createElement("path",{d:"M16 1H4a2 2 0 00-2 2v14h2V3h12V1zm3 4H8a2 2 0 00-2 2v14c0 1.1.9 2 2 2h11a2 2 0 002-2V7a2 2 0 00-2-2zm0 16H8V7h11v14z"}),color:"#718096",e:function(e){return navigator.clipboard.writeText(decodeURIComponent(e))}}},d=function(e){var t=e.children,n=document.createElement("div");return Object(r.useEffect)((function(){return document.body.appendChild(n),function(){document.body.removeChild(n)}}),[n]),Object(o.createPortal)(t,n)},m={background:"#edf2f7",cursor:"pointer",padding:"0.75rem",display:"block",width:"100%",border:0,fontSize:"1rem"};function f(e){var t=e.onClose;return a.a.createElement("button",{style:m,"aria-label":"Close",type:"button",onClick:t},"Close")}var h={padding:"1rem 1.25rem",fontSize:"1.25rem",fontWeight:600,paddingBottom:0};function y(e){var t=e.title;return a.a.createElement("header",{style:h},t)}var p={width:"100%",height:"auto",cursor:"pointer",border:0,background:"#1A78F6",padding:"0.75rem",borderRadius:"0.5rem",fontSize:0};function b(e){var t=e.name,n=e.data,r=e.onClose,o=s[t],c=o.path,l=o.viewBox,u=void 0===l?"0 0 24 24":l,d=o.color,m=o.e;return a.a.createElement("button",{onClick:function(){return m(encodeURIComponent(n.url),n.text,n.title)&&r()},"aria-label":t,style:i({},p,{background:d})},a.a.createElement("svg",{fill:"white",viewBox:u},c))}var v={maxWidth:"24rem",width:"90%",backgroundColor:"white",borderRadius:"0.5rem",borderBottomLeftRadius:0,borderBottomRightRadius:0},g={padding:"1.25rem",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gridGap:"1.25rem"};function j(e){var t=e.onClose,n=e.sites,r=e.data;return a.a.createElement("section",{role:"dialog","aria-modal":"true",className:"web-share-fade-in-up",style:v},a.a.createElement(y,{title:r.title}),a.a.createElement("div",{style:g},n.map((function(e){return a.a.createElement(b,{name:e,key:e,data:r,onClose:t})}))),a.a.createElement(f,{onClose:t}))}var M=function(e){var t=e.children,n=e.data,o=e.sites,c=void 0===o?Object.keys(s):o,u=function(e){void 0===e&&(e=!1);var t=Object(r.useState)(e),n=t[0],a=t[1];return{isOpen:n,onOpen:Object(r.useCallback)((function(){return a(!0)}),[]),onClose:Object(r.useCallback)((function(){return a(!1)}),[]),onToggle:Object(r.useCallback)((function(){return a((function(e){return!e}))}),[])}}(),m=u.onOpen,f=u.onClose,h=u.isOpen,y=Object(r.useMemo)((function(){return i({},n,{title:n.title||"share",text:n.text||"",url:n.url||"undefined"!==typeof window&&window.location.href||""})}),[n]);return a.a.createElement(a.a.Fragment,null,Object(r.cloneElement)(t,i({},null==t?void 0:t.props,{onClick:function(){try{window.navigator.share(y)}catch(e){console.warn(e),m()}}})),h&&a.a.createElement(d,null,a.a.createElement(l,{onClose:f},a.a.createElement(j,{onClose:f,sites:c,data:y}))))}},"KW/6":function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement(o.Fragment,null,o.createElement("circle",{cx:"6.18",cy:"17.82",r:"2.18"}),o.createElement("path",{d:"M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"})),"RssFeed");t.default=i},jFf7:function(e,t,n){"use strict";n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return N}));var r=n("nKUr"),a=n("ubkq"),o=n.n(a),i=n("J3Rv"),c=n.n(i),l=(n("q1tI"),n("ma3e")),u=n("9rRx"),s=n("cQbH"),d=n("R/WZ"),m=n("ZBNC"),f=n("Z3vd"),h=n("ofer"),y=n("wb2y"),p=n("KW/6"),b=n.n(p),v=n("qlJ3"),g=n.n(v),j=Object(d.a)((function(e){return Object(m.a)({root:{marginTop:e.spacing(2)},textStyle:{fontStyle:"italic"},divider:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},medium:{backgroundColor:"black"},devto:{backgroundColor:"black"},rss:{backgroundColor:"#ee802f"}})})),M=function(e){var t=j(),n=e.description,a=e.title,o=e.url;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(u.a,{data:{text:n,url:Object(s.d)(o),title:a},children:Object(r.jsx)(f.a,{variant:"contained",color:"primary",endIcon:Object(r.jsx)(g.a,{}),children:"Share"})}),Object(r.jsx)(y.a,{light:!0,className:t.divider}),Object(r.jsxs)(h.a,{variant:"body1",color:"textPrimary",className:t.textStyle,component:"p",children:[Object(r.jsx)("span",{children:"Liked the article ? You can follow the blog at "}),Object(r.jsx)(f.a,{target:"_blank",href:"/rss.xml",variant:"contained",color:"primary",endIcon:Object(r.jsx)(l.b,{}),className:t.medium,children:"Medium"}),"  ",Object(r.jsx)(f.a,{target:"_blank",href:"/rss.xml",variant:"contained",color:"primary",endIcon:Object(r.jsx)(l.a,{}),className:t.devto,children:"DEV"}),"  "," or via ","  ",Object(r.jsx)(f.a,{target:"_blank",href:"/rss.xml",variant:"contained",color:"primary",endIcon:Object(r.jsx)(b.a,{}),className:t.rss,children:"RSS"})]})]})},w=n("GoYp"),D=n("7G+9"),O=Object(d.a)((function(){return{body:{"& img":{width:"100%"}}}})),x=function(e){var t=e.post,n=e.url,a=t.title,i=t.body,l=t.publishDate,u=t.description,s=l&&o()(new Date(l),"longDate"),d=O(),m=c()(i,{components:D.a});return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(w.a,{title:a}),Object(r.jsx)(h.a,{variant:"overline",children:s}),Object(r.jsx)(h.a,{variant:"body1",align:"justify",className:d.body,children:m}),Object(r.jsx)(M,{url:n,title:a,description:u})]})},T=n("nQb1"),C=n("30+C"),k=n("oa/T"),E=Object(d.a)((function(e){return Object(m.a)({teaserpost:{marginBlockStart:e.spacing(2),marginBlockEnd:e.spacing(0)}})})),N=function(e){var t=e.post,n=E(),a=t.title,i=t.slug,l=t.description,u=t.publishDate,s=u&&o()(new Date(u),"longDate"),d=c()(l,{components:D.a});return Object(r.jsx)(C.a,{className:n.teaserpost,elevation:0,children:Object(r.jsxs)(k.a,{children:[Object(r.jsx)(h.a,{variant:"h5",component:"h2",children:Object(r.jsx)(T.b,{href:"posts/".concat(i),children:a})}),Object(r.jsx)(h.a,{variant:"overline",children:s}),Object(r.jsx)(h.a,{variant:"body1",align:"justify",gutterBottom:!0,children:d}),Object(r.jsx)(h.a,{variant:"body2",align:"justify",children:Object(r.jsx)(T.b,{href:"posts/".concat(i),children:"Read More"})})]})})}},qlJ3:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");t.default=i},ubkq:function(e,t,n){"use strict";var r;function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(o){var i=arguments,c=function(){var e=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LlopSZWN]|"[^"]*"|'[^']*'/g,t=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,n=/[^-+\dA-Z]/g;return function(r,a,o,f){if(1!==i.length||"string"!==m(r)||/\d/.test(r)||(a=r,r=void 0),(r=r||0===r?r:new Date)instanceof Date||(r=new Date(r)),isNaN(r))throw TypeError("Invalid date");var h=(a=String(c.masks[a]||a||c.masks.default)).slice(0,4);"UTC:"!==h&&"GMT:"!==h||(a=a.slice(4),o=!0,"GMT:"===h&&(f=!0));var y=function(){return o?"getUTC":"get"},p=function(){return r[y()+"Date"]()},b=function(){return r[y()+"Day"]()},v=function(){return r[y()+"Month"]()},g=function(){return r[y()+"FullYear"]()},j=function(){return r[y()+"Hours"]()},M=function(){return r[y()+"Minutes"]()},w=function(){return r[y()+"Seconds"]()},D=function(){return r[y()+"Milliseconds"]()},O=function(){return o?0:r.getTimezoneOffset()},x={d:function(){return p()},dd:function(){return l(p())},ddd:function(){return c.i18n.dayNames[b()]},DDD:function(){return u({y:g(),m:v(),D:b(),_:y(),dayName:c.i18n.dayNames[b()],short:!0})},dddd:function(){return c.i18n.dayNames[b()+7]},DDDD:function(){return u({y:g(),m:v(),D:b(),_:y(),dayName:c.i18n.dayNames[b()+7]})},m:function(){return v()+1},mm:function(){return l(v()+1)},mmm:function(){return c.i18n.monthNames[v()]},mmmm:function(){return c.i18n.monthNames[v()+12]},yy:function(){return String(g()).slice(2)},yyyy:function(){return l(g(),4)},h:function(){return j()%12||12},hh:function(){return l(j()%12||12)},H:function(){return j()},HH:function(){return l(j())},M:function(){return M()},MM:function(){return l(M())},s:function(){return w()},ss:function(){return l(w())},l:function(){return l(D(),3)},L:function(){return l(Math.floor(D()/10))},t:function(){return j()<12?c.i18n.timeNames[0]:c.i18n.timeNames[1]},tt:function(){return j()<12?c.i18n.timeNames[2]:c.i18n.timeNames[3]},T:function(){return j()<12?c.i18n.timeNames[4]:c.i18n.timeNames[5]},TT:function(){return j()<12?c.i18n.timeNames[6]:c.i18n.timeNames[7]},Z:function(){return f?"GMT":o?"UTC":(String(r).match(t)||[""]).pop().replace(n,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(O()>0?"-":"+")+l(100*Math.floor(Math.abs(O())/60)+Math.abs(O())%60,4)},p:function(){return(O()>0?"-":"+")+l(Math.floor(Math.abs(O())/60),2)+":"+l(Math.floor(Math.abs(O())%60),2)},S:function(){return["th","st","nd","rd"][p()%10>3?0:(p()%100-p()%10!=10)*p()%10]},W:function(){return s(r)},N:function(){return d(r)}};return a.replace(e,(function(e){return e in x?x[e]():e.slice(1,e.length-1)}))}}();c.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},c.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var l=function(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e},u=function(e){var t=e.y,n=e.m,r=e.D,a=e._,o=e.dayName,i=e.short,c=void 0!==i&&i,l=new Date,u=new Date;u.setDate(u[a+"Date"]()-1);var s=new Date;s.setDate(s[a+"Date"]()+1);return l[a+"FullYear"]()===t&&l[a+"Month"]()===n&&l[a+"Day"]()===r?c?"Tdy":"Today":u[a+"FullYear"]()===t&&u[a+"Month"]()===n&&u[a+"Day"]()===r?c?"Ysd":"Yesterday":s[a+"FullYear"]()===t&&s[a+"Month"]()===n&&s[a+"Day"]()===r?c?"Tmw":"Tomorrow":o},s=function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=t.getTimezoneOffset()-n.getTimezoneOffset();t.setHours(t.getHours()-r);var a=(t-n)/6048e5;return 1+Math.floor(a)},d=function(e){var t=e.getDay();return 0===t&&(t=7),t},m=function(e){return null===e?"null":void 0===e?"undefined":"object"!==a(e)?a(e):Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()};void 0===(r=function(){return c}.call(t,n,t,e))||(e.exports=r)}(void 0)}}]);