import React, { useState } from 'react';
import Post from './Post';
import postData from '../data/posts.json'; // Crie um JSON com os dados dos posts

function Posts() {
  const [posts, setPosts] = useState(postData);

  const toggleLike = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 } : post));
  };

  const toggleSave = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, saved: !post.saved } : post));
  };

  return (
    <div className="posts">
      {posts.map(post => (
        <Post key={post.id} post={post} toggleLike={toggleLike} toggleSave={toggleSave} />
      ))}
    </div>
  );
}

export default Posts;
