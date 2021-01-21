$(function() {
  SearchResultsFilters.init();
  HeroUnit.init();
  ScrollToTop.init();
  MenuToggle.init();
  CategoryAccordion.init();

  

  var menuTabs = document.querySelectorAll('[data-tab]');
  var menuTabsContent = document.querySelectorAll('[data-tab-content]');
  var btnSearch = document.querySelector('.header__btn-search');
  var headerSearchForm = document.querySelector('.header__search-bar');
  var footerInner = document.querySelector('[data-footer-inner]');

  var isHomePage = LotusUtils.isHomePage();

  if (isHomePage) {
    footerInner.classList.add('container-inner--small');
  }

  btnSearch.addEventListener('click', function() {
    headerSearchForm.classList.toggle(LotusConfig.css.hiddenClass);
  });

  document.addEventListener('click', function(e) {
    var target = e.target;
    var isSearchClicked = target === headerSearchForm || headerSearchForm.contains(target);
    var isBtnSearchClicked = target === btnSearch || btnSearch.contains(target);
    var isSearchBarVisible = !headerSearchForm.classList.contains(LotusConfig.css.hiddenClass);

    if(!isSearchClicked && !isBtnSearchClicked && isSearchBarVisible) {
      headerSearchForm.classList.add(LotusConfig.css.hiddenClass);
    }
  })

  var hideAllTabs = function () {
    menuTabs.forEach(function(tab){
      tab.classList.remove('active');
    });

    menuTabsContent.forEach(function(el) {
      el.style.display = 'none';
    });
  };

  menuTabs.forEach(function(tab) {
    tab.addEventListener('click', function () {
      hideAllTabs();
      var currentTabNumber = tab.getAttribute('data-tab');
      var currentTabContent = document.querySelector('[data-tab-content="' + currentTabNumber + '"]');
      tab.classList.add('active');
      currentTabContent.style.display = 'block';
    });
  })
});


$(window).on('apiDataFetched', function(e, data, options, fromStr) {
  var categoriesTree = ApiData.toCategoriesTree(data);
  var isHomePage = LotusUtils.isHomePage();

  if(isHomePage) {
    var productsPopupList = document.querySelector('[data-products-list]');
    var servicesList = document.querySelector('[data-services-list]');
    var categoriesBox = document.querySelector('[data-categories-box]');
    var integrationsBox = document.querySelector('[data-integrations-list]');

    var productCategories = [];
    var servicesCategories = [];
    var integrationsCategories = [];
    var regularCategories = [];
    

    categoriesTree.forEach(function(category) {
      if(LotusConfig.extraLevel.products.nestedCategories.includes(category.id)) {
        productCategories.push(category);
      } else if(LotusConfig.extraLevel.services.nestedCategories.includes(category.id)) {
        servicesCategories.push(category);
      } else if(LotusConfig.extraLevel.integrations.nestedCategories.includes(category.id)) {
        integrationsCategories.push(category);
      } else {
        regularCategories.push(category);
      }
    });


    var productsTemplate = generateProductsPopup(productCategories);
    var servicesTemplate = generatePopup(servicesCategories);
    var integrationsTemplate = generatePopup(integrationsCategories);
    var categoriesTemplate = generateCategoriesList(regularCategories);



    categoriesBox.innerHTML = categoriesTemplate;
    productsPopupList.innerHTML = productsTemplate;
    servicesList.innerHTML = servicesTemplate;
    integrationsBox.innerHTML = integrationsTemplate;
    LotusIcons.insertIcons();
    popupsInit();

  }
});

