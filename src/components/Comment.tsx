import { ThumbsUp, Trash } from "phosphor-react"
import styles from './Comment.module.css'
import { Avatar } from "./Avatar"
import { useState } from "react"

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState<number>(0)


  function handleDeleComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    // Modo correto de atualizar um valor de um estado que depende de seu valor passado
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/pedrojorge148.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Jorge</strong>
              <time title="11 de Agosto às 11:45" dateTime="2023-08-11 11:45:00">Cerca de 1hr atrás</time>
            </div>

            <button onClick={handleDeleComment} title="Deletr comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />    
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}