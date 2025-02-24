System.register(["./main-legacy-Bp3TS2do.js","./index3-legacy-DJUf5il1.js"],(function(e,t){"use strict";var n,r,s;return{setters:[e=>{n=e.v,r=e.x},e=>{s=e.createGesture}],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
e("createSwipeBackGesture",((e,t,i,c,a)=>{const o=e.ownerDocument.defaultView;let u=n(e);const l=e=>u?-e.deltaX:e.deltaX;return s({el:e,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:r=>(u=n(e),(e=>{const{startX:t}=e;return u?t>=o.innerWidth-50:t<=50})(r)&&t()),onStart:i,onMove:e=>{const t=l(e)/o.innerWidth;c(t)},onEnd:e=>{const t=l(e),n=o.innerWidth,s=t/n,i=(e=>u?-e.velocityX:e.velocityX)(e),c=i>=0&&(i>.2||t>n/2),d=(c?1-s:s)*n;let h=0;if(d>5){const e=d/Math.abs(i);h=Math.min(e,540)}a(c,s<=0?.01:r(0,s,.9999),h)}})}))}}}));
