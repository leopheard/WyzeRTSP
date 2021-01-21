
/**
 * Social share popups
 * @description open new window on share link click
 */
$(function() {
  $('.share a').click(function(e) {
    e.preventDefault();
    window.open(this.href, '', 'height = 500, width = 500');
  });
});

/**
 * Share dropdown
 * @description Toggle the share dropdown in communities
 */
$(function() {
  $('.share-label').on('click', function(e) {
    e.stopPropagation();
    var isSelected = this.getAttribute('aria-selected') === 'true';
    this.setAttribute('aria-selected', !isSelected);
    $('.share-label').not(this).attr('aria-selected', 'false');
  });

  // Remove active state from social media links
  $(document).on('click', function() {
    $('.share-label').attr('aria-selected', 'false');
  });
});

/**
 * Set location search
 * @description set window.location.search on request form
 */
$(function() {
  var $requestStatus = $('#request-status-select');
  var $requestOrganization = $('#request-organization-select');
  var $quickSearch = $('#quick-search');

  // Submit search on select change
  $requestStatus.add($requestOrganization[0]).on('change', search);

  // Submit search on input enter
  $quickSearch.on('keypress', function(e) {
    if (e.which === 13) {
      search();
    }
  });

  function search() {
    window.location.search = $.param({
      query: $quickSearch.val(),
      status: $requestStatus.val(),
      organization_id: $quickSearch.val()
    });
  }
});