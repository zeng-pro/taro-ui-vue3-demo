(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"142":function(e,t,n){var c=n(16),o=n(146);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={"insert":("head","head"),"singleton":!1},l=(c(o,a),o.locals?o.locals:{});e.exports=l},"143":function(e,t,n){var c=n(16),o=n(148);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={"insert":("head","head"),"singleton":!1},l=(c(o,a),o.locals?o.locals:{});e.exports=l},"144":function(e,t,n){var c=n(16),o=n(150);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={"insert":("head","head"),"singleton":!1},l=(c(o,a),o.locals?o.locals:{});e.exports=l},"145":function(e,t,n){"use strict";n(142)},"146":function(e,t,n){(t=n(24)(!1)).push([e.i,".btn-fab{position:fixed;right:0.68267rem;bottom:0.68267rem;z-index:1100}",""]),e.exports=t},"147":function(e,t,n){"use strict";n(143)},"148":function(e,t,n){(t=n(24)(!1)).push([e.i,'.page{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:100vh;background-color:#f8f8f8}.doc-header{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:1.28rem;height:3.84rem}.doc-header__title{position:relative;height:1.92rem;color:#333;font-size:0.85333rem;font-weight:bold}.doc-header__title::after{content:"";position:absolute;left:0;bottom:0;display:inline-block;width:2.56rem;height:0.04267rem;border-radius:0.02133rem;background-color:#6190e8}.doc-body{min-height:calc(100vh - 3.84rem);background:#fff;-webkit-box-shadow:0 0.55467rem 3.47733rem 0 rgba(0,0,0,.11);box-shadow:0 0.55467rem 3.47733rem 0 rgba(0,0,0,.11);padding-bottom:1.28rem;padding-bottom:calc(constant(safe-area-inset-bottom) + 1.28rem);padding-bottom:calc(env(safe-area-inset-bottom) + 1.28rem)}.doc-body .panel{margin:0.68267rem 0 1.19467rem}.doc-body .panel__title{position:relative;margin-bottom:1.06667rem;padding-left:1.06667rem;color:#6a6a77;font-size:0.68267rem;font-weight:bold;line-height:1.5}.doc-body .panel__title::before{content:"";display:inline-block;position:absolute;left:0.512rem;top:50%;margin-top:-0.42667rem;width:0.04267rem;height:0.85333rem;background-color:#6190e8;-webkit-box-shadow:0 0.14933rem 0.256rem 0 rgba(97,144,232,.2);box-shadow:0 0.14933rem 0.256rem 0 rgba(97,144,232,.2);border-radius:0.02133rem}.doc-body .panel__content{padding:0 0.42667rem}.doc-body .panel__content.no-padding{padding:0}',""]),e.exports=t},"149":function(e,t,n){"use strict";n(144)},"150":function(e,t,n){(t=n(24)(!1)).push([e.i,".panel__content .example-item{margin-bottom:0.42667rem}.panel__content .example-item:last-child{margin-bottom:0}.panel__content .example-item .subitem{display:inline-block;margin-left:0.512rem}.panel__content .example-item__desc{margin-bottom:0.256rem;color:#333;font-size:0.512rem}",""]),e.exports=t},"151":function(e,t,n){"use strict";var c=n(11),o=n(0);var a=n(6),l=n(1),i=n(2),r=n(31);var s=n(141),b=Object(c.k)({"name":"NavButton","components":{"AtFab":s.o},"props":{"to":{"type":String,"default":"home"},"size":{"type":String,"default":"small"},"btnIcon":{"type":String,"default":"home"},"btnText":String},"setup":function setup(e,t){t.attrs;var n=Object(c.d)((function(){var t;return t={},Object(l.a)(t,"at-icon-".concat(e.btnIcon),Boolean(e.btnIcon)&&!Boolean(e.btnText)),Object(l.a)(t,"at-icon",Boolean(e.btnIcon)&&!Boolean(e.btnText)),Object(l.a)(t,"at-fab__icon",Boolean(e.btnIcon)&&!Boolean(e.btnText)),t}));return Object(a.a)(Object(a.a)({},Object(i.p)(e)),{},{"iconClasses":n,"handleClick":function handleClick(){switch(e.to){case"home":r.default.navigateTo({"url":"/pages/index/index"});break;case"back":r.default.navigateBack({"delta":1})}}})}});n(145);b.render=function NavButtonvue_type_template_id_94c9b3c2_render(e,t,n,a,l,i){var r=Object(c.x)("taro-text"),s=Object(c.x)("at-fab"),b=Object(c.x)("taro-view");return Object(c.u)(),Object(c.e)(b,Object(c.o)({"class":"btn-fab"},e.$attrs),{"default":Object(c.E)((function(){return[Object(c.j)(s,{"size":e.size,"onClick":e.handleClick},{"default":Object(c.E)((function(){return[e.btnText?(Object(c.u)(),Object(c.e)(r,{"key":0},{"default":Object(c.E)((function(){return[Object(c.i)(Object(o.I)(e.btnText),1)]})),"_":1})):Object(c.f)("",!0),e.btnIcon&&!e.btnText?(Object(c.u)(),Object(c.e)(r,{"key":1,"class":e.iconClasses},null,8,["class"])):Object(c.f)("",!0)]})),"_":1},8,["size","onClick"])]})),"_":1},16)};var u=b,d=Object(c.k)({"name":"Page","components":{"NavButton":u},"props":{"headerTitle":{"type":String,"default":"标题","required":!0}},"setup":function setup(e,t){t.slots;var n=t.attrs,o=Object(i.j)(0),s=Object(c.d)((function(){return Object(l.a)({"page":!0},"".concat(n.class),Boolean(n.class))})),b=Object(c.d)((function(){var e=Object(r.getSystemInfoSync)().windowWidth;return r.default.getEnv()===r.default.ENV_TYPE.WEB?{"width":e>=1024?"75%":"100%","margin":"auto"}:null}));return Object(c.r)((function(){var e=Object(r.createSelectorQuery)();setTimeout((function(){e.select("#home").boundingClientRect((function(e){o.value=e.height+30})).exec()}),300)})),Object(a.a)(Object(a.a)({},Object(i.p)(e)),{},{"bottomHeight":o,"rootClasses":s,"rootStyle":b})}});n(147);d.render=function render(e,t,n,a,l,i){var r=Object(c.x)("taro-view"),s=Object(c.x)("nav-button");return Object(c.u)(),Object(c.e)(r,{"class":e.rootClasses,"style":e.rootStyle},{"default":Object(c.E)((function(){return[Object(c.j)(r,{"class":"doc-header"},{"default":Object(c.E)((function(){return[Object(c.j)(r,{"class":"doc-header__title"},{"default":Object(c.E)((function(){return[Object(c.i)(Object(o.I)(e.headerTitle),1)]})),"_":1})]})),"_":1}),Object(c.j)(r,{"class":"doc-body","style":e.$attrs.style},{"default":Object(c.E)((function(){return[Object(c.w)(e.$slots,"default")]})),"_":3},8,["style"]),Object(c.w)(e.$slots,"extra"),Object(c.j)(s,{"to":"back","btn-icon":"chevron-left","style":{"bottom":"".concat(e.bottomHeight,"px")}},null,8,["style"]),Object(c.j)(s,{"id":"home","to":"home"})]})),"_":3},8,["class","style"])};var j=d;var f=Object(c.k)({"name":"Panel","props":{"title":{"type":String,"default":"","required":!0},"noPadding":Boolean},"setup":function setup(e,t){t.slots,t.attrs;var n=Object(c.d)((function(){return{"panel__content":!0,"no-padding":e.noPadding}}));return Object(a.a)(Object(a.a)({},Object(i.p)(e)),{},{"contentClasses":n})}});n(149);f.render=function Panelvue_type_template_id_3f59b537_render(e,t,n,a,l,i){var r=Object(c.x)("taro-view");return Object(c.u)(),Object(c.e)(r,{"class":"panel"},{"default":Object(c.E)((function(){return[e.title?(Object(c.u)(),Object(c.e)(r,{"key":0,"class":"panel__title"},{"default":Object(c.E)((function(){return[Object(c.i)(Object(o.I)(e.title),1)]})),"_":1})):Object(c.f)("",!0),Object(c.w)(e.$slots,"controller"),Object(c.j)(r,{"class":e.contentClasses,"style":e.$attrs.style},{"default":Object(c.E)((function(){return[Object(c.w)(e.$slots,"default")]})),"_":3},8,["class","style"])]})),"_":3})};var O=f;var p=Object(c.k)({"name":"ExampleItem"});p.render=function ExampleItemvue_type_template_id_46fa6f86_render(e,t,n,o,a,l){var i=Object(c.x)("taro-view");return Object(c.u)(),Object(c.e)(i,Object(c.o)({"class":"example-item"},e.$attrs),{"default":Object(c.E)((function(){return[Object(c.w)(e.$slots,"default")]})),"_":3},16)};var h=p;var m=Object(c.k)({"name":"PropItem","props":{"prop":String,"desc":String},"components":{"AtFlex":s.p,"AtFlexItem":s.q},"setup":function setup(e){return Object(a.a)({},Object(i.p)(e))}});m.render=function PropItemvue_type_template_id_009b35fa_render(e,t,n,a,l,i){var r=Object(c.x)("taro-view"),s=Object(c.x)("at-flex-item"),b=Object(c.x)("at-flex");return Object(c.u)(),Object(c.e)(b,{"direction":"column"},{"default":Object(c.E)((function(){return[Object(c.j)(s,{"is-wrap":""},{"default":Object(c.E)((function(){return[Object(c.j)(r,{"class":"example-item__desc"},{"default":Object(c.E)((function(){return[Object(c.j)(r,{"style":{"color":"red","font-style":"italic"}},{"default":Object(c.E)((function(){return[Object(c.i)(Object(o.I)(e.prop),1)]})),"_":1}),Object(c.j)(r,null,{"default":Object(c.E)((function(){return[Object(c.i)(Object(o.I)(e.desc),1)]})),"_":1})]})),"_":1})]})),"_":1}),Object(c.j)(s,null,{"default":Object(c.E)((function(){return[Object(c.w)(e.$slots,"default")]})),"_":3})]})),"_":1})};var g=m;n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return O})),n.d(t,"a",(function(){return h})),n.d(t,"e",(function(){return g})),n.d(t,"b",(function(){return u}))},"229":function(e,t,n){var c=n(16),o=n(230);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={"insert":("head","head"),"singleton":!1},l=(c(o,a),o.locals?o.locals:{});e.exports=l},"230":function(e,t,n){(t=n(24)(!1)).push([e.i,"",""]),e.exports=t},"307":function(e,t,n){"use strict";n.r(t);var c=n(11);var o=n(6),a=n(2),l=n(141),i=n(151),r=(n(229),Object(c.k)({"name":"CheckboxDemo","components":{"AtCheckbox":l.j,"Page":i.c,"Panel":i.d,"ExampleItem":i.a},"setup":function setup(){var e=Object(a.i)({"checkedList1":["list1"],"checkedList2":["list1"],"checkedList3":["list1","list4"],"checkedList4":["list2"],"checkboxOption1":[{"value":"list1","label":"iPhone X"},{"value":"list2","label":"HUAWEI P20"},{"value":"list3","label":"OPPO Find X"}],"checkboxOption2":[{"value":"list1","label":"iPhone X","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。"},{"value":"list2","label":"HUAWEI P20","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。"},{"value":"list3","label":"OPPO Find X","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。"}],"checkboxOption3":[{"value":"list1","label":"iPhone X","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。"},{"value":"list2","label":"HUAWEI P20"},{"value":"list3","label":"OPPO Find X","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。","disabled":!0},{"value":"list4","label":"vivo NEX","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。","disabled":!0}],"checkboxOption4":[{"value":"list1","label":"iPhone X","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。"},{"value":"list2","label":"HUAWEI P20"},{"value":"list3","label":"OPPO Find X","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。"},{"value":"list4","label":"vivo NEX","desc":"部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。"}]});return Object(o.a)(Object(o.a)({},Object(a.p)(e)),{},{"handleChange":function handleChange(t){e.checkedList1=t},"handleChange2nd":function handleChange2nd(t){e.checkedList2=t},"handleChange3rd":function handleChange3rd(t){e.checkedList3=t}})}}));r.render=function render(e,t,n,o,a,l){var i=Object(c.x)("at-checkbox"),r=Object(c.x)("taro-view"),s=Object(c.x)("example-item"),b=Object(c.x)("panel"),u=Object(c.x)("page");return Object(c.u)(),Object(c.e)(u,{"header-title":"Checkbox 复选框"},{"default":Object(c.E)((function(){return[Object(c.j)(b,{"title":"基础用法","no-padding":""},{"default":Object(c.E)((function(){return[Object(c.j)(s,null,{"default":Object(c.E)((function(){return[Object(c.j)(r,{"class":"checkbox-container"},{"default":Object(c.E)((function(){return[Object(c.j)(i,{"options":e.checkboxOption1,"selected-list":e.checkedList1,"onChange":e.handleChange},null,8,["options","selected-list","onChange"])]})),"_":1})]})),"_":1})]})),"_":1}),Object(c.j)(b,{"title":"含描述信息","no-padding":""},{"default":Object(c.E)((function(){return[Object(c.j)(s,null,{"default":Object(c.E)((function(){return[Object(c.j)(r,{"class":"checkbox-container"},{"default":Object(c.E)((function(){return[Object(c.j)(i,{"options":e.checkboxOption2,"selected-list":e.checkedList2,"onChange":e.handleChange2nd},null,8,["options","selected-list","onChange"])]})),"_":1})]})),"_":1})]})),"_":1}),Object(c.j)(b,{"title":"选项禁用","no-padding":""},{"default":Object(c.E)((function(){return[Object(c.j)(s,null,{"default":Object(c.E)((function(){return[Object(c.j)(r,{"class":"checkbox-container"},{"default":Object(c.E)((function(){return[Object(c.j)(i,{"options":e.checkboxOption3,"selected-list":e.checkedList3,"onChange":e.handleChange3rd},null,8,["options","selected-list","onChange"])]})),"_":1})]})),"_":1})]})),"_":1}),Object(c.j)(b,{"title":"使用 vModel：`v-model:selected-list`","no-padding":""},{"default":Object(c.E)((function(){return[Object(c.j)(s,null,{"default":Object(c.E)((function(){return[Object(c.j)(r,{"class":"checkbox-container"},{"default":Object(c.E)((function(){return[Object(c.j)(i,{"options":e.checkboxOption4,"selectedList":e.checkedList4,"onUpdate:selectedList":t[1]||(t[1]=function(t){return e.checkedList4=t})},null,8,["options","selectedList"])]})),"_":1})]})),"_":1})]})),"_":1})]})),"_":1})};t.default=r}}]);