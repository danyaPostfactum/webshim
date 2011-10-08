jQuery.webshims.gcEval=function(b,f){with(f&&f.form||window)with(f||window)return function(b){eval(b)}.call(f||window,b)};
jQuery.webshims.register("form-core",function(b,f,o,i,u,k){var h=o.Modernizr;(function(){if(h.formvalidation){var a=h.input||{},c=b('<form action="#"><select /><input type="date" required name="a" /></form>'),e=b("input",c),g=[];c.appendTo("head");h.validationmessage=!!e.prop("validationMessage");h.requiredSelect=!!("required"in b("select",c)[0]);h.bugfreeformvalidation=h.formvalidation&&h.requiredSelect&&h.validationmessage&&(!b.browser.webkit||navigator.userAgent.indexOf("hrome")!=-1&&f.browserVersion>
534.19)&&!o.testGoodWithFix;a.valueAsNumber=!1;a.valueAsNumberSet=!1;a.valueAsDate=!1;a.valueAsNumber="valueAsNumber"in e[0];if(a.valueAsNumber)e[0].valueAsNumber=0,a.valueAsNumberSet=e[0].value=="1970-01-01";a.valueAsDate="valueAsDate"in e[0];if(a.valueAsNumber&&!a.valueAsNumberSet)h.bugfreeformvalidation=!1;c.remove();c=e=null;"value"in i.createElement("output")||(addPolyfill("form-output",{feature:"forms",test:h.output,dependencies:["dom-support"]}),g.push("form-output"));if(!h.bugfreeformvalidation)g.push("form-native-fix"),
f.addPolyfill("form-native-fix",{feature:"forms",test:h.bugfreeformvalidation,dependencies:["form-extend"]}),f.modules["form-extend"].test=!1,b.event.special["form-extendReady"]&&delete b.event.special["form-extendReady"],f.modules["forms-ext"].test=!1,b.event.special["forms-extReady"]&&(delete b.event.special["forms-extReady"],g.push("forms-ext"));g.length&&(f.loader.loadList(g),f.cfg.waitReady&&(b.readyWait++,f.ready(g,function(){b.ready(!0)})))}})();var v={radio:1},p={checkbox:1,radio:1},w=b([]),
l=function(a){var a=b(a),c=a[0].name;return v[a[0].type]&&c?b(a[0].form&&a[0].form[c]||i.getElementsByName(c)).not(a[0]):w},m,q={number:1,range:1,date:1,time:1,"datetime-local":1,datetime:1,month:1,week:1};b.extend(b.expr.filters,{"valid-element":function(a){return!(!b.prop(a,"willValidate")||!(b.prop(a,"validity")||{valid:1}).valid)},"invalid-element":function(a){return!(!b.prop(a,"willValidate")||n(a))},"required-element":function(a){return!(!b.prop(a,"willValidate")||!b.prop(a,"required"))},"optional-element":function(a){return!!(b.prop(a,
"willValidate")&&b.prop(a,"required")===!1)},"in-range":function(a){if(!q[b.prop(a,"type")]||!b.prop(a,"willValidate"))return!1;a=b.prop(a,"validity");return!(!a||a.rangeOverflow||a.rangeUnderflow)},"out-of-range":function(a){if(!q[b.prop(a,"type")]||!b.prop(a,"willValidate"))return!1;a=b.prop(a,"validity");return!(!a||!a.rangeOverflow&&!a.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(a){b.expr.filters[a]=b.expr.filters[a+"-element"]});var n=function(a){return(b.prop(a,
"validity")||{valid:1}).valid},x=b.prop,y={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};b.prop=function(a,c,e){var g=x.apply(this,arguments);a&&"form"in a&&y[c]&&e!==u&&b(a).hasClass("form-ui-invalid")&&n(a)&&(b(a).getShadowElement().removeClass("form-ui-invalid"),c=="checked"&&e&&l(a).removeClass("form-ui-invalid").removeAttr("aria-invalid"));return g};b(i).bind("focusout change refreshvalidityui",function(a){if(a.target&&a.target.type!="submit"&&b.prop(a.target,"willValidate")){var c=
b.data(a.target,"webshimsswitchvalidityclass");c&&clearTimeout(c);b.data(a.target,"webshimsswitchvalidityclass",setTimeout(function(){var e=b(a.target).getNativeElement()[0],g=b(e).getShadowElement(),c,d,f;n(e)?g.hasClass("form-ui-valid")||(c="form-ui-valid",d="form-ui-invalid",f="changedvalid",p[e.type]&&e.checked&&l(e).removeClass(d).addClass(c).removeAttr("aria-invalid")):g.hasClass("form-ui-invalid")||(c="form-ui-invalid",d="form-ui-valid",p[e.type]&&!e.checked&&l(e).removeClass(d).addClass(c),
f="changedinvalid");c&&(g.addClass(c).removeClass(d),setTimeout(function(){b(e).trigger(f)},0));b.removeData(a.target,"webshimsswitchvalidityclass")},9))}});f.triggerInlineForm=function(a,c){a.jquery&&(a=a[0]);var e="on"+c,g=a[e]||a.getAttribute(e)||"",j,d,c=b.Event({type:c,target:a,currentTarget:a});g&&typeof g=="string"&&(d=f.gcEval(g,a),a[e]&&(j=!0,a[e]=!1));d===!1&&(c.stopPropagation(),c.preventDefault());b(a).trigger(c);j&&(a[e]=g);return d};var s=function(){f.scrollRoot=b.browser.webkit||i.compatMode==
"BackCompat"?b(i.body):b(i.documentElement)};s();f.ready("DOM",s);f.validityAlert=function(){var a=!b.browser.msie||parseInt(b.browser.version,10)>7?"span":"label",c={top:0,left:0},e={hideDelay:5E3,getBodyOffset:function(){c=g.offset()},showFor:function(a,d,c,f){e._create();var a=b(a),h=b(a).getShadowElement(),i=e.getOffsetFromBody(h);e.clear();f?this.hide():(this.getMessage(a,d),this.position(h,i),g.css({fontSize:a.css("fontSize"),fontFamily:a.css("fontFamily")}),this.show(),this.hideDelay&&(j=setTimeout(r,
this.hideDelay)));c||this.setFocus(h,i)},getOffsetFromBody:function(a){a=b(a).offset();b.swap(g[0],{visibility:"hidden",display:"inline-block",left:0,top:0},e.getBodyOffset);a.top-=c.top;a.left-=c.left;return a},setFocus:function(d,c){var e=b(d).getShadowFocusElement(),j=f.scrollRoot.scrollTop(),h=(c||e.offset()).top-30,t;f.getID&&a=="label"&&g.attr("for",f.getID(e));j>h&&(f.scrollRoot.animate({scrollTop:h-5},{queue:!1,duration:Math.max(Math.min(600,(j-h)*1.5),80)}),t=!0);try{e[0].focus()}catch(k){}t&&
(f.scrollRoot.scrollTop(j),setTimeout(function(){f.scrollRoot.scrollTop(j)},0));setTimeout(function(){b(i).bind("focusout.validityalert",r)},10)},getMessage:function(a,d){b("span.va-box",g).text(d||m(a[0])||a.prop("validationMessage"))},position:function(a,d){d=d?b.extend({},d):e.getOffsetFromBody(a);d.top+=a.outerHeight();g.css(d)},show:function(){g.css("display")==="none"&&g.css({opacity:0}).show();g.addClass("va-visible").fadeTo(400,1)},hide:function(){g.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(d);
clearTimeout(j);b(i).unbind("focusout.validityalert");g.stop().removeAttr("for")},_create:function(){if(!g)g=e.errorBubble=b("<"+a+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+a+">").css({position:"absolute",display:"none"}),f.ready("DOM",function(){g.appendTo("body");b.fn.bgIframe&&b.browser.msie&&parseInt(b.browser.version,10)<7&&g.bgIframe()})}},g,j=!1,d=!1,r=b.proxy(e,
"hide");return e}();(function(){var a,c=[],e;b(i).bind("invalid",function(g){if(!g.wrongWebkitInvalid){var f=b(g.target),d=f.getShadowElement();d.hasClass("form-ui-invalid")||(d.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){b(g.target).trigger("changedinvalid")},0));if(!a)a=b.Event("firstinvalid"),a.isInvalidUIPrevented=g.isDefaultPrevented,d=b.Event("firstinvalidsystem"),b(i).triggerHandler(d,{element:g.target,form:g.target.form,isInvalidUIPrevented:g.isDefaultPrevented}),
f.trigger(a);a&&a.isDefaultPrevented()&&g.preventDefault();c.push(g.target);g.extraData="fix";clearTimeout(e);e=setTimeout(function(){var d={type:"lastinvalid",cancelable:!1,invalidlist:b(c)};a=!1;c=[];b(g.target).trigger(d,d)},9);d=f=null}})})();k.replaceValidationUI&&f.ready("DOM",function(){b(i).bind("firstinvalid",function(a){a.isInvalidUIPrevented()||(a.preventDefault(),b.webshims.validityAlert.showFor(a.target,b(a.target).prop("customValidationMessage")))})});(function(){var a=f.validityMessages,
c=k.overrideMessages||k.customMessages?["customValidationMessage"]:[];a.en=a.en||a["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL."},tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(b){a.en.valueMissing[b]="Please select an option."});
a["en-US"]=a["en-US"]||a.en;a[""]=a[""]||a["en-US"];a.de=a.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse"},tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};
["select","radio"].forEach(function(b){a.de.valueMissing[b]="Bitte w\u00e4hlen Sie eine Option aus"});var e=a[""];f.activeLang({langObj:a,module:"form-core",callback:function(a){e=a}});f.createValidationMessage=function(a,c){var d=e[c];d&&typeof d!=="string"&&(d=d[b.prop(a,"type")]||d[(a.nodeName||"").toLowerCase()]||d.defaultMessage);d&&"value,min,max,title,maxlength,label".split(",").forEach(function(c){if(d.indexOf("{%"+c)!==-1){var e=(c=="label"?b.trim(b('label[for="'+a.id+'"]',a.form).text()).replace(/\*$|:$/,
""):b.attr(a,c))||"";d=d.replace("{%"+c+"}",e);"value"==c&&(d=d.replace("{%valueLen}",e.length))}});return d||""};(!h.validationmessage||!h.formvalidation)&&c.push("validationMessage");f.getContentValidationMessage=function(a,c){var d=a.getAttribute("x-moz-errormessage")||a.getAttribute("data-errormessage")||"";if(d&&d.indexOf("{")!=-1){try{d=jQuery.parseJSON(d)}catch(e){return d}typeof d=="object"&&(c=c||b.prop(a,"validity")||{valid:1},c.valid||b.each(c,function(a,b){if(b&&a!="valid"&&d[a])return d=
d[a],!1}));f.data(a,"contentErrorMessage",d);if(typeof d=="object")d=d.defaultMessage}return d||""};m=f.getContentValidationMessage;f.ready("dom-support",function(a,b){h.datalist&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var c=a("select",this);if(c[0]&&c[0].options&&c[0].options.length)b=c[0].options}return b}}});c.forEach(function(d){b.defineNodeNamesProperty(["fieldset",
"output","button"],d,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(c){var e=b.defineNodeNameProperty(c,d,{prop:{get:function(){var d=this,c="";if(!a.prop(d,"willValidate"))return c;var f=a.prop(d,"validity")||{valid:1};if(f.valid)return c;if(c=m(d,f))return c;if(f.customError&&d.nodeName&&(c=h.validationmessage&&e.prop._supget?e.prop._supget.call(d):b.data(d,"customvalidationMessage")))return c;a.each(f,function(a,e){if(a!="valid"&&e&&(c=b.createValidationMessage(d,
a)))return!1});return c||""},writeable:!1}})})});b.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return b.inputTypes[a]?a:this.type}}})})})()});
