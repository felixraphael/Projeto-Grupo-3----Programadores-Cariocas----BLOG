import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";


import axios from "axios";



const Post = () => {

  let navigate = useNavigate();

  const addcliente = data => axios.post("https://j-server.onrender.com/Clientes", data)
  .then(() => {
    console.log("Acertou");
    navigate("/");
  })
  .catch(() => {
    console.log("Ih, deu erro:c !");
  })



  
  const validationCli = yup.object().shape({
    nome: yup.string().required("aaaaaaaaaaaaaaaaaaa").max(20, 'passou de 20'),
    idade: yup.string().required("vvvvvvvvvvvvvvvvvvvvvvv").max(20, 'passoi de 20'),
    comentario: yup.string().required("vvvvvvvvvvvvvvvvvvvvvvv").max(40, 'passoi de 20')
  });
  
  const { register, handleSubmit, formState: {errors}, reset } = useForm({
    resolver: yupResolver(validationCli)
  });
  
  return (
    <div className="main">
      <h1>Criar postagem</h1>
      <form onSubmit={handleSubmit(addcliente)}>
      <div>
        <label>Nome</label>
        <input type='text' name='nome'  {...register('nome')} />
        <p className="error-menssange">{errors.nome?.message}</p>
        </div>
        <hr />

        <div>
        <label>Idade</label>
        <input type='text' name='idade'{...register('idade')} />
        <p className="error-menssange">{errors.idade?.message}</p>
        </div>
        <hr />

        <div>
        <label>Telefone</label>
        <input type="text" name='tel'{...register('telefone')} />
        <p className="error-menssange">{errors.telefone?.message}</p>
        </div>
        <hr />

        <div>
        <label>Filme Assistido</label>
        <input type="text" name='filme'{...register('assistido')} />
        <p className="error-menssange">{errors.assistido?.message}</p>
        </div>
        <hr />

        <div>
        <label>Comentário</label>
        <textarea name='comentario'{...register('comentario')} />
        <p className="error-menssange">{errors.comentario?.message}</p>
        </div>
        <hr />

        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default Post