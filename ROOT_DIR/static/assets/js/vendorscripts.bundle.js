!(function(t, e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function(t) {
        return e(t);
      })
    : "object" == typeof module && module.exports
      ? (module.exports = e(require("jquery")))
      : e(t.jQuery);
})(this, function(t) {
  !(function(T) {
    "use strict";
    var r, t, l, e, i, h, s;
    String.prototype.includes ||
      (
        (r = {}.toString),
        (t = (function() {
          try {
            var t = {},
              e = Object.defineProperty,
              i = e(t, t, t) && e;
          } catch (t) {}
          return i;
        })()),
        (l = "".indexOf),
        (e = function(t) {
          if (null == this) throw new TypeError();
          var e = String(this);
          if (t && "[object RegExp]" == r.call(t)) throw new TypeError();
          var i = e.length,
            s = String(t),
            n = s.length,
            o = 1 < arguments.length ? arguments[1] : void 0,
            a = o ? Number(o) : 0;
          return a != a && (a = 0), !(i < n + Math.min(Math.max(a, 0), i)) &&
            -1 != l.call(e, s, a);
        }),
        t
          ? t(String.prototype, "includes", {
              value: e,
              configurable: !0,
              writable: !0
            })
          : (String.prototype.includes = e)
      ), String.prototype.startsWith ||
      (
        (i = (function() {
          try {
            var t = {},
              e = Object.defineProperty,
              i = e(t, t, t) && e;
          } catch (t) {}
          return i;
        })()),
        (h = {}.toString),
        (s = function(t) {
          if (null == this) throw new TypeError();
          var e = String(this);
          if (t && "[object RegExp]" == h.call(t)) throw new TypeError();
          var i = e.length,
            s = String(t),
            n = s.length,
            o = 1 < arguments.length ? arguments[1] : void 0,
            a = o ? Number(o) : 0;
          a != a && (a = 0);
          var r = Math.min(Math.max(a, 0), i);
          if (i < n + r) return !1;
          for (var l = -1; ++l < n; )
            if (e.charCodeAt(r + l) != s.charCodeAt(l)) return !1;
          return !0;
        }),
        i
          ? i(String.prototype, "startsWith", {
              value: s,
              configurable: !0,
              writable: !0
            })
          : (String.prototype.startsWith = s)
      ), Object.keys ||
      (Object.keys = function(t, e, i) {
        for (e in ((i = []), t)) i.hasOwnProperty.call(t, e) && i.push(e);
        return i;
      });
    var n = { useDefault: !1, _set: T.valHooks.select.set };
    T.valHooks.select.set = function(t, e) {
      return e && !n.useDefault && T(t).data("selected", !0), n._set.apply(
        this,
        arguments
      );
    };
    var w = null,
      o = (function() {
        try {
          return new Event("change"), !0;
        } catch (t) {
          return !1;
        }
      })();
    function a(t) {
      return T.each(
        [
          { re: /[\xC0-\xC6]/g, ch: "A" },
          { re: /[\xE0-\xE6]/g, ch: "a" },
          { re: /[\xC8-\xCB]/g, ch: "E" },
          { re: /[\xE8-\xEB]/g, ch: "e" },
          { re: /[\xCC-\xCF]/g, ch: "I" },
          { re: /[\xEC-\xEF]/g, ch: "i" },
          { re: /[\xD2-\xD6]/g, ch: "O" },
          { re: /[\xF2-\xF6]/g, ch: "o" },
          { re: /[\xD9-\xDC]/g, ch: "U" },
          { re: /[\xF9-\xFC]/g, ch: "u" },
          { re: /[\xC7-\xE7]/g, ch: "c" },
          { re: /[\xD1]/g, ch: "N" },
          { re: /[\xF1]/g, ch: "n" }
        ],
        function() {
          t = t ? t.replace(this.re, this.ch) : "";
        }
      ), t;
    }
    (T.fn.triggerNative = function(t) {
      var e,
        i = this[0];
      i.dispatchEvent
        ? (
            o
              ? (e = new Event(t, { bubbles: !0 }))
              : (e = document.createEvent("Event")).initEvent(t, !0, !1),
            i.dispatchEvent(e)
          )
        : i.fireEvent
          ? (
              ((e = document.createEventObject()).eventType = t),
              i.fireEvent("on" + t, e)
            )
          : this.trigger(t);
    }), (T.expr.pseudos.icontains = function(t, e, i) {
      var s = T(t).find("a");
      return (s.data("tokens") || s.text())
        .toString()
        .toUpperCase()
        .includes(i[3].toUpperCase());
    }), (T.expr.pseudos.ibegins = function(t, e, i) {
      var s = T(t).find("a");
      return (s.data("tokens") || s.text())
        .toString()
        .toUpperCase()
        .startsWith(i[3].toUpperCase());
    }), (T.expr.pseudos.aicontains = function(t, e, i) {
      var s = T(t).find("a");
      return (s.data("tokens") || s.data("normalizedText") || s.text())
        .toString()
        .toUpperCase()
        .includes(i[3].toUpperCase());
    }), (T.expr.pseudos.aibegins = function(t, e, i) {
      var s = T(t).find("a");
      return (s.data("tokens") || s.data("normalizedText") || s.text())
        .toString()
        .toUpperCase()
        .startsWith(i[3].toUpperCase());
    });
    var d = function(e) {
        var i = function(t) {
            return e[t];
          },
          t = "(?:" + Object.keys(e).join("|") + ")",
          s = RegExp(t),
          n = RegExp(t, "g");
        return function(t) {
          return (t = null == t ? "" : "" + t), s.test(t) ? t.replace(n, i) : t;
        };
      },
      R = d({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      }),
      p = d({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#x27;": "'",
        "&#x60;": "`"
      }),
      c = function(t, e) {
        n.useDefault ||
          (
            (T.valHooks.select.set = n._set),
            (n.useDefault = !0)
          ), (this.$element = T(
          t
        )), (this.$newElement = null), (this.$button = null), (this.$menu = null), (this.$lis = null), (this.options = e), null ===
          this.options.title &&
          (this.options.title = this.$element.attr("title"));
        var i = this.options.windowPadding;
        "number" == typeof i &&
          (this.options.windowPadding = [i, i, i, i]), (this.val =
          c.prototype.val), (this.render = c.prototype.render), (this.refresh =
          c.prototype.refresh), (this.setStyle =
          c.prototype.setStyle), (this.selectAll =
          c.prototype.selectAll), (this.deselectAll =
          c.prototype.deselectAll), (this.destroy =
          c.prototype.destroy), (this.remove = c.prototype.remove), (this.show =
          c.prototype.show), (this.hide = c.prototype.hide), this.init();
      };
    function u(t) {
      var o,
        a = arguments,
        r = t;
      [].shift.apply(a);
      var e = this.each(function() {
        var t = T(this);
        if (t.is("select")) {
          var e = t.data("selectpicker"),
            i = "object" == typeof r && r;
          if (e) {
            if (i)
              for (var s in i) i.hasOwnProperty(s) && (e.options[s] = i[s]);
          } else {
            var n = T.extend(
              {},
              c.DEFAULTS,
              T.fn.selectpicker.defaults || {},
              t.data(),
              i
            );
            (n.template = T.extend(
              {},
              c.DEFAULTS.template,
              T.fn.selectpicker.defaults
                ? T.fn.selectpicker.defaults.template
                : {},
              t.data().template,
              i.template
            )), t.data("selectpicker", (e = new c(this, n)));
          }
          "string" == typeof r &&
            (o = e[r] instanceof Function ? e[r].apply(e, a) : e.options[r]);
        }
      });
      return void 0 !== o ? o : e;
    }
    (c.VERSION = "1.12.4"), (c.DEFAULTS = {
      noneSelectedText: "Nothing selected",
      noneResultsText: "No results matched {0}",
      countSelectedText: function(t, e) {
        return 1 == t ? "{0} item selected" : "{0} items selected";
      },
      maxOptionsText: function(t, e) {
        return [
          1 == t
            ? "Limit reached ({n} item max)"
            : "Limit reached ({n} items max)",
          1 == e
            ? "Group limit reached ({n} item max)"
            : "Group limit reached ({n} items max)"
        ];
      },
      selectAllText: "Select All",
      deselectAllText: "Deselect All",
      doneButton: !1,
      doneButtonText: "Close",
      multipleSeparator: ", ",
      styleBase: "btn",
      style: "btn-round btn-simple",
      size: "auto",
      title: null,
      selectedTextFormat: "values",
      width: !1,
      container: !1,
      hideDisabled: !1,
      showSubtext: !1,
      showIcon: !0,
      showContent: !0,
      dropupAuto: !0,
      header: !1,
      liveSearch: !1,
      liveSearchPlaceholder: null,
      liveSearchNormalize: !1,
      liveSearchStyle: "contains",
      actionsBox: !1,
      iconBase: "glyphicon",
      tickIcon: "glyphicon-ok",
      showTick: !1,
      template: { caret: '<span class="caret"></span>' },
      maxOptions: !1,
      mobile: !1,
      selectOnTab: !1,
      dropdownAlignRight: !1,
      windowPadding: 0
    }), (c.prototype = {
      constructor: c,
      init: function() {
        var e = this,
          t = this.$element.attr("id");
        this.$element.addClass(
          "bs-select-hidden"
        ), (this.liObj = {}), (this.multiple = this.$element.prop(
          "multiple"
        )), (this.autofocus = this.$element.prop(
          "autofocus"
        )), (this.$newElement = this.createView()), this.$element
          .after(this.$newElement)
          .appendTo(
            this.$newElement
          ), (this.$button = this.$newElement.children(
          "button"
        )), (this.$menu = this.$newElement.children(
          ".dropdown-menu"
        )), (this.$menuInner = this.$menu.children(
          ".inner"
        )), (this.$searchbox = this.$menu.find(
          "input"
        )), this.$element.removeClass("bs-select-hidden"), !0 ===
          this.options.dropdownAlignRight &&
          this.$menu.addClass("dropdown-menu-right"), void 0 !== t &&
          (
            this.$button.attr("data-id", t),
            T('label[for="' + t + '"]').click(function(t) {
              t.preventDefault(), e.$button.focus();
            })
          ), this.checkDisabled(), this.clickListener(), this.options
          .liveSearch &&
          this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this
          .options.container && this.selectPosition(), this.$menu.data(
          "this",
          this
        ), this.$newElement.data("this", this), this.options.mobile &&
          this.mobile(), this.$newElement.on({
          "hide.bs.dropdown": function(t) {
            e.$menuInner.attr("aria-expanded", !1), e.$element.trigger(
              "hide.bs.select",
              t
            );
          },
          "hidden.bs.dropdown": function(t) {
            e.$element.trigger("hidden.bs.select", t);
          },
          "show.bs.dropdown": function(t) {
            e.$menuInner.attr("aria-expanded", !0), e.$element.trigger(
              "show.bs.select",
              t
            );
          },
          "shown.bs.dropdown": function(t) {
            e.$element.trigger("shown.bs.select", t);
          }
        }), e.$element[0].hasAttribute("required") &&
          this.$element.on("invalid", function() {
            e.$button.addClass("bs-invalid"), e.$element.on({
              "focus.bs.select": function() {
                e.$button.focus(), e.$element.off("focus.bs.select");
              },
              "shown.bs.select": function() {
                e.$element.val(e.$element.val()).off("shown.bs.select");
              },
              "rendered.bs.select": function() {
                this.validity.valid &&
                  e.$button.removeClass("bs-invalid"), e.$element.off(
                  "rendered.bs.select"
                );
              }
            }), e.$button.on("blur.bs.select", function() {
              e.$element.focus().blur(), e.$button.off("blur.bs.select");
            });
          }), setTimeout(function() {
          e.$element.trigger("loaded.bs.select");
        });
      },
      createDropdown: function() {
        var t = this.multiple || this.options.showTick ? " show-tick" : "",
          e = this.$element.parent().hasClass("input-group")
            ? " input-group-btn"
            : "",
          i = this.autofocus ? " autofocus" : "",
          s = this.options.header
            ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' +
              this.options.header +
              "</div>"
            : "",
          n = this.options.liveSearch
            ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' +
              (null === this.options.liveSearchPlaceholder
                ? ""
                : ' placeholder="' +
                  R(this.options.liveSearchPlaceholder) +
                  '"') +
              ' role="textbox" aria-label="Search"></div>'
            : "",
          o =
            this.multiple && this.options.actionsBox
              ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' +
                this.options.selectAllText +
                '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' +
                this.options.deselectAllText +
                "</button></div></div>"
              : "",
          a =
            this.multiple && this.options.doneButton
              ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' +
                this.options.doneButtonText +
                "</button></div></div>"
              : "",
          r =
            '<div class="btn-group bootstrap-select' +
            t +
            e +
            '"><button type="button" class="' +
            this.options.styleBase +
            ' dropdown-toggle" data-toggle="dropdown"' +
            i +
            ' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' +
            this.options.template.caret +
            '</span></button><div class="dropdown-menu" role="combobox">' +
            s +
            n +
            o +
            '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>' +
            a +
            "</div></div>";
        return T(r);
      },
      createView: function() {
        var t = this.createDropdown(),
          e = this.createLi();
        return (t.find("ul")[0].innerHTML = e), t;
      },
      reloadLi: function() {
        var t = this.createLi();
        this.$menuInner[0].innerHTML = t;
      },
      createLi: function() {
        var x = this,
          y = [],
          w = 0,
          t = document.createElement("option"),
          C = -1,
          S = function(t, e, i, s) {
            return (
              "<li" +
              (void 0 !== i && "" !== i ? ' class="' + i + '"' : "") +
              (null != e ? ' data-original-index="' + e + '"' : "") +
              (null != s ? 'data-optgroup="' + s + '"' : "") +
              ">" +
              t +
              "</li>"
            );
          },
          $ = function(t, e, i, s) {
            return (
              '<a tabindex="0"' +
              (void 0 !== e ? ' class="' + e + '"' : "") +
              (i ? ' style="' + i + '"' : "") +
              (x.options.liveSearchNormalize
                ? ' data-normalized-text="' + a(R(T(t).html())) + '"'
                : "") +
              (void 0 !== s || null !== s ? ' data-tokens="' + s + '"' : "") +
              ' role="option">' +
              t +
              '<span class="' +
              x.options.iconBase +
              " " +
              x.options.tickIcon +
              ' check-mark"></span></a>'
            );
          };
        if (
          this.options.title &&
          !this.multiple &&
          (C--, !this.$element.find(".bs-title-option").length)
        ) {
          var e = this.$element[0];
          (t.className =
            "bs-title-option"), (t.innerHTML = this.options.title), (t.value =
            ""), e.insertBefore(t, e.firstChild), void 0 ===
            T(e.options[e.selectedIndex]).attr("selected") &&
            void 0 === this.$element.data("selected") &&
            (t.selected = !0);
        }
        var k = this.$element.find("option");
        return k.each(function(t) {
          var e = T(this);
          if ((C++, !e.hasClass("bs-title-option"))) {
            var i,
              s = this.className || "",
              n = R(this.style.cssText),
              o = e.data("content") ? e.data("content") : e.html(),
              a = e.data("tokens") ? e.data("tokens") : null,
              r =
                void 0 !== e.data("subtext")
                  ? '<small class="text-muted">' +
                    e.data("subtext") +
                    "</small>"
                  : "",
              l =
                void 0 !== e.data("icon")
                  ? '<span class="' +
                    x.options.iconBase +
                    " " +
                    e.data("icon") +
                    '"></span> '
                  : "",
              h = e.parent(),
              d = "OPTGROUP" === h[0].tagName,
              p = d && h[0].disabled,
              c = this.disabled || p;
            if (
              (
                "" !== l && c && (l = "<span>" + l + "</span>"),
                x.options.hideDisabled && ((c && !d) || p)
              )
            )
              return (i = e.data("prevHiddenIndex")), e
                .next()
                .data("prevHiddenIndex", void 0 !== i ? i : t), void C--;
            if (
              (
                e.data("content") ||
                  (o = l + '<span class="text">' + o + r + "</span>"),
                d && !0 !== e.data("divider")
              )
            ) {
              if (x.options.hideDisabled && c) {
                if (void 0 === h.data("allOptionsDisabled")) {
                  var u = h.children();
                  h.data(
                    "allOptionsDisabled",
                    u.filter(":disabled").length === u.length
                  );
                }
                if (h.data("allOptionsDisabled")) return void C--;
              }
              var g = " " + h[0].className || "";
              if (0 === e.index()) {
                w += 1;
                var f = h[0].label,
                  m =
                    void 0 !== h.data("subtext")
                      ? '<small class="text-muted">' +
                        h.data("subtext") +
                        "</small>"
                      : "";
                (f =
                  (h.data("icon")
                    ? '<span class="' +
                      x.options.iconBase +
                      " " +
                      h.data("icon") +
                      '"></span> '
                    : "") +
                  '<span class="text">' +
                  R(f) +
                  m +
                  "</span>"), 0 !== t &&
                  0 < y.length &&
                  (C++, y.push(S("", null, "divider", w + "div"))), C++, y.push(
                  S(f, null, "dropdown-header" + g, w)
                );
              }
              if (x.options.hideDisabled && c) return void C--;
              y.push(S($(o, "opt " + s + g, n, a), t, "", w));
            } else if (!0 === e.data("divider")) y.push(S("", t, "divider"));
            else if (!0 === e.data("hidden"))
              (i = e.data("prevHiddenIndex")), e
                .next()
                .data("prevHiddenIndex", void 0 !== i ? i : t), y.push(
                S($(o, s, n, a), t, "hidden is-hidden")
              );
            else {
              var v =
                this.previousElementSibling &&
                "OPTGROUP" === this.previousElementSibling.tagName;
              if (
                !v &&
                x.options.hideDisabled &&
                void 0 !== (i = e.data("prevHiddenIndex"))
              ) {
                var b = k.eq(i)[0].previousElementSibling;
                b && "OPTGROUP" === b.tagName && !b.disabled && (v = !0);
              }
              v && (C++, y.push(S("", null, "divider", w + "div"))), y.push(
                S($(o, s, n, a), t)
              );
            }
            x.liObj[t] = C;
          }
        }), this.multiple ||
          0 !== this.$element.find("option:selected").length ||
          this.options.title ||
          this.$element
            .find("option")
            .eq(0)
            .prop("selected", !0)
            .attr("selected", "selected"), y.join("");
      },
      findLis: function() {
        return null == this.$lis && (this.$lis = this.$menu.find("li")), this
          .$lis;
      },
      render: function(t) {
        var e,
          s = this,
          i = this.$element.find("option");
        !1 !== t &&
          i.each(function(t) {
            var e = s.findLis().eq(s.liObj[t]);
            s.setDisabled(
              t,
              this.disabled ||
                ("OPTGROUP" === this.parentNode.tagName &&
                  this.parentNode.disabled),
              e
            ), s.setSelected(t, this.selected, e);
          }), this.togglePlaceholder(), this.tabIndex();
        var n = i
            .map(function() {
              if (this.selected) {
                if (
                  s.options.hideDisabled &&
                  (this.disabled ||
                    ("OPTGROUP" === this.parentNode.tagName &&
                      this.parentNode.disabled))
                )
                  return;
                var t,
                  e = T(this),
                  i =
                    e.data("icon") && s.options.showIcon
                      ? '<i class="' +
                        s.options.iconBase +
                        " " +
                        e.data("icon") +
                        '"></i> '
                      : "";
                return (t =
                  s.options.showSubtext && e.data("subtext") && !s.multiple
                    ? ' <small class="text-muted">' +
                      e.data("subtext") +
                      "</small>"
                    : ""), void 0 !== e.attr("title")
                  ? e.attr("title")
                  : e.data("content") && s.options.showContent
                    ? e.data("content").toString()
                    : i + e.html() + t;
              }
            })
            .toArray(),
          o = this.multiple ? n.join(this.options.multipleSeparator) : n[0];
        if (
          this.multiple &&
          -1 < this.options.selectedTextFormat.indexOf("count")
        ) {
          var a = this.options.selectedTextFormat.split(">");
          if (
            (1 < a.length && n.length > a[1]) ||
            (1 == a.length && 2 <= n.length)
          ) {
            e = this.options.hideDisabled ? ", [disabled]" : "";
            var r = i.not('[data-divider="true"], [data-hidden="true"]' + e)
              .length;
            o = ("function" == typeof this.options.countSelectedText
              ? this.options.countSelectedText(n.length, r)
              : this.options.countSelectedText)
              .replace("{0}", n.length.toString())
              .replace("{1}", r.toString());
          }
        }
        null == this.options.title &&
          (this.options.title = this.$element.attr("title")), "static" ==
          this.options.selectedTextFormat && (o = this.options.title), o ||
          (o =
            void 0 !== this.options.title
              ? this.options.title
              : this.options.noneSelectedText), this.$button.attr(
          "title",
          p(T.trim(o.replace(/<[^>]*>?/g, "")))
        ), this.$button
          .children(".filter-option")
          .html(o), this.$element.trigger("rendered.bs.select");
      },
      setStyle: function(t, e) {
        this.$element.attr("class") &&
          this.$newElement.addClass(
            this.$element
              .attr("class")
              .replace(
                /selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,
                ""
              )
          );
        var i = t || this.options.style;
        "add" == e
          ? this.$button.addClass(i)
          : "remove" == e
            ? this.$button.removeClass(i)
            : (
                this.$button.removeClass(this.options.style),
                this.$button.addClass(i)
              );
      },
      liHeight: function(t) {
        if (t || (!1 !== this.options.size && !this.sizeInfo)) {
          var e = document.createElement("div"),
            i = document.createElement("div"),
            s = document.createElement("ul"),
            n = document.createElement("li"),
            o = document.createElement("li"),
            a = document.createElement("a"),
            r = document.createElement("span"),
            l =
              this.options.header &&
              0 < this.$menu.find(".popover-title").length
                ? this.$menu.find(".popover-title")[0].cloneNode(!0)
                : null,
            h = this.options.liveSearch ? document.createElement("div") : null,
            d =
              this.options.actionsBox &&
              this.multiple &&
              0 < this.$menu.find(".bs-actionsbox").length
                ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0)
                : null,
            p =
              this.options.doneButton &&
              this.multiple &&
              0 < this.$menu.find(".bs-donebutton").length
                ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0)
                : null;
          if (
            (
              (r.className = "text"),
              (e.className = this.$menu[0].parentNode.className + " open"),
              (i.className = "dropdown-menu"),
              (s.className = "dropdown-menu inner"),
              (n.className = "divider"),
              r.appendChild(document.createTextNode("Inner text")),
              a.appendChild(r),
              o.appendChild(a),
              s.appendChild(o),
              s.appendChild(n),
              l && i.appendChild(l),
              h
            )
          ) {
            var c = document.createElement("input");
            (h.className = "bs-searchbox"), (c.className =
              "form-control"), h.appendChild(c), i.appendChild(h);
          }
          d && i.appendChild(d), i.appendChild(s), p &&
            i.appendChild(p), e.appendChild(i), document.body.appendChild(e);
          var u = a.offsetHeight,
            g = l ? l.offsetHeight : 0,
            f = h ? h.offsetHeight : 0,
            m = d ? d.offsetHeight : 0,
            v = p ? p.offsetHeight : 0,
            b = T(n).outerHeight(!0),
            x = "function" == typeof getComputedStyle && getComputedStyle(i),
            y = x ? null : T(i),
            w = {
              vert:
                parseInt(x ? x.paddingTop : y.css("paddingTop")) +
                parseInt(x ? x.paddingBottom : y.css("paddingBottom")) +
                parseInt(x ? x.borderTopWidth : y.css("borderTopWidth")) +
                parseInt(x ? x.borderBottomWidth : y.css("borderBottomWidth")),
              horiz:
                parseInt(x ? x.paddingLeft : y.css("paddingLeft")) +
                parseInt(x ? x.paddingRight : y.css("paddingRight")) +
                parseInt(x ? x.borderLeftWidth : y.css("borderLeftWidth")) +
                parseInt(x ? x.borderRightWidth : y.css("borderRightWidth"))
            },
            C = {
              vert:
                w.vert +
                parseInt(x ? x.marginTop : y.css("marginTop")) +
                parseInt(x ? x.marginBottom : y.css("marginBottom")) +
                2,
              horiz:
                w.horiz +
                parseInt(x ? x.marginLeft : y.css("marginLeft")) +
                parseInt(x ? x.marginRight : y.css("marginRight")) +
                2
            };
          document.body.removeChild(e), (this.sizeInfo = {
            liHeight: u,
            headerHeight: g,
            searchHeight: f,
            actionsHeight: m,
            doneButtonHeight: v,
            dividerHeight: b,
            menuPadding: w,
            menuExtras: C
          });
        }
      },
      setSize: function() {
        if (
          (
            this.findLis(),
            this.liHeight(),
            this.options.header && this.$menu.css("padding-top", 0),
            !1 !== this.options.size
          )
        ) {
          var o,
            a,
            r,
            l,
            h,
            d,
            p,
            c,
            u = this,
            g = this.$menu,
            f = this.$menuInner,
            n = T(window),
            m = this.$newElement[0].offsetHeight,
            v = this.$newElement[0].offsetWidth,
            b = this.sizeInfo.liHeight,
            x = this.sizeInfo.headerHeight,
            y = this.sizeInfo.searchHeight,
            w = this.sizeInfo.actionsHeight,
            C = this.sizeInfo.doneButtonHeight,
            t = this.sizeInfo.dividerHeight,
            S = this.sizeInfo.menuPadding,
            $ = this.sizeInfo.menuExtras,
            e = this.options.hideDisabled ? ".disabled" : "",
            k = function() {
              var t,
                e = u.$newElement.offset(),
                i = T(u.options.container);
              u.options.container && !i.is("body")
                ? (
                    ((t = i.offset()).top += parseInt(i.css("borderTopWidth"))),
                    (t.left += parseInt(i.css("borderLeftWidth")))
                  )
                : (t = { top: 0, left: 0 });
              var s = u.options.windowPadding;
              (h = e.top - t.top - n.scrollTop()), (d =
                n.height() - h - m - t.top - s[2]), (p =
                e.left - t.left - n.scrollLeft()), (c =
                n.width() - p - v - t.left - s[1]), (h -= s[0]), (p -= s[3]);
            };
          if ((k(), "auto" === this.options.size)) {
            var i = function() {
              var t,
                e = function(e, i) {
                  return function(t) {
                    return i
                      ? t.classList ? t.classList.contains(e) : T(t).hasClass(e)
                      : !(t.classList
                          ? t.classList.contains(e)
                          : T(t).hasClass(e));
                  };
                },
                i = u.$menuInner[0].getElementsByTagName("li"),
                s = Array.prototype.filter
                  ? Array.prototype.filter.call(i, e("hidden", !1))
                  : u.$lis.not(".hidden"),
                n = Array.prototype.filter
                  ? Array.prototype.filter.call(s, e("dropdown-header", !0))
                  : s.filter(".dropdown-header");
              k(), (o = d - $.vert), (a = c - $.horiz), (l = u.options.container
                ? (
                    g.data("height") || g.data("height", g.height()),
                    (r = g.data("height")),
                    g.data("width") || g.data("width", g.width()),
                    g.data("width")
                  )
                : ((r = g.height()), g.width())), u.options.dropupAuto &&
                u.$newElement.toggleClass(
                  "dropup",
                  d < h && o - $.vert < r
                ), u.$newElement.hasClass("dropup") &&
                (o = h - $.vert), "auto" === u.options.dropdownAlignRight &&
                g.toggleClass(
                  "dropdown-menu-right",
                  c < p && a - $.horiz < l - v
                ), (t =
                3 < s.length + n.length ? 3 * b + $.vert - 2 : 0), g.css({
                "max-height": o + "px",
                overflow: "hidden",
                "min-height": t + x + y + w + C + "px"
              }), f.css({
                "max-height": o - x - y - w - C - S.vert + "px",
                "overflow-y": "auto",
                "min-height": Math.max(t - S.vert, 0) + "px"
              });
            };
            i(), this.$searchbox
              .off("input.getSize propertychange.getSize")
              .on("input.getSize propertychange.getSize", i), n
              .off("resize.getSize scroll.getSize")
              .on("resize.getSize scroll.getSize", i);
          } else if (
            this.options.size &&
            "auto" != this.options.size &&
            this.$lis.not(e).length > this.options.size
          ) {
            var s = this.$lis
                .not(".divider")
                .not(e)
                .children()
                .slice(0, this.options.size)
                .last()
                .parent()
                .index(),
              R = this.$lis.slice(0, s + 1).filter(".divider").length;
            (o = b * this.options.size + R * t + S.vert), (r = u.options
              .container
              ? (
                  g.data("height") || g.data("height", g.height()),
                  g.data("height")
                )
              : g.height()), u.options.dropupAuto &&
              this.$newElement.toggleClass(
                "dropup",
                d < h && o - $.vert < r
              ), g.css({
              "max-height": o + x + y + w + C + "px",
              overflow: "hidden",
              "min-height": ""
            }), f.css({
              "max-height": o - S.vert + "px",
              "overflow-y": "auto",
              "min-height": ""
            });
          }
        }
      },
      setWidth: function() {
        if ("auto" === this.options.width) {
          this.$menu.css("min-width", "0");
          var t = this.$menu.parent().clone().appendTo("body"),
            e = this.options.container
              ? this.$newElement.clone().appendTo("body")
              : t,
            i = t.children(".dropdown-menu").outerWidth(),
            s = e.css("width", "auto").children("button").outerWidth();
          t.remove(), e.remove(), this.$newElement.css(
            "width",
            Math.max(i, s) + "px"
          );
        } else
          "fit" === this.options.width
            ? (
                this.$menu.css("min-width", ""),
                this.$newElement.css("width", "").addClass("fit-width")
              )
            : this.options.width
              ? (
                  this.$menu.css("min-width", ""),
                  this.$newElement.css("width", this.options.width)
                )
              : (
                  this.$menu.css("min-width", ""),
                  this.$newElement.css("width", "")
                );
        this.$newElement.hasClass("fit-width") &&
          "fit" !== this.options.width &&
          this.$newElement.removeClass("fit-width");
      },
      selectPosition: function() {
        this.$bsContainer = T('<div class="bs-container" />');
        var e,
          i,
          s,
          n = this,
          o = T(this.options.container),
          a = function(t) {
            n.$bsContainer
              .addClass(t.attr("class").replace(/form-control|fit-width/gi, ""))
              .toggleClass(
                "dropup",
                t.hasClass("dropup")
              ), (e = t.offset()), o.is("body")
              ? (i = { top: 0, left: 0 })
              : (
                  ((i = o.offset()).top +=
                    parseInt(o.css("borderTopWidth")) - o.scrollTop()),
                  (i.left +=
                    parseInt(o.css("borderLeftWidth")) - o.scrollLeft())
                ), (s = t.hasClass("dropup")
              ? 0
              : t[0].offsetHeight), n.$bsContainer.css({
              top: e.top - i.top + s,
              left: e.left - i.left,
              width: t[0].offsetWidth
            });
          };
        this.$button.on("click", function() {
          var t = T(this);
          n.isDisabled() ||
            (
              a(n.$newElement),
              n.$bsContainer
                .appendTo(n.options.container)
                .toggleClass("open", !t.hasClass("open"))
                .append(n.$menu)
            );
        }), T(window).on("resize scroll", function() {
          a(n.$newElement);
        }), this.$element.on("hide.bs.select", function() {
          n.$menu.data("height", n.$menu.height()), n.$bsContainer.detach();
        });
      },
      setSelected: function(t, e, i) {
        i ||
          (
            this.togglePlaceholder(),
            (i = this.findLis().eq(this.liObj[t]))
          ), i.toggleClass("selected", e).find("a").attr("aria-selected", e);
      },
      setDisabled: function(t, e, i) {
        i || (i = this.findLis().eq(this.liObj[t])), e
          ? i
              .addClass("disabled")
              .children("a")
              .attr("href", "#")
              .attr("tabindex", -1)
              .attr("aria-disabled", !0)
          : i
              .removeClass("disabled")
              .children("a")
              .removeAttr("href")
              .attr("tabindex", 0)
              .attr("aria-disabled", !1);
      },
      isDisabled: function() {
        return this.$element[0].disabled;
      },
      checkDisabled: function() {
        var t = this;
        this.isDisabled()
          ? (
              this.$newElement.addClass("disabled"),
              this.$button
                .addClass("disabled")
                .attr("tabindex", -1)
                .attr("aria-disabled", !0)
            )
          : (
              this.$button.hasClass("disabled") &&
                (
                  this.$newElement.removeClass("disabled"),
                  this.$button.removeClass("disabled").attr("aria-disabled", !1)
                ),
              -1 != this.$button.attr("tabindex") ||
                this.$element.data("tabindex") ||
                this.$button.removeAttr("tabindex")
            ), this.$button.click(function() {
          return !t.isDisabled();
        });
      },
      togglePlaceholder: function() {
        var t = this.$element.val();
        this.$button.toggleClass(
          "bs-placeholder",
          null === t || "" === t || (t.constructor === Array && 0 === t.length)
        );
      },
      tabIndex: function() {
        this.$element.data("tabindex") !== this.$element.attr("tabindex") &&
          -98 !== this.$element.attr("tabindex") &&
          "-98" !== this.$element.attr("tabindex") &&
          (
            this.$element.data("tabindex", this.$element.attr("tabindex")),
            this.$button.attr("tabindex", this.$element.data("tabindex"))
          ), this.$element.attr("tabindex", -98);
      },
      clickListener: function() {
        var y = this,
          e = T(document);
        e.data("spaceSelect", !1), this.$button.on("keyup", function(t) {
          /(32)/.test(t.keyCode.toString(10)) &&
            e.data("spaceSelect") &&
            (t.preventDefault(), e.data("spaceSelect", !1));
        }), this.$button.on("click", function() {
          y.setSize();
        }), this.$element.on("shown.bs.select", function() {
          if (y.options.liveSearch || y.multiple) {
            if (!y.multiple) {
              var t = y.liObj[y.$element[0].selectedIndex];
              if ("number" != typeof t || !1 === y.options.size) return;
              var e = y.$lis.eq(t)[0].offsetTop - y.$menuInner[0].offsetTop;
              (e =
                e -
                y.$menuInner[0].offsetHeight / 2 +
                y.sizeInfo.liHeight / 2), (y.$menuInner[0].scrollTop = e);
            }
          } else y.$menuInner.find(".selected a").focus();
        }), this.$menuInner.on("click", "li a", function(t) {
          var e = T(this),
            i = e.parent().data("originalIndex"),
            s = y.$element.val(),
            n = y.$element.prop("selectedIndex"),
            o = !0;
          if (
            (
              y.multiple && 1 !== y.options.maxOptions && t.stopPropagation(),
              t.preventDefault(),
              !y.isDisabled() && !e.parent().hasClass("disabled")
            )
          ) {
            var a = y.$element.find("option"),
              r = a.eq(i),
              l = r.prop("selected"),
              h = r.parent("optgroup"),
              d = y.options.maxOptions,
              p = h.data("maxOptions") || !1;
            if (y.multiple) {
              if (
                (
                  r.prop("selected", !l),
                  y.setSelected(i, !l),
                  e.blur(),
                  !1 !== d || !1 !== p
                )
              ) {
                var c = d < a.filter(":selected").length,
                  u = p < h.find("option:selected").length;
                if ((d && c) || (p && u))
                  if (d && 1 == d)
                    a.prop("selected", !1), r.prop(
                      "selected",
                      !0
                    ), y.$menuInner
                      .find(".selected")
                      .removeClass("selected"), y.setSelected(i, !0);
                  else if (p && 1 == p) {
                    h.find("option:selected").prop("selected", !1), r.prop(
                      "selected",
                      !0
                    );
                    var g = e.parent().data("optgroup");
                    y.$menuInner
                      .find('[data-optgroup="' + g + '"]')
                      .removeClass("selected"), y.setSelected(i, !0);
                  } else {
                    var f =
                        "string" == typeof y.options.maxOptionsText
                          ? [y.options.maxOptionsText, y.options.maxOptionsText]
                          : y.options.maxOptionsText,
                      m = "function" == typeof f ? f(d, p) : f,
                      v = m[0].replace("{n}", d),
                      b = m[1].replace("{n}", p),
                      x = T('<div class="notify"></div>');
                    m[2] &&
                      (
                        (v = v.replace("{var}", m[2][1 < d ? 0 : 1])),
                        (b = b.replace("{var}", m[2][1 < p ? 0 : 1]))
                      ), r.prop("selected", !1), y.$menu.append(x), d &&
                      c &&
                      (
                        x.append(T("<div>" + v + "</div>")),
                        (o = !1),
                        y.$element.trigger("maxReached.bs.select")
                      ), p &&
                      u &&
                      (
                        x.append(T("<div>" + b + "</div>")),
                        (o = !1),
                        y.$element.trigger("maxReachedGrp.bs.select")
                      ), setTimeout(function() {
                      y.setSelected(i, !1);
                    }, 10), x.delay(750).fadeOut(300, function() {
                      T(this).remove();
                    });
                  }
              }
            } else
              a.prop("selected", !1), r.prop("selected", !0), y.$menuInner
                .find(".selected")
                .removeClass("selected")
                .find("a")
                .attr("aria-selected", !1), y.setSelected(i, !0);
            !y.multiple || (y.multiple && 1 === y.options.maxOptions)
              ? y.$button.focus()
              : y.options.liveSearch && y.$searchbox.focus(), o &&
              ((s != y.$element.val() && y.multiple) ||
                (n != y.$element.prop("selectedIndex") && !y.multiple)) &&
              (
                (w = [i, r.prop("selected"), l]),
                y.$element.triggerNative("change")
              );
          }
        }), this.$menu.on(
          "click",
          "li.disabled a, .popover-title, .popover-title :not(.close)",
          function(t) {
            t.currentTarget == this &&
              (
                t.preventDefault(),
                t.stopPropagation(),
                y.options.liveSearch && !T(t.target).hasClass("close")
                  ? y.$searchbox.focus()
                  : y.$button.focus()
              );
          }
        ), this.$menuInner.on("click", ".divider, .dropdown-header", function(
          t
        ) {
          t.preventDefault(), t.stopPropagation(), y.options.liveSearch
            ? y.$searchbox.focus()
            : y.$button.focus();
        }), this.$menu.on("click", ".popover-title .close", function() {
          y.$button.click();
        }), this.$searchbox.on("click", function(t) {
          t.stopPropagation();
        }), this.$menu.on("click", ".actions-btn", function(t) {
          y.options.liveSearch
            ? y.$searchbox.focus()
            : y.$button.focus(), t.preventDefault(), t.stopPropagation(), T(this).hasClass("bs-select-all") ? y.selectAll() : y.deselectAll();
        }), this.$element.change(function() {
          y.render(!1), y.$element.trigger("changed.bs.select", w), (w = null);
        });
      },
      liveSearchListener: function() {
        var n = this,
          o = T('<li class="no-results"></li>');
        this.$button.on("click.dropdown.data-api", function() {
          n.$menuInner
            .find(".active")
            .removeClass(
              "active"
            ), n.$searchbox.val() && (n.$searchbox.val(""), n.$lis.not(".is-hidden").removeClass("hidden"), o.parent().length && o.remove()), n.multiple || n.$menuInner.find(".selected").addClass("active"), setTimeout(function() {
            n.$searchbox.focus();
          }, 10);
        }), this.$searchbox.on(
          "click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",
          function(t) {
            t.stopPropagation();
          }
        ), this.$searchbox.on("input propertychange", function() {
          if (
            (
              n.$lis.not(".is-hidden").removeClass("hidden"),
              n.$lis.filter(".active").removeClass("active"),
              o.remove(),
              n.$searchbox.val()
            )
          ) {
            var t,
              e = n.$lis.not(".is-hidden, .divider, .dropdown-header");
            if (
              (t = n.options.liveSearchNormalize
                ? e.not(
                    ":a" +
                      n._searchStyle() +
                      '("' +
                      a(n.$searchbox.val()) +
                      '")'
                  )
                : e.not(
                    ":" + n._searchStyle() + '("' + n.$searchbox.val() + '")'
                  )).length === e.length
            )
              o.html(
                n.options.noneResultsText.replace(
                  "{0}",
                  '"' + R(n.$searchbox.val()) + '"'
                )
              ), n.$menuInner.append(o), n.$lis.addClass("hidden");
            else {
              t.addClass("hidden");
              var i,
                s = n.$lis.not(".hidden");
              s.each(function(t) {
                var e = T(this);
                e.hasClass("divider")
                  ? void 0 === i
                    ? e.addClass("hidden")
                    : (i && i.addClass("hidden"), (i = e))
                  : e.hasClass("dropdown-header") &&
                    s.eq(t + 1).data("optgroup") !== e.data("optgroup")
                    ? e.addClass("hidden")
                    : (i = null);
              }), i && i.addClass("hidden"), e
                .not(".hidden")
                .first()
                .addClass("active"), n.$menuInner.scrollTop(0);
            }
          }
        });
      },
      _searchStyle: function() {
        return (
          { begins: "ibegins", startsWith: "ibegins" }[
            this.options.liveSearchStyle
          ] || "icontains"
        );
      },
      val: function(t) {
        return void 0 !== t
          ? (this.$element.val(t), this.render(), this.$element)
          : this.$element.val();
      },
      changeAll: function(t) {
        if (this.multiple) {
          void 0 === t && (t = !0), this.findLis();
          var e = this.$element.find("option"),
            i = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"),
            s = i.length,
            n = [];
          if (t) {
            if (i.filter(".selected").length === i.length) return;
          } else if (0 === i.filter(".selected").length) return;
          i.toggleClass("selected", t);
          for (var o = 0; o < s; o++) {
            var a = i[o].getAttribute("data-original-index");
            n[n.length] = e.eq(a)[0];
          }
          T(n).prop("selected", t), this.render(
            !1
          ), this.togglePlaceholder(), this.$element.triggerNative("change");
        }
      },
      selectAll: function() {
        return this.changeAll(!0);
      },
      deselectAll: function() {
        return this.changeAll(!1);
      },
      toggle: function(t) {
        (t = t || window.event) && t.stopPropagation(), this.$button.trigger(
          "click"
        );
      },
      keydown: function(e) {
        var t,
          i,
          s,
          n,
          o = T(this),
          a = (o.is("input") ? o.parent().parent() : o.parent()).data("this"),
          r = ":not(.disabled, .hidden, .dropdown-header, .divider)",
          l = {
            32: " ",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            59: ";",
            65: "a",
            66: "b",
            67: "c",
            68: "d",
            69: "e",
            70: "f",
            71: "g",
            72: "h",
            73: "i",
            74: "j",
            75: "k",
            76: "l",
            77: "m",
            78: "n",
            79: "o",
            80: "p",
            81: "q",
            82: "r",
            83: "s",
            84: "t",
            85: "u",
            86: "v",
            87: "w",
            88: "x",
            89: "y",
            90: "z",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9"
          };
        if (
          !(n = a.$newElement.hasClass("open")) &&
          ((48 <= e.keyCode && e.keyCode <= 57) ||
            (96 <= e.keyCode && e.keyCode <= 105) ||
            (65 <= e.keyCode && e.keyCode <= 90))
        )
          return a.options.container
            ? a.$button.trigger("click")
            : (
                a.setSize(),
                a.$menu.parent().addClass("open"),
                (n = !0)
              ), void a.$searchbox.focus();
        if (
          (
            a.options.liveSearch &&
              /(^9$|27)/.test(e.keyCode.toString(10)) &&
              n &&
              (
                e.preventDefault(),
                e.stopPropagation(),
                a.$menuInner.click(),
                a.$button.focus()
              ),
            /(38|40)/.test(e.keyCode.toString(10))
          )
        ) {
          if (!(t = a.$lis.filter(r)).length) return;
          (i = a.options.liveSearch
            ? t.index(t.filter(".active"))
            : t.index(
                t.find("a").filter(":focus").parent()
              )), (s = a.$menuInner.data("prevIndex")), 38 == e.keyCode
            ? (
                (!a.options.liveSearch && i != s) || -1 == i || i--,
                i < 0 && (i += t.length)
              )
            : 40 == e.keyCode &&
              (
                (a.options.liveSearch || i == s) && i++,
                (i %= t.length)
              ), a.$menuInner.data("prevIndex", i), a.options.liveSearch
            ? (
                e.preventDefault(),
                o.hasClass("dropdown-toggle") ||
                  (
                    t
                      .removeClass("active")
                      .eq(i)
                      .addClass("active")
                      .children("a")
                      .focus(),
                    o.focus()
                  )
              )
            : t.eq(i).children("a").focus();
        } else if (!o.is("input")) {
          var h,
            d = [];
          (t = a.$lis.filter(r)).each(function(t) {
            T.trim(T(this).children("a").text().toLowerCase()).substring(
              0,
              1
            ) == l[e.keyCode] && d.push(t);
          }), (h = T(document).data("keycount")), h++, T(document).data(
            "keycount",
            h
          ), T.trim(T(":focus").text().toLowerCase()).substring(0, 1) !=
          l[e.keyCode]
            ? ((h = 1), T(document).data("keycount", h))
            : h >= d.length &&
              (T(document).data("keycount", 0), h > d.length && (h = 1)), t
            .eq(d[h - 1])
            .children("a")
            .focus();
        }
        if (
          (/(13|32)/.test(e.keyCode.toString(10)) ||
            (/(^9$)/.test(e.keyCode.toString(10)) && a.options.selectOnTab)) &&
          n
        ) {
          if (
            (
              /(32)/.test(e.keyCode.toString(10)) || e.preventDefault(),
              a.options.liveSearch
            )
          )
            /(32)/.test(e.keyCode.toString(10)) ||
              (a.$menuInner.find(".active a").click(), o.focus());
          else {
            var p = T(":focus");
            p.click(), p.focus(), e.preventDefault(), T(document).data(
              "spaceSelect",
              !0
            );
          }
          T(document).data("keycount", 0);
        }
        ((/(^9$|27)/.test(e.keyCode.toString(10)) &&
          n &&
          (a.multiple || a.options.liveSearch)) ||
          (/(27)/.test(e.keyCode.toString(10)) && !n)) &&
          (
            a.$menu.parent().removeClass("open"),
            a.options.container && a.$newElement.removeClass("open"),
            a.$button.focus()
          );
      },
      mobile: function() {
        this.$element.addClass("mobile-device");
      },
      refresh: function() {
        (this.$lis = null), (this.liObj = {}), this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(
          !0
        ), this.setStyle(), this.setWidth(), this.$lis &&
          this.$searchbox.trigger("propertychange"), this.$element.trigger(
          "refreshed.bs.select"
        );
      },
      hide: function() {
        this.$newElement.hide();
      },
      show: function() {
        this.$newElement.show();
      },
      remove: function() {
        this.$newElement.remove(), this.$element.remove();
      },
      destroy: function() {
        this.$newElement.before(this.$element).remove(), this.$bsContainer
          ? this.$bsContainer.remove()
          : this.$menu.remove(), this.$element
          .off(".bs.select")
          .removeData("selectpicker")
          .removeClass("bs-select-hidden selectpicker");
      }
    });
    var g = T.fn.selectpicker;
    (T.fn.selectpicker = u), (T.fn.selectpicker.Constructor = c), (T.fn.selectpicker.noConflict = function() {
      return (T.fn.selectpicker = g), this;
    }), T(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', c.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function(t) {
      t.stopPropagation();
    }), T(window).on("load.bs.select.data-api", function() {
      T(".selectpicker").each(function() {
        var t = T(this);
        u.call(t, t.data());
      });
    });
  })(t);
}), 

(function(T) {
  T.fn.extend({
    slimScrolls: function(k) {
      var R = T.extend(
        {
          width: "auto",
          
          size: "7px",
          color: "#000",
          position: "right",
          distance: "1px",
          start: "top",
          opacity: 0.4,
          alwaysVisible: !1,
          disableFadeOut: !1,
          railVisible: !1,
          railColor: "#333",
          railOpacity: 0.2,
          railDraggable: !0,
          railClass: "slimScrollRail",
          barClass: "slimScrollBar",
          wrapperClass: "slimScrollDiv",
          allowPageScroll: !1,
          wheelStep: 20,
          touchScrollStep: 200,
          borderRadius: "0",
          railBorderRadius: "0"
        },
        k
      );
      return this.each(function() {
        var s,
          e,
          n,
          i,
          o,
          a,
          r,
          l,
          h = "<div></div>",
          d = 30,
          p = !1,
          c = T(this);
        if (c.parent().hasClass(R.wrapperClass)) {
          var u = c.scrollTop();
          if (
            (
              (b = c.closest("." + R.barClass)),
              (v = c.closest("." + R.railClass)),
              C(),
              T.isPlainObject(k)
            )
          ) {
            if ("height" in k && "auto" == k.height) {
              c.parent().css("height", "auto"), c.css("height", "auto");
              var g = c.parent().parent().height();
              c.parent().css("height", g), c.css("height", g);
            }
            if ("scrollTo" in k) u = parseInt(R.scrollTo);
            else if ("scrollBy" in k) u += parseInt(R.scrollBy);
            else if ("destroy" in k)
              return b.remove(), v.remove(), void c.unwrap();
            w(u, !1, !0);
          }
        } else if (!(T.isPlainObject(k) && "destroy" in k)) {
          R.height = "auto" == R.height ? c.parent().height() : R.height;
          var f = T(h)
            .addClass(R.wrapperClass)
            .css({
              position: "relative",
              overflow: "hidden",
              width: R.width,
              height: R.height
            });
          c.css({ overflow: "hidden", width: R.width, height: R.height });
          var m,
            v = T(h)
              .addClass(R.railClass)
              .css({
                width: R.size,
                height: "100%",
                position: "absolute",
                top: 0,
                display: R.alwaysVisible && R.railVisible ? "block" : "none",
                "border-radius": R.railBorderRadius,
                background: R.railColor,
                opacity: R.railOpacity,
                zIndex: 90
              }),
            b = T(h)
              .addClass(R.barClass)
              .css({
                background: R.color,
                width: R.size,
                position: "absolute",
                top: 0,
                opacity: R.opacity,
                display: R.alwaysVisible ? "block" : "none",
                "border-radius": R.borderRadius,
                BorderRadius: R.borderRadius,
                MozBorderRadius: R.borderRadius,
                WebkitBorderRadius: R.borderRadius,
                zIndex: 99
              }),
            x =
              "right" == R.position
                ? { right: R.distance }
                : { left: R.distance };
          v.css(x), b.css(x), c.wrap(f), c
            .parent()
            .append(b), c.parent().append(v), R.railDraggable &&
            b
              .bind("mousedown", function(e) {
                var i = T(document);
                return (n = !0), (t = parseFloat(b.css("top"))), (pageY = e.pageY), i.bind(
                  "mousemove.slimscroll",
                  function(e) {
                    (currTop = t + e.pageY - pageY), b.css("top", currTop), w(
                      0,
                      b.position().top,
                      !1
                    );
                  }
                ), i.bind("mouseup.slimscroll", function(t) {
                  (n = !1), $(), i.unbind(".slimscroll");
                }), !1;
              })
              .bind("selectstart.slimscroll", function(t) {
                return t.stopPropagation(), t.preventDefault(), !1;
              }), v.hover(
            function() {
              S();
            },
            function() {
              $();
            }
          ), b.hover(
            function() {
              e = !0;
            },
            function() {
              e = !1;
            }
          ), c.hover(
            function() {
              (s = !0), S(), $();
            },
            function() {
              (s = !1), $();
            }
          ), c.bind("touchstart", function(t, e) {
            t.originalEvent.touches.length &&
              (o = t.originalEvent.touches[0].pageY);
          }), c.bind("touchmove", function(t) {
            (
              p || t.originalEvent.preventDefault(),
              t.originalEvent.touches.length
            ) &&
              (
                w(
                  (o - t.originalEvent.touches[0].pageY) / R.touchScrollStep,
                  !0
                ),
                (o = t.originalEvent.touches[0].pageY)
              );
          }), C(), "bottom" === R.start
            ? (b.css({ top: c.outerHeight() - b.outerHeight() }), w(0, !0))
            : "top" !== R.start &&
              (
                w(T(R.start).position().top, null, !0),
                R.alwaysVisible || b.hide()
              ), (m = this), window.addEventListener
            ? (
                m.addEventListener("DOMMouseScroll", y, !1),
                m.addEventListener("mousewheel", y, !1)
              )
            : document.attachEvent("onmousewheel", y);
        }
        function y(t) {
          if (s) {
            var e = 0;
            (t = t || window.event).wheelDelta &&
              (e = -t.wheelDelta / 120), t.detail && (e = t.detail / 3);
            var i = t.target || t.srcTarget || t.srcElement;
            T(i).closest("." + R.wrapperClass).is(c.parent()) &&
              w(e, !0), t.preventDefault && !p && t.preventDefault(), p ||
              (t.returnValue = !1);
          }
        }
        function w(t, e, i) {
          p = !1;
          var s = t,
            n = c.outerHeight() - b.outerHeight();
          if (
            (
              e &&
                (
                  (s =
                    parseInt(b.css("top")) +
                    t * parseInt(R.wheelStep) / 100 * b.outerHeight()),
                  (s = Math.min(Math.max(s, 0), n)),
                  (s = 0 < t ? Math.ceil(s) : Math.floor(s)),
                  b.css({ top: s + "px" })
                ),
              (s =
                (r =
                  parseInt(b.css("top")) /
                  (c.outerHeight() - b.outerHeight())) *
                (c[0].scrollHeight - c.outerHeight())),
              i
            )
          ) {
            var o = (s = t) / c[0].scrollHeight * c.outerHeight();
            (o = Math.min(Math.max(o, 0), n)), b.css({ top: o + "px" });
          }
          c.scrollTop(s), c.trigger("slimscrolling", ~~s), S(), $();
        }
        function C() {
          (a = Math.max(
            c.outerHeight() / c[0].scrollHeight * c.outerHeight(),
            d
          )), b.css({ height: a + "px" });
          var t = a == c.outerHeight() ? "none" : "block";
          b.css({ display: t });
        }
        function S() {
          if ((C(), clearTimeout(i), r == ~~r)) {
            if (((p = R.allowPageScroll), l != r)) {
              var t = 0 == ~~r ? "top" : "bottom";
              c.trigger("slimscroll", t);
            }
          } else p = !1;
          (l = r), a >= c.outerHeight() ? (p = !0) : (b.stop(!0, !0).fadeIn("fast"), R.railVisible && v.stop(!0, !0).fadeIn("fast"));
        }
        function $() {
          R.alwaysVisible ||
            (i = setTimeout(function() {
              (R.disableFadeOut && s) ||
                e ||
                n ||
                (b.fadeOut("slow"), v.fadeOut("slow"));
            }, 1e3));
        }
      }), this;
    }
  }), T.fn.extend({ slimscroll: T.fn.slimScroll });
})(jQuery), (function(t, e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define([], function() {
        return e.apply(t);
      })
    : "object" == typeof exports
      ? (module.exports = e.call(t))
      : (t.Waves = e.call(t));
})("object" == typeof global ? global : this, function() {
  "use strict";
  var e = e || {},
    s = document.querySelectorAll.bind(document),
    a = Object.prototype.toString,
    r = "ontouchstart" in window;
  function n(t) {
    var e = typeof t;
    return "function" === e || ("object" === e && !!t);
  }
  function d(t) {
    var e,
      i = a.call(t);
    return "[object String]" === i
      ? s(t)
      : n(t) &&
        /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(i) &&
        t.hasOwnProperty("length")
        ? t
        : n((e = t)) && 0 < e.nodeType ? [t] : [];
  }
  function p(t) {
    var e,
      i,
      s,
      n,
      o = { top: 0, left: 0 },
      a = t && t.ownerDocument;
    return (e =
      a.documentElement), void 0 !== t.getBoundingClientRect && (o = t.getBoundingClientRect()), (i = null !== (n = s = a) && n === n.window ? s : 9 === s.nodeType && s.defaultView), { top: o.top + i.pageYOffset - e.clientTop, left: o.left + i.pageXOffset - e.clientLeft };
  }
  function c(t) {
    var e = "";
    for (var i in t) t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
    return e;
  }
  var u = {
      duration: 750,
      delay: 200,
      show: function(t, e, i) {
        if (2 === t.button) return !1;
        e = e || this;
        var s = document.createElement("div");
        (s.className = "waves-ripple waves-rippling"), e.appendChild(s);
        var n = p(e),
          o = 0,
          a = 0;
        (a =
          0 <=
          (a =
            "touches" in t && t.touches.length
              ? ((o = t.touches[0].pageY - n.top), t.touches[0].pageX - n.left)
              : ((o = t.pageY - n.top), t.pageX - n.left))
            ? a
            : 0), (o = 0 <= o ? o : 0);
        var r = "scale(" + e.clientWidth / 100 * 3 + ")",
          l = "translate(0,0)";
        i && (l = "translate(" + i.x + "px, " + i.y + "px)"), s.setAttribute(
          "data-hold",
          Date.now()
        ), s.setAttribute("data-x", a), s.setAttribute(
          "data-y",
          o
        ), s.setAttribute("data-scale", r), s.setAttribute("data-translate", l);
        var h = { top: o + "px", left: a + "px" };
        s.classList.add("waves-notransition"), s.setAttribute(
          "style",
          c(h)
        ), s.classList.remove("waves-notransition"), (h["-webkit-transform"] =
          r + " " + l), (h["-moz-transform"] = r + " " + l), (h[
          "-ms-transform"
        ] =
          r + " " + l), (h["-o-transform"] = r + " " + l), (h.transform =
          r + " " + l), (h.opacity = "1");
        var d = "mousemove" === t.type ? 2500 : u.duration;
        (h["-webkit-transition-duration"] = d + "ms"), (h[
          "-moz-transition-duration"
        ] =
          d + "ms"), (h["-o-transition-duration"] = d + "ms"), (h[
          "transition-duration"
        ] =
          d + "ms"), s.setAttribute("style", c(h));
      },
      hide: function(t, e) {
        for (
          var i = (e = e || this).getElementsByClassName("waves-rippling"),
            s = 0,
            n = i.length;
          s < n;
          s++
        )
          o(t, e, i[s]);
      }
    },
    l = {
      input: function(t) {
        var e = t.parentNode;
        if (
          "i" !== e.tagName.toLowerCase() ||
          !e.classList.contains("waves-effect")
        ) {
          var i = document.createElement("i");
          (i.className = t.className + " waves-input-wrapper"), (t.className =
            "waves-button-input"), e.replaceChild(i, t), i.appendChild(t);
          var s = window.getComputedStyle(t, null),
            n = s.color,
            o = s.backgroundColor;
          i.setAttribute(
            "style",
            "color:" + n + ";background:" + o
          ), t.setAttribute("style", "background-color:rgba(0,0,0,0);");
        }
      },
      img: function(t) {
        var e = t.parentNode;
        if (
          "i" !== e.tagName.toLowerCase() ||
          !e.classList.contains("waves-effect")
        ) {
          var i = document.createElement("i");
          e.replaceChild(i, t), i.appendChild(t);
        }
      }
    };
  function o(t, e, i) {
    if (i) {
      i.classList.remove("waves-rippling");
      var s = i.getAttribute("data-x"),
        n = i.getAttribute("data-y"),
        o = i.getAttribute("data-scale"),
        a = i.getAttribute("data-translate"),
        r = 350 - (Date.now() - Number(i.getAttribute("data-hold")));
      r < 0 && (r = 0), "mousemove" === t.type && (r = 150);
      var l = "mousemove" === t.type ? 2500 : u.duration;
      setTimeout(function() {
        var t = {
          top: n + "px",
          left: s + "px",
          opacity: "0",
          "-webkit-transition-duration": l + "ms",
          "-moz-transition-duration": l + "ms",
          "-o-transition-duration": l + "ms",
          "transition-duration": l + "ms",
          "-webkit-transform": o + " " + a,
          "-moz-transform": o + " " + a,
          "-ms-transform": o + " " + a,
          "-o-transform": o + " " + a,
          transform: o + " " + a
        };
        i.setAttribute("style", c(t)), setTimeout(function() {
          try {
            e.removeChild(i);
          } catch (t) {
            return !1;
          }
        }, l);
      }, r);
    }
  }
  var h = {
    touches: 0,
    allowEvent: function(t) {
      var e = !0;
      return /^(mousedown|mousemove)$/.test(t.type) && h.touches && (e = !1), e;
    },
    registerEvent: function(t) {
      var e = t.type;
      "touchstart" === e
        ? (h.touches += 1)
        : /^(touchend|touchcancel)$/.test(e) &&
          setTimeout(function() {
            h.touches && (h.touches -= 1);
          }, 500);
    }
  };
  function i(e) {
    var i = (function(t) {
      if (!1 === h.allowEvent(t)) return null;
      for (
        var e = null, i = t.target || t.srcElement;
        null !== i.parentElement;

      ) {
        if (
          i.classList.contains("waves-effect") &&
          !(i instanceof SVGElement)
        ) {
          e = i;
          break;
        }
        i = i.parentElement;
      }
      return e;
    })(e);
    if (null !== i) {
      if (
        i.disabled ||
        i.getAttribute("disabled") ||
        i.classList.contains("disabled")
      )
        return;
      if ((h.registerEvent(e), "touchstart" === e.type && u.delay)) {
        var s = !1,
          n = setTimeout(function() {
            (n = null), u.show(e, i);
          }, u.delay),
          o = function(t) {
            n && (clearTimeout(n), (n = null), u.show(e, i)), s ||
              ((s = !0), u.hide(t, i));
          };
        i.addEventListener(
          "touchmove",
          function(t) {
            n && (clearTimeout(n), (n = null)), o(t);
          },
          !1
        ), i.addEventListener("touchend", o, !1), i.addEventListener(
          "touchcancel",
          o,
          !1
        );
      } else
        u.show(e, i), r &&
          (
            i.addEventListener("touchend", u.hide, !1),
            i.addEventListener("touchcancel", u.hide, !1)
          ), i.addEventListener("mouseup", u.hide, !1), i.addEventListener(
          "mouseleave",
          u.hide,
          !1
        );
    }
  }
  return (e.init = function(t) {
    var e = document.body;
    "duration" in (t = t || {}) && (u.duration = t.duration), "delay" in t &&
      (u.delay = t.delay), r &&
      (
        e.addEventListener("touchstart", i, !1),
        e.addEventListener("touchcancel", h.registerEvent, !1),
        e.addEventListener("touchend", h.registerEvent, !1)
      ), e.addEventListener("mousedown", i, !1);
  }), (e.attach = function(t, e) {
    var i, s;
    (t = d(t)), "[object Array]" === a.call(e) && (e = e.join(" ")), (e = e
      ? " " + e
      : "");
    for (var n = 0, o = t.length; n < o; n++)
      (s = (i = t[n]).tagName.toLowerCase()), -1 !==
        ["input", "img"].indexOf(s) && (l[s](i), (i = i.parentElement)), -1 ===
        i.className.indexOf("waves-effect") &&
        (i.className += " waves-effect" + e);
  }), (e.ripple = function(t, e) {
    var i = (t = d(t)).length;
    if (
      (((e = e || {}).wait = e.wait || 0), (e.position = e.position || null), i)
    )
      for (
        var s,
          n,
          o,
          a = {},
          r = 0,
          l = { type: "mousedown", button: 1 },
          h = function(t, e) {
            return function() {
              u.hide(t, e);
            };
          };
        r < i;
        r++
      )
        if (
          (
            (s = t[r]),
            (n = e.position || { x: s.clientWidth / 2, y: s.clientHeight / 2 }),
            (o = p(s)),
            (a.x = o.left + n.x),
            (a.y = o.top + n.y),
            (l.pageX = a.x),
            (l.pageY = a.y),
            u.show(l, s),
            0 <= e.wait && null !== e.wait
          )
        ) {
          setTimeout(h({ type: "mouseup", button: 1 }, s), e.wait);
        }
  }), (e.calm = function(t) {
    for (
      var e = { type: "mouseup", button: 1 }, i = 0, s = (t = d(t)).length;
      i < s;
      i++
    )
      u.hide(e, t[i]);
  }), (e.displayEffect = function(t) {
    console.error(
      "Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"
    ), e.init(t);
  }), e;
}), 



(function($, N, B) {
  var t;
  (t = function(_) {
    "use strict";
    var t,
      e,
      v,
      j,
      y,
      W,
      O,
      z,
      d,
      C,
      i,
      o,
      p,
      q,
      c,
      s,
      n,
      L,
      D,
      r,
      a,
      l,
      h,
      w,
      u,
      g,
      f,
      m,
      b,
      x = {},
      S = 0;
    (t = function() {
      return {
        common: {
          type: "line",
          lineColor: "#00f",
          fillColor: "#cdf",
          defaultPixelsPerValue: 3,
          width: "auto",
          height: "auto",
          composite: !1,
          tagValuesAttribute: "values",
          tagOptionsPrefix: "spark",
          enableTagOptions: !1,
          enableHighlight: !0,
          highlightLighten: 1.4,
          tooltipSkipNull: !0,
          tooltipPrefix: "",
          tooltipSuffix: "",
          disableHiddenCheck: !1,
          numberFormatter: !1,
          numberDigitGroupCount: 3,
          numberDigitGroupSep: ",",
          numberDecimalMark: ".",
          disableTooltips: !1,
          disableInteraction: !1
        },
        line: {
          spotColor: "#f80",
          highlightSpotColor: "#5f5",
          highlightLineColor: "#f22",
          spotRadius: 1.5,
          minSpotColor: "#f80",
          maxSpotColor: "#f80",
          lineWidth: 1,
          normalRangeMin: B,
          normalRangeMax: B,
          normalRangeColor: "#ccc",
          drawNormalOnTop: !1,
          chartRangeMin: B,
          chartRangeMax: B,
          chartRangeMinX: B,
          chartRangeMaxX: B,
          tooltipFormat: new v(
            '<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}'
          )
        },
        bar: {
          barColor: "#3366cc",
          negBarColor: "#f44",
          stackedBarColor: [
            "#3366cc",
            "#dc3912",
            "#ff9900",
            "#109618",
            "#66aa00",
            "#dd4477",
            "#0099c6",
            "#990099"
          ],
          zeroColor: B,
          nullColor: B,
          zeroAxis: !0,
          barWidth: 4,
          barSpacing: 1,
          chartRangeMax: B,
          chartRangeMin: B,
          chartRangeClip: !1,
          colorMap: B,
          tooltipFormat: new v(
            '<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}'
          )
        },
        tristate: {
          barWidth: 4,
          barSpacing: 1,
          posBarColor: "#6f6",
          negBarColor: "#f44",
          zeroBarColor: "#999",
          colorMap: {},
          tooltipFormat: new v(
            '<span style="color: {{color}}">&#9679;</span> {{value:map}}'
          ),
          tooltipValueLookups: { map: { "-1": "Loss", 0: "Draw", 1: "Win" } }
        },
        discrete: {
          lineHeight: "auto",
          thresholdColor: B,
          thresholdValue: 0,
          chartRangeMax: B,
          chartRangeMin: B,
          chartRangeClip: !1,
          tooltipFormat: new v("{{prefix}}{{value}}{{suffix}}")
        },
        bullet: {
          targetColor: "#f33",
          targetWidth: 3,
          performanceColor: "#33f",
          rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"],
          base: B,
          tooltipFormat: new v("{{fieldkey:fields}} - {{value}}"),
          tooltipValueLookups: {
            fields: { r: "Range", p: "Performance", t: "Target" }
          }
        },
        pie: {
          offset: 0,
          sliceColors: [
            "#3366cc",
            "#dc3912",
            "#ff9900",
            "#109618",
            "#66aa00",
            "#dd4477",
            "#0099c6",
            "#990099"
          ],
          borderWidth: 0,
          borderColor: "#000",
          tooltipFormat: new v(
            '<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)'
          )
        },
        box: {
          raw: !1,
          boxLineColor: "#000",
          boxFillColor: "#cdf",
          whiskerColor: "#000",
          outlierLineColor: "#333",
          outlierFillColor: "#fff",
          medianColor: "#f00",
          showOutliers: !0,
          outlierIQR: 1.5,
          spotRadius: 1.5,
          target: B,
          targetColor: "#4a2",
          chartRangeMax: B,
          chartRangeMin: B,
          tooltipFormat: new v("{{field:fields}}: {{value}}"),
          tooltipFormatFieldlistKey: "field",
          tooltipValueLookups: {
            fields: {
              lq: "Lower Quartile",
              med: "Median",
              uq: "Upper Quartile",
              lo: "Left Outlier",
              ro: "Right Outlier",
              lw: "Left Whisker",
              rw: "Right Whisker"
            }
          }
        }
      };
    }), (e = function() {
      var t, e;
      return (t = function() {
        this.init.apply(this, arguments);
      }), 1 < arguments.length
        ? (
            arguments[0]
              ? (
                  (t.prototype = _.extend(
                    new arguments[0](),
                    arguments[arguments.length - 1]
                  )),
                  (t._super = arguments[0].prototype)
                )
              : (t.prototype = arguments[arguments.length - 1]),
            2 < arguments.length &&
              (
                (e = Array.prototype.slice.call(arguments, 1, -1)).unshift(
                  t.prototype
                ),
                _.extend.apply(_, e)
              )
          )
        : (t.prototype = arguments[0]), (t.prototype.cls = t);
    }), (_.SPFormatClass = v = e({
      fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
      precre: /(\w+)\.(\d+)/,
      init: function(t, e) {
        (this.format = t), (this.fclass = e);
      },
      render: function(t, e, i) {
        var s,
          n,
          o,
          a,
          r,
          l = this,
          h = t;
        return this.format.replace(this.fre, function() {
          return (n =
            arguments[1]), (o = arguments[3]), (s = l.precre.exec(n)) ? ((r = s[2]), (n = s[1])) : (r = !1), (a = h[n]) === B ? "" : o && e && e[o] ? (e[o].get ? e[o].get(a) || a : e[o][a] || a) : (d(a) && (a = i.get("numberFormatter") ? i.get("numberFormatter")(a) : p(a, r, i.get("numberDigitGroupCount"), i.get("numberDigitGroupSep"), i.get("numberDecimalMark"))), a);
        });
      }
    })), (_.spformat = function(t, e) {
      return new v(t, e);
    }), (j = function(t, e, i) {
      return t < e ? e : i < t ? i : t;
    }), (y = function(t, e) {
      var i;
      return 2 === e
        ? (
            (i = N.floor(t.length / 2)),
            t.length % 2 ? t[i] : (t[i - 1] + t[i]) / 2
          )
        : t.length % 2
          ? (i = (t.length * e + e) / 4) % 1
            ? (t[N.floor(i)] + t[N.floor(i) - 1]) / 2
            : t[i - 1]
          : (i = (t.length * e + 2) / 4) % 1
            ? (t[N.floor(i)] + t[N.floor(i) - 1]) / 2
            : t[i - 1];
    }), (W = function(t) {
      var e;
      switch (t) {
        case "undefined":
          t = B;
          break;
        case "null":
          t = null;
          break;
        case "true":
          t = !0;
          break;
        case "false":
          t = !1;
          break;
        default:
          t == (e = parseFloat(t)) && (t = e);
      }
      return t;
    }), (O = function(t) {
      var e,
        i = [];
      for (e = t.length; e--; ) i[e] = W(t[e]);
      return i;
    }), (z = function(t, e) {
      var i,
        s,
        n = [];
      for (i = 0, s = t.length; i < s; i++) t[i] !== e && n.push(t[i]);
      return n;
    }), (d = function(t) {
      return !isNaN(parseFloat(t)) && isFinite(t);
    }), (p = function(t, e, i, s, n) {
      var o, a;
      for (
        t = (!1 === e ? parseFloat(t).toString() : t.toFixed(e)).split(""), (o =
          (o = _.inArray(".", t)) < 0 ? t.length : o) < t.length &&
          (t[o] = n), a = o - i;
        0 < a;
        a -= i
      )
        t.splice(a, 0, s);
      return t.join("");
    }), (C = function(t, e, i) {
      var s;
      for (s = e.length; s--; )
        if ((!i || null !== e[s]) && e[s] !== t) return !1;
      return !0;
    }), (o = function(t) {
      return _.isArray(t) ? t : [t];
    }), (i = function(t) {
      var e, i;
      if ($.createStyleSheet)
        try {
          return void ($.createStyleSheet().cssText = t);
        } catch (t) {
          i = !0;
        }
      ((e = $.createElement("style")).type =
        "text/css"), $.getElementsByTagName("head")[0].appendChild(e), i
        ? ($.styleSheets[$.styleSheets.length - 1].cssText = t)
        : (e[
            "string" == typeof $.body.style.WebkitAppearance
              ? "innerText"
              : "innerHTML"
          ] = t);
    }), (_.fn.simpledraw = function(t, e, i, s) {
      var n, o;
      if (i && (n = this.data("_jqs_vcanvas"))) return n;
      if (!1 === _.fn.sparkline.canvas) return !1;
      if (_.fn.sparkline.canvas === B) {
        var a = $.createElement("canvas");
        if (a.getContext && a.getContext("2d"))
          _.fn.sparkline.canvas = function(t, e, i, s) {
            return new f(t, e, i, s);
          };
        else {
          if (!$.namespaces || $.namespaces.v)
            return (_.fn.sparkline.canvas = !1);
          $.namespaces.add(
            "v",
            "urn:schemas-microsoft-com:vml",
            "#default#VML"
          ), (_.fn.sparkline.canvas = function(t, e, i, s) {
            return new m(t, e, i);
          });
        }
      }
      return t === B && (t = _(this).innerWidth()), e === B &&
        (e = _(this).innerHeight()), (n = _.fn.sparkline.canvas(
        t,
        e,
        this,
        s
      )), (o = _(this).data("_jqs_mhandler")) && o.registerCanvas(n), n;
    }), (_.fn.cleardraw = function() {
      var t = this.data("_jqs_vcanvas");
      t && t.reset();
    }), (_.RangeMapClass = q = e({
      init: function(t) {
        var e,
          i,
          s = [];
        for (e in t)
          t.hasOwnProperty(e) &&
            "string" == typeof e &&
            -1 < e.indexOf(":") &&
            (
              ((i = e.split(":"))[0] =
                0 === i[0].length ? -1 / 0 : parseFloat(i[0])),
              (i[1] = 0 === i[1].length ? 1 / 0 : parseFloat(i[1])),
              (i[2] = t[e]),
              s.push(i)
            );
        (this.map = t), (this.rangelist = s || !1);
      },
      get: function(t) {
        var e,
          i,
          s,
          n = this.rangelist;
        if ((s = this.map[t]) !== B) return s;
        if (n)
          for (e = n.length; e--; )
            if ((i = n[e])[0] <= t && i[1] >= t) return i[2];
        return B;
      }
    })), (_.range_map = function(t) {
      return new q(t);
    }), (c = e({
      init: function(t, e) {
        var i = _(t);
        (this.$el = i), (this.options = e), (this.currentPageX = 0), (this.currentPageY = 0), (this.el = t), (this.splist = []), (this.tooltip = null), (this.over = !1), (this.displayTooltips = !e.get(
          "disableTooltips"
        )), (this.highlightEnabled = !e.get("disableHighlight"));
      },
      registerSparkline: function(t) {
        this.splist.push(t), this.over && this.updateDisplay();
      },
      registerCanvas: function(t) {
        var e = _(t.canvas);
        (this.canvas = t), (this.$canvas = e).mouseenter(
          _.proxy(this.mouseenter, this)
        ), e.mouseleave(_.proxy(this.mouseleave, this)), e.click(
          _.proxy(this.mouseclick, this)
        );
      },
      reset: function(t) {
        (this.splist = []), this.tooltip &&
          t &&
          (this.tooltip.remove(), (this.tooltip = B));
      },
      mouseclick: function(t) {
        var e = _.Event("sparklineClick");
        (e.originalEvent = t), (e.sparklines = this.splist), this.$el.trigger(
          e
        );
      },
      mouseenter: function(t) {
        _($.body).unbind("mousemove.jqs"), _($.body).bind(
          "mousemove.jqs",
          _.proxy(this.mousemove, this)
        ), (this.over = !0), (this.currentPageX = t.pageX), (this.currentPageY =
          t.pageY), (this.currentEl = t.target), !this.tooltip &&
          this.displayTooltips &&
          (
            (this.tooltip = new s(this.options)),
            this.tooltip.updatePosition(t.pageX, t.pageY)
          ), this.updateDisplay();
      },
      mouseleave: function() {
        _($.body).unbind("mousemove.jqs");
        var t,
          e = this.splist,
          i = e.length,
          s = !1;
        for (
          this.over = !1, this.currentEl = null, this.tooltip &&
            (this.tooltip.remove(), (this.tooltip = null)), t = 0;
          t < i;
          t++
        )
          e[t].clearRegionHighlight() && (s = !0);
        s && this.canvas.render();
      },
      mousemove: function(t) {
        (this.currentPageX = t.pageX), (this.currentPageY =
          t.pageY), (this.currentEl = t.target), this.tooltip &&
          this.tooltip.updatePosition(t.pageX, t.pageY), this.updateDisplay();
      },
      updateDisplay: function() {
        var t,
          e,
          i,
          s,
          n = this.splist,
          o = n.length,
          a = !1,
          r = this.$canvas.offset(),
          l = this.currentPageX - r.left,
          h = this.currentPageY - r.top;
        if (this.over) {
          for (e = 0; e < o; e++)
            (i = n[e].setRegionHighlight(this.currentEl, l, h)) && (a = !0);
          if (a) {
            if (
              (
                ((s = _.Event(
                  "sparklineRegionChange"
                )).sparklines = this.splist),
                this.$el.trigger(s),
                this.tooltip
              )
            ) {
              for (t = "", e = 0; e < o; e++)
                t += n[e].getCurrentRegionTooltip();
              this.tooltip.setContent(t);
            }
            this.disableHighlight || this.canvas.render();
          }
          null === i && this.mouseleave();
        }
      }
    })), (s = e({
      sizeStyle:
        "position: static !important;display: block !important;visibility: hidden !important;float: left !important;",
      init: function(t) {
        var e,
          i = t.get("tooltipClassname", "jqstooltip"),
          s = this.sizeStyle;
        (this.container =
          t.get("tooltipContainer") || $.body), (this.tooltipOffsetX = t.get(
          "tooltipOffsetX",
          10
        )), (this.tooltipOffsetY = t.get("tooltipOffsetY", 12)), _(
          "#jqssizetip"
        ).remove(), _("#jqstooltip").remove(), (this.sizetip = _("<div/>", {
          id: "jqssizetip",
          style: s,
          class: i
        })), (this.tooltip = _("<div/>", {
          id: "jqstooltip",
          class: i
        }).appendTo(
          this.container
        )), (e = this.tooltip.offset()), (this.offsetLeft =
          e.left), (this.offsetTop = e.top), (this.hidden = !0), _(
          window
        ).unbind("resize.jqs scroll.jqs"), _(window).bind(
          "resize.jqs scroll.jqs",
          _.proxy(this.updateWindowDims, this)
        ), this.updateWindowDims();
      },
      updateWindowDims: function() {
        (this.scrollTop = _(window).scrollTop()), (this.scrollLeft = _(
          window
        ).scrollLeft()), (this.scrollRight =
          this.scrollLeft + _(window).width()), this.updatePosition();
      },
      getSize: function(t) {
        this.sizetip.html(t).appendTo(this.container), (this.width =
          this.sizetip.width() +
          1), (this.height = this.sizetip.height()), this.sizetip.remove();
      },
      setContent: function(t) {
        if (!t)
          return this.tooltip.css(
            "visibility",
            "hidden"
          ), void (this.hidden = !0);
        this.getSize(t), this.tooltip
          .html(t)
          .css({
            width: this.width,
            height: this.height,
            visibility: "visible"
          }), this.hidden && ((this.hidden = !1), this.updatePosition());
      },
      updatePosition: function(t, e) {
        if (t === B) {
          if (this.mousex === B) return;
          (t = this.mousex - this.offsetLeft), (e =
            this.mousey - this.offsetTop);
        } else
          (this.mousex = t -= this.offsetLeft), (this.mousey = e -= this
            .offsetTop);
        this.height &&
          this.width &&
          !this.hidden &&
          (
            (e -= this.height + this.tooltipOffsetY),
            (t += this.tooltipOffsetX),
            e < this.scrollTop && (e = this.scrollTop),
            t < this.scrollLeft
              ? (t = this.scrollLeft)
              : t + this.width > this.scrollRight &&
                (t = this.scrollRight - this.width),
            this.tooltip.css({ left: t, top: e })
          );
      },
      remove: function() {
        this.tooltip.remove(), this.sizetip.remove(), (this.sizetip = this.tooltip = B), _(
          window
        ).unbind("resize.jqs scroll.jqs");
      }
    })), _(function() {
      i(
        '.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;box-sizing: content-box;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}'
      );
    }), (b = []), (_.fn.sparkline = function(h, i) {
      return this.each(function() {
        var t,
          e,
          r = new _.fn.sparkline.options(this, i),
          l = _(this);
        if (
          (
            (t = function() {
              var t, e, i, s, n, o, a;
              (t =
                "html" === h || h === B
                  ? (
                      ((a = this.getAttribute(r.get("tagValuesAttribute"))) !==
                        B &&
                        null !== a) ||
                        (a = l.html()),
                      a.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",")
                    )
                  : h), (e =
                "auto" === r.get("width")
                  ? t.length * r.get("defaultPixelsPerValue")
                  : r.get("width")), "auto" === r.get("height")
                ? (r.get("composite") && _.data(this, "_jqs_vcanvas")) ||
                  (
                    ((s = $.createElement("span")).innerHTML = "a"),
                    l.html(s),
                    (i = _(s).innerHeight() || _(s).height()),
                    _(s).remove(),
                    (s = null)
                  )
                : (i = r.get("height")), r.get("disableInteraction")
                ? (n = !1)
                : (n = _.data(this, "_jqs_mhandler"))
                  ? r.get("composite") || n.reset()
                  : (
                      (n = new c(this, r)),
                      _.data(this, "_jqs_mhandler", n)
                    ), !r.get("composite") || _.data(this, "_jqs_vcanvas")
                ? (
                    (o = new _.fn.sparkline[(r.get("type"))](
                      this,
                      t,
                      r,
                      e,
                      i
                    )).render(),
                    n && n.registerSparkline(o)
                  )
                : _.data(this, "_jqs_errnotify") ||
                  (
                    alert(
                      "Attempted to attach a composite sparkline to an element with no existing sparkline"
                    ),
                    _.data(this, "_jqs_errnotify", !0)
                  );
            }),
            (_(this).html() &&
              !r.get("disableHiddenCheck") &&
              _(this).is(":hidden")) ||
              !_(this).parents("body").length
          )
        ) {
          if (!r.get("composite") && _.data(this, "_jqs_pending"))
            for (e = b.length; e; e--)
              b[e - 1][0] == this && b.splice(e - 1, 1);
          b.push([this, t]), _.data(this, "_jqs_pending", !0);
        } else t.call(this);
      });
    }), (_.fn.sparkline.defaults = t()), (_.sparkline_display_visible = function() {
      var t,
        e,
        i,
        s = [];
      for (e = 0, i = b.length; e < i; e++)
        (t = b[e][0]), _(t).is(":visible") && !_(t).parents().is(":hidden")
          ? (b[e][1].call(t), _.data(b[e][0], "_jqs_pending", !1), s.push(e))
          : _(t).closest("html").length ||
            _.data(t, "_jqs_pending") ||
            (_.data(b[e][0], "_jqs_pending", !1), s.push(e));
      for (e = s.length; e; e--) b.splice(s[e - 1], 1);
    }), (_.fn.sparkline.options = e({
      init: function(t, e) {
        var i, s, n, o;
        (this.userOptions = e =
          e || {}), (this.tag = t), (this.tagValCache = {}), (n = (s =
          _.fn.sparkline.defaults).common), (this.tagOptionsPrefix =
          e.enableTagOptions &&
          (e.tagOptionsPrefix || n.tagOptionsPrefix)), (i =
          (o = this.getTagSetting("type")) === x
            ? s[e.type || n.type]
            : s[o]), (this.mergedOptions = _.extend({}, n, i, e));
      },
      getTagSetting: function(t) {
        var e,
          i,
          s,
          n,
          o = this.tagOptionsPrefix;
        if (!1 === o || o === B) return x;
        if (this.tagValCache.hasOwnProperty(t)) e = this.tagValCache.key;
        else {
          if ((e = this.tag.getAttribute(o + t)) === B || null === e) e = x;
          else if ("[" === e.substr(0, 1))
            for (i = (e = e.substr(1, e.length - 2).split(",")).length; i--; )
              e[i] = W(e[i].replace(/(^\s*)|(\s*$)/g, ""));
          else if ("{" === e.substr(0, 1))
            for (
              s = e.substr(1, e.length - 2).split(","), e = {}, i = s.length;
              i--;

            )
              e[(n = s[i].split(":", 2))[0].replace(/(^\s*)|(\s*$)/g, "")] = W(
                n[1].replace(/(^\s*)|(\s*$)/g, "")
              );
          else e = W(e);
          this.tagValCache.key = e;
        }
        return e;
      },
      get: function(t, e) {
        var i,
          s = this.getTagSetting(t);
        return s !== x ? s : (i = this.mergedOptions[t]) === B ? e : i;
      }
    })), (_.fn.sparkline._base = e({
      disabled: !1,
      init: function(t, e, i, s, n) {
        (this.el = t), (this.$el = _(
          t
        )), (this.values = e), (this.options = i), (this.width = s), (this.height = n), (this.currentRegion = B);
      },
      initTarget: function() {
        var t = !this.options.get("disableInteraction");
        (this.target = this.$el.simpledraw(
          this.width,
          this.height,
          this.options.get("composite"),
          t
        ))
          ? (
              (this.canvasWidth = this.target.pixelWidth),
              (this.canvasHeight = this.target.pixelHeight)
            )
          : (this.disabled = !0);
      },
      render: function() {
        return !this.disabled || ((this.el.innerHTML = ""), !1);
      },
      getRegion: function(t, e) {},
      setRegionHighlight: function(t, e, i) {
        var s,
          n = this.currentRegion,
          o = !this.options.get("disableHighlight");
        return e > this.canvasWidth || i > this.canvasHeight || e < 0 || i < 0
          ? null
          : n !== (s = this.getRegion(t, e, i)) &&
            (
              n !== B && o && this.removeHighlight(),
              (this.currentRegion = s) !== B && o && this.renderHighlight(),
              !0
            );
      },
      clearRegionHighlight: function() {
        return (
          this.currentRegion !== B &&
          (this.removeHighlight(), !(this.currentRegion = B))
        );
      },
      renderHighlight: function() {
        this.changeHighlight(!0);
      },
      removeHighlight: function() {
        this.changeHighlight(!1);
      },
      changeHighlight: function(t) {},
      getCurrentRegionTooltip: function() {
        var t,
          e,
          i,
          s,
          n,
          o,
          a,
          r,
          l,
          h,
          d,
          p,
          c,
          u,
          g = this.options,
          f = "",
          m = [];
        if (this.currentRegion === B) return "";
        if (
          ((t = this.getCurrentRegionFields()), (d = g.get("tooltipFormatter")))
        )
          return d(this, g, t);
        if (
          (
            g.get("tooltipChartTitle") &&
              (f +=
                '<div class="jqs jqstitle">' +
                g.get("tooltipChartTitle") +
                "</div>\n"),
            !(e = this.options.get("tooltipFormat"))
          )
        )
          return "";
        if (
          (
            _.isArray(e) || (e = [e]),
            _.isArray(t) || (t = [t]),
            (a = this.options.get("tooltipFormatFieldlist")),
            (r = this.options.get("tooltipFormatFieldlistKey")),
            a && r
          )
        ) {
          for (l = [], o = t.length; o--; )
            (h = t[o][r]), -1 != (u = _.inArray(h, a)) && (l[u] = t[o]);
          t = l;
        }
        for (i = e.length, c = t.length, o = 0; o < i; o++)
          for (
            "string" == typeof (p = e[o]) && (p = new v(p)), s =
              p.fclass || "jqsfield", u = 0;
            u < c;
            u++
          )
            (t[u].isNull && g.get("tooltipSkipNull")) ||
              (
                _.extend(t[u], {
                  prefix: g.get("tooltipPrefix"),
                  suffix: g.get("tooltipSuffix")
                }),
                (n = p.render(t[u], g.get("tooltipValueLookups"), g)),
                m.push('<div class="' + s + '">' + n + "</div>")
              );
        return m.length ? f + m.join("\n") : "";
      },
      getCurrentRegionFields: function() {},
      calcHighlightColor: function(t, e) {
        var i,
          s,
          n,
          o,
          a = e.get("highlightColor"),
          r = e.get("highlightLighten");
        if (a) return a;
        if (
          r &&
          (i =
            /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(t) ||
            /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(t))
        ) {
          for (n = [], s = 4 === t.length ? 16 : 1, o = 0; o < 3; o++)
            n[o] = j(N.round(parseInt(i[o + 1], 16) * s * r), 0, 255);
          return "rgb(" + n.join(",") + ")";
        }
        return t;
      }
    })), (n = {
      changeHighlight: function(t) {
        var e,
          i = this.currentRegion,
          s = this.target,
          n = this.regionShapes[i];
        n &&
          (
            (e = this.renderRegion(i, t)),
            _.isArray(e) || _.isArray(n)
              ? (
                  s.replaceWithShapes(n, e),
                  (this.regionShapes[i] = _.map(e, function(t) {
                    return t.id;
                  }))
                )
              : (s.replaceWithShape(n, e), (this.regionShapes[i] = e.id))
          );
      },
      render: function() {
        var t,
          e,
          i,
          s,
          n = this.values,
          o = this.target,
          a = this.regionShapes;
        if (this.cls._super.render.call(this)) {
          for (i = n.length; i--; )
            if ((t = this.renderRegion(i)))
              if (_.isArray(t)) {
                for (e = [], s = t.length; s--; )
                  t[s].append(), e.push(t[s].id);
                a[i] = e;
              } else t.append(), (a[i] = t.id);
            else a[i] = null;
          o.render();
        }
      }
    }), (_.fn.sparkline.line = L = e(_.fn.sparkline._base, {
      type: "line",
      init: function(t, e, i, s, n) {
        L._super.init.call(
          this,
          t,
          e,
          i,
          s,
          n
        ), (this.vertices = []), (this.regionMap = []), (this.xvalues = []), (this.yvalues = []), (this.yminmax = []), (this.hightlightSpotId = null), (this.lastShapeId = null), this.initTarget();
      },
      getRegion: function(t, e, i) {
        var s,
          n = this.regionMap;
        for (s = n.length; s--; )
          if (null !== n[s] && e >= n[s][0] && e <= n[s][1]) return n[s][2];
        return B;
      },
      getCurrentRegionFields: function() {
        var t = this.currentRegion;
        return {
          isNull: null === this.yvalues[t],
          x: this.xvalues[t],
          y: this.yvalues[t],
          color: this.options.get("lineColor"),
          fillColor: this.options.get("fillColor"),
          offset: t
        };
      },
      renderHighlight: function() {
        var t,
          e,
          i = this.currentRegion,
          s = this.target,
          n = this.vertices[i],
          o = this.options,
          a = o.get("spotRadius"),
          r = o.get("highlightSpotColor"),
          l = o.get("highlightLineColor");
        n &&
          (
            a &&
              r &&
              (
                (t = s.drawCircle(n[0], n[1], a, B, r)),
                (this.highlightSpotId = t.id),
                s.insertAfterShape(this.lastShapeId, t)
              ),
            l &&
              (
                (e = s.drawLine(
                  n[0],
                  this.canvasTop,
                  n[0],
                  this.canvasTop + this.canvasHeight,
                  l
                )),
                (this.highlightLineId = e.id),
                s.insertAfterShape(this.lastShapeId, e)
              )
          );
      },
      removeHighlight: function() {
        var t = this.target;
        this.highlightSpotId &&
          (
            t.removeShapeId(this.highlightSpotId),
            (this.highlightSpotId = null)
          ), this.highlightLineId &&
          (
            t.removeShapeId(this.highlightLineId),
            (this.highlightLineId = null)
          );
      },
      scanValues: function() {
        var t,
          e,
          i,
          s,
          n,
          o = this.values,
          a = o.length,
          r = this.xvalues,
          l = this.yvalues,
          h = this.yminmax;
        for (t = 0; t < a; t++)
          (e = o[t]), (i = "string" == typeof o[t]), (s =
            "object" == typeof o[t] && o[t] instanceof Array), (n =
            i && o[t].split(":")), i && 2 === n.length
            ? (r.push(Number(n[0])), l.push(Number(n[1])), h.push(Number(n[1])))
            : s
              ? (r.push(e[0]), l.push(e[1]), h.push(e[1]))
              : (
                  r.push(t),
                  null === o[t] || "null" === o[t]
                    ? l.push(null)
                    : (l.push(Number(e)), h.push(Number(e)))
                );
        this.options.get("xvalues") &&
          (r = this.options.get(
            "xvalues"
          )), (this.maxy = this.maxyorg = N.max.apply(
          N,
          h
        )), (this.miny = this.minyorg = N.min.apply(
          N,
          h
        )), (this.maxx = N.max.apply(N, r)), (this.minx = N.min.apply(
          N,
          r
        )), (this.xvalues = r), (this.yvalues = l), (this.yminmax = h);
      },
      processRangeOptions: function() {
        var t = this.options,
          e = t.get("normalRangeMin"),
          i = t.get("normalRangeMax");
        e !== B &&
          (
            e < this.miny && (this.miny = e),
            i > this.maxy && (this.maxy = i)
          ), t.get("chartRangeMin") !== B &&
          (t.get("chartRangeClip") || t.get("chartRangeMin") < this.miny) &&
          (this.miny = t.get("chartRangeMin")), t.get("chartRangeMax") !== B &&
          (t.get("chartRangeClip") || t.get("chartRangeMax") > this.maxy) &&
          (this.maxy = t.get("chartRangeMax")), t.get("chartRangeMinX") !== B &&
          (t.get("chartRangeClipX") || t.get("chartRangeMinX") < this.minx) &&
          (this.minx = t.get("chartRangeMinX")), t.get("chartRangeMaxX") !==
          B &&
          (t.get("chartRangeClipX") || t.get("chartRangeMaxX") > this.maxx) &&
          (this.maxx = t.get("chartRangeMaxX"));
      },
      drawNormalRange: function(t, e, i, s, n) {
        var o = this.options.get("normalRangeMin"),
          a = this.options.get("normalRangeMax"),
          r = e + N.round(i - i * ((a - this.miny) / n)),
          l = N.round(i * (a - o) / n);
        this.target
          .drawRect(t, r, s, l, B, this.options.get("normalRangeColor"))
          .append();
      },
      render: function() {
        var t,
          e,
          i,
          s,
          n,
          o,
          a,
          r,
          l,
          h,
          d,
          p,
          c,
          u,
          g,
          f,
          m,
          v,
          b,
          x,
          y,
          w,
          C,
          S,
          $ = this.options,
          k = this.target,
          R = this.canvasWidth,
          T = this.canvasHeight,
          I = this.vertices,
          E = $.get("spotRadius"),
          H = this.regionMap;
        if (
          L._super.render.call(this) &&
          (
            this.scanValues(),
            this.processRangeOptions(),
            (w = this.xvalues),
            (C = this.yvalues),
            this.yminmax.length && !(this.yvalues.length < 2)
          )
        ) {
          for (
            s = n = 0, t =
              this.maxx - this.minx == 0 ? 1 : this.maxx - this.minx, e =
              this.maxy - this.miny == 0 ? 1 : this.maxy - this.miny, i =
              this.yvalues.length - 1, E &&
              (R < 4 * E || T < 4 * E) &&
              (E = 0), E &&
              (
                ((x =
                  $.get("highlightSpotColor") &&
                  !$.get("disableInteraction")) ||
                  $.get("minSpotColor") ||
                  ($.get("spotColor") && C[i] === this.miny)) &&
                  (T -= N.ceil(E)),
                (x ||
                  $.get("maxSpotColor") ||
                  ($.get("spotColor") && C[i] === this.maxy)) &&
                  ((T -= N.ceil(E)), (s += N.ceil(E))),
                (x ||
                  (($.get("minSpotColor") || $.get("maxSpotColor")) &&
                    (C[0] === this.miny || C[0] === this.maxy))) &&
                  ((n += N.ceil(E)), (R -= N.ceil(E))),
                (x ||
                  $.get("spotColor") ||
                  $.get("minSpotColor") ||
                  ($.get("maxSpotColor") &&
                    (C[i] === this.miny || C[i] === this.maxy))) &&
                  (R -= N.ceil(E))
              ), T--, $.get("normalRangeMin") === B ||
              $.get("drawNormalOnTop") ||
              this.drawNormalRange(n, s, T, R, e), r = [
              (a = [])
            ], c = u = null, g = C.length, S = 0;
            S < g;
            S++
          )
            (l = w[S]), (d = w[S + 1]), (h = C[S]), (u =
              (p = n + N.round((l - this.minx) * (R / t))) +
              ((S < g - 1 ? n + N.round((d - this.minx) * (R / t)) : R) - p) /
                2), (H[S] = [c || 0, u, S]), (c = u), null === h
              ? S && (null !== C[S - 1] && ((a = []), r.push(a)), I.push(null))
              : (
                  h < this.miny && (h = this.miny),
                  h > this.maxy && (h = this.maxy),
                  a.length || a.push([p, s + T]),
                  (o = [p, s + N.round(T - T * ((h - this.miny) / e))]),
                  a.push(o),
                  I.push(o)
                );
          for (f = [], m = [], v = r.length, S = 0; S < v; S++)
            (a = r[S]).length &&
              (
                $.get("fillColor") &&
                  (
                    a.push([a[a.length - 1][0], s + T]),
                    m.push(a.slice(0)),
                    a.pop()
                  ),
                2 < a.length && (a[0] = [a[0][0], a[1][1]]),
                f.push(a)
              );
          for (v = m.length, S = 0; S < v; S++)
            k.drawShape(m[S], $.get("fillColor"), $.get("fillColor")).append();
          for (
            $.get("normalRangeMin") !== B &&
              $.get("drawNormalOnTop") &&
              this.drawNormalRange(n, s, T, R, e), v = f.length, S = 0;
            S < v;
            S++
          )
            k
              .drawShape(f[S], $.get("lineColor"), B, $.get("lineWidth"))
              .append();
          if (E && $.get("valueSpots"))
            for (
              (b = $.get("valueSpots")).get === B && (b = new q(b)), S = 0;
              S < g;
              S++
            )
              (y = b.get(C[S])) &&
                k
                  .drawCircle(
                    n + N.round((w[S] - this.minx) * (R / t)),
                    s + N.round(T - T * ((C[S] - this.miny) / e)),
                    E,
                    B,
                    y
                  )
                  .append();
          E &&
            $.get("spotColor") &&
            null !== C[i] &&
            k
              .drawCircle(
                n + N.round((w[w.length - 1] - this.minx) * (R / t)),
                s + N.round(T - T * ((C[i] - this.miny) / e)),
                E,
                B,
                $.get("spotColor")
              )
              .append(), this.maxy !== this.minyorg &&
            (
              E &&
                $.get("minSpotColor") &&
                (
                  (l = w[_.inArray(this.minyorg, C)]),
                  k
                    .drawCircle(
                      n + N.round((l - this.minx) * (R / t)),
                      s + N.round(T - T * ((this.minyorg - this.miny) / e)),
                      E,
                      B,
                      $.get("minSpotColor")
                    )
                    .append()
                ),
              E &&
                $.get("maxSpotColor") &&
                (
                  (l = w[_.inArray(this.maxyorg, C)]),
                  k
                    .drawCircle(
                      n + N.round((l - this.minx) * (R / t)),
                      s + N.round(T - T * ((this.maxyorg - this.miny) / e)),
                      E,
                      B,
                      $.get("maxSpotColor")
                    )
                    .append()
                )
            ), (this.lastShapeId = k.getLastShapeId()), (this.canvasTop = s), k.render();
        }
      }
    })), (_.fn.sparkline.bar = D = e(_.fn.sparkline._base, n, {
      type: "bar",
      init: function(t, e, i, s, n) {
        var o,
          a,
          r,
          l,
          h,
          d,
          p,
          c,
          u,
          g,
          f,
          m,
          v,
          b,
          x,
          y,
          w,
          C,
          S,
          $,
          k,
          R = parseInt(i.get("barWidth"), 10),
          T = parseInt(i.get("barSpacing"), 10),
          I = i.get("chartRangeMin"),
          E = i.get("chartRangeMax"),
          H = i.get("chartRangeClip"),
          L = 1 / 0,
          M = -1 / 0;
        for (
          D._super.init.call(this, t, e, i, s, n), d = 0, p = e.length;
          d < p;
          d++
        )
          ((o = "string" == typeof ($ = e[d]) && -1 < $.indexOf(":")) ||
            _.isArray($)) &&
            (
              (x = !0),
              o && ($ = e[d] = O($.split(":"))),
              ($ = z($, null)),
              (a = N.min.apply(N, $)) < L && (L = a),
              M < (r = N.max.apply(N, $)) && (M = r)
            );
        (this.stacked = x), (this.regionShapes = {}), (this.barWidth = R), (this.barSpacing = T), (this.totalBarWidth =
          R + T), (this.width = s =
          e.length * R + (e.length - 1) * T), this.initTarget(), H &&
          (
            (v = I === B ? -1 / 0 : I),
            (b = E === B ? 1 / 0 : E)
          ), (h = []), (l = x ? [] : h);
        var A = [],
          P = [];
        for (d = 0, p = e.length; d < p; d++)
          if (x)
            for (
              y = e[d], e[d] = S = [], A[d] = 0, l[d] = P[d] = 0, w = 0, C =
                y.length;
              w < C;
              w++
            )
              null !== ($ = S[w] = H ? j(y[w], v, b) : y[w]) &&
                (
                  0 < $ && (A[d] += $),
                  L < 0 && 0 < M
                    ? $ < 0 ? (P[d] += N.abs($)) : (l[d] += $)
                    : (l[d] += N.abs($ - ($ < 0 ? M : L))),
                  h.push($)
                );
          else
            ($ = H ? j(e[d], v, b) : e[d]), null !== ($ = e[d] = W($)) &&
              h.push($);
        (this.max = m = N.max.apply(N, h)), (this.min = f = N.min.apply(
          N,
          h
        )), (this.stackMax = M = x
          ? N.max.apply(N, A)
          : m), (this.stackMin = L = x ? N.min.apply(N, h) : f), i.get(
          "chartRangeMin"
        ) !== B &&
          (i.get("chartRangeClip") || i.get("chartRangeMin") < f) &&
          (f = i.get("chartRangeMin")), i.get("chartRangeMax") !== B &&
          (i.get("chartRangeClip") || i.get("chartRangeMax") > m) &&
          (m = i.get("chartRangeMax")), (this.zeroAxis = u = i.get(
          "zeroAxis",
          !0
        )), (g =
          f <= 0 && 0 <= m && u
            ? 0
            : 0 == u ? f : 0 < f ? f : m), (this.xaxisOffset = g), (c = x
          ? N.max.apply(N, l) + N.max.apply(N, P)
          : m - f), (this.canvasHeightEf =
          u && f < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1), f < g
          ? (k = ((x && 0 <= m ? M : m) - g) / c * this.canvasHeight) !==
              N.ceil(k) && ((this.canvasHeightEf -= 2), (k = N.ceil(k)))
          : (k = this.canvasHeight), (this.yoffset = k), _.isArray(
          i.get("colorMap")
        )
          ? (
              (this.colorMapByIndex = i.get("colorMap")),
              (this.colorMapByValue = null)
            )
          : (
              (this.colorMapByIndex = null),
              (this.colorMapByValue = i.get("colorMap")),
              this.colorMapByValue &&
                this.colorMapByValue.get === B &&
                (this.colorMapByValue = new q(this.colorMapByValue))
            ), (this.range = c);
      },
      getRegion: function(t, e, i) {
        var s = N.floor(e / this.totalBarWidth);
        return s < 0 || s >= this.values.length ? B : s;
      },
      getCurrentRegionFields: function() {
        var t,
          e,
          i = this.currentRegion,
          s = o(this.values[i]),
          n = [];
        for (e = s.length; e--; )
          (t = s[e]), n.push({
            isNull: null === t,
            value: t,
            color: this.calcColor(e, t, i),
            offset: i
          });
        return n;
      },
      calcColor: function(t, e, i) {
        var s,
          n,
          o = this.colorMapByIndex,
          a = this.colorMapByValue,
          r = this.options;
        return (s = this.stacked
          ? r.get("stackedBarColor")
          : e < 0 ? r.get("negBarColor") : r.get("barColor")), 0 === e &&
          r.get("zeroColor") !== B &&
          (s = r.get("zeroColor")), a && (n = a.get(e))
          ? (s = n)
          : o && o.length > i && (s = o[i]), _.isArray(s) ? s[t % s.length] : s;
      },
      renderRegion: function(t, e) {
        var i,
          s,
          n,
          o,
          a,
          r,
          l,
          h,
          d,
          p,
          c = this.values[t],
          u = this.options,
          g = this.xaxisOffset,
          f = [],
          m = this.range,
          v = this.stacked,
          b = this.target,
          x = t * this.totalBarWidth,
          y = this.canvasHeightEf,
          w = this.yoffset;
        if (
          (
            (l = (c = _.isArray(c) ? c : [c]).length),
            (h = c[0]),
            (o = C(null, c)),
            (p = C(g, c, !0)),
            o
          )
        )
          return u.get("nullColor")
            ? (
                (n = e
                  ? u.get("nullColor")
                  : this.calcHighlightColor(u.get("nullColor"), u)),
                (i = 0 < w ? w - 1 : w),
                b.drawRect(x, i, this.barWidth - 1, 0, n, n)
              )
            : B;
        for (a = w, r = 0; r < l; r++) {
          if (((h = c[r]), v && h === g)) {
            if (!p || d) continue;
            d = !0;
          }
          (s = 0 < m ? N.floor(y * (N.abs(h - g) / m)) + 1 : 1), h < g ||
          (h === g && 0 === w)
            ? ((i = a), (a += s))
            : ((i = w - s), (w -= s)), (n = this.calcColor(r, h, t)), e &&
            (n = this.calcHighlightColor(n, u)), f.push(
            b.drawRect(x, i, this.barWidth - 1, s - 1, n, n)
          );
        }
        return 1 === f.length ? f[0] : f;
      }
    })), (_.fn.sparkline.tristate = r = e(_.fn.sparkline._base, n, {
      type: "tristate",
      init: function(t, e, i, s, n) {
        var o = parseInt(i.get("barWidth"), 10),
          a = parseInt(i.get("barSpacing"), 10);
        r._super.init.call(
          this,
          t,
          e,
          i,
          s,
          n
        ), (this.regionShapes = {}), (this.barWidth = o), (this.barSpacing = a), (this.totalBarWidth =
          o + a), (this.values = _.map(e, Number)), (this.width = s =
          e.length * o + (e.length - 1) * a), _.isArray(i.get("colorMap"))
          ? (
              (this.colorMapByIndex = i.get("colorMap")),
              (this.colorMapByValue = null)
            )
          : (
              (this.colorMapByIndex = null),
              (this.colorMapByValue = i.get("colorMap")),
              this.colorMapByValue &&
                this.colorMapByValue.get === B &&
                (this.colorMapByValue = new q(this.colorMapByValue))
            ), this.initTarget();
      },
      getRegion: function(t, e, i) {
        return N.floor(e / this.totalBarWidth);
      },
      getCurrentRegionFields: function() {
        var t = this.currentRegion;
        return {
          isNull: this.values[t] === B,
          value: this.values[t],
          color: this.calcColor(this.values[t], t),
          offset: t
        };
      },
      calcColor: function(t, e) {
        var i,
          s = this.values,
          n = this.options,
          o = this.colorMapByIndex,
          a = this.colorMapByValue;
        return a && (i = a.get(t))
          ? i
          : o && o.length > e
            ? o[e]
            : s[e] < 0
              ? n.get("negBarColor")
              : 0 < s[e] ? n.get("posBarColor") : n.get("zeroBarColor");
      },
      renderRegion: function(t, e) {
        var i,
          s,
          n,
          o,
          a,
          r,
          l = this.values,
          h = this.options,
          d = this.target;
        if (
          (
            (i = d.pixelHeight),
            (n = N.round(i / 2)),
            (o = t * this.totalBarWidth),
            (s =
              l[t] < 0
                ? (a = n) - 1
                : 0 < l[t] ? ((a = 0), n - 1) : ((a = n - 1), 2)),
            null !== (r = this.calcColor(l[t], t))
          )
        )
          return e && (r = this.calcHighlightColor(r, h)), d.drawRect(
            o,
            a,
            this.barWidth - 1,
            s - 1,
            r,
            r
          );
      }
    })), (_.fn.sparkline.discrete = a = e(_.fn.sparkline._base, n, {
      type: "discrete",
      init: function(t, e, i, s, n) {
        a._super.init.call(
          this,
          t,
          e,
          i,
          s,
          n
        ), (this.regionShapes = {}), (this.values = e = _.map(
          e,
          Number
        )), (this.min = N.min.apply(N, e)), (this.max = N.max.apply(
          N,
          e
        )), (this.range = this.max - this.min), (this.width = s =
          "auto" === i.get("width")
            ? 2 * e.length
            : this.width), (this.interval = N.floor(
          s / e.length
        )), (this.itemWidth = s / e.length), i.get("chartRangeMin") !== B &&
          (i.get("chartRangeClip") || i.get("chartRangeMin") < this.min) &&
          (this.min = i.get("chartRangeMin")), i.get("chartRangeMax") !== B &&
          (i.get("chartRangeClip") || i.get("chartRangeMax") > this.max) &&
          (this.max = i.get("chartRangeMax")), this.initTarget(), this.target &&
          (this.lineHeight =
            "auto" === i.get("lineHeight")
              ? N.round(0.3 * this.canvasHeight)
              : i.get("lineHeight"));
      },
      getRegion: function(t, e, i) {
        return N.floor(e / this.itemWidth);
      },
      getCurrentRegionFields: function() {
        var t = this.currentRegion;
        return {
          isNull: this.values[t] === B,
          value: this.values[t],
          offset: t
        };
      },
      renderRegion: function(t, e) {
        var i,
          s,
          n,
          o,
          a = this.values,
          r = this.options,
          l = this.min,
          h = this.max,
          d = this.range,
          p = this.interval,
          c = this.target,
          u = this.canvasHeight,
          g = this.lineHeight,
          f = u - g;
        return (s = j(a[t], l, h)), (o = t * p), (i = N.round(
          f - f * ((s - l) / d)
        )), (n =
          r.get("thresholdColor") && s < r.get("thresholdValue")
            ? r.get("thresholdColor")
            : r.get("lineColor")), e &&
          (n = this.calcHighlightColor(n, r)), c.drawLine(o, i, o, i + g, n);
      }
    })), (_.fn.sparkline.bullet = l = e(_.fn.sparkline._base, {
      type: "bullet",
      init: function(t, e, i, s, n) {
        var o, a, r;
        l._super.init.call(this, t, e, i, s, n), (this.values = e = O(
          e
        )), ((r = e.slice())[0] = null === r[0] ? r[2] : r[0]), (r[1] =
          null === e[1] ? r[2] : r[1]), (o = N.min.apply(
          N,
          e
        )), (a = N.max.apply(N, e)), (o =
          i.get("base") === B
            ? o < 0 ? o : 0
            : i.get("base")), (this.min = o), (this.max = a), (this.range =
          a -
          o), (this.shapes = {}), (this.valueShapes = {}), (this.regiondata = {}), (this.width = s =
          "auto" === i.get("width")
            ? "4.0em"
            : s), (this.target = this.$el.simpledraw(
          s,
          n,
          i.get("composite")
        )), e.length || (this.disabled = !0), this.initTarget();
      },
      getRegion: function(t, e, i) {
        var s = this.target.getShapeAt(t, e, i);
        return s !== B && this.shapes[s] !== B ? this.shapes[s] : B;
      },
      getCurrentRegionFields: function() {
        var t = this.currentRegion;
        return {
          fieldkey: t.substr(0, 1),
          value: this.values[t.substr(1)],
          region: t
        };
      },
      changeHighlight: function(t) {
        var e,
          i = this.currentRegion,
          s = this.valueShapes[i];
        switch ((delete this.shapes[s], i.substr(0, 1))) {
          case "r":
            e = this.renderRange(i.substr(1), t);
            break;
          case "p":
            e = this.renderPerformance(t);
            break;
          case "t":
            e = this.renderTarget(t);
        }
        (this.valueShapes[i] = e.id), (this.shapes[
          e.id
        ] = i), this.target.replaceWithShape(s, e);
      },
      renderRange: function(t, e) {
        var i = this.values[t],
          s = N.round(this.canvasWidth * ((i - this.min) / this.range)),
          n = this.options.get("rangeColors")[t - 2];
        return e &&
          (n = this.calcHighlightColor(n, this.options)), this.target.drawRect(
          0,
          0,
          s - 1,
          this.canvasHeight - 1,
          n,
          n
        );
      },
      renderPerformance: function(t) {
        var e = this.values[1],
          i = N.round(this.canvasWidth * ((e - this.min) / this.range)),
          s = this.options.get("performanceColor");
        return t &&
          (s = this.calcHighlightColor(s, this.options)), this.target.drawRect(
          0,
          N.round(0.3 * this.canvasHeight),
          i - 1,
          N.round(0.4 * this.canvasHeight) - 1,
          s,
          s
        );
      },
      renderTarget: function(t) {
        var e = this.values[0],
          i = N.round(
            this.canvasWidth * ((e - this.min) / this.range) -
              this.options.get("targetWidth") / 2
          ),
          s = N.round(0.1 * this.canvasHeight),
          n = this.canvasHeight - 2 * s,
          o = this.options.get("targetColor");
        return t &&
          (o = this.calcHighlightColor(o, this.options)), this.target.drawRect(
          i,
          s,
          this.options.get("targetWidth") - 1,
          n - 1,
          o,
          o
        );
      },
      render: function() {
        var t,
          e,
          i = this.values.length,
          s = this.target;
        if (l._super.render.call(this)) {
          for (t = 2; t < i; t++)
            (e = this.renderRange(t).append()), (this.shapes[e.id] =
              "r" + t), (this.valueShapes["r" + t] = e.id);
          null !== this.values[1] &&
            (
              (e = this.renderPerformance().append()),
              (this.shapes[e.id] = "p1"),
              (this.valueShapes.p1 = e.id)
            ), null !== this.values[0] &&
            (
              (e = this.renderTarget().append()),
              (this.shapes[e.id] = "t0"),
              (this.valueShapes.t0 = e.id)
            ), s.render();
        }
      }
    })), (_.fn.sparkline.pie = h = e(_.fn.sparkline._base, {
      type: "pie",
      init: function(t, e, i, s, n) {
        var o,
          a = 0;
        if (
          (
            h._super.init.call(this, t, e, i, s, n),
            (this.shapes = {}),
            (this.valueShapes = {}),
            (this.values = e = _.map(e, Number)),
            "auto" === i.get("width") && (this.width = this.height),
            0 < e.length
          )
        )
          for (o = e.length; o--; ) a += e[o];
        (this.total = a), this.initTarget(), (this.radius = N.floor(
          N.min(this.canvasWidth, this.canvasHeight) / 2
        ));
      },
      getRegion: function(t, e, i) {
        var s = this.target.getShapeAt(t, e, i);
        return s !== B && this.shapes[s] !== B ? this.shapes[s] : B;
      },
      getCurrentRegionFields: function() {
        var t = this.currentRegion;
        return {
          isNull: this.values[t] === B,
          value: this.values[t],
          percent: this.values[t] / this.total * 100,
          color: this.options.get("sliceColors")[
            t % this.options.get("sliceColors").length
          ],
          offset: t
        };
      },
      changeHighlight: function(t) {
        var e = this.currentRegion,
          i = this.renderSlice(e, t),
          s = this.valueShapes[e];
        delete this.shapes[s], this.target.replaceWithShape(
          s,
          i
        ), (this.valueShapes[e] = i.id), (this.shapes[i.id] = e);
      },
      renderSlice: function(t, e) {
        var i,
          s,
          n,
          o,
          a,
          r = this.target,
          l = this.options,
          h = this.radius,
          d = l.get("borderWidth"),
          p = l.get("offset"),
          c = 2 * N.PI,
          u = this.values,
          g = this.total,
          f = p ? 2 * N.PI * (p / 360) : 0;
        for (o = u.length, n = 0; n < o; n++) {
          if (((s = i = f), 0 < g && (s = f + c * (u[n] / g)), t === n))
            return (a = l.get("sliceColors")[
              n % l.get("sliceColors").length
            ]), e && (a = this.calcHighlightColor(a, l)), r.drawPieSlice(
              h,
              h,
              h - d,
              i,
              s,
              B,
              a
            );
          f = s;
        }
      },
      render: function() {
        var t,
          e,
          i = this.target,
          s = this.values,
          n = this.options,
          o = this.radius,
          a = n.get("borderWidth");
        if (h._super.render.call(this)) {
          for (
            a &&
              i
                .drawCircle(
                  o,
                  o,
                  N.floor(o - a / 2),
                  n.get("borderColor"),
                  B,
                  a
                )
                .append(), e = s.length;
            e--;

          )
            s[e] &&
              (
                (t = this.renderSlice(e).append()),
                (this.valueShapes[e] = t.id),
                (this.shapes[t.id] = e)
              );
          i.render();
        }
      }
    })), (_.fn.sparkline.box = w = e(_.fn.sparkline._base, {
      type: "box",
      init: function(t, e, i, s, n) {
        w._super.init.call(this, t, e, i, s, n), (this.values = _.map(
          e,
          Number
        )), (this.width =
          "auto" === i.get("width") ? "4.0em" : s), this.initTarget(), this
          .values.length || (this.disabled = 1);
      },
      getRegion: function() {
        return 1;
      },
      getCurrentRegionFields: function() {
        var t = [
          { field: "lq", value: this.quartiles[0] },
          { field: "med", value: this.quartiles[1] },
          { field: "uq", value: this.quartiles[2] }
        ];
        return this.loutlier !== B &&
          t.push({ field: "lo", value: this.loutlier }), this.routlier !== B &&
          t.push({ field: "ro", value: this.routlier }), this.lwhisker !== B &&
          t.push({ field: "lw", value: this.lwhisker }), this.rwhisker !== B &&
          t.push({ field: "rw", value: this.rwhisker }), t;
      },
      render: function() {
        var t,
          e,
          i,
          s,
          n,
          o,
          a,
          r,
          l,
          h,
          d,
          p = this.target,
          c = this.values,
          u = c.length,
          g = this.options,
          f = this.canvasWidth,
          m = this.canvasHeight,
          v =
            g.get("chartRangeMin") === B
              ? N.min.apply(N, c)
              : g.get("chartRangeMin"),
          b =
            g.get("chartRangeMax") === B
              ? N.max.apply(N, c)
              : g.get("chartRangeMax"),
          x = 0;
        if (w._super.render.call(this)) {
          if (g.get("raw"))
            g.get("showOutliers") && 5 < c.length
              ? (
                  (e = c[0]),
                  (t = c[1]),
                  (s = c[2]),
                  (n = c[3]),
                  (o = c[4]),
                  (a = c[5]),
                  (r = c[6])
                )
              : ((t = c[0]), (s = c[1]), (n = c[2]), (o = c[3]), (a = c[4]));
          else if (
            (
              c.sort(function(t, e) {
                return t - e;
              }),
              (s = y(c, 1)),
              (n = y(c, 2)),
              (i = (o = y(c, 3)) - s),
              g.get("showOutliers")
            )
          ) {
            for (t = a = B, l = 0; l < u; l++)
              t === B && c[l] > s - i * g.get("outlierIQR") && (t = c[l]), c[
                l
              ] <
                o + i * g.get("outlierIQR") && (a = c[l]);
            (e = c[0]), (r = c[u - 1]);
          } else (t = c[0]), (a = c[u - 1]);
          (this.quartiles = [
            s,
            n,
            o
          ]), (this.lwhisker = t), (this.rwhisker = a), (this.loutlier = e), (this.routlier = r), (d =
            f / (b - v + 1)), g.get("showOutliers") &&
            (
              (x = N.ceil(g.get("spotRadius"))),
              (d = (f -= 2 * N.ceil(g.get("spotRadius"))) / (b - v + 1)),
              e < t &&
                p
                  .drawCircle(
                    (e - v) * d + x,
                    m / 2,
                    g.get("spotRadius"),
                    g.get("outlierLineColor"),
                    g.get("outlierFillColor")
                  )
                  .append(),
              a < r &&
                p
                  .drawCircle(
                    (r - v) * d + x,
                    m / 2,
                    g.get("spotRadius"),
                    g.get("outlierLineColor"),
                    g.get("outlierFillColor")
                  )
                  .append()
            ), p
            .drawRect(
              N.round((s - v) * d + x),
              N.round(0.1 * m),
              N.round((o - s) * d),
              N.round(0.8 * m),
              g.get("boxLineColor"),
              g.get("boxFillColor")
            )
            .append(), p
            .drawLine(
              N.round((t - v) * d + x),
              N.round(m / 2),
              N.round((s - v) * d + x),
              N.round(m / 2),
              g.get("lineColor")
            )
            .append(), p
            .drawLine(
              N.round((t - v) * d + x),
              N.round(m / 4),
              N.round((t - v) * d + x),
              N.round(m - m / 4),
              g.get("whiskerColor")
            )
            .append(), p
            .drawLine(
              N.round((a - v) * d + x),
              N.round(m / 2),
              N.round((o - v) * d + x),
              N.round(m / 2),
              g.get("lineColor")
            )
            .append(), p
            .drawLine(
              N.round((a - v) * d + x),
              N.round(m / 4),
              N.round((a - v) * d + x),
              N.round(m - m / 4),
              g.get("whiskerColor")
            )
            .append(), p
            .drawLine(
              N.round((n - v) * d + x),
              N.round(0.1 * m),
              N.round((n - v) * d + x),
              N.round(0.9 * m),
              g.get("medianColor")
            )
            .append(), g.get("target") &&
            (
              (h = N.ceil(g.get("spotRadius"))),
              p
                .drawLine(
                  N.round((g.get("target") - v) * d + x),
                  N.round(m / 2 - h),
                  N.round((g.get("target") - v) * d + x),
                  N.round(m / 2 + h),
                  g.get("targetColor")
                )
                .append(),
              p
                .drawLine(
                  N.round((g.get("target") - v) * d + x - h),
                  N.round(m / 2),
                  N.round((g.get("target") - v) * d + x + h),
                  N.round(m / 2),
                  g.get("targetColor")
                )
                .append()
            ), p.render();
        }
      }
    })), (u = e({
      init: function(t, e, i, s) {
        (this.target = t), (this.id = e), (this.type = i), (this.args = s);
      },
      append: function() {
        return this.target.appendShape(this), this;
      }
    })), (g = e({
      _pxregex: /(\d+)(px)?\s*$/i,
      init: function(t, e, i) {
        t &&
          (
            (this.width = t),
            (this.height = e),
            (this.target = i),
            (this.lastShapeId = null),
            i[0] && (i = i[0]),
            _.data(i, "_jqs_vcanvas", this)
          );
      },
      drawLine: function(t, e, i, s, n, o) {
        return this.drawShape([[t, e], [i, s]], n, o);
      },
      drawShape: function(t, e, i, s) {
        return this._genShape("Shape", [t, e, i, s]);
      },
      drawCircle: function(t, e, i, s, n, o) {
        return this._genShape("Circle", [t, e, i, s, n, o]);
      },
      drawPieSlice: function(t, e, i, s, n, o, a) {
        return this._genShape("PieSlice", [t, e, i, s, n, o, a]);
      },
      drawRect: function(t, e, i, s, n, o) {
        return this._genShape("Rect", [t, e, i, s, n, o]);
      },
      getElement: function() {
        return this.canvas;
      },
      getLastShapeId: function() {
        return this.lastShapeId;
      },
      reset: function() {
        alert("reset not implemented");
      },
      _insert: function(t, e) {
        _(e).html(t);
      },
      _calculatePixelDims: function(t, e, i) {
        var s;
        (s = this._pxregex.exec(e)), (this.pixelHeight = s
          ? s[1]
          : _(i).height()), (s = this._pxregex.exec(t)), (this.pixelWidth = s
          ? s[1]
          : _(i).width());
      },
      _genShape: function(t, e) {
        var i = S++;
        return e.unshift(i), new u(this, i, t, e);
      },
      appendShape: function(t) {
        alert("appendShape not implemented");
      },
      replaceWithShape: function(t, e) {
        alert("replaceWithShape not implemented");
      },
      insertAfterShape: function(t, e) {
        alert("insertAfterShape not implemented");
      },
      removeShapeId: function(t) {
        alert("removeShapeId not implemented");
      },
      getShapeAt: function(t, e, i) {
        alert("getShapeAt not implemented");
      },
      render: function() {
        alert("render not implemented");
      }
    })), (f = e(g, {
      init: function(t, e, i, s) {
        f._super.init.call(this, t, e, i), (this.canvas = $.createElement(
          "canvas"
        )), i[0] && (i = i[0]), _.data(i, "_jqs_vcanvas", this), _(
          this.canvas
        ).css({
          display: "inline-block",
          width: t,
          height: e,
          verticalAlign: "top"
        }), this._insert(this.canvas, i), this._calculatePixelDims(
          t,
          e,
          this.canvas
        ), (this.canvas.width = this.pixelWidth), (this.canvas.height = this.pixelHeight), (this.interact = s), (this.shapes = {}), (this.shapeseq = []), (this.currentTargetShapeId = B), _(
          this.canvas
        ).css({ width: this.pixelWidth, height: this.pixelHeight });
      },
      _getContext: function(t, e, i) {
        var s = this.canvas.getContext("2d");
        return t !== B && (s.strokeStyle = t), (s.lineWidth =
          i === B ? 1 : i), e !== B && (s.fillStyle = e), s;
      },
      reset: function() {
        this._getContext().clearRect(
          0,
          0,
          this.pixelWidth,
          this.pixelHeight
        ), (this.shapes = {}), (this.shapeseq = []), (this.currentTargetShapeId = B);
      },
      _drawShape: function(t, e, i, s, n) {
        var o,
          a,
          r = this._getContext(i, s, n);
        for (
          r.beginPath(), r.moveTo(e[0][0] + 0.5, e[0][1] + 0.5), o = 1, a =
            e.length;
          o < a;
          o++
        )
          r.lineTo(e[o][0] + 0.5, e[o][1] + 0.5);
        i !== B && r.stroke(), s !== B && r.fill(), this.targetX !== B &&
          this.targetY !== B &&
          r.isPointInPath(this.targetX, this.targetY) &&
          (this.currentTargetShapeId = t);
      },
      _drawCircle: function(t, e, i, s, n, o, a) {
        var r = this._getContext(n, o, a);
        r.beginPath(), r.arc(e, i, s, 0, 2 * N.PI, !1), this.targetX !== B &&
          this.targetY !== B &&
          r.isPointInPath(this.targetX, this.targetY) &&
          (this.currentTargetShapeId = t), n !== B && r.stroke(), o !== B &&
          r.fill();
      },
      _drawPieSlice: function(t, e, i, s, n, o, a, r) {
        var l = this._getContext(a, r);
        l.beginPath(), l.moveTo(e, i), l.arc(e, i, s, n, o, !1), l.lineTo(
          e,
          i
        ), l.closePath(), a !== B && l.stroke(), r && l.fill(), this.targetX !==
          B &&
          this.targetY !== B &&
          l.isPointInPath(this.targetX, this.targetY) &&
          (this.currentTargetShapeId = t);
      },
      _drawRect: function(t, e, i, s, n, o, a) {
        return this._drawShape(
          t,
          [[e, i], [e + s, i], [e + s, i + n], [e, i + n], [e, i]],
          o,
          a
        );
      },
      appendShape: function(t) {
        return (this.shapes[t.id] = t), this.shapeseq.push(
          t.id
        ), (this.lastShapeId = t.id), t.id;
      },
      replaceWithShape: function(t, e) {
        var i,
          s = this.shapeseq;
        for (this.shapes[e.id] = e, i = s.length; i--; )
          s[i] == t && (s[i] = e.id);
        delete this.shapes[t];
      },
      replaceWithShapes: function(t, e) {
        var i,
          s,
          n,
          o = this.shapeseq,
          a = {};
        for (s = t.length; s--; ) a[t[s]] = !0;
        for (s = o.length; s--; )
          a[(i = o[s])] && (o.splice(s, 1), delete this.shapes[i], (n = s));
        for (s = e.length; s--; )
          o.splice(n, 0, e[s].id), (this.shapes[e[s].id] = e[s]);
      },
      insertAfterShape: function(t, e) {
        var i,
          s = this.shapeseq;
        for (i = s.length; i--; )
          if (s[i] === t)
            return s.splice(i + 1, 0, e.id), void (this.shapes[e.id] = e);
      },
      removeShapeId: function(t) {
        var e,
          i = this.shapeseq;
        for (e = i.length; e--; )
          if (i[e] === t) {
            i.splice(e, 1);
            break;
          }
        delete this.shapes[t];
      },
      getShapeAt: function(t, e, i) {
        return (this.targetX = e), (this.targetY = i), this.render(), this
          .currentTargetShapeId;
      },
      render: function() {
        var t,
          e,
          i = this.shapeseq,
          s = this.shapes,
          n = i.length;
        for (
          this._getContext().clearRect(
            0,
            0,
            this.pixelWidth,
            this.pixelHeight
          ), e = 0;
          e < n;
          e++
        )
          this["_draw" + (t = s[i[e]]).type].apply(this, t.args);
        this.interact || ((this.shapes = {}), (this.shapeseq = []));
      }
    })), (m = e(g, {
      init: function(t, e, i) {
        var s;
        m._super.init.call(this, t, e, i), i[0] && (i = i[0]), _.data(
          i,
          "_jqs_vcanvas",
          this
        ), (this.canvas = $.createElement("span")), _(this.canvas).css({
          display: "inline-block",
          position: "relative",
          overflow: "hidden",
          width: t,
          height: e,
          margin: "0px",
          padding: "0px",
          verticalAlign: "top"
        }), this._insert(this.canvas, i), this._calculatePixelDims(
          t,
          e,
          this.canvas
        ), (this.canvas.width = this.pixelWidth), (this.canvas.height = this.pixelHeight), (s =
          '<v:group coordorigin="0 0" coordsize="' +
          this.pixelWidth +
          " " +
          this.pixelHeight +
          '" style="position:absolute;top:0;left:0;width:' +
          this.pixelWidth +
          "px;height=" +
          this.pixelHeight +
          'px;"></v:group>'), this.canvas.insertAdjacentHTML(
          "beforeEnd",
          s
        ), (this.group = _(
          this.canvas
        ).children()[0]), (this.rendered = !1), (this.prerender = "");
      },
      _drawShape: function(t, e, i, s, n) {
        var o,
          a,
          r,
          l,
          h,
          d,
          p = [];
        for (d = 0, h = e.length; d < h; d++) p[d] = e[d][0] + "," + e[d][1];
        return (o = p.splice(0, 1)), (n = n === B ? 1 : n), (a =
          i === B
            ? ' stroked="false" '
            : ' strokeWeight="' + n + 'px" strokeColor="' + i + '" '), (r =
          s === B
            ? ' filled="false"'
            : ' fillColor="' + s + '" filled="true" '), (l =
          p[0] === p[p.length - 1]
            ? "x "
            : ""), '<v:shape coordorigin="0 0" coordsize="' +
          this.pixelWidth +
          " " +
          this.pixelHeight +
          '"  id="jqsshape' +
          t +
          '" ' +
          a +
          r +
          ' style="position:absolute;left:0px;top:0px;height:' +
          this.pixelHeight +
          "px;width:" +
          this.pixelWidth +
          'px;padding:0px;margin:0px;"  path="m ' +
          o +
          " l " +
          p.join(", ") +
          " " +
          l +
          'e"> </v:shape>';
      },
      _drawCircle: function(t, e, i, s, n, o, a) {
        return (
          '<v:oval  id="jqsshape' +
          t +
          '" ' +
          (n === B
            ? ' stroked="false" '
            : ' strokeWeight="' + a + 'px" strokeColor="' + n + '" ') +
          (o === B
            ? ' filled="false"'
            : ' fillColor="' + o + '" filled="true" ') +
          ' style="position:absolute;top:' +
          (i -= s) +
          "px; left:" +
          (e -= s) +
          "px; width:" +
          2 * s +
          "px; height:" +
          2 * s +
          'px"></v:oval>'
        );
      },
      _drawPieSlice: function(t, e, i, s, n, o, a, r) {
        var l, h, d, p, c, u, g;
        if (n === o) return "";
        if (
          (
            o - n == 2 * N.PI && ((n = 0), (o = 2 * N.PI)),
            (h = e + N.round(N.cos(n) * s)),
            (d = i + N.round(N.sin(n) * s)),
            (p = e + N.round(N.cos(o) * s)),
            (c = i + N.round(N.sin(o) * s)),
            h === p && d === c
          )
        ) {
          if (o - n < N.PI) return "";
          (h = p = e + s), (d = c = i);
        }
        return h === p && d === c && o - n < N.PI
          ? ""
          : (
              (l = [e - s, i - s, e + s, i + s, h, d, p, c]),
              (u =
                a === B
                  ? ' stroked="false" '
                  : ' strokeWeight="1px" strokeColor="' + a + '" '),
              (g =
                r === B
                  ? ' filled="false"'
                  : ' fillColor="' + r + '" filled="true" '),
              '<v:shape coordorigin="0 0" coordsize="' +
                this.pixelWidth +
                " " +
                this.pixelHeight +
                '"  id="jqsshape' +
                t +
                '" ' +
                u +
                g +
                ' style="position:absolute;left:0px;top:0px;height:' +
                this.pixelHeight +
                "px;width:" +
                this.pixelWidth +
                'px;padding:0px;margin:0px;"  path="m ' +
                e +
                "," +
                i +
                " wa " +
                l.join(", ") +
                ' x e"> </v:shape>'
            );
      },
      _drawRect: function(t, e, i, s, n, o, a) {
        return this._drawShape(
          t,
          [[e, i], [e, i + n], [e + s, i + n], [e + s, i], [e, i]],
          o,
          a
        );
      },
      reset: function() {
        this.group.innerHTML = "";
      },
      appendShape: function(t) {
        var e = this["_draw" + t.type].apply(this, t.args);
        return this.rendered
          ? this.group.insertAdjacentHTML("beforeEnd", e)
          : (this.prerender += e), (this.lastShapeId = t.id), t.id;
      },
      replaceWithShape: function(t, e) {
        var i = _("#jqsshape" + t),
          s = this["_draw" + e.type].apply(this, e.args);
        i[0].outerHTML = s;
      },
      replaceWithShapes: function(t, e) {
        var i,
          s = _("#jqsshape" + t[0]),
          n = "",
          o = e.length;
        for (i = 0; i < o; i++)
          n += this["_draw" + e[i].type].apply(this, e[i].args);
        for (s[0].outerHTML = n, i = 1; i < t.length; i++)
          _("#jqsshape" + t[i]).remove();
      },
      insertAfterShape: function(t, e) {
        var i = _("#jqsshape" + t),
          s = this["_draw" + e.type].apply(this, e.args);
        i[0].insertAdjacentHTML("afterEnd", s);
      },
      removeShapeId: function(t) {
        var e = _("#jqsshape" + t);
        this.group.removeChild(e[0]);
      },
      getShapeAt: function(t, e, i) {
        return t.id.substr(8);
      },
      render: function() {
        this.rendered ||
          ((this.group.innerHTML = this.prerender), (this.rendered = !0));
      }
    }));
  }), "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : jQuery && !jQuery.fn.sparkline && t(jQuery);
})(document, Math), (function(t) {
  "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : "object" == typeof exports ? t(require("jquery")) : t(jQuery);
})(function(o) {
  var a = function(t, e) {
    (this.$element = o(t)), (this.options = o.extend(
      {},
      a.DEFAULTS,
      this.dataOptions(),
      e
    )), this.init();
  };
  (a.DEFAULTS = {
    from: 0,
    to: 0,
    speed: 1e3,
    refreshInterval: 100,
    decimals: 0,
    formatter: function(t, e) {
      return t.toFixed(e.decimals);
    },
    onUpdate: null,
    onComplete: null
  }), (a.prototype.init = function() {
    (this.value = this.options.from), (this.loops = Math.ceil(
      this.options.speed / this.options.refreshInterval
    )), (this.loopCount = 0), (this.increment =
      (this.options.to - this.options.from) / this.loops);
  }), (a.prototype.dataOptions = function() {
    var t = {
        from: this.$element.data("from"),
        to: this.$element.data("to"),
        speed: this.$element.data("speed"),
        refreshInterval: this.$element.data("refresh-interval"),
        decimals: this.$element.data("decimals")
      },
      e = Object.keys(t);
    for (var i in e) {
      var s = e[i];
      void 0 === t[s] && delete t[s];
    }
    return t;
  }), (a.prototype.update = function() {
    (this.value += this.increment), this
      .loopCount++, this.render(), "function" == typeof this.options.onUpdate &&
      this.options.onUpdate.call(this.$element, this.value), this.loopCount >=
      this.loops &&
      (
        clearInterval(this.interval),
        (this.value = this.options.to),
        "function" == typeof this.options.onComplete &&
          this.options.onComplete.call(this.$element, this.value)
      );
  }), (a.prototype.render = function() {
    var t = this.options.formatter.call(
      this.$element,
      this.value,
      this.options
    );
    this.$element.text(t);
  }), (a.prototype.restart = function() {
    this.stop(), this.init(), this.start();
  }), (a.prototype.start = function() {
    this.stop(), this.render(), (this.interval = setInterval(
      this.update.bind(this),
      this.options.refreshInterval
    ));
  }), (a.prototype.stop = function() {
    this.interval && clearInterval(this.interval);
  }), (a.prototype.toggle = function() {
    this.interval ? this.stop() : this.start();
  }), (o.fn.countTo = function(n) {
    return this.each(function() {
      var t = o(this),
        e = t.data("countTo"),
        i = "object" == typeof n ? n : {},
        s = "string" == typeof n ? n : "start";
      (!e || "object" == typeof n) &&
        (e && e.stop(), t.data("countTo", (e = new a(this, i)))), e[s].call(e);
    });
  });
});
