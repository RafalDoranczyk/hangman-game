(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(28)},28:function(e,t,n){"use strict";n.r(t);var r=n(0),l=n.n(r),i=n(3),a=n.n(i),c=n(13),s=n(8),o=n(9),u=n(14),d=n(10),k=n(15),p=function(e){var t=e.letter;return l.a.createElement("span",null,"   ",t.isShowed?t.name:"_ "," ")},C=function(e){return l.a.createElement("h4",null,"hint")},m=function(e){var t=e.playerLetter,n=e.phraseToGuess.map(function(e){return l.a.createElement(p,{key:e.id,letter:e})}),r=t?l.a.createElement("h2",null,"Your last letter: ",t):l.a.createElement("h2",null,"Press or click key to start!");return l.a.createElement(l.a.Fragment,null,r,l.a.createElement(C,null),n)},f=n(2),h=n(1);function v(){var e=Object(f.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nborder: 2px solid black;\nheight: 4rem;\nwidth: 4rem;\nmargin: 10px;\nbackground-color: ",";\n"]);return v=function(){return e},e}var b=h.b.span(v(),function(e){return e.isClicked?"#222":"#aaa"}),w=function(e){var t=e.letter,n=e.isClicked,r=e.clickLetter;return l.a.createElement(b,{onClick:r,isClicked:n},t)};function y(){var e=Object(f.a)(["\ndisplay: flex;\nflex-flow: row wrap;\nmargin-top: 100px;\n"]);return y=function(){return e},e}var g=h.b.div(y()),E=function(e){var t=e.lettersToClick,n=e.clickLetter,r=t.map(function(e){return l.a.createElement(w,{clickLetter:function(e){n(e)},key:e.letter,isClicked:e.isClicked,letter:e.letter.toUpperCase()})});return l.a.createElement(g,null,r)};function T(){var e=Object(f.a)(["\nbackground-color: #444;\nmin-height: 100vh;\n"]);return T=function(){return e},e}function L(){var e=Object(f.a)(["\n*{\nmargin: 0;\npadding: 0;\nbox-sizing: border-box;\n}\n:root{\n    font-size: 10px;\n}\n\n"]);return L=function(){return e},e}var j=Object(h.a)(L()),x=h.b.div(T()),O=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,null),l.a.createElement(x,null,e.children))},G=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={playerLetter:"",phraseToGuess:[],lettersToClick:[{letter:"a",isClicked:!1},{letter:"b",isClicked:!1},{letter:"c",isClicked:!1},{letter:"d",isClicked:!1},{letter:"e",isClicked:!1},{letter:"f",isClicked:!1},{letter:"g",isClicked:!1},{letter:"h",isClicked:!1},{letter:"i",isClicked:!1},{letter:"j",isClicked:!1},{letter:"k",isClicked:!1},{letter:"l",isClicked:!1},{letter:"m",isClicked:!1},{letter:"n",isClicked:!1},{letter:"o",isClicked:!1},{letter:"p",isClicked:!1},{letter:"q",isClicked:!1},{letter:"r",isClicked:!1},{letter:"s",isClicked:!1},{letter:"t",isClicked:!1},{letter:"u",isClicked:!1},{letter:"v",isClicked:!1},{letter:"w",isClicked:!1},{letter:"y",isClicked:!1},{letter:"z",isClicked:!1}],mistakes:0},n.pressLetterHandler=function(e){var t=n.state,r=t.phraseToGuess,l=t.lettersToClick,i=l.findIndex(function(t){return t.letter.toUpperCase()===e.toUpperCase()});-1!==i&&(l[i].isClicked||(n.setState({playerLetter:e}),l[i].isClicked=!0,r.map(function(t){return t.name===e&&(t.isShowed=!0)}),n.setState({phraseToGuess:r,lettersToClick:l})))},n.clickLetterHandler=function(e){var t=n.state,r=t.lettersToClick,l=t.phraseToGuess,i=e.target.textContent,a=r.findIndex(function(e){return e.letter.toUpperCase()===i.toUpperCase()});r[a].isClicked||n.setState({playerLetter:i}),r[a].isClicked=!0,l.map(function(e){return e.name===i&&(e.isShowed=!0)}),console.log(r[a]),n.setState({phraseToGuess:l,lettersToClick:r})},n}return Object(k.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;document.addEventListener("keypress",function(t){return e.pressLetterHandler(t.key.toUpperCase())})}},{key:"componentDidMount",value:function(){var e=this.state.phraseToGuess;Object(c.a)("aleksander").map(function(t,n){return e.push({name:t.toUpperCase(),id:n,isShowed:!1})}),this.setState({phraseToGuess:e})}},{key:"render",value:function(){var e=this.state,t=e.playerLetter,n=e.phraseToGuess,r=e.lettersToClick;return l.a.createElement(O,null,l.a.createElement(m,{phraseToGuess:n,playerLetter:t}),l.a.createElement(E,{lettersToClick:r,clickLetter:this.clickLetterHandler}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.e553afef.chunk.js.map