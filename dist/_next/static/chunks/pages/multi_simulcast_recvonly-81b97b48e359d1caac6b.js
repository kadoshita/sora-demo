_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"174Y":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("/MKj"),u=n("dY6d"),i=a.a.createElement;function c(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){i=!0,o=e},f:function(){try{u||null==n.return||n.return()}finally{if(i)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=function(e){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){var n=new ResizeObserver((function(t){var n,r=c(t);try{for(r.s();!(n=r.n()).done;){var a=n.value;e.setHeight(a.contentRect.height)}}catch(o){r.e(o)}finally{r.f()}}));return t.current&&(e.mute&&(t.current.muted=!0),t.current.srcObject=e.stream,n.observe(t.current)),function(){n.disconnect()}}),[]),i("video",{autoPlay:!0,playsInline:!0,controls:!0,ref:t})},f=a.a.memo((function(e){return i(s,e)}));t.a=function(){var e=Object(r.useState)(0),t=e[0],n=e[1],a=Object(o.c)((function(e){return e})),c=a.immutable,l=a.mute,s=a.spotlightConnectionIds,m=c.remoteMediaStreams;return i("div",{className:"row mt-2"},m.map((function(e){return i("div",{key:e.id,className:"col-auto"},i("p",{className:"mb-1"},e.id,e.id in s?" [".concat(s[e.id],"]"):""),i(f,{stream:e,setHeight:n,mute:l}),i(u.a,{stream:e,height:t}))})))}},oB9i:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("/MKj"),u=n("O9IJ"),i=n("PVSu"),c=n("Yp9Q"),l=n("OzbX"),s=n("9u5D"),f=n("jrVH"),m=n("174Y"),d=n("T+WR"),b=a.a.createElement,y={enabledAudio:!0,enabledAudioCodecType:!0,enabledAudioOutput:!0,enabledChannelId:!0,enabledSimulcastQuality:!0,enabledVideo:!0,enabledVideoCodecType:!0};t.default=function(){var e=Object(o.b)();return Object(r.useEffect)((function(){return e(Object(d.F)("VP8")),e(Object(d.w)(y)),e(Object(d.x)()),function(){e(Object(d.b)())}}),[]),b(a.a.Fragment,null,b(s.a,{title:"multi simulcast recvonly"}),b(f.a,{pageName:"multi simulcast recvonly"}),b("main",{role:"main"},b("div",{className:"container"},b("div",{className:"row"},b(c.a,null,b(u.a,null),b(l.a,{connectType:"recvonly",connectOptionMultistream:!0,connectOptionSimulcast:!0}),b(m.a,null)),b(i.a,null)))))}},wYWy:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/multi_simulcast_recvonly",function(){return n("oB9i")}])}},[["wYWy",0,2,1,3,4,5]]]);