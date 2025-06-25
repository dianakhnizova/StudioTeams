import styles from './menu-item.module.css';

type MenuItemProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const MenuItem = ({ children, onClick }: MenuItemProps) => {
  return (
    <li
      className={styles.menuItem}
      onClick={e => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </li>
  );
};
