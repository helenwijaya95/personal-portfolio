(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{272:function(e,t,o){"use strict";o.r(t);var n=o(97),r=(o(28),o(24)),f=o(136),c=o(137),l=(o(44),o(51)),d={x:0,y:0};window.addEventListener("mousemove",(function(e){return d={x:(t=e).clientX,y:t.clientY};var t}));var m=function(){function e(t){var o=this;Object(f.a)(this,e),this.DOM={el:t},this.DOM.lines=this.DOM.el.children;var n=Object(r.a)(this.DOM.lines,2);this.DOM.lineHorizontal=n[0],this.DOM.lineVertical=n[1],l.b.set(this.DOM.lines,{opacity:0}),this.renderedStyles={tx:{previous:0,current:0,amt:.15},ty:{previous:0,current:0,amt:.15}},this.onMouseMoveEv=function(){o.renderedStyles.tx.previous=o.renderedStyles.tx.current=d.x,o.renderedStyles.ty.previous=o.renderedStyles.ty.previous=d.y,l.b.to(o.DOM.lines,{duration:.9,ease:"Power3.easeOut",opacity:1}),requestAnimationFrame((function(){return o.render()})),window.removeEventListener("mousemove",o.onMouseMoveEv)},window.addEventListener("mousemove",this.onMouseMoveEv),this.filterId={x:"#filter-noise-x",y:"#filter-noise-y"},this.DOM.feTurbulence={x:document.querySelector("".concat(this.filterId.x," > feTurbulence")),y:document.querySelector("".concat(this.filterId.y," > feTurbulence"))},this.primitiveValues={turbulence:0},this.createNoiseTimeline()}return Object(c.a)(e,[{key:"enter",value:function(){this.tl.restart()}},{key:"leave",value:function(){this.tl.progress(1).kill()}},{key:"createNoiseTimeline",value:function(){var e=this;this.tl=l.b.timeline({paused:!0,onStart:function(){e.DOM.lineHorizontal.style.filter="url(".concat(e.filterId.x),e.DOM.lineVertical.style.filter="url(".concat(e.filterId.y)},onUpdate:function(){e.DOM.feTurbulence.x.setAttribute("baseFrequency",e.primitiveValues.turbulence),e.DOM.feTurbulence.y.setAttribute("baseFrequency",e.primitiveValues.turbulence)},onComplete:function(){e.DOM.lineHorizontal.style.filter=e.DOM.lineVertical.style.filter="none"}}).to(this.primitiveValues,{duration:.5,ease:"power1",startAt:{turbulence:1},turbulence:0})}},{key:"render",value:function(){var a,b,e,t=this;for(var o in this.renderedStyles.tx.current=d.x,this.renderedStyles.ty.current=d.y,this.renderedStyles)this.renderedStyles[o].previous=(a=this.renderedStyles[o].previous,b=this.renderedStyles[o].current,(1-(e=this.renderedStyles[o].amt))*a+e*b);l.b.set(this.DOM.lineVertical,{x:this.renderedStyles.tx.previous}),l.b.set(this.DOM.lineHorizontal,{y:this.renderedStyles.ty.previous}),requestAnimationFrame((function(){return t.render()}))}}]),e}(),v={name:"CrossCursor",mounted:function(){document&&this.addMouseEffect()},methods:{addMouseEffect:function(){var cursor=new m(document.querySelector(".cursor"));Object(n.a)(document.querySelectorAll("a")).forEach((function(link){link.addEventListener("mouseenter",(function(){return cursor.enter()})),link.addEventListener("mouseleave",(function(){return cursor.leave()}))}))}},destroy:function(){window.removeEventListener("mouseenter",(function(){return cursor.enter()})),window.removeEventListener("mouseleave",(function(){return cursor.enter()}))}},x=(o(292),o(27)),component=Object(x.a)(v,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"cursor"},[o("svg",{staticClass:"cursor__line cursor__line--horizontal",attrs:{viewBox:"0 0 200 20",preserveAspectRatio:"none"}},[o("defs",[o("filter",{attrs:{id:"filter-noise-x",x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox"}},[o("feTurbulence",{attrs:{type:"fractalNoise",baseFrequency:"0",numOctaves:"1",result:"warp"}}),e._v(" "),o("feOffset",{attrs:{dx:"-30",result:"warpOffset"}}),e._v(" "),o("feDisplacementMap",{attrs:{xChannelSelector:"R",yChannelSelector:"G",scale:"30",in:"SourceGraphic",in2:"warpOffset"}})],1)]),e._v(" "),o("line",{staticClass:"cursor__line-element",attrs:{x1:"0",y1:"10",x2:"200",y2:"10","shape-rendering":"crispEdges","vector-effect":"non-scaling-stroke"}})]),e._v(" "),o("svg",{staticClass:"cursor__line cursor__line--vertical",attrs:{viewBox:"0 0 20 200",preserveAspectRatio:"none"}},[o("defs",[o("filter",{attrs:{id:"filter-noise-y",x:"-50%",y:"-50%",width:"200%",height:"200%",filterUnits:"objectBoundingBox"}},[o("feTurbulence",{attrs:{type:"fractalNoise",baseFrequency:"0",numOctaves:"1",result:"warp"}}),e._v(" "),o("feOffset",{attrs:{dy:"-30",result:"warpOffset"}}),e._v(" "),o("feDisplacementMap",{attrs:{xChannelSelector:"R",yChannelSelector:"G",scale:"30",in:"SourceGraphic",in2:"warpOffset"}})],1)]),e._v(" "),o("line",{staticClass:"cursor__line-element",attrs:{x1:"10",y1:"0",x2:"10",y2:"200","shape-rendering":"crispEdges","vector-effect":"non-scaling-stroke"}})])])}),[],!1,null,"6ceacf1f",null);t.default=component.exports},285:function(e,t,o){var content=o(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(31).default)("14e3ec94",content,!0,{sourceMap:!1})},292:function(e,t,o){"use strict";o(285)},293:function(e,t,o){var n=o(30),r=o(101),f=o(102),c=n(!1),l=r(f);c.push([e.i,"@-webkit-keyframes slide-in-left-data-v-6ceacf1f{0%{-webkit-transform:translateX(-100px);transform:translateX(-100px);opacity:0}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@-o-keyframes slide-in-left-data-v-6ceacf1f{0%{-webkit-transform:translateX(-100px);-o-transform:translateX(-100px);transform:translateX(-100px);opacity:0}to{-webkit-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0);opacity:1}}@-webkit-keyframes slide-in-right-data-v-6ceacf1f{0%{-webkit-transform:translateX(100px);transform:translateX(100px);opacity:0}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@-o-keyframes slide-in-right-data-v-6ceacf1f{0%{-webkit-transform:translateX(100px);-o-transform:translateX(100px);transform:translateX(100px);opacity:0}to{-webkit-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0);opacity:1}}@-webkit-keyframes fade-in-bottom-data-v-6ceacf1f{0%{-webkit-transform:translateY(50px);transform:translateY(50px);opacity:0}to{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@-o-keyframes fade-in-bottom-data-v-6ceacf1f{0%{-webkit-transform:translateY(50px);-o-transform:translateY(50px);transform:translateY(50px);opacity:0}to{-webkit-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);opacity:1}}@-webkit-keyframes fade-in-data-v-6ceacf1f{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in-data-v-6ceacf1f{0%{opacity:0}to{opacity:1}}#falling-leaves[data-v-6ceacf1f]{position:relative;z-index:3}#falling-leaves>.dot[data-v-6ceacf1f]{width:35px;height:35px;position:absolute;background:url("+l+');-webkit-background-size:100% 100%;background-size:100% 100%}@-webkit-keyframes loaderAnim-data-v-6ceacf1f{to{opacity:1;-webkit-transform:scale3d(.5,.5,1);transform:scale3d(.5,.5,1)}}@-o-keyframes loaderAnim-data-v-6ceacf1f{to{opacity:1;transform:scale3d(.5,.5,1)}}.js-scroll[data-v-6ceacf1f]{opacity:0;-webkit-transition:opacity .5s;-o-transition:opacity .5s;transition:opacity .5s}.js-scroll.scrolled[data-v-6ceacf1f]{opacity:1}.scrolled.fade-in[data-v-6ceacf1f]{-webkit-animation:fade-in-data-v-6ceacf1f 1s ease-in-out both;-o-animation:fade-in-data-v-6ceacf1f 1s ease-in-out both;animation:fade-in-data-v-6ceacf1f 1s ease-in-out both}.scrolled.fade-in-bottom[data-v-6ceacf1f]{-webkit-animation:fade-in-bottom-data-v-6ceacf1f 1s ease-in-out both;-o-animation:fade-in-bottom-data-v-6ceacf1f 1s ease-in-out both;animation:fade-in-bottom-data-v-6ceacf1f 1s ease-in-out both}.scrolled.slide-left[data-v-6ceacf1f]{-webkit-animation:slide-in-left-data-v-6ceacf1f 1s ease-in-out both;-o-animation:slide-in-left-data-v-6ceacf1f 1s ease-in-out both;animation:slide-in-left-data-v-6ceacf1f 1s ease-in-out both}.scrolled.slide-right[data-v-6ceacf1f]{-webkit-animation:slide-in-right-data-v-6ceacf1f 1s ease-in-out both;-o-animation:slide-in-right-data-v-6ceacf1f 1s ease-in-out both;animation:slide-in-right-data-v-6ceacf1f 1s ease-in-out both}@keyframes slide-in-left-data-v-6ceacf1f{0%{-webkit-transform:translateX(-100px);-o-transform:translateX(-100px);transform:translateX(-100px);opacity:0}to{-webkit-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes slide-in-right-data-v-6ceacf1f{0%{-webkit-transform:translateX(100px);-o-transform:translateX(100px);transform:translateX(100px);opacity:0}to{-webkit-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes fade-in-bottom-data-v-6ceacf1f{0%{-webkit-transform:translateY(50px);-o-transform:translateY(50px);transform:translateY(50px);opacity:0}to{-webkit-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fade-in-data-v-6ceacf1f{0%{opacity:0}to{opacity:1}}body[data-v-6ceacf1f]{background-color:#f0f0f0;-webkit-background-size:cover;background-size:cover;padding:0;font-family:"Dosis",helvetica,arial,tahoma,verdana;line-height:20px;font-size:14px;color:#000;overflow-x:hidden}.container[data-v-6ceacf1f]{padding:20px;min-height:calc(100vh - 117px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow:hidden}section[data-v-6ceacf1f]{margin-top:25px}h1[data-v-6ceacf1f],h2[data-v-6ceacf1f],h3[data-v-6ceacf1f],h4[data-v-6ceacf1f]{font-family:"Dosis",helvetica,arial,tahoma,verdana;margin-bottom:20px;font-weight:600;line-height:1.5}h2[data-v-6ceacf1f]{font-size:2em}h3[data-v-6ceacf1f]{font-size:1.5em}p[data-v-6ceacf1f]{font-family:"Dosis",helvetica,arial,tahoma,verdana;margin-bottom:15px;font-size:18px}a[data-v-6ceacf1f]{text-decoration:underline;color:#d03939}a[data-v-6ceacf1f],a[data-v-6ceacf1f]:hover{outline:none}a[data-v-6ceacf1f]:hover{color:#000}strong[data-v-6ceacf1f]{color:#d03939;font-weight:600}ul[data-v-6ceacf1f]{text-align:left;margin:20px 0;font-size:18px;list-style:none}ul li[data-v-6ceacf1f]{line-height:1.5}ul li[data-v-6ceacf1f]:before{content:"\\25AA";color:#d03939;font-weight:700;display:inline-block;width:1em;margin-left:-1em}#__layout[data-v-6ceacf1f]{overflow-y:hidden}.page-title[data-v-6ceacf1f]{font-family:"Press Start 2P",arial,tahoma,verdana;font-size:25px}.inner-container[data-v-6ceacf1f]{padding:20px;min-height:calc(100vh - 117px);overflow:hidden;max-width:1100px;margin:0 auto}.underline[data-v-6ceacf1f]{text-decoration:underline}.action-link[data-v-6ceacf1f]{position:relative;text-decoration:none;margin-left:20px}.action-link[data-v-6ceacf1f]:after{content:"";width:0;height:2px;border-top-left-radius:50%;border-bottom-left-radius:50%;background:#d03939;position:absolute;left:0;bottom:-5px;-webkit-transition:width .3s ease-in-out;-o-transition:width .3s ease-in-out;transition:width .3s ease-in-out}.action-link[data-v-6ceacf1f]:before{content:"";width:25px;height:25px;position:absolute;left:-25px;bottom:-7px;background:url('+l+");-webkit-background-size:100% 100%;background-size:100% 100%;width:30px;-webkit-animation:MoveRotate1-data-v-6ceacf1f 1.2s linear infinite;-o-animation:MoveRotate1-data-v-6ceacf1f 1.2s linear infinite;animation:MoveRotate1-data-v-6ceacf1f 1.2s linear infinite;-webkit-transition:bottom .1s ease-in;-o-transition:bottom .1s ease-in;transition:bottom .1s ease-in;-webkit-transform:rotate(-180);-ms-transform:rotate(-180);-o-transform:rotate(-180);transform:rotate(-180)}.action-link[data-v-6ceacf1f]:hover{color:#000}.action-link[data-v-6ceacf1f]:hover:after{width:105%}.action-link[data-v-6ceacf1f]:hover:before{bottom:-10px}.fade-enter-active[data-v-6ceacf1f],.fade-leave-active[data-v-6ceacf1f]{-webkit-transition:opacity .2s;-o-transition:opacity .2s;transition:opacity .2s}.fade-enter[data-v-6ceacf1f],.fade-leave-to[data-v-6ceacf1f]{opacity:0}.slide-enter-active[data-v-6ceacf1f]{-webkit-transition:.3s ease-in;-o-transition:.3s ease-in;transition:.3s ease-in}.slide-leave-active[data-v-6ceacf1f]{-webkit-transition-duration:.3s cubic-bezier(0,1,.5,1);-o-transition-duration:.3s cubic-bezier(0,1,.5,1);transition-duration:.3s cubic-bezier(0,1,.5,1)}.slide-enter-to[data-v-6ceacf1f],.slide-leave[data-v-6ceacf1f]{max-height:100px;overflow:hidden}.slide-enter[data-v-6ceacf1f],.slide-leave-to[data-v-6ceacf1f]{overflow:hidden;max-height:0}.distortion-text .leaf-bg[data-v-6ceacf1f]{background:url("+l+');-webkit-background-size:100% 100%;background-size:100% 100%;width:30px;height:30px;position:absolute;-webkit-animation:MoveRotate1-data-v-6ceacf1f 1.2s linear infinite;-o-animation:MoveRotate1-data-v-6ceacf1f 1.2s linear infinite;animation:MoveRotate1-data-v-6ceacf1f 1.2s linear infinite}.distortion-text .leaf-bg.right[data-v-6ceacf1f]{bottom:-5px;right:-16px}.distortion-text .leaf-bg.center[data-v-6ceacf1f]{bottom:-5px;right:-18px;width:24px;height:24px;-webkit-transform:rotate(-75deg);-ms-transform:rotate(-75deg);-o-transform:rotate(-75deg);transform:rotate(-75deg);-webkit-animation:MoveRotate3-data-v-6ceacf1f .7s linear infinite;-o-animation:MoveRotate3-data-v-6ceacf1f .7s linear infinite;animation:MoveRotate3-data-v-6ceacf1f .7s linear infinite}.distortion-text .leaf-bg.left[data-v-6ceacf1f]{top:-33px;left:-3px;-webkit-transform:rotate(-68deg);-ms-transform:rotate(-68deg);-o-transform:rotate(-68deg);transform:rotate(-68deg);-webkit-background-size:100% 100%;background-size:100% 100%;-webkit-animation:MoveRotate2-data-v-6ceacf1f 1s linear infinite;-o-animation:MoveRotate2-data-v-6ceacf1f 1s linear infinite;animation:MoveRotate2-data-v-6ceacf1f 1s linear infinite}.distortion-text.is-small .leaf-bg[data-v-6ceacf1f]{width:22px;height:22px}.distortion-text.is-small .leaf-bg.right[data-v-6ceacf1f]{bottom:-16px}.distortion-text.is-small .leaf-bg.center[data-v-6ceacf1f]{width:20px;height:20px;bottom:-6px}.distortion-text.is-small .leaf-bg.left[data-v-6ceacf1f]{top:-23px}.page-title[data-v-6ceacf1f]{margin-bottom:30px;text-align:center}@-webkit-keyframes MoveRotate1-data-v-6ceacf1f{0%,to{-webkit-transform:skew(2deg,2deg);transform:skew(2deg,2deg)}50%{-webkit-transform:rotate(15deg) skew(3deg,3deg);transform:rotate(15deg) skew(3deg,3deg)}}@-o-keyframes MoveRotate1-data-v-6ceacf1f{0%,to{-o-transform:skew(2deg,2deg);transform:skew(2deg,2deg)}50%{-o-transform:rotate(15deg) skew(3deg,3deg);transform:rotate(15deg) skew(3deg,3deg)}}@keyframes MoveRotate1-data-v-6ceacf1f{0%,to{-webkit-transform:skew(2deg,2deg);-o-transform:skew(2deg,2deg);transform:skew(2deg,2deg)}50%{-webkit-transform:rotate(15deg) skew(3deg,3deg);-o-transform:rotate(15deg) skew(3deg,3deg);transform:rotate(15deg) skew(3deg,3deg)}}@-webkit-keyframes MoveRotate2-data-v-6ceacf1f{0%,to{-webkit-transform:rotate(-68deg);transform:rotate(-68deg)}50%{-webkit-transform:rotate(-80deg);transform:rotate(-80deg)}}@-o-keyframes MoveRotate2-data-v-6ceacf1f{0%,to{-o-transform:rotate(-68deg);transform:rotate(-68deg)}50%{-o-transform:rotate(-80deg);transform:rotate(-80deg)}}@keyframes MoveRotate2-data-v-6ceacf1f{0%,to{-webkit-transform:rotate(-68deg);-o-transform:rotate(-68deg);transform:rotate(-68deg)}50%{-webkit-transform:rotate(-80deg);-o-transform:rotate(-80deg);transform:rotate(-80deg)}}@-webkit-keyframes MoveRotate3-data-v-6ceacf1f{0%,to{-webkit-transform:rotate(-50deg);transform:rotate(-50deg)}50%{-webkit-transform:rotate(-35deg);transform:rotate(-35deg)}}@-o-keyframes MoveRotate3-data-v-6ceacf1f{0%,to{-o-transform:rotate(-50deg);transform:rotate(-50deg)}50%{-o-transform:rotate(-35deg);transform:rotate(-35deg)}}@keyframes MoveRotate3-data-v-6ceacf1f{0%,to{-webkit-transform:rotate(-50deg);-o-transform:rotate(-50deg);transform:rotate(-50deg)}50%{-webkit-transform:rotate(-35deg);-o-transform:rotate(-35deg);transform:rotate(-35deg)}}body[data-v-6ceacf1f]{margin:0;--color-text:#111;--color-bg:#f0f0f0;--color-link:#d03939;--color-link-hover:#000;--color-menu:#000;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--cursor-stroke:#525252;--cursor-stroke-width:1px}.js .loading[data-v-6ceacf1f]:after,.js .loading[data-v-6ceacf1f]:before{content:"";position:fixed;z-index:1000}.js .loading[data-v-6ceacf1f]:before{top:0;left:0;width:100%;height:100%;background:var(--color-bg)}.js .loading[data-v-6ceacf1f]:after{top:50%;left:50%;width:60px;height:60px;margin:-30px 0 0 -30px;border-radius:50%;opacity:.4;background:var(--color-link);-webkit-animation:loaderAnim-data-v-6ceacf1f .7s linear infinite alternate forwards;-o-animation:loaderAnim-data-v-6ceacf1f .7s linear infinite alternate forwards;animation:loaderAnim-data-v-6ceacf1f .7s linear infinite alternate forwards}@keyframes loaderAnim-data-v-6ceacf1f{to{opacity:1;-webkit-transform:scale3d(.5,.5,1);transform:scale3d(.5,.5,1)}}a[data-v-6ceacf1f]:focus{outline:none;background:#d3d3d3}a[data-v-6ceacf1f]:focus:not(.focus-visible),a[data-v-6ceacf1f]:focus:not(:focus-visible){background:rgba(0,0,0,0)}a.focus-visible[data-v-6ceacf1f],a[data-v-6ceacf1f]:focus-visible{outline:2px solid red;background:rgba(0,0,0,0)}.unbutton[data-v-6ceacf1f]{background:none;border:0;padding:0;margin:0;font:inherit}.unbutton[data-v-6ceacf1f]:focus{outline:none}.frame[data-v-6ceacf1f]{padding:3rem 5vw;text-align:center;position:relative;z-index:1000}.frame__title[data-v-6ceacf1f]{font-size:1rem;margin:0 0 1rem;font-weight:400}.frame__links[data-v-6ceacf1f]{display:inline}.frame__demos a[data-v-6ceacf1f]:not(:last-child),.frame__links a[data-v-6ceacf1f]:not(:last-child){margin-right:1rem}.frame__demos[data-v-6ceacf1f]{margin:1rem 0}.frame__demo--current[data-v-6ceacf1f],.frame__demo--current[data-v-6ceacf1f]:hover{color:var(--color-text)}.menu[data-v-6ceacf1f]{text-align:center;padding-top:10vh}.menu__item[data-v-6ceacf1f]{display:inline-block;margin-bottom:3rem;text-decoration:none;color:var(--color-menu);font-family:vortice-concept,sans-serif}.menu__item-title[data-v-6ceacf1f]{line-height:1;font-size:8vw}.menu__item-sub[data-v-6ceacf1f]{font-size:1.5vw;display:block}@media screen and (min-width:53em){.frame[data-v-6ceacf1f]{position:fixed;text-align:left;z-index:100;top:0;left:0;display:grid;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;width:100%;max-width:none;height:100vh;padding:1.5rem 2rem;pointer-events:none;grid-template-columns:75% 25%;grid-template-rows:auto auto auto;grid-template-areas:"title links" "... ..." "... demos"}.frame__title-wrap[data-v-6ceacf1f]{grid-area:title;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.frame__title[data-v-6ceacf1f]{margin:0}.frame__tagline[data-v-6ceacf1f]{position:relative;margin:0 0 0 1rem;padding:0 0 0 1rem;opacity:.5}.frame__demos[data-v-6ceacf1f]{margin:0;grid-area:demos;justify-self:end}.frame__links[data-v-6ceacf1f]{grid-area:links;padding:0;justify-self:end}.frame a[data-v-6ceacf1f]{pointer-events:auto}.menu[data-v-6ceacf1f]{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}}#timeline .timeline-item .timeline-box[data-v-6ceacf1f]:after,#timeline .timeline-item .timeline-box[data-v-6ceacf1f]:before,#timeline .timeline-item[data-v-6ceacf1f]:after,#timeline .timeline-item[data-v-6ceacf1f]:before{content:"";display:block;width:100%;clear:both}*[data-v-6ceacf1f],[data-v-6ceacf1f]:after,[data-v-6ceacf1f]:before{box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box}body[data-v-6ceacf1f],html[data-v-6ceacf1f]{height:100%}img[data-v-6ceacf1f]{max-width:100%}a[data-v-6ceacf1f]{text-decoration:none}.container[data-v-6ceacf1f]{max-width:1100px;margin:0 auto}#timeline[data-v-6ceacf1f]{width:100%;margin:80px auto 30px;position:relative;padding:0 10px;-webkit-transition:all .4s ease;-o-transition:all .4s ease;transition:all .4s ease}#timeline[data-v-6ceacf1f]:before{content:"";width:3px;height:100%;background:#d03939;left:50%;top:0;position:absolute}#timeline[data-v-6ceacf1f]:after{content:"";clear:both;display:table;width:100%}#timeline .timeline-item[data-v-6ceacf1f]{position:relative}#timeline .timeline-item .timeline-box[data-v-6ceacf1f]{padding-bottom:50px}#timeline .timeline-item .timeline-box:hover .timeline-icon span[data-v-6ceacf1f]{color:#f0f0f0}#timeline .timeline-item .timeline-icon[data-v-6ceacf1f]{background:#d03939;height:50px;position:absolute;top:0;left:calc(50% - 26px);width:170px}#timeline .timeline-item .timeline-icon span[data-v-6ceacf1f]{font-size:25px;color:#000;text-align:left;display:block;padding:10px 0 0 10px;position:relative;font-weight:500}#timeline .timeline-item .timeline-icon[data-v-6ceacf1f]:before{content:"";width:100%;height:100%;position:absolute;border:1px solid #d03939;right:-5px;bottom:-5px;display:block}#timeline .timeline-item .timeline-content[data-v-6ceacf1f]{width:45%;padding:20px;-webkit-box-shadow:0 3px 0 rgba(0,0,0,.1);box-shadow:0 3px 0 rgba(0,0,0,.1);border-radius:5px;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}#timeline .timeline-item .timeline-content h2[data-v-6ceacf1f]{padding:15px;color:#000;margin:-20px -20px 0;font-weight:400;border:3px solid #d03939;border-radius:3px 3px 0 0;-webkit-box-shadow:-8px 4px 0 rgba(0,0,0,.1);box-shadow:-8px 4px 0 rgba(0,0,0,.1);font-size:22px;text-align:center;line-height:1.5;background:#f0f0f0}#timeline .timeline-item .timeline-content h2 span[data-v-6ceacf1f]{display:block}#timeline .timeline-item .timeline-content[data-v-6ceacf1f]:before{content:"";position:absolute;left:45%;top:20px;width:0;height:0;border-top:7px solid rgba(0,0,0,0);border-bottom:7px solid rgba(0,0,0,0);border-left:7px solid #d03939}#timeline .timeline-item.right h2[data-v-6ceacf1f]{-webkit-box-shadow:8px 4px 0 rgba(0,0,0,.1);box-shadow:8px 4px 0 rgba(0,0,0,.1)}#timeline .timeline-item.right .timeline-icon[data-v-6ceacf1f]{left:calc(50% - 144px)}#timeline .timeline-item.right .timeline-icon span[data-v-6ceacf1f]{right:auto;left:2px;text-align:right;padding:10px 10px 0 0}#timeline .timeline-item.right .timeline-icon[data-v-6ceacf1f]:before{right:auto;left:-5px;bottom:-5px}#timeline .timeline-item.right .timeline-content[data-v-6ceacf1f]{float:right}#timeline .timeline-item.right .timeline-content[data-v-6ceacf1f]:before{content:"";right:45%;left:inherit;border-left:0;border-right:7px solid #d03939}@media screen and (max-width:768px){#timeline ul[data-v-6ceacf1f]{padding-left:5px}#timeline .timeline-item.right .timeline-icon[data-v-6ceacf1f]{left:calc(47% - 144px)}#timeline .timeline-item .timeline-icon[data-v-6ceacf1f]{left:calc(53% - 26px)}#timeline .timeline-item .timeline-icon span[data-v-6ceacf1f]{color:#f0f0f0}}@media screen and (max-width:576px){#timeline[data-v-6ceacf1f]{margin:45px 30px;padding:0;width:90%}#timeline[data-v-6ceacf1f]:before{left:50px}#timeline .timeline-item.right[data-v-6ceacf1f]:before{left:10%;margin-left:-6px;border-left:0;border-right:7px solid #d03939}#timeline .timeline-item.right .timeline-icon[data-v-6ceacf1f]{left:0}#timeline .timeline-item.right .timeline-icon[data-v-6ceacf1f]:before{right:-5px;left:auto;bottom:-5px}#timeline .timeline-item.right .timeline-icon span[data-v-6ceacf1f]{text-align:left;color:#f0f0f0;padding:10px 0 0 10px}#timeline .timeline-item.right .timeline-content[data-v-6ceacf1f]{float:none}#timeline .timeline-item.right .timeline-content[data-v-6ceacf1f]:before{left:20px;top:-7px;margin-left:0;border-left:7px solid rgba(0,0,0,0);border-top:0;border-right:7px solid rgba(0,0,0,0);border-bottom:7px solid #d03939}#timeline .timeline-item .timeline-content[data-v-6ceacf1f]{width:80%;margin-left:50px;float:none;position:relative;margin-top:15px}#timeline .timeline-item .timeline-content[data-v-6ceacf1f]:before{left:20px;top:-7px;margin-left:0;border-left:7px solid rgba(0,0,0,0);border-top:0;border-right:7px solid rgba(0,0,0,0);border-bottom:7px solid #d03939}#timeline .timeline-item .timeline-content h2[data-v-6ceacf1f]{text-align:left;padding:10px 15px;-webkit-box-shadow:8px 4px 0 rgba(0,0,0,.1);box-shadow:8px 4px 0 rgba(0,0,0,.1)}#timeline .timeline-item .timeline-icon[data-v-6ceacf1f]{left:0;position:relative}}@media (any-pointer:fine),(min-width:992px){.cursor[data-v-6ceacf1f]{position:fixed;top:0;left:0;display:block;pointer-events:none;z-index:1001}.no-js .cursor[data-v-6ceacf1f]{display:none}.cursor__line[data-v-6ceacf1f]{position:fixed;display:block;will-change:transform,opacity}.cursor__line--horizontal[data-v-6ceacf1f]{top:-10px;left:-10%;width:120%;height:20px}.cursor__line--vertical[data-v-6ceacf1f]{left:-10px;top:-10%;height:120%;width:20px}.cursor__line-element[data-v-6ceacf1f]{fill:none;stroke:var(--cursor-stroke);stroke-width:var(--cursor-stroke-width)}}@media (any-pointer:none),(max-width:992px){.cursor[data-v-6ceacf1f]{display:none}}',""]),e.exports=c}}]);