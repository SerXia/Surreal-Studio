(this["webpackJsonpsurreal-studio"]=this["webpackJsonpsurreal-studio"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('{"Standard":{"opened":true,"items":[{"title":"Stickers","description":"$2.50 for 1 / $5 for 3","images":["mRZIicB.png"]},{"title":"Avatars","description":"$5 (+$2 per added character)","images":["2BNtT9o.png"]},{"title":"Headshots","description":"$5 (+$2 per added character)","images":["CDiBE7y.png"]},{"title":"Fullbodies","description":"$10 (+$5 per added character)","images":["GN4RcjU.png"]},{"title":"Reference Sheet","description":"$20 (includes 1 fullbody, headshot, and color palette/accessories)\\nExtra details (ex: outfits) can increase the price up to $30 max.","images":["bvDj33t.png"]}]},"Animated":{"opened":true,"items":[{"title":"Wiggle Avatar","description":"$8 (+$2 per added character)","images":["1Q6XfKK.gif"]}]},"Pixel":{"opened":true,"items":[{"title":"Pagedoll","description":"$8 (+$5 per added character)\\nSize can be 250x250 or 350x350","images":["DFTk06b.png"]}]},"Emojis":{"opened":true,"items":[{"title":"Emojis","description":"$2 for 1 / $5 for 3 (+$2 per animated)","images":["pDvc0Tp.png","k3oDitx.png","yZDFKjL.png"]}]}}')},,,,,,,function(e,t,a){e.exports=a.p+"static/media/background_1.bd4f2fca.jpg"},,function(e,t,a){e.exports=a.p+"static/media/Home.fa2c07da.svg"},function(e,t,a){e.exports=a.p+"static/media/Commissions.63ac4559.svg"},function(e,t,a){e.exports=a.p+"static/media/FurAffinity.72f056a4.svg"},function(e,t,a){e.exports=a.p+"static/media/DeviantArt.cf3cae8b.svg"},function(e,t,a){e.exports=a.p+"static/media/ToyHouse.98364aac.svg"},function(e,t,a){e.exports=a.p+"static/media/Discord.33a5aa61.svg"},function(e,t,a){e.exports=a.p+"static/media/Sidebar.b3f49afd.svg"},,,,function(e,t,a){e.exports=a(54)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n,c,i,r,s=a(0),o=a.n(s),l=a(21),m=a.n(l),u=(a(40),a(3)),d=a(4),p=a(6),f=a(5),v=a(22),h=a(32),b=a(1),g=(a(41),a(13)),E=(a(42),function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={active:!1,locked:!1,modals:[],closing:[]},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;n=function(t){if(!e.state.locked){var a=e.state.modals;a.push(t),e.setState({modals:a,active:!0})}},c=function(){if(e.state.modals.length>0){var t=Object(g.a)(e.state.modals),a=e.state.modals[t.length-1],n=Object(g.a)(e.state.closing);t.pop(a),n.push(a),e.state.active&&(e.setState({active:t.length>0,locked:!0,closing:n}),setTimeout((function(){e.state.closing.pop(a),e.setState({modals:t,locked:!1})}),300))}},i=function(e){navigator.clipboard.writeText(e),n(o.a.createElement("div",{className:"ClipboardModal",onClick:function(){return c()}},o.a.createElement("span",null,'"',e,'" copied to clipboard!')))},r=function(e){return n(o.a.createElement("div",{className:"ImageModal",onClick:function(){return c()},style:{backgroundImage:"url(".concat(e,")")}}))}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"ModalContainer"+(this.state.active?" Active":""),onClick:function(e){(e.target==e.currentTarget||e.target.classList.contains("Modal"))&&c()}},this.state.modals.map((function(t){return o.a.createElement("div",{key:e.state.modals.indexOf(t),className:"Modal"+(e.state.closing.includes(t)||e.state.modals.indexOf(t)<e.state.modals.length-1&&0==e.state.closing.length?" Closing":""),style:{zIndex:10*e.state.modals.indexOf(t)}},t)})))}}]),a}(o.a.Component)),y=(a(43),a(23)),O=a.n(y),k=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"MainPage"},o.a.createElement("div",{className:"Background",style:{backgroundImage:"url(".concat(O.a,")")}},o.a.createElement("div",{className:"Overlay"})),o.a.createElement("div",{className:"Head"},o.a.createElement("div",{className:"Title"},"Hello!"),o.a.createElement("div",{className:"Description"},"This is my art shop!"),o.a.createElement("div",{className:"Description",style:{animationDelay:"3.5s"}},"You can view my commission prices ",o.a.createElement("a",{href:"#/commissions"},"here"),".")))}}]),a}(o.a.Component),j=(a(44),a(45),function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={active:null},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.setState({active:this.props.tabs[0]})}},{key:"render",value:function(){var e=this,t=o.a.Children.toArray(this.props.children);return o.a.createElement("div",null,o.a.createElement("div",{className:"TabsList"},this.props.tabs.map((function(t){return o.a.createElement("span",{key:t,className:"TabItem"+(t==e.state.active?" Active":""),onClick:function(){e.setState({active:t}),e.props.onChange&&e.props.onChange(t,e)}},o.a.createElement("span",{className:"TabItemTitle"},t),o.a.createElement("div",{className:"TabItemBorder"}))}))),t.find((function(t){return t.props.tab==e.state.active})))}}]),a}(o.a.Component)),N=a(16),C=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){a.Data=N}},{key:"render",value:function(){var e=["Standard","Animated","Pixel","Emojis"];return o.a.createElement("div",{className:"CommsPage"},o.a.createElement("div",{className:"TabsContainer"},o.a.createElement(j,{tabs:e},e.map((function(e){return o.a.createElement("div",{key:e,tab:e},o.a.createElement(x,N[e]))})))))}}]),a}(o.a.Component),x=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"renderDescription",value:function(e){return o.a.createElement("div",{className:"Description",dangerouslySetInnerHTML:{__html:e.replace(/\$\S*(?!$)/g,(function(e){return'<span class="Price">'.concat(e,"</span>")})).replace(/\(.*\)/g,(function(e){return'<span class="Group">'.concat(e,"</span>")})).replace(/\s[0-9](?=([^0-9]|$))/g,(function(e){return'<span class="Number">'.concat(e,"</span>")})).replace(/\n/g,"<br/>")}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.opened,n=t.items;return o.a.createElement("div",null,o.a.createElement("div",{className:"Status "+(a?"Opened":"Closed")},a?"OPEN":"CLOSED"),o.a.createElement("div",{className:"Status Desc"},a?"Shading is free, just ask.":"Commissions are currently closed here, please check back later!"),o.a.createElement("div",{className:"Items"},n.map((function(t){var a=t.title,n=t.description,c=t.images;return o.a.createElement("div",{className:"CommissionItem"},o.a.createElement("div",{className:"Title"},a),e.renderDescription(n),o.a.createElement("div",{className:"Images"},c.map((function(e){return o.a.createElement("img",{key:e,src:"https://i.imgur.com/"+e,onClick:function(){return r("https://i.imgur.com/"+e)}})}))))}))))}}]),a}(o.a.Component),S=a(24),w=(a(46),function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={toasts:[]},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;a.instance=this,a.showToast=function(t){e.state.toasts.push(t),e.forceUpdate()}}},{key:"componentDidUpdate",value:function(){var e,t=this,a=Object(S.a)(this.state.toasts);try{var n=function(){var a=e.value;if(null!=a.timeout)return"continue";a.timeout=setTimeout((function(){a.closing=!0,t.forceUpdate(),setTimeout((function(){t.state.toasts.splice(t.state.toasts.indexOf(a),1),t.forceUpdate()}),500)}),1e3*a.life)};for(a.s();!(e=a.n()).done;)n()}catch(c){a.e(c)}finally{a.f()}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"ToastsContainer"},Object(g.a)(this.state.toasts).map((function(t){return o.a.createElement("div",{key:e.state.toasts.indexOf(t),className:"Toast "+(t.closing?"Closing":"Active")+" "+t.type},o.a.createElement("span",null,t.text))})))}}]),a}(o.a.Component)),D=a(34),T=(a(47),a(48),function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("a",Object.assign({className:"LinkWrapper"},this.props),this.props.children)}}]),a}(o.a.Component)),M=100,$=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.href,a=e.icon,n=e.scale,c=e.children,i=e.iconStyle,r=void 0===i?{}:i,s=e.onClick,l=e.className,m=void 0===l?"":l;return M--,o.a.createElement(T,{className:"Container "+m,href:t,style:{zIndex:M},onClick:s},o.a.createElement("div",{className:"Button"},o.a.createElement("img",{className:"Icon",src:a,style:Object(D.a)({width:30*(n||1)},r)}),o.a.createElement("span",{className:"Content"},c)))}}]),a}(o.a.Component),A=a(25),I=a.n(A),B=a(26),H=a.n(B),L=a(27),P=a.n(L),F=a(28),U=a.n(F),R=a(29),W=a.n(R),z=a(30),J=a.n(z),K=a(31),X=a.n(K),_=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={sidebarOpen:!1},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.isMobile;return o.a.createElement("header",{className:"Header "+(this.state.sidebarOpen?"Active":"Inactive")},o.a.createElement("div",{className:"HeaderButtons"},t?o.a.createElement($,{icon:X.a,className:"RouteButton",onClick:function(){return e.setState({sidebarOpen:!e.state.sidebarOpen})}}):null,o.a.createElement($,{icon:I.a,href:"#/",onClick:function(){return e.setState({sidebarOpen:!1})}},"Home"),o.a.createElement($,{icon:H.a,href:"#/commissions",scale:.8,onClick:function(){return e.setState({sidebarOpen:!1})}},"Commissions"),o.a.createElement($,{icon:J.a,scale:.8,onClick:function(){return i("SerXia#2092")}},"Copy my Discord tag"),o.a.createElement($,{icon:U.a,href:"https://www.deviantart.com/serx1a",scale:.5,iconStyle:{marginLeft:7}},"My DeviantArt"),o.a.createElement($,{icon:W.a,href:"https://toyhou.se/SerXia",scale:.85},"My Toyhou.se"),o.a.createElement($,{icon:P.a,href:"https://www.furaffinity.net/user/serx1a/",iconStyle:{marginTop:-3}},"My FurAffinity")),o.a.createElement("span",{className:"HeaderMain"},"Surreal Studio"))}}]),a}(o.a.Component);function G(){var e=Object(v.useMediaQuery)({query:"(max-width: 1224px)"});return G.showNotice=function(e){n(o.a.createElement("div",{className:"ClipboardModal",onClick:function(){return c()}},o.a.createElement("span",null,e)))},o.a.createElement("div",{className:"App "+(e?"Mobile":"Desktop")},o.a.createElement("div",null,o.a.createElement(_,{isMobile:e}),o.a.createElement("div",{className:"Main"},o.a.createElement(h.a,{basename:"/"},o.a.createElement(b.c,null,o.a.createElement(b.a,{exact:!0,path:"/",component:k}),o.a.createElement(b.a,{path:"/commissions",component:C})))),o.a.createElement("footer",{className:"Footer"},o.a.createElement("span",null,o.a.createElement("a",{href:"https://fontawesome.com/license"},"Icon License")," | Copyright \xa9 2020 Surreal Studio | Site by ",o.a.createElement("a",{href:"https://metalloriff.github.io/toms-discord-stuff/#/contact"},"Metalloriff")))),o.a.createElement(E,null),o.a.createElement(w,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[35,1,2]]]);
//# sourceMappingURL=main.eed8d0c6.chunk.js.map