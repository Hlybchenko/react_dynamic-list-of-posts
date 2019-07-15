(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(49)},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(9),c=n.n(s),l=(n(32),n(16)),o=n(17),u=n(22),i=n(18),m=n(23),p=n(4),d=n.n(p),f=n(6),h=n(51),v=n(24),E="https://jsonplaceholder.typicode.com",b=function(){var e=Object(f.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E,"/users"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(f.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E,"/posts"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E,"/comments"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(f.a)(d.a.mark(function e(){var t,n,a,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:return t=e.sent,e.next=5,y();case 5:return n=e.sent,e.next=8,w();case 8:return a=e.sent,r=n.map(function(e){return Object(v.a)({},e,{user:t.find(function(t){return t.id===e.userId}),comments:a.filter(function(t){return t.postId===e.id})})}),e.abrupt("return",r);case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),k=n(52),j=n(53),N=function(e){var t=e.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"user"},r.a.createElement("h2",null,t.name),r.a.createElement("h6",null,t.email),r.a.createElement("div",null,t.address.city,t.address.street,r.a.createElement("p",null,"zipcode:",t.address.suite))))},g=function(e){var t=e.comment;return r.a.createElement("div",null,r.a.createElement("div",{className:"comment-writer"},r.a.createElement("b",null,t.name),r.a.createElement("span",{className:"italic"},"(email:",t.email,")")),r.a.createElement("p",{className:"comment-body"},t.body),r.a.createElement("p",null,"--- --- ---"))},O=function(e){var t=e.comments;return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(g,{comment:e,key:e.id})}))},C=function(e){var t=e.question;return r.a.createElement("div",{className:"post-item"},r.a.createElement("div",{className:"question-block"},r.a.createElement(N,{user:t.user,key:t.user.id}),r.a.createElement("div",{className:"question"},r.a.createElement("h4",null,r.a.createElement("p",null,"Question:"),t.title),r.a.createElement("article",null,t.body))),r.a.createElement("div",{className:"comments"},r.a.createElement("h4",null,"Answers:"),r.a.createElement("div",{className:"comment-item"},r.a.createElement("hr",null),r.a.createElement(k.a,{defaultActiveKey:"1"},r.a.createElement(j.a,null,r.a.createElement(k.a.Toggle,{as:j.a.Header,eventKey:"0"},"Click for reading comments"),r.a.createElement(k.a.Collapse,{eventKey:"0"},r.a.createElement(j.a.Body,null,r.a.createElement("hr",null),r.a.createElement(O,{comments:t.comments}),r.a.createElement("hr",null))))),r.a.createElement("hr",null))))},L=function(e){var t=e.postsList;return r.a.createElement("main",{className:"posts-box"},t.map(function(e){return r.a.createElement(C,{question:e,key:e.id})}))},F=function(){var e=Object(f.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),P=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[],visiblePosts:[],isloaded:!1,isLoading:!1},n.handleClick=function(){n.setState({isLoading:!0}),setTimeout(function(){n.setState({isloaded:!0})},1200)},n.onSearchPosts=function(e){var t=e.target.value;n.setState(function(e){return{visiblePosts:e.posts.filter(function(e){return[e.title,e.body].join("").toLowerCase().includes(t.toLowerCase())})}})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,this.setState({visiblePosts:t,posts:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"text-monospace"},r.a.createElement("h1",null,"Dynamic list of posts"),this.state.isloaded?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"search-box"},r.a.createElement("label",{className:"search",htmlFor:"searchField"},r.a.createElement("input",{className:"form-control",onChange:this.onSearchPosts,type:"input",placeholder:"search posts",id:"searchField"}))),r.a.createElement(L,{postsList:this.state.visiblePosts})):r.a.createElement("div",{className:"button-box"},r.a.createElement("button",{type:"button",className:"btn btn-outline-dark",onClick:this.handleClick},this.state.isLoading?r.a.createElement(h.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):"Click for load posts")))}}]),t}(r.a.Component);n(48);c.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.4d38dc74.chunk.js.map