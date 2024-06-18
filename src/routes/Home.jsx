import {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import "./Home.css"
import blogFetch from '../axios/config'


const Home = () => {

  const [posts , setPosts] = useState([])

  const getPost = async () => {
    try {
      const response =  await blogFetch.get("/posts")
      const data = response.data
      setPosts(data)
      console.log(data);
    } catch (error) {
        console.log(error);
    }
  } 

  useEffect(()=> {
    getPost()
  },[])

  return (
    <div className='home'>
      <h1>Ultimos Posts</h1>

    <ul>
    {posts.length === 0 ? <p>Carregando...</p> : (
        posts.map((post) => {
          return(
          <li  className='post' key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content.substring(0, 100)}</p>
            <Link to={`/posts/${post.id}`} className='btn'>Ler Mais</Link>
          </li>
          )
        })
      )}
      </ul>  
    </div>
  )
}

export default Home