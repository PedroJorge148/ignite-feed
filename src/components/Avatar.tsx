import { ComponentProps } from "react"
import styles from './Avatar.module.css'

type AvatarProps = ComponentProps<'img'> & {
  hasBorder?: boolean
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      {...props}
    />
  )
}