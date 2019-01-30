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
  };
  initJquery();
});