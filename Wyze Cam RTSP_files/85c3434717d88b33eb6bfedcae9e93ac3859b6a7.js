(function($, window, document) {
  ('use strict');

  var TOGGLE_ELEMENT = '[data-category-accordion-title]';

  var CategoryAccordion = {
    init: function() {
      this.cacheElements();
      this.bindEvents();
    },
    cacheElements: function() {
      this.$button = $(TOGGLE_ELEMENT);
    },
    bindEvents: function() {
      $(document).on('click', TOGGLE_ELEMENT, this.handleClick);
    },
    handleClick: function (e) {
      var  $title = $(e.target);
      $title.toggleClass('category-tree-item__title--accordion-title--active');
      $title
        .parents('[data-category-accordion]')
        .find('[data-category-accordion-content]')
        .slideToggle();
    }
  };

  window.CategoryAccordion = CategoryAccordion;
})(jQuery, window, document);
