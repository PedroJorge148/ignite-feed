import { Header } from "./components/Header";

import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar";
import { Post, PostProps } from "./components/Post";
import './global.css'

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatar_url: 'https://github.com/pedrojorge148.png',
      name: 'Pedro Jorge',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta nisi nobis sint, similique qui soluta ratione animi minus odit consequuntur ab possimus repellat voluptas ea officiis molestiae rerum atque corporis! 🚀'},
      { type: 'link', content: 'design.dot/doctorcare'},
    ],
    publishedAt: new Date('2023-09-02 20:00:00')
  },
  {
    id: 2,
    author: {
      avatar_url: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-09-01 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapped}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


