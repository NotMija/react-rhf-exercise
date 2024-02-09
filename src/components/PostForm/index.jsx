import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { createPost } from "../../api/posts";

const PostForm = () => {
  const {
    register,
    handleSubmit,
    reset, // Agregar reset desde useForm
    formState: { errors },
  } = useForm();

  const { mutate: create } = useMutation({
    mutationFn: (post) => {
      createPost(post);
    },
  });

  const onSubmit = (data) => {
    const newPost = {
      ...data,
      id: Date.now(),
    };
      
    create(newPost);
    reset(); // Llamar a reset cuando se envíe el formulario
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <input
        {...register("title", { required: "This field is required" })}
        type="text"
        placeholder="Title"
    
      />
      {errors.title && (
        <span >{errors.title.message}</span>
      )}
      <input
        {...register("author", { required: "This field is required" })}
        type="text"
        placeholder="Author"
      />
      {errors.author && (
        <span >{errors.author.message}</span>
      )}
      <input
        {...register("email", {
          required: "This field is required",
          pattern: {
            value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
            message: "Invalid email address",
          },
        })}
        type="email"
        placeholder="Email"
        
      />
      {errors.email && (
        <span >{errors.email.message}</span>
      )}
      <textarea
        {...register("content", {
          required: "This field is required",
          maxLength: {
            value: 150,
            message: "Maximum length should be 150",
          },
        })}
        placeholder="Content"
        
      ></textarea>
      {errors.content && (
        <span >{errors.content.message}</span>
      )}
      <button
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default PostForm;
