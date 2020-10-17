(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],[,,,,,,,function(t,e,n){t.exports=n(15)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(6),i=n.n(r),s=(n(12),n(1)),l=n(2),c=n(4),u=n(3),h=(n(13),function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.x,n=t.y,a={style:t.style,left:"".concat(f*e+1,"px"),top:"".concat(f*n+1,"px"),width:"".concat(f-1,"px"),height:"".concat(f-1,"px")};return o.a.createElement("div",{className:"Cell",style:a})}}]),n}(o.a.Component)),f=20,m=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={cells:[],interval:100,isRunning:!1,frequency:20},a.saved=[[]],a.rows=void 0,a.cols=void 0,a.board=void 0,a.boardRef=void 0,a.timeoutHandler=void 0,a.rows=600/f,a.cols=800/f,a.board=a.makeEmptyBoard(),a}return Object(l.a)(n,[{key:"getElementOffset",value:function(){var t=this.boardRef.getBoundingClientRect(),e=document.documentElement;return{x:t.left+window.pageXOffset-e.clientLeft,y:t.top+window.pageYOffset-e.clientTop}}},{key:"handleClick",value:function(t){var e=this.getElementOffset(),n=t.clientX-e.x,a=t.clientY-e.y,o=Math.floor(n/f),r=Math.floor(a/f);o>=0&&o<=this.cols&&r>=0&&r<=this.rows&&(this.board[r][o]=!this.board[r][o]),this.setState({cells:this.makeCells()})}},{key:"clear",value:function(){this.board=this.makeEmptyBoard(),this.setState({cells:this.makeCells()})}},{key:"makeEmptyBoard",value:function(){for(var t=[],e=0;e<this.rows;e++){t.push([]);for(var n=0;n<this.cols;n++)t[e][n]=!1}return t}},{key:"runGame",value:function(){this.saved=this.board.map((function(t){return t.slice()})),this.setState({isRunning:!0}),this.runIteration()}},{key:"runIteration",value:function(){for(var t=this,e=this.makeEmptyBoard(),n=0;n<this.rows;n++)for(var a=0;a<this.cols;a++){var o=this.getNeighbors(this.board,n,a);this.board[n][a]?e[n][a]=2===o||3===o:3===o&&(e[n][a]=!0)}this.board=e,this.setState({cells:this.makeCells()}),this.timeoutHandler=window.setTimeout((function(){t.runIteration()}),this.state.interval)}},{key:"getNeighbors",value:function(t,e,n){for(var a=[],o=-1;o<2;o++)for(var r=-1;r<2;r++)0===o&&0===r||t[e+o]&&a.push(t[e+o][n+r]);return a.filter((function(t){return t})).length}},{key:"stopGame",value:function(){this.setState({isRunning:!1}),this.timeoutHandler&&(clearTimeout(this.timeoutHandler),this.timeoutHandler=null)}},{key:"handleIntervalChange",value:function(t){this.setState({interval:t.target.value})}},{key:"makeCells",value:function(){for(var t=[],e=0;e<this.rows;e++)for(var n=0;n<this.cols;n++)this.board[e][n]&&t.push({x:n,y:e,style:{background:"green"}});return t}},{key:"random",value:function(){for(var t=this.makeEmptyBoard(),e=0;e<this.rows;e++)for(var n=0;n<this.cols;n++){var a=Math.floor(Math.random()*Math.floor(100));t[e][n]=a<this.state.frequency}this.board=t,this.setState({cells:this.makeCells()})}},{key:"handleFrequencyChange",value:function(t){this.setState({frequency:t.target.value})}},{key:"undo",value:function(){this.board=this.saved,this.setState({cells:this.makeCells()})}},{key:"render",value:function(){var t=this,e=this.state.cells;return o.a.createElement("div",null,o.a.createElement("div",{onClick:function(e){return t.handleClick(e)},ref:function(e){t.boardRef=e},className:"Board",style:{width:800,height:600,backgroundSize:"".concat(f,"px ").concat(f,"px")}},e.map((function(t){return o.a.createElement(h,{style:t.style,x:t.x,y:t.y,key:"".concat(t.x,",").concat(t.y)})}))),o.a.createElement("div",{className:"controls"},"Update every ",o.a.createElement("input",{onChange:function(e){return t.handleIntervalChange(e)},value:this.state.interval})," ms",this.state.isRunning?o.a.createElement("button",{className:"button",onClick:function(){return t.stopGame()}},"Stop"):o.a.createElement("button",{className:"button",onClick:function(){return t.runGame()}},"Run"),o.a.createElement("button",{className:"button",onClick:function(){return t.clear()}},"Clear"),o.a.createElement("button",{className:"button",onClick:function(){return t.undo()}},"Undo"),o.a.createElement("button",{className:"button",onClick:function(){return t.random()}},"Random"),o.a.createElement("input",{onChange:function(e){return t.handleFrequencyChange(e)},value:this.state.frequency})))}}]),n}(o.a.Component);n(14);var d=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.499147a6.chunk.js.map