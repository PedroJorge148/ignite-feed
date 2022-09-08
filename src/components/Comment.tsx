import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from './Comment.module.css';

interface CommentProps {
  content: string,
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    //Desse modo consigo alterar o valor antes de renderizar a página
    setLikeCount((state) => {
      return state + 1;
    });

    // setLikeCount((state) => {
    //   return state + 1;
    // });
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/jailsonsouza.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Jorge</strong>
              
              <time title="29 de Agosto às 00:13h" dateTime="2022-08-29 00:13:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          {/* or: () => setLikeCount(likeCount + 1) */}
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>

      </div>
    </div>
  )
}