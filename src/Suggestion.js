import React from 'react';

function Suggestion({ user, image }) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={image} alt={user} />
        <div className="texto">
          <div className="nome">{user}</div>
          <div className="razao">Segue você</div>
        </div>
      </div>
      <div className="seguir">Seguir</div>
    </div>
  );
}

export default Suggestion;
