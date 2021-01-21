/**
 * LotusUtils v1.0.0 - A set of useful helpers
 * Copyright (c) 2015-2019 Lotus Themes <hello@lotusthemes.com>
 */
/* eslint-disable no-undef, no-loops/no-loops, no-useless-escape */
(function($, window, document) {
  ('use strict');

  var LotusUtils = {
    /**
     * Get HC locale
     * @param {string?} pageUrl: page url
     * @return {string}: locale
     */
    getLocale: function(pageUrl) {
      if (
        this.isContributionsPostsPage() ||
        this.isContributionsCommunityCommentsPage() ||
        this.isContributionsCommentsPage()
      ) {
        return this.getUrlParameter('locale');
      }
      var url = pageUrl || window.location.href;
      var links = url.split('/');
      var hcIndex = links.indexOf('hc');
      var links2 = links[hcIndex + 1].split('?');

      return links2[0];
    },

    /**
     * Get page ID
     * @param {string?} pageUrl: page url
     * @return {number | null}: page ID or null
     */
    getPageId: function(pageUrl) {
      var url = pageUrl || window.location.href;
      var links = url.split('/');
      var result = links[links.length - 1];
      return parseInt(result, 10) || null;
    },

    /**
     * Get category ID
     * @param {string?} url: page url
     * @return {number | null}: category ID or null
     */
    getCategoryId: function(url) {
      if (this.isCategoryPage(url)) {
        return this.getPageId(url);
      } else if (!url) {
        var $breadcrumbsItems = $('.breadcrumbs li');
        for (var i = 0; i < $breadcrumbsItems.length; i++) {
          var linkUrl = $breadcrumbsItems
            .eq(i)
            .find('a')
            .attr('href');
          if (linkUrl && this.isCategoryPage(linkUrl)) {
            return this.getPageId(linkUrl);
          }
        }
      }
      return null;
    },

    /**
     * Get section ID
     * @param {string?} url: page url
     * @return {number | null}: section ID or null
     */
    getSectionId: function(url) {
      if (this.isSectionPage(url)) {
        return this.getPageId(url);
      } else if (!url) {
        var $breadcrumbsItems = $('.breadcrumbs li');
        for (var i = 0; i < $breadcrumbsItems.length; i++) {
          var linkUrl = $breadcrumbsItems
            .eq(i)
            .find('a')
            .attr('href');
          if (linkUrl && this.isSectionPage(linkUrl)) {
            return this.getPageId(linkUrl);
          }
        }
      }
      return null;
    },

    /**
     * Get article ID
     * @param {string?} url: page url
     * @return {number | null}: article ID or null
     */
    getArticleId: function(url) {
      if (this.isArticlePage(url)) {
        return this.getPageId(url);
      }
      return null;
    },

    /**
     * Get current user info
     * @param {function} callback
     * @async
     */
    getCurrentUser: function(callback) {
      var context = this;
      $.getJSON('/api/v2/users/me.json')
        .done(function(response) {
          return callback.call(context, null, response.user);
        })
        .fail(function(jqxhr) {
          return callback.call(context, jqxhr, null);
        });
    },

    /**
     * Get all article images
     * @param {String} articleBody: article body
     * @return {Array}
     */
    getArticleImages: function(articleBody) {
      var $body = $('<div>' + articleBody + '</div>');
      var $images = $body.find('img');

      return $images.map(function() {
        return this.getAttribute('src');
      });
    },

    getUrlParameter: function(param) {
      var pageURL = window.location.search.substring(1);
      var URLVariables = pageURL.split('&');
      var parameterName;
      var i;

      for (i = 0; i < URLVariables.length; i++) {
        parameterName = URLVariables[i].split('=');

        if (parameterName[0] === param) {
          return parameterName[1] === undefined
            ? true
            : decodeURIComponent(parameterName[1]);
        }
      }
    },

    /**
     * Is home page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isHomePage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /^http(s)?:\/\/[^\/?#]+(\/hc(\/[a-z-0-9_]+)?(\/)?(signin)?([?]([^?\/]+)?)?([#]([^#\/]+)?)?)?$/.test(
        url
      );
    },

    /**
     * Is category page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isCategoryPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-0-9_]+\/)?categories\//i.test(url);
    },

    /**
     * Is section page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isSectionPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-0-9_]+\/)?sections\//i.test(url);
    },

    /**
     * Is article page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isArticlePage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-0-9_]+\/)?articles\//i.test(url);
    },

    /**
     * Is search results page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isSearchResultsPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-0-9_]+\/)?search\?*.*/i.test(url);
    },

    /**
     * Is contributions posts page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isContributionsPostsPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-0-9_]+\/)?contributions\/posts(\/)?([?#].*)?$/i.test(
        url
      );
    },

    /**
     * Is contributions community comments page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isContributionsCommunityCommentsPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-0-9_]+\/)?contributions\/community_comments(\/)?([?#].*)?$/i.test(
        url
      );
    },

    /**
     * Is contributions community comments page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isContributionsCommentsPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-0-9_]+\/)?contributions\/comments(\/)?([?#].*)?$/i.test(
        url
      );
    },

    /**
     * Is following page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isFollowingPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-0-9_]+\/)?subscriptions(\/)?([?#].*)?$/i.test(url);
    },

    /**
     * Is request list page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isRequestListPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-0-9_]+\/)?requests(\/)?([?#].*)?$/i.test(url);
    },

    /**
     * Is request page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isRequestPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return (
        !this.isNewRequestPage(url) &&
        /\/hc\/([a-z-0-9_]+\/)?requests\/[^/?#]+(\/)?([?#].*)?$/i.test(url)
      );
    },

    /**
     * Is new request page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isNewRequestPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-0-9_]+\/)?requests\/new(\/)?([?#].*)?$/i.test(url);
    },

    /**
     * Is community topic list page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isCommunityTopicListPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-0-9_]+\/)?community\/topics(\/)?([?#].*)?$/i.test(
        url
      );
    },

    /**
     * Is community topic page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isCommunityTopicPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-0-9_]+\/)?community\/topics\/[^\/?#]+(\/)?([?#].*)?$/i.test(
        url
      );
    },

    /**
     * Is community post list page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isCommunityPostListPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-0-9_]+\/)?community\/posts(\/)?([?#].*)?$/i.test(url);
    },

    /**
     * Is community post page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isCommunityPostPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return (
        !this.isNewCommunityPostPage(url) &&
        /\/hc\/([a-z-0-9_]+\/)?community\/posts\/[^\/?#]+(\/)?([?#].*)?$/i.test(
          url
        )
      );
    },

    /**
     * Is new community post page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isNewCommunityPostPage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-0-9_]+\/)?community\/posts\/new(\/)?([?#].*)?$/i.test(
        url
      );
    },

    /**
     * Is user profile page
     * @param {string?} pageUrl: page url
     * @return {boolean}
     */
    isUserProfilePage: function(pageUrl) {
      var url = pageUrl || window.location.href;
      return /\/hc\/([a-z-0-9_]+\/)?profiles\/[^\/?#]+(\/)?([?#].*)?$/i.test(
        url
      );
    },

    /**
     * Is end user
     * @param {object|undefined} user: user info object, getting from this.getCurrentUser()
     * @return {boolean}
     */
    isEndUser: function(user) {
      return !!(user && user.role && user.role === 'end-user');
    },

    /**
     * Has user tags
     * @param {object|undefined} user: user info object, getting from this.getCurrentUser()
     * @param {Array<string>} tags
     * @return {boolean}
     */
    hasUserTags: function(user, tags) {
      if (user && user.tags) {
        return this.findOne(tags, user.tags);
      }
      return false;
    },

    /**
     * @description determine if an array contains one or more items from another array.
     * @param {array} haystack the array to search.
     * @param {array} arr the array providing items to check for in the haystack.
     * @return {boolean} true|false if haystack contains at least one item from arr.
     */
    findOne: function(haystack, arr) {
      return arr.some(function(v) {
        return haystack.indexOf(v) >= 0;
      });
    },

    truncate: function(text, limit, clamp) {
      clamp = clamp || '...';
      var node = document.createElement('div');
      node.innerHTML = text;
      var content = node.textContent;
      return content.length > limit ? content.slice(0, limit) + clamp : content;
    },

    flatten: function(array) {
      if (!array.length) {
        return [];
      }
      return array.reduce(function(prev, curr) {
        return prev.concat(curr);
      });
    }
  };

  window.LotusUtils = LotusUtils;
})(jQuery, window, document);
