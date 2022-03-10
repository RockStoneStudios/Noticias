import { useState , useEffect} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario';
import  ListadoNoticias  from './components/ListadoNoticias';

function App() {
 //definir la categoria y noticias 
 const [categoria,setCategoria] = useState('');
 const [noticias,guardarNoticias] = useState([]);

 useEffect(()=>{
   const consultarAPI = async() =>{

       const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=99eac901b7d74abcb4238053d293c543`
        const respuesta = await fetch(url);
        const noticias = await respuesta.json();
         guardarNoticias(noticias.articles);
           }
   consultarAPI();
 },[categoria])

  return (
    <>
      <Header titulo="Buscador Noticias"/>
    <div className="container white">
      <Formulario setCategoria={setCategoria}/>
    </div>
    <ListadoNoticias noticias={noticias} />
    </>
  )
}

export default App
