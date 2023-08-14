module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/home-slider","2":"components/i-breadcrumb","3":"components/i-card","4":"components/i-card2","5":"components/i-pagination","6":"components/image-card","7":"components/image-list","8":"components/image-modal","9":"components/links-list","10":"components/media-list","11":"components/news-content","12":"components/news-gallery","13":"components/news-list","14":"pages/about/about-us","15":"pages/about/chairman/_id","16":"pages/about/chairman/index","17":"pages/about/history","18":"pages/about/organization","19":"pages/activity/event/_id","20":"pages/activity/event/index","21":"pages/activity/organizations/_id","22":"pages/activity/organizations/index","23":"pages/activity/project","24":"pages/charity","25":"pages/gallery/_id","26":"pages/gallery/index","27":"pages/index","28":"pages/links/index","29":"pages/media/index","30":"pages/news/_id","31":"pages/news/index","32":"pages/search"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return nuxtOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return options; });
/* unused harmony export localeMessages */
const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {
    "PREFIX": "prefix",
    "PREFIX_EXCEPT_DEFAULT": "prefix_except_default",
    "PREFIX_AND_DEFAULT": "prefix_and_default",
    "NO_PREFIX": "no_prefix"
  },
  REDIRECT_ON_OPTIONS: {
    "ALL": "all",
    "ROOT": "root",
    "NO_PREFIX": "no prefix"
  }
};
const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined
};
const options = {
  vueI18n: {
    "fallbackLocale": "ky",
    "messages": {
      "en": {
        "search": "Search",
        "otherNews": "Other news",
        "allNews": "All news",
        "requisites": "Details",
        "contacts": "Contacts",
        "address": "The fund for the development of spiritual culture \"Iyman\" under the Administration of the President of the Kyrgyz Republic <br/> <strong>Erkindik blvd. 56 <br/> 720040 Bishkek city <br/> Kyrgyz Republic</strong>'",
        "rights": "All rights reserved",
        "administration": "The Administration of the President of the Kyrgyz Republic",
        "fondDesc": "The fund for the development of spiritual culture",
        "donate": "Donation",
        "gallery": "Gallery",
        "allPhotos": "All photos",
        "links": "Links",
        "allLinks": "All links",
        "news": "News",
        "main": "Home",
        "aboutFond": "About us",
        "chairman": "Chairman",
        "exChairman": " exChairmans”",
        "historyCreation": "History of creation",
        "orgStructure": "Organizational structure",
        "activity": "Activity",
        "event": "Events",
        "activity_events": "Event",
        "allEvent": "All events",
        "internationalCoop": "International cooperation",
        "orgs": "Organizations",
        "projectActivities": "Project Activities ",
        "charity": "Charity",
        "aboutFrdk": "About foundation",
        "title": "The fund for the development of spiritual culture \"Iyman\"",
        "follow_us": "FOLLOW US",
        "media": "Media",
        "allMedia": "All media",
        "searchResult": "Search results",
        "chairman_zam": "Deputy Chairman"
      },
      "ky": {
        "search": "Издөө",
        "otherNews": "Башка жаңылыктар",
        "allNews": "Бардык жаңылыктар",
        "requisites": "Реквизиттер",
        "contacts": "Байланыш",
        "address": "Кыргыз Республикасынын Администрациясынын алдындагы «Ыйман» диний маданиятты өнүктүрүү фонду» <br/> <strong>Эркиндик бул., 56 <br/> 720040 Бишкек шаары <br/> Кыргыз Республикасы</strong>",
        "rights": "Бардык укуктар корголгон",
        "administration": "Кыргыз Республикасынын Президентинин Администрациясы",
        "fondDesc": "диний маданиятты өнүктүрүү фонду",
        "donate": "Кайрымдуулук үчүн",
        "gallery": "Галерея",
        "allPhotos": "Бардык сүрөттөр",
        "links": "Шилтемелер",
        "allLinks": "Бардык шилтемелер",
        "news": "Жаңылыктар",
        "main": "Башкы бет",
        "aboutFond": "«Ыйман» фонду жөнүндө",
        "chairman": "Башкармалыктын төрагасы",
        "exChairman": "“Ыйман” фондунун мурунку жетекчилери",
        "historyCreation": "Түзүлүү тарыхы",
        "orgStructure": "Фонддун структурасы",
        "activity": "Ишмердүүлүгү",
        "event": "Иш-чаралар",
        "activity_events": "Мероприятия",
        "allEvent": "Башка иш-чаралар",
        "internationalCoop": "Эл аралык кызматташуу",
        "orgs": "Уюмдар",
        "projectActivities": "Долбоорлордун ишмердүүлүгү",
        "charity": "Кайрымдуулук",
        "aboutFrdk": "«Ыйман» фонду жөнүндө",
        "title": "Ыйман - руханий маданиятты өнүктүрүү фонду",
        "follow_us": "Катталуу үчүн",
        "media": "Медиа",
        "allMedia": "Бардык видеолор",
        "searchResult": "Издөөнүн жыйынтыгы",
        "chairman_zam": "Төраганын орун басары"
      },
      "ru": {
        "search": "Поиск",
        "otherNews": "Другие новости",
        "allNews": "Все новости",
        "requisites": "Реквизиты",
        "contacts": "Контакты",
        "address": "«Фонд развития духовной культуры «Ыйман» при Администрации Президента Кыргызской Республики <br/> <strong>бул. Эркиндик, 56 <br/> 720040 г. Бишкек <br/> Кыргызская Республика</strong>",
        "rights": "Все права защишены",
        "administration": "Администрация Президента Кыргызской Республики",
        "fondDesc": "фонд развития духовной культуры",
        "donate": "Пожертвовать",
        "gallery": "Галерея",
        "allPhotos": "Все Фотографии",
        "links": "Ссылки",
        "allLinks": "Все Ссылки",
        "news": "Новости",
        "main": "Главная",
        "aboutFond": "О ФРДК «Ыйман»",
        "chairman": "Председатель правления",
        "exChairman": "Экс Главы ФРДК “Ыйман”",
        "historyCreation": "История создания",
        "orgStructure": "Организационная структура",
        "activity": "Деятельность",
        "event": "Мероприятие",
        "activity_events": "Мероприятия",
        "allEvent": "Другие мероприятия",
        "internationalCoop": "Международное сотрудничество",
        "orgs": "Организации",
        "projectActivities": "Проектная деятельность",
        "charity": "Благотворительность",
        "aboutFrdk": "О ФРДК «Ыйман»",
        "title": "Ыйман - руханий маданиятты онуктуруу фонду",
        "follow_us": "Подписывайтесь на нас",
        "media": "Медиа",
        "allMedia": "Все Видео",
        "searchResult": "Результаты поиска",
        "chairman_zam": "Заместитель председателя правления"
      }
    }
  },
  vueI18nLoader: false,
  locales: ["ky", "ru", "en"],
  defaultLocale: "ky",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  differentDomains: false,
  baseUrl: "",
  vuex: {
    "moduleName": "i18n",
    "syncRouteParams": true
  },
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{
    "code": "ky"
  }, {
    "code": "ru"
  }, {
    "code": "en"
  }],
  localeCodes: ["ky", "ru", "en"],
  additionalMessages: []
};
const localeMessages = {};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return parseAcceptLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return matchBrowserLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getLocaleDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getLocalesRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createLocaleFromRouteGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getLocaleCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return setLocaleCookie; });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


/** @typedef {import('../../types/internal').ResolvedOptions} ResolvedOptions */

/**
 * Formats a log message, prefixing module's name to it.
 *
 * @param {string} text
 * @return {string}
 */

function formatMessage(text) {
  return `[@nuxtjs/i18n] ${text}`;
}
/**
 * Parses locales provided from browser through `accept-language` header.
 *
 * @param {string} input
 * @return {string[]} An array of locale codes. Priority determined by order in array.
 */

function parseAcceptLanguage(input) {
  // Example input: en-US,en;q=0.9,nb;q=0.8,no;q=0.7
  // Contains tags separated by comma.
  // Each tag consists of locale code (2-3 letter language code) and optionally country code
  // after dash. Tag can also contain score after semicolon, that is assumed to match order
  // so it's not explicitly used.
  return input.split(',').map(tag => tag.split(';')[0]);
}
/**
 * Find locale code that best matches provided list of browser locales.
 *
 * @param {ResolvedOptions['normalizedLocales']} appLocales The user-configured locales that are to be matched.
 * @param {readonly string[]} browserLocales The locales to match against configured.
 * @return {string | undefined}
 */

function matchBrowserLocale(appLocales, browserLocales) {
  /** @type {{ code: string, score: number }[]} */
  const matchedLocales = []; // Normalise appLocales input

  /** @type {{ code: string, iso: string }[]} */

  const normalizedAppLocales = [];

  for (const appLocale of appLocales) {
    const {
      code
    } = appLocale;
    const iso = appLocale.iso || code;
    normalizedAppLocales.push({
      code,
      iso
    });
  } // First pass: match exact locale.


  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = normalizedAppLocales.find(appLocale => appLocale.iso.toLowerCase() === browserCode.toLowerCase());

    if (matchedLocale) {
      matchedLocales.push({
        code: matchedLocale.code,
        score: 1 - index / browserLocales.length
      });
      break;
    }
  } // Second pass: match only locale code part of the browser locale (not including country).


  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split('-')[0].toLowerCase();
    const matchedLocale = normalizedAppLocales.find(appLocale => appLocale.iso.split('-')[0].toLowerCase() === languageCode);

    if (matchedLocale) {
      // Deduct a thousandth for being non-exact match.
      matchedLocales.push({
        code: matchedLocale.code,
        score: 0.999 - index / browserLocales.length
      });
      break;
    }
  } // Sort the list by score (0 - lowest, 1 - highest).


  if (matchedLocales.length > 1) {
    matchedLocales.sort((localeA, localeB) => {
      if (localeA.score === localeB.score) {
        // If scores are equal then pick more specific (longer) code.
        return localeB.code.length - localeA.code.length;
      }

      return localeB.score - localeA.score;
    });
  }

  return matchedLocales.length ? matchedLocales[0].code : undefined;
}
/**
 * Get locale code that corresponds to current hostname
 *
 * @param  {ResolvedOptions['normalizedLocales']} locales
 * @param  {import('http').IncomingMessage | undefined} req
 * @return {string} Locale code found if any
 */

function getLocaleDomain(locales, req) {
  /** @type {string | undefined} */
  let host;

  if (false) {} else if (req) {
    const detectedHost = req.headers['x-forwarded-host'] || req.headers.host;
    host = Array.isArray(detectedHost) ? detectedHost[0] : detectedHost;
  }

  if (host) {
    const matchingLocale = locales.find(l => l.domain === host);

    if (matchingLocale) {
      return matchingLocale.code;
    }
  }

  return '';
}
/**
 * Creates a RegExp for route paths
 *
 * @param  {readonly string[]} localeCodes
 * @return {RegExp}
 */

function getLocalesRegex(localeCodes) {
  return new RegExp(`^/(${localeCodes.join('|')})(?:/|$)`);
}
/**
 * Creates getter for getLocaleFromRoute
 *
 * @param  {readonly string[]} localeCodes
 * @param  {Pick<ResolvedOptions, 'routesNameSeparator' | 'defaultLocaleRouteNameSuffix'>} options
 */

function createLocaleFromRouteGetter(localeCodes, {
  routesNameSeparator,
  defaultLocaleRouteNameSuffix
}) {
  const localesPattern = `(${localeCodes.join('|')})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`);
  const regexpPath = getLocalesRegex(localeCodes);
  /**
   * Extract locale code from given route:
   * - If route has a name, try to extract locale from it
   * - Otherwise, fall back to using the routes'path
   * @param  {import('vue-router').Route} route
   * @return {string} Locale code found if any
   */

  const getLocaleFromRoute = route => {
    // Extract from route name
    if (route.name) {
      const matches = route.name.match(regexpName);

      if (matches && matches.length > 1) {
        return matches[1];
      }
    } else if (route.path) {
      // Extract from path
      const matches = route.path.match(regexpPath);

      if (matches && matches.length > 1) {
        return matches[1];
      }
    }

    return '';
  };

  return getLocaleFromRoute;
}
/**
 * @param {import('http').IncomingMessage | undefined} req
 * @param {{ useCookie: boolean, cookieKey: string, localeCodes: readonly string[] }} options
 * @return {string | undefined}
 */

function getLocaleCookie(req, {
  useCookie,
  cookieKey,
  localeCodes
}) {
  if (useCookie) {
    let localeCode;

    if (false) {} else if (req && typeof req.headers.cookie !== 'undefined') {
      const cookies = req.headers && req.headers.cookie ? Object(cookie__WEBPACK_IMPORTED_MODULE_0__["parse"])(req.headers.cookie) : {};
      localeCode = cookies[cookieKey];
    }

    if (localeCode && localeCodes.includes(localeCode)) {
      return localeCode;
    }
  }
}
/**
 * @param {string} locale
 * @param {import('http').ServerResponse | undefined} res
 * @param {{ useCookie: boolean, cookieDomain: string | null, cookieKey: string, cookieSecure: boolean, cookieCrossOrigin: boolean}} options
 */

function setLocaleCookie(locale, res, {
  useCookie,
  cookieDomain,
  cookieKey,
  cookieSecure,
  cookieCrossOrigin
}) {
  if (!useCookie) {
    return;
  }

  const date = new Date();
  /** @type {import('cookie').CookieSerializeOptions} */

  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: '/',
    sameSite: cookieCrossOrigin ? 'none' : 'lax',
    secure: cookieCrossOrigin || cookieSecure
  };

  if (cookieDomain) {
    cookieOptions.domain = cookieDomain;
  }

  if (false) {} else if (res) {
    let headers = res.getHeader('Set-Cookie') || [];

    if (!Array.isArray(headers)) {
      headers = [String(headers)];
    }

    const redirectCookie = Object(cookie__WEBPACK_IMPORTED_MODULE_0__["serialize"])(cookieKey, locale, cookieOptions);
    headers = headers.filter(header => {
      const cookie = Object(cookie__WEBPACK_IMPORTED_MODULE_0__["parse"])(header);
      return !(cookieKey in cookie);
    });
    headers.push(redirectCookie);
    res.setHeader('Set-Cookie', headers);
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {

Object.defineProperty(exports, '__esModule', { value: true });

const n = /[^\0-\x7E]/;
const t = /[\x2E\u3002\uFF0E\uFF61]/g;
const o = { overflow: "Overflow Error", "not-basic": "Illegal Input", "invalid-input": "Invalid Input" };
const e = Math.floor;
const r = String.fromCharCode;
function s(n2) {
  throw new RangeError(o[n2]);
}
const c = function(n2, t2) {
  return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
};
const u = function(n2, t2, o2) {
  let r2 = 0;
  for (n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36) {
    n2 = e(n2 / 35);
  }
  return e(r2 + 36 * n2 / (n2 + 38));
};
function toASCII(o2) {
  return function(n2, o3) {
    const e2 = n2.split("@");
    let r2 = "";
    e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);
    const s2 = function(n3, t2) {
      const o4 = [];
      let e3 = n3.length;
      for (; e3--; ) {
        o4[e3] = t2(n3[e3]);
      }
      return o4;
    }((n2 = n2.replace(t, ".")).split("."), o3).join(".");
    return r2 + s2;
  }(o2, function(t2) {
    return n.test(t2) ? "xn--" + function(n2) {
      const t3 = [];
      const o3 = (n2 = function(n3) {
        const t4 = [];
        let o4 = 0;
        const e2 = n3.length;
        for (; o4 < e2; ) {
          const r2 = n3.charCodeAt(o4++);
          if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
            const e3 = n3.charCodeAt(o4++);
            (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
          } else {
            t4.push(r2);
          }
        }
        return t4;
      }(n2)).length;
      let f = 128;
      let i = 0;
      let l = 72;
      for (const o4 of n2) {
        o4 < 128 && t3.push(r(o4));
      }
      const h = t3.length;
      let p = h;
      for (h && t3.push("-"); p < o3; ) {
        let o4 = 2147483647;
        for (const t4 of n2) {
          t4 >= f && t4 < o4 && (o4 = t4);
        }
        const a = p + 1;
        o4 - f > e((2147483647 - i) / a) && s("overflow"), i += (o4 - f) * a, f = o4;
        for (const o5 of n2) {
          if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
            let n3 = i;
            for (let o6 = 36; ; o6 += 36) {
              const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;
              if (n3 < s2) {
                break;
              }
              const u2 = n3 - s2;
              const f2 = 36 - s2;
              t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
            }
            t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
          }
        }
        ++i, ++f;
      }
      return t3.join("");
    }(t2) : t2;
  });
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2F/gi;
const ENC_ENC_SLASH_RE = /%252F/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function encodeHost(name = "") {
  return toASCII(name);
}

function parseQuery(paramsStr = "") {
  const obj = {};
  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }
  for (const param of paramsStr.split("&")) {
    const s = param.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decode(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
function encodeQueryItem(key, val) {
  if (typeof val === "number" || typeof val === "boolean") {
    val = String(val);
  }
  if (!val) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(val)) {
    return val.map((_val) => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).map((k) => encodeQueryItem(k, query[k])).join("&");
}

class $URL {
  constructor(input = "") {
    this.query = {};
    if (typeof input !== "string") {
      throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
    }
    const parsed = parseURL(input);
    this.protocol = decode(parsed.protocol);
    this.host = decode(parsed.host);
    this.auth = decode(parsed.auth);
    this.pathname = decodePath(parsed.pathname);
    this.query = parseQuery(parsed.search);
    this.hash = decode(parsed.hash);
  }
  get hostname() {
    return parseHost(this.host).hostname;
  }
  get port() {
    return parseHost(this.host).port || "";
  }
  get username() {
    return parseAuth(this.auth).username;
  }
  get password() {
    return parseAuth(this.auth).password || "";
  }
  get hasProtocol() {
    return this.protocol.length;
  }
  get isAbsolute() {
    return this.hasProtocol || this.pathname[0] === "/";
  }
  get search() {
    const q = stringifyQuery(this.query);
    return q.length ? "?" + q : "";
  }
  get searchParams() {
    const p = new URLSearchParams();
    for (const name in this.query) {
      const value = this.query[name];
      if (Array.isArray(value)) {
        value.forEach((v) => p.append(name, v));
      } else {
        p.append(name, value || "");
      }
    }
    return p;
  }
  get origin() {
    return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
  }
  get fullpath() {
    return encodePath(this.pathname) + this.search + encodeHash(this.hash);
  }
  get encodedAuth() {
    if (!this.auth) {
      return "";
    }
    const { username, password } = parseAuth(this.auth);
    return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
  }
  get href() {
    const auth = this.encodedAuth;
    const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
    return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
  }
  append(url) {
    if (url.hasProtocol) {
      throw new Error("Cannot append a URL with protocol");
    }
    Object.assign(this.query, url.query);
    if (url.pathname) {
      this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
    }
    if (url.hash) {
      this.hash = url.hash;
    }
  }
  toJSON() {
    return this.href;
  }
  toString() {
    return this.href;
  }
}

function isRelative(inputStr) {
  return ["./", "../"].some((str) => inputStr.startsWith(str));
}
const PROTOCOL_REGEX = /^\w+:(\/\/)?/;
const PROTOCOL_RELATIVE_REGEX = /^\/\/[^/]+/;
function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return PROTOCOL_REGEX.test(inputStr) || acceptProtocolRelative && PROTOCOL_RELATIVE_REGEX.test(inputStr);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function cleanDoubleSlashes(input = "") {
  return input.split("://").map((str) => str.replace(/\/{2,}/g, "/")).join("://");
}
function withBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.substring(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const i of input.filter(isNonEmptyURL)) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
  }
  return url;
}
function withHttp(input) {
  return withProtocol(input, "http://");
}
function withHttps(input) {
  return withProtocol(input, "https://");
}
function withoutProtocol(input) {
  return withProtocol(input, "");
}
function withProtocol(input, protocol) {
  const match = input.match(PROTOCOL_REGEX);
  if (!match) {
    return protocol + input;
  }
  return protocol + input.substring(match[0].length);
}
function createURL(input) {
  return new $URL(input);
}
function normalizeURL(input) {
  return createURL(input).toString();
}
function resolveURL(base, ...input) {
  const url = createURL(base);
  for (const i of input.filter(isNonEmptyURL)) {
    url.append(createURL(i));
  }
  return url.toString();
}
function isSamePath(p1, p2) {
  return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
}
function isEqual(a, b, opts = {}) {
  if (!opts.trailingSlash) {
    a = withTrailingSlash(a);
    b = withTrailingSlash(b);
  }
  if (!opts.leadingSlash) {
    a = withLeadingSlash(a);
    b = withLeadingSlash(b);
  }
  if (!opts.encoding) {
    a = decode(a);
    b = decode(b);
  }
  return a === b;
}

function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [protocol = "", auth, hostAndPath = ""] = (input.replace(/\\/g, "/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?#]*)(.*)?/) || []).splice(1);
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function parseAuth(input = "") {
  const [username, password] = input.split(":");
  return {
    username: decode(username),
    password: decode(password)
  };
}
function parseHost(input = "") {
  const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
  return {
    hostname: decode(hostname),
    port
  };
}
function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
  if (!parsed.protocol) {
    return fullpath;
  }
  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}

exports.$URL = $URL;
exports.cleanDoubleSlashes = cleanDoubleSlashes;
exports.createURL = createURL;
exports.decode = decode;
exports.decodePath = decodePath;
exports.decodeQueryValue = decodeQueryValue;
exports.encode = encode;
exports.encodeHash = encodeHash;
exports.encodeHost = encodeHost;
exports.encodeParam = encodeParam;
exports.encodePath = encodePath;
exports.encodeQueryItem = encodeQueryItem;
exports.encodeQueryKey = encodeQueryKey;
exports.encodeQueryValue = encodeQueryValue;
exports.getQuery = getQuery;
exports.hasLeadingSlash = hasLeadingSlash;
exports.hasProtocol = hasProtocol;
exports.hasTrailingSlash = hasTrailingSlash;
exports.isEmptyURL = isEmptyURL;
exports.isEqual = isEqual;
exports.isNonEmptyURL = isNonEmptyURL;
exports.isRelative = isRelative;
exports.isSamePath = isSamePath;
exports.joinURL = joinURL;
exports.normalizeURL = normalizeURL;
exports.parseAuth = parseAuth;
exports.parseHost = parseHost;
exports.parsePath = parsePath;
exports.parseQuery = parseQuery;
exports.parseURL = parseURL;
exports.resolveURL = resolveURL;
exports.stringifyParsedURL = stringifyParsedURL;
exports.stringifyQuery = stringifyQuery;
exports.withBase = withBase;
exports.withHttp = withHttp;
exports.withHttps = withHttps;
exports.withLeadingSlash = withLeadingSlash;
exports.withProtocol = withProtocol;
exports.withQuery = withQuery;
exports.withTrailingSlash = withTrailingSlash;
exports.withoutBase = withoutBase;
exports.withoutLeadingSlash = withoutLeadingSlash;
exports.withoutProtocol = withoutProtocol;
exports.withoutTrailingSlash = withoutTrailingSlash;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19)["URLSearchParams"]))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IDonation.vue?vue&type=template&id=11b5dba9&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "donation"
  }, [_vm._ssrNode("<h2 class=\"donation__title\">" + _vm._ssrEscape(_vm._s(_vm.itemContent.title)) + "</h2> <p class=\"donation__p\">" + _vm._ssrEscape("\n      " + _vm._s(_vm.itemContent.content) + "\n    ") + "</p> <h2 class=\"donation__title\">" + _vm._ssrEscape(_vm._s(_vm.$t('requisites')) + ":") + "</h2> <ul class=\"donation__list\">" + _vm._ssrList(_vm.single.bank_details, function (item) {
    return "<li class=\"donation__item\"><strong>" + _vm._ssrEscape(_vm._s(item.title) + ":") + "</strong> <span>" + _vm._ssrEscape(_vm._s(item.number)) + "</span></li>";
  }) + "</ul>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/IDonation.vue?vue&type=template&id=11b5dba9&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IDonation.vue?vue&type=script&lang=js&

/* harmony default export */ var IDonationvue_type_script_lang_js_ = ({
  name: 'IDonation',
  computed: { ...Object(external_vuex_["mapState"])(['donations']),

    single() {
      return this.donations[0] || {};
    },

    itemContent() {
      if (!this.single.translations) return {};
      return this.single.translations[this.$i18n.localeProperties.code] || {};
    }

  },

  created() {
    this.fetchDonations();
  },

  methods: { ...Object(external_vuex_["mapActions"])(['fetchDonations'])
  }
});
// CONCATENATED MODULE: ./components/IDonation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_IDonationvue_type_script_lang_js_ = (IDonationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/IDonation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_IDonationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "68513876"
  
)

/* harmony default export */ var IDonation = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("vue-i18n");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/MainLayout.vue?vue&type=template&id=4436128c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('IHeader'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container mt\">", "</div>", [_vm._t("default")], 2), _vm._ssrNode(" "), _c('IFooter')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/MainLayout.vue?vue&type=template&id=4436128c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/MainLayout.vue?vue&type=script&lang=js&
/* harmony default export */ var MainLayoutvue_type_script_lang_js_ = ({
  name: 'MainLayout'
});
// CONCATENATED MODULE: ./layouts/MainLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_MainLayoutvue_type_script_lang_js_ = (MainLayoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./layouts/MainLayout.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_MainLayoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2a99a16c"
  
)

/* harmony default export */ var MainLayout = __webpack_exports__["a"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IHeader: __webpack_require__(35).default,IFooter: __webpack_require__(34).default})


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("3d8de15e", content, true, context)
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("6439d180", content, true, context)
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2103b127", content, true, context)
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("09d03085", content, true, context)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2869616e", content, true, context)
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7efafd59", content, true, context)
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("bbcd581a", content, true, context)
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("buefy");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isHTTPS(req, trustProxy = true) {
  const _xForwardedProto = trustProxy && req.headers ? req.headers["x-forwarded-proto"] : void 0;

  const protoCheck = typeof _xForwardedProto === "string" ? _xForwardedProto.includes("https") : void 0;

  if (protoCheck) {
    return true;
  }

  const _encrypted = req.connection ? req.connection.encrypted : void 0;

  const encryptedCheck = _encrypted !== void 0 ? _encrypted === true : void 0;

  if (encryptedCheck) {
    return true;
  }

  if (protoCheck === void 0 && encryptedCheck === void 0) {
    return void 0;
  }

  return false;
}

module.exports = isHTTPS;

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nuxtI18nHead; });
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(83);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var vue_meta__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(10);
/* harmony import */ var vue_meta__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue_meta__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(0);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4);
















/**
 * @this {import('vue/types/vue').Vue}
 * @param {import('../../types/vue').NuxtI18nHeadOptions} options
 * @return {import('vue-meta').MetaInfo}
 */

function nuxtI18nHead({
  addDirAttribute = false,
  addSeoAttributes = false
} = {}) {
  // Can happen when using from a global mixin.
  if (!this.$i18n) {
    return {};
  }
  /** @type {import('../../types/vue').NuxtI18nMeta} */


  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  const currentLocale = this.$i18n.localeProperties;
  const currentLocaleIso = currentLocale.iso;
  const currentLocaleDir = currentLocale.dir || _options__WEBPACK_IMPORTED_MODULE_14__[/* options */ "c"].defaultDirection;
  /**
   * Adding Direction Attribute:
   */

  if (addDirAttribute) {
    metaObject.htmlAttrs.dir = currentLocaleDir;
  }
  /**
   * Adding SEO Meta:
   */


  if (addSeoAttributes && ( // @ts-ignore
  vue_meta__WEBPACK_IMPORTED_MODULE_13___default.a.hasMetaInfo ? vue_meta__WEBPACK_IMPORTED_MODULE_13___default.a.hasMetaInfo(this) : this._hasMetaInfo) && this.$i18n.locale && this.$i18n.locales) {
    if (currentLocaleIso) {
      metaObject.htmlAttrs.lang = currentLocaleIso; // TODO: simple lang or "specific" lang with territory?
    }

    const locales =
    /** @type {import('../../types').LocaleObject[]} */
    this.$i18n.locales;
    addHreflangLinks.bind(this)(locales, this.$i18n.__baseUrl, metaObject.link);
    addCanonicalLinks.bind(this)(this.$i18n.__baseUrl, metaObject.link, addSeoAttributes);
    addCurrentOgLocale.bind(this)(currentLocale, currentLocaleIso, metaObject.meta);
    addAlternateOgLocales.bind(this)(locales, currentLocaleIso, metaObject.meta);
  }
  /**
   * Internals:
   */

  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject[]} locales
   * @param {string} baseUrl
   * @param {import('../../types/vue').NuxtI18nMeta['link']} link
   */


  function addHreflangLinks(locales, baseUrl, link) {
    if (_options__WEBPACK_IMPORTED_MODULE_14__[/* options */ "c"].strategy === _options__WEBPACK_IMPORTED_MODULE_14__[/* Constants */ "a"].STRATEGIES.NO_PREFIX) {
      return;
    }
    /** @type {Map<string, import('../../types').LocaleObject>} */


    const localeMap = new Map();

    for (const locale of locales) {
      const localeIso = locale.iso;

      if (!localeIso) {
        // eslint-disable-next-line no-console
        console.warn(Object(_utils_common__WEBPACK_IMPORTED_MODULE_15__[/* formatMessage */ "b"])('Locale ISO code is required to generate alternate link'));
        continue;
      }

      const [language, region] = localeIso.split('-');

      if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
        localeMap.set(language, locale);
      }

      localeMap.set(localeIso, locale);
    }

    for (const [iso, mapLocale] of localeMap.entries()) {
      const localePath = this.switchLocalePath(mapLocale.code);

      if (localePath) {
        link.push({
          hid: `i18n-alt-${iso}`,
          rel: 'alternate',
          href: toAbsoluteUrl(localePath, baseUrl),
          hreflang: iso
        });
      }
    }

    if (_options__WEBPACK_IMPORTED_MODULE_14__[/* options */ "c"].defaultLocale) {
      const localePath = this.switchLocalePath(_options__WEBPACK_IMPORTED_MODULE_14__[/* options */ "c"].defaultLocale);

      if (localePath) {
        link.push({
          hid: 'i18n-xd',
          rel: 'alternate',
          href: toAbsoluteUrl(localePath, baseUrl),
          hreflang: 'x-default'
        });
      }
    }
  }
  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {string} baseUrl
   * @param {import('../../types/vue').NuxtI18nMeta['link']} link
   * @param {NonNullable<import('../../types/vue').NuxtI18nHeadOptions['addSeoAttributes']>} seoAttributesOptions
   */


  function addCanonicalLinks(baseUrl, link, seoAttributesOptions) {
    const currentRoute = this.localeRoute({ ...this.$route,
      name: this.getRouteBaseName()
    });

    if (currentRoute) {
      let href = toAbsoluteUrl(currentRoute.path, baseUrl);
      const canonicalQueries = typeof seoAttributesOptions !== 'boolean' && seoAttributesOptions.canonicalQueries || [];

      if (canonicalQueries.length) {
        const currentRouteQueryParams = currentRoute.query;
        const params = new URLSearchParams();

        for (const queryParamName of canonicalQueries) {
          if (queryParamName in currentRouteQueryParams) {
            const queryParamValue = currentRouteQueryParams[queryParamName];

            if (Array.isArray(queryParamValue)) {
              queryParamValue.forEach(v => params.append(queryParamName, v || ''));
            } else {
              params.append(queryParamName, queryParamValue || '');
            }
          }
        }

        const queryString = params.toString();

        if (queryString) {
          href = `${href}?${queryString}`;
        }
      }

      link.push({
        hid: 'i18n-can',
        rel: 'canonical',
        href
      });
    }
  }
  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject} currentLocale
   * @param {string | undefined} currentLocaleIso
   * @param {import('../../types/vue').NuxtI18nMeta['meta']} meta
   */


  function addCurrentOgLocale(currentLocale, currentLocaleIso, meta) {
    const hasCurrentLocaleAndIso = currentLocale && currentLocaleIso;

    if (!hasCurrentLocaleAndIso) {
      return;
    }

    meta.push({
      hid: 'i18n-og',
      property: 'og:locale',
      // Replace dash with underscore as defined in spec: language_TERRITORY
      content: hypenToUnderscore(currentLocaleIso)
    });
  }
  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject[]} locales
   * @param {string | undefined} currentLocaleIso
   * @param {import('../../types/vue').NuxtI18nMeta['meta']} meta
   */


  function addAlternateOgLocales(locales, currentLocaleIso, meta) {
    const localesWithoutCurrent = locales.filter(locale => {
      const localeIso = locale.iso;
      return localeIso && localeIso !== currentLocaleIso;
    });

    if (localesWithoutCurrent.length) {
      const alternateLocales = localesWithoutCurrent.map(locale => ({
        hid: `i18n-og-alt-${locale.iso}`,
        property: 'og:locale:alternate',
        content: hypenToUnderscore(locale.iso)
      }));
      meta.push(...alternateLocales);
    }
  }
  /**
   * @param {string | undefined} str
   * @return {string}
   */


  function hypenToUnderscore(str) {
    return (str || '').replace(/-/g, '_');
  }
  /**
   * @param {string} urlOrPath
   * @param {string} baseUrl
   */


  function toAbsoluteUrl(urlOrPath, baseUrl) {
    if (urlOrPath.match(/^https?:\/\//)) {
      return urlOrPath;
    }

    return baseUrl + urlOrPath;
  }

  return metaObject;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19)["URLSearchParams"]))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("ant-design-vue/lib");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!seen.has(othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy(collection, iteratees, orders);
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = orderBy;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(85)(module)))

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IFooter.vue?vue&type=template&id=28fa09eb&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "footer__wrapper"
  }, [_vm._ssrNode("<div id=\"contacts\" class=\"container\">", "</div>", [_vm._ssrNode("<h2 class=\"section-title\">" + _vm._ssrEscape(_vm._s(_vm.$t('contacts'))) + "</h2> "), _vm._ssrNode("<div class=\"footer\">", "</div>", [_vm._ssrNode("<ul class=\"footer__contacts\"><li>" + _vm._s(_vm.$t('address')) + "</li> <li><span class=\"footer__tel\">Т:</span> <a href=\"tel:+996312625130\" class=\"footer__tel\">+996 312 62 51 30</a> <a href=\"tel:+996312624636\" class=\"footer__tel\">+996 312 62 46 36\n            </a></li> <li><span class=\"footer__tel\">WhatsApp:</span> <a target=\"_blank\" href=\"https://wa.me/+996773000600\" class=\"footer__tel\">+996773000600</a></li> <li><a href=\"mailto:iymanfond22@gmail.com\" class=\"footer__mail\">iymanfond22@gmail.com</a></li></ul> "), _vm._ssrNode("<div class=\"footer__map\">", "</div>", [_c('client-only', [_c('l-map', {
    attrs: {
      "options": {
        attributionControl: false
      },
      "zoom": 16,
      "center": [42.880172, 74.606403]
    }
  }, [_c('l-tile-layer', {
    attrs: {
      "url": "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    }
  }), _vm._v(" "), _c('l-marker', {
    attrs: {
      "lat-lng": [42.880172, 74.606403]
    }
  }, [_c('l-popup', [_c('div', [_vm._v("Iyman Foundation")])])], 1)], 1)], 1)], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<footer>", "</footer>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"footer__body\">", "</div>", [_vm._ssrNode("<span class=\"footer__t\">" + _vm._ssrEscape(_vm._s(_vm.$t('rights'))) + "</span> "), _vm._ssrNode("<ul class=\"social\">", "</ul>", [_vm._ssrNode("<li class=\"social__title\">" + _vm._ssrEscape(_vm._s(_vm.$t('follow_us')) + ":") + "</li> "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<a href=\"https://t.me/iymanfondu\" target=\"_blank\" class=\"social__link\">", "</a>", [_c('Telegram')], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<a href=\"https://instagram.com/iyman.fondu?igshid=YmMyMTA2M2Y=\" target=\"_blank\" class=\"social__link\">", "</a>", [_c('Instagram')], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<a href=\"https://www.facebook.com/yimanfondu\" target=\"_blank\" class=\"social__link\">", "</a>", [_c('Facebook')], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<a href=\"https://twitter.com/yimanfond\" target=\"_blank\" class=\"social__link\">", "</a>", [_c('Twitter')], 1)])], 2)], 2)])])], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/IFooter.vue?vue&type=template&id=28fa09eb&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib!./node_modules/svg-to-vue-component/loader.js!./static/icon/facebook.svg?vue&type=template&id=6da850c7&
var facebookvue_type_template_id_6da850c7_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', _vm._g({
    attrs: {
      "width": "20",
      "height": "20",
      "viewBox": "0 0 20 20",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, _vm.$listeners), [_vm._ssrNode("<path d=\"M10 0C4.477 0 0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.879V12.89h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.989C16.343 19.129 20 14.99 20 10c0-5.523-4.477-10-10-10z\" fill=\"#0064B0\"></path>")]);
};

var facebookvue_type_template_id_6da850c7_staticRenderFns = [];

// CONCATENATED MODULE: ./static/icon/facebook.svg?vue&type=template&id=6da850c7&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./static/icon/facebook.svg

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  facebookvue_type_template_id_6da850c7_render,
  facebookvue_type_template_id_6da850c7_staticRenderFns,
  false,
  null,
  null,
  "7e80d046"
  
)

/* harmony default export */ var facebook = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib!./node_modules/svg-to-vue-component/loader.js!./static/icon/twitter.svg?vue&type=template&id=4e73edfa&
var twittervue_type_template_id_4e73edfa_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', _vm._g({
    attrs: {
      "width": "22",
      "height": "18",
      "viewBox": "0 0 22 18",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, _vm.$listeners), [_vm._ssrNode("<path d=\"M21.162 2.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0020.6 1c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.208 4.208 0 01-1.89.072A4.185 4.185 0 006.97 13.65a8.393 8.393 0 01-6.191 1.732 11.829 11.829 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z\" fill=\"#0064B0\"></path>")]);
};

var twittervue_type_template_id_4e73edfa_staticRenderFns = [];

// CONCATENATED MODULE: ./static/icon/twitter.svg?vue&type=template&id=4e73edfa&

// CONCATENATED MODULE: ./static/icon/twitter.svg

var twitter_script = {}


/* normalize component */

var twitter_component = Object(componentNormalizer["a" /* default */])(
  twitter_script,
  twittervue_type_template_id_4e73edfa_render,
  twittervue_type_template_id_4e73edfa_staticRenderFns,
  false,
  null,
  null,
  "58bcc0b0"
  
)

/* harmony default export */ var twitter = (twitter_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib!./node_modules/svg-to-vue-component/loader.js!./static/icon/telegram.svg?vue&type=template&id=cf84b01a&
var telegramvue_type_template_id_cf84b01a_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', _vm._g({
    attrs: {
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, _vm.$listeners), [_vm._ssrNode("<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0 0 5.373 0 12zm9.8 5.5l.204-3.059 5.565-5.022c.244-.216-.054-.322-.378-.125l-6.867 4.332-2.967-.926c-.64-.196-.645-.636.144-.952l11.56-4.458c.527-.24 1.037.127.835.935l-1.968 9.277c-.138.659-.536.816-1.088.512l-2.999-2.215L10.4 17.2l-.014.013c-.16.157-.294.287-.586.287z\" fill=\"#fff\"></path>")]);
};

var telegramvue_type_template_id_cf84b01a_staticRenderFns = [];

// CONCATENATED MODULE: ./static/icon/telegram.svg?vue&type=template&id=cf84b01a&

// CONCATENATED MODULE: ./static/icon/telegram.svg

var telegram_script = {}


/* normalize component */

var telegram_component = Object(componentNormalizer["a" /* default */])(
  telegram_script,
  telegramvue_type_template_id_cf84b01a_render,
  telegramvue_type_template_id_cf84b01a_staticRenderFns,
  false,
  null,
  null,
  "b6215ed0"
  
)

/* harmony default export */ var telegram = (telegram_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib!./node_modules/svg-to-vue-component/loader.js!./static/icon/instagram.svg?vue&type=template&id=60a2b30a&
var instagramvue_type_template_id_60a2b30a_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('svg', _vm._g({
    attrs: {
      "width": "20",
      "height": "20",
      "viewBox": "0 0 20 20",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, _vm.$listeners), [_vm._ssrNode("<path d=\"M10 0c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153A4.904 4.904 0 01.525 16.55C.277 15.913.11 15.187.06 14.122.013 13.056 0 12.717 0 10c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 013.45.525C4.088.277 4.812.11 5.878.06 6.944.013 7.283 0 10 0zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM10 7a3 3 0 110 6 3 3 0 010-6z\" fill=\"#0064B0\"></path>")]);
};

var instagramvue_type_template_id_60a2b30a_staticRenderFns = [];

// CONCATENATED MODULE: ./static/icon/instagram.svg?vue&type=template&id=60a2b30a&

// CONCATENATED MODULE: ./static/icon/instagram.svg

var instagram_script = {}


/* normalize component */

var instagram_component = Object(componentNormalizer["a" /* default */])(
  instagram_script,
  instagramvue_type_template_id_60a2b30a_render,
  instagramvue_type_template_id_60a2b30a_staticRenderFns,
  false,
  null,
  null,
  "39f11cb2"
  
)

/* harmony default export */ var instagram = (instagram_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IFooter.vue?vue&type=script&lang=js&
 // import Instagram from '@/static/icon/instagram.svg'




/* harmony default export */ var IFootervue_type_script_lang_js_ = ({
  name: 'IFooter',
  components: {
    Facebook: facebook,
    Instagram: instagram,
    Twitter: twitter,
    Telegram: telegram
  }
});
// CONCATENATED MODULE: ./components/IFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_IFootervue_type_script_lang_js_ = (IFootervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/IFooter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(67)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var IFooter_component = Object(componentNormalizer["a" /* default */])(
  components_IFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f60f5fe4"
  
)

/* harmony default export */ var IFooter = __webpack_exports__["default"] = (IFooter_component.exports);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IHeader.vue?vue&type=template&id=442eae87&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "header__outside"
  }, [_vm._ssrNode("<div class=\"header__web\">", "</div>", [_vm._ssrNode("<div class=\"header__wrapper\">", "</div>", [_vm._ssrNode("<div class=\"container container--big\">", "</div>", [_vm._ssrNode("<div class=\"header__hover\"></div> "), _vm._ssrNode("<div class=\"header\">", "</div>", [_vm._ssrNode("<div class=\"header__logo\"><img src=\"/img/gerb.png\"" + _vm._ssrAttr("alt", _vm.$t('administration')) + "> <span class=\"header__logo-title\">" + _vm._ssrEscape(_vm._s(_vm.$t('administration'))) + "</span></div> "), _vm._ssrNode("<div class=\"header__forms\">", "</div>", [_c('a-input-search', {
    staticClass: "header__input",
    staticStyle: {
      "width": "305px"
    },
    attrs: {
      "placeholder": _vm.$t('search')
    },
    on: {
      "search": _vm.onSearch
    },
    model: {
      value: _vm.search,
      callback: function ($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  }), _vm._ssrNode(" "), _c('a-select', {
    ref: "select",
    staticClass: "header__lang",
    staticStyle: {
      "width": "81px"
    },
    attrs: {
      "show-arrow": false
    },
    on: {
      "change": _vm.langChange
    },
    model: {
      value: _vm.currentLang,
      callback: function ($$v) {
        _vm.currentLang = $$v;
      },
      expression: "currentLang"
    }
  }, [_c('a-select-option', {
    attrs: {
      "value": "ky"
    }
  }, [_vm._v("Кыр")]), _vm._v(" "), _c('a-select-option', {
    attrs: {
      "value": "ru"
    }
  }, [_vm._v("Рус")]), _vm._v(" "), _c('a-select-option', {
    attrs: {
      "value": "en"
    }
  }, [_vm._v("Eng")])], 1)], 2)], 2)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"sub-header__wrapper\">", "</div>", [_vm._ssrNode("<div class=\"container container--big\">", "</div>", [_vm._ssrNode("<div class=\"sub-header\">", "</div>", [_vm._ssrNode("<div class=\"sub-header__info\"><ul class=\"sub-header__info-social\"><li><a href=\"https://instagram.com/iyman.fondu?igshid=YmMyMTA2M2Y=\" target=\"_blank\" class=\"sub-header__info-social__icon\"><img src=\"/icon/instagram.svg\"></a></li> <li><a href=\"https://www.facebook.com/yimanfondu\" target=\"_blank\" class=\"sub-header__info-social__icon\"><img src=\"/icon/facebook.svg\"></a></li> <li><a href=\"https://twitter.com/yimanfond\" target=\"_blank\" class=\"sub-header__info-social__icon\"><img src=\"/icon/twitter.svg\"></a></li> <li><a href=\"https://twitter.com/yimanfond\" target=\"_blank\" class=\"sub-header__info-social__icon\"><img src=\"/icon/whatsapp.svg\"></a></li> <li><a href=\"https://twitter.com/yimanfond\" target=\"_blank\" class=\"sub-header__info-social__icon\"><img src=\"/icon/telegram.svg\"></a></li></ul></div> "), _vm._ssrNode("<div class=\"sub-header__logo\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": _vm.localePath('/')
    }
  }, [_c('img', {
    staticClass: "logo-img",
    attrs: {
      "src": "/img/logo.png",
      "alt": _vm.$t('fondDesc')
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"sub-header__right\">", "</div>", [_c('a-button', {
    staticClass: "button primary",
    on: {
      "click": function ($event) {
        _vm.isOpenModal = true;
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('donate')))])], 1)], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container\">", "</div>", [_c('client-only', [_c('ul', {
    staticClass: "menu"
  }, _vm._l(_vm.menus, function (menu) {
    return _c('li', {
      key: menu.code,
      staticClass: "menu__item"
    }, [menu.children ? _c('b-dropdown', {
      attrs: {
        "triggers": ['hover'],
        "aria-role": "list"
      },
      scopedSlots: _vm._u([{
        key: "trigger",
        fn: function () {
          return [_c('button', {
            staticClass: "menu__link"
          }, [_vm._v("\n                    " + _vm._s(_vm.$t(menu.code)) + "\n\n                    "), _c('svg', {
            attrs: {
              "width": "8",
              "height": "14",
              "viewBox": "0 0 8 14",
              "fill": "none",
              "xmlns": "http://www.w3.org/2000/svg"
            }
          }, [_c('path', {
            attrs: {
              "d": "M5.172 6.99999L0.222 2.04999L1.636 0.635986L8 6.99999L1.636 13.364L0.222 11.95L5.172 6.99999Z",
              "fill": "black"
            }
          })])])];
        },
        proxy: true
      }], null, true)
    }, [_vm._v(" "), _vm._l(menu.children, function (child) {
      return [_c('b-dropdown-item', {
        key: child.code,
        attrs: {
          "aria-role": "listitem"
        }
      }, [_c('nuxt-link', {
        staticClass: "menu__link",
        attrs: {
          "to": _vm.localePath(child.link)
        }
      }, [_vm._v("\n                      " + _vm._s(_vm.$t(child.code)) + "\n                    ")])], 1)];
    })], 2) : [menu.code === 'contacts' ? _c('nuxt-link', {
      staticClass: "menu__link",
      attrs: {
        "to": '#contacts'
      },
      nativeOn: {
        "click": function ($event) {
          return _vm.onClickMenu.apply(null, arguments);
        }
      }
    }, [_vm._v("\n                  " + _vm._s(_vm.$t(menu.code)) + "\n                ")]) : _c('nuxt-link', {
      staticClass: "menu__link",
      attrs: {
        "to": _vm.localePath(menu.link)
      },
      nativeOn: {
        "click": function ($event) {
          return _vm.onClickMenu.apply(null, arguments);
        }
      }
    }, [_vm._v("\n                  " + _vm._s(_vm.$t(menu.code)) + "\n                ")])]], 2);
  }), 0)])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("header__on-scroll", {
    show: _vm.isHideTop
  }) + ">", "</div>", [_vm._ssrNode("<div class=\"sub-header__wrapper\">", "</div>", [_vm._ssrNode("<div class=\"container container--big\">", "</div>", [_vm._ssrNode("<div class=\"sub-header\">", "</div>", [_vm._ssrNode("<div class=\"sub-header__info\"><ul class=\"sub-header__info-social\"><li><a href=\"https://instagram.com/iyman.fondu?igshid=YmMyMTA2M2Y=\" target=\"_blank\" class=\"sub-header__info-social__icon\"><img src=\"/icon/instagram.svg\"></a></li> <li><a href=\"https://www.facebook.com/yimanfondu\" target=\"_blank\" class=\"sub-header__info-social__icon\"><img src=\"/icon/facebook.svg\"></a></li> <li><a href=\"https://twitter.com/yimanfond\" target=\"_blank\" class=\"sub-header__info-social__icon\"><img src=\"/icon/twitter.svg\"></a></li></ul></div> "), _vm._ssrNode("<div class=\"sub-header__logo\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": _vm.localePath('/')
    }
  }, [_c('img', {
    staticClass: "logo-img",
    attrs: {
      "src": "/img/logo.png",
      "alt": _vm.$t('fondDesc')
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"sub-header__right\">", "</div>", [_c('a-popover', {
    staticClass: "search__wrapper",
    attrs: {
      "title": null,
      "trigger": "click",
      "placement": "bottom"
    },
    scopedSlots: _vm._u([{
      key: "content",
      fn: function () {
        return [_c('a-input-search', {
          staticClass: "header__scroll-input",
          staticStyle: {
            "width": "182px"
          },
          attrs: {
            "placeholder": _vm.$t('search')
          },
          on: {
            "search": _vm.onSearch
          },
          model: {
            value: _vm.search,
            callback: function ($$v) {
              _vm.search = $$v;
            },
            expression: "search"
          }
        })];
      },
      proxy: true
    }]),
    model: {
      value: _vm.isShowSearch,
      callback: function ($$v) {
        _vm.isShowSearch = $$v;
      },
      expression: "isShowSearch"
    }
  }, [_c('button', {
    staticClass: "reset-btn",
    on: {
      "click": function ($event) {
        $event.preventDefault();
      }
    }
  }, [_c('svg', {
    attrs: {
      "width": "21",
      "height": "21",
      "viewBox": "0 0 21 21",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z",
      "fill": "#0064B0"
    }
  })])])]), _vm._ssrNode(" "), _c('a-select', {
    ref: "select",
    staticClass: "header__lang",
    staticStyle: {
      "width": "81px"
    },
    attrs: {
      "show-arrow": false
    },
    on: {
      "change": _vm.langChange
    },
    model: {
      value: _vm.currentLang,
      callback: function ($$v) {
        _vm.currentLang = $$v;
      },
      expression: "currentLang"
    }
  }, [_c('a-select-option', {
    attrs: {
      "value": "ky"
    }
  }, [_vm._v("Кыр")]), _vm._v(" "), _c('a-select-option', {
    attrs: {
      "value": "ru"
    }
  }, [_vm._v("Рус")]), _vm._v(" "), _c('a-select-option', {
    attrs: {
      "value": "en"
    }
  }, [_vm._v("Eng")])], 1), _vm._ssrNode(" "), _c('a-button', {
    staticClass: "button primary",
    on: {
      "click": function ($event) {
        _vm.isOpenModal = true;
      }
    }
  }, [_vm._v(_vm._s(_vm.$t('donate')))])], 2)], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container\">", "</div>", [_c('client-only', [_c('ul', {
    staticClass: "menu"
  }, _vm._l(_vm.menus, function (menu) {
    return _c('li', {
      key: menu.code,
      staticClass: "menu__item"
    }, [menu.children ? _c('b-dropdown', {
      attrs: {
        "triggers": ['hover'],
        "aria-role": "list"
      },
      scopedSlots: _vm._u([{
        key: "trigger",
        fn: function () {
          return [_c('button', {
            staticClass: "menu__link"
          }, [_vm._v("\n                      " + _vm._s(_vm.$t(menu.code)) + "\n\n                      "), _c('svg', {
            attrs: {
              "width": "8",
              "height": "14",
              "viewBox": "0 0 8 14",
              "fill": "none",
              "xmlns": "http://www.w3.org/2000/svg"
            }
          }, [_c('path', {
            attrs: {
              "d": "M5.172 6.99999L0.222 2.04999L1.636 0.635986L8 6.99999L1.636 13.364L0.222 11.95L5.172 6.99999Z",
              "fill": "black"
            }
          })])])];
        },
        proxy: true
      }], null, true)
    }, [_vm._v(" "), _vm._l(menu.children, function (child) {
      return [_c('b-dropdown-item', {
        key: child.code,
        attrs: {
          "aria-role": "listitem"
        }
      }, [_c('nuxt-link', {
        staticClass: "menu__link",
        attrs: {
          "to": _vm.localePath(child.link)
        }
      }, [_vm._v("\n                        " + _vm._s(_vm.$t(child.code)) + "\n                      ")])], 1)];
    })], 2) : [menu.code === 'contacts' ? _c('nuxt-link', {
      staticClass: "menu__link",
      attrs: {
        "to": '#contacts'
      },
      nativeOn: {
        "click": function ($event) {
          return _vm.onClickMenu.apply(null, arguments);
        }
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.$t(menu.code)) + "\n                  ")]) : _c('nuxt-link', {
      staticClass: "menu__link",
      attrs: {
        "to": _vm.localePath(menu.link)
      },
      nativeOn: {
        "click": function ($event) {
          return _vm.onClickMenu.apply(null, arguments);
        }
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.$t(menu.code)) + "\n                  ")])]], 2);
  }), 0)])], 1)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header__mobile\">", "</div>", [_vm._ssrNode("<div class=\"header__logo\"><img src=\"/img/gerb.png\"" + _vm._ssrAttr("alt", _vm.$t('administration')) + "> <span class=\"header__logo-title\">" + _vm._ssrEscape(_vm._s(_vm.$t('administration'))) + "</span></div> "), _vm._ssrNode("<div" + _vm._ssrClass("header__main", {
    fixed: _vm.isHideTop
  }) + ">", "</div>", [_vm._ssrNode("<button class=\"header__main--burger\"><svg width=\"24\" height=\"22\" viewBox=\"0 0 24 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 0H0V2.66667H24V0ZM16 9.33333H0V12H16V9.33333ZM24 18.6667H0V21.3333H24V18.6667Z\" fill=\"black\"></path></svg></button> <div class=\"header__main__overlay\"" + _vm._ssrStyle(null, null, {
    display: _vm.showMenu ? '' : 'none'
  }) + "></div> "), _vm.showMenu ? _vm._ssrNode("<div class=\"header__main__menu\">", "</div>", [_vm._ssrNode("<div class=\"flex\">", "</div>", [_c('a-input-search', {
    staticClass: "header__input",
    staticStyle: {
      "width": "212px"
    },
    attrs: {
      "placeholder": _vm.$t('search')
    },
    on: {
      "search": _vm.onSearch
    },
    model: {
      value: _vm.search,
      callback: function ($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  }), _vm._ssrNode(" <button class=\"header__main--burger\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.00004 6.23254L14.1875 0.0450439L15.955 1.81254L9.76754 8.00004L15.955 14.1875L14.1875 15.955L8.00004 9.76754L1.81254 15.955L0.0450439 14.1875L6.23254 8.00004L0.0450439 1.81254L1.81254 0.0450439L8.00004 6.23254Z\" fill=\"black\"></path></svg></button>")], 2), _vm._ssrNode(" <ul class=\"flex lang\"><li" + _vm._ssrClass(null, {
    active: _vm.currentLang === 'ky'
  }) + ">\n              Кыр\n            </li> <li" + _vm._ssrClass(null, {
    active: _vm.currentLang === 'ru'
  }) + ">\n              Рус\n            </li> <li" + _vm._ssrClass(null, {
    active: _vm.currentLang === 'en'
  }) + ">\n              Eng\n            </li></ul> "), _c('a-menu', {
    staticStyle: {
      "width": "256px"
    },
    attrs: {
      "id": "dddddd",
      "mode": "inline"
    }
  }, [_vm._l(_vm.menus, function (menu) {
    return [menu.children ? _c('a-sub-menu', {
      key: menu.code,
      scopedSlots: _vm._u([{
        key: "title",
        fn: function () {
          return [_vm._v(_vm._s(_vm.$t(menu.code)))];
        },
        proxy: true
      }, {
        key: "expandIcon",
        fn: function () {
          return [_c('svg', {
            staticClass: "arrow-icon",
            attrs: {
              "width": "8",
              "height": "14",
              "viewBox": "0 0 8 14",
              "fill": "none",
              "xmlns": "http://www.w3.org/2000/svg"
            }
          }, [_c('path', {
            attrs: {
              "d": "M5.17205 6.99999L0.222046 2.04999L1.63605 0.635986L8.00005 6.99999L1.63605 13.364L0.222046 11.95L5.17205 6.99999Z",
              "fill": "black"
            }
          })])];
        },
        proxy: true
      }], null, true)
    }, [_vm._v(" "), _vm._v(" "), _c('a-menu-item-group', {
      key: menu.code
    }, _vm._l(menu.children, function (item) {
      return _c('a-menu-item', {
        key: item.code
      }, [_c('nuxt-link', {
        attrs: {
          "to": _vm.localePath(item.link)
        },
        nativeOn: {
          "click": function ($event) {
            return _vm.onClickMenu.apply(null, arguments);
          }
        }
      }, [_vm._v(_vm._s(_vm.$t(item.code)))])], 1);
    }), 1)], 1) : _c('a-menu-item', {
      key: menu.code + 'else'
    }, [menu.code === 'contacts' ? _c('nuxt-link', {
      attrs: {
        "to": '#contacts'
      },
      nativeOn: {
        "click": function ($event) {
          return _vm.onClickMenu.apply(null, arguments);
        }
      }
    }, [_vm._v("\n                  " + _vm._s(_vm.$t(menu.code)) + "\n                ")]) : _c('nuxt-link', {
      attrs: {
        "to": _vm.localePath(menu.link)
      },
      nativeOn: {
        "click": function ($event) {
          return _vm.onClickMenu.apply(null, arguments);
        }
      }
    }, [_vm._v("\n                  " + _vm._s(_vm.$t(menu.code)) + "\n                ")])], 1)];
  })], 2), _vm._ssrNode(" <ul class=\"sub-header__info-social\"><li><a href=\"https://instagram.com/iyman.fondu?igshid=YmMyMTA2M2Y=\" target=\"_blank\" class=\"sub-header__info-social__icon\"><img src=\"/icon/instagram.svg\"></a></li> <li><a href=\"https://www.facebook.com/yimanfondu\" target=\"_blank\" class=\"sub-header__info-social__icon\"><img src=\"/icon/facebook.svg\"></a></li> <li><a href=\"https://twitter.com/yimanfond\" target=\"_blank\" class=\"sub-header__info-social__icon\"><img src=\"/icon/twitter.svg\"></a></li></ul>")], 2) : _vm._e(), _vm._ssrNode(" "), _c('nuxt-link', {
    attrs: {
      "to": _vm.localePath('/')
    }
  }, [_c('img', {
    attrs: {
      "src": "/img/logo-mobile.svg",
      "alt": _vm.$t('fondDesc')
    }
  })]), _vm._ssrNode(" <button class=\"header__main--support\"><svg width=\"27\" height=\"25\" viewBox=\"0 0 27 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.4689 2.08922C15.7605 1.15922 17.2589 0.694222 18.9509 0.694222C19.8809 0.694222 20.9014 0.939639 22.0122 1.45631C23.123 1.96006 24.0014 2.55422 24.6472 3.23881C25.9776 4.89214 26.533 6.81672 26.3393 9.01256C26.1326 11.2084 25.4093 12.9263 24.1564 14.1405L14.3526 23.9442C14.1072 24.1896 13.7972 24.3059 13.4355 24.3059C13.0739 24.3059 12.7768 24.1896 12.5314 23.9442C12.4121 23.8265 12.3184 23.6855 12.2561 23.5299C12.1939 23.3743 12.1645 23.2075 12.1697 23.0401C12.1697 22.6784 12.2859 22.3684 12.5314 22.123L18.4601 16.1942C18.783 15.9101 18.783 15.613 18.4601 15.2901C18.1372 14.9671 17.8401 14.9671 17.5559 15.2901L11.6272 21.2188C11.5076 21.3392 11.3644 21.4335 11.2066 21.4958C11.0487 21.558 10.8797 21.5869 10.7101 21.5805C10.3484 21.5805 10.0514 21.4642 9.80595 21.2188C9.68665 21.1011 9.59295 20.9601 9.53071 20.8045C9.46848 20.6489 9.43905 20.4821 9.44428 20.3146C9.44428 19.953 9.56053 19.643 9.80595 19.3976L15.7347 13.4688C16.0834 13.1459 16.0834 12.823 15.7347 12.5001C15.4376 12.1771 15.1534 12.1771 14.8305 12.5001L8.90178 18.4934C8.78088 18.6119 8.63742 18.705 8.47989 18.7672C8.32237 18.8293 8.15398 18.8592 7.9847 18.8551C7.62303 18.8551 7.31303 18.7388 7.04178 18.4934C6.78345 18.248 6.65428 17.9509 6.65428 17.5892C6.65428 17.2276 6.79636 16.9046 7.08053 16.6205L13.0222 10.6788C13.3451 10.3559 13.3451 10.0588 13.0222 9.77464C12.6993 9.49047 12.3893 9.49047 12.1051 9.77464L6.11178 15.7292C5.82761 15.9876 5.53053 16.1296 5.20761 16.1296C4.84595 16.1296 4.53595 16.0005 4.30345 15.7292C4.05803 15.4709 3.92886 15.1609 3.92886 14.7992C3.92886 14.4376 4.05803 14.1405 4.30345 13.8951C8.25595 9.91672 10.6972 7.51422 11.6272 6.62297L16.2255 11.1696C16.7293 11.6476 17.3105 11.893 18.0209 11.893C18.9251 11.893 19.6355 11.5313 20.1651 10.808C20.5268 10.2784 20.6559 9.69714 20.5526 9.05131C20.4493 8.40547 20.178 7.86297 19.7389 7.41089L14.4689 2.08922ZM17.1297 10.2655L11.6272 4.75006L2.4822 13.8951C1.3972 12.7971 0.777196 11.118 0.635112 8.83172C0.493029 6.55839 1.11303 4.58214 2.4822 2.92881C4.01928 1.40464 5.85345 0.629639 7.9847 0.629639C10.1289 0.629639 11.9501 1.40464 13.4355 2.92881L18.9509 8.44422C19.1964 8.68964 19.3126 8.98672 19.3126 9.34839C19.3126 9.71006 19.1964 10.0201 18.9509 10.2655C18.7055 10.498 18.4084 10.6271 18.0209 10.6271C17.6722 10.6271 17.3751 10.498 17.1297 10.2655Z\" fill=\"#0064B0\"></path></svg></button>")], 2)], 2), _vm._ssrNode(" "), _c('a-modal', {
    attrs: {
      "title": "",
      "footer": null,
      "width": 1108
    },
    model: {
      value: _vm.isOpenModal,
      callback: function ($$v) {
        _vm.isOpenModal = $$v;
      },
      expression: "isOpenModal"
    }
  }, [_c('i-donation')], 1)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/IHeader.vue?vue&type=template&id=442eae87&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(8);

// EXTERNAL MODULE: ./components/IDonation.vue + 4 modules
var IDonation = __webpack_require__(13);

// CONCATENATED MODULE: ./static/data.js
const menus = [{
  title: 'Главная',
  code: 'main',
  children: [{
    title: 'Новости',
    code: 'news',
    link: '/news'
  }, {
    title: 'Ссылки',
    code: 'links',
    link: '/links'
  }, {
    title: 'Галерея',
    code: 'gallery',
    link: '/gallery'
  }, {
    title: 'Контакты',
    code: 'contacts',
    link: '#contacts'
  }]
}, {
  title: 'О ФРДК «Ыйман»',
  code: 'aboutFond',
  children: [{
    title: 'О ФРДК «Ыйман»',
    code: 'aboutFond',
    link: '/about/about-us'
  }, {
    title: 'Организационная структура',
    code: 'orgStructure',
    link: '/about/organization'
  }, {
    title: 'История создания',
    code: 'historyCreation',
    link: '/about/history'
  }, {
    title: 'Председатель правления',
    code: 'chairman',
    link: '/about/chairman'
  }]
}, {
  title: 'Деятельность',
  code: 'activity',
  children: [{
    title: 'Мероприятия',
    code: 'event',
    link: '/activity/event'
  }, {
    title: 'Проектная деятельность',
    code: 'projectActivities',
    link: '/activity/project'
  }, {
    title: 'Международное сотрудничество',
    code: 'internationalCoop',
    link: '/activity/organizations'
  }]
}, {
  title: 'Благотворительность',
  code: 'charity',
  link: '/charity'
}, {
  title: 'Контакты',
  code: 'contacts',
  link: '#contacts'
}];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IHeader.vue?vue&type=script&lang=js&



const HEADER_HIGHT = 196;
const MOBILE_HEADER_HIGHT = 90;
/* harmony default export */ var IHeadervue_type_script_lang_js_ = ({
  name: 'IHeader',
  components: {
    IDonation: IDonation["default"]
  },

  data() {
    return {
      currentLang: 'ky',
      menus: menus,
      search: '',
      isOpenModal: false,
      isHideTop: false,
      isShowSearch: false,
      visible: false,
      showMenu: false,
      showDropdown: false
    };
  },

  computed: {
    scrollHight() {
      return window.innerWidth <= 840 ? MOBILE_HEADER_HIGHT : HEADER_HIGHT;
    }

  },

  created() {
    this.currentLang = this.$i18n.localeProperties.code || 'ky';
  },

  mounted() {
    document.addEventListener('scroll', this.onScroll);
    this.isHideTop = document.documentElement.scrollTop >= this.scrollHight;
    this.$refs.overlay.addEventListener('click', this.onClickOverlay);
  },

  beforeDestroy() {
    this.$refs.overlay.removeEventListener('click', this.onClickOverlay);
    document.removeEventListener('scroll', this.onScroll);
  },

  methods: { ...Object(external_vuex_["mapActions"])(['fetchSearch']),

    langChange(val) {
      this.$i18n.setLocale(val);
    },

    onClickOverlay() {
      this.showMenu = false;
    },

    onScroll(event) {
      if (event.target.scrollingElement.scrollTop >= this.scrollHight) {
        this.isHideTop = true;
      } else this.isHideTop = false;
    },

    onClickMenu() {
      this.showMenu = false;
    },

    onSearch(data) {
      if (this.$route.path === '/search') {
        this.fetchSearch(data);
      } else this.$router.push({
        path: '/search',
        query: {
          query: data
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./components/IHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_IHeadervue_type_script_lang_js_ = (IHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/IHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_IHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b3aa9800"
  
)

/* harmony default export */ var IHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IDonation: __webpack_require__(13).default})


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(37);
module.exports = __webpack_require__(88);


/***/ }),
/* 37 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.__nuxt-error-page {\n  padding: 1rem;\n  background: #F7F8FB;\n  color: #47494E;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: sans-serif;\n  font-weight: 100 !important;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.__nuxt-error-page .error {\n  max-width: 450px;\n}\n.__nuxt-error-page .title {\n  font-size: 1.5rem;\n  margin-top: 15px;\n  color: #47494E;\n  margin-bottom: 8px;\n}\n.__nuxt-error-page .description {\n  color: #7F828B;\n  line-height: 21px;\n  margin-bottom: 10px;\n}\n.__nuxt-error-page a {\n  color: #7F828B !important;\n  text-decoration: none;\n}\n.__nuxt-error-page .logo {\n  position: fixed;\n  left: 12px;\n  bottom: 12px;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  opacity: 1;\n  transition: width 0.1s, opacity 0.4s;\n  background-color: black;\n  z-index: 999999;\n}\n.nuxt-progress.nuxt-progress-notransition {\n  transition: none;\n}\n.nuxt-progress-failed {\n  background-color: red;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(7).default("797461a0", content, true)

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! Buefy v0.9.22 | MIT License | github.com/buefy/buefy */\n@charset \"UTF-8\";\n.is-noscroll {\n  position: fixed;\n  overflow-y: hidden;\n  width: 100%;\n  bottom: 0;\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n.fadeOutDown {\n  animation-name: fadeOutDown;\n}\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n.fadeOutUp {\n  animation-name: fadeOutUp;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.fadeInDown {\n  animation-name: fadeInDown;\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.fadeInUp {\n  animation-name: fadeInUp;\n}\n\n/**\n * Vue Transitions\n */\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 150ms ease-out;\n}\n\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n\n.zoom-in-enter-active,\n.zoom-in-leave-active {\n  transition: opacity 150ms ease-out;\n}\n.zoom-in-enter-active .animation-content,\n.zoom-in-enter-active .animation-content,\n.zoom-in-leave-active .animation-content,\n.zoom-in-leave-active .animation-content {\n  transition: transform 150ms ease-out;\n}\n\n.zoom-in-enter,\n.zoom-in-leave-active {\n  opacity: 0;\n}\n.zoom-in-enter .animation-content,\n.zoom-in-enter .animation-content,\n.zoom-in-leave-active .animation-content,\n.zoom-in-leave-active .animation-content {\n  transform: scale(0.95);\n}\n\n.zoom-out-enter-active,\n.zoom-out-leave-active {\n  transition: opacity 150ms ease-out;\n}\n.zoom-out-enter-active .animation-content,\n.zoom-out-enter-active .animation-content,\n.zoom-out-leave-active .animation-content,\n.zoom-out-leave-active .animation-content {\n  transition: transform 150ms ease-out;\n}\n\n.zoom-out-enter,\n.zoom-out-leave-active {\n  opacity: 0;\n}\n.zoom-out-enter .animation-content,\n.zoom-out-enter .animation-content,\n.zoom-out-leave-active .animation-content,\n.zoom-out-leave-active .animation-content {\n  transform: scale(1.05);\n}\n\n.slide-next-enter-active,\n.slide-next-leave-active,\n.slide-prev-enter-active,\n.slide-prev-leave-active {\n  transition: transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n}\n\n.slide-prev-leave-to, .slide-next-enter {\n  transform: translate3d(-100%, 0, 0);\n  position: absolute;\n  width: 100%;\n}\n\n.slide-prev-enter, .slide-next-leave-to {\n  transform: translate3d(100%, 0, 0);\n  position: absolute;\n  width: 100%;\n}\n\n.slide-down-enter-active,\n.slide-down-leave-active,\n.slide-up-enter-active,\n.slide-up-leave-active {\n  transition: transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n}\n\n.slide-up-leave-to, .slide-down-enter {\n  transform: translate3d(0, -100%, 0);\n  position: absolute;\n  height: 100%;\n}\n\n.slide-up-enter, .slide-down-leave-to {\n  transform: translate3d(0, 100%, 0);\n  position: absolute;\n  height: 100%;\n}\n\n.slide-enter-active {\n  transition: 150ms ease-out;\n}\n\n.slide-leave-active {\n  transition: 150ms ease-out;\n  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n}\n\n.slide-enter-to, .slide-leave {\n  max-height: 100px;\n  overflow: hidden;\n}\n\n.slide-enter, .slide-leave-to {\n  overflow: hidden;\n  max-height: 0;\n}\n\n/*! bulma.io v0.9.3 | MIT License | github.com/jgthms/bulma */\n/* Bulma Utilities */\n.pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis, .file-cta,\n.file-name, .select select, .taginput .taginput-container.is-focusable, .textarea, .input, .button {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.5em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.5em - 1px);\n  padding-left: calc(0.75em - 1px);\n  padding-right: calc(0.75em - 1px);\n  padding-top: calc(0.5em - 1px);\n  position: relative;\n  vertical-align: top;\n}\n.pagination-previous:focus,\n.pagination-next:focus,\n.pagination-link:focus,\n.pagination-ellipsis:focus, .file-cta:focus,\n.file-name:focus, .select select:focus, .taginput .taginput-container.is-focusable:focus, .textarea:focus, .input:focus, .button:focus, .is-focused.pagination-previous,\n.is-focused.pagination-next,\n.is-focused.pagination-link,\n.is-focused.pagination-ellipsis, .is-focused.file-cta,\n.is-focused.file-name, .select select.is-focused, .taginput .is-focused.taginput-container.is-focusable, .is-focused.textarea, .is-focused.input, .is-focused.button, .pagination-previous:active,\n.pagination-next:active,\n.pagination-link:active,\n.pagination-ellipsis:active, .file-cta:active,\n.file-name:active, .select select:active, .taginput .taginput-container.is-focusable:active, .textarea:active, .input:active, .button:active, .is-active.pagination-previous,\n.is-active.pagination-next,\n.is-active.pagination-link,\n.is-active.pagination-ellipsis, .is-active.file-cta,\n.is-active.file-name, .select select.is-active, .taginput .is-active.taginput-container.is-focusable, .is-active.textarea, .is-active.input, .is-active.button {\n  outline: none;\n}\n[disabled].pagination-previous,\n[disabled].pagination-next,\n[disabled].pagination-link,\n[disabled].pagination-ellipsis, [disabled].file-cta,\n[disabled].file-name, .select select[disabled], .taginput [disabled].taginput-container.is-focusable, [disabled].textarea, [disabled].input, [disabled].button, fieldset[disabled] .pagination-previous,\nfieldset[disabled] .pagination-next,\nfieldset[disabled] .pagination-link,\nfieldset[disabled] .pagination-ellipsis, fieldset[disabled] .file-cta,\nfieldset[disabled] .file-name, fieldset[disabled] .select select, .select fieldset[disabled] select, fieldset[disabled] .taginput .taginput-container.is-focusable, .taginput fieldset[disabled] .taginput-container.is-focusable, fieldset[disabled] .textarea, fieldset[disabled] .input, fieldset[disabled] .button {\n  cursor: not-allowed;\n}\n\n.switch, .b-radio.radio, .b-checkbox.checkbox, .carousel-list, .carousel, .is-unselectable, .tabs, .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis, .breadcrumb, .file, .button {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.navbar-link:not(.is-arrowless)::after, .select:not(.is-multiple):not(.is-loading)::after {\n  border: 3px solid transparent;\n  border-radius: 2px;\n  border-right: 0;\n  border-top: 0;\n  content: \" \";\n  display: block;\n  height: 0.625em;\n  margin-top: -0.4375em;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  transform: rotate(-45deg);\n  transform-origin: center;\n  width: 0.625em;\n}\n\n.tabs:not(:last-child), .pagination:not(:last-child), .message:not(:last-child), .level:not(:last-child), .breadcrumb:not(:last-child), .block:not(:last-child), .title:not(:last-child),\n.subtitle:not(:last-child), .table-container:not(:last-child), .table:not(:last-child), .progress:not(:last-child), .progress-wrapper.is-not-native:not(:last-child), .notification:not(:last-child), .content:not(:last-child), .box:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.modal-close, .delete {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 9999px;\n  cursor: pointer;\n  pointer-events: auto;\n  display: inline-block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 0;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px;\n}\n.modal-close::before, .delete::before, .modal-close::after, .delete::after {\n  background-color: white;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  transform-origin: center center;\n}\n.modal-close::before, .delete::before {\n  height: 2px;\n  width: 50%;\n}\n.modal-close::after, .delete::after {\n  height: 50%;\n  width: 2px;\n}\n.modal-close:hover, .delete:hover, .modal-close:focus, .delete:focus {\n  background-color: rgba(10, 10, 10, 0.3);\n}\n.modal-close:active, .delete:active {\n  background-color: rgba(10, 10, 10, 0.4);\n}\n.is-small.modal-close, .is-small.delete {\n  height: 16px;\n  max-height: 16px;\n  max-width: 16px;\n  min-height: 16px;\n  min-width: 16px;\n  width: 16px;\n}\n.is-medium.modal-close, .is-medium.delete {\n  height: 24px;\n  max-height: 24px;\n  max-width: 24px;\n  min-height: 24px;\n  min-width: 24px;\n  width: 24px;\n}\n.is-large.modal-close, .is-large.delete {\n  height: 32px;\n  max-height: 32px;\n  max-width: 32px;\n  min-height: 32px;\n  min-width: 32px;\n  width: 32px;\n}\n\n.control.is-loading::after, .select.is-loading::after, .loader, .button.is-loading::after {\n  animation: spinAround 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 9999px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em;\n}\n\n.b-image-wrapper > img.has-ratio, .b-image-wrapper > img.placeholder, .hero-video, .is-overlay, .modal-background, .modal, .image.is-square img,\n.image.is-square .has-ratio, .image.is-1by1 img,\n.image.is-1by1 .has-ratio, .image.is-5by4 img,\n.image.is-5by4 .has-ratio, .image.is-4by3 img,\n.image.is-4by3 .has-ratio, .image.is-3by2 img,\n.image.is-3by2 .has-ratio, .image.is-5by3 img,\n.image.is-5by3 .has-ratio, .image.is-16by9 img,\n.image.is-16by9 .has-ratio, .image.is-2by1 img,\n.image.is-2by1 .has-ratio, .image.is-3by1 img,\n.image.is-3by1 .has-ratio, .image.is-4by5 img,\n.image.is-4by5 .has-ratio, .image.is-3by4 img,\n.image.is-3by4 .has-ratio, .image.is-2by3 img,\n.image.is-2by3 .has-ratio, .image.is-3by5 img,\n.image.is-3by5 .has-ratio, .image.is-9by16 img,\n.image.is-9by16 .has-ratio, .image.is-1by2 img,\n.image.is-1by2 .has-ratio, .image.is-1by3 img,\n.image.is-1by3 .has-ratio {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.navbar-burger {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background: none;\n  border: none;\n  color: currentColor;\n  font-family: inherit;\n  font-size: 1em;\n  margin: 0;\n  padding: 0;\n}\n\n/* Bulma Base */\n/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\nul {\n  list-style: none;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nimg,\nvideo {\n  height: auto;\n  max-width: 100%;\n}\n\niframe {\n  border: 0;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\ntd:not([align]),\nth:not([align]) {\n  text-align: inherit;\n}\n\nhtml {\n  background-color: white;\n  font-size: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility;\n  text-size-adjust: 100%;\n}\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block;\n}\n\nbody,\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\n\ncode,\npre {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: monospace;\n}\n\nbody {\n  color: #4a4a4a;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.5;\n}\n\na {\n  color: #7957d5;\n  cursor: pointer;\n  text-decoration: none;\n}\na strong {\n  color: currentColor;\n}\na:hover {\n  color: #363636;\n}\n\ncode {\n  background-color: whitesmoke;\n  color: #da1039;\n  font-size: 0.875em;\n  font-weight: normal;\n  padding: 0.25em 0.5em 0.25em;\n}\n\nhr {\n  background-color: whitesmoke;\n  border: none;\n  display: block;\n  height: 2px;\n  margin: 1.5rem 0;\n}\n\nimg {\n  height: auto;\n  max-width: 100%;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n  vertical-align: baseline;\n}\n\nsmall {\n  font-size: 0.875em;\n}\n\nspan {\n  font-style: inherit;\n  font-weight: inherit;\n}\n\nstrong {\n  color: #363636;\n  font-weight: 700;\n}\n\nfieldset {\n  border: none;\n}\n\npre {\n  -webkit-overflow-scrolling: touch;\n  background-color: whitesmoke;\n  color: #4a4a4a;\n  font-size: 0.875em;\n  overflow-x: auto;\n  padding: 1.25rem 1.5rem;\n  white-space: pre;\n  word-wrap: normal;\n}\npre code {\n  background-color: transparent;\n  color: currentColor;\n  font-size: 1em;\n  padding: 0;\n}\n\ntable td,\ntable th {\n  vertical-align: top;\n}\ntable td:not([align]),\ntable th:not([align]) {\n  text-align: inherit;\n}\ntable th {\n  color: #363636;\n}\n\n@keyframes spinAround {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n/* Bulma Elements */\n.box {\n  background-color: white;\n  border-radius: 6px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  color: #4a4a4a;\n  display: block;\n  padding: 1.25rem;\n}\n\na.box:hover, a.box:focus {\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px #7957d5;\n}\na.box:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #7957d5;\n}\n\n.button {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-width: 1px;\n  color: #363636;\n  cursor: pointer;\n  justify-content: center;\n  padding-bottom: calc(0.5em - 1px);\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-top: calc(0.5em - 1px);\n  text-align: center;\n  white-space: nowrap;\n}\n.button strong {\n  color: inherit;\n}\n.button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {\n  height: 1.5em;\n  width: 1.5em;\n}\n.button .icon:first-child:not(:last-child) {\n  margin-left: calc(-0.5em - 1px);\n  margin-right: 0.25em;\n}\n.button .icon:last-child:not(:first-child) {\n  margin-left: 0.25em;\n  margin-right: calc(-0.5em - 1px);\n}\n.button .icon:first-child:last-child {\n  margin-left: calc(-0.5em - 1px);\n  margin-right: calc(-0.5em - 1px);\n}\n.button:hover, .button.is-hovered {\n  border-color: #b5b5b5;\n  color: #363636;\n}\n.button:focus, .button.is-focused {\n  border-color: #7957d5;\n  color: #363636;\n}\n.button:focus:not(:active), .button.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.button:active, .button.is-active {\n  border-color: #4a4a4a;\n  color: #363636;\n}\n.button.is-text {\n  background-color: transparent;\n  border-color: transparent;\n  color: #4a4a4a;\n  text-decoration: underline;\n}\n.button.is-text:hover, .button.is-text.is-hovered, .button.is-text:focus, .button.is-text.is-focused {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.button.is-text:active, .button.is-text.is-active {\n  background-color: #e8e8e8;\n  color: #363636;\n}\n.button.is-text[disabled], fieldset[disabled] .button.is-text {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-ghost {\n  background: none;\n  border-color: transparent;\n  color: #7957d5;\n  text-decoration: none;\n}\n.button.is-ghost:hover, .button.is-ghost.is-hovered {\n  color: #7957d5;\n  text-decoration: underline;\n}\n.button.is-white {\n  background-color: white;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.button.is-white:hover, .button.is-white.is-hovered {\n  background-color: #f9f9f9;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.button.is-white:focus, .button.is-white.is-focused {\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.button.is-white:focus:not(:active), .button.is-white.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.button.is-white:active, .button.is-white.is-active {\n  background-color: #f2f2f2;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.button.is-white[disabled], fieldset[disabled] .button.is-white {\n  background-color: white;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-white.is-inverted {\n  background-color: #0a0a0a;\n  color: white;\n}\n.button.is-white.is-inverted:hover, .button.is-white.is-inverted.is-hovered {\n  background-color: black;\n}\n.button.is-white.is-inverted[disabled], fieldset[disabled] .button.is-white.is-inverted {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  box-shadow: none;\n  color: white;\n}\n.button.is-white.is-loading::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-white.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n.button.is-white.is-outlined:hover, .button.is-white.is-outlined.is-hovered, .button.is-white.is-outlined:focus, .button.is-white.is-outlined.is-focused {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n.button.is-white.is-outlined.is-loading::after {\n  border-color: transparent transparent white white !important;\n}\n.button.is-white.is-outlined.is-loading:hover::after, .button.is-white.is-outlined.is-loading.is-hovered::after, .button.is-white.is-outlined.is-loading:focus::after, .button.is-white.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-white.is-outlined[disabled], fieldset[disabled] .button.is-white.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  box-shadow: none;\n  color: white;\n}\n.button.is-white.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  color: #0a0a0a;\n}\n.button.is-white.is-inverted.is-outlined:hover, .button.is-white.is-inverted.is-outlined.is-hovered, .button.is-white.is-inverted.is-outlined:focus, .button.is-white.is-inverted.is-outlined.is-focused {\n  background-color: #0a0a0a;\n  color: white;\n}\n.button.is-white.is-inverted.is-outlined.is-loading:hover::after, .button.is-white.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-white.is-inverted.is-outlined.is-loading:focus::after, .button.is-white.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent white white !important;\n}\n.button.is-white.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-white.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  box-shadow: none;\n  color: #0a0a0a;\n}\n.button.is-black {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  color: white;\n}\n.button.is-black:hover, .button.is-black.is-hovered {\n  background-color: #040404;\n  border-color: transparent;\n  color: white;\n}\n.button.is-black:focus, .button.is-black.is-focused {\n  border-color: transparent;\n  color: white;\n}\n.button.is-black:focus:not(:active), .button.is-black.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.button.is-black:active, .button.is-black.is-active {\n  background-color: black;\n  border-color: transparent;\n  color: white;\n}\n.button.is-black[disabled], fieldset[disabled] .button.is-black {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-black.is-inverted {\n  background-color: white;\n  color: #0a0a0a;\n}\n.button.is-black.is-inverted:hover, .button.is-black.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-black.is-inverted[disabled], fieldset[disabled] .button.is-black.is-inverted {\n  background-color: white;\n  border-color: transparent;\n  box-shadow: none;\n  color: #0a0a0a;\n}\n.button.is-black.is-loading::after {\n  border-color: transparent transparent white white !important;\n}\n.button.is-black.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  color: #0a0a0a;\n}\n.button.is-black.is-outlined:hover, .button.is-black.is-outlined.is-hovered, .button.is-black.is-outlined:focus, .button.is-black.is-outlined.is-focused {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n.button.is-black.is-outlined.is-loading::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-black.is-outlined.is-loading:hover::after, .button.is-black.is-outlined.is-loading.is-hovered::after, .button.is-black.is-outlined.is-loading:focus::after, .button.is-black.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent white white !important;\n}\n.button.is-black.is-outlined[disabled], fieldset[disabled] .button.is-black.is-outlined {\n  background-color: transparent;\n  border-color: #0a0a0a;\n  box-shadow: none;\n  color: #0a0a0a;\n}\n.button.is-black.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n.button.is-black.is-inverted.is-outlined:hover, .button.is-black.is-inverted.is-outlined.is-hovered, .button.is-black.is-inverted.is-outlined:focus, .button.is-black.is-inverted.is-outlined.is-focused {\n  background-color: white;\n  color: #0a0a0a;\n}\n.button.is-black.is-inverted.is-outlined.is-loading:hover::after, .button.is-black.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-black.is-inverted.is-outlined.is-loading:focus::after, .button.is-black.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-black.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-black.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  box-shadow: none;\n  color: white;\n}\n.button.is-light {\n  background-color: whitesmoke;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light:hover, .button.is-light.is-hovered {\n  background-color: #eeeeee;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light:focus, .button.is-light.is-focused {\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light:focus:not(:active), .button.is-light.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.button.is-light:active, .button.is-light.is-active {\n  background-color: #e8e8e8;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light[disabled], fieldset[disabled] .button.is-light {\n  background-color: whitesmoke;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-light.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke;\n}\n.button.is-light.is-inverted:hover, .button.is-light.is-inverted.is-hovered {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light.is-inverted[disabled], fieldset[disabled] .button.is-light.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: transparent;\n  box-shadow: none;\n  color: whitesmoke;\n}\n.button.is-light.is-loading::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n.button.is-light.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  color: whitesmoke;\n}\n.button.is-light.is-outlined:hover, .button.is-light.is-outlined.is-hovered, .button.is-light.is-outlined:focus, .button.is-light.is-outlined.is-focused {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light.is-outlined.is-loading::after {\n  border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n.button.is-light.is-outlined.is-loading:hover::after, .button.is-light.is-outlined.is-loading.is-hovered::after, .button.is-light.is-outlined.is-loading:focus::after, .button.is-light.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n.button.is-light.is-outlined[disabled], fieldset[disabled] .button.is-light.is-outlined {\n  background-color: transparent;\n  border-color: whitesmoke;\n  box-shadow: none;\n  color: whitesmoke;\n}\n.button.is-light.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-light.is-inverted.is-outlined:hover, .button.is-light.is-inverted.is-outlined.is-hovered, .button.is-light.is-inverted.is-outlined:focus, .button.is-light.is-inverted.is-outlined.is-focused {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke;\n}\n.button.is-light.is-inverted.is-outlined.is-loading:hover::after, .button.is-light.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-light.is-inverted.is-outlined.is-loading:focus::after, .button.is-light.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n.button.is-light.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-light.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-dark {\n  background-color: #363636;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-dark:hover, .button.is-dark.is-hovered {\n  background-color: #2f2f2f;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-dark:focus, .button.is-dark.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-dark:focus:not(:active), .button.is-dark.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.button.is-dark:active, .button.is-dark.is-active {\n  background-color: #292929;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-dark[disabled], fieldset[disabled] .button.is-dark {\n  background-color: #363636;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-dark.is-inverted {\n  background-color: #fff;\n  color: #363636;\n}\n.button.is-dark.is-inverted:hover, .button.is-dark.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-dark.is-inverted[disabled], fieldset[disabled] .button.is-dark.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #363636;\n}\n.button.is-dark.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-dark.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  color: #363636;\n}\n.button.is-dark.is-outlined:hover, .button.is-dark.is-outlined.is-hovered, .button.is-dark.is-outlined:focus, .button.is-dark.is-outlined.is-focused {\n  background-color: #363636;\n  border-color: #363636;\n  color: #fff;\n}\n.button.is-dark.is-outlined.is-loading::after {\n  border-color: transparent transparent #363636 #363636 !important;\n}\n.button.is-dark.is-outlined.is-loading:hover::after, .button.is-dark.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-outlined.is-loading:focus::after, .button.is-dark.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-dark.is-outlined[disabled], fieldset[disabled] .button.is-dark.is-outlined {\n  background-color: transparent;\n  border-color: #363636;\n  box-shadow: none;\n  color: #363636;\n}\n.button.is-dark.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-dark.is-inverted.is-outlined:hover, .button.is-dark.is-inverted.is-outlined.is-hovered, .button.is-dark.is-inverted.is-outlined:focus, .button.is-dark.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #363636;\n}\n.button.is-dark.is-inverted.is-outlined.is-loading:hover::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-inverted.is-outlined.is-loading:focus::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #363636 #363636 !important;\n}\n.button.is-dark.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-dark.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n.button.is-primary {\n  background-color: #7957d5;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-primary:hover, .button.is-primary.is-hovered {\n  background-color: #714dd2;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-primary:focus, .button.is-primary.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.button.is-primary:active, .button.is-primary.is-active {\n  background-color: #6943d0;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-primary[disabled], fieldset[disabled] .button.is-primary {\n  background-color: #7957d5;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-primary.is-inverted {\n  background-color: #fff;\n  color: #7957d5;\n}\n.button.is-primary.is-inverted:hover, .button.is-primary.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-primary.is-inverted[disabled], fieldset[disabled] .button.is-primary.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #7957d5;\n}\n.button.is-primary.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-primary.is-outlined {\n  background-color: transparent;\n  border-color: #7957d5;\n  color: #7957d5;\n}\n.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered, .button.is-primary.is-outlined:focus, .button.is-primary.is-outlined.is-focused {\n  background-color: #7957d5;\n  border-color: #7957d5;\n  color: #fff;\n}\n.button.is-primary.is-outlined.is-loading::after {\n  border-color: transparent transparent #7957d5 #7957d5 !important;\n}\n.button.is-primary.is-outlined.is-loading:hover::after, .button.is-primary.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-outlined.is-loading:focus::after, .button.is-primary.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-primary.is-outlined[disabled], fieldset[disabled] .button.is-primary.is-outlined {\n  background-color: transparent;\n  border-color: #7957d5;\n  box-shadow: none;\n  color: #7957d5;\n}\n.button.is-primary.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined.is-hovered, .button.is-primary.is-inverted.is-outlined:focus, .button.is-primary.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #7957d5;\n}\n.button.is-primary.is-inverted.is-outlined.is-loading:hover::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-inverted.is-outlined.is-loading:focus::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #7957d5 #7957d5 !important;\n}\n.button.is-primary.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-primary.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n.button.is-primary.is-light {\n  background-color: #f2effb;\n  color: #552fbc;\n}\n.button.is-primary.is-light:hover, .button.is-primary.is-light.is-hovered {\n  background-color: #eae4f8;\n  border-color: transparent;\n  color: #552fbc;\n}\n.button.is-primary.is-light:active, .button.is-primary.is-light.is-active {\n  background-color: #e2daf6;\n  border-color: transparent;\n  color: #552fbc;\n}\n.button.is-link {\n  background-color: #7957d5;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-link:hover, .button.is-link.is-hovered {\n  background-color: #714dd2;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-link:focus, .button.is-link.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-link:focus:not(:active), .button.is-link.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.button.is-link:active, .button.is-link.is-active {\n  background-color: #6943d0;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-link[disabled], fieldset[disabled] .button.is-link {\n  background-color: #7957d5;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-link.is-inverted {\n  background-color: #fff;\n  color: #7957d5;\n}\n.button.is-link.is-inverted:hover, .button.is-link.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-link.is-inverted[disabled], fieldset[disabled] .button.is-link.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #7957d5;\n}\n.button.is-link.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-link.is-outlined {\n  background-color: transparent;\n  border-color: #7957d5;\n  color: #7957d5;\n}\n.button.is-link.is-outlined:hover, .button.is-link.is-outlined.is-hovered, .button.is-link.is-outlined:focus, .button.is-link.is-outlined.is-focused {\n  background-color: #7957d5;\n  border-color: #7957d5;\n  color: #fff;\n}\n.button.is-link.is-outlined.is-loading::after {\n  border-color: transparent transparent #7957d5 #7957d5 !important;\n}\n.button.is-link.is-outlined.is-loading:hover::after, .button.is-link.is-outlined.is-loading.is-hovered::after, .button.is-link.is-outlined.is-loading:focus::after, .button.is-link.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-link.is-outlined[disabled], fieldset[disabled] .button.is-link.is-outlined {\n  background-color: transparent;\n  border-color: #7957d5;\n  box-shadow: none;\n  color: #7957d5;\n}\n.button.is-link.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-link.is-inverted.is-outlined:hover, .button.is-link.is-inverted.is-outlined.is-hovered, .button.is-link.is-inverted.is-outlined:focus, .button.is-link.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #7957d5;\n}\n.button.is-link.is-inverted.is-outlined.is-loading:hover::after, .button.is-link.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-link.is-inverted.is-outlined.is-loading:focus::after, .button.is-link.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #7957d5 #7957d5 !important;\n}\n.button.is-link.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-link.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n.button.is-link.is-light {\n  background-color: #f2effb;\n  color: #552fbc;\n}\n.button.is-link.is-light:hover, .button.is-link.is-light.is-hovered {\n  background-color: #eae4f8;\n  border-color: transparent;\n  color: #552fbc;\n}\n.button.is-link.is-light:active, .button.is-link.is-light.is-active {\n  background-color: #e2daf6;\n  border-color: transparent;\n  color: #552fbc;\n}\n.button.is-info {\n  background-color: #167df0;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-info:hover, .button.is-info.is-hovered {\n  background-color: #0f77ea;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-info:focus, .button.is-info.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-info:focus:not(:active), .button.is-info.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(22, 125, 240, 0.25);\n}\n.button.is-info:active, .button.is-info.is-active {\n  background-color: #0e71de;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-info[disabled], fieldset[disabled] .button.is-info {\n  background-color: #167df0;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-info.is-inverted {\n  background-color: #fff;\n  color: #167df0;\n}\n.button.is-info.is-inverted:hover, .button.is-info.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-info.is-inverted[disabled], fieldset[disabled] .button.is-info.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #167df0;\n}\n.button.is-info.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-info.is-outlined {\n  background-color: transparent;\n  border-color: #167df0;\n  color: #167df0;\n}\n.button.is-info.is-outlined:hover, .button.is-info.is-outlined.is-hovered, .button.is-info.is-outlined:focus, .button.is-info.is-outlined.is-focused {\n  background-color: #167df0;\n  border-color: #167df0;\n  color: #fff;\n}\n.button.is-info.is-outlined.is-loading::after {\n  border-color: transparent transparent #167df0 #167df0 !important;\n}\n.button.is-info.is-outlined.is-loading:hover::after, .button.is-info.is-outlined.is-loading.is-hovered::after, .button.is-info.is-outlined.is-loading:focus::after, .button.is-info.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-info.is-outlined[disabled], fieldset[disabled] .button.is-info.is-outlined {\n  background-color: transparent;\n  border-color: #167df0;\n  box-shadow: none;\n  color: #167df0;\n}\n.button.is-info.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-info.is-inverted.is-outlined:hover, .button.is-info.is-inverted.is-outlined.is-hovered, .button.is-info.is-inverted.is-outlined:focus, .button.is-info.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #167df0;\n}\n.button.is-info.is-inverted.is-outlined.is-loading:hover::after, .button.is-info.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-info.is-inverted.is-outlined.is-loading:focus::after, .button.is-info.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #167df0 #167df0 !important;\n}\n.button.is-info.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-info.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n.button.is-info.is-light {\n  background-color: #ecf4fe;\n  color: #0d68ce;\n}\n.button.is-info.is-light:hover, .button.is-info.is-light.is-hovered {\n  background-color: #e0eefd;\n  border-color: transparent;\n  color: #0d68ce;\n}\n.button.is-info.is-light:active, .button.is-info.is-light.is-active {\n  background-color: #d4e7fc;\n  border-color: transparent;\n  color: #0d68ce;\n}\n.button.is-success {\n  background-color: #48c78e;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-success:hover, .button.is-success.is-hovered {\n  background-color: #3ec487;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-success:focus, .button.is-success.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-success:focus:not(:active), .button.is-success.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);\n}\n.button.is-success:active, .button.is-success.is-active {\n  background-color: #3abb81;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-success[disabled], fieldset[disabled] .button.is-success {\n  background-color: #48c78e;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-success.is-inverted {\n  background-color: #fff;\n  color: #48c78e;\n}\n.button.is-success.is-inverted:hover, .button.is-success.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-success.is-inverted[disabled], fieldset[disabled] .button.is-success.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #48c78e;\n}\n.button.is-success.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-success.is-outlined {\n  background-color: transparent;\n  border-color: #48c78e;\n  color: #48c78e;\n}\n.button.is-success.is-outlined:hover, .button.is-success.is-outlined.is-hovered, .button.is-success.is-outlined:focus, .button.is-success.is-outlined.is-focused {\n  background-color: #48c78e;\n  border-color: #48c78e;\n  color: #fff;\n}\n.button.is-success.is-outlined.is-loading::after {\n  border-color: transparent transparent #48c78e #48c78e !important;\n}\n.button.is-success.is-outlined.is-loading:hover::after, .button.is-success.is-outlined.is-loading.is-hovered::after, .button.is-success.is-outlined.is-loading:focus::after, .button.is-success.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-success.is-outlined[disabled], fieldset[disabled] .button.is-success.is-outlined {\n  background-color: transparent;\n  border-color: #48c78e;\n  box-shadow: none;\n  color: #48c78e;\n}\n.button.is-success.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-success.is-inverted.is-outlined:hover, .button.is-success.is-inverted.is-outlined.is-hovered, .button.is-success.is-inverted.is-outlined:focus, .button.is-success.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #48c78e;\n}\n.button.is-success.is-inverted.is-outlined.is-loading:hover::after, .button.is-success.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-success.is-inverted.is-outlined.is-loading:focus::after, .button.is-success.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #48c78e #48c78e !important;\n}\n.button.is-success.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-success.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n.button.is-success.is-light {\n  background-color: #effaf5;\n  color: #257953;\n}\n.button.is-success.is-light:hover, .button.is-success.is-light.is-hovered {\n  background-color: #e6f7ef;\n  border-color: transparent;\n  color: #257953;\n}\n.button.is-success.is-light:active, .button.is-success.is-light.is-active {\n  background-color: #dcf4e9;\n  border-color: transparent;\n  color: #257953;\n}\n.button.is-warning {\n  background-color: #ffe08a;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:hover, .button.is-warning.is-hovered {\n  background-color: #ffdc7d;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:focus, .button.is-warning.is-focused {\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:focus:not(:active), .button.is-warning.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);\n}\n.button.is-warning:active, .button.is-warning.is-active {\n  background-color: #ffd970;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning[disabled], fieldset[disabled] .button.is-warning {\n  background-color: #ffe08a;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-warning.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #ffe08a;\n}\n.button.is-warning.is-inverted:hover, .button.is-warning.is-inverted.is-hovered {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-inverted[disabled], fieldset[disabled] .button.is-warning.is-inverted {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: transparent;\n  box-shadow: none;\n  color: #ffe08a;\n}\n.button.is-warning.is-loading::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n.button.is-warning.is-outlined {\n  background-color: transparent;\n  border-color: #ffe08a;\n  color: #ffe08a;\n}\n.button.is-warning.is-outlined:hover, .button.is-warning.is-outlined.is-hovered, .button.is-warning.is-outlined:focus, .button.is-warning.is-outlined.is-focused {\n  background-color: #ffe08a;\n  border-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-outlined.is-loading::after {\n  border-color: transparent transparent #ffe08a #ffe08a !important;\n}\n.button.is-warning.is-outlined.is-loading:hover::after, .button.is-warning.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-outlined.is-loading:focus::after, .button.is-warning.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n.button.is-warning.is-outlined[disabled], fieldset[disabled] .button.is-warning.is-outlined {\n  background-color: transparent;\n  border-color: #ffe08a;\n  box-shadow: none;\n  color: #ffe08a;\n}\n.button.is-warning.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-inverted.is-outlined:hover, .button.is-warning.is-inverted.is-outlined.is-hovered, .button.is-warning.is-inverted.is-outlined:focus, .button.is-warning.is-inverted.is-outlined.is-focused {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #ffe08a;\n}\n.button.is-warning.is-inverted.is-outlined.is-loading:hover::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-inverted.is-outlined.is-loading:focus::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #ffe08a #ffe08a !important;\n}\n.button.is-warning.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-warning.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.7);\n  box-shadow: none;\n  color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-light {\n  background-color: #fffaeb;\n  color: #946c00;\n}\n.button.is-warning.is-light:hover, .button.is-warning.is-light.is-hovered {\n  background-color: #fff6de;\n  border-color: transparent;\n  color: #946c00;\n}\n.button.is-warning.is-light:active, .button.is-warning.is-light.is-active {\n  background-color: #fff3d1;\n  border-color: transparent;\n  color: #946c00;\n}\n.button.is-danger {\n  background-color: #f14668;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-danger:hover, .button.is-danger.is-hovered {\n  background-color: #f03a5f;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-danger:focus, .button.is-danger.is-focused {\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-danger:focus:not(:active), .button.is-danger.is-focused:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n}\n.button.is-danger:active, .button.is-danger.is-active {\n  background-color: #ef2e55;\n  border-color: transparent;\n  color: #fff;\n}\n.button.is-danger[disabled], fieldset[disabled] .button.is-danger {\n  background-color: #f14668;\n  border-color: transparent;\n  box-shadow: none;\n}\n.button.is-danger.is-inverted {\n  background-color: #fff;\n  color: #f14668;\n}\n.button.is-danger.is-inverted:hover, .button.is-danger.is-inverted.is-hovered {\n  background-color: #f2f2f2;\n}\n.button.is-danger.is-inverted[disabled], fieldset[disabled] .button.is-danger.is-inverted {\n  background-color: #fff;\n  border-color: transparent;\n  box-shadow: none;\n  color: #f14668;\n}\n.button.is-danger.is-loading::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-danger.is-outlined {\n  background-color: transparent;\n  border-color: #f14668;\n  color: #f14668;\n}\n.button.is-danger.is-outlined:hover, .button.is-danger.is-outlined.is-hovered, .button.is-danger.is-outlined:focus, .button.is-danger.is-outlined.is-focused {\n  background-color: #f14668;\n  border-color: #f14668;\n  color: #fff;\n}\n.button.is-danger.is-outlined.is-loading::after {\n  border-color: transparent transparent #f14668 #f14668 !important;\n}\n.button.is-danger.is-outlined.is-loading:hover::after, .button.is-danger.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-outlined.is-loading:focus::after, .button.is-danger.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #fff #fff !important;\n}\n.button.is-danger.is-outlined[disabled], fieldset[disabled] .button.is-danger.is-outlined {\n  background-color: transparent;\n  border-color: #f14668;\n  box-shadow: none;\n  color: #f14668;\n}\n.button.is-danger.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  color: #fff;\n}\n.button.is-danger.is-inverted.is-outlined:hover, .button.is-danger.is-inverted.is-outlined.is-hovered, .button.is-danger.is-inverted.is-outlined:focus, .button.is-danger.is-inverted.is-outlined.is-focused {\n  background-color: #fff;\n  color: #f14668;\n}\n.button.is-danger.is-inverted.is-outlined.is-loading:hover::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-inverted.is-outlined.is-loading:focus::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-focused::after {\n  border-color: transparent transparent #f14668 #f14668 !important;\n}\n.button.is-danger.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-danger.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: #fff;\n  box-shadow: none;\n  color: #fff;\n}\n.button.is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35;\n}\n.button.is-danger.is-light:hover, .button.is-danger.is-light.is-hovered {\n  background-color: #fde0e6;\n  border-color: transparent;\n  color: #cc0f35;\n}\n.button.is-danger.is-light:active, .button.is-danger.is-light.is-active {\n  background-color: #fcd4dc;\n  border-color: transparent;\n  color: #cc0f35;\n}\n.button.is-small {\n  font-size: 0.75rem;\n}\n.button.is-small:not(.is-rounded) {\n  border-radius: 2px;\n}\n.button.is-normal {\n  font-size: 1rem;\n}\n.button.is-medium {\n  font-size: 1.25rem;\n}\n.button.is-large {\n  font-size: 1.5rem;\n}\n.button[disabled], fieldset[disabled] .button {\n  background-color: white;\n  border-color: #dbdbdb;\n  box-shadow: none;\n  opacity: 0.5;\n}\n.button.is-fullwidth {\n  display: flex;\n  width: 100%;\n}\n.button.is-loading {\n  color: transparent !important;\n  pointer-events: none;\n}\n.button.is-loading::after {\n  position: absolute;\n  left: calc(50% - (1em * 0.5));\n  top: calc(50% - (1em * 0.5));\n  position: absolute !important;\n}\n.button.is-static {\n  background-color: whitesmoke;\n  border-color: #dbdbdb;\n  color: #7a7a7a;\n  box-shadow: none;\n  pointer-events: none;\n}\n.button.is-rounded {\n  border-radius: 9999px;\n  padding-left: calc(1em + 0.25em);\n  padding-right: calc(1em + 0.25em);\n}\n\n.buttons {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.buttons .button {\n  margin-bottom: 0.5rem;\n}\n.buttons .button:not(:last-child):not(.is-fullwidth) {\n  margin-right: 0.5rem;\n}\n.buttons:last-child {\n  margin-bottom: -0.5rem;\n}\n.buttons:not(:last-child) {\n  margin-bottom: 1rem;\n}\n.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large) {\n  font-size: 0.75rem;\n}\n.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large):not(.is-rounded) {\n  border-radius: 2px;\n}\n.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large) {\n  font-size: 1.25rem;\n}\n.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium) {\n  font-size: 1.5rem;\n}\n.buttons.has-addons .button:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.buttons.has-addons .button:not(:last-child) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  margin-right: -1px;\n}\n.buttons.has-addons .button:last-child {\n  margin-right: 0;\n}\n.buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {\n  z-index: 2;\n}\n.buttons.has-addons .button:focus, .buttons.has-addons .button.is-focused, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active, .buttons.has-addons .button.is-selected {\n  z-index: 3;\n}\n.buttons.has-addons .button:focus:hover, .buttons.has-addons .button.is-focused:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover, .buttons.has-addons .button.is-selected:hover {\n  z-index: 4;\n}\n.buttons.has-addons .button.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.buttons.is-centered {\n  justify-content: center;\n}\n.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth) {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n.buttons.is-right {\n  justify-content: flex-end;\n}\n.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth) {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n\n.container {\n  flex-grow: 1;\n  margin: 0 auto;\n  position: relative;\n  width: auto;\n}\n.container.is-fluid {\n  max-width: none !important;\n  padding-left: 32px;\n  padding-right: 32px;\n  width: 100%;\n}\n@media screen and (min-width: 1024px) {\n  .container {\n    max-width: 960px;\n  }\n}\n@media screen and (max-width: 1215px) {\n  .container.is-widescreen:not(.is-max-desktop) {\n    max-width: 1152px;\n  }\n}\n@media screen and (max-width: 1407px) {\n  .container.is-fullhd:not(.is-max-desktop):not(.is-max-widescreen) {\n    max-width: 1344px;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .container:not(.is-max-desktop) {\n    max-width: 1152px;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .container:not(.is-max-desktop):not(.is-max-widescreen) {\n    max-width: 1344px;\n  }\n}\n\n.content li + li {\n  margin-top: 0.25em;\n}\n.content p:not(:last-child),\n.content dl:not(:last-child),\n.content ol:not(:last-child),\n.content ul:not(:last-child),\n.content blockquote:not(:last-child),\n.content pre:not(:last-child),\n.content table:not(:last-child) {\n  margin-bottom: 1em;\n}\n.content h1,\n.content h2,\n.content h3,\n.content h4,\n.content h5,\n.content h6 {\n  color: #363636;\n  font-weight: 600;\n  line-height: 1.125;\n}\n.content h1 {\n  font-size: 2em;\n  margin-bottom: 0.5em;\n}\n.content h1:not(:first-child) {\n  margin-top: 1em;\n}\n.content h2 {\n  font-size: 1.75em;\n  margin-bottom: 0.5714em;\n}\n.content h2:not(:first-child) {\n  margin-top: 1.1428em;\n}\n.content h3 {\n  font-size: 1.5em;\n  margin-bottom: 0.6666em;\n}\n.content h3:not(:first-child) {\n  margin-top: 1.3333em;\n}\n.content h4 {\n  font-size: 1.25em;\n  margin-bottom: 0.8em;\n}\n.content h5 {\n  font-size: 1.125em;\n  margin-bottom: 0.8888em;\n}\n.content h6 {\n  font-size: 1em;\n  margin-bottom: 1em;\n}\n.content blockquote {\n  background-color: whitesmoke;\n  border-left: 5px solid #dbdbdb;\n  padding: 1.25em 1.5em;\n}\n.content ol {\n  list-style-position: outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n.content ol:not([type]) {\n  list-style-type: decimal;\n}\n.content ol:not([type]).is-lower-alpha {\n  list-style-type: lower-alpha;\n}\n.content ol:not([type]).is-lower-roman {\n  list-style-type: lower-roman;\n}\n.content ol:not([type]).is-upper-alpha {\n  list-style-type: upper-alpha;\n}\n.content ol:not([type]).is-upper-roman {\n  list-style-type: upper-roman;\n}\n.content ul {\n  list-style: disc outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n.content ul ul {\n  list-style-type: circle;\n  margin-top: 0.5em;\n}\n.content ul ul ul {\n  list-style-type: square;\n}\n.content dd {\n  margin-left: 2em;\n}\n.content figure {\n  margin-left: 2em;\n  margin-right: 2em;\n  text-align: center;\n}\n.content figure:not(:first-child) {\n  margin-top: 2em;\n}\n.content figure:not(:last-child) {\n  margin-bottom: 2em;\n}\n.content figure img {\n  display: inline-block;\n}\n.content figure figcaption {\n  font-style: italic;\n}\n.content pre {\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto;\n  padding: 1.25em 1.5em;\n  white-space: pre;\n  word-wrap: normal;\n}\n.content sup,\n.content sub {\n  font-size: 75%;\n}\n.content table {\n  width: 100%;\n}\n.content table td,\n.content table th {\n  border: 1px solid #dbdbdb;\n  border-width: 0 0 1px;\n  padding: 0.5em 0.75em;\n  vertical-align: top;\n}\n.content table th {\n  color: #363636;\n}\n.content table th:not([align]) {\n  text-align: inherit;\n}\n.content table thead td,\n.content table thead th {\n  border-width: 0 0 2px;\n  color: #363636;\n}\n.content table tfoot td,\n.content table tfoot th {\n  border-width: 2px 0 0;\n  color: #363636;\n}\n.content table tbody tr:last-child td,\n.content table tbody tr:last-child th {\n  border-bottom-width: 0;\n}\n.content .tabs li + li {\n  margin-top: 0;\n}\n.content.is-small {\n  font-size: 0.75rem;\n}\n.content.is-normal {\n  font-size: 1rem;\n}\n.content.is-medium {\n  font-size: 1.25rem;\n}\n.content.is-large {\n  font-size: 1.5rem;\n}\n\n.icon {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  height: 1.5rem;\n  width: 1.5rem;\n}\n.icon.is-small {\n  height: 1rem;\n  width: 1rem;\n}\n.icon.is-medium {\n  height: 2rem;\n  width: 2rem;\n}\n.icon.is-large {\n  height: 3rem;\n  width: 3rem;\n}\n\n.icon-text {\n  align-items: flex-start;\n  color: inherit;\n  display: inline-flex;\n  flex-wrap: wrap;\n  line-height: 1.5rem;\n  vertical-align: top;\n}\n.icon-text .icon {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.icon-text .icon:not(:last-child) {\n  margin-right: 0.25em;\n}\n.icon-text .icon:not(:first-child) {\n  margin-left: 0.25em;\n}\n\ndiv.icon-text {\n  display: flex;\n}\n\n.image {\n  display: block;\n  position: relative;\n}\n.image img {\n  display: block;\n  height: auto;\n  width: 100%;\n}\n.image img.is-rounded {\n  border-radius: 9999px;\n}\n.image.is-fullwidth {\n  width: 100%;\n}\n.image.is-square img,\n.image.is-square .has-ratio, .image.is-1by1 img,\n.image.is-1by1 .has-ratio, .image.is-5by4 img,\n.image.is-5by4 .has-ratio, .image.is-4by3 img,\n.image.is-4by3 .has-ratio, .image.is-3by2 img,\n.image.is-3by2 .has-ratio, .image.is-5by3 img,\n.image.is-5by3 .has-ratio, .image.is-16by9 img,\n.image.is-16by9 .has-ratio, .image.is-2by1 img,\n.image.is-2by1 .has-ratio, .image.is-3by1 img,\n.image.is-3by1 .has-ratio, .image.is-4by5 img,\n.image.is-4by5 .has-ratio, .image.is-3by4 img,\n.image.is-3by4 .has-ratio, .image.is-2by3 img,\n.image.is-2by3 .has-ratio, .image.is-3by5 img,\n.image.is-3by5 .has-ratio, .image.is-9by16 img,\n.image.is-9by16 .has-ratio, .image.is-1by2 img,\n.image.is-1by2 .has-ratio, .image.is-1by3 img,\n.image.is-1by3 .has-ratio {\n  height: 100%;\n  width: 100%;\n}\n.image.is-square, .image.is-1by1 {\n  padding-top: 100%;\n}\n.image.is-5by4 {\n  padding-top: 80%;\n}\n.image.is-4by3 {\n  padding-top: 75%;\n}\n.image.is-3by2 {\n  padding-top: 66.6666%;\n}\n.image.is-5by3 {\n  padding-top: 60%;\n}\n.image.is-16by9 {\n  padding-top: 56.25%;\n}\n.image.is-2by1 {\n  padding-top: 50%;\n}\n.image.is-3by1 {\n  padding-top: 33.3333%;\n}\n.image.is-4by5 {\n  padding-top: 125%;\n}\n.image.is-3by4 {\n  padding-top: 133.3333%;\n}\n.image.is-2by3 {\n  padding-top: 150%;\n}\n.image.is-3by5 {\n  padding-top: 166.6666%;\n}\n.image.is-9by16 {\n  padding-top: 177.7777%;\n}\n.image.is-1by2 {\n  padding-top: 200%;\n}\n.image.is-1by3 {\n  padding-top: 300%;\n}\n.image.is-16x16 {\n  height: 16px;\n  width: 16px;\n}\n.image.is-24x24 {\n  height: 24px;\n  width: 24px;\n}\n.image.is-32x32 {\n  height: 32px;\n  width: 32px;\n}\n.image.is-48x48 {\n  height: 48px;\n  width: 48px;\n}\n.image.is-64x64 {\n  height: 64px;\n  width: 64px;\n}\n.image.is-96x96 {\n  height: 96px;\n  width: 96px;\n}\n.image.is-128x128 {\n  height: 128px;\n  width: 128px;\n}\n\n.notification {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  position: relative;\n  padding: 1.25rem 2.5rem 1.25rem 1.5rem;\n}\n.notification a:not(.button):not(.dropdown-item) {\n  color: currentColor;\n  text-decoration: underline;\n}\n.notification strong {\n  color: currentColor;\n}\n.notification code,\n.notification pre {\n  background: white;\n}\n.notification pre code {\n  background: transparent;\n}\n.notification > .delete {\n  right: 0.5rem;\n  position: absolute;\n  top: 0.5rem;\n}\n.notification .title,\n.notification .subtitle,\n.notification .content {\n  color: currentColor;\n}\n.notification.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.notification.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.notification.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.notification.is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n.notification.is-primary {\n  background-color: #7957d5;\n  color: #fff;\n}\n.notification.is-primary.is-light {\n  background-color: #f2effb;\n  color: #552fbc;\n}\n.notification.is-link {\n  background-color: #7957d5;\n  color: #fff;\n}\n.notification.is-link.is-light {\n  background-color: #f2effb;\n  color: #552fbc;\n}\n.notification.is-info {\n  background-color: #167df0;\n  color: #fff;\n}\n.notification.is-info.is-light {\n  background-color: #ecf4fe;\n  color: #0d68ce;\n}\n.notification.is-success {\n  background-color: #48c78e;\n  color: #fff;\n}\n.notification.is-success.is-light {\n  background-color: #effaf5;\n  color: #257953;\n}\n.notification.is-warning {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.notification.is-warning.is-light {\n  background-color: #fffaeb;\n  color: #946c00;\n}\n.notification.is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n.notification.is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35;\n}\n\n.progress, .progress-wrapper.is-not-native {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 9999px;\n  display: block;\n  height: 1rem;\n  overflow: hidden;\n  padding: 0;\n  width: 100%;\n}\n.progress::-webkit-progress-bar, .progress-wrapper.is-not-native::-webkit-progress-bar {\n  background-color: #ededed;\n}\n.progress::-webkit-progress-value, .progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: #4a4a4a;\n}\n.progress::-moz-progress-bar, .progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: #4a4a4a;\n}\n.progress::-ms-fill, .progress-wrapper.is-not-native::-ms-fill {\n  background-color: #4a4a4a;\n  border: none;\n}\n.progress.is-white::-webkit-progress-value, .is-white.progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: white;\n}\n.progress.is-white::-moz-progress-bar, .is-white.progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: white;\n}\n.progress.is-white::-ms-fill, .is-white.progress-wrapper.is-not-native::-ms-fill {\n  background-color: white;\n}\n.progress.is-white:indeterminate, .is-white.progress-wrapper.is-not-native:indeterminate {\n  background-image: linear-gradient(to right, white 30%, #ededed 30%);\n}\n.progress.is-black::-webkit-progress-value, .is-black.progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: #0a0a0a;\n}\n.progress.is-black::-moz-progress-bar, .is-black.progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: #0a0a0a;\n}\n.progress.is-black::-ms-fill, .is-black.progress-wrapper.is-not-native::-ms-fill {\n  background-color: #0a0a0a;\n}\n.progress.is-black:indeterminate, .is-black.progress-wrapper.is-not-native:indeterminate {\n  background-image: linear-gradient(to right, #0a0a0a 30%, #ededed 30%);\n}\n.progress.is-light::-webkit-progress-value, .is-light.progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: whitesmoke;\n}\n.progress.is-light::-moz-progress-bar, .is-light.progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: whitesmoke;\n}\n.progress.is-light::-ms-fill, .is-light.progress-wrapper.is-not-native::-ms-fill {\n  background-color: whitesmoke;\n}\n.progress.is-light:indeterminate, .is-light.progress-wrapper.is-not-native:indeterminate {\n  background-image: linear-gradient(to right, whitesmoke 30%, #ededed 30%);\n}\n.progress.is-dark::-webkit-progress-value, .is-dark.progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: #363636;\n}\n.progress.is-dark::-moz-progress-bar, .is-dark.progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: #363636;\n}\n.progress.is-dark::-ms-fill, .is-dark.progress-wrapper.is-not-native::-ms-fill {\n  background-color: #363636;\n}\n.progress.is-dark:indeterminate, .is-dark.progress-wrapper.is-not-native:indeterminate {\n  background-image: linear-gradient(to right, #363636 30%, #ededed 30%);\n}\n.progress.is-primary::-webkit-progress-value, .is-primary.progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: #7957d5;\n}\n.progress.is-primary::-moz-progress-bar, .is-primary.progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: #7957d5;\n}\n.progress.is-primary::-ms-fill, .is-primary.progress-wrapper.is-not-native::-ms-fill {\n  background-color: #7957d5;\n}\n.progress.is-primary:indeterminate, .is-primary.progress-wrapper.is-not-native:indeterminate {\n  background-image: linear-gradient(to right, #7957d5 30%, #ededed 30%);\n}\n.progress.is-link::-webkit-progress-value, .is-link.progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: #7957d5;\n}\n.progress.is-link::-moz-progress-bar, .is-link.progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: #7957d5;\n}\n.progress.is-link::-ms-fill, .is-link.progress-wrapper.is-not-native::-ms-fill {\n  background-color: #7957d5;\n}\n.progress.is-link:indeterminate, .is-link.progress-wrapper.is-not-native:indeterminate {\n  background-image: linear-gradient(to right, #7957d5 30%, #ededed 30%);\n}\n.progress.is-info::-webkit-progress-value, .is-info.progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: #167df0;\n}\n.progress.is-info::-moz-progress-bar, .is-info.progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: #167df0;\n}\n.progress.is-info::-ms-fill, .is-info.progress-wrapper.is-not-native::-ms-fill {\n  background-color: #167df0;\n}\n.progress.is-info:indeterminate, .is-info.progress-wrapper.is-not-native:indeterminate {\n  background-image: linear-gradient(to right, #167df0 30%, #ededed 30%);\n}\n.progress.is-success::-webkit-progress-value, .is-success.progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: #48c78e;\n}\n.progress.is-success::-moz-progress-bar, .is-success.progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: #48c78e;\n}\n.progress.is-success::-ms-fill, .is-success.progress-wrapper.is-not-native::-ms-fill {\n  background-color: #48c78e;\n}\n.progress.is-success:indeterminate, .is-success.progress-wrapper.is-not-native:indeterminate {\n  background-image: linear-gradient(to right, #48c78e 30%, #ededed 30%);\n}\n.progress.is-warning::-webkit-progress-value, .is-warning.progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: #ffe08a;\n}\n.progress.is-warning::-moz-progress-bar, .is-warning.progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: #ffe08a;\n}\n.progress.is-warning::-ms-fill, .is-warning.progress-wrapper.is-not-native::-ms-fill {\n  background-color: #ffe08a;\n}\n.progress.is-warning:indeterminate, .is-warning.progress-wrapper.is-not-native:indeterminate {\n  background-image: linear-gradient(to right, #ffe08a 30%, #ededed 30%);\n}\n.progress.is-danger::-webkit-progress-value, .is-danger.progress-wrapper.is-not-native::-webkit-progress-value {\n  background-color: #f14668;\n}\n.progress.is-danger::-moz-progress-bar, .is-danger.progress-wrapper.is-not-native::-moz-progress-bar {\n  background-color: #f14668;\n}\n.progress.is-danger::-ms-fill, .is-danger.progress-wrapper.is-not-native::-ms-fill {\n  background-color: #f14668;\n}\n.progress.is-danger:indeterminate, .is-danger.progress-wrapper.is-not-native:indeterminate {\n  background-image: linear-gradient(to right, #f14668 30%, #ededed 30%);\n}\n.progress:indeterminate, .progress-wrapper.is-not-native:indeterminate {\n  animation-duration: 1.5s;\n  animation-iteration-count: infinite;\n  animation-name: moveIndeterminate;\n  animation-timing-function: linear;\n  background-color: #ededed;\n  background-image: linear-gradient(to right, #4a4a4a 30%, #ededed 30%);\n  background-position: top left;\n  background-repeat: no-repeat;\n  background-size: 150% 150%;\n}\n.progress:indeterminate::-webkit-progress-bar, .progress-wrapper.is-not-native:indeterminate::-webkit-progress-bar {\n  background-color: transparent;\n}\n.progress:indeterminate::-moz-progress-bar, .progress-wrapper.is-not-native:indeterminate::-moz-progress-bar {\n  background-color: transparent;\n}\n.progress:indeterminate::-ms-fill, .progress-wrapper.is-not-native:indeterminate::-ms-fill {\n  animation-name: none;\n}\n.progress.is-small, .is-small.progress-wrapper.is-not-native {\n  height: 0.75rem;\n}\n.progress.is-medium, .is-medium.progress-wrapper.is-not-native {\n  height: 1.25rem;\n}\n.progress.is-large, .is-large.progress-wrapper.is-not-native {\n  height: 1.5rem;\n}\n\n@keyframes moveIndeterminate {\n  from {\n    background-position: 200% 0;\n  }\n  to {\n    background-position: -200% 0;\n  }\n}\n.table {\n  background-color: white;\n  color: #363636;\n}\n.table td,\n.table th {\n  border: 1px solid #dbdbdb;\n  border-width: 0 0 1px;\n  padding: 0.5em 0.75em;\n  vertical-align: top;\n}\n.table td.is-white,\n.table th.is-white {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n.table td.is-black,\n.table th.is-black {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n.table td.is-light,\n.table th.is-light {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.table td.is-dark,\n.table th.is-dark {\n  background-color: #363636;\n  border-color: #363636;\n  color: #fff;\n}\n.table td.is-primary,\n.table th.is-primary {\n  background-color: #7957d5;\n  border-color: #7957d5;\n  color: #fff;\n}\n.table td.is-link,\n.table th.is-link {\n  background-color: #7957d5;\n  border-color: #7957d5;\n  color: #fff;\n}\n.table td.is-info,\n.table th.is-info {\n  background-color: #167df0;\n  border-color: #167df0;\n  color: #fff;\n}\n.table td.is-success,\n.table th.is-success {\n  background-color: #48c78e;\n  border-color: #48c78e;\n  color: #fff;\n}\n.table td.is-warning,\n.table th.is-warning {\n  background-color: #ffe08a;\n  border-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.table td.is-danger,\n.table th.is-danger {\n  background-color: #f14668;\n  border-color: #f14668;\n  color: #fff;\n}\n.table td.is-narrow,\n.table th.is-narrow {\n  white-space: nowrap;\n  width: 1%;\n}\n.table td.is-selected,\n.table th.is-selected {\n  background-color: #7957d5;\n  color: #fff;\n}\n.table td.is-selected a,\n.table td.is-selected strong,\n.table th.is-selected a,\n.table th.is-selected strong {\n  color: currentColor;\n}\n.table td.is-vcentered,\n.table th.is-vcentered {\n  vertical-align: middle;\n}\n.table th {\n  color: #363636;\n}\n.table th:not([align]) {\n  text-align: inherit;\n}\n.table tr.is-selected {\n  background-color: #7957d5;\n  color: #fff;\n}\n.table tr.is-selected a,\n.table tr.is-selected strong {\n  color: currentColor;\n}\n.table tr.is-selected td,\n.table tr.is-selected th {\n  border-color: #fff;\n  color: currentColor;\n}\n.table thead {\n  background-color: transparent;\n}\n.table thead td,\n.table thead th {\n  border-width: 0 0 2px;\n  color: #363636;\n}\n.table tfoot {\n  background-color: transparent;\n}\n.table tfoot td,\n.table tfoot th {\n  border-width: 2px 0 0;\n  color: #363636;\n}\n.table tbody {\n  background-color: transparent;\n}\n.table tbody tr:last-child td,\n.table tbody tr:last-child th {\n  border-bottom-width: 0;\n}\n.table.is-bordered td,\n.table.is-bordered th {\n  border-width: 1px;\n}\n.table.is-bordered tr:last-child td,\n.table.is-bordered tr:last-child th {\n  border-bottom-width: 1px;\n}\n.table.is-fullwidth {\n  width: 100%;\n}\n.table.is-hoverable tbody tr:not(.is-selected):hover {\n  background-color: #fafafa;\n}\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover {\n  background-color: #fafafa;\n}\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(even) {\n  background-color: whitesmoke;\n}\n.table.is-narrow td,\n.table.is-narrow th {\n  padding: 0.25em 0.5em;\n}\n.table.is-striped tbody tr:not(.is-selected):nth-child(even) {\n  background-color: #fafafa;\n}\n\n.table-container {\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n  overflow-y: hidden;\n  max-width: 100%;\n}\n\n.tags {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.tags .tag {\n  margin-bottom: 0.5rem;\n}\n.tags .tag:not(:last-child) {\n  margin-right: 0.5rem;\n}\n.tags:last-child {\n  margin-bottom: -0.5rem;\n}\n.tags:not(:last-child) {\n  margin-bottom: 1rem;\n}\n.tags.are-medium .tag:not(.is-normal):not(.is-large) {\n  font-size: 1rem;\n}\n.tags.are-large .tag:not(.is-normal):not(.is-medium) {\n  font-size: 1.25rem;\n}\n.tags.is-centered {\n  justify-content: center;\n}\n.tags.is-centered .tag {\n  margin-right: 0.25rem;\n  margin-left: 0.25rem;\n}\n.tags.is-right {\n  justify-content: flex-end;\n}\n.tags.is-right .tag:not(:first-child) {\n  margin-left: 0.5rem;\n}\n.tags.is-right .tag:not(:last-child) {\n  margin-right: 0;\n}\n.tags.has-addons .tag {\n  margin-right: 0;\n}\n.tags.has-addons .tag:not(:first-child) {\n  margin-left: 0;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.tags.has-addons .tag:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.tag:not(body) {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 4px;\n  color: #4a4a4a;\n  display: inline-flex;\n  font-size: 0.75rem;\n  height: 2em;\n  justify-content: center;\n  line-height: 1.5;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n.tag:not(body) .delete {\n  margin-left: 0.25rem;\n  margin-right: -0.375rem;\n}\n.tag:not(body).is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.tag:not(body).is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.tag:not(body).is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.tag:not(body).is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n.tag:not(body).is-primary {\n  background-color: #7957d5;\n  color: #fff;\n}\n.tag:not(body).is-primary.is-light {\n  background-color: #f2effb;\n  color: #552fbc;\n}\n.tag:not(body).is-link {\n  background-color: #7957d5;\n  color: #fff;\n}\n.tag:not(body).is-link.is-light {\n  background-color: #f2effb;\n  color: #552fbc;\n}\n.tag:not(body).is-info {\n  background-color: #167df0;\n  color: #fff;\n}\n.tag:not(body).is-info.is-light {\n  background-color: #ecf4fe;\n  color: #0d68ce;\n}\n.tag:not(body).is-success {\n  background-color: #48c78e;\n  color: #fff;\n}\n.tag:not(body).is-success.is-light {\n  background-color: #effaf5;\n  color: #257953;\n}\n.tag:not(body).is-warning {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.tag:not(body).is-warning.is-light {\n  background-color: #fffaeb;\n  color: #946c00;\n}\n.tag:not(body).is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n.tag:not(body).is-danger.is-light {\n  background-color: #feecf0;\n  color: #cc0f35;\n}\n.tag:not(body).is-normal {\n  font-size: 0.75rem;\n}\n.tag:not(body).is-medium {\n  font-size: 1rem;\n}\n.tag:not(body).is-large {\n  font-size: 1.25rem;\n}\n.tag:not(body) .icon:first-child:not(:last-child) {\n  margin-left: -0.375em;\n  margin-right: 0.1875em;\n}\n.tag:not(body) .icon:last-child:not(:first-child) {\n  margin-left: 0.1875em;\n  margin-right: -0.375em;\n}\n.tag:not(body) .icon:first-child:last-child {\n  margin-left: -0.375em;\n  margin-right: -0.375em;\n}\n.tag:not(body).is-delete {\n  margin-left: 1px;\n  padding: 0;\n  position: relative;\n  width: 2em;\n}\n.tag:not(body).is-delete::before, .tag:not(body).is-delete::after {\n  background-color: currentColor;\n  content: \"\";\n  display: block;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) rotate(45deg);\n  transform-origin: center center;\n}\n.tag:not(body).is-delete::before {\n  height: 1px;\n  width: 50%;\n}\n.tag:not(body).is-delete::after {\n  height: 50%;\n  width: 1px;\n}\n.tag:not(body).is-delete:hover, .tag:not(body).is-delete:focus {\n  background-color: #e8e8e8;\n}\n.tag:not(body).is-delete:active {\n  background-color: #dbdbdb;\n}\n.tag:not(body).is-rounded {\n  border-radius: 9999px;\n}\n\na.tag:hover {\n  text-decoration: underline;\n}\n\n.title,\n.subtitle {\n  word-break: break-word;\n}\n.title em,\n.title span,\n.subtitle em,\n.subtitle span {\n  font-weight: inherit;\n}\n.title sub,\n.subtitle sub {\n  font-size: 0.75em;\n}\n.title sup,\n.subtitle sup {\n  font-size: 0.75em;\n}\n.title .tag,\n.subtitle .tag {\n  vertical-align: middle;\n}\n\n.title {\n  color: #363636;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 1.125;\n}\n.title strong {\n  color: inherit;\n  font-weight: inherit;\n}\n.title:not(.is-spaced) + .subtitle {\n  margin-top: -1.25rem;\n}\n.title.is-1 {\n  font-size: 3rem;\n}\n.title.is-2 {\n  font-size: 2.5rem;\n}\n.title.is-3 {\n  font-size: 2rem;\n}\n.title.is-4 {\n  font-size: 1.5rem;\n}\n.title.is-5 {\n  font-size: 1.25rem;\n}\n.title.is-6 {\n  font-size: 1rem;\n}\n.title.is-7 {\n  font-size: 0.75rem;\n}\n\n.subtitle {\n  color: #4a4a4a;\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.25;\n}\n.subtitle strong {\n  color: #363636;\n  font-weight: 600;\n}\n.subtitle:not(.is-spaced) + .title {\n  margin-top: -1.25rem;\n}\n.subtitle.is-1 {\n  font-size: 3rem;\n}\n.subtitle.is-2 {\n  font-size: 2.5rem;\n}\n.subtitle.is-3 {\n  font-size: 2rem;\n}\n.subtitle.is-4 {\n  font-size: 1.5rem;\n}\n.subtitle.is-5 {\n  font-size: 1.25rem;\n}\n.subtitle.is-6 {\n  font-size: 1rem;\n}\n.subtitle.is-7 {\n  font-size: 0.75rem;\n}\n\n.heading {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n}\n\n.number {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 9999px;\n  display: inline-flex;\n  font-size: 1.25rem;\n  height: 2em;\n  justify-content: center;\n  margin-right: 1.5rem;\n  min-width: 2.5em;\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  vertical-align: top;\n}\n\n/* Bulma Form */\n.select select, .taginput .taginput-container.is-focusable, .textarea, .input {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  color: #363636;\n}\n.select select::-moz-placeholder, .taginput .taginput-container.is-focusable::-moz-placeholder, .textarea::-moz-placeholder, .input::-moz-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.select select::-webkit-input-placeholder, .taginput .taginput-container.is-focusable::-webkit-input-placeholder, .textarea::-webkit-input-placeholder, .input::-webkit-input-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.select select:-moz-placeholder, .taginput .taginput-container.is-focusable:-moz-placeholder, .textarea:-moz-placeholder, .input:-moz-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.select select:-ms-input-placeholder, .taginput .taginput-container.is-focusable:-ms-input-placeholder, .textarea:-ms-input-placeholder, .input:-ms-input-placeholder {\n  color: rgba(54, 54, 54, 0.3);\n}\n.select select:hover, .taginput .taginput-container.is-focusable:hover, .textarea:hover, .input:hover, .select select.is-hovered, .taginput .is-hovered.taginput-container.is-focusable, .is-hovered.textarea, .is-hovered.input {\n  border-color: #b5b5b5;\n}\n.select select:focus, .taginput .taginput-container.is-focusable:focus, .textarea:focus, .input:focus, .select select.is-focused, .taginput .is-focused.taginput-container.is-focusable, .is-focused.textarea, .is-focused.input, .select select:active, .taginput .taginput-container.is-focusable:active, .textarea:active, .input:active, .select select.is-active, .taginput .is-active.taginput-container.is-focusable, .is-active.textarea, .is-active.input {\n  border-color: #7957d5;\n  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.select select[disabled], .taginput [disabled].taginput-container.is-focusable, [disabled].textarea, [disabled].input, fieldset[disabled] .select select, .select fieldset[disabled] select, fieldset[disabled] .taginput .taginput-container.is-focusable, .taginput fieldset[disabled] .taginput-container.is-focusable, fieldset[disabled] .textarea, fieldset[disabled] .input {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n  box-shadow: none;\n  color: #7a7a7a;\n}\n.select select[disabled]::-moz-placeholder, .taginput [disabled].taginput-container.is-focusable::-moz-placeholder, [disabled].textarea::-moz-placeholder, [disabled].input::-moz-placeholder, fieldset[disabled] .select select::-moz-placeholder, .select fieldset[disabled] select::-moz-placeholder, fieldset[disabled] .taginput .taginput-container.is-focusable::-moz-placeholder, .taginput fieldset[disabled] .taginput-container.is-focusable::-moz-placeholder, fieldset[disabled] .textarea::-moz-placeholder, fieldset[disabled] .input::-moz-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]::-webkit-input-placeholder, .taginput [disabled].taginput-container.is-focusable::-webkit-input-placeholder, [disabled].textarea::-webkit-input-placeholder, [disabled].input::-webkit-input-placeholder, fieldset[disabled] .select select::-webkit-input-placeholder, .select fieldset[disabled] select::-webkit-input-placeholder, fieldset[disabled] .taginput .taginput-container.is-focusable::-webkit-input-placeholder, .taginput fieldset[disabled] .taginput-container.is-focusable::-webkit-input-placeholder, fieldset[disabled] .textarea::-webkit-input-placeholder, fieldset[disabled] .input::-webkit-input-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]:-moz-placeholder, .taginput [disabled].taginput-container.is-focusable:-moz-placeholder, [disabled].textarea:-moz-placeholder, [disabled].input:-moz-placeholder, fieldset[disabled] .select select:-moz-placeholder, .select fieldset[disabled] select:-moz-placeholder, fieldset[disabled] .taginput .taginput-container.is-focusable:-moz-placeholder, .taginput fieldset[disabled] .taginput-container.is-focusable:-moz-placeholder, fieldset[disabled] .textarea:-moz-placeholder, fieldset[disabled] .input:-moz-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]:-ms-input-placeholder, .taginput [disabled].taginput-container.is-focusable:-ms-input-placeholder, [disabled].textarea:-ms-input-placeholder, [disabled].input:-ms-input-placeholder, fieldset[disabled] .select select:-ms-input-placeholder, .select fieldset[disabled] select:-ms-input-placeholder, fieldset[disabled] .taginput .taginput-container.is-focusable:-ms-input-placeholder, .taginput fieldset[disabled] .taginput-container.is-focusable:-ms-input-placeholder, fieldset[disabled] .textarea:-ms-input-placeholder, fieldset[disabled] .input:-ms-input-placeholder {\n  color: rgba(122, 122, 122, 0.3);\n}\n\n.taginput .taginput-container.is-focusable, .textarea, .input {\n  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);\n  max-width: 100%;\n  width: 100%;\n}\n.taginput [readonly].taginput-container.is-focusable, [readonly].textarea, [readonly].input {\n  box-shadow: none;\n}\n.taginput .is-white.taginput-container.is-focusable, .is-white.textarea, .is-white.input {\n  border-color: white;\n}\n.taginput .is-white.taginput-container.is-focusable:focus, .is-white.textarea:focus, .is-white.input:focus, .taginput .is-white.is-focused.taginput-container.is-focusable, .is-white.is-focused.textarea, .is-white.is-focused.input, .taginput .is-white.taginput-container.is-focusable:active, .is-white.textarea:active, .is-white.input:active, .taginput .is-white.is-active.taginput-container.is-focusable, .is-white.is-active.textarea, .is-white.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.taginput .is-black.taginput-container.is-focusable, .is-black.textarea, .is-black.input {\n  border-color: #0a0a0a;\n}\n.taginput .is-black.taginput-container.is-focusable:focus, .is-black.textarea:focus, .is-black.input:focus, .taginput .is-black.is-focused.taginput-container.is-focusable, .is-black.is-focused.textarea, .is-black.is-focused.input, .taginput .is-black.taginput-container.is-focusable:active, .is-black.textarea:active, .is-black.input:active, .taginput .is-black.is-active.taginput-container.is-focusable, .is-black.is-active.textarea, .is-black.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.taginput .is-light.taginput-container.is-focusable, .is-light.textarea, .is-light.input {\n  border-color: whitesmoke;\n}\n.taginput .is-light.taginput-container.is-focusable:focus, .is-light.textarea:focus, .is-light.input:focus, .taginput .is-light.is-focused.taginput-container.is-focusable, .is-light.is-focused.textarea, .is-light.is-focused.input, .taginput .is-light.taginput-container.is-focusable:active, .is-light.textarea:active, .is-light.input:active, .taginput .is-light.is-active.taginput-container.is-focusable, .is-light.is-active.textarea, .is-light.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.taginput .is-dark.taginput-container.is-focusable, .is-dark.textarea, .is-dark.input {\n  border-color: #363636;\n}\n.taginput .is-dark.taginput-container.is-focusable:focus, .is-dark.textarea:focus, .is-dark.input:focus, .taginput .is-dark.is-focused.taginput-container.is-focusable, .is-dark.is-focused.textarea, .is-dark.is-focused.input, .taginput .is-dark.taginput-container.is-focusable:active, .is-dark.textarea:active, .is-dark.input:active, .taginput .is-dark.is-active.taginput-container.is-focusable, .is-dark.is-active.textarea, .is-dark.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.taginput .is-primary.taginput-container.is-focusable, .is-primary.textarea, .is-primary.input {\n  border-color: #7957d5;\n}\n.taginput .is-primary.taginput-container.is-focusable:focus, .is-primary.textarea:focus, .is-primary.input:focus, .taginput .is-primary.is-focused.taginput-container.is-focusable, .is-primary.is-focused.textarea, .is-primary.is-focused.input, .taginput .is-primary.taginput-container.is-focusable:active, .is-primary.textarea:active, .is-primary.input:active, .taginput .is-primary.is-active.taginput-container.is-focusable, .is-primary.is-active.textarea, .is-primary.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.taginput .is-link.taginput-container.is-focusable, .is-link.textarea, .is-link.input {\n  border-color: #7957d5;\n}\n.taginput .is-link.taginput-container.is-focusable:focus, .is-link.textarea:focus, .is-link.input:focus, .taginput .is-link.is-focused.taginput-container.is-focusable, .is-link.is-focused.textarea, .is-link.is-focused.input, .taginput .is-link.taginput-container.is-focusable:active, .is-link.textarea:active, .is-link.input:active, .taginput .is-link.is-active.taginput-container.is-focusable, .is-link.is-active.textarea, .is-link.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.taginput .is-info.taginput-container.is-focusable, .is-info.textarea, .is-info.input {\n  border-color: #167df0;\n}\n.taginput .is-info.taginput-container.is-focusable:focus, .is-info.textarea:focus, .is-info.input:focus, .taginput .is-info.is-focused.taginput-container.is-focusable, .is-info.is-focused.textarea, .is-info.is-focused.input, .taginput .is-info.taginput-container.is-focusable:active, .is-info.textarea:active, .is-info.input:active, .taginput .is-info.is-active.taginput-container.is-focusable, .is-info.is-active.textarea, .is-info.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(22, 125, 240, 0.25);\n}\n.taginput .is-success.taginput-container.is-focusable, .is-success.textarea, .is-success.input {\n  border-color: #48c78e;\n}\n.taginput .is-success.taginput-container.is-focusable:focus, .is-success.textarea:focus, .is-success.input:focus, .taginput .is-success.is-focused.taginput-container.is-focusable, .is-success.is-focused.textarea, .is-success.is-focused.input, .taginput .is-success.taginput-container.is-focusable:active, .is-success.textarea:active, .is-success.input:active, .taginput .is-success.is-active.taginput-container.is-focusable, .is-success.is-active.textarea, .is-success.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);\n}\n.taginput .is-warning.taginput-container.is-focusable, .is-warning.textarea, .is-warning.input {\n  border-color: #ffe08a;\n}\n.taginput .is-warning.taginput-container.is-focusable:focus, .is-warning.textarea:focus, .is-warning.input:focus, .taginput .is-warning.is-focused.taginput-container.is-focusable, .is-warning.is-focused.textarea, .is-warning.is-focused.input, .taginput .is-warning.taginput-container.is-focusable:active, .is-warning.textarea:active, .is-warning.input:active, .taginput .is-warning.is-active.taginput-container.is-focusable, .is-warning.is-active.textarea, .is-warning.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);\n}\n.taginput .is-danger.taginput-container.is-focusable, .is-danger.textarea, .is-danger.input {\n  border-color: #f14668;\n}\n.taginput .is-danger.taginput-container.is-focusable:focus, .is-danger.textarea:focus, .is-danger.input:focus, .taginput .is-danger.is-focused.taginput-container.is-focusable, .is-danger.is-focused.textarea, .is-danger.is-focused.input, .taginput .is-danger.taginput-container.is-focusable:active, .is-danger.textarea:active, .is-danger.input:active, .taginput .is-danger.is-active.taginput-container.is-focusable, .is-danger.is-active.textarea, .is-danger.is-active.input {\n  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n}\n.taginput .is-small.taginput-container.is-focusable, .is-small.textarea, .is-small.input {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.taginput .is-medium.taginput-container.is-focusable, .is-medium.textarea, .is-medium.input {\n  font-size: 1.25rem;\n}\n.taginput .is-large.taginput-container.is-focusable, .is-large.textarea, .is-large.input {\n  font-size: 1.5rem;\n}\n.taginput .is-fullwidth.taginput-container.is-focusable, .is-fullwidth.textarea, .is-fullwidth.input {\n  display: block;\n  width: 100%;\n}\n.taginput .is-inline.taginput-container.is-focusable, .is-inline.textarea, .is-inline.input {\n  display: inline;\n  width: auto;\n}\n\n.input.is-rounded {\n  border-radius: 9999px;\n  padding-left: calc(calc(0.75em - 1px) + 0.375em);\n  padding-right: calc(calc(0.75em - 1px) + 0.375em);\n}\n.input.is-static {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.textarea {\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  padding: calc(0.75em - 1px);\n  resize: vertical;\n}\n.textarea:not([rows]) {\n  max-height: 40em;\n  min-height: 8em;\n}\n.textarea[rows] {\n  height: initial;\n}\n.textarea.has-fixed-size {\n  resize: none;\n}\n\n.radio, .checkbox {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.25;\n  position: relative;\n}\n.radio input, .checkbox input {\n  cursor: pointer;\n}\n.radio:hover, .checkbox:hover {\n  color: #363636;\n}\n[disabled].radio, [disabled].checkbox, fieldset[disabled] .radio, fieldset[disabled] .checkbox,\n.radio input[disabled],\n.checkbox input[disabled] {\n  color: #7a7a7a;\n  cursor: not-allowed;\n}\n\n.radio + .radio {\n  margin-left: 0.5em;\n}\n\n.select {\n  display: inline-block;\n  max-width: 100%;\n  position: relative;\n  vertical-align: top;\n}\n.select:not(.is-multiple) {\n  height: 2.5em;\n}\n.select:not(.is-multiple):not(.is-loading)::after {\n  border-color: #7957d5;\n  right: 1.125em;\n  z-index: 4;\n}\n.select.is-rounded select {\n  border-radius: 9999px;\n  padding-left: 1em;\n}\n.select select {\n  cursor: pointer;\n  display: block;\n  font-size: 1em;\n  max-width: 100%;\n  outline: none;\n}\n.select select::-ms-expand {\n  display: none;\n}\n.select select[disabled]:hover, fieldset[disabled] .select select:hover {\n  border-color: whitesmoke;\n}\n.select select:not([multiple]) {\n  padding-right: 2.5em;\n}\n.select select[multiple] {\n  height: auto;\n  padding: 0;\n}\n.select select[multiple] option {\n  padding: 0.5em 1em;\n}\n.select:not(.is-multiple):not(.is-loading):hover::after {\n  border-color: #363636;\n}\n.select.is-white:not(:hover)::after {\n  border-color: white;\n}\n.select.is-white select {\n  border-color: white;\n}\n.select.is-white select:hover, .select.is-white select.is-hovered {\n  border-color: #f2f2f2;\n}\n.select.is-white select:focus, .select.is-white select.is-focused, .select.is-white select:active, .select.is-white select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.select.is-black:not(:hover)::after {\n  border-color: #0a0a0a;\n}\n.select.is-black select {\n  border-color: #0a0a0a;\n}\n.select.is-black select:hover, .select.is-black select.is-hovered {\n  border-color: black;\n}\n.select.is-black select:focus, .select.is-black select.is-focused, .select.is-black select:active, .select.is-black select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.select.is-light:not(:hover)::after {\n  border-color: whitesmoke;\n}\n.select.is-light select {\n  border-color: whitesmoke;\n}\n.select.is-light select:hover, .select.is-light select.is-hovered {\n  border-color: #e8e8e8;\n}\n.select.is-light select:focus, .select.is-light select.is-focused, .select.is-light select:active, .select.is-light select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.select.is-dark:not(:hover)::after {\n  border-color: #363636;\n}\n.select.is-dark select {\n  border-color: #363636;\n}\n.select.is-dark select:hover, .select.is-dark select.is-hovered {\n  border-color: #292929;\n}\n.select.is-dark select:focus, .select.is-dark select.is-focused, .select.is-dark select:active, .select.is-dark select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.select.is-primary:not(:hover)::after {\n  border-color: #7957d5;\n}\n.select.is-primary select {\n  border-color: #7957d5;\n}\n.select.is-primary select:hover, .select.is-primary select.is-hovered {\n  border-color: #6943d0;\n}\n.select.is-primary select:focus, .select.is-primary select.is-focused, .select.is-primary select:active, .select.is-primary select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.select.is-link:not(:hover)::after {\n  border-color: #7957d5;\n}\n.select.is-link select {\n  border-color: #7957d5;\n}\n.select.is-link select:hover, .select.is-link select.is-hovered {\n  border-color: #6943d0;\n}\n.select.is-link select:focus, .select.is-link select.is-focused, .select.is-link select:active, .select.is-link select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.select.is-info:not(:hover)::after {\n  border-color: #167df0;\n}\n.select.is-info select {\n  border-color: #167df0;\n}\n.select.is-info select:hover, .select.is-info select.is-hovered {\n  border-color: #0e71de;\n}\n.select.is-info select:focus, .select.is-info select.is-focused, .select.is-info select:active, .select.is-info select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(22, 125, 240, 0.25);\n}\n.select.is-success:not(:hover)::after {\n  border-color: #48c78e;\n}\n.select.is-success select {\n  border-color: #48c78e;\n}\n.select.is-success select:hover, .select.is-success select.is-hovered {\n  border-color: #3abb81;\n}\n.select.is-success select:focus, .select.is-success select.is-focused, .select.is-success select:active, .select.is-success select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);\n}\n.select.is-warning:not(:hover)::after {\n  border-color: #ffe08a;\n}\n.select.is-warning select {\n  border-color: #ffe08a;\n}\n.select.is-warning select:hover, .select.is-warning select.is-hovered {\n  border-color: #ffd970;\n}\n.select.is-warning select:focus, .select.is-warning select.is-focused, .select.is-warning select:active, .select.is-warning select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);\n}\n.select.is-danger:not(:hover)::after {\n  border-color: #f14668;\n}\n.select.is-danger select {\n  border-color: #f14668;\n}\n.select.is-danger select:hover, .select.is-danger select.is-hovered {\n  border-color: #ef2e55;\n}\n.select.is-danger select:focus, .select.is-danger select.is-focused, .select.is-danger select:active, .select.is-danger select.is-active {\n  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);\n}\n.select.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.select.is-medium {\n  font-size: 1.25rem;\n}\n.select.is-large {\n  font-size: 1.5rem;\n}\n.select.is-disabled::after {\n  border-color: #7a7a7a;\n}\n.select.is-fullwidth {\n  width: 100%;\n}\n.select.is-fullwidth select {\n  width: 100%;\n}\n.select.is-loading::after {\n  margin-top: 0;\n  position: absolute;\n  right: 0.625em;\n  top: 0.625em;\n  transform: none;\n}\n.select.is-loading.is-small:after {\n  font-size: 0.75rem;\n}\n.select.is-loading.is-medium:after {\n  font-size: 1.25rem;\n}\n.select.is-loading.is-large:after {\n  font-size: 1.5rem;\n}\n\n.file {\n  align-items: stretch;\n  display: flex;\n  justify-content: flex-start;\n  position: relative;\n}\n.file.is-white .file-cta {\n  background-color: white;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.file.is-white:hover .file-cta, .file.is-white.is-hovered .file-cta {\n  background-color: #f9f9f9;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.file.is-white:focus .file-cta, .file.is-white.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n  color: #0a0a0a;\n}\n.file.is-white:active .file-cta, .file.is-white.is-active .file-cta {\n  background-color: #f2f2f2;\n  border-color: transparent;\n  color: #0a0a0a;\n}\n.file.is-black .file-cta {\n  background-color: #0a0a0a;\n  border-color: transparent;\n  color: white;\n}\n.file.is-black:hover .file-cta, .file.is-black.is-hovered .file-cta {\n  background-color: #040404;\n  border-color: transparent;\n  color: white;\n}\n.file.is-black:focus .file-cta, .file.is-black.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n  color: white;\n}\n.file.is-black:active .file-cta, .file.is-black.is-active .file-cta {\n  background-color: black;\n  border-color: transparent;\n  color: white;\n}\n.file.is-light .file-cta {\n  background-color: whitesmoke;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-light:hover .file-cta, .file.is-light.is-hovered .file-cta {\n  background-color: #eeeeee;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-light:focus .file-cta, .file.is-light.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-light:active .file-cta, .file.is-light.is-active .file-cta {\n  background-color: #e8e8e8;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-dark .file-cta {\n  background-color: #363636;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-dark:hover .file-cta, .file.is-dark.is-hovered .file-cta {\n  background-color: #2f2f2f;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-dark:focus .file-cta, .file.is-dark.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n  color: #fff;\n}\n.file.is-dark:active .file-cta, .file.is-dark.is-active .file-cta {\n  background-color: #292929;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-primary .file-cta {\n  background-color: #7957d5;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-primary:hover .file-cta, .file.is-primary.is-hovered .file-cta {\n  background-color: #714dd2;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-primary:focus .file-cta, .file.is-primary.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.25);\n  color: #fff;\n}\n.file.is-primary:active .file-cta, .file.is-primary.is-active .file-cta {\n  background-color: #6943d0;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-link .file-cta {\n  background-color: #7957d5;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-link:hover .file-cta, .file.is-link.is-hovered .file-cta {\n  background-color: #714dd2;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-link:focus .file-cta, .file.is-link.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.25);\n  color: #fff;\n}\n.file.is-link:active .file-cta, .file.is-link.is-active .file-cta {\n  background-color: #6943d0;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-info .file-cta {\n  background-color: #167df0;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-info:hover .file-cta, .file.is-info.is-hovered .file-cta {\n  background-color: #0f77ea;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-info:focus .file-cta, .file.is-info.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(22, 125, 240, 0.25);\n  color: #fff;\n}\n.file.is-info:active .file-cta, .file.is-info.is-active .file-cta {\n  background-color: #0e71de;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-success .file-cta {\n  background-color: #48c78e;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-success:hover .file-cta, .file.is-success.is-hovered .file-cta {\n  background-color: #3ec487;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-success:focus .file-cta, .file.is-success.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(72, 199, 142, 0.25);\n  color: #fff;\n}\n.file.is-success:active .file-cta, .file.is-success.is-active .file-cta {\n  background-color: #3abb81;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-warning .file-cta {\n  background-color: #ffe08a;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:hover .file-cta, .file.is-warning.is-hovered .file-cta {\n  background-color: #ffdc7d;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:focus .file-cta, .file.is-warning.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(255, 224, 138, 0.25);\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:active .file-cta, .file.is-warning.is-active .file-cta {\n  background-color: #ffd970;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.7);\n}\n.file.is-danger .file-cta {\n  background-color: #f14668;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-danger:hover .file-cta, .file.is-danger.is-hovered .file-cta {\n  background-color: #f03a5f;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-danger:focus .file-cta, .file.is-danger.is-focused .file-cta {\n  border-color: transparent;\n  box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.25);\n  color: #fff;\n}\n.file.is-danger:active .file-cta, .file.is-danger.is-active .file-cta {\n  background-color: #ef2e55;\n  border-color: transparent;\n  color: #fff;\n}\n.file.is-small {\n  font-size: 0.75rem;\n}\n.file.is-normal {\n  font-size: 1rem;\n}\n.file.is-medium {\n  font-size: 1.25rem;\n}\n.file.is-medium .file-icon .fa {\n  font-size: 21px;\n}\n.file.is-large {\n  font-size: 1.5rem;\n}\n.file.is-large .file-icon .fa {\n  font-size: 28px;\n}\n.file.has-name .file-cta {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.file.has-name .file-name {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.file.has-name.is-empty .file-cta {\n  border-radius: 4px;\n}\n.file.has-name.is-empty .file-name {\n  display: none;\n}\n.file.is-boxed .file-label {\n  flex-direction: column;\n}\n.file.is-boxed .file-cta {\n  flex-direction: column;\n  height: auto;\n  padding: 1em 3em;\n}\n.file.is-boxed .file-name {\n  border-width: 0 1px 1px;\n}\n.file.is-boxed .file-icon {\n  height: 1.5em;\n  width: 1.5em;\n}\n.file.is-boxed .file-icon .fa {\n  font-size: 21px;\n}\n.file.is-boxed.is-small .file-icon .fa {\n  font-size: 14px;\n}\n.file.is-boxed.is-medium .file-icon .fa {\n  font-size: 28px;\n}\n.file.is-boxed.is-large .file-icon .fa {\n  font-size: 35px;\n}\n.file.is-boxed.has-name .file-cta {\n  border-radius: 4px 4px 0 0;\n}\n.file.is-boxed.has-name .file-name {\n  border-radius: 0 0 4px 4px;\n  border-width: 0 1px 1px;\n}\n.file.is-centered {\n  justify-content: center;\n}\n.file.is-fullwidth .file-label {\n  width: 100%;\n}\n.file.is-fullwidth .file-name {\n  flex-grow: 1;\n  max-width: none;\n}\n.file.is-right {\n  justify-content: flex-end;\n}\n.file.is-right .file-cta {\n  border-radius: 0 4px 4px 0;\n}\n.file.is-right .file-name {\n  border-radius: 4px 0 0 4px;\n  border-width: 1px 0 1px 1px;\n  order: -1;\n}\n\n.file-label {\n  align-items: stretch;\n  display: flex;\n  cursor: pointer;\n  justify-content: flex-start;\n  overflow: hidden;\n  position: relative;\n}\n.file-label:hover .file-cta {\n  background-color: #eeeeee;\n  color: #363636;\n}\n.file-label:hover .file-name {\n  border-color: #d5d5d5;\n}\n.file-label:active .file-cta {\n  background-color: #e8e8e8;\n  color: #363636;\n}\n.file-label:active .file-name {\n  border-color: #cfcfcf;\n}\n\n.file-input {\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.file-cta,\n.file-name {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  font-size: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  white-space: nowrap;\n}\n\n.file-cta {\n  background-color: whitesmoke;\n  color: #4a4a4a;\n}\n\n.file-name {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px 1px 1px 0;\n  display: block;\n  max-width: 16em;\n  overflow: hidden;\n  text-align: inherit;\n  text-overflow: ellipsis;\n}\n\n.file-icon {\n  align-items: center;\n  display: flex;\n  height: 1em;\n  justify-content: center;\n  margin-right: 0.5em;\n  width: 1em;\n}\n.file-icon .fa {\n  font-size: 14px;\n}\n\n.label {\n  color: #363636;\n  display: block;\n  font-size: 1rem;\n  font-weight: 600;\n}\n.label:not(:last-child) {\n  margin-bottom: 0.5em;\n}\n.label.is-small {\n  font-size: 0.75rem;\n}\n.label.is-medium {\n  font-size: 1.25rem;\n}\n.label.is-large {\n  font-size: 1.5rem;\n}\n\n.help {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.help.is-white {\n  color: white;\n}\n.help.is-black {\n  color: #0a0a0a;\n}\n.help.is-light {\n  color: whitesmoke;\n}\n.help.is-dark {\n  color: #363636;\n}\n.help.is-primary {\n  color: #7957d5;\n}\n.help.is-link {\n  color: #7957d5;\n}\n.help.is-info {\n  color: #167df0;\n}\n.help.is-success {\n  color: #48c78e;\n}\n.help.is-warning {\n  color: #ffe08a;\n}\n.help.is-danger {\n  color: #f14668;\n}\n\n.field:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.field.has-addons {\n  display: flex;\n  justify-content: flex-start;\n}\n.field.has-addons .control:not(:last-child) {\n  margin-right: -1px;\n}\n.field.has-addons .control:not(:first-child):not(:last-child) .button,\n.field.has-addons .control:not(:first-child):not(:last-child) .input,\n.field.has-addons .control:not(:first-child):not(:last-child) .select select {\n  border-radius: 0;\n}\n.field.has-addons .control:first-child:not(:only-child) .button,\n.field.has-addons .control:first-child:not(:only-child) .input,\n.field.has-addons .control:first-child:not(:only-child) .select select {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.field.has-addons .control:last-child:not(:only-child) .button,\n.field.has-addons .control:last-child:not(:only-child) .input,\n.field.has-addons .control:last-child:not(:only-child) .select select {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.field.has-addons .control .button:not([disabled]):hover, .field.has-addons .control .button:not([disabled]).is-hovered,\n.field.has-addons .control .input:not([disabled]):hover,\n.field.has-addons .control .input:not([disabled]).is-hovered,\n.field.has-addons .control .select select:not([disabled]):hover,\n.field.has-addons .control .select select:not([disabled]).is-hovered {\n  z-index: 2;\n}\n.field.has-addons .control .button:not([disabled]):focus, .field.has-addons .control .button:not([disabled]).is-focused, .field.has-addons .control .button:not([disabled]):active, .field.has-addons .control .button:not([disabled]).is-active,\n.field.has-addons .control .input:not([disabled]):focus,\n.field.has-addons .control .input:not([disabled]).is-focused,\n.field.has-addons .control .input:not([disabled]):active,\n.field.has-addons .control .input:not([disabled]).is-active,\n.field.has-addons .control .select select:not([disabled]):focus,\n.field.has-addons .control .select select:not([disabled]).is-focused,\n.field.has-addons .control .select select:not([disabled]):active,\n.field.has-addons .control .select select:not([disabled]).is-active {\n  z-index: 3;\n}\n.field.has-addons .control .button:not([disabled]):focus:hover, .field.has-addons .control .button:not([disabled]).is-focused:hover, .field.has-addons .control .button:not([disabled]):active:hover, .field.has-addons .control .button:not([disabled]).is-active:hover,\n.field.has-addons .control .input:not([disabled]):focus:hover,\n.field.has-addons .control .input:not([disabled]).is-focused:hover,\n.field.has-addons .control .input:not([disabled]):active:hover,\n.field.has-addons .control .input:not([disabled]).is-active:hover,\n.field.has-addons .control .select select:not([disabled]):focus:hover,\n.field.has-addons .control .select select:not([disabled]).is-focused:hover,\n.field.has-addons .control .select select:not([disabled]):active:hover,\n.field.has-addons .control .select select:not([disabled]).is-active:hover {\n  z-index: 4;\n}\n.field.has-addons .control.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.field.has-addons.has-addons-centered {\n  justify-content: center;\n}\n.field.has-addons.has-addons-right {\n  justify-content: flex-end;\n}\n.field.has-addons.has-addons-fullwidth .control {\n  flex-grow: 1;\n  flex-shrink: 0;\n}\n.field.is-grouped {\n  display: flex;\n  justify-content: flex-start;\n}\n.field.is-grouped > .control {\n  flex-shrink: 0;\n}\n.field.is-grouped > .control:not(:last-child) {\n  margin-bottom: 0;\n  margin-right: 0.75rem;\n}\n.field.is-grouped > .control.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.field.is-grouped.is-grouped-centered {\n  justify-content: center;\n}\n.field.is-grouped.is-grouped-right {\n  justify-content: flex-end;\n}\n.field.is-grouped.is-grouped-multiline {\n  flex-wrap: wrap;\n}\n.field.is-grouped.is-grouped-multiline > .control:last-child, .field.is-grouped.is-grouped-multiline > .control:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.field.is-grouped.is-grouped-multiline:last-child {\n  margin-bottom: -0.75rem;\n}\n.field.is-grouped.is-grouped-multiline:not(:last-child) {\n  margin-bottom: 0;\n}\n@media screen and (min-width: 769px), print {\n  .field.is-horizontal {\n    display: flex;\n  }\n}\n\n.field-label .label {\n  font-size: inherit;\n}\n@media screen and (max-width: 768px) {\n  .field-label {\n    margin-bottom: 0.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .field-label {\n    flex-basis: 0;\n    flex-grow: 1;\n    flex-shrink: 0;\n    margin-right: 1.5rem;\n    text-align: right;\n  }\n  .field-label.is-small {\n    font-size: 0.75rem;\n    padding-top: 0.375em;\n  }\n  .field-label.is-normal {\n    padding-top: 0.375em;\n  }\n  .field-label.is-medium {\n    font-size: 1.25rem;\n    padding-top: 0.375em;\n  }\n  .field-label.is-large {\n    font-size: 1.5rem;\n    padding-top: 0.375em;\n  }\n}\n\n.field-body .field .field {\n  margin-bottom: 0;\n}\n@media screen and (min-width: 769px), print {\n  .field-body {\n    display: flex;\n    flex-basis: 0;\n    flex-grow: 5;\n    flex-shrink: 1;\n  }\n  .field-body .field {\n    margin-bottom: 0;\n  }\n  .field-body > .field {\n    flex-shrink: 1;\n  }\n  .field-body > .field:not(.is-narrow) {\n    flex-grow: 1;\n  }\n  .field-body > .field:not(:last-child) {\n    margin-right: 0.75rem;\n  }\n}\n\n.control {\n  box-sizing: border-box;\n  clear: both;\n  font-size: 1rem;\n  position: relative;\n  text-align: inherit;\n}\n.control.has-icons-left .input:focus ~ .icon,\n.control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon,\n.control.has-icons-right .select:focus ~ .icon {\n  color: #4a4a4a;\n}\n.control.has-icons-left .input.is-small ~ .icon,\n.control.has-icons-left .select.is-small ~ .icon, .control.has-icons-right .input.is-small ~ .icon,\n.control.has-icons-right .select.is-small ~ .icon {\n  font-size: 0.75rem;\n}\n.control.has-icons-left .input.is-medium ~ .icon,\n.control.has-icons-left .select.is-medium ~ .icon, .control.has-icons-right .input.is-medium ~ .icon,\n.control.has-icons-right .select.is-medium ~ .icon {\n  font-size: 1.25rem;\n}\n.control.has-icons-left .input.is-large ~ .icon,\n.control.has-icons-left .select.is-large ~ .icon, .control.has-icons-right .input.is-large ~ .icon,\n.control.has-icons-right .select.is-large ~ .icon {\n  font-size: 1.5rem;\n}\n.control.has-icons-left .icon, .control.has-icons-right .icon {\n  color: #dbdbdb;\n  height: 2.5em;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 2.5em;\n  z-index: 4;\n}\n.control.has-icons-left .input,\n.control.has-icons-left .select select {\n  padding-left: 2.5em;\n}\n.control.has-icons-left .icon.is-left {\n  left: 0;\n}\n.control.has-icons-right .input,\n.control.has-icons-right .select select {\n  padding-right: 2.5em;\n}\n.control.has-icons-right .icon.is-right {\n  right: 0;\n}\n.control.is-loading::after {\n  position: absolute !important;\n  right: 0.625em;\n  top: 0.625em;\n  z-index: 4;\n}\n.control.is-loading.is-small:after {\n  font-size: 0.75rem;\n}\n.control.is-loading.is-medium:after {\n  font-size: 1.25rem;\n}\n.control.is-loading.is-large:after {\n  font-size: 1.5rem;\n}\n\n/* Bulma Components */\n.breadcrumb {\n  font-size: 1rem;\n  white-space: nowrap;\n}\n.breadcrumb a {\n  align-items: center;\n  color: #7957d5;\n  display: flex;\n  justify-content: center;\n  padding: 0 0.75em;\n}\n.breadcrumb a:hover {\n  color: #363636;\n}\n.breadcrumb li {\n  align-items: center;\n  display: flex;\n}\n.breadcrumb li:first-child a {\n  padding-left: 0;\n}\n.breadcrumb li.is-active a {\n  color: #363636;\n  cursor: default;\n  pointer-events: none;\n}\n.breadcrumb li + li::before {\n  color: #b5b5b5;\n  content: \"/\";\n}\n.breadcrumb ul,\n.breadcrumb ol {\n  align-items: flex-start;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.breadcrumb .icon:first-child {\n  margin-right: 0.5em;\n}\n.breadcrumb .icon:last-child {\n  margin-left: 0.5em;\n}\n.breadcrumb.is-centered ol,\n.breadcrumb.is-centered ul {\n  justify-content: center;\n}\n.breadcrumb.is-right ol,\n.breadcrumb.is-right ul {\n  justify-content: flex-end;\n}\n.breadcrumb.is-small {\n  font-size: 0.75rem;\n}\n.breadcrumb.is-medium {\n  font-size: 1.25rem;\n}\n.breadcrumb.is-large {\n  font-size: 1.5rem;\n}\n.breadcrumb.has-arrow-separator li + li::before {\n  content: \"→\";\n}\n.breadcrumb.has-bullet-separator li + li::before {\n  content: \"•\";\n}\n.breadcrumb.has-dot-separator li + li::before {\n  content: \"·\";\n}\n.breadcrumb.has-succeeds-separator li + li::before {\n  content: \"≻\";\n}\n\n.card {\n  background-color: white;\n  border-radius: 0.25rem;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  color: #4a4a4a;\n  max-width: 100%;\n  position: relative;\n}\n\n.card-footer:first-child, .card-content:first-child, .card-header:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.card-footer:last-child, .card-content:last-child, .card-header:last-child {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.card-header {\n  background-color: transparent;\n  align-items: stretch;\n  box-shadow: 0 0.125em 0.25em rgba(10, 10, 10, 0.1);\n  display: flex;\n}\n\n.card-header-title {\n  align-items: center;\n  color: #363636;\n  display: flex;\n  flex-grow: 1;\n  font-weight: 700;\n  padding: 0.75rem 1rem;\n}\n.card-header-title.is-centered {\n  justify-content: center;\n}\n\n.card-header-icon {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background: none;\n  border: none;\n  color: currentColor;\n  font-family: inherit;\n  font-size: 1em;\n  margin: 0;\n  padding: 0;\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  padding: 0.75rem 1rem;\n}\n\n.card-image {\n  display: block;\n  position: relative;\n}\n.card-image:first-child img {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.card-image:last-child img {\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.card-content {\n  background-color: transparent;\n  padding: 1.5rem;\n}\n\n.card-footer {\n  background-color: transparent;\n  border-top: 1px solid #ededed;\n  align-items: stretch;\n  display: flex;\n}\n\n.card-footer-item {\n  align-items: center;\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 0;\n  justify-content: center;\n  padding: 0.75rem;\n}\n.card-footer-item:not(:last-child) {\n  border-right: 1px solid #ededed;\n}\n\n.card .media:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n\n.dropdown {\n  display: inline-flex;\n  position: relative;\n  vertical-align: top;\n}\n.dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {\n  display: block;\n}\n.dropdown.is-right .dropdown-menu {\n  left: auto;\n  right: 0;\n}\n.dropdown.is-up .dropdown-menu {\n  bottom: 100%;\n  padding-bottom: 4px;\n  padding-top: initial;\n  top: auto;\n}\n\n.dropdown-menu {\n  display: none;\n  left: 0;\n  min-width: 12rem;\n  padding-top: 4px;\n  position: absolute;\n  top: 100%;\n  z-index: 20;\n}\n\n.dropdown-content {\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n\n.dropdown-item, .dropdown .dropdown-menu .has-link a {\n  color: #4a4a4a;\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding: 0.375rem 1rem;\n  position: relative;\n}\n\na.dropdown-item, .dropdown .dropdown-menu .has-link a,\nbutton.dropdown-item {\n  padding-right: 3rem;\n  text-align: inherit;\n  white-space: nowrap;\n  width: 100%;\n}\na.dropdown-item:hover, .dropdown .dropdown-menu .has-link a:hover,\nbutton.dropdown-item:hover {\n  background-color: whitesmoke;\n  color: #0a0a0a;\n}\na.dropdown-item.is-active, .dropdown .dropdown-menu .has-link a.is-active,\nbutton.dropdown-item.is-active {\n  background-color: #7957d5;\n  color: #fff;\n}\n\n.dropdown-divider {\n  background-color: #ededed;\n  border: none;\n  display: block;\n  height: 1px;\n  margin: 0.5rem 0;\n}\n\n.level {\n  align-items: center;\n  justify-content: space-between;\n}\n.level code {\n  border-radius: 4px;\n}\n.level img {\n  display: inline-block;\n  vertical-align: top;\n}\n.level.is-mobile {\n  display: flex;\n}\n.level.is-mobile .level-left,\n.level.is-mobile .level-right {\n  display: flex;\n}\n.level.is-mobile .level-left + .level-right {\n  margin-top: 0;\n}\n.level.is-mobile .level-item:not(:last-child) {\n  margin-bottom: 0;\n  margin-right: 0.75rem;\n}\n.level.is-mobile .level-item:not(.is-narrow) {\n  flex-grow: 1;\n}\n@media screen and (min-width: 769px), print {\n  .level {\n    display: flex;\n  }\n  .level > .level-item:not(.is-narrow) {\n    flex-grow: 1;\n  }\n}\n\n.level-item {\n  align-items: center;\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  justify-content: center;\n}\n.level-item .title,\n.level-item .subtitle {\n  margin-bottom: 0;\n}\n@media screen and (max-width: 768px) {\n  .level-item:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n}\n\n.level-left,\n.level-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.level-left .level-item.is-flexible,\n.level-right .level-item.is-flexible {\n  flex-grow: 1;\n}\n@media screen and (min-width: 769px), print {\n  .level-left .level-item:not(:last-child),\n.level-right .level-item:not(:last-child) {\n    margin-right: 0.75rem;\n  }\n}\n\n.level-left {\n  align-items: center;\n  justify-content: flex-start;\n}\n@media screen and (max-width: 768px) {\n  .level-left + .level-right {\n    margin-top: 1.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .level-left {\n    display: flex;\n  }\n}\n\n.level-right {\n  align-items: center;\n  justify-content: flex-end;\n}\n@media screen and (min-width: 769px), print {\n  .level-right {\n    display: flex;\n  }\n}\n\n.media {\n  align-items: flex-start;\n  display: flex;\n  text-align: inherit;\n}\n.media .content:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.media .media {\n  border-top: 1px solid rgba(219, 219, 219, 0.5);\n  display: flex;\n  padding-top: 0.75rem;\n}\n.media .media .content:not(:last-child),\n.media .media .control:not(:last-child) {\n  margin-bottom: 0.5rem;\n}\n.media .media .media {\n  padding-top: 0.5rem;\n}\n.media .media .media + .media {\n  margin-top: 0.5rem;\n}\n.media + .media {\n  border-top: 1px solid rgba(219, 219, 219, 0.5);\n  margin-top: 1rem;\n  padding-top: 1rem;\n}\n.media.is-large + .media {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n}\n\n.media-left,\n.media-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.media-left {\n  margin-right: 1rem;\n}\n\n.media-right {\n  margin-left: 1rem;\n}\n\n.media-content {\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  text-align: inherit;\n}\n\n@media screen and (max-width: 768px) {\n  .media-content {\n    overflow-x: auto;\n  }\n}\n.menu {\n  font-size: 1rem;\n}\n.menu.is-small {\n  font-size: 0.75rem;\n}\n.menu.is-medium {\n  font-size: 1.25rem;\n}\n.menu.is-large {\n  font-size: 1.5rem;\n}\n\n.menu-list {\n  line-height: 1.25;\n}\n.menu-list a {\n  border-radius: 2px;\n  color: #4a4a4a;\n  display: block;\n  padding: 0.5em 0.75em;\n}\n.menu-list a:hover {\n  background-color: whitesmoke;\n  color: #363636;\n}\n.menu-list a.is-active {\n  background-color: #7957d5;\n  color: #fff;\n}\n.menu-list li ul {\n  border-left: 1px solid #dbdbdb;\n  margin: 0.75em;\n  padding-left: 0.75em;\n}\n\n.menu-label {\n  color: #7a7a7a;\n  font-size: 0.75em;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.menu-label:not(:first-child) {\n  margin-top: 1em;\n}\n.menu-label:not(:last-child) {\n  margin-bottom: 1em;\n}\n\n.message {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n.message strong {\n  color: currentColor;\n}\n.message a:not(.button):not(.tag):not(.dropdown-item) {\n  color: currentColor;\n  text-decoration: underline;\n}\n.message.is-small {\n  font-size: 0.75rem;\n}\n.message.is-medium {\n  font-size: 1.25rem;\n}\n.message.is-large {\n  font-size: 1.5rem;\n}\n.message.is-white {\n  background-color: white;\n}\n.message.is-white .message-header {\n  background-color: white;\n  color: #0a0a0a;\n}\n.message.is-white .message-body {\n  border-color: white;\n}\n.message.is-black {\n  background-color: #fafafa;\n}\n.message.is-black .message-header {\n  background-color: #0a0a0a;\n  color: white;\n}\n.message.is-black .message-body {\n  border-color: #0a0a0a;\n}\n.message.is-light {\n  background-color: #fafafa;\n}\n.message.is-light .message-header {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.message.is-light .message-body {\n  border-color: whitesmoke;\n}\n.message.is-dark {\n  background-color: #fafafa;\n}\n.message.is-dark .message-header {\n  background-color: #363636;\n  color: #fff;\n}\n.message.is-dark .message-body {\n  border-color: #363636;\n}\n.message.is-primary {\n  background-color: #f2effb;\n}\n.message.is-primary .message-header {\n  background-color: #7957d5;\n  color: #fff;\n}\n.message.is-primary .message-body {\n  border-color: #7957d5;\n  color: #552fbc;\n}\n.message.is-link {\n  background-color: #f2effb;\n}\n.message.is-link .message-header {\n  background-color: #7957d5;\n  color: #fff;\n}\n.message.is-link .message-body {\n  border-color: #7957d5;\n  color: #552fbc;\n}\n.message.is-info {\n  background-color: #ecf4fe;\n}\n.message.is-info .message-header {\n  background-color: #167df0;\n  color: #fff;\n}\n.message.is-info .message-body {\n  border-color: #167df0;\n  color: #0d68ce;\n}\n.message.is-success {\n  background-color: #effaf5;\n}\n.message.is-success .message-header {\n  background-color: #48c78e;\n  color: #fff;\n}\n.message.is-success .message-body {\n  border-color: #48c78e;\n  color: #257953;\n}\n.message.is-warning {\n  background-color: #fffaeb;\n}\n.message.is-warning .message-header {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.message.is-warning .message-body {\n  border-color: #ffe08a;\n  color: #946c00;\n}\n.message.is-danger {\n  background-color: #feecf0;\n}\n.message.is-danger .message-header {\n  background-color: #f14668;\n  color: #fff;\n}\n.message.is-danger .message-body {\n  border-color: #f14668;\n  color: #cc0f35;\n}\n\n.message-header {\n  align-items: center;\n  background-color: #4a4a4a;\n  border-radius: 4px 4px 0 0;\n  color: #fff;\n  display: flex;\n  font-weight: 700;\n  justify-content: space-between;\n  line-height: 1.25;\n  padding: 0.75em 1em;\n  position: relative;\n}\n.message-header .delete {\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin-left: 0.75em;\n}\n.message-header + .message-body {\n  border-width: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.message-body {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: 0 0 0 4px;\n  color: #4a4a4a;\n  padding: 1.25em 1.5em;\n}\n.message-body code,\n.message-body pre {\n  background-color: white;\n}\n.message-body pre code {\n  background-color: transparent;\n}\n\n.modal {\n  align-items: center;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 40;\n}\n.modal.is-active {\n  display: flex;\n}\n\n.modal-background {\n  background-color: rgba(10, 10, 10, 0.86);\n}\n\n.modal-content,\n.modal-card {\n  margin: 0 20px;\n  max-height: calc(100vh - 160px);\n  overflow: auto;\n  position: relative;\n  width: 100%;\n}\n@media screen and (min-width: 769px) {\n  .modal-content,\n.modal-card {\n    margin: 0 auto;\n    max-height: calc(100vh - 40px);\n    width: 640px;\n  }\n}\n\n.modal-close {\n  background: none;\n  height: 40px;\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  width: 40px;\n}\n\n.modal-card {\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 40px);\n  overflow: hidden;\n  -ms-overflow-y: visible;\n}\n\n.modal-card-head,\n.modal-card-foot {\n  align-items: center;\n  background-color: whitesmoke;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: flex-start;\n  padding: 20px;\n  position: relative;\n}\n\n.modal-card-head {\n  border-bottom: 1px solid #dbdbdb;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n}\n\n.modal-card-title {\n  color: #363636;\n  flex-grow: 1;\n  flex-shrink: 0;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n\n.modal-card-foot {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  border-top: 1px solid #dbdbdb;\n}\n.modal-card-foot .button:not(:last-child) {\n  margin-right: 0.5em;\n}\n\n.modal-card-body {\n  -webkit-overflow-scrolling: touch;\n  background-color: white;\n  flex-grow: 1;\n  flex-shrink: 1;\n  overflow: auto;\n  padding: 20px;\n}\n\n.navbar {\n  background-color: white;\n  min-height: 3.25rem;\n  position: relative;\n  z-index: 30;\n}\n.navbar.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand > .navbar-item,\n.navbar.is-white .navbar-brand .navbar-link {\n  color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand > a.navbar-item:focus, .navbar.is-white .navbar-brand > a.navbar-item:hover, .navbar.is-white .navbar-brand > a.navbar-item.is-active,\n.navbar.is-white .navbar-brand .navbar-link:focus,\n.navbar.is-white .navbar-brand .navbar-link:hover,\n.navbar.is-white .navbar-brand .navbar-link.is-active {\n  background-color: #f2f2f2;\n  color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand .navbar-link::after {\n  border-color: #0a0a0a;\n}\n.navbar.is-white .navbar-burger {\n  color: #0a0a0a;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-white .navbar-start > .navbar-item,\n.navbar.is-white .navbar-start .navbar-link,\n.navbar.is-white .navbar-end > .navbar-item,\n.navbar.is-white .navbar-end .navbar-link {\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-start > a.navbar-item:focus, .navbar.is-white .navbar-start > a.navbar-item:hover, .navbar.is-white .navbar-start > a.navbar-item.is-active,\n.navbar.is-white .navbar-start .navbar-link:focus,\n.navbar.is-white .navbar-start .navbar-link:hover,\n.navbar.is-white .navbar-start .navbar-link.is-active,\n.navbar.is-white .navbar-end > a.navbar-item:focus,\n.navbar.is-white .navbar-end > a.navbar-item:hover,\n.navbar.is-white .navbar-end > a.navbar-item.is-active,\n.navbar.is-white .navbar-end .navbar-link:focus,\n.navbar.is-white .navbar-end .navbar-link:hover,\n.navbar.is-white .navbar-end .navbar-link.is-active {\n    background-color: #f2f2f2;\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-start .navbar-link::after,\n.navbar.is-white .navbar-end .navbar-link::after {\n    border-color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #f2f2f2;\n    color: #0a0a0a;\n  }\n  .navbar.is-white .navbar-dropdown a.navbar-item.is-active {\n    background-color: white;\n    color: #0a0a0a;\n  }\n}\n.navbar.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.navbar.is-black .navbar-brand > .navbar-item,\n.navbar.is-black .navbar-brand .navbar-link {\n  color: white;\n}\n.navbar.is-black .navbar-brand > a.navbar-item:focus, .navbar.is-black .navbar-brand > a.navbar-item:hover, .navbar.is-black .navbar-brand > a.navbar-item.is-active,\n.navbar.is-black .navbar-brand .navbar-link:focus,\n.navbar.is-black .navbar-brand .navbar-link:hover,\n.navbar.is-black .navbar-brand .navbar-link.is-active {\n  background-color: black;\n  color: white;\n}\n.navbar.is-black .navbar-brand .navbar-link::after {\n  border-color: white;\n}\n.navbar.is-black .navbar-burger {\n  color: white;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-black .navbar-start > .navbar-item,\n.navbar.is-black .navbar-start .navbar-link,\n.navbar.is-black .navbar-end > .navbar-item,\n.navbar.is-black .navbar-end .navbar-link {\n    color: white;\n  }\n  .navbar.is-black .navbar-start > a.navbar-item:focus, .navbar.is-black .navbar-start > a.navbar-item:hover, .navbar.is-black .navbar-start > a.navbar-item.is-active,\n.navbar.is-black .navbar-start .navbar-link:focus,\n.navbar.is-black .navbar-start .navbar-link:hover,\n.navbar.is-black .navbar-start .navbar-link.is-active,\n.navbar.is-black .navbar-end > a.navbar-item:focus,\n.navbar.is-black .navbar-end > a.navbar-item:hover,\n.navbar.is-black .navbar-end > a.navbar-item.is-active,\n.navbar.is-black .navbar-end .navbar-link:focus,\n.navbar.is-black .navbar-end .navbar-link:hover,\n.navbar.is-black .navbar-end .navbar-link.is-active {\n    background-color: black;\n    color: white;\n  }\n  .navbar.is-black .navbar-start .navbar-link::after,\n.navbar.is-black .navbar-end .navbar-link::after {\n    border-color: white;\n  }\n  .navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: black;\n    color: white;\n  }\n  .navbar.is-black .navbar-dropdown a.navbar-item.is-active {\n    background-color: #0a0a0a;\n    color: white;\n  }\n}\n.navbar.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-light .navbar-brand > .navbar-item,\n.navbar.is-light .navbar-brand .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-light .navbar-brand > a.navbar-item:focus, .navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active,\n.navbar.is-light .navbar-brand .navbar-link:focus,\n.navbar.is-light .navbar-brand .navbar-link:hover,\n.navbar.is-light .navbar-brand .navbar-link.is-active {\n  background-color: #e8e8e8;\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-light .navbar-brand .navbar-link::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-light .navbar-burger {\n  color: rgba(0, 0, 0, 0.7);\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-light .navbar-start > .navbar-item,\n.navbar.is-light .navbar-start .navbar-link,\n.navbar.is-light .navbar-end > .navbar-item,\n.navbar.is-light .navbar-end .navbar-link {\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-start > a.navbar-item:focus, .navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,\n.navbar.is-light .navbar-start .navbar-link:focus,\n.navbar.is-light .navbar-start .navbar-link:hover,\n.navbar.is-light .navbar-start .navbar-link.is-active,\n.navbar.is-light .navbar-end > a.navbar-item:focus,\n.navbar.is-light .navbar-end > a.navbar-item:hover,\n.navbar.is-light .navbar-end > a.navbar-item.is-active,\n.navbar.is-light .navbar-end .navbar-link:focus,\n.navbar.is-light .navbar-end .navbar-link:hover,\n.navbar.is-light .navbar-end .navbar-link.is-active {\n    background-color: #e8e8e8;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-start .navbar-link::after,\n.navbar.is-light .navbar-end .navbar-link::after {\n    border-color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #e8e8e8;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-light .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: rgba(0, 0, 0, 0.7);\n  }\n}\n.navbar.is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n.navbar.is-dark .navbar-brand > .navbar-item,\n.navbar.is-dark .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-dark .navbar-brand > a.navbar-item:focus, .navbar.is-dark .navbar-brand > a.navbar-item:hover, .navbar.is-dark .navbar-brand > a.navbar-item.is-active,\n.navbar.is-dark .navbar-brand .navbar-link:focus,\n.navbar.is-dark .navbar-brand .navbar-link:hover,\n.navbar.is-dark .navbar-brand .navbar-link.is-active {\n  background-color: #292929;\n  color: #fff;\n}\n.navbar.is-dark .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-dark .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-dark .navbar-start > .navbar-item,\n.navbar.is-dark .navbar-start .navbar-link,\n.navbar.is-dark .navbar-end > .navbar-item,\n.navbar.is-dark .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-dark .navbar-start > a.navbar-item:focus, .navbar.is-dark .navbar-start > a.navbar-item:hover, .navbar.is-dark .navbar-start > a.navbar-item.is-active,\n.navbar.is-dark .navbar-start .navbar-link:focus,\n.navbar.is-dark .navbar-start .navbar-link:hover,\n.navbar.is-dark .navbar-start .navbar-link.is-active,\n.navbar.is-dark .navbar-end > a.navbar-item:focus,\n.navbar.is-dark .navbar-end > a.navbar-item:hover,\n.navbar.is-dark .navbar-end > a.navbar-item.is-active,\n.navbar.is-dark .navbar-end .navbar-link:focus,\n.navbar.is-dark .navbar-end .navbar-link:hover,\n.navbar.is-dark .navbar-end .navbar-link.is-active {\n    background-color: #292929;\n    color: #fff;\n  }\n  .navbar.is-dark .navbar-start .navbar-link::after,\n.navbar.is-dark .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #292929;\n    color: #fff;\n  }\n  .navbar.is-dark .navbar-dropdown a.navbar-item.is-active {\n    background-color: #363636;\n    color: #fff;\n  }\n}\n.navbar.is-primary {\n  background-color: #7957d5;\n  color: #fff;\n}\n.navbar.is-primary .navbar-brand > .navbar-item,\n.navbar.is-primary .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-primary .navbar-brand > a.navbar-item:focus, .navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active,\n.navbar.is-primary .navbar-brand .navbar-link:focus,\n.navbar.is-primary .navbar-brand .navbar-link:hover,\n.navbar.is-primary .navbar-brand .navbar-link.is-active {\n  background-color: #6943d0;\n  color: #fff;\n}\n.navbar.is-primary .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-primary .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-primary .navbar-start > .navbar-item,\n.navbar.is-primary .navbar-start .navbar-link,\n.navbar.is-primary .navbar-end > .navbar-item,\n.navbar.is-primary .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-start > a.navbar-item:focus, .navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,\n.navbar.is-primary .navbar-start .navbar-link:focus,\n.navbar.is-primary .navbar-start .navbar-link:hover,\n.navbar.is-primary .navbar-start .navbar-link.is-active,\n.navbar.is-primary .navbar-end > a.navbar-item:focus,\n.navbar.is-primary .navbar-end > a.navbar-item:hover,\n.navbar.is-primary .navbar-end > a.navbar-item.is-active,\n.navbar.is-primary .navbar-end .navbar-link:focus,\n.navbar.is-primary .navbar-end .navbar-link:hover,\n.navbar.is-primary .navbar-end .navbar-link.is-active {\n    background-color: #6943d0;\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-start .navbar-link::after,\n.navbar.is-primary .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #6943d0;\n    color: #fff;\n  }\n  .navbar.is-primary .navbar-dropdown a.navbar-item.is-active {\n    background-color: #7957d5;\n    color: #fff;\n  }\n}\n.navbar.is-link {\n  background-color: #7957d5;\n  color: #fff;\n}\n.navbar.is-link .navbar-brand > .navbar-item,\n.navbar.is-link .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-link .navbar-brand > a.navbar-item:focus, .navbar.is-link .navbar-brand > a.navbar-item:hover, .navbar.is-link .navbar-brand > a.navbar-item.is-active,\n.navbar.is-link .navbar-brand .navbar-link:focus,\n.navbar.is-link .navbar-brand .navbar-link:hover,\n.navbar.is-link .navbar-brand .navbar-link.is-active {\n  background-color: #6943d0;\n  color: #fff;\n}\n.navbar.is-link .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-link .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-link .navbar-start > .navbar-item,\n.navbar.is-link .navbar-start .navbar-link,\n.navbar.is-link .navbar-end > .navbar-item,\n.navbar.is-link .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-link .navbar-start > a.navbar-item:focus, .navbar.is-link .navbar-start > a.navbar-item:hover, .navbar.is-link .navbar-start > a.navbar-item.is-active,\n.navbar.is-link .navbar-start .navbar-link:focus,\n.navbar.is-link .navbar-start .navbar-link:hover,\n.navbar.is-link .navbar-start .navbar-link.is-active,\n.navbar.is-link .navbar-end > a.navbar-item:focus,\n.navbar.is-link .navbar-end > a.navbar-item:hover,\n.navbar.is-link .navbar-end > a.navbar-item.is-active,\n.navbar.is-link .navbar-end .navbar-link:focus,\n.navbar.is-link .navbar-end .navbar-link:hover,\n.navbar.is-link .navbar-end .navbar-link.is-active {\n    background-color: #6943d0;\n    color: #fff;\n  }\n  .navbar.is-link .navbar-start .navbar-link::after,\n.navbar.is-link .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #6943d0;\n    color: #fff;\n  }\n  .navbar.is-link .navbar-dropdown a.navbar-item.is-active {\n    background-color: #7957d5;\n    color: #fff;\n  }\n}\n.navbar.is-info {\n  background-color: #167df0;\n  color: #fff;\n}\n.navbar.is-info .navbar-brand > .navbar-item,\n.navbar.is-info .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-info .navbar-brand > a.navbar-item:focus, .navbar.is-info .navbar-brand > a.navbar-item:hover, .navbar.is-info .navbar-brand > a.navbar-item.is-active,\n.navbar.is-info .navbar-brand .navbar-link:focus,\n.navbar.is-info .navbar-brand .navbar-link:hover,\n.navbar.is-info .navbar-brand .navbar-link.is-active {\n  background-color: #0e71de;\n  color: #fff;\n}\n.navbar.is-info .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-info .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-info .navbar-start > .navbar-item,\n.navbar.is-info .navbar-start .navbar-link,\n.navbar.is-info .navbar-end > .navbar-item,\n.navbar.is-info .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-info .navbar-start > a.navbar-item:focus, .navbar.is-info .navbar-start > a.navbar-item:hover, .navbar.is-info .navbar-start > a.navbar-item.is-active,\n.navbar.is-info .navbar-start .navbar-link:focus,\n.navbar.is-info .navbar-start .navbar-link:hover,\n.navbar.is-info .navbar-start .navbar-link.is-active,\n.navbar.is-info .navbar-end > a.navbar-item:focus,\n.navbar.is-info .navbar-end > a.navbar-item:hover,\n.navbar.is-info .navbar-end > a.navbar-item.is-active,\n.navbar.is-info .navbar-end .navbar-link:focus,\n.navbar.is-info .navbar-end .navbar-link:hover,\n.navbar.is-info .navbar-end .navbar-link.is-active {\n    background-color: #0e71de;\n    color: #fff;\n  }\n  .navbar.is-info .navbar-start .navbar-link::after,\n.navbar.is-info .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #0e71de;\n    color: #fff;\n  }\n  .navbar.is-info .navbar-dropdown a.navbar-item.is-active {\n    background-color: #167df0;\n    color: #fff;\n  }\n}\n.navbar.is-success {\n  background-color: #48c78e;\n  color: #fff;\n}\n.navbar.is-success .navbar-brand > .navbar-item,\n.navbar.is-success .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-success .navbar-brand > a.navbar-item:focus, .navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active,\n.navbar.is-success .navbar-brand .navbar-link:focus,\n.navbar.is-success .navbar-brand .navbar-link:hover,\n.navbar.is-success .navbar-brand .navbar-link.is-active {\n  background-color: #3abb81;\n  color: #fff;\n}\n.navbar.is-success .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-success .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-success .navbar-start > .navbar-item,\n.navbar.is-success .navbar-start .navbar-link,\n.navbar.is-success .navbar-end > .navbar-item,\n.navbar.is-success .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-success .navbar-start > a.navbar-item:focus, .navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,\n.navbar.is-success .navbar-start .navbar-link:focus,\n.navbar.is-success .navbar-start .navbar-link:hover,\n.navbar.is-success .navbar-start .navbar-link.is-active,\n.navbar.is-success .navbar-end > a.navbar-item:focus,\n.navbar.is-success .navbar-end > a.navbar-item:hover,\n.navbar.is-success .navbar-end > a.navbar-item.is-active,\n.navbar.is-success .navbar-end .navbar-link:focus,\n.navbar.is-success .navbar-end .navbar-link:hover,\n.navbar.is-success .navbar-end .navbar-link.is-active {\n    background-color: #3abb81;\n    color: #fff;\n  }\n  .navbar.is-success .navbar-start .navbar-link::after,\n.navbar.is-success .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #3abb81;\n    color: #fff;\n  }\n  .navbar.is-success .navbar-dropdown a.navbar-item.is-active {\n    background-color: #48c78e;\n    color: #fff;\n  }\n}\n.navbar.is-warning {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand > .navbar-item,\n.navbar.is-warning .navbar-brand .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand > a.navbar-item:focus, .navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active,\n.navbar.is-warning .navbar-brand .navbar-link:focus,\n.navbar.is-warning .navbar-brand .navbar-link:hover,\n.navbar.is-warning .navbar-brand .navbar-link.is-active {\n  background-color: #ffd970;\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand .navbar-link::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-burger {\n  color: rgba(0, 0, 0, 0.7);\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-warning .navbar-start > .navbar-item,\n.navbar.is-warning .navbar-start .navbar-link,\n.navbar.is-warning .navbar-end > .navbar-item,\n.navbar.is-warning .navbar-end .navbar-link {\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-start > a.navbar-item:focus, .navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,\n.navbar.is-warning .navbar-start .navbar-link:focus,\n.navbar.is-warning .navbar-start .navbar-link:hover,\n.navbar.is-warning .navbar-start .navbar-link.is-active,\n.navbar.is-warning .navbar-end > a.navbar-item:focus,\n.navbar.is-warning .navbar-end > a.navbar-item:hover,\n.navbar.is-warning .navbar-end > a.navbar-item.is-active,\n.navbar.is-warning .navbar-end .navbar-link:focus,\n.navbar.is-warning .navbar-end .navbar-link:hover,\n.navbar.is-warning .navbar-end .navbar-link.is-active {\n    background-color: #ffd970;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-start .navbar-link::after,\n.navbar.is-warning .navbar-end .navbar-link::after {\n    border-color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #ffd970;\n    color: rgba(0, 0, 0, 0.7);\n  }\n  .navbar.is-warning .navbar-dropdown a.navbar-item.is-active {\n    background-color: #ffe08a;\n    color: rgba(0, 0, 0, 0.7);\n  }\n}\n.navbar.is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n.navbar.is-danger .navbar-brand > .navbar-item,\n.navbar.is-danger .navbar-brand .navbar-link {\n  color: #fff;\n}\n.navbar.is-danger .navbar-brand > a.navbar-item:focus, .navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active,\n.navbar.is-danger .navbar-brand .navbar-link:focus,\n.navbar.is-danger .navbar-brand .navbar-link:hover,\n.navbar.is-danger .navbar-brand .navbar-link.is-active {\n  background-color: #ef2e55;\n  color: #fff;\n}\n.navbar.is-danger .navbar-brand .navbar-link::after {\n  border-color: #fff;\n}\n.navbar.is-danger .navbar-burger {\n  color: #fff;\n}\n@media screen and (min-width: 1024px) {\n  .navbar.is-danger .navbar-start > .navbar-item,\n.navbar.is-danger .navbar-start .navbar-link,\n.navbar.is-danger .navbar-end > .navbar-item,\n.navbar.is-danger .navbar-end .navbar-link {\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-start > a.navbar-item:focus, .navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,\n.navbar.is-danger .navbar-start .navbar-link:focus,\n.navbar.is-danger .navbar-start .navbar-link:hover,\n.navbar.is-danger .navbar-start .navbar-link.is-active,\n.navbar.is-danger .navbar-end > a.navbar-item:focus,\n.navbar.is-danger .navbar-end > a.navbar-item:hover,\n.navbar.is-danger .navbar-end > a.navbar-item.is-active,\n.navbar.is-danger .navbar-end .navbar-link:focus,\n.navbar.is-danger .navbar-end .navbar-link:hover,\n.navbar.is-danger .navbar-end .navbar-link.is-active {\n    background-color: #ef2e55;\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-start .navbar-link::after,\n.navbar.is-danger .navbar-end .navbar-link::after {\n    border-color: #fff;\n  }\n  .navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,\n.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,\n.navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #ef2e55;\n    color: #fff;\n  }\n  .navbar.is-danger .navbar-dropdown a.navbar-item.is-active {\n    background-color: #f14668;\n    color: #fff;\n  }\n}\n.navbar > .container {\n  align-items: stretch;\n  display: flex;\n  min-height: 3.25rem;\n  width: 100%;\n}\n.navbar.has-shadow {\n  box-shadow: 0 2px 0 0 whitesmoke;\n}\n.navbar.is-fixed-bottom, .navbar.is-fixed-top {\n  left: 0;\n  position: fixed;\n  right: 0;\n  z-index: 30;\n}\n.navbar.is-fixed-bottom {\n  bottom: 0;\n}\n.navbar.is-fixed-bottom.has-shadow {\n  box-shadow: 0 -2px 0 0 whitesmoke;\n}\n.navbar.is-fixed-top {\n  top: 0;\n}\n\nhtml.has-navbar-fixed-top,\nbody.has-navbar-fixed-top {\n  padding-top: 3.25rem;\n}\nhtml.has-navbar-fixed-bottom,\nbody.has-navbar-fixed-bottom {\n  padding-bottom: 3.25rem;\n}\n\n.navbar-brand,\n.navbar-tabs {\n  align-items: stretch;\n  display: flex;\n  flex-shrink: 0;\n  min-height: 3.25rem;\n}\n\n.navbar-brand a.navbar-item:focus, .navbar-brand a.navbar-item:hover {\n  background-color: transparent;\n}\n\n.navbar-tabs {\n  -webkit-overflow-scrolling: touch;\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.navbar-burger {\n  color: #4a4a4a;\n  cursor: pointer;\n  display: block;\n  height: 3.25rem;\n  position: relative;\n  width: 3.25rem;\n  margin-left: auto;\n}\n.navbar-burger span {\n  background-color: currentColor;\n  display: block;\n  height: 1px;\n  left: calc(50% - 8px);\n  position: absolute;\n  transform-origin: center;\n  transition-duration: 86ms;\n  transition-property: background-color, opacity, transform;\n  transition-timing-function: ease-out;\n  width: 16px;\n}\n.navbar-burger span:nth-child(1) {\n  top: calc(50% - 6px);\n}\n.navbar-burger span:nth-child(2) {\n  top: calc(50% - 1px);\n}\n.navbar-burger span:nth-child(3) {\n  top: calc(50% + 4px);\n}\n.navbar-burger:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.navbar-burger.is-active span:nth-child(1) {\n  transform: translateY(5px) rotate(45deg);\n}\n.navbar-burger.is-active span:nth-child(2) {\n  opacity: 0;\n}\n.navbar-burger.is-active span:nth-child(3) {\n  transform: translateY(-5px) rotate(-45deg);\n}\n\n.navbar-menu {\n  display: none;\n}\n\n.navbar-item,\n.navbar-link {\n  color: #4a4a4a;\n  display: block;\n  line-height: 1.5;\n  padding: 0.5rem 0.75rem;\n  position: relative;\n}\n.navbar-item .icon:only-child,\n.navbar-link .icon:only-child {\n  margin-left: -0.25rem;\n  margin-right: -0.25rem;\n}\n\na.navbar-item,\n.navbar-link {\n  cursor: pointer;\n}\na.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active,\n.navbar-link:focus,\n.navbar-link:focus-within,\n.navbar-link:hover,\n.navbar-link.is-active {\n  background-color: #fafafa;\n  color: #7957d5;\n}\n\n.navbar-item {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.navbar-item img {\n  max-height: 1.75rem;\n}\n.navbar-item.has-dropdown {\n  padding: 0;\n}\n.navbar-item.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.navbar-item.is-tab {\n  border-bottom: 1px solid transparent;\n  min-height: 3.25rem;\n  padding-bottom: calc(0.5rem - 1px);\n}\n.navbar-item.is-tab:focus, .navbar-item.is-tab:hover {\n  background-color: transparent;\n  border-bottom-color: #7957d5;\n}\n.navbar-item.is-tab.is-active {\n  background-color: transparent;\n  border-bottom-color: #7957d5;\n  border-bottom-style: solid;\n  border-bottom-width: 3px;\n  color: #7957d5;\n  padding-bottom: calc(0.5rem - 3px);\n}\n\n.navbar-content {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.navbar-link:not(.is-arrowless) {\n  padding-right: 2.5em;\n}\n.navbar-link:not(.is-arrowless)::after {\n  border-color: #7957d5;\n  margin-top: -0.375em;\n  right: 1.125em;\n}\n\n.navbar-dropdown {\n  font-size: 0.875rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n.navbar-dropdown .navbar-item {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.navbar-divider {\n  background-color: whitesmoke;\n  border: none;\n  display: none;\n  height: 2px;\n  margin: 0.5rem 0;\n}\n\n@media screen and (max-width: 1023px) {\n  .navbar > .container {\n    display: block;\n  }\n\n  .navbar-brand .navbar-item,\n.navbar-tabs .navbar-item {\n    align-items: center;\n    display: flex;\n  }\n\n  .navbar-link::after {\n    display: none;\n  }\n\n  .navbar-menu {\n    background-color: white;\n    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);\n    padding: 0.5rem 0;\n  }\n  .navbar-menu.is-active {\n    display: block;\n  }\n\n  .navbar.is-fixed-bottom-touch, .navbar.is-fixed-top-touch {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n  }\n  .navbar.is-fixed-bottom-touch {\n    bottom: 0;\n  }\n  .navbar.is-fixed-bottom-touch.has-shadow {\n    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n  }\n  .navbar.is-fixed-top-touch {\n    top: 0;\n  }\n  .navbar.is-fixed-top .navbar-menu, .navbar.is-fixed-top-touch .navbar-menu {\n    -webkit-overflow-scrolling: touch;\n    max-height: calc(100vh - 3.25rem);\n    overflow: auto;\n  }\n\n  html.has-navbar-fixed-top-touch,\nbody.has-navbar-fixed-top-touch {\n    padding-top: 3.25rem;\n  }\n  html.has-navbar-fixed-bottom-touch,\nbody.has-navbar-fixed-bottom-touch {\n    padding-bottom: 3.25rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .navbar,\n.navbar-menu,\n.navbar-start,\n.navbar-end {\n    align-items: stretch;\n    display: flex;\n  }\n\n  .navbar {\n    min-height: 3.25rem;\n  }\n  .navbar.is-spaced {\n    padding: 1rem 2rem;\n  }\n  .navbar.is-spaced .navbar-start,\n.navbar.is-spaced .navbar-end {\n    align-items: center;\n  }\n  .navbar.is-spaced a.navbar-item,\n.navbar.is-spaced .navbar-link {\n    border-radius: 4px;\n  }\n  .navbar.is-transparent a.navbar-item:focus, .navbar.is-transparent a.navbar-item:hover, .navbar.is-transparent a.navbar-item.is-active,\n.navbar.is-transparent .navbar-link:focus,\n.navbar.is-transparent .navbar-link:hover,\n.navbar.is-transparent .navbar-link.is-active {\n    background-color: transparent !important;\n  }\n  .navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link {\n    background-color: transparent !important;\n  }\n  .navbar.is-transparent .navbar-dropdown a.navbar-item:focus, .navbar.is-transparent .navbar-dropdown a.navbar-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a;\n  }\n  .navbar.is-transparent .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: #7957d5;\n  }\n\n  .navbar-burger {\n    display: none;\n  }\n\n  .navbar-item,\n.navbar-link {\n    align-items: center;\n    display: flex;\n  }\n\n  .navbar-item.has-dropdown {\n    align-items: stretch;\n  }\n  .navbar-item.has-dropdown-up .navbar-link::after {\n    transform: rotate(135deg) translate(0.25em, -0.25em);\n  }\n  .navbar-item.has-dropdown-up .navbar-dropdown {\n    border-bottom: 2px solid #dbdbdb;\n    border-radius: 6px 6px 0 0;\n    border-top: none;\n    bottom: 100%;\n    box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);\n    top: auto;\n  }\n  .navbar-item.is-active .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown {\n    display: block;\n  }\n  .navbar.is-spaced .navbar-item.is-active .navbar-dropdown, .navbar-item.is-active .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed {\n    opacity: 1;\n    pointer-events: auto;\n    transform: translateY(0);\n  }\n\n  .navbar-menu {\n    flex-grow: 1;\n    flex-shrink: 0;\n  }\n\n  .navbar-start {\n    justify-content: flex-start;\n    margin-right: auto;\n  }\n\n  .navbar-end {\n    justify-content: flex-end;\n    margin-left: auto;\n  }\n\n  .navbar-dropdown {\n    background-color: white;\n    border-bottom-left-radius: 6px;\n    border-bottom-right-radius: 6px;\n    border-top: 2px solid #dbdbdb;\n    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);\n    display: none;\n    font-size: 0.875rem;\n    left: 0;\n    min-width: 100%;\n    position: absolute;\n    top: 100%;\n    z-index: 20;\n  }\n  .navbar-dropdown .navbar-item {\n    padding: 0.375rem 1rem;\n    white-space: nowrap;\n  }\n  .navbar-dropdown a.navbar-item {\n    padding-right: 3rem;\n  }\n  .navbar-dropdown a.navbar-item:focus, .navbar-dropdown a.navbar-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a;\n  }\n  .navbar-dropdown a.navbar-item.is-active {\n    background-color: whitesmoke;\n    color: #7957d5;\n  }\n  .navbar.is-spaced .navbar-dropdown, .navbar-dropdown.is-boxed {\n    border-radius: 6px;\n    border-top: none;\n    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n    display: block;\n    opacity: 0;\n    pointer-events: none;\n    top: calc(100% + (-4px));\n    transform: translateY(-5px);\n    transition-duration: 86ms;\n    transition-property: opacity, transform;\n  }\n  .navbar-dropdown.is-right {\n    left: auto;\n    right: 0;\n  }\n\n  .navbar-divider {\n    display: block;\n  }\n\n  .navbar > .container .navbar-brand,\n.container > .navbar .navbar-brand {\n    margin-left: -0.75rem;\n  }\n  .navbar > .container .navbar-menu,\n.container > .navbar .navbar-menu {\n    margin-right: -0.75rem;\n  }\n\n  .navbar.is-fixed-bottom-desktop, .navbar.is-fixed-top-desktop {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n  }\n  .navbar.is-fixed-bottom-desktop {\n    bottom: 0;\n  }\n  .navbar.is-fixed-bottom-desktop.has-shadow {\n    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n  }\n  .navbar.is-fixed-top-desktop {\n    top: 0;\n  }\n\n  html.has-navbar-fixed-top-desktop,\nbody.has-navbar-fixed-top-desktop {\n    padding-top: 3.25rem;\n  }\n  html.has-navbar-fixed-bottom-desktop,\nbody.has-navbar-fixed-bottom-desktop {\n    padding-bottom: 3.25rem;\n  }\n  html.has-spaced-navbar-fixed-top,\nbody.has-spaced-navbar-fixed-top {\n    padding-top: 5.25rem;\n  }\n  html.has-spaced-navbar-fixed-bottom,\nbody.has-spaced-navbar-fixed-bottom {\n    padding-bottom: 5.25rem;\n  }\n\n  a.navbar-item.is-active,\n.navbar-link.is-active {\n    color: #0a0a0a;\n  }\n  a.navbar-item.is-active:not(:focus):not(:hover),\n.navbar-link.is-active:not(:focus):not(:hover) {\n    background-color: transparent;\n  }\n\n  .navbar-item.has-dropdown:focus .navbar-link, .navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #fafafa;\n  }\n}\n.hero.is-fullheight-with-navbar {\n  min-height: calc(100vh - 3.25rem);\n}\n\n.pagination {\n  font-size: 1rem;\n  margin: -0.25rem;\n}\n.pagination.is-small {\n  font-size: 0.75rem;\n}\n.pagination.is-medium {\n  font-size: 1.25rem;\n}\n.pagination.is-large {\n  font-size: 1.5rem;\n}\n.pagination.is-rounded .pagination-previous,\n.pagination.is-rounded .pagination-next {\n  padding-left: 1em;\n  padding-right: 1em;\n  border-radius: 9999px;\n}\n.pagination.is-rounded .pagination-link {\n  border-radius: 9999px;\n}\n\n.pagination,\n.pagination-list {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n\n.pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  font-size: 1em;\n  justify-content: center;\n  margin: 0.25rem;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  text-align: center;\n}\n\n.pagination-previous,\n.pagination-next,\n.pagination-link {\n  border-color: #dbdbdb;\n  color: #363636;\n  min-width: 2.5em;\n}\n.pagination-previous:hover,\n.pagination-next:hover,\n.pagination-link:hover {\n  border-color: #b5b5b5;\n  color: #363636;\n}\n.pagination-previous:focus,\n.pagination-next:focus,\n.pagination-link:focus {\n  border-color: #7957d5;\n}\n.pagination-previous:active,\n.pagination-next:active,\n.pagination-link:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n}\n.pagination-previous[disabled],\n.pagination-next[disabled],\n.pagination-link[disabled] {\n  background-color: #dbdbdb;\n  border-color: #dbdbdb;\n  box-shadow: none;\n  color: #7a7a7a;\n  opacity: 0.5;\n}\n\n.pagination-previous,\n.pagination-next {\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n\n.pagination-link.is-current {\n  background-color: #7957d5;\n  border-color: #7957d5;\n  color: #fff;\n}\n\n.pagination-ellipsis {\n  color: #b5b5b5;\n  pointer-events: none;\n}\n\n.pagination-list {\n  flex-wrap: wrap;\n}\n.pagination-list li {\n  list-style: none;\n}\n\n@media screen and (max-width: 768px) {\n  .pagination {\n    flex-wrap: wrap;\n  }\n\n  .pagination-previous,\n.pagination-next {\n    flex-grow: 1;\n    flex-shrink: 1;\n  }\n\n  .pagination-list li {\n    flex-grow: 1;\n    flex-shrink: 1;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .pagination-list {\n    flex-grow: 1;\n    flex-shrink: 1;\n    justify-content: flex-start;\n    order: 1;\n  }\n\n  .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n    margin-bottom: 0;\n    margin-top: 0;\n  }\n\n  .pagination-previous {\n    order: 2;\n  }\n\n  .pagination-next {\n    order: 3;\n  }\n\n  .pagination {\n    justify-content: space-between;\n    margin-bottom: 0;\n    margin-top: 0;\n  }\n  .pagination.is-centered .pagination-previous {\n    order: 1;\n  }\n  .pagination.is-centered .pagination-list {\n    justify-content: center;\n    order: 2;\n  }\n  .pagination.is-centered .pagination-next {\n    order: 3;\n  }\n  .pagination.is-right .pagination-previous {\n    order: 1;\n  }\n  .pagination.is-right .pagination-next {\n    order: 2;\n  }\n  .pagination.is-right .pagination-list {\n    justify-content: flex-end;\n    order: 3;\n  }\n}\n.panel {\n  border-radius: 6px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n  font-size: 1rem;\n}\n.panel:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n.panel.is-white .panel-heading {\n  background-color: white;\n  color: #0a0a0a;\n}\n.panel.is-white .panel-tabs a.is-active {\n  border-bottom-color: white;\n}\n.panel.is-white .panel-block.is-active .panel-icon {\n  color: white;\n}\n.panel.is-black .panel-heading {\n  background-color: #0a0a0a;\n  color: white;\n}\n.panel.is-black .panel-tabs a.is-active {\n  border-bottom-color: #0a0a0a;\n}\n.panel.is-black .panel-block.is-active .panel-icon {\n  color: #0a0a0a;\n}\n.panel.is-light .panel-heading {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.panel.is-light .panel-tabs a.is-active {\n  border-bottom-color: whitesmoke;\n}\n.panel.is-light .panel-block.is-active .panel-icon {\n  color: whitesmoke;\n}\n.panel.is-dark .panel-heading {\n  background-color: #363636;\n  color: #fff;\n}\n.panel.is-dark .panel-tabs a.is-active {\n  border-bottom-color: #363636;\n}\n.panel.is-dark .panel-block.is-active .panel-icon {\n  color: #363636;\n}\n.panel.is-primary .panel-heading {\n  background-color: #7957d5;\n  color: #fff;\n}\n.panel.is-primary .panel-tabs a.is-active {\n  border-bottom-color: #7957d5;\n}\n.panel.is-primary .panel-block.is-active .panel-icon {\n  color: #7957d5;\n}\n.panel.is-link .panel-heading {\n  background-color: #7957d5;\n  color: #fff;\n}\n.panel.is-link .panel-tabs a.is-active {\n  border-bottom-color: #7957d5;\n}\n.panel.is-link .panel-block.is-active .panel-icon {\n  color: #7957d5;\n}\n.panel.is-info .panel-heading {\n  background-color: #167df0;\n  color: #fff;\n}\n.panel.is-info .panel-tabs a.is-active {\n  border-bottom-color: #167df0;\n}\n.panel.is-info .panel-block.is-active .panel-icon {\n  color: #167df0;\n}\n.panel.is-success .panel-heading {\n  background-color: #48c78e;\n  color: #fff;\n}\n.panel.is-success .panel-tabs a.is-active {\n  border-bottom-color: #48c78e;\n}\n.panel.is-success .panel-block.is-active .panel-icon {\n  color: #48c78e;\n}\n.panel.is-warning .panel-heading {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.panel.is-warning .panel-tabs a.is-active {\n  border-bottom-color: #ffe08a;\n}\n.panel.is-warning .panel-block.is-active .panel-icon {\n  color: #ffe08a;\n}\n.panel.is-danger .panel-heading {\n  background-color: #f14668;\n  color: #fff;\n}\n.panel.is-danger .panel-tabs a.is-active {\n  border-bottom-color: #f14668;\n}\n.panel.is-danger .panel-block.is-active .panel-icon {\n  color: #f14668;\n}\n\n.panel-tabs:not(:last-child),\n.panel-block:not(:last-child) {\n  border-bottom: 1px solid #ededed;\n}\n\n.panel-heading {\n  background-color: #ededed;\n  border-radius: 6px 6px 0 0;\n  color: #363636;\n  font-size: 1.25em;\n  font-weight: 700;\n  line-height: 1.25;\n  padding: 0.75em 1em;\n}\n\n.panel-tabs {\n  align-items: flex-end;\n  display: flex;\n  font-size: 0.875em;\n  justify-content: center;\n}\n.panel-tabs a {\n  border-bottom: 1px solid #dbdbdb;\n  margin-bottom: -1px;\n  padding: 0.5em;\n}\n.panel-tabs a.is-active {\n  border-bottom-color: #4a4a4a;\n  color: #363636;\n}\n\n.panel-list a {\n  color: #4a4a4a;\n}\n.panel-list a:hover {\n  color: #7957d5;\n}\n\n.panel-block {\n  align-items: center;\n  color: #363636;\n  display: flex;\n  justify-content: flex-start;\n  padding: 0.5em 0.75em;\n}\n.panel-block input[type=checkbox] {\n  margin-right: 0.75em;\n}\n.panel-block > .control {\n  flex-grow: 1;\n  flex-shrink: 1;\n  width: 100%;\n}\n.panel-block.is-wrapped {\n  flex-wrap: wrap;\n}\n.panel-block.is-active {\n  border-left-color: #7957d5;\n  color: #363636;\n}\n.panel-block.is-active .panel-icon {\n  color: #7957d5;\n}\n.panel-block:last-child {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\na.panel-block,\nlabel.panel-block {\n  cursor: pointer;\n}\na.panel-block:hover,\nlabel.panel-block:hover {\n  background-color: whitesmoke;\n}\n\n.panel-icon {\n  display: inline-block;\n  font-size: 14px;\n  height: 1em;\n  line-height: 1em;\n  text-align: center;\n  vertical-align: top;\n  width: 1em;\n  color: #7a7a7a;\n  margin-right: 0.75em;\n}\n.panel-icon .fa {\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.tabs {\n  -webkit-overflow-scrolling: touch;\n  align-items: stretch;\n  display: flex;\n  font-size: 1rem;\n  justify-content: space-between;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n.tabs a {\n  align-items: center;\n  border-bottom-color: #dbdbdb;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  color: #4a4a4a;\n  display: flex;\n  justify-content: center;\n  margin-bottom: -1px;\n  padding: 0.5em 1em;\n  vertical-align: top;\n}\n.tabs a:hover {\n  border-bottom-color: #363636;\n  color: #363636;\n}\n.tabs li {\n  display: block;\n}\n.tabs li.is-active a {\n  border-bottom-color: #7957d5;\n  color: #7957d5;\n}\n.tabs ul {\n  align-items: center;\n  border-bottom-color: #dbdbdb;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  display: flex;\n  flex-grow: 1;\n  flex-shrink: 0;\n  justify-content: flex-start;\n}\n.tabs ul.is-left {\n  padding-right: 0.75em;\n}\n.tabs ul.is-center {\n  flex: none;\n  justify-content: center;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n}\n.tabs ul.is-right {\n  justify-content: flex-end;\n  padding-left: 0.75em;\n}\n.tabs .icon:first-child {\n  margin-right: 0.5em;\n}\n.tabs .icon:last-child {\n  margin-left: 0.5em;\n}\n.tabs.is-centered ul {\n  justify-content: center;\n}\n.tabs.is-right ul {\n  justify-content: flex-end;\n}\n.tabs.is-boxed a {\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.tabs.is-boxed a:hover {\n  background-color: whitesmoke;\n  border-bottom-color: #dbdbdb;\n}\n.tabs.is-boxed li.is-active a {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-bottom-color: transparent !important;\n}\n.tabs.is-fullwidth li {\n  flex-grow: 1;\n  flex-shrink: 0;\n}\n.tabs.is-toggle a {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px;\n  margin-bottom: 0;\n  position: relative;\n}\n.tabs.is-toggle a:hover {\n  background-color: whitesmoke;\n  border-color: #b5b5b5;\n  z-index: 2;\n}\n.tabs.is-toggle li + li {\n  margin-left: -1px;\n}\n.tabs.is-toggle li:first-child a {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.tabs.is-toggle li:last-child a {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.tabs.is-toggle li.is-active a {\n  background-color: #7957d5;\n  border-color: #7957d5;\n  color: #fff;\n  z-index: 1;\n}\n.tabs.is-toggle ul {\n  border-bottom: none;\n}\n.tabs.is-toggle.is-toggle-rounded li:first-child a {\n  border-bottom-left-radius: 9999px;\n  border-top-left-radius: 9999px;\n  padding-left: 1.25em;\n}\n.tabs.is-toggle.is-toggle-rounded li:last-child a {\n  border-bottom-right-radius: 9999px;\n  border-top-right-radius: 9999px;\n  padding-right: 1.25em;\n}\n.tabs.is-small {\n  font-size: 0.75rem;\n}\n.tabs.is-medium {\n  font-size: 1.25rem;\n}\n.tabs.is-large {\n  font-size: 1.5rem;\n}\n\n/* Bulma Grid */\n.column {\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0.75rem;\n}\n.columns.is-mobile > .column.is-narrow {\n  flex: none;\n  width: unset;\n}\n.columns.is-mobile > .column.is-full {\n  flex: none;\n  width: 100%;\n}\n.columns.is-mobile > .column.is-three-quarters {\n  flex: none;\n  width: 75%;\n}\n.columns.is-mobile > .column.is-two-thirds {\n  flex: none;\n  width: 66.6666%;\n}\n.columns.is-mobile > .column.is-half {\n  flex: none;\n  width: 50%;\n}\n.columns.is-mobile > .column.is-one-third {\n  flex: none;\n  width: 33.3333%;\n}\n.columns.is-mobile > .column.is-one-quarter {\n  flex: none;\n  width: 25%;\n}\n.columns.is-mobile > .column.is-one-fifth {\n  flex: none;\n  width: 20%;\n}\n.columns.is-mobile > .column.is-two-fifths {\n  flex: none;\n  width: 40%;\n}\n.columns.is-mobile > .column.is-three-fifths {\n  flex: none;\n  width: 60%;\n}\n.columns.is-mobile > .column.is-four-fifths {\n  flex: none;\n  width: 80%;\n}\n.columns.is-mobile > .column.is-offset-three-quarters {\n  margin-left: 75%;\n}\n.columns.is-mobile > .column.is-offset-two-thirds {\n  margin-left: 66.6666%;\n}\n.columns.is-mobile > .column.is-offset-half {\n  margin-left: 50%;\n}\n.columns.is-mobile > .column.is-offset-one-third {\n  margin-left: 33.3333%;\n}\n.columns.is-mobile > .column.is-offset-one-quarter {\n  margin-left: 25%;\n}\n.columns.is-mobile > .column.is-offset-one-fifth {\n  margin-left: 20%;\n}\n.columns.is-mobile > .column.is-offset-two-fifths {\n  margin-left: 40%;\n}\n.columns.is-mobile > .column.is-offset-three-fifths {\n  margin-left: 60%;\n}\n.columns.is-mobile > .column.is-offset-four-fifths {\n  margin-left: 80%;\n}\n.columns.is-mobile > .column.is-0 {\n  flex: none;\n  width: 0%;\n}\n.columns.is-mobile > .column.is-offset-0 {\n  margin-left: 0%;\n}\n.columns.is-mobile > .column.is-1 {\n  flex: none;\n  width: 8.33333337%;\n}\n.columns.is-mobile > .column.is-offset-1 {\n  margin-left: 8.33333337%;\n}\n.columns.is-mobile > .column.is-2 {\n  flex: none;\n  width: 16.66666674%;\n}\n.columns.is-mobile > .column.is-offset-2 {\n  margin-left: 16.66666674%;\n}\n.columns.is-mobile > .column.is-3 {\n  flex: none;\n  width: 25%;\n}\n.columns.is-mobile > .column.is-offset-3 {\n  margin-left: 25%;\n}\n.columns.is-mobile > .column.is-4 {\n  flex: none;\n  width: 33.33333337%;\n}\n.columns.is-mobile > .column.is-offset-4 {\n  margin-left: 33.33333337%;\n}\n.columns.is-mobile > .column.is-5 {\n  flex: none;\n  width: 41.66666674%;\n}\n.columns.is-mobile > .column.is-offset-5 {\n  margin-left: 41.66666674%;\n}\n.columns.is-mobile > .column.is-6 {\n  flex: none;\n  width: 50%;\n}\n.columns.is-mobile > .column.is-offset-6 {\n  margin-left: 50%;\n}\n.columns.is-mobile > .column.is-7 {\n  flex: none;\n  width: 58.33333337%;\n}\n.columns.is-mobile > .column.is-offset-7 {\n  margin-left: 58.33333337%;\n}\n.columns.is-mobile > .column.is-8 {\n  flex: none;\n  width: 66.66666674%;\n}\n.columns.is-mobile > .column.is-offset-8 {\n  margin-left: 66.66666674%;\n}\n.columns.is-mobile > .column.is-9 {\n  flex: none;\n  width: 75%;\n}\n.columns.is-mobile > .column.is-offset-9 {\n  margin-left: 75%;\n}\n.columns.is-mobile > .column.is-10 {\n  flex: none;\n  width: 83.33333337%;\n}\n.columns.is-mobile > .column.is-offset-10 {\n  margin-left: 83.33333337%;\n}\n.columns.is-mobile > .column.is-11 {\n  flex: none;\n  width: 91.66666674%;\n}\n.columns.is-mobile > .column.is-offset-11 {\n  margin-left: 91.66666674%;\n}\n.columns.is-mobile > .column.is-12 {\n  flex: none;\n  width: 100%;\n}\n.columns.is-mobile > .column.is-offset-12 {\n  margin-left: 100%;\n}\n@media screen and (max-width: 768px) {\n  .column.is-narrow-mobile {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-mobile {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-mobile {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-mobile {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-mobile {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-mobile {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-mobile {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-mobile {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-mobile {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-mobile {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-mobile {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-mobile {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-mobile {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-mobile {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-mobile {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-mobile {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-mobile {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-mobile {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-mobile {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-mobile {\n    margin-left: 80%;\n  }\n  .column.is-0-mobile {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-mobile {\n    margin-left: 0%;\n  }\n  .column.is-1-mobile {\n    flex: none;\n    width: 8.33333337%;\n  }\n  .column.is-offset-1-mobile {\n    margin-left: 8.33333337%;\n  }\n  .column.is-2-mobile {\n    flex: none;\n    width: 16.66666674%;\n  }\n  .column.is-offset-2-mobile {\n    margin-left: 16.66666674%;\n  }\n  .column.is-3-mobile {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-mobile {\n    margin-left: 25%;\n  }\n  .column.is-4-mobile {\n    flex: none;\n    width: 33.33333337%;\n  }\n  .column.is-offset-4-mobile {\n    margin-left: 33.33333337%;\n  }\n  .column.is-5-mobile {\n    flex: none;\n    width: 41.66666674%;\n  }\n  .column.is-offset-5-mobile {\n    margin-left: 41.66666674%;\n  }\n  .column.is-6-mobile {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-mobile {\n    margin-left: 50%;\n  }\n  .column.is-7-mobile {\n    flex: none;\n    width: 58.33333337%;\n  }\n  .column.is-offset-7-mobile {\n    margin-left: 58.33333337%;\n  }\n  .column.is-8-mobile {\n    flex: none;\n    width: 66.66666674%;\n  }\n  .column.is-offset-8-mobile {\n    margin-left: 66.66666674%;\n  }\n  .column.is-9-mobile {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-mobile {\n    margin-left: 75%;\n  }\n  .column.is-10-mobile {\n    flex: none;\n    width: 83.33333337%;\n  }\n  .column.is-offset-10-mobile {\n    margin-left: 83.33333337%;\n  }\n  .column.is-11-mobile {\n    flex: none;\n    width: 91.66666674%;\n  }\n  .column.is-offset-11-mobile {\n    margin-left: 91.66666674%;\n  }\n  .column.is-12-mobile {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-mobile {\n    margin-left: 100%;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .column.is-narrow, .column.is-narrow-tablet {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full, .column.is-full-tablet {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters, .column.is-three-quarters-tablet {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds, .column.is-two-thirds-tablet {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half, .column.is-half-tablet {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third, .column.is-one-third-tablet {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter, .column.is-one-quarter-tablet {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth, .column.is-one-fifth-tablet {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths, .column.is-two-fifths-tablet {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths, .column.is-three-fifths-tablet {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths, .column.is-four-fifths-tablet {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half, .column.is-offset-half-tablet {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third, .column.is-offset-one-third-tablet {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth, .column.is-offset-one-fifth-tablet {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths, .column.is-offset-two-fifths-tablet {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths, .column.is-offset-three-fifths-tablet {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths, .column.is-offset-four-fifths-tablet {\n    margin-left: 80%;\n  }\n  .column.is-0, .column.is-0-tablet {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0, .column.is-offset-0-tablet {\n    margin-left: 0%;\n  }\n  .column.is-1, .column.is-1-tablet {\n    flex: none;\n    width: 8.33333337%;\n  }\n  .column.is-offset-1, .column.is-offset-1-tablet {\n    margin-left: 8.33333337%;\n  }\n  .column.is-2, .column.is-2-tablet {\n    flex: none;\n    width: 16.66666674%;\n  }\n  .column.is-offset-2, .column.is-offset-2-tablet {\n    margin-left: 16.66666674%;\n  }\n  .column.is-3, .column.is-3-tablet {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3, .column.is-offset-3-tablet {\n    margin-left: 25%;\n  }\n  .column.is-4, .column.is-4-tablet {\n    flex: none;\n    width: 33.33333337%;\n  }\n  .column.is-offset-4, .column.is-offset-4-tablet {\n    margin-left: 33.33333337%;\n  }\n  .column.is-5, .column.is-5-tablet {\n    flex: none;\n    width: 41.66666674%;\n  }\n  .column.is-offset-5, .column.is-offset-5-tablet {\n    margin-left: 41.66666674%;\n  }\n  .column.is-6, .column.is-6-tablet {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6, .column.is-offset-6-tablet {\n    margin-left: 50%;\n  }\n  .column.is-7, .column.is-7-tablet {\n    flex: none;\n    width: 58.33333337%;\n  }\n  .column.is-offset-7, .column.is-offset-7-tablet {\n    margin-left: 58.33333337%;\n  }\n  .column.is-8, .column.is-8-tablet {\n    flex: none;\n    width: 66.66666674%;\n  }\n  .column.is-offset-8, .column.is-offset-8-tablet {\n    margin-left: 66.66666674%;\n  }\n  .column.is-9, .column.is-9-tablet {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9, .column.is-offset-9-tablet {\n    margin-left: 75%;\n  }\n  .column.is-10, .column.is-10-tablet {\n    flex: none;\n    width: 83.33333337%;\n  }\n  .column.is-offset-10, .column.is-offset-10-tablet {\n    margin-left: 83.33333337%;\n  }\n  .column.is-11, .column.is-11-tablet {\n    flex: none;\n    width: 91.66666674%;\n  }\n  .column.is-offset-11, .column.is-offset-11-tablet {\n    margin-left: 91.66666674%;\n  }\n  .column.is-12, .column.is-12-tablet {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12, .column.is-offset-12-tablet {\n    margin-left: 100%;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .column.is-narrow-touch {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-touch {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-touch {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-touch {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-touch {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-touch {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-touch {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-touch {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-touch {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-touch {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-touch {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-touch {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-touch {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-touch {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-touch {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-touch {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-touch {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-touch {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-touch {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-touch {\n    margin-left: 80%;\n  }\n  .column.is-0-touch {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-touch {\n    margin-left: 0%;\n  }\n  .column.is-1-touch {\n    flex: none;\n    width: 8.33333337%;\n  }\n  .column.is-offset-1-touch {\n    margin-left: 8.33333337%;\n  }\n  .column.is-2-touch {\n    flex: none;\n    width: 16.66666674%;\n  }\n  .column.is-offset-2-touch {\n    margin-left: 16.66666674%;\n  }\n  .column.is-3-touch {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-touch {\n    margin-left: 25%;\n  }\n  .column.is-4-touch {\n    flex: none;\n    width: 33.33333337%;\n  }\n  .column.is-offset-4-touch {\n    margin-left: 33.33333337%;\n  }\n  .column.is-5-touch {\n    flex: none;\n    width: 41.66666674%;\n  }\n  .column.is-offset-5-touch {\n    margin-left: 41.66666674%;\n  }\n  .column.is-6-touch {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-touch {\n    margin-left: 50%;\n  }\n  .column.is-7-touch {\n    flex: none;\n    width: 58.33333337%;\n  }\n  .column.is-offset-7-touch {\n    margin-left: 58.33333337%;\n  }\n  .column.is-8-touch {\n    flex: none;\n    width: 66.66666674%;\n  }\n  .column.is-offset-8-touch {\n    margin-left: 66.66666674%;\n  }\n  .column.is-9-touch {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-touch {\n    margin-left: 75%;\n  }\n  .column.is-10-touch {\n    flex: none;\n    width: 83.33333337%;\n  }\n  .column.is-offset-10-touch {\n    margin-left: 83.33333337%;\n  }\n  .column.is-11-touch {\n    flex: none;\n    width: 91.66666674%;\n  }\n  .column.is-offset-11-touch {\n    margin-left: 91.66666674%;\n  }\n  .column.is-12-touch {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-touch {\n    margin-left: 100%;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .column.is-narrow-desktop {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-desktop {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-desktop {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-desktop {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-desktop {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-desktop {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-desktop {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-desktop {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-desktop {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-desktop {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-desktop {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-desktop {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-desktop {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-desktop {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-desktop {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-desktop {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-desktop {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-desktop {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-desktop {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-desktop {\n    margin-left: 80%;\n  }\n  .column.is-0-desktop {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-desktop {\n    margin-left: 0%;\n  }\n  .column.is-1-desktop {\n    flex: none;\n    width: 8.33333337%;\n  }\n  .column.is-offset-1-desktop {\n    margin-left: 8.33333337%;\n  }\n  .column.is-2-desktop {\n    flex: none;\n    width: 16.66666674%;\n  }\n  .column.is-offset-2-desktop {\n    margin-left: 16.66666674%;\n  }\n  .column.is-3-desktop {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-desktop {\n    margin-left: 25%;\n  }\n  .column.is-4-desktop {\n    flex: none;\n    width: 33.33333337%;\n  }\n  .column.is-offset-4-desktop {\n    margin-left: 33.33333337%;\n  }\n  .column.is-5-desktop {\n    flex: none;\n    width: 41.66666674%;\n  }\n  .column.is-offset-5-desktop {\n    margin-left: 41.66666674%;\n  }\n  .column.is-6-desktop {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-desktop {\n    margin-left: 50%;\n  }\n  .column.is-7-desktop {\n    flex: none;\n    width: 58.33333337%;\n  }\n  .column.is-offset-7-desktop {\n    margin-left: 58.33333337%;\n  }\n  .column.is-8-desktop {\n    flex: none;\n    width: 66.66666674%;\n  }\n  .column.is-offset-8-desktop {\n    margin-left: 66.66666674%;\n  }\n  .column.is-9-desktop {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-desktop {\n    margin-left: 75%;\n  }\n  .column.is-10-desktop {\n    flex: none;\n    width: 83.33333337%;\n  }\n  .column.is-offset-10-desktop {\n    margin-left: 83.33333337%;\n  }\n  .column.is-11-desktop {\n    flex: none;\n    width: 91.66666674%;\n  }\n  .column.is-offset-11-desktop {\n    margin-left: 91.66666674%;\n  }\n  .column.is-12-desktop {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-desktop {\n    margin-left: 100%;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .column.is-narrow-widescreen {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-widescreen {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-widescreen {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-widescreen {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-widescreen {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-widescreen {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-widescreen {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-widescreen {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-widescreen {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-widescreen {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-widescreen {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-widescreen {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-widescreen {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-widescreen {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-widescreen {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-widescreen {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-widescreen {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-widescreen {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-widescreen {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-widescreen {\n    margin-left: 80%;\n  }\n  .column.is-0-widescreen {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-widescreen {\n    margin-left: 0%;\n  }\n  .column.is-1-widescreen {\n    flex: none;\n    width: 8.33333337%;\n  }\n  .column.is-offset-1-widescreen {\n    margin-left: 8.33333337%;\n  }\n  .column.is-2-widescreen {\n    flex: none;\n    width: 16.66666674%;\n  }\n  .column.is-offset-2-widescreen {\n    margin-left: 16.66666674%;\n  }\n  .column.is-3-widescreen {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-widescreen {\n    margin-left: 25%;\n  }\n  .column.is-4-widescreen {\n    flex: none;\n    width: 33.33333337%;\n  }\n  .column.is-offset-4-widescreen {\n    margin-left: 33.33333337%;\n  }\n  .column.is-5-widescreen {\n    flex: none;\n    width: 41.66666674%;\n  }\n  .column.is-offset-5-widescreen {\n    margin-left: 41.66666674%;\n  }\n  .column.is-6-widescreen {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-widescreen {\n    margin-left: 50%;\n  }\n  .column.is-7-widescreen {\n    flex: none;\n    width: 58.33333337%;\n  }\n  .column.is-offset-7-widescreen {\n    margin-left: 58.33333337%;\n  }\n  .column.is-8-widescreen {\n    flex: none;\n    width: 66.66666674%;\n  }\n  .column.is-offset-8-widescreen {\n    margin-left: 66.66666674%;\n  }\n  .column.is-9-widescreen {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-widescreen {\n    margin-left: 75%;\n  }\n  .column.is-10-widescreen {\n    flex: none;\n    width: 83.33333337%;\n  }\n  .column.is-offset-10-widescreen {\n    margin-left: 83.33333337%;\n  }\n  .column.is-11-widescreen {\n    flex: none;\n    width: 91.66666674%;\n  }\n  .column.is-offset-11-widescreen {\n    margin-left: 91.66666674%;\n  }\n  .column.is-12-widescreen {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-widescreen {\n    margin-left: 100%;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .column.is-narrow-fullhd {\n    flex: none;\n    width: unset;\n  }\n  .column.is-full-fullhd {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-three-quarters-fullhd {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-two-thirds-fullhd {\n    flex: none;\n    width: 66.6666%;\n  }\n  .column.is-half-fullhd {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-one-third-fullhd {\n    flex: none;\n    width: 33.3333%;\n  }\n  .column.is-one-quarter-fullhd {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-one-fifth-fullhd {\n    flex: none;\n    width: 20%;\n  }\n  .column.is-two-fifths-fullhd {\n    flex: none;\n    width: 40%;\n  }\n  .column.is-three-fifths-fullhd {\n    flex: none;\n    width: 60%;\n  }\n  .column.is-four-fifths-fullhd {\n    flex: none;\n    width: 80%;\n  }\n  .column.is-offset-three-quarters-fullhd {\n    margin-left: 75%;\n  }\n  .column.is-offset-two-thirds-fullhd {\n    margin-left: 66.6666%;\n  }\n  .column.is-offset-half-fullhd {\n    margin-left: 50%;\n  }\n  .column.is-offset-one-third-fullhd {\n    margin-left: 33.3333%;\n  }\n  .column.is-offset-one-quarter-fullhd {\n    margin-left: 25%;\n  }\n  .column.is-offset-one-fifth-fullhd {\n    margin-left: 20%;\n  }\n  .column.is-offset-two-fifths-fullhd {\n    margin-left: 40%;\n  }\n  .column.is-offset-three-fifths-fullhd {\n    margin-left: 60%;\n  }\n  .column.is-offset-four-fifths-fullhd {\n    margin-left: 80%;\n  }\n  .column.is-0-fullhd {\n    flex: none;\n    width: 0%;\n  }\n  .column.is-offset-0-fullhd {\n    margin-left: 0%;\n  }\n  .column.is-1-fullhd {\n    flex: none;\n    width: 8.33333337%;\n  }\n  .column.is-offset-1-fullhd {\n    margin-left: 8.33333337%;\n  }\n  .column.is-2-fullhd {\n    flex: none;\n    width: 16.66666674%;\n  }\n  .column.is-offset-2-fullhd {\n    margin-left: 16.66666674%;\n  }\n  .column.is-3-fullhd {\n    flex: none;\n    width: 25%;\n  }\n  .column.is-offset-3-fullhd {\n    margin-left: 25%;\n  }\n  .column.is-4-fullhd {\n    flex: none;\n    width: 33.33333337%;\n  }\n  .column.is-offset-4-fullhd {\n    margin-left: 33.33333337%;\n  }\n  .column.is-5-fullhd {\n    flex: none;\n    width: 41.66666674%;\n  }\n  .column.is-offset-5-fullhd {\n    margin-left: 41.66666674%;\n  }\n  .column.is-6-fullhd {\n    flex: none;\n    width: 50%;\n  }\n  .column.is-offset-6-fullhd {\n    margin-left: 50%;\n  }\n  .column.is-7-fullhd {\n    flex: none;\n    width: 58.33333337%;\n  }\n  .column.is-offset-7-fullhd {\n    margin-left: 58.33333337%;\n  }\n  .column.is-8-fullhd {\n    flex: none;\n    width: 66.66666674%;\n  }\n  .column.is-offset-8-fullhd {\n    margin-left: 66.66666674%;\n  }\n  .column.is-9-fullhd {\n    flex: none;\n    width: 75%;\n  }\n  .column.is-offset-9-fullhd {\n    margin-left: 75%;\n  }\n  .column.is-10-fullhd {\n    flex: none;\n    width: 83.33333337%;\n  }\n  .column.is-offset-10-fullhd {\n    margin-left: 83.33333337%;\n  }\n  .column.is-11-fullhd {\n    flex: none;\n    width: 91.66666674%;\n  }\n  .column.is-offset-11-fullhd {\n    margin-left: 91.66666674%;\n  }\n  .column.is-12-fullhd {\n    flex: none;\n    width: 100%;\n  }\n  .column.is-offset-12-fullhd {\n    margin-left: 100%;\n  }\n}\n\n.columns {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem;\n}\n.columns:last-child {\n  margin-bottom: -0.75rem;\n}\n.columns:not(:last-child) {\n  margin-bottom: calc(1.5rem - 0.75rem);\n}\n.columns.is-centered {\n  justify-content: center;\n}\n.columns.is-gapless {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n}\n.columns.is-gapless > .column {\n  margin: 0;\n  padding: 0 !important;\n}\n.columns.is-gapless:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n.columns.is-gapless:last-child {\n  margin-bottom: 0;\n}\n.columns.is-mobile {\n  display: flex;\n}\n.columns.is-multiline {\n  flex-wrap: wrap;\n}\n.columns.is-vcentered {\n  align-items: center;\n}\n@media screen and (min-width: 769px), print {\n  .columns:not(.is-desktop) {\n    display: flex;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-desktop {\n    display: flex;\n  }\n}\n\n.columns.is-variable {\n  --columnGap: 0.75rem;\n  margin-left: calc(-1 * var(--columnGap));\n  margin-right: calc(-1 * var(--columnGap));\n}\n.columns.is-variable > .column {\n  padding-left: var(--columnGap);\n  padding-right: var(--columnGap);\n}\n.columns.is-variable.is-0 {\n  --columnGap: 0rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-0-mobile {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-0-tablet {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-0-tablet-only {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-0-touch {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-0-desktop {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-0-desktop-only {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-0-widescreen {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-0-widescreen-only {\n    --columnGap: 0rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-0-fullhd {\n    --columnGap: 0rem;\n  }\n}\n.columns.is-variable.is-1 {\n  --columnGap: 0.25rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-1-mobile {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-1-tablet {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-1-tablet-only {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-1-touch {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-1-desktop {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-1-desktop-only {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-1-widescreen {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-1-widescreen-only {\n    --columnGap: 0.25rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-1-fullhd {\n    --columnGap: 0.25rem;\n  }\n}\n.columns.is-variable.is-2 {\n  --columnGap: 0.5rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-2-mobile {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-2-tablet {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-2-tablet-only {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-2-touch {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-2-desktop {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-2-desktop-only {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-2-widescreen {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-2-widescreen-only {\n    --columnGap: 0.5rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-2-fullhd {\n    --columnGap: 0.5rem;\n  }\n}\n.columns.is-variable.is-3 {\n  --columnGap: 0.75rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-3-mobile {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-3-tablet {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-3-tablet-only {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-3-touch {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-3-desktop {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-3-desktop-only {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-3-widescreen {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-3-widescreen-only {\n    --columnGap: 0.75rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-3-fullhd {\n    --columnGap: 0.75rem;\n  }\n}\n.columns.is-variable.is-4 {\n  --columnGap: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-4-mobile {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-4-tablet {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-4-tablet-only {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-4-touch {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-4-desktop {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-4-desktop-only {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-4-widescreen {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-4-widescreen-only {\n    --columnGap: 1rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-4-fullhd {\n    --columnGap: 1rem;\n  }\n}\n.columns.is-variable.is-5 {\n  --columnGap: 1.25rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-5-mobile {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-5-tablet {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-5-tablet-only {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-5-touch {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-5-desktop {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-5-desktop-only {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-5-widescreen {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-5-widescreen-only {\n    --columnGap: 1.25rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-5-fullhd {\n    --columnGap: 1.25rem;\n  }\n}\n.columns.is-variable.is-6 {\n  --columnGap: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-6-mobile {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-6-tablet {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-6-tablet-only {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-6-touch {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-6-desktop {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-6-desktop-only {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-6-widescreen {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-6-widescreen-only {\n    --columnGap: 1.5rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-6-fullhd {\n    --columnGap: 1.5rem;\n  }\n}\n.columns.is-variable.is-7 {\n  --columnGap: 1.75rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-7-mobile {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-7-tablet {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-7-tablet-only {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-7-touch {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-7-desktop {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-7-desktop-only {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-7-widescreen {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-7-widescreen-only {\n    --columnGap: 1.75rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-7-fullhd {\n    --columnGap: 1.75rem;\n  }\n}\n.columns.is-variable.is-8 {\n  --columnGap: 2rem;\n}\n@media screen and (max-width: 768px) {\n  .columns.is-variable.is-8-mobile {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .columns.is-variable.is-8-tablet {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .columns.is-variable.is-8-tablet-only {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .columns.is-variable.is-8-touch {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .columns.is-variable.is-8-desktop {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .columns.is-variable.is-8-desktop-only {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .columns.is-variable.is-8-widescreen {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .columns.is-variable.is-8-widescreen-only {\n    --columnGap: 2rem;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .columns.is-variable.is-8-fullhd {\n    --columnGap: 2rem;\n  }\n}\n\n.tile {\n  align-items: stretch;\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-height: min-content;\n}\n.tile.is-ancestor {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem;\n}\n.tile.is-ancestor:last-child {\n  margin-bottom: -0.75rem;\n}\n.tile.is-ancestor:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.tile.is-child {\n  margin: 0 !important;\n}\n.tile.is-parent {\n  padding: 0.75rem;\n}\n.tile.is-vertical {\n  flex-direction: column;\n}\n.tile.is-vertical > .tile.is-child:not(:last-child) {\n  margin-bottom: 1.5rem !important;\n}\n@media screen and (min-width: 769px), print {\n  .tile:not(.is-child) {\n    display: flex;\n  }\n  .tile.is-1 {\n    flex: none;\n    width: 8.33333337%;\n  }\n  .tile.is-2 {\n    flex: none;\n    width: 16.66666674%;\n  }\n  .tile.is-3 {\n    flex: none;\n    width: 25%;\n  }\n  .tile.is-4 {\n    flex: none;\n    width: 33.33333337%;\n  }\n  .tile.is-5 {\n    flex: none;\n    width: 41.66666674%;\n  }\n  .tile.is-6 {\n    flex: none;\n    width: 50%;\n  }\n  .tile.is-7 {\n    flex: none;\n    width: 58.33333337%;\n  }\n  .tile.is-8 {\n    flex: none;\n    width: 66.66666674%;\n  }\n  .tile.is-9 {\n    flex: none;\n    width: 75%;\n  }\n  .tile.is-10 {\n    flex: none;\n    width: 83.33333337%;\n  }\n  .tile.is-11 {\n    flex: none;\n    width: 91.66666674%;\n  }\n  .tile.is-12 {\n    flex: none;\n    width: 100%;\n  }\n}\n\n/* Bulma Helpers */\n.has-text-white {\n  color: white !important;\n}\n\na.has-text-white:hover, a.has-text-white:focus {\n  color: #e6e6e6 !important;\n}\n\n.has-background-white {\n  background-color: white !important;\n}\n\n.has-text-black {\n  color: #0a0a0a !important;\n}\n\na.has-text-black:hover, a.has-text-black:focus {\n  color: black !important;\n}\n\n.has-background-black {\n  background-color: #0a0a0a !important;\n}\n\n.has-text-light {\n  color: whitesmoke !important;\n}\n\na.has-text-light:hover, a.has-text-light:focus {\n  color: #dbdbdb !important;\n}\n\n.has-background-light {\n  background-color: whitesmoke !important;\n}\n\n.has-text-dark {\n  color: #363636 !important;\n}\n\na.has-text-dark:hover, a.has-text-dark:focus {\n  color: #1c1c1c !important;\n}\n\n.has-background-dark {\n  background-color: #363636 !important;\n}\n\n.has-text-primary {\n  color: #7957d5 !important;\n}\n\na.has-text-primary:hover, a.has-text-primary:focus {\n  color: #5a32c7 !important;\n}\n\n.has-background-primary {\n  background-color: #7957d5 !important;\n}\n\n.has-text-primary-light {\n  color: #f2effb !important;\n}\n\na.has-text-primary-light:hover, a.has-text-primary-light:focus {\n  color: #d1c6f1 !important;\n}\n\n.has-background-primary-light {\n  background-color: #f2effb !important;\n}\n\n.has-text-primary-dark {\n  color: #552fbc !important;\n}\n\na.has-text-primary-dark:hover, a.has-text-primary-dark:focus {\n  color: #704bd2 !important;\n}\n\n.has-background-primary-dark {\n  background-color: #552fbc !important;\n}\n\n.has-text-link {\n  color: #7957d5 !important;\n}\n\na.has-text-link:hover, a.has-text-link:focus {\n  color: #5a32c7 !important;\n}\n\n.has-background-link {\n  background-color: #7957d5 !important;\n}\n\n.has-text-link-light {\n  color: #f2effb !important;\n}\n\na.has-text-link-light:hover, a.has-text-link-light:focus {\n  color: #d1c6f1 !important;\n}\n\n.has-background-link-light {\n  background-color: #f2effb !important;\n}\n\n.has-text-link-dark {\n  color: #552fbc !important;\n}\n\na.has-text-link-dark:hover, a.has-text-link-dark:focus {\n  color: #704bd2 !important;\n}\n\n.has-background-link-dark {\n  background-color: #552fbc !important;\n}\n\n.has-text-info {\n  color: #167df0 !important;\n}\n\na.has-text-info:hover, a.has-text-info:focus {\n  color: #0d64c6 !important;\n}\n\n.has-background-info {\n  background-color: #167df0 !important;\n}\n\n.has-text-info-light {\n  color: #ecf4fe !important;\n}\n\na.has-text-info-light:hover, a.has-text-info-light:focus {\n  color: #bcdafb !important;\n}\n\n.has-background-info-light {\n  background-color: #ecf4fe !important;\n}\n\n.has-text-info-dark {\n  color: #0d68ce !important;\n}\n\na.has-text-info-dark:hover, a.has-text-info-dark:focus {\n  color: #1e81f1 !important;\n}\n\n.has-background-info-dark {\n  background-color: #0d68ce !important;\n}\n\n.has-text-success {\n  color: #48c78e !important;\n}\n\na.has-text-success:hover, a.has-text-success:focus {\n  color: #34a873 !important;\n}\n\n.has-background-success {\n  background-color: #48c78e !important;\n}\n\n.has-text-success-light {\n  color: #effaf5 !important;\n}\n\na.has-text-success-light:hover, a.has-text-success-light:focus {\n  color: #c8eedd !important;\n}\n\n.has-background-success-light {\n  background-color: #effaf5 !important;\n}\n\n.has-text-success-dark {\n  color: #257953 !important;\n}\n\na.has-text-success-dark:hover, a.has-text-success-dark:focus {\n  color: #31a06e !important;\n}\n\n.has-background-success-dark {\n  background-color: #257953 !important;\n}\n\n.has-text-warning {\n  color: #ffe08a !important;\n}\n\na.has-text-warning:hover, a.has-text-warning:focus {\n  color: #ffd257 !important;\n}\n\n.has-background-warning {\n  background-color: #ffe08a !important;\n}\n\n.has-text-warning-light {\n  color: #fffaeb !important;\n}\n\na.has-text-warning-light:hover, a.has-text-warning-light:focus {\n  color: #ffecb8 !important;\n}\n\n.has-background-warning-light {\n  background-color: #fffaeb !important;\n}\n\n.has-text-warning-dark {\n  color: #946c00 !important;\n}\n\na.has-text-warning-dark:hover, a.has-text-warning-dark:focus {\n  color: #c79200 !important;\n}\n\n.has-background-warning-dark {\n  background-color: #946c00 !important;\n}\n\n.has-text-danger {\n  color: #f14668 !important;\n}\n\na.has-text-danger:hover, a.has-text-danger:focus {\n  color: #ee1742 !important;\n}\n\n.has-background-danger {\n  background-color: #f14668 !important;\n}\n\n.has-text-danger-light {\n  color: #feecf0 !important;\n}\n\na.has-text-danger-light:hover, a.has-text-danger-light:focus {\n  color: #fabdc9 !important;\n}\n\n.has-background-danger-light {\n  background-color: #feecf0 !important;\n}\n\n.has-text-danger-dark {\n  color: #cc0f35 !important;\n}\n\na.has-text-danger-dark:hover, a.has-text-danger-dark:focus {\n  color: #ee2049 !important;\n}\n\n.has-background-danger-dark {\n  background-color: #cc0f35 !important;\n}\n\n.has-text-black-bis {\n  color: #121212 !important;\n}\n\n.has-background-black-bis {\n  background-color: #121212 !important;\n}\n\n.has-text-black-ter {\n  color: #242424 !important;\n}\n\n.has-background-black-ter {\n  background-color: #242424 !important;\n}\n\n.has-text-grey-darker {\n  color: #363636 !important;\n}\n\n.has-background-grey-darker {\n  background-color: #363636 !important;\n}\n\n.has-text-grey-dark {\n  color: #4a4a4a !important;\n}\n\n.has-background-grey-dark {\n  background-color: #4a4a4a !important;\n}\n\n.has-text-grey {\n  color: #7a7a7a !important;\n}\n\n.has-background-grey {\n  background-color: #7a7a7a !important;\n}\n\n.has-text-grey-light {\n  color: #b5b5b5 !important;\n}\n\n.has-background-grey-light {\n  background-color: #b5b5b5 !important;\n}\n\n.has-text-grey-lighter {\n  color: #dbdbdb !important;\n}\n\n.has-background-grey-lighter {\n  background-color: #dbdbdb !important;\n}\n\n.has-text-white-ter {\n  color: whitesmoke !important;\n}\n\n.has-background-white-ter {\n  background-color: whitesmoke !important;\n}\n\n.has-text-white-bis {\n  color: #fafafa !important;\n}\n\n.has-background-white-bis {\n  background-color: #fafafa !important;\n}\n\n.is-flex-direction-row {\n  flex-direction: row !important;\n}\n\n.is-flex-direction-row-reverse {\n  flex-direction: row-reverse !important;\n}\n\n.is-flex-direction-column {\n  flex-direction: column !important;\n}\n\n.is-flex-direction-column-reverse {\n  flex-direction: column-reverse !important;\n}\n\n.is-flex-wrap-nowrap {\n  flex-wrap: nowrap !important;\n}\n\n.is-flex-wrap-wrap {\n  flex-wrap: wrap !important;\n}\n\n.is-flex-wrap-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n\n.is-justify-content-flex-start {\n  justify-content: flex-start !important;\n}\n\n.is-justify-content-flex-end {\n  justify-content: flex-end !important;\n}\n\n.is-justify-content-center {\n  justify-content: center !important;\n}\n\n.is-justify-content-space-between {\n  justify-content: space-between !important;\n}\n\n.is-justify-content-space-around {\n  justify-content: space-around !important;\n}\n\n.is-justify-content-space-evenly {\n  justify-content: space-evenly !important;\n}\n\n.is-justify-content-start {\n  justify-content: start !important;\n}\n\n.is-justify-content-end {\n  justify-content: end !important;\n}\n\n.is-justify-content-left {\n  justify-content: left !important;\n}\n\n.is-justify-content-right {\n  justify-content: right !important;\n}\n\n.is-align-content-flex-start {\n  align-content: flex-start !important;\n}\n\n.is-align-content-flex-end {\n  align-content: flex-end !important;\n}\n\n.is-align-content-center {\n  align-content: center !important;\n}\n\n.is-align-content-space-between {\n  align-content: space-between !important;\n}\n\n.is-align-content-space-around {\n  align-content: space-around !important;\n}\n\n.is-align-content-space-evenly {\n  align-content: space-evenly !important;\n}\n\n.is-align-content-stretch {\n  align-content: stretch !important;\n}\n\n.is-align-content-start {\n  align-content: start !important;\n}\n\n.is-align-content-end {\n  align-content: end !important;\n}\n\n.is-align-content-baseline {\n  align-content: baseline !important;\n}\n\n.is-align-items-stretch {\n  align-items: stretch !important;\n}\n\n.is-align-items-flex-start {\n  align-items: flex-start !important;\n}\n\n.is-align-items-flex-end {\n  align-items: flex-end !important;\n}\n\n.is-align-items-center {\n  align-items: center !important;\n}\n\n.is-align-items-baseline {\n  align-items: baseline !important;\n}\n\n.is-align-items-start {\n  align-items: start !important;\n}\n\n.is-align-items-end {\n  align-items: end !important;\n}\n\n.is-align-items-self-start {\n  align-items: self-start !important;\n}\n\n.is-align-items-self-end {\n  align-items: self-end !important;\n}\n\n.is-align-self-auto {\n  align-self: auto !important;\n}\n\n.is-align-self-flex-start {\n  align-self: flex-start !important;\n}\n\n.is-align-self-flex-end {\n  align-self: flex-end !important;\n}\n\n.is-align-self-center {\n  align-self: center !important;\n}\n\n.is-align-self-baseline {\n  align-self: baseline !important;\n}\n\n.is-align-self-stretch {\n  align-self: stretch !important;\n}\n\n.is-flex-grow-0 {\n  flex-grow: 0 !important;\n}\n\n.is-flex-grow-1 {\n  flex-grow: 1 !important;\n}\n\n.is-flex-grow-2 {\n  flex-grow: 2 !important;\n}\n\n.is-flex-grow-3 {\n  flex-grow: 3 !important;\n}\n\n.is-flex-grow-4 {\n  flex-grow: 4 !important;\n}\n\n.is-flex-grow-5 {\n  flex-grow: 5 !important;\n}\n\n.is-flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n\n.is-flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n\n.is-flex-shrink-2 {\n  flex-shrink: 2 !important;\n}\n\n.is-flex-shrink-3 {\n  flex-shrink: 3 !important;\n}\n\n.is-flex-shrink-4 {\n  flex-shrink: 4 !important;\n}\n\n.is-flex-shrink-5 {\n  flex-shrink: 5 !important;\n}\n\n.is-clearfix::after {\n  clear: both;\n  content: \" \";\n  display: table;\n}\n\n.is-pulled-left {\n  float: left !important;\n}\n\n.is-pulled-right {\n  float: right !important;\n}\n\n.is-radiusless {\n  border-radius: 0 !important;\n}\n\n.is-shadowless {\n  box-shadow: none !important;\n}\n\n.is-clickable {\n  cursor: pointer !important;\n  pointer-events: all !important;\n}\n\n.is-clipped {\n  overflow: hidden !important;\n}\n\n.is-relative {\n  position: relative !important;\n}\n\n.is-marginless {\n  margin: 0 !important;\n}\n\n.is-paddingless {\n  padding: 0 !important;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.mt-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0 {\n  margin-left: 0 !important;\n}\n\n.mx-0 {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.mt-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mr-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.ml-1 {\n  margin-left: 0.25rem !important;\n}\n\n.mx-1 {\n  margin-left: 0.25rem !important;\n  margin-right: 0.25rem !important;\n}\n\n.my-1 {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.mt-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mr-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-2 {\n  margin-left: 0.5rem !important;\n}\n\n.mx-2 {\n  margin-left: 0.5rem !important;\n  margin-right: 0.5rem !important;\n}\n\n.my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 0.75rem !important;\n}\n\n.mt-3 {\n  margin-top: 0.75rem !important;\n}\n\n.mr-3 {\n  margin-right: 0.75rem !important;\n}\n\n.mb-3 {\n  margin-bottom: 0.75rem !important;\n}\n\n.ml-3 {\n  margin-left: 0.75rem !important;\n}\n\n.mx-3 {\n  margin-left: 0.75rem !important;\n  margin-right: 0.75rem !important;\n}\n\n.my-3 {\n  margin-top: 0.75rem !important;\n  margin-bottom: 0.75rem !important;\n}\n\n.m-4 {\n  margin: 1rem !important;\n}\n\n.mt-4 {\n  margin-top: 1rem !important;\n}\n\n.mr-4 {\n  margin-right: 1rem !important;\n}\n\n.mb-4 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-4 {\n  margin-left: 1rem !important;\n}\n\n.mx-4 {\n  margin-left: 1rem !important;\n  margin-right: 1rem !important;\n}\n\n.my-4 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n.m-5 {\n  margin: 1.5rem !important;\n}\n\n.mt-5 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-5 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-5 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-5 {\n  margin-left: 1.5rem !important;\n}\n\n.mx-5 {\n  margin-left: 1.5rem !important;\n  margin-right: 1.5rem !important;\n}\n\n.my-5 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n\n.m-6 {\n  margin: 3rem !important;\n}\n\n.mt-6 {\n  margin-top: 3rem !important;\n}\n\n.mr-6 {\n  margin-right: 3rem !important;\n}\n\n.mb-6 {\n  margin-bottom: 3rem !important;\n}\n\n.ml-6 {\n  margin-left: 3rem !important;\n}\n\n.mx-6 {\n  margin-left: 3rem !important;\n  margin-right: 3rem !important;\n}\n\n.my-6 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important;\n}\n\n.m-auto {\n  margin: auto !important;\n}\n\n.mt-auto {\n  margin-top: auto !important;\n}\n\n.mr-auto {\n  margin-right: auto !important;\n}\n\n.mb-auto {\n  margin-bottom: auto !important;\n}\n\n.ml-auto {\n  margin-left: auto !important;\n}\n\n.mx-auto {\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n\n.my-auto {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.pt-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0 {\n  padding-left: 0 !important;\n}\n\n.px-0 {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.pt-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1 {\n  padding-left: 0.25rem !important;\n}\n\n.px-1 {\n  padding-left: 0.25rem !important;\n  padding-right: 0.25rem !important;\n}\n\n.py-1 {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.pt-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2 {\n  padding-left: 0.5rem !important;\n}\n\n.px-2 {\n  padding-left: 0.5rem !important;\n  padding-right: 0.5rem !important;\n}\n\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 0.75rem !important;\n}\n\n.pt-3 {\n  padding-top: 0.75rem !important;\n}\n\n.pr-3 {\n  padding-right: 0.75rem !important;\n}\n\n.pb-3 {\n  padding-bottom: 0.75rem !important;\n}\n\n.pl-3 {\n  padding-left: 0.75rem !important;\n}\n\n.px-3 {\n  padding-left: 0.75rem !important;\n  padding-right: 0.75rem !important;\n}\n\n.py-3 {\n  padding-top: 0.75rem !important;\n  padding-bottom: 0.75rem !important;\n}\n\n.p-4 {\n  padding: 1rem !important;\n}\n\n.pt-4 {\n  padding-top: 1rem !important;\n}\n\n.pr-4 {\n  padding-right: 1rem !important;\n}\n\n.pb-4 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-4 {\n  padding-left: 1rem !important;\n}\n\n.px-4 {\n  padding-left: 1rem !important;\n  padding-right: 1rem !important;\n}\n\n.py-4 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n.p-5 {\n  padding: 1.5rem !important;\n}\n\n.pt-5 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-5 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-5 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-5 {\n  padding-left: 1.5rem !important;\n}\n\n.px-5 {\n  padding-left: 1.5rem !important;\n  padding-right: 1.5rem !important;\n}\n\n.py-5 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n\n.p-6 {\n  padding: 3rem !important;\n}\n\n.pt-6 {\n  padding-top: 3rem !important;\n}\n\n.pr-6 {\n  padding-right: 3rem !important;\n}\n\n.pb-6 {\n  padding-bottom: 3rem !important;\n}\n\n.pl-6 {\n  padding-left: 3rem !important;\n}\n\n.px-6 {\n  padding-left: 3rem !important;\n  padding-right: 3rem !important;\n}\n\n.py-6 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n\n.p-auto {\n  padding: auto !important;\n}\n\n.pt-auto {\n  padding-top: auto !important;\n}\n\n.pr-auto {\n  padding-right: auto !important;\n}\n\n.pb-auto {\n  padding-bottom: auto !important;\n}\n\n.pl-auto {\n  padding-left: auto !important;\n}\n\n.px-auto {\n  padding-left: auto !important;\n  padding-right: auto !important;\n}\n\n.py-auto {\n  padding-top: auto !important;\n  padding-bottom: auto !important;\n}\n\n.is-size-1 {\n  font-size: 3rem !important;\n}\n\n.is-size-2 {\n  font-size: 2.5rem !important;\n}\n\n.is-size-3 {\n  font-size: 2rem !important;\n}\n\n.is-size-4 {\n  font-size: 1.5rem !important;\n}\n\n.is-size-5 {\n  font-size: 1.25rem !important;\n}\n\n.is-size-6 {\n  font-size: 1rem !important;\n}\n\n.is-size-7 {\n  font-size: 0.75rem !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-size-1-mobile {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-mobile {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-mobile {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-mobile {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-mobile {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-mobile {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-mobile {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-size-1-tablet {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-tablet {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-tablet {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-tablet {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-tablet {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-tablet {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-tablet {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-size-1-touch {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-touch {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-touch {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-touch {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-touch {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-touch {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-touch {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-size-1-desktop {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-desktop {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-desktop {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-desktop {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-desktop {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-desktop {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-desktop {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-size-1-widescreen {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-widescreen {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-widescreen {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-widescreen {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-widescreen {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-widescreen {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-widescreen {\n    font-size: 0.75rem !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-size-1-fullhd {\n    font-size: 3rem !important;\n  }\n\n  .is-size-2-fullhd {\n    font-size: 2.5rem !important;\n  }\n\n  .is-size-3-fullhd {\n    font-size: 2rem !important;\n  }\n\n  .is-size-4-fullhd {\n    font-size: 1.5rem !important;\n  }\n\n  .is-size-5-fullhd {\n    font-size: 1.25rem !important;\n  }\n\n  .is-size-6-fullhd {\n    font-size: 1rem !important;\n  }\n\n  .is-size-7-fullhd {\n    font-size: 0.75rem !important;\n  }\n}\n.has-text-centered {\n  text-align: center !important;\n}\n\n.has-text-justified {\n  text-align: justify !important;\n}\n\n.has-text-left {\n  text-align: left !important;\n}\n\n.has-text-right {\n  text-align: right !important;\n}\n\n@media screen and (max-width: 768px) {\n  .has-text-centered-mobile {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .has-text-centered-tablet {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-centered-tablet-only {\n    text-align: center !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .has-text-centered-touch {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .has-text-centered-desktop {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-centered-desktop-only {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .has-text-centered-widescreen {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-centered-widescreen-only {\n    text-align: center !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .has-text-centered-fullhd {\n    text-align: center !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .has-text-justified-mobile {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .has-text-justified-tablet {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-justified-tablet-only {\n    text-align: justify !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .has-text-justified-touch {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .has-text-justified-desktop {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-justified-desktop-only {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .has-text-justified-widescreen {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-justified-widescreen-only {\n    text-align: justify !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .has-text-justified-fullhd {\n    text-align: justify !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .has-text-left-mobile {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .has-text-left-tablet {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-left-tablet-only {\n    text-align: left !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .has-text-left-touch {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .has-text-left-desktop {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-left-desktop-only {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .has-text-left-widescreen {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-left-widescreen-only {\n    text-align: left !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .has-text-left-fullhd {\n    text-align: left !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .has-text-right-mobile {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .has-text-right-tablet {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .has-text-right-tablet-only {\n    text-align: right !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .has-text-right-touch {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .has-text-right-desktop {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .has-text-right-desktop-only {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .has-text-right-widescreen {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .has-text-right-widescreen-only {\n    text-align: right !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .has-text-right-fullhd {\n    text-align: right !important;\n  }\n}\n.is-capitalized {\n  text-transform: capitalize !important;\n}\n\n.is-lowercase {\n  text-transform: lowercase !important;\n}\n\n.is-uppercase {\n  text-transform: uppercase !important;\n}\n\n.is-italic {\n  font-style: italic !important;\n}\n\n.is-underlined {\n  text-decoration: underline !important;\n}\n\n.has-text-weight-light {\n  font-weight: 300 !important;\n}\n\n.has-text-weight-normal {\n  font-weight: 400 !important;\n}\n\n.has-text-weight-medium {\n  font-weight: 500 !important;\n}\n\n.has-text-weight-semibold {\n  font-weight: 600 !important;\n}\n\n.has-text-weight-bold {\n  font-weight: 700 !important;\n}\n\n.is-family-primary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-secondary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-sans-serif {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important;\n}\n\n.is-family-monospace {\n  font-family: monospace !important;\n}\n\n.is-family-code {\n  font-family: monospace !important;\n}\n\n.is-block {\n  display: block !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-block-mobile {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-block-tablet {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-block-tablet-only {\n    display: block !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-block-touch {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-block-desktop {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-block-desktop-only {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-block-widescreen {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-block-widescreen-only {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-block-fullhd {\n    display: block !important;\n  }\n}\n.is-flex {\n  display: flex !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-flex-mobile {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-flex-tablet {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-flex-tablet-only {\n    display: flex !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-flex-touch {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-flex-desktop {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-flex-desktop-only {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-flex-widescreen {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-flex-widescreen-only {\n    display: flex !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-flex-fullhd {\n    display: flex !important;\n  }\n}\n.is-inline {\n  display: inline !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-mobile {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-inline-tablet {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-tablet-only {\n    display: inline !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-inline-touch {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-inline-desktop {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-desktop-only {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-inline-widescreen {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-widescreen-only {\n    display: inline !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-inline-fullhd {\n    display: inline !important;\n  }\n}\n.is-inline-block {\n  display: inline-block !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-block-mobile {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-inline-block-tablet {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-block-tablet-only {\n    display: inline-block !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-inline-block-touch {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-inline-block-desktop {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-block-desktop-only {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-inline-block-widescreen {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-block-widescreen-only {\n    display: inline-block !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-inline-block-fullhd {\n    display: inline-block !important;\n  }\n}\n.is-inline-flex {\n  display: inline-flex !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-inline-flex-mobile {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-inline-flex-tablet {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-inline-flex-tablet-only {\n    display: inline-flex !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-inline-flex-touch {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-inline-flex-desktop {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-inline-flex-desktop-only {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-inline-flex-widescreen {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-inline-flex-widescreen-only {\n    display: inline-flex !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-inline-flex-fullhd {\n    display: inline-flex !important;\n  }\n}\n.is-hidden {\n  display: none !important;\n}\n\n.is-sr-only {\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n  height: 0.01em !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  white-space: nowrap !important;\n  width: 0.01em !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-hidden-mobile {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-hidden-tablet {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-hidden-tablet-only {\n    display: none !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-hidden-touch {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-hidden-desktop {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-hidden-desktop-only {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-hidden-widescreen {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-hidden-widescreen-only {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-hidden-fullhd {\n    display: none !important;\n  }\n}\n.is-invisible {\n  visibility: hidden !important;\n}\n\n@media screen and (max-width: 768px) {\n  .is-invisible-mobile {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .is-invisible-tablet {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n  .is-invisible-tablet-only {\n    visibility: hidden !important;\n  }\n}\n@media screen and (max-width: 1023px) {\n  .is-invisible-touch {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .is-invisible-desktop {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1024px) and (max-width: 1215px) {\n  .is-invisible-desktop-only {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1216px) {\n  .is-invisible-widescreen {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1216px) and (max-width: 1407px) {\n  .is-invisible-widescreen-only {\n    visibility: hidden !important;\n  }\n}\n@media screen and (min-width: 1408px) {\n  .is-invisible-fullhd {\n    visibility: hidden !important;\n  }\n}\n/* Bulma Layout */\n.hero {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.hero .navbar {\n  background: none;\n}\n.hero .tabs ul {\n  border-bottom: none;\n}\n.hero.is-white {\n  background-color: white;\n  color: #0a0a0a;\n}\n.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-white strong {\n  color: inherit;\n}\n.hero.is-white .title {\n  color: #0a0a0a;\n}\n.hero.is-white .subtitle {\n  color: rgba(10, 10, 10, 0.9);\n}\n.hero.is-white .subtitle a:not(.button),\n.hero.is-white .subtitle strong {\n  color: #0a0a0a;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-white .navbar-menu {\n    background-color: white;\n  }\n}\n.hero.is-white .navbar-item,\n.hero.is-white .navbar-link {\n  color: rgba(10, 10, 10, 0.7);\n}\n.hero.is-white a.navbar-item:hover, .hero.is-white a.navbar-item.is-active,\n.hero.is-white .navbar-link:hover,\n.hero.is-white .navbar-link.is-active {\n  background-color: #f2f2f2;\n  color: #0a0a0a;\n}\n.hero.is-white .tabs a {\n  color: #0a0a0a;\n  opacity: 0.9;\n}\n.hero.is-white .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-white .tabs li.is-active a {\n  color: white !important;\n  opacity: 1;\n}\n.hero.is-white .tabs.is-boxed a, .hero.is-white .tabs.is-toggle a {\n  color: #0a0a0a;\n}\n.hero.is-white .tabs.is-boxed a:hover, .hero.is-white .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-white .tabs.is-boxed li.is-active a, .hero.is-white .tabs.is-boxed li.is-active a:hover, .hero.is-white .tabs.is-toggle li.is-active a, .hero.is-white .tabs.is-toggle li.is-active a:hover {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n  color: white;\n}\n.hero.is-white.is-bold {\n  background-image: linear-gradient(141deg, #e8e3e4 0%, white 71%, white 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-white.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #e8e3e4 0%, white 71%, white 100%);\n  }\n}\n.hero.is-black {\n  background-color: #0a0a0a;\n  color: white;\n}\n.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-black strong {\n  color: inherit;\n}\n.hero.is-black .title {\n  color: white;\n}\n.hero.is-black .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-black .subtitle a:not(.button),\n.hero.is-black .subtitle strong {\n  color: white;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-black .navbar-menu {\n    background-color: #0a0a0a;\n  }\n}\n.hero.is-black .navbar-item,\n.hero.is-black .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-black a.navbar-item:hover, .hero.is-black a.navbar-item.is-active,\n.hero.is-black .navbar-link:hover,\n.hero.is-black .navbar-link.is-active {\n  background-color: black;\n  color: white;\n}\n.hero.is-black .tabs a {\n  color: white;\n  opacity: 0.9;\n}\n.hero.is-black .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-black .tabs li.is-active a {\n  color: #0a0a0a !important;\n  opacity: 1;\n}\n.hero.is-black .tabs.is-boxed a, .hero.is-black .tabs.is-toggle a {\n  color: white;\n}\n.hero.is-black .tabs.is-boxed a:hover, .hero.is-black .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-black .tabs.is-boxed li.is-active a, .hero.is-black .tabs.is-boxed li.is-active a:hover, .hero.is-black .tabs.is-toggle li.is-active a, .hero.is-black .tabs.is-toggle li.is-active a:hover {\n  background-color: white;\n  border-color: white;\n  color: #0a0a0a;\n}\n.hero.is-black.is-bold {\n  background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-black.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n  }\n}\n.hero.is-light {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-light strong {\n  color: inherit;\n}\n.hero.is-light .title {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-light .subtitle {\n  color: rgba(0, 0, 0, 0.9);\n}\n.hero.is-light .subtitle a:not(.button),\n.hero.is-light .subtitle strong {\n  color: rgba(0, 0, 0, 0.7);\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-light .navbar-menu {\n    background-color: whitesmoke;\n  }\n}\n.hero.is-light .navbar-item,\n.hero.is-light .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-light a.navbar-item:hover, .hero.is-light a.navbar-item.is-active,\n.hero.is-light .navbar-link:hover,\n.hero.is-light .navbar-link.is-active {\n  background-color: #e8e8e8;\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-light .tabs a {\n  color: rgba(0, 0, 0, 0.7);\n  opacity: 0.9;\n}\n.hero.is-light .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-light .tabs li.is-active a {\n  color: whitesmoke !important;\n  opacity: 1;\n}\n.hero.is-light .tabs.is-boxed a, .hero.is-light .tabs.is-toggle a {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: rgba(0, 0, 0, 0.7);\n  color: whitesmoke;\n}\n.hero.is-light.is-bold {\n  background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-light.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n  }\n}\n.hero.is-dark {\n  background-color: #363636;\n  color: #fff;\n}\n.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-dark strong {\n  color: inherit;\n}\n.hero.is-dark .title {\n  color: #fff;\n}\n.hero.is-dark .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-dark .subtitle a:not(.button),\n.hero.is-dark .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-dark .navbar-menu {\n    background-color: #363636;\n  }\n}\n.hero.is-dark .navbar-item,\n.hero.is-dark .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-dark a.navbar-item:hover, .hero.is-dark a.navbar-item.is-active,\n.hero.is-dark .navbar-link:hover,\n.hero.is-dark .navbar-link.is-active {\n  background-color: #292929;\n  color: #fff;\n}\n.hero.is-dark .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-dark .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-dark .tabs li.is-active a {\n  color: #363636 !important;\n  opacity: 1;\n}\n.hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #363636;\n}\n.hero.is-dark.is-bold {\n  background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-dark.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n  }\n}\n.hero.is-primary {\n  background-color: #7957d5;\n  color: #fff;\n}\n.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-primary strong {\n  color: inherit;\n}\n.hero.is-primary .title {\n  color: #fff;\n}\n.hero.is-primary .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-primary .subtitle a:not(.button),\n.hero.is-primary .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-primary .navbar-menu {\n    background-color: #7957d5;\n  }\n}\n.hero.is-primary .navbar-item,\n.hero.is-primary .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-primary a.navbar-item:hover, .hero.is-primary a.navbar-item.is-active,\n.hero.is-primary .navbar-link:hover,\n.hero.is-primary .navbar-link.is-active {\n  background-color: #6943d0;\n  color: #fff;\n}\n.hero.is-primary .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-primary .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-primary .tabs li.is-active a {\n  color: #7957d5 !important;\n  opacity: 1;\n}\n.hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #7957d5;\n}\n.hero.is-primary.is-bold {\n  background-image: linear-gradient(141deg, #3725d4 0%, #7957d5 71%, #9b67df 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-primary.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #3725d4 0%, #7957d5 71%, #9b67df 100%);\n  }\n}\n.hero.is-link {\n  background-color: #7957d5;\n  color: #fff;\n}\n.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-link strong {\n  color: inherit;\n}\n.hero.is-link .title {\n  color: #fff;\n}\n.hero.is-link .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-link .subtitle a:not(.button),\n.hero.is-link .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-link .navbar-menu {\n    background-color: #7957d5;\n  }\n}\n.hero.is-link .navbar-item,\n.hero.is-link .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-link a.navbar-item:hover, .hero.is-link a.navbar-item.is-active,\n.hero.is-link .navbar-link:hover,\n.hero.is-link .navbar-link.is-active {\n  background-color: #6943d0;\n  color: #fff;\n}\n.hero.is-link .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-link .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-link .tabs li.is-active a {\n  color: #7957d5 !important;\n  opacity: 1;\n}\n.hero.is-link .tabs.is-boxed a, .hero.is-link .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-link .tabs.is-boxed a:hover, .hero.is-link .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-link .tabs.is-boxed li.is-active a, .hero.is-link .tabs.is-boxed li.is-active a:hover, .hero.is-link .tabs.is-toggle li.is-active a, .hero.is-link .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #7957d5;\n}\n.hero.is-link.is-bold {\n  background-image: linear-gradient(141deg, #3725d4 0%, #7957d5 71%, #9b67df 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-link.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #3725d4 0%, #7957d5 71%, #9b67df 100%);\n  }\n}\n.hero.is-info {\n  background-color: #167df0;\n  color: #fff;\n}\n.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-info strong {\n  color: inherit;\n}\n.hero.is-info .title {\n  color: #fff;\n}\n.hero.is-info .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-info .subtitle a:not(.button),\n.hero.is-info .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-info .navbar-menu {\n    background-color: #167df0;\n  }\n}\n.hero.is-info .navbar-item,\n.hero.is-info .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-info a.navbar-item:hover, .hero.is-info a.navbar-item.is-active,\n.hero.is-info .navbar-link:hover,\n.hero.is-info .navbar-link.is-active {\n  background-color: #0e71de;\n  color: #fff;\n}\n.hero.is-info .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-info .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-info .tabs li.is-active a {\n  color: #167df0 !important;\n  opacity: 1;\n}\n.hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #167df0;\n}\n.hero.is-info.is-bold {\n  background-image: linear-gradient(141deg, #0286d1 0%, #167df0 71%, #2868f7 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-info.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #0286d1 0%, #167df0 71%, #2868f7 100%);\n  }\n}\n.hero.is-success {\n  background-color: #48c78e;\n  color: #fff;\n}\n.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-success strong {\n  color: inherit;\n}\n.hero.is-success .title {\n  color: #fff;\n}\n.hero.is-success .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-success .subtitle a:not(.button),\n.hero.is-success .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-success .navbar-menu {\n    background-color: #48c78e;\n  }\n}\n.hero.is-success .navbar-item,\n.hero.is-success .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-success a.navbar-item:hover, .hero.is-success a.navbar-item.is-active,\n.hero.is-success .navbar-link:hover,\n.hero.is-success .navbar-link.is-active {\n  background-color: #3abb81;\n  color: #fff;\n}\n.hero.is-success .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-success .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-success .tabs li.is-active a {\n  color: #48c78e !important;\n  opacity: 1;\n}\n.hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #48c78e;\n}\n.hero.is-success.is-bold {\n  background-image: linear-gradient(141deg, #29b35e 0%, #48c78e 71%, #56d2af 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-success.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #29b35e 0%, #48c78e 71%, #56d2af 100%);\n  }\n}\n.hero.is-warning {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-warning strong {\n  color: inherit;\n}\n.hero.is-warning .title {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .subtitle {\n  color: rgba(0, 0, 0, 0.9);\n}\n.hero.is-warning .subtitle a:not(.button),\n.hero.is-warning .subtitle strong {\n  color: rgba(0, 0, 0, 0.7);\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-warning .navbar-menu {\n    background-color: #ffe08a;\n  }\n}\n.hero.is-warning .navbar-item,\n.hero.is-warning .navbar-link {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning a.navbar-item:hover, .hero.is-warning a.navbar-item.is-active,\n.hero.is-warning .navbar-link:hover,\n.hero.is-warning .navbar-link.is-active {\n  background-color: #ffd970;\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .tabs a {\n  color: rgba(0, 0, 0, 0.7);\n  opacity: 0.9;\n}\n.hero.is-warning .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-warning .tabs li.is-active a {\n  color: #ffe08a !important;\n  opacity: 1;\n}\n.hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {\n  color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n  border-color: rgba(0, 0, 0, 0.7);\n  color: #ffe08a;\n}\n.hero.is-warning.is-bold {\n  background-image: linear-gradient(141deg, #ffb657 0%, #ffe08a 71%, #fff6a3 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-warning.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #ffb657 0%, #ffe08a 71%, #fff6a3 100%);\n  }\n}\n.hero.is-danger {\n  background-color: #f14668;\n  color: #fff;\n}\n.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),\n.hero.is-danger strong {\n  color: inherit;\n}\n.hero.is-danger .title {\n  color: #fff;\n}\n.hero.is-danger .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-danger .subtitle a:not(.button),\n.hero.is-danger .subtitle strong {\n  color: #fff;\n}\n@media screen and (max-width: 1023px) {\n  .hero.is-danger .navbar-menu {\n    background-color: #f14668;\n  }\n}\n.hero.is-danger .navbar-item,\n.hero.is-danger .navbar-link {\n  color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-danger a.navbar-item:hover, .hero.is-danger a.navbar-item.is-active,\n.hero.is-danger .navbar-link:hover,\n.hero.is-danger .navbar-link.is-active {\n  background-color: #ef2e55;\n  color: #fff;\n}\n.hero.is-danger .tabs a {\n  color: #fff;\n  opacity: 0.9;\n}\n.hero.is-danger .tabs a:hover {\n  opacity: 1;\n}\n.hero.is-danger .tabs li.is-active a {\n  color: #f14668 !important;\n  opacity: 1;\n}\n.hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {\n  color: #fff;\n}\n.hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {\n  background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {\n  background-color: #fff;\n  border-color: #fff;\n  color: #f14668;\n}\n.hero.is-danger.is-bold {\n  background-image: linear-gradient(141deg, #fa0a62 0%, #f14668 71%, #f7595f 100%);\n}\n@media screen and (max-width: 768px) {\n  .hero.is-danger.is-bold .navbar-menu {\n    background-image: linear-gradient(141deg, #fa0a62 0%, #f14668 71%, #f7595f 100%);\n  }\n}\n.hero.is-small .hero-body {\n  padding: 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .hero.is-medium .hero-body {\n    padding: 9rem 4.5rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .hero.is-large .hero-body {\n    padding: 18rem 6rem;\n  }\n}\n.hero.is-halfheight .hero-body, .hero.is-fullheight .hero-body, .hero.is-fullheight-with-navbar .hero-body {\n  align-items: center;\n  display: flex;\n}\n.hero.is-halfheight .hero-body > .container, .hero.is-fullheight .hero-body > .container, .hero.is-fullheight-with-navbar .hero-body > .container {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.hero.is-halfheight {\n  min-height: 50vh;\n}\n.hero.is-fullheight {\n  min-height: 100vh;\n}\n\n.hero-video {\n  overflow: hidden;\n}\n.hero-video video {\n  left: 50%;\n  min-height: 100%;\n  min-width: 100%;\n  position: absolute;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\n.hero-video.is-transparent {\n  opacity: 0.3;\n}\n@media screen and (max-width: 768px) {\n  .hero-video {\n    display: none;\n  }\n}\n\n.hero-buttons {\n  margin-top: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n  .hero-buttons .button {\n    display: flex;\n  }\n  .hero-buttons .button:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .hero-buttons {\n    display: flex;\n    justify-content: center;\n  }\n  .hero-buttons .button:not(:last-child) {\n    margin-right: 1.5rem;\n  }\n}\n\n.hero-head,\n.hero-foot {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.hero-body {\n  flex-grow: 1;\n  flex-shrink: 0;\n  padding: 3rem 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n  .hero-body {\n    padding: 3rem 3rem;\n  }\n}\n\n.section {\n  padding: 3rem 1.5rem;\n}\n@media screen and (min-width: 1024px) {\n  .section {\n    padding: 3rem 3rem;\n  }\n  .section.is-medium {\n    padding: 9rem 4.5rem;\n  }\n  .section.is-large {\n    padding: 18rem 6rem;\n  }\n}\n\n.footer {\n  background-color: #fafafa;\n  padding: 3rem 1.5rem 6rem;\n}\n\n.is-noscroll {\n  position: fixed;\n  overflow-y: hidden;\n  width: 100%;\n  bottom: 0;\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n.fadeOutDown {\n  animation-name: fadeOutDown;\n}\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n.fadeOutUp {\n  animation-name: fadeOutUp;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.fadeInDown {\n  animation-name: fadeInDown;\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.fadeInUp {\n  animation-name: fadeInUp;\n}\n\n/**\n * Vue Transitions\n */\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 150ms ease-out;\n}\n\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n\n.zoom-in-enter-active,\n.zoom-in-leave-active {\n  transition: opacity 150ms ease-out;\n}\n.zoom-in-enter-active .animation-content,\n.zoom-in-enter-active .animation-content,\n.zoom-in-leave-active .animation-content,\n.zoom-in-leave-active .animation-content {\n  transition: transform 150ms ease-out;\n}\n\n.zoom-in-enter,\n.zoom-in-leave-active {\n  opacity: 0;\n}\n.zoom-in-enter .animation-content,\n.zoom-in-enter .animation-content,\n.zoom-in-leave-active .animation-content,\n.zoom-in-leave-active .animation-content {\n  transform: scale(0.95);\n}\n\n.zoom-out-enter-active,\n.zoom-out-leave-active {\n  transition: opacity 150ms ease-out;\n}\n.zoom-out-enter-active .animation-content,\n.zoom-out-enter-active .animation-content,\n.zoom-out-leave-active .animation-content,\n.zoom-out-leave-active .animation-content {\n  transition: transform 150ms ease-out;\n}\n\n.zoom-out-enter,\n.zoom-out-leave-active {\n  opacity: 0;\n}\n.zoom-out-enter .animation-content,\n.zoom-out-enter .animation-content,\n.zoom-out-leave-active .animation-content,\n.zoom-out-leave-active .animation-content {\n  transform: scale(1.05);\n}\n\n.slide-next-enter-active,\n.slide-next-leave-active,\n.slide-prev-enter-active,\n.slide-prev-leave-active {\n  transition: transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n}\n\n.slide-prev-leave-to, .slide-next-enter {\n  transform: translate3d(-100%, 0, 0);\n  position: absolute;\n  width: 100%;\n}\n\n.slide-prev-enter, .slide-next-leave-to {\n  transform: translate3d(100%, 0, 0);\n  position: absolute;\n  width: 100%;\n}\n\n.slide-down-enter-active,\n.slide-down-leave-active,\n.slide-up-enter-active,\n.slide-up-leave-active {\n  transition: transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n}\n\n.slide-up-leave-to, .slide-down-enter {\n  transform: translate3d(0, -100%, 0);\n  position: absolute;\n  height: 100%;\n}\n\n.slide-up-enter, .slide-down-leave-to {\n  transform: translate3d(0, 100%, 0);\n  position: absolute;\n  height: 100%;\n}\n\n.slide-enter-active {\n  transition: 150ms ease-out;\n}\n\n.slide-leave-active {\n  transition: 150ms ease-out;\n  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n}\n\n.slide-enter-to, .slide-leave {\n  max-height: 100px;\n  overflow: hidden;\n}\n\n.slide-enter, .slide-leave-to {\n  overflow: hidden;\n  max-height: 0;\n}\n\n.autocomplete {\n  position: relative;\n}\n.autocomplete .dropdown-menu {\n  display: block;\n  width: 100%;\n}\n.autocomplete .dropdown-menu.is-opened-top {\n  top: auto;\n  bottom: 100%;\n}\n.autocomplete .dropdown-content {\n  overflow: auto;\n  max-height: 200px;\n}\n.autocomplete .dropdown-item, .autocomplete .dropdown .dropdown-menu .has-link a, .dropdown .dropdown-menu .has-link .autocomplete a {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.autocomplete .dropdown-item.is-hovered, .autocomplete .dropdown .dropdown-menu .has-link a.is-hovered, .dropdown .dropdown-menu .has-link .autocomplete a.is-hovered {\n  background: whitesmoke;\n  color: #0a0a0a;\n}\n.autocomplete .dropdown-item.is-disabled, .autocomplete .dropdown .dropdown-menu .has-link a.is-disabled, .dropdown .dropdown-menu .has-link .autocomplete a.is-disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.autocomplete.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.autocomplete.is-medium {\n  font-size: 1.25rem;\n}\n.autocomplete.is-large {\n  font-size: 1.5rem;\n}\n\n.carousel {\n  min-height: 120px;\n  position: relative;\n}\n.carousel.is-overlay {\n  background-color: rgba(10, 10, 10, 0.86);\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  display: flex;\n  max-height: 100vh;\n  position: fixed;\n  z-index: 40;\n}\n.carousel.is-overlay .carousel-item img {\n  cursor: default;\n}\n.carousel.is-overlay .carousel-indicator.has-background {\n  background: transparent;\n}\n.carousel .progress, .carousel .progress-wrapper.is-not-native {\n  border-radius: 2px;\n  height: 0.25rem;\n  margin-bottom: 0;\n}\n.carousel .carousel-items {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n  .carousel .carousel-items:hover .carousel-arrow.is-hovered {\n    opacity: 1;\n  }\n}\n.carousel .carousel-items .carousel-item {\n  flex-shrink: 0;\n  width: 100%;\n}\n.carousel .carousel-pause {\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  right: 0.15rem;\n  z-index: 1;\n}\n.carousel .carousel-indicator {\n  width: 100%;\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.carousel .carousel-indicator.has-background {\n  background: rgba(10, 10, 10, 0.5);\n}\n.carousel .carousel-indicator.has-custom {\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  -webkit-overflow-scrolling: touch;\n  overflow: hidden;\n  overflow-x: auto;\n}\n.carousel .carousel-indicator.has-custom.is-small .indicator-item {\n  flex: 1 0 10%;\n}\n.carousel .carousel-indicator.has-custom.is-medium .indicator-item {\n  flex: 1 0 16.66667%;\n}\n.carousel .carousel-indicator.is-inside {\n  position: absolute;\n}\n.carousel .carousel-indicator.is-inside.is-bottom {\n  bottom: 0;\n}\n.carousel .carousel-indicator.is-inside.is-top {\n  top: 0;\n}\n.carousel .carousel-indicator .indicator-item:not(:last-child) {\n  margin-right: 0.5rem;\n}\n.carousel .carousel-indicator .indicator-item.is-active .indicator-style,\n.carousel .carousel-indicator .indicator-item .indicator-style:hover {\n  background: #7957d5;\n  border: 1px solid white;\n}\n.carousel .carousel-indicator .indicator-item .indicator-style {\n  display: block;\n  border: 1px solid #7957d5;\n  background: white;\n  outline: none;\n  transition: 150ms ease-out;\n}\n.carousel .carousel-indicator .indicator-item .indicator-style.is-boxes {\n  height: 10px;\n  width: 10px;\n}\n.carousel .carousel-indicator .indicator-item .indicator-style.is-dots {\n  border-radius: 9999px;\n  height: 10px;\n  width: 10px;\n}\n.carousel .carousel-indicator .indicator-item .indicator-style.is-lines {\n  height: 5px;\n  width: 25px;\n}\n\n.carousel-list {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n.carousel-list.has-shadow {\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);\n}\n@media screen and (min-width: 769px), print {\n  .carousel-list:hover .carousel-arrow.is-hovered {\n    opacity: 1;\n  }\n}\n.carousel-list .carousel-slides {\n  position: relative;\n  display: flex;\n  width: 100%;\n}\n.carousel-list .carousel-slides:not(.is-dragging) {\n  transition: all 250ms ease-out 0s;\n}\n.carousel-list .carousel-slides.has-grayscale .carousel-slide img {\n  filter: grayscale(100%);\n}\n.carousel-list .carousel-slides.has-grayscale .carousel-slide.is-active img {\n  filter: grayscale(0%);\n}\n.carousel-list .carousel-slides.has-opacity .carousel-slide img {\n  opacity: 0.25;\n}\n.carousel-list .carousel-slides.has-opacity .carousel-slide.is-active img {\n  opacity: 1;\n}\n.carousel-list .carousel-slides .carousel-slide {\n  border: 2px solid transparent;\n  flex-shrink: 0;\n}\n\n.carousel-arrow {\n  transition: 150ms ease-out;\n}\n.carousel-arrow.is-hovered {\n  opacity: 0;\n}\n.carousel-arrow .icon {\n  background: white;\n  color: #7957d5;\n  cursor: pointer;\n  border: 1px solid white;\n  border-radius: 9999px;\n  outline: 0;\n}\n.carousel-arrow .icon:hover {\n  border: 1px solid #7957d5;\n  opacity: 1;\n}\n.carousel-arrow .icon.has-icons-left, .carousel-arrow .icon.has-icons-right {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 1;\n}\n.carousel-arrow .icon.has-icons-left {\n  left: 1.5rem;\n}\n.carousel-arrow .icon.has-icons-right {\n  right: 1.5rem;\n}\n\n.b-checkbox.checkbox {\n  outline: none;\n  display: inline-flex;\n  align-items: center;\n}\n.b-checkbox.checkbox:not(.button) {\n  margin-right: 0.5em;\n}\n.b-checkbox.checkbox:not(.button) + .checkbox:last-child {\n  margin-right: 0;\n}\n.b-checkbox.checkbox input[type=checkbox] {\n  position: absolute;\n  left: 0;\n  opacity: 0;\n  outline: none;\n  z-index: -1;\n}\n.b-checkbox.checkbox input[type=checkbox] + .check {\n  width: 1.25em;\n  height: 1.25em;\n  flex-shrink: 0;\n  border-radius: 4px;\n  border: 2px solid #7a7a7a;\n  transition: background 150ms ease-out;\n  background: transparent;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check {\n  background: #7957d5 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #7957d5;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-white {\n  background: white url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%230a0a0a' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: white;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-black {\n  background: #0a0a0a url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:white' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #0a0a0a;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-light {\n  background: whitesmoke url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:rgba(0, 0, 0, 0.7)' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: whitesmoke;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-dark {\n  background: #363636 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #363636;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-primary {\n  background: #7957d5 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #7957d5;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-link {\n  background: #7957d5 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #7957d5;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-info {\n  background: #167df0 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #167df0;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-success {\n  background: #48c78e url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #48c78e;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-warning {\n  background: #ffe08a url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:rgba(0, 0, 0, 0.7)' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #ffe08a;\n}\n.b-checkbox.checkbox input[type=checkbox]:checked + .check.is-danger {\n  background: #f14668 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%23fff' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #f14668;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check {\n  background: #7957d5 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #7957d5;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-white {\n  background: white url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%230a0a0a' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: white;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-black {\n  background: #0a0a0a url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:white' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #0a0a0a;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-light {\n  background: whitesmoke url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:rgba(0, 0, 0, 0.7)' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: whitesmoke;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-dark {\n  background: #363636 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #363636;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-primary {\n  background: #7957d5 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #7957d5;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-link {\n  background: #7957d5 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #7957d5;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-info {\n  background: #167df0 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #167df0;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-success {\n  background: #48c78e url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #48c78e;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-warning {\n  background: #ffe08a url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:rgba(0, 0, 0, 0.7)' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #ffe08a;\n}\n.b-checkbox.checkbox input[type=checkbox]:indeterminate + .check.is-danger {\n  background: #f14668 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect style='fill:%23fff' width='0.7' height='0.2' x='.15' y='.4'%3E%3C/rect%3E%3C/svg%3E\") no-repeat center center;\n  border-color: #f14668;\n}\n.b-checkbox.checkbox input[type=checkbox]:focus + .check {\n  box-shadow: 0 0 0.5em rgba(122, 122, 122, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check {\n  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-white {\n  box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-black {\n  box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-light {\n  box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-dark {\n  box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-primary {\n  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-link {\n  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-info {\n  box-shadow: 0 0 0.5em rgba(22, 125, 240, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-success {\n  box-shadow: 0 0 0.5em rgba(72, 199, 142, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-warning {\n  box-shadow: 0 0 0.5em rgba(255, 224, 138, 0.8);\n}\n.b-checkbox.checkbox input[type=checkbox]:focus:checked + .check.is-danger {\n  box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.8);\n}\n.b-checkbox.checkbox .control-label {\n  padding-left: calc(0.75em - 1px);\n}\n.b-checkbox.checkbox.button {\n  display: flex;\n}\n.b-checkbox.checkbox[disabled] {\n  opacity: 0.5;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check {\n  border-color: #7957d5;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-white {\n  border-color: white;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-black {\n  border-color: #0a0a0a;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-light {\n  border-color: whitesmoke;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-dark {\n  border-color: #363636;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-primary {\n  border-color: #7957d5;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-link {\n  border-color: #7957d5;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-info {\n  border-color: #167df0;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-success {\n  border-color: #48c78e;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-warning {\n  border-color: #ffe08a;\n}\n.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled) + .check.is-danger {\n  border-color: #f14668;\n}\n.b-checkbox.checkbox.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.b-checkbox.checkbox.is-medium {\n  font-size: 1.25rem;\n}\n.b-checkbox.checkbox.is-large {\n  font-size: 1.5rem;\n}\n\n.b-clockpicker .card-header {\n  background-color: #7957d5;\n  color: #fff;\n}\n.b-clockpicker .b-clockpicker-face:after {\n  background-color: #7957d5;\n}\n.b-clockpicker .b-clockpicker-face-hand {\n  background-color: #7957d5;\n  border-color: #7957d5;\n}\n.b-clockpicker .b-clockpicker-face-number.active {\n  background-color: #7957d5;\n  color: #fff;\n}\n.b-clockpicker.is-white .card-header {\n  background-color: white;\n  color: #0a0a0a;\n}\n.b-clockpicker.is-white .b-clockpicker-face:after {\n  background-color: white;\n}\n.b-clockpicker.is-white .b-clockpicker-face-hand {\n  background-color: white;\n  border-color: white;\n}\n.b-clockpicker.is-white .b-clockpicker-face-number.active {\n  background-color: white;\n  color: #0a0a0a;\n}\n.b-clockpicker.is-black .card-header {\n  background-color: #0a0a0a;\n  color: white;\n}\n.b-clockpicker.is-black .b-clockpicker-face:after {\n  background-color: #0a0a0a;\n}\n.b-clockpicker.is-black .b-clockpicker-face-hand {\n  background-color: #0a0a0a;\n  border-color: #0a0a0a;\n}\n.b-clockpicker.is-black .b-clockpicker-face-number.active {\n  background-color: #0a0a0a;\n  color: white;\n}\n.b-clockpicker.is-light .card-header {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.b-clockpicker.is-light .b-clockpicker-face:after {\n  background-color: whitesmoke;\n}\n.b-clockpicker.is-light .b-clockpicker-face-hand {\n  background-color: whitesmoke;\n  border-color: whitesmoke;\n}\n.b-clockpicker.is-light .b-clockpicker-face-number.active {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.b-clockpicker.is-dark .card-header {\n  background-color: #363636;\n  color: #fff;\n}\n.b-clockpicker.is-dark .b-clockpicker-face:after {\n  background-color: #363636;\n}\n.b-clockpicker.is-dark .b-clockpicker-face-hand {\n  background-color: #363636;\n  border-color: #363636;\n}\n.b-clockpicker.is-dark .b-clockpicker-face-number.active {\n  background-color: #363636;\n  color: #fff;\n}\n.b-clockpicker.is-primary .card-header {\n  background-color: #7957d5;\n  color: #fff;\n}\n.b-clockpicker.is-primary .b-clockpicker-face:after {\n  background-color: #7957d5;\n}\n.b-clockpicker.is-primary .b-clockpicker-face-hand {\n  background-color: #7957d5;\n  border-color: #7957d5;\n}\n.b-clockpicker.is-primary .b-clockpicker-face-number.active {\n  background-color: #7957d5;\n  color: #fff;\n}\n.b-clockpicker.is-link .card-header {\n  background-color: #7957d5;\n  color: #fff;\n}\n.b-clockpicker.is-link .b-clockpicker-face:after {\n  background-color: #7957d5;\n}\n.b-clockpicker.is-link .b-clockpicker-face-hand {\n  background-color: #7957d5;\n  border-color: #7957d5;\n}\n.b-clockpicker.is-link .b-clockpicker-face-number.active {\n  background-color: #7957d5;\n  color: #fff;\n}\n.b-clockpicker.is-info .card-header {\n  background-color: #167df0;\n  color: #fff;\n}\n.b-clockpicker.is-info .b-clockpicker-face:after {\n  background-color: #167df0;\n}\n.b-clockpicker.is-info .b-clockpicker-face-hand {\n  background-color: #167df0;\n  border-color: #167df0;\n}\n.b-clockpicker.is-info .b-clockpicker-face-number.active {\n  background-color: #167df0;\n  color: #fff;\n}\n.b-clockpicker.is-success .card-header {\n  background-color: #48c78e;\n  color: #fff;\n}\n.b-clockpicker.is-success .b-clockpicker-face:after {\n  background-color: #48c78e;\n}\n.b-clockpicker.is-success .b-clockpicker-face-hand {\n  background-color: #48c78e;\n  border-color: #48c78e;\n}\n.b-clockpicker.is-success .b-clockpicker-face-number.active {\n  background-color: #48c78e;\n  color: #fff;\n}\n.b-clockpicker.is-warning .card-header {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.b-clockpicker.is-warning .b-clockpicker-face:after {\n  background-color: #ffe08a;\n}\n.b-clockpicker.is-warning .b-clockpicker-face-hand {\n  background-color: #ffe08a;\n  border-color: #ffe08a;\n}\n.b-clockpicker.is-warning .b-clockpicker-face-number.active {\n  background-color: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.b-clockpicker.is-danger .card-header {\n  background-color: #f14668;\n  color: #fff;\n}\n.b-clockpicker.is-danger .b-clockpicker-face:after {\n  background-color: #f14668;\n}\n.b-clockpicker.is-danger .b-clockpicker-face-hand {\n  background-color: #f14668;\n  border-color: #f14668;\n}\n.b-clockpicker.is-danger .b-clockpicker-face-number.active {\n  background-color: #f14668;\n  color: #fff;\n}\n.b-clockpicker .dropdown-menu {\n  min-width: 0;\n}\n.b-clockpicker .dropdown,\n.b-clockpicker .dropdown-trigger {\n  width: 100%;\n}\n.b-clockpicker .dropdown .input[readonly],\n.b-clockpicker .dropdown-trigger .input[readonly] {\n  cursor: pointer;\n  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);\n}\n.b-clockpicker .dropdown .input[readonly]:focus, .b-clockpicker .dropdown .input[readonly].is-focused, .b-clockpicker .dropdown .input[readonly]:active, .b-clockpicker .dropdown .input[readonly].is-active,\n.b-clockpicker .dropdown-trigger .input[readonly]:focus,\n.b-clockpicker .dropdown-trigger .input[readonly].is-focused,\n.b-clockpicker .dropdown-trigger .input[readonly]:active,\n.b-clockpicker .dropdown-trigger .input[readonly].is-active {\n  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.b-clockpicker .dropdown-item, .b-clockpicker .dropdown .dropdown-menu .has-link a, .dropdown .dropdown-menu .has-link .b-clockpicker a {\n  font-size: inherit;\n  padding: 0;\n}\n.b-clockpicker .dropdown-content {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.b-clockpicker .card {\n  border-radius: 0.25rem;\n}\n.b-clockpicker .card-header {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.b-clockpicker .card-content {\n  padding: 12px;\n}\n.b-clockpicker-btn {\n  cursor: pointer;\n  opacity: 0.6;\n}\n.b-clockpicker-btn:hover, .b-clockpicker-btn.active {\n  opacity: 1;\n}\n.b-clockpicker-period .b-clockpicker-btn {\n  font-size: 16px;\n}\n.b-clockpicker-time span {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n}\n.b-clockpicker-header {\n  display: flex;\n  line-height: 1;\n  justify-content: flex-end;\n  color: inherit;\n}\n.b-clockpicker-header .b-clockpicker-time {\n  white-space: nowrap;\n}\n.b-clockpicker-header .b-clockpicker-time span {\n  height: 60px;\n  font-size: 60px;\n}\n.b-clockpicker-header .b-clockpicker-period {\n  align-self: flex-end;\n  display: flex;\n  flex-direction: column;\n  margin: 8px 0 6px 8px;\n}\n.b-clockpicker-body {\n  transition: 0.9s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.b-clockpicker-body .b-clockpicker-btn {\n  padding: 0 8px;\n  border-radius: 9999px;\n  margin-bottom: 2px;\n}\n.b-clockpicker-body .b-clockpicker-btn:hover, .b-clockpicker-body .b-clockpicker-btn.active {\n  background-color: #7957d5;\n  color: white;\n}\n.b-clockpicker-body .b-clockpicker-period {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n.b-clockpicker-body .b-clockpicker-time {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  font-size: 16px;\n}\n.b-clockpicker-body .b-clockpicker-face {\n  border-radius: 50%;\n  position: relative;\n  background-color: #dbdbdb;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n.b-clockpicker-body .b-clockpicker-face:after {\n  border-radius: 50%;\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 12px;\n  height: 12px;\n  z-index: 10;\n}\n.b-clockpicker-body .b-clockpicker-face-outer-ring {\n  user-select: none;\n  height: calc(100% - 50px);\n  width: calc(100% - 50px);\n  position: relative;\n  border-radius: 50%;\n}\n.b-clockpicker-body .b-clockpicker-face-number {\n  align-items: center;\n  border-radius: 100%;\n  cursor: default;\n  display: flex;\n  font-size: 18px;\n  text-align: center;\n  justify-content: center;\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  left: calc(50% - 40px * 0.5);\n  top: calc(50% - 40px * 0.5);\n  user-select: none;\n}\n.b-clockpicker-body .b-clockpicker-face-number > span {\n  z-index: 1;\n}\n.b-clockpicker-body .b-clockpicker-face-number:before, .b-clockpicker-body .b-clockpicker-face-number:after {\n  content: \"\";\n  height: 40px;\n  width: 40px;\n  border-radius: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.b-clockpicker-body .b-clockpicker-face-number.active {\n  cursor: default;\n  z-index: 2;\n}\n.b-clockpicker-body .b-clockpicker-face-number.disabled {\n  pointer-events: none;\n  opacity: 0.25;\n}\n.b-clockpicker-body .b-clockpicker-face-hand {\n  height: calc(50% - 6px);\n  width: 2px;\n  bottom: 50%;\n  left: calc(50% - 1px);\n  transform-origin: center bottom;\n  position: absolute;\n  will-change: transform;\n  z-index: 1;\n}\n.b-clockpicker-body .b-clockpicker-face-hand:before {\n  background: transparent;\n  border-width: 2px;\n  border-style: solid;\n  border-color: inherit;\n  border-radius: 100%;\n  width: 12px;\n  height: 12px;\n  content: \"\";\n  position: absolute;\n  top: -6px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.b-clockpicker-footer {\n  display: block;\n  padding: 12px;\n}\n.b-clockpicker.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.b-clockpicker.is-medium {\n  font-size: 1.25rem;\n}\n.b-clockpicker.is-large {\n  font-size: 1.5rem;\n}\n\n.collapse .collapse-trigger {\n  display: inline;\n  cursor: pointer;\n}\n.collapse .collapse-content {\n  display: inherit;\n}\n\n.colorpicker .color-name {\n  font-family: monospace;\n  text-transform: uppercase;\n}\n.colorpicker .colorpicker-footer {\n  margin-top: 0.875rem;\n  padding-top: 0.875rem;\n  border: 1px solid #dbdbdb;\n  border-width: 1px 0 0 0;\n}\n.colorpicker .colorpicker-footer .colorpicker-fields {\n  margin-bottom: 0.875rem;\n}\n.colorpicker .colorpicker-footer .colorpicker-fields .field {\n  flex-grow: 1;\n}\n.colorpicker .colorpicker-footer .colorpicker-fields .field .field-label {\n  margin-right: 0.5rem;\n}\n.colorpicker .colorpicker-footer .colorpicker-fields .field .control {\n  display: flex;\n}\n.colorpicker .colorpicker-footer .colorpicker-fields .field .control .input {\n  -webkit-appearance: none;\n  -moz-appearance: textfield;\n  appearance: textfield;\n  flex-grow: 1;\n  width: 0;\n  min-width: 42px;\n  text-align: right;\n}\n.colorpicker .colorpicker-footer .colorpicker-fields .field .control .input::-webkit-outer-spin-button, .colorpicker .colorpicker-footer .colorpicker-fields .field .control .input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.colorpicker .dropdown.is-expanded .dropdown-menu,\n.colorpicker .dropdown.is-expanded.is-mobile-modal .dropdown-menu {\n  width: unset;\n}\n.colorpicker .dropdown-horizontal-colorpicker {\n  display: flex;\n  flex-direction: row;\n}\n.colorpicker .dropdown-horizontal-colorpicker .colorpicker-footer {\n  border-width: 0 0 0 1px;\n  margin-top: 0;\n  padding-top: 0;\n  margin-left: 0.875rem;\n  padding-left: 0.875rem;\n}\n\nsvg.b-colorpicker-triangle {\n  width: 200px;\n  height: 200px;\n  user-select: none;\n}\n@media (max-width: 769px) {\n  svg.b-colorpicker-triangle {\n    width: 100%;\n    height: auto;\n  }\n}\nsvg.b-colorpicker-triangle .colorpicker-triangle-hue {\n  width: 100%;\n  height: 100%;\n  background: conic-gradient(#f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);\n}\nsvg.b-colorpicker-triangle .colorpicker-triangle-slider-hue, svg.b-colorpicker-triangle .colorpicker-triangle-slider-hue foreignObject, svg.b-colorpicker-triangle .colorpicker-triangle-slider-hue g, svg.b-colorpicker-triangle .colorpicker-triangle-slider-sl, svg.b-colorpicker-triangle .colorpicker-triangle-slider-sl foreignObject, svg.b-colorpicker-triangle .colorpicker-triangle-slider-sl g {\n  transform-origin: 50% 50%;\n}\nsvg.b-colorpicker-triangle .hue-range-thumb,\nsvg.b-colorpicker-triangle .sl-range-thumb {\n  background: transparent;\n  border-radius: 4px;\n  box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #dbdbdb;\n  cursor: grab;\n  height: calc(100%/1 - .25em/1);\n  width: calc(100%/1 - .25em/1);\n  margin: 0.125em;\n}\nsvg.b-colorpicker-triangle .hue-range-thumb:hover,\nsvg.b-colorpicker-triangle .sl-range-thumb:hover {\n  box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #b5b5b5;\n}\nsvg.b-colorpicker-triangle .hue-range-thumb:focus,\nsvg.b-colorpicker-triangle .sl-range-thumb:focus {\n  box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #7957d5, 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\nsvg.b-colorpicker-triangle .hue-range-thumb:active,\nsvg.b-colorpicker-triangle .sl-range-thumb:active {\n  cursor: grabbing;\n}\n\ndiv.b-colorpicker-square {\n  position: relative;\n  aspect-ratio: 1/1;\n  user-select: none;\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-hue {\n  background: conic-gradient(#f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);\n  border-radius: 4px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-hue .hue-range-thumb {\n  border-radius: calc(4px / 1.75);\n  position: absolute;\n  aspect-ratio: 1/1;\n  transform: translate(-50%, -50%);\n  box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #dbdbdb;\n  cursor: grab;\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-hue .hue-range-thumb:hover {\n  box-shadow: inset 0 0 0 1px #fff, inset 0 0 0 2px #b5b5b5, 0 0 0 1px #b5b5b5;\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-hue .hue-range-thumb:focus {\n  box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #7957d5, 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-hue .hue-range-thumb:active {\n  cursor: grabbing;\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-sl {\n  background: #fff;\n  border-radius: 2px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-sl::before {\n  content: \"\";\n  background: linear-gradient(0deg, #000, #fff);\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  mix-blend-mode: hard-light;\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-sl .sl-range-thumb {\n  display: block;\n  border-radius: 4px;\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  transform: translate(-50%, -50%);\n  box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #dbdbdb;\n  cursor: grab;\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-sl .sl-range-thumb:hover {\n  box-shadow: inset 0 0 0 1px #fff, inset 0 0 0 2px #b5b5b5, 0 0 0 1px #b5b5b5;\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-sl .sl-range-thumb:focus {\n  box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #7957d5, 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\ndiv.b-colorpicker-square .colorpicker-square-slider-sl .sl-range-thumb:active {\n  cursor: grabbing;\n}\n\n.b-colorpicker-alpha-slider {\n  height: 1em;\n  background-image: linear-gradient(45deg, #c7c7c7 25%, transparent 25%, transparent 75%, #c7c7c7 75%, #c7c7c7), linear-gradient(45deg, #c7c7c7 25%, transparent 25%, transparent 75%, #c7c7c7 75%, #c7c7c7);\n  background-size: 1em 1em;\n  background-position: 0.5em 0.5em, 0 0;\n  border-radius: 4px;\n  margin-top: 0.125em;\n  margin-bottom: 0.875rem;\n  position: relative;\n}\n.b-colorpicker-alpha-slider .alpha-range-thumb {\n  width: 0.4em;\n  height: 1.25em;\n  border-radius: 4px;\n  box-shadow: inset 0 0 0 1px #fff, inset 0 0 0 2px #dbdbdb, 0 0 0 1px #dbdbdb;\n  cursor: grab;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translate(-50%, -50%);\n}\n.b-colorpicker-alpha-slider .alpha-range-thumb:hover {\n  box-shadow: inset 0 0 0 1px #fff, inset 0 0 0 2px #b5b5b5, 0 0 0 1px #b5b5b5;\n}\n.b-colorpicker-alpha-slider .alpha-range-thumb:focus {\n  box-shadow: inset 0 0 0 1px #fff, 0 0 0 1px #7957d5, 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.b-colorpicker-alpha-slider .alpha-range-thumb:active {\n  cursor: grabbing;\n}\n.b-colorpicker-alpha-slider .alpha-range-thumb > .b-tooltip, .b-colorpicker-alpha-slider .alpha-range-thumb > .b-tooltip > .tooltip-trigger {\n  position: absolute;\n  display: block;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.datepicker {\n  font-size: 0.875rem;\n}\n.datepicker .dropdown,\n.datepicker .dropdown-trigger {\n  width: 100%;\n}\n.datepicker .dropdown .input[readonly],\n.datepicker .dropdown-trigger .input[readonly] {\n  cursor: pointer;\n  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);\n}\n.datepicker .dropdown .input[readonly]:focus, .datepicker .dropdown .input[readonly].is-focused, .datepicker .dropdown .input[readonly]:active, .datepicker .dropdown .input[readonly].is-active,\n.datepicker .dropdown-trigger .input[readonly]:focus,\n.datepicker .dropdown-trigger .input[readonly].is-focused,\n.datepicker .dropdown-trigger .input[readonly]:active,\n.datepicker .dropdown-trigger .input[readonly].is-active {\n  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.datepicker .dropdown.is-disabled {\n  opacity: 1;\n}\n.datepicker .dropdown-content {\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);\n}\n.datepicker .dropdown-item, .datepicker .dropdown .dropdown-menu .has-link a, .dropdown .dropdown-menu .has-link .datepicker a {\n  font-size: inherit;\n}\n.datepicker .datepicker-header {\n  padding-bottom: 0.875rem;\n  margin-bottom: 0.875rem;\n  border-bottom: 1px solid #dbdbdb;\n}\n.datepicker .datepicker-footer {\n  margin-top: 0.875rem;\n  padding-top: 0.875rem;\n  border-top: 1px solid #dbdbdb;\n}\n.datepicker .datepicker-table {\n  display: table;\n  margin: 0 auto 0 auto;\n}\n.datepicker .datepicker-table .datepicker-cell {\n  text-align: center;\n  vertical-align: middle;\n  display: table-cell;\n  border-radius: 4px;\n  padding: 0.5rem 0.75rem;\n}\n.datepicker .datepicker-table .datepicker-header {\n  display: table-header-group;\n}\n.datepicker .datepicker-table .datepicker-header .datepicker-cell {\n  color: #7a7a7a;\n  font-weight: 600;\n}\n.datepicker .datepicker-table .datepicker-body {\n  display: table-row-group;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-row {\n  display: table-row;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-months {\n  display: inline-flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  width: 17rem;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-months .datepicker-cell {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 33.33%;\n  height: 2.5rem;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-unselectable {\n  color: #b5b5b5;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-today {\n  border: solid 1px rgba(121, 87, 213, 0.5);\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable {\n  color: #4a4a4a;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable:hover:not(.is-selected), .datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable:focus:not(.is-selected) {\n  background-color: whitesmoke;\n  color: #0a0a0a;\n  cursor: pointer;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-first-hovered {\n  background-color: #7a7a7a;\n  color: #dbdbdb;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-within-hovered {\n  background-color: whitesmoke;\n  color: #0a0a0a;\n  border-radius: 0;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-last-hovered {\n  background-color: #7a7a7a;\n  color: #dbdbdb;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected {\n  background-color: #7957d5;\n  color: #fff;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-first-selected {\n  background-color: #7957d5;\n  color: #fff;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-within-selected {\n  background-color: rgba(121, 87, 213, 0.5);\n  border-radius: 0;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-last-selected {\n  background-color: #7957d5;\n  color: #fff;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-nearby:not(.is-selected) {\n  color: #b5b5b5;\n}\n.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-week-number {\n  cursor: default;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell {\n  padding: 0.3rem 0.75rem 0.75rem;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event {\n  position: relative;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events {\n  bottom: 0.425rem;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  padding: 0 0.35rem;\n  position: absolute;\n  width: 100%;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-white {\n  background-color: white;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-black {\n  background-color: #0a0a0a;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-light {\n  background-color: whitesmoke;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-dark {\n  background-color: #363636;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-primary {\n  background-color: #7957d5;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-link {\n  background-color: #7957d5;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-info {\n  background-color: #167df0;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-success {\n  background-color: #48c78e;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-warning {\n  background-color: #ffe08a;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-danger {\n  background-color: #f14668;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event.dots .event {\n  border-radius: 50%;\n  height: 0.35em;\n  margin: 0 0.1em;\n  width: 0.35em;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event.bars .event {\n  height: 0.25em;\n  width: 100%;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.is-selected {\n  overflow: hidden;\n}\n.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.is-selected .events .event.is-primary {\n  background-color: #aa94e4;\n}\n.datepicker.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.datepicker.is-medium {\n  font-size: 1.25rem;\n}\n.datepicker.is-large {\n  font-size: 1.5rem;\n}\n@media screen and (min-width: 1024px) {\n  .datepicker .footer-horizontal-timepicker {\n    border: none;\n    padding-left: 10px;\n    margin-left: 5px;\n    display: flex;\n  }\n  .datepicker .dropdown-horizontal-timepicker {\n    display: flex;\n  }\n  .datepicker .content-horizontal-timepicker {\n    border-right: 1px solid #dbdbdb;\n  }\n}\n\n.dialog .modal-card {\n  max-width: 460px;\n  width: auto;\n}\n.dialog .modal-card .modal-card-head {\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.dialog .modal-card .modal-card-body .field {\n  margin-top: 16px;\n}\n.dialog .modal-card .modal-card-body.is-titleless {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.dialog .modal-card .modal-card-foot {\n  justify-content: flex-end;\n}\n.dialog .modal-card .modal-card-foot .button {\n  display: inline;\n  min-width: 5em;\n  font-weight: 600;\n}\n@media screen and (min-width: 769px), print {\n  .dialog .modal-card {\n    min-width: 320px;\n  }\n}\n.dialog.is-small .modal-card,\n.dialog.is-small .input,\n.dialog.is-small .button {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.dialog.is-medium .modal-card,\n.dialog.is-medium .input,\n.dialog.is-medium .button {\n  font-size: 1.25rem;\n}\n.dialog.is-large .modal-card,\n.dialog.is-large .input,\n.dialog.is-large .button {\n  font-size: 1.5rem;\n}\n.dialog.has-custom-container {\n  position: absolute;\n}\n\n.dropdown + .dropdown {\n  margin-left: 0.5em;\n}\n.dropdown .background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  position: fixed;\n  background-color: rgba(10, 10, 10, 0.86);\n  z-index: 40;\n  cursor: pointer;\n}\n@media screen and (min-width: 1024px) {\n  .dropdown .background {\n    display: none;\n  }\n}\n.dropdown.dropdown-menu-animation .dropdown-menu {\n  display: block;\n}\n.dropdown .dropdown-menu .dropdown-item.is-disabled, .dropdown .dropdown-menu .has-link a.is-disabled {\n  cursor: not-allowed;\n}\n.dropdown .dropdown-menu .dropdown-item.is-disabled:hover, .dropdown .dropdown-menu .has-link a.is-disabled:hover {\n  background: inherit;\n  color: inherit;\n}\n.dropdown .dropdown-menu .has-link a {\n  padding-right: 3rem;\n  white-space: nowrap;\n}\n.dropdown.is-hoverable:not(.is-active) .dropdown-menu {\n  display: none;\n}\n.dropdown.is-hoverable:hover .dropdown-menu {\n  display: inherit;\n}\n.dropdown.is-expanded {\n  width: 100%;\n}\n.dropdown.is-expanded .dropdown-trigger {\n  width: 100%;\n}\n.dropdown.is-expanded .dropdown-menu {\n  width: 100%;\n}\n.dropdown.is-expanded.is-mobile-modal .dropdown-menu {\n  max-width: 100%;\n}\n.dropdown:not(.is-disabled) .dropdown-menu .dropdown-item.is-disabled, .dropdown:not(.is-disabled) .dropdown-menu .has-link a.is-disabled {\n  opacity: 0.5;\n}\n.dropdown .navbar-item {\n  height: 100%;\n}\n.dropdown.is-disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.dropdown.is-disabled .dropdown-trigger {\n  pointer-events: none;\n}\n.dropdown.is-inline .dropdown-menu {\n  position: static;\n  display: inline-block;\n  padding: 0;\n}\n.dropdown.is-top-right .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n}\n.dropdown.is-top-left .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  right: 0;\n  left: auto;\n}\n.dropdown.is-bottom-left .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n@media screen and (max-width: 1023px) {\n  .dropdown.is-mobile-modal > .dropdown-menu {\n    position: fixed !important;\n    width: calc(100vw - 40px);\n    max-width: 460px;\n    max-height: calc(100vh - 120px);\n    top: 25% !important;\n    left: 50% !important;\n    bottom: auto !important;\n    right: auto !important;\n    transform: translate3d(-50%, -25%, 0);\n    white-space: normal;\n    overflow-y: auto;\n    z-index: 50 !important;\n  }\n  .dropdown.is-mobile-modal > .dropdown-menu > .dropdown-content > .dropdown-item, .dropdown .dropdown-menu .has-link .dropdown.is-mobile-modal > .dropdown-menu > .dropdown-content > a, .dropdown.is-mobile-modal > .dropdown-menu > .dropdown-content > .has-link a {\n    padding: 1rem 1.5rem;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  html.is-clipped-touch {\n    overflow: hidden !important;\n  }\n}\n\n.field.is-grouped .field {\n  flex-shrink: 0;\n}\n.field.is-grouped .field:not(:last-child) {\n  margin-right: 0.75rem;\n}\n.field.is-grouped .field.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.field.has-addons .control:first-child .control .button,\n.field.has-addons .control:first-child .control .input,\n.field.has-addons .control:first-child .control .select select {\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n.field.has-addons .control:last-child .control .button,\n.field.has-addons .control:last-child .control .input,\n.field.has-addons .control:last-child .control .select select {\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.field.has-addons .control .control .button,\n.field.has-addons .control .control .input,\n.field.has-addons .control .control .select select {\n  border-radius: 0;\n}\n.field.has-addons .b-numberinput:not(:first-child) .control:first-child .button,\n.field.has-addons .b-numberinput:not(:first-child) .control:first-child .input,\n.field.has-addons .b-numberinput:not(:first-child) .control:first-child .select select {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.field.has-addons .b-numberinput:not(:last-child) .control:last-child .button,\n.field.has-addons .b-numberinput:not(:last-child) .control:last-child .input,\n.field.has-addons .b-numberinput:not(:last-child) .control:last-child .select select {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.field.has-addons.b-numberinput .control {\n  margin-right: unset;\n}\n\n.field.is-floating-label, .field.is-floating-in-label {\n  position: relative;\n}\n.field.is-floating-label .label, .field.is-floating-in-label .label {\n  position: absolute;\n  left: 1em;\n  font-size: calc(1rem * 0.75);\n  background-color: transparent;\n  z-index: 5;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: calc(100% - 2em);\n  overflow: hidden;\n}\n.field.is-floating-label .label.is-small, .field.is-floating-in-label .label.is-small {\n  font-size: calc(0.75rem * 0.75);\n}\n.field.is-floating-label .label.is-medium, .field.is-floating-in-label .label.is-medium {\n  font-size: calc(1.25rem * 0.75);\n}\n.field.is-floating-label .label.is-large, .field.is-floating-in-label .label.is-large {\n  font-size: calc(1.5rem * 0.75);\n}\n.field.is-floating-label .taginput .counter, .field.is-floating-in-label .taginput .counter {\n  float: none;\n  text-align: right;\n}\n.field.is-floating-label.has-addons > .label + .control .button,\n.field.is-floating-label.has-addons > .label + .control .input,\n.field.is-floating-label.has-addons > .label + .control .select select, .field.is-floating-in-label.has-addons > .label + .control .button,\n.field.is-floating-in-label.has-addons > .label + .control .input,\n.field.is-floating-in-label.has-addons > .label + .control .select select {\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n.field.is-floating-label .label {\n  top: -0.775em;\n  padding-left: 0.125em;\n  padding-right: 0.125em;\n}\n.field.is-floating-label .label:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0.775em;\n  left: 0;\n  right: 0;\n  height: 0.375em;\n  background-color: white;\n  z-index: -1;\n}\n.field.is-floating-label .input:focus,\n.field.is-floating-label .textarea:focus,\n.field.is-floating-label .select select:focus {\n  box-shadow: none;\n}\n.field.is-floating-label .taginput .taginput-container {\n  padding-top: 0.475em;\n}\n.field.is-floating-label .taginput .taginput-container.is-focused {\n  box-shadow: none;\n}\n.field.is-floating-in-label > .label {\n  top: 0.25em;\n}\n.field.is-floating-in-label > .label + .control.datepicker .input, .field.is-floating-in-label > .label + .control.timepicker .input {\n  padding-top: calc(3.25em * 0.5 - (1.5rem * 0.75) * 0.5);\n  padding-bottom: 1px;\n  height: 3.25em;\n}\n.field.is-floating-in-label > .label + .control:not(.datepicker):not(.timepicker):not(.taginput) .input,\n.field.is-floating-in-label > .label + .control:not(.datepicker):not(.timepicker):not(.taginput) .textarea,\n.field.is-floating-in-label > .label + .control:not(.datepicker):not(.timepicker):not(.taginput) select {\n  padding-top: calc(3.25em * 0.5 - (1.5rem * 0.75) * 0.5);\n  padding-bottom: 1px;\n  height: 3.25em;\n}\n.field.is-floating-in-label > .label + .control:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple) {\n  height: 3.25em;\n}\n.field.is-floating-in-label > .label + .control:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple).is-loading::after {\n  margin-top: calc(3.25em * 0.5 - (1.5rem * 0.75) * 0.5);\n}\n.field.is-floating-in-label > .label + .control:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple)::after {\n  margin-top: 1px;\n}\n.field.is-floating-in-label > .label + .control.taginput .taginput-container {\n  padding-top: calc(3.25em * 0.5 - (1.5rem * 0.75) * 0.5 + (0.275em - 1px));\n}\n.field.is-floating-in-label > .label + .control:not(.taginput) .is-left.icon,\n.field.is-floating-in-label > .label + .control:not(.taginput) .is-right.icon {\n  height: 3.25em;\n}\n.field.is-floating-in-label > .label + .control:not(.taginput) .is-left.icon {\n  padding-top: calc(3.25em * 0.5 - (1.5rem * 0.75) * 0.5);\n}\n.field.is-floating-in-label > .label + .control.is-loading::after {\n  margin-top: calc(3.25em * 0.5 - (1.5rem * 0.75) * 0.5);\n}\n.field.is-floating-in-label > .label + .field-body > .is-grouped .control .input,\n.field.is-floating-in-label > .label + .field-body > .is-grouped .control .textarea,\n.field.is-floating-in-label > .label + .field-body > .is-grouped .control select, .field.is-floating-in-label > .label + .field-body > .has-addons .control .input,\n.field.is-floating-in-label > .label + .field-body > .has-addons .control .textarea,\n.field.is-floating-in-label > .label + .field-body > .has-addons .control select {\n  padding-top: calc(3.25em * 0.5 - (1.5rem * 0.75) * 0.5);\n  padding-bottom: 1px;\n}\n.field.is-floating-in-label > .label + .field-body > .is-grouped .control .input,\n.field.is-floating-in-label > .label + .field-body > .is-grouped .control .textarea,\n.field.is-floating-in-label > .label + .field-body > .is-grouped .control select,\n.field.is-floating-in-label > .label + .field-body > .is-grouped .control .button, .field.is-floating-in-label > .label + .field-body > .has-addons .control .input,\n.field.is-floating-in-label > .label + .field-body > .has-addons .control .textarea,\n.field.is-floating-in-label > .label + .field-body > .has-addons .control select,\n.field.is-floating-in-label > .label + .field-body > .has-addons .control .button {\n  height: 3.25em;\n}\n.field.is-floating-in-label.has-numberinput .b-numberinput .control .input,\n.field.is-floating-in-label.has-numberinput .b-numberinput .control .button {\n  height: 3.25em;\n}\n.field.is-floating-label.has-numberinput .label, .field.is-floating-in-label.has-numberinput .label {\n  margin-left: calc(1rem * 3);\n}\n.field.is-floating-label.has-numberinput.has-numberinput-is-small .label, .field.is-floating-in-label.has-numberinput.has-numberinput-is-small .label {\n  margin-left: calc(0.75rem * 3);\n}\n.field.is-floating-label.has-numberinput.has-numberinput-is-medium .label, .field.is-floating-in-label.has-numberinput.has-numberinput-is-medium .label {\n  margin-left: calc(1.25rem * 3);\n}\n.field.is-floating-label.has-numberinput.has-numberinput-is-large .label, .field.is-floating-in-label.has-numberinput.has-numberinput-is-large .label {\n  margin-left: calc(1.5rem * 3);\n}\n.field.is-floating-label.has-numberinput-compact .label, .field.is-floating-in-label.has-numberinput-compact .label {\n  margin-left: calc(1rem * 2.25);\n}\n.field.is-floating-label.has-numberinput-compact.has-numberinput-is-small .label, .field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-small .label {\n  margin-left: calc(0.75rem * 2.25);\n}\n.field.is-floating-label.has-numberinput-compact.has-numberinput-is-medium .label, .field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-medium .label {\n  margin-left: calc(1.25rem * 2.25);\n}\n.field.is-floating-label.has-numberinput-compact.has-numberinput-is-large .label, .field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-large .label {\n  margin-left: calc(1.5rem * 2.25);\n}\n.field.is-grouped-right.is-floating-in-label .label, .field.has-addons-right.is-floating-in-label .label {\n  position: relative;\n  left: calc(3.25em + 2em);\n}\n.field.is-grouped-right.is-floating-label .label, .field.has-addons-right.is-floating-label .label {\n  position: relative;\n  left: calc(3.25em + 2em);\n}\n\n.control .help.counter {\n  float: right;\n  margin-left: 0.5em;\n}\n.control .icon.is-clickable {\n  pointer-events: auto;\n  cursor: pointer;\n}\n.control.is-loading::after {\n  top: calc(50% - (1em * 0.5));\n  right: calc((2.5em * 0.5) - .5em);\n}\n\n.icon {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: inherit;\n}\n.icon svg {\n  background-color: transparent;\n  fill: currentColor;\n  stroke-width: 0;\n  stroke: currentColor;\n  pointer-events: none;\n  width: auto;\n  height: auto;\n}\n\n.b-image-wrapper > img {\n  object-fit: cover;\n}\n.b-image-wrapper > img.has-ratio, .b-image-wrapper > img.placeholder {\n  height: 100%;\n  width: 100%;\n}\n.b-image-wrapper > img.placeholder {\n  filter: blur(10px);\n}\n\n.loading-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  align-items: center;\n  display: none;\n  justify-content: center;\n  overflow: hidden;\n  z-index: 29;\n}\n.loading-overlay.is-active {\n  display: flex;\n}\n.loading-overlay.is-full-page {\n  position: fixed;\n  z-index: 999;\n}\n.loading-overlay.is-full-page .loading-icon:after {\n  top: calc(50% - 2.5em);\n  left: calc(50% - 2.5em);\n  width: 5em;\n  height: 5em;\n}\n.loading-overlay .loading-background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: #7f7f7f;\n  background: rgba(255, 255, 255, 0.5);\n}\n.loading-overlay .loading-icon {\n  position: relative;\n}\n.loading-overlay .loading-icon:after {\n  animation: spinAround 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 9999px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em;\n  position: absolute;\n  top: calc(50% - 1.5em);\n  left: calc(50% - 1.5em);\n  width: 3em;\n  height: 3em;\n  border-width: 0.25em;\n}\n\n.menu .menu-list li > a.is-disabled {\n  pointer-events: none;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.message .media,\n.notification .media {\n  padding-top: 0;\n  border: 0;\n}\n.message progress,\n.notification progress {\n  height: 5px;\n}\n\n.modal.is-full-screen > .animation-content,\n.modal.is-full-screen > .animation-content > .modal-card {\n  width: 100%;\n  height: 100%;\n  max-height: 100vh;\n  margin: 0;\n  background-color: whitesmoke;\n}\n.modal .animation-content {\n  margin: 0 20px;\n}\n.modal .animation-content .modal-card {\n  margin: 0;\n}\n@media screen and (max-width: 768px) {\n  .modal .animation-content {\n    width: 100%;\n  }\n}\n.modal .modal-content {\n  width: 100%;\n}\n\n.navbar.has-navbar-centered .navbar-start {\n  justify-content: center;\n  margin-left: auto;\n}\n.navbar.has-navbar-centered .navbar-end {\n  margin-left: 0;\n}\n.navbar .navbar-dropdown.is-boxed {\n  visibility: hidden;\n  transition-property: opacity, visibility, transform;\n}\n.navbar .navbar-item.has-dropdown.is-active .is-boxed,\n.navbar .navbar-item.has-dropdown.is-hoverable:hover .is-boxed {\n  visibility: visible;\n}\n\n.notices {\n  position: fixed;\n  display: flex;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 2em;\n  overflow: hidden;\n  z-index: 1000;\n  pointer-events: none;\n}\n.notices .toast {\n  display: inline-flex;\n  animation-duration: 150ms;\n  margin: 0.5em 0;\n  text-align: center;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);\n  border-radius: 2em;\n  padding: 0.75em 1.5em;\n  pointer-events: auto;\n  opacity: 0.92;\n}\n.notices .toast.is-white {\n  color: #0a0a0a;\n  background: white;\n}\n.notices .toast.is-black {\n  color: white;\n  background: #0a0a0a;\n}\n.notices .toast.is-light {\n  color: rgba(0, 0, 0, 0.7);\n  background: whitesmoke;\n}\n.notices .toast.is-dark {\n  color: #fff;\n  background: #363636;\n}\n.notices .toast.is-primary {\n  color: #fff;\n  background: #7957d5;\n}\n.notices .toast.is-link {\n  color: #fff;\n  background: #7957d5;\n}\n.notices .toast.is-info {\n  color: #fff;\n  background: #167df0;\n}\n.notices .toast.is-success {\n  color: #fff;\n  background: #48c78e;\n}\n.notices .toast.is-warning {\n  color: rgba(0, 0, 0, 0.7);\n  background: #ffe08a;\n}\n.notices .toast.is-danger {\n  color: #fff;\n  background: #f14668;\n}\n.notices .snackbar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-around;\n  animation-duration: 150ms;\n  margin: 0.5em 0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);\n  border-radius: 4px;\n  pointer-events: auto;\n  background: #363636;\n  color: #fff;\n  min-height: 3em;\n}\n.notices .snackbar .text {\n  padding: 0.5em 1em;\n}\n.notices .snackbar .action {\n  margin-left: auto;\n  padding: 0.5em;\n  padding-left: 0;\n}\n.notices .snackbar .action .button {\n  font-weight: 600;\n  text-transform: uppercase;\n  background: #363636;\n  border: transparent;\n}\n.notices .snackbar .action .button:hover {\n  background: #292929;\n}\n.notices .snackbar .action .button:active {\n  background: #292929;\n}\n.notices .snackbar .action.is-white .button {\n  color: white;\n}\n.notices .snackbar .action.is-black .button {\n  color: #0a0a0a;\n}\n.notices .snackbar .action.is-light .button {\n  color: whitesmoke;\n}\n.notices .snackbar .action.is-dark .button {\n  color: #363636;\n}\n.notices .snackbar .action.is-primary .button {\n  color: #7957d5;\n}\n.notices .snackbar .action.is-link .button {\n  color: #7957d5;\n}\n.notices .snackbar .action.is-info .button {\n  color: #167df0;\n}\n.notices .snackbar .action.is-success .button {\n  color: #48c78e;\n}\n.notices .snackbar .action.is-warning .button {\n  color: #ffe08a;\n}\n.notices .snackbar .action.is-danger .button {\n  color: #f14668;\n}\n.notices .snackbar .action.is-cancel {\n  padding-right: 0;\n}\n@media screen and (max-width: 768px) {\n  .notices .snackbar {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n  }\n}\n@media screen and (min-width: 769px), print {\n  .notices .snackbar {\n    min-width: 350px;\n    max-width: 600px;\n    overflow: hidden;\n  }\n}\n.notices .notification {\n  pointer-events: auto;\n  max-width: 600px;\n}\n.notices .toast.is-top, .notices .toast.is-bottom,\n.notices .snackbar.is-top,\n.notices .snackbar.is-bottom,\n.notices .notification.is-top,\n.notices .notification.is-bottom {\n  align-self: center;\n}\n.notices .toast.is-top-right, .notices .toast.is-bottom-right,\n.notices .snackbar.is-top-right,\n.notices .snackbar.is-bottom-right,\n.notices .notification.is-top-right,\n.notices .notification.is-bottom-right {\n  align-self: flex-end;\n}\n.notices .toast.is-top-left, .notices .toast.is-bottom-left,\n.notices .snackbar.is-top-left,\n.notices .snackbar.is-bottom-left,\n.notices .notification.is-top-left,\n.notices .notification.is-bottom-left {\n  align-self: flex-start;\n}\n.notices .toast.is-toast,\n.notices .snackbar.is-toast,\n.notices .notification.is-toast {\n  opacity: 0.92;\n}\n.notices.is-top {\n  flex-direction: column;\n}\n.notices.is-bottom {\n  flex-direction: column-reverse;\n}\n.notices.is-bottom .notification {\n  margin-bottom: 0;\n}\n.notices.is-bottom .notification:not(:first-child) {\n  margin-bottom: 1.5rem;\n}\n.notices.has-custom-container {\n  position: absolute;\n}\n@media screen and (max-width: 768px) {\n  .notices {\n    padding: 0;\n    position: fixed !important;\n  }\n}\n\n.notification .progress-wrapper {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n.b-numberinput.field {\n  margin-bottom: 0;\n}\n.b-numberinput.field.is-grouped div.control {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.b-numberinput.field.has-addons.is-expanded {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.b-numberinput input[type=number]::-webkit-inner-spin-button,\n.b-numberinput input[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n}\n.b-numberinput input[type=number] {\n  -moz-appearance: textfield;\n}\n.b-numberinput input[type=number] {\n  text-align: center;\n}\n.b-numberinput .button.is-rounded {\n  padding-left: 1em;\n  padding-right: 1em;\n}\n\n.pagination .pagination-next,\n.pagination .pagination-previous {\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n}\n.pagination .pagination-next.is-disabled,\n.pagination .pagination-previous.is-disabled {\n  pointer-events: none;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.pagination.is-simple {\n  justify-content: normal;\n}\n.pagination.is-simple.is-centered {\n  justify-content: center;\n}\n.pagination.is-simple.is-right {\n  justify-content: flex-end;\n}\n.pagination .is-current {\n  pointer-events: none;\n  cursor: not-allowed;\n}\n\n@media screen and (min-width: 769px), print {\n  .pagination.has-input .pagination-list {\n    order: 1;\n  }\n  .pagination.has-input .pagination-input {\n    order: 2;\n  }\n  .pagination.has-input .pagination-previous {\n    order: 3;\n  }\n  .pagination.has-input .pagination-next {\n    order: 4;\n  }\n  .pagination.has-input.is-centered .pagination-previous {\n    order: 1;\n  }\n  .pagination.has-input.is-centered .pagination-list {\n    order: 2;\n  }\n  .pagination.has-input.is-centered .pagination-input {\n    order: 3;\n  }\n  .pagination.has-input.is-centered .pagination-next {\n    order: 4;\n  }\n  .pagination.has-input.is-centered.is-input-right .pagination-previous {\n    order: 1;\n  }\n  .pagination.has-input.is-centered.is-input-right .pagination-list {\n    order: 2;\n  }\n  .pagination.has-input.is-centered.is-input-right .pagination-next {\n    order: 3;\n  }\n  .pagination.has-input.is-centered.is-input-right .pagination-input {\n    order: 4;\n  }\n  .pagination.has-input.is-centered.is-input-left .pagination-input {\n    order: 1;\n  }\n  .pagination.has-input.is-centered.is-input-left .pagination-previous {\n    order: 2;\n  }\n  .pagination.has-input.is-centered.is-input-left .pagination-list {\n    order: 3;\n  }\n  .pagination.has-input.is-centered.is-input-left .pagination-next {\n    order: 4;\n  }\n  .pagination.has-input.is-right .pagination-previous {\n    order: 1;\n  }\n  .pagination.has-input.is-right .pagination-next {\n    order: 2;\n  }\n  .pagination.has-input.is-right .pagination-input {\n    order: 3;\n  }\n  .pagination.has-input.is-right .pagination-list {\n    order: 4;\n  }\n  .pagination.has-input.is-right.is-input-right .pagination-previous {\n    order: 1;\n  }\n  .pagination.has-input.is-right.is-input-right .pagination-next {\n    order: 2;\n  }\n  .pagination.has-input.is-right.is-input-right .pagination-list {\n    order: 3;\n  }\n  .pagination.has-input.is-right.is-input-right .pagination-input {\n    order: 4;\n  }\n  .pagination.has-input.is-right.is-input-left .pagination-input {\n    order: 1;\n  }\n  .pagination.has-input.is-right.is-input-left .pagination-previous {\n    order: 2;\n  }\n  .pagination.has-input.is-right.is-input-left .pagination-next {\n    order: 3;\n  }\n  .pagination.has-input.is-right.is-input-left .pagination-list {\n    order: 4;\n  }\n  .pagination.has-input.is-input-right .pagination-list {\n    order: 1;\n  }\n  .pagination.has-input.is-input-right .pagination-previous {\n    order: 2;\n  }\n  .pagination.has-input.is-input-right .pagination-next {\n    order: 3;\n  }\n  .pagination.has-input.is-input-right .pagination-input {\n    order: 4;\n  }\n  .pagination.has-input.is-input-left .pagination-input {\n    order: 1;\n  }\n  .pagination.has-input.is-input-left .pagination-list {\n    order: 2;\n  }\n  .pagination.has-input.is-input-left .pagination-previous {\n    order: 3;\n  }\n  .pagination.has-input.is-input-left .pagination-next {\n    order: 4;\n  }\n}\n.progress-wrapper {\n  position: relative;\n  overflow: hidden;\n}\n.progress-wrapper:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n.progress-wrapper .progress-value {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: calc(1rem / 1.5);\n  line-height: 1rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.7);\n  white-space: nowrap;\n}\n.progress-wrapper .progress, .progress-wrapper .progress-wrapper.is-not-native, .progress-wrapper .progress-bar {\n  margin-bottom: 0;\n}\n.progress-wrapper .progress.is-small + .progress-value, .progress-wrapper .is-small.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress.is-small .progress-value, .progress-wrapper .is-small.progress-wrapper.is-not-native .progress-value, .progress-wrapper .progress-bar.is-small + .progress-value, .progress-wrapper .progress-bar.is-small .progress-value {\n  font-size: calc(0.75rem / 1.5);\n  line-height: 0.75rem;\n}\n.progress-wrapper .progress.is-medium + .progress-value, .progress-wrapper .is-medium.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress.is-medium .progress-value, .progress-wrapper .is-medium.progress-wrapper.is-not-native .progress-value, .progress-wrapper .progress-bar.is-medium + .progress-value, .progress-wrapper .progress-bar.is-medium .progress-value {\n  font-size: calc(1.25rem / 1.5);\n  line-height: 1.25rem;\n}\n.progress-wrapper .progress.is-large + .progress-value, .progress-wrapper .is-large.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress.is-large .progress-value, .progress-wrapper .is-large.progress-wrapper.is-not-native .progress-value, .progress-wrapper .progress-bar.is-large + .progress-value, .progress-wrapper .progress-bar.is-large .progress-value {\n  font-size: calc(1.5rem / 1.5);\n  line-height: 1.5rem;\n}\n.progress-wrapper .progress::-webkit-progress-value, .progress-wrapper .progress-wrapper.is-not-native::-webkit-progress-value, .progress-wrapper .progress-bar::-webkit-progress-value {\n  transition: width 0.5s ease;\n}\n.progress-wrapper .progress.is-more-than-half + .progress-value, .progress-wrapper .is-more-than-half.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half + .progress-value {\n  color: #fff;\n}\n.progress-wrapper .progress.is-more-than-half.is-white + .progress-value, .progress-wrapper .is-more-than-half.is-white.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-white + .progress-value {\n  color: #0a0a0a;\n}\n.progress-wrapper .progress.is-more-than-half.is-black + .progress-value, .progress-wrapper .is-more-than-half.is-black.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-black + .progress-value {\n  color: white;\n}\n.progress-wrapper .progress.is-more-than-half.is-light + .progress-value, .progress-wrapper .is-more-than-half.is-light.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-light + .progress-value {\n  color: rgba(0, 0, 0, 0.7);\n}\n.progress-wrapper .progress.is-more-than-half.is-dark + .progress-value, .progress-wrapper .is-more-than-half.is-dark.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-dark + .progress-value {\n  color: #fff;\n}\n.progress-wrapper .progress.is-more-than-half.is-primary + .progress-value, .progress-wrapper .is-more-than-half.is-primary.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-primary + .progress-value {\n  color: #fff;\n}\n.progress-wrapper .progress.is-more-than-half.is-link + .progress-value, .progress-wrapper .is-more-than-half.is-link.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-link + .progress-value {\n  color: #fff;\n}\n.progress-wrapper .progress.is-more-than-half.is-info + .progress-value, .progress-wrapper .is-more-than-half.is-info.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-info + .progress-value {\n  color: #fff;\n}\n.progress-wrapper .progress.is-more-than-half.is-success + .progress-value, .progress-wrapper .is-more-than-half.is-success.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-success + .progress-value {\n  color: #fff;\n}\n.progress-wrapper .progress.is-more-than-half.is-warning + .progress-value, .progress-wrapper .is-more-than-half.is-warning.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-warning + .progress-value {\n  color: rgba(0, 0, 0, 0.7);\n}\n.progress-wrapper .progress.is-more-than-half.is-danger + .progress-value, .progress-wrapper .is-more-than-half.is-danger.progress-wrapper.is-not-native + .progress-value, .progress-wrapper .progress-bar.is-more-than-half.is-danger + .progress-value {\n  color: #fff;\n}\n.progress-wrapper .progress.is-squared, .progress-wrapper .is-squared.progress-wrapper.is-not-native, .progress-wrapper .progress-bar.is-squared {\n  border-radius: 0;\n}\n.progress-wrapper.is-not-native {\n  white-space: nowrap;\n  background-color: #ededed;\n  border-radius: 9999px;\n}\n.progress-wrapper.is-not-native .progress-bar {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  height: 100%;\n  background-color: #4a4a4a;\n}\n.progress-wrapper.is-not-native .progress-bar .progress-value {\n  color: #fff;\n}\n.progress-wrapper.is-not-native .progress-bar.is-white {\n  background-color: white;\n}\n.progress-wrapper.is-not-native .progress-bar.is-white .progress-value {\n  color: #0a0a0a;\n}\n.progress-wrapper.is-not-native .progress-bar.is-black {\n  background-color: #0a0a0a;\n}\n.progress-wrapper.is-not-native .progress-bar.is-black .progress-value {\n  color: white;\n}\n.progress-wrapper.is-not-native .progress-bar.is-light {\n  background-color: whitesmoke;\n}\n.progress-wrapper.is-not-native .progress-bar.is-light .progress-value {\n  color: rgba(0, 0, 0, 0.7);\n}\n.progress-wrapper.is-not-native .progress-bar.is-dark {\n  background-color: #363636;\n}\n.progress-wrapper.is-not-native .progress-bar.is-dark .progress-value {\n  color: #fff;\n}\n.progress-wrapper.is-not-native .progress-bar.is-primary {\n  background-color: #7957d5;\n}\n.progress-wrapper.is-not-native .progress-bar.is-primary .progress-value {\n  color: #fff;\n}\n.progress-wrapper.is-not-native .progress-bar.is-link {\n  background-color: #7957d5;\n}\n.progress-wrapper.is-not-native .progress-bar.is-link .progress-value {\n  color: #fff;\n}\n.progress-wrapper.is-not-native .progress-bar.is-info {\n  background-color: #167df0;\n}\n.progress-wrapper.is-not-native .progress-bar.is-info .progress-value {\n  color: #fff;\n}\n.progress-wrapper.is-not-native .progress-bar.is-success {\n  background-color: #48c78e;\n}\n.progress-wrapper.is-not-native .progress-bar.is-success .progress-value {\n  color: #fff;\n}\n.progress-wrapper.is-not-native .progress-bar.is-warning {\n  background-color: #ffe08a;\n}\n.progress-wrapper.is-not-native .progress-bar.is-warning .progress-value {\n  color: rgba(0, 0, 0, 0.7);\n}\n.progress-wrapper.is-not-native .progress-bar.is-danger {\n  background-color: #f14668;\n}\n.progress-wrapper.is-not-native .progress-bar.is-danger .progress-value {\n  color: #fff;\n}\n.progress-wrapper.is-squared {\n  border-radius: 0;\n}\n\n.b-radio.radio {\n  outline: none;\n  display: inline-flex;\n  align-items: center;\n}\n.b-radio.radio:not(.button) {\n  margin-right: 0.5em;\n}\n.b-radio.radio:not(.button) + .radio:last-child {\n  margin-right: 0;\n}\n.b-radio.radio + .radio {\n  margin-left: 0;\n}\n.b-radio.radio input[type=radio] {\n  position: absolute;\n  left: 0;\n  opacity: 0;\n  outline: none;\n  z-index: -1;\n}\n.b-radio.radio input[type=radio] + .check {\n  display: flex;\n  flex-shrink: 0;\n  position: relative;\n  cursor: pointer;\n  width: 1.25em;\n  height: 1.25em;\n  transition: background 150ms ease-out;\n  border-radius: 50%;\n  border: 2px solid #7a7a7a;\n}\n.b-radio.radio input[type=radio] + .check:before {\n  content: \"\";\n  display: flex;\n  position: absolute;\n  left: 50%;\n  margin-left: calc(-1.25em * 0.5);\n  bottom: 50%;\n  margin-bottom: calc(-1.25em * 0.5);\n  width: 1.25em;\n  height: 1.25em;\n  transition: transform 150ms ease-out;\n  border-radius: 50%;\n  transform: scale(0);\n  background-color: #7957d5;\n}\n.b-radio.radio input[type=radio] + .check.is-white:before {\n  background: white;\n}\n.b-radio.radio input[type=radio] + .check.is-black:before {\n  background: #0a0a0a;\n}\n.b-radio.radio input[type=radio] + .check.is-light:before {\n  background: whitesmoke;\n}\n.b-radio.radio input[type=radio] + .check.is-dark:before {\n  background: #363636;\n}\n.b-radio.radio input[type=radio] + .check.is-primary:before {\n  background: #7957d5;\n}\n.b-radio.radio input[type=radio] + .check.is-link:before {\n  background: #7957d5;\n}\n.b-radio.radio input[type=radio] + .check.is-info:before {\n  background: #167df0;\n}\n.b-radio.radio input[type=radio] + .check.is-success:before {\n  background: #48c78e;\n}\n.b-radio.radio input[type=radio] + .check.is-warning:before {\n  background: #ffe08a;\n}\n.b-radio.radio input[type=radio] + .check.is-danger:before {\n  background: #f14668;\n}\n.b-radio.radio input[type=radio]:checked + .check {\n  border-color: #7957d5;\n}\n.b-radio.radio input[type=radio]:checked + .check.is-white {\n  border-color: white;\n}\n.b-radio.radio input[type=radio]:checked + .check.is-black {\n  border-color: #0a0a0a;\n}\n.b-radio.radio input[type=radio]:checked + .check.is-light {\n  border-color: whitesmoke;\n}\n.b-radio.radio input[type=radio]:checked + .check.is-dark {\n  border-color: #363636;\n}\n.b-radio.radio input[type=radio]:checked + .check.is-primary {\n  border-color: #7957d5;\n}\n.b-radio.radio input[type=radio]:checked + .check.is-link {\n  border-color: #7957d5;\n}\n.b-radio.radio input[type=radio]:checked + .check.is-info {\n  border-color: #167df0;\n}\n.b-radio.radio input[type=radio]:checked + .check.is-success {\n  border-color: #48c78e;\n}\n.b-radio.radio input[type=radio]:checked + .check.is-warning {\n  border-color: #ffe08a;\n}\n.b-radio.radio input[type=radio]:checked + .check.is-danger {\n  border-color: #f14668;\n}\n.b-radio.radio input[type=radio]:checked + .check:before {\n  transform: scale(0.5);\n}\n.b-radio.radio input[type=radio]:focus + .check {\n  box-shadow: 0 0 0.5em rgba(122, 122, 122, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check {\n  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check.is-white {\n  box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check.is-black {\n  box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check.is-light {\n  box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check.is-dark {\n  box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check.is-primary {\n  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check.is-link {\n  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check.is-info {\n  box-shadow: 0 0 0.5em rgba(22, 125, 240, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check.is-success {\n  box-shadow: 0 0 0.5em rgba(72, 199, 142, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check.is-warning {\n  box-shadow: 0 0 0.5em rgba(255, 224, 138, 0.8);\n}\n.b-radio.radio input[type=radio]:focus:checked + .check.is-danger {\n  box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.8);\n}\n.b-radio.radio .control-label {\n  padding-left: calc(0.75em - 1px);\n}\n.b-radio.radio.button {\n  display: flex;\n}\n.b-radio.radio.button.is-selected {\n  z-index: 1;\n}\n.b-radio.radio[disabled] {\n  opacity: 0.5;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check {\n  border-color: #7957d5;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-white {\n  border-color: white;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-black {\n  border-color: #0a0a0a;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-light {\n  border-color: whitesmoke;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-dark {\n  border-color: #363636;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-primary {\n  border-color: #7957d5;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-link {\n  border-color: #7957d5;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-info {\n  border-color: #167df0;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-success {\n  border-color: #48c78e;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-warning {\n  border-color: #ffe08a;\n}\n.b-radio.radio:hover input[type=radio]:not(:disabled) + .check.is-danger {\n  border-color: #f14668;\n}\n.b-radio.radio.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.b-radio.radio.is-medium {\n  font-size: 1.25rem;\n}\n.b-radio.radio.is-large {\n  font-size: 1.5rem;\n}\n\n.rate {\n  align-items: center;\n  display: flex;\n}\n.rate:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.rate.is-spaced .rate-item:not(:last-child) {\n  margin-right: 0.25rem;\n}\n.rate.is-disabled .rate-item {\n  cursor: initial;\n}\n.rate.is-disabled .rate-item:hover {\n  transform: none;\n}\n.rate.is-rtl .rate-item {\n  order: 1;\n}\n.rate.is-rtl .rate-text {\n  margin-left: 0;\n  margin-right: 0.35rem;\n}\n.rate .rate-item {\n  cursor: pointer;\n  display: inline-flex;\n  position: relative;\n  transition: all 0.3s;\n}\n.rate .rate-item:hover {\n  transform: scale(1.1);\n}\n.rate .rate-item.set-on .icon, .rate .rate-item.set-half .is-half {\n  color: #ffd970;\n}\n.rate .rate-item.set-half .is-half {\n  position: absolute;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n}\n.rate .icon {\n  color: #dbdbdb;\n  line-height: 1;\n  pointer-events: none;\n  width: inherit;\n}\n.rate .is-half > i {\n  position: absolute;\n  left: 0;\n}\n.rate .rate-text {\n  font-size: calc(1rem / 1.25);\n  margin-left: 0.35rem;\n}\n.rate .rate-text.is-small {\n  font-size: calc(0.75rem / 1.25);\n}\n.rate .rate-text.is-medium {\n  font-size: calc(1.25rem / 1.25);\n}\n.rate .rate-text.is-large {\n  font-size: calc(1.5rem / 1.25);\n}\n\n.select select {\n  text-rendering: auto !important;\n  padding-right: 2.5em;\n}\n.select select option {\n  color: #4a4a4a;\n  padding: calc(0.5em - 1px) calc(0.75em - 1px);\n}\n.select select option:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.select select optgroup {\n  color: #b5b5b5;\n  font-weight: 400;\n  font-style: normal;\n  padding: 0.25em 0;\n}\n.select select[disabled] {\n  opacity: 1;\n}\n.select.is-empty select {\n  color: rgba(122, 122, 122, 0.7);\n}\n.select.is-loading::after {\n  top: calc(50% - (1em * 0.5));\n  right: calc((2.5em * 0.5) - .5em);\n}\n\n.b-skeleton {\n  display: inline-flex;\n  flex-direction: column;\n  vertical-align: middle;\n  width: 100%;\n}\n.b-skeleton > .b-skeleton-item {\n  background: linear-gradient(90deg, #dbdbdb 25%, rgba(219, 219, 219, 0.5) 50%, #dbdbdb 75%);\n  background-size: 400% 100%;\n  width: 100%;\n}\n.b-skeleton > .b-skeleton-item.is-rounded {\n  border-radius: 4px;\n}\n.b-skeleton > .b-skeleton-item::after {\n  content: \" \";\n}\n.b-skeleton > .b-skeleton-item + .b-skeleton-item {\n  margin-top: 0.5rem;\n}\n.b-skeleton.is-animated > .b-skeleton-item {\n  animation: skeleton-loading 1.5s infinite;\n}\n.b-skeleton.is-centered {\n  align-items: center;\n}\n.b-skeleton.is-right {\n  align-items: flex-end;\n}\n.b-skeleton + .b-skeleton {\n  margin-top: 0.5rem;\n}\n.b-skeleton > .b-skeleton-item {\n  line-height: 1rem;\n}\n.b-skeleton.is-small > .b-skeleton-item {\n  line-height: 0.75rem;\n}\n.b-skeleton.is-medium > .b-skeleton-item {\n  line-height: 1.25rem;\n}\n.b-skeleton.is-large > .b-skeleton-item {\n  line-height: 1.5rem;\n}\n\n@keyframes skeleton-loading {\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\n.b-sidebar .sidebar-content {\n  background-color: whitesmoke;\n  box-shadow: 5px 0px 13px 3px rgba(10, 10, 10, 0.1);\n  width: 260px;\n  z-index: 39;\n}\n.b-sidebar .sidebar-content.is-white {\n  background-color: white;\n}\n.b-sidebar .sidebar-content.is-black {\n  background-color: #0a0a0a;\n}\n.b-sidebar .sidebar-content.is-light {\n  background-color: whitesmoke;\n}\n.b-sidebar .sidebar-content.is-dark {\n  background-color: #363636;\n}\n.b-sidebar .sidebar-content.is-primary {\n  background-color: #7957d5;\n}\n.b-sidebar .sidebar-content.is-link {\n  background-color: #7957d5;\n}\n.b-sidebar .sidebar-content.is-info {\n  background-color: #167df0;\n}\n.b-sidebar .sidebar-content.is-success {\n  background-color: #48c78e;\n}\n.b-sidebar .sidebar-content.is-warning {\n  background-color: #ffe08a;\n}\n.b-sidebar .sidebar-content.is-danger {\n  background-color: #f14668;\n}\n.b-sidebar .sidebar-content.is-fixed {\n  position: fixed;\n  left: 0;\n  top: 0;\n}\n.b-sidebar .sidebar-content.is-fixed.is-right {\n  left: auto;\n  right: 0;\n}\n.b-sidebar .sidebar-content.is-absolute {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.b-sidebar .sidebar-content.is-absolute.is-right {\n  left: auto;\n  right: 0;\n}\n.b-sidebar .sidebar-content.is-mini {\n  width: 80px;\n}\n.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover:not(.is-mini-delayed) {\n  transition: width 150ms ease-out;\n}\n.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover:not(.is-mini-delayed):not(.is-fullwidth) {\n  width: 260px;\n}\n.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover:not(.is-mini-delayed):not(.is-fullwidth).is-mini-expand-fixed {\n  position: fixed;\n}\n.b-sidebar .sidebar-content.is-static {\n  position: static;\n}\n.b-sidebar .sidebar-content.is-absolute, .b-sidebar .sidebar-content.is-static {\n  transition: width 150ms ease-out;\n}\n.b-sidebar .sidebar-content.is-fullwidth {\n  width: 100%;\n  max-width: 100%;\n}\n.b-sidebar .sidebar-content.is-fullheight {\n  height: 100%;\n  max-height: 100%;\n  overflow: hidden;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  align-content: stretch;\n}\n@media screen and (max-width: 768px) {\n  .b-sidebar .sidebar-content.is-mini-mobile {\n    width: 80px;\n  }\n  .b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:hover:not(.is-fullwidth-mobile) {\n    width: 260px;\n  }\n  .b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:hover:not(.is-fullwidth-mobile).is-mini-expand-fixed {\n    position: fixed;\n  }\n  .b-sidebar .sidebar-content.is-hidden-mobile {\n    width: 0;\n    height: 0;\n    overflow: hidden;\n  }\n  .b-sidebar .sidebar-content.is-fullwidth-mobile {\n    width: 100%;\n    max-width: 100%;\n  }\n}\n.b-sidebar .sidebar-background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: rgba(10, 10, 10, 0.86);\n  position: fixed;\n  z-index: 38;\n}\n\n.b-slider {\n  margin: 1em 0;\n  background: transparent;\n  width: 100%;\n}\n.b-slider .b-slider-track {\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  background: #dbdbdb;\n  border-radius: 4px;\n}\n.b-slider .b-slider-fill {\n  position: absolute;\n  height: 100%;\n  box-shadow: 0px 0px 0px #7a7a7a;\n  background: #dbdbdb;\n  border-radius: 4px;\n  border: 0px solid #7a7a7a;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.b-slider .b-slider-thumb-wrapper {\n  display: inline-flex;\n  align-items: center;\n  position: absolute;\n  cursor: grab;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  flex-direction: column;\n}\n.b-slider .b-slider-thumb-wrapper .b-slider-thumb {\n  box-shadow: none;\n  border: 1px solid #b5b5b5;\n  border-radius: 4px;\n  background: white;\n}\n.b-slider .b-slider-thumb-wrapper .b-slider-thumb:focus {\n  transform: scale(1.25);\n}\n.b-slider .b-slider-thumb-wrapper.is-dragging {\n  cursor: grabbing;\n}\n.b-slider .b-slider-thumb-wrapper.is-dragging .b-slider-thumb {\n  transform: scale(1.25);\n}\n.b-slider .b-slider-thumb-wrapper.has-indicator .b-slider-thumb {\n  padding: 16px 10px;\n  display: flex;\n  align-items: center;\n  width: auto;\n}\n.b-slider.slider-focus {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  margin-top: -20px;\n  margin-bottom: -20px;\n  cursor: pointer;\n}\n.b-slider.is-rounded .b-slider-thumb {\n  border-radius: 9999px;\n}\n.b-slider.is-disabled .b-slider-track {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.b-slider.is-disabled .b-slider-thumb-wrapper {\n  cursor: not-allowed;\n}\n.b-slider.is-disabled .b-slider-thumb-wrapper .b-slider-thumb {\n  transform: scale(1);\n}\n.b-slider .b-slider-track {\n  height: 0.5rem;\n}\n.b-slider .b-slider-thumb {\n  height: 1rem;\n  width: 1rem;\n}\n.b-slider .b-slider-tick {\n  height: 0.25rem;\n}\n.b-slider .b-slider-tick-label {\n  font-size: 0.75rem;\n  position: absolute;\n  top: calc(0.5rem * 0.5 + 2px);\n  left: 50%;\n  transform: translateX(-50%);\n}\n.b-slider.is-small .b-slider-track {\n  height: 0.375rem;\n}\n.b-slider.is-small .b-slider-thumb {\n  height: 0.75rem;\n  width: 0.75rem;\n}\n.b-slider.is-small .b-slider-tick {\n  height: 0.1875rem;\n}\n.b-slider.is-small .b-slider-tick-label {\n  font-size: 0.75rem;\n  position: absolute;\n  top: calc(0.375rem * 0.5 + 2px);\n  left: 50%;\n  transform: translateX(-50%);\n}\n.b-slider.is-medium .b-slider-track {\n  height: 0.625rem;\n}\n.b-slider.is-medium .b-slider-thumb {\n  height: 1.25rem;\n  width: 1.25rem;\n}\n.b-slider.is-medium .b-slider-tick {\n  height: 0.3125rem;\n}\n.b-slider.is-medium .b-slider-tick-label {\n  font-size: 0.75rem;\n  position: absolute;\n  top: calc(0.625rem * 0.5 + 2px);\n  left: 50%;\n  transform: translateX(-50%);\n}\n.b-slider.is-large .b-slider-track {\n  height: 0.75rem;\n}\n.b-slider.is-large .b-slider-thumb {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n.b-slider.is-large .b-slider-tick {\n  height: 0.375rem;\n}\n.b-slider.is-large .b-slider-tick-label {\n  font-size: 0.75rem;\n  position: absolute;\n  top: calc(0.75rem * 0.5 + 2px);\n  left: 50%;\n  transform: translateX(-50%);\n}\n.b-slider.is-white .b-slider-fill {\n  background: white !important;\n}\n.b-slider.is-black .b-slider-fill {\n  background: #0a0a0a !important;\n}\n.b-slider.is-light .b-slider-fill {\n  background: whitesmoke !important;\n}\n.b-slider.is-dark .b-slider-fill {\n  background: #363636 !important;\n}\n.b-slider.is-primary .b-slider-fill {\n  background: #7957d5 !important;\n}\n.b-slider.is-link .b-slider-fill {\n  background: #7957d5 !important;\n}\n.b-slider.is-info .b-slider-fill {\n  background: #167df0 !important;\n}\n.b-slider.is-success .b-slider-fill {\n  background: #48c78e !important;\n}\n.b-slider.is-warning .b-slider-fill {\n  background: #ffe08a !important;\n}\n.b-slider.is-danger .b-slider-fill {\n  background: #f14668 !important;\n}\n.b-slider .b-slider-tick {\n  position: absolute;\n  width: 3px;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  background: #b5b5b5;\n  border-radius: 4px;\n}\n.b-slider .b-slider-tick.is-tick-hidden {\n  background: transparent;\n}\n\n/*\nThis project is based on\n\"bulma-steps\" (https://github.com/Wikiki/bulma-steps) by\nWikiki (https://github.com/Wikiki) licensed under\nMIT (https://github.com/Wikiki/bulma-steps/blob/master/LICENSE)\n*/\n.b-steps .steps .step-items {\n  display: flex;\n  flex-wrap: wrap;\n}\n.b-steps .steps .step-items .step-item {\n  margin-top: 0;\n  position: relative;\n  flex-grow: 1;\n  flex-basis: 1em;\n}\n.b-steps .steps .step-items .step-item .step-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  color: #4a4a4a;\n}\n.b-steps .steps .step-items .step-item .step-link:not(.is-clickable) {\n  cursor: not-allowed;\n}\n.b-steps .steps .step-items .step-item .step-marker {\n  align-items: center;\n  display: flex;\n  border-radius: 4px;\n  font-weight: 700;\n  justify-content: center;\n  background: #b5b5b5;\n  color: white;\n  border: 0.2em solid #fff;\n  z-index: 1;\n  overflow: hidden;\n}\n.b-steps .steps .step-items .step-item.is-white::before, .b-steps .steps .step-items .step-item.is-white::after {\n  background: linear-gradient(to left, #dbdbdb 50%, white 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-white.is-active .step-marker {\n  background-color: white;\n  border-color: white;\n  color: white;\n}\n.b-steps .steps .step-items .step-item.is-white.is-active::before, .b-steps .steps .step-items .step-item.is-white.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-white.is-previous .step-marker {\n  color: #0a0a0a;\n  background-color: white;\n}\n.b-steps .steps .step-items .step-item.is-white.is-previous::before, .b-steps .steps .step-items .step-item.is-white.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-black::before, .b-steps .steps .step-items .step-item.is-black::after {\n  background: linear-gradient(to left, #dbdbdb 50%, #0a0a0a 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-black.is-active .step-marker {\n  background-color: white;\n  border-color: #0a0a0a;\n  color: #0a0a0a;\n}\n.b-steps .steps .step-items .step-item.is-black.is-active::before, .b-steps .steps .step-items .step-item.is-black.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-black.is-previous .step-marker {\n  color: white;\n  background-color: #0a0a0a;\n}\n.b-steps .steps .step-items .step-item.is-black.is-previous::before, .b-steps .steps .step-items .step-item.is-black.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-light::before, .b-steps .steps .step-items .step-item.is-light::after {\n  background: linear-gradient(to left, #dbdbdb 50%, whitesmoke 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-light.is-active .step-marker {\n  background-color: white;\n  border-color: whitesmoke;\n  color: whitesmoke;\n}\n.b-steps .steps .step-items .step-item.is-light.is-active::before, .b-steps .steps .step-items .step-item.is-light.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-light.is-previous .step-marker {\n  color: rgba(0, 0, 0, 0.7);\n  background-color: whitesmoke;\n}\n.b-steps .steps .step-items .step-item.is-light.is-previous::before, .b-steps .steps .step-items .step-item.is-light.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-dark::before, .b-steps .steps .step-items .step-item.is-dark::after {\n  background: linear-gradient(to left, #dbdbdb 50%, #363636 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-dark.is-active .step-marker {\n  background-color: white;\n  border-color: #363636;\n  color: #363636;\n}\n.b-steps .steps .step-items .step-item.is-dark.is-active::before, .b-steps .steps .step-items .step-item.is-dark.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-dark.is-previous .step-marker {\n  color: #fff;\n  background-color: #363636;\n}\n.b-steps .steps .step-items .step-item.is-dark.is-previous::before, .b-steps .steps .step-items .step-item.is-dark.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-primary::before, .b-steps .steps .step-items .step-item.is-primary::after {\n  background: linear-gradient(to left, #dbdbdb 50%, #7957d5 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-primary.is-active .step-marker {\n  background-color: white;\n  border-color: #7957d5;\n  color: #7957d5;\n}\n.b-steps .steps .step-items .step-item.is-primary.is-active::before, .b-steps .steps .step-items .step-item.is-primary.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-primary.is-previous .step-marker {\n  color: #fff;\n  background-color: #7957d5;\n}\n.b-steps .steps .step-items .step-item.is-primary.is-previous::before, .b-steps .steps .step-items .step-item.is-primary.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-link::before, .b-steps .steps .step-items .step-item.is-link::after {\n  background: linear-gradient(to left, #dbdbdb 50%, #7957d5 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-link.is-active .step-marker {\n  background-color: white;\n  border-color: #7957d5;\n  color: #7957d5;\n}\n.b-steps .steps .step-items .step-item.is-link.is-active::before, .b-steps .steps .step-items .step-item.is-link.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-link.is-previous .step-marker {\n  color: #fff;\n  background-color: #7957d5;\n}\n.b-steps .steps .step-items .step-item.is-link.is-previous::before, .b-steps .steps .step-items .step-item.is-link.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-info::before, .b-steps .steps .step-items .step-item.is-info::after {\n  background: linear-gradient(to left, #dbdbdb 50%, #167df0 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-info.is-active .step-marker {\n  background-color: white;\n  border-color: #167df0;\n  color: #167df0;\n}\n.b-steps .steps .step-items .step-item.is-info.is-active::before, .b-steps .steps .step-items .step-item.is-info.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-info.is-previous .step-marker {\n  color: #fff;\n  background-color: #167df0;\n}\n.b-steps .steps .step-items .step-item.is-info.is-previous::before, .b-steps .steps .step-items .step-item.is-info.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-success::before, .b-steps .steps .step-items .step-item.is-success::after {\n  background: linear-gradient(to left, #dbdbdb 50%, #48c78e 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-success.is-active .step-marker {\n  background-color: white;\n  border-color: #48c78e;\n  color: #48c78e;\n}\n.b-steps .steps .step-items .step-item.is-success.is-active::before, .b-steps .steps .step-items .step-item.is-success.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-success.is-previous .step-marker {\n  color: #fff;\n  background-color: #48c78e;\n}\n.b-steps .steps .step-items .step-item.is-success.is-previous::before, .b-steps .steps .step-items .step-item.is-success.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-warning::before, .b-steps .steps .step-items .step-item.is-warning::after {\n  background: linear-gradient(to left, #dbdbdb 50%, #ffe08a 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-warning.is-active .step-marker {\n  background-color: white;\n  border-color: #ffe08a;\n  color: #ffe08a;\n}\n.b-steps .steps .step-items .step-item.is-warning.is-active::before, .b-steps .steps .step-items .step-item.is-warning.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-warning.is-previous .step-marker {\n  color: rgba(0, 0, 0, 0.7);\n  background-color: #ffe08a;\n}\n.b-steps .steps .step-items .step-item.is-warning.is-previous::before, .b-steps .steps .step-items .step-item.is-warning.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-danger::before, .b-steps .steps .step-items .step-item.is-danger::after {\n  background: linear-gradient(to left, #dbdbdb 50%, #f14668 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-danger.is-active .step-marker {\n  background-color: white;\n  border-color: #f14668;\n  color: #f14668;\n}\n.b-steps .steps .step-items .step-item.is-danger.is-active::before, .b-steps .steps .step-items .step-item.is-danger.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-danger.is-previous .step-marker {\n  color: #fff;\n  background-color: #f14668;\n}\n.b-steps .steps .step-items .step-item.is-danger.is-previous::before, .b-steps .steps .step-items .step-item.is-danger.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item .step-marker {\n  color: white;\n}\n.b-steps .steps .step-items .step-item .step-details {\n  text-align: center;\n  z-index: 1;\n}\n.b-steps .steps .step-items .step-item:not(:first-child), .b-steps .steps .step-items .step-item:only-child {\n  flex-shrink: 1;\n}\n.b-steps .steps .step-items .step-item:not(:first-child)::before, .b-steps .steps .step-items .step-item:only-child::before {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: -50%;\n}\n.b-steps .steps .step-items .step-item:only-child::after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  height: 0.2em;\n  bottom: 0;\n}\n.b-steps .steps .step-items .step-item:only-child::before, .b-steps .steps .step-items .step-item:only-child::after {\n  width: 25%;\n  left: 50%;\n}\n.b-steps .steps .step-items .step-item:only-child::before {\n  right: 50%;\n  left: auto;\n}\n.b-steps .steps .step-items .step-item::before, .b-steps .steps .step-items .step-item::after {\n  background: linear-gradient(to left, #dbdbdb 50%, #7957d5 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n}\n.b-steps .steps .step-items .step-item.is-active .step-link {\n  cursor: default;\n}\n.b-steps .steps .step-items .step-item.is-active .step-marker {\n  background-color: white;\n  border-color: #7957d5;\n  color: #7957d5;\n}\n.b-steps .steps .step-items .step-item.is-active::before, .b-steps .steps .step-items .step-item.is-active::after {\n  background-position: left bottom;\n}\n.b-steps .steps .step-items .step-item.is-previous .step-marker {\n  color: white;\n  background-color: #7957d5;\n}\n.b-steps .steps .step-items .step-item.is-previous::before, .b-steps .steps .step-items .step-item.is-previous::after {\n  background-position: left bottom;\n}\n.b-steps .steps + .step-content {\n  position: relative;\n  overflow: visible;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n}\n.b-steps .steps + .step-content .step-item {\n  flex-shrink: 0;\n  flex-basis: auto;\n}\n.b-steps .steps + .step-content .step-item:focus {\n  outline: none;\n}\n.b-steps .steps + .step-content.is-transitioning {\n  overflow: hidden;\n}\n.b-steps .steps.is-rounded .step-item .step-marker {\n  border-radius: 9999px;\n}\n.b-steps .steps.is-animated .step-item:not(:first-child)::before, .b-steps .steps.is-animated .step-item:only-child::before {\n  transition: background 150ms ease-out;\n}\n.b-steps .steps.has-label-right .step-items .step-item .step-link, .b-steps .steps.has-label-left .step-items .step-item .step-link {\n  flex-direction: row;\n}\n.b-steps .steps.has-label-right .step-items .step-item .step-link > .step-details, .b-steps .steps.has-label-left .step-items .step-item .step-link > .step-details {\n  background-color: white;\n  padding: 0.2em;\n}\n.b-steps .steps.has-label-left .step-items .step-item .step-link {\n  flex-direction: row-reverse;\n}\n.b-steps .steps {\n  font-size: 1rem;\n  min-height: 2rem;\n}\n.b-steps .steps .step-items .step-item .step-marker {\n  height: 2rem;\n  width: 2rem;\n}\n.b-steps .steps .step-items .step-item .step-marker .icon *, .b-steps .steps .step-items .step-item .step-marker .icon *:before {\n  font-size: 1rem;\n}\n.b-steps .steps .step-items .step-item .step-details .step-title {\n  font-size: 1.2rem;\n  font-weight: 600;\n  line-height: 1rem;\n}\n.b-steps .steps .step-items .step-item:not(:first-child)::before, .b-steps .steps .step-items .step-item:only-child::before {\n  height: 0.2em;\n  top: 1rem;\n}\n.b-steps .steps .step-items .step-item:only-child::after {\n  top: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .b-steps .steps .step-items .step-item::before, .b-steps .steps .step-items .step-item::after, .b-steps .steps .step-items .step-item:not(:first-child)::before {\n    top: 1rem;\n  }\n}\n.b-steps.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-vertical > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-vertical > .steps.has-label-right .step-items .step-item:only-child::after {\n  left: calc(1rem - 0.1em);\n}\n.b-steps.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-vertical > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-vertical > .steps.has-label-left .step-items .step-item:only-child::after {\n  left: auto;\n  right: calc(1rem - 0.1em);\n}\n.b-steps.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::after {\n  left: calc(1rem - 0.1em);\n}\n.b-steps.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::after {\n  left: auto;\n  right: calc(1rem - 0.1em);\n}\n.b-steps.is-small .steps {\n  font-size: 0.75rem;\n  min-height: 1.5rem;\n}\n.b-steps.is-small .steps .step-items .step-item .step-marker {\n  height: 1.5rem;\n  width: 1.5rem;\n}\n.b-steps.is-small .steps .step-items .step-item .step-marker .icon *, .b-steps.is-small .steps .step-items .step-item .step-marker .icon *:before {\n  font-size: 0.75rem;\n}\n.b-steps.is-small .steps .step-items .step-item .step-details .step-title {\n  font-size: 0.9rem;\n  font-weight: 600;\n  line-height: 0.75rem;\n}\n.b-steps.is-small .steps .step-items .step-item:not(:first-child)::before, .b-steps.is-small .steps .step-items .step-item:only-child::before {\n  height: 0.2em;\n  top: 0.75rem;\n}\n.b-steps.is-small .steps .step-items .step-item:only-child::after {\n  top: 0.75rem;\n}\n@media screen and (max-width: 768px) {\n  .b-steps.is-small .steps .step-items .step-item::before, .b-steps.is-small .steps .step-items .step-item::after, .b-steps.is-small .steps .step-items .step-item:not(:first-child)::before {\n    top: 0.75rem;\n  }\n}\n.b-steps.is-small.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-small.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-small.is-vertical > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-small.is-vertical > .steps.has-label-right .step-items .step-item:only-child::after {\n  left: calc(0.75rem - 0.1em);\n}\n.b-steps.is-small.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-small.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-small.is-vertical > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-small.is-vertical > .steps.has-label-left .step-items .step-item:only-child::after {\n  left: auto;\n  right: calc(0.75rem - 0.1em);\n}\n.b-steps.is-small.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-small.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-small.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-small.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::after {\n  left: calc(0.75rem - 0.1em);\n}\n.b-steps.is-small.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-small.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-small.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-small.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::after {\n  left: auto;\n  right: calc(0.75rem - 0.1em);\n}\n.b-steps.is-medium .steps {\n  font-size: 1.25rem;\n  min-height: 2.5rem;\n}\n.b-steps.is-medium .steps .step-items .step-item .step-marker {\n  height: 2.5rem;\n  width: 2.5rem;\n}\n.b-steps.is-medium .steps .step-items .step-item .step-marker .icon *, .b-steps.is-medium .steps .step-items .step-item .step-marker .icon *:before {\n  font-size: 1.25rem;\n}\n.b-steps.is-medium .steps .step-items .step-item .step-details .step-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  line-height: 1.25rem;\n}\n.b-steps.is-medium .steps .step-items .step-item:not(:first-child)::before, .b-steps.is-medium .steps .step-items .step-item:only-child::before {\n  height: 0.2em;\n  top: 1.25rem;\n}\n.b-steps.is-medium .steps .step-items .step-item:only-child::after {\n  top: 1.25rem;\n}\n@media screen and (max-width: 768px) {\n  .b-steps.is-medium .steps .step-items .step-item::before, .b-steps.is-medium .steps .step-items .step-item::after, .b-steps.is-medium .steps .step-items .step-item:not(:first-child)::before {\n    top: 1.25rem;\n  }\n}\n.b-steps.is-medium.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-medium.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-medium.is-vertical > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-medium.is-vertical > .steps.has-label-right .step-items .step-item:only-child::after {\n  left: calc(1.25rem - 0.1em);\n}\n.b-steps.is-medium.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-medium.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-medium.is-vertical > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-medium.is-vertical > .steps.has-label-left .step-items .step-item:only-child::after {\n  left: auto;\n  right: calc(1.25rem - 0.1em);\n}\n.b-steps.is-medium.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-medium.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-medium.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-medium.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::after {\n  left: calc(1.25rem - 0.1em);\n}\n.b-steps.is-medium.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-medium.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-medium.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-medium.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::after {\n  left: auto;\n  right: calc(1.25rem - 0.1em);\n}\n.b-steps.is-large .steps {\n  font-size: 1.5rem;\n  min-height: 3rem;\n}\n.b-steps.is-large .steps .step-items .step-item .step-marker {\n  height: 3rem;\n  width: 3rem;\n}\n.b-steps.is-large .steps .step-items .step-item .step-marker .icon *, .b-steps.is-large .steps .step-items .step-item .step-marker .icon *:before {\n  font-size: 1.5rem;\n}\n.b-steps.is-large .steps .step-items .step-item .step-details .step-title {\n  font-size: 1.8rem;\n  font-weight: 600;\n  line-height: 1.5rem;\n}\n.b-steps.is-large .steps .step-items .step-item:not(:first-child)::before, .b-steps.is-large .steps .step-items .step-item:only-child::before {\n  height: 0.2em;\n  top: 1.5rem;\n}\n.b-steps.is-large .steps .step-items .step-item:only-child::after {\n  top: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n  .b-steps.is-large .steps .step-items .step-item::before, .b-steps.is-large .steps .step-items .step-item::after, .b-steps.is-large .steps .step-items .step-item:not(:first-child)::before {\n    top: 1.5rem;\n  }\n}\n.b-steps.is-large.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-large.is-vertical > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-large.is-vertical > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-large.is-vertical > .steps.has-label-right .step-items .step-item:only-child::after {\n  left: calc(1.5rem - 0.1em);\n}\n.b-steps.is-large.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-large.is-vertical > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-large.is-vertical > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-large.is-vertical > .steps.has-label-left .step-items .step-item:only-child::after {\n  left: auto;\n  right: calc(1.5rem - 0.1em);\n}\n.b-steps.is-large.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::before, .b-steps.is-large.is-vertical.is-right > .steps.has-label-right .step-items .step-item:not(:first-child)::after, .b-steps.is-large.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::before, .b-steps.is-large.is-vertical.is-right > .steps.has-label-right .step-items .step-item:only-child::after {\n  left: calc(1.5rem - 0.1em);\n}\n.b-steps.is-large.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::before, .b-steps.is-large.is-vertical.is-right > .steps.has-label-left .step-items .step-item:not(:first-child)::after, .b-steps.is-large.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::before, .b-steps.is-large.is-vertical.is-right > .steps.has-label-left .step-items .step-item:only-child::after {\n  left: auto;\n  right: calc(1.5rem - 0.1em);\n}\n.b-steps.is-vertical {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.b-steps.is-vertical > .steps .step-items {\n  height: 100%;\n  flex-direction: column;\n  border-bottom-color: transparent;\n}\n.b-steps.is-vertical > .steps .step-items .step-item {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1em 0;\n}\n.b-steps.is-vertical > .steps .step-items .step-item::before, .b-steps.is-vertical > .steps .step-items .step-item::after {\n  background: linear-gradient(to top, #dbdbdb 50%, #7957d5 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-white::before, .b-steps.is-vertical > .steps .step-items .step-item.is-white::after {\n  background: linear-gradient(to top, #dbdbdb 50%, white 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-black::before, .b-steps.is-vertical > .steps .step-items .step-item.is-black::after {\n  background: linear-gradient(to top, #dbdbdb 50%, #0a0a0a 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-light::before, .b-steps.is-vertical > .steps .step-items .step-item.is-light::after {\n  background: linear-gradient(to top, #dbdbdb 50%, whitesmoke 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-dark::before, .b-steps.is-vertical > .steps .step-items .step-item.is-dark::after {\n  background: linear-gradient(to top, #dbdbdb 50%, #363636 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-primary::before, .b-steps.is-vertical > .steps .step-items .step-item.is-primary::after {\n  background: linear-gradient(to top, #dbdbdb 50%, #7957d5 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-link::before, .b-steps.is-vertical > .steps .step-items .step-item.is-link::after {\n  background: linear-gradient(to top, #dbdbdb 50%, #7957d5 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-info::before, .b-steps.is-vertical > .steps .step-items .step-item.is-info::after {\n  background: linear-gradient(to top, #dbdbdb 50%, #167df0 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-success::before, .b-steps.is-vertical > .steps .step-items .step-item.is-success::after {\n  background: linear-gradient(to top, #dbdbdb 50%, #48c78e 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-warning::before, .b-steps.is-vertical > .steps .step-items .step-item.is-warning::after {\n  background: linear-gradient(to top, #dbdbdb 50%, #ffe08a 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-danger::before, .b-steps.is-vertical > .steps .step-items .step-item.is-danger::after {\n  background: linear-gradient(to top, #dbdbdb 50%, #f14668 50%);\n  background-size: 100% 200%;\n  background-position: left bottom;\n}\n.b-steps.is-vertical > .steps .step-items .step-item:not(:first-child)::before, .b-steps.is-vertical > .steps .step-items .step-item:only-child::before {\n  height: 100%;\n  width: 0.2em;\n  top: -50%;\n  left: calc(50% - 0.1em);\n}\n.b-steps.is-vertical > .steps .step-items .step-item.is-active::before, .b-steps.is-vertical > .steps .step-items .step-item.is-active::after, .b-steps.is-vertical > .steps .step-items .step-item.is-previous::before, .b-steps.is-vertical > .steps .step-items .step-item.is-previous::after {\n  background-position: right top;\n}\n.b-steps.is-vertical > .steps .step-items .step-item:only-child::before {\n  top: 50%;\n}\n.b-steps.is-vertical > .steps .step-items .step-item:only-child::after {\n  width: 0.2em;\n  top: auto;\n  bottom: 50%;\n}\n.b-steps.is-vertical > .steps .step-items .step-item:only-child::before, .b-steps.is-vertical > .steps .step-items .step-item:only-child::after {\n  height: 25%;\n}\n.b-steps.is-vertical > .steps.has-label-right .step-items .step-item {\n  justify-content: flex-start;\n}\n.b-steps.is-vertical > .steps.has-label-left .step-items .step-item {\n  justify-content: flex-end;\n}\n.b-steps.is-vertical > .steps:not(.has-label-right):not(.has-label-left) .step-items .step-item .step-link > .step-details {\n  background-color: white;\n}\n.b-steps.is-vertical > .step-content {\n  flex-grow: 1;\n}\n.b-steps.is-vertical > .step-navigation {\n  flex-basis: 100%;\n}\n.b-steps.is-vertical.is-right {\n  flex-direction: row-reverse;\n}\n@media screen and (max-width: 768px) {\n  .b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(.is-active) {\n    display: none;\n  }\n  .b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item::before, .b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item::after, .b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(:first-child)::before {\n    content: \" \";\n    display: block;\n    position: absolute;\n    height: 0.2em;\n    width: 25%;\n    bottom: 0;\n    left: 50%;\n  }\n  .b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item::before, .b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(:first-child)::before {\n    right: 50%;\n    left: auto;\n  }\n  .b-steps:not(.is-vertical) .steps.mobile-compact .step-items .step-item:not(.is-active) .step-details {\n    display: none;\n  }\n}\n\n.switch {\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-right: 0.5em;\n}\n.switch + .switch:last-child {\n  margin-right: 0;\n}\n.switch input[type=checkbox] {\n  position: absolute;\n  left: 0;\n  opacity: 0;\n  outline: none;\n  z-index: -1;\n}\n.switch input[type=checkbox] + .check {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  width: 2.75em;\n  height: 1.575em;\n  padding: 0.2em;\n  background: #b5b5b5;\n  border-radius: 4px;\n  transition: background 150ms ease-out, box-shadow 150ms ease-out;\n}\n.switch input[type=checkbox] + .check.is-white-passive, .switch input[type=checkbox] + .check:hover {\n  background: white;\n}\n.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {\n  background: \"pink\";\n}\n.switch input[type=checkbox] + .check.is-black-passive, .switch input[type=checkbox] + .check:hover {\n  background: #0a0a0a;\n}\n.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {\n  background: \"pink\";\n}\n.switch input[type=checkbox] + .check.is-light-passive, .switch input[type=checkbox] + .check:hover {\n  background: whitesmoke;\n}\n.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {\n  background: \"pink\";\n}\n.switch input[type=checkbox] + .check.is-dark-passive, .switch input[type=checkbox] + .check:hover {\n  background: #363636;\n}\n.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {\n  background: \"pink\";\n}\n.switch input[type=checkbox] + .check.is-primary-passive, .switch input[type=checkbox] + .check:hover {\n  background: #7957d5;\n}\n.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {\n  background: \"pink\";\n}\n.switch input[type=checkbox] + .check.is-link-passive, .switch input[type=checkbox] + .check:hover {\n  background: #7957d5;\n}\n.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {\n  background: \"pink\";\n}\n.switch input[type=checkbox] + .check.is-info-passive, .switch input[type=checkbox] + .check:hover {\n  background: #167df0;\n}\n.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {\n  background: \"pink\";\n}\n.switch input[type=checkbox] + .check.is-success-passive, .switch input[type=checkbox] + .check:hover {\n  background: #48c78e;\n}\n.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {\n  background: \"pink\";\n}\n.switch input[type=checkbox] + .check.is-warning-passive, .switch input[type=checkbox] + .check:hover {\n  background: #ffe08a;\n}\n.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {\n  background: \"pink\";\n}\n.switch input[type=checkbox] + .check.is-danger-passive, .switch input[type=checkbox] + .check:hover {\n  background: #f14668;\n}\n.switch input[type=checkbox] + .check.input[type=checkbox] + .switch input[type=checkbox] + .check.check {\n  background: \"pink\";\n}\n.switch input[type=checkbox] + .check:before {\n  content: \"\";\n  display: block;\n  border-radius: 4px;\n  width: 1.175em;\n  height: 1.175em;\n  background: whitesmoke;\n  box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);\n  transition: transform 150ms ease-out;\n  will-change: transform;\n  transform-origin: left;\n}\n.switch input[type=checkbox] + .check.is-elastic:before {\n  transform: scaleX(1.5);\n  border-radius: 4px;\n}\n.switch input[type=checkbox]:checked + .check {\n  background: #7957d5;\n}\n.switch input[type=checkbox]:checked + .check.is-white {\n  background: white;\n}\n.switch input[type=checkbox]:checked + .check.is-black {\n  background: #0a0a0a;\n}\n.switch input[type=checkbox]:checked + .check.is-light {\n  background: whitesmoke;\n}\n.switch input[type=checkbox]:checked + .check.is-dark {\n  background: #363636;\n}\n.switch input[type=checkbox]:checked + .check.is-primary {\n  background: #7957d5;\n}\n.switch input[type=checkbox]:checked + .check.is-link {\n  background: #7957d5;\n}\n.switch input[type=checkbox]:checked + .check.is-info {\n  background: #167df0;\n}\n.switch input[type=checkbox]:checked + .check.is-success {\n  background: #48c78e;\n}\n.switch input[type=checkbox]:checked + .check.is-warning {\n  background: #ffe08a;\n}\n.switch input[type=checkbox]:checked + .check.is-danger {\n  background: #f14668;\n}\n.switch input[type=checkbox]:checked + .check:before {\n  transform: translate3d(100%, 0, 0);\n}\n.switch input[type=checkbox]:checked + .check.is-elastic:before {\n  transform: translate3d(50%, 0, 0) scaleX(1.5);\n}\n.switch input[type=checkbox]:focus, .switch input[type=checkbox]:active {\n  outline: none;\n}\n.switch input[type=checkbox]:focus + .check, .switch input[type=checkbox]:active + .check {\n  box-shadow: 0 0 0.5em rgba(122, 122, 122, 0.6);\n}\n.switch input[type=checkbox]:focus + .check.is-white-passive, .switch input[type=checkbox]:active + .check.is-white-passive {\n  box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.8);\n}\n.switch input[type=checkbox]:focus + .check.is-black-passive, .switch input[type=checkbox]:active + .check.is-black-passive {\n  box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.8);\n}\n.switch input[type=checkbox]:focus + .check.is-light-passive, .switch input[type=checkbox]:active + .check.is-light-passive {\n  box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.8);\n}\n.switch input[type=checkbox]:focus + .check.is-dark-passive, .switch input[type=checkbox]:active + .check.is-dark-passive {\n  box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.8);\n}\n.switch input[type=checkbox]:focus + .check.is-primary-passive, .switch input[type=checkbox]:active + .check.is-primary-passive {\n  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.switch input[type=checkbox]:focus + .check.is-link-passive, .switch input[type=checkbox]:active + .check.is-link-passive {\n  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.switch input[type=checkbox]:focus + .check.is-info-passive, .switch input[type=checkbox]:active + .check.is-info-passive {\n  box-shadow: 0 0 0.5em rgba(22, 125, 240, 0.8);\n}\n.switch input[type=checkbox]:focus + .check.is-success-passive, .switch input[type=checkbox]:active + .check.is-success-passive {\n  box-shadow: 0 0 0.5em rgba(72, 199, 142, 0.8);\n}\n.switch input[type=checkbox]:focus + .check.is-warning-passive, .switch input[type=checkbox]:active + .check.is-warning-passive {\n  box-shadow: 0 0 0.5em rgba(255, 224, 138, 0.8);\n}\n.switch input[type=checkbox]:focus + .check.is-danger-passive, .switch input[type=checkbox]:active + .check.is-danger-passive {\n  box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check, .switch input[type=checkbox]:active:checked + .check {\n  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check.is-white, .switch input[type=checkbox]:active:checked + .check.is-white {\n  box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check.is-black, .switch input[type=checkbox]:active:checked + .check.is-black {\n  box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check.is-light, .switch input[type=checkbox]:active:checked + .check.is-light {\n  box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check.is-dark, .switch input[type=checkbox]:active:checked + .check.is-dark {\n  box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check.is-primary, .switch input[type=checkbox]:active:checked + .check.is-primary {\n  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check.is-link, .switch input[type=checkbox]:active:checked + .check.is-link {\n  box-shadow: 0 0 0.5em rgba(121, 87, 213, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check.is-info, .switch input[type=checkbox]:active:checked + .check.is-info {\n  box-shadow: 0 0 0.5em rgba(22, 125, 240, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check.is-success, .switch input[type=checkbox]:active:checked + .check.is-success {\n  box-shadow: 0 0 0.5em rgba(72, 199, 142, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check.is-warning, .switch input[type=checkbox]:active:checked + .check.is-warning {\n  box-shadow: 0 0 0.5em rgba(255, 224, 138, 0.8);\n}\n.switch input[type=checkbox]:focus:checked + .check.is-danger, .switch input[type=checkbox]:active:checked + .check.is-danger {\n  box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.8);\n}\n.switch.has-left-label {\n  flex-direction: row-reverse;\n}\n.switch.has-left-label .control-label {\n  padding-right: calc(0.75em - 1px);\n}\n.switch:not(.has-left-label) .control-label {\n  padding-left: calc(0.75em - 1px);\n}\n.switch:hover input[type=checkbox] + .check {\n  background: rgba(181, 181, 181, 0.9);\n}\n.switch:hover input[type=checkbox] + .check.is-white-passive {\n  background: rgba(255, 255, 255, 0.9);\n}\n.switch:hover input[type=checkbox] + .check.is-black-passive {\n  background: rgba(10, 10, 10, 0.9);\n}\n.switch:hover input[type=checkbox] + .check.is-light-passive {\n  background: rgba(245, 245, 245, 0.9);\n}\n.switch:hover input[type=checkbox] + .check.is-dark-passive {\n  background: rgba(54, 54, 54, 0.9);\n}\n.switch:hover input[type=checkbox] + .check.is-primary-passive {\n  background: rgba(121, 87, 213, 0.9);\n}\n.switch:hover input[type=checkbox] + .check.is-link-passive {\n  background: rgba(121, 87, 213, 0.9);\n}\n.switch:hover input[type=checkbox] + .check.is-info-passive {\n  background: rgba(22, 125, 240, 0.9);\n}\n.switch:hover input[type=checkbox] + .check.is-success-passive {\n  background: rgba(72, 199, 142, 0.9);\n}\n.switch:hover input[type=checkbox] + .check.is-warning-passive {\n  background: rgba(255, 224, 138, 0.9);\n}\n.switch:hover input[type=checkbox] + .check.is-danger-passive {\n  background: rgba(241, 70, 104, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check {\n  background: rgba(121, 87, 213, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check.is-white {\n  background: rgba(255, 255, 255, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check.is-black {\n  background: rgba(10, 10, 10, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check.is-light {\n  background: rgba(245, 245, 245, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check.is-dark {\n  background: rgba(54, 54, 54, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check.is-primary {\n  background: rgba(121, 87, 213, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check.is-link {\n  background: rgba(121, 87, 213, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check.is-info {\n  background: rgba(22, 125, 240, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check.is-success {\n  background: rgba(72, 199, 142, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check.is-warning {\n  background: rgba(255, 224, 138, 0.9);\n}\n.switch:hover input[type=checkbox]:checked + .check.is-danger {\n  background: rgba(241, 70, 104, 0.9);\n}\n.switch.is-rounded input[type=checkbox] + .check {\n  border-radius: 9999px;\n}\n.switch.is-rounded input[type=checkbox] + .check:before {\n  border-radius: 9999px;\n}\n.switch.is-rounded input[type=checkbox].is-elastic:before {\n  transform: scaleX(1.5);\n  border-radius: 9999px;\n}\n.switch.is-outlined input[type=checkbox] + .check {\n  background: transparent;\n  border: 0.1rem solid #b5b5b5;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-white-passive {\n  border: 0.1rem solid rgba(255, 255, 255, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-white-passive:before {\n  background: white;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-white-passive:hover {\n  border-color: rgba(255, 255, 255, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-black-passive {\n  border: 0.1rem solid rgba(10, 10, 10, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-black-passive:before {\n  background: #0a0a0a;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-black-passive:hover {\n  border-color: rgba(10, 10, 10, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-light-passive {\n  border: 0.1rem solid rgba(245, 245, 245, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-light-passive:before {\n  background: whitesmoke;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-light-passive:hover {\n  border-color: rgba(245, 245, 245, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-dark-passive {\n  border: 0.1rem solid rgba(54, 54, 54, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-dark-passive:before {\n  background: #363636;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-dark-passive:hover {\n  border-color: rgba(54, 54, 54, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-primary-passive {\n  border: 0.1rem solid rgba(121, 87, 213, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-primary-passive:before {\n  background: #7957d5;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-primary-passive:hover {\n  border-color: rgba(121, 87, 213, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-link-passive {\n  border: 0.1rem solid rgba(121, 87, 213, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-link-passive:before {\n  background: #7957d5;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-link-passive:hover {\n  border-color: rgba(121, 87, 213, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-info-passive {\n  border: 0.1rem solid rgba(22, 125, 240, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-info-passive:before {\n  background: #167df0;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-info-passive:hover {\n  border-color: rgba(22, 125, 240, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-success-passive {\n  border: 0.1rem solid rgba(72, 199, 142, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-success-passive:before {\n  background: #48c78e;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-success-passive:hover {\n  border-color: rgba(72, 199, 142, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-warning-passive {\n  border: 0.1rem solid rgba(255, 224, 138, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-warning-passive:before {\n  background: #ffe08a;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-warning-passive:hover {\n  border-color: rgba(255, 224, 138, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-danger-passive {\n  border: 0.1rem solid rgba(241, 70, 104, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check.is-danger-passive:before {\n  background: #f14668;\n}\n.switch.is-outlined input[type=checkbox] + .check.is-danger-passive:hover {\n  border-color: rgba(241, 70, 104, 0.9);\n}\n.switch.is-outlined input[type=checkbox] + .check:before {\n  background: #b5b5b5;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check {\n  border-color: #7957d5;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-white {\n  background: transparent;\n  border-color: white;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-white:before {\n  background: white;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-black {\n  background: transparent;\n  border-color: #0a0a0a;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-black:before {\n  background: #0a0a0a;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-light {\n  background: transparent;\n  border-color: whitesmoke;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-light:before {\n  background: whitesmoke;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-dark {\n  background: transparent;\n  border-color: #363636;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-dark:before {\n  background: #363636;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-primary {\n  background: transparent;\n  border-color: #7957d5;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-primary:before {\n  background: #7957d5;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-link {\n  background: transparent;\n  border-color: #7957d5;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-link:before {\n  background: #7957d5;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-info {\n  background: transparent;\n  border-color: #167df0;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-info:before {\n  background: #167df0;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-success {\n  background: transparent;\n  border-color: #48c78e;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-success:before {\n  background: #48c78e;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-warning {\n  background: transparent;\n  border-color: #ffe08a;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-warning:before {\n  background: #ffe08a;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-danger {\n  background: transparent;\n  border-color: #f14668;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check.is-danger:before {\n  background: #f14668;\n}\n.switch.is-outlined input[type=checkbox]:checked + .check:before {\n  background: #7957d5;\n}\n.switch.is-outlined:hover input[type=checkbox] + .check {\n  background: transparent;\n  border-color: rgba(181, 181, 181, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check {\n  background: transparent;\n  border-color: rgba(121, 87, 213, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-white {\n  border-color: rgba(255, 255, 255, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-black {\n  border-color: rgba(10, 10, 10, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-light {\n  border-color: rgba(245, 245, 245, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-dark {\n  border-color: rgba(54, 54, 54, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-primary {\n  border-color: rgba(121, 87, 213, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-link {\n  border-color: rgba(121, 87, 213, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-info {\n  border-color: rgba(22, 125, 240, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-success {\n  border-color: rgba(72, 199, 142, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-warning {\n  border-color: rgba(255, 224, 138, 0.9);\n}\n.switch.is-outlined:hover input[type=checkbox]:checked + .check.is-danger {\n  border-color: rgba(241, 70, 104, 0.9);\n}\n.switch.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.switch.is-medium {\n  font-size: 1.25rem;\n}\n.switch.is-large {\n  font-size: 1.5rem;\n}\n.switch[disabled] {\n  opacity: 0.5;\n  cursor: not-allowed;\n  color: #7a7a7a;\n}\n\n.table-wrapper .table {\n  margin-bottom: 0;\n}\n.table-wrapper:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n@media screen and (max-width: 1023px) {\n  .table-wrapper {\n    overflow-x: auto;\n  }\n}\n\n.b-table {\n  transition: opacity 86ms ease-out;\n}\n@media screen and (min-width: 769px), print {\n  .b-table .table-mobile-sort {\n    display: none;\n  }\n}\n.b-table .icon {\n  transition: transform 150ms ease-out, opacity 86ms ease-out;\n}\n.b-table .icon.is-desc {\n  transform: rotate(180deg);\n}\n.b-table .icon.is-expanded {\n  transform: rotate(90deg);\n}\n.b-table .sort-icon.icon.is-desc {\n  transform: rotate(180deg) translateY(-50%) !important;\n}\n.b-table .table {\n  width: 100%;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  border-collapse: separate;\n}\n.b-table .table th {\n  font-weight: 600;\n}\n.b-table .table th .th-wrap {\n  display: flex;\n  align-items: center;\n}\n.b-table .table th .th-wrap .icon {\n  margin-left: 0.5rem;\n  margin-right: 0;\n  font-size: 1rem;\n}\n.b-table .table th .th-wrap.is-numeric {\n  flex-direction: row-reverse;\n  text-align: right;\n  width: 95%;\n}\n.b-table .table th .th-wrap.is-numeric .icon {\n  margin-left: 0;\n  margin-right: 0.5rem;\n}\n.b-table .table th .th-wrap.is-centered {\n  justify-content: center;\n  text-align: center;\n}\n.b-table .table th.is-current-sort {\n  border-color: #7a7a7a;\n  font-weight: 700;\n}\n.b-table .table th.is-sortable:hover {\n  border-color: #7a7a7a;\n}\n.b-table .table th.is-sortable, .b-table .table th.is-sortable .th-wrap {\n  cursor: pointer;\n}\n.b-table .table th.is-sortable .is-relative, .b-table .table th.is-sortable .th-wrap .is-relative {\n  position: absolute;\n}\n.b-table .table th .sort-icon, .b-table .table th .multi-sort-cancel-icon {\n  position: absolute;\n  bottom: 50%;\n  left: 100%;\n  transform: translateY(50%);\n}\n.b-table .table th .multi-sort-cancel-icon {\n  margin-left: 10px;\n}\n.b-table .table th.is-sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n  z-index: 3 !important;\n  background: transparent;\n}\n.b-table .table tr.is-selected .checkbox input:checked + .check {\n  background: #fff url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%237957d5' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E\") no-repeat center center;\n}\n.b-table .table tr.is-selected .checkbox input + .check {\n  border-color: #fff;\n}\n.b-table .table tr.is-empty:hover {\n  background-color: transparent;\n}\n.b-table .table .chevron-cell {\n  vertical-align: middle;\n}\n.b-table .table .chevron-cell > a {\n  color: #7957d5 !important;\n}\n.b-table .table .checkbox-cell {\n  width: 40px;\n}\n.b-table .table .checkbox-cell .checkbox {\n  vertical-align: middle;\n}\n.b-table .table .checkbox-cell .checkbox .check {\n  transition: none;\n}\n.b-table .table tr.detail {\n  box-shadow: inset 0 1px 3px #dbdbdb;\n  background: #fafafa;\n}\n.b-table .table tr.detail .detail-container {\n  padding: 1rem;\n}\n.b-table .table:focus {\n  border-color: #7957d5;\n  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.b-table .table.is-bordered th.is-current-sort,\n.b-table .table.is-bordered th.is-sortable:hover {\n  border-color: #dbdbdb;\n  background: whitesmoke;\n}\n.b-table .table td.is-sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n  z-index: 1;\n  background: white;\n}\n.b-table .table.is-striped tbody tr:not(.is-selected):nth-child(even) td.is-sticky {\n  background: #fafafa;\n}\n.b-table .level:not(.top) {\n  padding-bottom: 1.5rem;\n}\n.b-table .table-wrapper {\n  position: relative;\n}\n.b-table .table-wrapper.has-sticky-header {\n  height: 300px;\n  overflow-y: auto;\n}\n@media screen and (max-width: 768px) {\n  .b-table .table-wrapper.has-sticky-header.has-mobile-cards {\n    height: initial !important;\n    overflow-y: initial !important;\n  }\n}\n.b-table .table-wrapper.has-sticky-header tr:first-child th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background: white;\n}\n@media screen and (max-width: 768px) {\n  .b-table .table-wrapper.has-mobile-cards .table {\n    background-color: transparent;\n  }\n  .b-table .table-wrapper.has-mobile-cards thead tr {\n    box-shadow: none;\n    border-width: 0;\n  }\n  .b-table .table-wrapper.has-mobile-cards thead tr th {\n    display: none;\n  }\n  .b-table .table-wrapper.has-mobile-cards thead tr .checkbox-cell {\n    display: block;\n    width: 100%;\n    text-align: right;\n    margin-bottom: 1rem;\n    border: 0;\n  }\n  .b-table .table-wrapper.has-mobile-cards tfoot th {\n    border: 0;\n    display: inherit;\n  }\n  .b-table .table-wrapper.has-mobile-cards tr {\n    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n    max-width: 100%;\n    position: relative;\n    display: block;\n  }\n  .b-table .table-wrapper.has-mobile-cards tr td {\n    border: 0;\n    display: inherit;\n  }\n  .b-table .table-wrapper.has-mobile-cards tr td:last-child {\n    border-bottom: 0;\n  }\n  .b-table .table-wrapper.has-mobile-cards tr:not(:last-child) {\n    margin-bottom: 1rem;\n  }\n  .b-table .table-wrapper.has-mobile-cards tr:not([class*=is-]) {\n    background: white;\n  }\n  .b-table .table-wrapper.has-mobile-cards tr:not([class*=is-]):hover {\n    background-color: white;\n  }\n  .b-table .table-wrapper.has-mobile-cards tr.detail {\n    margin-top: -1rem;\n  }\n  .b-table .table-wrapper.has-mobile-cards tr:not(.detail):not(.is-empty):not(.table-footer) td {\n    display: flex;\n    width: auto;\n    justify-content: space-between;\n    text-align: right;\n    border-bottom: 1px solid whitesmoke;\n  }\n  .b-table .table-wrapper.has-mobile-cards tr:not(.detail):not(.is-empty):not(.table-footer) td:before {\n    content: attr(data-label);\n    font-weight: 600;\n    padding-right: 0.5em;\n    text-align: left;\n  }\n}\n.b-table .table-wrapper.is-card-list .table {\n  background-color: transparent;\n}\n.b-table .table-wrapper.is-card-list thead tr {\n  box-shadow: none;\n  border-width: 0;\n}\n.b-table .table-wrapper.is-card-list thead tr th {\n  display: none;\n}\n.b-table .table-wrapper.is-card-list thead tr .checkbox-cell {\n  display: block;\n  width: 100%;\n  text-align: right;\n  margin-bottom: 1rem;\n  border: 0;\n}\n.b-table .table-wrapper.is-card-list tfoot th {\n  border: 0;\n  display: inherit;\n}\n.b-table .table-wrapper.is-card-list tr {\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  max-width: 100%;\n  position: relative;\n  display: block;\n}\n.b-table .table-wrapper.is-card-list tr td {\n  border: 0;\n  display: inherit;\n}\n.b-table .table-wrapper.is-card-list tr td:last-child {\n  border-bottom: 0;\n}\n.b-table .table-wrapper.is-card-list tr:not(:last-child) {\n  margin-bottom: 1rem;\n}\n.b-table .table-wrapper.is-card-list tr:not([class*=is-]) {\n  background: white;\n}\n.b-table .table-wrapper.is-card-list tr:not([class*=is-]):hover {\n  background-color: white;\n}\n.b-table .table-wrapper.is-card-list tr.detail {\n  margin-top: -1rem;\n}\n.b-table .table-wrapper.is-card-list tr:not(.detail):not(.is-empty):not(.table-footer) td {\n  display: flex;\n  width: auto;\n  justify-content: space-between;\n  text-align: right;\n  border-bottom: 1px solid whitesmoke;\n}\n.b-table .table-wrapper.is-card-list tr:not(.detail):not(.is-empty):not(.table-footer) td:before {\n  content: attr(data-label);\n  font-weight: 600;\n  padding-right: 0.5em;\n  text-align: left;\n}\n\n.b-tabs .tabs {\n  margin-bottom: 0;\n  flex-shrink: 0;\n}\n.b-tabs .tabs li a:focus {\n  outline: none;\n  border-bottom-color: #7957d5;\n}\n.b-tabs .tabs li:not(.is-active) a:focus {\n  border-bottom-color: #363636;\n}\n.b-tabs .tabs li.is-disabled {\n  pointer-events: none;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.b-tabs .tabs.is-boxed li a:focus {\n  background-color: white;\n  border-bottom-color: transparent;\n}\n.b-tabs .tabs.is-boxed li:not(.is-active) a:focus {\n  background-color: whitesmoke;\n  border-bottom-color: #dbdbdb;\n}\n.b-tabs .tabs.is-toggle li a:focus {\n  background-color: #7957d5;\n  border-color: #7957d5;\n}\n.b-tabs .tabs.is-toggle li:not(.is-active) a:focus {\n  background-color: whitesmoke;\n  border-color: #b5b5b5;\n}\n.b-tabs .tab-content {\n  position: relative;\n  overflow: visible;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n}\n.b-tabs .tab-content .tab-item {\n  flex-shrink: 0;\n  flex-basis: auto;\n}\n.b-tabs .tab-content .tab-item:focus {\n  outline: none;\n}\n.b-tabs .tab-content.is-transitioning {\n  overflow: hidden;\n}\n.b-tabs:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n.b-tabs.is-fullwidth {\n  width: 100%;\n}\n.b-tabs.is-vertical {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.b-tabs.is-vertical > .tabs ul {\n  flex-direction: column;\n  border-bottom-color: transparent;\n}\n.b-tabs.is-vertical > .tabs ul li {\n  width: 100%;\n}\n.b-tabs.is-vertical > .tabs ul li a {\n  justify-content: left;\n}\n.b-tabs.is-vertical > .tabs.is-boxed li a {\n  border-bottom-color: transparent !important;\n  border-right-color: #dbdbdb !important;\n  border-radius: 4px 0 0 4px;\n}\n.b-tabs.is-vertical > .tabs.is-boxed li.is-active a {\n  border-bottom-color: #dbdbdb !important;\n  border-right-color: transparent !important;\n}\n.b-tabs.is-vertical > .tabs.is-toggle li + li {\n  margin-left: 0;\n}\n.b-tabs.is-vertical > .tabs.is-toggle li:first-child a {\n  border-radius: 4px 4px 0 0;\n}\n.b-tabs.is-vertical > .tabs.is-toggle li:last-child a {\n  border-radius: 0 0 4px 4px;\n}\n.b-tabs.is-vertical > .tabs.is-fullwidth li a {\n  height: 100%;\n}\n.b-tabs.is-vertical > .tab-content {\n  flex-grow: 1;\n}\n.b-tabs.is-vertical.is-right {\n  flex-direction: row-reverse;\n}\n.b-tabs.is-vertical.is-right > .tabs ul a {\n  flex-direction: row-reverse;\n}\n.b-tabs.is-vertical.is-right > .tabs ul a .icon:first-child {\n  margin-right: 0;\n  margin-left: 0.5em;\n}\n.b-tabs.is-vertical.is-right > .tabs.is-boxed li a {\n  border-bottom-color: transparent !important;\n  border-right-color: transparent !important;\n  border-left-color: #dbdbdb !important;\n  border-radius: 0 4px 4px 0;\n}\n.b-tabs.is-vertical.is-right > .tabs.is-boxed li.is-active a {\n  border-bottom-color: #dbdbdb !important;\n  border-right-color: #dbdbdb !important;\n  border-left-color: transparent !important;\n}\n.b-tabs.is-multiline > .tabs ul {\n  flex-wrap: wrap;\n  flex-shrink: 1;\n}\n\n.tag .has-ellipsis {\n  max-width: 10em;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.tag .delete.is-white, .tag.is-delete.is-white, .tag.has-delete-icon.is-white {\n  background: white;\n}\n.tag .delete.is-white:hover, .tag.is-delete.is-white:hover, .tag.has-delete-icon.is-white:hover {\n  background-color: #e6e6e6;\n  text-decoration: none;\n}\n.tag .delete.is-black, .tag.is-delete.is-black, .tag.has-delete-icon.is-black {\n  background: #0a0a0a;\n}\n.tag .delete.is-black:hover, .tag.is-delete.is-black:hover, .tag.has-delete-icon.is-black:hover {\n  background-color: black;\n  text-decoration: none;\n}\n.tag .delete.is-light, .tag.is-delete.is-light, .tag.has-delete-icon.is-light {\n  background: whitesmoke;\n}\n.tag .delete.is-light:hover, .tag.is-delete.is-light:hover, .tag.has-delete-icon.is-light:hover {\n  background-color: #dbdbdb;\n  text-decoration: none;\n}\n.tag .delete.is-dark, .tag.is-delete.is-dark, .tag.has-delete-icon.is-dark {\n  background: #363636;\n}\n.tag .delete.is-dark:hover, .tag.is-delete.is-dark:hover, .tag.has-delete-icon.is-dark:hover {\n  background-color: #1c1c1c;\n  text-decoration: none;\n}\n.tag .delete.is-primary, .tag.is-delete.is-primary, .tag.has-delete-icon.is-primary {\n  background: #7957d5;\n}\n.tag .delete.is-primary:hover, .tag.is-delete.is-primary:hover, .tag.has-delete-icon.is-primary:hover {\n  background-color: #5a32c7;\n  text-decoration: none;\n}\n.tag .delete.is-link, .tag.is-delete.is-link, .tag.has-delete-icon.is-link {\n  background: #7957d5;\n}\n.tag .delete.is-link:hover, .tag.is-delete.is-link:hover, .tag.has-delete-icon.is-link:hover {\n  background-color: #5a32c7;\n  text-decoration: none;\n}\n.tag .delete.is-info, .tag.is-delete.is-info, .tag.has-delete-icon.is-info {\n  background: #167df0;\n}\n.tag .delete.is-info:hover, .tag.is-delete.is-info:hover, .tag.has-delete-icon.is-info:hover {\n  background-color: #0d64c6;\n  text-decoration: none;\n}\n.tag .delete.is-success, .tag.is-delete.is-success, .tag.has-delete-icon.is-success {\n  background: #48c78e;\n}\n.tag .delete.is-success:hover, .tag.is-delete.is-success:hover, .tag.has-delete-icon.is-success:hover {\n  background-color: #34a873;\n  text-decoration: none;\n}\n.tag .delete.is-warning, .tag.is-delete.is-warning, .tag.has-delete-icon.is-warning {\n  background: #ffe08a;\n}\n.tag .delete.is-warning:hover, .tag.is-delete.is-warning:hover, .tag.has-delete-icon.is-warning:hover {\n  background-color: #ffd257;\n  text-decoration: none;\n}\n.tag .delete.is-danger, .tag.is-delete.is-danger, .tag.has-delete-icon.is-danger {\n  background: #f14668;\n}\n.tag .delete.is-danger:hover, .tag.is-delete.is-danger:hover, .tag.has-delete-icon.is-danger:hover {\n  background-color: #ee1742;\n  text-decoration: none;\n}\n.tag.has-delete-icon {\n  padding: 0px;\n}\n.tag.has-delete-icon .icon:first-child:not(:last-child) {\n  margin-right: 0px;\n  margin-left: 0px;\n}\n\n.taginput .taginput-container {\n  display: flex;\n}\n.taginput .taginput-container.is-focusable {\n  padding-bottom: 0;\n  padding-top: calc(0.275em - 1px);\n  padding-left: 0;\n  padding-right: 0;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  height: auto;\n  cursor: text;\n}\n.taginput .taginput-container:not(.is-focusable) {\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  height: auto;\n}\n.taginput .taginput-container:not(.is-focusable).is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.taginput .taginput-container:not(.is-focusable).is-medium {\n  font-size: 1.25rem;\n}\n.taginput .taginput-container:not(.is-focusable).is-large {\n  font-size: 1.5rem;\n}\n.taginput .taginput-container > .tag,\n.taginput .taginput-container > .tags {\n  margin-left: 0.275rem;\n  margin-bottom: calc(0.275em - 1px);\n  font-size: 0.9em;\n  height: calc(2em - 1px);\n}\n.taginput .taginput-container > .tag .tag,\n.taginput .taginput-container > .tags .tag {\n  margin-bottom: 0;\n  font-size: 0.9em;\n  height: calc(2em - 1px);\n}\n.taginput .taginput-container > .tag .tag.is-delete,\n.taginput .taginput-container > .tags .tag.is-delete {\n  width: calc(2em - 1px);\n}\n.taginput .taginput-container .autocomplete {\n  position: static;\n  flex: 1;\n}\n.taginput .taginput-container .autocomplete input {\n  height: calc(2em - 1px);\n  margin-bottom: calc(0.275em - 1px);\n  padding-top: 0;\n  padding-bottom: 0;\n  border: none;\n  box-shadow: none;\n  min-width: 8em;\n}\n.taginput .taginput-container .autocomplete input:focus {\n  box-shadow: none !important;\n}\n.taginput .taginput-container .autocomplete .icon {\n  height: calc(2em - 1px);\n}\n.taginput .taginput-container .autocomplete > .control.is-loading::after {\n  top: 0.375em;\n}\n\n.timepicker .dropdown-menu {\n  min-width: 0;\n}\n.timepicker .dropdown,\n.timepicker .dropdown-trigger {\n  width: 100%;\n}\n.timepicker .dropdown .input[readonly],\n.timepicker .dropdown-trigger .input[readonly] {\n  cursor: pointer;\n  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);\n}\n.timepicker .dropdown .input[readonly]:focus, .timepicker .dropdown .input[readonly].is-focused, .timepicker .dropdown .input[readonly]:active, .timepicker .dropdown .input[readonly].is-active,\n.timepicker .dropdown-trigger .input[readonly]:focus,\n.timepicker .dropdown-trigger .input[readonly].is-focused,\n.timepicker .dropdown-trigger .input[readonly]:active,\n.timepicker .dropdown-trigger .input[readonly].is-active {\n  box-shadow: 0 0 0 0.125em rgba(121, 87, 213, 0.25);\n}\n.timepicker .dropdown.is-disabled {\n  opacity: 1;\n}\n.timepicker .dropdown-item, .timepicker .dropdown .dropdown-menu .has-link a, .dropdown .dropdown-menu .has-link .timepicker a {\n  font-size: inherit;\n  padding: 0;\n}\n.timepicker .timepicker-footer {\n  padding: 0 0.5rem 0 0.5rem;\n}\n.timepicker .dropdown-content .control {\n  font-size: 1.25em;\n  margin-right: 0 !important;\n}\n.timepicker .dropdown-content .control .select {\n  margin: 0 0.125em;\n}\n.timepicker .dropdown-content .control .select select {\n  font-weight: 600;\n  padding-right: calc(0.75em - 1px);\n  border: 0;\n}\n.timepicker .dropdown-content .control .select select option:disabled {\n  color: rgba(122, 122, 122, 0.7);\n}\n.timepicker .dropdown-content .control .select:after {\n  display: none;\n}\n.timepicker .dropdown-content .control.is-colon {\n  font-size: 1.7em;\n  line-height: 1.7em;\n}\n.timepicker .dropdown-content .control.is-colon:last-child {\n  padding-right: calc(0.75em - 1px);\n}\n.timepicker.is-small {\n  border-radius: 2px;\n  font-size: 0.75rem;\n}\n.timepicker.is-medium {\n  font-size: 1.25rem;\n}\n.timepicker.is-large {\n  font-size: 1.5rem;\n}\n\n.b-tooltip {\n  position: relative;\n  display: inline-flex;\n}\n.b-tooltip.is-top .tooltip-content {\n  top: auto;\n  right: auto;\n  bottom: calc(100% + 5px + 2px);\n  left: 50%;\n  transform: translateX(-50%);\n}\n.b-tooltip.is-top .tooltip-content::before {\n  top: 100%;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  transform: translateX(-50%);\n  border-top: 5px solid #7957d5;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n.b-tooltip.is-top.is-white .tooltip-content::before {\n  border-top-color: white;\n}\n.b-tooltip.is-top.is-black .tooltip-content::before {\n  border-top-color: #0a0a0a;\n}\n.b-tooltip.is-top.is-light .tooltip-content::before {\n  border-top-color: whitesmoke;\n}\n.b-tooltip.is-top.is-dark .tooltip-content::before {\n  border-top-color: #363636;\n}\n.b-tooltip.is-top.is-primary .tooltip-content::before {\n  border-top-color: #7957d5;\n}\n.b-tooltip.is-top.is-primary.is-light .tooltip-content::before {\n  border-top-color: #f2effb;\n}\n.b-tooltip.is-top.is-link .tooltip-content::before {\n  border-top-color: #7957d5;\n}\n.b-tooltip.is-top.is-link.is-light .tooltip-content::before {\n  border-top-color: #f2effb;\n}\n.b-tooltip.is-top.is-info .tooltip-content::before {\n  border-top-color: #167df0;\n}\n.b-tooltip.is-top.is-info.is-light .tooltip-content::before {\n  border-top-color: #ecf4fe;\n}\n.b-tooltip.is-top.is-success .tooltip-content::before {\n  border-top-color: #48c78e;\n}\n.b-tooltip.is-top.is-success.is-light .tooltip-content::before {\n  border-top-color: #effaf5;\n}\n.b-tooltip.is-top.is-warning .tooltip-content::before {\n  border-top-color: #ffe08a;\n}\n.b-tooltip.is-top.is-warning.is-light .tooltip-content::before {\n  border-top-color: #fffaeb;\n}\n.b-tooltip.is-top.is-danger .tooltip-content::before {\n  border-top-color: #f14668;\n}\n.b-tooltip.is-top.is-danger.is-light .tooltip-content::before {\n  border-top-color: #feecf0;\n}\n.b-tooltip.is-right .tooltip-content {\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: calc(100% + 5px + 2px);\n  transform: translateY(-50%);\n}\n.b-tooltip.is-right .tooltip-content::before {\n  top: 50%;\n  right: 100%;\n  bottom: auto;\n  left: auto;\n  transform: translateY(-50%);\n  border-top: 5px solid transparent;\n  border-right: 5px solid #7957d5;\n  border-bottom: 5px solid transparent;\n}\n.b-tooltip.is-right.is-white .tooltip-content::before {\n  border-right-color: white;\n}\n.b-tooltip.is-right.is-black .tooltip-content::before {\n  border-right-color: #0a0a0a;\n}\n.b-tooltip.is-right.is-light .tooltip-content::before {\n  border-right-color: whitesmoke;\n}\n.b-tooltip.is-right.is-dark .tooltip-content::before {\n  border-right-color: #363636;\n}\n.b-tooltip.is-right.is-primary .tooltip-content::before {\n  border-right-color: #7957d5;\n}\n.b-tooltip.is-right.is-primary.is-light .tooltip-content::before {\n  border-right-color: #f2effb;\n}\n.b-tooltip.is-right.is-link .tooltip-content::before {\n  border-right-color: #7957d5;\n}\n.b-tooltip.is-right.is-link.is-light .tooltip-content::before {\n  border-right-color: #f2effb;\n}\n.b-tooltip.is-right.is-info .tooltip-content::before {\n  border-right-color: #167df0;\n}\n.b-tooltip.is-right.is-info.is-light .tooltip-content::before {\n  border-right-color: #ecf4fe;\n}\n.b-tooltip.is-right.is-success .tooltip-content::before {\n  border-right-color: #48c78e;\n}\n.b-tooltip.is-right.is-success.is-light .tooltip-content::before {\n  border-right-color: #effaf5;\n}\n.b-tooltip.is-right.is-warning .tooltip-content::before {\n  border-right-color: #ffe08a;\n}\n.b-tooltip.is-right.is-warning.is-light .tooltip-content::before {\n  border-right-color: #fffaeb;\n}\n.b-tooltip.is-right.is-danger .tooltip-content::before {\n  border-right-color: #f14668;\n}\n.b-tooltip.is-right.is-danger.is-light .tooltip-content::before {\n  border-right-color: #feecf0;\n}\n.b-tooltip.is-bottom .tooltip-content {\n  top: calc(100% + 5px + 2px);\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.b-tooltip.is-bottom .tooltip-content::before {\n  top: auto;\n  right: auto;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #7957d5;\n  border-left: 5px solid transparent;\n}\n.b-tooltip.is-bottom.is-white .tooltip-content::before {\n  border-bottom-color: white;\n}\n.b-tooltip.is-bottom.is-black .tooltip-content::before {\n  border-bottom-color: #0a0a0a;\n}\n.b-tooltip.is-bottom.is-light .tooltip-content::before {\n  border-bottom-color: whitesmoke;\n}\n.b-tooltip.is-bottom.is-dark .tooltip-content::before {\n  border-bottom-color: #363636;\n}\n.b-tooltip.is-bottom.is-primary .tooltip-content::before {\n  border-bottom-color: #7957d5;\n}\n.b-tooltip.is-bottom.is-primary.is-light .tooltip-content::before {\n  border-bottom-color: #f2effb;\n}\n.b-tooltip.is-bottom.is-link .tooltip-content::before {\n  border-bottom-color: #7957d5;\n}\n.b-tooltip.is-bottom.is-link.is-light .tooltip-content::before {\n  border-bottom-color: #f2effb;\n}\n.b-tooltip.is-bottom.is-info .tooltip-content::before {\n  border-bottom-color: #167df0;\n}\n.b-tooltip.is-bottom.is-info.is-light .tooltip-content::before {\n  border-bottom-color: #ecf4fe;\n}\n.b-tooltip.is-bottom.is-success .tooltip-content::before {\n  border-bottom-color: #48c78e;\n}\n.b-tooltip.is-bottom.is-success.is-light .tooltip-content::before {\n  border-bottom-color: #effaf5;\n}\n.b-tooltip.is-bottom.is-warning .tooltip-content::before {\n  border-bottom-color: #ffe08a;\n}\n.b-tooltip.is-bottom.is-warning.is-light .tooltip-content::before {\n  border-bottom-color: #fffaeb;\n}\n.b-tooltip.is-bottom.is-danger .tooltip-content::before {\n  border-bottom-color: #f14668;\n}\n.b-tooltip.is-bottom.is-danger.is-light .tooltip-content::before {\n  border-bottom-color: #feecf0;\n}\n.b-tooltip.is-left .tooltip-content {\n  top: 50%;\n  right: calc(100% + 5px + 2px);\n  bottom: auto;\n  left: auto;\n  transform: translateY(-50%);\n}\n.b-tooltip.is-left .tooltip-content::before {\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 100%;\n  transform: translateY(-50%);\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  border-left: 5px solid #7957d5;\n}\n.b-tooltip.is-left.is-white .tooltip-content::before {\n  border-left-color: white;\n}\n.b-tooltip.is-left.is-black .tooltip-content::before {\n  border-left-color: #0a0a0a;\n}\n.b-tooltip.is-left.is-light .tooltip-content::before {\n  border-left-color: whitesmoke;\n}\n.b-tooltip.is-left.is-dark .tooltip-content::before {\n  border-left-color: #363636;\n}\n.b-tooltip.is-left.is-primary .tooltip-content::before {\n  border-left-color: #7957d5;\n}\n.b-tooltip.is-left.is-primary.is-light .tooltip-content::before {\n  border-left-color: #f2effb;\n}\n.b-tooltip.is-left.is-link .tooltip-content::before {\n  border-left-color: #7957d5;\n}\n.b-tooltip.is-left.is-link.is-light .tooltip-content::before {\n  border-left-color: #f2effb;\n}\n.b-tooltip.is-left.is-info .tooltip-content::before {\n  border-left-color: #167df0;\n}\n.b-tooltip.is-left.is-info.is-light .tooltip-content::before {\n  border-left-color: #ecf4fe;\n}\n.b-tooltip.is-left.is-success .tooltip-content::before {\n  border-left-color: #48c78e;\n}\n.b-tooltip.is-left.is-success.is-light .tooltip-content::before {\n  border-left-color: #effaf5;\n}\n.b-tooltip.is-left.is-warning .tooltip-content::before {\n  border-left-color: #ffe08a;\n}\n.b-tooltip.is-left.is-warning.is-light .tooltip-content::before {\n  border-left-color: #fffaeb;\n}\n.b-tooltip.is-left.is-danger .tooltip-content::before {\n  border-left-color: #f14668;\n}\n.b-tooltip.is-left.is-danger.is-light .tooltip-content::before {\n  border-left-color: #feecf0;\n}\n.b-tooltip .tooltip-content {\n  width: auto;\n  padding: 0.35rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 400;\n  box-shadow: 0px 1px 2px 1px rgba(0, 1, 0, 0.2);\n  z-index: 38;\n  white-space: nowrap;\n  position: absolute;\n}\n.b-tooltip .tooltip-content::before {\n  position: absolute;\n  content: \"\";\n  pointer-events: none;\n  z-index: 38;\n}\n.b-tooltip .tooltip-trigger {\n  width: 100%;\n}\n.b-tooltip.is-white .tooltip-content {\n  background: white;\n  color: #0a0a0a;\n}\n.b-tooltip.is-black .tooltip-content {\n  background: #0a0a0a;\n  color: white;\n}\n.b-tooltip.is-light .tooltip-content {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.7);\n}\n.b-tooltip.is-dark .tooltip-content {\n  background: #363636;\n  color: #fff;\n}\n.b-tooltip.is-primary .tooltip-content {\n  background: #7957d5;\n  color: #fff;\n}\n.b-tooltip.is-primary.is-light .tooltip-content {\n  background: #f2effb;\n  color: #552fbc;\n}\n.b-tooltip.is-link .tooltip-content {\n  background: #7957d5;\n  color: #fff;\n}\n.b-tooltip.is-link.is-light .tooltip-content {\n  background: #f2effb;\n  color: #552fbc;\n}\n.b-tooltip.is-info .tooltip-content {\n  background: #167df0;\n  color: #fff;\n}\n.b-tooltip.is-info.is-light .tooltip-content {\n  background: #ecf4fe;\n  color: #0d68ce;\n}\n.b-tooltip.is-success .tooltip-content {\n  background: #48c78e;\n  color: #fff;\n}\n.b-tooltip.is-success.is-light .tooltip-content {\n  background: #effaf5;\n  color: #257953;\n}\n.b-tooltip.is-warning .tooltip-content {\n  background: #ffe08a;\n  color: rgba(0, 0, 0, 0.7);\n}\n.b-tooltip.is-warning.is-light .tooltip-content {\n  background: #fffaeb;\n  color: #946c00;\n}\n.b-tooltip.is-danger .tooltip-content {\n  background: #f14668;\n  color: #fff;\n}\n.b-tooltip.is-danger.is-light .tooltip-content {\n  background: #feecf0;\n  color: #cc0f35;\n}\n.b-tooltip.is-always .tooltip-content::before,\n.b-tooltip.is-always .tooltip-content {\n  opacity: 1;\n  visibility: visible;\n}\n.b-tooltip.is-multiline .tooltip-content {\n  display: flex-block;\n  text-align: center;\n  white-space: normal;\n}\n.b-tooltip.is-multiline.is-small .tooltip-content {\n  width: 180px;\n}\n.b-tooltip.is-multiline.is-medium .tooltip-content {\n  width: 240px;\n}\n.b-tooltip.is-multiline.is-large .tooltip-content {\n  width: 300px;\n}\n.b-tooltip.is-dashed .tooltip-trigger {\n  border-bottom: 1px dashed #b5b5b5;\n  cursor: default;\n}\n.b-tooltip.is-square .tooltip-content {\n  border-radius: 0;\n}\n\n.upload {\n  position: relative;\n  display: inline-flex;\n}\n.upload input[type=file] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  outline: none;\n  cursor: pointer;\n  z-index: -1;\n}\n.upload .upload-draggable {\n  cursor: pointer;\n  padding: 0.25em;\n  border: 1px dashed #b5b5b5;\n  border-radius: 6px;\n}\n.upload .upload-draggable.is-disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.upload .upload-draggable.is-loading {\n  position: relative;\n  pointer-events: none;\n  opacity: 0.5;\n}\n.upload .upload-draggable.is-loading:after {\n  animation: spinAround 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 9999px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em;\n  top: 0;\n  left: calc(50% - 1.5em);\n  width: 3em;\n  height: 3em;\n  border-width: 0.25em;\n}\n.upload .upload-draggable:hover.is-white, .upload .upload-draggable.is-hovered.is-white {\n  border-color: white;\n  background: rgba(255, 255, 255, 0.05);\n}\n.upload .upload-draggable:hover.is-black, .upload .upload-draggable.is-hovered.is-black {\n  border-color: #0a0a0a;\n  background: rgba(10, 10, 10, 0.05);\n}\n.upload .upload-draggable:hover.is-light, .upload .upload-draggable.is-hovered.is-light {\n  border-color: whitesmoke;\n  background: rgba(245, 245, 245, 0.05);\n}\n.upload .upload-draggable:hover.is-dark, .upload .upload-draggable.is-hovered.is-dark {\n  border-color: #363636;\n  background: rgba(54, 54, 54, 0.05);\n}\n.upload .upload-draggable:hover.is-primary, .upload .upload-draggable.is-hovered.is-primary {\n  border-color: #7957d5;\n  background: rgba(121, 87, 213, 0.05);\n}\n.upload .upload-draggable:hover.is-link, .upload .upload-draggable.is-hovered.is-link {\n  border-color: #7957d5;\n  background: rgba(121, 87, 213, 0.05);\n}\n.upload .upload-draggable:hover.is-info, .upload .upload-draggable.is-hovered.is-info {\n  border-color: #167df0;\n  background: rgba(22, 125, 240, 0.05);\n}\n.upload .upload-draggable:hover.is-success, .upload .upload-draggable.is-hovered.is-success {\n  border-color: #48c78e;\n  background: rgba(72, 199, 142, 0.05);\n}\n.upload .upload-draggable:hover.is-warning, .upload .upload-draggable.is-hovered.is-warning {\n  border-color: #ffe08a;\n  background: rgba(255, 224, 138, 0.05);\n}\n.upload .upload-draggable:hover.is-danger, .upload .upload-draggable.is-hovered.is-danger {\n  border-color: #f14668;\n  background: rgba(241, 70, 104, 0.05);\n}\n.upload .upload-draggable.is-expanded {\n  width: 100%;\n}\n.upload.is-expanded {\n  width: 100%;\n}\n.upload.is-rounded {\n  border-radius: 9999px;\n}\n.upload.is-rounded .file-name {\n  border-top-right-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\n\n@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {\n  .upload input[type=file] {\n    z-index: auto;\n  }\n  .upload .upload-draggable + input[type=file] {\n    z-index: -1;\n  }\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(7).default("2a88a90a", content, true)

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(7).default("5af540b8", content, true)

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(22);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(48);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(49);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(50);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(51);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(52);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(53);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(54);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(55);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:Cera Pro;font-weight:900;font-style:italic;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"opentype\")}@font-face{font-family:Cera Pro;font-weight:900;font-style:normal;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"opentype\")}@font-face{font-family:Cera Pro;font-weight:700;font-style:normal;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"opentype\")}@font-face{font-family:Cera Pro;font-weight:300;font-style:normal;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"opentype\")}@font-face{font-family:Cera Pro;font-weight:500;font-style:normal;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"opentype\")}@font-face{font-family:Cera Pro;font-weight:400;font-style:italic;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"opentype\")}@font-face{font-family:Cera Pro;font-weight:400;font-style:normal;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"opentype\")}*{padding:0;margin:0}ul{list-style:none}p,h1,h2,h3,h4,h5,ul{padding:0;margin:0}body{font-family:\"Cera Pro\",sans-serif}.container{max-width:1100px;padding:0 15px;margin:0 auto}.container--big{max-width:1320px}.button{font-family:\"Cera Pro\";font-weight:500;font-size:12px;line-height:16px;color:#fff;min-width:185px}.button.primary{background:#0064b0;border-radius:4px;height:34.83px}.section-title{font-weight:700;font-size:32px;line-height:40px;color:#0064b0;margin:34px 0 36px}.section-title--white{color:#fff}@media(max-width: 840px){.section-title{font-weight:700;font-size:24px;line-height:30px;text-align:center;margin:20px 0}}.primary-color{color:#0064b0}.gray-color{color:#969696}.size-2{font-weight:500;font-size:20px;line-height:25px}.size-3{font-weight:400;font-size:16px;line-height:20px}.grid{display:grid;row-gap:15px}.flex-center{display:flex;justify-content:center}.page-img{max-width:100%;max-height:408px}.page-content{margin:35px 0 76px}.page-avatar{float:left;margin:35px 29px 16px 0;width:423px;height:412px;object-fit:cover}@media(max-width: 840px){.page-avatar{margin:0 0 20px;width:100%;height:auto}}.reset-btn{border:none;background:inherit;cursor:pointer}.header{display:flex;justify-content:space-between;align-items:center;padding:20px 0;position:relative}@media(max-width: 840px){.header__web{display:none}}.header__mobile{background-color:#fff}@media(min-width: 841px){.header__mobile{display:none}}.header__mobile .ant-menu-inline{border-right:0}.header__mobile .ant-menu-inline a{font-weight:500;font-size:16px;line-height:20px;color:#000}.header__mobile .ant-menu-inline>.ant-menu-submenu>.ant-menu-submenu-title,.header__mobile .ant-menu-inline>.ant-menu-item,.header__mobile .ant-menu-inline .ant-menu-item{margin:0 0 0 -20px;padding:8px 0;font-weight:500;font-size:16px;line-height:20px;color:#000;min-height:20px;height:100%}.header__mobile .arrow-icon{margin-right:5px}.header__mobile .ant-menu-submenu.ant-menu-submenu-open .arrow-icon{transform:rotate(90deg)}.header__mobile .ant-menu-submenu.ant-menu-submenu-open .ant-menu-submenu-title{color:#0064b0}.header__mobile .ant-menu-submenu.ant-menu-submenu-open svg path{fill:#0064b0}.header__mobile .ant-menu-submenu-title{display:flex;justify-content:space-between}.header__mobile .ant-menu-item-group-title{padding:0}.header__mobile .sub-header__info-social{justify-content:space-evenly;margin-top:36px}.header__mobile .header__logo{font-size:12px;line-height:15px;padding:8px 16px}.header__mobile .header__logo>img{width:44px;height:44px}.header__mobile .header__main{display:grid;grid-template-columns:1fr auto 1fr;justify-items:center;height:74px;align-items:center;padding:0 16px;margin-bottom:6px;background-color:#fff;position:relative}.header__mobile .header__main.fixed{position:fixed;top:0;left:0;right:0;z-index:10;animation:height 200ms ease-in-out}.header__mobile .header__main__overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.3);z-index:10000}.header__mobile .header__main__menu{position:absolute;top:0;left:0;min-width:284px;background-color:#fff;padding:28px 17px;z-index:11000;animation:left 300ms ease-in-out}@keyframes height{0%{height:0}100%{height:74px}}@keyframes left{0%{left:-284px}100%{left:0}}.header__mobile .header__main--burger{border:none;background-color:inherit;cursor:pointer;justify-self:start;display:flex}.header__mobile .header__main--support{border:none;background-color:inherit;cursor:pointer;justify-self:flex-end;display:flex}.header__logo{font-weight:500;font-size:20px;line-height:25px;color:#000;display:flex;align-items:center}.header__logo:hover{color:#413a3a}.header__on-scroll{position:fixed;top:-167px;left:0;right:0;transition:all 300ms ease-in-out;background-color:#fff;z-index:2;border-bottom:.5px solid #0064b0}.header__on-scroll.show{top:0}.header__on-scroll .menu{padding:15px 0}.header__logo-title{max-width:282px;display:inline-block;margin-left:19px}.header__wrapper{position:relative;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");background-repeat:no-repeat;background-size:cover}.header__hover{position:absolute;left:0;right:0;top:0;bottom:0;background:rgba(255,255,255,.4);z-index:0}.header__input input{height:39px;font-size:16px}.header__input i{font-size:16px}.header__scroll-input input{height:39px;background:#fff;box-shadow:0px 3px 11px rgba(0,0,0,.15);border-radius:10px;font-weight:300;font-size:16px;line-height:20px;padding:0 13px}.header__lang{font-weight:700;font-size:20px;line-height:25px;color:#0064b0;margin-left:26px;text-transform:capitalize}.header__lang .ant-select-selection{background-color:unset;border:unset;box-shadow:none}.sub-header{display:grid;grid-template-columns:repeat(3, 1fr);padding:14px 0;align-items:center}.sub-header__info{justify-self:start;display:grid;row-gap:7px}.sub-header__info-phone{font-weight:400;font-size:20px;line-height:25px;color:#0064b0}.sub-header__info-social{display:flex;justify-content:space-between;width:161px}.sub-header__wrapper{background:linear-gradient(270deg, #0064b0 -230.29%, rgba(0, 100, 176, 0) 100%);background-size:50%;background-repeat:no-repeat;background-position-x:right}.sub-header__logo{justify-self:center}.sub-header__right{display:flex;align-items:center;justify-self:end}.sub-header__right>*+*{margin-left:30px}.ant-popover-inner{background-color:inherit;box-shadow:none}.ant-popover-inner-content{padding:0}.menu{display:flex;justify-content:space-around;align-items:center;padding:27px 0}.menu__list .ant-select-selection{background:unset;border:none;font-weight:500;font-size:16px;line-height:20px;color:#000;font-family:\"Cera Pro\",sans-serif}.menu__list .ant-select-arrow{right:0}.menu__link{color:#000;font-weight:500;font-size:16px;line-height:20px;display:flex;align-items:center;background-color:inherit;border:none;cursor:pointer}.menu__link:hover svg path{fill:#40a9ff}.menu__link:hover svg{transform:rotate(90deg)}.menu__link svg{margin-left:8px;transition:all 300ms ease-in-out}.b-wrapper{border-top:1px solid #0064b0;padding:15px 0}.b-wrapper .ant-breadcrumb>span:last-child{color:#0064b0}.slide{position:relative;display:grid}.slide__content{position:absolute;z-index:1;bottom:0;height:214px;background:linear-gradient(180deg, rgba(0, 100, 176, 0) 0%, #0064b0 100%);display:grid;width:100%;align-items:center}.slide__text{font-weight:700;font-size:32px;line-height:40px;max-width:1067px;color:#fff;padding:0;margin:0 auto}@media(max-width: 840px){.slide__text{font-weight:700;font-size:20px;line-height:26px;text-align:center}}.slide__img{object-fit:cover;width:100%;max-height:50vh}@media(max-width: 840px){.slide__img{height:512px}}.i-card{display:flex;align-items:center}@media(max-width: 840px){.i-card{display:grid;row-gap:15px}}.i-card__img{object-fit:contain;width:100%;height:100%}.i-card__content{padding-left:35px;width:100%}@media(max-width: 840px){.i-card__content{padding-left:0}}.i-card__title{font-weight:500;font-size:20px;line-height:25px;color:#000}.i-card__text{font-weight:400;font-size:16px;line-height:20px;color:#969696;margin-top:20px;margin-bottom:5px}.i-card__date{font-weight:500;font-size:16px;line-height:20px;color:#969696;display:flex;justify-content:flex-end}@media(max-width: 840px){.i-card__date{font-size:14px;line-height:18px;margin-top:10px}}.i-card__img-wrapper{width:212px;height:170px}@media(max-width: 840px){.i-card__img-wrapper{width:100%;height:auto}}.news-list{display:grid;row-gap:15px}@media(max-width: 840px){.news-list{row-gap:30px}}.section__show-all__btn{font-weight:400;font-size:16px;line-height:20px;text-align:center;text-decoration-line:underline;color:#0064b0;border:none;background:none;cursor:pointer}.section__show-all{display:flex;justify-content:flex-end;margin-top:25px;margin-bottom:34px}@media(max-width: 840px){.section__show-all{justify-content:flex-start;margin-bottom:25px}}.single__img{width:100%;margin-top:30px}.single__title{font-weight:500;font-size:36px;line-height:45px;text-align:center;color:#000;margin:40px 0}@media(max-width: 840px){.single__title{font-size:20px;line-height:25px;margin:25px 0 20px}}.single__p{font-weight:400;font-size:24px;line-height:37px;color:#000}.footer{display:grid;font-weight:400;font-size:20px;line-height:25px;color:#000;grid-template-columns:auto 1fr;justify-items:end;column-gap:20px}@media(max-width: 840px){.footer{grid-template-columns:1fr;row-gap:15px}}.footer__tel{font-weight:400;font-size:24px;line-height:30px}@media(max-width: 840px){.footer__tel{font-size:14px;line-height:18px}}.footer__contacts{display:grid;height:fit-content;align-self:center;font-weight:400;font-size:24px;line-height:30px}@media(max-width: 840px){.footer__contacts{font-size:14px;line-height:18px}}.footer__wrapper{padding-top:32px;margin-top:20px}@media(max-width: 840px){.footer__wrapper{padding-top:1px;padding-bottom:20px}}.footer__map{width:433px;height:262px}@media(max-width: 840px){.footer__map{height:120px;width:100%}}footer{background-color:#1f1f1f;padding-bottom:40px}footer .footer__body{display:flex;justify-content:space-between;align-items:center;padding-top:47px}@media(max-width: 840px){footer .footer__body{flex-direction:column-reverse;align-items:flex-start}}footer .footer__t{font-weight:300;font-size:15px;line-height:19px;color:#fff}@media(max-width: 840px){footer .footer__t{font-size:12px;line-height:15px;margin-top:30px}}.chairmans{display:grid;grid-template-columns:repeat(4, 1fr);row-gap:30px}@media(max-width: 840px){.chairmans{grid-template-columns:repeat(2, 1fr);row-gap:16px;column-gap:18px}}.min-height{min-height:450px}@media(max-width: 840px){.min-height{height:auto}}.chairman{text-align:center}.chairman__avatar{border-radius:50%;height:186px;width:186px;object-fit:cover}@media(max-width: 840px){.chairman__avatar{height:164px;width:164px}}.chairman__name{font-weight:500;font-size:20px;line-height:155.7%;color:#000;margin:26px 0 15px}@media(max-width: 840px){.chairman__name{font-size:14px;line-height:155.7%;margin:16px 0 5px}}.chairman__date{font-weight:300;font-size:20px;line-height:155.7%;color:#000}@media(max-width: 840px){.chairman__date{font-size:14px;line-height:155.7%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Cera Pro Black Italic.7fa8996.otf";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Cera Pro Black.614576a.otf";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Cera Pro Bold.23dd9a3.otf";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Cera Pro Light.e46c8e0.otf";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Cera Pro Medium.2bc02ae.otf";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Cera Pro Regular Italic.8892f77.otf";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/CeraRoundProDEMO-Regular.d13e7fe.otf";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/background.e7916b5.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(7).default("1a65cd98", content, true)

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(22);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(58);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(59);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(60);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n/* Prevents IE11 from highlighting tiles in blue */\r\n.leaflet-tile::selection {\r\n\tbackground: transparent;\r\n}\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n.leaflet-container .leaflet-overlay-pane svg {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer,\r\n.leaflet-container .leaflet-tile {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\twidth: auto;\r\n\tpadding: 0;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\t-ms-touch-action: pan-x pan-y;\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n.leaflet-container.leaflet-touch-drag {\r\n\t-ms-touch-action: pinch-zoom;\r\n\t/* Fallback for FF which doesn't support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\t-ms-touch-action: none;\r\n\ttouch-action: none;\r\n}\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n.leaflet-tile {\r\n\tfilter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n.leaflet-overlay-pane { z-index: 400; }\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n.leaflet-marker-pane  { z-index: 600; }\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.2s linear;\r\n\t   -moz-transition: opacity 0.2s linear;\r\n\t        transition: opacity 0.2s linear;\r\n\t}\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t    -ms-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\r\nsvg.leaflet-zoom-animated {\r\n\twill-change: transform;\r\n}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\t-webkit-transition: none;\r\n\t   -moz-transition: none;\r\n\t        transition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:    -moz-grab;\r\n\tcursor:         grab;\r\n\t}\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:    -moz-grabbing;\r\n\tcursor:         grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive,\r\nsvg.leaflet-image-layer.leaflet-interactive path {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline-offset: 1px;\r\n\t}\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n\r\n/* general typography */\r\n.leaflet-container {\r\n\tfont-family: \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\tfont-size: 12px;\r\n\tfont-size: 0.75rem;\r\n\tline-height: 1.5;\r\n\t}\r\n\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n.leaflet-bar a {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-bar a:hover,\r\n.leaflet-bar a:focus {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\tfont-size: 13px;\r\n\tfont-size: 1.08333em;\r\n\t}\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n.leaflet-default-icon-path { /* used only in path-guessing heuristic, see L.Icon.Default */\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n\t}\r\n\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.8);\r\n\tmargin: 0;\r\n\t}\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\tline-height: 1.4;\r\n\t}\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n.leaflet-control-attribution a:hover,\r\n.leaflet-control-attribution a:focus {\r\n\ttext-decoration: underline;\r\n\t}\r\n.leaflet-control-attribution svg {\r\n\tdisplay: inline !important;\r\n\t}\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n.leaflet-popup-content {\r\n\tmargin: 13px 24px 13px 20px;\r\n\tline-height: 1.3;\r\n\tfont-size: 13px;\r\n\tfont-size: 1.08333em;\r\n\tmin-height: 1px;\r\n\t}\r\n.leaflet-popup-content p {\r\n\tmargin: 17px 0;\r\n\tmargin: 1.3em 0;\r\n\t}\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-top: -1px;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\tpointer-events: auto;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t   -moz-transform: rotate(45deg);\r\n\t    -ms-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 24px;\r\n\theight: 24px;\r\n\tfont: 16px/24px Tahoma, Verdana, sans-serif;\r\n\tcolor: #757575;\r\n\ttext-decoration: none;\r\n\tbackground: transparent;\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button:hover,\r\n.leaflet-container a.leaflet-popup-close-button:focus {\r\n\tcolor: #585858;\r\n\t}\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\t-ms-zoom: 1;\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n\r\n/* Tooltip */\r\n/* Base styles for the element that has a tooltip */\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-tooltip.leaflet-interactive {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: \"\";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n\r\n/* Printing */\r\n\t\r\n@media print {\r\n\t/* Prevent printers from removing background-images of controls. */\r\n\t.leaflet-control {\r\n\t\t-webkit-print-color-adjust: exact;\r\n\t\tcolor-adjust: exact;\r\n\t\t}\r\n\t}\r\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC"

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/layers-2x.8f2c4d1.png";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/marker-icon.2b3e1fa.png";

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainLayout_vue_vue_type_style_index_0_id_4436128c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainLayout_vue_vue_type_style_index_0_id_4436128c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainLayout_vue_vue_type_style_index_0_id_4436128c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainLayout_vue_vue_type_style_index_0_id_4436128c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainLayout_vue_vue_type_style_index_0_id_4436128c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.mt {\n  /* padding-top: 282px; */\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IDonation_vue_vue_type_style_index_0_id_11b5dba9_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IDonation_vue_vue_type_style_index_0_id_11b5dba9_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IDonation_vue_vue_type_style_index_0_id_11b5dba9_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IDonation_vue_vue_type_style_index_0_id_11b5dba9_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IDonation_vue_vue_type_style_index_0_id_11b5dba9_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".donation{padding:20px 45px}.donation__title{font-weight:500;font-size:36px;line-height:45px;text-align:center;color:#000}@media(max-width: 840px){.donation__title{font-size:24px;line-height:30px}}.donation__p{font-weight:400;font-size:24px;line-height:37px;margin:30px 0;color:#000}@media(max-width: 840px){.donation__p{font-size:14px;line-height:155.7%}}.donation__list{margin-top:17px;display:grid;row-gap:15px}.donation__item{font-weight:500;font-size:24px;line-height:155.7%;color:#000;text-align:center}@media(max-width: 840px){.donation__item{font-size:20px;line-height:155.7%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IHeader_vue_vue_type_style_index_0_id_442eae87_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IHeader_vue_vue_type_style_index_0_id_442eae87_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IHeader_vue_vue_type_style_index_0_id_442eae87_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IHeader_vue_vue_type_style_index_0_id_442eae87_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IHeader_vue_vue_type_style_index_0_id_442eae87_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".flex{display:flex;justify-content:space-between;align-items:center}.lang{font-weight:700;font-size:20px;line-height:25px;color:#4d4d4d;margin:20px 0 28px}.lang>li{cursor:pointer}.lang>li.active{color:#0064b0}.logo-img{height:60px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IFooter_vue_vue_type_style_index_0_id_28fa09eb_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IFooter_vue_vue_type_style_index_0_id_28fa09eb_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IFooter_vue_vue_type_style_index_0_id_28fa09eb_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IFooter_vue_vue_type_style_index_0_id_28fa09eb_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IFooter_vue_vue_type_style_index_0_id_28fa09eb_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".social{display:grid;grid-template-columns:repeat(5, auto);column-gap:29px}@media(max-width: 840px){.social{justify-items:center;grid-template-columns:repeat(4, auto);row-gap:17px;margin:auto;column-gap:35px}}.social__title{font-weight:400;font-size:20px;line-height:25px;color:#fff;text-transform:uppercase}@media(max-width: 840px){.social__title{font-size:15px;line-height:19px;grid-column:1/5;grid-row:1}}.social__link{display:flex;align-items:center;height:100%}.social__link path{fill:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = 'https://api.iyman.kg/api';
axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common.Accept = 'application/json';
const newsPrefix = '/news';
const linksPrefix = '/links';
const galleryPrefix = '/gallery';
const activityPrefix = '/activity';
const frdkPrefix = '/frdk';
const charityPrefix = '/charity';
const donationPrefix = '/donate';
const frdkAboutPrefix = 'about-us/';
const searchPrefix = 'search/';
const mediaPrefix = 'youtube-media/';
const state = () => ({
  gallery: [],
  links: [],
  news: [],
  singleNews: {},
  singleGallery: {
    images: []
  },
  events: [],
  event: {},
  orgs: [],
  org: {},
  projects: [],
  frdkOrg: [],
  project: {},
  chairmans: [],
  chairman: {},
  histories: [],
  history: {},
  charity: {},
  donations: [],
  donation: {},
  frdk: [],
  totalCount: 0,
  searchResult: {},
  media: {}
});
const actions = {
  fetchGallery({
    commit
  }, page) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(galleryPrefix, {
      params: {
        page
      }
    }).then(res => {
      commit('SET_GALLERY', res.data.results || []);
      commit('SET_PAGINATION', res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  fetchGallerySingle({
    commit
  }, id) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${galleryPrefix}/${id}`).then(res => {
      commit('SET_SINGLE_GALLERY', res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  fetchLinks({
    commit
  }, page) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(linksPrefix, {
      params: {
        page
      }
    }).then(res => {
      commit('SET_LINKS', res.data.results || []);
      commit('SET_PAGINATION', res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  fetchMedia({
    commit
  }, page) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(mediaPrefix, {
      params: {
        page
      }
    }).then(res => {
      commit('SET_MEDIA', res.data.results || []);
      commit('SET_PAGINATION', res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  fetchSearch({
    commit
  }, query) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(searchPrefix, {
      params: {
        query
      }
    }).then(res => {
      commit('SET_SEARCH', res.data || {});
    }).catch(err => {
      console.log(err);
    });
  },

  fetchNews({
    commit
  }, page) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(newsPrefix, {
      params: {
        page
      }
    }).then(res => {
      commit('SET_NEWS', res.data.results || []);
      commit('SET_PAGINATION', res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  fetchSingleNews({
    commit
  }, id) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${newsPrefix}/${id}`).then(res => {
      commit('SET_SINGLE_NEW', res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  fetchActivityEvents({
    commit
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${activityPrefix}/event`).then(res => {
      commit('SET_EVENTS', res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  fetchActivityEvent({
    commit
  }, id) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${activityPrefix}/event/${id}`).then(res => {
      commit('SET_EVENT', res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  fetchActivityOrgs({
    commit
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${activityPrefix}/organization/`).then(res => {
      commit('SET_ORGS', res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  fetchActivityOrgSingle({
    commit
  }, id) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${activityPrefix}/organization/${id}`).then(res => {
      commit('SET_ORG', res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  fetchActivityProjects({
    commit
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${activityPrefix}/project-activity/`).then(res => {
      commit('SET_PROJECTS', res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  fetchActivityProject({
    commit
  }, id) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${activityPrefix}/project-activity/${id}`).then(res => {
      commit('SET_PROJECT', res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  fetchFrdkChairmans({
    commit
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${frdkPrefix}/chairman-of-the-board/`).then(res => {
      commit('SET_CHAIRMANS', res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  fetchFrdkChairman({
    commit
  }, id) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${frdkPrefix}/chairman-of-the-board/${id}`).then(res => {
      commit('SET_CHAIRMAN', res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  fetchFrdk({
    commit
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${frdkPrefix}/${frdkAboutPrefix}`).then(res => {
      commit('SET_FRDK', res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  fetchFrdkHistories({
    commit
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${frdkPrefix}/history-of-creation/`).then(res => {
      commit('SET_HISTORIES', res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  fetchFrdkHistory({
    commit
  }, id) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${frdkPrefix}/history-of-creation/${id}`).then(res => {
      commit('SET_HISTORY', res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  fetchFrdkOrgStructure({
    commit
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${frdkPrefix}/organizational-structure`).then(res => {
      commit('SET_FRDK_ORG', res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  fetchCharity({
    commit
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${charityPrefix}`).then(res => {
      commit('SET_CHARITY', res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  fetchDonations({
    commit
  }) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${donationPrefix}/`).then(res => {
      commit('SET_DONATIONS', res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  fetchDonation({
    commit
  }, id) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${donationPrefix}/${id}`).then(res => {
      commit('SET_DONATION', res.data);
    }).catch(err => {
      console.log(err);
    });
  }

};
const mutations = {
  SET_GALLERY(state, data) {
    state.gallery = data;
  },

  SET_FRDK_ORG(state, data) {
    state.frdkOrg = data;
  },

  SET_SINGLE_GALLERY(state, data) {
    state.singleGallery = data;
  },

  SET_LINKS(state, data) {
    state.links = data;
  },

  SET_SEARCH(state, data) {
    state.searchResult = data;
  },

  SET_FRDK(state, data) {
    state.frdk = data;
  },

  SET_NEWS(state, data) {
    state.news = data;
  },

  SET_PAGINATION(state, data) {
    state.totalCount = data.count;
  },

  SET_CHARITY(state, data) {
    state.charity = data;
  },

  SET_EVENTS(state, data) {
    state.events = data;
  },

  SET_EVENT(state, data) {
    state.event = data;
  },

  SET_MEDIA(state, data) {
    state.media = data;
  },

  SET_DONATIONS(state, data) {
    state.donations = data;
  },

  SET_DONATION(state, data) {
    state.donation = data;
  },

  SET_CHAIRMANS(state, data) {
    state.chairmans = data;
  },

  SET_CHAIRMAN(state, data) {
    state.chairman = data;
  },

  SET_HISTORIES(state, data) {
    state.histories = data;
  },

  SET_HISTORY(state, data) {
    state.history = data;
  },

  SET_ORGS(state, data) {
    state.orgs = data;
  },

  SET_ORG(state, data) {
    state.org = data;
  },

  SET_PROJECTS(state, data) {
    state.projects = data;
  },

  SET_PROJECT(state, data) {
    state.project = data;
  },

  SET_SINGLE_NEW(state, data) {
    state.singleNews = data;
  }

};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.delete-all.js");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.every.js");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.filter.js");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find.js");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.find-key.js");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.includes.js");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.key-of.js");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-keys.js");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.map-values.js");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.merge.js");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.reduce.js");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.some.js");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.map.update.js");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Agile_vue_vue_type_style_index_0_id_107516b9_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Agile_vue_vue_type_style_index_0_id_107516b9_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Agile_vue_vue_type_style_index_0_id_107516b9_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Agile_vue_vue_type_style_index_0_id_107516b9_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Agile_vue_vue_type_style_index_0_id_107516b9_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.agile {\n    position: relative;\n}\n.agile--ssr .agile__slides--cloned {\n    display: none\n}\n.agile--ssr .agile__slides > * {\n    overflow: hidden;\n    width: 0\n}\n.agile--ssr .agile__slides > *:first-child {\n    width: 100%\n}\n.agile--rtl .agile__track,\n  .agile--rtl .agile__slides,\n  .agile--rtl .agile__actions,\n  .agile--rtl .agile__dots {\n    flex-direction: row-reverse;\n}\n.agile:focus, .agile:active, .agile *:focus, .agile *:active {\n    outline: none;\n}\n.agile__list {\n    display: block;\n    overflow: hidden;\n    position: relative;\n    width: 100%;\n}\n.agile__track {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n}\n.agile__actions {\n    display: flex;\n    justify-content: space-between;\n}\n.agile--no-nav-buttons .agile__actions {\n    justify-content: center;\n}\n.agile__slides {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    flex-shrink: unset;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n}\n.agile--disabled .agile__slides {\n    display: block;\n    width: 100%;\n}\n.agile__slide {\n    display: block;\n    flex-grow: 1;\n    flex-shrink: 0;\n}\n.agile__slide,\n  .agile__slide * {\n    -webkit-user-drag: none;\n}\n.agile--fade .agile__slide {\n    opacity: 0;\n    position: relative;\n    z-index: 0;\n}\n.agile--fade .agile__slide--active {\n    opacity: 1;\n    z-index: 2;\n}\n.agile--fade .agile__slide--expiring {\n    opacity: 1;\n    transition-duration: 0s;\n    z-index: 1;\n}\n.agile__nav-button[disabled] {\n    cursor: default;\n}\n.agile__dots {\n    align-items: center;\n    display: flex;\n    list-style: none;\n    padding: 0;\n    white-space: nowrap;\n}\n.agile__dot button {\n    cursor: pointer;\n    display: block;\n    font-size: 0;\n    line-height: 0;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "IBreadcrumb", function() { return IBreadcrumb; });
__webpack_require__.d(components_namespaceObject, "ICard", function() { return ICard; });
__webpack_require__.d(components_namespaceObject, "ICard2", function() { return ICard2; });
__webpack_require__.d(components_namespaceObject, "IDonation", function() { return IDonation; });
__webpack_require__.d(components_namespaceObject, "IFooter", function() { return IFooter; });
__webpack_require__.d(components_namespaceObject, "IHeader", function() { return IHeader; });
__webpack_require__.d(components_namespaceObject, "IPagination", function() { return IPagination; });
__webpack_require__.d(components_namespaceObject, "ImageCard", function() { return ImageCard; });
__webpack_require__.d(components_namespaceObject, "ImageList", function() { return ImageList; });
__webpack_require__.d(components_namespaceObject, "ImageModal", function() { return ImageModal; });
__webpack_require__.d(components_namespaceObject, "LinksList", function() { return LinksList; });
__webpack_require__.d(components_namespaceObject, "MediaList", function() { return MediaList; });
__webpack_require__.d(components_namespaceObject, "NewsGallery", function() { return NewsGallery; });
__webpack_require__.d(components_namespaceObject, "NewsList", function() { return NewsList; });
__webpack_require__.d(components_namespaceObject, "HomeSlider", function() { return HomeSlider; });
__webpack_require__.d(components_namespaceObject, "NewsContent", function() { return NewsContent; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(5);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(28);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(8);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(10);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(14);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(11);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(15);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _0e6a7e2e = () => interopDefault(__webpack_require__.e(/* import() | pages/charity */ 24).then(__webpack_require__.bind(null, 149)));

const _2a6e5963 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 27).then(__webpack_require__.bind(null, 150)));

const _7e890de6 = () => interopDefault(__webpack_require__.e(/* import() | pages/gallery/index */ 26).then(__webpack_require__.bind(null, 151)));

const _232a0866 = () => interopDefault(__webpack_require__.e(/* import() | pages/links/index */ 28).then(__webpack_require__.bind(null, 152)));

const _2f8dbb90 = () => interopDefault(__webpack_require__.e(/* import() | pages/media/index */ 29).then(__webpack_require__.bind(null, 153)));

const _372e82d5 = () => interopDefault(__webpack_require__.e(/* import() | pages/news/index */ 31).then(__webpack_require__.bind(null, 154)));

const _61c8a732 = () => interopDefault(__webpack_require__.e(/* import() | pages/search */ 32).then(__webpack_require__.bind(null, 155)));

const _47ba6cdf = () => interopDefault(__webpack_require__.e(/* import() | pages/about/about-us */ 14).then(__webpack_require__.bind(null, 156)));

const _cdc5e20e = () => interopDefault(__webpack_require__.e(/* import() | pages/about/chairman/index */ 16).then(__webpack_require__.bind(null, 157)));

const _7c35efa3 = () => interopDefault(__webpack_require__.e(/* import() | pages/about/history */ 17).then(__webpack_require__.bind(null, 158)));

const _4c8c0398 = () => interopDefault(__webpack_require__.e(/* import() | pages/about/organization */ 18).then(__webpack_require__.bind(null, 159)));

const _3c6aea1c = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/event/index */ 20).then(__webpack_require__.bind(null, 160)));

const _2c24caa2 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/organizations/index */ 22).then(__webpack_require__.bind(null, 161)));

const _2ad244d0 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/project */ 23).then(__webpack_require__.bind(null, 162)));

const _1f3708be = () => interopDefault(__webpack_require__.e(/* import() | pages/about/chairman/_id */ 15).then(__webpack_require__.bind(null, 163)));

const _22a4c384 = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/event/_id */ 19).then(__webpack_require__.bind(null, 164)));

const _6a490d8a = () => interopDefault(__webpack_require__.e(/* import() | pages/activity/organizations/_id */ 21).then(__webpack_require__.bind(null, 165)));

const _76a55c64 = () => interopDefault(__webpack_require__.e(/* import() | pages/gallery/_id */ 25).then(__webpack_require__.bind(null, 166)));

const _50b9367d = () => interopDefault(__webpack_require__.e(/* import() | pages/news/_id */ 30).then(__webpack_require__.bind(null, 167)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/charity",
    component: _0e6a7e2e,
    name: "charity___ky"
  }, {
    path: "/en",
    component: _2a6e5963,
    name: "index___en"
  }, {
    path: "/gallery",
    component: _7e890de6,
    name: "gallery___ky"
  }, {
    path: "/links",
    component: _232a0866,
    name: "links___ky"
  }, {
    path: "/media",
    component: _2f8dbb90,
    name: "media___ky"
  }, {
    path: "/news",
    component: _372e82d5,
    name: "news___ky"
  }, {
    path: "/ru",
    component: _2a6e5963,
    name: "index___ru"
  }, {
    path: "/search",
    component: _61c8a732,
    name: "search___ky"
  }, {
    path: "/about/about-us",
    component: _47ba6cdf,
    name: "about-about-us___ky"
  }, {
    path: "/about/chairman",
    component: _cdc5e20e,
    name: "about-chairman___ky"
  }, {
    path: "/about/history",
    component: _7c35efa3,
    name: "about-history___ky"
  }, {
    path: "/about/organization",
    component: _4c8c0398,
    name: "about-organization___ky"
  }, {
    path: "/activity/event",
    component: _3c6aea1c,
    name: "activity-event___ky"
  }, {
    path: "/activity/organizations",
    component: _2c24caa2,
    name: "activity-organizations___ky"
  }, {
    path: "/activity/project",
    component: _2ad244d0,
    name: "activity-project___ky"
  }, {
    path: "/en/charity",
    component: _0e6a7e2e,
    name: "charity___en"
  }, {
    path: "/en/gallery",
    component: _7e890de6,
    name: "gallery___en"
  }, {
    path: "/en/links",
    component: _232a0866,
    name: "links___en"
  }, {
    path: "/en/media",
    component: _2f8dbb90,
    name: "media___en"
  }, {
    path: "/en/news",
    component: _372e82d5,
    name: "news___en"
  }, {
    path: "/en/search",
    component: _61c8a732,
    name: "search___en"
  }, {
    path: "/ru/charity",
    component: _0e6a7e2e,
    name: "charity___ru"
  }, {
    path: "/ru/gallery",
    component: _7e890de6,
    name: "gallery___ru"
  }, {
    path: "/ru/links",
    component: _232a0866,
    name: "links___ru"
  }, {
    path: "/ru/media",
    component: _2f8dbb90,
    name: "media___ru"
  }, {
    path: "/ru/news",
    component: _372e82d5,
    name: "news___ru"
  }, {
    path: "/ru/search",
    component: _61c8a732,
    name: "search___ru"
  }, {
    path: "/en/about/about-us",
    component: _47ba6cdf,
    name: "about-about-us___en"
  }, {
    path: "/en/about/chairman",
    component: _cdc5e20e,
    name: "about-chairman___en"
  }, {
    path: "/en/about/history",
    component: _7c35efa3,
    name: "about-history___en"
  }, {
    path: "/en/about/organization",
    component: _4c8c0398,
    name: "about-organization___en"
  }, {
    path: "/en/activity/event",
    component: _3c6aea1c,
    name: "activity-event___en"
  }, {
    path: "/en/activity/organizations",
    component: _2c24caa2,
    name: "activity-organizations___en"
  }, {
    path: "/en/activity/project",
    component: _2ad244d0,
    name: "activity-project___en"
  }, {
    path: "/ru/about/about-us",
    component: _47ba6cdf,
    name: "about-about-us___ru"
  }, {
    path: "/ru/about/chairman",
    component: _cdc5e20e,
    name: "about-chairman___ru"
  }, {
    path: "/ru/about/history",
    component: _7c35efa3,
    name: "about-history___ru"
  }, {
    path: "/ru/about/organization",
    component: _4c8c0398,
    name: "about-organization___ru"
  }, {
    path: "/ru/activity/event",
    component: _3c6aea1c,
    name: "activity-event___ru"
  }, {
    path: "/ru/activity/organizations",
    component: _2c24caa2,
    name: "activity-organizations___ru"
  }, {
    path: "/ru/activity/project",
    component: _2ad244d0,
    name: "activity-project___ru"
  }, {
    path: "/en/about/chairman/:id",
    component: _1f3708be,
    name: "about-chairman-id___en"
  }, {
    path: "/en/activity/event/:id",
    component: _22a4c384,
    name: "activity-event-id___en"
  }, {
    path: "/en/activity/organizations/:id",
    component: _6a490d8a,
    name: "activity-organizations-id___en"
  }, {
    path: "/ru/about/chairman/:id",
    component: _1f3708be,
    name: "about-chairman-id___ru"
  }, {
    path: "/ru/activity/event/:id",
    component: _22a4c384,
    name: "activity-event-id___ru"
  }, {
    path: "/ru/activity/organizations/:id",
    component: _6a490d8a,
    name: "activity-organizations-id___ru"
  }, {
    path: "/about/chairman/:id",
    component: _1f3708be,
    name: "about-chairman-id___ky"
  }, {
    path: "/activity/event/:id",
    component: _22a4c384,
    name: "activity-event-id___ky"
  }, {
    path: "/activity/organizations/:id",
    component: _6a490d8a,
    name: "activity-organizations-id___ky"
  }, {
    path: "/en/gallery/:id",
    component: _76a55c64,
    name: "gallery-id___en"
  }, {
    path: "/en/news/:id",
    component: _50b9367d,
    name: "news-id___en"
  }, {
    path: "/ru/gallery/:id",
    component: _76a55c64,
    name: "gallery-id___ru"
  }, {
    path: "/ru/news/:id",
    component: _50b9367d,
    name: "news-id___ru"
  }, {
    path: "/gallery/:id",
    component: _76a55c64,
    name: "gallery-id___ky"
  }, {
    path: "/news/:id",
    component: _50b9367d,
    name: "news-id___ky"
  }, {
    path: "/",
    component: _2a6e5963,
    name: "index___ky"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_vm._ssrNode("<div class=\"error\">", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode("<p class=\"description\">", "</p>", [typeof _vm.$route === 'undefined' ? _vm._ssrNode("<a href=\"/\" class=\"error-link\">", "</a>") : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "c3329e74"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "15d4947a"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/buefy/dist/buefy.css
var buefy = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/ant-design-vue/dist/antd.css
var antd = __webpack_require__(44);

// EXTERNAL MODULE: ./static/style/main.scss
var main = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/leaflet/dist/leaflet.css
var leaflet = __webpack_require__(56);

// EXTERNAL MODULE: ./layouts/MainLayout.vue + 4 modules
var MainLayout = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/layouts/default.vue?vue&type=template&id=0040005c&
var defaultvue_type_template_id_0040005c_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('Nuxt');
};

var defaultvue_type_template_id_0040005c_staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue?vue&type=template&id=0040005c&

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue

var script = {}


/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_0040005c_render,
  defaultvue_type_template_id_0040005c_staticRenderFns,
  false,
  null,
  null,
  "0d4acd6a"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js











const layouts = {
  "_MainLayout": sanitizeComponent(MainLayout["a" /* default */]),
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(69), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {}; // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}
// CONCATENATED MODULE: ./.nuxt/components/index.js
const IBreadcrumb = () => __webpack_require__.e(/* import() | components/i-breadcrumb */ 2).then(__webpack_require__.bind(null, 91)).then(c => wrapFunctional(c.default || c));
const ICard = () => __webpack_require__.e(/* import() | components/i-card */ 3).then(__webpack_require__.bind(null, 92)).then(c => wrapFunctional(c.default || c));
const ICard2 = () => __webpack_require__.e(/* import() | components/i-card2 */ 4).then(__webpack_require__.bind(null, 112)).then(c => wrapFunctional(c.default || c));
const IDonation = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 13)).then(c => wrapFunctional(c.default || c));
const IFooter = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 34)).then(c => wrapFunctional(c.default || c));
const IHeader = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 35)).then(c => wrapFunctional(c.default || c));
const IPagination = () => __webpack_require__.e(/* import() | components/i-pagination */ 5).then(__webpack_require__.bind(null, 107)).then(c => wrapFunctional(c.default || c));
const ImageCard = () => __webpack_require__.e(/* import() | components/image-card */ 6).then(__webpack_require__.bind(null, 97)).then(c => wrapFunctional(c.default || c));
const ImageList = () => __webpack_require__.e(/* import() | components/image-list */ 7).then(__webpack_require__.bind(null, 133)).then(c => wrapFunctional(c.default || c));
const ImageModal = () => __webpack_require__.e(/* import() | components/image-modal */ 8).then(__webpack_require__.bind(null, 98)).then(c => wrapFunctional(c.default || c));
const LinksList = () => __webpack_require__.e(/* import() | components/links-list */ 9).then(__webpack_require__.bind(null, 118)).then(c => wrapFunctional(c.default || c));
const MediaList = () => __webpack_require__.e(/* import() | components/media-list */ 10).then(__webpack_require__.bind(null, 120)).then(c => wrapFunctional(c.default || c));
const NewsGallery = () => __webpack_require__.e(/* import() | components/news-gallery */ 12).then(__webpack_require__.bind(null, 106)).then(c => wrapFunctional(c.default || c));
const NewsList = () => __webpack_require__.e(/* import() | components/news-list */ 13).then(__webpack_require__.bind(null, 94)).then(c => wrapFunctional(c.default || c));
const HomeSlider = () => __webpack_require__.e(/* import() | components/home-slider */ 1).then(__webpack_require__.bind(null, 117)).then(c => wrapFunctional(c.default || c));
const NewsContent = () => __webpack_require__.e(/* import() | components/news-content */ 11).then(__webpack_require__.bind(null, 119)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: external "buefy"
var external_buefy_ = __webpack_require__(29);
var external_buefy_default = /*#__PURE__*/__webpack_require__.n(external_buefy_);

// CONCATENATED MODULE: ./.nuxt/buefy.js


external_vue_default.a.use(external_buefy_default.a, {
  "css": true,
  "materialDesignIcons": false,
  "materialDesignIconsHRef": "https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css",
  "async": true
});
// EXTERNAL MODULE: ./node_modules/is-https/dist/index.js
var dist = __webpack_require__(30);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./.nuxt/nuxt-i18n/options.js
var nuxt_i18n_options = __webpack_require__(0);

// EXTERNAL MODULE: ./.nuxt/nuxt-i18n/utils-common.js
var utils_common = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@nuxtjs/i18n/node_modules/ufo/dist/index.cjs
var ufo_dist = __webpack_require__(9);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.utils.js


 // @ts-ignore


/** @typedef {import('../../types/internal').ResolvedOptions} ResolvedOptions */

/**
 * Asynchronously load messages from translation files
 *
 * @param {import('@nuxt/types').Context} context
 * @param {string} locale Language code to load
 * @return {Promise<void>}
 */

async function loadLanguageAsync(context, locale) {
  const {
    app
  } = context;
  const {
    i18n
  } = app;

  if (!i18n.loadedLanguages) {
    i18n.loadedLanguages = [];
  }

  if (!i18n.loadedLanguages.includes(locale)) {
    const localeObject = nuxt_i18n_options["c" /* options */].normalizedLocales.find(l => l.code === locale);

    if (localeObject) {
      const {
        file
      } = localeObject;

      if (file) {
        /*  */
      } else {
        console.warn(Object(utils_common["b" /* formatMessage */])(`Could not find lang file for locale ${locale}`));
      }
    } else {
      console.warn(Object(utils_common["b" /* formatMessage */])(`Attempted to load messages for non-existant locale code "${locale}"`));
    }
  }
}
/**
 * Resolves base URL value if provided as function. Otherwise just returns verbatim.
 *
 * @param {string | ((context: import('@nuxt/types').Context) => string)} baseUrl
 * @param {import('@nuxt/types').Context} context
 * @param {import('../../types').Locale} localeCode
 * @param {Pick<ResolvedOptions, 'differentDomains' | 'normalizedLocales'>} options
 * @return {string}
 */

function resolveBaseUrl(baseUrl, context, localeCode, {
  differentDomains,
  normalizedLocales
}) {
  if (typeof baseUrl === 'function') {
    return baseUrl(context);
  }

  if (differentDomains && localeCode) {
    // Lookup the `differentDomain` origin associated with given locale.
    const domain = getDomainFromLocale(localeCode, context.req, {
      normalizedLocales
    });

    if (domain) {
      return domain;
    }
  }

  return baseUrl;
}
/**
 * Gets the `differentDomain` domain from locale.
 *
 * @param {string} localeCode
 * @param {import('http').IncomingMessage | undefined} req
 * @param {Pick<ResolvedOptions, 'normalizedLocales'>} options
 * @return {string | undefined}
 */

function getDomainFromLocale(localeCode, req, {
  normalizedLocales
}) {
  // Lookup the `differentDomain` origin associated with given locale.
  const lang = normalizedLocales.find(locale => locale.code === localeCode);

  if (lang && lang.domain) {
    if (Object(ufo_dist["hasProtocol"])(lang.domain)) {
      return lang.domain;
    }

    let protocol;

    if (true) {
      protocol = req && dist_default()(req) ? 'https' : 'http';
    } else {}

    return `${protocol}://${lang.domain}`;
  } // eslint-disable-next-line no-console


  console.warn(Object(utils_common["b" /* formatMessage */])(`Could not find domain name for locale ${localeCode}`));
}
/**
 * @param {import('vuex').Store<Record<string, boolean>>} store
 * @param {Required<import('../../types').VuexOptions>} vuex
 * @param {readonly string[]} localeCodes
 */

function registerStore(store, vuex, localeCodes) {
  /** @typedef {{
   *    locale?: string
   *    messages?: Record<string, string>
   *    routeParams?: Record<string, Record<string, string>>
   * }} ModuleStore
   *
   * @type {import('vuex').Module<ModuleStore, {}>}
   */
  const storeModule = {
    namespaced: true,
    state: () => ({ ...(vuex.syncRouteParams ? {
        routeParams: {}
      } : {})
    }),
    actions: { ...(vuex.syncRouteParams ? {
        setRouteParams({
          commit
        }, params) {
          if (false) {}

          commit('setRouteParams', params);
        }

      } : {})
    },
    mutations: { ...(vuex.syncRouteParams ? {
        setRouteParams(state, params) {
          state.routeParams = params;
        }

      } : {})
    },
    getters: { ...(vuex.syncRouteParams ? {
        localeRouteParams: ({
          routeParams
        }) => {
          /** @type {(locale: string) => Record<string, string>} */
          const paramsGetter = locale => routeParams && routeParams[locale] || {};

          return paramsGetter;
        }
      } : {})
    }
  };
  store.registerModule(vuex.moduleName, storeModule, {
    preserveState: !!store.state[vuex.moduleName]
  });
}
/**
 * Validate setRouteParams action's payload
 *
 * @param {object} routeParams The action's payload
 * @param {readonly string[]} localeCodes
 */

function validateRouteParams(routeParams, localeCodes) {
  if (!isObject(routeParams)) {
    // eslint-disable-next-line no-console
    console.warn(Object(utils_common["b" /* formatMessage */])('Route params should be an object'));
    return;
  }

  for (const [key, value] of Object.entries(routeParams)) {
    if (!localeCodes.includes(key)) {
      // eslint-disable-next-line no-console
      console.warn(Object(utils_common["b" /* formatMessage */])(`Trying to set route params for key ${key} which is not a valid locale`));
    } else if (!isObject(value)) {
      // eslint-disable-next-line no-console
      console.warn(Object(utils_common["b" /* formatMessage */])(`Trying to set route params for locale ${key} with a non-object value`));
    }
  }
}
/**
 * Merge external additional messages
 *
 * @param {import('../../types').NuxtI18nInstance} i18n
 * @param {ResolvedOptions['additionalMessages']} additionalMessages
 * @param {ResolvedOptions['localeCodes']} localeCodes
 * @param {string[] | null} [onlyLocales=null]
 * @return {void}
 */

function mergeAdditionalMessages(i18n, additionalMessages, localeCodes, onlyLocales) {
  const locales = onlyLocales || localeCodes;

  for (const additionalEntry of additionalMessages) {
    for (const locale of locales) {
      const existingMessages = i18n.getLocaleMessage(locale);
      i18n.mergeLocaleMessage(locale, additionalEntry[locale]);
      i18n.mergeLocaleMessage(locale, existingMessages);
    }
  }
}
/**
 * @param {any} value
 * @return {boolean}
 */

function isObject(value) {
  return value && !Array.isArray(value) && typeof value === 'object';
}
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/middleware.js
// @ts-ignore

/** @type {import('@nuxt/types').Middleware} */

const i18nMiddleware = async context => {
  const {
    app,
    isHMR
  } = context;

  if (isHMR) {
    return;
  }

  const [status, redirectPath, preserveQuery] = await app.i18n.__onNavigate(context.route);

  if (status && redirectPath) {
    const query = preserveQuery ? context.route.query : undefined;
    context.redirect(status, redirectPath, query);
  }
};

_nuxt_middleware.nuxti18n = i18nMiddleware;
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.routing.js



 // @ts-ignore


/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localePath']}
 */

function localePath(route, locale) {
  const localizedRoute = resolveRoute.call(this, route, locale);
  return localizedRoute ? localizedRoute.route.redirectedFrom || localizedRoute.route.fullPath : '';
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localeRoute']}
 */


function localeRoute(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved ? resolved.route : undefined;
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localeLocation']}
 */


function localeLocation(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved ? resolved.location : undefined;
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @param {import('vue-router').RawLocation} route
 * @param {string} [locale]
 * @return {ReturnType<import('vue-router').default['resolve']> | undefined}
 */


function resolveRoute(route, locale) {
  // Abort if no route or no locale
  if (!route) {
    return;
  }

  const {
    i18n
  } = this;
  locale = locale || i18n.locale;

  if (!locale) {
    return;
  } // If route parameter is a string, check if it's a path or name of route.


  if (typeof route === 'string') {
    if (route[0] === '/') {
      // If route parameter is a path, create route object with path.
      route = {
        path: route
      };
    } else {
      // Else use it as route name.
      route = {
        name: route
      };
    }
  }

  let localizedRoute = Object.assign({}, route);

  if (localizedRoute.path && !localizedRoute.name) {
    const resolvedRoute = this.router.resolve(localizedRoute).route;
    const resolvedRouteName = this.getRouteBaseName(resolvedRoute);

    if (resolvedRouteName) {
      localizedRoute = {
        name: getLocaleRouteName(resolvedRouteName, locale),
        params: resolvedRoute.params,
        query: resolvedRoute.query,
        hash: resolvedRoute.hash
      };
    } else {
      const isDefaultLocale = locale === nuxt_i18n_options["c" /* options */].defaultLocale; // if route has a path defined but no name, resolve full route using the path

      const isPrefixed = // don't prefix default locale
      !(isDefaultLocale && [nuxt_i18n_options["a" /* Constants */].STRATEGIES.PREFIX_EXCEPT_DEFAULT, nuxt_i18n_options["a" /* Constants */].STRATEGIES.PREFIX_AND_DEFAULT].includes(nuxt_i18n_options["c" /* options */].strategy)) && // no prefix for any language
      !(nuxt_i18n_options["c" /* options */].strategy === nuxt_i18n_options["a" /* Constants */].STRATEGIES.NO_PREFIX) && // no prefix for different domains
      !i18n.differentDomains;

      if (isPrefixed) {
        localizedRoute.path = `/${locale}${localizedRoute.path}`;
      }

      localizedRoute.path = nuxt_i18n_options["b" /* nuxtOptions */].trailingSlash ? Object(ufo_dist["withTrailingSlash"])(localizedRoute.path, true) : Object(ufo_dist["withoutTrailingSlash"])(localizedRoute.path, true);
    }
  } else {
    if (!localizedRoute.name && !localizedRoute.path) {
      localizedRoute.name = this.getRouteBaseName();
    }

    localizedRoute.name = getLocaleRouteName(localizedRoute.name, locale);
    const {
      params
    } = localizedRoute;

    if (params && params['0'] === undefined && params.pathMatch) {
      params['0'] = params.pathMatch;
    }
  }

  const resolvedRoute = this.router.resolve(localizedRoute);

  if (resolvedRoute.route.name) {
    return resolvedRoute;
  } // If didn't resolve to an existing route then just return resolved route based on original input.


  return this.router.resolve(route);
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['switchLocalePath']}
 */


function switchLocalePath(locale) {
  const name = this.getRouteBaseName();

  if (!name) {
    return '';
  }

  const {
    i18n,
    route,
    store
  } = this;
  const {
    params,
    ...routeCopy
  } = route;
  let langSwitchParams = {};

  if (nuxt_i18n_options["c" /* options */].vuex && nuxt_i18n_options["c" /* options */].vuex.syncRouteParams && store) {
    langSwitchParams = store.getters[`${nuxt_i18n_options["c" /* options */].vuex.moduleName}/localeRouteParams`](locale);
  }

  const baseRoute = Object.assign({}, routeCopy, {
    name,
    params: { ...params,
      ...langSwitchParams,
      0: params.pathMatch
    }
  });
  let path = this.localePath(baseRoute, locale); // Handle different domains

  if (i18n.differentDomains) {
    const getDomainOptions = {
      differentDomains: i18n.differentDomains,
      normalizedLocales: nuxt_i18n_options["c" /* options */].normalizedLocales
    };
    const domain = getDomainFromLocale(locale, this.req, getDomainOptions);

    if (domain) {
      path = domain + path;
    }
  }

  return path;
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['getRouteBaseName']}
 */


function getRouteBaseName(givenRoute) {
  const route = givenRoute !== undefined ? givenRoute : this.route;

  if (!route || !route.name) {
    return;
  }

  return route.name.split(nuxt_i18n_options["c" /* options */].routesNameSeparator)[0];
}
/**
 * @param {string | undefined} routeName
 * @param {string} locale
 */


function getLocaleRouteName(routeName, locale) {
  let name = routeName + (nuxt_i18n_options["c" /* options */].strategy === nuxt_i18n_options["a" /* Constants */].STRATEGIES.NO_PREFIX ? '' : nuxt_i18n_options["c" /* options */].routesNameSeparator + locale);

  if (locale === nuxt_i18n_options["c" /* options */].defaultLocale && nuxt_i18n_options["c" /* options */].strategy === nuxt_i18n_options["a" /* Constants */].STRATEGIES.PREFIX_AND_DEFAULT) {
    name += nuxt_i18n_options["c" /* options */].routesNameSeparator + nuxt_i18n_options["c" /* options */].defaultLocaleRouteNameSuffix;
  }

  return name;
}
/**
 * @template {(...args: any[]) => any} T
 * @param {T} targetFunction
 * @return {(this: Vue, ...args: Parameters<T>) => ReturnType<T>}
 */


const VueInstanceProxy = function (targetFunction) {
  return function () {
    var _this$$root$context, _this$$ssrContext;

    const proxy = {
      getRouteBaseName: this.getRouteBaseName,
      i18n: this.$i18n,
      localePath: this.localePath,
      localeRoute: this.localeRoute,
      localeLocation: this.localeLocation,
      // @ts-ignore
      req:  true ? ((_this$$root$context = this.$root.context) === null || _this$$root$context === void 0 ? void 0 : _this$$root$context.req) || ((_this$$ssrContext = this.$ssrContext) === null || _this$$ssrContext === void 0 ? void 0 : _this$$ssrContext.req) : undefined,
      route: this.$route,
      router: this.$router,
      store: this.$store
    };
    return targetFunction.call(proxy, ...arguments);
  };
};
/**
 * @template {(...args: any[]) => any} T
 * @param {import('@nuxt/types').Context} context
 * @param {T} targetFunction
 * @return {(...args: Parameters<T>) => ReturnType<T>}
 */


const NuxtContextProxy = function (context, targetFunction) {
  return function () {
    const {
      app,
      req,
      route,
      store
    } = context;
    const proxy = {
      getRouteBaseName: app.getRouteBaseName,
      i18n: app.i18n,
      localePath: app.localePath,
      localeLocation: app.localeLocation,
      localeRoute: app.localeRoute,
      req:  true ? req : undefined,
      route,
      router: app.router,
      store
    };
    return targetFunction.call(proxy, ...arguments);
  };
};
/** @type {import('vue').PluginObject<void>} */


const plugin_routing_plugin = {
  install(Vue) {
    Vue.mixin({
      methods: {
        localePath: VueInstanceProxy(localePath),
        localeRoute: VueInstanceProxy(localeRoute),
        localeLocation: VueInstanceProxy(localeLocation),
        switchLocalePath: VueInstanceProxy(switchLocalePath),
        getRouteBaseName: VueInstanceProxy(getRouteBaseName)
      }
    });
  }

};
/** @type {import('@nuxt/types').Plugin} */

/* harmony default export */ var plugin_routing = (context => {
  external_vue_default.a.use(plugin_routing_plugin);
  const {
    app,
    store
  } = context;
  app.localePath = context.localePath = NuxtContextProxy(context, localePath);
  app.localeRoute = context.localeRoute = NuxtContextProxy(context, localeRoute);
  app.localeLocation = context.localeLocation = NuxtContextProxy(context, localeLocation);
  app.switchLocalePath = context.switchLocalePath = NuxtContextProxy(context, switchLocalePath);
  app.getRouteBaseName = context.getRouteBaseName = NuxtContextProxy(context, getRouteBaseName);

  if (store) {
    store.localePath = app.localePath;
    store.localeRoute = app.localeRoute;
    store.localeLocation = app.localeLocation;
    store.switchLocalePath = app.switchLocalePath;
    store.getRouteBaseName = app.getRouteBaseName;
  }
});
// EXTERNAL MODULE: external "vue-i18n"
var external_vue_i18n_ = __webpack_require__(16);
var external_vue_i18n_default = /*#__PURE__*/__webpack_require__.n(external_vue_i18n_);

// EXTERNAL MODULE: ./.nuxt/nuxt-i18n/head-meta.js
var head_meta = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/klona/full/index.mjs
function set(obj, key, val) {
	if (typeof val.value === 'object') val.value = klona(val.value);
	if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === '__proto__') {
		Object.defineProperty(obj, key, val);
	} else obj[key] = val.value;
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var i=0, k, list, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		tmp = Object.create(x.__proto__ || null);
	} else if (str === '[object Array]') {
		tmp = Array(x.length);
	} else if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
	} else if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
	} else if (str === '[object Date]') {
		tmp = new Date(+x);
	} else if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
	} else if (str === '[object DataView]') {
		tmp = new x.constructor( klona(x.buffer) );
	} else if (str === '[object ArrayBuffer]') {
		tmp = x.slice(0);
	} else if (str.slice(-6) === 'Array]') {
		// ArrayBuffer.isView(x)
		// ~> `new` bcuz `Buffer.slice` => ref
		tmp = new x.constructor(x);
	}

	if (tmp) {
		for (list=Object.getOwnPropertySymbols(x); i < list.length; i++) {
			set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]));
		}

		for (i=0, list=Object.getOwnPropertyNames(x); i < list.length; i++) {
			if (Object.hasOwnProperty.call(tmp, k=list[i]) && tmp[k] === x[k]) continue;
			set(tmp, k, Object.getOwnPropertyDescriptor(x, k));
		}
	}

	return tmp || x;
}

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.main.js





 // @ts-ignore

 // @ts-ignore


external_vue_default.a.use(external_vue_i18n_default.a);
/** @type {import('@nuxt/types').Plugin} */

/* harmony default export */ var plugin_main = (async context => {
  const {
    app,
    route,
    store,
    req,
    res,
    redirect
  } = context;

  if (nuxt_i18n_options["c" /* options */].vuex && store) {
    registerStore(store, nuxt_i18n_options["c" /* options */].vuex, nuxt_i18n_options["c" /* options */].localeCodes);
  }

  const {
    lazy
  } = nuxt_i18n_options["c" /* options */];
  const injectInNuxtState = lazy && (lazy === true || lazy.skipNuxtState !== true);

  if ( true && injectInNuxtState) {
    const devalue = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 90, 7))).default;
    context.beforeNuxtRender(({
      nuxtState
    }) => {
      /** @type {Record<string, import('vue-i18n').LocaleMessageObject>} */
      const langs = {};
      const {
        fallbackLocale,
        locale
      } = app.i18n;

      if (locale && locale !== fallbackLocale) {
        // @ts-ignore Using internal API to avoid unnecessary cloning.
        const messages = app.i18n._getMessages()[locale];

        if (messages) {
          try {
            devalue(messages);
            langs[locale] = messages;
          } catch {// Ignore - client-side will load the chunk asynchronously.
          }
        }
      }

      nuxtState.__i18n = {
        langs
      };
    });
  }

  const {
    alwaysRedirect,
    fallbackLocale,
    redirectOn,
    useCookie,
    cookieKey,
    cookieDomain,
    cookieSecure,
    cookieCrossOrigin
  } =
  /** @type {Required<import('../../types').DetectBrowserLanguageOptions>} */
  nuxt_i18n_options["c" /* options */].detectBrowserLanguage;
  const getLocaleFromRoute = Object(utils_common["a" /* createLocaleFromRouteGetter */])(nuxt_i18n_options["c" /* options */].localeCodes, {
    routesNameSeparator: nuxt_i18n_options["c" /* options */].routesNameSeparator,
    defaultLocaleRouteNameSuffix: nuxt_i18n_options["c" /* options */].defaultLocaleRouteNameSuffix
  });
  /**
   * @param {string | undefined} newLocale
   * @param {{ initialSetup?: boolean }} [options=false]
   */

  const loadAndSetLocale = async (newLocale, {
    initialSetup = false
  } = {}) => {
    if (!newLocale) {
      return;
    } // Abort if different domains option enabled


    if (!initialSetup && app.i18n.differentDomains) {
      return;
    }

    const oldLocale = app.i18n.locale;

    if (newLocale === oldLocale) {
      return;
    }

    const localeOverride = app.i18n.onBeforeLanguageSwitch(oldLocale, newLocale, initialSetup, context);

    if (localeOverride && app.i18n.localeCodes.includes(localeOverride)) {
      if (localeOverride === oldLocale) {
        return;
      }

      newLocale = localeOverride;
    }

    if (useCookie) {
      app.i18n.setLocaleCookie(newLocale);
    }

    if (nuxt_i18n_options["c" /* options */].langDir) {
      const i18nFallbackLocale = app.i18n.fallbackLocale;

      if (nuxt_i18n_options["c" /* options */].lazy) {
        // Load fallback locale(s).
        if (i18nFallbackLocale) {
          /** @type {Promise<void>[]} */
          let localesToLoadPromises = [];

          if (Array.isArray(i18nFallbackLocale)) {
            localesToLoadPromises = i18nFallbackLocale.map(fbLocale => loadLanguageAsync(context, fbLocale));
          } else if (typeof i18nFallbackLocale === 'object') {
            if (i18nFallbackLocale[newLocale]) {
              localesToLoadPromises = localesToLoadPromises.concat(i18nFallbackLocale[newLocale].map(fbLocale => loadLanguageAsync(context, fbLocale)));
            }

            if (i18nFallbackLocale.default) {
              localesToLoadPromises = localesToLoadPromises.concat(i18nFallbackLocale.default.map(fbLocale => loadLanguageAsync(context, fbLocale)));
            }
          } else if (newLocale !== i18nFallbackLocale) {
            localesToLoadPromises.push(loadLanguageAsync(context, i18nFallbackLocale));
          }

          await Promise.all(localesToLoadPromises);
        }

        await loadLanguageAsync(context, newLocale);
      } else {
        // Load all locales.
        await Promise.all(nuxt_i18n_options["c" /* options */].localeCodes.map(locale => loadLanguageAsync(context, locale)));
      }
    } else {
      mergeAdditionalMessages(app.i18n, nuxt_i18n_options["c" /* options */].additionalMessages, nuxt_i18n_options["c" /* options */].localeCodes);
    }

    app.i18n.locale = newLocale;
    /** @type {import('../../types').LocaleObject} */

    const newLocaleProperties = nuxt_i18n_options["c" /* options */].normalizedLocales.find(l => l.code === newLocale) || {
      code: newLocale
    }; // In case certain locale has more properties than another, reset all the properties.

    for (const key of Object.keys(app.i18n.localeProperties)) {
      app.i18n.localeProperties[key] = undefined;
    } // Copy properties of the new locale


    for (const [key, value] of Object.entries(newLocaleProperties)) {
      external_vue_default.a.set(app.i18n.localeProperties, key, klona(value));
    } // Must retrieve from context as it might have changed since plugin initialization.


    const {
      route
    } = context;
    let redirectPath = '';
    const isStaticGenerate =  false && false; // Decide whether we should redirect to a different route.

    if (!isStaticGenerate && !app.i18n.differentDomains && nuxt_i18n_options["c" /* options */].strategy !== nuxt_i18n_options["a" /* Constants */].STRATEGIES.NO_PREFIX && ( // Skip if already on the new locale unless the strategy is "prefix_and_default" and this is the default
    // locale, in which case we might still redirect as we prefer unprefixed route in this case.
    getLocaleFromRoute(route) !== newLocale || nuxt_i18n_options["c" /* options */].strategy === nuxt_i18n_options["a" /* Constants */].STRATEGIES.PREFIX_AND_DEFAULT && newLocale === nuxt_i18n_options["c" /* options */].defaultLocale)) {
      // The current route could be 404 in which case attempt to find matching route using the full path since
      // "switchLocalePath" can only find routes if the current route exists.
      const routePath = app.switchLocalePath(newLocale) || app.localePath(route.fullPath, newLocale);

      if (routePath && routePath !== route.fullPath && !routePath.startsWith('//')) {
        redirectPath = routePath;
      }
    }

    if (initialSetup) {
      // Redirect will be delayed until middleware runs as redirecting from plugin does not
      // work in SPA (https://github.com/nuxt/nuxt.js/issues/4491).
      app.i18n.__redirect = redirectPath;
    } else {
      app.i18n.onLanguageSwitched(oldLocale, newLocale);

      if (redirectPath) {
        redirect(redirectPath);
      }
    }
  };
  /**
   * Called by middleware on navigation (also on the initial one).
   *
   * @type {import('../../types/internal').onNavigateInternal}
   */


  const onNavigate = async route => {
    // Handle root path redirect
    if (route.path === '/' && nuxt_i18n_options["c" /* options */].rootRedirect) {
      let statusCode = 302;
      let path = nuxt_i18n_options["c" /* options */].rootRedirect;

      if (typeof nuxt_i18n_options["c" /* options */].rootRedirect !== 'string') {
        statusCode = nuxt_i18n_options["c" /* options */].rootRedirect.statusCode;
        path = nuxt_i18n_options["c" /* options */].rootRedirect.path;
      }

      return [statusCode, `/${path}`,
      /* preserve query */
      true];
    }

    const storedRedirect = app.i18n.__redirect;

    if (storedRedirect) {
      app.i18n.__redirect = null;
      return [302, storedRedirect];
    }

    const resolveBaseUrlOptions = {
      differentDomains: nuxt_i18n_options["c" /* options */].differentDomains,
      normalizedLocales: nuxt_i18n_options["c" /* options */].normalizedLocales
    };
    app.i18n.__baseUrl = resolveBaseUrl(nuxt_i18n_options["c" /* options */].baseUrl, context, app.i18n.locale, resolveBaseUrlOptions);
    const finalLocale = nuxt_i18n_options["c" /* options */].detectBrowserLanguage && doDetectBrowserLanguage(route) || !nuxt_i18n_options["c" /* options */].differentDomains && nuxt_i18n_options["c" /* options */].strategy !== nuxt_i18n_options["a" /* Constants */].STRATEGIES.NO_PREFIX && getLocaleFromRoute(route) || app.i18n.locale || app.i18n.defaultLocale || '';

    if (nuxt_i18n_options["c" /* options */].skipSettingLocaleOnNavigate) {
      app.i18n.__pendingLocale = finalLocale;
      app.i18n.__pendingLocalePromise = new Promise(resolve => {
        app.i18n.__resolvePendingLocalePromise = resolve;
      });
    } else {
      await app.i18n.setLocale(finalLocale);
    }

    return [null, null];
  };

  const finalizePendingLocaleChange = async () => {
    if (!app.i18n.__pendingLocale) {
      return;
    }

    await app.i18n.setLocale(app.i18n.__pendingLocale);

    app.i18n.__resolvePendingLocalePromise('');

    app.i18n.__pendingLocale = null;
  };

  const waitForPendingLocaleChange = async () => {
    if (app.i18n.__pendingLocale) {
      await app.i18n.__pendingLocalePromise;
    }
  };

  const getBrowserLocale = () => {
    if (false) {} else if (req && typeof req.headers['accept-language'] !== 'undefined') {
      return Object(utils_common["f" /* matchBrowserLocale */])(nuxt_i18n_options["c" /* options */].normalizedLocales, Object(utils_common["g" /* parseAcceptLanguage */])(req.headers['accept-language']));
    } else {
      return undefined;
    }
  };
  /**
   * @param {import('vue-router').Route} route
   * @return {string} Returns the browser locale that was detected or an empty string otherwise.
   */


  const doDetectBrowserLanguage = route => {
    // Browser detection is ignored if it is a nuxt generate.
    if (false) {}

    if (nuxt_i18n_options["c" /* options */].strategy !== nuxt_i18n_options["a" /* Constants */].STRATEGIES.NO_PREFIX) {
      if (redirectOn === nuxt_i18n_options["a" /* Constants */].REDIRECT_ON_OPTIONS.ROOT) {
        if (route.path !== '/') {
          return '';
        }
      } else if (redirectOn === nuxt_i18n_options["a" /* Constants */].REDIRECT_ON_OPTIONS.NO_PREFIX) {
        if (!alwaysRedirect && route.path.match(Object(utils_common["e" /* getLocalesRegex */])(nuxt_i18n_options["c" /* options */].localeCodes))) {
          return '';
        }
      }
    }

    let matchedLocale;

    if (useCookie && (matchedLocale = app.i18n.getLocaleCookie())) {// Get preferred language from cookie if present and enabled
    } else {
      // Try to get locale from either navigator or header detection
      matchedLocale = getBrowserLocale();
    }

    const finalLocale = matchedLocale || fallbackLocale; // Handle cookie option to prevent multiple redirections

    if (finalLocale && (!useCookie || alwaysRedirect || !app.i18n.getLocaleCookie())) {
      if (finalLocale !== app.i18n.locale) {
        return finalLocale;
      }
    }

    return '';
  };
  /**
   * Extends the newly created vue-i18n instance with @nuxtjs/i18n properties.
   *
   * @param {import('vue-i18n').IVueI18n} i18n
   */


  const extendVueI18nInstance = i18n => {
    i18n.locales = klona(nuxt_i18n_options["c" /* options */].locales);
    i18n.localeCodes = klona(nuxt_i18n_options["c" /* options */].localeCodes);
    i18n.localeProperties = external_vue_default.a.observable(klona(nuxt_i18n_options["c" /* options */].normalizedLocales.find(l => l.code === i18n.locale) || {
      code: i18n.locale
    }));
    i18n.defaultLocale = nuxt_i18n_options["c" /* options */].defaultLocale;
    i18n.differentDomains = nuxt_i18n_options["c" /* options */].differentDomains;
    i18n.onBeforeLanguageSwitch = nuxt_i18n_options["c" /* options */].onBeforeLanguageSwitch;
    i18n.onLanguageSwitched = nuxt_i18n_options["c" /* options */].onLanguageSwitched;

    i18n.setLocaleCookie = locale => Object(utils_common["h" /* setLocaleCookie */])(locale, res, {
      useCookie,
      cookieDomain,
      cookieKey,
      cookieSecure,
      cookieCrossOrigin
    });

    i18n.getLocaleCookie = () => Object(utils_common["c" /* getLocaleCookie */])(req, {
      useCookie,
      cookieKey,
      localeCodes: nuxt_i18n_options["c" /* options */].localeCodes
    });

    i18n.setLocale = locale => loadAndSetLocale(locale);

    i18n.getBrowserLocale = () => getBrowserLocale();

    i18n.finalizePendingLocaleChange = finalizePendingLocaleChange;
    i18n.waitForPendingLocaleChange = waitForPendingLocaleChange;
    i18n.__baseUrl = app.i18n.__baseUrl;
    i18n.__pendingLocale = app.i18n.__pendingLocale;
    i18n.__pendingLocalePromise = app.i18n.__pendingLocalePromise;
    i18n.__resolvePendingLocalePromise = app.i18n.__resolvePendingLocalePromise;
  }; // Set instance options


  const vueI18nOptions = typeof nuxt_i18n_options["c" /* options */].vueI18n === 'function' ? await nuxt_i18n_options["c" /* options */].vueI18n(context) : klona(nuxt_i18n_options["c" /* options */].vueI18n);
  vueI18nOptions.componentInstanceCreatedListener = extendVueI18nInstance; // @ts-ignore

  app.i18n = context.i18n = new external_vue_i18n_default.a(vueI18nOptions); // Initialize locale and fallbackLocale as vue-i18n defaults those to 'en-US' if falsey

  app.i18n.locale = '';
  app.i18n.fallbackLocale = vueI18nOptions.fallbackLocale || '';

  if (store) {
    // Inject in store.
    store.$i18n = app.i18n;

    if (store.state.localeDomains) {
      for (const [index, locale] of nuxt_i18n_options["c" /* options */].normalizedLocales.entries()) {
        const domain = store.state.localeDomains[locale.code];

        if (domain) {
          locale.domain = domain;
          const optionsLocale = nuxt_i18n_options["c" /* options */].locales[index];

          if (typeof optionsLocale !== 'string') {
            optionsLocale.domain = domain;
          }
        }
      }
    }
  }

  extendVueI18nInstance(app.i18n);
  const resolveBaseUrlOptions = {
    differentDomains: nuxt_i18n_options["c" /* options */].differentDomains,
    normalizedLocales: nuxt_i18n_options["c" /* options */].normalizedLocales
  };
  app.i18n.__baseUrl = resolveBaseUrl(nuxt_i18n_options["c" /* options */].baseUrl, context, '', resolveBaseUrlOptions);
  app.i18n.__onNavigate = onNavigate;
  external_vue_default.a.prototype.$nuxtI18nHead = head_meta["a" /* nuxtI18nHead */];
  /** @type {string | undefined} */

  let finalLocale = nuxt_i18n_options["c" /* options */].detectBrowserLanguage ? doDetectBrowserLanguage(route) : '';

  if (!finalLocale) {
    if (app.i18n.differentDomains) {
      const domainLocale = Object(utils_common["d" /* getLocaleDomain */])(nuxt_i18n_options["c" /* options */].normalizedLocales, req);
      finalLocale = domainLocale;
    } else if (nuxt_i18n_options["c" /* options */].strategy !== nuxt_i18n_options["a" /* Constants */].STRATEGIES.NO_PREFIX) {
      const routeLocale = getLocaleFromRoute(route);
      finalLocale = routeLocale;
    }
  }

  if (!finalLocale && useCookie) {
    finalLocale = app.i18n.getLocaleCookie();
  }

  if (!finalLocale) {
    finalLocale = app.i18n.defaultLocale || '';
  }

  await loadAndSetLocale(finalLocale, {
    initialSetup: true
  });

  if (false) {}
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(84);

// EXTERNAL MODULE: external "ant-design-vue/lib"
var lib_ = __webpack_require__(32);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib_);

// CONCATENATED MODULE: ./plugins/antd-ui.js


external_vue_default.a.use(lib_default.a);
// CONCATENATED MODULE: ./plugins/filters.js

/* harmony default export */ var filters = (() => {
  external_vue_default.a.filter('truncate', function (text, length, suffix) {
    if (text && text.length > length) {
      return text.substring(0, length) + suffix;
    } else {
      return text;
    }
  });
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-agile/src/Agile.vue?vue&type=template&id=107516b9&
var Agilevue_type_template_id_107516b9_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "agile",
    class: {
      'agile--ssr': _vm.isSSR,
      'agile--auto-play': _vm.settings.autoplay,
      'agile--disabled': _vm.settings.unagile,
      'agile--fade': _vm.settings.fade && !_vm.settings.unagile,
      'agile--rtl': _vm.settings.rtl,
      'agile--no-nav-buttons': !_vm.settings.navButtons
    },
    on: {
      "touchstart": () => {}
    }
  }, [_vm._ssrNode("<div class=\"agile__list\">", "</div>", [_vm._ssrNode("<div class=\"agile__track\"" + _vm._ssrStyle(null, {
    transform: `translate(${_vm.translateX + _vm.marginX}px)`,
    transition: `transform ${_vm.settings.timing} ${_vm.transitionDelay}ms`
  }, null) + ">", "</div>", [_vm._ssrNode("<div class=\"agile__slides agile__slides--cloned\"" + _vm._ssrStyle(null, null, {
    display: _vm.slidesCloned ? '' : 'none'
  }) + ">", "</div>", [_vm._t("default")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"agile__slides agile__slides--regular\">", "</div>", [_vm._t("default")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"agile__slides agile__slides--cloned\"" + _vm._ssrStyle(null, null, {
    display: _vm.slidesCloned ? '' : 'none'
  }) + ">", "</div>", [_vm._t("default")], 2)], 2)]), _vm._ssrNode(" "), _vm.$slots.caption ? _vm._ssrNode("<div class=\"agile__caption\">", "</div>", [_vm._t("caption")], 2) : _vm._e(), _vm._ssrNode(" "), !_vm.settings.unagile && (_vm.settings.navButtons || _vm.settings.dots) ? _vm._ssrNode("<div class=\"agile__actions\">", "</div>", [_vm.settings.navButtons && !_vm.settings.unagile ? _vm._ssrNode("<button" + _vm._ssrAttr("disabled", !_vm.canGoToPrev) + " aria-label=\"Previous\" type=\"button\" class=\"agile__nav-button agile__nav-button--prev\">", "</button>", [_vm._t("prevButton", function () {
    return [_vm._v("\n          ←\n        ")];
  })], 2) : _vm._e(), _vm._ssrNode(" " + (_vm.settings.dots && !_vm.settings.unagile ? "<ul class=\"agile__dots\">" + _vm._ssrList(_vm.countSlides, function (n) {
    return "<li" + _vm._ssrClass("agile__dot", {
      'agile__dot--current': n - 1 === _vm.currentSlide
    }) + "><button type=\"button\">" + _vm._ssrEscape("\n            " + _vm._s(n) + "\n          ") + "</button></li>";
  }) + "</ul>" : "<!---->") + " "), _vm.settings.navButtons && !_vm.settings.unagile ? _vm._ssrNode("<button" + _vm._ssrAttr("disabled", !_vm.canGoToNext) + " aria-label=\"Next\" type=\"button\" class=\"agile__nav-button agile__nav-button--next\">", "</button>", [_vm._t("nextButton", function () {
    return [_vm._v("\n          →\n        ")];
  })], 2) : _vm._e()], 2) : _vm._e()], 2);
};

var Agilevue_type_template_id_107516b9_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-agile/src/Agile.vue?vue&type=template&id=107516b9&

// CONCATENATED MODULE: ./node_modules/vue-agile/src/mixins/handlers.js
/**
 * Handlers methods for mouse/touch events
 */
const mixin = {
  methods: {
    handleMouseDown(e) {
      this.isMouseDown = true;

      if (e.type.indexOf('touch') !== -1) {
        this.dragStartX = e.touches[0].clientX;
        this.dragStartY = e.touches[0].clientY;
      }

      if (e.type.indexOf('mouse') !== -1) {
        this.dragStartX = e.clientX;
        this.dragStartY = e.clientY;
      }
    },

    handleMouseMove(e) {
      let positionX;
      let positionY;

      if (e.type.indexOf('touch') !== -1) {
        positionX = e.touches[0].clientX;
        positionY = e.touches[0].clientY;
      }

      if (e.type.indexOf('mouse') !== -1) {
        positionX = e.clientX;
        positionY = e.clientY;
      }

      const dragDistanceX = Math.abs(positionX - this.dragStartX);
      const dragDistanceY = Math.abs(positionY - this.dragStartY);

      if (dragDistanceX > 3 * dragDistanceY) {
        this.disableScroll();
        this.dragDistance = positionX - this.dragStartX;
      }
    },

    handleMouseUp() {
      this.isMouseDown = false;
      this.enableScroll();
    },

    handleMouseOver(element) {
      if (this.settings.autoplay) {
        if (element === 'dot' && this.settings.pauseOnDotsHover || element === 'track' && this.settings.pauseOnHover) {
          this.isAutoplayPaused = true;
        }
      }
    },

    handleMouseOut(element) {
      if (this.settings.autoplay) {
        if (element === 'dot' && this.settings.pauseOnDotsHover || element === 'track' && this.settings.pauseOnHover) {
          this.isAutoplayPaused = false;
        }
      }
    }

  }
};
/* harmony default export */ var handlers = (mixin);
// CONCATENATED MODULE: ./node_modules/vue-agile/src/mixins/helpers.js
/**
 * Helpers methods
 */
const helpers_mixin = {
  methods: {
    /**
     * Set window & container width
     */
    getWidth() {
      if (this.isSSR) {
        return false;
      }

      this.widthWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      this.widthContainer = this.$refs.list.clientWidth;
    },

    /**
     * Convert HTML Collection to JS Array
     */
    htmlCollectionToArray(collection) {
      return Array.prototype.slice.call(collection, 0);
    }

  }
};
/* harmony default export */ var helpers = (helpers_mixin);
// CONCATENATED MODULE: ./node_modules/vue-agile/src/mixins/methods.js
/**
 * All not public methods doesn't classified elsewhere
 */
const methods_mixin = {
  methods: {
    clearAutoPlayPause() {
      clearTimeout(this.autoplayTimeout);
      this.autoplayRemaining = null;
    },

    disableAutoPlay() {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    },

    disableScroll() {
      document.ontouchmove = e => e.preventDefault();
    },

    enableScroll() {
      document.ontouchmove = () => true;
    },

    restartAutoPlay() {
      this.disableAutoPlay();
      this.toggleAutoPlay();
    },

    toggleAutoPlay() {
      const enabled = !this.settings.unagile && this.settings.autoplay;

      if (!this.autoplayInterval && enabled) {
        this.autoplayInterval = setInterval(() => {
          if (!document.hidden) {
            if (!this.canGoToNext) {
              this.disableAutoPlay();
            } else {
              this.goToNext();
            }
          }
        }, this.settings.autoplaySpeed);
      } else {
        this.disableAutoPlay();
      }
    },

    toggleFade() {
      const enabled = !this.settings.unagile && this.settings.fade;

      for (let i = 0; i < this.countSlides; i++) {
        this.slides[i].style.transition = enabled ? 'opacity ' + this.settings.timing + ' ' + this.settings.speed + 'ms' : 'none';
        this.slides[i].style.transform = enabled ? `translate(-${i * this.widthSlide}px)` : 'none';
      }
    }

  }
};
/* harmony default export */ var methods = (methods_mixin);
// CONCATENATED MODULE: ./node_modules/vue-agile/src/mixins/preparations.js
/**
 * Carousel preparation methods
 */
const preparations_mixin = {
  methods: {
    /**
     * Prepare slides classes and styles
     */
    prepareSlides() {
      this.slides = this.htmlCollectionToArray(this.$refs.slides.children); // Probably timeout needed

      if (this.slidesCloned) {
        this.slidesClonedBefore = this.htmlCollectionToArray(this.$refs.slidesClonedBefore.children);
        this.slidesClonedAfter = this.htmlCollectionToArray(this.$refs.slidesClonedAfter.children);
      }

      for (const slide of this.slidesAll) {
        slide.classList.add('agile__slide');
      }
    },

    /**
     *  Prepare slides active/current classes
     */
    prepareSlidesClasses() {
      if (this.currentSlide === null) {
        return false;
      } // Remove active & current classes


      for (let i = 0; i < this.countSlides; i++) {
        this.slides[i].classList.remove('agile__slide--active');
        this.slides[i].classList.remove('agile__slide--current');
      } // Add active & current class for current slide


      setTimeout(() => this.slides[this.currentSlide].classList.add('agile__slide--active'), this.changeDelay);
      let start = this.slidesCloned ? this.countSlides + this.currentSlide : this.currentSlide;

      if (this.centerMode) {
        start -= Math.floor(this.settings.slidesToShow / 2) - +(this.settings.slidesToShow % 2 === 0);
      } // To account for the combination of infinite = false and centerMode = true, ensure we don't overrun the bounds of the slide count.


      for (let i = Math.max(start, 0); i < Math.min(start + this.settings.slidesToShow, this.countSlides); i++) {
        this.slidesAll[i].classList.add('agile__slide--current');
      }
    },

    /**
     * Prepare carousel styles
     */
    prepareCarousel() {
      // Prepare track
      if (this.settings.unagile) {
        this.translateX = 0;
      } else {
        if (this.currentSlide === null && this.countSlides) {
          this.currentSlide = this.settings.initialSlide;
        }

        if (this.currentSlide > this.countSlides) {
          this.currentSlide = this.countSlides - 1;
        }

        this.goTo(this.currentSlide, false, false);
      }
    }

  }
};
/* harmony default export */ var preparations = (preparations_mixin);
// EXTERNAL MODULE: ./node_modules/lodash.orderby/index.js
var lodash_orderby = __webpack_require__(33);
var lodash_orderby_default = /*#__PURE__*/__webpack_require__.n(lodash_orderby);

// CONCATENATED MODULE: ./node_modules/vue-agile/src/mixins/settings.js
/**
 * Component settings
 */

const settings_mixin = {
  props: {
    /**
     * Set the carousel to be the navigation of other carousels
     */
    asNavFor: {
      type: Array,
      default: function () {
        return [];
      }
    },

    /**
     * Enable autoplay
     */
    autoplay: {
      type: Boolean,
      default: false
    },

    /**
     * Autoplay interval in milliseconds
     */
    autoplaySpeed: {
      type: Number,
      default: 3000
    },

    /**
     * Enable centered view when slidesToShow > 1
     */
    centerMode: {
      type: Boolean,
      default: false
    },

    /**
     * Slides padding in center mode
     */
    centerPadding: {
      type: String,
      default: '15%'
    },

    /**
     * Slide change delay in milliseconds
     */
    changeDelay: {
      type: Number,
      default: 0
    },

    /**
     * Enable dot indicators/pagination
     */
    dots: {
      type: Boolean,
      default: true
    },

    /**
     * Enable fade effect
     */
    fade: {
      type: Boolean,
      default: false
    },

    /**
     * Infinite loop sliding
     */
    infinite: {
      type: Boolean,
      default: true
    },

    /**
     * Index of slide to start on
     */
    initialSlide: {
      type: Number,
      default: 0
    },

    /**
     * Enable mobile first calculation for responsive settings
     */
    mobileFirst: {
      type: Boolean,
      default: true
    },

    /**
     * Enable prev/next navigation buttons
     */
    navButtons: {
      type: Boolean,
      default: true
    },

    /**
     * All settings as one object
     */
    options: {
      type: Object,
      default: () => null
    },

    /**
     * Pause autoplay when a dot is hovered
     */
    pauseOnDotsHover: {
      type: Boolean,
      default: false
    },

    /**
     * Pause autoplay when a slide is hovered
     */
    pauseOnHover: {
      type: Boolean,
      default: true
    },

    /**
     * Object containing breakpoints and settings objects
     */
    responsive: {
      type: Array,
      default: () => null
    },

    /**
     * Enable right-to-left mode
     */
    rtl: {
      type: Boolean,
      default: false
    },

    /**
     * Number of slides to scroll
     */
    slidesToScroll: {
      type: Number,
      default: 1
    },

    /**
     * Number of slides to show
     */
    slidesToShow: {
      type: Number,
      default: 1
    },

    /**
     * Slide animation speed in milliseconds
     */
    speed: {
      type: Number,
      default: 300
    },

    /**
     * Swipe distance
     */
    swipeDistance: {
      type: Number,
      default: 50
    },

    /**
     * Throttle delay in milliseconds
     */
    throttleDelay: {
      type: Number,
      default: 500
    },

    /**
     * Transition timing function
     * Available: ease, linear, ease-in, ease-out, ease-in-out
     */
    timing: {
      type: String,
      default: 'ease',
      validator: value => {
        return ['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out'].indexOf(value) !== -1;
      }
    },

    /**
     * Disable Agile carousel
     */
    unagile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // Initial settings based on props and options object
    initialSettings: function () {
      // options prop is excluded
      let {
        options,
        ...initialSettings
      } = this.$props; // Join settings from options

      if (options) {
        initialSettings = { ...initialSettings,
          ...options
        };
      } // Sort breakpoints


      if (initialSettings.responsive) {
        initialSettings.responsive = lodash_orderby_default()(initialSettings.responsive, 'breakpoint');
      }

      return initialSettings;
    },
    // Settings for current breakpoint
    settings: function () {
      const {
        responsive,
        ...settings
      } = this.initialSettings;

      if (responsive) {
        responsive.forEach(option => {
          if (settings.mobileFirst ? option.breakpoint < this.widthWindow : option.breakpoint > this.widthWindow) {
            for (const key in option.settings) {
              settings[key] = option.settings[key];
            }
          }
        });
      }

      return settings;
    }
  }
};
/* harmony default export */ var settings = (settings_mixin);
// EXTERNAL MODULE: ./node_modules/lodash.throttle/index.js
var lodash_throttle = __webpack_require__(17);
var lodash_throttle_default = /*#__PURE__*/__webpack_require__.n(lodash_throttle);

// CONCATENATED MODULE: ./node_modules/vue-agile/src/mixins/throttle.js
/**
 * Throttle methods by lodash
 */

const throttle_mixin = {
  created() {
    this.goTo = lodash_throttle_default()(this.goTo, this.throttleDelay);
    this.getWidth = lodash_throttle_default()(this.getWidth, 500);
  }

};
/* harmony default export */ var throttle = (throttle_mixin);
// CONCATENATED MODULE: ./node_modules/vue-agile/src/mixins/watchers.js
/**
 * Component watchers
 */
const watchers_mixin = {
  watch: {
    // Recalculate settings
    currentBreakpoint() {
      // this.prepareSettings()
      this.$emit('breakpoint', {
        breakpoint: this.currentBreakpoint
      });
    },

    // Watch current slide change
    currentSlide() {
      this.prepareSlidesClasses(); // Set start time of slide

      this.autoplayStartTimestamp = this.settings.autoplay ? +new Date() : null;
      this.$emit('after-change', {
        currentSlide: this.currentSlide
      });
    },

    // Watch drag distance change
    dragDistance() {
      if (this.isMouseDown) {
        const {
          rtl
        } = this.settings;
        const dragDistance = this.dragDistance * (rtl ? -1 : 1);

        if (dragDistance > this.swipeDistance && this.canGoToPrev) {
          this.goToPrev();
          this.handleMouseUp();
        }

        if (dragDistance < -1 * this.swipeDistance && this.canGoToNext) {
          this.goToNext();
          this.handleMouseUp();
        }
      }
    },

    isAutoplayPaused(nevValue) {
      if (nevValue) {
        // Store current slide remaining time and disable auto play mode
        this.remaining = this.settings.autoplaySpeed - (+new Date() - this.autoplayStartTimestamp);
        this.disableAutoPlay();
        this.clearAutoPlayPause();
      } else {
        // Go to next after remaining time and rerun auto play mode
        this.autoplayTimeout = setTimeout(() => {
          this.clearAutoPlayPause();
          this.goToNext();
          this.toggleAutoPlay();
        }, this.remaining);
      }
    },

    'settings.autoplay'() {
      this.toggleAutoPlay();
    },

    'settings.fade'() {
      this.toggleFade();
    },

    'settings.unagile'() {// this.prepareSlides()
      // this.prepareCarousel()
    },

    widthSlide() {
      for (let i = 0; i < this.countSlidesAll; i++) {
        // console.log(this.widthSlide)
        // console.log(this.settings)
        this.slidesAll[i].style.width = `${this.widthSlide}${this.widthSlide !== 'auto' ? 'px' : ''}`;
      }
    },

    // Watch window width change
    widthWindow(newValue, oldValue) {
      if (oldValue) {
        this.prepareCarousel();
        this.toggleFade();
      }
    }

  }
};
/* harmony default export */ var watchers = (watchers_mixin);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-agile/src/Agile.vue?vue&type=script&lang=js&







/* harmony default export */ var Agilevue_type_script_lang_js_ = ({
  name: 'agile',
  mixins: [handlers, helpers, methods, preparations, settings, throttle, watchers],
  emits: ['before-change', 'after-change', 'breakpoint'],

  data() {
    return {
      autoplayInterval: null,
      autoplayRemaining: null,
      autoplayStartTimestamp: null,
      autoplayTimeout: null,
      currentSlide: null,
      dragDistance: 0,
      dragStartX: 0,
      dragStartY: 0,
      isAutoplayPaused: false,
      isMouseDown: false,
      slides: [],
      slidesClonedAfter: [],
      slidesClonedBefore: [],
      isSSR: typeof window === 'undefined',
      transitionDelay: 0,
      translateX: 0,
      widthWindow: 0,
      widthContainer: 0
    };
  },

  computed: {
    breakpoints: function () {
      return !this.initialSettings.responsive ? [] : this.initialSettings.responsive.map(item => item.breakpoint);
    },
    canGoToPrev: function () {
      return this.settings.infinite || this.currentSlide > 0;
    },
    canGoToNext: function () {
      return this.settings.infinite || this.currentSlide < this.countSlides - 1;
    },
    countSlides: function () {
      return this.isSSR ? this.htmlCollectionToArray(this.$slots.default).length : this.slides.length;
    },
    countSlidesAll: function () {
      return this.slidesAll.length;
    },
    currentBreakpoint: function () {
      const breakpoints = this.breakpoints.map(item => item).reverse();
      return this.initialSettings.mobileFirst ? breakpoints.find(item => item < this.widthWindow) || 0 : breakpoints.find(item => item > this.widthWindow) || null;
    },
    marginX: function () {
      if (this.settings.unagile) {
        return 0;
      }

      let marginX = this.slidesCloned ? this.countSlides * this.widthSlide : 0; // Center mode margin

      if (this.settings.centerMode) {
        marginX -= (Math.floor(this.settings.slidesToShow / 2) - +(this.settings.slidesToShow % 2 === 0)) * this.widthSlide;
      }

      return this.settings.rtl ? marginX : -1 * marginX;
    },
    slidesCloned: function () {
      return !this.settings.unagile && !this.settings.fade && this.settings.infinite;
    },
    slidesAll: function () {
      return this.slidesCloned ? [...this.slidesClonedBefore, ...this.slides, ...this.slidesClonedAfter] : this.slides;
    },
    widthSlide: function () {
      return !this.settings.unagile ? this.widthContainer / this.settings.slidesToShow : 'auto';
    }
  },

  mounted() {
    // Windows resize listener
    window.addEventListener('resize', this.getWidth); // Mouse and touch events

    this.$refs.track.addEventListener('touchstart', this.handleMouseDown);
    this.$refs.track.addEventListener('touchend', this.handleMouseUp);
    this.$refs.track.addEventListener('touchmove', this.handleMouseMove);
    this.$refs.track.addEventListener('mousedown', this.handleMouseDown);
    this.$refs.track.addEventListener('mouseup', this.handleMouseUp);
    this.$refs.track.addEventListener('mousemove', this.handleMouseMove); // Init

    this.isSSR = false;
    this.reload();
  },

  // Vue 3
  beforeUnmount() {
    this.destroy();
  },

  methods: {
    destroy() {
      window.removeEventListener('resize', this.getWidth);
      this.$refs.track.removeEventListener('touchstart', this.handleMouseDown);
      this.$refs.track.removeEventListener('touchend', this.handleMouseUp);
      this.$refs.track.removeEventListener('touchmove', this.handleMouseMove);
      this.$refs.track.removeEventListener('mousedown', this.handleMouseDown);
      this.$refs.track.removeEventListener('mouseup', this.handleMouseUp);
      this.$refs.track.removeEventListener('mousemove', this.handleMouseMove);
      this.disableAutoPlay();
    },

    // Return current breakpoint
    getCurrentBreakpoint() {
      return this.currentBreakpoint;
    },

    // Return settings for current breakpoint
    getCurrentSettings() {
      return this.settings;
    },

    // Return current slide index
    getCurrentSlide() {
      return this.currentSlide;
    },

    // Return initial settings
    getInitialSettings() {
      return this.initialSettings;
    },

    // Go to slide
    goTo(n, transition = true, asNav = false) {
      // Break goTo() if unagile is active
      if (this.settings.unagile) {
        return false;
      }

      if (!asNav) {
        this.settings.asNavFor.forEach(carousel => {
          if (carousel) {
            carousel.goTo(n, transition, true);
          }
        });
      }

      let slideNextReal = n;

      if (transition) {
        if (this.settings.infinite && n < 0) {
          slideNextReal = this.countSlides - 1;
        } else if (n >= this.countSlides) {
          slideNextReal = 0;
        }

        this.$emit('before-change', {
          currentSlide: this.currentSlide,
          nextSlide: slideNextReal
        });
        this.currentSlide = slideNextReal;

        if (n !== slideNextReal) {
          setTimeout(() => {
            this.goTo(slideNextReal, false);
          }, this.settings.speed);
        }
      }

      const translateX = !this.settings.fade ? n * this.widthSlide * this.settings.slidesToScroll : 0;
      this.transitionDelay = transition ? this.speed : 0;

      if (this.infinite || this.currentSlide + this.slidesToShow <= this.countSlides) {
        this.translateX = this.settings.rtl ? translateX : -1 * translateX;
      }
    },

    // Go to next slide
    goToNext() {
      if (this.canGoToNext) {
        this.goTo(this.currentSlide + 1);
      }
    },

    // Go to previous slide
    goToPrev() {
      if (this.canGoToPrev) {
        this.goTo(this.currentSlide - 1);
      }
    },

    // Reload carousel
    reload() {
      this.getWidth();
      this.prepareSlides();
      this.prepareCarousel();
      this.toggleFade();
      this.toggleAutoPlay();
    }

  }
});
// CONCATENATED MODULE: ./node_modules/vue-agile/src/Agile.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Agilevue_type_script_lang_js_ = (Agilevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-agile/src/Agile.vue



function Agile_injectStyles (context) {
  
  var style0 = __webpack_require__(86)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Agile_component = Object(componentNormalizer["a" /* default */])(
  src_Agilevue_type_script_lang_js_,
  Agilevue_type_template_id_107516b9_render,
  Agilevue_type_template_id_107516b9_staticRenderFns,
  false,
  Agile_injectStyles,
  null,
  "33eceb95"
  
)

/* harmony default export */ var Agile = (Agile_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-agile/src/index.js


const install = Vue => {
  Vue.component('agile', Agile);
};

/* harmony default export */ var src = ({
  install
});

// CONCATENATED MODULE: ./plugins/vue-agile.js


external_vue_default.a.use(src);
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./buefy.js (mode: 'all')

 // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')

 // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')

 // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')

 // Source: ./nuxt-leaflet.js (mode: 'client')

 // Source: ../plugins/antd-ui (mode: 'all')

 // Source: ../plugins/filters (mode: 'all')

 // Source: ../plugins/vue-agile (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "Ыйман - руханий маданиятты онуктуруу фонду",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/buefy.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/buefy.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/nuxt-i18n/plugin.utils.js" (known exports: loadLanguageAsync resolveBaseUrl getDomainFromLocale registerStore validateRouteParams mergeAdditionalMessages, known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/nuxt-i18n/plugin.utils.js" (known exports: loadLanguageAsync resolveBaseUrl getDomainFromLocale registerStore validateRouteParams mergeAdditionalMessages, known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof plugin_routing === 'function') {
    await plugin_routing(app.context, inject);
  }

  if (typeof plugin_main === 'function') {
    await plugin_main(app.context, inject);
  }

  if (false) {}

  if (typeof /* Cannot get final name for export "default" in "./plugins/antd-ui.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/antd-ui.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof filters === 'function') {
    await filters(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-agile.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-agile.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = ["nuxti18n"];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("devalue");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map