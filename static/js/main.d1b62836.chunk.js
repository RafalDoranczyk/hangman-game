(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(28)},28:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(3),l=n.n(a),s=n(13),c=n(8),o=n(9),u=n(14),d=n(10),f=n(15),m=n(2),k=n(1);function p(){var e=Object(m.a)(["\ndisplay: block;\nheight: 2.5rem;\nwidth: 2.5rem;\nfont-size: 2rem;\n"]);return p=function(){return e},e}var h=k.b.span(p()),v=function(e){var t=e.letter;return r.a.createElement(h,null,t.isShowed?t.name:"_")};function C(){var e=Object(m.a)(["\nflex-basis: 10%;\nheight: 10%;\n"]);return C=function(){return e},e}function b(){var e=Object(m.a)(["\nflex-basis: 20%;\nheight: 10%;\n"]);return b=function(){return e},e}function w(){var e=Object(m.a)(["\nflex-basis: 80%;\nwidth: 80%;\ndisplay: flex;\nflex-flow: row wrap;\nalign-items: center;\njustify-content: center;\n"]);return w=function(){return e},e}var H=k.b.div(w()),g=(k.b.div(b()),k.b.div(C())),x=function(e){var t=e.phraseToGuess.map(function(e){return" "!==e.name?r.a.createElement(v,{key:e.id,letter:e}):r.a.createElement(g,null)});return r.a.createElement(H,null,t)};function y(){var e=Object(m.a)(["\nflex-basis: 25%;\ndisplay: flex;\nflex-flow: column wrap;\njustify-content: space-around;\nalign-items: center;\nbackground-color: #29283F;\ncolor: #ddd;\n"]);return y=function(){return e},e}var j=k.b.div(y()),E=function(e){var t=e.phraseToGuess;return r.a.createElement(j,null,r.a.createElement(x,{phraseToGuess:t}))};function T(){var e=Object(m.a)(["\nflex-basis: 10%;\nheight: 15%;\nmargin: .5rem;\nfont-size: 1.5rem;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nborder-radius: 5px;\nfont-weight: 700;\nbox-shadow:",";\ncolor: ",";\nbackground-color: ",";\nopacity: ",";\ntransform: ",";  \ntransition-duration: .3s;\ntransition-property: color,background-color,opacity;\n"]);return T=function(){return e},e}var O=k.b.span(T(),function(e){var t=e.isClicked;return e.isHit?"0 .5rem 0 0 #69a982":t?"0 .5rem  0 0 #6f2232":"0 .5rem  0 0 #53516F"},function(e){return e.isClicked?"#53516F":"#fff"},function(e){return e.isClicked?"#15142E":"#000"},function(e){return e.isClicked?".6":"1"},function(e){return e.isClicked&&"translateY(.3rem)"}),G=function(e){var t=e.letter,n=e.clickLetter,i=e.isHit,a=e.isClicked;return r.a.createElement(O,{isClicked:a,onClick:n,isHit:i},t)};function S(){var e=Object(m.a)(["\nflex-basis: 40%;\nwidth: 100%;\ndisplay: flex;\nflex-flow: row wrap;\njustify-content: center;\nalign-items: center;\nbackground-color: #0B091F;\n"]);return S=function(){return e},e}var L=k.b.div(S()),U=function(e){var t=e.lettersToClick,n=e.clickLetter,i=t.map(function(e){return r.a.createElement(G,{clickLetter:function(e){n(e)},isClicked:e.isClicked,key:e.letter,isHit:e.isHit,letter:e.letter.toUpperCase()})});return r.a.createElement(L,null,i)};function z(){var e=Object(m.a)(["\nbackground-color: #444;\nheight: 100vh;\noverflow: hidden;\ndisplay: flex;\nflex-flow: column wrap;\njustify-content: space-evenly;\nalign-items: center;\n"]);return z=function(){return e},e}function F(){var e=Object(m.a)(["\n*{\nmargin: 0;\npadding: 0;\nbox-sizing: border-box;\nfont-weight: normal;\ncolor:white;\n}\n:root{\n    font-size: 10px;\n    font-family: 'Montserrat', sans-serif;\n}\n\n"]);return F=function(){return e},e}var I=Object(k.a)(F()),W=k.b.div(z()),B=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null),r.a.createElement(W,null,e.children))};function J(){var e=Object(m.a)(["\nflex-basis: 100%;\nbackground-color: #070523;\ntransform:scale(2);\n"]);return J=function(){return e},e}var M=k.b.div(J()),q=function(){return r.a.createElement(M,null)};function A(){var e=Object(m.a)(["\nflex-basis: 100%;\nbackground-color: #ddd;\ntransform: translateX(5rem) rotate(15deg) scale(2);\ntransform-origin: 20% 40%;\n\n"]);return A=function(){return e},e}var D=k.b.div(A()),X=function(e){return r.a.createElement(D,null)};function Y(){var e=Object(m.a)(["\nflex-basis: 35%;\nwidth: 100%;\ndisplay: flex;\nflex-flow: column wrap;\noverflow: hidden;\n\n\n"]);return Y=function(){return e},e}var $=k.b.div(Y()),_=function(e){return r.a.createElement($,null,r.a.createElement(q,null),r.a.createElement(X,null))},K=function(e){function t(){var e,n;Object(c.a)(this,t);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={phraseToGuess:[],lettersToClick:[{letter:"a",isClicked:!1,isHit:!1},{letter:"b",isClicked:!1,isHit:!1},{letter:"c",isClicked:!1,isHit:!1},{letter:"d",isClicked:!1,isHit:!1},{letter:"e",isClicked:!1,isHit:!1},{letter:"f",isClicked:!1,isHit:!1},{letter:"g",isClicked:!1,isHit:!1},{letter:"h",isClicked:!1,isHit:!1},{letter:"i",isClicked:!1,isHit:!1},{letter:"j",isClicked:!1,isHit:!1},{letter:"k",isClicked:!1,isHit:!1},{letter:"l",isClicked:!1,isHit:!1},{letter:"m",isClicked:!1,isHit:!1},{letter:"n",isClicked:!1,isHit:!1},{letter:"o",isClicked:!1,isHit:!1},{letter:"p",isClicked:!1,isHit:!1},{letter:"q",isClicked:!1,isHit:!1},{letter:"r",isClicked:!1,isHit:!1},{letter:"s",isClicked:!1,isHit:!1},{letter:"t",isClicked:!1,isHit:!1},{letter:"u",isClicked:!1,isHit:!1},{letter:"v",isClicked:!1,isHit:!1},{letter:"w",isClicked:!1,isHit:!1},{letter:"y",isClicked:!1,isHit:!1},{letter:"x",isClicked:!1,isHit:!1},{letter:"z",isClicked:!1,isHit:!1}],mistakes:0,time:0},n.pressLetterHandler=function(e){var t=n.state,i=t.lettersToClick,r=t.phraseToGuess,a=i.findIndex(function(t){return t.letter.toUpperCase()===e});i[a].isClicked||-1!==a&&(i[a].isClicked=!0,r.map(function(t){t.name===e&&(t.isShowed=!0,i[a].isHit=!0)}),n.setState({phraseToGuess:r,lettersToClick:i}))},n.clickLetterHandler=function(e){var t=n.state,i=t.lettersToClick,r=t.phraseToGuess,a=e.target.textContent,l=i.findIndex(function(e){return e.letter.toUpperCase()===a.toUpperCase()});i[l].isClicked=!0,r.map(function(e){e.name===a&&(e.isShowed=!0,i[l].isHit=!0)}),n.setState({phraseToGuess:r,lettersToClick:i})},n.startTimeHandler=function(){var e=0;setInterval(function(){n.setState({time:e++})},1e3)},n}return Object(f.a)(t,e),Object(o.a)(t,[{key:"componentWillUpdate",value:function(){var e=this;document.addEventListener("keypress",function(t){return e.pressLetterHandler(t.key.toUpperCase())})}},{key:"componentDidMount",value:function(){var e=this.state.phraseToGuess;Object(s.a)("The Great Wall of China").map(function(t,n){return e.push({name:t.toUpperCase(),id:n,isShowed:!1})}),e.filter(function(e){return" "===e.name||","===e.name||"-"===e.name?e.isShowed=!0:e.isShowed=!1}),this.setState({phraseToGuess:e}),this.startTimeHandler()}},{key:"render",value:function(){console.log(this.state.time);var e=this.state,t=e.phraseToGuess,n=e.lettersToClick;return r.a.createElement(B,null,r.a.createElement(_,null),r.a.createElement(E,{phraseToGuess:t}),r.a.createElement(U,{lettersToClick:n,clickLetter:this.clickLetterHandler}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.d1b62836.chunk.js.map