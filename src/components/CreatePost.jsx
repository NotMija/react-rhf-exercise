import React from 'react';
import { useForm } from 'react-hook-form';

function CreatePost() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data); 
  
    const url = 'http://localhost:3000/posts'; 
  
    try {
      const response = await fetch(url, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data), 
      });
  
      if (response.ok) {
        const newPost = await response.json();
        console.log('Post creado con éxito:', newPost);
      } else {
        console.error('Error al crear el post:', response.statusText);
        // Manejo de errores 
      }
    } catch (error) {
      console.error('Error al intentar comunicarse con el servidor:', error);
      // Manejo de errores 
    }
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">Título:</label>
        <input id="title" {...register('title', { required: true })} />
        {errors.title && <p>Este campo es requerido</p>}
      </div>

      <div>
        <label htmlFor="author">Autor:</label>
        <input id="author" {...register('author', { required: true })} />
        {errors.author && <p>Este campo es requerido</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" {...register('email', { required: true })} />
        {errors.email && <p>Este campo es requerido</p>}
      </div>

      <div>
        <label htmlFor="body">Cuerpo del Post:</label>
        <textarea id="body" {...register('body', { required: true })} />
        {errors.body && <p>Este campo es requerido</p>}
      </div>

      <div>
        <button type="submit">Crear Post</button>
      </div>
    </form>
  );
}

export default CreatePost;
