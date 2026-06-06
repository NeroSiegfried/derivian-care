/* DeRivian — site interactions */
(function () {
  "use strict";

  /* ---- Easy Read mode (persisted) ---- */
  var ER_KEY = "derivian-easyread";
  function applyEasyRead(on) {
    document.documentElement.classList.toggle("easyread-on", on);
    document.querySelectorAll(".easyread").forEach(function (el) {
      el.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }
  try {
    applyEasyRead(localStorage.getItem(ER_KEY) === "1");
  } catch (e) {}

  document.addEventListener("click", function (e) {
    /* ---- Easy Read toggle ---- */
    var er = e.target.closest(".easyread");
    if (er) {
      var on = !document.documentElement.classList.contains("easyread-on");
      applyEasyRead(on);
      try {
        localStorage.setItem(ER_KEY, on ? "1" : "0");
      } catch (err) {}
    }

    /* ---- Mobile nav toggle ---- */
    var tog = e.target.closest(".nav__toggle");
    if (tog) {
      var menu = document.getElementById("navMenu");
      var open = tog.getAttribute("aria-expanded") === "true";
      tog.setAttribute("aria-expanded", open ? "false" : "true");
      tog.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      if (menu) menu.setAttribute("data-open", open ? "false" : "true");
    }

    /* ---- Accordion ---- */
    var accT = e.target.closest(".acc__trigger");
    if (accT) {
      var acc = accT.closest(".acc");
      var o = acc.getAttribute("data-open") === "true";
      acc.setAttribute("data-open", o ? "false" : "true");
      accT.setAttribute("aria-expanded", o ? "false" : "true");
    }
  });

  /* ---- Blog filter chips + load-more (reveal 3 at a time) ---- */
  var blog = document.querySelector("[data-blog]");
  if (blog) {
    var cards = Array.prototype.slice.call(blog.querySelectorAll(".post"));
    var chips = Array.prototype.slice.call(document.querySelectorAll(".chip"));
    var moreBtn = document.querySelector("[data-loadmore]");
    var BATCH = 3;
    var INITIAL = 6;
    var activeCat = "all";
    var shown = INITIAL;

    function render() {
      var matched = cards.filter(function (c) {
        return activeCat === "all" || c.getAttribute("data-category") === activeCat;
      });
      cards.forEach(function (c) {
        c.hidden = true;
      });
      matched.slice(0, shown).forEach(function (c) {
        c.hidden = false;
      });
      if (moreBtn) moreBtn.hidden = shown >= matched.length;
    }

    chips.forEach(function (ch) {
      ch.addEventListener("click", function () {
        chips.forEach(function (c) {
          c.setAttribute("aria-pressed", "false");
        });
        ch.setAttribute("aria-pressed", "true");
        activeCat = ch.getAttribute("data-cat") || "all";
        shown = INITIAL;
        render();
      });
    });

    if (moreBtn) {
      moreBtn.addEventListener("click", function () {
        shown += BATCH;
        render();
      });
    }
    render();
  }

  /* ---- Form submission (real API) ---- */
  document.addEventListener("submit", function (e) {
    var form = e.target.closest("form[data-api]");
    if (!form) return;
    e.preventDefault();

    var endpoint = form.getAttribute("data-api");
    var successMsg = form.getAttribute("data-success") || "Thank you — we’ll be in touch shortly.";
    var note = form.querySelector("[data-note]") ||
      (form.parentElement && form.parentElement.querySelector("[data-note]"));
    var submitBtn = form.querySelector("[type='submit']");

    var data = {};
    new FormData(form).forEach(function (val, key) {
      data[key] = val;
    });

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
    }

    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(function (res) {
        return res.json().then(function (body) {
          return { ok: res.ok, body: body };
        });
      })
      .then(function (result) {
        if (result.ok) {
          if (note) {
            note.textContent = successMsg;
            note.hidden = false;
            note.style.color = "";
          }
          form.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = submitBtn.getAttribute("data-label") || "Send inquiry";
          }
        } else {
          throw new Error(result.body.error || "Server error");
        }
      })
      .catch(function (err) {
        if (note) {
          note.textContent = "Something went wrong — please try again or email us directly at info@derivian.com.";
          note.hidden = false;
          note.style.color = "var(--burnt-sienna)";
        }
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitBtn.getAttribute("data-label") || "Send inquiry";
        }
        console.error(err);
      });
  });

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (r) {
      io.observe(r);
    });
  } else {
    reveals.forEach(function (r) {
      r.classList.add("is-in");
    });
  }
})();
