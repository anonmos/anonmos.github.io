(function(t){function e(e){for(var a,i,o=e[0],c=e[1],u=e[2],h=0,d=[];h<o.length;h++)i=o[h],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"2c6c":function(t,e,n){},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc10","./be.js":"1fc10","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=r,t.exports=s,s.id="4678"},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),s=n.n(a);s.a},"9c0c":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var a,s,r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("router-view")],1)},o=[],c=(n("5c0b"),n("2877")),u={},l=Object(c["a"])(u,i,o,!1,null,null,null),h=l.exports,d=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.loading?n("div",{staticClass:"loader"}):t._e(),n("div",{staticClass:"chart"},[t.loading?t._e():n("line-chart",{attrs:{"chart-data":t.lineChartData}})],1),t.loading?t._e():n("div",{staticClass:"controls"},[n("div",{staticClass:"stats"},[n("div",{staticClass:"stat"},[t._v(" Total "+t._s(t.mode)+": "+t._s(t.totalCount)+" ")])]),n("div",{staticClass:"selector-groups"},[n("div",{staticClass:"selector-group"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.country=e.target.multiple?n:n[0]}}},t._l(t.countryNames,(function(e,a){return n("option",{key:a,domProps:{value:e}},[t._v(t._s(e))])})),0),t.stateNames.length>0?n("select",{directives:[{name:"model",rawName:"v-model",value:t.stateProvince,expression:"stateProvince"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.stateProvince=e.target.multiple?n:n[0]}}},t._l(t.stateNames,(function(e,a){return n("option",{key:a,domProps:{value:e}},[t._v(t._s(e))])})),0):t._e(),t.countyNames.length>0?n("select",{directives:[{name:"model",rawName:"v-model",value:t.countyName,expression:"countyName"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.countyName=e.target.multiple?n:n[0]}}},t._l(t.countyNames,(function(e,a){return n("option",{key:a,domProps:{value:e}},[t._v(t._s(e))])})),0):t._e()]),n("div",{staticClass:"selector-group"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.mode,expression:"mode"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.mode=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"Current Cases"}},[t._v("Current Cases")]),n("option",{attrs:{value:"Deaths"}},[t._v("Deaths")])])])])])])},v=[],j=(n("4de4"),n("4160"),n("159b"),n("96cf"),n("1da1")),m=n("2909"),b=n("1fca"),p=b["b"].reactiveProp,C={name:"LineChart",extends:b["a"],mixins:[p],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},y=C,g=Object(c["a"])(y,a,s,!1,null,null,null),N=g.exports,_=(n("d3b7"),n("3ca3"),n("ddb0"),n("d4ec")),O=n("bee2"),w=(n("c975"),n("99de")),k=n("7e84"),S=n("262e");n("b64b"),n("ac1f"),n("1276"),n("498a"),n("fb6a");function D(t){var e=t;return'"'===e[0]&&(e=e.slice(1,e.length-1)),e}function E(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=[],r=-1,i=-1,o=",",c=0;c<t.length;++c)e&&'"'!==o&&"\n"===t[c]?(i="\r"===t[c-1]?c-1:c,s.push(t.slice(r+1,i)),r=c,i=-1):'"'===t[c]&&","===o?o='"':t[c]===o&&('"'===o?o=",":(i=c,s.push(t.slice(r+1,i)),r=i,i=-1));var u=t.slice(r+1,t.length);return n&&(u=D(u)),a&&(u=u.trim()),s.push(u),s}var T,A=function t(e,n,a,s,r){var i=this;Object(_["a"])(this,t),this.downloadUrl=e,this.countryColumnName=s,this.defaultCountryName=r,this.NON_DATE_COLUMN_INDEXES=[],this.columnsByName={},this.columns=[],this.rows=[],this.countries={},this.rawCSV="",this.init=Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.getTimeSeries();case 2:i.rawCSV=t.sent,i.parseRows(),i.parseColumnNames(),i.parseCountryData(),i.fixMisparsedData();case 7:case"end":return t.stop()}}),t)}))),this.getCountries=function(){return i.countries},this.getCountry=function(t){return i.countries[t]},this.getCountryNames=function(){return Object.keys(i.countries)},this.getTimeSeries=Object(j["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(i.downloadUrl,{method:"GET"});case 2:return e=t.sent,t.abrupt("return",e.text());case 4:case"end":return t.stop()}}),t)}))),this.parseRows=function(){i.rows=i.rawCSV.split("\n")},this.parseColumnNames=function(){var t=E(i.rows[0]);t.forEach((function(t,e){var n=D(t).trim();i.columnsByName[n]=e,i.columns.push(n),i.NON_DATE_COLUMNS.indexOf(n)>-1&&i.NON_DATE_COLUMN_INDEXES.push(e)}))},this.COUNTRY_COLUMN_NAME=s,this.DEFAULT_COUNTRY_NAME=r,this.SUB_REGION_COLUMN_NAME=n,this.NON_DATE_COLUMNS=a},M=(n("b0c0"),function(){function t(e){Object(_["a"])(this,t),this.name=e,this.dateTotals={}}return Object(O["a"])(t,[{key:"incrementDateTotal",value:function(t,e){void 0===this.dateTotals[t]&&(this.dateTotals[t]=0),this.dateTotals[t]+=e}},{key:"getDateTotal",value:function(t){return this.dateTotals[t]}},{key:"getSortedDateKeys",value:function(){var t=Object.keys(this.dateTotals);return t=t.sort((function(t,e){var n=new Date(t),a=new Date(e);return n>a?1:n===a?0:-1})),t}}]),t}()),P={AL:"Alabama",AK:"Alaska",AS:"American Samoa",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",DC:"District of Columbia",FM:"Federated States of Micronesia",FL:"Florida",GA:"Georgia",GU:"Guam",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MH:"Marshall Islands",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",MP:"Northern Mariana Islands",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PW:"Palau",PA:"Pennsylvania",PR:"Puerto Rico",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VI:"Virgin Islands",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"},U=function(t){function e(){return Object(_["a"])(this,e),Object(w["a"])(this,Object(k["a"])(e).apply(this,arguments))}return Object(S["a"])(e,t),e}(M),R=function(t){function e(){var t;return Object(_["a"])(this,e),t=Object(w["a"])(this,Object(k["a"])(e).apply(this,arguments)),t.counties={},t}return Object(S["a"])(e,t),Object(O["a"])(e,[{key:"getCounty",value:function(t){return this.counties[t]}},{key:"getCountyNames",value:function(){return Object.keys(this.counties).sort((function(t,e){return t>e?1:t===e?0:-1}))}},{key:"pushCountyData",value:function(t,e){var n=this;this.counties[t]||(this.counties[t]=new U(t));var a=Object.keys(e);a.forEach((function(a){n.incrementDateTotal(a,e[a]),n.counties[t].incrementDateTotal(a,e[a])}))}}]),e}(M),x=function(t){function e(t){var n;return Object(_["a"])(this,e),n=Object(w["a"])(this,Object(k["a"])(e).call(this,t)),n.stateProvinces={},n}return Object(S["a"])(e,t),Object(O["a"])(e,[{key:"getStateProvince",value:function(t){return this.stateProvinces[t]}},{key:"pushRow",value:function(t,e){"US"===this.name?this.pushUSRow(t,e):this.pushNonUSRow(t,e)}},{key:"pushUSRow",value:function(t,e){var n=this,a=D(t),s=a.split(","),r=1===s.length?s[0].trim():P[s[1].trim()],i=1===s.length?void 0:s[0].trim(),o=r&&(null===r||void 0===r?void 0:r.length)>0;if(this.stateProvinces[r]||(this.stateProvinces[r]=new R(r)),i&&o)this.stateProvinces[r].pushCountyData(i,e);else{var c=Object.keys(e);c.forEach((function(t){o&&n.stateProvinces[r].incrementDateTotal(t,e[t]),n.incrementDateTotal(t,e[t])}))}}},{key:"pushNonUSRow",value:function(t,e){var n=this;t&&t.length>0&&(this.stateProvinces[t]=new R(t));var a=Object.keys(e);a.forEach((function(a){t&&t.length>0&&n.stateProvinces[t].incrementDateTotal(a,e[a]),n.incrementDateTotal(a,e[a])}))}},{key:"getStateProvinces",value:function(){return this.stateProvinces}},{key:"getStateProvinceNames",value:function(){return Object.keys(this.stateProvinces).sort((function(t,e){return t>e?1:t===e?0:-1}))}}]),e}(M);(function(t){t["CURRENT_CASES"]="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",t["DEATHS"]="https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv"})(T||(T={}));var I,L=function(t){function e(t){return Object(_["a"])(this,e),Object(w["a"])(this,Object(k["a"])(e).call(this,t,"Province/State",["Province/State","Country/Region","Lat","Long"],"Country/Region"))}return Object(S["a"])(e,t),Object(O["a"])(e,[{key:"fixMisparsedData",value:function(){var t='"Korea, South"',e=this.countries[t];this.countries["South Korea"]=e,delete this.countries[t];var n='"Bahamas, The"',a=this.countries[n];this.countries.Bahamas=a,delete this.countries[n];var s='"Gambia, The"',r=this.countries[s];this.countries.Gambia=r,delete this.countries[s],delete this.countries.undefined}},{key:"parseCountryData",value:function(){var t=this,e=this.columnsByName[this.COUNTRY_COLUMN_NAME],n=this.columnsByName[this.SUB_REGION_COLUMN_NAME];this.rows.forEach((function(a,s){if(s>0){var r=E(a),i=r[e],o=r[n];void 0===t.countries[i]&&(t.countries[i]=new x(i));var c=t.countries[i],u={};r.forEach((function(e,n){if(-1===t.NON_DATE_COLUMN_INDEXES.indexOf(n)){var a=t.columns[n],s=parseInt(e);s&&!isNaN(s)&&(u[a]=parseInt(e))}})),c.pushRow(o,u)}}))}}]),e}(A);n("99af");(function(t){t["CURRENT_CASES"]="https://usafactsstatic.blob.core.windows.net/public/data/covid-19/covid_confirmed_usafacts.csv",t["DEATHS"]="https://usafactsstatic.blob.core.windows.net/public/data/covid-19/covid_deaths_usafacts.csv"})(I||(I={}));var z=function(t){function e(t){var n;return Object(_["a"])(this,e),n=Object(w["a"])(this,Object(k["a"])(e).call(this,t,"State",["countyFIPS","County Name","State","stateFIPS"],void 0,"US")),n.COUNTY_COLUMN_NAME="County Name",n}return Object(S["a"])(e,t),Object(O["a"])(e,[{key:"fixMisparsedData",value:function(){}},{key:"parseCountryData",value:function(){var t=this;this.rows.forEach((function(e,n){if(n>0){var a=E(e),s=t.DEFAULT_COUNTRY_NAME,r=a[t.columnsByName[t.SUB_REGION_COLUMN_NAME]],i=a[t.columnsByName[t.COUNTY_COLUMN_NAME]],o="".concat(i,", ").concat(r);void 0===t.countries[s]&&(t.countries[s]=new x(s));var c=t.countries[s];a.forEach((function(e,n){if(-1===t.NON_DATE_COLUMN_INDEXES.indexOf(n)){var a={},s=t.columns[n],r=parseInt(e);void 0===r||isNaN(r)||(a[s]=parseInt(e)),c.pushRow(o,a)}}))}}))}}]),e}(A),H=function(){function t(){Object(_["a"])(this,t),this.johnsHopkinsCurrentCases=new L(T.CURRENT_CASES),this.johnsHopkinsDeaths=new L(T.DEATHS),this.usaFactsCurrentCases=new z(I.CURRENT_CASES),this.usaFactsDeaths=new z(I.DEATHS)}return Object(O["a"])(t,[{key:"fetchAll",value:function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([this.johnsHopkinsCurrentCases.init(),this.johnsHopkinsDeaths.init(),this.usaFactsCurrentCases.init(),this.usaFactsDeaths.init()]);case 2:return this.johnsHopkinsCurrentCases.getCountry("US").stateProvinces=this.usaFactsCurrentCases.getCountry("US").stateProvinces,this.johnsHopkinsDeaths.getCountry("US").stateProvinces=this.usaFactsDeaths.getCountry("US").stateProvinces,t.abrupt("return",{currentCases:this.johnsHopkinsCurrentCases,deaths:this.johnsHopkinsDeaths});case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),F=r["a"].extend({name:"Home",components:{LineChart:N},data:function(){return{loading:!0,currentCases:void 0,deaths:void 0,country:"US",stateProvince:"All",countyName:"All",mode:"Current Cases",MODES:["Current Cases","Deaths"]}},computed:{lineChartData:function(){var t={labels:[],datasets:[{label:this.mode,data:[]}]},e=this.getLineChartDataContainer(),n=e.getSortedDateKeys().filter((function(t){return e.dateTotals[t]>0}));return t.labels=n,n.forEach((function(n){e.dateTotals[n]>0&&t.datasets[0].data.push(e.dateTotals[n])})),t},countryNames:function(){var t=this.getCovidContainer().getCountryNames();return t=t.sort((function(t,e){return t>e?1:t===e?0:-1})),t},stateNames:function(){var t=this.getCovidContainer().getCountry(this.country),e=t.getStateProvinceNames(),n=["All"];return n.push.apply(n,Object(m["a"])(e)),n.length>1?n:[]},countyNames:function(){var t=[];if("All"!==this.stateProvince){var e=this.getCovidContainer().getCountry(this.country),n=e.getStateProvince(this.stateProvince);if(n){var a=n.getCountyNames();a.length>0&&(t.push("All"),t.push.apply(t,Object(m["a"])(a)))}}return t},totalCount:function(){var t=this.getLineChartDataContainer(),e=t.getSortedDateKeys();return t.getDateTotal(e[e.length-1])}},methods:{lineChartOptions:function(){return{xAxisID:"Date",yAxisID:"Confirmed Cases"}},getLineChartDataContainer:function(){var t,e=this.getCovidContainer().getCountry(this.country),n=null===(t=e.stateProvinces)||void 0===t?void 0:t[this.stateProvince],a=null===n||void 0===n?void 0:n.getCounty(this.countyName);return a||(n||e)},getCovidContainer:function(){return this.mode===this.MODES[0]?this.currentCases:this.deaths}},mounted:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(new H).fetchAll();case 2:n=e.sent,t.currentCases=n.currentCases,t.deaths=n.deaths,t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()}}),G=F,V=(n("f5a7"),Object(c["a"])(G,f,v,!1,null,"dd7e395a",null)),B=V.exports;r["a"].use(d["a"]);var K=[{path:"/",name:"Home",component:B}],Y=new d["a"]({mode:"history",base:"/",routes:K}),W=Y,X=n("2f62");r["a"].use(X["a"]);var J=new X["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:W,store:J,render:function(t){return t(h)}}).$mount("#app")},f5a7:function(t,e,n){"use strict";var a=n("2c6c"),s=n.n(a);s.a}});
//# sourceMappingURL=app.f6f9ef0c.js.map