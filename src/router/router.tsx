import { createBrowserRouter } from 'react-router-dom';
import { PagePath } from './enums';
import { Root } from './root/root';
import { HomePage } from '../pages/home-page/home-page';
import { NotFoundPage } from '../pages/not-found-page/not-found-page';
import { ContactPage } from '@/pages/contact-page/contact-page';
import { AboutPage } from '@/pages/about-page/about-page';

export const router = createBrowserRouter([
  {
    path: PagePath.root,
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: PagePath.notFoundPage, Component: NotFoundPage },
      { path: PagePath.aboutPage, Component: AboutPage },

      { path: PagePath.contactsPage, Component: ContactPage },
    ],
  },
  {
    path: PagePath.notFoundPage,
    Component: NotFoundPage,
  },
]);
