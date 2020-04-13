if (location.href.indexOf(atob("dHprLmlt")) == -1) {
  location.href = atob("aHR0cHM6Ly90emsuaW0=");
}
function jump(n) {
  new Promise(function (n) {
    return setTimeout(n, 1e3);
  }).then(function () {
    $(location).attr("href", "https://www.antmoe.com/" + n);
  });
}
function about(n) {
  new Promise(function (n) {
    return setTimeout(n, 1e3);
  }).then(function () {
    $(location).attr("href", "https://about.antmoe.com/");
  });
}
jQuery(document).ready(function (t) {
  var a = t(".cd-projects-container"),
    e = a.find(".cd-projects-previews"),
    s = e.children("li"),
    o = a.find(".cd-projects"),
    d = t(".cd-nav-trigger"),
    l = t(".cd-primary-nav"),
    r = 0 < t(".no-csstransitions").length,
    c = !1,
    u = o.find("li").length,
    v = [];
  function f(n, e, i, t) {
    0 == i &&
      (function () {
        for (var n = (v.length = 0); n < u; n++) v.push(n);
      })(),
      -1 != e && 0 == i && (i = 1);
    var a = h();
    a == e && (a = h()),
      i < u - 1
        ? (n.eq(a).toggleClass("slide-out", t),
          setTimeout(function () {
            f(n, e, i + 1, t);
          }, 150))
        : i == u - 1 &&
          n
            .eq(a)
            .toggleClass("slide-out", t)
            .one(
              "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function () {
                -1 != e
                  ? (o.children("li.selected").addClass("content-visible"),
                    n.eq(e).addClass("slide-out").removeClass("selected"))
                  : l.hasClass("nav-visible") &&
                    t &&
                    l.addClass("nav-clickable"),
                  n
                    .eq(a)
                    .off(
                      "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend"
                    ),
                  (c = !1);
              }
            );
  }
  function h() {
    var n = Math.floor(Math.random() * v.length),
      e = v[n];
    return v.splice(n, 1), e;
  }
  e.on("click", "a", function (n) {
    var e, i;
    n.preventDefault(),
      0 == c &&
        ((c = !0),
        d.add(a).addClass("project-open"),
        d.add(a).addClass("display"),
        (e = t(this).parent("li")),
        (i = e.index()),
        o.children("li").eq(i).add(e).addClass("selected"),
        r
          ? (s.addClass("slide-out").removeClass("selected"),
            o.children("li").eq(i).addClass("content-visible"),
            (c = !1))
          : f(s, i, 0, !0));
  }),
    d.on("click", function (n) {
      n.preventDefault(),
        0 == c &&
          ((c = !0),
          d.hasClass("project-open")
            ? (d.add(a).removeClass("project-open"),
              o
                .find(".selected")
                .removeClass("selected")
                .on(
                  "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
                  function () {
                    t(this)
                      .removeClass("content-visible")
                      .off(
                        "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend"
                      ),
                      f(e.children("li"), -1, 0, !1);
                  }
                ),
              r &&
                (s.removeClass("slide-out"),
                o.find(".content-visible").removeClass("content-visible"),
                (c = !1)))
            : d.hasClass("nav-visible")
            ? (d.removeClass("nav-visible"),
              l.removeClass("nav-clickable nav-visible"),
              r ? s.removeClass("slide-out") : f(e.children("li"), -1, 0, !1))
            : (d.addClass("nav-visible"),
              l.addClass("nav-visible"),
              r ? s.addClass("slide-out") : f(e.children("li"), -1, 0, !0))),
        r && (c = !1);
    }),
    a.on("click", ".scroll", function () {
      a.animate({ scrollTop: t(window).height() }, 500);
    }),
    s.children("a").bgLoaded({
      afterLoaded: function () {
        !(function n(e) {
          0 < e.length &&
            setTimeout(function () {
              e.addClass("bg-loaded"), n(e.next());
            }, 150);
        })(s.eq(0));
      },
    });
}),
  (function (o) {
    o.fn.bgLoaded = function (n) {
      var s = o.extend(
        {},
        {
          afterLoaded: function () {
            this.addClass("bg-loaded");
          },
        },
        n
      );
      this.each(function () {
        var t = o(this),
          a = t.css("background-image").split(", ");
        t.data("loaded-count", 0),
          o.each(a, function (n, e) {
            var i = e.replace(/^url\(["']?/, "").replace(/["']?\)$/, "");
            o("<img/>")
              .attr("src", i)
              .load(function () {
                o(this).remove(),
                  t.data("loaded-count", t.data("loaded-count") + 1),
                  t.data("loaded-count") >= a.length && s.afterLoaded.call(t);
              });
          });
      });
    };
  })(jQuery);
