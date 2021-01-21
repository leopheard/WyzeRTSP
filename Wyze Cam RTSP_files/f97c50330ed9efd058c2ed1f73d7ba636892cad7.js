/**
 * LotusIcons v1.0.0 - A simple lib to insert icons for categories, sections, etc.
 * Copyright (c) 2015-2019 Lotus Themes <hello@lotusthemes.com>
 */

(function($, window, document) {
  ("use strict");

  /**
   * Recursively finds a value by key in window.LotusConfig.images
   * @param  {String} key
   */
  function getValueByKey(key) {
    var value;
    Object.keys(window.LotusConfig.images).some(function(k) {
      if (k === key) {
        value = window.LotusConfig.images[k];
        return true;
      }
      if (
        window.LotusConfig.images[k] &&
        typeof window.LotusConfig.images[k] === "object"
      ) {
        value = window.LotusConfig.images.getValueByKey(
          window.LotusConfig.images[k],
          key
        );
        return value !== undefined;
      }
    });
    return value;
  }

  var LotusIcons = {
    // Insert all icons specified in LotusConfig.icons object
    insertIcons: function() {
      $("[data-lotus-image]").each(function(index, el) {
        var $el = $(el);
        var id = $el.attr("data-lotus-image");
        var defaultIconUrl = getValueByKey("default");
        var imgUrl = getValueByKey(id);
        var iconToDisplay = imgUrl === undefined ? defaultIconUrl : imgUrl;
        if (iconToDisplay) {
          $el.attr("src", iconToDisplay).removeClass('is-hidden').addClass("is-active");
        }
      });
    }
  };

  window.LotusIcons = LotusIcons;

  $(function() {
    LotusIcons.insertIcons();
  });
})(jQuery, window, document);
