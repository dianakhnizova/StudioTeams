import type { LinkItems } from '@/sources/types';
import { PagePath } from '@/router/enums';
import { messages } from './messages';

export const navMenuItemList: LinkItems[] = [
  {
    to: PagePath.root,
    label: messages.homeLinkTitle,
  },
  {
    to: PagePath.aboutPage,
    label: messages.aboutLinkTitle,
  },
  {
    to: PagePath.contactsPage,
    label: messages.contactLinkTitle,
  },
];
