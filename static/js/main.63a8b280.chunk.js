(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),r=n(4),c=n(5),o=n(7),i=n(6),u=n(1),p=n.n(u),d=n(0),y=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={text:"Nothing was pressed yet"},e.pressedKey=function(t){var n="The last pressed key is [".concat(t.key,"]");e.setState({text:n})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.pressedKey)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.pressedKey)}},{key:"render",value:function(){var e=this.state.text;return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("p",{className:"App__message",children:e})})}}]),n}(p.a.Component);n(13);a.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.63a8b280.chunk.js.map