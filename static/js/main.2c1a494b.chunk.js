(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(49)},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),s=n.n(c),u=(n(32),n(16)),l=n(17),o=n(22),i=n(18),m=n(23),p=n(4),d=n.n(p),f=n(6),E=n(24),v="https://jsonplaceholder.typicode.com",h=function(){var e=Object(f.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/users"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(f.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/posts"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(f.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/comments"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(d.a.mark(function e(){var t,n,a,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return t=e.sent,e.next=5,b();case 5:return n=e.sent,e.next=8,y();case 8:return a=e.sent,r=n.map(function(e){return Object(E.a)({},e,{user:t.find(function(t){return t.id===e.userId}),comments:a.filter(function(t){return t.postId===e.id})})}),e.abrupt("return",r);case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),k=n(52),x=n(53),j=function(e){var t=e.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"user"},r.a.createElement("h2",null,t.name),r.a.createElement("h3",null,t.email),r.a.createElement("p",null,t.address.city,t.address.street,r.a.createElement("p",null,"zipcode:",t.address.suite))))},g=function(e){var t=e.comment;return r.a.createElement("div",null,r.a.createElement("div",{className:"comment-writer"},r.a.createElement("b",null,t.name),r.a.createElement("span",{className:"italic"},"(email:",t.email,")")),r.a.createElement("p",{className:"comment-body"},t.body),r.a.createElement("p",null,"--- --- ---"))},N=function(e){var t=e.comments;return r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(g,{comment:e,key:e.id})}))},O=function(e){var t=e.question;return r.a.createElement("div",{className:"post-item"},r.a.createElement("div",{className:"question-block"},r.a.createElement(j,{user:t.user,key:t.user.id}),r.a.createElement("div",{className:"question"},r.a.createElement("h3",null,r.a.createElement("p",null,"Question:"),t.title),r.a.createElement("article",null,t.body))),r.a.createElement("div",{className:"comments"},r.a.createElement("h3",null,"Answers:"),r.a.createElement("div",{className:"comment-item"},r.a.createElement("hr",null),r.a.createElement(k.a,{defaultActiveKey:"1"},r.a.createElement(x.a,null,r.a.createElement(k.a.Toggle,{as:x.a.Header,eventKey:"0"},"Click for reading comments"),r.a.createElement(k.a.Collapse,{eventKey:"0"},r.a.createElement(x.a.Body,null,r.a.createElement("hr",null),r.a.createElement(N,{comments:t.comments}),r.a.createElement("hr",null))))),r.a.createElement("hr",null))))},C=function(e){var t=e.postsList;return r.a.createElement("main",{className:"posts-box"},t.map(function(e){return r.a.createElement(O,{question:e,key:e.id})}))},L=n(51),q=function(){var e=Object(f.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),A=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[],visiblePosts:[],isloaded:!1,isLoading:!1},n.handleClick=function(){n.setState({isLoading:!0}),setTimeout(function(){n.setState({isloaded:!0})},1200)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:t=e.sent,this.setState({visiblePosts:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Dynamic list of posts"),this.state.isloaded?r.a.createElement(C,{postsList:this.state.visiblePosts}):r.a.createElement("button",{type:"button",className:"btn btn-outline-dark",onClick:this.handleClick},this.state.isLoading?r.a.createElement(L.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):"Click for load posts"))}}]),t}(r.a.Component);n(48);s.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.2c1a494b.chunk.js.map