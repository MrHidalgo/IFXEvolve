

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
    _window = $(window);


	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */

	const initGetStartedScreen = () => {
	  let _name = '',
      _id = 1;

    const backToMain = () => {
      $('.e-started__row').hide();
      $('.e-started__row[e-started-screen="0"]').show();
      $('.e-started-back').removeClass('is-active');
    };

	  $('[started-btn-js]').on('click', (ev) => {
	    let _elem = $(ev.currentTarget),
        _elemName = _elem.data('name'),
        _elemID = _elem.data('id');

      _name = _elemName;
      _id = _elemID;

	    const _btnBack = $('.e-started-back');

      const nextScreen = (name, id) => {
        $('.e-started__row--' + name + '[e-started-screen="' + id + '"]').show();
      };

      const prevScreen = (name, id) => {
        $('.e-started__row--' + name + '[e-started-screen="' + id + '"]').show();
      };

      if(_elemID === 0) {
        backToMain();
      }

      if(_elemID === 1) {
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

      _name = (_elem.data('subname') !== undefined) ? _elem.data('subname'): _elemName;
    });

    $('.e-started-back').on('click', (ev) => {
      if(_id === 1) {
        backToMain();
      } else {
        $('.e-started__row--' + _name + '[e-started-screen="' + (_id) + '"]').hide();
        $('.e-started__row--' + _name + '[e-started-screen="' + (_id - 1) + '"]').show();
        _id--;
      }
    });
  };

	const initFaqsCollapse = () => {
	  $('[faqa-btn-js]').on('click', (ev) => {
	    const _elem = $(ev.currentTarget),
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
  const initJquery = () => {
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

