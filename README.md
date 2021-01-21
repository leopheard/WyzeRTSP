
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>
  <meta charset="utf-8" />
  <!-- v19130 -->

  <title>Wyze Cam RTSP &ndash; Wyze</title>

Taken from:
<a href="https://wyzelabs.zendesk.com/hc/en-us/articles/360026245231-Wyze-Cam-RTSP">https://wyzelabs.zendesk.com/hc/en-us/articles/360026245231-Wyze-Cam-RTSP</a>
  

  <meta name="description" content="RTSP is not a stock feature with the Wyze Cam and is a beta feature that requires the installation of different firmware.  Using the RTSP..." /><meta property="og:image" content="https://theme.zdassets.com/theme_assets/2348443/5de81ad3f22765c9a60de50e0d4a6486009008be.png" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Wyze" />
<meta property="og:title" content="Wyze Cam RTSP" />
<meta property="og:description" content="RTSP is not a stock feature with the Wyze Cam and is a beta feature that requires the installation of different firmware.  Using the RTSP firmware will prevent the camera from supporting any future..." />
<meta property="og:url" content="https://wyzelabs.zendesk.com/hc/en-us/articles/360026245231-Wyze-Cam-RTSP" />
<link rel="canonical" href="https://wyzelabs.zendesk.com/hc/en-us/articles/360026245231-Wyze-Cam-RTSP" />
<link rel="alternate" hreflang="en" href="https://wyzelabs.zendesk.com/hc/en-us/articles/360026245231-Wyze-Cam-RTSP" />

  <link rel="stylesheet" media="all" href="//static.zdassets.com/hc/assets/application-ee975b5feb03f314da5c0cb5d1476896.css" id="stylesheet" />
  <link rel="stylesheet" type="text/css" href="//p13.zdassets.com/hc/theming_assets/2348443/360000784872/style.css?digest=360608590351">

  <link rel="shortcut icon" type="image/x-icon" href="//theme.zdassets.com/theme_assets/2348443/91aac1d975a809f156dfea2659f7da14469efd30.png" />

    <script>
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'UA-106919826-6', 'auto');
ga('send', 'pageview');
</script>
<script async src='https://www.google-analytics.com/analytics.js'></script>


  <meta name="viewport" content="width=device-width, initial-scale=1.0" />




<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css" />
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css">
<link rel="stylesheet" href="//cdn.jsdelivr.net/highlight.js/9.10.0/styles/github.min.css" />
<link rel="stylesheet" href="//cdn.jsdelivr.net/jquery.magnific-popup/1.0.0/magnific-popup.css" />
<script src="//cdn.jsdelivr.net/npm/jquery@3.2"></script>
<script src="//cdn.jsdelivr.net/jquery.magnific-popup/1.0.0/jquery.magnific-popup.min.js"></script>
<script src="//cdn.jsdelivr.net/highlight.js/9.10.0/highlight.min.js"></script>

<script>
  window.LotusConfig = {};
  LotusConfig.css = {
    activeClass: 'is-active',
    hiddenClass: 'is-hidden',
    fixedClass: 'is-fixed'
  };

  LotusConfig.helperLinks = {
    community: "https://wyze.com/community"
  };

 LotusConfig.images = {
   360000751451: "//theme.zdassets.com/theme_assets/2348443/71092a10c74d0d262a5e129a61be1c277bf5f093.png",
   360003105491: "//theme.zdassets.com/theme_assets/2348443/ba7c8bac25cce3d5702830fbd6b5a3be8d4d0ae3.png",
   360002629192: "//theme.zdassets.com/theme_assets/2348443/66ae89582a41ae7f0b7bdbe6fdb6563902a0f1a7.png",
   360003345871: "//theme.zdassets.com/theme_assets/2348443/235c3a2fc6af3a69cbd346fbb9ea72a7b61e7d37.png",
   360002648011: "//theme.zdassets.com/theme_assets/2348443/e8a9a9602fe2ce4c19aa5e221e8364d9c784f3be.jpg",
   360003082292: "//theme.zdassets.com/theme_assets/2348443/1ade5382a6501a506970529d9fa49555d410e6b9.png",
   360003105931: "//theme.zdassets.com/theme_assets/2348443/ee2e19a10a904185f11720bf6bc88b55187cc0d9.png",
   360003105951: "//theme.zdassets.com/theme_assets/2348443/8bf2c618cbde354f290d813e80deae8b75ceb1a0.png",
   360003082692: "//theme.zdassets.com/theme_assets/2348443/7a4a395cccd7092b72b094e6f5c92edc58e58dce.png",
   360004564051: "//theme.zdassets.com/theme_assets/2348443/5ce2f7ef1d03f597cd8bde34ef443eabf9e2f290.png",
   360004553152: "//theme.zdassets.com/theme_assets/2348443/e1a147d11991f80d646b65bd690162c85f5ff129.png",
   360003105451: "//theme.zdassets.com/theme_assets/2348443/08202a07f4eed10e79c07c0f80485d1a13be3a9e.png",
   360003105891: "//theme.zdassets.com/theme_assets/2348443/f39f8c73bd20cdaf6d99a50349bb780c0d5771e1.png",
   360004564091: "//theme.zdassets.com/theme_assets/2348443/ba7c8bac25cce3d5702830fbd6b5a3be8d4d0ae3.png",
   360001610132: "//theme.zdassets.com/theme_assets/2348443/4e32aff6b6ebaa3fb3ed897fb7dbd1d472684980.png",
   360004553112: "//theme.zdassets.com/theme_assets/2348443/bd57779018bc713e4df50a3805203792d91b018f.png",
   360004600171: "//theme.zdassets.com/theme_assets/2348443/34404e7f3465a7d374e9a98ab0d73382573cded6.png",
   360004591812: "//theme.zdassets.com/theme_assets/2348443/bd94b895d86e27cee4414150eaf8f26cec92a0ac.png",
   360004591792: "//theme.zdassets.com/theme_assets/2348443/98fd7f97c2da2e9b489803d3872fbeffbdf0cb8c.png",
   360004600151: "//theme.zdassets.com/theme_assets/2348443/a62acf9ccbda17962934c27ec25812cd74606205.png",
  360004661032: "//theme.zdassets.com/theme_assets/2348443/802f3c20d043cec6b43658af4e8b4676f8a27c6a.png",
   'products': "//theme.zdassets.com/theme_assets/2348443/abf81542de76814438a3688b60b9931bbd155097.png",
   'services': "//theme.zdassets.com/theme_assets/2348443/ef2e4128ae3fd39b6d400bd8f89a970676f6165c.png",
   'integrations': "//theme.zdassets.com/theme_assets/2348443/5ce2f7ef1d03f597cd8bde34ef443eabf9e2f290.png",
   'community' : "//theme.zdassets.com/theme_assets/2348443/af09333a9e0adb896ffc9607ae695c241661fe60.png",
   'default': "//theme.zdassets.com/theme_assets/2348443/2280731c847f35290c8c26100b1eaac936d1d595.jpg"

 };

 LotusConfig.extraLevel = {
   products: {
     title: 'Products',
     nestedCategories: [360004553112, 360004600151, 360004591792, 360004591812, 360004600171]
   },
   services: {
     title: 'Services',
     nestedCategories: [360003345871, 360003105891, 360002629192, 360004661032]
   },
   integrations: {
     title: 'Integrations',
     nestedCategories: [360003105931, 360003105951, 360003082692]
   }
 };

</script>
<script src="//theme.zdassets.com/theme_assets/2348443/bcbe5b4b18631e31b00f4fdf4f41a258014530fc.js"></script>
<script src="//theme.zdassets.com/theme_assets/2348443/f97c50330ed9efd058c2ed1f73d7ba636892cad7.js"></script>
<script src="//theme.zdassets.com/theme_assets/2348443/bf97f93e8d687b631b6800b883f5c45e871d1280.js"></script>
<script src="//theme.zdassets.com/theme_assets/2348443/3833ed5dca882a9ac60d52b056349597c4b2d111.js"></script>
<script src="//theme.zdassets.com/theme_assets/2348443/9bba5432303592c65680c3c1de2045c7220b9759.js"></script>
<script src="//theme.zdassets.com/theme_assets/2348443/4ea5b1828bb1938537d65bf61d2b8a31daba66b5.js"></script>
<script src="//theme.zdassets.com/theme_assets/2348443/10da0bd9663dbd0d723aceab2e50e6b987b41c94.js"></script>
<script src="//theme.zdassets.com/theme_assets/2348443/6d0184bd3d14f633596ecedce21b24f93a1371e0.js"></script>
<script src="//theme.zdassets.com/theme_assets/2348443/7e0b4b0a10782967a38f43bc04f4f7cf989c69f2.js"></script>
<script src="//theme.zdassets.com/theme_assets/2348443/85c3434717d88b33eb6bfedcae9e93ac3859b6a7.js"></script>
<script src="//theme.zdassets.com/theme_assets/2348443/932471bddeeefc8339bb1bba8dafadde65d93dc1.js"></script>
<script src="//theme.zdassets.com/theme_assets/2348443/2afcce82405a5631865a8a27e41c6357080c8a53.js"></script>
<script src="//theme.zdassets.com/theme_assets/2348443/8a2acb63bd2c2fface08fedda9afcc403d169919.js"></script>
<script src="//theme.zdassets.com/theme_assets/2348443/7ecb50dcbfa61e748abd877c2b62ce4f695d5e48.js"></script>
  
<script async src='/cdn-cgi/bm/cv/669835187/api.js'></script></head>
<body class="">
  
  

  <a class="skip-navigation" tabindex="1" href="#main-content">Skip to main content</a>
<div class="layout">
  <div class="layout__head">
    <div class="wyze-header">
      <div class="page-header header--layout-2 header__menu--position-1 header--full-width ox-sticky"
        data-role="OXsticky">
        <div class="header-wrapper">
          <div class="container">

            <div class="header__content-wrapper">
              
              <div class="header__content">
                <div class="logo__container"> <strong class="logo"> <img
                      src="https://wyze.com/media/athlete2/default/wyze-logo-white.svg" alt=""> <img class="retina"
                      src="https://wyze.com/media/athlete2/default/wyze-logo-white_1.svg" alt=""> </strong> </div>
                <div class="flex-left" data-move-mobile="header.main.left">
                  <div data-toggle-menu data-action="toggle-mobile-nav" class="action slide-out-menu--mobile">
                    <div class="hamburger-menu-icon-small"><span></span><span></span><span></span></div>
                    <span>Navigation</span>
                  </div>
                  <nav class="ox-megamenu ox-move-item ox-move-item-store.menu " data-action="navigation"
                    data-ox-mm-anim-type="fade">
                    <ul class="ox-megamenu-navigation">
                      <li class="level0  category-item first level-top ox-dropdown--simple" data-ox-mm-a-h="menu-left">
                        <a href="https://wyze.com/shop-wyze" class="level-top"><span class="name">Shop</span></a></li>
                      <li class="level0  category-item level-top ox-dropdown--simple" data-ox-mm-a-h="menu-right"><a
                          target="_blank" href="https://forums.wyzecam.com/" class="level-top"><span
                            class="name">Forums</span></a></li>
                      <li class="level0  category-item level-top ox-dropdown--simple" data-ox-mm-a-h="menu-left"><a
                          href="https://support.wyzecam.com/" class="level-top"><span class="name">Support</span></a>
                      </li>
                      <li class="level0  category-item level-top ox-dropdown--simple" data-ox-mm-a-h="menu-left"><a
                          href="https://wyze.com/inspired-by-wyze" class="level-top"><span class="name">Explore</span></a></li>
                      <li class="level0  category-item last level-top ox-dropdown--simple" data-ox-mm-a-h="menu-left">
                        <a target="_blank" href="https://services.wyze.com" class="level-top"><span
                            class="name">Services</span></a></li>
                    </ul>
                  </nav>
                </div>
                <div class="flex-right flex-row" data-move-mobile="header.main.right">
                  
                  <div class="header__search">
                    <form role="search" class="header__search-bar is-hidden" data-search="" data-instant="true" autocomplete="off" action="/hc/en-us/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" /><input type="search" name="query" id="query" placeholder="Search..." autocomplete="off" aria-label="Search..." />
<input type="submit" name="commit" value="Search" /></form>
                    <button type="button" role="button" class="header__btn-search">
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24">
                        <g fill="none" fill-rule="evenodd" transform="translate(-6 -2)">
                          <circle cx="19.889" cy="11.611" r="8" stroke="#ffffff" stroke-width="2"
                            transform="rotate(45 19.89 11.61)" />
                          <path fill="#ffffff" fill-rule="nonzero"
                            d="M9.34328327,15.6566781 L11.3432833,15.6566781 L11.3432833,25.6606781 C11.3432833,26.2106781 10.8992833,26.6566781 10.3432833,26.6566781 C9.79128327,26.6566781 9.34328327,26.2116781 9.34328327,25.6606781 L9.34328327,15.6566781 Z"
                            transform="rotate(45 10.343 21.157)" />
                        </g>
                      </svg>
                    </button>
                  </div>
                  
                  <a href="/hc/en-us/signin?return_to=https%3A%2F%2Fwyzelabs.zendesk.com%2Fhc%2Fen-us%2Farticles%2F360026245231-Wyze-Cam-RTSP" data-auth-action="signin"
                    style="display:block; margin: 0 0 0 20px;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 0C5.383 0 0 5.383 0 12C0 18.617 5.383 24 12 24C18.617 24 24 18.617 24 12C24 5.383 18.617 0 12 0ZM18.698 19.404C18.034 17.431 16.198 16 14 16H10C7.802 16 5.968 17.432 5.304 19.405C3.281 17.574 2 14.937 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 14.936 20.72 17.573 18.698 19.404Z"
                        fill="#F7FAFC" />
                      <path
                        d="M12 5C9.791 5 8 6.791 8 9V10C8 12.209 9.791 14 12 14C14.209 14 16 12.209 16 10V9C16 6.791 14.209 5 12 5Z"
                        fill="#F7FAFC" />
                    </svg>
                  </a>
                  
                  <div data-block="minicart" class="minicart-wrapper "><a class="action showcart"
                      href="https://wyze.com/checkout/cart/" data-bind="scope: 'minicart_content'"><svg
                        xmlns="http://www.w3.org/2000/svg" class="minicart-icon-1" version="1.1"
                        xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"
                        viewBox="0 0 24 24" height="24" width="24">
                        <g transform="matrix(1,0,0,1,0,0)">
                          <path
                            d="M 6,19.125h9.921c0.732,0,1.357-0.528,1.479-1.249l2.637-15.5c0.123-0.721,0.748-1.248,1.479-1.248H22.5"
                            stroke="#ffffff" fill="none" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                          <path
                            d="M 7.875,21.375c0.207,0,0.375,0.168,0.375,0.375s-0.168,0.375-0.375,0.375S7.5,21.957,7.5,21.75S7.668,21.375,7.875,21.375"
                            stroke="#ffffff" fill="none" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                          <path
                            d="M 15.375,21.375c0.207,0,0.375,0.168,0.375,0.375s-0.168,0.375-0.375,0.375S15,21.957,15,21.75S15.168,21.375,15.375,21.375"
                            stroke="#ffffff" fill="none" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                          <path
                            d="M 17.953,14.625H5.882c-1.376,0-2.576-0.937-2.91-2.272l-1.45-5.8c-0.101-0.402,0.144-0.809,0.546-0.91 c0.06-0.015,0.121-0.022,0.182-0.022h17.23"
                            stroke="#ffffff" fill="none" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                        </g>
                      </svg> <span class="counter qty"><span class="counter-number">
                          <!-- ko text: getCartParam('summary_count') -->
                          <!-- /ko --></span></span></a> </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div data-menu
        class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-front ox-dialog ox-slideout ox-slideout-left active ox-slideout-active"
        tabindex="-1" role="dialog" style="display: block;" aria-describedby="ui-id-3">
        <div class="ox-sections no-display ox-nav-sections ui-dialog-content ui-widget-content ox-modal-content"
          id="ui-id-3" style="display: block;" data-count-tabs="2">
          <div class="ox-section-items ox-nav-sections-items" role="tablist">
            <div data-tab="1" class="ox-section-item-title ox-nav-sections-item-title active" data-role="collapsible"
              role="tab" data-collapsible="true" aria-controls="store.menu" aria-selected="false" aria-expanded="true"
              tabindex="0"><a class="ox-nav-sections-item-switch" data-toggle="switch">Menu</a></div>
            <div data-tab-content="1" class="ox-section-item-content ox-nav-sections-item-content" id="store.menu"
              data-role="content" data-move-mobile="store.menu" role="tabpanel" aria-hidden="false">
              <nav class="ox-megamenu ox-move-item ox-move-item-store.menu " data-action="navigation"
                data-ox-mm-anim-type="fade">
                <ul class="ox-megamenu-navigation">
                  <li class="level0  category-item first level-top ox-dropdown--simple" data-ox-mm-a-h="menu-left"><a
                      href="/shop-wyze" class="level-top"><span class="name">Shop</span></a></li>
                  <li class="level0  category-item level-top ox-dropdown--simple" data-ox-mm-a-h="menu-right"><a
                      target="_blank" href="https://forums.wyzecam.com/" class="level-top"><span
                        class="name">Forums</span></a></li>
                  <li class="level0  category-item level-top ox-dropdown--simple" data-ox-mm-a-h="menu-left"><a
                      href="https://support.wyzecam.com/" class="level-top"><span class="name">Support</span></a></li>
                  <li class="level0  category-item level-top ox-dropdown--simple" data-ox-mm-a-h="menu-left"><a
                      href="/inspired-by-wyze" class="level-top"><span class="name">Explore</span></a></li>
                  <li class="level0  category-item last level-top ox-dropdown--simple" data-ox-mm-a-h="menu-left"><a
                      target="_blank" href="https://services.wyze.com" class="level-top"><span
                        class="name">Services</span></a></li>
                </ul>
              </nav>
            </div>
            <div data-tab="2" class="ox-section-item-title ox-nav-sections-item-title" data-role="collapsible"
              role="tab" data-collapsible="true" aria-controls="store.links" aria-selected="false" aria-expanded="false"
              tabindex="0"><a class="ox-nav-sections-item-switch" data-toggle="switch">Account</a>
            </div>
            <div data-tab-content="2" class="ox-section-item-content ox-nav-sections-item-content" id="store.links"
              data-role="content" data-move-mobile="store.links" role="tabpanel" aria-hidden="true"
              style="display: none;">
              <ul class="header__toplinks header links ox-move-item ox-move-item-store.links"
                data-bind="scope: 'customer'">
                
                <li><a href="https://wyze.com/checkout/">Checkout</a></li> <!-- ko if: customer().fullname -->
                <!-- /ko -->
                <!-- ko ifnot: customer().fullname -->
                
                <li><a href="/hc/en-us/signin?return_to=https%3A%2F%2Fwyzelabs.zendesk.com%2Fhc%2Fen-us%2Farticles%2F360026245231-Wyze-Cam-RTSP" data-auth-action="signin" style="display:block">Log In</a></li>
                

                
                <!-- /ko -->
              </ul>
            </div>
            <form role="search" class="mobile-menu__search" data-search="" data-instant="true" autocomplete="off" action="/hc/en-us/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" /><input type="search" name="query" id="query" placeholder="Search..." autocomplete="off" aria-label="Search..." />
<input type="submit" name="commit" value="Search" /></form>
            <div class="ox-section-item-title ox-nav-sections-item-title no-display" data-role="collapsible" role="tab"
              data-collapsible="true" aria-controls="store.settings" aria-selected="false" aria-expanded="false"
              tabindex="0" style="display: none;"><a class="ox-nav-sections-item-switch" data-toggle="switch"
                href="#store.settings">Settings</a></div>
            <div class="ox-section-item-content ox-nav-sections-item-content" id="store.settings" data-role="content"
              data-move-mobile="store.settings" role="tabpanel" aria-hidden="true" style="display: none;"> </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="layout__main">

  <main role="main">
    <div class="container article-page">
  <div class="container-inner">
    <div class="row clearfix">
      <div class="column column--sm-8">
        <ol class="breadcrumbs">
  
    <li title="Wyze">
      
        <a href="/hc/en-us">Wyze</a>
      
    </li>
  
    <li title="Cameras">
      
        <a href="/hc/en-us/categories/360004553112-Cameras">Cameras</a>
      
    </li>
  
    <li title="Wyze Cam v1/v2 &amp; Pan">
      
        <a href="/hc/en-us/sections/360011338871-Wyze-Cam-v1-v2-Pan">Wyze Cam v1/v2 &amp; Pan</a>
      
    </li>
  
    <li title="Wyze Cam Getting Started">
      
        <a href="/hc/en-us/sections/360001777851-Wyze-Cam-Getting-Started">Wyze Cam Getting Started</a>
      
    </li>
  
    <li title="Wyze Cam Features">
      
        <a href="/hc/en-us/sections/360004966992-Wyze-Cam-Features">Wyze Cam Features</a>
      
    </li>
  
</ol>

      </div>
      <div class="column column--sm-4">
        <div class="search-box search-box--small">
          <form role="search" class="search" data-search="" data-instant="true" autocomplete="off" action="/hc/en-us/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" /><input type="search" name="query" id="query" placeholder="Search" autocomplete="off" aria-label="Search" /></form>
        </div>
      </div>
    </div>


    <div class="article-container" id="main-content">
      <div class="article-container__column article-container__sidenav">
        <div data-sidenav='{"mobileBreakpoint": 991}'></div>
      </div>
      <div class="article-container__column article-container__article">
        <article class="article clearfix" data-article itemscope
                 itemtype="http://schema.org/Article">
          <header class="article-header">
            <h1 class="article__title" itemprop="name">
              
              Wyze Cam RTSP
            </h1>

            <div class="article-meta">
              <div class="article-meta__col article-meta__col--main">
                <div class="entry-info ">
                  
                    <div class="entry-info__avatar">
                      <div
                          class="avatar avatar--agent">
                        <img class="user-avatar user-avatar--default"
                            src="https://wyzelabs.zendesk.com/system/photos/360073173511/Me.jpg" alt="Avatar">
                      </div>
                    </div>
                  
                  <div class="entry-info__content">
                    
                      <b class="author">
                        
                        Matthew
                        
                      </b>
                    
                    <div class="meta"><time datetime="2021-01-20T18:04:29Z" title="2021-01-20T18:04:29Z" data-datetime="calendar">January 20, 2021 18:04</time></div>
                  </div>
                </div>
              </div>
              
            </div>
          </header>

          <div class="article__body markdown" itemprop="articleBody">
            <div class="callout">RTSP is not a stock feature with the Wyze Cam and is a beta feature that requires the installation of different firmware.&nbsp;&nbsp;Using the RTSP firmware will prevent the camera from supporting any future functions or features in the Wyze app.<br /><br /></div>
<h2><strong>What is RTSP?</strong></h2>
<p>Real Time Streaming Protocol (RTSP) is a standard network protocol designed to&nbsp;establish and control media sessions between endpoints. Due to hardware&nbsp;limitation, RTSP could only be achieved as a separate firmware version for both Wyze Cam v2&nbsp;and Wyze Cam Pan.</p>
<h2><strong>Support for RTSP</strong></h2>
<p>We don't have the resources to keep developing two branches of firmware for Wyze Cam v2 and Wyze Cam Pan. <span>At this time, we are not committing to ongoing maintenance for RTSP firmware. We will deliver security updates as needed.</span></p>
<section class="pdf_page">
<div class="textlayer">
<h2><strong>How to install the RTSP Firmware</strong></h2>
<ol>
<li>Download the <a href="https://download.wyzecam.com/firmware/rtsp/demo_v2_rtsp_4.28.4.49.bin.zip" target="_blank" rel="noopener">Wyze Cam v2 RTSP file</a>, or the <a href="https://download.wyzecam.com/firmware/rtsp/demo_Pan_rtsp_4.29.4.49.bin.zip" target="_blank" rel="noopener">Wyze Cam Pan RTSP file</a> (Wyze Cam v3 RTSP is not available yet and we do not have an estimate for when it will be ready but it is planned for later).</li>
<li>Unzip the file, rename the contents to '<strong>demo.bin</strong>', and transfer them to a microSD card's root directory.</li>
<li>Unplug your Wyze Cam and insert the prepared microSD card.<br /><img src="/hc/article_attachments/360042364711/microSD__1_.png" alt="microSD__1_.png" width="385" height="267" /></li>
<li>Hold the camera's <strong>Setup</strong> button while plugging in the USB cable and continue to hold the <strong>Setup</strong> button until the light turns solid blue.<br /><img src="/hc/article_attachments/360042364751/__4__1_.png" alt="__4__1_.png" /><img src="/hc/article_attachments/360042350392/setup-button.jpg" alt="setup-button.jpg" width="241" height="200" /></li>
<li>Once the light is solid blue, release the <strong>Setup</strong> button and wait for 3-4 minutes. The camera will reboot, and the status light will change during this time.<br />
<ul>
<li><em>Note: The "Solid Blue" in this case is not the same as the one normally seen on the camera. Instead, both the blue and yellow LEDs will be on at once, making it appear to be a lighter blue.<br /><br /></em></li>
</ul>
</li>
<li>Once this process is finished, you should see the Wyze Cam in your Home tab without going through the setup process as long as it was previously paired with your account.</li>
</ol>
<h2><strong>How to start using RTSP</strong></h2>
<ol>
<li>Once your Wyze Cam is back online, you can access the RTSP function from the live stream (Wyze app version 2.3 or later) under <strong>Settings -&gt; Advanced Settings -&gt; RTSP</strong></li>
<li>The app will automatically check if the installed firmware version is RTSP compatible. If not, please repeat the installation process above.</li>
<li>Next, turn on the <strong>RTSP toggle</strong></li>
<li>You'll be prompted to set up a username and password for this Wyze Cam. Both the username and password should be 4 – 10 characters without special characters (only a-z, and 0-9)
<ul>
<li>PLEASE NOTE - This username and password is unique to just this camera. Please either use something that's easy to remember or take note of them somewhere, as these will be needed to access the camera's stream via RTSP</li>
</ul>
</li>
<li>Click “<strong>Generate URL</strong>”, and the RTSP URL will show on the next screen. Use this for streaming through any RTSP compatible player on the same local network as the Wyze Cam.</li>
</ol>
</div>
</section>
          </div>

          <div class="article__attachments">
            
          </div>

        </article>

        <footer class="article-footer clearfix">
          
            <div class="article-vote">
              <span
                    class="article-vote-question">Was this article helpful?</span>
              <div class="article-vote-controls">
                <button type="button" class="btn article-vote-controls__item article-vote-controls__item--up" data-helper="vote" data-item="article" data-type="up" data-id="360026245231" data-upvote-count="3206" data-vote-count="3879" data-vote-sum="2533" data-vote-url="/hc/en-us/articles/360026245231/vote" data-value="null" data-label="3206 out of 3879 found this helpful" data-selected-class="article-vote-controls__item--voted" aria-label="This article was helpful" aria-pressed="false">
                  <span class="fa fa-thumbs-up"></span>
                </button>
                <button type="button" class="btn article-vote-controls__item article-vote-controls__item--down" data-helper="vote" data-item="article" data-type="down" data-id="360026245231" data-upvote-count="3206" data-vote-count="3879" data-vote-sum="2533" data-vote-url="/hc/en-us/articles/360026245231/vote" data-value="null" data-label="3206 out of 3879 found this helpful" data-selected-class="article-vote-controls__item--voted" aria-label="This article was not helpful" aria-pressed="false">
                  <span class="fa fa-thumbs-down"></span>
                </button>
              </div>
              <small class="article-vote-count">
                <span class="article-vote-label" data-helper="vote" data-item="article" data-type="label" data-id="360026245231" data-upvote-count="3206" data-vote-count="3879" data-vote-sum="2533" data-vote-url="/hc/en-us/articles/360026245231/vote" data-value="null" data-label="3206 out of 3879 found this helpful">3206 out of 3879 found this helpful</span>
              </small>
            </div>
          
        </footer>

        

        <div class="article-more-questions">Have more questions? <a href="/hc/en-us/requests/new">Submit a request</a></div>

        

        
      </div>
      <div class="article-container__column article-container__toc">
        <div data-toc='{"mobileBreakpoint": 991}'></div>
      </div>
      
        <div
            class="article-container__column article-container__sidebar article-sidebar">
          <section class="section-articles">
            <h3 class="section-articles__title">Articles in this section</h3>
            <ul class="section-articles__list">
              
                <li class="section-articles__item">
                  <a href="/hc/en-us/articles/360032627212-Wyze-Cam-and-Wyze-Cam-Pan-Features"
                    class="section-articles__link ">Wyze Cam and Wyze Cam Pan Features</a>
                </li>
              
                <li class="section-articles__item">
                  <a href="/hc/en-us/articles/360029775472-View-a-Live-Stream"
                    class="section-articles__link ">View a Live Stream</a>
                </li>
              
                <li class="section-articles__item">
                  <a href="/hc/en-us/articles/360030986591-Notifications"
                    class="section-articles__link ">Notifications</a>
                </li>
              
                <li class="section-articles__item">
                  <a href="/hc/en-us/articles/360030119251-Event-Recording-and-Schedule"
                    class="section-articles__link ">Event Recording and Schedule</a>
                </li>
              
                <li class="section-articles__item">
                  <a href="/hc/en-us/articles/360030147091-Detection-Settings-and-Zones"
                    class="section-articles__link ">Detection Settings and Zones</a>
                </li>
              
                <li class="section-articles__item">
                  <a href="/hc/en-us/articles/360029809312-Motion-Tagging"
                    class="section-articles__link ">Motion Tagging</a>
                </li>
              
                <li class="section-articles__item">
                  <a href="/hc/en-us/articles/360029811772-Events"
                    class="section-articles__link ">Events</a>
                </li>
              
                <li class="section-articles__item">
                  <a href="/hc/en-us/articles/360030119511-Night-Vision"
                    class="section-articles__link ">Night Vision</a>
                </li>
              
                <li class="section-articles__item">
                  <a href="/hc/en-us/articles/360030739272-Turning-your-Camera-on-off"
                    class="section-articles__link ">Turning your Camera on/off</a>
                </li>
              
                <li class="section-articles__item">
                  <a href="/hc/en-us/articles/360035598572-2-Way-Audio"
                    class="section-articles__link ">2-Way Audio</a>
                </li>
              
            </ul>
            
              <a href="/hc/en-us/sections/360004966992-Wyze-Cam-Features"
                class="btn btn--default">See more</a>
            
          </section>
        </div>
      
    </div>
  </div>
</div>
  </main>

  </div>
<div class="layout__footer">
  
  <footer class="footer container">
    <div class="container-inner footer__inner" data-footer-inner>
      <div class="footer__col copyright">
        <p>© 2020 Wyze Labs, Inc Amazon, Alexa, Echo Spot and all related logos are trademarks of Amazon.com, Inc. or its affiliates. Google, Inc., Google, Google Home, Google Home Mini, G logo, The Google Assistant built-in, and related marks and logos are trademarks of Google, Inc. All rights reserved.</p>
        
          <p>Theme by <a href="https://www.lotusthemes.com" target="_blank">Lotus
              Themes</a></p>
        
      </div>
      <div class="footer__col footer__col--social-links">
        
          <a href="https://www.facebook.com/WyzeCam/" target="_blank" class="footer-social-link fab fa-facebook"></a>
        
        
          <a href="hhttps://www.instagram.com/wyze/" target="_blank" class="footer-social-link fab fa-instagram"></a>
        
        
          <a href="https://twitter.com/wyzecam" target="_blank" class="footer-social-link fab fa-twitter"></a>
        
        
          <a href="ttps://www.youtube.com/channel/UCeMXXZCPez2yOSYBceHWm-Q" target="_blank" class="footer-social-link fab fa-youtube"></a>
        
        
          <a href="https://medium.com/wyzelabs" target="_blank" class="footer-social-link fab fa-medium-m"></a>
        
        
      </div>
    </div>
  </footer>

</div>
</div>

<button class="scroll-to-top fa fa-angle-up" data-scroll-to-top></button>
<script type="text/javascript" src="https://cdn.solvvy.com/deflect/customization/wyze/solvvy.js" async></script>




  <!-- / -->

  
  <script src="//static.zdassets.com/hc/assets/en-us.770d7ad900cb4da7170c.js"></script>
  <script src="https://wyzelabs.zendesk.com/auth/v2/host.js" data-brand-id="360000784872" data-return-to="https://wyzelabs.zendesk.com/hc/en-us/articles/360026245231-Wyze-Cam-RTSP" data-theme="hc" data-locale="en-us" data-auth-origin="360000784872,false,true"></script>

  <script type="text/javascript">
  /*

    Greetings sourcecode lurker!

    This is for internal Zendesk and legacy usage,
    we don't support or guarantee any of these values
    so please don't build stuff on top of them.

  */

  HelpCenter = {};
  HelpCenter.account = {"subdomain":"wyzelabs","environment":"production","name":"Wyze"};
  HelpCenter.user = {"identifier":"da39a3ee5e6b4b0d3255bfef95601890afd80709","email":null,"name":null,"role":"anonymous","avatar_url":"https://assets.zendesk.com/hc/assets/default_avatar.png","is_admin":false,"organizations":[],"groups":[]};
  HelpCenter.internal = {"asset_url":"//static.zdassets.com/hc/assets/","web_widget_asset_composer_url":"https://static.zdassets.com/ekr/snippet.js","current_session":{"locale":"en-us","csrf_token":"hc:hcobject:server:I0Q4qxs0i3A2Mz+sLyktx+eBR/ZyNAK0IpHVN/w1dy70Gu/qLuTh55SHrCP5pROwqjQXow1QnSVn6v5Sq1zchw==","shared_csrf_token":null},"settings":{},"usage_tracking":{"event":"article_viewed","data":"BAh7CDoLbG9jYWxlSSIKZW4tdXMGOgZFVDoPYXJ0aWNsZV9pZGwrCG+IPNNTADoKX21ldGF7CzoPYWNjb3VudF9pZGkDm9UjOhNoZWxwX2NlbnRlcl9pZGwrCB+prtFTADoNYnJhbmRfaWRsKwjoCbjRUwA6DHVzZXJfaWQwOhN1c2VyX3JvbGVfbmFtZUkiDkFOT05ZTU9VUwY7BlQ7AEkiCmVuLXVzBjsGVA==--f561e03d4f902186e2c5d78d8e48822d66ba432e","url":"https://wyzelabs.zendesk.com/hc/tracking/events?locale=en-us"},"current_record_id":"360026245231","current_record_url":"/hc/en-us/articles/360026245231-Wyze-Cam-RTSP","current_record_title":"Wyze Cam RTSP","search_results_count":null,"current_text_direction":"ltr","current_brand":{"account_id":2348443,"brand_id":360000784872,"brand_url":"https://wyzelabs.zendesk.com","url":"https://wyzelabs.zendesk.com/api/v2/brands/360000784872.json","name":"Wyze","logo":"","subdomain":"wyzelabs","host_mapping":"support.wyzecam.com","help_center_state":"enabled","ticket_form_ids":null,"active":true,"default":true,"has_help_center":true,"created_at":"2018-06-14T19:03:39Z","updated_at":"2020-10-05T18:48:14Z","id":360000784872,"route_id":2315417},"current_brand_url":"https://wyzelabs.zendesk.com","current_host_mapping":"support.wyzecam.com","current_path":"/hc/en-us/articles/360026245231-Wyze-Cam-RTSP","authentication_domain":"https://wyzelabs.zendesk.com","show_autocomplete_breadcrumbs":true,"rollbar_config":{"enabled":true,"endpoint":"https://rollbar-us.zendesk.com/api/1/item/","accessToken":"731a5a953e9a4b7ab6cac9623f50c732","captureUncaught":true,"captureUnhandledRejections":true,"payload":{"environment":"production","client":{"javascript":{"source_map_enabled":true,"code_version":"290eeb4fe644a9c04fb9a4a1f06c44f5a2fbfd9c","guess_uncaught_frames":true}}}},"user_info_changing_enabled":false,"has_user_profiles_enabled":false,"has_end_user_attachments":true,"user_aliases_enabled":false,"has_anonymous_kb_voting":true,"has_multi_language_help_center":true,"mobile_device":false,"mobile_site_enabled":false,"show_at_mentions":false,"embeddables_config":{"embeddables_web_widget":true,"embeddables_connect_ipms":false},"base_domain":"zendesk.com","answer_bot_subdomain":"static","manage_content_url":"https://wyzelabs.zendesk.com/hc/en-us","arrange_content_url":"https://wyzelabs.zendesk.com/hc/admin/arrange_contents?locale=en-us","general_settings_url":"https://wyzelabs.zendesk.com/hc/admin/general_settings?locale=en-us","user_segments_url":"https://wyzelabs.zendesk.com/knowledge/user_segments?brand_id=360000784872","has_gather":true,"has_community_enabled":false,"has_community_badges":false,"has_user_segments":true,"has_answer_bot_web_form_enabled":true,"has_answer_bot_web_form_modal_v2":false,"billing_url":"/access/return_to?return_to=https://wyzelabs.zendesk.com/admin/billing/subscription","has_answer_bot":true,"has_block_answer_bot_embeddable":false,"answer_bot_management_url":"/access/return_to?return_to=https://wyzelabs.zendesk.com/agent/admin/answer_bot","is_account_owner":false,"theming_cookie_key":"hc-da39a3ee5e6b4b0d3255bfef95601890afd807091-preview","is_preview":false,"has_guide_user_segments_search":true,"has_alternate_templates":true,"arrange_articles_url":"https://wyzelabs.zendesk.com/knowledge/arrange?brand_id=360000784872","article_verification_url":"https://wyzelabs.zendesk.com/knowledge/verification?brand_id=360000784872","has_article_verification":true,"guide_language_settings_url":"https://wyzelabs.zendesk.com/hc/admin/language_settings?locale=en-us","docs_importer_url":"https://wyzelabs.zendesk.com/knowledge/import_articles?brand_id=360000784872","community_badges_url":"https://wyzelabs.zendesk.com/knowledge/community_badges?brand_id=360000784872","community_settings_url":"https://wyzelabs.zendesk.com/knowledge/community_settings?brand_id=360000784872","gather_plan_state":"subscribed","search_settings_url":"https://wyzelabs.zendesk.com/knowledge/search_settings?brand_id=360000784872","has_multibrand_search_in_plan":true,"theming_api_version":2,"has_pci_credit_card_custom_field":true,"current_brand_id":360000784872,"help_center_restricted":false,"current_brand_active":true,"is_assuming_someone_else":false,"flash_messages":[]};
</script>

  
  <script src="//static.zdassets.com/hc/assets/hc_enduser-b22f0f5a07c6bb005fca0945bf952797.js"></script>
  <script type="text/javascript" src="//p13.zdassets.com/hc/theming_assets/2348443/360000784872/script.js?digest=360608590351"></script>
<script type="text/javascript">(function(){window['__CF$cv$params']={r:'614d77b2ff03ec15',m:'3e7c63a5c6743ae3c861afc5b6348f8f184f76ad-1611194699-1800-AZXB+zxWrs5RoxSN+6s16yyk6X0cnk6qxyz3p1M36z3RXIbI6n2LVrH6v46DYSsyAzpqNRigQMhc+VD3l89pKzoCE4utea1qguusAcmQYZmzTNQQxornP9e9r/+f1j0J62soLRQUUs0XmYLlbEC+kNt9U8RhoaK+3TjN4GLQBykp',s:[0x460ceec828,0x459de6d8cc],}})();</script></body>
</html>