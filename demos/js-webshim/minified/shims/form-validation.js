webshims.register("form-validation",function(a,b,c,d,e,f){"use strict";var g="webkitURL"in c,h=g&&Modernizr.formvalidation&&!b.bugs.bustedValidity,i=h&&parseFloat((navigator.userAgent.match(/Safari\/([\d\.]+)/)||["","999999"])[1],10),j=f.iVal,k=j.errorClass||"user-error",l=j.successClass||"user-success",m=j.errorWrapperClass||"ws-invalid",n=j.successWrapperClass||"ws-success",o=j.errorBoxClass||"ws-errorbox",p=j.errorMessageClass||"ws-errormessage",q={checkbox:1,radio:1},r=b.loader,s=r.addModule,t=a([]),u=function(){return!a.prop(this,"form")},v=function(b){b=a(b);var c,e,f=t;return"radio"==b[0].type&&(e=b.prop("form"),c=b[0].name,f=c?e?a(e).jProp(c):a(d.getElementsByName(c)).filter(u):b,f=f.filter('[type="radio"]')),f},w=function(b,c){var d;return a.each(b,function(b,e){return e?(d=b+a.prop(c,"validationMessage"),!1):void 0}),d},x=function(a){var b;try{b=d.activeElement.name===a}catch(c){}return b},y={radio:1,checkbox:1,"select-one":1,"select-multiple":1,file:1,date:1,month:1,week:1,text:1},z={time:1,date:1,month:1,datetime:1,week:1,"datetime-local":1},A=function(c){if(j.sel){var d,e,f,g;if(c.target&&(d=a(c.target).getNativeElement()[0],f=a(d).getShadowElement(),"submit"!=d.type&&a.prop(d,"willValidate")&&("change"!=c.type||!(g=f.prop("type"))||y[g]))){e=a.data(d,"webshimsswitchvalidityclass");var m=function(){if(g||(g=f.prop("type")),!(h&&("change"==c.type||537.36>i)&&z[g]&&a(c.target).is(":focus")||"focusout"==c.type&&"radio"==d.type&&x(d.name))){if(b.refreshCustomValidityRules&&"async"==b.refreshCustomValidityRules(d))return a(d).one("refreshvalidityui",A),void 0;var e,j,m,n,o,p=a.prop(d,"validity");p.valid?f.hasClass(l)||(e=l,j=k,n="changedvaliditystate",m="changedvalid",q[d.type]&&d.checked&&v(d).not(d).removeClass(j).addClass(e).removeAttr("aria-invalid"),f.removeAttr("aria-invalid"),a.removeData(d,"webshimsinvalidcause")):(o=w(p,d),a.data(d,"webshimsinvalidcause")!=o&&(a.data(d,"webshimsinvalidcause",o),n="changedvaliditystate"),f.hasClass(k)||(e=k,j=l,q[d.type]&&!d.checked&&v(d).not(d).removeClass(j).addClass(e).attr("aria-invalid","true"),f.attr("aria-invalid","true"),m="changedinvalid")),e&&(f.addClass(e).removeClass(j),setTimeout(function(){a(d).trigger(m)},0)),n&&setTimeout(function(){a(d).trigger(n)},0),a.removeData(d,"webshimsswitchvalidityclass")}};e&&clearTimeout(e),"refreshvalidityui"==c.type?m():a.data(d,"webshimsswitchvalidityclass",setTimeout(m,9))}}};a(d.body||"html").on(f.validityUIEvents||"focusout change refreshvalidityui invalid",A).on("reset resetvalui",function(b){var c=a(b.target);c.is("form, fieldset")&&(c=c.jProp("elements")),c.filter(".user-error, .user-success").removeAttr("aria-invalid").removeClass("user-error").removeClass("user-success").getNativeElement().each(function(){a.removeData(this,"webshimsinvalidcause")}).trigger("resetvalidityui")});var B=function(){b.scrollRoot=g||"BackCompat"==d.compatMode?a(d.body):a(d.documentElement)},C=Modernizr.boxSizing||Modernizr["display-table"]||a.support.getSetAttribute||a.support.boxSizing?"minWidth":"width",D="transitionDelay"in d.documentElement.style,E={display:"inline-block",left:0,top:0,marginTop:0,marginLeft:0,marginRight:0,marginBottom:0};B(),b.ready("DOM",B),b.getRelOffset=function(b,c,d){var e,f;return b=a(b),a.swap(a(b)[0],E,function(){a.position&&d&&a.position.getScrollInfo?(d.of||(d.of=c),d.using=function(a,c){b.attr({"data-horizontal":c.horizontal,"data-vertical":c.vertical}),e=a},b.attr({"data-horizontal":"","data-vertical":"","data-my":d.my||"center","data-at":d.at||"center"}),b.position(d)):(e=a(c).offset(),f=b.offset(),e.top-=f.top,e.left-=f.left,e.top+=c.outerHeight())}),e},a.extend(b.wsPopover,{isInElement:function(b,c){return b==c||a.contains(b,c)},show:function(b){if(!this.isVisible){var e=a.Event("wspopoverbeforeshow");if(this.element.trigger(e),!e.isDefaultPrevented()){this.isVisible=!0,b=a(b||this.options.prepareFor).getNativeElement();var f=this,g=a(b).getShadowElement(),h=function(a){clearTimeout(f.timers.repos),f.timers.repos=setTimeout(function(){f.position(g)},a&&"pospopover"==a.type?4:200)};this.clear(),this.element.removeClass("ws-po-visible").css("display","none"),this.prepareFor(b,g),this.position(g),f.timers.show=setTimeout(function(){f.element.css("display",""),f.timers.show=setTimeout(function(){f.element.addClass("ws-po-visible").trigger("wspopovershow")},9)},9),a(d.body||d).on("focusin"+this.eventns+" mousedown"+this.eventns,function(a){!f.options.hideOnBlur||f.stopBlur||f.isInElement(f.lastElement[0]||d.body,a.target)||f.isInElement(b[0]||d.body,a.target)||f.isInElement(f.element[0],a.target)||f.hide()}),this.element.off("pospopover").on("pospopover",h),a(c).on("resize"+this.eventns+" pospopover"+this.eventns,h)}}},_getAutoAppendElement:function(){var b=/^(?:span|i|label|b|p|tr|thead|tbody|table|strong|em|ul|ol|dl|html)$/i;return function(c){for(var e,f=c[0],g=d.body;(f=f[e?"offsetParent":"parentNode"])&&1==f.nodeType&&f!=g;)e||b.test(f.nodeName)||(e=f),e&&"hidden"==a.css(f,"overflow")&&"static"!=a.css(f,"position")&&(e=!1);return a(e||g)}}(),prepareFor:function(b,c){var d,e,f=this,g={},h=a.extend(!0,{},this.options,b.jProp("form").data("wspopover")||{},b.data("wspopover"));this.lastOpts=h,this.lastElement=a(b).getShadowFocusElement(),this.prepared&&this.options.prepareFor||(e="element"==h.appendTo?b.parent():"auto"==h.appendTo?this._getAutoAppendElement(b):a(h.appendTo),this.prepared&&e[0]==this.element[0].parentNode||this.element.appendTo(e)),this.element.attr({"data-class":b.prop("className"),"data-id":b.prop("id")}),g[C]=h.constrainWidth?c.outerWidth():"",this.element.css(g),h.hideOnBlur&&(d=function(a){f.stopBlur?a.stopImmediatePropagation():f.hide()},f.timers.bindBlur=setTimeout(function(){f.lastElement.off(f.eventns).on("focusout"+f.eventns+" blur"+f.eventns,d),f.lastElement.getNativeElement().off(f.eventns)},10)),this.prepared=!0},clear:function(){a(c).off(this.eventns),a(d).off(this.eventns),a(d.body).off(this.eventns),this.element.off("transitionend"+this.eventns),this.stopBlur=!1,this.lastOpts=!1,a.each(this.timers,function(a,b){clearTimeout(b)})},hide:function(){var b=a.Event("wspopoverbeforehide");if(this.element.trigger(b),!b.isDefaultPrevented()&&this.isVisible){this.isVisible=!1;var d=this,e=function(b){b&&"transitionend"==b.type&&(b=b.originalEvent)&&b.target==d.element[0]&&"hidden"==d.element.css("visibility")||(d.element.off("transitionend"+d.eventns).css("display","none").attr({"data-id":"","data-class":"",hidden:"hidden"}),clearTimeout(d.timers.forcehide),a(c).off("resize"+d.eventns))};this.clear(),this.element.removeClass("ws-po-visible").trigger("wspopoverhide"),a(c).on("resize"+this.eventns,e),D&&this.element.off("transitionend"+this.eventns).on("transitionend"+this.eventns,e),d.timers.forcehide=setTimeout(e,D?600:40)}},position:function(a){var c=b.getRelOffset(this.element.removeAttr("hidden"),a,(this.lastOpts||this.options).position);this.element.css(c)}}),b.validityAlert=function(){f.messagePopover.position=a.extend({},{at:"left bottom",my:"left top",collision:"none"},f.messagePopover.position||{});var d=b.objectCreate(b.wsPopover,{},f.messagePopover),e=d.hide.bind(d);return d.element.addClass("validity-alert").attr({role:"alert"}),a.extend(d,{hideDelay:5e3,showFor:function(b,c,d,f){b=a(b).getNativeElement(),this.clear(),this.hide(),f||(this.getMessage(b,c),this.show(b),this.hideDelay&&(this.timers.delayedHide=setTimeout(e,this.hideDelay))),d||this.setFocus(b)},setFocus:function(d){var e=a(d).getShadowFocusElement(),g=b.scrollRoot.scrollTop()+(f.viewportOffset||0),h=e.offset().top-(f.scrollOffset||30),i=function(){try{e[0].focus()}catch(b){}a(c).triggerHandler("pospopover"+this.eventns)};g>h?b.scrollRoot.animate({scrollTop:h-5-(f.viewportOffset||0)},{queue:!1,duration:Math.max(Math.min(600,1.5*(g-h)),80),complete:i}):i()},getMessage:function(a,b){b||(b=a.getErrorMessage()),b?d.contentElement.text(b):this.hide()}}),d}();var F={slide:{show:"slideDown",hide:"slideUp"},fade:{show:"fadeIn",hide:"fadeOut"},no:{show:"show",hide:"hide"}};if(j.fx&&F[j.fx]||(j.fx="slide"),a.fn[F[j.fx].show]||(j.fx="no"),b.errorbox={create:function(b,c){c||(c=this.getFieldWrapper(b));var d=a("div."+o,c);return d.length||(d=a('<div class="'+o+'" hidden="hidden" style="display: none;">'),c.append(d)),c.data("errorbox",d),d},getFieldWrapper:function(c){var d;return j.fieldWrapper&&(d="function"==typeof j.fieldWrapper?j.fieldWrapper.apply(this,arguments):a(c).parent().closest(j.fieldWrapper),d.length||(d=!1,b.error("could not find fieldwrapper: "+j.fieldWrapper))),d||(d=a(c).parent().closest(":not(span), :not(label), :not(em), :not(strong), :not(p)")),d},_createContentMessage:function(){var c={},d=function(a){return"-"+a.toLowerCase()},e=function(b){var d=a(b).data("errortype");return d||a.each(c,function(c,e){return a(b).is(e)?(d=c,!1):void 0}),d||"defaultMessage"};return a.each(["customError","badInput","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","tooShort","patternMismatch","valueMissing","tooShort"],function(a,b){var e=b.replace(/[A-Z]/,d);c[b]="."+e+", ."+b+", ."+b.toLowerCase()+', [data-errortype="'+b+'"]'}),function(c,d){var f=!1,g=a(c).data("errormessage")||{};"string"==typeof g&&(g={defaultMessage:g}),a(d).children().each(function(){var b=e(this);g[b]||(f=!0,g[b]=a(this).html())}),f&&a(c).data("errormessage",g),b.getOptions&&b.getOptions(c,"errormessage")}}(),initIvalContentMessage:function(b){a(b).jProp("form").is(j.sel)&&this.get(b)},get:function(b,c){c||(c=this.getFieldWrapper(b));var d=c.data("errorbox");return d?"string"==typeof d&&(d=a("#"+d),c.data("errorbox",d),this._createContentMessage(b,d)):(d=this.create(b,c),this._createContentMessage(b,d)),d},addSuccess:function(b,c){var d=a.prop(b,"type"),e=function(){var e=q[d]?a.prop(b,"checked"):a(b).val();c[e?"addClass":"removeClass"](n)},f=y[d]?"change":"blur";a(b).off(".recheckvalid").on(f+".recheckinvalid",e),e()},hideError:function(b,c){var d,e=this.getFieldWrapper(b),f=this.get(b,e);return f&&f.jquery&&(a(b).filter("input").off(".recheckinvalid"),!c&&(d=a("input:invalid, select:invalid, textarea:invalid",e)[0])?a(d).trigger("refreshvalidityui"):(e.removeClass(m),f.message="",f[F[j.fx].hide](function(){a(this).attr({hidden:"hidden"})}))),c||d||this.addSuccess(b,e),e},recheckInvalidInput:function(b){if(j.recheckDelay&&j.recheckDelay>90){var c,d=function(){A({type:"input",target:b})};a(b).filter('input:not([type="checkbox"]):not([type="radio"])').off(".recheckinvalid").on("input.recheckinvalid",function(){clearTimeout(c),c=setTimeout(d,j.recheckDelay)}).on("focusout.recheckinvalid",function(){clearTimeout(c)})}},showError:function(b){var c=this.getFieldWrapper(b),d=this.get(b,c),e=a(b).getErrorMessage();return d.message!=e&&(d.stop&&d.stop(!0,!0),d.html('<p class="'+p+'"">'+e+"</p>"),d.message=e,c.addClass(m).removeClass(n),this.recheckInvalidInput(b),(d.is("[hidden]")||"none"==d.css("display"))&&d.css({display:"none"}).removeAttr("hidden")[F[j.fx].show]()),c.removeClass(n),a(b).off(".recheckvalid"),c},reset:function(a){this.hideError(a,!0).removeClass(n)},toggle:function(b){a(b).is(":invalid")?this.showError(b):this.hideError(b)}},a(d.body).on({changedvaliditystate:function(c){if(j.sel){var d=a(c.target).jProp("form");d.is(j.sel)&&b.errorbox.toggle(c.target)}},resetvalidityui:function(c){if(j.sel){var d=a(c.target).jProp("form");d.is(j.sel)&&b.errorbox.reset(c.target)}},firstinvalid:function(c){if(j.sel&&j.handleBubble){var d=a(c.target).jProp("form");d.is(j.sel)&&(c.preventDefault(),"none"!=j.handleBubble&&b.validityAlert.showFor(c.target,!1,!1,"hide"==j.handleBubble))}},submit:function(b){return j.sel&&j.submitCheck&&a(b.target).is(j.sel)&&a.prop(b.target,"noValidate")&&!a(b.target).checkValidity()?(b.stopImmediatePropagation(),!1):void 0}}),b.modules["form-core"].getGroupElements=v,/[\s\:\>\~\+]/.test(j.sel||"")&&b.error("please use a simple selector for iVal.sel: for example .validate"),f.replaceValidationUI&&a(d).on("firstinvalid",function(a){a.isInvalidUIPrevented()||(a.preventDefault(),b.validityAlert.showFor(a.target))}),function(){var b,c,e=[];a(d).on("invalid",function(f){if(!f.wrongWebkitInvalid){var g=a(f.target);if(!b){b=a.Event("firstinvalid"),b.isInvalidUIPrevented=f.isDefaultPrevented;var h=a.Event("firstinvalidsystem");a(d).triggerHandler(h,{element:f.target,form:f.target.form,isInvalidUIPrevented:f.isDefaultPrevented}),g.trigger(b)}b&&b.isDefaultPrevented()&&f.preventDefault(),e.push(f.target),f.extraData="fix",clearTimeout(c),c=setTimeout(function(){var c={type:"lastinvalid",cancelable:!1,invalidlist:a(e)};b=!1,e=[],a(f.target).trigger(c,[c])},9),g=null}})}(),!a.event.special.change&&!a.event.special.input&&Modernizr.inputtypes&&f.fixRangeChange){var G={trigger:function(){G.blockElement&&(G.blockElement=!1,setTimeout(function(){G.requestedChange&&G.value!=G.requestedChange.value&&a(G.requestedChange).trigger("change"),G.value=!1},9))},lastValue:!1,updateInputValue:function(a){G.lastValue=a.target.value},triggerInput:function(b){G.lastValue!==!1&&G.lastValue!=b.target.value&&a(b.target).trigger("input")},inputTeardown:function(b){a(b.target).off("input",G.updateInputValue).off("blur",G.inputTeardown),G.lastValue=!1},inputSetup:function(b){"range"==b.target.type&&(G.inputTeardown(b),G.lastValue=b.target.value,a(b.target).on("input",G.updateInputValue).on("blur",G.inputTeardown))}};a.each([{name:"key",evt:"keyup"},{name:"mouse",evt:"mouseup"},{name:"touch",evt:"touchend"}],function(b,c){var e=(c.name+"Setup",c.name+"Commit");G[c.name+"Block"]=function(b){G.blockElement||"range"!=b.target.type||(G.blockElement=b.target,G.value=b.target.value,a(G.blockElement).off("blur",G.trigger).on("blur",G.trigger),a(d.body).off(c.evt,G[e]).on(c.evt,G[e]))},G[e]=function(){a(d.body).off(c.evt,G[e]),G.trigger()}}),a(d.body||"html").on({mousedown:G.mouseBlock,"keydown kepress":function(a){a.keyCode<45&&a.keyCode>30&&G.keyBlock(a)},touchstart:G.touchBlock,focusin:G.inputSetup}),a.extend(!0,a.event.special,{change:{handle:function(a){return a.isTrigger||G.blockElement!=a.target?(G.requestedChange==a.target&&(G.requestedChange=!1),a.handleObj.handler.apply(this,arguments),void 0):(G.requestedChange=a.target,G.triggerInput(a),!1)}},input:{handle:function(){var b,c,d=function(){c&&a(c).off("change",d),b=!1,c=!1},e=function(e){d(e),c=e.target,b=e.target.value,a(e.target).on("change",d)};return function(a){var d;if(!a.isTrigger&&"range"==a.target.type)if(c!=a.target)e(a);else if(c==a.target){if(b==(d=a.target.value))return!1;b=a.target.value}a.handleObj.handler.apply(this,arguments)}}()}})}s("form-combat",{d:["dom-support"],test:!(a.mobile&&(a.mobile.selectmenu||a.mobile.checkboxradio)||a.fn.select2||a.fn.chosen||a.fn.selectpicker||a.fn.selectBoxIt)}),s("position",{src:"plugins/jquery.ui.position.js",test:!(!a.position||!a.position.getScrollInfo)}),r.loadList(["form-combat","position"])});