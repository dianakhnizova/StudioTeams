import type { LinkItems } from '@/sources/types';
import { PagePath } from '@/router/enums';
import { messages } from './messages';

export const contactMenuItemList: LinkItems[] = [
  {
    to: PagePath.root,
    label: messages.homeLinkTitle,
  },
  {
    to: PagePath.root,
    label: messages.aboutLinkTitle,
  },
  {
    to: PagePath.root,
    label: messages.contactLinkTitle,
  },
];
