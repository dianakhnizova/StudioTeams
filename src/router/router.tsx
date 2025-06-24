import { createBrowserRouter } from 'react-router-dom';
import { PagePath } from './enums';
import { Root } from './root/root';
import { HomePage } from '../pages/home-page/home-page';
import { NotFoundPage } from '../pages/not-found-page/not-found-page';

export const router = createBrowserRouter([
  {
    path: PagePath.root,
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: PagePath.notFound, Component: NotFoundPage },
    ],
  },
  {
    path: PagePath.notFound,
    Component: NotFoundPage,
  },
]);
