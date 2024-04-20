export const FooterNavigation = [
  {
    src: '/',
    alt: 'mainPage',
    title: 'Главная',
  },
  {
    src: '/graduates',
    alt: 'graduatesPage',
    title: 'Выпускники',
  },
  {
    src: '/about',
    alt: 'aboutPage',
    title: 'Об академии',
  },
  {
    src: '/contacts',
    alt: 'contactsPage',
    title: 'Контакты',
  },
] as const;

export const cardPath = [
  {
    src: 'java-course',
    name: 'Java Developer',
  },
  {
    src: 'frontend-course',
    name: 'Frontend Developer',
  },
] as const;

export const socialLinks = [
  {
    bg: 'blue',
    src: 'vk',
    width: 19,
    height: 11,
  },
  {
    bg: 'red',
    src: 'youtube',
    width: 16,
    height: 12,
  },
  {
    bg: 'darkBlue',
    src: 'telegram',
    width: 16,
    height: 14,
  },
  {
    bg: 'white',
    src: 'dzen',
    width: 32,
    height: 32,
  },
] as const;
