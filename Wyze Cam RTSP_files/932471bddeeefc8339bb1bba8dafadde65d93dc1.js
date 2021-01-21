(function($, window, document) {
  ('use strict');

  var SUBFILTER_LIMIT = 6;

  var SearchResultsFilters = {
    init: function() {
      this.cacheElements();
      this.bindEvents();
      this.renderShowMoreButton();
    },
    cacheElements: function() {
      this.$subfilters = $('[data-search-subfilters]');
      this.$showMoreButton = this.$subfilters.find('[data-search-filter-show-more]');
    },
    bindEvents: function() {
      $(document).on('click', '[data-search-filter-toggle]', this.handleToggleFilter.bind(this));
      $(document).on('click', this.$showMoreButton, this.handleShowMore.bind(this));
    },
    handleToggleFilter: function(e) {
      var $filterToggle = $(e.target);
      var $list = $filterToggle.parents('[data-search-filter]').find('[data-search-filter-list]');
      $filterToggle.toggleClass(LotusConfig.css.activeClass);
      $list.slideToggle(0);
    },
    handleShowMore: function() {
      this.$subfilters.addClass('search-result__subfilters--all');
    },
    renderShowMoreButton: function() {
      var subfiltersCount = this.$subfilters.find('[data-search-filter-item]').length;
      if (subfiltersCount > SUBFILTER_LIMIT) {
        this.$showMoreButton.removeClass(LotusConfig.css.hiddenClass);
      }
    }
  };

  window.SearchResultsFilters = SearchResultsFilters;

})(jQuery, window, document);
