_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"174Y":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("/MKj"),o=n("dY6d"),u=a.a.createElement;function l(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){u=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(u)throw i}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=function(e){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){var n=new ResizeObserver((function(t){var n,r=l(t);try{for(r.s();!(n=r.n()).done;){var a=n.value;e.setHeight(a.contentRect.height)}}catch(i){r.e(i)}finally{r.f()}}));return t.current&&(e.mute&&(t.current.muted=!0),t.current.srcObject=e.stream,n.observe(t.current)),function(){n.disconnect()}}),[]),u("video",{autoPlay:!0,playsInline:!0,controls:!0,ref:t})},m=a.a.memo((function(e){return u(s,e)}));t.a=function(){var e=Object(r.useState)(0),t=e[0],n=e[1],a=Object(i.c)((function(e){return e})),l=a.immutable,c=a.mute,s=a.spotlightConnectionIds,f=l.remoteMediaStreams;return u("div",{className:"row mt-2"},f.map((function(e){return u("div",{key:e.id,className:"col-auto"},u("p",{className:"mb-1"},e.id,e.id in s?" [".concat(s[e.id],"]"):""),u(m,{stream:e,setHeight:n,mute:c}),u(o.a,{stream:e,height:t}))})))}},"WAt/":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("/MKj"),o=n("O9IJ"),u=n("PVSu"),l=n("Yp9Q"),c=n("OzbX"),s=n("9u5D"),m=n("jrVH"),f=n("XJ9X"),d=n("174Y"),b=n("T+WR"),v=a.a.createElement,h={enabledAudio:!0,enabledAudioBitRate:!0,enabledAudioCodecType:!0,enabledAudioInput:!0,enabledAudioOutput:!0,enabledAutoGainControl:!0,enabledChannelId:!0,enabledCpuOveruseDetection:!0,enabledEchoCancellation:!0,enabledEchoCancellationType:!0,enabledFake:!0,enabledFrameRate:!0,enabledGetDisplayMedia:!0,enabledNoiseSuppression:!0,enabledResolution:!0,enabledSimulcastQuality:!0,enabledVideo:!0,enabledVideoBitRate:!0,enabledVideoCodecType:!0,enabledVideoInput:!0};t.default=function(){var e=Object(i.b)();return Object(r.useEffect)((function(){return e(Object(b.F)("VP8")),e(Object(b.E)("3000")),e(Object(b.z)("HD")),e(Object(b.w)(h)),e(Object(b.x)()),function(){e(Object(b.b)())}}),[]),v(a.a.Fragment,null,v(s.a,{title:"multi simulcast sendrecv"}),v(m.a,{pageName:"multi simulcast sendrecv"}),v("main",{role:"main"},v("div",{className:"container"},v("div",{className:"row"},v(l.a,null,v(o.a,null),v(c.a,{connectType:"sendrecv",connectOptionMultistream:!0,connectOptionSimulcast:!0}),v(f.a,null),v(d.a,null)),v(u.a,null)))))}},XJ9X:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("/MKj"),o=a.a.createElement,u=function(e){return e.mute?o("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-camera-video-off-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M1.429 3.55A1.66 1.66 0 0 0 1 4.667v6.666C1 12.253 1.746 13 2.667 13h6.666c.43 0 .821-.162 1.117-.429l-9.02-9.02zm13.111 8.868a.798.798 0 0 0 .46-.726V4.308c0-.63-.693-1.01-1.233-.696L11 5.218v-.551C11 3.747 10.254 3 9.333 3H5.121l9.419 9.418z"}),o("path",{fillRule:"evenodd",d:"M13.646 14.354l-12-12 .708-.708 12 12-.708.707z"})):o("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-camera-video-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M2.667 3h6.666C10.253 3 11 3.746 11 4.667v6.666c0 .92-.746 1.667-1.667 1.667H2.667C1.747 13 1 12.254 1 11.333V4.667C1 3.747 1.746 3 2.667 3z"}),o("path",{d:"M7.404 8.697l6.363 3.692c.54.313 1.233-.066 1.233-.697V4.308c0-.63-.693-1.01-1.233-.696L7.404 7.304a.802.802 0 0 0 0 1.393z"}))},l=a.a.createElement,c=function(e){return e.mute?l("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-mic-mute-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l("path",{fillRule:"evenodd",d:"M12.734 9.613A4.995 4.995 0 0 0 13 8V7a.5.5 0 0 0-1 0v1c0 .274-.027.54-.08.799l.814.814zm-2.522 1.72A4 4 0 0 1 4 8V7a.5.5 0 0 0-1 0v1a5 5 0 0 0 4.5 4.975V15h-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-3v-2.025a4.973 4.973 0 0 0 2.43-.923l-.718-.719zM11 7.88V3a3 3 0 0 0-5.842-.963L11 7.879zM5 6.12l4.486 4.486A3 3 0 0 1 5 8V6.121zm8.646 7.234l-12-12 .708-.708 12 12-.708.707z"})):l("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-mic-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"}),l("path",{fillRule:"evenodd",d:"M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"}))},s=n("T+WR"),m=a.a.createElement,f=function(){var e=Object(i.b)();return m("input",{className:"btn btn-secondary btn-sm mb-1 mx-1",type:"button",name:"camera",defaultValue:"camera on/off",onClick:function(t){e(Object(s.H)()),t.currentTarget.blur()}})},d=a.a.createElement,b=function(){var e=Object(i.b)();return d("input",{className:"btn btn-secondary btn-sm mb-1 mx-1",type:"button",name:"mic",defaultValue:"mic on/off",onClick:function(t){e(Object(s.I)()),t.currentTarget.blur()}})},v=n("dY6d"),h=a.a.createElement;function p(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){u=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(u)throw i}}}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var w=function(){var e=Object(i.c)((function(e){return e})).fakeVolume,t=Object(i.b)();return h("div",null,h("input",{className:"fake-volume-range",type:"range",min:"0",max:"1",step:"0.01",value:e,onChange:function(e){t(Object(s.t)(e.target.value))}}))},g=function(e){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){var n=new ResizeObserver((function(t){var n,r=p(t);try{for(r.s();!(n=r.n()).done;){var a=n.value;e.setHeight(a.contentRect.height)}}catch(i){r.e(i)}finally{r.f()}}));return t.current&&n.observe(t.current),function(){n.disconnect()}}),[]),Object(r.useEffect)((function(){t.current&&(t.current.srcObject=e.stream)}),[e.stream]),h("video",{id:"local-video",autoPlay:!0,playsInline:!0,controls:!0,muted:!0,ref:t})},O=a.a.memo((function(e){return h(g,e)}));t.a=function(){var e=Object(r.useState)(0),t=e[0],n=e[1],a=Object(i.c)((function(e){return e})),o=a.enabledMic,l=a.enabledCamera,s=a.immutable,m=a.fake,d=s.sora,p=s.localMediaStream;return h("div",{className:"row mt-2"},h("div",{className:"col-auto"},null!==p&&h("div",{className:"video-status"},h("p",{id:"client-id"},d&&d.clientId),h("p",{id:"audio-video-status",className:"mx-1"},h(c,{mute:!o})," / ",h(u,{mute:!l})),h(b,null),h(f,null)),h(O,{stream:p,setHeight:n}),null!==p&&h(v.a,{stream:p,height:t}),m&&h(w,null)))}},faBC:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/multi_simulcast_sendrecv",function(){return n("WAt/")}])}},[["faBC",0,2,1,3,4,5]]]);