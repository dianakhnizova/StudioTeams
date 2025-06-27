import { contactMenuItemList } from './contact-menu-items/contact-menu-item-list';
import styles from './contact-menu.module.css';
import { NavLink } from 'react-router-dom';

type MenuProps = {
  isMobile: boolean;
  isOpen: boolean;
  onItemClick: (to: string) => void;
};

export const ContactMenu = ({ isMobile, isOpen, onItemClick }: MenuProps) => {
  return (
    <ul
      className={`${styles.menu} ${isMobile ? styles.menuMobile : ''} ${isMobile && isOpen ? styles.open : ''}`}
    >
      {contactMenuItemList.map(link => {
        return (
          <NavLink
            key={link.label}
            to={link.to}
            className={styles.menuItem}
            onClick={() => onItemClick(link.to)}
          >
            {link.label}
          </NavLink>
        );
      })}
    </ul>
  );
};
