Modernizr.formvalidation||jQuery.webshims.register("form-extend",function(a,f,p,k){f.inputTypes=f.inputTypes||{};var m=f.cfg.forms,h,i=function(c){return typeof c=="number"||c&&c==c*1},j=f.inputTypes,n={radio:1,checkbox:1};f.addInputType=function(c,a){j[c]=a};var e={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},b={valueMissing:function(c,b,o){if(!c.attr("required"))return!1;var d=!1;if(!("type"in o))o.type=
(c[0].getAttribute("type")||c[0].type||"").toLowerCase();if(o.nodeName=="select"){if(b=!b)if(!(b=c[0].selectedIndex<0))c=c[0],b=c.type=="select-one"&&c.size<2?!!a("> option:first-child",c).prop("selected"):!1;c=b}else c=n[o.type]?o.type=="checkbox"?!c.is(":checked"):!a(c[0].form&&c[0].name?c[0].form[c[0].name]:[]).filter(":checked")[0]:!b;return c},tooLong:function(c,a,b){if(a===""||b.nodeName=="select")return!1;var c=c.attr("maxlength"),b=!1,d=a.length;d&&c>=0&&a.replace&&i(c)&&(b=d>c);return b},
typeMismatch:function(c,a,b){if(a===""||b.nodeName=="select")return!1;var d=!1;if(!("type"in b))b.type=(c[0].getAttribute("type")||c[0].type||"").toLowerCase();j[b.type]&&j[b.type].mismatch&&(d=j[b.type].mismatch(a,c));return d},patternMismatch:function(c,a,b){if(a===""||b.nodeName=="select")return!1;c=c.attr("pattern");if(!c)return!1;c=RegExp("^(?:"+c+")$");return!c?!1:!c.test(a)}};f.addValidityRule=function(a,d){b[a]=d};a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||
this)},setup:function(){var c=this.form||this;a.data(c,"invalidEventShim")||(a(c).data("invalidEventShim",!0).bind("submit",a.event.special.invalid.handler),f.moveToFirstEvent(c,"submit"))},teardown:a.noop,handler:function(c){if(!(c.type!="submit"||c.testedValidity||!c.originalEvent||!a.nodeName(c.target,"form")||a.prop(c.target,"noValidate"))){h=!0;c.testedValidity=!0;if(!a(c.target).checkValidity())return this===k&&f.warn("always embed HTML5 content using .prependWebshim, .appendWebshim, .htmlWebshim etc."),
c.stopImmediatePropagation(),h=!1;h=!1}}};a(k).bind("invalid",a.noop);a.event.special.submit=a.event.special.submit||{setup:function(){return!1}};var d=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){a.nodeName(this,"form")?a(this).bind("invalid",a.noop):a("form",this).bind("invalid",a.noop);return d.apply(this,arguments)}});f.addInputType("email",{mismatch:function(){var a=m.emailReg||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(b){return!a.test(b)}}()});f.addInputType("url",{mismatch:function(){var a=m.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(b){return!a.test(b)}}()});f.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},e)}}},"prop");var g=function(c){var b,d=a.prop(c,"validity");if(d)a.data(c,"cachedValidity",d);else return!0;if(!d.valid){b=a.Event("invalid");var e=a(c).trigger(b);if(h&&!g.unhandledInvalids&&!b.isDefaultPrevented())f.validityAlert.showFor(e),
g.unhandledInvalids=!0}a.removeData(c,"cachedValidity",!1);return d.valid};f.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var c=!0,b=a("input,textarea,select",this).filter(function(){var a=f.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});g.unhandledInvalids=!1;for(var d=0,e=b.length;d<e;d++)g(b[d])||(c=!1);return c}}});f.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){g.unhandledInvalids=!1;return g(a(this).getNativeElement()[0])}},
setCustomValidity:{value:function(a){f.data(this,"customvalidationMessage",""+a)}},willValidate:{set:a.noop,get:function(){var c={button:1,reset:1,hidden:1,image:1};return function(){var b=a(this).getNativeElement()[0];return!(b.disabled||b.readOnly||c[b.type]||b.form&&a.prop(b.form,"noValidate"))}}()},validity:{set:a.noop,get:function(){var c=a(this).getNativeElement(),d=c[0],g=a.data(d,"cachedValidity");if(g)return g;g=a.extend({},e);if(!a.prop(d,"willValidate")||d.type=="submit")return g;var h=
c.val(),j={nodeName:d.nodeName.toLowerCase()};g.customError=!!f.data(d,"customvalidationMessage");if(g.customError)g.valid=!1;a.each(b,function(a,b){if(b(c,h,j))g[a]=!0,g.valid=!1});d.setAttribute("aria-invalid",g.valid?"false":"true");d=c=null;return g}}},"prop");f.defineNodeNamesBooleanProperty(["input","textarea","select"],"required",{set:function(a){this.setAttribute("aria-required",!!a+"")},initAttr:!0});f.reflectProperties(["input"],["pattern"]);f.defineNodeNameProperty("textarea","maxlength",
{attr:{set:function(a){this.setAttribute("maxlength",""+a)},get:function(){var a=this.getAttribute("maxlength");return a==null?void 0:a}},prop:{set:function(a){if(i(a)){if(a<0)throw"INDEX_SIZE_ERR";this.setAttribute("maxlength",parseInt(a,10))}else this.setAttribute("maxlength","0")},get:function(){var a=this.getAttribute("maxlength");return i(a)&&a>=0?parseInt(a,10):-1}}});f.defineNodeNameProperty("textarea","maxLength",{prop:{set:function(c){a.prop(this,"maxlength",c)},get:function(){return a.prop(this,
"maxlength")}}});var q={submit:1,button:1,image:1},l={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(c){var b="form"+(c.propName||c.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),
d="form"+c.name,g=c.name,e="click.webshimssubmittermutate"+g,f=function(){if("form"in this&&q[this.type]){var e=a.prop(this,"form");if(e){var f=a.attr(this,d);if(f!=null&&(!c.limitedTo||f.toLowerCase()===a.prop(this,b))){var h=a.attr(e,g);a.attr(e,g,f);setTimeout(function(){h!=null?a.attr(e,g,h):a(e).removeAttr(g)},9)}}}};switch(c.proptype){case "url":var h=k.createElement("form");l[b]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var b=a.attr(this,d);if(b==null)return"";h.setAttribute("action",
b);return h.action}}};break;case "boolean":l[b]={prop:{set:function(b){b?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return a.attr(this,"formnovalidate")!=null}}};break;case "enum":l[b]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var b=a.attr(this,d);return!b||(b=b.toLowerCase())&&!c.limitedTo[b]?c.defaultProp:b}}};break;default:l[b]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var b=a.attr(this,d);return b!=null?b:""}}}}l[d]||
(l[d]={});l[d].attr={set:function(b){l[d].attr._supset.call(this,b);a(this).unbind(e).bind(e,f)},get:function(){return l[d].attr._supget.call(this)}};l[d].initAttr=!0;l[d].removeAttr={value:function(){a(this).unbind(e);l[d].removeAttr._supvalue.call(this)}}});f.defineNodeNamesProperties(["input","button"],l);!a.support.getSetAttribute&&a("<form novalidate></form>").attr("novalidate")==null&&f.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",""+a)},get:function(){var a=
this.getAttribute("novalidate");return a==null?void 0:a}}});f.defineNodeNameProperty("form","noValidate",{prop:{set:function(b){b?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return a.attr(this,"novalidate")!=null}}});f.addReady(function(b,d){a("form",b).add(d.filter("form")).bind("invalid",a.noop);setTimeout(function(){try{if(k.activeElement&&"form"in k.activeElement)return}catch(d){return}var g=!0;a("input, select, textarea",b).each(function(){if(!g)return!1;
if(this.getAttribute("autofocus")!=null){g=!1;var b=a(this).getShadowFocusElement();try{b[0].focus()}catch(c){}return!1}})},0)})});
jQuery.webshims.ready("dom-support form-core",function(a,f,p){Modernizr.textareaPlaceholder=!!("placeholder"in a("<textarea />")[0]);if(!Modernizr.input.placeholder||!Modernizr.textareaPlaceholder){var k=f.cfg.forms.placeholderType=="over",m=["textarea"];Modernizr.input.placeholder||m.push("input");var h=function(e,b,d){if(!k&&e.type!="password")d===!1&&(d=a.prop(e,"value")),e.value=d;b.box.removeClass("placeholder-visible")},i=function(e,b,d,g,f){if(!g&&(g=a.data(e,"placeHolder"),!g))return;if(f==
"focus"||!f&&e===document.activeElement)(e.type=="password"||k||a(e).hasClass("placeholder-visible"))&&h(e,g,"");else if(b===!1&&(b=a.prop(e,"value")),b)h(e,g,b);else if(d===!1&&(d=a.attr(e,"placeholder")||""),d&&!b){b=g;d===!1&&(d=a.attr(e,"placeholder")||"");if(!k&&e.type!="password")e.value=d;b.box.addClass("placeholder-visible")}else h(e,g,b)},j=function(e){var e=a(e),b=e.prop("id"),d=!(!e.attr("title")&&!e.attr("aria-labeledby"));!d&&b&&(d=!!a('label[for="'+b+'"]',e[0].form)[0]);return a(d?'<span class="placeholder-text"></span>':
'<label for="'+(b||a.webshims.getID(e))+'" class="placeholder-text"></label>')},n=function(){var e={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(b){var d=a.data(b,"placeHolder");if(d)return d;d=a.data(b,"placeHolder",{text:j(b)});a(b).bind("focus.placeholder blur.placeholder",function(a){i(this,!1,!1,d,a.type)});b.form&&a(b.form).bind("reset.placeholder",function(a){setTimeout(function(){i(b,!1,!1,d,a.type)},0)});if(b.type=="password"||k){d.box=a(b).wrap('<span class="placeholder-box placeholder-box-'+
(b.nodeName||"").toLowerCase()+'" />').parent();d.text.insertAfter(b).bind("mousedown.placeholder",function(){i(this,!1,!1,d,"focus");try{setTimeout(function(){b.focus()},0)}catch(a){}return!1});a.each(["Left","Top"],function(g,c){var e=(parseInt(a.curCSS(b,"padding"+c),10)||0)+Math.max(parseInt(a.curCSS(b,"margin"+c),10)||0,0)+(parseInt(a.curCSS(b,"border"+c+"Width"),10)||0);d.text.css("padding"+c,e)});a.curCSS(b,"lineHeight");var g={width:a(b).width(),height:a(b).height()},e=a.curCSS(b,"float");
a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(g,c){var e=a.curCSS(b,c);d.text.css(c)!=e&&d.text.css(c,e)});g.width&&g.height&&d.text.css(g);e!=="none"&&d.box.addClass("placeholder-box-"+e)}else{g=function(e){a(b).hasClass("placeholder-visible")&&(h(b,d,""),e&&e.type=="submit"&&setTimeout(function(){e.isDefaultPrevented()&&i(b,!1,!1,d)},9))};if(a.nodeName(d.text[0],"label"))d.text.hide()[a.browser.msie?"insertBefore":"insertAfter"](b);a(p).bind("beforeunload",g);d.box=a(b);b.form&&
a(b.form).submit(g)}return d},update:function(b,d){if(e[a.prop(b,"type")]||a.nodeName(b,"textarea")){var g=n.create(b);g.text.text(d);i(b,!1,d,g)}}}}();a.webshims.publicMethods={pHolder:n};m.forEach(function(a){f.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){f.contentAttr(this,"placeholder",a);n.update(this,a)},get:function(){return f.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});m.forEach(function(e){var b={},d;["attr","prop"].forEach(function(e){b[e]={set:function(a){var b=
f.contentAttr(this,"placeholder"),c=d[e]._supset.call(this,a);b&&"value"in this&&i(this,a,b);return c},get:function(){return a(this).hasClass("placeholder-visible")?"":d[e]._supget.call(this)}}});d=f.defineNodeNameProperty(e,"value",b)})}});
jQuery.webshims.ready("dom-support",function(a,f,p,k){(function(){if(!("value"in k.createElement("output"))){f.defineNodeNameProperty("output","value",{prop:{set:function(f){var i=a.data(this,"outputShim");i||(i=m(this));i(f)},get:function(){return f.contentAttr(this,"value")||a(this).text()||""}}});f.onNodeNamesPropertyModify("input","value",function(f,i,j){j!="removeAttr"&&(i=a.data(this,"outputShim"))&&i(f)});var m=function(h){if(!h.getAttribute("aria-live")){var h=a(h),i=(h.text()||"").trim(),
j=h.attr("id"),n=h.attr("for"),e=a('<input class="output-shim" type="text" disabled name="'+(h.attr("name")||"")+'" value="'+i+'" style="display: none !important;" />').insertAfter(h),b=e[0].form||k,d=function(a){e[0].value=a;a=e[0].value;h.text(a);f.contentAttr(h[0],"value",a)};h[0].defaultValue=i;f.contentAttr(h[0],"value",i);h.attr({"aria-live":"polite"});j&&(e.attr("id",j),h.attr("aria-labeldby",f.getID(a('label[for="'+j+'"]',b))));n&&(j=f.getID(h),n.split(" ").forEach(function(a){(a=k.getElementById(a))&&
a.setAttribute("aria-controls",j)}));h.data("outputShim",d);e.data("outputShim",d);return d}};f.addReady(function(f,i){a("output",f).add(i.filter("output")).each(function(){m(this)})})}})();(function(){var m={updateInput:1,input:1},h={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},i=function(a){var h,e=a.prop("value"),b=function(b){if(a){var c=a.prop("value");c!==e&&(e=c,(!b||!m[b.type])&&f.triggerInlineForm&&f.triggerInlineForm(a[0],"input"))}},d,g=function(){clearTimeout(d);
d=setTimeout(b,9)},i=function(){a.unbind("focusout",i).unbind("keyup keypress keydown paste cut",g).unbind("input change updateInput",b);clearInterval(h);setTimeout(function(){b();a=null},1)};clearInterval(h);h=setInterval(b,99);g();a.bind("keyup keypress keydown paste cut",g).bind("focusout",i).bind("input updateInput change",b)};a(k).bind("focusin",function(f){f.target&&f.target.type&&!f.target.readOnly&&!f.target.disabled&&(f.target.nodeName||"").toLowerCase()=="input"&&!h[f.target.type]&&i(a(f.target))})})()});
