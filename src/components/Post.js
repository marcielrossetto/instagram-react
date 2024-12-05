import React from 'react';

function Post({ post, handleImageClick, handleIconClick, toggleSave }) {
  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={post.userImage} alt={post.user} />
          {post.user}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
      <div className="conteudo">
        {/* Clique na imagem só aumenta o like uma vez */}
        <img 
          src={post.image} 
          alt={post.user} 
          onClick={() => handleImageClick(post.id)} 
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className="fundo">
        <div className="acoes">
          <div>
            {/* Ícone de coração alterna entre curtir e descurtir */}
            <ion-icon 
              name={post.liked ? "heart" : "heart-outline"} 
              onClick={() => handleIconClick(post.id)}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon 
              name={post.saved ? "bookmark" : "bookmark-outline"} 
              onClick={() => toggleSave(post.id)}
            ></ion-icon>
          </div>
        </div>
        <div className="curtidas">
          <img src={post.likedByImage} alt={post.likedBy} />
          <div className="texto">
            Curtido por <strong>{post.likedBy}</strong> e <strong>outras {post.likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
