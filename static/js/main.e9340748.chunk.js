(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(31),r=n.n(c),l=(n(82),n(22)),u=n(32),i=n(33),s=n(35),p=n(34),m=n(36),v=n(11),f=n(71),h=n.n(f);function y(e){return e.displayName||e.name||"Component"}var E={primary:"#006E86",secondary:"#E38300",ternary:"#008718"};var d=function(e){var t=function(t){function n(){var t,o;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(o=Object(s.a)(this,(t=Object(p.a)(n)).call.apply(t,[this].concat(c)))).componentName=y(e),o}return Object(m.a)(n,t),Object(i.a)(n,[{key:"componentDidMount",value:function(){console.group("%cLogProps Component ".concat(this.componentName," method componentDidMount"),"color:".concat(E.primary,";")),console.log("%cProps","color:".concat(E.primary,";"),this.props),console.groupEnd()}},{key:"componentWillReceiveProps",value:function(e){console.group("%cLogProps Component ".concat(this.componentName," method componentWillReceiveProps"),"color:".concat(E.ternary,";")),console.log("%cPrev Props","color:".concat(E.secondary,";"),this.props),console.log("%cNext Props","color:".concat(E.ternary,";"),e),console.groupEnd()}},{key:"render",value:function(){return a.a.createElement(e,this.props)}}]),n}(o.Component);return t.displayName="LogProps(".concat(y(e),")"),h()(t,e)},g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={notes:["note1","note2","note3"],value:""},n.addNote=function(e){"Enter"===e.key&&n.setState({notes:Object(l.a)(n.state.notes).concat([e.target.value]),value:""})},n.changeValue=function(e){n.setState({value:e.target.value})},n.clearInput=function(e){n.setState({value:""})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.noteInput.focus()}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("h1",null,"Class Component"),a.a.createElement("ul",null,this.state.notes.map(function(e,t){return a.a.createElement("li",{key:t},e)})),a.a.createElement("input",{value:this.state.value,onChange:this.changeValue,type:"text",onKeyUp:this.addNote,ref:function(t){return e.noteInput=t}}),a.a.createElement("button",{onClick:this.clearInput},"clear input"))}}]),t}(o.Component),b=Object(v.a)(d)(g),j=Object(v.a)(Object(v.b)("notes","setNote",["note1","note2","note3"]),Object(v.b)("value","setValue",""),d)(function(e){var t=e.notes,n=e.value,o=e.setNote,c=e.setValue;return a.a.createElement("div",null,a.a.createElement("h1",null,"StateLess Component"),a.a.createElement("ul",null,t.map(function(e,t){return a.a.createElement("li",{key:t},e)})),a.a.createElement("input",{value:n,onChange:function(e){c(e.target.value)},type:"text",onKeyUp:function(e){if("Enter"===e.key){var n=Object(l.a)(t).concat([e.target.value]);o(n,function(){var e=n[n.length-1];console.log("lastNote",e)}),c("")}}}),a.a.createElement("button",{onClick:function(e){c("")}},"clear input"))}),O=n(141),k=Object(v.a)(Object(v.b)("notes","setNote",["note1","note2","note3"]),Object(v.b)("value","setValue",""),d)(function(e){var t=e.notes,n=e.value,o=e.setNote,c=e.setValue;return a.a.createElement("div",null,a.a.createElement("h1",null,"Ant StateLess Component"),a.a.createElement("ul",null,t.map(function(e,t){return a.a.createElement("li",{key:t},e)})),a.a.createElement(O.a,{value:n,onChange:function(e){c(e.target.value)},type:"text",onKeyUp:function(e){if("Enter"===e.key){var n=Object(l.a)(t).concat([e.target.value]);o(n,function(){var e=n[n.length-1];console.log("lastNote",e)}),c("")}}}),a.a.createElement("button",{onClick:function(e){c("")}},"clear input"))}),C={padding:"1rem"},w=function(){return a.a.createElement("div",{style:C},a.a.createElement(b,null),a.a.createElement("br",null),a.a.createElement(j,null),a.a.createElement("br",null),a.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},77:function(e,t,n){e.exports=n(139)},82:function(e,t,n){}},[[77,2,1]]]);
//# sourceMappingURL=main.e9340748.chunk.js.map