import React from 'react'

const Noticia = ({noticia}) => {
    //extraemos datos
    const {urlToImage,url,title,description,source} = noticia;
      
  return (
      <div className="col s12 m6 l4">
       <div className="card">
       <div className="card-image">
         <img src={urlToImage} alt={title} /> 
         <div className="card-title">{source.name}</div>
         </div>  
         <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
         </div> 
          <div className="card-action">
          <a 
          className='waves-effect waves-light btn'
           href={url} 
           target="_blank"
           rel='noopener noreferrer'
           >Ver noticia completa</a>   
         </div>
          
      </div>     
      </div>
  )
}

export default Noticia;