import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../components/hooks/useFetching";
import PostService from "../components/API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState(1)
  const [fetchPostByID, isLoading, error] = useFetching(async () => {
    const response = await PostService.getPostByID(params.id)
    setPost(response.data)
  })
  useEffect(() => {
    fetchPostByID(params.id)
  }, [])
  return (
    <div>
      <h1>POST# {params.id}</h1>
      <div>
        {isLoading
          ? <Loader/>
          : <div>
            <h2> {post.title}</h2>
            <h3> {post.body}</h3>
          </div>
        }
      </div>
    </div>
  );
};

export default PostIdPage;