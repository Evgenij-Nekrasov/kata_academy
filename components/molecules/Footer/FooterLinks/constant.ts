export const FooterNavigation = [
  {
    src: '/',
    alt: 'mainPage',
    title: 'Главная',
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

export const socialLinksInContacts = [
  {
    bg: 'darkBlue',
    href: 'https://t.me/Evgenie061',
    src: 'telegram',
    width: 16,
    height: 14,
  },
] as const;
