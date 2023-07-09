import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import Search from '../../components/search/Search'
import "./Bookmarks.css"
import { usePostContext } from '../../contexts/PostProvider'
import PostCard from '../../components/postCard/PostCard'

const Bookmarks = () => {

  return (
    <div className='main-layout'>
    <Navigation/>
    <div className='bookmarks'>
      <h2>Bookmarks</h2>
      
    </div>
    <Search/>
    </div>
  )
}

export default Bookmarks