(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n.p+"static/media/player_walk.9f19440f.png"},27:function(e,t,n){e.exports=n(47)},32:function(e,t,n){},33:function(e,t,n){},43:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(22),o=n.n(r),i=(n(32),n(50)),u=n(51),l=n(49),s=n(9),p=n(10),d=n(13),m=n(11),E=n(14),f=(n(33),n(23)),h=n.n(f)()({basename:"/"}),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).play=function(){n.setState({play:!0,pause:!1}),n.audio.play()},n.pause=function(){n.setState({play:!1,pause:!0}),n.audio.pause()},n.state={play:!0,pause:!1},n.url="https://ericskiff.com/music/Resistor%20Anthems/05%20Come%20and%20Find%20Me.mp3",n.audio=new Audio(n.url),n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){setTimeout(this.play,1e3)}},{key:"componentWillUnmount",value:function(){this.pause()}},{key:"render",value:function(){var e=this;return console.log(this.state),c.a.createElement("div",{className:"menu"},c.a.createElement("div",{className:"menu_logo"}),c.a.createElement("div",{className:"menu_buttons_container"},c.a.createElement("div",{className:"menu_button_new_game",onClick:function(){h.push("/game"),e.pause()}},"START NEW GAME"),c.a.createElement("div",{className:"menu_button"},"OPTIONS"),c.a.createElement("div",{className:"menu_button"},"SCORE")),c.a.createElement("div",{style:{backgroundColor:"green"}},c.a.createElement("button",{onClick:this.play},"Play"),c.a.createElement("button",{onClick:this.pause},"Pause")))}}]),t}(a.Component),y=n(6),b=n(24),O=n.n(b),w=n(5),g=n(8),_={position:[0,40],spriteLocation:"0 0",direction:"EAST",walkIndex:0},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVE_PLAYER":return Object(y.a)({},t.payload);default:return e}},T={tiles:[]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TILES":return Object(y.a)({},t.payload);default:return e}},x=Object(g.b)({player:S,map:k}),j=Object(g.c)(x,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),N=40,A=15*N,C=30*N;var I=Object(w.b)(function(e){return Object(y.a)({},e.player)})(function(e){function t(e,t){switch(e){case"SOUTH":return"".concat(N*t,"px ").concat(0*N,"px");case"EAST":return"".concat(N*t,"px ").concat(1*N,"px");case"WEST":return"".concat(N*t,"px ").concat(2*N,"px");case"NORTH":return"".concat(N*t,"px ").concat(3*N,"px")}}function n(e,n){var a=function(){var e=j.getState().player.walkIndex;return e>=7?0:e+1}();j.dispatch({type:"MOVE_PLAYER",payload:{position:n,direction:e,walkIndex:a,spriteLocation:t(e,a)}})}function a(e){var t=j.getState().player.position,a=function(e,t){switch(t){case"WEST":return[e[0]-N,e[1]];case"EAST":return[e[0]+N,e[1]];case"NORTH":return[e[0],e[1]-N];case"SOUTH":return[e[0],e[1]+N]}}(t,e);(function(e,t){return console.log(e),t[0]>=0&&t[0]<=C-N&&t[1]>=0&&t[1]<=A-N})(t,a)&&function(e,t){var n=j.getState().map.tiles,a=t[1]/N,c=t[0]/N;return n[a][c]<5}(0,a)&&n(e,a)}return window.addEventListener("keydown",function(e){!function(e){switch(e.preventDefault(),e.keyCode){case 37:return a("WEST");case 38:return a("NORTH");case 39:return a("EAST");case 40:return a("SOUTH");default:console.log(e.keyCode)}}(e)}),e}(function(e){return console.log(e),c.a.createElement("div",{style:{position:"absolute",top:e.position[1],left:e.position[0],backgroundImage:"url('".concat(O.a,"')"),backgroundPosition:e.spriteLocation,width:"40px",height:"40px"}})}));n(43);function D(e){switch(e){case 0:return"grass";case 5:return"rock";case 6:return"tree";case 7:return"fridge"}}function L(e){return c.a.createElement("div",{style:{height:N,width:N},className:"tile ".concat(D(e.tile))})}function R(e){return c.a.createElement("div",{className:"row"},e.tiles.map(function(e){return c.a.createElement(L,{tile:e})}))}var H=Object(w.b)(function(e){return{tiles:e.map.tiles}})(function(e){return c.a.createElement("div",{style:{backgroundColor:"#1c8a1c",width:"1200px",height:"560px",border:"4px solid white"}},e.tiles.map(function(e){return c.a.createElement(R,{tiles:e})}))}),P=[[0,0,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[6,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];var U=function(e){return j.dispatch({type:"ADD_TILES",payload:{tiles:P}}),c.a.createElement("div",{style:{position:"relative",width:"1200px",height:"520px",margin:"20px auto"}},c.a.createElement(H,null),c.a.createElement(I,null))},M=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(U,null))}}]),t}(a.Component);var W=function(e){return c.a.createElement(i.a,{history:h},c.a.createElement(u.a,null,c.a.createElement(l.a,{exact:!0,path:"/Incoder/",component:v}),c.a.createElement(l.a,{path:"/game",render:function(){return c.a.createElement(M,null)}})))};o.a.render(c.a.createElement(w.a,{store:j},c.a.createElement(W,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.4e43121d.chunk.js.map