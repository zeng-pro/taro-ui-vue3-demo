(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"142":function(t,e,n){var c=n(16),o=n(146);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={"insert":("head","head"),"singleton":!1},a=(c(o,r),o.locals?o.locals:{});t.exports=a},"143":function(t,e,n){var c=n(16),o=n(148);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={"insert":("head","head"),"singleton":!1},a=(c(o,r),o.locals?o.locals:{});t.exports=a},"144":function(t,e,n){var c=n(16),o=n(150);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={"insert":("head","head"),"singleton":!1},a=(c(o,r),o.locals?o.locals:{});t.exports=a},"145":function(t,e,n){"use strict";n(142)},"146":function(t,e,n){(e=n(24)(!1)).push([t.i,".btn-fab{position:fixed;right:0.68267rem;bottom:0.68267rem;z-index:1100}",""]),t.exports=e},"147":function(t,e,n){"use strict";n(143)},"148":function(t,e,n){(e=n(24)(!1)).push([t.i,'.page{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:100vh;background-color:#f8f8f8}.doc-header{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:1.28rem;height:3.84rem}.doc-header__title{position:relative;height:1.92rem;color:#333;font-size:0.85333rem;font-weight:bold}.doc-header__title::after{content:"";position:absolute;left:0;bottom:0;display:inline-block;width:2.56rem;height:0.04267rem;border-radius:0.02133rem;background-color:#6190e8}.doc-body{min-height:calc(100vh - 3.84rem);background:#fff;-webkit-box-shadow:0 0.55467rem 3.47733rem 0 rgba(0,0,0,.11);box-shadow:0 0.55467rem 3.47733rem 0 rgba(0,0,0,.11);padding-bottom:1.28rem;padding-bottom:calc(constant(safe-area-inset-bottom) + 1.28rem);padding-bottom:calc(env(safe-area-inset-bottom) + 1.28rem)}.doc-body .panel{margin:0.68267rem 0 1.19467rem}.doc-body .panel__title{position:relative;margin-bottom:1.06667rem;padding-left:1.06667rem;color:#6a6a77;font-size:0.68267rem;font-weight:bold;line-height:1.5}.doc-body .panel__title::before{content:"";display:inline-block;position:absolute;left:0.512rem;top:50%;margin-top:-0.42667rem;width:0.04267rem;height:0.85333rem;background-color:#6190e8;-webkit-box-shadow:0 0.14933rem 0.256rem 0 rgba(97,144,232,.2);box-shadow:0 0.14933rem 0.256rem 0 rgba(97,144,232,.2);border-radius:0.02133rem}.doc-body .panel__content{padding:0 0.42667rem}.doc-body .panel__content.no-padding{padding:0}',""]),t.exports=e},"149":function(t,e,n){"use strict";n(144)},"150":function(t,e,n){(e=n(24)(!1)).push([t.i,".panel__content .example-item{margin-bottom:0.42667rem}.panel__content .example-item:last-child{margin-bottom:0}.panel__content .example-item .subitem{display:inline-block;margin-left:0.512rem}.panel__content .example-item__desc{margin-bottom:0.256rem;color:#333;font-size:0.512rem}",""]),t.exports=e},"151":function(t,e,n){"use strict";var c=n(11),o=n(0);var r=n(6),a=n(1),i=n(2),l=n(31);var u=n(141),b=Object(c.k)({"name":"NavButton","components":{"AtFab":u.o},"props":{"to":{"type":String,"default":"home"},"size":{"type":String,"default":"small"},"btnIcon":{"type":String,"default":"home"},"btnText":String},"setup":function setup(t,e){e.attrs;var n=Object(c.d)((function(){var e;return e={},Object(a.a)(e,"at-icon-".concat(t.btnIcon),Boolean(t.btnIcon)&&!Boolean(t.btnText)),Object(a.a)(e,"at-icon",Boolean(t.btnIcon)&&!Boolean(t.btnText)),Object(a.a)(e,"at-fab__icon",Boolean(t.btnIcon)&&!Boolean(t.btnText)),e}));return Object(r.a)(Object(r.a)({},Object(i.p)(t)),{},{"iconClasses":n,"handleClick":function handleClick(){switch(t.to){case"home":l.default.navigateTo({"url":"/pages/index/index"});break;case"back":l.default.navigateBack({"delta":1})}}})}});n(145);b.render=function NavButtonvue_type_template_id_94c9b3c2_render(t,e,n,r,a,i){var l=Object(c.x)("taro-text"),u=Object(c.x)("at-fab"),b=Object(c.x)("taro-view");return Object(c.u)(),Object(c.e)(b,Object(c.o)({"class":"btn-fab"},t.$attrs),{"default":Object(c.E)((function(){return[Object(c.j)(u,{"size":t.size,"onClick":t.handleClick},{"default":Object(c.E)((function(){return[t.btnText?(Object(c.u)(),Object(c.e)(l,{"key":0},{"default":Object(c.E)((function(){return[Object(c.i)(Object(o.I)(t.btnText),1)]})),"_":1})):Object(c.f)("",!0),t.btnIcon&&!t.btnText?(Object(c.u)(),Object(c.e)(l,{"key":1,"class":t.iconClasses},null,8,["class"])):Object(c.f)("",!0)]})),"_":1},8,["size","onClick"])]})),"_":1},16)};var d=b,s=Object(c.k)({"name":"Page","components":{"NavButton":d},"props":{"headerTitle":{"type":String,"default":"标题","required":!0}},"setup":function setup(t,e){e.slots;var n=e.attrs,o=Object(i.j)(0),u=Object(c.d)((function(){return Object(a.a)({"page":!0},"".concat(n.class),Boolean(n.class))})),b=Object(c.d)((function(){var t=Object(l.getSystemInfoSync)().windowWidth;return l.default.getEnv()===l.default.ENV_TYPE.WEB?{"width":t>=1024?"75%":"100%","margin":"auto"}:null}));return Object(c.r)((function(){var t=Object(l.createSelectorQuery)();setTimeout((function(){t.select("#home").boundingClientRect((function(t){o.value=t.height+30})).exec()}),300)})),Object(r.a)(Object(r.a)({},Object(i.p)(t)),{},{"bottomHeight":o,"rootClasses":u,"rootStyle":b})}});n(147);s.render=function render(t,e,n,r,a,i){var l=Object(c.x)("taro-view"),u=Object(c.x)("nav-button");return Object(c.u)(),Object(c.e)(l,{"class":t.rootClasses,"style":t.rootStyle},{"default":Object(c.E)((function(){return[Object(c.j)(l,{"class":"doc-header"},{"default":Object(c.E)((function(){return[Object(c.j)(l,{"class":"doc-header__title"},{"default":Object(c.E)((function(){return[Object(c.i)(Object(o.I)(t.headerTitle),1)]})),"_":1})]})),"_":1}),Object(c.j)(l,{"class":"doc-body","style":t.$attrs.style},{"default":Object(c.E)((function(){return[Object(c.w)(t.$slots,"default")]})),"_":3},8,["style"]),Object(c.w)(t.$slots,"extra"),Object(c.j)(u,{"to":"back","btn-icon":"chevron-left","style":{"bottom":"".concat(t.bottomHeight,"px")}},null,8,["style"]),Object(c.j)(u,{"id":"home","to":"home"})]})),"_":3},8,["class","style"])};var j=s;var f=Object(c.k)({"name":"Panel","props":{"title":{"type":String,"default":"","required":!0},"noPadding":Boolean},"setup":function setup(t,e){e.slots,e.attrs;var n=Object(c.d)((function(){return{"panel__content":!0,"no-padding":t.noPadding}}));return Object(r.a)(Object(r.a)({},Object(i.p)(t)),{},{"contentClasses":n})}});n(149);f.render=function Panelvue_type_template_id_3f59b537_render(t,e,n,r,a,i){var l=Object(c.x)("taro-view");return Object(c.u)(),Object(c.e)(l,{"class":"panel"},{"default":Object(c.E)((function(){return[t.title?(Object(c.u)(),Object(c.e)(l,{"key":0,"class":"panel__title"},{"default":Object(c.E)((function(){return[Object(c.i)(Object(o.I)(t.title),1)]})),"_":1})):Object(c.f)("",!0),Object(c.w)(t.$slots,"controller"),Object(c.j)(l,{"class":t.contentClasses,"style":t.$attrs.style},{"default":Object(c.E)((function(){return[Object(c.w)(t.$slots,"default")]})),"_":3},8,["class","style"])]})),"_":3})};var O=f;var p=Object(c.k)({"name":"ExampleItem"});p.render=function ExampleItemvue_type_template_id_46fa6f86_render(t,e,n,o,r,a){var i=Object(c.x)("taro-view");return Object(c.u)(),Object(c.e)(i,Object(c.o)({"class":"example-item"},t.$attrs),{"default":Object(c.E)((function(){return[Object(c.w)(t.$slots,"default")]})),"_":3},16)};var m=p;var _=Object(c.k)({"name":"PropItem","props":{"prop":String,"desc":String},"components":{"AtFlex":u.p,"AtFlexItem":u.q},"setup":function setup(t){return Object(r.a)({},Object(i.p)(t))}});_.render=function PropItemvue_type_template_id_009b35fa_render(t,e,n,r,a,i){var l=Object(c.x)("taro-view"),u=Object(c.x)("at-flex-item"),b=Object(c.x)("at-flex");return Object(c.u)(),Object(c.e)(b,{"direction":"column"},{"default":Object(c.E)((function(){return[Object(c.j)(u,{"is-wrap":""},{"default":Object(c.E)((function(){return[Object(c.j)(l,{"class":"example-item__desc"},{"default":Object(c.E)((function(){return[Object(c.j)(l,{"style":{"color":"red","font-style":"italic"}},{"default":Object(c.E)((function(){return[Object(c.i)(Object(o.I)(t.prop),1)]})),"_":1}),Object(c.j)(l,null,{"default":Object(c.E)((function(){return[Object(c.i)(Object(o.I)(t.desc),1)]})),"_":1})]})),"_":1})]})),"_":1}),Object(c.j)(u,null,{"default":Object(c.E)((function(){return[Object(c.w)(t.$slots,"default")]})),"_":3})]})),"_":1})};var g=_;n.d(e,"c",(function(){return j})),n.d(e,"d",(function(){return O})),n.d(e,"a",(function(){return m})),n.d(e,"e",(function(){return g})),n.d(e,"b",(function(){return d}))},"304":function(t,e,n){"use strict";n.r(e);var c=n(11),o=Object(c.i)("这也是内容区 可以随意定义功能"),r=Object(c.i)("这也是内容区 可以随意定义功能"),a=Object(c.i)("这也是内容区 可以随意定义功能"),i=Object(c.i)("这也是内容区 可以随意定义功能"),l=Object(c.i)("这也是内容区 可以随意定义功能"),u=Object(c.i)("这也是内容区 可以随意定义功能"),b=Object(c.i)("这也是内容区 可以随意定义功能 这也是内容区 可以随意定义功能 这也是内容区 可以随意定义功能");var d=n(31),s=n(151),j=n(141),f=Object(c.k)({"name":"CardDemo","components":{"Page":s.c,"Panel":s.d,"ExampleItem":s.a,"AtCard":j.i,"AtIcon":j.u},"setup":function setup(){return{"handleClick":function handleClick(){Object(d.showToast)({"title":"Card handleClick","icon":"none"})},"renderIcon":Object(c.n)(j.u,{"prefixClass":"at-icon","value":"home","size":16,"color":"#6190e8","style":{"marginRight":"10px"}})}}});f.render=function render(t,e,n,d,s,j){var f=Object(c.x)("at-card"),O=Object(c.x)("example-item"),p=Object(c.x)("panel"),m=Object(c.x)("page");return Object(c.u)(),Object(c.e)(m,{"header-title":"Card 卡片"},{"default":Object(c.E)((function(){return[Object(c.j)(p,{"title":"基础卡片","no-padding":""},{"default":Object(c.E)((function(){return[Object(c.j)(O,null,{"default":Object(c.E)((function(){return[Object(c.j)(f,{"title":"这是标题","onClick":t.handleClick},{"default":Object(c.E)((function(){return[o]})),"_":1},8,["onClick"])]})),"_":1})]})),"_":1}),Object(c.j)(p,{"title":"带缩略图的卡片","no-padding":""},{"default":Object(c.E)((function(){return[Object(c.j)(O,null,{"default":Object(c.E)((function(){return[Object(c.j)(f,{"title":"这是标题","thumb":"http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"},{"default":Object(c.E)((function(){return[r]})),"_":1})]})),"_":1})]})),"_":1}),Object(c.j)(p,{"title":"带图标的卡片","no-padding":""},{"default":Object(c.E)((function(){return[Object(c.j)(O,null,{"default":Object(c.E)((function(){return[Object(c.j)(f,{"title":"这是标题","icon":{"value":"tags","color":"#77a1fd"}},{"default":Object(c.E)((function(){return[a]})),"_":1})]})),"_":1})]})),"_":1}),Object(c.j)(p,{"title":"自定义图标的卡片","no-padding":""},{"default":Object(c.E)((function(){return[Object(c.j)(O,null,{"default":Object(c.E)((function(){return[Object(c.j)(f,{"title":"这是标题","renderIcon":t.renderIcon},{"default":Object(c.E)((function(){return[i]})),"_":1},8,["renderIcon"])]})),"_":1})]})),"_":1}),Object(c.j)(p,{"title":"带小信息的卡片","no-padding":""},{"default":Object(c.E)((function(){return[Object(c.j)(O,null,{"default":Object(c.E)((function(){return[Object(c.j)(f,{"note":"小Tips","title":"这是个标题","thumb":"http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"},{"default":Object(c.E)((function(){return[l]})),"_":1})]})),"_":1})]})),"_":1}),Object(c.j)(p,{"title":"自定义额外信息样式的卡片","no-padding":""},{"default":Object(c.E)((function(){return[Object(c.j)(O,null,{"default":Object(c.E)((function(){return[Object(c.j)(f,{"note":"小Tips","extra":"2019/01/23 22:33:33","extraStyle":{"fontSize":"12px","maxWidth":"200px","color":"#6190e8"},"title":"这是个标题","thumb":"http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"},{"default":Object(c.E)((function(){return[u]})),"_":1})]})),"_":1})]})),"_":1}),Object(c.j)(p,{"title":"通栏卡片","no-padding":""},{"default":Object(c.E)((function(){return[Object(c.j)(O,null,{"default":Object(c.E)((function(){return[Object(c.j)(f,{"is-full":"","note":"小Tips","extra":"额外信息","title":"这是个标题","thumb":"http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"},{"default":Object(c.E)((function(){return[b]})),"_":1})]})),"_":1})]})),"_":1})]})),"_":1})};e.default=f}}]);