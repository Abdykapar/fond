export const menus = [
  {
    title: 'Главная',
    code: 'main',
    children: [
      {
        title: 'Новости',
        code: 'main_news',
        link: '/news',
      },
      {
        title: 'Ссылки',
        code: 'main_links',
        link: '/links',
      },
      {
        title: 'Галерея',
        code: 'main_gallery',
        link: '/gallery',
      },
      {
        title: 'Контакты',
        code: 'main__contacts',
        link: '#contacts',
      },
    ],
  },
  {
    title: 'О ФРДК «Ыйман»',
    code: 'frdk',
    children: [
      {
        title: 'О ФРДК «Ыйман»',
        code: 'about_frdk',
        link: '/about/about-us',
      },
      {
        title: 'Организационная структура',
        code: 'frdk_org',
        link: '/about/organization',
      },
      {
        title: 'История создания',
        code: 'frdk_history',
        link: '/about/history',
      },
      {
        title: 'Председатель правления',
        code: 'frdk_chairman',
        link: '/about/chairman',
      },
    ],
  },
  {
    title: 'Деятельность',
    code: 'activity',
    children: [
      {
        title: 'Мероприятия',
        code: 'activity_events',
        link: '/activity/event',
      },
      {
        title: 'Проектная деятельность',
        code: 'activity_project',
        link: '/activity/project',
      },
      {
        title: 'Международное сотрудничество',
        code: 'activity_cooperation',
        link: '/activity/organizations',
      },
    ],
  },
  {
    title: 'Благотворительность',
    code: 'charity',
    link: '/charity',
  },
  {
    title: 'Контакты',
    code: 'contacts',
    link: '#contacts',
  },
]
