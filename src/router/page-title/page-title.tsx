import { PagePath } from '../enums';
import type { PageTitle } from '../../sources/types';
import { messages } from '../../sources/messages';

export const pageTitle: PageTitle = {
  [PagePath.root]: messages.titles.homePageTitle,
  [PagePath.notFound]: messages.titles.notFoundPageTitle,
};
