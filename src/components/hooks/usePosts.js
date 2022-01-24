import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
  function getSortedPosts() {
    if (sort)
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    else
      return posts
  }

  const sortedPosts = useMemo(() => {
    return getSortedPosts()
  }, [sort, posts])
  return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toUpperCase().includes(query.toUpperCase()))
  }, [query, sortedPosts])
  return sortedAndSearchedPosts;
}