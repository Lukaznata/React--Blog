// hook axios
import blogFetch from '../axios/config'
// hooks
import { useState, useEffect } from 'react';
// router
import { useParams, useNavigate } from 'react-router-dom';

// css

const EditPost = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const {id} = useParams();

    const getPost = async() => {

        try {
            
            const response = await blogFetch.get(`/posts/${id}`)
            const data = response.data;

            setTitle(data.title)
            setBody(data.body)


        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getPost();

    }, []);


    const editPost = async(e) => {
        e.preventDefault();

        const post = {title, body, userId: 1};

        await blogFetch.put(`/posts/${id}`, {
            body: post,
        })
    }

  return (
    <div className='new_post'>
        <h2>Editando: {title}</h2>

        <form onSubmit={(e) => editPost(e)}>

          <div className="form_control">
            <label htmlFor="title">Título:</label>
            <input type="text" name='title' id='title' placeholder='Digite o título' onChange={(e) => setTitle(e.target.value)}
            value={title || 'Carregando...'}/>
          </div>

          <div className="form_control">
            <label htmlFor="body">Título:</label>
            <textarea name="body" id="body" placeholder='Digite o conteúdo' onChange={(e) => setBody(e.target.value)} 
            value={title || 'Carregando...'}></textarea>
          </div>

          <input type="submit" value='Editar post' className='btn'/>
        </form>

    </div>
  )
}

export default EditPost