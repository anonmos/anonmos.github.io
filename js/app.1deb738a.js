(function(e){function t(t){for(var n,c,o=t[0],i=t[1],u=t[2],l=0,d=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,o=1;o<s.length;o++){var i=s[o];0!==a[i]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=s[0]))}return e}var n={},a={app:0},r=[];function c(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=n,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(s,n,function(t){return e[t]}.bind(null,n));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var f=i;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("cd49")},"3a55":function(e,t,s){"use strict";var n=s("92f9"),a=s.n(n);a.a},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc10","./be.js":"1fc10","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"5c0b":function(e,t,s){"use strict";var n=s("9c0c"),a=s.n(n);a.a},"92f9":function(e,t,s){},"9c0c":function(e,t,s){},cd49:function(e,t,s){"use strict";s.r(t);s("e623"),s("e379"),s("5dc8"),s("37e1");var n,a,r=s("2b0e"),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app"},[s("router-view")],1)},o=[],i=(s("5c0b"),s("2877")),u={},f=Object(i["a"])(u,c,o,!1,null,null,null),l=f.exports,d=s("8c4f"),j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[e.loading?s("div",{staticClass:"loader"}):e._e(),s("div",{staticClass:"chart"},[e.loading?e._e():s("line-chart",{attrs:{"chart-data":e.lineChartData}})],1),e.loading?e._e():s("div",{staticClass:"controls"},[s("div",{staticClass:"stats"},[s("div",{staticClass:"stat"},[e._v(" Current Total Cases: "+e._s(e.totalCases)+" ")])]),s("div",{staticClass:"selector"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.country,expression:"country"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.country=t.target.multiple?s:s[0]}}},e._l(e.countryNames,(function(t,n){return s("option",{key:n,domProps:{value:t}},[e._v(e._s(t))])})),0)])])])},b=[],h=(s("4160"),s("159b"),s("96cf"),s("1da1")),m=(s("c975"),s("fb6a"),s("b64b"),s("d3b7"),s("ac1f"),s("1276"),s("498a"),s("d4ec")),p=s("bee2"),v=(s("b0c0"),function(){function e(t){Object(m["a"])(this,e),this.name=t,this.dateTotals={},this.rawDateRows=[]}return Object(p["a"])(e,[{key:"incrementDateTotal",value:function(e,t){void 0===this.dateTotals[e]&&(this.dateTotals[e]=0),this.dateTotals[e]+=t}},{key:"getDateTotal",value:function(e){return this.dateTotals[e]}},{key:"pushRawDateRow",value:function(e){this.rawDateRows.push(e)}},{key:"getRawDateRows",value:function(){return this.rawDateRows}},{key:"getSortedDateKeys",value:function(){var e=Object.keys(this.dateTotals);return e=e.sort((function(e,t){var s=new Date(e),n=new Date(t);return s>n?1:s===n?0:-1})),e}}]),e}()),y=function(){function e(){var t=this;Object(m["a"])(this,e),this.CSV_URL="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv",this.COUNTRY_COLUMN_NAME="Country/Region",this.NON_DATE_COLUMNS=["Province/State","Country/Region","Lat","Long"],this.NON_DATE_COLUMN_INDEXES=[],this.AVAILABLE_DATES=[],this.columnsByName={},this.columns=[],this.rows=[],this.countries={},this.rawCSV="",this.init=Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getTimeSeries();case 2:t.rawCSV=e.sent,t.parseRows(),t.parseColumnNames(),t.parseCountries(),t.fixMisparsedCountryNames();case 7:case"end":return e.stop()}}),e)}))),this.getCountries=function(){return t.countries},this.getCountry=function(e){return t.countries[e]},this.getCountryNames=function(){return Object.keys(t.countries)},this.fixMisparsedCountryNames=function(){var e='"Korea, South"',s=t.countries[e];t.countries["South Korea"]=s,delete t.countries[e];var n='"Bahamas, The"',a=t.countries[n];t.countries.Bahamas=a,delete t.countries[n];var r='"Gambia, The"',c=t.countries[r];t.countries.Gambia=c,delete t.countries[r]},this.getTimeSeries=Object(h["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.CSV_URL,{method:"GET"});case 2:return s=e.sent,e.abrupt("return",s.text());case 4:case"end":return e.stop()}}),e)}))),this.parseRows=function(){t.rows=t.rawCSV.split("\n")},this.parseColumnNames=function(){var e=t.extractTuples(t.rows[0]);e.forEach((function(e,s){var n=t.stripQuotes(e).trim();t.columnsByName[n]=s,t.columns.push(n),t.NON_DATE_COLUMNS.indexOf(n)>-1&&t.NON_DATE_COLUMN_INDEXES.push(s)}))},this.parseCountries=function(){var e=t.columnsByName[t.COUNTRY_COLUMN_NAME];t.rows.forEach((function(s){var n=t.extractTuples(s),a=n[e];void 0===t.countries[a]&&(t.countries[a]=new v(a));var r=t.countries[a];n.forEach((function(e,s){if(-1===t.NON_DATE_COLUMN_INDEXES.indexOf(s)){var n={},a=t.columns[s];-1===t.AVAILABLE_DATES.indexOf(a)&&t.AVAILABLE_DATES.push(a),r.incrementDateTotal(a,parseInt(e)),n[a]=parseInt(e),r.pushRawDateRow(n)}}))}))}}return Object(p["a"])(e,[{key:"stripQuotes",value:function(e){var t=e;return'"'===t[0]&&(t=t.slice(1,t.length-1)),t}},{key:"extractTuples",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=[],r=-1,c=-1,o=",",i=0;i<e.length;++i)t&&'"'!==o&&"\n"===e[i]?(c="\r"===e[i-1]?i-1:i,a.push(e.slice(r+1,c)),r=i,c=-1):'"'===e[i]&&","===o?o='"':e[i]===o&&('"'===o?o=",":(c=i,a.push(e.slice(r+1,c)),r=c,c=-1));var u=e.slice(r+1,e.length);return s&&(u=this.stripQuotes(u)),n&&(u=u.trim()),a.push(u),a}}]),e}(),g=s("1fca"),w=g["b"].reactiveProp,C={name:"LineChart",extends:g["a"],mixins:[w],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},_=C,O=Object(i["a"])(_,n,a,!1,null,null,null),k=O.exports,N=r["a"].extend({name:"Home",components:{LineChart:k},data:function(){return{loading:!0,currentCases:new y,country:"US"}},computed:{lineChartData:function(){var e={labels:[],datasets:[{label:"Cases",data:[]}]},t=this.currentCases.getCountry(this.country),s=t.getSortedDateKeys();return e.labels=s,s.forEach((function(s){e.datasets[0].data.push(t.dateTotals[s])})),e},countryNames:function(){var e=this.currentCases.getCountryNames();return e=e.sort((function(e,t){return e>t?1:e===t?0:-1})),e},totalCases:function(){var e=this.currentCases.getCountry(this.country),t=e.getSortedDateKeys();return e.getDateTotal(t[t.length-1])}},methods:{lineChartOptions:function(){return{xAxisID:"Date",yAxisID:"Confirmed Cases"}}},mounted:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.currentCases.init();case 2:e.loading=!1;case 3:case"end":return t.stop()}}),t)})))()}}),D=N,x=(s("3a55"),Object(i["a"])(D,j,b,!1,null,"ddff729e",null)),T=x.exports;r["a"].use(d["a"]);var S=[{path:"/",name:"Home",component:T}],E=new d["a"]({mode:"history",base:"/",routes:S}),R=E,z=s("2f62");r["a"].use(z["a"]);var A=new z["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:R,store:A,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.1deb738a.js.map