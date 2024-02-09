import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPostById } from "../api/posts";

export const PostDetails = () => {

  const { postId } = useParams();


  const { data: postData, isLoading } = useQuery({
    queryKey: ["postList", postId],
    queryFn: () => getPostById(postId),
  });


  return (
    <div>
      <h1 >Post Details</h1>
      {isLoading ? (
        <div >Loading...</div>
      ) : (
        <div >
          <h2 >{postData.title}</h2>
          <p >{postData.content}</p>
        </div>
      )}
    </div>
  );
};
