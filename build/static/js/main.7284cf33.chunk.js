(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(36)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=(a(26),a(19)),s=a(5),m=a(6),i=a(8),u=a(7),d=a(9),h=(a(27),a(40)),E=a(38),p=a(41),f=(a(28),a(15)),N=function(e){var t=e.list.map(function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.phone),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.onDelete(t.id)},className:"Contacts_delete"},r.a.createElement(f,{name:"minus-circle"})," ","DELETE")))});return r.a.createElement("table",{className:"Contacts_table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("u",{className:"header_ul"},"NAME")),r.a.createElement("th",null,r.a.createElement("u",{className:"header_ul"},"PHONE"))),t))},b=a(37),v=(a(32),function(e){return r.a.createElement("header",{className:"header"},e.children)}),C=(a(33),a(15)),_=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Main"},r.a.createElement(v,null,r.a.createElement("u",{className:"header-ul"},"Phone Directory "," "," ",r.a.createElement(C,{name:"address-book"}))),r.a.createElement("div",{className:"Main_container"},r.a.createElement(b.a,{to:"/add",className:"Main_add"},r.a.createElement(C,{name:"plus-circle"})," "," ","ADD"),r.a.createElement(N,{list:this.props.contacts,onDelete:this.props.deleteContact})))}}]),t}(n.Component),O=(a(34),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).onChangeName=function(e){a.setState({name:e.target.value})},a.onChangePhone=function(e){a.setState({phone:e.target.value})},a.addContact=function(e){e.preventDefault();var t=a.state.phone;isNaN(t)?a.setState({error:!0,errorMessage:"Enter a valid Name or Phone Number"}):a.props.addContact({name:a.state.name,phone:a.state.phone})},a.state={name:"",phone:"",error:!1,errorMessage:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e;return this.state.error&&(e=this.state.errorMessage),r.a.createElement(n.Fragment,null,r.a.createElement(v,null,r.a.createElement("u",{className:"header_ul"},"Phone Directory")),r.a.createElement("div",{className:"AddContact_container"},r.a.createElement(b.a,{to:"/",className:"form_link"},r.a.createElement("u",{className:"header_ul"},"Go Back")),r.a.createElement("form",{className:"AddContact_form",onSubmit:this.addContact},r.a.createElement("div",{className:"form_control"},r.a.createElement("label",{htmlFor:"name"},"Name: "),r.a.createElement("input",{className:"form_input",type:"text",id:"name",onChange:this.onChangeName,required:!0})),r.a.createElement("div",{className:"form_control"},r.a.createElement("label",{htmlFor:"phone"},"Phone: "),r.a.createElement("input",{className:"form_input",type:"text",id:"phone",onChange:this.onChangePhone,required:!0})),r.a.createElement("h4",{className:"form_error"},e),r.a.createElement("hr",null),r.a.createElement("h3",null,r.a.createElement("u",{className:"header_ul"},"Contact to be added:")),r.a.createElement("div",{className:"form_display"},"Name: ",r.a.createElement("span",null,this.state.name)),r.a.createElement("div",{className:"form_display"},"Phone: ",r.a.createElement("span",null,this.state.phone)),r.a.createElement("button",{type:"submit",className:"form_add"},"ADD"))))}}]),t}(n.PureComponent)),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).addContact=function(e){var t=e.name,n=e.phone,r=Object(o.a)(a.state.contacts);r.push({name:t,phone:n,id:r.length+1}),a.setState({contacts:r},function(){a.props.history.push("/")})},a.deleteContact=function(e){var t=a.state.contacts.filter(function(t){return t.id!==e});a.setState({contacts:t})},a.state={contacts:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement(E.a,{path:"/add",render:function(){return r.a.createElement(O,{addContact:e.addContact})}}),r.a.createElement(E.a,{path:"/",render:function(){return r.a.createElement(_,{contacts:e.state.contacts,deleteContact:e.deleteContact})}}))}}]),t}(n.Component),j=Object(p.a)(g);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(39);l.a.render(r.a.createElement(y.a,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.7284cf33.chunk.js.map