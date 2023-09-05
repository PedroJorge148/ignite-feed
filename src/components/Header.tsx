import styles from './Header.module.css'
import igniteFeedLogo from '../assets/ignite-feed.svg'

export function Header() {
  return (
    <div className={styles.header}>
      <img src={igniteFeedLogo} alt="Logo do ignite feed" />
    </div>
  )
}