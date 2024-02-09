import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPosts } from "../api/posts";
import { Link } from "react-router-dom";

export const Posts = () => {
  const { data: postData, isLoading } = useQuery({
    queryKey: ["postList"],
    queryFn: getPosts,
  });

  return (
    <div>
      <h1 >Posts</h1>

      {isLoading ? (
        <div >Loading...</div>
      ) : (
        <div >
          {postData?.map((post) => (
            <Link
              key={post.id}
              to={`/post/${post.id}`}
            >
              <h2 >{post.title}</h2>
              <p >{post.content}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
