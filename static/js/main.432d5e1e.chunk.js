(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(54)},54:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),s=n(22),c=n(16),l=n(17),u=n(23),f=n(18),m=n(24),d=n(2),h=n(1),p={colors:{white:"#fff",black:"#000",gray:"#D6D6D8",deep:"#140A25",green:"#69a982",red:"#6f2232",deepRed:"#400D2A"}};function b(){var e=Object(d.a)(["\nposition: absolute;\ntop: 50%;\nleft: 50%;\nheight: 100%;\nwidth: 100%;\noverflow: hidden;\nmax-width: 1000px;\ntransform: translate(-50%,-50%);\nbackground-color: black;\n"]);return b=function(){return e},e}function g(){var e=Object(d.a)(["\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-weight: normal;\n \n}\n* ::after, * ::before{\n    position: absolute;\n    content: '';\n}\n\n\n:root{\n    color:",";\n    font-size: 10px;\n    font-family: 'Montserrat', sans-serif;\n}\n"]);return g=function(){return e},e}var v=Object(h.b)(g(),function(e){return e.theme.colors.black}),k=h.c.div(b()),E=function(e){var t=e.isGameInProgress,n=e.children;return a.a.createElement(h.a,{theme:p},a.a.createElement(a.a.Fragment,null,a.a.createElement(v,{isGameInProgress:t}),a.a.createElement(k,null,n)))};function G(){var e=Object(d.a)(["\n    top: ",";\n    left: calc(5% + 14em - .2em);\n    transform: translateX(50%)  rotate(-50deg);\n    transform-origin: top left;\n    opacity: ",";\n    transition: ",";\n"]);return G=function(){return e},e}function w(){var e=Object(d.a)(["\n    top: ",";\n    left: calc(5% + 14em);\n    transform: translateX(-50%)  rotate(50deg);\n    transform-origin: top right;\n    opacity: ",";\n    transition: ",";\n"]);return w=function(){return e},e}function x(){var e=Object(d.a)(["\n      border-radius: 30%;\n    width: .2em;\n    height: 4em;\n   \n"]);return x=function(){return e},e}function j(){var e=Object(d.a)(["\n    top: ","; \n    left: calc(5% + 14em);\n    transform:  rotate(30deg);\n    transform-origin: top left;\n    opacity: ",";\n    transition: ",";\n"]);return j=function(){return e},e}function y(){var e=Object(d.a)(["\n    top: ","; \n    left: calc(5% + 14em - 3.2em);\n    transform: rotate(-30deg);\n    transform-origin: top right;\n    opacity: ",";\n    transition: ",";\n"]);return y=function(){return e},e}function T(){var e=Object(d.a)(["\n   height: .2em;\n   width: 3em;\n   border-radius: 30%;\n\n"]);return T=function(){return e},e}function L(){var e=Object(d.a)(["\n    top: ",";\n    height: 5em;\n    left: calc(5% + 14em);\n    width: .3em;\n    transform: translateX(-50%);\n    opacity: ",";\n    transition: ",";\n"]);return L=function(){return e},e}function O(){var e=Object(d.a)(["\n    top: ",";\n    height: 3.6em;\n    left: calc(5% + 14em);\n    transform: translateX(-50%);\n    width: 3.6em;\n    opacity: ",";\n    border: .1em solid white;\n    border-radius: 50%;\n    background-color: transparent;\n    transition: ",";\n    ::after,::before{\n        top: 20%;\n        height: 10%;\n        width: 10%;\n        border-radius: 50%;\n    }\n    ::after{\n        left: 25%;\n    \n    }\n    ::before{\n        right: 25%;\n    }\n"]);return O=function(){return e},e}function C(){var e=Object(d.a)(["\n    top: 5%;\n    height: 4em;\n    left: calc(5% + 14em);\n    width: .4em;\n    transform: translateX(-50%);\n    opacity: ",";\n\n"]);return C=function(){return e},e}function H(){var e=Object(d.a)(["\n    top: 5%;\n    height: .4em;\n    left: 5%;\n    width: 14em;\n"]);return H=function(){return e},e}function I(){var e=Object(d.a)(["\n    top: 5%;\n    bottom: 5%;\n    left: 5%;\n    width: .4em;\n    &::after{\n        top: 0%;\n        height: 4em;\n        left: 300%;\n        width: 100%;\n        transform: rotate(35deg);\n    }\n    "]);return I=function(){return e},e}function P(){var e=Object(d.a)(["\n    top: 95%;\n    height: .3em;\n    left: 5%;\n    width: 9em;\n"]);return P=function(){return e},e}function S(){var e=Object(d.a)(["\n    transition: .4s;\n    background-color: ",";\n    &::after,&::before{\n        background-color: ",";\n    }\n"]);return S=function(){return e},e}var N=h.c.div(S(),function(e){return e.theme.colors.white},function(e){return e.theme.colors.white}),D=Object(h.c)(N)(P()),F=Object(h.c)(N)(I()),z=Object(h.c)(N)(H()),q=Object(h.c)(N)(C(),function(e){return e.mistakesLeft<=6?"1":"0"}),W=Object(h.c)(N)(O(),function(e){var t=e.manFromTop;return"calc(".concat(t," + 4em)")},function(e){return e.mistakesLeft<=5?"1":"0"},function(e){return e.isGameEnded?"1s 1s linear all":".5s linear all"}),M=Object(h.c)(N)(L(),function(e){var t=e.manFromTop;return"calc(".concat(t," + 7.5em)")},function(e){return e.mistakesLeft<=4?"1":"0"},function(e){return e.isGameEnded?"1s 1s linear all":".5s linear all"}),U=Object(h.c)(N)(T()),X=Object(h.c)(U)(y(),function(e){var t=e.manFromTop;return"calc(".concat(t," + 7.6em)")},function(e){return e.mistakesLeft<=3?"1":"0"},function(e){return e.isGameEnded?"1s 1s linear all":".5s linear all"}),K=Object(h.c)(U)(j(),function(e){var t=e.manFromTop;return"calc(".concat(t," + 7.6em)")},function(e){return e.mistakesLeft<=2?"1":"0"},function(e){return e.isGameEnded?"1s 1s linear all":".5s linear all"}),R=Object(h.c)(N)(x()),A=Object(h.c)(R)(w(),function(e){var t=e.manFromTop;return"calc(".concat(t," + 7.5em + 5em)")},function(e){return e.mistakesLeft<=1?"1":"0"},function(e){return e.isGameEnded?"1s 1s linear all":".5s linear all"}),Y=Object(h.c)(R)(G(),function(e){var t=e.manFromTop;return"calc(".concat(t," + 7.5em + 5em)")},function(e){return e.mistakesLeft<=0?"1":"0"},function(e){return e.isGameEnded?"1s 1s linear all":".5s linear all"}),B=function(e){var t=e.mistakesLeft,n=e.isGameEnded,r=e.isGameWon,i=n&&r?"calc(30%)":"5%";return a.a.createElement(a.a.Fragment,null,a.a.createElement(D,null),a.a.createElement(F,null),a.a.createElement(z,null),a.a.createElement(q,{isGameEnded:n,mistakesLeft:t}),a.a.createElement(W,{isGameEnded:n,manFromTop:i,mistakesLeft:t}),a.a.createElement(M,{isGameEnded:n,manFromTop:i,mistakesLeft:t}),a.a.createElement(X,{isGameEnded:n,manFromTop:i,mistakesLeft:t}),a.a.createElement(A,{isGameEnded:n,manFromTop:i,mistakesLeft:t}),a.a.createElement(K,{isGameEnded:n,manFromTop:i,mistakesLeft:t}),a.a.createElement(Y,{isGameEnded:n,manFromTop:i,mistakesLeft:t}))};function J(){var e=Object(d.a)(["\nposition: absolute;\ntop: 60%;\nleft: 50%;\ntransform:translateX(-50%);\nheight: 50px;\nwidth: 150px;\nborder-radius: 50px;\nborder: none;\nfont-size: 1.1em;\nletter-spacing: 2px;\nbackground-color: ",";\ncolor: ",";\ncursor: pointer;\ntransition: .6s linear all;\n"]);return J=function(){return e},e}var _=h.c.button(J(),function(e){var t=e.theme;return e.disabled?t.colors.black:t.colors.deepRed},function(e){return e.theme.colors.gray}),$=function(e){var t=e.startGame,n=e.phraseToGuess,r=e.children;return a.a.createElement(_,{disabled:!(n.length>0),onClick:t},r)};function Q(){var e=Object(d.a)(["\ntop: 75%;\n/* background-color: #8F1D2C; */\n"]);return Q=function(){return e},e}var V=Object(h.c)(_)(Q()),Z=function(){return a.a.createElement(V,null,"Game Info")};function ee(){var e=Object(d.a)(["\nposition: relative;\nheight: 100%;\nwidth: 100%;\nbackground-color: ",";\n*{\n    opacity:1;\n    position: absolute;\n}\n"]);return ee=function(){return e},e}function te(){var e=Object(d.a)(["\nheight: 100%;\nwidth: 100%;\nopacity: ",";\ndisplay: flex;\nflex-flow: row wrap;\ntransition: .4s linear all;\n\nfont-size: 15px;\n"]);return te=function(){return e},e}var ne=h.c.div(te(),function(e){var t=e.isGameInProgress,n=e.isGameEnded;return t||n?"0":"1"}),re=h.c.div(ee(),function(e){return e.theme.colors.deep}),ae=function(e){var t=e.isGameInProgress,n=e.startGame,r=e.isGameEnded,i=e.phraseToGuess,o=e.children,s=i.length>0?"Start Game":"Loading...";return a.a.createElement(ne,{isGameEnded:r,isGameInProgress:t},a.a.createElement(re,null,a.a.createElement(B,null)),a.a.createElement($,{phraseToGuess:i,startGame:n},s),a.a.createElement(Z,null,o))};function ie(){var e=Object(d.a)(["\nposition: relative;\nheight: 100%;\nwidth:100%;\nfont-size: 9px;\nz-index: 1;\n*{\n\n    position: absolute;\n}\n"]);return ie=function(){return e},e}function oe(){var e=Object(d.a)(["\n    flex-grow: 1;\n    position: relative;\n    top: 0;\n    left: 0;\n    background-color: ",";\n"]);return oe=function(){return e},e}var se=h.c.div(oe(),function(e){return e.theme.colors.deep}),ce=h.c.div(ie()),le=function(e){var t=e.mistakesLeft;return a.a.createElement(se,null,a.a.createElement(ce,null,a.a.createElement(B,{mistakesLeft:t})))};function ue(){var e=Object(d.a)(["\n    flex-basis: 40%;\n    height: 20%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: .1rem;\n    font-size: 2rem;\n    background-color: ",";\n    border-radius: 100px;\n    color: ",";\n    position: relative;\n    &::before{\n        top: 100%;\n        transform: translate(-50%, -10%);\n        left: 50%;\n        width: 1rem;\n        height: 3rem;\n        border-radius: 20%;\n        background-color:",";\n    }\n"]);return ue=function(){return e},e}function fe(){var e=Object(d.a)(["\n    flex-basis: 40%;\n    height: 20%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    margin-bottom: .1rem;\n    background-color: ",";\n    border-radius: 100px;\n    color: ",";\n    position: relative;\n    &::before{\n        top: 50%;\n        transform: translate(-90%, -50%);\n        left: 0;\n        width: 5rem;\n        height: 1rem;\n        border-radius: 20%;\n        background-color: ",";\n    }\n"]);return fe=function(){return e},e}function me(){var e=Object(d.a)(["\n    flex-basis: 100%;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-around;\n    height: 40%;\n    font-weight: 700;\n"]);return me=function(){return e},e}function de(){var e=Object(d.a)(["\n    flex-basis: 100%;\n    height: 25%;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-around;\n    font-weight: 700;\n"]);return de=function(){return e},e}function he(){var e=Object(d.a)(["\n    flex-basis: 90.5%;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-around;\n    align-items: flex-end;\n"]);return he=function(){return e},e}function pe(){var e=Object(d.a)(["\n    flex-basis: 50%;\n    background-color: ",";\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-end;\n    text-align: center;\n    font-size: 1.4rem;\n    color: ",";\nspan{\n    display: block;\n}\n\n"]);return pe=function(){return e},e}var be=h.c.div(pe(),function(e){return e.theme.colors.deepRed},function(e){return e.theme.colors.gray}),ge=h.c.div(he()),ve=h.c.p(de()),ke=h.c.p(me()),Ee=h.c.div(fe(),function(e){return e.theme.colors.deep},function(e){return e.theme.colors.gray},function(e){return e.theme.colors.deep}),Ge=h.c.div(ue(),function(e){return e.theme.colors.black},function(e){return e.theme.colors.gray},function(e){return e.theme.colors.black}),we=function(e){var t=e.timeToNextLetter,n=e.mistakesLeft,r=e.questionInfo;return a.a.createElement(be,null,a.a.createElement(ge,null,a.a.createElement(ve,null,"Category ",a.a.createElement("span",null,r.category)," "),a.a.createElement(ke,null,"Hint ",a.a.createElement("span",null,r.hint)),a.a.createElement(Ee,null,n),a.a.createElement(Ge,null,t," ")))};function xe(){var e=Object(d.a)(["\n    flex-basis: 35%;\n    width: 100%;\n    display: flex;\n    flex-flow: row nowrap;\n    position: relative;\n    top: 0;\n    left: 0;\n    &::after{\n        top: -10%;\n        left: 35%;\n        right: 47%;\n        height: 110%;\n        transform: rotate(5deg);\n        background-color:",";\n    }\n"]);return xe=function(){return e},e}var je=h.c.div(xe(),function(e){return e.theme.colors.deep}),ye=function(e){var t=e.timeToNextLetter,n=e.mistakesLeft,r=e.questionInfo;return a.a.createElement(je,null,a.a.createElement(le,{mistakesLeft:n}),a.a.createElement(we,{questionInfo:r,mistakesLeft:n,timeToNextLetter:t}))};function Te(){var e=Object(d.a)(["\n    display: block;\n    height: 1.5rem;\n    width: 1.5rem;\n    font-size: 2rem;\n    margin-left: 1.4rem;\n    color: ",";\n"]);return Te=function(){return e},e}var Le=h.c.span(Te(),function(e){return e.theme.colors.gray}),Oe=function(e){var t=e.letterObj;return a.a.createElement(Le,null,t.isLetterShowed?t.letter:"__")};function Ce(){var e=Object(d.a)(["\n    flex-basis: 100%;\n    height: 1%;\n"]);return Ce=function(){return e},e}function He(){var e=Object(d.a)(["\n\n    flex-basis: 90%;\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    justify-content: center;\n    align-content: space-around;\n    text-align: center;\n\n"]);return He=function(){return e},e}var Ie=h.c.div(He()),Pe=h.c.div(Ce()),Se=function(e){var t=e.phraseToGuess.map(function(e){var t;return" "!==e.letter?t=a.a.createElement(Oe,{key:e.id,letterObj:e}):" "===e.letter&&(t=a.a.createElement(Pe,{key:e.id})),t});return a.a.createElement(Ie,null,t)};function Ne(){var e=Object(d.a)(["\n    flex-basis: 25%;\n    width: 100%;\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: space-around;\n    background-color: ",";\n"]);return Ne=function(){return e},e}var De=h.c.div(Ne(),function(e){return e.theme.colors.black}),Fe=function(e){var t=e.phraseToGuess;return a.a.createElement(De,null,a.a.createElement(Se,{phraseToGuess:t}))};function ze(){var e=Object(d.a)(["\n    flex-basis: 10%;\n    height: 15%;\n    margin: .5rem;\n    font-size: 1.5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n    font-weight: 700;\n    transform: ",";  \n    box-shadow: ",";\n    background-color: ",";\n    opacity: ",";\n    color: ",";\n    cursor: pointer;\n"]);return ze=function(){return e},e}var qe=h.c.span(ze(),function(e){return e.isClicked?"translateY(.2rem)":"scale(1.1)"},function(e){var t=e.isClicked,n=e.isHit,r=e.theme;return n?"0 .5rem 0 0 ".concat(r.colors.green):t?"0 .5rem  0 0 ".concat(r.colors.red):"0 0 .1rem 0 ".concat(r.colors.gray)},function(e){return e.theme.colors.black},function(e){return e.isClicked?".2":"1"},function(e){return e.theme.colors.gray}),We=function(e){var t=e.letter,n=e.clickLetter,r=e.isHit,i=e.isClicked,o=e.isGameEnded;return a.a.createElement(qe,{isGameEnded:o,isClicked:i,onClick:n,isHit:r},t)};function Me(){var e=Object(d.a)(["\n    height: 40%;\n    width: 100%;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n    align-items: center;\n    background-color: ",";\n  \n"]);return Me=function(){return e},e}var Ue=h.c.div(Me(),function(e){return e.theme.colors.deep}),Xe=function(e){var t=e.lettersToClick,n=e.clickLetter,r=e.isGameEnded,i=t.map(function(e){return a.a.createElement(We,{clickLetter:function(e,t){return n(e,t)},isClicked:e.isClicked,key:e.letter,isHit:e.isHit,letter:e.letter.toUpperCase(),isGameEnded:r})});return a.a.createElement(Ue,{isGameEnded:r},i)};function Ke(){var e=Object(d.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: space-evenly;\n    align-items: center;\n    transform: ",";\n    transition: ",";\n"]);return Ke=function(){return e},e}var Re=h.c.div(Ke(),function(e){var t=e.isGameInProgress,n=e.isGameEnded;return t||n?"translateX(0)":"translateX(100%)"},function(e){return e.isGameEnded?".4s .4s linear all":".4s linear all"}),Ae=function(e){var t=e.mistakesLeft,n=e.timeToNextLetter,r=e.phraseToGuess,i=e.questionInfo,o=e.lettersToClick,s=e.clickLetter,c=e.isGameInProgress,l=e.isGameEnded;return a.a.createElement(Re,{isGameEnded:l,isGameInProgress:c},a.a.createElement(ye,{questionInfo:i,mistakesLeft:t,timeToNextLetter:n}),a.a.createElement(Fe,{phraseToGuess:r}),a.a.createElement(Xe,{isGameEnded:l,lettersToClick:o,clickLetter:s}))};function Ye(){var e=Object(d.a)(["\nletter-spacing: 2px;\nfont-size: 1.4em;\n"]);return Ye=function(){return e},e}function Be(){var e=Object(d.a)(["\nposition: absolute;\ntop: 0;\nleft: 0;\nheight: 60vh;\nwidth: 100%;\ndisplay: flex;\nflex-flow: column nowrap;\njustify-content: space-around;\nalign-items: center;\nbackground-color:",";\ntransform: ",";\ntransition: .4s .4s linear all;\ncolor: ",";\n"]);return Be=function(){return e},e}var Je=h.c.div(Be(),function(e){return e.theme.colors.deepRed},function(e){return e.isGameEnded?"translateY(0)":"translateY(-100%)"},function(e){return e.theme.colors.gray}),_e=h.c.h2(Ye()),$e=function(e){var t=e.isGameEnded,n=e.isGameWon,r=e.phraseToGuess,i=e.startGame,o=n?"Good job!":"Try again",s=!n&&r.map(function(e){return e.letter});return a.a.createElement(Je,{isGameWon:n,isGameEnded:t},a.a.createElement(_e,null,o),a.a.createElement("h3",null,s),a.a.createElement($,{startGame:i,phraseToGuess:r},"Play again"))},Qe=n(21),Ve=n.n(Qe),Ze=7,et="https://hangman-239ba.firebaseio.com/.json",tt=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={phraseToGuess:[],lettersToClick:[{letter:"a",isClicked:!1,isHit:!1},{letter:"b",isClicked:!1,isHit:!1},{letter:"c",isClicked:!1,isHit:!1},{letter:"d",isClicked:!1,isHit:!1},{letter:"e",isClicked:!1,isHit:!1},{letter:"f",isClicked:!1,isHit:!1},{letter:"g",isClicked:!1,isHit:!1},{letter:"h",isClicked:!1,isHit:!1},{letter:"i",isClicked:!1,isHit:!1},{letter:"j",isClicked:!1,isHit:!1},{letter:"k",isClicked:!1,isHit:!1},{letter:"l",isClicked:!1,isHit:!1},{letter:"m",isClicked:!1,isHit:!1},{letter:"n",isClicked:!1,isHit:!1},{letter:"o",isClicked:!1,isHit:!1},{letter:"p",isClicked:!1,isHit:!1},{letter:"q",isClicked:!1,isHit:!1},{letter:"r",isClicked:!1,isHit:!1},{letter:"s",isClicked:!1,isHit:!1},{letter:"t",isClicked:!1,isHit:!1},{letter:"u",isClicked:!1,isHit:!1},{letter:"v",isClicked:!1,isHit:!1},{letter:"w",isClicked:!1,isHit:!1},{letter:"y",isClicked:!1,isHit:!1},{letter:"x",isClicked:!1,isHit:!1},{letter:"z",isClicked:!1,isHit:!1}],questionInfo:{},timeToNextLetter:7,mistakesLeft:7,isGameInProgress:!1,isGameEnded:!1,isGameWon:!1},n.startGameHandler=function(){n.setState({isGameInProgress:!0,isGameEnded:!1})},n.startTimeToNextLetterHandler=function(){n.state.isGameEnded||(n.ID=setInterval(function(){n.setState({timeToNextLetter:n.state.timeToNextLetter-1})},1e3))},n.isSelectedLetterInPhraseHandler=function(e){var t=n.state.phraseToGuess,r=t.find(function(t){return t.letter===e.letter.toUpperCase()}),a=e.letter.toUpperCase();e.isClicked=!0,r?(e.isHit=!0,t.forEach(function(e){e.letter===a&&(e.isLetterShowed=!0)})):n.setState({mistakesLeft:n.state.mistakesLeft-1})},n.clickOrPressKeyLetterHandler=function(e,t){if(n.state.isGameInProgress&&!n.state.isGameEnded&&0!==n.state.timeToNextLetter){var r,a=n.state,i=a.lettersToClick,o=a.phraseToGuess,s=e.target.textContent;t?r=t.toUpperCase():s&&(r=e.target.textContent);var c=i.findIndex(function(e){return e.letter.toUpperCase()===r});if(-1!==c&&!i[c].isClicked){var l=i[c];n.isSelectedLetterInPhraseHandler(l),clearInterval(n.ID),n.startTimeToNextLetterHandler(),n.setState({phraseToGuess:o,lettersToClick:i,timeToNextLetter:Ze})}}},n.fetchDataHandler=function(){Ve.a.get(et).then(function(e){return e.statusText?e:Error}).then(function(e){var t=Math.floor(Math.random()*Object.keys(e.data).length),r=Object.keys(e.data)[t],a=Object.entries(e.data)[t][1],i=Math.floor(Math.random()*Object.entries(a).length),o=Object.entries(a)[i][0],c=Object.entries(a)[i][1],l=n.state.phraseToGuess;Object(s.a)(o).map(function(e,t){return l.push({letter:e.toUpperCase(),id:t,isLetterShowed:!1})}),l.filter(function(e){return" "===e.letter||","===e.letter||"-"===e.letter?e.isLetterShowed=!0:e.isLetterShowed=!1}),n.setState({phraseToGuess:l,questionInfo:{category:r,hint:c}})})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t){var n=this;if(!this.state.isGameEnded){var r=t.lettersToClick,a=0===this.state.phraseToGuess.filter(function(e){return!e.isLetterShowed}).length,i=0===this.state.mistakesLeft&&!0;if(a&&this.setState({isGameWon:!0}),(a||i)&&(clearInterval(this.ID),clearTimeout(this.TimeoutID),this.setState({isGameEnded:!0,isGameInProgress:!1})),t.timeToNextLetter!==this.state.timeToNextLetter){var o=this.state.phraseToGuess;if(0===o.filter(function(e){return!e.isLetterShowed}).length)return;if(0===r.filter(function(e){return!e.isClicked}).length)return;var s=r.filter(function(e){return!e.isClicked}),c=s[Math.floor(Math.random()*s.length)];0===this.state.timeToNextLetter&&(this.isSelectedLetterInPhraseHandler(c),this.setState({phraseToGuess:o,lettersToClick:r}),clearInterval(this.ID),this.TimeoutID=setTimeout(function(){n.setState({timeToNextLetter:Ze}),n.startTimeToNextLetterHandler()},1e3))}}}},{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keydown",function(t){return e.clickOrPressKeyLetterHandler(t,t.key)}),this.fetchDataHandler()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.clickOrPressKeyLetterHandler())}},{key:"render",value:function(){var e=this.state,t=e.phraseToGuess,n=e.lettersToClick,r=e.timeToNextLetter,i=e.mistakesLeft,o=e.isGameInProgress,s=e.isGameEnded,c=e.questionInfo,l=e.isGameWon;return a.a.createElement(E,{isGameInProgress:o},a.a.createElement(ae,{phraseToGuess:t,isGameEnded:s,isGameInProgress:o,startGame:this.startGameHandler}),a.a.createElement(Ae,{isGameEnded:s,isGameInProgress:o,questionInfo:c,phraseToGuess:t,lettersToClick:n,timeToNextLetter:r,mistakesLeft:i,clickLetter:this.clickOrPressKeyLetterHandler}),a.a.createElement($e,{startGame:this.startGameHandler,phraseToGuess:t,isGameWon:l,isGameEnded:s}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(tt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.432d5e1e.chunk.js.map