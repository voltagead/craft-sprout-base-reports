!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){n(1),n(2),n(3),n(4),t.exports=n(9)},function(t,e){function n(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,s=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){s=!0,a=t},f:function(){try{i||null==o.return||o.return()}finally{if(s)throw a}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}var s=function(){function t(e){var n,r,a,i;o(this,t),this.allowHtml=null!==(n=e.allowHtml)&&void 0!==n&&n,this.defaultPageLength=null!==(r=e.defaultPageLength)&&void 0!==r?r:10,this.sortOrder=null!==(a=e.sortOrder)&&void 0!==a?a:null,this.sortColumnPosition=null!==(i=e.sortColumnPosition)&&void 0!==i?i:null,this.orderSetting=[],this.sproutResultsTable=$("#sprout-results"),this.initializeDataTable()}return i(t,[{key:"initializeDataTable",value:function(){var t=this,e=t.sortOrder,n=t.sortColumnPosition;e&&n&&(t.orderSetting=[[n,e]]),this.sproutResultsTable.DataTable({dom:'<"sprout-results-header"pilf>t',responsive:!0,scrollX:"100vw",order:t.orderSetting,pageLength:t.defaultPageLength,lengthMenu:[[10,25,50,100,250,-1],[10,25,50,100,250,"All"]],pagingType:"simple",language:{emptyTable:Craft.t("sprout-base-reports","No results found."),info:Craft.t("sprout-base-reports","_START_-_END_ of _MAX_ results"),infoEmpty:Craft.t("sprout-base-reports","No results found."),infoFiltered:"",lengthMenu:Craft.t("sprout-base-reports","Show rows _MENU_"),loadingRecords:Craft.t("sprout-base-reports","Loading..."),processing:Craft.t("sprout-base-reports","Processing..."),search:"",zeroRecords:Craft.t("sprout-base-reports","No results found")},columnDefs:[{targets:"_all",render:function(e,n){return"display"===n&&e.length>65&&!1===t.allowHtml?e.substr(0,65)+'… <span class="info" style="margin-right:10px;">'+e+"</span>":e}}],initComplete:function(){var e=document.querySelector("#sprout-results_filter input"),n=document.getElementById("sprout-results_filter");e.setAttribute("placeholder",Craft.t("sprout-base-reports","Search")),e.classList.add("text","fullwidth"),e.focus(),n.classList.add("texticon","search","icon","clearable");var r=document.querySelector("#sprout-results_length select"),o=document.createElement("dig");o.classList.add("select"),r.parentNode.insertBefore(o,r),o.appendChild(r),t.sproutResultsTable.on("draw.dt",(function(){t.stylePagination(),Craft.initUiElements(t.sproutResultsTable)})),t.stylePagination(),Craft.initUiElements(t.sproutResultsTable),document.querySelector(".dataTables_scroll table").style.opacity="1",document.getElementById("sprout-results").style.opacity="1",window.addEventListener("resize",(function(){t.resizeTable()})),t.resizeTable()}})}},{key:"resizeTable",value:function(){$(".dataTables_scroll").width($("#header").width()-48)}},{key:"stylePagination",value:function(){document.querySelector("#sprout-results_paginate").classList.add("pagination");var t=document.querySelectorAll(".paginate_button");document.querySelector(".paginate_button.previous").innerHTML="",document.querySelector(".paginate_button.next").innerHTML="",document.querySelector(".paginate_button.previous").setAttribute("data-icon","leftangle"),document.querySelector(".paginate_button.next").setAttribute("data-icon","rightangle");var e,r=n(t);try{for(r.s();!(e=r.n()).done;){e.value.classList.add("page-link")}}catch(t){r.e(t)}finally{r.f()}var o=$("#action-button");o.prepend($("#sprout-results_paginate")),o.prepend($("#sprout-results_info"))}}]),t}(),l=function(){function t(){o(this,t),this.$modifySettingsPanel=$("#modify-settings-panel"),this.initSettingsToggle()}return i(t,[{key:"initSettingsToggle",value:function(){var t=this;$("#modify-settings-icon").on("click",(function(){var e="block"===t.$modifySettingsPanel.css("display");t.isInViewport(t.$modifySettingsPanel)?t.$modifySettingsPanel.slideToggle("fast"):($("html, body").animate({scrollTop:0},"fast"),e||t.$modifySettingsPanel.slideToggle("fast"))}))}},{key:"isInViewport",value:function(t){var e=t.offset().top,n=t.offset().top+t.outerHeight(),r=$(window).scrollTop()+$(window).innerHeight(),o=$(window).scrollTop();return r>e&&o<n}}]),t}();window.SproutReportsDataTables=s,window.ReportSettingsToggleButton=l},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}function i(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}!function(t){var e=function(){function e(n){var r,o,a,i,s,l;c(this,e),this.chartSelector=null!==(r=n.chartSelector)&&void 0!==r?r:"#chart",this.labels=null!==(o=n.labels)&&void 0!==o?o:[],this.dataSeries=null!==(a=n.dataSeries)&&void 0!==a?a:[],this.options=null!==(i=n.options)&&void 0!==i?i:[],this.chart=null,this.defaultStartDate=null!==(s=n.startDate)&&void 0!==s?s:0,this.defaultEndDate=null!==(l=n.endDate)&&void 0!==l?l:0,this.startDate=t('input[name="reportDateFrom[date]"]'),this.endDate=t('input[name="reportDateTo[date]"]'),this.startDate.on("change",this.updateVisualizationDate.bind(this)),this.endDate.on("change",this.updateVisualizationDate.bind(this))}return u(e,[{key:"updateVisualizationDate",value:function(e){e.preventDefault();var n=t('input[name="reportDateFrom[date]"]').val(),r=t('input[name="reportDateTo[date]"]').val();return n=""!==n?n:this.defaultStartDate,r=""!==r?r:this.defaultEndDate,this.chart.zoomX(new Date(n).getTime(),new Date(r).getTime()),!1}},{key:"create",value:function(){return null}},{key:"draw",value:function(t){this.chart=new ApexCharts(document.querySelector(this.chartSelector),t),this.chart.render()}}]),e}(),n=function(t){r(n,t);var e=a(n);function n(){return c(this,n),e.apply(this,arguments)}return u(n,[{key:"create",value:function(){var t={series:this.dataSeries,chart:{height:380,type:"bar",zoom:{enabled:!1}},plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!1},stroke:{curve:"straight"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:this.labels}};console.log("CREATE"),console.log(this.dataSeries),this.draw(t)}}]),n}(e),o=function(t){r(n,t);var e=a(n);function n(){return c(this,n),e.apply(this,arguments)}return u(n,[{key:"create",value:function(){var t={series:this.dataSeries,chart:{height:380,type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:this.labels}};this.draw(t)}}]),n}(e),i=function(t){r(n,t);var e=a(n);function n(){return c(this,n),e.apply(this,arguments)}return u(n,[{key:"create",value:function(){var t={series:this.dataSeries[0].data,chart:{width:380,type:"pie"},labels:this.labels,responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]};this.draw(t)}}]),n}(e),s=function(t){r(n,t);var e=a(n);function n(){return c(this,n),e.apply(this,arguments)}return u(n,[{key:"create",value:function(){var t={series:this.dataSeries,chart:{height:380,type:"line",zoom:{enabled:!0},toolbar:{show:!0,offsetX:0,offsetY:0,tools:{download:!1,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0,customIcons:[]},autoSelected:"zoom"}},dataLabels:{enabled:!1},stroke:{curve:"straight"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{type:"datetime",min:this.defaultStartDate,max:this.defaultEndDate}};this.draw(t)}}]),n}(e);window.SproutReportsViz=function t(e,r){switch(c(this,t),e){case"barChart":return new n(r);case"lineChart":return new o(r);case"pieChart":return new i(r);case"timeSeriesChart":return new s(r)}}}(jQuery)},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}!function(t){var e=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.$toggle=t('select[name="visualizationType"]'),this.$toggle.on("change",this.onVisualizationChange.bind(this)),t(".js-add-data-series").on("click",this.addDataSeries.bind(this)),t("table").on("click",".js-remove-data-series",this.removeDataSeries.bind(this)),this.findTarget()}var r,o,a;return r=e,(o=[{key:"addDataSeries",value:function(e){e.preventDefault();var n=t(e.currentTarget).parent().find('[name*="dataColumn"]').last().closest("tr");this.$target.find('[id$="visualizationDataColumn-field"]').first();var r=n.clone();return r.find("textarea").val(""),n.after(r),!1}},{key:"removeDataSeries",value:function(e){e.preventDefault();var n=t(e.currentTarget).closest("tr");return 0===n.siblings().length?alert("You must defined at least one data column"):n.remove(),!1}},{key:"onVisualizationChange",value:function(){this.hideTarget(this.$target),this.findTarget(),this.showTarget(this.$target)}},{key:"findTarget",value:function(){var e=this.$toggle.val();e.length?(e="#"+this.getToggleVal(),this.$target=t(e)):this.$target=!1}},{key:"hideTarget",value:function(t){t&&t.length&&t.addClass("hidden")}},{key:"showTarget",value:function(t){t&&t.length&&t.removeClass("hidden")}},{key:"getToggleVal",value:function(){if("lightswitch"===this.type)return this.$toggle.children("input").val();var t=this.$toggle.find(":selected").val();return null===t?null:t.replace(/[\[\]\\\/]+/g,"-")}}])&&n(r.prototype,o),a&&n(r,a),e}();window.SproutReportsVisualizationSettings=e}(jQuery)},function(t,e){},,,,,function(t,e){}]);