import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import Search from '../../components/search/Search'
import { usePostContext } from '../../contexts/PostProvider'
import PostCard from '../../components/postCard/PostCard'
import "./Explore.css"

const Explore = () => {
  const {posts} = usePostContext();
  return (
    <div className='main-layout'>
    <Navigation/>
    <div className='explore'>
      <h2>Explore</h2>
      {posts.map(post => <PostCard key={post.id} post={post}/>)}
    </div>
    <Search/>
    </div>

  )
}

export default Explore