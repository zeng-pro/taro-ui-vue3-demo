(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{"134":function(e,t,i){"use strict";i.r(t),i.d(t,"taro_switch_core",(function(){return n}));var c=i(25),n=function(){function Switch(e){var t=this;Object(c.g)(this,e),this.type="switch",this.checked=!1,this.color="#04BE02",this.disabled=!1,this.switchChange=function(e){e.stopPropagation();var i=e.target.checked;t.isChecked=i,t.onChange.emit({"value":i})},this.onChange=Object(c.d)(this,"change",7)}return Switch.prototype.function=function(e,t){e!==t&&(this.isChecked=e)},Switch.prototype.componentWillLoad=function(){this.isChecked=this.checked},Switch.prototype.componentDidLoad=function(){var e=this;Object.defineProperty(this.el,"value",{"get":function get(){return e.isChecked},"configurable":!0})},Switch.prototype.render=function(){var e=this,t=e.type,i=e.color,n=e.isChecked,o=e.name,r=e.disabled,h=n?{"borderColor":i||"04BE02","backgroundColor":i||"04BE02"}:{};return Object(c.f)("input",{"type":"checkbox","class":"weui-"+t,"style":h,"checked":n,"name":o,"disabled":r,"onChange":this.switchChange})},Object.defineProperty(Switch.prototype,"el",{"get":function get(){return Object(c.e)(this)},"enumerable":!0,"configurable":!0}),Object.defineProperty(Switch,"watchers",{"get":function get(){return{"checked":["function"]}},"enumerable":!0,"configurable":!0}),Object.defineProperty(Switch,"style",{"get":function get(){return"taro-switch-core{display:inline-block;width:52px;height:32px}taro-switch-core .weui-switch{display:block;width:100%;height:100%}"},"enumerable":!0,"configurable":!0}),Switch}()}}]);