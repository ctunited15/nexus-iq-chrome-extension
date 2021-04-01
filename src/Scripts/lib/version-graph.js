!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.versionGraph=e():t.versionGraph=e()}(self,(function(){return function(){"use strict";var t={579:function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n,i,r,a,o,l,d,h="#006bbf",s="#575757",p="#f7fbfe",u="#cee8fb",c="#dee6f3",f=0,v=null,g={fontSize:9,leftPadding:0,rightPadding:0},b=function(){var t={showDetails:!1,showCurrentVersionLabel:!1,partialDisplay:!1,selectable:!1,barGap:3,barWidth:8,contentWidth:375,labelTop:14,labelWidth:100,topPadding:20,vizPadding:6,versionClick:$.noop,versionDblClick:$.noop},e={actualHeight:function(t){return this.height(t)+11+this.bottomPadding(t)},noCategoriesActualHeight:function(t){return this.noCategoriesHeight(t)+11+this.bottomPadding(t)},barHeight:function(t){return 3*(t.barWidth+t.barGap)-1},height:function(t){return t.topPadding+this.contentRows(t)*(t.barWidth+t.barGap)+1},noCategoriesHeight:function(t){return t.topPadding+this.contentRowsNoCategories(t)*(t.barWidth+t.barGap)+1},contentRows:function(t){return t.partialDisplay?4:11},contentRowsNoCategories:function(t){return t.partialDisplay?4:6},bottomPadding:function(t){return t.partialDisplay?20:0},versionCount:function(t){return t.data.versions?t.data.versions.length:0},contentActualWidth:function(t){return(t.barWidth+t.barGap)*this.versionCount(t)},width:function(t){var e=t.data.currentVersionIndex?t.data.currentVersionIndex:0;return Math.max(t.contentWidth,2*((t.barWidth+t.barGap)*(Math.max(e,t.data.versions.length-e)+1)-t.barGap))},panning:function(t){return this.width(t)>t.contentWidth},left:function(t){var e=t.data.currentVersionIndex;return e<0?0:this.width(t)/2-(e*(t.barWidth+t.barGap)+t.barWidth/2+t.barWidth/2)},spacer:function(t){return t.barGap+t.barWidth},top:function(t){return t.topPadding},itemWidth:function(t){return t.barGap+t.barWidth}};function b(t){return t>=8?0:t>=4?1:t>1?2:1===t?3:4}function y(t){switch(t){case 0:return"#bc012f";case 1:return"#f4861d";case 2:return"#f5c648";case 3:return h;default:return}}function x(t){return function(e){return(t.barGap+t.barWidth)*e+t.barGap}}function w(t,e,n,i){var r=t.add(pv.Panel).width(e.width).top(e.top).height(e.spacer).left(3),a=e.barWidth+e.barGap-(i?0:1.5);r.add(pv.Bar).top(1).data(e.vGridLines).width(a).height(a).left((function(){return this.data()-2})).fillStyle(n)}function C(t,e,n){return t.add(pv.Panel).width(e.width).top(e.top-e.spacer).height(e.spacer).left(e.left).add(pv.Bar).top(e.barGap/2).data(e.data.policyThreatLevels[n]).width(e.barWidth).height(e.barWidth).left((function(){return x(e)(this.index)})).fillStyle(y).strokeStyle(y),e.top+=e.spacer,t}function S(t,e,n,i){t.add(pv.Label).left(28).top(n.top+1).textAlign("left").text(i),C(e,n,i.toUpperCase())}function W(t,e,a){var o=r?t.actualHeight+1:t.noCategoriesActualHeight,l=(r?t.height:t.noCategoriesHeight)-20;n.height(l).render(),i.height(l).render(),e.height(o).render(),$("#aiVersionChartContainer").height(o),$("#aiVersionChartViz").height(o),a.render()}return function(m){var T,L,P;f=0,a=null,v=null,d=null,m.data=(T=m.data,L={versions:[],versionPopularity:[],majorRevIndices:[],breakingChangeCounts:[],policyThreatLevels:{HIGHEST_THREAT:[],SECURITY:[],LICENSE:[],QUALITY:[],OTHER:[]}},P=!1,$.each(T.versions,(function(t,e){L.versions.push(e.componentIdentifier.coordinates.version),L.versionPopularity.push(e.popularity||e.relativePopularity||0);var n,i=null;null!==e.breakingChangesCount&&(P=!0,i=(n=e.breakingChangesCount)>5?0:n>=3?1:n>=1?2:0===n?3:4),L.breakingChangeCounts.push(i),T.version===e.componentIdentifier.coordinates.version&&(L.currentVersionIndex=t),e.majorRevisionStep&&L.majorRevIndices.push(t);var r=e.policyMaxThreatLevelsByCategory;L.policyThreatLevels.SECURITY.push(b(r.SECURITY)),L.policyThreatLevels.LICENSE.push(b(r.LICENSE)),L.policyThreatLevels.QUALITY.push(b(r.QUALITY)),L.policyThreatLevels.OTHER.push(b(r.OTHER)),L.policyThreatLevels.HIGHEST_THREAT.push(Math.min(L.policyThreatLevels.SECURITY[t],L.policyThreatLevels.LICENSE[t],L.policyThreatLevels.QUALITY[t],L.policyThreatLevels.OTHER[t]))})),P||(L.breakingChangeCounts=[]),L),function(b){var m,T,L,P,I,k=[],H=[6,8,9,10,11],G=[4,5,7,12],R=$("#aiVersionChartContainer"),V=b.data.breakingChangeCounts.length>0;if(a=null,b=$.extend({},t,b),r=b.showDetails,0!==R.length){for($.each(e,(function(t,n){b[t]=n.call(e,b)})),V&&(b.contentRows+=2,b.contentRowsNoCategories+=2,b.height+=b.barWidth+b.barGap,b.noCategoriesHeight+=b.barWidth+b.barGap,b.actualHeight+=b.barWidth+b.barGap,b.noCategoriesActualHeight+=b.barWidth+b.barGap,H=[5,7,9,10,11,12],G=[4,6,8,13]),R.height(b.actualHeight),L=(new pv.Panel).canvas("aiVersionChartLabels").overflow("hidden").height(b.actualHeight).width(b.labelWidth).fillStyle(p).strokeStyle(p),P=(new pv.Panel).canvas("aiVersionChartViz").overflow("hidden").height(b.actualHeight).width(b.contentWidth).fillStyle(p).strokeStyle(p),b.panning&&(P=(m=P).add(pv.Panel).overflow("hidden").height(b.actualHeight).width(b.contentWidth-30).fillStyle(p).strokeStyle(p).left(15)),I=0;I<=b.spacer*b.contentRows;I+=b.spacer)k.push(I);for(P.add(pv.Rule).data(k).left(0).width(b.width).top((function(t){return t+b.topPadding})).height(1).strokeStyle(c).strokeDasharray("1 1"),b.vGridLines=[0],I=(b.width/2-1)%b.spacer-b.spacer/2-.5;I<b.width;I+=b.spacer)b.vGridLines.push(I);if(P.add(pv.Rule).data(b.vGridLines).left((function(t){return t})).height(b.height-b.topPadding).top(b.top).strokeStyle(c).strokeDasharray("1 1"),$.each(b.partialDisplay?[]:H,(function(t,e){w(P,$.extend({},b,{top:b.top+(e-1)*b.spacer}),"#edf1f4")})),$.each(b.partialDisplay?[]:G,(function(t,e){w(P,$.extend({},b,{top:b.top+(e-1)*b.spacer}),p,!0)})),0!==b.versionCount&&(i=P.add(pv.Rule).left(b.width/2-1).top(b.topPadding).height(b.height-b.topPadding).strokeStyle("#949599"),P.add(pv.Label).left(b.width/2-70).top(15).textAlign("center").text("Older"),P.add(pv.Label).left(b.width/2).top(15).textAlign("center").text("This Version"),P.add(pv.Label).left(b.width/2+70).top(15).textAlign("center").text("Newer")),L.add(pv.Label).left(5).top(b.top+b.labelTop).textAlign("left").font("bold 10px arial").text("Popularity"),b.top+=1,function(t,e){var n=e.data,i=1,r=n.versionPopularity.length,a=x(e),o=t.add(pv.Panel),l=e.barHeight-3;o.width(e.width).height(e.barHeight).top(e.top).left(e.left),$.each(n.versionPopularity,(function(t,e){i=Math.max(i,e)})),i=1/i,$.each(n.majorRevIndices,(function(t,e){if(e>n.currentVersionIndex)return r=e,!1})),o.add(pv.Bar).data(n.versionPopularity).width(e.barWidth).left((function(){return a(this.index)})).height((function(t){return l*t*i+3})).bottom(0).fillStyle((function(){return this.index<n.currentVersionIndex?"#a8a9ad":this.index>=r?"#6d97d0":this.index===n.currentVersionIndex?"#58585a":"#8bc73e"})),o.add(pv.Rule).width(e.contentActualWidth+e.barGap).bottom(0).left(0).strokeStyle("#949599"),e.top+=e.barHeight+e.spacer}(P,b),b.top+=2*b.spacer+1,V&&(b.top-=b.spacer,L.add(pv.Label).left(5).top(b.top+1).textAlign("left").font("bold 10px arial").text("Breaking Changes"),function(t,e){t.add(pv.Panel).width(e.width).top(e.top-e.spacer).height(e.spacer).left(e.left).add(pv.Bar).top(e.barGap/2).data(e.data.breakingChangeCounts).width(e.barWidth).height(e.barWidth).left((function(){return x(e)(this.index)})).fillStyle(y).strokeStyle(y),e.top+=e.spacer}(P,b),b.top+=b.spacer),L.add(pv.Label).left(5).top(b.top+1).textAlign("left").font("bold 10px arial").text("Policy Threat"),C(P,b,"HIGHEST_THREAT"),L.add(pv.Label).left(15).top(b.top+1).textAlign("left").font("10px arial").text("Details").textDecoration("underline").textStyle(h).cursor("pointer").event("all").events("all").event("click",(function(){r=!r,W(b,L,P),this.text(r?"Hide Details":"Details").render()})),b.partialDisplay||(b.top+=b.spacer,S(L,P,b,"Security"),S(L,P,b,"License"),S(L,P,b,"Quality"),S(L,P,b,"Other")),0===b.versionCount)return function(t,e,n){var i=2*(n=$.extend({},g,n)).fontSize,r=e.length*n.fontSize*.6,a=n.height/2-i/2,o=n.leftPadding+(n.width-n.leftPadding-n.rightPadding-r)/2;t.add(pv.Bar).top(a).left(o).lineWidth(0).height(i).width(r).strokeStyle(u).fillStyle(u),t.add(pv.Dot).top(a+i/2).left(o).radius(i/2).lineWidth(0).strokeStyle(u).fillStyle(u),t.add(pv.Dot).top(a+i/2).left(o+r).radius(i/2).lineWidth(0).strokeStyle(u).fillStyle(u),t.add(pv.Label).top(a+i/2).left(o+r/2).width(r).font("normal "+(n.fontSize+1)+"px arial").textAlign("center").textBaseline("middle").text(e)}(P,"No Data",{width:b.contentWidth,height:b.actualHeight}),L.render(),void P.render();!function(e,i){function r(t){return i.showCurrentVersionLabel&&i.data.currentVersionIndex===t}var a=e.add(pv.Panel).def("i",-1),d=(o=a.add(pv.Bar)).anchor("bottom").add(pv.Label).visible((function(){return r(this.index)})).textAlign("center").textBaseline("top"),h=x(i);l=null,n=o,o.data(i.data.versions).width(i.spacer-1).left((function(){return i.left+h(this.index)-1})).top(i.topPadding).height(t.partialDisplay?i.height:i.height-20).lineWidth(0).strokeStyle(p).fillStyle("transparent").events("all").event("mouseover",(function(){a.i(this.index),this.render(),d.visible((function(){return a.i()===this.index})).render()})).event("mouseout",(function(){a.i(-1),this.render(),d.visible((function(){return r(this.index)})).render()})).fillStyle((function(){return a.i()===this.index?pv.color("rgba(153, 204, 255, 0.5)"):this.index===l?pv.color("rgba(10, 10, 10, 0.15)"):"transparent"})).strokeStyle((function(){return this.index===l?pv.color("rgba(10, 10, 10, 0.5)"):pv.color("rgba(255, 255, 255,0.1)")})).lineWidth(1),i.selectable&&(l=i.data.currentVersionIndex,o.event("click",(function(){i.versionClick(this.data()),l=this.index,this.render()})),o.event("dblclick",(function(){i.versionDblClick(this.data())})))}(P,b),b.panning&&(T=function(t,e,n,i){var r=!1,a=!1,o=function(t){var n=e.transform().translate(t,0),o=f+t,l=i.data.currentVersionIndex?i.data.currentVersionIndex:0,d=!1;v||(v=o,d=!0);var h=i.contentWidth/2,s=-1*h,p=4*i.itemWidth,u=-1*p,c=l*i.itemWidth,g=(i.data.versions.length-l)*i.itemWidth*-1;d||t>0&&o<c+v-h+p||t<0&&o>g+v-s+u?(f=o,e.transform(n).render()):(r=!1,a=!1)},l=function t(){r&&(o(10),setTimeout(t,100))},d=function t(){a&&(o(-10),setTimeout(t,100))};return n.add(pv.Dot).left(i.contentWidth-7).top(65).fillStyle(p).strokeStyle(s).angle(-Math.PI/2).shape("triangle").lineWidth(1).size(30).cursor("pointer").events("all").event("mouseover",(function(){this.fillStyle(s).render()})).event("mouseout",(function(){this.fillStyle(p).render(),a=!1})).event("mousedown",(function(){a=!0,setTimeout(d,0)})).event("mouseup",(function(){a=!1})),n.add(pv.Dot).left(7).top(65).fillStyle(p).strokeStyle(s).angle(Math.PI/2).shape("triangle").lineWidth(1).size(30).cursor("pointer").event("all").events("all").event("mouseover",(function(){this.fillStyle(s).render()})).event("mouseout",(function(){this.fillStyle(p).render(),r=!1})).event("mousedown",(function(){r=!0,setTimeout(l,0)})).event("mouseup",(function(){r=!1})),o}(0,P,m,b),b.contentWidth-=15),W(b,L,P),b.panning&&T(-(b.width/2-b.contentWidth+b.contentWidth/2)),a=P,d=b}}(m)}}();e.renderVersionGraph=b,e.selectVersion=function(t){var e,n,i;e=(t-d.data.currentVersionIndex)*d.itemWidth*-1-(f-v),n=a.transform().translate(e,0),i=f+e,Math.abs(i-f)>d.contentWidth/2-2*d.itemWidth&&(f=i,a.transform(n).render()),l=t,o.render()}}},e={};return function n(i){if(e[i])return e[i].exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}(579)}()}));