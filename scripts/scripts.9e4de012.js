"use strict";angular.module("shipApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","uiGmapgoogle-maps","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/map",{templateUrl:"views/map.html",controllerAs:"map"}).when("/weight",{templateUrl:"views/weight.html",controller:"WeightCtrl",controllerAs:"weight"}).when("/summary",{templateUrl:"views/summary.html",controller:"SummaryCtrl",controllerAs:"summary"}).when("/payment",{templateUrl:"views/payment.html",controller:"PaymentCtrl",controllerAs:"payment"}).when("/load",{templateUrl:"views/load.html",controller:"LoadCtrl",controllerAs:"load"}).otherwise({redirectTo:"/"})}]),angular.module("shipApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("shipApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),function(){function a(){var a,b=document.createElement("div"),c={transition:"transitionend",OTransition:"otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(a in c)if(c.hasOwnProperty(a)&&void 0!==b.style[a])return c[a];return!1}function b(a){var b={};a=a||window.event,b.evTarget=a.currentTarget||a.srcElement;var c=b.evTarget.getAttribute("data-target");return b.dataTarget=c?document.querySelector(c):!1,b}function c(a){var b=a.style.height;a.style.height="auto";var c=getComputedStyle(a).height;return a.style.height=b,a.offsetHeight,c}function d(a,b){if(document.createEvent){var c=document.createEvent("HTMLEvents");c.initEvent(b,!0,!1),a.dispatchEvent(c)}else a.fireEvent("on"+b)}function e(a,b){a.classList.remove("collapse"),a.classList.add("collapsing"),b.classList.remove("collapsed"),b.setAttribute("aria-expanded",!0),a.style.height=c(a),l?a.addEventListener(l,function(){g(a)},!1):g(a)}function f(a,b){a.classList.remove("collapse"),a.classList.remove("in"),a.classList.add("collapsing"),b.classList.add("collapsed"),b.setAttribute("aria-expanded",!1),a.style.height=getComputedStyle(a).height,a.offsetHeight,a.style.height="0px"}function g(a){a.classList.remove("collapsing"),a.classList.add("collapse"),a.setAttribute("aria-expanded",!1),"0px"!==a.style.height&&(a.classList.add("in"),a.style.height="auto")}function h(a){a.preventDefault();var c=b(a),d=c.dataTarget;return d.classList.contains("in")?f(d,c.evTarget):e(d,c.evTarget),!1}function i(a){function c(){try{f.parentNode.removeChild(f),d(f,"closed.bs.alert")}catch(a){window.console.error("Unable to remove alert")}}a.preventDefault();var e=b(a),f=e.dataTarget;if(!f){var g=e.evTarget.parentNode;g.classList.contains("alert")?f=g:g.parentNode.classList.contains("alert")&&(f=g.parentNode)}return d(f,"close.bs.alert"),f.classList.remove("in"),l&&f.classList.contains("fade")?f.addEventListener(l,function(){c()},!1):c(),!1}function j(a){a=a||window.event;var b=a.currentTarget||a.srcElement,c=b.parentElement,d=" "+c.className+" ";return d.indexOf(" open ")>-1?(d=d.replace(" open "," "),c.className=d):c.className+=" open ",!1}function k(a){a=a||window.event;var b=a.currentTarget||a.srcElement,c=b.parentElement;return c.className=(" "+c.className+" ").replace(" open "," "),a.relatedTarget&&"dropdown"!==a.relatedTarget.getAttribute("data-toggle")&&a.relatedTarget.click(),!1}for(var l=a(),m=document.querySelectorAll("[data-toggle=collapse]"),n=0,o=m.length;o>n;n++)m[n].onclick=h;for(var p=document.querySelectorAll("[data-dismiss=alert]"),q=0,r=p.length;r>q;q++)p[q].onclick=i;for(var s,t=document.querySelectorAll("[data-toggle=dropdown]"),u=0,v=t.length;v>u;u++)s=t[u],s.setAttribute("tabindex","0"),s.onclick=j,s.onblur=k}(),function(a,b){b.module("shipApp").config(["uiGmapGoogleMapApiProvider",function(a){a.configure({v:"3.17",libraries:"places"})}]).run(["$templateCache",function(a){a.put("searchbox.tpl.html",'<input id="pac-input" class="pac-controls" type="text" placeholder="Search">'),a.put("window.tpl.html",'<div ng-controller="WindowCtrl" ng-init="showPlaceDetails(parameter)">{{place.name}}</div>')}]).controller("WindowCtrl",function(a){a.place={},a.showPlaceDetails=function(b){a.place=b}}).controller("SearchBoxController",["$scope","$timeout","uiGmapLogger","$http","uiGmapGoogleMapApi",function(a,b,c,d,e){c.doLog=!0,e.then(function(b){b.visualRefresh=!0,a.defaultBounds=new google.maps.LatLngBounds(new google.maps.LatLng(40.82148,-73.6645),new google.maps.LatLng(40.66541,-74.31715)),a.map.bounds={northeast:{latitude:a.defaultBounds.getNorthEast().lat(),longitude:a.defaultBounds.getNorthEast().lng()},southwest:{latitude:a.defaultBounds.getSouthWest().lat(),longitude:-a.defaultBounds.getSouthWest().lng()}},a.searchbox.options.bounds=new google.maps.LatLngBounds(a.defaultBounds.getNorthEast(),a.defaultBounds.getSouthWest())}),angular.extend(a,{selected:{options:{visible:!1},templateurl:"window.tpl.html",templateparameter:{}},map:{control:{},center:{latitude:40.74349,longitude:-73.990822},zoom:12,dragging:!1,bounds:{},markers:[],idkey:"place_id",events:{idle:function(a){},dragend:function(b){var c=b.getBounds(),d=c.getNorthEast(),e=c.getSouthWest();a.searchbox.options.bounds=new google.maps.LatLngBounds(e,d)}}},searchbox:{template:"searchbox.tpl.html",options:{autocomplete:!0},events:{place_changed:function(b){var c=b.getPlace();if(a.place=c,console.log(c),a.address_fmt=c.adr_address,c.address_components){var d=[],e=new google.maps.LatLngBounds,f={id:c.place_id,place_id:c.place_id,name:c.address_components[0].long_name,latitude:c.geometry.location.lat(),longitude:c.geometry.location.lng(),options:{visible:!1},templateurl:"window.tpl.html",templateparameter:c};d.push(f),e.extend(c.geometry.location),a.map.bounds={northeast:{latitude:e.getNorthEast().lat(),longitude:e.getNorthEast().lng()},southwest:{latitude:e.getSouthWest().lat(),longitude:e.getSouthWest().lng()}},_.each(d,function(b){b.closeClick=function(){return a.selected.options.visible=!1,b.options.visble=!1,a.$apply()},b.onClicked=function(){a.selected.options.visible=!1,a.selected=b,a.selected.options.visible=!0}}),a.map.markers=d}else console.log("do something else with the search string: "+c.name)}}}})}])}(window,angular),angular.module("shipApp").controller("WeightCtrl",["$scope","$timeout",function(a,b){a.update_weight=function(){a.w+=.159,a.wtext=_.take(a.w.toString().split(""),6).join(""),a.w<13?_.delay(a.update_weight,40):(a.current_step="Package Complete, you can move to the next step now.",a.next=!0),a.$apply()},a.init=function(){a.w=0,a.wtext="0.000",a.current_step="Make sure nothing is on the scale while calibrating",a.calibrating=!0,_.delay(a.calibration_done,3e3)},a.calibration_done=function(){return a.calibrating=!1,a.current_step="Okay Calibration done, place package on the scale.",console.log("Yayyy",a.current_step,a.calibrating),a.$apply(),_.delay(a.update_weight,1e3),a},a.init();var c=function(a){this.svg=a,this.timing=.3,this.direction=0,this.timelineEnd=0,this.timeline=new TimelineMax({paused:!0,ease:Bounce.easeOut,yoyo:!0,repeat:-1,onStart:this.startRepeat.bind(this),onRepeat:this.startRepeat.bind(this)}),this.polygon=new d({el:this.svg.querySelector("#polygon"),parent:this.svg}),this.setupTimeline(),this.timeline.play()};c.prototype.startRepeat=function(a){this.direction?TweenMax.to(this.polygon.el,this.timing*this.polygon.maxSides*1.05,{rotation:"10deg",ease:Cubic.easeInOut}):TweenMax.to(this.polygon.el,this.timing*this.polygon.maxSides,{rotation:"370deg",ease:Cubic.easeInOut}),this.direction=!this.direction},c.prototype.applyUpdates=function(a,b){for(var c=[],d=0;b>=d;d++)c.push(a.target["x"+d]+","+a.target["y"+d]);this.polygon.el.setAttribute("points",c.join(" "))},c.prototype.setupTimeline=function(){for(var a=this.polygon.sides-1;a<this.polygon.maxSides;a++){var b=this.polygon.setSides(a+1),c=a;this.timeline.to(this.polygon.points,this.timing,_.extend(b,{ease:Cubic.easeOut,onUpdateParams:["{self}",c],onUpdate:this.applyUpdates.bind(this)}))}this.timeline.call(this.fadeOut.bind(this))},c.prototype.fadeOut=function(){this.timelineEnd&&(this.timeline.pause(),TweenMax.to(this.svg,.4,{bezier:{curviness:1.25,values:[{scale:1.2,opacity:1},{scale:.8,opacity:.5},{scale:.2,opacity:.1},{scale:0,opacity:0}]}}))},c.prototype.finish=function(){this.timelineEnd=1};var d=function(a){this.el=a.el,this.parent=a.parent,this.setupPolygon()};d.prototype.setupPolygon=function(){this.size=this.parent.getBoundingClientRect().width,this.center=this.size/6,this.radius=this.center,this.sides=1,this.maxSides=12,this.points={x0:0,y0:60,x1:51,y1:-31,x2:-52,y2:-32,x3:-52,y3:-32},TweenMax.set(this.el,{transformOrigin:"center center",x:this.size/2,y:this.size/2}),this.points=this.fillPoints(this.points,this.sides)},d.prototype.setSides=function(a){var b={},c=2*Math.PI/a,d=0;for(d;a>d;d++){var e=d*c,f=this.center+this.radius,g=f*Math.sin(e),h=f*Math.cos(e);b["x"+d]=Math.floor(g),b["y"+d]=Math.floor(h)}return this.fillPoints(b,d)},d.prototype.fillPoints=function(a,b){var c=a["x"+(b-1)],d=a["y"+(b-1)];for(b;b<this.maxSides;b++)a["x"+b]=c,a["y"+b]=d;return a};var c=function(a){this.svg=a,this.timing=.3,this.direction=0,this.timelineEnd=0,this.timeline=new TimelineMax({paused:!0,ease:Bounce.easeOut,yoyo:!0,repeat:-1,onStart:this.startRepeat.bind(this),onRepeat:this.startRepeat.bind(this)}),this.polygon=new d({el:this.svg.querySelector("#polygon"),parent:this.svg}),this.setupTimeline(),this.timeline.play()};c.prototype.startRepeat=function(a){this.direction?TweenMax.to(this.polygon.el,this.timing*this.polygon.maxSides*1.05,{rotation:"10deg",ease:Cubic.easeInOut}):TweenMax.to(this.polygon.el,this.timing*this.polygon.maxSides,{rotation:"370deg",ease:Cubic.easeInOut}),this.direction=!this.direction},c.prototype.applyUpdates=function(a,b){for(var c=[],d=0;b>=d;d++)c.push(a.target["x"+d]+","+a.target["y"+d]);this.polygon.el.setAttribute("points",c.join(" "))},c.prototype.setupTimeline=function(){for(var a=this.polygon.sides-1;a<this.polygon.maxSides;a++){var b=this.polygon.setSides(a+1),c=a;this.timeline.to(this.polygon.points,this.timing,_.extend(b,{ease:Cubic.easeOut,onUpdateParams:["{self}",c],onUpdate:this.applyUpdates.bind(this)}))}this.timeline.call(this.fadeOut.bind(this))},c.prototype.fadeOut=function(){this.timelineEnd&&(this.timeline.pause(),TweenMax.to(this.svg,.4,{bezier:{curviness:1.25,values:[{scale:1.2,opacity:1},{scale:.8,opacity:.5},{scale:.2,opacity:.1},{scale:0,opacity:0}]}}))},c.prototype.finish=function(){this.timelineEnd=1};var d=function(a){this.el=a.el,this.parent=a.parent,this.setupPolygon()};d.prototype.setupPolygon=function(){this.size=this.parent.getBoundingClientRect().width,this.center=this.size/6,this.radius=this.center,this.sides=1,this.maxSides=12,this.points={x0:0,y0:60,x1:51,y1:-31,x2:-52,y2:-32,x3:-52,y3:-32},TweenMax.set(this.el,{transformOrigin:"center center",x:this.size/2,y:this.size/2}),this.points=this.fillPoints(this.points,this.sides)},d.prototype.setSides=function(a){var b={},c=2*Math.PI/a,d=0;for(d;a>d;d++){var e=d*c,f=this.center+this.radius,g=f*Math.sin(e),h=f*Math.cos(e);b["x"+d]=Math.floor(g),b["y"+d]=Math.floor(h)}return this.fillPoints(b,d)},d.prototype.fillPoints=function(a,b){var c=a["x"+(b-1)],d=a["y"+(b-1)];for(b;b<this.maxSides;b++)a["x"+b]=c,a["y"+b]=d;return a};new c(document.querySelector(".spinner"))}]),angular.module("shipApp").controller("SummaryCtrl",["$scope",function(a){a.shipping="Ground"}]),angular.module("shipApp").controller("PaymentCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("shipApp").controller("LoadCtrl",["$scope","$timeout",function(a,b){a.update_weight=function(){a.w+=.159,a.wtext=_.take(a.w.toString().split(""),6).join(""),a.w<13?_.delay(a.update_weight,40):(a.current_step="Package Complete, you can move to the next step now.",a.next=!0),a.$apply()},a.init=function(){a.w=0,a.wtext="0.000",a.current_step="Printing Labels for each of your packages...",a.calibrating=!0,_.delay(a.calibration_done,4e3)},a.calibration_done=function(){return a.calibrating=!1,a.step=0,a.current_step="Okay Labels are printed, follow the steps below for each package.",console.log("Yayyy",a.current_step,a.calibrating),a.$apply(),a},a.init();var c=function(a){this.svg=a,this.timing=.3,this.direction=0,this.timelineEnd=0,this.timeline=new TimelineMax({paused:!0,ease:Bounce.easeOut,yoyo:!0,repeat:-1,onStart:this.startRepeat.bind(this),onRepeat:this.startRepeat.bind(this)}),this.polygon=new d({el:this.svg.querySelector("#polygon"),parent:this.svg}),this.setupTimeline(),this.timeline.play()};c.prototype.startRepeat=function(a){this.direction?TweenMax.to(this.polygon.el,this.timing*this.polygon.maxSides*1.05,{rotation:"10deg",ease:Cubic.easeInOut}):TweenMax.to(this.polygon.el,this.timing*this.polygon.maxSides,{rotation:"370deg",ease:Cubic.easeInOut}),this.direction=!this.direction},c.prototype.applyUpdates=function(a,b){for(var c=[],d=0;b>=d;d++)c.push(a.target["x"+d]+","+a.target["y"+d]);this.polygon.el.setAttribute("points",c.join(" "))},c.prototype.setupTimeline=function(){for(var a=this.polygon.sides-1;a<this.polygon.maxSides;a++){var b=this.polygon.setSides(a+1),c=a;this.timeline.to(this.polygon.points,this.timing,_.extend(b,{ease:Cubic.easeOut,onUpdateParams:["{self}",c],onUpdate:this.applyUpdates.bind(this)}))}this.timeline.call(this.fadeOut.bind(this))},c.prototype.fadeOut=function(){this.timelineEnd&&(this.timeline.pause(),TweenMax.to(this.svg,.4,{bezier:{curviness:1.25,values:[{scale:1.2,opacity:1},{scale:.8,opacity:.5},{scale:.2,opacity:.1},{scale:0,opacity:0}]}}))},c.prototype.finish=function(){this.timelineEnd=1};var d=function(a){this.el=a.el,this.parent=a.parent,this.setupPolygon()};d.prototype.setupPolygon=function(){this.size=this.parent.getBoundingClientRect().width,this.center=this.size/6,this.radius=this.center,this.sides=1,this.maxSides=12,this.points={x0:0,y0:60,x1:51,y1:-31,x2:-52,y2:-32,x3:-52,y3:-32},TweenMax.set(this.el,{transformOrigin:"center center",x:this.size/2,y:this.size/2}),this.points=this.fillPoints(this.points,this.sides)},d.prototype.setSides=function(a){var b={},c=2*Math.PI/a,d=0;for(d;a>d;d++){var e=d*c,f=this.center+this.radius,g=f*Math.sin(e),h=f*Math.cos(e);b["x"+d]=Math.floor(g),b["y"+d]=Math.floor(h)}return this.fillPoints(b,d)},d.prototype.fillPoints=function(a,b){var c=a["x"+(b-1)],d=a["y"+(b-1)];for(b;b<this.maxSides;b++)a["x"+b]=c,a["y"+b]=d;return a};var c=function(a){this.svg=a,this.timing=.3,this.direction=0,this.timelineEnd=0,this.timeline=new TimelineMax({paused:!0,ease:Bounce.easeOut,yoyo:!0,repeat:-1,onStart:this.startRepeat.bind(this),onRepeat:this.startRepeat.bind(this)}),this.polygon=new d({el:this.svg.querySelector("#polygon"),parent:this.svg}),this.setupTimeline(),this.timeline.play()};c.prototype.startRepeat=function(a){this.direction?TweenMax.to(this.polygon.el,this.timing*this.polygon.maxSides*1.05,{rotation:"10deg",ease:Cubic.easeInOut}):TweenMax.to(this.polygon.el,this.timing*this.polygon.maxSides,{rotation:"370deg",ease:Cubic.easeInOut}),this.direction=!this.direction},c.prototype.applyUpdates=function(a,b){for(var c=[],d=0;b>=d;d++)c.push(a.target["x"+d]+","+a.target["y"+d]);this.polygon.el.setAttribute("points",c.join(" "))},c.prototype.setupTimeline=function(){for(var a=this.polygon.sides-1;a<this.polygon.maxSides;a++){var b=this.polygon.setSides(a+1),c=a;this.timeline.to(this.polygon.points,this.timing,_.extend(b,{ease:Cubic.easeOut,onUpdateParams:["{self}",c],onUpdate:this.applyUpdates.bind(this)}))}this.timeline.call(this.fadeOut.bind(this))},c.prototype.fadeOut=function(){this.timelineEnd&&(this.timeline.pause(),TweenMax.to(this.svg,.4,{bezier:{curviness:1.25,values:[{scale:1.2,opacity:1},{scale:.8,opacity:.5},{scale:.2,opacity:.1},{scale:0,opacity:0}]}}))},c.prototype.finish=function(){this.timelineEnd=1};var d=function(a){this.el=a.el,this.parent=a.parent,this.setupPolygon()};d.prototype.setupPolygon=function(){this.size=this.parent.getBoundingClientRect().width,this.center=this.size/6,this.radius=this.center,this.sides=1,this.maxSides=12,this.points={x0:0,y0:60,x1:51,y1:-31,x2:-52,y2:-32,x3:-52,y3:-32},TweenMax.set(this.el,{transformOrigin:"center center",x:this.size/2,y:this.size/2}),this.points=this.fillPoints(this.points,this.sides)},d.prototype.setSides=function(a){var b={},c=2*Math.PI/a,d=0;for(d;a>d;d++){var e=d*c,f=this.center+this.radius,g=f*Math.sin(e),h=f*Math.cos(e);b["x"+d]=Math.floor(g),b["y"+d]=Math.floor(h)}return this.fillPoints(b,d)},d.prototype.fillPoints=function(a,b){var c=a["x"+(b-1)],d=a["y"+(b-1)];for(b;b<this.maxSides;b++)a["x"+b]=c,a["y"+b]=d;return a};new c(document.querySelector(".spinner"))}]),angular.module("shipApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/load.html",'<div> <div class="jumbotron"> <h1>Load Your Package</h1> <p class="lead"> {{current_step}} <a class="nxtbtn btn btn-lg btn-success right" ng-show="next" ng-href="#/summary">NEXT <span class="glyphicon glyphicon-ok"></span></a> </p> </div> <div id="container" class="container" ng-show="calibrating==true"> <svg class="spinner" version="1.1" style="margin-top:200px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200px" height="200px" viewbox="0 0 100 100"> <svg preserveaspectratio="xMidYMid meet" viewbox="0 0 200 200" width="100%" height="100%"> <polygon id="polygon"> </svg> </svg> <p ng-show="calibrating" style="margin-top:-80px">printing labels...</p> </div> <div class="valign-wrapper" ng-show="calibrating==false"> <div class="valign" ng-show="step>=0"> <div ng-show="step>=0" ng-class="{\'jumbotron\':step==0}"><h4>Step 1: Place Label On Package <span ng-show="step>0" class="right mr2 glyphicon glyphicon-check"></span></h4> </div> <div ng-show="step>=1" ng-class="{\'jumbotron\':step==1}"><h4>Step 2: Place Box On Scale <span ng-show="step>1" class="right mr2 glyphicon glyphicon-check"></span></h4> </div> <div ng-show="step>=2" ng-class="{\'jumbotron\':step==2}"><h4>Step 3: Press Load When Ready <span ng-show="step>2" class="right mr2 glyphicon glyphicon-check"></span></h4> </div> <div ng-show="step>=3" ng-class="{\'jumbotron teal wtext\':step==3}"><h4>All Packages Complete, Thank You! <span ng-show="step>3" class="right mr2 glyphicon glyphicon-check"></span></h4> </div> </div> </div> <div class="jumbotron b0 m0 w100"> <a class="btn blue btn-lg btn-success left" style="margin-top:-32px" ng-click="step=step-1"><span class="glyphicon glyphicon-triangle-left"></span> BACK</a> <a ng-show="step<3" class="btn btn-lg btn-success right" style="margin-top:-32px" ng-click="step=step+1">{{step >= 2 ? \'LOAD\' : \'NEXT\'}} <span class="glyphicon glyphicon-triangle-right"></span></a> <a ng-show="step>=3" class="btn btn-lg btn-success right" style="margin-top:-32px" href="#/">DONE <span class="glyphicon glyphicon-check"></span></a> </div> <style type="text/css">.valign-wrapper{\n\n		width:100%;\n		height: 400px;\n		text-align: center;\n	}\n	.valign{\n		width: 100%;\n	}\n	.valign h1{\n		font-size: 80px;\n	}\n	.valign h1 span{\n			font-size: 12px;\n		}\n		#container {\n	  -webkit-transform-style: preserve-3d;\n	  -moz-transform-style: preserve-3d;\n	  transform-style: preserve-3d;\n	  text-align: center;\n	}\n\n	svg polygon {\n	    stroke: #000;\n	    fill: transparent;\n	    stroke-width: 2;\n	}\n\n	#container > svg {\n	  margin: 0 auto;\n\n	  position: relative;\n	  top: 50%;\n	  -webkit-transform: translateY(-50%);\n	  -ms-transform: translateY(-50%);\n	  transform: translateY(-50%);\n	}</style> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>Got Packages?</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> This automated shipping kiosk can help. </p> </div> <div class="jumbotron b0 m0 w100"> <a class="btn btn-lg btn-success right" ng-href="#/map">BEGIN <span class="glyphicon glyphicon-ok"></span></a> </div>'),a.put("views/map.html",'<!DOCTYPE html><!-- See https://rawgithub.com/ as it returns the correct mimetypes that are requested from github.--><!-- make IE Happy , http://docs.angularjs.org/guide/ie --><!--[if lte IE 9]>\n    <script>\n        window.html5 = {\n            \'elements\': \'marker window windows markers layer polyline ng-controller ng-repeat ng-init ng-model ng-hide ng-show\'\n        };\n    </script>\n\n    <script src="//rawgithub.com/bestiejs/json3/v3.2.5a/lib/json3.min.js"></script>\n    <script src="//rawgithub.com/kriskowal/es5-shim/v2.1.0/es5-shim.min.js"></script>\n    <script src="//rawgithub.com/jwmcpeak/EventShim/master/eventShim.js"></script>\n    <script src="//rawgithub.com/aFarkas/html5shiv/3.7.0/src/html5shiv.js"></script>\n    <![endif]--> <body ng-controller="ExampleController"> <!--	You can use either a div having class \'google-map\' or the \'<ui-gmap-google-map>\' element; in\n    the latter case, uncomment the style above to make sure the custom elements gets block display	--> <div> <div data-ng-controller="SearchBoxController" class="middle"> <div class="jumbotron"> <h1>Where To?</h1> <p class="lead"> Enter an address in the Google maps search.Then confirm the TO: section is correct. </p> </div> <div style="width:50%; float:left"> <ui-gmap-google-map center="map.center" zoom="map.zoom" dragging="map.dragging" bounds="map.bounds" events="map.events" options="map.options" pan="true" control="map.control"> <!--to add as a map control --> <ui-gmap-search-box options="searchbox.options" template="searchbox.template" events="searchbox.events" position="searchbox.position"></ui-gmap-search-box> <!--to add to a parent div--> <!--<ui-gmap-search-box options="searchbox.options" template="searchbox.template" events="searchbox.events" parentdiv="searchbox.parentdiv"></ui-gmap-search-box>--> <ui-gmap-markers idkey="map.idkey" models="map.markers" coords="\'self\'" icon="\'icon\'" click="\'onClicked\'"></ui-gmap-markers> <ui-gmap-window coords="selected" idkey="selected.place_id" templateurl="selected.templateurl" templateparameter="selected.templateparameter" options="selected.options" closeclick="selected.closeClick()" ng-cloak> </ui-gmap-window> </ui-gmap-google-map> </div> <div ng-disabled="!place" style="height:380px;width:50%; float:right" class="container"> <div class="z-depth-2 first" style="height:45%"> <div style="margin-left:15px"> <h5>FROM:</h5> <input class="input-field" style="font-size:14px; margin-left:20px;padding-top:6px" type="text" placeholder="Sender\'s Name"> </div> <div style="margin-top:20px"> <p style="margin-left:60px"> {{place.address_components[0].long_name}} {{place.address_components[1].long_name}} </p> </div> <div> <p style="margin-left:60px"> {{place.address_components[2].long_name+\', \'}}{{place.address_components[3].long_name}} {{place.address_components[4].long_name}} {{place.address_components[8].long_name}} </p> </div> </div> <div class="z-depth-4" style="margin-top:50px;height:45%"> <div style="margin-left:15px"> <h5>TO:</h5> <input class="input-field" style="font-size:14px; margin-left:20px;padding-top:6px" type="text" placeholder="Recipient\'s Name"> </div> <div ng-show="place"> <p style="margin-left:60px; margin-top:20px"> {{place.address_components[0].long_name}} {{place.address_components[1].long_name}} </p> </div> <div ng-show="place"> <p style="margin-left:60px"> {{place.address_components[2].long_name+\', \'}}{{place.address_components[3].long_name}} {{place.address_components[4].long_name}} {{place.address_components[8].long_name}} </p> </div> </div> </div> <div class="jumbotron b0 m0 w100"> <a class="btn blue btn-lg btn-success left" style="margin-top:-32px" ng-click="step=step-1"><span class="glyphicon glyphicon-triangle-left"></span> BACK</a> <a class="nxtbtn btn btn-lg btn-success right" ng-disabled="!place" ng-href="#/weight">NEXT <span class="glyphicon glyphicon-ok"></span></a> </div> </div> </div> </body> '),a.put("views/payment.html",'<div> <div class="jumbotron"> <h1>Summary & Shipping Method</h1> <p class="lead"> Review package details, and select shipping options. </p> </div> <div> <section class="credit-card visa gr-visa"> <div class="logo">Visa</div> <form> <h2>Payment Details</h2> <ul class="inputs"> <li> <label>Card Number</label> <input type="text" name="card_number" pattern="[0-9]{13,16}" value="9842 9472 9457 9472" class="full gr-input" required> </li> <li class="expire last"> <label>Expiration</label> <input type="text" name="expire_month" value="December (12)" size="10" class="month gr-input" required> <input type="text" name="expire_year" value="2014" size="10" class="year gr-input" required> <div class="clearfix"></div> </li> <li class="cvc-code last"> <label>CVC Code</label> <input type="text" name="cvc_code" value="174" size="10" class="gr-input" required> </li> <div class="clearfix"></div> </ul> </form> <div class="watermark">Visa</div> </section> <div class="jumbotron"> <a class="btn btn-lg btn-success" ng-class="{\'disabled\':confirmed}" style="margin-top:-32px" ng-href="#/payment" ng-click="confirmed=\'CONFIRMED\'">{{confirmed || \'PAY\'}} <span ng-show="confirmed" class="glyphicon glyphicon-check"></span></a> <a class="btn btn-lg btn-success right" ng-class="{\'disabled\':!confirmed}" style="margin-top:-32px" ng-href="#/load" ng-click="confirmed=\'CONFIRMED\'">LABEL & LOAD</a> </div> </div> </div> <style type="text/css">/* === Basic reset === */\n* { margin: 0; padding: 0; outline: none; box-sizing:border-box; }\na>img { border: none; }\nheader, footer, article, section, nav, aside { display: block; }\n\n/* === General === */\nbody {\n    font-family:Arial;\n    font-size: 14px;\n    background:#ddd;\n}\n\n.clearfix {\n    clear:both;\n}\n/* === Credit Card === */\n.credit-card {\n    display:block;\n    position:relative;\n    width:93.75%;   /* This is 300px on 320px wide screen */\n    max-width:500px;    /* Just to make sure that it doesnt get crazy on bg screens */\n    min-width:300px;    /* And make sure that it contains at least some size */\n    margin:30px auto;\n    padding:20px;\n    overflow:hidden;\n    border-radius:6px;\n    z-index:1;\n}\n\n.credit-card .inputs {\n    list-style:none;\n    margin-top:30px;\n}\n\n.credit-card .inputs li {\n    margin-bottom:30px;\n}\n\n.credit-card .inputs li.last {\n    margin-bottom:10px;\n}\n\n.credit-card .inputs li.expire {\n    float:left;\n    width:70%;\n    margin-right:5%;\n}\n\n.credit-card .inputs li.expire input{\n    float:left;\n    width:35%;\n}\n\n.credit-card .inputs li.expire input.month{\n    width:60%;\n    margin-right:5%;\n}\n\n.credit-card .inputs li.cvc-code {\n    float:left;\n    width:25%;\n}\n\n.credit-card .inputs li.cvc-code input {\n    width:100%;\n}\n\n.credit-card .watermark {\n    position:absolute;\n    z-index:10;\n}\n\n.credit-card form {\n    position:relative;\n    z-index:50;\n}\n\n.credit-card .logo {\n    position:absolute;\n    top:15px;\n    right:20px;\n    text-transform:uppercase;\n    font-weight:bold;\n}\n/* === Visa === */\n.visa {\n    color:#fff;\n    box-shadow: 0px 0px 4px rgba(0,0,0,0.8), inset 0px 1px 3px rgba(255,255,255,0.3), inset 0px 0px 2px rgba(255,255,255,0.2);\n}\n\n.visa h2 {\n    text-shadow:1px 1px 2px rgba(17,121,173,0.8);\n}\n\n.visa .logo {\n    color:rgba(255,255,255,0.9);\n    font-size:2em;\n    font-style:italic;\n    text-shadow:0px 0px 3px rgba(17,123,173,0.9);\n}\n\n.visa .logo:after {\n    content:\' \';\n    position:absolute;\n    left:0px;\n    top:5px;\n    width: 0;\n    height: 0;\n    border-top: 10px solid orange;\n    border-left: 10px solid transparent;\n}\n\n.visa .watermark {\n    bottom:-100px;\n    left:-50px;\n    color:rgba(255,255,255,0.06);\n    font-size:20em;\n    font-weight:bold;\n    font-style:italic;\n}\n/* === Forms === */\nlabel {\n    display:block;\n    margin-bottom:8px;\n    color:rgba(255,255,255,0.6);\n    text-transform:uppercase;\n    font-size:1.1em;\n    font-weight:bold;\n    text-shadow:0px 1px 2px rgba(17,123,173,0.6);\n}\n\ninput {\n    display:block;\n    padding:12px 10px;\n    color:#999;\n    font-size:1.2em;\n    font-weight:bold;\n    text-shadow:1px  1px 1px #fff;\n    border:1px solid rgba(16,103,133,0.6);\n    box-shadow:0px 0px 3px rgba(255,255,255,0.5), inset 0px 1px 4px rgba(0,0,0,0.2);\n    border-radius:3px;\n}\n\ninput.full {\n    width:100%;\n}\n\n\n/* === Gradients === */\n.gr-visa {\n    background: #1db1cf; /* Old browsers */\n    background: -moz-linear-gradient(top,  #1db1cf 0%, #1078ab 100%); /* FF3.6+ */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#1db1cf), color-stop(100%,#1078ab)); /* Chrome,Safari4+ */\n    background: -webkit-linear-gradient(top,  #1db1cf 0%,#1078ab 100%); /* Chrome10+,Safari5.1+ */\n    background: -o-linear-gradient(top,  #1db1cf 0%,#1078ab 100%); /* Opera 11.10+ */\n    background: -ms-linear-gradient(top,  #1db1cf 0%,#1078ab 100%); /* IE10+ */\n    background: linear-gradient(to bottom,  #1db1cf 0%,#1078ab 100%); /* W3C */\n'+"    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1db1cf', endColorstr='#1078ab',GradientType=0 ); /* IE6-9 */\n}\n.gr-input {\n    background: #d3d3d3; /* Old browsers */\n    background: -moz-linear-gradient(top,  #d3d3d3 0%, #d9d9d9 38%, #e5e5e5 82%, #e7e7e7 100%); /* FF3.6+ */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#d3d3d3), color-stop(38%,#d9d9d9), color-stop(82%,#e5e5e5), color-stop(100%,#e7e7e7)); /* Chrome,Safari4+ */\n    background: -webkit-linear-gradient(top,  #d3d3d3 0%,#d9d9d9 38%,#e5e5e5 82%,#e7e7e7 100%); /* Chrome10+,Safari5.1+ */\n    background: -o-linear-gradient(top,  #d3d3d3 0%,#d9d9d9 38%,#e5e5e5 82%,#e7e7e7 100%); /* Opera 11.10+ */\n    background: -ms-linear-gradient(top,  #d3d3d3 0%,#d9d9d9 38%,#e5e5e5 82%,#e7e7e7 100%); /* IE10+ */\n    background: linear-gradient(to bottom,  #d3d3d3 0%,#d9d9d9 38%,#e5e5e5 82%,#e7e7e7 100%); /* W3C */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d3d3d3', endColorstr='#e7e7e7',GradientType=0 ); /* IE6-9 */\n}</style>"),a.put("views/summary.html",'<div> <div class="jumbotron"> <h1>Summary & Shipping Method</h1> <p class="lead"> Review package details, and select shipping options. </p> </div> <div style="width:70%"> <div class="z-depth-4" style="margin-top:50px;padding:15px"> <div style="margin-left:15px"> <h5 style="margin-right:20px">TO:</h5> </div> Andrew Carnegie <div style="margin-left:20"> <div> <p style="margin-left:75px; margin-top:15px"> Warner Hall 5000 Forbes Avenue, Squirrel Hill North Pittsburgh 15213 </p> </div> <div> <p style="margin-left:75px; margin-top:20px"> <b>weight:</b> 13.038 kgs. </p> </div> </div> <form action="#" style="margin-left:75px; margin-bottom:25px; margin-top:20px"> <input ng-model="shipping" name="group1" type="radio" id="test1" value="Overnight"> <label style="margin-left:10px" for="test1">Overnight $12.00</label> <input ng-model="shipping" name="group1" type="radio" id="test2" value="2-day"> <label style="margin-left:10px" for="test2">2-day $8.00</label> <input ng-model="shipping" name="group1" type="radio" id="test3" value="Ground"> <label style="margin-left:10px" for="test3">Ground $4.00</label> </form> </div> <div class="jumbotron b0 m0 w100"> <a class="btn blue btn-lg btn-success left" style="margin-top:-32px" ng-href="#/map"><span class="glyphicon glyphicon-plus"></span> ADD A PACKAGE</a> <a ng-show="shipping" class="btn btn-lg btn-success right" style="margin-top:-32px" ng-href="#/payment">PAYMENT <span class="glyphicon glyphicon-check"></span></a> </div></div></div>'),a.put("views/weight.html",'<div> <div class="jumbotron"> <h1>Weigh The Thing</h1> <p class="lead"> {{current_step}} </p> </div> <div id="container" class="container" ng-show="calibrating==true"> <svg class="spinner" version="1.1" style="margin-top:200px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200px" height="200px" viewbox="0 0 100 100"> <svg preserveaspectratio="xMidYMid meet" viewbox="0 0 200 200" width="100%" height="100%"> <polygon id="polygon"> </svg> </svg> <p ng-show="calibrating" style="margin-top:-80px">calibrating...</p> </div> <div class="valign-wrapper" ng-show="calibrating==false"> <div class="valign"><h1>{{wtext}}<span>kgs.</span></h1></div> </div> <div class="jumbotron b0 m0 w100"> <a class="btn blue btn-lg btn-success left" style="margin-top:-32px" ng-click="step=step-1"><span class="glyphicon glyphicon-triangle-left"></span> BACK</a> <a class="nxtbtn btn btn-lg btn-success right" ng-disabled="!next" ng-href="#/summary">NEXT <span class="glyphicon glyphicon-ok"></span></a> </div> <style type="text/css">.valign-wrapper{\n\n		width:100%;\n		height: 400px;\n		text-align: center;\n	}\n	.valign{\n		width: 100%;\n	}\n	.valign h1{\n		font-size: 80px;\n	}\n	.valign h1 span{\n			font-size: 12px;\n		}\n		#container {\n	  -webkit-transform-style: preserve-3d;\n	  -moz-transform-style: preserve-3d;\n	  transform-style: preserve-3d;\n	  text-align: center;\n	}\n\n	svg polygon {\n	    stroke: #000;\n	    fill: transparent;\n	    stroke-width: 2;\n	}\n\n	#container > svg {\n	  margin: 0 auto;\n\n	  position: relative;\n	  top: 50%;\n	  -webkit-transform: translateY(-50%);\n	  -ms-transform: translateY(-50%);\n	  transform: translateY(-50%);\n	}</style> </div>');
}]);