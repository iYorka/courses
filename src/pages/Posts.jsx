import React, {useEffect, useMemo, useRef, useState} from 'react';
import '../styles/App.css'
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {usePosts} from "../components/hooks/usePosts";
import axios from "axios";
import PostService from "../components/API/PostService";
import Loader from "../components/UI/loader/Loader";
import {useFetching} from "../components/hooks/useFetching";
import {getPageCount, getPagesArray} from "../utils/pages";
import {classNamesShape} from "react-transition-group/cjs/utils/PropTypes";
import Pagination from "../components/UI/pagination/Pagination";

function Posts(factory, deps) {
  const [posts, setPosts] = useState([])
  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState({sort: '', query: ''})
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const changePage = (page) => {
    setPage(page)
  }
  // let pagesArray = getPagesArray(totalPages)

  const [fetchPosts, isPostLoaded, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))

  })

  useEffect(() => {
    fetchPosts()
  }, [posts])
  let pagesArray = getPagesArray(totalPages)
  const createPost = (newPost) => {
    setPosts([newPost, ...posts])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (<div className="App">
    <MyButton style={{marginTop: 30}} onClick={() => {
      setModal(!modal)
    }}>Add some post</MyButton>
    <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost}/>
    </MyModal>

    <hr style={{margin: '15px 0'}}/>
    <PostFilter
      filter={filter}
      setFilter={setFilter}
    />
    {postError &&
      <h1>Error Error Error!!! ${postError}</h1>
    }
    {isPostLoaded
      ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
      : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'my posts'
      }/>}
    <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
  </div>);
}

export default Posts;
