(() => {
  "use strict";
  let e = !1;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  let t = document.querySelector(".page__button"),
    n = document.querySelector(".page__continue");
  t &&
    t.addEventListener("click", function (e) {
      n.classList.toggle("_active");
    });
  let o = document.querySelector(".page__image");
  const i = window.innerHeight;
  window.innerWidth;
  o &&
    o.addEventListener("click", function (e) {
      o.style.cssText = `top:${
        i - o.offsetHeight - 20
      }px;\n\t\ttransform: rotate(-180deg);\n\t\t\ttransition:10s`;
    });
  let c = document.querySelector(".page__author"),
    l = document.querySelector(".page__book");
  document.querySelector(".page__block");
  const d = document.querySelector(".page__img"),
    s = document.querySelector(".page__text");
  c &&
    c.addEventListener("click", function (e) {
      l.hidden
        ? ((l.hidden = !1),
          l.scrollIntoView({ behavior: "smooth", block: "start" }))
        : (l.hidden = !0);
    });
  d.offsetWidth, d.offsetHeight;
  s.addEventListener("click", function (e) {
    (d.style.left = e.clientX - d.offsetWidth / 2 + "px"),
      (d.style.top = e.clientY - d.offsetHeight / 2 + "px"),
      console.log(e.clientX),
      console.log(e.clientY);
  });
  let r = s.getBoundingClientRect();
  console.log(r.right),
    window.addEventListener("scroll", function () {
      const e = r.right - o.offsetWidth;
      d.style.cssText = `\n \t\tleft: ${e}px;\n \t`;
    }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    });
})();
