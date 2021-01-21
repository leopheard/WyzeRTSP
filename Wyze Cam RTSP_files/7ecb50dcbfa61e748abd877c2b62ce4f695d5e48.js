"use strict";

var closePopups = function closePopups() {
  var popups = document.querySelectorAll('[data-popup]');
  popups.forEach(function (popupEl) {
    if (popupEl.classList.contains(LotusConfig.css.activeClass)) {
      popupEl.classList.remove(LotusConfig.css.activeClass); 
    }
  });
};

var popupsInit = function popupsInit() {

  var popups = document.querySelectorAll('[data-popup]');
  var popupCloseElements = document.querySelectorAll('[data-popup-close]');
  var popupItems = document.querySelectorAll('[data-category-item]');
  var triggerProductsPopup = document.querySelector('[data-trigger-products]');
  var triggerServicesPopup = document.querySelector('[data-trigger-services]');
  var triggerIntegrationsPopup = document.querySelector('[data-trigger-integrations]');
  var productsPopup = document.querySelector('[data-popup="products"]');
  var servicesPopup = document.querySelector('[data-popup="services"]');
  var integrationssPopup = document.querySelector('[data-popup="integrations"]');
  triggerProductsPopup.addEventListener('click', function () {
    productsPopup.classList.add(LotusConfig.css.activeClass); 
  });
  triggerServicesPopup.addEventListener('click', function () {
    servicesPopup.classList.add(LotusConfig.css.activeClass); 
  });
  triggerIntegrationsPopup.addEventListener('click', function () {
    integrationssPopup.classList.add(LotusConfig.css.activeClass); 
  });
  popups.forEach(function (popup) {
    popup.addEventListener('click', function (e) {
      var popupContent = popup.querySelector('.popup__content');
      var isContentClicked = e.target === popupContent || popupContent.contains(e.target);

      if (!isContentClicked && popup.classList.contains(LotusConfig.css.activeClass)) {
        popup.classList.remove(LotusConfig.css.activeClass);
      }
    });
  });
  popupCloseElements.forEach(function (el) {
    el.addEventListener('click', closePopups);
  });
  popupItems.forEach(function (el) {
    el.addEventListener('click', function () {
      var parentEl = el.parentNode;
      var nestedSectionsBox = parentEl.querySelector('[data-sections-box]');
      var nestedSectionsList = parentEl.querySelector('[data-sections-list]');
      el.classList.toggle('category-card__main--is-open');

      if (el.classList.contains('category-card__main--is-open')) {
        nestedSectionsBox.style.height = nestedSectionsList.offsetHeight + 'px';
      } else {
        nestedSectionsBox.style.height = 0;
      }
    });
  });
};

var generateProductsPopup = function generateProductsPopup(categories) {
  return categories.map(function (category) {
    return "<li class=\"categories-list__item\">\n      <div class=\"category-card\">\n        <div class=\"category-card__main\" data-category-item >\n          <div class=\"category-card__img-box\">\n            <img data-lotus-image=\"".concat(category.id, "\" alt=\"category img\" class=\"category-card__img\">\n          </div>\n          <h2 class=\"category-card__title category-card__title--with-sections\">").concat(category.name, "</h2>\n        </div>\n        <div class=\"category-card__sections\" data-sections-box>\n          <ul class=\"category-card__sections-list\" data-sections-list>\n            ").concat(category.sections.length > 0 ? category.sections.map(function (section) {
      return "<li class=\"category-card__section-item\">\n                <a  href='".concat(section.html_url, "' class=\"category-card__section-link\">").concat(section.name, "</a>\n              </li>");
    }).join('') : '<li class="category-card__section-item">Empty</li>', "\n        </ul>\n        </div>\n      </div>\n\n    </li>");
  }).join('');
};

var generatePopup = function generatePopup(categories) {
  return categories.map(function (category) {
    return "<li class=\"categories-list__item\">\n      <a href=\"".concat(category.html_url, "\" class=\"category-card\">\n        <div class=\"category-card__main\" data-category-item >\n          <div class=\"category-card__img-box\">\n            <img data-lotus-image=\"").concat(category.id, "\" alt=\"category img\" class=\"category-card__img\">\n          </div>\n          <h2 class=\"category-card__title\">").concat(category.name, "</h2>\n        </div>\n      </a>\n    </li>");
  }).join('');
};

var generateCategoriesList = function generateCategoriesList(regularCategories) {
  return " <li class=\"block-list-item\">\n            <div class=\"block-list-item__link\" data-trigger-products>\n              <div class=\"block-list-item__square-wrapper\">\n                <div class=\"block-list-item__img-box\">\n                  <img data-lotus-image=\"products\" alt=\"\" class=\"block-list-item__img\">\n                </div>\n              </div>\n              <h2 class=\"h5 block-list-item__title\">".concat(LotusConfig.extraLevel.products.title, "</h2>\n            </div>\n          </li>\n          <li class=\"block-list-item\">\n            <div class=\"block-list-item__link\" data-trigger-services>\n              <div class=\"block-list-item__square-wrapper\">\n                <div class=\"block-list-item__img-box\">\n                  <img data-lotus-image='services' alt=\"\" class=\"block-list-item__img\">\n                </div>\n              </div>\n              <h2 class=\"h5 block-list-item__title\">").concat(LotusConfig.extraLevel.services.title, "</h2>\n            </div>\n          </li>\n          <li class=\"block-list-item\">\n            <div class=\"block-list-item__link\" data-trigger-integrations>\n              <div class=\"block-list-item__square-wrapper\">\n                <div class=\"block-list-item__img-box\">\n                  <img data-lotus-image='integrations' alt=\"\" class=\"block-list-item__img\">\n                </div>\n              </div>\n              <h2 class=\"h5 block-list-item__title\">").concat(LotusConfig.extraLevel.integrations.title, "</h2>\n            </div>\n          </li>\n          ").concat(regularCategories && regularCategories.length > 0 ? regularCategories.map(function (category) {
    return " <li class=\"block-list-item\">\n                <a class=\"block-list-item__link\" href=\"".concat(category.html_url, "\">\n                  <div class=\"block-list-item__square-wrapper\">\n                    <div class=\"block-list-item__img-box\">\n                      <img data-lotus-image=\"").concat(category.id, "\" alt=\"category image\" class=\"block-list-item__img\">\n                    </div>\n                  </div>\n                  <h2 class=\"h5 block-list-item__title\">").concat(category.name, "</h2>\n                </a>\n              </li>");
  }).join('') : '', "\n          <li class=\"block-list-item\">\n            <a class=\"block-list-item__link\" href=\"").concat(LotusConfig.helperLinks.community, "\">\n              <div class=\"block-list-item__square-wrapper\">\n                <div class=\"block-list-item__img-box\">\n                  <img data-lotus-image=\"community\" alt=\"category image\" class=\"block-list-item__img\">\n                </div>\n              </div>\n              <h2 class=\"h5 block-list-item__title\">Community</h2>\n            </a>\n          </li>\n          \n          ");
};