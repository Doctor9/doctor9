/*
 *  Document   : plugins.js
 *  Author     : Various
 *  Description: Jquery Plugins in one file for consistency
 *
 *  Feel free to remove the plugins you won't use (along with their style - if there is one - in css/plugins.css)
 *  or include them separately if you are going to use them only in few pages of your project.
 *  I've included this file along with css/plugins.css in all pages to make all the plugins
 *  available everywhere with the minimum cost (few http requests).
 *
 *  Most plugins are initialized on specific classes in app.js - uiInit() to be available for use in any page.
 *  You can remove the initializations from app.js if you like and only put them in the pages you will use them :-)
 */

/* Avoid `console` errors in browsers that lack a console */
(function () { var e; var t = function () { }; var n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"]; var r = n.length; var i = window.console = window.console || {}; while (r--) { e = n[r]; if (!i[e]) { i[e] = t } } })();

/*! jQuery UI - v1.11.2 - 2015-01-19
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, draggable.js, resizable.js, sortable.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
(function (e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery) })(function (e) {
    function t(t, s) { var a, n, o, r = t.nodeName.toLowerCase(); return "area" === r ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (o = e("img[usemap='#" + n + "']")[0], !!o && i(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t) } function i(t) { return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () { return "hidden" === e.css(this, "visibility") }).length } e.ui = e.ui || {}, e.extend(e.ui, { version: "1.11.2", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), e.fn.extend({ scrollParent: function (t) { var i = this.css("position"), s = "absolute" === i, a = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/, n = this.parents().filter(function () { var t = e(this); return s && "static" === t.css("position") ? !1 : a.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x")) }).eq(0); return "fixed" !== i && n.length ? n : e(this[0].ownerDocument || document) }, uniqueId: function () { var e = 0; return function () { return this.each(function () { this.id || (this.id = "ui-id-" + ++e) }) } }(), removeUniqueId: function () { return this.each(function () { /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id") }) } }), e.extend(e.expr[":"], { data: e.expr.createPseudo ? e.expr.createPseudo(function (t) { return function (i) { return !!e.data(i, t) } }) : function (t, i, s) { return !!e.data(t, s[3]) }, focusable: function (i) { return t(i, !isNaN(e.attr(i, "tabindex"))) }, tabbable: function (i) { var s = e.attr(i, "tabindex"), a = isNaN(s); return (a || s >= 0) && t(i, !a) } }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) { function s(t, i, s, n) { return e.each(a, function () { i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), n && (i -= parseFloat(e.css(t, "margin" + this)) || 0) }), i } var a = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], n = i.toLowerCase(), o = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight }; e.fn["inner" + i] = function (t) { return void 0 === t ? o["inner" + i].call(this) : this.each(function () { e(this).css(n, s(this, t) + "px") }) }, e.fn["outer" + i] = function (t, a) { return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () { e(this).css(n, s(this, t, !0, a) + "px") }) } }), e.fn.addBack || (e.fn.addBack = function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) { return function (i) { return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this) } }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({ focus: function (t) { return function (i, s) { return "number" == typeof i ? this.each(function () { var t = this; setTimeout(function () { e(t).focus(), s && s.call(t) }, i) }) : t.apply(this, arguments) } }(e.fn.focus), disableSelection: function () { var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function () { return this.bind(e + ".ui-disableSelection", function (e) { e.preventDefault() }) } }(), enableSelection: function () { return this.unbind(".ui-disableSelection") }, zIndex: function (t) { if (void 0 !== t) return this.css("zIndex", t); if (this.length) for (var i, s, a = e(this[0]) ; a.length && a[0] !== document;) { if (i = a.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s; a = a.parent() } return 0 } }), e.ui.plugin = { add: function (t, i, s) { var a, n = e.ui[t].prototype; for (a in s) n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]]) }, call: function (e, t, i, s) { var a, n = e.plugins[t]; if (n && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) for (a = 0; n.length > a; a++) e.options[n[a][0]] && n[a][1].apply(e.element, i) } }; var s = 0, a = Array.prototype.slice; e.cleanData = function (t) { return function (i) { var s, a, n; for (n = 0; null != (a = i[n]) ; n++) try { s = e._data(a, "events"), s && s.remove && e(a).triggerHandler("remove") } catch (o) { } t(i) } }(e.cleanData), e.widget = function (t, i, s) { var a, n, o, r, h = {}, l = t.split(".")[0]; return t = t.split(".")[1], a = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][a.toLowerCase()] = function (t) { return !!e.data(t, a) }, e[l] = e[l] || {}, n = e[l][t], o = e[l][t] = function (e, t) { return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t) }, e.extend(o, n, { version: s.version, _proto: e.extend({}, s), _childConstructors: [] }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function (t, s) { return e.isFunction(s) ? (h[t] = function () { var e = function () { return i.prototype[t].apply(this, arguments) }, a = function (e) { return i.prototype[t].apply(this, e) }; return function () { var t, i = this._super, n = this._superApply; return this._super = e, this._superApply = a, t = s.apply(this, arguments), this._super = i, this._superApply = n, t } }(), void 0) : (h[t] = s, void 0) }), o.prototype = e.widget.extend(r, { widgetEventPrefix: n ? r.widgetEventPrefix || t : t }, h, { constructor: o, namespace: l, widgetName: t, widgetFullName: a }), n ? (e.each(n._childConstructors, function (t, i) { var s = i.prototype; e.widget(s.namespace + "." + s.widgetName, o, i._proto) }), delete n._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o }, e.widget.extend = function (t) { for (var i, s, n = a.call(arguments, 1), o = 0, r = n.length; r > o; o++) for (i in n[o]) s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s); return t }, e.widget.bridge = function (t, i) { var s = i.prototype.widgetFullName || t; e.fn[t] = function (n) { var o = "string" == typeof n, r = a.call(arguments, 1), h = this; return n = !o && r.length ? e.widget.extend.apply(null, [n].concat(r)) : n, o ? this.each(function () { var i, a = e.data(this, s); return "instance" === n ? (h = a, !1) : a ? e.isFunction(a[n]) && "_" !== n.charAt(0) ? (i = a[n].apply(a, r), i !== a && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + n + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + n + "'") }) : this.each(function () { var t = e.data(this, s); t ? (t.option(n || {}), t._init && t._init()) : e.data(this, s, new i(n, this)) }), h } }, e.Widget = function () { }, e.Widget._childConstructors = [], e.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { disabled: !1, create: null }, _createWidget: function (t, i) { i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function (e) { e.target === i && this.destroy() } }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init() }, _getCreateOptions: e.noop, _getCreateEventData: e.noop, _create: e.noop, _init: e.noop, destroy: function () { this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus") }, _destroy: e.noop, widget: function () { return this.element }, option: function (t, i) { var s, a, n, o = t; if (0 === arguments.length) return e.widget.extend({}, this.options); if ("string" == typeof t) if (o = {}, s = t.split("."), t = s.shift(), s.length) { for (a = o[t] = e.widget.extend({}, this.options[t]), n = 0; s.length - 1 > n; n++) a[s[n]] = a[s[n]] || {}, a = a[s[n]]; if (t = s.pop(), 1 === arguments.length) return void 0 === a[t] ? null : a[t]; a[t] = i } else { if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t]; o[t] = i } return this._setOptions(o), this }, _setOptions: function (e) { var t; for (t in e) this._setOption(t, e[t]); return this }, _setOption: function (e, t) { return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this }, enable: function () { return this._setOptions({ disabled: !1 }) }, disable: function () { return this._setOptions({ disabled: !0 }) }, _on: function (t, i, s) { var a, n = this; "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = a = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, a = this.widget()), e.each(s, function (s, o) { function r() { return t || n.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? n[o] : o).apply(n, arguments) : void 0 } "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++); var h = s.match(/^([\w:-]*)\s*(.*)$/), l = h[1] + n.eventNamespace, u = h[2]; u ? a.delegate(u, l, r) : i.bind(l, r) }) }, _off: function (t, i) { i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get()) }, _delay: function (e, t) { function i() { return ("string" == typeof e ? s[e] : e).apply(s, arguments) } var s = this; return setTimeout(i, t || 0) }, _hoverable: function (t) { this.hoverable = this.hoverable.add(t), this._on(t, { mouseenter: function (t) { e(t.currentTarget).addClass("ui-state-hover") }, mouseleave: function (t) { e(t.currentTarget).removeClass("ui-state-hover") } }) }, _focusable: function (t) { this.focusable = this.focusable.add(t), this._on(t, { focusin: function (t) { e(t.currentTarget).addClass("ui-state-focus") }, focusout: function (t) { e(t.currentTarget).removeClass("ui-state-focus") } }) }, _trigger: function (t, i, s) { var a, n, o = this.options[t]; if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], n = i.originalEvent) for (a in n) a in i || (i[a] = n[a]); return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented()) } }, e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, i) { e.Widget.prototype["_" + t] = function (s, a, n) { "string" == typeof a && (a = { effect: a }); var o, r = a ? a === !0 || "number" == typeof a ? i : a.effect || i : t; a = a || {}, "number" == typeof a && (a = { duration: a }), o = !e.isEmptyObject(a), a.complete = n, a.delay && s.delay(a.delay), o && e.effects && e.effects.effect[r] ? s[t](a) : r !== t && s[r] ? s[r](a.duration, a.easing, n) : s.queue(function (i) { e(this)[t](), n && n.call(s[0]), i() }) } }), e.widget; var n = !1; e(document).mouseup(function () { n = !1 }), e.widget("ui.mouse", { version: "1.11.2", options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 }, _mouseInit: function () { var t = this; this.element.bind("mousedown." + this.widgetName, function (e) { return t._mouseDown(e) }).bind("click." + this.widgetName, function (i) { return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0 }), this.started = !1 }, _mouseDestroy: function () { this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate) }, _mouseDown: function (t) { if (!n) { this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t; var i = this, s = 1 === t.which, a = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1; return s && !a && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () { i.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) { return i._mouseMove(e) }, this._mouseUpDelegate = function (e) { return i._mouseUp(e) }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0)) : !0 } }, _mouseMove: function (t) { if (this._mouseMoved) { if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t); if (!t.which) return this._mouseUp(t) } return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) }, _mouseUp: function (t) { return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), n = !1, !1 }, _mouseDistanceMet: function (e) { return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance }, _mouseDelayMet: function () { return this.mouseDelayMet }, _mouseStart: function () { }, _mouseDrag: function () { }, _mouseStop: function () { }, _mouseCapture: function () { return !0 } }), e.widget("ui.draggable", e.ui.mouse, { version: "1.11.2", widgetEventPrefix: "drag", options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null }, _create: function () { "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit() }, _setOption: function (e, t) { this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName()) }, _destroy: function () { return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0) }, _mouseCapture: function (t) { var i = this.options; return this._blurActiveElement(t), this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1) }, _blockFrames: function (t) { this.iframeBlocks = this.document.find(t).map(function () { var t = e(this); return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0] }) }, _unblockFrames: function () { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) }, _blurActiveElement: function (t) { var i = this.document[0]; if (this.handleElement.is(t.target)) try { i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && e(i.activeElement).blur() } catch (s) { } }, _mouseStart: function (t) { var i = this.options; return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () { return "fixed" === e(this).css("position") }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0) }, _refreshOffsets: function (e) { this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }, this.offset.click = { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top } }, _mouseDrag: function (t, i) { if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) { var s = this._uiHash(); if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1; this.position = s.position } return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1 }, _mouseStop: function (t) { var i = this, s = !1; return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () { i._trigger("stop", t) !== !1 && i._clear() }) : this._trigger("stop", t) !== !1 && this._clear(), !1 }, _mouseUp: function (t) { return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t) }, cancel: function () { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this }, _getHandle: function (t) { return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0 }, _setHandleClassName: function () { this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle") }, _removeHandleClassName: function () { this.handleElement.removeClass("ui-draggable-handle") }, _createHelper: function (t) { var i = this.options, s = e.isFunction(i.helper), a = s ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element; return a.parents("body").length || a.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && a[0] === this.element[0] && this._setPositionRelative(), a[0] === this.element[0] || /(fixed|absolute)/.test(a.css("position")) || a.css("position", "absolute"), a }, _setPositionRelative: function () { /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative") }, _adjustOffsetFromHelper: function (t) { "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top) }, _isRootNode: function (e) { return /(html|body)/i.test(e.tagName) || e === this.document[0] }, _getParentOffset: function () { var t = this.offsetParent.offset(), i = this.document[0]; return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } }, _getRelativeOffset: function () { if ("relative" !== this.cssPosition) return { top: 0, left: 0 }; var e = this.element.position(), t = this._isRootNode(this.scrollParent[0]); return { top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft()) } }, _cacheMargins: function () { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function () { var t, i, s, a = this.options, n = this.document[0]; return this.relativeContainer = null, a.containment ? "window" === a.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || n.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === a.containment ? (this.containment = [0, 0, e(n).width() - this.helperProportions.width - this.margins.left, (e(n).height() || n.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : a.containment.constructor === Array ? (this.containment = a.containment, void 0) : ("parent" === a.containment && (a.containment = this.helper[0].parentNode), i = e(a.containment), s = i[0], s && (t = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0) }, _convertPositionTo: function (e, t) { t || (t = this.position); var i = "absolute" === e ? 1 : -1, s = this._isRootNode(this.scrollParent[0]); return { top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i, left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i } }, _generatePosition: function (e, t) { var i, s, a, n, o = this.options, r = this._isRootNode(this.scrollParent[0]), h = e.pageX, l = e.pageY; return r && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (a = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? a - this.offset.click.top >= i[1] || a - this.offset.click.top > i[3] ? a : a - this.offset.click.top >= i[1] ? a - o.grid[1] : a + o.grid[1] : a, n = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? n - this.offset.click.left >= i[0] || n - this.offset.click.left > i[2] ? n : n - this.offset.click.left >= i[0] ? n - o.grid[0] : n + o.grid[0] : n), "y" === o.axis && (h = this.originalPageX), "x" === o.axis && (l = this.originalPageY)), { top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top), left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) } }, _clear: function () { this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy() }, _normalizeRightBottom: function () { "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto")) }, _trigger: function (t, i, s) { return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, i, s) }, plugins: {}, _uiHash: function () { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } } }), e.ui.plugin.add("draggable", "connectToSortable", { start: function (t, i, s) { var a = e.extend({}, i, { item: s.element }); s.sortables = [], e(s.options.connectToSortable).each(function () { var i = e(this).sortable("instance"); i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, a)) }) }, stop: function (t, i, s) { var a = e.extend({}, i, { item: s.element }); s.cancelHelperRemoval = !1, e.each(s.sortables, function () { var e = this; e.isOver ? (e.isOver = 0, s.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = { position: e.placeholder.css("position"), top: e.placeholder.css("top"), left: e.placeholder.css("left") }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, a)) }) }, drag: function (t, i, s) { e.each(s.sortables, function () { var a = !1, n = this; n.positionAbs = s.positionAbs, n.helperProportions = s.helperProportions, n.offset.click = s.offset.click, n._intersectsWith(n.containerCache) && (a = !0, e.each(s.sortables, function () { return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== n && this._intersectsWith(this.containerCache) && e.contains(n.element[0], this.element[0]) && (a = !1), a })), a ? (n.isOver || (n.isOver = 1, n.currentItem = i.helper.appendTo(n.element).data("ui-sortable-item", !0), n.options._helper = n.options.helper, n.options.helper = function () { return i.helper[0] }, t.target = n.currentItem[0], n._mouseCapture(t, !0), n._mouseStart(t, !0, !0), n.offset.click.top = s.offset.click.top, n.offset.click.left = s.offset.click.left, n.offset.parent.left -= s.offset.parent.left - n.offset.parent.left, n.offset.parent.top -= s.offset.parent.top - n.offset.parent.top, s._trigger("toSortable", t), s.dropped = n.element, e.each(s.sortables, function () { this.refreshPositions() }), s.currentItem = s.element, n.fromOutside = s), n.currentItem && (n._mouseDrag(t), i.position = n.position)) : n.isOver && (n.isOver = 0, n.cancelHelperRemoval = !0, n.options._revert = n.options.revert, n.options.revert = !1, n._trigger("out", t, n._uiHash(n)), n._mouseStop(t, !0), n.options.revert = n.options._revert, n.options.helper = n.options._helper, n.placeholder && n.placeholder.remove(), s._refreshOffsets(t), i.position = s._generatePosition(t, !0), s._trigger("fromSortable", t), s.dropped = !1, e.each(s.sortables, function () { this.refreshPositions() })) }) } }), e.ui.plugin.add("draggable", "cursor", { start: function (t, i, s) { var a = e("body"), n = s.options; a.css("cursor") && (n._cursor = a.css("cursor")), a.css("cursor", n.cursor) }, stop: function (t, i, s) { var a = s.options; a._cursor && e("body").css("cursor", a._cursor) } }), e.ui.plugin.add("draggable", "opacity", { start: function (t, i, s) { var a = e(i.helper), n = s.options; a.css("opacity") && (n._opacity = a.css("opacity")), a.css("opacity", n.opacity) }, stop: function (t, i, s) { var a = s.options; a._opacity && e(i.helper).css("opacity", a._opacity) } }), e.ui.plugin.add("draggable", "scroll", { start: function (e, t, i) { i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset()) }, drag: function (t, i, s) { var a = s.options, n = !1, o = s.scrollParentNotHidden[0], r = s.document[0]; o !== r && "HTML" !== o.tagName ? (a.axis && "x" === a.axis || (s.overflowOffset.top + o.offsetHeight - t.pageY < a.scrollSensitivity ? o.scrollTop = n = o.scrollTop + a.scrollSpeed : t.pageY - s.overflowOffset.top < a.scrollSensitivity && (o.scrollTop = n = o.scrollTop - a.scrollSpeed)), a.axis && "y" === a.axis || (s.overflowOffset.left + o.offsetWidth - t.pageX < a.scrollSensitivity ? o.scrollLeft = n = o.scrollLeft + a.scrollSpeed : t.pageX - s.overflowOffset.left < a.scrollSensitivity && (o.scrollLeft = n = o.scrollLeft - a.scrollSpeed))) : (a.axis && "x" === a.axis || (t.pageY - e(r).scrollTop() < a.scrollSensitivity ? n = e(r).scrollTop(e(r).scrollTop() - a.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < a.scrollSensitivity && (n = e(r).scrollTop(e(r).scrollTop() + a.scrollSpeed))), a.axis && "y" === a.axis || (t.pageX - e(r).scrollLeft() < a.scrollSensitivity ? n = e(r).scrollLeft(e(r).scrollLeft() - a.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < a.scrollSensitivity && (n = e(r).scrollLeft(e(r).scrollLeft() + a.scrollSpeed)))), n !== !1 && e.ui.ddmanager && !a.dropBehaviour && e.ui.ddmanager.prepareOffsets(s, t) } }), e.ui.plugin.add("draggable", "snap", { start: function (t, i, s) { var a = s.options; s.snapElements = [], e(a.snap.constructor !== String ? a.snap.items || ":data(ui-draggable)" : a.snap).each(function () { var t = e(this), i = t.offset(); this !== s.element[0] && s.snapElements.push({ item: this, width: t.outerWidth(), height: t.outerHeight(), top: i.top, left: i.left }) }) }, drag: function (t, i, s) { var a, n, o, r, h, l, u, d, c, p, f = s.options, m = f.snapTolerance, g = i.offset.left, v = g + s.helperProportions.width, y = i.offset.top, b = y + s.helperProportions.height; for (c = s.snapElements.length - 1; c >= 0; c--) h = s.snapElements[c].left - s.margins.left, l = h + s.snapElements[c].width, u = s.snapElements[c].top - s.margins.top, d = u + s.snapElements[c].height, h - m > v || g > l + m || u - m > b || y > d + m || !e.contains(s.snapElements[c].item.ownerDocument, s.snapElements[c].item) ? (s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, e.extend(s._uiHash(), { snapItem: s.snapElements[c].item })), s.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (a = m >= Math.abs(u - b), n = m >= Math.abs(d - y), o = m >= Math.abs(h - v), r = m >= Math.abs(l - g), a && (i.position.top = s._convertPositionTo("relative", { top: u - s.helperProportions.height, left: 0 }).top), n && (i.position.top = s._convertPositionTo("relative", { top: d, left: 0 }).top), o && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h - s.helperProportions.width }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l }).left)), p = a || n || o || r, "outer" !== f.snapMode && (a = m >= Math.abs(u - y), n = m >= Math.abs(d - b), o = m >= Math.abs(h - g), r = m >= Math.abs(l - v), a && (i.position.top = s._convertPositionTo("relative", { top: u, left: 0 }).top), n && (i.position.top = s._convertPositionTo("relative", { top: d - s.helperProportions.height, left: 0 }).top), o && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l - s.helperProportions.width }).left)), !s.snapElements[c].snapping && (a || n || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, e.extend(s._uiHash(), { snapItem: s.snapElements[c].item })), s.snapElements[c].snapping = a || n || o || r || p) } }), e.ui.plugin.add("draggable", "stack", { start: function (t, i, s) { var a, n = s.options, o = e.makeArray(e(n.stack)).sort(function (t, i) { return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0) }); o.length && (a = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function (t) { e(this).css("zIndex", a + t) }), this.css("zIndex", a + o.length)) } }), e.ui.plugin.add("draggable", "zIndex", { start: function (t, i, s) { var a = e(i.helper), n = s.options; a.css("zIndex") && (n._zIndex = a.css("zIndex")), a.css("zIndex", n.zIndex) }, stop: function (t, i, s) { var a = s.options; a._zIndex && e(i.helper).css("zIndex", a._zIndex) } }), e.ui.draggable, e.widget("ui.resizable", e.ui.mouse, {
        version: "1.11.2", widgetEventPrefix: "resize", options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null }, _num: function (e) {
            return parseInt(e, 10) || 0
        }, _isNumber: function (e) { return !isNaN(parseInt(e, 10)) }, _hasScroll: function (t, i) { if ("hidden" === e(t).css("overflow")) return !1; var s = i && "left" === i ? "scrollLeft" : "scrollTop", a = !1; return t[s] > 0 ? !0 : (t[s] = 1, a = t[s] > 0, t[s] = 0, a) }, _create: function () { var t, i, s, a, n, o = this, r = this.options; if (this.element.addClass("ui-resizable"), e.extend(this, { _aspectRatio: !!r.aspectRatio, aspectRatio: r.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") }), this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0 }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css({ margin: this.originalElement.css("margin") }), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++) s = e.trim(t[i]), n = "ui-resizable-" + s, a = e("<div class='ui-resizable-handle " + n + "'></div>"), a.css({ zIndex: r.zIndex }), "se" === s && a.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(a); this._renderAxis = function (t) { var i, s, a, n; t = t || this.element; for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = this.element.children(this.handles[i]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = e(this.handles[i], this.element), n = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), a = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(a, n), this._proportionallyResize()), e(this.handles[i]).length }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () { o.resizing || (this.className && (a = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = a && a[1] ? a[1] : "se") }), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function () { r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show()) }).mouseleave(function () { r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide()) })), this._mouseInit() }, _destroy: function () { this._mouseDestroy(); var t, i = function (t) { e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove() }; return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({ position: t.css("position"), width: t.outerWidth(), height: t.outerHeight(), top: t.css("top"), left: t.css("left") }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this }, _mouseCapture: function (t) { var i, s, a = !1; for (i in this.handles) s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (a = !0); return !this.options.disabled && a }, _mouseStart: function (t) { var i, s, a, n = this.options, o = this.element; return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), n.containment && (i += e(n.containment).scrollLeft() || 0, s += e(n.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: i, top: s }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: o.width(), height: o.height() }, this.originalSize = this._helper ? { width: o.outerWidth(), height: o.outerHeight() } : { width: o.width(), height: o.height() }, this.sizeDiff = { width: o.outerWidth() - o.width(), height: o.outerHeight() - o.height() }, this.originalPosition = { left: i, top: s }, this.originalMousePosition = { left: t.pageX, top: t.pageY }, this.aspectRatio = "number" == typeof n.aspectRatio ? n.aspectRatio : this.originalSize.width / this.originalSize.height || 1, a = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === a ? this.axis + "-resize" : a), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0 }, _mouseDrag: function (t) { var i, s, a = this.originalMousePosition, n = this.axis, o = t.pageX - a.left || 0, r = t.pageY - a.top || 0, h = this._change[n]; return this._updatePrevProperties(), h ? (i = h.apply(this, [t, o, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1 }, _mouseStop: function (t) { this.resizing = !1; var i, s, a, n, o, r, h, l = this.options, u = this; return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), a = s && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, n = s ? 0 : u.sizeDiff.width, o = { width: u.helper.width() - n, height: u.helper.height() - a }, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, { top: h, left: r })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1 }, _updatePrevProperties: function () { this.prevPosition = { top: this.position.top, left: this.position.left }, this.prevSize = { width: this.size.width, height: this.size.height } }, _applyChanges: function () { var e = {}; return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e }, _updateVirtualBoundaries: function (e) { var t, i, s, a, n, o = this.options; n = { minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0, maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0, minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0, maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0 }, (this._aspectRatio || e) && (t = n.minHeight * this.aspectRatio, s = n.minWidth / this.aspectRatio, i = n.maxHeight * this.aspectRatio, a = n.maxWidth / this.aspectRatio, t > n.minWidth && (n.minWidth = t), s > n.minHeight && (n.minHeight = s), n.maxWidth > i && (n.maxWidth = i), n.maxHeight > a && (n.maxHeight = a)), this._vBoundaries = n }, _updateCache: function (e) { this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width) }, _updateRatio: function (e) { var t = this.position, i = this.size, s = this.axis; return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === s && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === s && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e }, _respectSize: function (e) { var t = this._vBoundaries, i = this.axis, s = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width, a = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height, n = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width, o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height, r = this.originalPosition.left + this.originalSize.width, h = this.position.top + this.size.height, l = /sw|nw|w/.test(i), u = /nw|ne|n/.test(i); return n && (e.width = t.minWidth), o && (e.height = t.minHeight), s && (e.width = t.maxWidth), a && (e.height = t.maxHeight), n && l && (e.left = r - t.minWidth), s && l && (e.left = r - t.maxWidth), o && u && (e.top = h - t.minHeight), a && u && (e.top = h - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e }, _getPaddingPlusBorderDimensions: function (e) { for (var t = 0, i = [], s = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], a = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++) i[t] = parseInt(s[t], 10) || 0, i[t] += parseInt(a[t], 10) || 0; return { height: i[0] + i[2], width: i[1] + i[3] } }, _proportionallyResize: function () { if (this._proportionallyResizeElements.length) for (var e, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++) e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 }) }, _renderProxy: function () { var t = this.element, i = this.options; this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({ width: this.element.outerWidth() - 1, height: this.element.outerHeight() - 1, position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element }, _change: { e: function (e, t) { return { width: this.originalSize.width + t } }, w: function (e, t) { var i = this.originalSize, s = this.originalPosition; return { left: s.left + t, width: i.width - t } }, n: function (e, t, i) { var s = this.originalSize, a = this.originalPosition; return { top: a.top + i, height: s.height - i } }, s: function (e, t, i) { return { height: this.originalSize.height + i } }, se: function (t, i, s) { return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s])) }, sw: function (t, i, s) { return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s])) }, ne: function (t, i, s) { return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s])) }, nw: function (t, i, s) { return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s])) } }, _propagate: function (t, i) { e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui()) }, plugins: {}, ui: function () { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition } }
    }), e.ui.plugin.add("resizable", "animate", { stop: function (t) { var i = e(this).resizable("instance"), s = i.options, a = i._proportionallyResizeElements, n = a.length && /textarea/i.test(a[0].nodeName), o = n && i._hasScroll(a[0], "left") ? 0 : i.sizeDiff.height, r = n ? 0 : i.sizeDiff.width, h = { width: i.size.width - r, height: i.size.height - o }, l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null; i.element.animate(e.extend(h, u && l ? { top: u, left: l } : {}), { duration: s.animateDuration, easing: s.animateEasing, step: function () { var s = { width: parseInt(i.element.css("width"), 10), height: parseInt(i.element.css("height"), 10), top: parseInt(i.element.css("top"), 10), left: parseInt(i.element.css("left"), 10) }; a && a.length && e(a[0]).css({ width: s.width, height: s.height }), i._updateCache(s), i._propagate("resize", t) } }) } }), e.ui.plugin.add("resizable", "containment", { start: function () { var t, i, s, a, n, o, r, h = e(this).resizable("instance"), l = h.options, u = h.element, d = l.containment, c = d instanceof e ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d; c && (h.containerElement = e(c), /document/.test(d) || d === document ? (h.containerOffset = { left: 0, top: 0 }, h.containerPosition = { left: 0, top: 0 }, h.parentData = { element: e(document), left: 0, top: 0, width: e(document).width(), height: e(document).height() || document.body.parentNode.scrollHeight }) : (t = e(c), i = [], e(["Top", "Right", "Left", "Bottom"]).each(function (e, s) { i[e] = h._num(t.css("padding" + s)) }), h.containerOffset = t.offset(), h.containerPosition = t.position(), h.containerSize = { height: t.innerHeight() - i[3], width: t.innerWidth() - i[1] }, s = h.containerOffset, a = h.containerSize.height, n = h.containerSize.width, o = h._hasScroll(c, "left") ? c.scrollWidth : n, r = h._hasScroll(c) ? c.scrollHeight : a, h.parentData = { element: c, left: s.left, top: s.top, width: o, height: r })) }, resize: function (t) { var i, s, a, n, o = e(this).resizable("instance"), r = o.options, h = o.containerOffset, l = o.position, u = o._aspectRatio || t.shiftKey, d = { top: 0, left: 0 }, c = o.containerElement, p = !0; c[0] !== document && /static/.test(c.css("position")) && (d = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - d.left), u && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? h.top : 0), a = o.containerElement.get(0) === o.element.parent().get(0), n = /relative|absolute/.test(o.containerElement.css("position")), a && n ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), i = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - d.left : o.offset.left - h.left)), s = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - d.top : o.offset.top - h.top)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio, p = !1)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height) }, stop: function () { var t = e(this).resizable("instance"), i = t.options, s = t.containerOffset, a = t.containerPosition, n = t.containerElement, o = e(t.helper), r = o.offset(), h = o.outerWidth() - t.sizeDiff.width, l = o.outerHeight() - t.sizeDiff.height; t._helper && !i.animate && /relative/.test(n.css("position")) && e(this).css({ left: r.left - a.left - s.left, width: h, height: l }), t._helper && !i.animate && /static/.test(n.css("position")) && e(this).css({ left: r.left - a.left - s.left, width: h, height: l }) } }), e.ui.plugin.add("resizable", "alsoResize", { start: function () { var t = e(this).resizable("instance"), i = t.options, s = function (t) { e(t).each(function () { var t = e(this); t.data("ui-resizable-alsoresize", { width: parseInt(t.width(), 10), height: parseInt(t.height(), 10), left: parseInt(t.css("left"), 10), top: parseInt(t.css("top"), 10) }) }) }; "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize, function (e) { s(e) }) }, resize: function (t, i) { var s = e(this).resizable("instance"), a = s.options, n = s.originalSize, o = s.originalPosition, r = { height: s.size.height - n.height || 0, width: s.size.width - n.width || 0, top: s.position.top - o.top || 0, left: s.position.left - o.left || 0 }, h = function (t, s) { e(t).each(function () { var t = e(this), a = e(this).data("ui-resizable-alsoresize"), n = {}, o = s && s.length ? s : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"]; e.each(o, function (e, t) { var i = (a[t] || 0) + (r[t] || 0); i && i >= 0 && (n[t] = i || null) }), t.css(n) }) }; "object" != typeof a.alsoResize || a.alsoResize.nodeType ? h(a.alsoResize) : e.each(a.alsoResize, function (e, t) { h(e, t) }) }, stop: function () { e(this).removeData("resizable-alsoresize") } }), e.ui.plugin.add("resizable", "ghost", { start: function () { var t = e(this).resizable("instance"), i = t.options, s = t.size; t.ghost = t.originalElement.clone(), t.ghost.css({ opacity: .25, display: "block", position: "relative", height: s.height, width: s.width, margin: 0, left: 0, top: 0 }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper) }, resize: function () { var t = e(this).resizable("instance"); t.ghost && t.ghost.css({ position: "relative", height: t.size.height, width: t.size.width }) }, stop: function () { var t = e(this).resizable("instance"); t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0)) } }), e.ui.plugin.add("resizable", "grid", { resize: function () { var t, i = e(this).resizable("instance"), s = i.options, a = i.size, n = i.originalSize, o = i.originalPosition, r = i.axis, h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid, l = h[0] || 1, u = h[1] || 1, d = Math.round((a.width - n.width) / l) * l, c = Math.round((a.height - n.height) / u) * u, p = n.width + d, f = n.height + c, m = s.maxWidth && p > s.maxWidth, g = s.maxHeight && f > s.maxHeight, v = s.minWidth && s.minWidth > p, y = s.minHeight && s.minHeight > f; s.grid = h, v && (p += l), y && (f += u), m && (p -= l), g && (f -= u), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = o.top - c) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = o.left - d) : ((0 >= f - u || 0 >= p - l) && (t = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = o.top - c) : (f = u - t.height, i.size.height = f, i.position.top = o.top + n.height - f), p - l > 0 ? (i.size.width = p, i.position.left = o.left - d) : (p = u - t.height, i.size.width = p, i.position.left = o.left + n.width - p)) } }), e.ui.resizable, e.widget("ui.sortable", e.ui.mouse, {
        version: "1.11.2", widgetEventPrefix: "sort", ready: !1, options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null }, _isOverAxis: function (e, t, i) { return e >= t && t + i > e }, _isFloating: function (e) { return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display")) }, _create: function () { var e = this.options; this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === e.axis || this._isFloating(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0 }, _setOption: function (e, t) { this._super(e, t), "handle" === e && this._setHandleClassName() }, _setHandleClassName: function () { this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), e.each(this.items, function () { (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle") }) }, _destroy: function () { this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy(); for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item"); return this }, _mouseCapture: function (t, i) { var s = null, a = !1, n = this; return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function () { return e.data(this, n.widgetName + "-item") === n ? (s = e(this), !1) : void 0 }), e.data(t.target, n.widgetName + "-item") === n && (s = e(t.target)), s ? !this.options.handle || i || (e(this.options.handle, s).find("*").addBack().each(function () { this === t.target && (a = !0) }), a) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1) }, _mouseStart: function (t, i, s) { var a, n, o = this.options; if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, e.extend(this.offset, { click: { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (n = this.document.find("body"), this.storedCursor = n.css("cursor"), n.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(n)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (a = this.containers.length - 1; a >= 0; a--) this.containers[a]._trigger("activate", t, this._uiHash(this)); return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0 }, _mouseDrag: function (t) { var i, s, a, n, o = this.options, r = !1; for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - e(document).scrollTop() < o.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - o.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < o.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + o.scrollSpeed)), t.pageX - e(document).scrollLeft() < o.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - o.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < o.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + o.scrollSpeed))), r !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) if (s = this.items[i], a = s.item[0], n = this._intersectsWithPointer(s), n && s.instance === this.currentContainer && a !== this.currentItem[0] && this.placeholder[1 === n ? "next" : "prev"]()[0] !== a && !e.contains(this.placeholder[0], a) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], a) : !0)) { if (this.direction = 1 === n ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break; this._rearrange(t, s), this._trigger("change", t, this._uiHash()); break } return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1 }, _mouseStop: function (t, i) { if (t) { if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) { var s = this, a = this.placeholder.offset(), n = this.options.axis, o = {}; n && "x" !== n || (o.left = a.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), n && "y" !== n || (o.top = a.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () { s._clear(t) }) } else this._clear(t, i); return !1 } }, cancel: function () { if (this.dragging) { this._mouseUp({ target: null }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show(); for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0) } return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this }, serialize: function (t) { var i = this._getItemsAsjQuery(t && t.connected), s = []; return t = t || {}, e(i).each(function () { var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/); i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2])) }), !s.length && t.key && s.push(t.key + "="), s.join("&") }, toArray: function (t) { var i = this._getItemsAsjQuery(t && t.connected), s = []; return t = t || {}, i.each(function () { s.push(e(t.item || this).attr(t.attribute || "id") || "") }), s }, _intersectsWith: function (e) { var t = this.positionAbs.left, i = t + this.helperProportions.width, s = this.positionAbs.top, a = s + this.helperProportions.height, n = e.left, o = n + e.width, r = e.top, h = r + e.height, l = this.offset.click.top, u = this.offset.click.left, d = "x" === this.options.axis || s + l > r && h > s + l, c = "y" === this.options.axis || t + u > n && o > t + u, p = d && c; return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > n && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > a - this.helperProportions.height / 2 }, _intersectsWithPointer: function (e) { var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height), i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width), s = t && i, a = this._getDragVerticalDirection(), n = this._getDragHorizontalDirection(); return s ? this.floating ? n && "right" === n || "down" === a ? 2 : 1 : a && ("down" === a ? 2 : 1) : !1 }, _intersectsWithSides: function (e) { var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height), i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width), s = this._getDragVerticalDirection(), a = this._getDragHorizontalDirection(); return this.floating && a ? "right" === a && i || "left" === a && !i : s && ("down" === s && t || "up" === s && !t) }, _getDragVerticalDirection: function () { var e = this.positionAbs.top - this.lastPositionAbs.top; return 0 !== e && (e > 0 ? "down" : "up") }, _getDragHorizontalDirection: function () { var e = this.positionAbs.left - this.lastPositionAbs.left; return 0 !== e && (e > 0 ? "right" : "left") }, refresh: function (e) { return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this }, _connectWith: function () { var e = this.options; return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith }, _getItemsAsjQuery: function (t) { function i() { r.push(this) } var s, a, n, o, r = [], h = [], l = this._connectWith(); if (l && t) for (s = l.length - 1; s >= 0; s--) for (n = e(l[s]), a = n.length - 1; a >= 0; a--) o = e.data(n[a], this.widgetFullName), o && o !== this && !o.options.disabled && h.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]); for (h.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i); return e(r) }, _removeCurrentsFromItems: function () { var t = this.currentItem.find(":data(" + this.widgetName + "-item)"); this.items = e.grep(this.items, function (e) { for (var i = 0; t.length > i; i++) if (t[i] === e.item[0]) return !1; return !0 }) }, _refreshItems: function (t) { this.items = [], this.containers = [this]; var i, s, a, n, o, r, h, l, u = this.items, d = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, { item: this.currentItem }) : e(this.options.items, this.element), this]], c = this._connectWith(); if (c && this.ready) for (i = c.length - 1; i >= 0; i--) for (a = e(c[i]), s = a.length - 1; s >= 0; s--) n = e.data(a[s], this.widgetFullName), n && n !== this && !n.options.disabled && (d.push([e.isFunction(n.options.items) ? n.options.items.call(n.element[0], t, { item: this.currentItem }) : e(n.options.items, n.element), n]), this.containers.push(n)); for (i = d.length - 1; i >= 0; i--) for (o = d[i][1], r = d[i][0], s = 0, l = r.length; l > s; s++) h = e(r[s]), h.data(this.widgetName + "-item", o), u.push({ item: h, instance: o, width: 0, height: 0, left: 0, top: 0 }) }, refreshPositions: function (t) { this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()); var i, s, a, n; for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (a = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item, t || (s.width = a.outerWidth(), s.height = a.outerHeight()), n = a.offset(), s.left = n.left, s.top = n.top); if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--) n = this.containers[i].element.offset(), this.containers[i].containerCache.left = n.left, this.containers[i].containerCache.top = n.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight(); return this }, _createPlaceholder: function (t) { t = t || this; var i, s = t.options; s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = { element: function () { var s = t.currentItem[0].nodeName.toLowerCase(), a = e("<" + s + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper"); return "tr" === s ? t.currentItem.children().each(function () { e("<td>&#160;</td>", t.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(a) }) : "img" === s && a.attr("src", t.currentItem.attr("src")), i || a.css("visibility", "hidden"), a }, update: function (e, a) { (!i || s.forcePlaceholderSize) && (a.height() || a.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), a.width() || a.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10))) } }), t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), s.placeholder.update(t, t.placeholder) }, _contactContainers: function (t) {
            var i, s, a, n, o, r, h, l, u, d, c = null, p = null; for (i = this.containers.length - 1; i >= 0; i--) if (!e.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
                if (c && e.contains(this.containers[i].element[0], c.element[0])) continue;
                c = this.containers[i], p = i
            } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0); if (c) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1); else { for (a = 1e4, n = null, u = c.floating || this._isFloating(this.currentItem), o = u ? "left" : "top", r = u ? "width" : "height", d = u ? "clientX" : "clientY", s = this.items.length - 1; s >= 0; s--) e.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[o], l = !1, t[d] - h > this.items[s][r] / 2 && (l = !0), a > Math.abs(t[d] - h) && (a = Math.abs(t[d] - h), n = this.items[s], this.direction = l ? "up" : "down")); if (!n && !this.options.dropOnEmpty) return; if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0; n ? this._rearrange(t, n, null, !0) : this._rearrange(t, null, this.containers[p].element, !0), this._trigger("change", t, this._uiHash()), this.containers[p]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1 }
        }, _createHelper: function (t) { var i = this.options, s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem; return s.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s }, _adjustOffsetFromHelper: function (t) { "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top) }, _getParentOffset: function () { this.offsetParent = this.helper.offsetParent(); var t = this.offsetParent.offset(); return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } }, _getRelativeOffset: function () { if ("relative" === this.cssPosition) { var e = this.currentItem.position(); return { top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } }, _cacheMargins: function () { this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 } }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function () { var t, i, s, a = this.options; "parent" === a.containment && (a.containment = this.helper[0].parentNode), ("document" === a.containment || "window" === a.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" === a.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (e("document" === a.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(a.containment) || (t = e(a.containment)[0], i = e(a.containment).offset(), s = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]) }, _convertPositionTo: function (t, i) { i || (i = this.position); var s = "absolute" === t ? 1 : -1, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, n = /(html|body)/i.test(a[0].tagName); return { top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : a.scrollTop()) * s, left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : a.scrollLeft()) * s } }, _generatePosition: function (t) { var i, s, a = this.options, n = t.pageX, o = t.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName); return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (n = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (n = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), a.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / a.grid[1]) * a.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - a.grid[1] : i + a.grid[1] : i, s = this.originalPageX + Math.round((n - this.originalPageX) / a.grid[0]) * a.grid[0], n = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - a.grid[0] : s + a.grid[0] : s)), { top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()), left: n - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft()) } }, _rearrange: function (e, t, i, s) { i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1; var a = this.counter; this._delay(function () { a === this.counter && this.refreshPositions(!s) }) }, _clear: function (e, t) { function i(e, t, i) { return function (s) { i._trigger(e, s, t._uiHash(t)) } } this.reverting = !1; var s, a = []; if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) { for (s in this._storedCSS) ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = ""); this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") } else this.currentItem.show(); for (this.fromOutside && !t && a.push(function (e) { this._trigger("receive", e, this._uiHash(this.fromOutside)) }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || a.push(function (e) { this._trigger("update", e, this._uiHash()) }), this !== this.currentContainer && (t || (a.push(function (e) { this._trigger("remove", e, this._uiHash()) }), a.push(function (e) { return function (t) { e._trigger("receive", t, this._uiHash(this)) } }.call(this, this.currentContainer)), a.push(function (e) { return function (t) { e._trigger("update", t, this._uiHash(this)) } }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) t || a.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (a.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0); if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) { for (s = 0; a.length > s; s++) a[s].call(this, e); this._trigger("stop", e, this._uiHash()) } return this.fromOutside = !1, !this.cancelHelperRemoval }, _trigger: function () { e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel() }, _uiHash: function (t) { var i = t || this; return { helper: i.helper, placeholder: i.placeholder || e([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: t ? t.element : null } }
    })
});



//! moment.js
//! version : 2.9.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function (a) {
    function b(a, b, c) {
        switch (arguments.length) {
            case 2:
                return null != a ? a : b;
            case 3:
                return null != a ? a : null != b ? b : c;
            default:
                throw new Error("Implement me")
        }
    }

    function c(a, b) {
        return Bb.call(a, b)
    }

    function d() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function e(a) {
        vb.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a)
    }

    function f(a, b) {
        var c = !0;
        return o(function () {
            return c && (e(a), c = !1), b.apply(this, arguments)
        }, b)
    }

    function g(a, b) {
        sc[a] || (e(b), sc[a] = !0)
    }

    function h(a, b) {
        return function (c) {
            return r(a.call(this, c), b)
        }
    }

    function i(a, b) {
        return function (c) {
            return this.localeData().ordinal(a.call(this, c), b)
        }
    }

    function j(a, b) {
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
            f = a.clone().add(e, "months");
        return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
    }

    function k(a, b, c) {
        var d;
        return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
    }

    function l() { }

    function m(a, b) {
        b !== !1 && H(a), p(this, a), this._d = new Date(+a._d), uc === !1 && (uc = !0, vb.updateOffset(this), uc = !1)
    }

    function n(a) {
        var b = A(a),
            c = b.year || 0,
            d = b.quarter || 0,
            e = b.month || 0,
            f = b.week || 0,
            g = b.day || 0,
            h = b.hour || 0,
            i = b.minute || 0,
            j = b.second || 0,
            k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = vb.localeData(), this._bubble()
    }

    function o(a, b) {
        for (var d in b) c(b, d) && (a[d] = b[d]);
        return c(b, "toString") && (a.toString = b.toString), c(b, "valueOf") && (a.valueOf = b.valueOf), a
    }

    function p(a, b) {
        var c, d, e;
        if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = b._pf), "undefined" != typeof b._locale && (a._locale = b._locale), Kb.length > 0)
            for (c in Kb) d = Kb[c], e = b[d], "undefined" != typeof e && (a[d] = e);
        return a
    }

    function q(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }

    function r(a, b, c) {
        for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;) d = "0" + d;
        return (e ? c ? "+" : "" : "-") + d
    }

    function s(a, b) {
        var c = {
            milliseconds: 0,
            months: 0
        };
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
    }

    function t(a, b) {
        var c;
        return b = M(b, a), a.isBefore(b) ? c = s(a, b) : (c = s(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c
    }

    function u(a, b) {
        return function (c, d) {
            var e, f;
            return null === d || isNaN(+d) || (g(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = vb.duration(c, d), v(this, e, a), this
        }
    }

    function v(a, b, c, d) {
        var e = b._milliseconds,
            f = b._days,
            g = b._months;
        d = null == d ? !0 : d, e && a._d.setTime(+a._d + e * c), f && pb(a, "Date", ob(a, "Date") + f * c), g && nb(a, ob(a, "Month") + g * c), d && vb.updateOffset(a, f || g)
    }

    function w(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }

    function x(a) {
        return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
    }

    function y(a, b, c) {
        var d, e = Math.min(a.length, b.length),
            f = Math.abs(a.length - b.length),
            g = 0;
        for (d = 0; e > d; d++) (c && a[d] !== b[d] || !c && C(a[d]) !== C(b[d])) && g++;
        return g + f
    }

    function z(a) {
        if (a) {
            var b = a.toLowerCase().replace(/(.)s$/, "$1");
            a = lc[a] || mc[b] || b
        }
        return a
    }

    function A(a) {
        var b, d, e = {};
        for (d in a) c(a, d) && (b = z(d), b && (e[b] = a[d]));
        return e
    }

    function B(b) {
        var c, d;
        if (0 === b.indexOf("week")) c = 7, d = "day";
        else {
            if (0 !== b.indexOf("month")) return;
            c = 12, d = "month"
        }
        vb[b] = function (e, f) {
            var g, h, i = vb._locale[b],
                j = [];
            if ("number" == typeof e && (f = e, e = a), h = function (a) {
                    var b = vb().utc().set(d, a);
                    return i.call(vb._locale, b, e || "")
            }, null != f) return h(f);
            for (g = 0; c > g; g++) j.push(h(g));
            return j
        }
    }

    function C(a) {
        var b = +a,
            c = 0;
        return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
    }

    function D(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }

    function E(a, b, c) {
        return jb(vb([a, 11, 31 + b - c]), b, c).week
    }

    function F(a) {
        return G(a) ? 366 : 365
    }

    function G(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }

    function H(a) {
        var b;
        a._a && -2 === a._pf.overflow && (b = a._a[Db] < 0 || a._a[Db] > 11 ? Db : a._a[Eb] < 1 || a._a[Eb] > D(a._a[Cb], a._a[Db]) ? Eb : a._a[Fb] < 0 || a._a[Fb] > 24 || 24 === a._a[Fb] && (0 !== a._a[Gb] || 0 !== a._a[Hb] || 0 !== a._a[Ib]) ? Fb : a._a[Gb] < 0 || a._a[Gb] > 59 ? Gb : a._a[Hb] < 0 || a._a[Hb] > 59 ? Hb : a._a[Ib] < 0 || a._a[Ib] > 999 ? Ib : -1, a._pf._overflowDayOfYear && (Cb > b || b > Eb) && (b = Eb), a._pf.overflow = b)
    }

    function I(b) {
        return null == b._isValid && (b._isValid = !isNaN(b._d.getTime()) && b._pf.overflow < 0 && !b._pf.empty && !b._pf.invalidMonth && !b._pf.nullInput && !b._pf.invalidFormat && !b._pf.userInvalidated, b._strict && (b._isValid = b._isValid && 0 === b._pf.charsLeftOver && 0 === b._pf.unusedTokens.length && b._pf.bigHour === a)), b._isValid
    }

    function J(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }

    function K(a) {
        for (var b, c, d, e, f = 0; f < a.length;) {
            for (e = J(a[f]).split("-"), b = e.length, c = J(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                if (d = L(e.slice(0, b).join("-"))) return d;
                if (c && c.length >= b && y(e, c, !0) >= b - 1) break;
                b--
            }
            f++
        }
        return null
    }

    function L(a) {
        var b = null;
        if (!Jb[a] && Lb) try {
            b = vb.locale(), require("./locale/" + a), vb.locale(b)
        } catch (c) { }
        return Jb[a]
    }

    function M(a, b) {
        var c, d;
        return b._isUTC ? (c = b.clone(), d = (vb.isMoment(a) || x(a) ? +a : +vb(a)) - +c, c._d.setTime(+c._d + d), vb.updateOffset(c, !1), c) : vb(a).local()
    }

    function N(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function O(a) {
        var b, c, d = a.match(Pb);
        for (b = 0, c = d.length; c > b; b++) d[b] = rc[d[b]] ? rc[d[b]] : N(d[b]);
        return function (e) {
            var f = "";
            for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
            return f
        }
    }

    function P(a, b) {
        return a.isValid() ? (b = Q(b, a.localeData()), nc[b] || (nc[b] = O(b)), nc[b](a)) : a.localeData().invalidDate()
    }

    function Q(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        var d = 5;
        for (Qb.lastIndex = 0; d >= 0 && Qb.test(a) ;) a = a.replace(Qb, c), Qb.lastIndex = 0, d -= 1;
        return a
    }

    function R(a, b) {
        var c, d = b._strict;
        switch (a) {
            case "Q":
                return _b;
            case "DDDD":
                return bc;
            case "YYYY":
            case "GGGG":
            case "gggg":
                return d ? cc : Tb;
            case "Y":
            case "G":
            case "g":
                return ec;
            case "YYYYYY":
            case "YYYYY":
            case "GGGGG":
            case "ggggg":
                return d ? dc : Ub;
            case "S":
                if (d) return _b;
            case "SS":
                if (d) return ac;
            case "SSS":
                if (d) return bc;
            case "DDD":
                return Sb;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return Wb;
            case "a":
            case "A":
                return b._locale._meridiemParse;
            case "x":
                return Zb;
            case "X":
                return $b;
            case "Z":
            case "ZZ":
                return Xb;
            case "T":
                return Yb;
            case "SSSS":
                return Vb;
            case "MM":
            case "DD":
            case "YY":
            case "GG":
            case "gg":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "ww":
            case "WW":
                return d ? ac : Rb;
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
            case "w":
            case "W":
            case "e":
            case "E":
                return Rb;
            case "Do":
                return d ? b._locale._ordinalParse : b._locale._ordinalParseLenient;
            default:
                return c = new RegExp($(Z(a.replace("\\", "")), "i"))
        }
    }

    function S(a) {
        a = a || "";
        var b = a.match(Xb) || [],
            c = b[b.length - 1] || [],
            d = (c + "").match(jc) || ["-", 0, 0],
            e = +(60 * d[1]) + C(d[2]);
        return "+" === d[0] ? e : -e
    }

    function T(a, b, c) {
        var d, e = c._a;
        switch (a) {
            case "Q":
                null != b && (e[Db] = 3 * (C(b) - 1));
                break;
            case "M":
            case "MM":
                null != b && (e[Db] = C(b) - 1);
                break;
            case "MMM":
            case "MMMM":
                d = c._locale.monthsParse(b, a, c._strict), null != d ? e[Db] = d : c._pf.invalidMonth = b;
                break;
            case "D":
            case "DD":
                null != b && (e[Eb] = C(b));
                break;
            case "Do":
                null != b && (e[Eb] = C(parseInt(b.match(/\d{1,2}/)[0], 10)));
                break;
            case "DDD":
            case "DDDD":
                null != b && (c._dayOfYear = C(b));
                break;
            case "YY":
                e[Cb] = vb.parseTwoDigitYear(b);
                break;
            case "YYYY":
            case "YYYYY":
            case "YYYYYY":
                e[Cb] = C(b);
                break;
            case "a":
            case "A":
                c._meridiem = b;
                break;
            case "h":
            case "hh":
                c._pf.bigHour = !0;
            case "H":
            case "HH":
                e[Fb] = C(b);
                break;
            case "m":
            case "mm":
                e[Gb] = C(b);
                break;
            case "s":
            case "ss":
                e[Hb] = C(b);
                break;
            case "S":
            case "SS":
            case "SSS":
            case "SSSS":
                e[Ib] = C(1e3 * ("0." + b));
                break;
            case "x":
                c._d = new Date(C(b));
                break;
            case "X":
                c._d = new Date(1e3 * parseFloat(b));
                break;
            case "Z":
            case "ZZ":
                c._useUTC = !0, c._tzm = S(b);
                break;
            case "dd":
            case "ddd":
            case "dddd":
                d = c._locale.weekdaysParse(b), null != d ? (c._w = c._w || {}, c._w.d = d) : c._pf.invalidWeekday = b;
                break;
            case "w":
            case "ww":
            case "W":
            case "WW":
            case "d":
            case "e":
            case "E":
                a = a.substr(0, 1);
            case "gggg":
            case "GGGG":
            case "GGGGG":
                a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = C(b));
                break;
            case "gg":
            case "GG":
                c._w = c._w || {}, c._w[a] = vb.parseTwoDigitYear(b)
        }
    }

    function U(a) {
        var c, d, e, f, g, h, i;
        c = a._w, null != c.GG || null != c.W || null != c.E ? (g = 1, h = 4, d = b(c.GG, a._a[Cb], jb(vb(), 1, 4).year), e = b(c.W, 1), f = b(c.E, 1)) : (g = a._locale._week.dow, h = a._locale._week.doy, d = b(c.gg, a._a[Cb], jb(vb(), g, h).year), e = b(c.w, 1), null != c.d ? (f = c.d, g > f && ++e) : f = null != c.e ? c.e + g : g), i = kb(d, e, f, h, g), a._a[Cb] = i.year, a._dayOfYear = i.dayOfYear
    }

    function V(a) {
        var c, d, e, f, g = [];
        if (!a._d) {
            for (e = X(a), a._w && null == a._a[Eb] && null == a._a[Db] && U(a), a._dayOfYear && (f = b(a._a[Cb], e[Cb]), a._dayOfYear > F(f) && (a._pf._overflowDayOfYear = !0), d = fb(f, 0, a._dayOfYear), a._a[Db] = d.getUTCMonth(), a._a[Eb] = d.getUTCDate()), c = 0; 3 > c && null == a._a[c]; ++c) a._a[c] = g[c] = e[c];
            for (; 7 > c; c++) a._a[c] = g[c] = null == a._a[c] ? 2 === c ? 1 : 0 : a._a[c];
            24 === a._a[Fb] && 0 === a._a[Gb] && 0 === a._a[Hb] && 0 === a._a[Ib] && (a._nextDay = !0, a._a[Fb] = 0), a._d = (a._useUTC ? fb : eb).apply(null, g), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[Fb] = 24)
        }
    }

    function W(a) {
        var b;
        a._d || (b = A(a._i), a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], V(a))
    }

    function X(a) {
        var b = new Date;
        return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
    }

    function Y(b) {
        if (b._f === vb.ISO_8601) return void ab(b);
        b._a = [], b._pf.empty = !0;
        var c, d, e, f, g, h = "" + b._i,
            i = h.length,
            j = 0;
        for (e = Q(b._f, b._locale).match(Pb) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(R(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && b._pf.unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), rc[f] ? (d ? b._pf.empty = !1 : b._pf.unusedTokens.push(f), T(f, d, b)) : b._strict && !d && b._pf.unusedTokens.push(f);
        b._pf.charsLeftOver = i - j, h.length > 0 && b._pf.unusedInput.push(h), b._pf.bigHour === !0 && b._a[Fb] <= 12 && (b._pf.bigHour = a), b._a[Fb] = k(b._locale, b._a[Fb], b._meridiem), V(b), H(b)
    }

    function Z(a) {
        return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
            return b || c || d || e
        })
    }

    function $(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function _(a) {
        var b, c, e, f, g;
        if (0 === a._f.length) return a._pf.invalidFormat = !0, void (a._d = new Date(0 / 0));
        for (f = 0; f < a._f.length; f++) g = 0, b = p({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._pf = d(), b._f = a._f[f], Y(b), I(b) && (g += b._pf.charsLeftOver, g += 10 * b._pf.unusedTokens.length, b._pf.score = g, (null == e || e > g) && (e = g, c = b));
        o(a, c || b)
    }

    function ab(a) {
        var b, c, d = a._i,
            e = fc.exec(d);
        if (e) {
            for (a._pf.iso = !0, b = 0, c = hc.length; c > b; b++)
                if (hc[b][1].exec(d)) {
                    a._f = hc[b][0] + (e[6] || " ");
                    break
                }
            for (b = 0, c = ic.length; c > b; b++)
                if (ic[b][1].exec(d)) {
                    a._f += ic[b][0];
                    break
                }
            d.match(Xb) && (a._f += "Z"), Y(a)
        } else a._isValid = !1
    }

    function bb(a) {
        ab(a), a._isValid === !1 && (delete a._isValid, vb.createFromInputFallback(a))
    }

    function cb(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
        return d
    }

    function db(b) {
        var c, d = b._i;
        d === a ? b._d = new Date : x(d) ? b._d = new Date(+d) : null !== (c = Mb.exec(d)) ? b._d = new Date(+c[1]) : "string" == typeof d ? bb(b) : w(d) ? (b._a = cb(d.slice(0), function (a) {
            return parseInt(a, 10)
        }), V(b)) : "object" == typeof d ? W(b) : "number" == typeof d ? b._d = new Date(d) : vb.createFromInputFallback(b)
    }

    function eb(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 1970 > a && h.setFullYear(a), h
    }

    function fb(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 1970 > a && b.setUTCFullYear(a), b
    }

    function gb(a, b) {
        if ("string" == typeof a)
            if (isNaN(a)) {
                if (a = b.weekdaysParse(a), "number" != typeof a) return null
            } else a = parseInt(a, 10);
        return a
    }

    function hb(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }

    function ib(a, b, c) {
        var d = vb.duration(a).abs(),
            e = Ab(d.as("s")),
            f = Ab(d.as("m")),
            g = Ab(d.as("h")),
            h = Ab(d.as("d")),
            i = Ab(d.as("M")),
            j = Ab(d.as("y")),
            k = e < oc.s && ["s", e] || 1 === f && ["m"] || f < oc.m && ["mm", f] || 1 === g && ["h"] || g < oc.h && ["hh", g] || 1 === h && ["d"] || h < oc.d && ["dd", h] || 1 === i && ["M"] || i < oc.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
        return k[2] = b, k[3] = +a > 0, k[4] = c, hb.apply({}, k)
    }

    function jb(a, b, c) {
        var d, e = c - b,
            f = c - a.day();
        return f > e && (f -= 7), e - 7 > f && (f += 7), d = vb(a).add(f, "d"), {
            week: Math.ceil(d.dayOfYear() / 7),
            year: d.year()
        }
    }

    function kb(a, b, c, d, e) {
        var f, g, h = fb(a, 0, 1).getUTCDay();
        return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {
            year: g > 0 ? a : a - 1,
            dayOfYear: g > 0 ? g : F(a - 1) + g
        }
    }

    function lb(b) {
        var c, d = b._i,
            e = b._f;
        return b._locale = b._locale || vb.localeData(b._l), null === d || e === a && "" === d ? vb.invalid({
            nullInput: !0
        }) : ("string" == typeof d && (b._i = d = b._locale.preparse(d)), vb.isMoment(d) ? new m(d, !0) : (e ? w(e) ? _(b) : Y(b) : db(b), c = new m(b), c._nextDay && (c.add(1, "d"), c._nextDay = a), c))
    }

    function mb(a, b) {
        var c, d;
        if (1 === b.length && w(b[0]) && (b = b[0]), !b.length) return vb();
        for (c = b[0], d = 1; d < b.length; ++d) b[d][a](c) && (c = b[d]);
        return c
    }

    function nb(a, b) {
        var c;
        return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), D(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
    }

    function ob(a, b) {
        return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
    }

    function pb(a, b, c) {
        return "Month" === b ? nb(a, c) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }

    function qb(a, b) {
        return function (c) {
            return null != c ? (pb(this, a, c), vb.updateOffset(this, b), this) : ob(this, a)
        }
    }

    function rb(a) {
        return 400 * a / 146097
    }

    function sb(a) {
        return 146097 * a / 400
    }

    function tb(a) {
        vb.duration.fn[a] = function () {
            return this._data[a]
        }
    }

    function ub(a) {
        "undefined" == typeof ender && (wb = zb.moment, zb.moment = a ? f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", vb) : vb)
    }
    for (var vb, wb, xb, yb = "2.9.0", zb = "undefined" == typeof global || "undefined" != typeof window && window !== global.window ? this : global, Ab = Math.round, Bb = Object.prototype.hasOwnProperty, Cb = 0, Db = 1, Eb = 2, Fb = 3, Gb = 4, Hb = 5, Ib = 6, Jb = {}, Kb = [], Lb = "undefined" != typeof module && module && module.exports, Mb = /^\/?Date\((\-?\d+)/i, Nb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Ob = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Pb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, Qb = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Rb = /\d\d?/, Sb = /\d{1,3}/, Tb = /\d{1,4}/, Ub = /[+\-]?\d{1,6}/, Vb = /\d+/, Wb = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Xb = /Z|[\+\-]\d\d:?\d\d/gi, Yb = /T/i, Zb = /[\+\-]?\d+/, $b = /[\+\-]?\d+(\.\d{1,3})?/, _b = /\d/, ac = /\d\d/, bc = /\d{3}/, cc = /\d{4}/, dc = /[+-]?\d{6}/, ec = /[+-]?\d+/, fc = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, gc = "YYYY-MM-DDTHH:mm:ssZ", hc = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
            ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
            ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d{2}/],
            ["YYYY-DDD", /\d{4}-\d{3}/]
    ], ic = [
            ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
    ], jc = /([\+\-]|\d\d)/gi, kc = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }), lc = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        D: "date",
        w: "week",
        W: "isoWeek",
        M: "month",
        Q: "quarter",
        y: "year",
        DDD: "dayOfYear",
        e: "weekday",
        E: "isoWeekday",
        gg: "weekYear",
        GG: "isoWeekYear"
    }, mc = {
        dayofyear: "dayOfYear",
        isoweekday: "isoWeekday",
        isoweek: "isoWeek",
        weekyear: "weekYear",
        isoweekyear: "isoWeekYear"
    }, nc = {}, oc = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }, pc = "DDD w W M D d".split(" "), qc = "M D H h m s w W".split(" "), rc = {
        M: function () {
                return this.month() + 1
    },
        MMM: function (a) {
                return this.localeData().monthsShort(this, a)
    },
        MMMM: function (a) {
                return this.localeData().months(this, a)
    },
        D: function () {
                return this.date()
    },
        DDD: function () {
                return this.dayOfYear()
    },
        d: function () {
                return this.day()
    },
        dd: function (a) {
                return this.localeData().weekdaysMin(this, a)
    },
        ddd: function (a) {
                return this.localeData().weekdaysShort(this, a)
    },
        dddd: function (a) {
                return this.localeData().weekdays(this, a)
    },
        w: function () {
                return this.week()
    },
        W: function () {
                return this.isoWeek()
    },
        YY: function () {
                return r(this.year() % 100, 2)
    },
        YYYY: function () {
                return r(this.year(), 4)
    },
        YYYYY: function () {
                return r(this.year(), 5)
    },
        YYYYYY: function () {
                var a = this.year(),
                    b = a >= 0 ? "+" : "-";
                return b + r(Math.abs(a), 6)
    },
        gg: function () {
                return r(this.weekYear() % 100, 2)
    },
        gggg: function () {
                return r(this.weekYear(), 4)
    },
        ggggg: function () {
                return r(this.weekYear(), 5)
    },
        GG: function () {
                return r(this.isoWeekYear() % 100, 2)
    },
        GGGG: function () {
                return r(this.isoWeekYear(), 4)
    },
        GGGGG: function () {
                return r(this.isoWeekYear(), 5)
    },
        e: function () {
                return this.weekday()
    },
        E: function () {
                return this.isoWeekday()
    },
        a: function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), !0)
    },
        A: function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), !1)
    },
        H: function () {
                return this.hours()
    },
        h: function () {
                return this.hours() % 12 || 12
    },
        m: function () {
                return this.minutes()
    },
        s: function () {
                return this.seconds()
    },
        S: function () {
                return C(this.milliseconds() / 100)
    },
        SS: function () {
                return r(C(this.milliseconds() / 10), 2)
    },
        SSS: function () {
                return r(this.milliseconds(), 3)
    },
        SSSS: function () {
                return r(this.milliseconds(), 3)
    },
        Z: function () {
                var a = this.utcOffset(),
                    b = "+";
                return 0 > a && (a = -a, b = "-"), b + r(C(a / 60), 2) + ":" + r(C(a) % 60, 2)
    },
        ZZ: function () {
                var a = this.utcOffset(),
                    b = "+";
                return 0 > a && (a = -a, b = "-"), b + r(C(a / 60), 2) + r(C(a) % 60, 2)
    },
        z: function () {
                return this.zoneAbbr()
    },
        zz: function () {
                return this.zoneName()
    },
        x: function () {
                return this.valueOf()
    },
        X: function () {
                return this.unix()
    },
        Q: function () {
                return this.quarter()
    }
    }, sc = {}, tc = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"], uc = !1; pc.length;) xb = pc.pop(), rc[xb + "o"] = i(rc[xb], xb);
    for (; qc.length;) xb = qc.pop(), rc[xb + xb] = h(rc[xb], 2);
    rc.DDDD = h(rc.DDD, 3), o(l.prototype, {
        set: function (a) {
            var b, c;
            for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b;
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        },
        _months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
        months: function (a) {
            return this._months[a.month()]
        },
        _monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
        monthsShort: function (a) {
            return this._monthsShort[a.month()]
        },
        monthsParse: function (a, b, c) {
            var d, e, f;
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
                if (e = vb.utc([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
                if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
                if (!c && this._monthsParse[d].test(a)) return d
            }
        },
        _weekdays: "Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado".split("_"),
        weekdays: function (a) {
            return this._weekdays[a.day()]
        },
        _weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sab".split("_"),
        weekdaysShort: function (a) {
            return this._weekdaysShort[a.day()]
        },
        _weekdaysMin: "Dom_Seg_Ter_Qua_Qui_Sex_Sab".split("_"),
        weekdaysMin: function (a) {
            return this._weekdaysMin[a.day()]
        },
        weekdaysParse: function (a) {
            var b, c, d;
            for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)
                if (this._weekdaysParse[b] || (c = vb([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
        },
        _longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY LT",
            LLLL: "dddd, MMMM D, YYYY LT"
        },
        longDateFormat: function (a) {
            var b = this._longDateFormat[a];
            return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (a) {
                return a.slice(1)
            }), this._longDateFormat[a] = b), b
        },
        isPM: function (a) {
            return "p" === (a + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function (a, b, c) {
            return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function (a, b, c) {
            var d = this._calendar[a];
            return "function" == typeof d ? d.apply(b, [c]) : d
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function (a, b, c, d) {
            var e = this._relativeTime[c];
            return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
        },
        pastFuture: function (a, b) {
            var c = this._relativeTime[a > 0 ? "future" : "past"];
            return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
        },
        ordinal: function (a) {
            return this._ordinal.replace("%d", a)
        },
        _ordinal: "%d",
        _ordinalParse: /\d{1,2}/,
        preparse: function (a) {
            return a
        },
        postformat: function (a) {
            return a
        },
        week: function (a) {
            return jb(a, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        },
        firstDayOfWeek: function () {
            return this._week.dow
        },
        firstDayOfYear: function () {
            return this._week.doy
        },
        _invalidDate: "Invalid date",
        invalidDate: function () {
            return this._invalidDate
        }
    }), vb = function (b, c, e, f) {
        var g;
        return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = b, g._f = c, g._l = e, g._strict = f, g._isUTC = !1, g._pf = d(), lb(g)
    }, vb.suppressDeprecationWarnings = !1, vb.createFromInputFallback = f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
    }), vb.min = function () {
        var a = [].slice.call(arguments, 0);
        return mb("isBefore", a)
    }, vb.max = function () {
        var a = [].slice.call(arguments, 0);
        return mb("isAfter", a)
    }, vb.utc = function (b, c, e, f) {
        var g;
        return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = b, g._f = c, g._strict = f, g._pf = d(), lb(g).utc()
    }, vb.unix = function (a) {
        return vb(1e3 * a)
    }, vb.duration = function (a, b) {
        var d, e, f, g, h = a,
            i = null;
        return vb.isDuration(a) ? h = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : "number" == typeof a ? (h = {}, b ? h[b] = a : h.milliseconds = a) : (i = Nb.exec(a)) ? (d = "-" === i[1] ? -1 : 1, h = {
            y: 0,
            d: C(i[Eb]) * d,
            h: C(i[Fb]) * d,
            m: C(i[Gb]) * d,
            s: C(i[Hb]) * d,
            ms: C(i[Ib]) * d
        }) : (i = Ob.exec(a)) ? (d = "-" === i[1] ? -1 : 1, f = function (a) {
            var b = a && parseFloat(a.replace(",", "."));
            return (isNaN(b) ? 0 : b) * d
        }, h = {
            y: f(i[2]),
            M: f(i[3]),
            d: f(i[4]),
            h: f(i[5]),
            m: f(i[6]),
            s: f(i[7]),
            w: f(i[8])
        }) : null == h ? h = {} : "object" == typeof h && ("from" in h || "to" in h) && (g = t(vb(h.from), vb(h.to)), h = {}, h.ms = g.milliseconds, h.M = g.months), e = new n(h), vb.isDuration(a) && c(a, "_locale") && (e._locale = a._locale), e
    }, vb.version = yb, vb.defaultFormat = gc, vb.ISO_8601 = function () { }, vb.momentProperties = Kb, vb.updateOffset = function () { }, vb.relativeTimeThreshold = function (b, c) {
        return oc[b] === a ? !1 : c === a ? oc[b] : (oc[b] = c, !0)
    }, vb.lang = f("moment.lang is deprecated. Use moment.locale instead.", function (a, b) {
        return vb.locale(a, b)
    }), vb.locale = function (a, b) {
        var c;
        return a && (c = "undefined" != typeof b ? vb.defineLocale(a, b) : vb.localeData(a), c && (vb.duration._locale = vb._locale = c)), vb._locale._abbr
    }, vb.defineLocale = function (a, b) {
        return null !== b ? (b.abbr = a, Jb[a] || (Jb[a] = new l), Jb[a].set(b), vb.locale(a), Jb[a]) : (delete Jb[a], null)
    }, vb.langData = f("moment.langData is deprecated. Use moment.localeData instead.", function (a) {
        return vb.localeData(a)
    }), vb.localeData = function (a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return vb._locale;
        if (!w(a)) {
            if (b = L(a)) return b;
            a = [a]
        }
        return K(a)
    }, vb.isMoment = function (a) {
        return a instanceof m || null != a && c(a, "_isAMomentObject")
    }, vb.isDuration = function (a) {
        return a instanceof n
    };
    for (xb = tc.length - 1; xb >= 0; --xb) B(tc[xb]);
    vb.normalizeUnits = function (a) {
        return z(a)
    }, vb.invalid = function (a) {
        var b = vb.utc(0 / 0);
        return null != a ? o(b._pf, a) : b._pf.userInvalidated = !0, b
    }, vb.parseZone = function () {
        return vb.apply(null, arguments).parseZone()
    }, vb.parseTwoDigitYear = function (a) {
        return C(a) + (C(a) > 68 ? 1900 : 2e3)
    }, vb.isDate = x, o(vb.fn = m.prototype, {
        clone: function () {
            return vb(this)
        },
        valueOf: function () {
            return +this._d - 6e4 * (this._offset || 0)
        },
        unix: function () {
            return Math.floor(+this / 1e3)
        },
        toString: function () {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function () {
            return this._offset ? new Date(+this) : this._d
        },
        toISOString: function () {
            var a = vb(this).utc();
            return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : P(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : P(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function () {
            var a = this;
            return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
        },
        isValid: function () {
            return I(this)
        },
        isDSTShifted: function () {
            return this._a ? this.isValid() && y(this._a, (this._isUTC ? vb.utc(this._a) : vb(this._a)).toArray()) > 0 : !1
        },
        parsingFlags: function () {
            return o({}, this._pf)
        },
        invalidAt: function () {
            return this._pf.overflow
        },
        utc: function (a) {
            return this.utcOffset(0, a)
        },
        local: function (a) {
            return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(this._dateUtcOffset(), "m")), this
        },
        format: function (a) {
            var b = P(this, a || vb.defaultFormat);
            return this.localeData().postformat(b)
        },
        add: u(1, "add"),
        subtract: u(-1, "subtract"),
        diff: function (a, b, c) {
            var d, e, f = M(a, this),
                g = 6e4 * (f.utcOffset() - this.utcOffset());
            return b = z(b), "year" === b || "month" === b || "quarter" === b ? (e = j(this, f), "quarter" === b ? e /= 3 : "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : q(e)
        },
        from: function (a, b) {
            return vb.duration({
                to: this,
                from: a
            }).locale(this.locale()).humanize(!b)
        },
        fromNow: function (a) {
            return this.from(vb(), a)
        },
        calendar: function (a) {
            var b = a || vb(),
                c = M(b, this).startOf("day"),
                d = this.diff(c, "days", !0),
                e = -6 > d ? "sameElse" : -1 > d ? "lastWeek" : 0 > d ? "lastDay" : 1 > d ? "sameDay" : 2 > d ? "nextDay" : 7 > d ? "nextWeek" : "sameElse";
            return this.format(this.localeData().calendar(e, this, vb(b)))
        },
        isLeapYear: function () {
            return G(this.year())
        },
        isDST: function () {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        },
        day: function (a) {
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != a ? (a = gb(a, this.localeData()), this.add(a - b, "d")) : b
        },
        month: qb("Month", !0),
        startOf: function (a) {
            switch (a = z(a)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
        },
        endOf: function (b) {
            return b = z(b), b === a || "millisecond" === b ? this : this.startOf(b).add(1, "isoWeek" === b ? "week" : b).subtract(1, "ms")
        },
        isAfter: function (a, b) {
            var c;
            return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = vb.isMoment(a) ? a : vb(a), +this > +a) : (c = vb.isMoment(a) ? +a : +vb(a), c < +this.clone().startOf(b))
        },
        isBefore: function (a, b) {
            var c;
            return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = vb.isMoment(a) ? a : vb(a), +a > +this) : (c = vb.isMoment(a) ? +a : +vb(a), +this.clone().endOf(b) < c)
        },
        isBetween: function (a, b, c) {
            return this.isAfter(a, c) && this.isBefore(b, c)
        },
        isSame: function (a, b) {
            var c;
            return b = z(b || "millisecond"), "millisecond" === b ? (a = vb.isMoment(a) ? a : vb(a), +this === +a) : (c = +vb(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))
        },
        min: f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (a) {
            return a = vb.apply(null, arguments), this > a ? this : a
        }),
        max: f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (a) {
            return a = vb.apply(null, arguments), a > this ? this : a
        }),
        zone: f("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function (a, b) {
            return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
        }),
        utcOffset: function (a, b) {
            var c, d = this._offset || 0;
            return null != a ? ("string" == typeof a && (a = S(a)), Math.abs(a) < 16 && (a = 60 * a), !this._isUTC && b && (c = this._dateUtcOffset()), this._offset = a, this._isUTC = !0, null != c && this.add(c, "m"), d !== a && (!b || this._changeInProgress ? v(this, vb.duration(a - d, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, vb.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? d : this._dateUtcOffset()
        },
        isLocal: function () {
            return !this._isUTC
        },
        isUtcOffset: function () {
            return this._isUTC
        },
        isUtc: function () {
            return this._isUTC && 0 === this._offset
        },
        zoneAbbr: function () {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function () {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        parseZone: function () {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(S(this._i)), this
        },
        hasAlignedHourOffset: function (a) {
            return a = a ? vb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0
        },
        daysInMonth: function () {
            return D(this.year(), this.month())
        },
        dayOfYear: function (a) {
            var b = Ab((vb(this).startOf("day") - vb(this).startOf("year")) / 864e5) + 1;
            return null == a ? b : this.add(a - b, "d")
        },
        quarter: function (a) {
            return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
        },
        weekYear: function (a) {
            var b = jb(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return null == a ? b : this.add(a - b, "y")
        },
        isoWeekYear: function (a) {
            var b = jb(this, 1, 4).year;
            return null == a ? b : this.add(a - b, "y")
        },
        week: function (a) {
            var b = this.localeData().week(this);
            return null == a ? b : this.add(7 * (a - b), "d")
        },
        isoWeek: function (a) {
            var b = jb(this, 1, 4).week;
            return null == a ? b : this.add(7 * (a - b), "d")
        },
        weekday: function (a) {
            var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == a ? b : this.add(a - b, "d")
        },
        isoWeekday: function (a) {
            return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
        },
        isoWeeksInYear: function () {
            return E(this.year(), 1, 4)
        },
        weeksInYear: function () {
            var a = this.localeData()._week;
            return E(this.year(), a.dow, a.doy)
        },
        get: function (a) {
            return a = z(a), this[a]()
        },
        set: function (a, b) {
            var c;
            if ("object" == typeof a)
                for (c in a) this.set(c, a[c]);
            else a = z(a), "function" == typeof this[a] && this[a](b);
            return this
        },
        locale: function (b) {
            var c;
            return b === a ? this._locale._abbr : (c = vb.localeData(b), null != c && (this._locale = c), this)
        },
        lang: f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (b) {
            return b === a ? this.localeData() : this.locale(b)
        }),
        localeData: function () {
            return this._locale
        },
        _dateUtcOffset: function () {
            return 15 * -Math.round(this._d.getTimezoneOffset() / 15)
        }
    }), vb.fn.millisecond = vb.fn.milliseconds = qb("Milliseconds", !1), vb.fn.second = vb.fn.seconds = qb("Seconds", !1), vb.fn.minute = vb.fn.minutes = qb("Minutes", !1), vb.fn.hour = vb.fn.hours = qb("Hours", !0), vb.fn.date = qb("Date", !0), vb.fn.dates = f("dates accessor is deprecated. Use date instead.", qb("Date", !0)), vb.fn.year = qb("FullYear", !0), vb.fn.years = f("years accessor is deprecated. Use year instead.", qb("FullYear", !0)), vb.fn.days = vb.fn.day, vb.fn.months = vb.fn.month, vb.fn.weeks = vb.fn.week, vb.fn.isoWeeks = vb.fn.isoWeek, vb.fn.quarters = vb.fn.quarter, vb.fn.toJSON = vb.fn.toISOString, vb.fn.isUTC = vb.fn.isUtc, o(vb.duration.fn = n.prototype, {
        _bubble: function () {
            var a, b, c, d = this._milliseconds,
                e = this._days,
                f = this._months,
                g = this._data,
                h = 0;
            g.milliseconds = d % 1e3, a = q(d / 1e3), g.seconds = a % 60, b = q(a / 60), g.minutes = b % 60, c = q(b / 60), g.hours = c % 24, e += q(c / 24), h = q(rb(e)), e -= q(sb(h)), f += q(e / 30), e %= 30, h += q(f / 12), f %= 12, g.days = e, g.months = f, g.years = h
        },
        abs: function () {
            return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
        },
        weeks: function () {
            return q(this.days() / 7)
        },
        valueOf: function () {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * C(this._months / 12)
        },
        humanize: function (a) {
            var b = ib(this, !a, this.localeData());
            return a && (b = this.localeData().pastFuture(+this, b)), this.localeData().postformat(b)
        },
        add: function (a, b) {
            var c = vb.duration(a, b);
            return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
        },
        subtract: function (a, b) {
            var c = vb.duration(a, b);
            return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
        },
        get: function (a) {
            return a = z(a), this[a.toLowerCase() + "s"]()
        },
        as: function (a) {
            var b, c;
            if (a = z(a), "month" === a || "year" === a) return b = this._days + this._milliseconds / 864e5, c = this._months + 12 * rb(b), "month" === a ? c : c / 12;
            switch (b = this._days + Math.round(sb(this._months / 12)), a) {
                case "week":
                    return b / 7 + this._milliseconds / 6048e5;
                case "day":
                    return b + this._milliseconds / 864e5;
                case "hour":
                    return 24 * b + this._milliseconds / 36e5;
                case "minute":
                    return 24 * b * 60 + this._milliseconds / 6e4;
                case "second":
                    return 24 * b * 60 * 60 + this._milliseconds / 1e3;
                case "millisecond":
                    return Math.floor(24 * b * 60 * 60 * 1e3) + this._milliseconds;
                default:
                    throw new Error("Unknown unit " + a)
            }
        },
        lang: vb.fn.lang,
        locale: vb.fn.locale,
        toIsoString: f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function () {
            return this.toISOString()
        }),
        toISOString: function () {
            var a = Math.abs(this.years()),
                b = Math.abs(this.months()),
                c = Math.abs(this.days()),
                d = Math.abs(this.hours()),
                e = Math.abs(this.minutes()),
                f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
        },
        localeData: function () {
            return this._locale
        },
        toJSON: function () {
            return this.toISOString()
        }
    }), vb.duration.fn.toString = vb.duration.fn.toISOString;
    for (xb in kc) c(kc, xb) && tb(xb.toLowerCase());
    vb.duration.fn.asMilliseconds = function () {
        return this.as("ms")
    }, vb.duration.fn.asSeconds = function () {
        return this.as("s")
    }, vb.duration.fn.asMinutes = function () {
        return this.as("m")
    }, vb.duration.fn.asHours = function () {
        return this.as("h")
    }, vb.duration.fn.asDays = function () {
        return this.as("d")
    }, vb.duration.fn.asWeeks = function () {
        return this.as("weeks")
    }, vb.duration.fn.asMonths = function () {
        return this.as("M")
    }, vb.duration.fn.asYears = function () {
        return this.as("y")
    }, vb.locale("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (a) {
            var b = a % 10,
                c = 1 === C(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }
    }), Lb ? module.exports = vb : "function" == typeof define && define.amd ? (define(function (a, b, c) {
        return c.config && c.config() && c.config().noGlobal === !0 && (zb.moment = wb), vb
    }), ub(!0)) : ub()
}).call(this);

/*!
 * FullCalendar v2.2.6 & Google Calendar Extension
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 */
(function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], t) : t(jQuery, moment)
})(function (t, e) {
    function n(t) {
        i(Ee, t)
    }

    function i(e) {
        function n(n, s) {
            t.isPlainObject(s) && t.isPlainObject(e[n]) && !r(n) ? e[n] = i({}, e[n], s) : void 0 !== s && (e[n] = s)
        }
        for (var s = 1; arguments.length > s; s++) t.each(arguments[s], n);
        return e
    }

    function r(t) {
        return /(Time|Duration)$/.test(t)
    }

    function s(t) {
        var n = e.localeData || e.langData;
        return n.call(e, t) || n.call(e, "en")
    }

    function o(t, e) {
        e.left && t.css({
            "border-left-width": 1,
            "margin-left": e.left - 1
        }), e.right && t.css({
            "border-right-width": 1,
            "margin-right": e.right - 1
        })
    }

    function l(t) {
        t.css({
            "margin-left": "",
            "margin-right": "",
            "border-left-width": "",
            "border-right-width": ""
        })
    }

    function a() {
        t("body").addClass("fc-not-allowed")
    }

    function u() {
        t("body").removeClass("fc-not-allowed")
    }

    function d(e, n, i) {
        var r = Math.floor(n / e.length),
            s = Math.floor(n - r * (e.length - 1)),
            o = [],
            l = [],
            a = [],
            u = 0;
        c(e), e.each(function (n, i) {
            var d = n === e.length - 1 ? s : r,
                c = t(i).outerHeight(!0);
            d > c ? (o.push(i), l.push(c), a.push(t(i).height())) : u += c
        }), i && (n -= u, r = Math.floor(n / o.length), s = Math.floor(n - r * (o.length - 1))), t(o).each(function (e, n) {
            var i = e === o.length - 1 ? s : r,
                u = l[e],
                d = a[e],
                c = i - (u - d);
            i > u && t(n).height(c)
        })
    }

    function c(t) {
        t.height("")
    }

    function h(e) {
        var n = 0;
        return e.find("> *").each(function (e, i) {
            var r = t(i).outerWidth();
            r > n && (n = r)
        }), n++, e.width(n), n
    }

    function f(t, e) {
        return t.height(e).addClass("fc-scroller"), t[0].scrollHeight - 1 > t[0].clientHeight ? !0 : (g(t), !1)
    }

    function g(t) {
        t.height("").removeClass("fc-scroller")
    }

    function p(e) {
        var n = e.css("position"),
            i = e.parents().filter(function () {
                var e = t(this);
                return /(auto|scroll)/.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
            }).eq(0);
        return "fixed" !== n && i.length ? i : t(e[0].ownerDocument || document)
    }

    function m(t) {
        var e = t.offset().left,
            n = e + t.width(),
            i = t.children(),
            r = i.offset().left,
            s = r + i.outerWidth();
        return {
            left: r - e,
            right: n - s
        }
    }

    function v(t) {
        return 1 == t.which && !t.ctrlKey
    }

    function y(t, e) {
        var n, i, r, s, o = t.start,
            l = t.end,
            a = e.start,
            u = e.end;
        return l > a && u > o ? (o >= a ? (n = o.clone(), r = !0) : (n = a.clone(), r = !1), u >= l ? (i = l.clone(), s = !0) : (i = u.clone(), s = !1), {
            start: n,
            end: i,
            isStart: r,
            isEnd: s
        }) : void 0
    }

    function w(t, e) {
        if (t = t || {}, void 0 !== t[e]) return t[e];
        for (var n, i = e.split(/(?=[A-Z])/), r = i.length - 1; r >= 0; r--)
            if (n = t[i[r].toLowerCase()], void 0 !== n) return n;
        return t["default"]
    }

    function E(t, n) {
        return e.duration({
            days: t.clone().stripTime().diff(n.clone().stripTime(), "days"),
            ms: t.time() - n.time()
        })
    }

    function S(t, n) {
        return e.duration({
            days: t.clone().stripTime().diff(n.clone().stripTime(), "days")
        })
    }

    function b(t, e) {
        var n, i;
        for (n = 0; ze.length > n && (i = ze[n], !D(i, t, e)) ; n++);
        return i
    }

    function D(t, n, i) {
        var r;
        return r = null != i ? i.diff(n, t, !0) : e.isDuration(n) ? n.as(t) : n.end.diff(n.start, t, !0), r >= 1 && _(r) ? r : !1
    }

    function C(t) {
        return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
    }

    function T(t) {
        return /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(t)
    }

    function x(t) {
        var e = function () { };
        return e.prototype = t, new e
    }

    function H(t, e) {
        for (var n in t) R(t, n) && (e[n] = t[n])
    }

    function R(t, e) {
        return Le.call(t, e)
    }

    function k(e) {
        return /undefined|null|boolean|number|string/.test(t.type(e))
    }

    function M(e, n, i) {
        if (t.isFunction(e) && (e = [e]), e) {
            var r, s;
            for (r = 0; e.length > r; r++) s = e[r].apply(n, i) || s;
            return s
        }
    }

    function F() {
        for (var t = 0; arguments.length > t; t++)
            if (void 0 !== arguments[t]) return arguments[t]
    }

    function z(t) {
        return (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
    }

    function L(t) {
        return t.replace(/&.*?;/g, "")
    }

    function P(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }

    function V(t, e) {
        return t - e
    }

    function _(t) {
        return 0 === t % 1
    }

    function G(t, e) {
        var n, i, r, s, o = function () {
            var l = +new Date - s;
            e > l && l > 0 ? n = setTimeout(o, e - l) : (n = null, t.apply(r, i), n || (r = i = null))
        };
        return function () {
            r = this, i = arguments, s = +new Date, n || (n = setTimeout(o, e))
        }
    }

    function A(n, i, r) {
        var s, o, l, a, u = n[0],
            d = 1 == n.length && "string" == typeof u;
        return e.isMoment(u) ? (a = e.apply(null, n), Y(u, a)) : C(u) || void 0 === u ? a = e.apply(null, n) : (s = !1, o = !1, d ? Pe.test(u) ? (u += "-01", n = [u], s = !0, o = !0) : (l = Ve.exec(u)) && (s = !l[5], o = !0) : t.isArray(u) && (o = !0), a = i || s ? e.utc.apply(e, n) : e.apply(null, n), s ? (a._ambigTime = !0, a._ambigZone = !0) : r && (o ? a._ambigZone = !0 : d && a.zone(u))), a._fullCalendar = !0, a
    }

    function N(t, n) {
        var i, r, s = !1,
            o = !1,
            l = t.length,
            a = [];
        for (i = 0; l > i; i++) r = t[i], e.isMoment(r) || (r = De.moment.parseZone(r)), s = s || r._ambigTime, o = o || r._ambigZone, a.push(r);
        for (i = 0; l > i; i++) r = a[i], n || !s || r._ambigTime ? o && !r._ambigZone && (a[i] = r.clone().stripZone()) : a[i] = r.clone().stripTime();
        return a
    }

    function Y(t, e) {
        t._ambigTime ? e._ambigTime = !0 : e._ambigTime && (e._ambigTime = !1), t._ambigZone ? e._ambigZone = !0 : e._ambigZone && (e._ambigZone = !1)
    }

    function O(t, e) {
        t.year(e[0] || 0).month(e[1] || 0).date(e[2] || 0).hours(e[3] || 0).minutes(e[4] || 0).seconds(e[5] || 0).milliseconds(e[6] || 0)
    }

    function B(t, e) {
        return Ge.format.call(t, e)
    }

    function Z(t, e) {
        return I(t, U(e))
    }

    function I(t, e) {
        var n, i = "";
        for (n = 0; e.length > n; n++) i += W(t, e[n]);
        return i
    }

    function W(t, e) {
        var n, i;
        return "string" == typeof e ? e : (n = e.token) ? Ae[n] ? Ae[n](t) : B(t, n) : e.maybe && (i = I(t, e.maybe), i.match(/[1-9]/)) ? i : ""
    }

    function j(t, e, n, i, r) {
        var s;
        return t = De.moment.parseZone(t), e = De.moment.parseZone(e), s = (t.localeData || t.lang).call(t), n = s.longDateFormat(n) || n, i = i || " - ", X(t, e, U(n), i, r)
    }

    function X(t, e, n, i, r) {
        var s, o, l, a, u = "",
            d = "",
            c = "",
            h = "",
            f = "";
        for (o = 0; n.length > o && (s = $(t, e, n[o]), s !== !1) ; o++) u += s;
        for (l = n.length - 1; l > o && (s = $(t, e, n[l]), s !== !1) ; l--) d = s + d;
        for (a = o; l >= a; a++) c += W(t, n[a]), h += W(e, n[a]);
        return (c || h) && (f = r ? h + i + c : c + i + h), u + f + d
    }

    function $(t, e, n) {
        var i, r;
        return "string" == typeof n ? n : (i = n.token) && (r = Ne[i.charAt(0)], r && t.isSame(e, r)) ? B(t, i) : !1
    }

    function U(t) {
        return t in Ye ? Ye[t] : Ye[t] = q(t)
    }

    function q(t) {
        for (var e, n = [], i = /\[([^\]]*)\]|\(([^\)]*)\)|(LT|(\w)\4*o?)|([^\w\[\(]+)/g; e = i.exec(t) ;) e[1] ? n.push(e[1]) : e[2] ? n.push({
            maybe: q(e[2])
        }) : e[3] ? n.push({
            token: e[3]
        }) : e[5] && n.push(e[5]);
        return n
    }

    function K() { }

    function Q(t, e) {
        return t || e ? t && e ? t.grid === e.grid && t.row === e.row && t.col === e.col : !1 : !0
    }

    function J(t) {
        var e = ee(t);
        return "background" === e || "inverse-background" === e
    }

    function te(t) {
        return "inverse-background" === ee(t)
    }

    function ee(t) {
        return F((t.source || {}).rendering, t.rendering)
    }

    function ne(t) {
        var e, n, i = {};
        for (e = 0; t.length > e; e++) n = t[e], (i[n._id] || (i[n._id] = [])).push(n);
        return i
    }

    function ie(t, e) {
        return t.eventStartMS - e.eventStartMS
    }

    function re(t, e) {
        return t.eventStartMS - e.eventStartMS || e.eventDurationMS - t.eventDurationMS || e.event.allDay - t.event.allDay || (t.event.title || "").localeCompare(e.event.title)
    }

    function se(n) {
        var i, r, s, o, l = De.dataAttrPrefix;
        return l && (l += "-"), i = n.data(l + "event") || null, i && (i = "object" == typeof i ? t.extend({}, i) : {}, r = i.start, null == r && (r = i.time), s = i.duration, o = i.stick, delete i.start, delete i.time, delete i.duration, delete i.stick), null == r && (r = n.data(l + "start")), null == r && (r = n.data(l + "time")), null == s && (s = n.data(l + "duration")), null == o && (o = n.data(l + "stick")), r = null != r ? e.duration(r) : null, s = null != s ? e.duration(s) : null, o = Boolean(o), {
            eventProps: i,
            startTime: r,
            duration: s,
            stick: o
        }
    }

    function oe(t, e) {
        var n, i;
        for (n = 0; e.length > n; n++)
            if (i = e[n], i.leftCol <= t.rightCol && i.rightCol >= t.leftCol) return !0;
        return !1
    }

    function le(t, e) {
        return t.leftCol - e.leftCol
    }

    function ae(t) {
        var e, n, i;
        if (t.sort(re), e = ue(t), de(e), n = e[0]) {
            for (i = 0; n.length > i; i++) ce(n[i]);
            for (i = 0; n.length > i; i++) he(n[i], 0, 0)
        }
    }

    function ue(t) {
        var e, n, i, r = [];
        for (e = 0; t.length > e; e++) {
            for (n = t[e], i = 0; r.length > i && fe(n, r[i]).length; i++);
            n.level = i, (r[i] || (r[i] = [])).push(n)
        }
        return r
    }

    function de(t) {
        var e, n, i, r, s;
        for (e = 0; t.length > e; e++)
            for (n = t[e], i = 0; n.length > i; i++)
                for (r = n[i], r.forwardSegs = [], s = e + 1; t.length > s; s++) fe(r, t[s], r.forwardSegs)
    }

    function ce(t) {
        var e, n, i = t.forwardSegs,
            r = 0;
        if (void 0 === t.forwardPressure) {
            for (e = 0; i.length > e; e++) n = i[e], ce(n), r = Math.max(r, 1 + n.forwardPressure);
            t.forwardPressure = r
        }
    }

    function he(t, e, n) {
        var i, r = t.forwardSegs;
        if (void 0 === t.forwardCoord)
            for (r.length ? (r.sort(pe), he(r[0], e + 1, n), t.forwardCoord = r[0].backwardCoord) : t.forwardCoord = 1, t.backwardCoord = t.forwardCoord - (t.forwardCoord - n) / (e + 1), i = 0; r.length > i; i++) he(r[i], 0, t.forwardCoord)
    }

    function fe(t, e, n) {
        n = n || [];
        for (var i = 0; e.length > i; i++) ge(t, e[i]) && n.push(e[i]);
        return n
    }

    function ge(t, e) {
        return t.bottom > e.top && t.top < e.bottom
    }

    function pe(t, e) {
        return e.forwardPressure - t.forwardPressure || (t.backwardCoord || 0) - (e.backwardCoord || 0) || re(t, e)
    }

    function me(n, r) {
        function o(t) {
            return (t.locale || t.lang).call(t, J.lang).humanize()
        }

        function l(t) {
            re ? d() && (v(), c(t)) : a()
        }

        function a() {
            se = J.theme ? "ui" : "fc", n.addClass("fc"), J.isRTL ? n.addClass("fc-rtl") : n.addClass("fc-ltr"), J.theme ? n.addClass("ui-widget") : n.addClass("fc-unthemed"), re = t("<div class='fc-view-container'/>").prependTo(n), ne = new ve(K, J), ie = ne.render(), ie && n.prepend(ie), c(J.defaultView), J.handleWindowResize && (ae = G(w, J.windowResizeDelay), t(window).resize(ae))
        }

        function u() {
            oe && oe.destroyView(), ne.destroy(), re.remove(), n.removeClass("fc fc-ltr fc-rtl fc-unthemed ui-widget"), t(window).unbind("resize", ae)
        }

        function d() {
            return n.is(":visible")
        }

        function c(e) {
            ge++, oe && e && oe.type !== e && (ne.deactivateButton(oe.type), W(), oe.start && oe.destroyView(), oe.el.remove(), oe = null), !oe && e && (oe = h(e), oe.el = t("<div class='fc-view fc-" + e + "-view' />").appendTo(re), ne.activateButton(e)), oe && (ue = oe.massageCurrentDate(ue), oe.start && ue.isWithin(oe.intervalStart, oe.intervalEnd) || d() && (W(), oe.start && oe.destroyView(), oe.setDate(ue), oe.renderView(), j(), M(), F(), T())), j(), ge--
        }

        function h(t) {
            var e = f(t);
            return new e["class"](K, e.options, t)
        }

        function f(n) {
            function i(e) {
                "function" == typeof e ? s = e : "object" == typeof e && t.extend(r, e)
            }
            var r, s, l, a, u, d = J.defaultButtonText || {},
                c = J.buttonText || {},
                h = J.views || {},
                f = n,
                g = [],
                p = !1;
            if (fe[n]) return fe[n];
            for (; f && !s;) r = {}, i(Ce[f]), i(h[f]), g.unshift(r), f = r.type;
            return g.unshift({}), r = t.extend.apply(t, g), s ? (l = r.duration || s.duration, l && (l = e.duration(l), a = b(l), p = 1 === D(a, l)), p && h[a] && (r = t.extend({}, h[a], r)), u = c[n] || (p ? c[a] : null) || d[n] || (p ? d[a] : null) || r.buttonText || s.buttonText || (l ? o(l) : null) || n, fe[n] = {
                "class": s,
                options: r,
                buttonText: u
            }) : void 0
        }

        function g(t) {
            return Boolean(f(t))
        }

        function p(t) {
            var e = f(t);
            return e ? e.buttonText : void 0
        }

        function m(t) {
            return d() ? (t && y(), ge++, oe.updateSize(!0), ge--, !0) : void 0
        }

        function v() {
            d() && y()
        }

        function y() {
            le = "number" == typeof J.contentHeight ? J.contentHeight : "number" == typeof J.height ? J.height - (ie ? ie.outerHeight(!0) : 0) : Math.round(re.width() / Math.max(J.aspectRatio, .5))
        }

        function w(t) {
            !ge && t.target === window && oe.start && m(!0) && oe.trigger("windowResize", he)
        }

        function E() {
            C(), H()
        }

        function S() {
            d() && (W(), oe.destroyViewEvents(), oe.renderViewEvents(pe), j())
        }

        function C() {
            W(), oe.destroyViewEvents(), j()
        }

        function T() {
            !J.lazyFetching || de(oe.start, oe.end) ? H() : S()
        }

        function H() {
            ce(oe.start, oe.end)
        }

        function R(t) {
            pe = t, S()
        }

        function k() {
            S()
        }

        function M() {
            oe.updateTitle(), ne.updateTitle(oe.title)
        }

        function F() {
            var t = K.getNow();
            t.isWithin(oe.intervalStart, oe.intervalEnd) ? ne.disableButton("today") : ne.enableButton("today")
        }

        function z(t, e) {
            t = K.moment(t), e = e ? K.moment(e) : t.hasTime() ? t.clone().add(K.defaultTimedEventDuration) : t.clone().add(K.defaultAllDayEventDuration), oe.select({
                start: t,
                end: e
            })
        }

        function L() {
            oe && oe.unselect()
        }

        function V() {
            ue = oe.computePrevDate(ue), c()
        }

        function _() {
            ue = oe.computeNextDate(ue), c()
        }

        function A() {
            ue.add(-1, "years"), c()
        }

        function N() {
            ue.add(1, "years"), c()
        }

        function Y() {
            ue = K.getNow(), c()
        }

        function O(t) {
            ue = K.moment(t), c()
        }

        function B(t) {
            ue.add(e.duration(t)), c()
        }

        function Z(t, e) {
            var n, i;
            e && g(e) || (e = e || "day", n = ne.getViewsWithButtons().join(" "), i = n.match(RegExp("\\w+" + P(e))), i || (i = n.match(/\w+Day/)), e = i ? i[0] : "agendaDay"), ue = t, c(e)
        }

        function I() {
            return ue.clone()
        }

        function W() {
            re.css({
                width: "100%",
                height: re.height(),
                overflow: "hidden"
            })
        }

        function j() {
            re.css({
                width: "",
                height: "",
                overflow: ""
            })
        }

        function X() {
            return K
        }

        function $() {
            return oe
        }

        function U(t, e) {
            return void 0 === e ? J[t] : (("height" == t || "contentHeight" == t || "aspectRatio" == t) && (J[t] = e, m(!0)), void 0)
        }

        function q(t, e) {
            return J[t] ? J[t].apply(e || he, Array.prototype.slice.call(arguments, 2)) : void 0
        }
        var K = this;
        r = r || {};
        var Q, J = i({}, Ee, r);
        Q = J.lang in Te ? Te[J.lang] : Te[Ee.lang], Q && (J = i({}, Ee, Q, r)), J.isRTL && (J = i({}, Ee, be, Q || {}, r)), K.options = J, K.render = l, K.destroy = u, K.refetchEvents = E, K.reportEvents = R, K.reportEventChange = k, K.rerenderEvents = S, K.changeView = c, K.select = z, K.unselect = L, K.prev = V, K.next = _, K.prevYear = A, K.nextYear = N, K.today = Y, K.gotoDate = O, K.incrementDate = B, K.zoomTo = Z, K.getDate = I, K.getCalendar = X, K.getView = $, K.option = U, K.trigger = q, K.isValidViewType = g, K.getViewButtonText = p;
        var te = x(s(J.lang));
        if (J.monthNames && (te._months = J.monthNames), J.monthNamesShort && (te._monthsShort = J.monthNamesShort), J.dayNames && (te._weekdays = J.dayNames), J.dayNamesShort && (te._weekdaysShort = J.dayNamesShort), null != J.firstDay) {
            var ee = x(te._week);
            ee.dow = J.firstDay, te._week = ee
        }
        K.defaultAllDayEventDuration = e.duration(J.defaultAllDayEventDuration), K.defaultTimedEventDuration = e.duration(J.defaultTimedEventDuration), K.moment = function () {
            var t;
            return "local" === J.timezone ? (t = De.moment.apply(null, arguments), t.hasTime() && t.local()) : t = "UTC" === J.timezone ? De.moment.utc.apply(null, arguments) : De.moment.parseZone.apply(null, arguments), "_locale" in t ? t._locale = te : t._lang = te, t
        }, K.getIsAmbigTimezone = function () {
            return "local" !== J.timezone && "UTC" !== J.timezone
        }, K.rezoneDate = function (t) {
            return K.moment(t.toArray())
        }, K.getNow = function () {
            var t = J.now;
            return "function" == typeof t && (t = t()), K.moment(t)
        }, K.calculateWeekNumber = function (t) {
            var e = J.weekNumberCalculation;
            return "function" == typeof e ? e(t) : "local" === e ? t.week() : "ISO" === e.toUpperCase() ? t.isoWeek() : void 0
        }, K.getEventEnd = function (t) {
            return t.end ? t.end.clone() : K.getDefaultEventEnd(t.allDay, t.start)
        }, K.getDefaultEventEnd = function (t, e) {
            var n = e.clone();
            return t ? n.stripTime().add(K.defaultAllDayEventDuration) : n.add(K.defaultTimedEventDuration), K.getIsAmbigTimezone() && n.stripZone(), n
        }, ye.call(K, J);
        var ne, ie, re, se, oe, le, ae, ue, de = K.isFetchNeeded,
            ce = K.fetchEvents,
            he = n[0],
            fe = {},
            ge = 0,
            pe = [];
        ue = null != J.defaultDate ? K.moment(J.defaultDate) : K.getNow(), K.getSuggestedViewHeight = function () {
            return void 0 === le && v(), le
        }, K.isHeightAuto = function () {
            return "auto" === J.contentHeight || "auto" === J.height
        }
    }

    function ve(e, n) {
        function i() {
            var e = n.header;
            return f = n.theme ? "ui" : "fc", e ? g = t("<div class='fc-toolbar'/>").append(s("left")).append(s("right"))
                //.append("<div class='fc-center'><button type='button' class='btn btn-primary' onclick='Calendario.novo()'>Agendar horário</button></div>")
                .append('<div class="fc-clear"/>') : void 0
        }

        function r() {
            g.remove()
        }

        function s(i) {
            var r = t('<div class="fc-' + i + '"/>'),
                s = n.header[i];
            return s && t.each(s.split(" "), function () {
                var i, s = t(),
                    o = !0;
                t.each(this.split(","), function (i, r) {
                    var l, a, u, d, c, h, g, m, v;
                    "title" == r ? (s = s.add(t("<h2>&nbsp;</h2>")), o = !1) : (e[r] ? l = function () {
                        e[r]()
                    } : e.isValidViewType(r) && (l = function () {
                        e.changeView(r)
                    }, p.push(r), c = e.getViewButtonText(r)), l && (a = w(n.themeButtonIcons, r), u = w(n.buttonIcons, r), d = w(n.defaultButtonText, r), h = w(n.buttonText, r), g = c || h ? z(c || h) : a && n.theme ? "<span class='ui-icon ui-icon-" + a + "'></span>" : u && !n.theme ? "<span class='fc-icon fc-icon-" + u + "'></span>" : z(d || r), m = ["fc-" + r + "-button", f + "-button", f + "-state-default"], v = t('<button type="button" class="' + m.join(" ") + '">' + g + "</button>").click(function () {
                        v.hasClass(f + "-state-disabled") || (l(), (v.hasClass(f + "-state-active") || v.hasClass(f + "-state-disabled")) && v.removeClass(f + "-state-hover"))
                    }).mousedown(function () {
                        v.not("." + f + "-state-active").not("." + f + "-state-disabled").addClass(f + "-state-down")
                    }).mouseup(function () {
                        v.removeClass(f + "-state-down")
                    }).hover(function () {
                        v.not("." + f + "-state-active").not("." + f + "-state-disabled").addClass(f + "-state-hover")
                    }, function () {
                        v.removeClass(f + "-state-hover").removeClass(f + "-state-down")
                    }), s = s.add(v)))
                }), o && s.first().addClass(f + "-corner-left").end().last().addClass(f + "-corner-right").end(), s.length > 1 ? (i = t("<div/>"), o && i.addClass("fc-button-group"), i.append(s), r.append(i)) : r.append(s)
            }), r
        }

        function o(t) {
            g.find("h2").text(t)
        }

        function l(t) {
            g.find(".fc-" + t + "-button").addClass(f + "-state-active")
        }

        function a(t) {
            g.find(".fc-" + t + "-button").removeClass(f + "-state-active")
        }

        function u(t) {
            g.find(".fc-" + t + "-button").attr("disabled", "disabled").addClass(f + "-state-disabled")
        }

        function d(t) {
            g.find(".fc-" + t + "-button").removeAttr("disabled").removeClass(f + "-state-disabled")
        }

        function c() {
            return p
        }
        var h = this;
        h.render = i, h.destroy = r, h.updateTitle = o, h.activateButton = l, h.deactivateButton = a, h.disableButton = u, h.enableButton = d, h.getViewsWithButtons = c;
        var f, g = t(),
            p = []
    }

    function ye(n) {
        function i(t, e) {
            return !B || t.clone().stripZone() < B.clone().stripZone() || e.clone().stripZone() > Z.clone().stripZone()
        }

        function r(t, e) {
            B = t, Z = e, Q = [];
            var n = ++U,
                i = $.length;
            q = i;
            for (var r = 0; i > r; r++) s($[r], n)
        }

        function s(e, n) {
            o(e, function (i) {
                var r, s, o, l = t.isArray(e.events);
                if (n == U) {
                    if (i)
                        for (r = 0; i.length > r; r++) s = i[r], o = l ? s : b(s, e), o && Q.push.apply(Q, H(o));
                    q--, q || j(Q)
                }
            })
        }

        function o(e, i) {
            var r, s, l = De.sourceFetchers;
            for (r = 0; l.length > r; r++) {
                if (s = l[r].call(O, e, B.clone(), Z.clone(), n.timezone, i), s === !0) return;
                if ("object" == typeof s) return o(s, i), void 0
            }
            var a = e.events;
            if (a) t.isFunction(a) ? (y(), a.call(O, B.clone(), Z.clone(), n.timezone, function (t) {
                i(t), w()
            })) : t.isArray(a) ? i(a) : i();
            else {
                var u = e.url;
                if (u) {
                    var d, c = e.success,
                        h = e.error,
                        f = e.complete;
                    d = t.isFunction(e.data) ? e.data() : e.data;
                    var g = t.extend({}, d || {}),
                        p = F(e.startParam, n.startParam),
                        m = F(e.endParam, n.endParam),
                        v = F(e.timezoneParam, n.timezoneParam);
                    p && (g[p] = B.format()), m && (g[m] = Z.format()), n.timezone && "local" != n.timezone && (g[v] = n.timezone), y(), t.ajax(t.extend({}, Ke, e, {
                        data: g,
                        success: function (e) {
                            e = e || [];
                            var n = M(c, this, arguments);
                            t.isArray(n) && (e = n), i(e)
                        },
                        error: function () {
                            M(h, this, arguments), i()
                        },
                        complete: function () {
                            M(f, this, arguments), w()
                        }
                    }))
                } else i()
            }
        }

        function l(t) {
            var e = a(t);
            e && ($.push(e), q++, s(e, U))
        }

        function a(e) {
            var n, i, r = De.sourceNormalizers;
            if (t.isFunction(e) || t.isArray(e) ? n = {
                events: e
            } : "string" == typeof e ? n = {
                url: e
            } : "object" == typeof e && (n = t.extend({}, e)), n) {
                for (n.className ? "string" == typeof n.className && (n.className = n.className.split(/\s+/)) : n.className = [], t.isArray(n.events) && (n.origArray = n.events, n.events = t.map(n.events, function (t) {
                        return b(t, n)
                })), i = 0; r.length > i; i++) r[i].call(O, n);
                return n
            }
        }

        function u(e) {
            $ = t.grep($, function (t) {
                return !d(t, e)
            }), Q = t.grep(Q, function (t) {
                return !d(t.source, e)
            }), j(Q)
        }

        function d(t, e) {
            return t && e && c(t) == c(e)
        }

        function c(t) {
            return ("object" == typeof t ? t.origArray || t.googleCalendarId || t.url || t.events : null) || t
        }

        function h(t) {
            t.start = O.moment(t.start), t.end = t.end ? O.moment(t.end) : null, R(t, f(t)), j(Q)
        }

        function f(e) {
            var n = {};
            return t.each(e, function (t, e) {
                g(t) && void 0 !== e && k(e) && (n[t] = e)
            }), n
        }

        function g(t) {
            return !/^_|^(id|allDay|start|end)$/.test(t)
        }

        function p(t, e) {
            var n, i, r, s = b(t);
            if (s) {
                for (n = H(s), i = 0; n.length > i; i++) r = n[i], r.source || (e && (X.events.push(r), r.source = X), Q.push(r));
                return j(Q), n
            }
            return []
        }

        function m(e) {
            var n, i;
            for (null == e ? e = function () {
                    return !0
            } : t.isFunction(e) || (n = e + "", e = function (t) {
                    return t._id == n
            }), Q = t.grep(Q, e, !0), i = 0; $.length > i; i++) t.isArray($[i].events) && ($[i].events = t.grep($[i].events, e, !0));
            j(Q)
        }

        function v(e) {
            return t.isFunction(e) ? t.grep(Q, e) : null != e ? (e += "", t.grep(Q, function (t) {
                return t._id == e
            })) : Q
        }

        function y() {
            K++ || I("loading", null, !0, W())
        }

        function w() {
            --K || I("loading", null, !1, W())
        }

        function b(i, r) {
            var s, o, l, a = {};
            if (n.eventDataTransform && (i = n.eventDataTransform(i)), r && r.eventDataTransform && (i = r.eventDataTransform(i)), t.extend(a, i), r && (a.source = r), a._id = i._id || (void 0 === i.id ? "_fc" + Qe++ : i.id + ""), a.className = i.className ? "string" == typeof i.className ? i.className.split(/\s+/) : i.className : [], s = i.start || i.date, o = i.end, T(s) && (s = e.duration(s)), T(o) && (o = e.duration(o)), i.dow || e.isDuration(s) || e.isDuration(o)) a.start = s ? e.duration(s) : null, a.end = o ? e.duration(o) : null, a._recurring = !0;
            else {
                if (s && (s = O.moment(s), !s.isValid())) return !1;
                o && (o = O.moment(o), o.isValid() || (o = null)), l = i.allDay, void 0 === l && (l = F(r ? r.allDayDefault : void 0, n.allDayDefault)), D(s, o, l, a)
            }
            return a
        }

        function D(t, e, n, i) {
            i.start = t, i.end = e, i.allDay = n, C(i), we(i)
        }

        function C(t) {
            null == t.allDay && (t.allDay = !(t.start.hasTime() || t.end && t.end.hasTime())), t.allDay ? (t.start.stripTime(), t.end && t.end.stripTime()) : (t.start.hasTime() || (t.start = O.rezoneDate(t.start)), t.end && !t.end.hasTime() && (t.end = O.rezoneDate(t.end))), t.end && !t.end.isAfter(t.start) && (t.end = null), t.end || (t.end = n.forceEventDuration ? O.getDefaultEventEnd(t.allDay, t.start) : null)
        }

        function x(t) {
            var e;
            return t.end || (e = t.allDay, null == e && (e = !t.start.hasTime()), t = {
                start: t.start,
                end: O.getDefaultEventEnd(e, t.start)
            }), t
        }

        function H(e, n, i) {
            var r, s, o, l, a, u, d, c, h, f = [];
            if (n = n || B, i = i || Z, e)
                if (e._recurring) {
                    if (s = e.dow)
                        for (r = {}, o = 0; s.length > o; o++) r[s[o]] = !0;
                    for (l = n.clone().stripTime() ; l.isBefore(i) ;) (!r || r[l.day()]) && (a = e.start, u = e.end, d = l.clone(), c = null, a && (d = d.time(a)), u && (c = l.clone().time(u)), h = t.extend({}, e), D(d, c, !a && !u, h), f.push(h)), l.add(1, "days")
                } else f.push(e);
            return f
        }

        function R(e, n) {
            var i, r, s, o, l = {};
            return n = n || {}, n.start || (n.start = e.start.clone()), void 0 === n.end && (n.end = e.end ? e.end.clone() : null), null == n.allDay && (n.allDay = e.allDay), C(n), i = null !== e._end && null === n.end, r = n.allDay ? S(n.start, e._start) : E(n.start, e._start), !i && n.end && (s = E(n.end, n.start).subtract(E(e._end || O.getDefaultEventEnd(e._allDay, e._start), e._start))), t.each(n, function (t, e) {
                g(t) && void 0 !== e && (l[t] = e)
            }), o = z(v(e._id), i, n.allDay, r, s, l), {
                dateDelta: r,
                durationDelta: s,
                undo: o
            }
        }

        function z(e, n, i, r, s, o) {
            var l = O.getIsAmbigTimezone(),
                a = [];
            return r && !r.valueOf() && (r = null), s && !s.valueOf() && (s = null), t.each(e, function (e, u) {
                var d, c;
                d = {
                    start: u.start.clone(),
                    end: u.end ? u.end.clone() : null,
                    allDay: u.allDay
                }, t.each(o, function (t) {
                    d[t] = u[t]
                }), c = {
                    start: u._start,
                    end: u._end,
                    allDay: u._allDay
                }, n && (c.end = null), c.allDay = i, C(c), r && (c.start.add(r), c.end && c.end.add(r)), s && (c.end || (c.end = O.getDefaultEventEnd(c.allDay, c.start)), c.end.add(s)), l && !c.allDay && (r || s) && (c.start.stripZone(), c.end && c.end.stripZone()), t.extend(u, o, c), we(u), a.push(function () {
                    t.extend(u, d), we(u)
                })
            }),
                function () {
                    for (var t = 0; a.length > t; t++) a[t]()
                }
        }

        function L() {
            var e, i = n.businessHours,
                r = {
                    className: "fc-nonbusiness",
                    start: "09:00",
                    end: "17:00",
                    dow: [1, 2, 3, 4, 5],
                    rendering: "inverse-background"
                },
                s = O.getView();
            return i && (e = "object" == typeof i ? t.extend({}, r, i) : r), e ? H(b(e), s.start, s.end) : []
        }

        function P(t, e) {
            var i = e.source || {},
                r = F(e.constraint, i.constraint, n.eventConstraint),
                s = F(e.overlap, i.overlap, n.eventOverlap);
            return t = x(t), G(t, r, s, e)
        }

        function V(t) {
            return G(t, n.selectConstraint, n.selectOverlap)
        }

        function _(e, n) {
            var i, r;
            return n && (i = t.extend({}, n, e), r = H(b(i))[0]), r ? P(e, r) : (e = x(e), V(e))
        }

        function G(t, e, n, i) {
            var r, s, o, l, a;
            if (t = {
                start: t.start.clone().stripZone(),
                end: t.end.clone().stripZone()
            }, null != e) {
                for (r = A(e), s = !1, o = 0; r.length > o; o++)
                    if (N(r[o], t)) {
                        s = !0;
                        break
                    }
                if (!s) return !1
            }
            for (o = 0; Q.length > o; o++)
                if (l = Q[o], (!i || i._id !== l._id) && Y(l, t)) {
                    if (n === !1) return !1;
                    if ("function" == typeof n && !n(l, i)) return !1;
                    if (i) {
                        if (a = F(l.overlap, (l.source || {}).overlap), a === !1) return !1;
                        if ("function" == typeof a && !a(i, l)) return !1
                    }
                }
            return !0
        }

        function A(t) {
            return "businessHours" === t ? L() : "object" == typeof t ? H(b(t)) : v(t)
        }

        function N(t, e) {
            var n = t.start.clone().stripZone(),
                i = O.getEventEnd(t).stripZone();
            return e.start >= n && i >= e.end
        }

        function Y(t, e) {
            var n = t.start.clone().stripZone(),
                i = O.getEventEnd(t).stripZone();
            return i > e.start && e.end > n
        }
        var O = this;
        O.isFetchNeeded = i, O.fetchEvents = r, O.addEventSource = l, O.removeEventSource = u, O.updateEvent = h, O.renderEvent = p, O.removeEvents = m, O.clientEvents = v, O.mutateEvent = R, O.normalizeEventDateProps = C, O.ensureVisibleEventRange = x;
        var B, Z, I = O.trigger,
            W = O.getView,
            j = O.reportEvents,
            X = {
                events: []
            },
            $ = [X],
            U = 0,
            q = 0,
            K = 0,
            Q = [];
        t.each((n.events ? [n.events] : []).concat(n.eventSources || []), function (t, e) {
            var n = a(e);
            n && $.push(n)
        }), O.getBusinessHoursEvents = L, O.isEventRangeAllowed = P, O.isSelectionRangeAllowed = V, O.isExternalDropRangeAllowed = _
    }

    function we(t) {
        t._allDay = t.allDay, t._start = t.start.clone(), t._end = t.end ? t.end.clone() : null
    }
    var Ee = {
        titleRangeSeparator: " — ",
        monthYearFormat: "MMMM YYYY",
        defaultTimedEventDuration: "02:00:00",
        defaultAllDayEventDuration: {
            days: 1
        },
        forceEventDuration: !1,
        nextDayThreshold: "09:00:00",
        defaultView: "month",
        aspectRatio: 1.35,
        header: {
            left: "title",
            center: "",
            right: "today prev,next"
        },
        weekends: !0,
        weekNumbers: !1,
        weekNumberTitle: "W",
        weekNumberCalculation: "local",
        lazyFetching: !0,
        startParam: "start",
        endParam: "end",
        localParam: "local",
        timezoneParam: "timezone",
        timezone: !1,
        isRTL: !1,
        defaultButtonText: {
            prev: "Anterior",
            next: "Próximo",
            prevYear: "Ano passado",
            nextYear: "Próximo ano",
            today: "Hoje",
            month: "Mês",
            week: "Semana",
            day: "Dia"
        },
        buttonIcons: {
            prev: "left-single-arrow",
            next: "right-single-arrow",
            prevYear: "left-double-arrow",
            nextYear: "right-double-arrow"
        },
        theme: !1,
        themeButtonIcons: {
            prev: "circle-triangle-w",
            next: "circle-triangle-e",
            prevYear: "seek-prev",
            nextYear: "seek-next"
        },
        dragOpacity: .75,
        dragRevertDuration: 500,
        dragScroll: !0,
        unselectAuto: !0,
        dropAccept: "*",
        eventLimit: !1,
        eventLimitText: "more",
        eventLimitClick: "popover",
        dayPopoverFormat: "LL",
        handleWindowResize: !0,
        windowResizeDelay: 200
    },
        Se = {
            dayPopoverFormat: "dddd, MMMM D"
        },
        be = {
            header: {
                left: "next,prev today",
                center: "",
                right: "title"
            },
            buttonIcons: {
                prev: "right-single-arrow",
                next: "left-single-arrow",
                prevYear: "right-double-arrow",
                nextYear: "left-double-arrow"
            },
            themeButtonIcons: {
                prev: "circle-triangle-e",
                next: "circle-triangle-w",
                nextYear: "seek-prev",
                prevYear: "seek-next"
            }
        },
        De = t.fullCalendar = {
            version: "2.2.6"
        },
        Ce = De.views = {};
    t.fn.fullCalendar = function (e) {
        var n = Array.prototype.slice.call(arguments, 1),
            i = this;
        return this.each(function (r, s) {
            var o, l = t(s),
                a = l.data("fullCalendar");
            "string" == typeof e ? a && t.isFunction(a[e]) && (o = a[e].apply(a, n), r || (i = o), "destroy" === e && l.removeData("fullCalendar")) : a || (a = new me(l, e), l.data("fullCalendar", a), a.render())
        }), i
    };
    var Te = De.langs = {};
    De.datepickerLang = function (e, n, i) {
        var r = Te[e] || (Te[e] = {});
        r.isRTL = i.isRTL, r.weekNumberTitle = i.weekHeader, t.each(xe, function (t, e) {
            r[t] = e(i)
        }), t.datepicker && (t.datepicker.regional[n] = t.datepicker.regional[e] = i, t.datepicker.regional.en = t.datepicker.regional[""], t.datepicker.setDefaults(i))
    }, De.lang = function (e, n) {
        var r, o;
        r = Te[e] || (Te[e] = {}), n && i(r, n), o = s(e), t.each(He, function (t, e) {
            void 0 === r[t] && (r[t] = e(o, r))
        }), Ee.lang = e
    };
    var xe = {
        defaultButtonText: function (t) {
            return {
                prev: L(t.prevText),
                next: L(t.nextText),
                today: L(t.currentText)
            }
        },
        monthYearFormat: function (t) {
            return t.showMonthAfterYear ? "YYYY[" + t.yearSuffix + "] MMMM" : "MMMM YYYY[" + t.yearSuffix + "]"
        }
    },
        He = {
            dayOfMonthFormat: function (t, e) {
                var n = t.longDateFormat("l");
                return n = n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""), e.isRTL ? n += " ddd" : n = "ddd " + n, n
            },
            smallTimeFormat: function (t) {
                return t.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a")
            },
            extraSmallTimeFormat: function (t) {
                return t.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t")
            },
            noMeridiemTimeFormat: function (t) {
                return t.longDateFormat("LT").replace(/\s*a$/i, "")
            }
        };
    De.lang("en", Se), De.intersectionToSeg = y, De.applyAll = M, De.debounce = G;
    var Re, ke, Me, Fe = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
        ze = ["year", "month", "week", "day", "hour", "minute", "second", "millisecond"],
        Le = {}.hasOwnProperty,
        Pe = /^\s*\d{4}-\d\d$/,
        Ve = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,
        _e = e.fn,
        Ge = t.extend({}, _e);
    De.moment = function () {
        return A(arguments)
    }, De.moment.utc = function () {
        var t = A(arguments, !0);
        return t.hasTime() && t.utc(), t
    }, De.moment.parseZone = function () {
        return A(arguments, !0, !0)
    }, _e.clone = function () {
        var t = Ge.clone.apply(this, arguments);
        return Y(this, t), this._fullCalendar && (t._fullCalendar = !0), t
    }, _e.time = function (t) {
        if (!this._fullCalendar) return Ge.time.apply(this, arguments);
        if (null == t) return e.duration({
            hours: this.hours(),
            minutes: this.minutes(),
            seconds: this.seconds(),
            milliseconds: this.milliseconds()
        });
        this._ambigTime = !1, e.isDuration(t) || e.isMoment(t) || (t = e.duration(t));
        var n = 0;
        return e.isDuration(t) && (n = 24 * Math.floor(t.asDays())), this.hours(n + t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds())
    }, _e.stripTime = function () {
        var t;
        return this._ambigTime || (t = this.toArray(), this.utc(), ke(this, t.slice(0, 3)), this._ambigTime = !0, this._ambigZone = !0), this
    }, _e.hasTime = function () {
        return !this._ambigTime
    }, _e.stripZone = function () {
        var t, e;
        return this._ambigZone || (t = this.toArray(), e = this._ambigTime, this.utc(), ke(this, t), e && (this._ambigTime = !0), this._ambigZone = !0), this
    }, _e.hasZone = function () {
        return !this._ambigZone
    }, t.each(["utcOffset", "zone"], function (t, e) {
        Ge[e] && (_e[e] = function (t) {
            return null != t && (this._ambigTime = !1, this._ambigZone = !1), Ge[e].apply(this, arguments)
        })
    }), _e.local = function () {
        var t = this.toArray(),
            e = this._ambigZone;
        return Ge.local.apply(this, arguments), e && Me(this, t), this
    }, _e.format = function () {
        return this._fullCalendar && arguments[0] ? Z(this, arguments[0]) : this._ambigTime ? B(this, "YYYY-MM-DD") : this._ambigZone ? B(this, "YYYY-MM-DD[T]HH:mm:ss") : Ge.format.apply(this, arguments)
    }, _e.toISOString = function () {
        return this._ambigTime ? B(this, "YYYY-MM-DD") : this._ambigZone ? B(this, "YYYY-MM-DD[T]HH:mm:ss") : Ge.toISOString.apply(this, arguments)
    }, _e.isWithin = function (t, e) {
        var n = N([this, t, e]);
        return n[0] >= n[1] && n[0] < n[2]
    }, _e.isSame = function (t, e) {
        var n;
        return this._fullCalendar ? e ? (n = N([this, t], !0), Ge.isSame.call(n[0], n[1], e)) : (t = De.moment.parseZone(t), Ge.isSame.call(this, t) && Boolean(this._ambigTime) === Boolean(t._ambigTime) && Boolean(this._ambigZone) === Boolean(t._ambigZone)) : Ge.isSame.apply(this, arguments)
    }, t.each(["isBefore", "isAfter"], function (t, e) {
        _e[e] = function (t, n) {
            var i;
            return this._fullCalendar ? (i = N([this, t]), Ge[e].call(i[0], i[1], n)) : Ge[e].apply(this, arguments)
        }
    }), Re = "_d" in e() && "updateOffset" in e, ke = Re ? function (t, n) {
        t._d.setTime(Date.UTC.apply(Date, n)), e.updateOffset(t, !1)
    } : O, Me = Re ? function (t, n) {
        t._d.setTime(+new Date(n[0] || 0, n[1] || 0, n[2] || 0, n[3] || 0, n[4] || 0, n[5] || 0, n[6] || 0)), e.updateOffset(t, !1)
    } : O;
    var Ae = {
        t: function (t) {
            return B(t, "a").charAt(0)
        },
        T: function (t) {
            return B(t, "A").charAt(0)
        }
    };
    De.formatRange = j;
    var Ne = {
        Y: "year",
        M: "month",
        D: "day",
        d: "day",
        A: "second",
        a: "second",
        T: "second",
        t: "second",
        H: "second",
        h: "second",
        m: "second",
        s: "second"
    },
        Ye = {};
    De.Class = K, K.extend = function (t) {
        var e, n = this;
        return t = t || {}, R(t, "constructor") && (e = t.constructor), "function" != typeof e && (e = t.constructor = function () {
            n.apply(this, arguments)
        }), e.prototype = x(n.prototype), H(t, e.prototype), H(n, e), e
    }, K.mixin = function (t) {
        H(t.prototype || t, this.prototype)
    };
    var Oe = K.extend({
        isHidden: !0,
        options: null,
        el: null,
        documentMousedownProxy: null,
        margin: 10,
        constructor: function (t) {
            this.options = t || {}
        },
        show: function () {
            this.isHidden && (this.el || this.render(), this.el.show(), this.position(), this.isHidden = !1, this.trigger("show"))
        },
        hide: function () {
            this.isHidden || (this.el.hide(), this.isHidden = !0, this.trigger("hide"))
        },
        render: function () {
            var e = this,
                n = this.options;
            this.el = t('<div class="fc-popover"/>').addClass(n.className || "").css({
                top: 0,
                left: 0
            }).append(n.content).appendTo(n.parentEl), this.el.on("click", ".fc-close", function () {
                e.hide()
            }), n.autoHide && t(document).on("mousedown", this.documentMousedownProxy = t.proxy(this, "documentMousedown"))
        },
        documentMousedown: function (e) {
            this.el && !t(e.target).closest(this.el).length && this.hide()
        },
        destroy: function () {
            this.hide(), this.el && (this.el.remove(), this.el = null), t(document).off("mousedown", this.documentMousedownProxy)
        },
        position: function () {
            var e, n, i, r, s, o = this.options,
                l = this.el.offsetParent().offset(),
                a = this.el.outerWidth(),
                u = this.el.outerHeight(),
                d = t(window),
                c = p(this.el);
            r = o.top || 0, s = void 0 !== o.left ? o.left : void 0 !== o.right ? o.right - a : 0, c.is(window) || c.is(document) ? (c = d, e = 0, n = 0) : (i = c.offset(), e = i.top, n = i.left), e += d.scrollTop(), n += d.scrollLeft(), o.viewportConstrain !== !1 && (r = Math.min(r, e + c.outerHeight() - u - this.margin), r = Math.max(r, e + this.margin), s = Math.min(s, n + c.outerWidth() - a - this.margin), s = Math.max(s, n + this.margin)), this.el.css({
                top: r - l.top,
                left: s - l.left
            })
        },
        trigger: function (t) {
            this.options[t] && this.options[t].apply(this, Array.prototype.slice.call(arguments, 1))
        }
    }),
        Be = K.extend({
            grid: null,
            rowCoords: null,
            colCoords: null,
            containerEl: null,
            minX: null,
            maxX: null,
            minY: null,
            maxY: null,
            constructor: function (t) {
                this.grid = t
            },
            build: function () {
                this.rowCoords = this.grid.computeRowCoords(), this.colCoords = this.grid.computeColCoords(), this.computeBounds()
            },
            clear: function () {
                this.rowCoords = null, this.colCoords = null
            },
            getCell: function (t, e) {
                var n, i, r, s = this.rowCoords,
                    o = this.colCoords,
                    l = null,
                    a = null;
                if (this.inBounds(t, e)) {
                    for (n = 0; s.length > n; n++)
                        if (i = s[n], e >= i.top && i.bottom > e) {
                            l = n;
                            break
                        }
                    for (n = 0; o.length > n; n++)
                        if (i = o[n], t >= i.left && i.right > t) {
                            a = n;
                            break
                        }
                    if (null !== l && null !== a) return r = this.grid.getCell(l, a), r.grid = this.grid, r
                }
                return null
            },
            computeBounds: function () {
                var t;
                this.containerEl && (t = this.containerEl.offset(), this.minX = t.left, this.maxX = t.left + this.containerEl.outerWidth(), this.minY = t.top, this.maxY = t.top + this.containerEl.outerHeight())
            },
            inBounds: function (t, e) {
                return this.containerEl ? t >= this.minX && this.maxX > t && e >= this.minY && this.maxY > e : !0
            }
        }),
        Ze = K.extend({
            coordMaps: null,
            constructor: function (t) {
                this.coordMaps = t
            },
            build: function () {
                var t, e = this.coordMaps;
                for (t = 0; e.length > t; t++) e[t].build()
            },
            getCell: function (t, e) {
                var n, i = this.coordMaps,
                    r = null;
                for (n = 0; i.length > n && !r; n++) r = i[n].getCell(t, e);
                return r
            },
            clear: function () {
                var t, e = this.coordMaps;
                for (t = 0; e.length > t; t++) e[t].clear()
            }
        }),
        Ie = K.extend({
            coordMap: null,
            options: null,
            isListening: !1,
            isDragging: !1,
            origCell: null,
            cell: null,
            mouseX0: null,
            mouseY0: null,
            mousemoveProxy: null,
            mouseupProxy: null,
            scrollEl: null,
            scrollBounds: null,
            scrollTopVel: null,
            scrollLeftVel: null,
            scrollIntervalId: null,
            scrollHandlerProxy: null,
            scrollSensitivity: 30,
            scrollSpeed: 200,
            scrollIntervalMs: 50,
            constructor: function (t, e) {
                this.coordMap = t, this.options = e || {}
            },
            mousedown: function (t) {
                v(t) && (t.preventDefault(), this.startListening(t), this.options.distance || this.startDrag(t))
            },
            startListening: function (e) {
                var n, i;
                this.isListening || (e && this.options.scroll && (n = p(t(e.target)), n.is(window) || n.is(document) || (this.scrollEl = n, this.scrollHandlerProxy = G(t.proxy(this, "scrollHandler"), 100), this.scrollEl.on("scroll", this.scrollHandlerProxy))), this.computeCoords(), e && (i = this.getCell(e), this.origCell = i, this.mouseX0 = e.pageX, this.mouseY0 = e.pageY), t(document).on("mousemove", this.mousemoveProxy = t.proxy(this, "mousemove")).on("mouseup", this.mouseupProxy = t.proxy(this, "mouseup")).on("selectstart", this.preventDefault), this.isListening = !0, this.trigger("listenStart", e))
            },
            computeCoords: function () {
                this.coordMap.build(), this.computeScrollBounds()
            },
            mousemove: function (t) {
                var e, n;
                this.isDragging || (e = this.options.distance || 1, n = Math.pow(t.pageX - this.mouseX0, 2) + Math.pow(t.pageY - this.mouseY0, 2), n >= e * e && this.startDrag(t)), this.isDragging && this.drag(t)
            },
            startDrag: function (t) {
                var e;
                this.isListening || this.startListening(), this.isDragging || (this.isDragging = !0, this.trigger("dragStart", t), e = this.getCell(t), e && this.cellOver(e))
            },
            drag: function (t) {
                var e;
                this.isDragging && (e = this.getCell(t), Q(e, this.cell) || (this.cell && this.cellOut(), e && this.cellOver(e)), this.dragScroll(t))
            },
            cellOver: function (t) {
                this.cell = t, this.trigger("cellOver", t, Q(t, this.origCell))
            },
            cellOut: function () {
                this.cell && (this.trigger("cellOut", this.cell), this.cell = null)
            },
            mouseup: function (t) {
                this.stopDrag(t), this.stopListening(t)
            },
            stopDrag: function (t) {
                this.isDragging && (this.stopScrolling(), this.trigger("dragStop", t), this.isDragging = !1)
            },
            stopListening: function (e) {
                this.isListening && (this.scrollEl && (this.scrollEl.off("scroll", this.scrollHandlerProxy), this.scrollHandlerProxy = null), t(document).off("mousemove", this.mousemoveProxy).off("mouseup", this.mouseupProxy).off("selectstart", this.preventDefault), this.mousemoveProxy = null, this.mouseupProxy = null, this.isListening = !1, this.trigger("listenStop", e), this.origCell = this.cell = null, this.coordMap.clear())
            },
            getCell: function (t) {
                return this.coordMap.getCell(t.pageX, t.pageY)
            },
            trigger: function (t) {
                this.options[t] && this.options[t].apply(this, Array.prototype.slice.call(arguments, 1))
            },
            preventDefault: function (t) {
                t.preventDefault()
            },
            computeScrollBounds: function () {
                var t, e = this.scrollEl;
                e && (t = e.offset(), this.scrollBounds = {
                    top: t.top,
                    left: t.left,
                    bottom: t.top + e.outerHeight(),
                    right: t.left + e.outerWidth()
                })
            },
            dragScroll: function (t) {
                var e, n, i, r, s = this.scrollSensitivity,
                    o = this.scrollBounds,
                    l = 0,
                    a = 0;
                o && (e = (s - (t.pageY - o.top)) / s, n = (s - (o.bottom - t.pageY)) / s, i = (s - (t.pageX - o.left)) / s, r = (s - (o.right - t.pageX)) / s, e >= 0 && 1 >= e ? l = -1 * e * this.scrollSpeed : n >= 0 && 1 >= n && (l = n * this.scrollSpeed), i >= 0 && 1 >= i ? a = -1 * i * this.scrollSpeed : r >= 0 && 1 >= r && (a = r * this.scrollSpeed)), this.setScrollVel(l, a)
            },
            setScrollVel: function (e, n) {
                this.scrollTopVel = e, this.scrollLeftVel = n, this.constrainScrollVel(), !this.scrollTopVel && !this.scrollLeftVel || this.scrollIntervalId || (this.scrollIntervalId = setInterval(t.proxy(this, "scrollIntervalFunc"), this.scrollIntervalMs))
            },
            constrainScrollVel: function () {
                var t = this.scrollEl;
                0 > this.scrollTopVel ? 0 >= t.scrollTop() && (this.scrollTopVel = 0) : this.scrollTopVel > 0 && t.scrollTop() + t[0].clientHeight >= t[0].scrollHeight && (this.scrollTopVel = 0), 0 > this.scrollLeftVel ? 0 >= t.scrollLeft() && (this.scrollLeftVel = 0) : this.scrollLeftVel > 0 && t.scrollLeft() + t[0].clientWidth >= t[0].scrollWidth && (this.scrollLeftVel = 0)
            },
            scrollIntervalFunc: function () {
                var t = this.scrollEl,
                    e = this.scrollIntervalMs / 1e3;
                this.scrollTopVel && t.scrollTop(t.scrollTop() + this.scrollTopVel * e), this.scrollLeftVel && t.scrollLeft(t.scrollLeft() + this.scrollLeftVel * e), this.constrainScrollVel(), this.scrollTopVel || this.scrollLeftVel || this.stopScrolling()
            },
            stopScrolling: function () {
                this.scrollIntervalId && (clearInterval(this.scrollIntervalId), this.scrollIntervalId = null, this.computeCoords())
            },
            scrollHandler: function () {
                this.scrollIntervalId || this.computeCoords()
            }
        }),
        We = K.extend({
            options: null,
            sourceEl: null,
            el: null,
            parentEl: null,
            top0: null,
            left0: null,
            mouseY0: null,
            mouseX0: null,
            topDelta: null,
            leftDelta: null,
            mousemoveProxy: null,
            isFollowing: !1,
            isHidden: !1,
            isAnimating: !1,
            constructor: function (e, n) {
                this.options = n = n || {}, this.sourceEl = e, this.parentEl = n.parentEl ? t(n.parentEl) : e.parent()
            },
            start: function (e) {
                this.isFollowing || (this.isFollowing = !0, this.mouseY0 = e.pageY, this.mouseX0 = e.pageX, this.topDelta = 0, this.leftDelta = 0, this.isHidden || this.updatePosition(), t(document).on("mousemove", this.mousemoveProxy = t.proxy(this, "mousemove")))
            },
            stop: function (e, n) {
                function i() {
                    this.isAnimating = !1, r.destroyEl(), this.top0 = this.left0 = null, n && n()
                }
                var r = this,
                    s = this.options.revertDuration;
                this.isFollowing && !this.isAnimating && (this.isFollowing = !1, t(document).off("mousemove", this.mousemoveProxy), e && s && !this.isHidden ? (this.isAnimating = !0, this.el.animate({
                    top: this.top0,
                    left: this.left0
                }, {
                    duration: s,
                    complete: i
                })) : i())
            },
            getEl: function () {
                var t = this.el;
                return t || (this.sourceEl.width(), t = this.el = this.sourceEl.clone().css({
                    position: "absolute",
                    visibility: "",
                    display: this.isHidden ? "none" : "",
                    margin: 0,
                    right: "auto",
                    bottom: "auto",
                    width: this.sourceEl.width(),
                    height: this.sourceEl.height(),
                    opacity: this.options.opacity || "",
                    zIndex: this.options.zIndex
                }).appendTo(this.parentEl)), t
            },
            destroyEl: function () {
                this.el && (this.el.remove(), this.el = null)
            },
            updatePosition: function () {
                var t, e;
                this.getEl(), null === this.top0 && (this.sourceEl.width(), t = this.sourceEl.offset(), e = this.el.offsetParent().offset(), this.top0 = t.top - e.top, this.left0 = t.left - e.left), this.el.css({
                    top: this.top0 + this.topDelta,
                    left: this.left0 + this.leftDelta
                })
            },
            mousemove: function (t) {
                this.topDelta = t.pageY - this.mouseY0, this.leftDelta = t.pageX - this.mouseX0, this.isHidden || this.updatePosition()
            },
            hide: function () {
                this.isHidden || (this.isHidden = !0, this.el && this.el.hide())
            },
            show: function () {
                this.isHidden && (this.isHidden = !1, this.updatePosition(), this.getEl().show())
            }
        }),
        je = K.extend({
            view: null,
            isRTL: null,
            cellHtml: "<td/>",
            constructor: function (t) {
                this.view = t, this.isRTL = t.opt("isRTL")
            },
            rowHtml: function (t, e) {
                var n, i, r = this.getHtmlRenderer("cell", t),
                    s = "";
                for (e = e || 0, n = 0; this.colCnt > n; n++) i = this.getCell(e, n), s += r(i);
                return s = this.bookendCells(s, t, e), "<tr>" + s + "</tr>"
            },
            bookendCells: function (t, e, n) {
                var i = this.getHtmlRenderer("intro", e)(n || 0),
                    r = this.getHtmlRenderer("outro", e)(n || 0),
                    s = this.isRTL ? r : i,
                    o = this.isRTL ? i : r;
                return "string" == typeof t ? s + t + o : t.prepend(s).append(o)
            },
            getHtmlRenderer: function (t, e) {
                var n, i, r, s, o = this.view;
                return n = t + "Html", e && (i = e + P(t) + "Html"), i && (s = o[i]) ? r = o : i && (s = this[i]) ? r = this : (s = o[n]) ? r = o : (s = this[n]) && (r = this), "function" == typeof s ? function () {
                    return s.apply(r, arguments) || ""
                } : function () {
                    return s || ""
                }
            }
        }),
        Xe = De.Grid = je.extend({
            start: null,
            end: null,
            rowCnt: 0,
            colCnt: 0,
            rowData: null,
            colData: null,
            el: null,
            coordMap: null,
            elsByFill: null,
            documentDragStartProxy: null,
            colHeadFormat: null,
            eventTimeFormat: null,
            displayEventEnd: null,
            constructor: function () {
                je.apply(this, arguments), this.coordMap = new Be(this), this.elsByFill = {}, this.documentDragStartProxy = t.proxy(this, "documentDragStart")
            },
            render: function () {
                this.bindHandlers()
            },
            destroy: function () {
                this.unbindHandlers()
            },
            computeColHeadFormat: function () { },
            computeEventTimeFormat: function () {
                return this.view.opt("smallTimeFormat")
            },
            computeDisplayEventEnd: function () {
                return !1
            },
            setRange: function (t) {
                var e = this.view;
                this.start = t.start.clone(), this.end = t.end.clone(), this.rowData = [], this.colData = [], this.updateCells(), this.colHeadFormat = e.opt("columnFormat") || this.computeColHeadFormat(), this.eventTimeFormat = e.opt("timeFormat") || this.computeEventTimeFormat(), this.displayEventEnd = e.opt("displayEventEnd"), null == this.displayEventEnd && (this.displayEventEnd = this.computeDisplayEventEnd())
            },
            updateCells: function () { },
            rangeToSegs: function () { },
            getCell: function (e, n) {
                var i;
                return null == n && ("number" == typeof e ? (n = e % this.colCnt, e = Math.floor(e / this.colCnt)) : (n = e.col, e = e.row)), i = {
                    row: e,
                    col: n
                }, t.extend(i, this.getRowData(e), this.getColData(n)), t.extend(i, this.computeCellRange(i)), i
            },
            computeCellRange: function () { },
            getRowData: function (t) {
                return this.rowData[t] || {}
            },
            getColData: function (t) {
                return this.colData[t] || {}
            },
            getRowEl: function () { },
            getColEl: function () { },
            getCellDayEl: function (t) {
                return this.getColEl(t.col) || this.getRowEl(t.row)
            },
            computeRowCoords: function () {
                var t, e, n, i = [];
                for (t = 0; this.rowCnt > t; t++) e = this.getRowEl(t), n = {
                    top: e.offset().top
                }, t > 0 && (i[t - 1].bottom = n.top), i.push(n);
                return n.bottom = n.top + e.outerHeight(), i
            },
            computeColCoords: function () {
                var t, e, n, i = [];
                for (t = 0; this.colCnt > t; t++) e = this.getColEl(t), n = {
                    left: e.offset().left
                }, t > 0 && (i[t - 1].right = n.left), i.push(n);
                return n.right = n.left + e.outerWidth(), i
            },
            bindHandlers: function () {
                var e = this;
                this.el.on("mousedown", function (n) {
                    t(n.target).is(".fc-event-container *, .fc-more") || t(n.target).closest(".fc-popover").length || e.dayMousedown(n)
                }), this.bindSegHandlers(), t(document).on("dragstart", this.documentDragStartProxy)
            },
            unbindHandlers: function () {
                t(document).off("dragstart", this.documentDragStartProxy)
            },
            dayMousedown: function (t) {
                var e, n, i = this,
                    r = this.view,
                    s = r.opt("selectable"),
                    o = new Ie(this.coordMap, {
                        scroll: r.opt("dragScroll"),
                        dragStart: function () {
                            r.unselect()
                        },
                        cellOver: function (t, r) {
                            var l = o.origCell;
                            l && (e = r ? t : null, s && (n = i.computeSelection(l, t), n ? i.renderSelection(n) : a()))
                        },
                        cellOut: function () {
                            e = null, n = null, i.destroySelection(), u()
                        },
                        listenStop: function (t) {
                            e && r.trigger("dayClick", i.getCellDayEl(e), e.start, t), n && r.reportSelection(n, t), u()
                        }
                    });
                o.mousedown(t)
            },
            renderRangeHelper: function (t, e) {
                var n;
                n = e ? x(e.event) : {}, n.start = t.start.clone(), n.end = t.end ? t.end.clone() : null, n.allDay = null, this.view.calendar.normalizeEventDateProps(n), n.className = (n.className || []).concat("fc-helper"), e || (n.editable = !1), this.renderHelper(n, e)
            },
            renderHelper: function () { },
            destroyHelper: function () { },
            renderSelection: function (t) {
                this.renderHighlight(t)
            },
            destroySelection: function () {
                this.destroyHighlight()
            },
            computeSelection: function (t, e) {
                var n, i = [t.start, t.end, e.start, e.end];
                return i.sort(V), n = {
                    start: i[0].clone(),
                    end: i[3].clone()
                }, this.view.calendar.isSelectionRangeAllowed(n) ? n : null
            },
            renderHighlight: function (t) {
                this.renderFill("highlight", this.rangeToSegs(t))
            },
            destroyHighlight: function () {
                this.destroyFill("highlight")
            },
            highlightSegClasses: function () {
                return ["fc-highlight"]
            },
            renderFill: function () { },
            destroyFill: function (t) {
                var e = this.elsByFill[t];
                e && (e.remove(), delete this.elsByFill[t])
            },
            renderFillSegEls: function (e, n) {
                var i, r = this,
                    s = this[e + "SegEl"],
                    o = "",
                    l = [];
                if (n.length) {
                    for (i = 0; n.length > i; i++) o += this.fillSegHtml(e, n[i]);
                    t(o).each(function (e, i) {
                        var o = n[e],
                            a = t(i);
                        s && (a = s.call(r, o, a)), a && (a = t(a), a.is(r.fillSegTag) && (o.el = a, l.push(o)))
                    })
                }
                return l
            },
            fillSegTag: "div",
            fillSegHtml: function (t, e) {
                var n = this[t + "SegClasses"],
                    i = this[t + "SegStyles"],
                    r = n ? n.call(this, e) : [],
                    s = i ? i.call(this, e) : "";
                return "<" + this.fillSegTag + (r.length ? ' class="' + r.join(" ") + '"' : "") + (s ? ' style="' + s + '"' : "") + " />"
            },
            headHtml: function () {
                return '<div class="fc-row ' + this.view.widgetHeaderClass + '">' + "<table>" + "<thead>" + this.rowHtml("head") + "</thead>" + "</table>" + "</div>"
            },
            headCellHtml: function (t) {
                var e = this.view,
                    n = t.start;
                return '<th class="fc-day-header ' + e.widgetHeaderClass + " fc-" + Fe[n.day()] + '">' + z(n.format(this.colHeadFormat)) + "</th>"
            },
            bgCellHtml: function (t) {
                var e = this.view,
                    n = t.start,
                    i = this.getDayClasses(n);
                return i.unshift("fc-day", e.widgetContentClass), '<td class="' + i.join(" ") + '"' + ' data-date="' + n.format("YYYY-MM-DD") + '"' + "></td>"
            },
            getDayClasses: function (t) {
                var e = this.view,
                    n = e.calendar.getNow().stripTime(),
                    i = ["fc-" + Fe[t.day()]];
                return "month" === e.name && t.month() != e.intervalStart.month() && i.push("fc-other-month"), t.isSame(n, "day") ? i.push("fc-today", e.highlightStateClass) : n > t ? i.push("fc-past") : i.push("fc-future"), i
            }
        });
    Xe.mixin({
        mousedOverSeg: null,
        isDraggingSeg: !1,
        isResizingSeg: !1,
        segs: null,
        renderEvents: function (t) {
            var e, n, i = this.eventsToSegs(t),
                r = [],
                s = [];
            for (e = 0; i.length > e; e++) n = i[e], J(n.event) ? r.push(n) : s.push(n);
            r = this.renderBgSegs(r) || r, s = this.renderFgSegs(s) || s, this.segs = r.concat(s)
        },
        destroyEvents: function () {
            this.triggerSegMouseout(), this.destroyFgSegs(), this.destroyBgSegs(), this.segs = null
        },
        getEventSegs: function () {
            return this.segs || []
        },
        renderFgSegs: function () { },
        destroyFgSegs: function () { },
        renderFgSegEls: function (e, n) {
            var i, r = this.view,
                s = "",
                o = [];
            if (e.length) {
                for (i = 0; e.length > i; i++) s += this.fgSegHtml(e[i], n);
                t(s).each(function (n, i) {
                    var s = e[n],
                        l = r.resolveEventEl(s.event, t(i));
                    l && (l.data("fc-seg", s), s.el = l, o.push(s))
                })
            }
            return o
        },
        fgSegHtml: function () { },
        renderBgSegs: function (t) {
            return this.renderFill("bgEvent", t)
        },
        destroyBgSegs: function () {
            this.destroyFill("bgEvent")
        },
        bgEventSegEl: function (t, e) {
            return this.view.resolveEventEl(t.event, e)
        },
        bgEventSegClasses: function (t) {
            var e = t.event,
                n = e.source || {};
            return ["fc-bgevent"].concat(e.className, n.className || [])
        },
        bgEventSegStyles: function (t) {
            var e = this.view,
                n = t.event,
                i = n.source || {},
                r = n.color,
                s = i.color,
                o = e.opt("eventColor"),
                l = n.backgroundColor || r || i.backgroundColor || s || e.opt("eventBackgroundColor") || o;
            return l ? "background-color:" + l : ""
        },
        businessHoursSegClasses: function () {
            return ["fc-nonbusiness", "fc-bgevent"]
        },
        bindSegHandlers: function () {
            var e = this,
                n = this.view;
            t.each({
                mouseenter: function (t, n) {
                    e.triggerSegMouseover(t, n)
                },
                mouseleave: function (t, n) {
                    e.triggerSegMouseout(t, n)
                },
                click: function (t, e) {
                    return n.trigger("eventClick", this, t.event, e)
                },
                mousedown: function (i, r) {
                    t(r.target).is(".fc-resizer") && n.isEventResizable(i.event) ? e.segResizeMousedown(i, r) : n.isEventDraggable(i.event) && e.segDragMousedown(i, r)
                }
            }, function (n, i) {
                e.el.on(n, ".fc-event-container > *", function (n) {
                    var r = t(this).data("fc-seg");
                    return !r || e.isDraggingSeg || e.isResizingSeg ? void 0 : i.call(this, r, n)
                })
            })
        },
        triggerSegMouseover: function (t, e) {
            this.mousedOverSeg || (this.mousedOverSeg = t, this.view.trigger("eventMouseover", t.el[0], t.event, e))
        },
        triggerSegMouseout: function (t, e) {
            e = e || {}, this.mousedOverSeg && (t = t || this.mousedOverSeg, this.mousedOverSeg = null, this.view.trigger("eventMouseout", t.el[0], t.event, e))
        },
        segDragMousedown: function (t, e) {
            var n, i = this,
                r = this.view,
                s = t.el,
                o = t.event,
                l = new We(t.el, {
                    parentEl: r.el,
                    opacity: r.opt("dragOpacity"),
                    revertDuration: r.opt("dragRevertDuration"),
                    zIndex: 2
                }),
                d = new Ie(r.coordMap, {
                    distance: 5,
                    scroll: r.opt("dragScroll"),
                    listenStart: function (t) {
                        l.hide(), l.start(t)
                    },
                    dragStart: function (e) {
                        i.triggerSegMouseout(t, e), i.isDraggingSeg = !0, r.hideEvent(o), r.trigger("eventDragStart", s[0], o, e, {})
                    },
                    cellOver: function (e, s) {
                        var u = t.cell || d.origCell;
                        n = i.computeEventDrop(u, e, o), n ? (r.renderDrag(n, t) ? l.hide() : l.show(), s && (n = null)) : (l.show(), a())
                    },
                    cellOut: function () {
                        n = null, r.destroyDrag(), l.show(), u()
                    },
                    dragStop: function (t) {
                        l.stop(!n, function () {
                            i.isDraggingSeg = !1, r.destroyDrag(), r.showEvent(o), r.trigger("eventDragStop", s[0], o, t, {}), n && r.reportEventDrop(o, n, s, t)
                        }), u()
                    },
                    listenStop: function () {
                        l.stop()
                    }
                });
            d.mousedown(e)
        },
        computeEventDrop: function (t, e, n) {
            var i, r, s, o, l, a = t.start,
                u = e.start;
            return a.hasTime() === u.hasTime() ? (i = E(u, a), r = n.start.clone().add(i), s = null === n.end ? null : n.end.clone().add(i), o = n.allDay) : (r = u.clone(), s = null, o = !u.hasTime()), l = {
                start: r,
                end: s,
                allDay: o
            }, this.view.calendar.isEventRangeAllowed(l, n) ? l : null
        },
        documentDragStart: function (e, n) {
            var i, r, s = this.view;
            s.opt("droppable") && (i = t(e.target), r = s.opt("dropAccept"), (t.isFunction(r) ? r.call(i[0], i) : i.is(r)) && this.startExternalDrag(i, e, n))
        },
        startExternalDrag: function (e, n) {
            var i, r, s = this,
                o = se(e);
            i = new Ie(this.coordMap, {
                cellOver: function (t) {
                    r = s.computeExternalDrop(t, o), r ? s.renderDrag(r) : a()
                },
                cellOut: function () {
                    r = null, s.destroyDrag(), u()
                }
            }), t(document).one("dragstop", function (t, n) {
                s.destroyDrag(), u(), r && s.view.reportExternalDrop(o, r, e, t, n)
            }), i.startDrag(n)
        },
        computeExternalDrop: function (t, e) {
            var n = {
                start: t.start.clone(),
                end: null
            };
            return e.startTime && !n.start.hasTime() && n.start.time(e.startTime), e.duration && (n.end = n.start.clone().add(e.duration)), this.view.calendar.isExternalDropRangeAllowed(n, e.eventProps) ? n : null
        },
        renderDrag: function () { },
        destroyDrag: function () { },
        segResizeMousedown: function (t, e) {
            function n() {
                s.destroyEventResize(), o.showEvent(c), u()
            }
            var i, r, s = this,
                o = this.view,
                l = o.calendar,
                d = t.el,
                c = t.event,
                h = c.start,
                f = l.getEventEnd(c);
            r = new Ie(this.coordMap, {
                distance: 5,
                scroll: o.opt("dragScroll"),
                dragStart: function (e) {
                    s.triggerSegMouseout(t, e), s.isResizingSeg = !0, o.trigger("eventResizeStart", d[0], c, e, {})
                },
                cellOver: function (e) {
                    i = e.end, i.isAfter(h) || (i = h.clone().add(E(e.end, e.start))), i.isSame(f) ? i = null : l.isEventRangeAllowed({
                        start: h,
                        end: i
                    }, c) ? (s.renderEventResize({
                        start: h,
                        end: i
                    }, t), o.hideEvent(c)) : (i = null, a())
                },
                cellOut: function () {
                    i = null, n()
                },
                dragStop: function (t) {
                    s.isResizingSeg = !1, n(), o.trigger("eventResizeStop", d[0], c, t, {}), i && o.reportEventResize(c, i, d, t)
                }
            }), r.mousedown(e)
        },
        renderEventResize: function () { },
        destroyEventResize: function () { },
        getEventTimeText: function (t, e) {
            return e = e || this.eventTimeFormat, t.end && this.displayEventEnd ? this.view.formatRange(t, e) : t.start.format(e)
        },
        getSegClasses: function (t, e, n) {
            var i = t.event,
                r = ["fc-event", t.isStart ? "fc-start" : "fc-not-start", t.isEnd ? "fc-end" : "fc-not-end"].concat(i.className, i.source ? i.source.className : []);
            return e && r.push("fc-draggable"), n && r.push("fc-resizable"), r
        },
        getEventSkinCss: function (t) {
            var e = this.view,
                n = t.source || {},
                i = t.color,
                r = n.color,
                s = e.opt("eventColor"),
                o = t.backgroundColor || i || n.backgroundColor || r || e.opt("eventBackgroundColor") || s,
                l = t.borderColor || i || n.borderColor || r || e.opt("eventBorderColor") || s,
                a = t.textColor || n.textColor || e.opt("eventTextColor"),
                u = [];
            return o && u.push("background-color:" + o), l && u.push("border-color:" + l), a && u.push("color:" + a), u.join(";")
        },
        eventsToSegs: function (t, e) {
            var n, i = this.eventsToRanges(t),
                r = [];
            for (n = 0; i.length > n; n++) r.push.apply(r, this.eventRangeToSegs(i[n], e));
            return r
        },
        eventsToRanges: function (e) {
            var n = this,
                i = ne(e),
                r = [];
            return t.each(i, function (t, e) {
                e.length && r.push.apply(r, te(e[0]) ? n.eventsToInverseRanges(e) : n.eventsToNormalRanges(e))
            }), r
        },
        eventsToNormalRanges: function (t) {
            var e, n, i, r, s = this.view.calendar,
                o = [];
            for (e = 0; t.length > e; e++) n = t[e], i = n.start.clone().stripZone(), r = s.getEventEnd(n).stripZone(), o.push({
                event: n,
                start: i,
                end: r,
                eventStartMS: +i,
                eventDurationMS: r - i
            });
            return o
        },
        eventsToInverseRanges: function (t) {
            var e, n, i = this.view,
                r = i.start.clone().stripZone(),
                s = i.end.clone().stripZone(),
                o = this.eventsToNormalRanges(t),
                l = [],
                a = t[0],
                u = r;
            for (o.sort(ie), e = 0; o.length > e; e++) n = o[e], n.start > u && l.push({
                event: a,
                start: u,
                end: n.start
            }), u = n.end;
            return s > u && l.push({
                event: a,
                start: u,
                end: s
            }), l
        },
        eventRangeToSegs: function (t, e) {
            var n, i, r;
            for (n = e ? e(t) : this.rangeToSegs(t), i = 0; n.length > i; i++) r = n[i], r.event = t.event, r.eventStartMS = t.eventStartMS, r.eventDurationMS = t.eventDurationMS;
            return n
        }
    }), De.compareSegs = re, De.dataAttrPrefix = "";
    var $e = Xe.extend({
        numbersVisible: !1,
        bottomCoordPadding: 0,
        breakOnWeeks: null,
        cellDates: null,
        dayToCellOffsets: null,
        rowEls: null,
        dayEls: null,
        helperEls: null,
        render: function (t) {
            var e, n, i, r = this.view,
                s = this.rowCnt,
                o = this.colCnt,
                l = s * o,
                a = "";
            for (e = 0; s > e; e++) a += this.dayRowHtml(e, t);
            for (this.el.html(a), this.rowEls = this.el.find(".fc-row"), this.dayEls = this.el.find(".fc-day"), n = 0; l > n; n++) i = this.getCell(n), r.trigger("dayRender", null, i.start, this.dayEls.eq(n));
            Xe.prototype.render.call(this)
        },
        destroy: function () {
            this.destroySegPopover(), Xe.prototype.destroy.call(this)
        },
        dayRowHtml: function (t, e) {
            var n = this.view,
                i = ["fc-row", "fc-week", n.widgetContentClass];
            return e && i.push("fc-rigid"), '<div class="' + i.join(" ") + '">' + '<div class="fc-bg">' + "<table>" + this.rowHtml("day", t) + "</table>" + "</div>" + '<div class="fc-content-skeleton">' + "<table>" + (this.numbersVisible ? "<thead>" + this.rowHtml("number", t) + "</thead>" : "") + "</table>" + "</div>" + "</div>"
        },
        dayCellHtml: function (t) {
            return this.bgCellHtml(t)
        },
        computeColHeadFormat: function () {
            return this.rowCnt > 1 ? "ddd" : this.colCnt > 1 ? this.view.opt("dayOfMonthFormat") : "dddd"
        },
        computeEventTimeFormat: function () {
            return this.view.opt("extraSmallTimeFormat")
        },
        computeDisplayEventEnd: function () {
            return 1 == this.colCnt
        },
        updateCells: function () {
            var t, e, n, i;
            if (this.updateCellDates(), t = this.cellDates, this.breakOnWeeks) {
                for (e = t[0].day(), i = 1; t.length > i && t[i].day() != e; i++);
                n = Math.ceil(t.length / i)
            } else n = 1, i = t.length;
            this.rowCnt = n, this.colCnt = i
        },
        updateCellDates: function () {
            for (var t = this.view, e = this.start.clone(), n = [], i = -1, r = []; e.isBefore(this.end) ;) t.isHiddenDay(e) ? r.push(i + .5) : (i++, r.push(i), n.push(e.clone())), e.add(1, "days");
            this.cellDates = n, this.dayToCellOffsets = r
        },
        computeCellRange: function (t) {
            var e = this.colCnt,
                n = t.row * e + (this.isRTL ? e - t.col - 1 : t.col),
                i = this.cellDates[n].clone(),
                r = i.clone().add(1, "day");
            return {
                start: i,
                end: r
            }
        },
        getRowEl: function (t) {
            return this.rowEls.eq(t)
        },
        getColEl: function (t) {
            return this.dayEls.eq(t)
        },
        getCellDayEl: function (t) {
            return this.dayEls.eq(t.row * this.colCnt + t.col)
        },
        computeRowCoords: function () {
            var t = Xe.prototype.computeRowCoords.call(this);
            return t[t.length - 1].bottom += this.bottomCoordPadding, t
        },
        rangeToSegs: function (t) {
            var e, n, i, r, s, o, l, a, u, d, c = this.isRTL,
                h = this.rowCnt,
                f = this.colCnt,
                g = [];
            for (t = this.view.computeDayRange(t), e = this.dateToCellOffset(t.start), n = this.dateToCellOffset(t.end.subtract(1, "days")), i = 0; h > i; i++) r = i * f, s = r + f - 1, a = Math.max(r, e), u = Math.min(s, n), a = Math.ceil(a), u = Math.floor(u), u >= a && (o = a === e, l = u === n, a -= r, u -= r, d = {
                row: i,
                isStart: o,
                isEnd: l
            }, c ? (d.leftCol = f - u - 1, d.rightCol = f - a - 1) : (d.leftCol = a, d.rightCol = u), g.push(d));
            return g
        },
        dateToCellOffset: function (t) {
            var e = this.dayToCellOffsets,
                n = t.diff(this.start, "days");
            return 0 > n ? e[0] - 1 : n >= e.length ? e[e.length - 1] + 1 : e[n]
        },
        renderDrag: function (t, e) {
            var n;
            return this.renderHighlight(this.view.calendar.ensureVisibleEventRange(t)), e && !e.el.closest(this.el).length ? (this.renderRangeHelper(t, e), n = this.view.opt("dragOpacity"), void 0 !== n && this.helperEls.css("opacity", n), !0) : void 0
        },
        destroyDrag: function () {
            this.destroyHighlight(), this.destroyHelper()
        },
        renderEventResize: function (t, e) {
            this.renderHighlight(t), this.renderRangeHelper(t, e)
        },
        destroyEventResize: function () {
            this.destroyHighlight(), this.destroyHelper()
        },
        renderHelper: function (e, n) {
            var i, r = [],
                s = this.eventsToSegs([e]);
            s = this.renderFgSegEls(s), i = this.renderSegRows(s), this.rowEls.each(function (e, s) {
                var o, l = t(s),
                    a = t('<div class="fc-helper-skeleton"><table/></div>');
                o = n && n.row === e ? n.el.position().top : l.find(".fc-content-skeleton tbody").position().top, a.css("top", o).find("table").append(i[e].tbodyEl), l.append(a), r.push(a[0])
            }), this.helperEls = t(r)
        },
        destroyHelper: function () {
            this.helperEls && (this.helperEls.remove(), this.helperEls = null)
        },
        fillSegTag: "td",
        renderFill: function (e, n) {
            var i, r, s, o = [];
            for (n = this.renderFillSegEls(e, n), i = 0; n.length > i; i++) r = n[i], s = this.renderFillRow(e, r), this.rowEls.eq(r.row).append(s), o.push(s[0]);
            return this.elsByFill[e] = t(o), n
        },
        renderFillRow: function (e, n) {
            var i, r, s = this.colCnt,
                o = n.leftCol,
                l = n.rightCol + 1;
            return i = t('<div class="fc-' + e.toLowerCase() + '-skeleton">' + "<table><tr/></table>" + "</div>"), r = i.find("tr"), o > 0 && r.append('<td colspan="' + o + '"/>'), r.append(n.el.attr("colspan", l - o)), s > l && r.append('<td colspan="' + (s - l) + '"/>'), this.bookendCells(r, e), i
        }
    });
    $e.mixin({
        rowStructs: null,
        destroyEvents: function () {
            this.destroySegPopover(), Xe.prototype.destroyEvents.apply(this, arguments)
        },
        getEventSegs: function () {
            return Xe.prototype.getEventSegs.call(this).concat(this.popoverSegs || [])
        },
        renderBgSegs: function (e) {
            var n = t.grep(e, function (t) {
                return t.event.allDay
            });
            return Xe.prototype.renderBgSegs.call(this, n)
        },
        renderFgSegs: function (e) {
            var n;
            return e = this.renderFgSegEls(e), n = this.rowStructs = this.renderSegRows(e), this.rowEls.each(function (e, i) {
                t(i).find(".fc-content-skeleton > table").append(n[e].tbodyEl)
            }), e
        },
        destroyFgSegs: function () {
            for (var t, e = this.rowStructs || []; t = e.pop() ;) t.tbodyEl.remove();
            this.rowStructs = null
        },
        renderSegRows: function (t) {
            var e, n, i = [];
            for (e = this.groupSegRows(t), n = 0; e.length > n; n++) i.push(this.renderSegRow(n, e[n]));
            return i
        },
        fgSegHtml: function (t, e) {
            var n, i = this.view,
                r = t.event,
                s = i.isEventDraggable(r),
                o = !e && r.allDay && t.isEnd && i.isEventResizable(r),
                l = this.getSegClasses(t, s, o),
                a = this.getEventSkinCss(r),
                u = "";
            return l.unshift("fc-day-grid-event"), !r.allDay && t.isStart && (u = '<span class="fc-time">' + z(this.getEventTimeText(r)) + "</span>"), n = '<span class="fc-title">' + (z(r.title || "") || "&nbsp;") + "</span>", '<a class="' + l.join(" ") + '"' + (r.url ? ' href="' + z(r.url) + '"' : "") + (a ? ' style="' + a + '"' : "") + ">" + '<div class="fc-content">' + (this.isRTL ? n + " " + u : u + " " + n) + "</div>" + (o ? '<div class="fc-resizer"/>' : "") + "</a>"
        },
        renderSegRow: function (e, n) {
            function i(e) {
                for (; e > o;) d = (v[r - 1] || [])[o], d ? d.attr("rowspan", parseInt(d.attr("rowspan") || 1, 10) + 1) : (d = t("<td/>"), l.append(d)), m[r][o] = d, v[r][o] = d, o++
            }
            var r, s, o, l, a, u, d, c = this.colCnt,
                h = this.buildSegLevels(n),
                f = Math.max(1, h.length),
                g = t("<tbody/>"),
                p = [],
                m = [],
                v = [];
            for (r = 0; f > r; r++) {
                if (s = h[r], o = 0, l = t("<tr/>"), p.push([]), m.push([]), v.push([]), s)
                    for (a = 0; s.length > a; a++) {
                        for (u = s[a], i(u.leftCol), d = t('<td class="fc-event-container"/>').append(u.el), u.leftCol != u.rightCol ? d.attr("colspan", u.rightCol - u.leftCol + 1) : v[r][o] = d; u.rightCol >= o;) m[r][o] = d, p[r][o] = u, o++;
                        l.append(d)
                    }
                i(c), this.bookendCells(l, "eventSkeleton"), g.append(l)
            }
            return {
                row: e,
                tbodyEl: g,
                cellMatrix: m,
                segMatrix: p,
                segLevels: h,
                segs: n
            }
        },
        buildSegLevels: function (t) {
            var e, n, i, r = [];
            for (t.sort(re), e = 0; t.length > e; e++) {
                for (n = t[e], i = 0; r.length > i && oe(n, r[i]) ; i++);
                n.level = i, (r[i] || (r[i] = [])).push(n)
            }
            for (i = 0; r.length > i; i++) r[i].sort(le);
            return r
        },
        groupSegRows: function (t) {
            var e, n = [];
            for (e = 0; this.rowCnt > e; e++) n.push([]);
            for (e = 0; t.length > e; e++) n[t[e].row].push(t[e]);
            return n
        }
    }), $e.mixin({
        segPopover: null,
        popoverSegs: null,
        destroySegPopover: function () {
            this.segPopover && this.segPopover.hide()
        },
        limitRows: function (t) {
            var e, n, i = this.rowStructs || [];
            for (e = 0; i.length > e; e++) this.unlimitRow(e), n = t ? "number" == typeof t ? t : this.computeRowLevelLimit(e) : !1, n !== !1 && this.limitRow(e, n)
        },
        computeRowLevelLimit: function (t) {
            var e, n, i = this.rowEls.eq(t),
                r = i.height(),
                s = this.rowStructs[t].tbodyEl.children();
            for (e = 0; s.length > e; e++)
                if (n = s.eq(e).removeClass("fc-limited"), n.position().top + n.outerHeight() > r) return e;
            return !1
        },
        limitRow: function (e, n) {
            function i(i) {
                for (; i > D;) r = E.getCell(e, D), d = E.getCellSegs(r, n), d.length && (f = o[n - 1][D], w = E.renderMoreLink(r, d), y = t("<div/>").append(w), f.append(y), b.push(y[0])), D++
            }
            var r, s, o, l, a, u, d, c, h, f, g, p, m, v, y, w, E = this,
                S = this.rowStructs[e],
                b = [],
                D = 0;
            if (n && S.segLevels.length > n) {
                for (s = S.segLevels[n - 1], o = S.cellMatrix, l = S.tbodyEl.children().slice(n).addClass("fc-limited").get(), a = 0; s.length > a; a++) {
                    for (u = s[a], i(u.leftCol), h = [], c = 0; u.rightCol >= D;) r = this.getCell(e, D), d = this.getCellSegs(r, n), h.push(d), c += d.length, D++;
                    if (c) {
                        for (f = o[n - 1][u.leftCol], g = f.attr("rowspan") || 1, p = [], m = 0; h.length > m; m++) v = t('<td class="fc-more-cell"/>').attr("rowspan", g), d = h[m], r = this.getCell(e, u.leftCol + m), w = this.renderMoreLink(r, [u].concat(d)), y = t("<div/>").append(w), v.append(y), p.push(v[0]), b.push(v[0]);
                        f.addClass("fc-limited").after(t(p)), l.push(f[0])
                    }
                }
                i(this.colCnt), S.moreEls = t(b), S.limitedEls = t(l)
            }
        },
        unlimitRow: function (t) {
            var e = this.rowStructs[t];
            e.moreEls && (e.moreEls.remove(), e.moreEls = null), e.limitedEls && (e.limitedEls.removeClass("fc-limited"), e.limitedEls = null)
        },
        renderMoreLink: function (e, n) {
            var i = this,
                r = this.view;
            return t('<a class="fc-more"/>').text(this.getMoreLinkText(n.length)).on("click", function (s) {
                var o = r.opt("eventLimitClick"),
                    l = e.start,
                    a = t(this),
                    u = i.getCellDayEl(e),
                    d = i.getCellSegs(e),
                    c = i.resliceDaySegs(d, l),
                    h = i.resliceDaySegs(n, l);
                "function" == typeof o && (o = r.trigger("eventLimitClick", null, {
                    date: l,
                    dayEl: u,
                    moreEl: a,
                    segs: c,
                    hiddenSegs: h
                }, s)), "popover" === o ? i.showSegPopover(e, a, c) : "string" == typeof o && r.calendar.zoomTo(l, o)
            })
        },
        showSegPopover: function (t, e, n) {
            var i, r, s = this,
                o = this.view,
                l = e.parent();
            i = 1 == this.rowCnt ? o.el : this.rowEls.eq(t.row), r = {
                className: "fc-more-popover",
                content: this.renderSegPopoverContent(t, n),
                parentEl: this.el,
                top: i.offset().top,
                autoHide: !0,
                viewportConstrain: o.opt("popoverViewportConstrain"),
                hide: function () {
                    s.segPopover.destroy(), s.segPopover = null, s.popoverSegs = null
                }
            }, this.isRTL ? r.right = l.offset().left + l.outerWidth() + 1 : r.left = l.offset().left - 1, this.segPopover = new Oe(r), this.segPopover.show()
        },
        renderSegPopoverContent: function (e, n) {
            var i, r = this.view,
                s = r.opt("theme"),
                o = e.start.format(r.opt("dayPopoverFormat")),
                l = t('<div class="fc-header ' + r.widgetHeaderClass + '">' + '<span class="fc-close ' + (s ? "ui-icon ui-icon-closethick" : "fc-icon fc-icon-x") + '"></span>' + '<span class="fc-title">' + z(o) + "</span>" + '<div class="fc-clear"/>' + "</div>" + '<div class="fc-body ' + r.widgetContentClass + '">' + '<div class="fc-event-container"></div>' + "</div>"),
                a = l.find(".fc-event-container");
            for (n = this.renderFgSegEls(n, !0), this.popoverSegs = n, i = 0; n.length > i; i++) n[i].cell = e, a.append(n[i].el);
            return l
        },
        resliceDaySegs: function (e, n) {
            var i = t.map(e, function (t) {
                return t.event
            }),
                r = n.clone().stripTime(),
                s = r.clone().add(1, "days"),
                o = {
                    start: r,
                    end: s
                };
            return this.eventsToSegs(i, function (t) {
                var e = y(t, o);
                return e ? [e] : []
            })
        },
        getMoreLinkText: function (t) {
            var e = this.view.opt("eventLimitText");
            return "function" == typeof e ? e(t) : "+" + t + " " + e
        },
        getCellSegs: function (t, e) {
            for (var n, i = this.rowStructs[t.row].segMatrix, r = e || 0, s = []; i.length > r;) n = i[r][t.col], n && s.push(n), r++;
            return s
        }
    });
    var Ue = Xe.extend({
        slotDuration: null,
        snapDuration: null,
        minTime: null,
        maxTime: null,
        axisFormat: null,
        dayEls: null,
        slatEls: null,
        slatTops: null,
        helperEl: null,
        businessHourSegs: null,
        constructor: function () {
            Xe.apply(this, arguments), this.processOptions()
        },
        render: function () {
            this.el.html(this.renderHtml()), this.dayEls = this.el.find(".fc-day"), this.slatEls = this.el.find(".fc-slats tr"), this.computeSlatTops(), this.renderBusinessHours(), Xe.prototype.render.call(this)
        },
        renderBusinessHours: function () {
            var t = this.view.calendar.getBusinessHoursEvents();
            this.businessHourSegs = this.renderFill("businessHours", this.eventsToSegs(t), "bgevent")
        },
        renderHtml: function () {
            return '<div class="fc-bg"><table>' + this.rowHtml("slotBg") + "</table>" + "</div>" + '<div class="fc-slats">' + "<table>" + this.slatRowHtml() + "</table>" + "</div>"
        },
        slotBgCellHtml: function (t) {
            return this.bgCellHtml(t)
        },
        slatRowHtml: function () {
            //for (var t, n, i, r = this.view, s = this.isRTL, o = "", l = 0 === this.slotDuration.asMinutes() % 15, a = e.duration(+this.minTime) ; this.maxTime > a;) t = this.start.clone().time(a), n = t.minutes(), i = '<td class="fc-axis fc-time ' + r.widgetContentClass + '" ' + r.axisStyleAttr() + ">" + (l && n ? "" : "<span>" + z(t.format(this.axisFormat)) + "</span>") + "</td>", o += "<tr " + (n ? 'class="fc-minor"' : "") + ">" + (s ? "" : i) + '<td class="' + r.widgetContentClass + '"/>' + (s ? i : "") + "</tr>", a.add(this.slotDuration);
            for (var t, n, i, r = this.view, s = this.isRTL, o = "", l = 0 === this.slotDuration.asMinutes() % 15, a = e.duration(+this.minTime) ; this.maxTime > a;) t = this.start.clone().time(a), n = t.minutes(), i = '<td class="fc-axis fc-time ' + r.widgetContentClass + '" ' + r.axisStyleAttr() + ">" + (l && n ? "" : "<span>" + z(t.format(this.axisFormat)) + ":00</span>") + "</td>", o += "<tr " + (n ? 'class="fc-minor"' : "") + ">" + (s ? "" : i) + '<td class="' + r.widgetContentClass + '"/>' + (s ? i : "") + "</tr>", a.add(this.slotDuration);
            //for (var t, n, i, r = this.view, s = this.isRTL, o = "", l = 0 === this.slotDuration.asMinutes() % 15, a = e.duration(+this.minTime) ; this.maxTime > a;) t = this.start.clone().time(a), n = t.minutes(), i = '<td class="fc-axis fc-time ' + r.widgetContentClass + '" ' + r.axisStyleAttr() + ">" + (l && n ? "" : "<span>" + z(t.format(this.axisFormat)) + ":00</span>") + "</td>", o += "<tr " + (n ? 'class="fc-minor"' : "") + ">" + (s ? "" : i) + '<td class="' + r.widgetContentClass + '"><span>' + z(t.format(this.axisFormat)) + '</span></td>' + (s ? i : "") + "</tr>", a.add(this.slotDuration);

            return o
        },
        processOptions: function () {
            var t = this.view,
                n = t.opt("slotDuration"),
                i = t.opt("snapDuration");
            n = e.duration(n), i = i ? e.duration(i) : n, this.slotDuration = n, this.snapDuration = i, this.minTime = e.duration(t.opt("minTime")), this.maxTime = e.duration(t.opt("maxTime")), this.axisFormat = t.opt("axisFormat") || t.opt("smallTimeFormat")
        },
        computeColHeadFormat: function () {
            return this.colCnt > 1 ? this.view.opt("dayOfMonthFormat") : "dddd"
        },
        computeEventTimeFormat: function () {
            return this.view.opt("noMeridiemTimeFormat")
        },
        computeDisplayEventEnd: function () {
            return !0
        },
        updateCells: function () {
            var t, e = this.view,
                n = [];
            for (t = this.start.clone() ; t.isBefore(this.end) ;) n.push({
                day: t.clone()
            }), t.add(1, "day"), t = e.skipHiddenDays(t);
            this.isRTL && n.reverse(), this.colData = n, this.colCnt = n.length, this.rowCnt = Math.ceil((this.maxTime - this.minTime) / this.snapDuration)
        },
        computeCellRange: function (t) {
            var e = this.computeSnapTime(t.row),
                n = this.view.calendar.rezoneDate(t.day).time(e),
                i = n.clone().add(this.snapDuration);
            return {
                start: n,
                end: i
            }
        },
        getColEl: function (t) {
            return this.dayEls.eq(t)
        },
        computeSnapTime: function (t) {
            return e.duration(this.minTime + this.snapDuration * t)
        },
        rangeToSegs: function (t) {
            var e, n, i, r, s = this.colCnt,
                o = [];
            for (t = {
                start: t.start.clone().stripZone(),
                end: t.end.clone().stripZone()
            }, n = 0; s > n; n++) i = this.colData[n].day, r = {
                start: i.clone().time(this.minTime),
                end: i.clone().time(this.maxTime)
            }, e = y(t, r), e && (e.col = n, o.push(e));
            return o
        },
        resize: function () {
            this.computeSlatTops(), this.updateSegVerticals()
        },
        computeRowCoords: function () {
            var t, e, n = this.el.offset().top,
                i = [];
            for (t = 0; this.rowCnt > t; t++) e = {
                top: n + this.computeTimeTop(this.computeSnapTime(t))
            }, t > 0 && (i[t - 1].bottom = e.top), i.push(e);
            return e.bottom = e.top + this.computeTimeTop(this.computeSnapTime(t)), i
        },
        computeDateTop: function (t, n) {
            return this.computeTimeTop(e.duration(t.clone().stripZone() - n.clone().stripTime()))
        },
        computeTimeTop: function (t) {
            var e, n, i, r, s = (t - this.minTime) / this.slotDuration;
            return s = Math.max(0, s), s = Math.min(this.slatEls.length, s), e = Math.floor(s), n = s - e, i = this.slatTops[e], n ? (r = this.slatTops[e + 1], i + (r - i) * n) : i
        },
        computeSlatTops: function () {
            var e, n = [];
            this.slatEls.each(function (i, r) {
                e = t(r).position().top, n.push(e)
            }), n.push(e + this.slatEls.last().outerHeight()), this.slatTops = n
        },
        renderDrag: function (t, e) {
            var n;
            return e ? (this.renderRangeHelper(t, e), n = this.view.opt("dragOpacity"), void 0 !== n && this.helperEl.css("opacity", n), !0) : (this.renderHighlight(this.view.calendar.ensureVisibleEventRange(t)), void 0)
        },
        destroyDrag: function () {
            this.destroyHelper(), this.destroyHighlight()
        },
        renderEventResize: function (t, e) {
            this.renderRangeHelper(t, e)
        },
        destroyEventResize: function () {
            this.destroyHelper()
        },
        renderHelper: function (e, n) {
            var i, r, s, o, l = this.eventsToSegs([e]);
            for (l = this.renderFgSegEls(l), i = this.renderSegTable(l), r = 0; l.length > r; r++) s = l[r], n && n.col === s.col && (o = n.el, s.el.css({
                left: o.css("left"),
                right: o.css("right"),
                "margin-left": o.css("margin-left"),
                "margin-right": o.css("margin-right")
            }));
            this.helperEl = t('<div class="fc-helper-skeleton"/>').append(i).appendTo(this.el)
        },
        destroyHelper: function () {
            this.helperEl && (this.helperEl.remove(), this.helperEl = null)
        },
        renderSelection: function (t) {
            this.view.opt("selectHelper") ? this.renderRangeHelper(t) : this.renderHighlight(t)
        },
        destroySelection: function () {
            this.destroyHelper(), this.destroyHighlight()
        },
        renderFill: function (e, n, i) {
            var r, s, o, l, a, u, d, c, h, f;
            if (n.length) {
                for (n = this.renderFillSegEls(e, n), r = this.groupSegCols(n), i = i || e.toLowerCase(), s = t('<div class="fc-' + i + '-skeleton">' + "<table><tr/></table>" + "</div>"), o = s.find("tr"), l = 0; r.length > l; l++)
                    if (a = r[l], u = t("<td/>").appendTo(o), a.length)
                        for (d = t('<div class="fc-' + i + '-container"/>').appendTo(u), c = this.colData[l].day, h = 0; a.length > h; h++) f = a[h], d.append(f.el.css({
                            top: this.computeDateTop(f.start, c),
                            bottom: -this.computeDateTop(f.end, c)
                        }));
                this.bookendCells(o, e), this.el.append(s), this.elsByFill[e] = s
            }
            return n
        }
    });
    Ue.mixin({
        eventSkeletonEl: null,
        renderFgSegs: function (e) {
            return e = this.renderFgSegEls(e), this.el.append(this.eventSkeletonEl = t('<div class="fc-content-skeleton"/>').append(this.renderSegTable(e))), e
        },
        destroyFgSegs: function () {
            this.eventSkeletonEl && (this.eventSkeletonEl.remove(), this.eventSkeletonEl = null)
        },
        renderSegTable: function (e) {
            var n, i, r, s, o, l, a = t("<table><tr/></table>"),
                u = a.find("tr");
            for (n = this.groupSegCols(e), this.computeSegVerticals(e), s = 0; n.length > s; s++) {
                for (o = n[s], ae(o), l = t('<div class="fc-event-container"/>'), i = 0; o.length > i; i++) r = o[i], r.el.css(this.generateSegPositionCss(r)), 30 > r.bottom - r.top && r.el.addClass("fc-short"), l.append(r.el);
                u.append(t("<td/>").append(l))
            }
            return this.bookendCells(u, "eventSkeleton"), a
        },
        updateSegVerticals: function () {
            var t, e = (this.segs || []).concat(this.businessHourSegs || []);
            for (this.computeSegVerticals(e), t = 0; e.length > t; t++) e[t].el.css(this.generateSegVerticalCss(e[t]))
        },
        computeSegVerticals: function (t) {
            var e, n;
            for (e = 0; t.length > e; e++) n = t[e], n.top = this.computeDateTop(n.start, n.start), n.bottom = this.computeDateTop(n.end, n.start)
        },
        fgSegHtml: function (t, e) {
            var n, i, r, s = this.view,
                o = t.event,
                l = s.isEventDraggable(o),
                a = !e && t.isEnd && s.isEventResizable(o),
                u = this.getSegClasses(t, l, a),
                d = this.getEventSkinCss(o);
            return u.unshift("fc-time-grid-event"), s.isMultiDayEvent(o) ? (t.isStart || t.isEnd) && (n = this.getEventTimeText(t), i = this.getEventTimeText(t, "LT"), r = this.getEventTimeText({
                start: t.start
            })) : (n = this.getEventTimeText(o), i = this.getEventTimeText(o, "LT"), r = this.getEventTimeText({
                start: o.start
            })), '<a class="' + u.join(" ") + '"' + (o.url ? ' href="' + z(o.url) + '"' : "") + (d ? ' style="' + d + '"' : "") + ">" + '<div class="fc-content">' + (n ? '<div class="fc-time" data-start="' + z(r) + '"' + ' data-full="' + z(i) + '"' + ">" + "<span>" + z(n) + "</span>" + "</div>" : "") + (o.title ? '<div class="fc-title">' + z(o.title) + "</div>" : "") + "</div>" + '<div class="fc-bg"/>' + (a ? '<div class="fc-resizer"/>' : "") + "</a>"
        },
        generateSegPositionCss: function (t) {
            var e, n, i = this.view.opt("slotEventOverlap"),
                r = t.backwardCoord,
                s = t.forwardCoord,
                o = this.generateSegVerticalCss(t);
            return i && (s = Math.min(1, r + 2 * (s - r))), this.isRTL ? (e = 1 - s, n = r) : (e = r, n = 1 - s), o.zIndex = t.level + 1, o.left = 100 * e + "%", o.right = 100 * n + "%", i && t.forwardPressure && (o[this.isRTL ? "marginLeft" : "marginRight"] = 20), o
        },
        generateSegVerticalCss: function (t) {
            return {
                top: t.top,
                bottom: -t.bottom
            }
        },
        groupSegCols: function (t) {
            var e, n = [];
            for (e = 0; this.colCnt > e; e++) n.push([]);
            for (e = 0; t.length > e; e++) n[t[e].col].push(t[e]);
            return n
        }
    });
    var qe = De.View = K.extend({
        type: null,
        name: null,
        title: null,
        calendar: null,
        options: null,
        coordMap: null,
        el: null,
        start: null,
        end: null,
        intervalStart: null,
        intervalEnd: null,
        intervalDuration: null,
        intervalUnit: null,
        isSelected: !1,
        scrollerEl: null,
        scrollTop: null,
        widgetHeaderClass: null,
        widgetContentClass: null,
        highlightStateClass: null,
        nextDayThreshold: null,
        isHiddenDayHash: null,
        documentMousedownProxy: null,
        constructor: function (n, i, r) {
            this.calendar = n, this.options = i, this.type = this.name = r, this.nextDayThreshold = e.duration(this.opt("nextDayThreshold")), this.initTheming(), this.initHiddenDays(), this.documentMousedownProxy = t.proxy(this, "documentMousedown"), this.initialize()
        },
        initialize: function () { },
        opt: function (e) {
            var n;
            return n = this.options[e], void 0 !== n ? n : (n = this.calendar.options[e], t.isPlainObject(n) && !r(e) ? w(n, this.type) : n)
        },
        trigger: function (t, e) {
            var n = this.calendar;
            return n.trigger.apply(n, [t, e || this].concat(Array.prototype.slice.call(arguments, 2), [this]))
        },
        setDate: function (t) {
            this.setRange(this.computeRange(t))
        },
        setRange: function (e) {
            t.extend(this, e)
        },
        computeRange: function (t) {
            var n, i, r = e.duration(this.opt("duration") || this.constructor.duration || {
                days: 1
            }),
                s = b(r),
                o = t.clone().startOf(s),
                l = o.clone().add(r);
            return D("days", r) ? (o.stripTime(), l.stripTime()) : (o.hasTime() || (o = this.calendar.rezoneDate(o)), l.hasTime() || (l = this.calendar.rezoneDate(l))), n = o.clone(), n = this.skipHiddenDays(n), i = l.clone(), i = this.skipHiddenDays(i, -1, !0), {
                intervalDuration: r,
                intervalUnit: s,
                intervalStart: o,
                intervalEnd: l,
                start: n,
                end: i
            }
        },
        computePrevDate: function (t) {
            return this.massageCurrentDate(t.clone().startOf(this.intervalUnit).subtract(this.intervalDuration), -1)
        },
        computeNextDate: function (t) {
            return this.massageCurrentDate(t.clone().startOf(this.intervalUnit).add(this.intervalDuration))
        },
        massageCurrentDate: function (t, n) {
            return this.intervalDuration <= e.duration({
                days: 1
            }) && this.isHiddenDay(t) && (t = this.skipHiddenDays(t, n), t.startOf("day")), t
        },
        updateTitle: function () {
            this.title = this.computeTitle()
        },
        computeTitle: function () {
            return this.formatRange({
                start: this.intervalStart,
                end: this.intervalEnd
            }, this.opt("titleFormat") || this.computeTitleFormat(), this.opt("titleRangeSeparator"))
        },
        computeTitleFormat: function () {
            return "year" == this.intervalUnit ? "YYYY" : "month" == this.intervalUnit ? this.opt("monthYearFormat") : this.intervalDuration.as("days") > 1 ? "ll" : "LL"
        },
        formatRange: function (t, e, n) {
            var i = t.end;
            return i.hasTime() || (i = i.clone().subtract(1)), j(t.start, i, e, n, this.opt("isRTL"))
        },
        renderView: function () {
            this.render(), this.updateSize(), this.initializeScroll(), this.trigger("viewRender", this, this, this.el), t(document).on("mousedown", this.documentMousedownProxy)
        },
        render: function () { },
        destroyView: function () {
            this.unselect(), this.destroyViewEvents(), this.destroy(), this.trigger("viewDestroy", this, this, this.el), t(document).off("mousedown", this.documentMousedownProxy)
        },
        destroy: function () {
            this.el.empty()
        },
        initTheming: function () {
            var t = this.opt("theme") ? "ui" : "fc";
            this.widgetHeaderClass = t + "-widget-header", this.widgetContentClass = t + "-widget-content", this.highlightStateClass = t + "-state-highlight"
        },
        updateSize: function (t) {
            t && this.recordScroll(), this.updateHeight(), this.updateWidth()
        },
        updateWidth: function () { },
        updateHeight: function () {
            var t = this.calendar;
            this.setHeight(t.getSuggestedViewHeight(), t.isHeightAuto())
        },
        setHeight: function () { },
        computeScrollerHeight: function (t, e) {
            var n, i;
            return e = e || this.scrollerEl, n = this.el.add(e), n.css({
                position: "relative",
                left: -1
            }), i = this.el.outerHeight() - e.height(), n.css({
                position: "",
                left: ""
            }), t - i
        },
        initializeScroll: function () { },
        recordScroll: function () {
            this.scrollerEl && (this.scrollTop = this.scrollerEl.scrollTop())
        },
        restoreScroll: function () {
            null !== this.scrollTop && this.scrollerEl.scrollTop(this.scrollTop)
        },
        renderViewEvents: function (t) {
            this.renderEvents(t), this.eventSegEach(function (t) {
                this.trigger("eventAfterRender", t.event, t.event, t.el)
            }), this.trigger("eventAfterAllRender")
        },
        renderEvents: function () { },
        destroyViewEvents: function () {
            this.eventSegEach(function (t) {
                this.trigger("eventDestroy", t.event, t.event, t.el)
            }), this.destroyEvents()
        },
        destroyEvents: function () { },
        resolveEventEl: function (e, n) {
            var i = this.trigger("eventRender", e, e, n);
            return i === !1 ? n = null : i && i !== !0 && (n = t(i)), n
        },
        showEvent: function (t) {
            this.eventSegEach(function (t) {
                t.el.css("visibility", "")
            }, t)
        },
        hideEvent: function (t) {
            this.eventSegEach(function (t) {
                t.el.css("visibility", "hidden")
            }, t)
        },
        eventSegEach: function (t, e) {
            var n, i = this.getEventSegs();
            for (n = 0; i.length > n; n++) e && i[n].event._id !== e._id || t.call(this, i[n])
        },
        getEventSegs: function () {
            return []
        },
        isEventDraggable: function (t) {
            var e = t.source || {};
            return F(t.startEditable, e.startEditable, this.opt("eventStartEditable"), t.editable, e.editable, this.opt("editable"))
        },
        reportEventDrop: function (t, e, n, i) {
            var r = this.calendar,
                s = r.mutateEvent(t, e),
                o = function () {
                    s.undo(), r.reportEventChange()
                };
            this.triggerEventDrop(t, s.dateDelta, o, n, i), r.reportEventChange()
        },
        triggerEventDrop: function (t, e, n, i, r) {
            this.trigger("eventDrop", i[0], t, e, n, r, {})
        },
        reportExternalDrop: function (e, n, i, r, s) {
            var o, l, a = e.eventProps;
            a && (o = t.extend({}, a, n), l = this.calendar.renderEvent(o, e.stick)[0]), this.triggerExternalDrop(l, n, i, r, s)
        },
        triggerExternalDrop: function (t, e, n, i, r) {
            this.trigger("drop", n[0], e.start, i, r), t && this.trigger("eventReceive", null, t)
        },
        renderDrag: function () { },
        destroyDrag: function () { },
        isEventResizable: function (t) {
            var e = t.source || {};
            return F(t.durationEditable, e.durationEditable, this.opt("eventDurationEditable"), t.editable, e.editable, this.opt("editable"))
        },
        reportEventResize: function (t, e, n, i) {
            var r = this.calendar,
                s = r.mutateEvent(t, {
                    end: e
                }),
                o = function () {
                    s.undo(), r.reportEventChange()
                };
            this.triggerEventResize(t, s.durationDelta, o, n, i), r.reportEventChange()
        },
        triggerEventResize: function (t, e, n, i, r) {
            this.trigger("eventResize", i[0], t, e, n, r, {})
        },
        select: function (t, e) {
            this.unselect(e), this.renderSelection(t), this.reportSelection(t, e)
        },
        renderSelection: function () { },
        reportSelection: function (t, e) {
            this.isSelected = !0, this.trigger("select", null, t.start, t.end, e)
        },
        unselect: function (t) {
            this.isSelected && (this.isSelected = !1, this.destroySelection(), this.trigger("unselect", null, t))
        },
        destroySelection: function () { },
        documentMousedown: function (e) {
            var n;
            this.isSelected && this.opt("unselectAuto") && v(e) && (n = this.opt("unselectCancel"), n && t(e.target).closest(n).length || this.unselect(e))
        },
        initHiddenDays: function () {
            var e, n = this.opt("hiddenDays") || [],
                i = [],
                r = 0;
            for (this.opt("weekends") === !1 && n.push(0, 6), e = 0; 7 > e; e++) (i[e] = -1 !== t.inArray(e, n)) || r++;
            if (!r) throw "invalid hiddenDays";
            this.isHiddenDayHash = i
        },
        isHiddenDay: function (t) {
            return e.isMoment(t) && (t = t.day()), this.isHiddenDayHash[t]
        },
        skipHiddenDays: function (t, e, n) {
            var i = t.clone();
            for (e = e || 1; this.isHiddenDayHash[(i.day() + (n ? e : 0) + 7) % 7];) i.add(e, "days");
            return i
        },
        computeDayRange: function (t) {
            var e, n = t.start.clone().stripTime(),
                i = t.end,
                r = null;
            return i && (r = i.clone().stripTime(), e = +i.time(), e && e >= this.nextDayThreshold && r.add(1, "days")), (!i || n >= r) && (r = n.clone().add(1, "days")), {
                start: n,
                end: r
            }
        },
        isMultiDayEvent: function (t) {
            var e = this.computeDayRange(t);
            return e.end.diff(e.start, "days") > 1
        }
    });
    De.sourceNormalizers = [], De.sourceFetchers = [];
    var Ke = {
        dataType: "json",
        cache: !1
    },
        Qe = 1,
        Je = Ce.basic = qe.extend({
            dayGrid: null,
            dayNumbersVisible: !1,
            weekNumbersVisible: !1,
            weekNumberWidth: null,
            headRowEl: null,
            initialize: function () {
                this.dayGrid = new $e(this), this.coordMap = this.dayGrid.coordMap
            },
            setRange: function (t) {
                qe.prototype.setRange.call(this, t), this.dayGrid.breakOnWeeks = /year|month|week/.test(this.intervalUnit), this.dayGrid.setRange(t)
            },
            computeRange: function (t) {
                var e = qe.prototype.computeRange.call(this, t);
                return /year|month/.test(e.intervalUnit) && (e.start.startOf("week"), e.start = this.skipHiddenDays(e.start), e.end.weekday() && (e.end.add(1, "week").startOf("week"), e.end = this.skipHiddenDays(e.end, -1, !0))), e
            },
            render: function () {
                this.dayNumbersVisible = this.dayGrid.rowCnt > 1, this.weekNumbersVisible = this.opt("weekNumbers"), this.dayGrid.numbersVisible = this.dayNumbersVisible || this.weekNumbersVisible, this.el.addClass("fc-basic-view").html(this.renderHtml()), this.headRowEl = this.el.find("thead .fc-row"), this.scrollerEl = this.el.find(".fc-day-grid-container"), this.dayGrid.coordMap.containerEl = this.scrollerEl, this.dayGrid.el = this.el.find(".fc-day-grid"), this.dayGrid.render(this.hasRigidRows())
            },
            destroy: function () {
                this.dayGrid.destroy(), qe.prototype.destroy.call(this)
            },
            renderHtml: function () {
                return '<table><thead><tr><td class="' + this.widgetHeaderClass + '">' + this.dayGrid.headHtml() + "</td>" + "</tr>" + "</thead>" + "<tbody>" + "<tr>" + '<td class="' + this.widgetContentClass + '">' + '<div class="fc-day-grid-container">' + '<div class="fc-day-grid"/>' + "</div>" + "</td>" + "</tr>" + "</tbody>" + "</table>"
            },
            headIntroHtml: function () {
                return this.weekNumbersVisible ? '<th class="fc-week-number ' + this.widgetHeaderClass + '" ' + this.weekNumberStyleAttr() + ">" + "<span>" + z(this.opt("weekNumberTitle")) + "</span>" + "</th>" : void 0
            },
            numberIntroHtml: function (t) {
                return this.weekNumbersVisible ? '<td class="fc-week-number" ' + this.weekNumberStyleAttr() + ">" + "<span>" + this.calendar.calculateWeekNumber(this.dayGrid.getCell(t, 0).start) + "</span>" + "</td>" : void 0
            },
            dayIntroHtml: function () {
                return this.weekNumbersVisible ? '<td class="fc-week-number ' + this.widgetContentClass + '" ' + this.weekNumberStyleAttr() + "></td>" : void 0
            },
            introHtml: function () {
                return this.weekNumbersVisible ? '<td class="fc-week-number" ' + this.weekNumberStyleAttr() + "></td>" : void 0
            },
            numberCellHtml: function (t) {
                var e, n = t.start;
                return this.dayNumbersVisible ? (e = this.dayGrid.getDayClasses(n), e.unshift("fc-day-number"), '<td class="' + e.join(" ") + '" data-date="' + n.format() + '">' + n.date() + "</td>") : "<td/>"
            },
            weekNumberStyleAttr: function () {
                return null !== this.weekNumberWidth ? 'style="width:' + this.weekNumberWidth + 'px"' : ""
            },
            hasRigidRows: function () {
                var t = this.opt("eventLimit");
                return t && "number" != typeof t
            },
            updateWidth: function () {
                this.weekNumbersVisible && (this.weekNumberWidth = h(this.el.find(".fc-week-number")))
            },
            setHeight: function (t, e) {
                var n, i = this.opt("eventLimit");
                g(this.scrollerEl), l(this.headRowEl), this.dayGrid.destroySegPopover(), i && "number" == typeof i && this.dayGrid.limitRows(i), n = this.computeScrollerHeight(t), this.setGridHeight(n, e), i && "number" != typeof i && this.dayGrid.limitRows(i), !e && f(this.scrollerEl, n) && (o(this.headRowEl, m(this.scrollerEl)), n = this.computeScrollerHeight(t), this.scrollerEl.height(n), this.restoreScroll())
            },
            setGridHeight: function (t, e) {
                e ? c(this.dayGrid.rowEls) : d(this.dayGrid.rowEls, t, !0)
            },
            renderEvents: function (t) {
                this.dayGrid.renderEvents(t), this.updateHeight()
            },
            getEventSegs: function () {
                return this.dayGrid.getEventSegs()
            },
            destroyEvents: function () {
                this.recordScroll(), this.dayGrid.destroyEvents()
            },
            renderDrag: function (t, e) {
                return this.dayGrid.renderDrag(t, e)
            },
            destroyDrag: function () {
                this.dayGrid.destroyDrag()
            },
            renderSelection: function (t) {
                this.dayGrid.renderSelection(t)
            },
            destroySelection: function () {
                this.dayGrid.destroySelection()
            }
        });
    n({
        fixedWeekCount: !0
    });
    var tn = Ce.month = Je.extend({
        computeRange: function (t) {
            var e, n = Je.prototype.computeRange.call(this, t);
            return this.isFixedWeeks() && (e = Math.ceil(n.end.diff(n.start, "weeks", !0)), n.end.add(6 - e, "weeks")), n
        },
        setGridHeight: function (t, e) {
            e = e || "variable" === this.opt("weekMode"), e && (t *= this.rowCnt / 6), d(this.dayGrid.rowEls, t, !e)
        },
        isFixedWeeks: function () {
            var t = this.opt("weekMode");
            return t ? "fixed" === t : this.opt("fixedWeekCount")
        }
    });
    tn.duration = {
        months: 1
    }, Ce.basicWeek = {
        type: "basic",
        duration: {
            weeks: 1
        }
    }, Ce.basicDay = {
        type: "basic",
        duration: {
            days: 1
        }
    }, n({
        allDaySlot: !0,
        allDayText: "Todo Dia",
        scrollTime: "06:00:00",
        slotDuration: "00:30:00",
        minTime: "00:00:00",
        maxTime: "24:00:00",
        slotEventOverlap: !0
    });
    var en = 5;
    Ce.agenda = qe.extend({
        timeGrid: null,
        dayGrid: null,
        axisWidth: null,
        noScrollRowEls: null,
        bottomRuleEl: null,
        bottomRuleHeight: null,
        initialize: function () {
            this.timeGrid = new Ue(this), this.opt("allDaySlot") ? (this.dayGrid = new $e(this), this.coordMap = new Ze([this.dayGrid.coordMap, this.timeGrid.coordMap])) : this.coordMap = this.timeGrid.coordMap
        },
        setRange: function (t) {
            qe.prototype.setRange.call(this, t), this.timeGrid.setRange(t), this.dayGrid && this.dayGrid.setRange(t)
        },
        render: function () {
            this.el.addClass("fc-agenda-view").html(this.renderHtml()), this.scrollerEl = this.el.find(".fc-time-grid-container"), this.timeGrid.coordMap.containerEl = this.scrollerEl, this.timeGrid.el = this.el.find(".fc-time-grid"), this.timeGrid.render(), this.bottomRuleEl = t('<hr class="' + this.widgetHeaderClass + '"/>').appendTo(this.timeGrid.el), this.dayGrid && (this.dayGrid.el = this.el.find(".fc-day-grid"), this.dayGrid.render(), this.dayGrid.bottomCoordPadding = this.dayGrid.el.next("hr").outerHeight()), this.noScrollRowEls = this.el.find(".fc-row:not(.fc-scroller *)")
        },
        destroy: function () {
            this.timeGrid.destroy(), this.dayGrid && this.dayGrid.destroy(), qe.prototype.destroy.call(this)
        },
        renderHtml: function () {
            return '<table><thead><tr><td class="' + this.widgetHeaderClass + '">' + this.timeGrid.headHtml() + "</td>" + "</tr>" + "</thead>" + "<tbody>" + "<tr>" + '<td class="' + this.widgetContentClass + '">' + (this.dayGrid ? '<div class="fc-day-grid"/><hr class="' + this.widgetHeaderClass + '"/>' : "") + '<div class="fc-time-grid-container">' + '<div class="fc-time-grid"/>' + "</div>" + "</td>" + "</tr>" + "</tbody>" + "</table>"
        },
        headIntroHtml: function () {
            var t, e, n, i;
            return this.opt("weekNumbers") ? (t = this.timeGrid.getCell(0).start, e = this.calendar.calculateWeekNumber(t), n = this.opt("weekNumberTitle"), i = this.opt("isRTL") ? e + n : n + e, '<th class="fc-axis fc-week-number ' + this.widgetHeaderClass + '" ' + this.axisStyleAttr() + ">" + "<span>" + z(i) + "</span>" + "</th>") : '<th class="fc-axis ' + this.widgetHeaderClass + '" ' + this.axisStyleAttr() + "></th>"
        },
        dayIntroHtml: function () {
            return '<td class="fc-axis ' + this.widgetContentClass + '" ' + this.axisStyleAttr() + ">" + "<span>" + (this.opt("allDayHtml") || z(this.opt("allDayText"))) + "</span>" + "</td>"
        },
        slotBgIntroHtml: function () {
            return '<td class="fc-axis ' + this.widgetContentClass + '" ' + this.axisStyleAttr() + "></td>"
        },
        introHtml: function () {
            return '<td class="fc-axis" ' + this.axisStyleAttr() + "></td>"
        },
        axisStyleAttr: function () {
            return null !== this.axisWidth ? 'style="width:' + this.axisWidth + 'px"' : ""
        },
        updateSize: function (t) {
            t && this.timeGrid.resize(), qe.prototype.updateSize.call(this, t)
        },
        updateWidth: function () {
            this.axisWidth = h(this.el.find(".fc-axis"))
        },
        setHeight: function (t, e) {
            var n, i;
            null === this.bottomRuleHeight && (this.bottomRuleHeight = this.bottomRuleEl.outerHeight()), this.bottomRuleEl.hide(), this.scrollerEl.css("overflow", ""), g(this.scrollerEl), l(this.noScrollRowEls), this.dayGrid && (this.dayGrid.destroySegPopover(), n = this.opt("eventLimit"), n && "number" != typeof n && (n = en), n && this.dayGrid.limitRows(n)), e || (i = this.computeScrollerHeight(t), f(this.scrollerEl, i) ? (o(this.noScrollRowEls, m(this.scrollerEl)), i = this.computeScrollerHeight(t), this.scrollerEl.height(i), this.restoreScroll()) : (this.scrollerEl.height(i).css("overflow", "hidden"), this.bottomRuleEl.show()))
        },
        initializeScroll: function () {
            function t() {
                n.scrollerEl.scrollTop(r)
            }
            var n = this,
                i = e.duration(this.opt("scrollTime")),
                r = this.timeGrid.computeTimeTop(i);
            r = Math.ceil(r), r && r++, t(), setTimeout(t, 0)
        },
        renderEvents: function (t) {
            var e, n, i = [],
                r = [],
                s = [];
            for (n = 0; t.length > n; n++) t[n].allDay ? i.push(t[n]) : r.push(t[n]);
            e = this.timeGrid.renderEvents(r), this.dayGrid && (s = this.dayGrid.renderEvents(i)), this.updateHeight()
        },
        getEventSegs: function () {
            return this.timeGrid.getEventSegs().concat(this.dayGrid ? this.dayGrid.getEventSegs() : [])
        },
        destroyEvents: function () {
            this.recordScroll(), this.timeGrid.destroyEvents(), this.dayGrid && this.dayGrid.destroyEvents()
        },
        renderDrag: function (t, e) {
            return t.start.hasTime() ? this.timeGrid.renderDrag(t, e) : this.dayGrid ? this.dayGrid.renderDrag(t, e) : void 0
        },
        destroyDrag: function () {
            this.timeGrid.destroyDrag(), this.dayGrid && this.dayGrid.destroyDrag()
        },
        renderSelection: function (t) {
            t.start.hasTime() || t.end.hasTime() ? this.timeGrid.renderSelection(t) : this.dayGrid && this.dayGrid.renderSelection(t)
        },
        destroySelection: function () {
            this.timeGrid.destroySelection(), this.dayGrid && this.dayGrid.destroySelection()
        }
    }), Ce.agendaWeek = {
        type: "agenda",
        duration: {
            weeks: 1
        }
    }, Ce.agendaDay = {
        type: "agenda",
        duration: {
            days: 1
        }
    }
});
! function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
    function a(a, r, t, d, c) {
        function i(o, n) {
            var r = n || [{
                message: o
            }],
                l = window.console,
                t = l ? l.warn || l.log : null;
            (a.googleCalendarError || e.noop).apply(c, r), (c.options.googleCalendarError || e.noop).apply(c, r), t && t.apply(l, [o].concat(n || []))
        }
        var s, u, g = n + "/" + encodeURIComponent(a.googleCalendarId) + "/events?callback=?",
            p = a.googleCalendarApiKey || c.options.googleCalendarApiKey,
            m = a.success;
        return p ? (r.hasZone() || (r = r.clone().utc().add(-1, "day")), t.hasZone() || (t = t.clone().utc().add(1, "day")), d && "local" != d && (u = d.replace(" ", "_")), s = e.extend({}, a.data || {}, {
            key: p,
            timeMin: r.format(),
            timeMax: t.format(),
            timeZone: u,
            singleEvents: !0,
            maxResults: 9999
        }), e.extend({}, a, {
            googleCalendarId: null,
            url: g,
            data: s,
            startParam: !1,
            endParam: !1,
            localParam: !1,
            timezoneParam: !1,
            success: function (a) {
                var n, r, t = [];
                if (a.error) i("Google Calendar API: " + a.error.message, a.error.errors);
                else if (a.items && (e.each(a.items, function (e, a) {
                        var n = a.htmlLink;
                        u && (n = o(n, "ctz=" + u)), t.push({
                        id: a.id,
                        title: a.summary,
                        start: a.start.dateTime || a.start.date,
                        end: a.end.dateTime || a.end.date,
                        url: n,
                        location: a.location,
                        description: a.description
                })
                }), n = [t].concat(Array.prototype.slice.call(arguments, 1)), r = l(m, this, n), e.isArray(r))) return r;
                return t
            }
        })) : (i("Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/"), {})
    }

    function o(e, a) {
        return e.replace(/(\?.*?)?(#|$)/, function (e, o, n) {
            return (o ? o + "&" : "?") + a + n
        })
    }
    var n = "https://www.googleapis.com/calendar/v3/calendars",
        r = e.fullCalendar,
        l = r.applyAll;
    r.sourceNormalizers.push(function (e) {
        var a, o = e.googleCalendarId,
            n = e.url;
        !o && n && ((a = /^[^\/]+@([^\/\.]+\.)*(google|googlemail|gmail)\.com$/.test(n)) ? o = n : ((a = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^\/]*)/.exec(n)) || (a = /^https?:\/\/www.google.com\/calendar\/feeds\/([^\/]*)/.exec(n))) && (o = decodeURIComponent(a[1])), o && (e.googleCalendarId = o)), o && (null == e.editable && (e.editable = !1), e.url = o)
    }), r.sourceFetchers.push(function (e, o, n, r) {
        return e.googleCalendarId ? a(e, o, n, r, this) : void 0
    })
});