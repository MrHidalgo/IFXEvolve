"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

    var link = document.querySelectorAll("a");

    link.forEach(function (val, idx) {

        val.addEventListener("click", function (e) {
            if (val.getAttribute("href") === "#") {
                e.preventDefault();
            }
        });
    });
};

/**
 * @name initSvg4everybody
 *
 * @description SVG for Everybody adds external spritemaps support to otherwise SVG-capable browsers.
 */
var initSvg4everybody = function initSvg4everybody() {

    svg4everybody();
};

/**
 * @description Document DOM ready.
 */
$(document).ready(function (ev) {
    /**
     *
     * @type {*|jQuery|HTMLElement}
     * @private
     */
    var _document = $(document),
        _window = $(window);

    /*
    * =============================================
    * CALLBACK :: start
    * ============================================= */

    var initGetStartedScreen = function initGetStartedScreen() {
        var _name = '',
            _id = 1;

        var backToMain = function backToMain() {
            $('.e-started__row').hide();
            $('.e-started__row[e-started-screen="0"]').show();
            $('.e-started-back').removeClass('is-active');
        };

        $('[started-btn-js]').on('click', function (ev) {
            var _elem = $(ev.currentTarget),
                _elemName = _elem.data('name'),
                _elemID = _elem.data('id');

            _name = _elemName;
            _id = _elemID;

            var _btnBack = $('.e-started-back');

            var nextScreen = function nextScreen(name, id) {
                $('.e-started__row--' + name + '[e-started-screen="' + id + '"]').fadeIn(425);
            };

            var prevScreen = function prevScreen(name, id) {
                $('.e-started__row--' + name + '[e-started-screen="' + id + '"]').fadeIn(425);
            };

            if (_elemID === 0) {
                backToMain();
            }

            if (_elemID === 1) {
                _btnBack.addClass('is-active');

                $('.e-started__row[e-started-screen="0"]').hide();

                nextScreen(_elemName, _elemID);
            } else if (_elemName === 'back') {
                _elemName = _elem.data('subname');

                $('.e-started__row[e-started-screen="' + (_elemID + 1) + '"]').hide();

                prevScreen(_elemName, _elemID);
            } else {
                $('.e-started__row[e-started-screen="' + (_elemID - 1) + '"]').hide();

                nextScreen(_elemName, _elemID);
            }

            _name = _elem.data('subname') !== undefined ? _elem.data('subname') : _elemName;
        });

        $('.e-started-back').on('click', function (ev) {
            if (_id === 1) {
                backToMain();
            } else {
                $('.e-started__row--' + _name + '[e-started-screen="' + _id + '"]').hide();
                $('.e-started__row--' + _name + '[e-started-screen="' + (_id - 1) + '"]').fadeIn(425);
                _id--;
            }
        });
    };

    var initFaqsCollapse = function initFaqsCollapse() {
        $('[faqa-btn-js]').on('click', function (ev) {
            var _elem = $(ev.currentTarget),
                _parentNode = _elem.closest('.e-faqs__block'),
                _bodyNode = _elem.siblings('.e-faqs__block-body');

            _parentNode.toggleClass('is-open');
            _bodyNode.slideToggle();
        });
    };

    var initStickyHeader = function initStickyHeader() {
        var _num = 1,
            _heightSection = 0,
            _scrollDirectionVal = '',
            _scrollDirection = 0;

        var scrollDirection = function scrollDirection() {
            if (document.body.getBoundingClientRect().top > _scrollDirection) {
                _scrollDirectionVal = 'down';
            } else {
                _scrollDirectionVal = 'up';
            }

            _scrollDirection = document.body.getBoundingClientRect().top;
        };

        var isAnyPartOfElementInViewport = function isAnyPartOfElementInViewport(el) {
            var _elements = document.querySelectorAll(el);

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = _elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _el = _step.value;

                    var rect = _el.getBoundingClientRect();

                    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
                    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

                    var vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
                    var horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

                    if (vertInView && horInView) {
                        return _el.getAttribute('data-section-id');
                    } else if ($(el).offset().top - $(window).scrollTop() >= 0) {
                        return 1;
                    } else {
                        return 6;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        };

        var changeTextOpacity = function changeTextOpacity(num) {
            var _elem = $('.e-how__body-right p'),
                _idx = num - 1;

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = _elem[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _el = _step2.value;

                    _el.style.opacity = '0';
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            switch (_idx) {
                case 0:
                    _elem[_idx].style.opacity = '1';
                    _elem[_idx + 1].style.opacity = '0.25';
                    _elem[_idx + 2].style.opacity = '0.05';
                    break;
                case 1:
                    _elem[_idx - 1].style.opacity = '0.25';
                    _elem[_idx].style.opacity = '1';
                    _elem[_idx + 1].style.opacity = '0.25';
                    _elem[_idx + 2].style.opacity = '0.05';
                    break;
                case 2:
                case 3:
                    _elem[_idx - 2].style.opacity = '0.05';
                    _elem[_idx - 1].style.opacity = '0.25';
                    _elem[_idx].style.opacity = '1';
                    _elem[_idx + 1].style.opacity = '0.25';
                    _elem[_idx + 2].style.opacity = '0.05';
                    break;
                case 4:
                    _elem[_idx - 2].style.opacity = '0.05';
                    _elem[_idx - 1].style.opacity = '0.25';
                    _elem[_idx].style.opacity = '1';
                    _elem[_idx + 1].style.opacity = '0.25';
                    break;
                case 5:
                    _elem[_idx - 2].style.opacity = '0.05';
                    _elem[_idx - 1].style.opacity = '0.25';
                    _elem[_idx].style.opacity = '1';
                    break;
                default:
                    break;
            }
        };

        var offsetTextArr = function offsetTextArr() {
            var _elements = $('.e-how__body-right p'),
                _arr = [];

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = _elements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _el = _step3.value;

                    _arr.push($(_el).outerHeight(true));
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return _arr;
        };

        var _resultAdditional = 0;
        var translateText = function translateText(num) {
            var _translateNode = $('.e-how__body-right'),
                _arrOffset = offsetTextArr(),
                _idx = num - 1;

            var _resOffsetUp = 0,
                _resOffsetDown = 0;

            // console.log(`_idx: ${_idx}`);

            if (_scrollDirectionVal === 'up') {
                for (var i = 0; i <= _idx; i++) {
                    _resOffsetUp = _resOffsetUp + _arrOffset[i];
                }

                _translateNode.css({
                    // 'transform' : 'translateY(-' + _resOffsetUp + 'px)'
                    'top': '-' + _resOffsetUp + 'px'
                });

                _resultAdditional = _resOffsetUp;
                console.log("if _resultAdditional: " + _resultAdditional);
            } else {

                /*
                * idx === 5
                * [115, 85, 205, 115, 85, 205]
                * [000, 01, 002, 003, 04, 005]
                * */

                // console.log(`else`);
                // console.log(`_idx: ${_idx}`);
                console.log("_arrOffset[_idx]: " + (_arrOffset[_idx - 1] ? _arrOffset[_idx - 1] : _arrOffset[_idx]));
                // console.log(`_resultAdditional: ${_resultAdditional}`);

                _resOffsetDown = _arrOffset[_idx - 1] ? _arrOffset[_idx - 1] : _arrOffset[_idx];

                // console.log(`_resOffsetDown: ${_resOffsetDown}`);

                _translateNode.css({
                    // 'transform' : 'translateY(-' + (_resultAdditional - _resOffsetDown) + 'px)'
                });
            }
        };

        $(window).on('load', function () {
            _heightSection = $('.e-how__section').height();
            _num = isAnyPartOfElementInViewport('.e-how__section');

            console.log("LOAD::");
            console.log("_num: ", _num);
            // console.log(`offsetTextArr: `, offsetTextArr());
        });

        $(window).on('scroll', function () {
            console.log("SCROLL::");

            scrollDirection();
            changeTextOpacity(_num);
            translateText(_num);

            var _winScrollTop = $(window).scrollTop(),
                _minLen = 1,
                _maxLen = $('.e-how__body-right p').length;

            if (_scrollDirectionVal === 'up') {
                // console.log('up');
                if ($('.e-how__section-' + _num).offset().top - _winScrollTop <= 0) {
                    var _currentDiff = Math.abs($('.e-how__section-' + _num).offset().top - _winScrollTop);

                    // console.log(`section ${_num} start`);

                    if (_currentDiff > _heightSection) {

                        // console.log(`section ${_num} end`);

                        if (_num < _maxLen) {
                            ++_num;
                        }

                        // console.log(`_num: ${_num}`);
                    }
                }
            } else {
                // console.log('down');
                if ($('.e-how__section-' + _num).offset().top - _winScrollTop >= 0) {
                    var _currentDiff2 = Math.abs($('.e-how__section-' + _num).offset().top - _winScrollTop);

                    // console.log(`section ${_num} start`);

                    if (_currentDiff2 < _heightSection) {

                        // console.log(`section ${_num} end`);

                        if (_num > _minLen) {
                            --_num;
                        }

                        // console.log(`_num: ${_num}`);
                    }
                }
            }
        });
    };

    var initMainBgTransition = function initMainBgTransition() {
        var tlBg = new TimelineMax();

        tlBg.fromTo(document.querySelector('.e-main__bg'), 7, { x: 100 }, { x: -100, repeat: -1, yoyo: true, ease: Power1.easeInOut });
    };

    /*
    * CALLBACK :: end
    * ============================================= */

    /**
     * @description Init all method
     */
    var initJquery = function initJquery() {
        // default
        // initWebFontLoader();
        initPreventBehavior();
        initSvg4everybody();
        // ==========================================

        // lib
        // ==========================================

        // callback
        // ==========================================
        initGetStartedScreen();
        initFaqsCollapse();
        // initStickyHeader();
        initMainBgTransition();
    };
    initJquery();
});