import React, { useState } from 'react';
import Post from './Post';
import postData from '../data/posts.json';

function Posts() {
  const [posts, setPosts] = useState(postData);

  // Incrementa likes ao clicar na imagem apenas no primeiro clique
  const handleImageClick = (id) => {
    setPosts(posts.map(post =>
      post.id === id && !post.liked 
        ? { ...post, liked: true, likes: post.likes + 1 } 
        : post
    ));
  };

  // Alterna entre curtir e descurtir ao clicar no ícone
  const handleIconClick = (id) => {
    setPosts(posts.map(post =>
      post.id === id 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 } 
        : post
    ));
  };

  const toggleSave = (id) => {
    setPosts(posts.map(post =>
      post.id === id 
        ? { ...post, saved: !post.saved } 
        : post
    ));
  };

  return (
    <div className="posts">
      {posts.map(post => (
        <Post 
          key={post.id} 
          post={post} 
          handleImageClick={handleImageClick} 
          handleIconClick={handleIconClick} 
          toggleSave={toggleSave} 
        />
      ))}
    </div>
  );
}

export default Posts;
