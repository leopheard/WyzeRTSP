(function($, window, document) {
  ('use strict');

  function clipper(min, max) {
    return function(o) {
      if (o > max) return max;
      if (o < min) return min;
      return o;
    };
  }

  var opacityClipper = clipper(0, 1);

  var HeroUnit = {
    init: function() {
      this.cacheElements();

      if (this.$heroUnit.length) {
        this.bindEvents();
      }
    },
    cacheElements: function() {
      this.$window = $(window);
      this.$heroUnit = $('[data-hero-unit]');
      this.$heroUnitBg = this.$heroUnit.find('[data-hero-bg]');
      this.$searchBox = this.$heroUnit.find('[data-search-box]');
    },
    bindEvents: function() {
      this.$window.on('scroll', this.handleScroll.bind(this));
    },
    handleScroll: function() {
      var scrolled = this.$window.scrollTop();

      this.$heroUnitBg.css({
        '-moz-transform': 'translate3d(0px,' + scrolled / -3 + 'px' + ', 0px)',
        '-webkit-transform': 'translate3d(0px,' + scrolled / -3 + 'px' + ', 0px)',
        transform: 'translate3d(0px,' + scrolled / -3 + 'px' + ', 0px)'
      });

      this.$searchBox.css({
        opacity: opacityClipper(1 - opacityClipper(scrolled * 0.003))
      });
    }
  };

  window.HeroUnit = HeroUnit;

})(jQuery, window, document);
