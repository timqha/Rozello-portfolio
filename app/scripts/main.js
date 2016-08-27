'use strict';

var versionBuild = {
    DEV: {value: 0, name: "Development"},
    TEST: {value: 1, name: "Testing"},
    PRO: {value: 2, name: "Production"}
};

var currentBuild = versionBuild.DEV;

if (currentBuild !== versionBuild.DEV) {
    $(document).ready(function() {
        $("body").jKit({});
    });
}

// TODO create mail
// TODO fix rozello for mobile
// TODO projects
// TODO fix this file to.
// TODO delete info for dev
// TODO add Google analytics

var slidColors = {};
// slidColors.slide1 = {right: "#e9e9e9", left: "#e9e9e9"};
// slidColors.slide2 = {right: "#fff", left: "#f4ecbd"};
// slidColors.slide3 = {right: "#242424", left: "#242424"};
// slidColors.slide4 = {right: "#f9fffd", left: "#d9f4e9"};
// slidColors.slide5 = {right: "#fff", left: "#d7d7d7"};
//
slidColors.slide1 = {right: "#e9e9e9", left: "#e9e9e9"};
slidColors.slide2 = {right: "#f9f4d9", left: "#f9f4d9"};
slidColors.slide3 = {right: "#383838", left: "#383838"};
slidColors.slide4 = {right: "#e9f9f3", left: "#e9f9f3"};
slidColors.slide5 = {right: "#e9e9e9", left: "#e9e9e9"};

window.onunload = function() {
    if (currentBuild !== versionBuild.DEV) {
        window.scrollTo(0, 0);
    }
},
    /* jshint ignore:start */
    window.mobilecheck = function() {
        var check = false;
        (function(a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    },
    /* jshint ignore:end */
    $(function() {

        var myUpTime, gBody = $('body'),
            halfHeight = window.innerHeight / 2,
            sbarItem = ($('.sidebar-item').length, 0),
            bgTextL = $('.lower-type'),
            bgTextU = $('.upper-type'),
            backgroundText = (parseInt($('.lower-type').css("font-size")), ["", "About us", "WE PROVIDE", "PORTFOLIO", "CONTACTS"]),
            counter = 0;
            if (currentBuild !== versionBuild.DEV) {
               var currentDelay = 500;
            } else {
               var currentDelay = 0;
            }

        // return interval for delay.
        function intervalDelay() {
            return currentDelay;
        }

        // gray divider loading
        function loadDivider(text) {
            $('.upper-type, .lower-type').text(text);
            $('.divider').css({width: counter + "%"});
        }

        // start add loadings events if it's not mobile device.
        function events() {
            clearInterval(myUpTime), setTimeout(function() {
                $('#index').scrollTop(0);
                    gBody.removeClass('is-loading');
                    T.titleChanger(0);
                    T.sidebar(0, 0.5);
                    T.intro();
                window.mobilecheck() && TweenMax.to('.background-title-container', 0.6, {opacity: 0});
            }, 0);
            // }, 1800);
        }

        // change number 1 to 100 end start events.
        function loadingStart() {
            if (currentBuild !== versionBuild.DEV) {
                loadDivider(counter), 99 >= counter ? counter++ : 100 === counter && events();
            } else {
                events();
            }
        }

        function timer() {
            myUpTime = setInterval(loadingStart, intervalDelay);
        }

        // detect height window.
        function getHeight() {
            return halfHeight;
        }


        timer(), $(window).load(function() {
            currentDelay = 50;
        }),

            // set current year
            function() {
                var currentYear = new Date().getFullYear();
                $(".date").text(currentYear);
            },
            $(".hamburger-menu").on("click", function() {
                gBody.hasClass("menu-open") ? (gBody.removeClass("menu-open"),
                    T.closeMenu().play()) : (gBody.addClass("menu-open"),
                    T.openMenu().play());
            }),
            $(".menu-item > a").on("click", function() {
                gBody.hasClass("menu-open") && (gBody.removeClass("menu-open"),
                    T.closeMenu().play());
            });
        // not track changes address
        if ($('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
                    var t = $(this.hash);
                    if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) {
                        return $("html, body").animate({scrollTop: t.offset().top}, 1e3), !1;
                    }
                }
            }),
                !window.mobilecheck()) {
            new Waypoint({
                element: document.getElementById("header-intro"),
                handler: function(t) {
                    console.log(t, "eader-intro");

                    "up" === t && (
                        //$("body").removeClass("menu-light"),
                        // T.backgroundChanger("#00ff00"),
                        TweenMax.to($('.logo-type'), 0.6, {opacity: 1}),
                        T.backgroundChangerGradient(slidColors.slide1),
                        T.reIntro(),
                        T.sidebar(0, 0.1),
                        T.titleChanger(0));
                }, offset: function() {
                    return 0.1 * -this.element.clientHeight;
                }
            }),
                new Waypoint({
                    element: document.getElementById("about-us"), handler: function(t) {
                        console.log(t, "about-us");
                        "down" === t && (
                            //$("body").addClass("menu-light"),
                            $("body").removeClass("menu-light"),
                            TweenMax.to($('.logo-type'), 0.6, {opacity: 0}),
                            // T.backgroundChanger("#ff0000"),
                            T.backgroundChangerGradient(slidColors.slide2),
                            T.sidebar(1, 0.1),
                            T.titleChanger(1),
                            T.password());
                    }, offset: "80%"
                }),
                new Waypoint({
                    element: document.getElementById("about-us"), handler: function(t) {
                        console.log(t, "about-us");
                        "up" === t && (
                            //$("body").addClass("menu-light"),
                            $("body").removeClass("menu-light"),
                            T.passwordReset(),
                            // T.backgroundChanger("#ff0000"),
                            T.backgroundChangerGradient(slidColors.slide2),
                            T.sidebar(1, -0.1),
                            T.titleChanger(1));
                    }, offset: function() {
                        return -this.element.clientHeight + .5 * window.innerHeight
                    }
                }),
                new Waypoint({
                    element: document.getElementById("we-provide"), handler: function(t) {
                        console.log(t, "we-provide");
                        "down" === t && (
                            $("body").addClass("menu-light"),
                            // T.backgroundChanger("#0000ff"),
                            T.backgroundChangerGradient(slidColors.slide3),
                            T.sidebar(2, 0.1),
                            T.titleChanger(2),
                            T.weProwideIn());
                    }, offset: "50%"
                }),
                new Waypoint({
                    element: document.getElementById("we-provide"), handler: function(t) {
                        console.log(t, "we-provide");
                        "up" === t && (
                            $("body").addClass("menu-light"),
                            // T.backgroundChanger("#0000ff"),
                            T.backgroundChangerGradient(slidColors.slide3),
                                T.titleChanger(2),
                                T.sidebar(2, -0.1));
                    }, offset: function() {
                        return -this.element.clientHeight + .5 * window.innerHeight;
                    }
                }),
                new Waypoint({
                    element: document.getElementById("portfolio"), handler: function(t) {
                        "down" === t && (
                            $("body").removeClass("menu-light"),
                            // T.backgroundChanger("#565656"),
                            T.backgroundChangerGradient(slidColors.slide4),
                                T.titleChanger(3),
                                T.sidebar(3, 0.1),
                                T.portfolioIn());
                    }, offset: "50%"
                }),
                new Waypoint({
                    element: document.getElementById("portfolio"), handler: function(t) {
                        "up" === t && (
                            // T.backgroundChanger("#565656"),
                            T.backgroundChangerGradient(slidColors.slide4),
                                T.titleChanger(3),
                                T.sidebar(3, -0.1));
                    }, offset: function() {
                        return -this.element.clientHeight + 0.5 * window.innerHeight;
                    }
                }),
                new Waypoint({
                    element: document.getElementById("contacts"), handler: function(t) {
                        "down" === t && (
                            // T.backgroundChanger("#777"),
                            T.backgroundChangerGradient(slidColors.slide5),
                                T.titleChanger(4),
                                T.contactsIn(),
                                T.sidebar(4, 0.1));
                    }, offset: "50%"
                }),
                new Waypoint({
                    element: document.getElementById("contacts"), handler: function(t) {
                        "up" === t && (
                            T.backgroundChangerGradient(slidColors.slide5),
                                T.sidebar(4, -0.1))
                    }, offset: function() {
                        return -this.element.clientHeight + 40
                    }
                })
        }
        var T = {
            intro: function() {
                var t = new TimelineMax;
                t.to(".logo", 0.3, {opacity: 1, y: 0})
                .to(".request", 0.3, {opacity: 1, y: 0})
                .to(".hamburger-menu", 0.3, {opacity: 1, y: 0}, "-= 0.3")
                .staggerTo("#header-intro .js-fadeIn", 0.6, {opacity: 1, y: 0}, 0.1, "sync")
                .to($(".copyright"), 0.3, {opacity: 1, y: 0}, "sync")
                .fromTo(".meter", 0.3, {x: "-8px"}, {opacity: 1, rotation: "-90deg", x: "0"}, "sync")
                .staggerTo(".sidebar-item", 0.5, {opacity: 1, x: "0%"}, .1, "-= 0.3");
            },
            reIntro: function() {
                TweenMax.to("#header-intro", 0.3, {opacity: 1, y: "0px"});
            },
            backgroundChanger: function(t) {
                TweenMax.to(".global-background", 0.3, {backgroundColor: t});
            },
            backgroundChangerGradient: function(colors) {
                TweenMax.set(".global-background", {background: "radial-gradient(farthest-corner at 50% 50%," + colors.right + " 0%, " + colors.left + " 100%)"});
            },
            titleChanger: function(t) {
                var e = this;
                TweenMax.to(bgTextU, .2, {x: "40px", opacity: 0}),
                    TweenMax.to(bgTextL, .2, {x: "-40px", opacity: 0}),
                    setTimeout(function() {
                        e.changeCopy(t)
                    }, 300),
                    TweenMax.to(bgTextU, .3, {x: "0", opacity: 1, delay: .4}),
                    TweenMax.to(bgTextL, .3, {x: "0", opacity: 1, delay: .4});
            },
            changeCopy: function(t) {
                bgTextU.text(backgroundText[t]), bgTextL.text(backgroundText[t])
            },
            sidebar: function(currentItem) {
                var top = -16 * currentItem + "px",
                    nowEqualSB = $(".sidebar-item:eq(" + currentItem + ") > .sidebar-line"),
                    resetEqualSB = $(".sidebar-item:eq(" + sbarItem + ") > .sidebar-line");
                TweenMax.to(".sidebar", .4, {y: top}), TweenMax.to(resetEqualSB, .3, {
                    width: "50%",
                    backgroundPosition: "0%"
                }),
                    TweenMax.to(nowEqualSB, .3, {width: "100%", backgroundPosition: "100%"}), sbarItem = currentItem
            },
            openMenu: function() {
                var t = new TimelineMax({paused: !0});
                return t.to(".menu-container", .8, {
                    opacity: 1,
                    width: "100%",
                    ease: Expo.easeIn
                }).staggerFromTo(".menu-item", .4, {opacity: 0}, {opacity: 1}, .1, "items").to(".menu-container .js-fadeIn", .3, {
                    opacity: 1,
                    y: 0
                }, "items")
            },
            closeMenu: function() {
                var t = new TimelineMax({paused: !0});
                return t.staggerFromTo(".menu-item", .3, {opacity: 1}, {opacity: 0}, .05).to(".menu-container", .8, {
                    opacity: 0,
                    width: "0%",
                    ease: Expo.easeOut
                }).to(".menu-container .js-fadeIn", .3, {opacity: 0, y: "48px"})
            },
            password: function() {
                var t = new TimelineMax;
                return t
                .to("#header-intro", .3, {opacity: 0, y: "-40px"}, "sync")
                .to("#we-provide", .2, {opacity: 0}, "sync")
                .to("#about-us", .3, {opacity: 1}, "sync")
                .to($("#about-us .headline"), .6, {opacity: 1, y: 0}, "-=0.2")
                .staggerTo($("#about-us .js-fadeIn"), .6, {opacity: 1, y: 0}, .1, "-=0.3")
            },
            passwordReset: function() {
                var t = new TimelineMax;
                return t.to("#we-provide", .2, {opacity: 0}).to("#about-us", .3, {opacity: 1})
            },
            weProwideIn: function() {
                var t = new TimelineMax;
                return t.to("#about-us", .2, {opacity: 0}, "sync")
                .to("#we-provide", .3, {opacity: 1}, "sync")
                .to("#we-provide .headline", .3, {opacity: 1, y: 0}, "-=0.3")
                .staggerTo("#we-provide .js-fadeIn", 1.2, {opacity: 1, y: 0}, .2, "-=0.3")
            },
            portfolioIn: function() {
                var t, e;
                window.innerWidth < 980 ? (t = "0", e = "0") : (t = "-50%", e = "-50%");
                var i = new TimelineMax;
                i.to("#portfolio .headline", .3, {opacity: 1, y: 0}, "-=0.3")
                .staggerTo("#portfolio .js-fadeIn", .8, {opacity: 1, y: 0}, .1, "-=0.3")
            },
            contactsIn: function() {
                var t = new TimelineMax;
                return t.staggerTo("#contacts .js-fadeIn", .8, {opacity: 1, y: 0}, .1, "-=0.3")
            }
        };

        var element = $('.contact-input');

        element.on('keydown keyup focus blur', function() {
            if($(this).val() != '') {
                $(this).addClass('input-select');
            } else{
                $(this).removeClass('input-select');
            }
        });

        element.on('keyup blur', function() {
            $(this).addClass('idirty');
        });

    });
