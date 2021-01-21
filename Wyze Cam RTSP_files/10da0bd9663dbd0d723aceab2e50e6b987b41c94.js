(function($, window, document) {
  ('use strict');

  var MenuToggle = {
    init: function() {
      this.cacheElements();
      this.bindEvents();

      var mobileNav = document.querySelector('[data-menu]');
      var burgerBtn = document.querySelector('[data-toggle-menu]');

      document.addEventListener('click', function(e) {

        var isBtnClicked = e.target === burgerBtn || burgerBtn.contains(e.target);
        var isMenuClicked = e.target === mobileNav || mobileNav.contains(e.target);
        var isMenuOpen = mobileNav.classList.contains(LotusConfig.css.activeClass);
      
        if(!isBtnClicked && !isMenuClicked && isMenuOpen)  {
          mobileNav.classList.remove(LotusConfig.css.activeClass);
        }
      });
    },
    cacheElements: function() {
      this.$button = $('[data-toggle-menu]');
      this.$menu = $('[data-menu]');
    },
    bindEvents: function() {
      $(document).on('click', '[data-toggle-menu]', this.handleClick.bind(this));
    },
    handleClick: function(e) {
      this.$menu.toggleClass(LotusConfig.css.activeClass);
    }
  };

  window.MenuToggle = MenuToggle;
})(jQuery, window, document);
