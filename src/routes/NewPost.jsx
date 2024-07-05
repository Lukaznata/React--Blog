// hook axios
import blogFetch from '../axios/config'
// hooks
import { useState } from 'react';
// router
import { useNavigate } from 'react-router-dom';

// css
import './NewPost.css';


const NewPost = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const createPost = async(e) => {
      e.preventDefault();

      try {
        const post = {title, body, userId: 1};

        await blogFetch.post('/posts', {
          body: post,
        })

        navigate('/');

      } catch (error) {
        console.log(error)
      }

      

    }


  return (
    <div className='new_post'>
        <h2>Inserir um novo Post:</h2>
        <form onSubmit={(e) => createPost(e)}>
          <div className="form_control">
            <label htmlFor="title">Título:</label>
            <input type="text" name='title' id='title' placeholder='Digite o título' onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className="form_control">
            <label htmlFor="body">Título:</label>
            <textarea name="body" id="body" placeholder='Digite o conteúdo' onChange={(e) => setBody(e.target.value)}></textarea>
          </div>
          <input type="submit" value='Criar post' className='btn'/>
        </form>
    </div>
  )
}

export default NewPost