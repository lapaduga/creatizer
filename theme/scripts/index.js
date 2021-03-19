'use strict';

var cx = void 0,
    cy = void 0,
    mouseX = void 0,
    mouseY = void 0,
    posX = void 0,
    posY = void 0,
    clientX = void 0,
    clientY = void 0,
    dx = void 0,
    dy = void 0,
    tiltx = void 0,
    tilty = void 0,
    request = void 0,
    radius = void 0,
    degree = void 0;

document.addEventListener('DOMContentLoaded', function () {
	// Is it Mozilla?
	var userAgent = navigator.userAgent.toLowerCase();

	var Mozilla = /firefox/.test(userAgent);
	var Chrome = /chrome/.test(userAgent);
	var Safari = /safari/.test(userAgent);
	var Opera = /opera/.test(userAgent);

	var InternetExplorer = false;
	if (/mozilla/.test(userAgent) && !/firefox/.test(userAgent) && !/chrome/.test(userAgent) && !/safari/.test(userAgent) && !/opera/.test(userAgent) || /msie/.test(userAgent)) {
		InternetExplorer = true;
	}

	if (Mozilla === true) {
		$('#mainscreen__body').addClass('mozilla');
		$('.green-quarter').addClass('mozilla');
		$('.red-quarter').addClass('mozilla');
		$('.yellow-quarter').addClass('mozilla');
		$('.blue-quarter').addClass('mozilla');
	}

	var body = document.querySelector('body');
	cx = window.innerWidth / 2;
	cy = window.innerHeight / 2;
	body.addEventListener('mousemove', function (e) {
		clientX = e.pageX;
		clientY = e.pageY;

		request = requestAnimationFrame(updateMe);
	});

	// Languages behaviour on click
	$('.navigation__globe').on('click', function () {
		$('.navigation__ru').toggleClass('active');
		$('.navigation__tr').toggleClass('active');
		$('.navigation__uk').toggleClass('active');
	});
	$('.navigation__ru').on('click', function () {
		$('.navigation__ru').addClass('chosen');
		$('.navigation__uk').removeClass('chosen');
		$('.navigation__tr').removeClass('chosen');
	});
	$('.navigation__tr').on('click', function () {
		$('.navigation__tr').addClass('chosen');
		$('.navigation__uk').removeClass('chosen');
		$('.navigation__ru').removeClass('chosen');
	});
	$('.navigation__uk').on('click', function () {
		$('.navigation__uk').addClass('chosen');
		$('.navigation__ru').removeClass('chosen');
		$('.navigation__tr').removeClass('chosen');
	});

	// Burger behaviour on click
	$('.navigation__burger').on('click', function () {
		$('.navigation__burger').toggleClass('open');
		$('.navigation__blocks').toggleClass('extend');
		$('.navigation__green').toggleClass('extend');
		$('.navigation__red').toggleClass('extend');
		$('.navigation__blue').toggleClass('extend');
		$('.navigation__yellow').toggleClass('extend');
		$('.navigation__pink').toggleClass('extend');
	});

	//smooth scroll
	$("body").on('click', '[href*="#"]', function (e) {
		var fixed_offset = 150;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});
	$("body").on('click', '[href*="#product"]', function (e) {
		e.preventDefault();
		var fixed_offset = 0;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
	});
	$("body").on('click', '[href*="#contacts"]', function (e) {
		e.preventDefault();
		var fixed_offset = 0;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
	});

	// input mask
	$("#contacts-phone").mask("+7 (999) 999-99-99");
	$("#client-phone").mask("+7 (999) 999-99-99");

	// Quiz buttons
	$('#btn-1').on('click', function () {
		$('#question-1').fadeOut(300);
		$('#question-2').delay(300).fadeIn(300);
		$('#quiz__progressbar').val('1');
		$('.quiz__progress-text').text('1/6');
	});
	$('#btn-2').on('click', function () {
		$('#question-2').fadeOut(300);
		$('#question-3').delay(300).fadeIn(300);
		$('#quiz__progressbar').val('2');
		$('.quiz__progress-text').text('2/6');
	});
	$('#btn-3').on('click', function () {
		$('#question-3').fadeOut(300);
		$('#question-4').delay(300).fadeIn(300);
		$('#quiz__progressbar').val('3');
		$('.quiz__progress-text').text('3/6');
	});
	$('#btn-4').on('click', function () {
		$('#question-4').fadeOut(300);
		$('#question-5').delay(300).fadeIn(300);
		$('#quiz__progressbar').val('4');
		$('.quiz__progress-text').text('4/6');
	});
	$('#btn-5').on('click', function () {
		$('#question-5').fadeOut(300);
		$('#question-6').delay(300).fadeIn(300);
		$('#quiz__progressbar').val('5');
		$('.quiz__progress-text').text('5/6');
	});
	$('#btn-6').on('click', function () {
		$('#question-6').fadeOut(300);
		$('#question-7').delay(300).fadeIn(300);
		$('#quiz__progressbar').val('6');
		$('.quiz__progress-text').text('6/6');
	});
	$('#btn-finish').on('click', function (e) {
		e.preventDefault();
		$('#question-7').fadeOut(300);
		$('.quiz__progress').fadeOut(300);
		$('.quiz__thx').delay(300).fadeIn(300);
	});
	$('#back-2').on('click', function () {
		$('#question-2').fadeOut(300);
		$('#question-1').delay(300).fadeIn(300);
		$('#quiz__progressbar').val('0');
		$('.quiz__progress-text').text('0/6');
	});
	$('#back-3').on('click', function () {
		$('#question-3').fadeOut(300);
		$('#question-2').delay(300).fadeIn(300);
		$('#quiz__progressbar').val('1');
		$('.quiz__progress-text').text('1/6');
	});
	$('#back-4').on('click', function () {
		$('#question-4').fadeOut(300);
		$('#question-3').delay(300).fadeIn(300);
		$('#quiz__progressbar').val('2');
		$('.quiz__progress-text').text('2/6');
	});
	$('#back-5').on('click', function () {
		$('#question-5').fadeOut(300);
		$('#question-4').delay(300).fadeIn(300);
		$('#quiz__progressbar').val('3');
		$('.quiz__progress-text').text('3/6');
	});
	$('#back-6').on('click', function () {
		$('#question-6').fadeOut(300);
		$('#question-5').delay(300).fadeIn(300);
		$('#quiz__progressbar').val('4');
		$('.quiz__progress-text').text('4/6');
	});
	$('#back-7').on('click', function () {
		$('#question-7').fadeOut(300);
		$('#question-6').delay(300).fadeIn(300);
		$('#quiz__progressbar').val('5');
		$('.quiz__progress-text').text('5/6');
	});
	$('#btn-thx-back').on('click', function () {
		$('.quiz__thx').fadeOut(300);
		$('#question-1').delay(300).fadeIn(300);
		$('.quiz__progress').delay(300).fadeIn(300);
		$('#quiz__progressbar').val('0');
		$('.quiz__progress-text').text('0/6');
	});

	// portfolio works
	$('#card__button-1').on('click', function () {
		$('#case-1').delay(400).fadeIn(400);
		$('.works__cards').fadeOut(400);
		$('.works__button-wrap').fadeOut(400);
		$('.mainscreen').fadeOut(400);
		$('.product').fadeOut(400);
		$('.works__title').fadeOut(400);
		$('.quiz').fadeOut(400);
		$('.team').fadeOut(400);
		$('.contacts').fadeOut(400);
		$('.navigation').fadeOut(400);
	});
	$('#case__close-1').on('click', function () {
		$('#case-1').fadeOut(400);
		$('.works__cards').delay(400).fadeIn(400);
		$('.works__button-wrap').delay(400).fadeIn(400);
		$('.mainscreen').delay(400).fadeIn(400);
		$('.product').delay(400).fadeIn(400);
		$('.works__title').delay(400).fadeIn(400);
		$('.quiz').delay(400).fadeIn(400);
		$('.team').delay(400).fadeIn(400);
		$('.contacts').delay(400).fadeIn(400);
		$('.navigation').delay(400).fadeIn(400);
	});

	$('#card__button-2').on('click', function () {
		$('#case-2').delay(400).fadeIn(400);
		$('.works__cards').fadeOut(400);
		$('.works__button-wrap').fadeOut(400);
		$('.mainscreen').fadeOut(400);
		$('.product').fadeOut(400);
		$('.works__title').fadeOut(400);
		$('.quiz').fadeOut(400);
		$('.team').fadeOut(400);
		$('.contacts').fadeOut(400);
		$('.navigation').fadeOut(400);
	});
	$('#case__close-2').on('click', function () {
		$('#case-2').fadeOut(400);
		$('.works__cards').delay(400).fadeIn(400);
		$('.works__button-wrap').delay(400).fadeIn(400);
		$('.mainscreen').delay(400).fadeIn(400);
		$('.product').delay(400).fadeIn(400);
		$('.works__title').delay(400).fadeIn(400);
		$('.quiz').delay(400).fadeIn(400);
		$('.team').delay(400).fadeIn(400);
		$('.contacts').delay(400).fadeIn(400);
		$('.navigation').delay(400).fadeIn(400);
	});

	$('#card__button-3').on('click', function () {
		$('#case-3').delay(400).fadeIn(400);
		$('.works__cards').fadeOut(400);
		$('.works__button-wrap').fadeOut(400);
		$('.mainscreen').fadeOut(400);
		$('.product').fadeOut(400);
		$('.works__title').fadeOut(400);
		$('.quiz').fadeOut(400);
		$('.team').fadeOut(400);
		$('.contacts').fadeOut(400);
		$('.navigation').fadeOut(400);
	});
	$('#case__close-3').on('click', function () {
		$('#case-3').fadeOut(400);
		$('.works__cards').delay(400).fadeIn(400);
		$('.works__button-wrap').delay(400).fadeIn(400);
		$('.mainscreen').delay(400).fadeIn(400);
		$('.product').delay(400).fadeIn(400);
		$('.works__title').delay(400).fadeIn(400);
		$('.quiz').delay(400).fadeIn(400);
		$('.team').delay(400).fadeIn(400);
		$('.contacts').delay(400).fadeIn(400);
		$('.navigation').delay(400).fadeIn(400);
	});

	// placeholders
	$('#contacts-name').on('focus', function () {
		$('#text-span').addClass('show');
	});
	$('#contacts-phone').on('focus', function () {
		$('#text-tel').addClass('show');
	});
	$('.contacts__input').on('blur', function (e) {
		if (e.target.value === '') {
			$(e.target).siblings('span').removeClass('show');
		} else {
			$(e.target).siblings('span').addClass('show');
		}
	});

	// quiz spinner
	$('#quiz__form').on('submit', function (e) {
		e.preventDefault();

		//берем из формы метод передачи данных
		var m_method = $(this).attr('method');
		var m_action = $(this).attr('action');
		var m_data = $(this).serialize();
		$('#quiz__form').addClass('_sending');
		$.ajax({
			type: m_method,
			url: m_action,
			data: m_data,
			resetForm: 'true',
			success: function success(result) {
				$('#quiz__form').removeClass('_sending');
				setTimeout(function () {
					$('#quiz__form')[0].reset();
				}, 2000);
			}
		});
	});
});

function updateMe() {
	dx = clientX - cx;
	dy = clientY - cy;
	tiltx = dx / cx;
	tilty = dy / cy;
	radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
	degree = radius * 30;
	gsap.to('.mainscreen__body', 1, { transform: 'rotate3d( ' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)' });
}

// Navigation behaviour on scroll
window.onscroll = function () {
	scrollFunction();
};
function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		$(".navigation__lang").addClass('hide');
		$(".navigation__phone").addClass('hide');
		$(".navigation__menu").addClass('show');
	} else {
		$(".navigation__lang").removeClass('hide');
		$(".navigation__phone").removeClass('hide');
		$(".navigation__menu").removeClass('show');
	}
}
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : jQuery);
}(function (a) {
    var b,
        c = navigator.userAgent,
        d = /iphone/i.test(c),
        e = /chrome/i.test(c),
        f = /android/i.test(c);a.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, autoclear: !0, dataName: "rawMaskFn", placeholder: "_" }, a.fn.extend({ caret: function caret(a, b) {
            var c;if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () {
                this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select());
            })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), { begin: a, end: b });
        }, unmask: function unmask() {
            return this.trigger("unmask");
        }, mask: function mask(c, g) {
            var h, i, j, k, l, m, n, o;if (!c && this.length > 0) {
                h = a(this[0]);var p = h.data(a.mask.dataName);return p ? p() : void 0;
            }return g = a.extend({ autoclear: a.mask.autoclear, placeholder: a.mask.placeholder, completed: null }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function (a, b) {
                "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null);
            }), this.trigger("unmask").each(function () {
                function h() {
                    if (g.completed) {
                        for (var a = l; m >= a; a++) {
                            if (j[a] && C[a] === p(a)) return;
                        }g.completed.call(B);
                    }
                }function p(a) {
                    return g.placeholder.charAt(a < g.placeholder.length ? a : 0);
                }function q(a) {
                    for (; ++a < n && !j[a];) {}return a;
                }function r(a) {
                    for (; --a >= 0 && !j[a];) {}return a;
                }function s(a, b) {
                    var c, d;if (!(0 > a)) {
                        for (c = a, d = q(b); n > c; c++) {
                            if (j[c]) {
                                if (!(n > d && j[c].test(C[d]))) break;C[c] = C[d], C[d] = p(d), d = q(d);
                            }
                        }z(), B.caret(Math.max(l, a));
                    }
                }function t(a) {
                    var b, c, d, e;for (b = a, c = p(a); n > b; b++) {
                        if (j[b]) {
                            if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break;c = e;
                        }
                    }
                }function u() {
                    var a = B.val(),
                        b = B.caret();if (o && o.length && o.length > a.length) {
                        for (A(!0); b.begin > 0 && !j[b.begin - 1];) {
                            b.begin--;
                        }if (0 === b.begin) for (; b.begin < l && !j[b.begin];) {
                            b.begin++;
                        }B.caret(b.begin, b.begin);
                    } else {
                        for (A(!0); b.begin < n && !j[b.begin];) {
                            b.begin++;
                        }B.caret(b.begin, b.begin);
                    }h();
                }function v() {
                    A(), B.val() != E && B.change();
                }function w(a) {
                    if (!B.prop("readonly")) {
                        var b,
                            c,
                            e,
                            f = a.which || a.keyCode;o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault());
                    }
                }function x(b) {
                    if (!B.prop("readonly")) {
                        var c,
                            d,
                            e,
                            g = b.which || b.keyCode,
                            i = B.caret();if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
                            if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                                if (t(c), C[c] = d, z(), e = q(c), f) {
                                    var k = function k() {
                                        a.proxy(a.fn.caret, B, e)();
                                    };setTimeout(k, 0);
                                } else B.caret(e);i.begin <= m && h();
                            }b.preventDefault();
                        }
                    }
                }function y(a, b) {
                    var c;for (c = a; b > c && n > c; c++) {
                        j[c] && (C[c] = p(c));
                    }
                }function z() {
                    B.val(C.join(""));
                }function A(a) {
                    var b,
                        c,
                        d,
                        e = B.val(),
                        f = -1;for (b = 0, d = 0; n > b; b++) {
                        if (j[b]) {
                            for (C[b] = p(b); d++ < e.length;) {
                                if (c = e.charAt(d - 1), j[b].test(c)) {
                                    C[b] = c, f = b;break;
                                }
                            }if (d > e.length) {
                                y(b + 1, n);break;
                            }
                        } else C[b] === e.charAt(d) && d++, k > b && (f = b);
                    }return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l;
                }var B = a(this),
                    C = a.map(c.split(""), function (a, b) {
                    return "?" != a ? i[a] ? p(b) : a : void 0;
                }),
                    D = C.join(""),
                    E = B.val();B.data(a.mask.dataName, function () {
                    return a.map(C, function (a, b) {
                        return j[b] && a != p(b) ? a : null;
                    }).join("");
                }), B.one("unmask", function () {
                    B.off(".mask").removeData(a.mask.dataName);
                }).on("focus.mask", function () {
                    if (!B.prop("readonly")) {
                        clearTimeout(b);var a;E = B.val(), a = A(), b = setTimeout(function () {
                            B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a));
                        }, 10);
                    }
                }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () {
                    B.prop("readonly") || setTimeout(function () {
                        var a = A(!0);B.caret(a), h();
                    }, 0);
                }), e && f && B.off("input.mask").on("input.mask", u), A();
            });
        } });
});
//# sourceMappingURL=index.js.map
