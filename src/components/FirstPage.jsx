import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PostsList from './PostsList';
import useSelectPosts from "../hooks/useSelectPosts"
import Filter from './Filter';
import Paginator from './Paginator';
import { initialState } from '../constants/initialState';
export default function FirstPage() {


  let location = useLocation();

  const [urlState, setUrlState] = useState(initialState)
  const status = location.pathname.includes("lost") ? false : location.pathname.includes("found") ? true : null;
  const { data, isLoading, error, count } = useSelectPosts(status, urlState.page, urlState.limit, urlState.filterBy);

  const totalPages = Number(Math.ceil(count / urlState.limit) - 1)

console.log("count este: ",count)
  function modifyURLState(key, value) {

    setUrlState((prev) => ({ ...prev, [key]: value }))
  }
  useEffect(() => {
    setUrlState(initialState)
  }, [status])

  return (
    <>
      <Filter setFilter={modifyURLState} resetPage={modifyURLState} filters={urlState.filterBy} />
      <Paginator setPage={modifyURLState} setLimit={modifyURLState} totalPages={totalPages} index={urlState.page} limit={urlState.limit} count={count} />
      <h1>{location.pathname} page</h1>

      {isLoading ? (
        <p>Data is currently loading...</p>
      ) : error ? (
        <p>There was an issue loading the articles.</p>
      ) : (
        <PostsList posts={data} />
      )}

    </>
  )
}