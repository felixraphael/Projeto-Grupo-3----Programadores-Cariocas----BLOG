import API from "../components/API";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Home = () => {

  const [clientes, setClientes] = useState([]);

  const getClientes = async() => {

    try {

      const response = await axios.get(`https://j-server.onrender.com/Clientes`);
      

      const data = response.data;

      setClientes(data);

      console.log(data);
      
    } catch (error) {
      console.log(error);
    }

  }
  

  useEffect(() => {

    getClientes();

  }, [])

  function deletecliente(id) {
    axios.delete(`https://j-server.onrender.com/Clientes/${id}`)
   setClientes( clientes.filter(cliente => clientes.id !== id))
  }

  
    
      

  if(!clientes || !clientes.length) return <div className='loading'>carregando</div>

  



  return (

    <div className='estante'>
      {clientes.map((cliente, key) => {
        const { id, nome, idade, telefone, assistido,comentario, } = cliente;

        return(
          <div className="card">

            <h2>{nome}</h2>
            <p>Idade: {idade}</p>
            <p>Telefone: {telefone}</p>
            <p> Filme assistido: {assistido}</p>
            <p>Comentário</p>
            <p><b>{comentario}</b></p>

            <div className="btns">
              <button> <Link to={`/edit/${id}`} >Editar</Link> </button>
              <button onClick={() => deletecliente(cliente.id)}>Deletar</button>
            </div>
            <hr></hr>
          </div>
        )

        })}

  </div>

  )
}

export default Home