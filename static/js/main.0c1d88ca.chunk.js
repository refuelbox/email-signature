(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(230)},113:function(e,t,a){},115:function(e,t,a){},230:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),s=a.n(l),i=(a(113),a(91)),o=a(92),m=a(93),c=a(105),h=a(94),p=a(106),g=(a(115),a(117),"https://instagram.com/refuelbox"),b="https://twitter.com/refuelbox",u="https://www.facebook.com/refuelbox",E="https://github.com/ykmsd/email-signature/blob/master/src/img/instagram.png?raw=true",y="https://github.com/ykmsd/email-signature/blob/master/src/img/twitter.png?raw=true",d="https://github.com/ykmsd/email-signature/blob/master/src/img/facebook.png?raw=true",k="black",f="www.refuelbox.com",w="https://refuelbox.com/wp-content/uploads/2019/01/Email-signature-512x512_09.png",x="http://www.refuelbox.com",v=function(e){var t=e.name,a=e.position,n=e.email,l=e.skype,s=e.phone,i=e.skypeUrl;return r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("a",{href:x},r.a.createElement("img",{src:w,alt:"Logo",height:"80",width:"80"})),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("a",{href:b,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:y,alt:"",width:"16px",height:"16px",style:{marginRight:"3px"}})),r.a.createElement("a",{href:g,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:E,alt:"",width:"16px",height:"16px",style:{marginRight:"3px"}})),r.a.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:d,alt:"",width:"16px",height:"16px"})))),r.a.createElement("td",null,r.a.createElement("div",{style:{display:"block",borderLeft:"2px solid #272727",marginLeft:"5px",marginRight:"10px",height:"100px"}})),r.a.createElement("td",null,r.a.createElement("div",null,r.a.createElement("div",{style:{marginBottom:"10px"}},r.a.createElement("span",{style:{fontWeight:"bold"}},t),r.a.createElement("span",{style:{display:"block",fontSize:"11px"}},a)),r.a.createElement("div",{style:{fontSize:"11px"}},r.a.createElement("span",{style:{display:"block"}},"Email: ",r.a.createElement("a",{href:"mailto:"+n,style:{color:k}},n)),r.a.createElement("span",{style:{display:"block"}},"Skype: ",r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{style:{color:k}},l))),r.a.createElement("span",{style:{display:"block"}},"Phone: ",r.a.createElement("span",{style:{color:k}},s)),r.a.createElement("a",{href:"https://"+f,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{style:{display:"block"}},r.a.createElement("span",{style:{color:k}},f)))))))))},C=a(232),U=a(233),j=a(229),O=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(i.a)({},r,n))},e.resetSignature=function(){e.setState({name:"",position:"",email:"",skype:"",skypeUrl:"",phone:"",bannerUrl:"",bannerLink:""})},e.state={name:"",position:"",email:"",skype:"",skypeUrl:"",phone:"",bannerUrl:"",bannerLink:""},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e={labelCol:{span:6},wrapperCol:{span:14}};return r.a.createElement("div",{className:"App",style:{width:"500px",margin:"auto"}},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"ReFuel Box Email Signature"),r.a.createElement("p",null,"Please fill the form below to generate your signature")),r.a.createElement(C.a,{layout:"vertical",style:{marginBottom:"20px"}},r.a.createElement(C.a.Item,Object.assign({},e,{label:"Name"}),r.a.createElement(U.a,{name:"name",onChange:this.handleChange,value:this.state.name,style:{width:"100%"}})),r.a.createElement(C.a.Item,Object.assign({},e,{label:"Position"}),r.a.createElement(U.a,{name:"position",onChange:this.handleChange,value:this.state.position})),r.a.createElement(C.a.Item,Object.assign({},e,{label:"Email"}),r.a.createElement(U.a,{name:"email",onChange:this.handleChange,value:this.state.email})),r.a.createElement(C.a.Item,Object.assign({},e,{label:"Phone"}),r.a.createElement(U.a,{name:"phone",onChange:this.handleChange,value:this.state.phone})),r.a.createElement(C.a.Item,Object.assign({},e,{label:"Skype"}),r.a.createElement(U.a,{name:"skype",onChange:this.handleChange,value:this.state.skype})),r.a.createElement(C.a.Item,Object.assign({},e,{label:"Skype URL",style:{marginBottom:this.state.skype&&"0px"}}),r.a.createElement(U.a,{name:"skypeUrl",onChange:this.handleChange,value:this.state.skypeUrl})),this.state.skype&&r.a.createElement("span",{style:{display:"block",marginBottom:"30px"}},"To generate Skype URL, go to ",r.a.createElement("a",{href:"http://is.gd/",target:"_blank",rel:"noopener noreferrer"},"http://is.gd/")," and enter: ",r.a.createElement("strong",null,"skype:",this.state.skype,"?chat")),r.a.createElement(C.a.Item,Object.assign({},e,{label:"Banner URL"}),r.a.createElement(U.a,{name:"bannerUrl",onChange:this.handleChange,value:this.state.bannerUrl})),r.a.createElement(C.a.Item,Object.assign({},e,{label:"Banner Link"}),r.a.createElement(U.a,{name:"bannerLink",onChange:this.handleChange,value:this.state.bannerLink})),r.a.createElement(j.a,{onClick:this.resetSignature},"Reset Signature")),r.a.createElement("div",{style:{marginBottom:"30px"}},r.a.createElement(v,{name:this.state.name,position:this.state.position,email:this.state.email,skype:this.state.skype,skypeUrl:this.state.skypeUrl,phone:this.state.phone,style:{marginBottom:"30px"}}),this.state.bannerUrl&&r.a.createElement("div",null,r.a.createElement("a",{href:this.state.bannerLink,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:this.state.bannerUrl,alt:"banner",width:"500px",style:{marginTop:"10px"}})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[108,2,1]]]);
//# sourceMappingURL=main.0c1d88ca.chunk.js.map