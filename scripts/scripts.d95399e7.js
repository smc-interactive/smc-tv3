"use strict";angular.module("smcApp",["ngCookies","ngResource","ngRoute","ngSanitize"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("smcApp").controller("MainCtrl",["$scope",function(a){function b(a,b,c,d){$("#"+a).get(0).pause(),$("#videoToolTipContent").css("opacity",""),$("#toolTipText").css("transform",""),$("#toolTipInner").css("transform",""),$("#"+b).removeClass("videoSlideResizeOut videoSlideResize"),1==w&&j(),$("#"+c).css("opacity","1"),$("#"+d).css("opacity","0")}function c(a){if("intro"!=a){var b=$(".pentagramNotes");b.removeClass("activeNote"),b.removeClass("currentNote");for(var c=0;a>=c;c++)$(b[c]).addClass("activeNote"),c==a&&$(b[c]).addClass("currentNote");var d=$($(".pentagramNotes")[a]),e=d.find(".tooltip-text").html();$(".currentDetails h4").html(e)}else $(".currentDetails h4").html("")}function d(a){P.attr("data-anecdota",a),P.addClass("hover"),window.setTimeout(function(){P.removeClass("hover")},3e3)}function e(a,b,c,d,e,g,h,i,j){if(D.src({type:"video/mp4",src:"http://mp4-high-dwn.media.tv3.cat/g/tvcatalunya/"+g}),u=!0,D.pause(),$("#videoGeneral").removeClass("videoClass fullScreenVideo resumeVideoBox videoCloud videoCloud2"),"videoCloud"==h){var k=.6;$("#burbleBig").addClass("burbleBig"),$("#burbleMed").addClass("burbleMed"),$("#burbleSmall").addClass("burbleSmall")}else if("videoCloud2"==h){var k=.6;$("#burbleBig").addClass("burbleBig2"),$("#burbleMed").addClass("burbleMed2"),$("#burbleSmall").addClass("burbleSmall2")}else var k=1;console.log("volumen: ",v.volume),v&&1==w&&v.volume()>0&&v.fade(1,0,2e3),$("#videoGeneral").addClass(h),$("#GeneralVideo").addClass("video-js vjs-default-skin "+i),"onlySound"!=a&&TweenMax.to($("#videoContainer"),.5,{opacity:1,scale:k,ease:Power4.easeOut}),D.play(),"resume"==a?(D.currentTime(b),D.play(),D.off("timeupdate"),D.breakpoint=!1,D.on("timeupdate",function(){D.breakpoint||D.currentTime()!=d-3||(console.log("cumple timeupdate antes:",D.breakpoint,D.currentTime()),TweenMax.to($("#videoContainer"),3,{opacity:0,scale:0,ease:Power4.easeOut})),!D.breakpoint&&D.currentTime()>=d&&(console.log("cumple timeupdate:",D.breakpoint,D.currentTime()),D.breakpoint=!0,"videoCloudInside"!=i&&f(),1==e&&I.play(),u=!1)})):D.on("ended",function(){console.log("continue before Stop Inside ended?: ",e,a),1==e&&I.play(),v&&1==w&&!j&&v.fade(0,1,2e3),u=!1})}function f(){$("#burbleBig").removeClass("burbleBig burbleBig2"),$("#burbleMed").removeClass("burbleMed burbleMed2"),$("#burbleSmall").removeClass("burbleSmall burbleSmall2"),TweenMax.to($("#videoContainer"),.5,{opacity:0,scale:0,ease:Power4.easeOut}),v&&v.volume()<1&&1==w&&v.fade(0,1,2e3),u=!1,D.off("ended"),D.pause()}function g(){D.pause(),v&&v.fade(1,0,2e3)}function h(a){v&&v.volume()>0&&v.fade(1,0,2e3),setTimeout(function(){v&&v.stop(),v=new Howl({urls:["audio/"+a+".mp3"],loop:!0,volume:0,onend:function(){}}),v.play(),v&&!u&&1==w&&v.fade(0,1,2e3)},500)}function i(){w=w?0:1,D.volume(w),R.toggleClass("sound-mute"),u||v.volume(w)}function j(){x=x?0:1,D.volume(x),u||v.volume(x)}function k(){J.set(".ed5",{top:"5%",left:"120%",transform:"rotate(0deg)"}).to(".ed5",1,{left:"20%",ease:Power0.easeNone}).to(".ed5",3,{left:"-14%",transform:"rotate(5deg)",top:"-7%",ease:Power0.easeNone}).to(".ed5",1,{left:"-25%",top:"-10%",ease:Power0.easeNone}).to(".ed5",3,{left:"-150%",transform:"rotate(0deg)",top:"-7%",ease:Power0.easeNone}).to(".ed5",.1,{transform:"rotateY(180deg)",ease:Power0.easeNone}).to(".ed5",5,{left:"25%",top:"-7%",ease:Power0.easeNone}).to(".ed5",3,{left:"65%",top:"3%",ease:Power0.easeNone}).to(".ed5",3,{left:"150%",top:"3%",ease:Power0.easeNone}).play()}function l(){TweenMax.to(".ed5",.1,{top:"5%",left:"120%",transform:"rotate(0deg)",ease:Power0.easeNone}),J.pause()}function m(a,b){var c='<div class="wordStyle">'+a+"</div>";$("#cita"+b+"suma").append(c),TweenMax.from(c,.1,{opacity:0,y:-40,transformOrigin:"0% 50% -50",ease:Power2.easeOut})}function n(a){$(a).remove()}function o(a){if(console.log(a),"reverse"==a){var b=$("#viaje1Svg").drawsvg({duration:8e3,easing:"linear",reverse:!0,callback:function(){}});b.drawsvg("animate")}else{var b=$("#viaje1Svg").drawsvg({duration:8e3,easing:"linear",reverse:!1,callback:function(){}});b.drawsvg("animate")}console.log("viaje1: ",b)}function p(a){K=a.touches[0].clientX,L=a.touches[0].clientY}function q(a){if(!T.hasClass("open")&&!S.hasClass("open")){if(!K||!L)return;var b=a.touches[0].clientX,c=a.touches[0].clientY,d=K-b,e=L-c;Math.abs(d)>Math.abs(e)||(e>0?I.play():I.reverse()),K=null,L=null}}function r(){if(S.hasClass("open")){S.removeClass("open"),O.removeClass("open"),M.removeClass("overlay-open"),S.addClass("close");var a=function(a){S.removeClass("close")};if(W.transitions)try{S.on(V,function(){a()})}catch(b){a()}else a()}else S.hasClass("close")||(S.addClass("open"),O.addClass("open"),M.addClass("overlay-open"))}function s(a){if(a){var b="views/anecdotas.html #anec"+a;"credits"==a&&(b="views/creditos.html"),T.load(b)}if(T.hasClass("open")){T.removeClass("open"),P.removeClass("open"),N.removeClass("overlay-open"),T.addClass("close");var c=function(a){T.removeClass("close")};if(W.transitions)try{T.on(V,function(){c()})}catch(d){c()}else c()}else T.hasClass("close")||(T.addClass("open"),P.addClass("open"),N.addClass("overlay-open"))}var t=($("body"),[]),u=!1,v=!1,w=1,x=1,y=!1,z=["BeginTheBeguine","ElManisero","TICOTICO","Siboney","MyShawl","JungleRhumba","perfidia","QuizasQuizasQuizas","ParaVigomevoy","YoTeAmoMucho","Tabu"],A=($("#quote h2").splitText({type:"words",animation:"glowOnHover",useLite:!0,addClass:"introLetters"}),$("#quote h3 span.subtitle").splitText({type:"words",animation:"glowOnHover",useLite:!0,addClass:"introLettersSubtitle"}),$("#quote h3 span.cugat-name").splitText({type:"words",animation:"glowOnHover",useLite:!0,addClass:"introLettersName"}),$(".introLetters")),B=$(".introLettersSubtitle"),C=$(".introLettersName");a.CatText=languajeCT.CatText,a.photoText=languajeCT.photoText,a.tooltipText=languajeCT.tooltipText,a.generalText=languajeCT.text,a.menuText=languajeCT.menu,t[12]=a.CatText.cita12Plus.split(" "),t[41]=a.CatText.cita41Plus.split(" "),t[42]=a.CatText.cita42Plus.split(" "),t[51]=a.CatText.cita51Plus.split(" "),t[52]=a.CatText.cita52Plus.split(" "),t[53]=a.CatText.cita53Plus.split(" "),t[61]=a.CatText.cita61Plus.split(" "),t[62]=a.CatText.cita62Plus.split(" "),t[63]=a.CatText.cita63Plus.split(" "),t[100]=a.CatText.cita100Plus.split(" ");var D=videojs("GeneralVideo"),E=($("#viaje1Svg").drawsvg(),{scale:"0",right:"-20%",ease:Back.easeInOut.config(1)}),F={scale:"0",opacity:"0",ease:Back.easeInOut.config(1)},G=.05,H=.03;TweenMax.set(".scrollIcon, .hiddenCanvas, .dinamycText, .ageTitle, .napFace, .addon1, .prel01",{visibility:"visible"});var I=new TimelineMax({repeat:0}),J=new TimelineMax({repeat:-1});I.add("inicio").to("",.1,{onStart:e,onStartParams:["intro",!1,!1,!1,!1,"0/0/1471877157700.mp4","videoClass","introVideoFull"]}).to(".videoCover",3,{css:{opacity:"0.2"},delay:2,ease:Power0.easeOut}).staggerFrom(A,.6,{opacity:0,cycle:{scale:[0,5],y:[-50,200],x:[-50,200],transformOrigin:"0% 50% -50",delay:[0,.2]},ease:Back.easeOut.config(.8)},.1).staggerFrom(B,.6,{opacity:0,cycle:{scale:[0,5],y:[-50,200],x:[-50,200],transformOrigin:"0% 50% -50",delay:[0,.2]},ease:Back.easeOut.config(.8)},.1).staggerFrom(C,.6,{opacity:0,cycle:{scale:[0,5],y:[-50,200],x:[-50,200],transformOrigin:"0% 50% -50",delay:[0,.2]},ease:Back.easeOut.config(.8)},.1).to(".mouseIcon",.5,{bottom:"150px",ease:Bounce.easeOut}).addPause().to(".mouseIcon",.2,{bottom:"-150px",ease:Power0.easeOut}).staggerTo(A,.2,{opacity:0,cycle:{scale:[0,5],y:[-50,200],x:[-50,200],transformOrigin:"0% 50% -50",delay:[0,.2]},ease:Back.easeOut.config(.8)},.1).staggerTo(B,.2,{opacity:0,cycle:{scale:[0,5],y:[-50,200],x:[-50,200],transformOrigin:"0% 50% -50",delay:[0,.2]},ease:Back.easeOut.config(.8)},.1).staggerTo(C,.2,{opacity:0,cycle:{scale:[0,5],y:[-50,200],x:[-50,200],transformOrigin:"0% 50% -50",delay:[0,.2]},ease:Back.easeOut.config(.8)},.1).to("#page0",.5,{scale:"0",ease:Back.easeIn.config(1)}).to("",.1,{onReverseComplete:e,onReverseCompleteParams:["intro",!1,!1,!1,!1,"0/0/1471877157700.mp4","videoClass","introVideoFull"]}).to("",.1,{onStart:f}).add("prologo1").to("",.1,{onComplete:h,onCompleteParams:[z[0]]}).to("",.1,{onComplete:c,onCompleteParams:[0]}).to(".ed1",.5,{left:"0%",onReverseComplete:l,ease:Bounce.easeOut}).to(".ed2",.5,{top:"0%",ease:Bounce.easeOut}).to(".ed3",.5,{left:"0%",ease:Bounce.easeOut},"-=1").to(".ed4",.5,{transform:"rotateX(0deg)",onComplete:k,force3D:!0,ease:Back.easeOut.config(1)}).to(".texto11",2,{transform:"scale(1)",opacity:"1",ease:Power4.easeOut},"+=1").to(".mouseIcon",.5,{bottom:"150px",ease:Bounce.easeOut},"+=0.5").to(".chihuahua",.3,{transform:"rotateX(0deg)",ease:Bounce.easeOut}).to("",.1,{onStart:d,onStartParams:[1]}).addPause().to(".mouseIcon",.2,{bottom:"-150px",ease:Power0.easeOut}).to(".texto11",1.5,{transform:"scale(0)",opacity:"0",ease:Power4.easeOut},"+=0.2").to("#page1",.1,{right:"0%",ease:Power0.easeNone}).to(".pentagramRect",.2,{bottom:"1%",ease:Power0.easeNone}).to(".currentDetails",.2,{top:"0px",ease:Power0.easeNone},"-=0.2").to(".claveSol",.2,{bottom:"0",ease:Power0.easeNone},"-=0.2").to(".pentagramBack",.2,{bottom:"0%",ease:Power0.easeNone},"-=0.2").to(".pentagramNotesGroup",.2,{bottom:"2%",ease:Power0.easeNone},"-=0.2").to(".age1",.3,{transform:"rotateX(0deg)",ease:Bounce.easeOut}).to("",.1,{onReverseComplete:k}).staggerFrom($("#page1").children(),.6,E,G).to(".cita11",1,{transform:"rotateX(0deg)",ease:Bounce.easeOut},"+=0.2").addPause().to("",.1,{onReverseComplete:c,onReverseCompleteParams:[0]}).to("",.1,{onComplete:l}).staggerTo($("#page1").children(),.6,F,H).add("prologo2").to("#page1",.4,{right:"100%",ease:Power0.easeNone}).to("",.1,{onStart:c,onStartParams:[1]}).to("",.1,{onStart:d,onStartParams:[2]}).to(".ed2",.5,{left:"-5%",ease:Power2.easeIn},"scrollGer").to(".ed3",.5,{left:"-10%",ease:Power2.easeIn},"scrollGer").to(".ed4",.5,{left:"-15%",ease:Power2.easeIn},"scrollGer").to("#page2",.4,{right:"0%",ease:Power0.easeNone},"-=0.4").from(".mapSvgClassTop",1,{scale:0,onComplete:o,onCompleteParams:["play"],ease:Back.easeOut}).to(".mapSvgClassTop",4,{width:"250%",top:"-60%",left:"-25%",ease:Power2.easeIn},"+=1").to(".cub1",.5,{top:"0%",ease:Power0.easeNone},"cuba1").to(".ed1",.5,{top:"120%",onReverseComplete:k,ease:Power2.easeIn}).to(".ed2",.5,{top:"120%",ease:Power2.easeIn}).to(".ed3",.5,{top:"120%",ease:Power2.easeIn},"-=1").to(".ed4",.5,{top:"120%",ease:Power2.easeIn}).to(".mapSvgClassTop",2,{width:"800%",top:"-385%",left:"-140%",ease:Power2.easeIn},"-=1.2").to("",.1,{onReverseComplete:o,onReverseCompleteParams:["reverse"]}).to("",.1,{onComplete:e,onCompleteParams:["videoCloud",!1,!1,!1,!0,"4/0/1471877017204.mp4","videoCloud","videoCloudInside"]}).to(".mouseIcon",.5,{bottom:"150px",ease:Bounce.easeOut},"+=0.5").to("",.1,{onReverseComplete:f}).addPause().to("",.1,{onStart:f}).to("",.1,{onReverseComplete:e,onReverseCompleteParams:["videoCloud",!1,!1,!1,!1,"4/0/1471877017204.mp4","videoCloud","videoCloudInside"]}).to(".mouseIcon",.2,{bottom:"-150px",ease:Power0.easeOut}).to("#page2",.4,{right:"100%",ease:Power0.easeNone},"+=1").to("",.1,{onComplete:e,onCompleteParams:["videomarco",!1,!1,!1,!0,"3/9/1471877013293.mp4","resumeVideoBox","resumeVideoBoxEnter"]}).to("",.1,{onReverseComplete:f}).to("",.1,{onReverseComplete:c,onReverseCompleteParams:[1]}).to("",.1,{onStart:d,onStartParams:[2]}).addPause().to("",.1,{onStart:f}).to("",.1,{onReverseComplete:e,onReverseCompleteParams:["videomarco",!1,!1,!1,!1,"3/9/1471877013293.mp4","resumeVideoBox","resumeVideoBoxEnter"]}).add("prologo2Add").to("",.1,{onStart:c,onStartParams:[2]}).to("#page3",.4,{right:"0%",ease:Power0.easeNone}).to(".age1",.3,{transform:"rotateX(90deg)",ease:Bounce.easeOut}).to(".chihuahua",.3,{transform:"rotateX(90deg)",ease:Bounce.easeOut}).to(".age2",.3,{transform:"rotateX(0deg)",ease:Bounce.easeOut},"-=0.3").staggerFrom($("#page3").children(),.6,E,G).addPause().to("",.1,{onStart:b,onStartParams:["slideVideoHavana","slideVideoContainerHavana","playButtonHavana",""]}).staggerTo($("#page3").children(),.6,F,H).to("",.1,{onReverseComplete:c,onReverseCompleteParams:[2]}).add("prologo3").to(".cub1",.5,{transform:"rotateY(165deg)",ease:Power2.easeIn}).to("#page3",.4,{right:"100%",ease:Power0.easeNone}).to("",.1,{onStart:c,onStartParams:[3]}).to(".ny4",.2,{top:"0%",ease:Bounce.easeOut},"-=0.5").to(".ny3",.5,{top:"0%",ease:Bounce.easeOut},"-=0.2").to(".ny1",.5,{top:"0%",ease:Bounce.easeOut},"-=0.2").to(".ny2",.5,{top:"0%",ease:Bounce.easeOut},"-=0.2").to(".ny5",.8,{scale:"1",right:"0",ease:Power4.easeOut},"-=0.2").to(".ny6",.8,{scale:"1",right:"0",ease:Power4.easeOut},"-=0.2").to(".ny7",.8,{scale:"1",right:"0",ease:Power4.easeOut},"-=0.2").to("#page4",.4,{right:"0%",ease:Power0.easeNone},"-=0.4").staggerFrom($("#page4").children(),.6,E,G).to(".cita12",1,{transform:"rotateX(0deg)",ease:Bounce.easeOut},"+=1").addPause().to("",.1,{onStart:b,onStartParams:["slideVideoNY","slideVideoContainerNY","playButtonNY","fullScreenButtonNY"]}).staggerTo($("#page4").children(),.6,F,H).to("",.1,{onReverseComplete:c,onReverseCompleteParams:[3]}).add("RR1").to("#page4",.4,{right:"100%",ease:Back.easeInOut.config(1)}).to("",.1,{onStart:c,onStartParams:[4]}).to("",.1,{onStart:h,onStartParams:[z[1]]}).to("#page5",.4,{right:"0%",ease:Back.easeInOut.config(1)}).to("",.1,{onStart:e,onStartParams:["resume",38.5,89,55,!0,"7/5/1471877240757.mp4","resumeVideoBox","resumeVideoBoxEnter"]}).to("",.1,{onReverseComplete:f}).addPause().to("",.1,{onReverseComplete:e,onReverseCompleteParams:["resume",38.5,89,55,!0,"7/5/1471877240757.mp4","resumeVideoBox","resumeVideoBoxEnter"]}).to("",.1,{onReverseComplete:h,onReverseCompleteParams:[z[0]]}).to("",.1,{onStart:f}).staggerFrom($("#page5").children(),.6,E,G).to(".cita21",1,{transform:"rotateX(0deg)",ease:Bounce.easeOut},"+=0.5").addPause().staggerTo($("#page5").children(),.6,F,H).to("#page5",.4,{right:"100%",ease:Back.easeInOut.config(1)}).to("#page6",.4,{right:"0%",ease:Back.easeInOut.config(1)},"-=0.4").to(".ny5",.5,{scale:"5",right:"200%",ease:Power4.easeIn}).to(".ny6",.5,{scale:"5",right:"200%",ease:Power4.easeIn},"-=0.2").to(".ny7",.5,{scale:"5",right:"200%",ease:Power4.easeIn},"-=0.2").to(".ny3",.3,{transform:"rotateY(165deg)",ease:Power2.easeIn}).to(".ny1",.3,{transform:"rotateY(165deg)",ease:Power2.easeIn}).to(".ny2",.3,{transform:"rotateY(165deg)",ease:Power2.easeIn}).to(".ny4",.3,{transform:"rotateY(165deg)",ease:Power2.easeIn}).to("",.1,{onReverseComplete:c,onReverseCompleteParams:[4]}).to(".chihuahua",.3,{transform:"rotateX(0deg)",ease:Bounce.easeOut}).add("RR2").to("",.1,{onStart:c,onStartParams:[5]}).to("",.1,{onStart:d,onStartParams:[3]}).to(".ber1",.3,{transform:"rotateY(0deg)",ease:Back.easeOut.config(1)}).staggerFrom($("#page6").children(),.6,E,G).to(".cita14",1,{transform:"rotateX(0deg)",ease:Bounce.easeOut},"+=1").addPause().staggerTo($("#page6").children(),.6,F,H).to("#page6",.4,{right:"100%",ease:Back.easeInOut.config(1)}).to(".ber1",.3,{transform:"rotateY(165deg)",ease:Back.easeOut.config(1)}).to("",.1,{onReverseComplete:h,onReverseCompleteParams:[z[1]]}).to("",.1,{onReverseComplete:c,onReverseCompleteParams:[5]}).add("RR3").to("",.1,{onStart:h,onStartParams:[z[2]]}).to("",.1,{onStart:c,onStartParams:[6]}).to("",.1,{onStart:d,onStartParams:[4]}).to("#page7",.2,{right:"0%",ease:Back.easeInOut.config(1)},"-=0.4").to(".holly2",.5,{transform:"rotateX(0deg)",ease:Back.easeOut.config(1)}).to(".holly1",.5,{transform:"rotateX(0deg)",ease:Back.easeOut.config(1)},"-=0.2").to(".holly3",.5,{transform:"rotateX(0deg)",ease:Back.easeOut.config(1)},"-=0.2").to(".holly4",.5,{transform:"rotateX(0deg)",ease:Back.easeOut.config(1)},"-=0.2").to(".holly7",.5,{top:"0%",ease:Bounce.easeOut},"-=0.2").to(".holly6",1,{top:"0%",ease:Power4.easeOut}).to(".holly5",.2,{opacity:"1",ease:Power4.easeOut}).staggerFrom($("#page7").children(),.6,E,G).to(".cita15",1,{transform:"rotateX(0deg)",ease:Bounce.easeOut},"+=1").to("",.1,{onComplete:e,onCompleteParams:["videoCloud",!1,!1,!1,!0,"2/5/1471877148752.mp4","videoCloud","videoCloudInside",!0]}).to("",.1,{onReverseComplete:f}).addPause().to("",.1,{onComplete:e,onCompleteParams:["videoCloud",!1,!1,!1,!1,"6/9/1471876985396.mp4","videoCloud","videoCloudInside",!0]}).to("",.1,{onReverseComplete:e,onReverseCompleteParams:["videoCloud",!1,!1,!1,!0,"2/4/1471877146842.mp4","videoCloud","videoCloudInside"]}).addPause().to("",.1,{onComplete:e,onCompleteParams:["videoCloud",!1,!1,!1,!0,"2/4/1471877146842.mp4","videoCloud","videoCloudInside"]}).to("",.1,{onReverseComplete:e,onReverseCompleteParams:["videoCloud",!1,!1,!1,!0,"6/9/1471876985396.mp4","videoCloud","videoCloudInside",!0]}).addPause().to("",.1,{onReverseComplete:e,onReverseCompleteParams:["videoCloud",!1,!1,!1,!1,"2/5/1471877148752.mp4","videoCloud","videoCloudInside",!0]}).to("",.1,{onStart:f}).staggerTo($("#page7").children(),.6,F,H).to("#page7",.4,{right:"100%",ease:Back.easeInOut.config(1)}).to(".holly2",.5,{transform:"rotateX(165deg)",ease:Back.easeOut.config(1)},"-=0.5").to(".holly1",.5,{transform:"rotateX(165deg)",ease:Back.easeOut.config(1)},"-=0.3").to(".holly3",.5,{transform:"rotateX(165deg)",ease:Back.easeOut.config(1)},"-=0.3").to(".holly4",.5,{transform:"rotateX(165deg)",ease:Back.easeOut.config(1)},"-=0.3").to(".holly7",.5,{top:"150%",ease:Bounce.easeOut},"-=0.3").to(".holly6",.5,{top:"-150%",ease:Power4.easeOut},"carmenCastillo").to(".holly5",1,{opacity:"0",ease:Power4.easeOut}).to("",.1,{onReverseComplete:c,onReverseCompleteParams:[6]}).to("",.1,{onStart:d,onStartParams:[7]}).to("",.1,{onReverseComplete:h,onReverseCompleteParams:[z[2]]}).add("CC1").to("",.1,{onStart:c,onStartParams:[7]}).to("",.1,{onStart:d,onStartParams:[5]}).to("",.1,{onComplete:h,onCompleteParams:[z[3]]}).to(".age2",.3,{transform:"rotateX(90deg)",ease:Bounce.easeOut}).to(".carn2",4,{opacity:"1",ease:RoughEase.ease.config({template:Power0.easeNone,strength:2,points:20,taper:"none",randomize:!0,clamp:!1})}).to(".carn1",2,{opacity:"1",ease:Back.easeOut.config(1)},"-=2").to(".carn1",2,{top:"-50%",ease:Power4.easeOut}).to(".carn2",2,{top:"-50%",ease:Power4.easeOut},"-=2").to(".carn3",2,{top:"-50%",ease:Power4.easeOut},"-=2").to(".carn4",2,{top:"-50%",ease:Power4.easeOut},"-=2").to(".carn5",2,{top:"-50%",ease:Power4.easeOut},"-=2").to(".carn6",2,{top:"-50%",ease:Power4.easeOut},"-=2").to(".cita100",1,{scale:"1",transform:"rotateX(0deg)",ease:Bounce.easeOut},"+=0.5").to(".mouseIcon",.5,{bottom:"100px",ease:Bounce.easeOut}).addPause().to(".mouseIcon",.2,{bottom:"-150px",ease:Power0.easeOut}).to(".cita100",1,{scale:"0",transform:"rotateX(90deg)",ease:Bounce.easeOut},"+=0.5").to("",.1,{onReverseComplete:c,onReverseCompleteParams:[7]}).add("CC2").to("",.1,{onStart:c,onStartParams:[8]}).to("",.1,{onStart:d,onStartParams:[6]}).to("",.1,{onStart:e,onStartParams:["resume",101,112,112,!0,"7/5/1471877240757.mp4","resumeVideoBox","resumeVideoBoxEnter"]}).to("",.1,{onReverseComplete:f}).addPause().to("",.1,{onReverseComplete:e,onReverseCompleteParams:["resume",101,112,112,!0,"7/5/1471877240757.mp4","resumeVideoBox","resumeVideoBoxEnter"]}).to("",.1,{onStart:f}).to("#page8",.4,{right:"0%",ease:Back.easeInOut.config(1)},"-=0.4").staggerFrom($("#page8").children(),.6,E,G).addPause().staggerTo($("#page8").children(),.6,F,H).to("#page8",.4,{right:"100%",ease:Back.easeInOut.config(1)}).to("",.1,{onReverseComplete:c,onReverseCompleteParams:[8]}).add("CC3").to("",.1,{onStart:c,onStartParams:[9]}).to("",.1,{onStart:d,onStartParams:[7]}).to("#page9",.4,{right:"0%",ease:Back.easeInOut.config(1)}).staggerFrom($("#page9").children(),.6,E,G).to(".cita91",1,{transform:"rotateX(0deg)",ease:Bounce.easeOut},"+=1").addPause().staggerTo($("#page9").children(),.6,F,H).to("#page9",.4,{right:"100%",ease:Back.easeInOut.config(1)}).to("",.1,{onReverseComplete:c,onReverseCompleteParams:[9]}).add("CC4").to("",.1,{onStart:c,onStartParams:[10]}).to(".chihuahua",.3,{transform:"rotateX(90deg)",ease:Bounce.easeOut}).to("#page10",.4,{right:"0%",ease:Back.easeInOut.config(1)},"-=0.4").to("",.1,{onComplete:e,onCompleteParams:["videoCloud",!1,!1,!1,!0,"4/0/1471877055304.mp4","videoCloud2","videoCloudInside",!0]}).to("",.1,{onReverseComplete:f}).addPause().to("",.1,{onComplete:e,onCompleteParams:["videoCloud",!1,!1,!1,!0,"3/4/1471877070743.mp4","videoCloud2","videoCloudInside"]}).to("",.1,{onReverseComplete:e,onReverseCompleteParams:["videoCloud",!1,!1,!1,!0,"3/4/1471877070743.mp4","videoCloud2","videoCloudInside"]}).addPause().to("",.1,{onReverseComplete:e,onReverseCompleteParams:["videoCloud",!1,!1,!1,!0,"4/0/1471877055304.mp4","videoCloud2","videoCloudInside",!0]}).to("",.1,{onStart:f}).to("",.1,{onReverseComplete:c,onReverseCompleteParams:[10]}).to(".blurEffect5",2,{opacity:"0",ease:Back.easeOut.config(1)},"+=2").to("#page10",.4,{right:"100%",ease:Power0.easeNone}).to("",.1,{onReverseComplete:h,onReverseCompleteParams:[z[3]]}).add("LA1").to("",.1,{onStart:c,onStartParams:[11]}).to("",.1,{onStart:h,onStartParams:[z[4]]}).to(".age3",.3,{transform:"rotateX(0deg)",ease:Bounce.easeOut}).to(".chi4",.3,{opacity:"1",ease:Bounce.easeOut}).to(".chi2",1,{opacity:"1",ease:Power4.easeOut}).to(".chi1",4,{opacity:"1",ease:Power0.easeNone},"+=1").to(".chi5",1,{left:"0",ease:Power4.easeOut}).to(".chi6",1,{left:"0",ease:Power4.easeOut}).to("",.1,{onStart:e,onStartParams:["resume",132,138,138,!0,"7/5/1471877240757.mp4","resumeVideoBox","resumeVideoBoxEnter"]}).to("",.1,{onReverseComplete:f}).addPause().to("",.1,{onStart:f}).to("#page11",.4,{right:"0%",ease:Power0.easeNone},"-=0.4").to("",.1,{onReverseComplete:e,onReverseCompleteParams:["resume",132,138,138,!0,"7/5/1471877240757.mp4","resumeVideoBox","resumeVideoBoxEnter"]}).staggerFrom($("#page11").children(),.6,E,G).to(".cita41",1,{transform:"rotateX(0deg)",ease:Bounce.easeOut},"+=1").addPause().staggerTo($("#page11").children(),.6,F,G).to("",.1,{onReverseComplete:c,onReverseCompleteParams:[11]}).to("",.1,{onReverseComplete:h,onReverseCompleteParams:[z[4]]}).to("#page11",.4,{right:"100%",ease:Back.easeIn}).add("LA2").to(".chihuahua",.3,{transform:"rotateX(0deg)",ease:Bounce.easeOut}).to("",.1,{onStart:c,onStartParams:[12]}).to("",.1,{onStart:d,onStartParams:[8]}).to("",.1,{onComplete:h,onCompleteParams:[z[5]]}).to("#page12",.4,{right:"0%",ease:Power0.easeNone}).to(".blurEffect7",.2,{filter:"blur(8px)",webkitFilter:"blur(8px)",ease:Power0.easeNone},"+=1").staggerFrom($("#page12").children(),.6,E,H).to(".cita42",1,{transform:"rotateX(0deg)",ease:Bounce.easeOut},"+=1").addPause().to("",.1,{onStart:b,onStartParams:["slideVideoLorraine","slideVideoContainerLorraine","playButtonLorraine","fullScreenButtonLorraine"]}).staggerTo($("#page12").children(),.6,F,H).to("#page12",.4,{right:"100%",ease:Power0.easeNone}).to("",.1,{onReverseComplete:c,onReverseCompleteParams:[12]}).to("",.1,{onReverseComplete:h,onReverseCompleteParams:[z[5]]}).add("LA3").to("",.1,{onStart:c,onStartParams:[13]}).to("",.1,{onStart:d,onStartParams:[9]}).to("",.1,{onComplete:h,onCompleteParams:[z[6]]}).to("#page13",.4,{right:"0%",ease:Power0.easeNone},"-=0.4").staggerFrom($("#page13").children(),.6,E,G).addPause().staggerTo($("#page13").children(),.6,F,H).to(".blurEffect7",.2,{filter:"blur(0px)",webkitFilter:"blur(0px)",ease:Power0.easeNone},"+=1").to(".chi2",.3,{opacity:"0",ease:Back.easeOut.config(1)},"+=0.5").to(".chi4",.3,{opacity:"0",ease:Bounce.easeOut},"+=0.5").to(".chi5",1,{left:"150%",ease:Power4.easeOut}).to(".chi6",1,{left:"-150%",ease:Power4.easeOut}).to(".chi1",.3,{opacity:"0",ease:Back.easeOut.config(1)},"-=0.2").to("#page13",.4,{right:"100%",ease:Power0.easeNone}).to(".chihuahua",.3,{transform:"rotateX(90deg)",ease:Bounce.easeOut}).to("",.1,{onReverseComplete:c,onReverseCompleteParams:[13]}).to("",.1,{onReverseComplete:h,onReverseCompleteParams:[z[6]]}).add("AL1").to("",.1,{onStart:c,onStartParams:[14]}).to("",.1,{onStart:h,onStartParams:[z[7]]}).to("#page14",.4,{right:"0%",ease:Power0.easeNone},"-=0.4").to(".lasv1",.3,{opacity:"1",ease:Back.easeOut.config(1)}).to(".lasv2",.3,{top:"0%",ease:Bounce.easeOut}).to(".lasv3",.3,{top:"0%",ease:Bounce.easeOut}).to(".lasv10",.3,{top:"0%",ease:Bounce.easeOut}).to(".lasv4",.3,{transform:"rotate(0deg)",ease:Back.easeOut.config(1)}).to(".lasv5",.3,{transform:"rotate(0deg)",ease:Back.easeOut.config(1)}).to(".lasv6",.3,{opacity:"1",ease:Back.easeOut.config(1)}).to(".lasv7",.3,{opacity:"1",ease:Back.easeOut.config(1)}).to(".lasv8",.3,{opacity:"1",ease:Back.easeOut.config(1)}).to(".lasv9",.3,{opacity:"1",ease:Back.easeOut.config(1)}).to("",.1,{onStart:e,onStartParams:["resume",189,200,200,!0,"7/5/1471877240757.mp4","resumeVideoBox","resumeVideoBoxEnter"]}).to("",.1,{onReverseComplete:f}).addPause().to("",.1,{onReverseComplete:e,onReverseCompleteParams:["resume",189,200,200,!0,"7/5/1471877240757.mp4","resumeVideoBox","resumeVideoBoxEnter"]}).to("",.1,{onStart:f}).staggerFrom($("#page14").children(),.6,E,G).to(".cita51",1,{transform:"rotateX(0deg)",ease:Bounce.easeOut},"+=0.5").addPause().to("",.1,{onStart:b,onStartParams:["slideVideoAbbe","slideVideoContainerAbbe","playButtonAbbe","fullScreenButtonAbbe"]}).staggerTo($("#page14").children(),.6,F,H).to("#page14",.4,{right:"100%",ease:Power0.easeNone}).to("",.1,{onReverseComplete:h,onReverseCompleteParams:[z[7]]}).to("",.1,{onReverseComplete:c,onReverseCompleteParams:[14]}).add("Al2").to(".chihuahua",.3,{transform:"rotateX(0deg)",ease:Bounce.easeOut}).to("",.1,{onStart:c,onStartParams:[15]}).to("",.1,{onStart:d,onStartParams:[10]}).to("",.1,{onStart:h,onStartParams:[z[8]]}).to("",.1,{onComplete:e,onCompleteParams:["videoCloud",266.5,297,297,!1,"2/7/1471877144972.mp4","videoCloud","videoCloudInside"]}).to("#page15",.4,{right:"0%",ease:Power0.easeNone},"-=0.4").to(".blurEffect8",.2,{filter:"blur(8px)",webkitFilter:"blur(8px)",ease:Power0.easeNone}).staggerFrom($("#page15").children(),.6,E,G).to(".cita53",1,{transform:"rotateX(0deg)",ease:Bounce.easeOut},"+=1").to("",.1,{onReverseComplete:f}).addPause().to("",.1,{onReverseComplete:e,onReverseCompleteParams:["videoCloud",266.5,297,297,!1,"2/7/1471877144972.mp4","videoCloud","videoCloudInside"]}).to("",.1,{onStart:f}).staggerTo($("#page15").children(),.6,F,H).to("#page15",.4,{right:"100%",ease:Power0.easeNone}).to("",.1,{onReverseComplete:h,onReverseCompleteParams:[z[8]]}).to("",.1,{onReverseComplete:c,onReverseCompleteParams:[15]}).add("AL3").to("",.1,{onStart:c,onStartParams:[16]}).to("",.1,{onStart:d,onStartParams:[11]}).to("",.1,{onStart:h,onStartParams:[z[9]]}).to("#page16",.4,{right:"0%",ease:Power0.easeNone}).staggerFrom($("#page16").children(),.6,E,G).to(".cita56",1,{transform:"rotateX(0deg)",ease:Bounce.easeOut},"+=1").addPause().staggerTo($("#page16").children(),.6,F,H).to("#page16",.4,{right:"100%",ease:Power0.easeNone}).to(".chihuahua",.3,{transform:"rotateX(90deg)",ease:Bounce.easeOut}).to("",.1,{onReverseComplete:c,onReverseCompleteParams:[16]}).add("CB1").to("",.1,{onStart:c,onStartParams:[17]}).to("#page17",.4,{right:"0%",ease:Power0.easeNone}).to("",.1,{onStart:e,onStartParams:["resume",266.5,297,297,!0,"7/5/1471877240757.mp4","resumeVideoBox","resumeVideoBoxEnter"]}).to("",.1,{onReverseComplete:f}).addPause().to("",.1,{onStart:f}).to("",.1,{onReverseComplete:e,onReverseCompleteParams:["resume",266.5,301.5,301.5,!1,"7/5/1471877240757.mp4","resumeVideoBox","resumeVideoBoxEnter"]}).staggerFrom($("#page17").children(),.6,E,G).to(".cita60",1,{transform:"rotateX(0deg)",ease:Bounce.easeOut},"+=0.5").addPause().staggerTo($("#page17").children(),.6,F,H).to("#page17",.4,{right:"100%",ease:Power0.easeNone}).to(".chihuahua",.3,{transform:"rotateX(0deg)",ease:Bounce.easeOut}).to("",.1,{onReverseComplete:c,onReverseCompleteParams:[17]}).add("CB2").to("",.1,{onStart:c,onStartParams:[18]}).to("",.1,{onStart:d,onStartParams:[12]}).to("#page18",.4,{right:"0%",ease:Power0.easeNone}).staggerFrom($("#page18").children(),.6,E,G).to(".cita61",1,{transform:"rotateX(0deg)",ease:Bounce.easeOut},"+=0.2").to("",.1,{onComplete:e,onCompleteParams:["resume",300,322,322,!1,"7/5/1471877240757.mp4","videoCloud","videoCloudInside"]},"+=1").to("",.1,{onReverseComplete:f}).addPause().to("",.1,{onStart:f}).to("",.1,{onReverseComplete:e,onReverseCompleteParams:["resume",300,322,322,!1,"7/5/1471877240757.mp4","videoCloud","videoCloudInside"]},"+=1").staggerTo($("#page18").children(),.6,F,H).to(".blurEffect8",.2,{filter:"blur(0px)",webkitFilter:"blur(0px)",ease:Power0.easeNone}).to(".lasv8",.3,{opacity:"0",ease:Back.easeOut.config(1)},"+=1").to(".lasv9",.3,{opacity:"0",ease:Back.easeOut.config(1)}).to(".lasv6",.3,{opacity:"0",ease:Back.easeOut.config(1)}).to(".lasv7",.3,{opacity:"0",ease:Back.easeOut.config(1)}).to(".lasv5",.3,{transform:"rotate(180deg)",ease:Back.easeOut.config(1)}).to(".lasv4",.3,{transform:"rotate(180deg)",ease:Back.easeOut.config(1)}).to(".lasv10",.3,{top:"-150%",ease:Bounce.easeOut}).to(".lasv3",.3,{top:"-1500%",ease:Bounce.easeOut}).to(".lasv2",.3,{top:"-150%",ease:Bounce.easeOut}).to(".lasv1",.3,{opacity:"0",ease:Back.easeOut.config(1)}).to("#page18",.4,{right:"100%",ease:Power0.easeNone}).to("",.1,{onReverseComplete:h,onReverseCompleteParams:[z[9]]}).to("",.1,{onReverseComplete:c,onReverseCompleteParams:[18]}).add("EP1").to("",.1,{onStart:c,onStartParams:[19]}).to("",.1,{onStart:d,onStartParams:[13]}).to("",.1,{onStart:h,onStartParams:[z[10]]}).to(".age3",.3,{transform:"rotateX(90deg)",ease:Bounce.easeOut}).to(".barc1",3,{opacity:"1",ease:Power4.easeIn}).to("#texto7-barc",2,{transform:"scale(1)",opacity:"1",ease:Power4.easeOut},"+=1").to(".barc4",.3,{transform:"scale(1)",ease:Power2.easeIn}).to(".barc5",.3,{transform:"scale(1)",ease:Power2.easeIn}).to(".barc6",.3,{transform:"scale(1)",ease:Power2.easeIn}).to(".barc7",.3,{transform:"scale(1)",ease:Power2.easeIn}).to(".barc8",.3,{transform:"scale(1)",ease:Power2.easeIn}).to(".barc2",4,{left:"33%",ease:Power4.easeIn}).to(".barc3",4,{left:"0%",ease:Power4.easeIn},"-=4").to(".barc2",2,{left:"30%",transform:"scale(0.7)",top:"0%",ease:Power4.easeIn}).to(".barc2",4,{left:"0%",transform:"scale(1)",ease:Power4.easeIn}).to(".barc2",4,{opacity:"0",ease:Power4.easeIn}).to(".age4",.3,{transform:"rotateX(0deg)",ease:Bounce.easeOut},"-=0.3").to("#page19",.4,{right:"0%",ease:Power0.easeNone}).to("#texto7-barc",1,{transform:"scale(0)",opacity:"0",ease:Power4.easeOut},"+=0.2").staggerFrom($("#page19").children(),.6,E,G).to(".cita62",1,{transform:"rotateX(0deg)",ease:Bounce.easeOut},"+=1").addPause().staggerTo($("#page19").children(),.6,F,H).to("#page19",.4,{right:"100%",ease:Power0.easeNone}).to("",.1,{onReverseComplete:c,onReverseCompleteParams:[19]}).add("EP2").to("",.1,{onStart:c,onStartParams:[20]}).to("",.1,{onStart:d,onStartParams:[15]}).to("#page20",.4,{right:"0%",ease:Power0.easeNone},"-=0.4").staggerFrom($("#page20").children(),.6,E,G).to(".textoFin",3,{transform:"scale(1)",opacity:"1",ease:Power4.easeOut},"+=2").to(".textoFin",3,{top:"0",ease:Power4.easeOut},"+=2").to(".ep15",3,{opacity:"1",ease:Power4.easeOut},"-=3").to(".blurEffect9",6,{onStart:function(){v.fade(1,0,6e3)},opacity:"0",ease:Power4.easeOut},"-=6").to(".age4",3,{onReverseComplete:function(){v.fade(0,1,3e3)},opacity:"0",ease:Power4.easeOut},"-=6").addPause(),I.play(),a.playVideoSlide=function(a,c,d,e){1==w&&j(),$("#"+c).css("left",""),$("#"+a).get(0).paused?("slideVideoHavana"==a&&($("#videoToolTipContent").css("opacity","1"),$("#toolTipText").css("transform","scale(1)"),$("#toolTipInner").css("transform","translate3d(0,0,0)")),$("#"+a).get(0).play(),$("#"+d).css("opacity","0"),$("#"+e).css("opacity","1")):($("#"+a).get(0).pause(),$("#"+d).css("opacity","1"),$("#"+e).css("opacity","0"),"slideVideoHavana"==a&&($("#videoToolTipContent").css("opacity",""),$("#toolTipText").css("transform",""),$("#toolTipInner").css("transform",""))),$("#"+a).on("ended",function(){
b(a,c,d,e)})},a.fullScreenVideoSlide=function(a,b){$("#"+a).css("right",""),$("#"+a).hasClass(b)?$("#"+a).removeClass(b):$("#"+a).addClass(b)},a.upTo=function(a,b,d){console.log("notes: ",d,b),TweenMax.to(".mouseIcon",.2,{bottom:"-150px",ease:Power0.easeOut}),TweenMax.to(".coverTransitions",.1,{scale:1,ease:Power4.easeOut}),TweenMax.to(".coverTransitions",.6,{opacity:1,ease:Power4.easeOut,delay:.2}),$("div.overlay").hasClass("open")&&$(".trigger-overlay").click(),setTimeout(function(){f(),g(),c(d),h(z[b]),l(),"inicio"==a?e("intro",!1,!1,!1,!0,"3/4/1461774869043.mp4","videoClass","introVideoFull"):D.pause(),I.play(a)},500),TweenMax.to(".coverTransitions",7,{opacity:0,ease:Power4.easeOut,delay:3}),TweenMax.to(".coverTransitions",.1,{scale:0,ease:Power4.easeOut,delay:7})},a.prevFoto=function(a,b){if($(".slideimg"+a).removeClass("videoSlideResizeOut videoSlideResize"),void 0==b)var c="-110%";else var c="-"+b;var d=$(".slideimg"+a).first();TweenMax.to(d,.1,{left:c,repeatDelay:.1,repeat:1,yoyo:!0,onRepeat:function(){$("#fotoGroup"+a).append(d),d[0].childNodes[1].id&&0==x&&$("#"+d[0].childNodes[1].id).get(0).play()},ease:Power4.easeOut})},a.nextFoto=function(a,b){if($(".slideimg"+a).removeClass("videoSlideResizeOut videoSlideResize"),void 0==b)var c="110%";else var c=b;var d=$(".slideimg"+a).last();d.attr("autoplay","autoplay"),TweenMax.to(d,.1,{left:c,repeatDelay:.1,repeat:1,yoyo:!0,onRepeat:function(){$("#fotoGroup"+a).prepend(d),d[0].childNodes[1].id&&0==x&&$("#"+d[0].childNodes[1].id).get(0).play()},ease:Power4.easeOut})},a.openCloseAddInfo=function(a){var b=".ad"+a;1==$(".plusInfoO"+a).css("opacity")?($(".plusInfoC"+a).css("opacity","1"),$(".plusInfoO"+a).css("opacity","0"),TweenMax.to(b,.3,{opacity:1,scale:1,ease:Back.easeOut})):($(".plusInfoC"+a).css("opacity","0"),$(".plusInfoO"+a).css("opacity","1"),TweenMax.to(b,.3,{opacity:0,scale:0,ease:Back.easeOut}))},a.openLanguaje=function(){console.log(y),y?(TweenMax.staggerTo(".lang",.3,{opacity:0,scale:0,ease:Back.easeOut.config(.8)},.1),y=!1,console.log("entra en true",y)):(y=!0,TweenMax.staggerTo(".lang",.3,{opacity:1,scale:1,ease:Back.easeOut.config(.8)},.1),console.log("entra en false",y))},a.changeLenguaje=function(b){switch(b){case"CT"==b:var c=languajeCT;break;case"SP"==b:var c=languajeSP;break;case"ENG"==b:var c=languajeENG;break;default:var c=languajeCT}a.CatText=c.CatText,a.photoText=c.photoText,a.tooltipText=c.tooltipText,a.generalText=c.text,a.menuText=c.menu},$(document).on("click",".plusInfoCita",function(){var a=$(this).attr("value");"[+]"==$(this).text()?($(this).text("[-]"),_.each(t[parseInt(a)],function(b,c){setTimeout(function(){m(b,a)},5*c)})):($(this).text("[+]"),_.each($("#cita"+a+"suma").children(),function(a,b){setTimeout(function(){n(a)},5*b)}))}),a.loadCredits=function(){s("credits")},$(window).bind("mousewheel DOMMouseScroll",function(a){T.hasClass("open")||S.hasClass("open")||(a.preventDefault(),TweenMax.to(".additional",.2,{opacity:0,scale:0,ease:Back.easeOut}),"mousedown"!=a.type&&(a.originalEvent.wheelDelta>0||a.originalEvent.detail<0?I.reverse():I.play()))}),$(window).bind("keydown",function(a){if(!T.hasClass("open")&&!S.hasClass("open")){a.preventDefault(),TweenMax.to(".additional",.2,{opacity:0,scale:0,ease:Back.easeOut});var b=a.keyCode||a.which;switch(b){case 37:I.reverse();break;case 38:I.reverse();break;case 39:I.play();break;case 40:I.play()}}}),window.DeviceOrientationEvent&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?a.controlText="continua":a.controlText="continua",document.addEventListener("touchstart",p,!1),document.addEventListener("touchmove",q,!1);var K=null,L=null,M=$("div.container"),N=$("div.container2"),O=$(".trigger-overlay"),P=$(".trigger-anecdota"),Q=$(".mouseIcon"),R=$(".sound"),S=$("div.overlay"),T=$("div.overlay-anecdota"),U=($("button.overlay-close"),$("button.overlay-anecdota-close"),{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"}),V=U[Modernizr.prefixed("transition")],W={transitions:Modernizr.csstransitions};O.on("click",function(){r()}),P.on("click",function(){var a=$(this).attr("data-anecdota");s(a)}),R.on("click",function(){i()}),Q.on("click",function(){I.play()})}]),angular.module("smcApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);