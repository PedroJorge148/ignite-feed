import { Avatar } from "./Avatar";
import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBkZXZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=50" 
      />
    
      <div className={styles.profile}>
        <Avatar src="https://github.com/pedrojorge148.png" />

        <strong>Pedro Jorge</strong>
        <span>Developer Full Stack</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
    
  );
}