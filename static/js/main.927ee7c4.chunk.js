(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(28)},28:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),l=n(3),a=n.n(l),s=n(13),c=n(8),o=n(9),u=n(14),d=n(10),f=n(15),k=n(2),m=n(1);function p(){var e=Object(k.a)(["\ndisplay: block;\nheight: 2.5rem;\nwidth: 2.5rem;\nfont-size: 2rem;\n/* margin: auto; */\n"]);return p=function(){return e},e}var h=m.b.span(p()),C=function(e){var t=e.letter;return r.a.createElement(h,null,t.isShowed?t.name:"_")};function v(){var e=Object(k.a)(["\nflex-basis: 10%;\nheight: 10%;\n"]);return v=function(){return e},e}function b(){var e=Object(k.a)(["\nflex-basis: 100%;\nheight: 10%;\n"]);return b=function(){return e},e}function w(){var e=Object(k.a)(["\nflex-basis: 80%;\nwidth: 80%;\ndisplay: flex;\nflex-flow: row wrap;\nalign-items: center;\njustify-content: center;\n"]);return w=function(){return e},e}var H=m.b.div(w()),g=m.b.div(b()),x=m.b.div(v()),y=function(e){var t=e.phraseToGuess.map(function(e){return" "!==e.name?r.a.createElement(C,{key:e.id,letter:e}):" "===e.name?r.a.createElement(g,null):r.a.createElement(x,null)});return r.a.createElement(H,null,t)};function j(){var e=Object(k.a)(["\nflex-basis: 25%;\ndisplay: flex;\nflex-flow: column wrap;\njustify-content: space-around;\nalign-items: center;\nbackground-color: #222629;\ncolor: #ddd;\n"]);return j=function(){return e},e}var E=m.b.div(j()),T=function(e){var t=e.phraseToGuess;return r.a.createElement(E,null,r.a.createElement(y,{phraseToGuess:t}))};function O(){var e=Object(k.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nflex-basis: 10%;\nheight: 15%;\nmargin: .5rem;\nfont-size: 1.5rem;\nfont-weight: 700;\nbox-shadow:",";\ncolor: ",";\nbackground-color: ",";\nopacity: ",";\ntransition: .5s ease-out all;\n"]);return O=function(){return e},e}var G=m.b.span(O(),function(e){var t=e.isClicked;return e.isHit?"0 5px 0 0 #479761":t?"0 5px 0 0 #6f2232":"0 5px 0 0 #fff"},function(e){return e.isClicked?"#888":"#000"},function(e){return e.isClicked?"#000":"#6f6f76"},function(e){return e.isClicked?".6":"1"}),S=function(e){var t=e.letter,n=e.clickLetter,i=e.isHit,l=e.isClicked;return console.log(i),r.a.createElement(G,{isClicked:l,onClick:n,isHit:i},t)};function L(){var e=Object(k.a)(["\nflex-grow: 1;\ndisplay: flex;\nflex-flow: row wrap;\njustify-content: center;\nalign-items: center;\nbackground-color: #0b0c10;\noverflow: hidden;\n"]);return L=function(){return e},e}var U=m.b.div(L()),z=function(e){var t=e.lettersToClick,n=e.clickLetter,i=t.map(function(e){return r.a.createElement(S,{clickLetter:function(e){n(e)},isClicked:e.isClicked,key:e.letter,isHit:e.isHit,letter:e.letter.toUpperCase()})});return r.a.createElement(U,null,i)};function I(){var e=Object(k.a)(["\nbackground-color: #444;\nheight: 100vh;\noverflow: hidden;\ndisplay: flex;\nflex-flow: column nowrap;\njustify-content: space-evenly;\nalign-items: center;\n&>*{\n    width: 100%;\n}\n"]);return I=function(){return e},e}function M(){var e=Object(k.a)(["\n*{\nmargin: 0;\npadding: 0;\nbox-sizing: border-box;\nfont-weight: normal;\ncolor:white;\n}\n:root{\n    font-size: 10px;\n    font-family: 'Montserrat', sans-serif;\n}\n\n"]);return M=function(){return e},e}var W=Object(m.a)(M()),B=m.b.div(I()),D=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),r.a.createElement(B,null,e.children))};function J(){var e=Object(k.a)(["\nflex-basis: 35%;\n\n"]);return J=function(){return e},e}var q=m.b.div(J()),A=function(){return r.a.createElement(q,null)};function F(){var e=Object(k.a)(["\nflex-basis: 10%;\ndisplay: flex;\nflex-flow: column nowrap;\njustify-content: space-around;\nalign-items: center;\nbackground-color: #46344e;\n"]);return F=function(){return e},e}var Y=m.b.div(F()),$=function(e){return r.a.createElement(Y,null,r.a.createElement("h3",null,"Category: category"),r.a.createElement("h4",null,"Your hint: hint"))},_=function(e){function t(){var e,n;Object(c.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={phraseToGuess:[],lettersToClick:[{letter:"a",isClicked:!1,isHit:!1},{letter:"b",isClicked:!1,isHit:!1},{letter:"c",isClicked:!1,isHit:!1},{letter:"d",isClicked:!1,isHit:!1},{letter:"e",isClicked:!1,isHit:!1},{letter:"f",isClicked:!1,isHit:!1},{letter:"g",isClicked:!1,isHit:!1},{letter:"h",isClicked:!1,isHit:!1},{letter:"i",isClicked:!1,isHit:!1},{letter:"j",isClicked:!1,isHit:!1},{letter:"k",isClicked:!1,isHit:!1},{letter:"l",isClicked:!1,isHit:!1},{letter:"m",isClicked:!1,isHit:!1},{letter:"n",isClicked:!1,isHit:!1},{letter:"o",isClicked:!1,isHit:!1},{letter:"p",isClicked:!1,isHit:!1},{letter:"q",isClicked:!1,isHit:!1},{letter:"r",isClicked:!1,isHit:!1},{letter:"s",isClicked:!1,isHit:!1},{letter:"t",isClicked:!1,isHit:!1},{letter:"u",isClicked:!1,isHit:!1},{letter:"v",isClicked:!1,isHit:!1},{letter:"w",isClicked:!1,isHit:!1},{letter:"y",isClicked:!1,isHit:!1},{letter:"x",isClicked:!1,isHit:!1},{letter:"z",isClicked:!1,isHit:!1}],mistakes:0},n.pressLetterHandler=function(e){var t=n.state,i=t.lettersToClick,r=t.phraseToGuess,l=i.findIndex(function(t){return t.letter.toUpperCase()===e});i[l].isClicked||-1!==l&&(i[l].isClicked=!0,r.map(function(t){t.name===e&&(t.isShowed=!0,i[l].isHit=!0)}),n.setState({phraseToGuess:r,lettersToClick:i}))},n.clickLetterHandler=function(e){var t=n.state,i=t.lettersToClick,r=t.phraseToGuess,l=e.target.textContent,a=i.findIndex(function(e){return e.letter.toUpperCase()===l.toUpperCase()});i[a].isClicked=!0,r.map(function(e){e.name===l&&(e.isShowed=!0,i[a].isHit=!0)}),n.setState({phraseToGuess:r,lettersToClick:i})},n}return Object(f.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;document.addEventListener("keypress",function(t){return e.pressLetterHandler(t.key.toUpperCase())})}},{key:"componentDidMount",value:function(){var e=this.state.phraseToGuess;Object(s.a)("Sahara Desert").map(function(t,n){return e.push({name:t.toUpperCase(),id:n,isShowed:!1})}),e.filter(function(e){return" "===e.name||","===e.name||"-"===e.name?e.isShowed=!0:e.isShowed=!1}),this.setState({phraseToGuess:e})}},{key:"render",value:function(){console.log(this.state.lettersToClick);var e=this.state,t=e.phraseToGuess,n=e.lettersToClick;return r.a.createElement(D,null,r.a.createElement($,null),r.a.createElement(A,null),r.a.createElement(T,{phraseToGuess:t}),r.a.createElement(z,{lettersToClick:n,clickLetter:this.clickLetterHandler}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.927ee7c4.chunk.js.map