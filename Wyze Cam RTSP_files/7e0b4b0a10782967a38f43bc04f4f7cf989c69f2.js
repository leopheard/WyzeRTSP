(function($, window, document) {
  ('use strict');

  var BUTTON_ELEMENT = '[data-scroll-to-top]';

  var ScrollToTop = {
    init: function() {
      this.cacheElements();
      this.topbarHeight = parseInt(this.$topbar.height());

      if (this.$button.length) {
        this.bindEvents();
      }
    },
    cacheElements: function() {
      this.$window = $(window);
      this.$topbar = $('[data-topbar]');
      this.$button = $(BUTTON_ELEMENT);
    },
    bindEvents: function() {
      this.$window.on('scroll', this.handleScroll.bind(this));
      $(document).on('click', BUTTON_ELEMENT, this.handleClick);
    },
    handleClick: function() {
      $('html, body').animate({ scrollTop: 0 }, 1000);
      return false;
    },
    handleScroll: function() {
      var scrolled = this.$window.scrollTop();

      if (scrolled > this.topbarHeight) {
        this.$button.addClass(LotusConfig.css.activeClass);
      } else {
        this.$button.removeClass(LotusConfig.css.activeClass);
      }
    }
  };

  window.ScrollToTop = ScrollToTop;
})(jQuery, window, document);
