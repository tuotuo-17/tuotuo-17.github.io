!(function (e, t, n, o) {
  "use strict";
  var i = {
    i: function (e) {
      i.s(), i.methods();
    },
    s: function (o) {
      (this._window = n(e)),
        (this._document = n(t)),
        (this._body = n("body")),
        (this._html = n("html"));
    },
    methods: function (e) {
      i.w(),
        i.BackToTop(),
        i.preloader(),
        i.niceSelect(),
        i.cusBtn(),
        i.hamburgerMenu(),
        i.header(),
        i.searchToggle(),
        i.jsSlider(),
        i.quantityHandle(),
        i.initializeSlick(),
        i.availableTags(),
        i.timepicker(),
        i.filterToggle(),
        i.formValidation(),
        i.countdownInit(".countdown", "2025/07/01"),
        i.contactForm();
    },
    w: function (e) {
      this._window.on("load", i.l).on("scroll", i.res);
    },
      // =================
      // Bak to top
      // =================
      BackToTop: function () {
          let scrollTop = $(".scroll-top path");
          if (scrollTop.length) {
              var e = document.querySelector(".scroll-top path"),
                  t = e.getTotalLength();
              (e.style.transition = e.style.WebkitTransition = "none"),
                  (e.style.strokeDasharray = t + " " + t),
                  (e.style.strokeDashoffset = t),
                  e.getBoundingClientRect(),
                  (e.style.transition = e.style.WebkitTransition =
                      "stroke-dashoffset 10ms linear");
              var o = function () {
                  var o = $(window).scrollTop(),
                      r = $(document).height() - $(window).height(),
                      i = t - (o * t) / r;
                  e.style.strokeDashoffset = i;
              };
              o(), $(window).scroll(o);
              var back = $(".scroll-top"),
                  body = $("body, html");
              $(window).on("scroll", function () {
                  if ($(window).scrollTop() > $(window).height()) {
                      back.addClass("scroll-top--active");
                  } else {
                      back.removeClass("scroll-top--active");
                  }
              });
          }
      },
    preloader: function () {
      setTimeout(function () {
        n("#preloader").hide("slow");
      }, 2e3);
    },
    niceSelect: function () {
      n(".has-nice-select").length &&
        n(".has-nice-select, .contact-form select").niceSelect();
    },
    cusBtn: function () {
      n(".cus-btn")
        .on("mouseenter", function (e) {
          var t = n(this).offset(),
            o = e.pageX - t.left,
            i = e.pageY - t.top;
          n(this).find("span").css({ top: i, left: o });
        })
        .on("mouseout", function (e) {
          var t = n(this).offset(),
            o = e.pageX - t.left,
            i = e.pageY - t.top;
          n(this).find("span").css({ top: i, left: o });
        });
    },
    hamburgerMenu: function () {
      n(".hamburger-menu").length &&
        (n(".hamburger-menu").on("click", function () {
          return (
            n(".bar").toggleClass("animate"),
            n(".mobile-navar").toggleClass("active"),
            !1
          );
        }),
        n(".has-children").on("click", function () {
          n(this).children("ul").slideToggle("slow", "swing"),
            n(".icon-arrow").toggleClass("open");
        }));
    },
    header: function () {
      if (n(".main-menu__list").length) {
        var o;
        let i;
        (o = n(".main-menu__list")),
          (i = e.location.href.split("/").reverse()[0]),
          o.find("li").each(function () {
            let e = n(this).find("a");
            n(e).attr("href") == i && n(this).addClass("current");
          }),
          o.children("li").each(function () {
            n(this).find(".current").length && n(this).addClass("current");
          }),
          "" == i && o.find("li").eq(0).addClass("current");
      }
      if (n(".main-menu__nav").length && n(".mobile-nav__container").length) {
        let a = t.querySelector(".main-menu__nav").innerHTML;
        t.querySelector(".mobile-nav__container").innerHTML = a;
      }
      if (n(".sticky-header__content").length) {
        let l = t.querySelector(".main-menu").innerHTML;
        t.querySelector(".sticky-header__content").innerHTML = l;
      }
      n(".mobile-nav__container .main-menu__list").length &&
        n(".mobile-nav__container .main-menu__list .dropdown > a").each(
          function () {
            let e = n(this),
              o = t.createElement("BUTTON");
            o.setAttribute("aria-label", "dropdown toggler"),
              (o.innerHTML = "<i class='fa fa-angle-down'></i>"),
              e.append(function () {
                return o;
              }),
              e.find("button").on("click", function (e) {
                e.preventDefault();
                let t = n(this);
                t.toggleClass("expanded"),
                  t.parent().toggleClass("expanded"),
                  t.parent().parent().children("ul").slideToggle();
              });
          }
        ),
        n(".mobile-nav__toggler").length &&
          n(".mobile-nav__toggler").on("click", function (e) {
            e.preventDefault(),
              n(".mobile-nav__wrapper").toggleClass("expanded"),
              n("body").toggleClass("locked");
          }),
        n(e).on("scroll", function () {
          if (n(".stricked-menu").length) {
            var t = n(".stricked-menu");
            n(e).scrollTop() > 130
              ? t.addClass("sticky-fixed")
              : 130 >= n(this).scrollTop() && t.removeClass("sticky-fixed");
          }
        });
    },
    searchToggle: function () {
      n(".search-toggler").length &&
        n(".search-toggler").on("click", function (e) {
          e.preventDefault(),
            n(".search-popup").toggleClass("active"),
            n(".mobile-nav__wrapper").removeClass("expanded"),
            n("body").toggleClass("locked");
        });
    },
    jsSlider: function () {
      n(".js-slider").length &&
        n(".js-slider").ionRangeSlider({
          skin: "big",
          type: "double",
          grid: !1,
          min: 0,
          max: 999,
          from: 0,
          to: 999,
          hide_min_max: !0,
          hide_from_to: !0,
        });
    },
    quantityHandle: function () {
      n(".decrement").on("click", function () {
        var e = n(this).closest(".quantity-wrap").children(".number"),
          t = parseInt(e.val());
        t > 0 && e.val(t - 1);
      }),
        n(".increment").on("click", function () {
          var e = n(this).closest(".quantity-wrap").children(".number"),
            t = parseInt(e.val());
          e.val(parseInt(t + 1));
        });
    },
    initializeSlick: function (e) {
      n(".testimonials-slider").length &&
        n(".testimonials-slider").slick({
          autoplay: !1,
          speed: 800,
          lazyLoad: "progressive",
          arrows: !1,
          infinite: !0,
          dots: !0,
          autoplay: !0,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            { breakpoint: 1399, settings: { slidesToShow: 3 } },
            { breakpoint: 1199, settings: { slidesToShow: 2 } },
            { breakpoint: 650, settings: { slidesToShow: 1 } },
          ],
        });
    },
    availableTags: function () {
      if (n(".slector-wrapper").length) {
        var e = [
          "New York City",
          "Los Angeles",
          "Toronto ",
          "Paris",
          "London ",
          "Rome ",
          "Berlin",
          "Tokyo ",
          "Beijing ",
          "Mumbai ",
          "Dubai ",
          "Rio de Janeiro",
          "Sydney",
          "Melbourne",
          "Karachi ",
          "Lahore",
          "Islamabad",
          "Brisbane",
          "Cape Town ",
          "Marrakech ",
          "Delhi ",
          "Sharjah",
        ];
        n(".auto-input").autocomplete({ source: e });
      }
      if (n(".slector-wrapper").length) {
        var e = [
          "The Ritz-Carlton, Paris",
          "Burj Al Arab Jumeirah",
          "The Plaza Hotel ",
          "The Savoy",
          "Hotel de Glace ",
          "Marina Bay Sands ",
          "Atlantis The Palm",
          "The Waldorf Astoria ",
          "The Peninsula ",
          "Four Seasons Hotel George V  ",
          "Mandarin Oriental ",
          "Emirates Palace",
          "Hotel del Coronado",
          "The Beverly Hills Hotel",
          "Adlon Kempinski ",
          "The Langham",
          "The Shard - Shangri-La ",
          "The Breakers",
          "The Burj Khalifa - Armani Hotel ",
          "Hotel Okura ",
        ];
        n(".auto-input-hotel").autocomplete({ source: e });
      }
      if (n(".slector-wrapper").length) {
        var e = [
          "Beverly Hills - Los Angeles, USA",
          "Notting Hill - London, UK",
          "Harlem - New York City, USA ",
          "Shibuya - Tokyo, Japan",
          "Montmartre - Paris, France ",
          "Copacabana - Rio de Janeiro, Brazil",
          "Sydney's Rocks - Sydney, Australia",
          "Manhattan - New York City, USA",
          "Pudong - Shanghai, China",
          "Santa Monica - Los Angeles, USA",
          "Gion - Kyoto, Japan ",
          "Venice Beach - Los Angeles, USA",
          "The Rocks - Sydney, Australia",
          "Greenwich Village - New York City, USA",
          "Old Montreal - Montreal, Canada",
        ];
        n(".auto-input-location").autocomplete({ source: e });
      }
      if (n(".slector-wrapper").length) {
        var e = [
          "USD - $",
          "Euro - €",
          "Pound Sterling - \xa3 ",
          "Yen - \xa5",
          "Franc - ₣ ",
          "Dinar - د. ك",
          "Dirham Symbol - د. إ",
          "Rupee Symbol - ₹",
        ];
        n(".auto-input-currency").autocomplete({ source: e });
      }
    },
    timepicker: function () {
      n(t).ready(function () {
        n(".timepicker").timepicker({
          timeFormat: "h:mm p",
          interval: 60,
          minTime: "10",
          maxTime: "6:00pm",
          defaultTime: "11",
          startTime: "10:00",
          dynamic: !1,
          dropdown: !0,
          scrollbar: !1,
        });
      });
    },
    filterToggle: function () {
      n(".filter-block").length &&
        n(".filter-block .title").on("click", function (e) {
          var t = n(this).data("count");
          n(".filter-block.box-" + t + " .content-block").is(":visible")
            ? (n(".filter-block.box-" + t + " i").removeClass(
                "fal fa-chevron-up"
              ),
              n(".filter-block.box-" + t + " i").addClass(
                "fal fa-chevron-down"
              ),
              n(".filter-block.box-" + t + " .content-block").hide("slow"))
            : (n(".filter-block.box-" + t + " i").removeClass(
                "fal fa-chevron-down"
              ),
              n(".filter-block.box-" + t + " i").addClass("fal fa-chevron-up"),
              n(".filter-block.box-" + t + " .content-block").show("slow"));
        }),
        n(".filter-block-2").length &&
          n(".filter-block-2 .title").on("click", function (e) {
            var t = n(this).data("count");
            n(".filter-block-2.box-" + t + " .content-block").is(":visible")
              ? (n(".filter-block-2.box-" + t + " i").removeClass(
                  "fal fa-caret-up"
                ),
                n(".filter-block-2.box-" + t + " i").addClass(
                  "fas fa-caret-down"
                ),
                n(".filter-block-2.box-" + t + " .content-block").hide("slow"))
              : (n(".filter-block-2.box-" + t + " i").removeClass(
                  "fal fa-caret-down"
                ),
                n(".filter-block-2.box-" + t + " i").addClass(
                  "fal fa-caret-up"
                ),
                n(".filter-block-2.box-" + t + " .content-block").show("slow"));
          });
    },
    formValidation: function () {
      n(".contact-form").length && n(".contact-form").validate();
    },
    countdownInit: function (e, t) {
      var o = n(e);
      o.length &&
        o.countdown(t, function (e) {
          n(this).html(
            e.strftime(
              "<li><h2>%D</h2><p>Days</p></li>              <li><h2>%H</h2><p>Hrs</p></li>              <li><h2>%M</h2><p>Min</p></li>              <li><h2>%S</h2><p>Sec</p></li>"
            )
          );
        });
    },
    contactForm: function () {
      n(".contact-form").on("submit", function (e) {
        if ((e.preventDefault(), !n(".contact-form").valid())) return !1;
        var o = n(this);
        o.closest("div")
          .find('button[type="submit"]')
          .attr("disabled", "disabled");
        var i = n(this).serialize();
        n.ajax({
          url: "./assets/mail/contact.php",
          type: "post",
          dataType: "json",
          data: i,
          success: function (e) {
            n(".contact-form").trigger("reset"),
              o.find('button[type="submit"]').removeAttr("disabled"),
              e.success
                ? (t.getElementById("message").innerHTML =
                    "<h5 class='text-success mt-3 mb-2'>Email Sent Successfully</h5>")
                : (t.getElementById("message").innerHTML =
                    "<h5 class='text-danger mt-3 mb-2'>There is an error</h5>"),
              n("#message").show("slow"),
              n("#message").slideDown("slow"),
              setTimeout(function () {
                n("#message").slideUp("hide"), n("#message").hide("slow");
              }, 3e3);
          },
        });
      });
    },
  };
  i.i();
})(window, document, jQuery);
