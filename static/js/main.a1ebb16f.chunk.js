(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var s=n(2),a=n.n(s),i=n(5),c=n.n(i),r=(n(20),n(13)),d=n(8),u=n(9),o=n(3),l=n(15),h=n(14),j=(n(21),n(22),n(10)),b=n(11),m=n(1);var p=function(t){var e=t.items.map((function(e){return Object(m.jsx)("div",{className:"list",children:Object(m.jsxs)("p",{children:[Object(m.jsx)("input",{type:"text",id:e.key,value:e.text,onChange:function(n){t.setUpdate(n.target.value,e.key)}}),Object(m.jsx)("span",{children:Object(m.jsx)(j.a,{className:"faicons",icon:"trash",onClick:function(){return t.deleteItem(e.key)}})})]})},e.key)}));return Object(m.jsx)("div",{children:Object(m.jsx)(b.a,{duration:200,easing:"ease-in-out",children:e})})},x=n(4),f=n(12);x.b.add(f.a);var v=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(d.a)(this,n),(s=e.call(this,t)).state={items:[],currentItem:{text:"",key:""}},s.handleInput=s.handleInput.bind(Object(o.a)(s)),s.addItem=s.addItem.bind(Object(o.a)(s)),s.deleteItem=s.deleteItem.bind(Object(o.a)(s)),s.setUpdate=s.setUpdate.bind(Object(o.a)(s)),s}return Object(u.a)(n,[{key:"handleInput",value:function(t){this.setState({currentItem:{text:t.target.value,key:Date.now()}})}},{key:"addItem",value:function(t){t.preventDefault();var e=this.state.currentItem;if(console.log(e),""!==e.text){var n=[].concat(Object(r.a)(this.state.items),[e]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(t){var e=this.state.items.filter((function(e){return e.key!==t}));this.setState({items:e})}},{key:"setUpdate",value:function(t,e){var n=this.state.items;n.map((function(n){n.key===e&&(n.text=t)})),this.setState({items:n})}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"body",children:[Object(m.jsx)("header",{children:"Todo List"}),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("form",{id:"to-do-list",onSubmit:this.addItem,children:[Object(m.jsx)("input",{type:"text",placeholder:"Enter Text..",value:this.state.currentItem.text,onChange:this.handleInput}),Object(m.jsx)("button",{type:"submit",children:"Add"})]}),Object(m.jsx)(p,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})]})]})}}]),n}(a.a.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),s(t),a(t),i(t),c(t)}))};c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),O()}},[[29,1,2]]]);
//# sourceMappingURL=main.a1ebb16f.chunk.js.map