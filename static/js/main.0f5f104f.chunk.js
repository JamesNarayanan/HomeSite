(this["webpackJsonpjamesnarayanan.github.io"]=this["webpackJsonpjamesnarayanan.github.io"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/reactLogo.dd239681.svg"},function(e,t,n){e.exports=n.p+"static/media/pythonLogo.26252803.svg"},function(e,t,n){e.exports=n.p+"static/media/javaLogo.03d4f533.svg"},function(e,t,n){e.exports=n.p+"static/media/cppLogo.c8dcec0d.svg"},,,,function(e,t,n){e.exports=n(24)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(4),i=n.n(c),r=(n(17),n(18),n(19),n(3));n(20);var s=function(e){var t=300;return e.screenWidth<=600?t=e.screenWidth/2.5:e.screenWidth<=1200&&(t=e.screenWidth/4),t-=t*(1-e.opacity)*.9,o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:e.icon,alt:"",className:"swirlLogo position-fixed",onClick:function(){return e.onLogoClick(e.number)},style:{left:e.left,top:e.top,width:t+"px",opacity:e.opacity,display:e.opacity>0?"initial":"none",transform:"translate(-50%, -50%)",cursor:"pointer",zIndex:"1"}}),e.inFocus&&o.a.createElement("div",{className:"position-fixed text-center",style:{top:"50vh",left:"50vw",width:"90vw",transform:"translate(-50%, 0)"}},o.a.createElement("h1",{style:{fontSize:"3.5rem",color:"black"}},e.name),o.a.createElement("div",{style:{fontSize:"2rem"}},o.a.createElement("u",null,"Projects"),o.a.createElement("br",null),o.a.createElement("div",null,e.projects.map((function(e){return o.a.createElement("div",{className:"project"},o.a.createElement("a",{href:e.link},e.name))}))))))},l=n(5),m=n.n(l),d=n(6),u=n.n(d),h=n(7),p=n.n(h),f=n(8),v=n.n(f),g=[{name:"React",color:"cyan",icon:m.a,projects:[{name:"RoboGuide",link:"https://roboguide.tk"},{name:"Weather",link:"https://jamesnarayanan.github.io/weather"}]},{name:"Java",color:"#ff4444",icon:p.a,projects:[{name:"2020 FIRST Robotics Code",link:"https://github.com/Team41Robotics/2020-Robot-Code"},{name:"JavaFX Games",link:"https://github.com/JamesNarayanan/JavaFX"}]},{name:"Python",color:"#fe0",icon:u.a,projects:[{name:"Tape Detector",link:"https://github.com/Team41Robotics/tape_detector/"}]},{name:"C++",color:"#6196cb",icon:v.a,projects:[{name:"2019 FIRST Robotics Code",link:"https://github.com/Team41Robotics/2019-Robot-Code"}]}],w=n(9);var b=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),n=t[0],c=t[1];window.addEventListener("scroll",(function(){c(window.pageYOffset)}));var i=Object(a.useState)(window.innerWidth),l=Object(r.a)(i,2),m=l[0],d=l[1],u=Object(a.useState)(window.innerHeight),h=Object(r.a)(u,2),p=h[0],f=h[1];window.addEventListener("resize",(function(){d(window.innerWidth),f(window.innerHeight)}));var v=function(e){return e*(Math.PI/180)},b=0,y=[],E={x:35-m/400,y:12+p/100};E.y>25&&(E.y=25);for(var x=function(e){window.scrollTo({top:1e3*e,behavior:"smooth"})},k=0;k<g.length;k++){var j=.09*n+90-90*k,N=j%360,R="calc(50vw - ".concat(E.x,"vw * ").concat(Math.cos(v(j)),")"),S="calc(50vh - ".concat(E.y,"vh * ").concat(Math.sin(v(j)),")"),C="".concat(j>=-45&&j<=225?1-Math.abs(90-N)/135:0),W=N>=45&&N<135;b=W?k:b,y.push(o.a.createElement(s,{name:g[k].name,icon:g[k].icon,left:R,top:S,opacity:C,inFocus:W,projects:g[k].projects,number:k,screenWidth:m,onLogoClick:x}))}return document.documentElement.style.backgroundColor=g[b].color,document.documentElement.style.transition="0.5s",o.a.createElement(o.a.Fragment,null,o.a.createElement(w.a,null,o.a.createElement("title",null,"James Narayanan")),o.a.createElement("div",{id:"longSwirl",style:{height:"calc(".concat(1e3*(y.length-1),"px + 100vh)")}},o.a.createElement("div",{className:"position-fixed w-100 text-dark",style:{transition:"0.5s",backgroundColor:g[b].color,height:"100vh"}},y),o.a.createElement("div",{className:"position-fixed w-100 text-dark text-center",style:{top:"5px",fontFamily:"Bungee Shade"}},o.a.createElement("h1",null,o.a.createElement("a",{href:"https://github.com/JamesNarayanan"},"James Narayanan"))),o.a.createElement("div",{className:"position-fixed w-100 text-dark text-center",style:{bottom:"5px",transition:"0.25s",opacity:n<500?1:0}},o.a.createElement("h3",null,"Scroll down for more!"))))};var y=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.0f5f104f.chunk.js.map