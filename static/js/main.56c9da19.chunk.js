(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/logoo.8a66e29d.PNG"},23:function(e,a,t){e.exports=t.p+"static/media/logo.a7f774ce.png"},26:function(e,a,t){e.exports=t(40)},31:function(e,a,t){},32:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(20),r=t.n(c),s=(t(31),t(24)),o=t(3),m=t(4),i=t(6),u=t(5),E=(t(32),t(1)),d=t(15),p=t.n(d),b=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleFormChange=function(e){var a=Object(s.a)({},n.state.loginParams),t=e.target.value;a[e.target.name]=t,n.setState({loginParams:a})},n.login=function(e){var a=n.state.loginParams.user_id,t=n.state.loginParams.user_password;"Lauren1313101"===a&&"Laurenseacrist4ever"===t&&(localStorage.setItem("token","T"),n.setState({islogged:!0})),e.preventDefault()},n.state={islogged:!1,loginParams:{user_id:"",user_password:""}},n}return Object(m.a)(t,[{key:"render",value:function(){return localStorage.getItem("token")?l.a.createElement(E.a,{to:"/"}):l.a.createElement("div",{className:"login-page"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"header"},l.a.createElement("img",{src:p.a,alt:"logo"})),l.a.createElement("div",{class:"login-content"},"\xa0\xa0\xa0\xa0\xa0",l.a.createElement("div",{class:"login-brand"},l.a.createElement("a",{href:"#"},l.a.createElement("span",{class:" fa fa-lock logo"})," Internet Banking | ")),l.a.createElement("div",{class:"login-desc"},"Login securely into your account, for more assistance if needed Email: info@habibtrustreserves.com for Help."),l.a.createElement("form",{onSubmit:this.login},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{class:"control-label",style:{color:"white"}},"Account Number"),l.a.createElement("input",{type:"text",name:"user_id",onChange:this.handleFormChange,class:"form-control",placeholder:"Enter Your Account Number",autofocus:""}),l.a.createElement("input",{type:"hidden",name:"code",value:"",class:"form-control"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{class:"control-label",style:{color:"white"}},"Password"),l.a.createElement("input",{type:"password",name:"user_password",onChange:this.handleFormChange,class:"form-control",placeholder:"Enter Password"})),l.a.createElement("input",{type:"submit",className:"btn btn-inverse",value:"Sign In"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("footer",{class:"",style:{color:"white"}},"\xa9 2021 Habib Trust Reserve Inc. All Rights Reserved."))))}}]),t}(n.Component),v=t(13),h=t(22),g=t.n(h),f=(t(39),function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){e.props.history.goBack()}},"Back"),l.a.createElement("h3",null,"New Item Form"))}}]),t}(n.Component)),N=Object(E.g)(f),O=t(10),A=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props.match;return l.a.createElement(n.Fragment,null,l.a.createElement("button",null,l.a.createElement(O.b,{to:"".concat(e.path,"/new")},"New Item")),l.a.createElement("h3",null,"List Item"))}}]),t}(n.Component),_=function(){return l.a.createElement("h2",null,"404 page not found ")},j=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props.match;return l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Master Item"),l.a.createElement("div",{className:"container"},l.a.createElement(E.d,null,l.a.createElement(E.b,{path:"".concat(e.path,"/new"),component:N}),l.a.createElement(E.b,{exact:!0,path:"".concat(e.path),component:A}),l.a.createElement(E.b,{path:"*",component:_}))))}}]),t}(n.Component),y=(Object(E.g)(j),n.Component,n.Component,function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).signOut=function(){localStorage.removeItem("token"),n.setState({islogout:!0})},n.state={islogout:!1,shouldShowModal:!1},n.closeModal=n.closeModal.bind(Object(v.a)(n)),n.openModal=n.openModal.bind(Object(v.a)(n)),n}return Object(m.a)(t,[{key:"closeModal",value:function(){this.setState({shouldShowModal:!1})}},{key:"openModal",value:function(){this.setState({shouldShowModal:!0})}},{key:"render",value:function(){if(this.state.islogout)return l.a.createElement(E.a,{to:"/login"});this.props.match;return l.a.createElement("div",{className:"dasshboard"},l.a.createElement("div",{className:"main-account-balance"},l.a.createElement("div",{className:"dashboard_header"},l.a.createElement("div",{className:"account-img"}),l.a.createElement("button",{className:"logout_btn",onClick:this.signOut,href:"#"},l.a.createElement("i",{class:"fa fa-sign-out","aria-hidden":"true"}))),l.a.createElement("div",{className:"account-details"},l.a.createElement("div",{className:"account-name-img"},l.a.createElement("div",{className:"account-name"},"Hi, Lauren Milligan")),l.a.createElement("div",{className:"dddd"},l.a.createElement("span",null,"Account")),l.a.createElement("div",{className:"account-balance"},l.a.createElement("span",null,"Checkings"),l.a.createElement("div",{className:"account-balance-availability"},l.a.createElement("span",null,"$874,000"),l.a.createElement("p",null,"Available"))),l.a.createElement("div",{className:"account-balance"},l.a.createElement("span",null,"Savings"),l.a.createElement("div",{className:"account-balance-availability"},l.a.createElement("span",null,"$237,900"),l.a.createElement("p",null,"Available"))))),l.a.createElement("div",{className:"account_main"},l.a.createElement("div",{className:"account-activity"},l.a.createElement("p",null,"Transactions")),l.a.createElement("div",{className:"transaction"},l.a.createElement("div",{className:"transaction_box"},l.a.createElement("div",{className:"transaction_box-top"},l.a.createElement("span",{className:"_desc"},"MOB2/UTO/To Ivica Tas\u0144er"),l.a.createElement("span",null,"-$75,000.00")),l.a.createElement("div",{className:"transaction_box-bottom"},l.a.createElement("span",null,"06/9/2011"))),l.a.createElement("div",{className:"transaction_box"},l.a.createElement("div",{className:"transaction_box-top"},l.a.createElement("span",{className:"_desc"},"Pending: 45574 PREAUTH 008829 CASH APP*BILL LONG*AD gosq.com CA"),l.a.createElement("span",null,"-$350.00")),l.a.createElement("div",{className:"transaction_box-bottom"},l.a.createElement("span",null,"14/6/2011"),l.a.createElement("div",null,l.a.createElement("span",null,"Pending"),l.a.createElement("span",null,"$1,500.00")))),l.a.createElement("div",{className:"transaction_box"},l.a.createElement("div",{className:"transaction_box-top"},l.a.createElement("span",{className:"_desc"},"31244 PREAUTH 008829 CASH APP*BILL LONG*AD gosq.com CA"),l.a.createElement("span",null,"-$230.00")),l.a.createElement("div",{className:"transaction_box-bottom"},l.a.createElement("span",null,"13/5/2011"))),l.a.createElement("div",{className:"transaction_box"},l.a.createElement("div",{className:"transaction_box-top"},l.a.createElement("span",{className:"_desc"},"37574 PREAUTH 008829 CASH APP*BILL LONG*AD gosq.com CA"),l.a.createElement("span",null,"-$750.00")),l.a.createElement("div",{className:"transaction_box-bottom"},l.a.createElement("span",null,"6/5/2011"))),l.a.createElement("div",{className:"transaction_box"},l.a.createElement("div",{className:"transaction_box-top"},l.a.createElement("span",{className:"_desc"},"40074 PREAUTH 008829 CASH APP*BILL LONG*AD gosq.com CA"),l.a.createElement("span",null,"-$2,010.00")),l.a.createElement("div",{className:"transaction_box-bottom"},l.a.createElement("span",null,"14/4/2011"))),l.a.createElement("div",{className:"transaction_box"},l.a.createElement("div",{className:"transaction_box-top"},l.a.createElement("span",{className:"_desc"},"35074 PREAUTH 008829 CASH APP*BILL LONG*AD gosq.com CA"),l.a.createElement("span",null,"-$1,350.00")),l.a.createElement("div",{className:"transaction_box-bottom"},l.a.createElement("span",null,"21/3/2011"))))),l.a.createElement("div",{className:"account-footer"},l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("i",{class:"fa fa-user","aria-hidden":"true"})),l.a.createElement("span",null,"Account")),l.a.createElement("div",{onClick:this.openModal},l.a.createElement("span",null,l.a.createElement("i",{class:"fa fa-exchange","aria-hidden":"true"})),l.a.createElement("span",null,"Transfer")),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("i",{class:"fa-solid fa-angles-down"})),l.a.createElement("span",null,"Deposit")),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("i",{class:"fa fa-money","aria-hidden":"true"})),l.a.createElement("span",null,"Pay"))),l.a.createElement(g.a,{closeModal:this.closeModal,shouldShowModal:this.state.shouldShowModal,title:"Transfer Fund"},l.a.createElement("form",{className:"modal_form"},l.a.createElement("div",null,l.a.createElement("label",null,"Receipt Account"),l.a.createElement("input",{type:"text"})),l.a.createElement("div",null,l.a.createElement("label",null,"Amount ($)"),l.a.createElement("input",{type:"text"})),l.a.createElement("div",null,l.a.createElement("button",null,"Transfer")))))}}]),t}(n.Component)),x=Object(E.g)(y),C=t(23),P=t.n(C),w=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Transfer"},l.a.createElement("div",{className:"login"},l.a.createElement("img",{src:P.a})),l.a.createElement("h2",null,"HEHHEJEKKE"))}}]),t}(n.Component),S=(Object(E.g)(w),t(25)),k=["children"],L=function(e){var a=e.children,t=Object(S.a)(e,k);return l.a.createElement(E.b,Object.assign({},t,{render:function(e){var t=e.location;return localStorage.getItem("token")?a:l.a.createElement(E.a,{to:{pathname:"/login",state:{from:t}}})}}))};function I(){return l.a.createElement(O.a,null,l.a.createElement(E.d,null,l.a.createElement(E.b,{path:"/login"},l.a.createElement(b,null)),l.a.createElement(L,{path:"/dashboard"},l.a.createElement(x,null)),l.a.createElement(E.b,{exact:!0,path:"/"},l.a.createElement(E.a,{exact:!0,from:"/",to:"dashboard"})),l.a.createElement(E.b,{path:"*"},l.a.createElement(E.a,{from:"/",to:"dashboard"}))),l.a.createElement("div",null))}var M=document.getElementById("root");r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),M)}},[[26,1,2]]]);
//# sourceMappingURL=main.56c9da19.chunk.js.map