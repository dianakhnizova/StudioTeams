import styles from './random-works.module.css';
import { cardItemsList } from '../project-card/card-items-list/card-items-list';
import { useMemo } from 'react';
import { ProjectCard } from '../project-card/project-card';

const getRandomProjects = () => {
  const randomList = [...cardItemsList]
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);
  return randomList.slice(0, 3);
};

export const RandomWorks = () => {
  const randomProjects = useMemo(() => getRandomProjects(), []);

  return (
    <ul className={styles.container}>
      {randomProjects.map((card, index) => {
        return <ProjectCard key={index} card={card} />;
      })}
    </ul>
  );
};
