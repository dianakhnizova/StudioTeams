import PlaceholderImage from '@/assets/placeholder-image.png';
import { messages } from './messages';
import type { CardItems } from './types';

export const cardItemsList: CardItems[] = [
  {
    image: PlaceholderImage,
    name: messages.projectName.nameTitleProject1,
    url: messages.projectUrl.url1,
  },
  {
    image: PlaceholderImage,
    name: messages.projectName.nameTitleProject2,
    url: messages.projectUrl.url2,
  },
  {
    image: PlaceholderImage,
    name: messages.projectName.nameTitleProject3,
    url: messages.projectUrl.url3,
  },
];
