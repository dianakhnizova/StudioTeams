import styles from './menu.module.css';
import { MenuItem } from './menu-item';

type MenuProps = {
  isOpen: boolean;
  onItemClick: () => void;
};

const menuItems = ['menu-1', 'menu-2', 'menu-3', 'menu-4', 'menu-5'];

export const Menu = ({ isOpen, onItemClick }: MenuProps) => {
  return (
    <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      {menuItems.map(item => (
        <MenuItem key={item} onClick={onItemClick}>
          {item}
        </MenuItem>
      ))}
    </ul>
  );
};
