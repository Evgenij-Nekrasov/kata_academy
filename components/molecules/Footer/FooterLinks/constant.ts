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
    src: '/java-course',
    name: 'Java Developer',
  },
  {
    src: '/frontend-course',
    name: 'Frontend Developer',
  },
] as const;

export const socialLinks = [
  {
    bg: 'blue',
    href: 'https://t.me/Evgenie061',
    src: 'vk',
    width: 19,
    height: 11,
  },
  {
    bg: 'red',
    href: 'https://t.me/Evgenie061',
    src: 'youtube',
    width: 16,
    height: 12,
  },
  {
    bg: 'darkBlue',
    href: 'https://t.me/Evgenie061',
    src: 'telegram',
    width: 16,
    height: 14,
  },
  {
    bg: 'white',
    href: 'https://t.me/Evgenie061',
    src: 'dzen',
    width: 32,
    height: 32,
  },
] as const;
