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
                $('.e-started__row--' + name + '[e-started-screen="' + id + '"]').fadeIn(425);
            };

            const prevScreen = (name, id) => {
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

            _name = (_elem.data('subname') !== undefined) ? _elem.data('subname') : _elemName;
        });

        $('.e-started-back').on('click', (ev) => {
            if (_id === 1) {
                backToMain();
            } else {
                $('.e-started__row--' + _name + '[e-started-screen="' + (_id) + '"]').hide();
                $('.e-started__row--' + _name + '[e-started-screen="' + (_id - 1) + '"]').fadeIn(425);
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

    const initStickyHeader = () => {
        let _num = 1,
            _heightSection = 0,
            _scrollDirectionVal = '',
            _scrollDirection = 0;

        const scrollDirection = () => {
            if ((document.body.getBoundingClientRect()).top > _scrollDirection) {
                _scrollDirectionVal = 'down';
            } else {
                _scrollDirectionVal = 'up';
            }

            _scrollDirection = (document.body.getBoundingClientRect()).top;
        };

        const isAnyPartOfElementInViewport = (el) => {
            const _elements = document.querySelectorAll(el);

            for(let _el of _elements) {
                const rect = _el.getBoundingClientRect();

                const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
                const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

                const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
                const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

                if((vertInView && horInView)) {
                    return _el.getAttribute('data-section-id');
                } else if ($(el).offset().top - $(window).scrollTop() >= 0) {
                    return 1;
                } else {
                    return 6;
                }
            }
        };

        const changeTextOpacity = (num) => {
            let _elem = $('.e-how__body-right p'),
                _idx = num - 1;

            for(let _el of _elem) {
                _el.style.opacity = '0';
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

        const offsetTextArr = () => {
            const _elements = $('.e-how__body-right p'),
                _arr = [];

            for(let _el of _elements) {
                _arr.push($(_el).outerHeight(true));
            }

            return _arr;
        };

        let _resultAdditional = 0;
        const translateText = (num) => {
            const _translateNode = $('.e-how__body-right'),
                _arrOffset = offsetTextArr(),
                _idx = num - 1;

            let _resOffsetUp = 0,
                _resOffsetDown = 0;

            // console.log(`_idx: ${_idx}`);

            if(_scrollDirectionVal === 'up') {
                for(let i = 0; i <= _idx; i++) {
                    _resOffsetUp = _resOffsetUp + _arrOffset[i];
                }

                _translateNode.css({
                    // 'transform' : 'translateY(-' + _resOffsetUp + 'px)'
                    'top' : '-' + _resOffsetUp + 'px'
                });

                _resultAdditional = _resOffsetUp;
                console.log(`if _resultAdditional: ${_resultAdditional}`);
            } else {

                /*
                * idx === 5
                * [115, 85, 205, 115, 85, 205]
                * [000, 01, 002, 003, 04, 005]
                * */

                // console.log(`else`);
                // console.log(`_idx: ${_idx}`);
                console.log(`_arrOffset[_idx]: ${(_arrOffset[_idx - 1]) ? _arrOffset[_idx - 1] : _arrOffset[_idx]}`);
                // console.log(`_resultAdditional: ${_resultAdditional}`);

                _resOffsetDown = (_arrOffset[_idx - 1]) ? _arrOffset[_idx - 1] : _arrOffset[_idx];

                // console.log(`_resOffsetDown: ${_resOffsetDown}`);

                _translateNode.css({
                    // 'transform' : 'translateY(-' + (_resultAdditional - _resOffsetDown) + 'px)'
                });
            }
        };

        $(window).on('load', () => {
            _heightSection = $('.e-how__section').height();
            _num = isAnyPartOfElementInViewport('.e-how__section');

            console.log(`LOAD::`);
            console.log(`_num: `, _num);
            // console.log(`offsetTextArr: `, offsetTextArr());
        });

        $(window).on('scroll', () => {
            console.log(`SCROLL::`);

            scrollDirection();
            changeTextOpacity(_num);
            translateText(_num);

            let _winScrollTop = $(window).scrollTop(),
                _minLen = 1,
                _maxLen = $('.e-how__body-right p').length;

            if(_scrollDirectionVal === 'up') {
                // console.log('up');
                if(($('.e-how__section-' + _num).offset().top - _winScrollTop) <= 0) {
                    let _currentDiff = Math.abs($('.e-how__section-' + _num).offset().top - _winScrollTop);

                    // console.log(`section ${_num} start`);

                    if(_currentDiff > _heightSection) {

                        // console.log(`section ${_num} end`);

                        if(_num < _maxLen) {
                            ++_num;
                        }

                        // console.log(`_num: ${_num}`);
                    }
                }
            } else {
                // console.log('down');
                if(($('.e-how__section-' + _num).offset().top - _winScrollTop) >= 0) {
                    let _currentDiff = Math.abs($('.e-how__section-' + _num).offset().top - _winScrollTop);

                    // console.log(`section ${_num} start`);

                    if(_currentDiff < _heightSection) {

                        // console.log(`section ${_num} end`);

                        if(_num > _minLen) {
                            --_num;
                        }

                        // console.log(`_num: ${_num}`);
                    }
                }
            }
        })
    };

    const initMainBgTransition = () => {
        const tlBg = new TimelineMax();

        tlBg
            .fromTo(
                document.querySelector('.e-main__bg'),
                7,
                {x:100},
                {x:-100, repeat: -1, yoyo: true, ease: Power1.easeInOut}
                );
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
        // initStickyHeader();
        initMainBgTransition();
    };
    initJquery();
});

