import { format, formatDistanceToNow } from "date-fns"
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from './Post.module.css'
import { ptBR } from "date-fns/locale"
import { FormEvent, useState } from "react"


interface Author {
  avatar_url: string
  name: string
  role: string
}

export interface PostProps {
  id?: number
  author: Author 
  content: {
    type: 'paragraph' | 'link'
    content: string
  }[]
  publishedAt: Date
}

/*interface CommentProps {
  name: string
  avatar_url: string
  publishedAt: Date
  content: string
}*/

export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ])

  const [newCommentText, setNewCommentText] = useState<string>('')

  const publishedAtFormatted = format(publishedAt, "d 'de'  LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
            <Avatar src={author.avatar_url} alt="" />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
        </div>

        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
          {publishedAtRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, i) => {
          if (line.type === 'paragraph') {
            return (
              <p key={i}>{line.content}</p>
            )
          } else {
            return (
              <a href="" key={i}>{line.content}</a>
            )
          } 
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          required
        />

        <footer>
          <button 
            type="submit"
            disabled={isNewCommentEmpty}
          >
              Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}