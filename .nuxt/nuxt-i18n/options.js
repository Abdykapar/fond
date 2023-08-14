

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"ky","messages":{"en":{"search":"Search","otherNews":"Other news","allNews":"All news","requisites":"Details","contacts":"Contacts","address":"The fund for the development of spiritual culture \"Iyman\" under the Administration of the President of the Kyrgyz Republic <br/> <strong>Erkindik blvd. 56 <br/> 720040 Bishkek city <br/> Kyrgyz Republic</strong>'","rights":"All rights reserved","administration":"The Administration of the President of the Kyrgyz Republic","fondDesc":"The fund for the development of spiritual culture","donate":"Donation","gallery":"Gallery","allPhotos":"All photos","links":"Links","allLinks":"All links","news":"News","main":"Home","aboutFond":"About us","chairman":"Chairman","exChairman":" exChairmans”","historyCreation":"History of creation","orgStructure":"Organizational structure","activity":"Activity","event":"Events","activity_events":"Event","allEvent":"All events","internationalCoop":"International cooperation","orgs":"Organizations","projectActivities":"Project Activities ","charity":"Charity","aboutFrdk":"About foundation","title":"The fund for the development of spiritual culture \"Iyman\"","follow_us":"FOLLOW US","media":"Media","allMedia":"All media","searchResult":"Search results","chairman_zam":"Deputy Chairman"},"ky":{"search":"Издөө","otherNews":"Башка жаңылыктар","allNews":"Бардык жаңылыктар","requisites":"Реквизиттер","contacts":"Байланыш","address":"Кыргыз Республикасынын Администрациясынын алдындагы «Ыйман» диний маданиятты өнүктүрүү фонду» <br/> <strong>Эркиндик бул., 56 <br/> 720040 Бишкек шаары <br/> Кыргыз Республикасы</strong>","rights":"Бардык укуктар корголгон","administration":"Кыргыз Республикасынын Президентинин Администрациясы","fondDesc":"диний маданиятты өнүктүрүү фонду","donate":"Кайрымдуулук үчүн","gallery":"Галерея","allPhotos":"Бардык сүрөттөр","links":"Шилтемелер","allLinks":"Бардык шилтемелер","news":"Жаңылыктар","main":"Башкы бет","aboutFond":"«Ыйман» фонду жөнүндө","chairman":"Башкармалыктын төрагасы","exChairman":"“Ыйман” фондунун мурунку жетекчилери","historyCreation":"Түзүлүү тарыхы","orgStructure":"Фонддун структурасы","activity":"Ишмердүүлүгү","event":"Иш-чаралар","activity_events":"Мероприятия","allEvent":"Башка иш-чаралар","internationalCoop":"Эл аралык кызматташуу","orgs":"Уюмдар","projectActivities":"Долбоорлордун ишмердүүлүгү","charity":"Кайрымдуулук","aboutFrdk":"«Ыйман» фонду жөнүндө","title":"Ыйман - руханий маданиятты өнүктүрүү фонду","follow_us":"Катталуу үчүн","media":"Медиа","allMedia":"Бардык видеолор","searchResult":"Издөөнүн жыйынтыгы","chairman_zam":"Төраганын орун басары"},"ru":{"search":"Поиск","otherNews":"Другие новости","allNews":"Все новости","requisites":"Реквизиты","contacts":"Контакты","address":"«Фонд развития духовной культуры «Ыйман» при Администрации Президента Кыргызской Республики <br/> <strong>бул. Эркиндик, 56 <br/> 720040 г. Бишкек <br/> Кыргызская Республика</strong>","rights":"Все права защишены","administration":"Администрация Президента Кыргызской Республики","fondDesc":"фонд развития духовной культуры","donate":"Пожертвовать","gallery":"Галерея","allPhotos":"Все Фотографии","links":"Ссылки","allLinks":"Все Ссылки","news":"Новости","main":"Главная","aboutFond":"О ФРДК «Ыйман»","chairman":"Председатель правления","exChairman":"Экс Главы ФРДК “Ыйман”","historyCreation":"История создания","orgStructure":"Организационная структура","activity":"Деятельность","event":"Мероприятие","activity_events":"Мероприятия","allEvent":"Другие мероприятия","internationalCoop":"Международное сотрудничество","orgs":"Организации","projectActivities":"Проектная деятельность","charity":"Благотворительность","aboutFrdk":"О ФРДК «Ыйман»","title":"Ыйман - руханий маданиятты онуктуруу фонду","follow_us":"Подписывайтесь на нас","media":"Медиа","allMedia":"Все Видео","searchResult":"Результаты поиска","chairman_zam":"Заместитель председателя правления"}}},
  vueI18nLoader: false,
  locales: ["ky","ru","en"],
  defaultLocale: "ky",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"ky"},{"code":"ru"},{"code":"en"}],
  localeCodes: ["ky","ru","en"],
  additionalMessages: [],
}

export const localeMessages = {}
