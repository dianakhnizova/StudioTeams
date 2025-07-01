import React from 'react';
import styles from './project-card.module.css';
import type { CardItems } from './card-items-list/types';

export const ProjectCard: React.FC<{ card: CardItems }> = ({ card }) => {
  return (
    <li className={styles.container}>
      <a
        href={card.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <img src={card.image} alt="Project-Image" className={styles.image} />
        <span className={styles.name}>{card.name}</span>
      </a>
    </li>
  );
};
