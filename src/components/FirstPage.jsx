import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PostsList from './PostsList';
import useSelectPosts from "../hooks/useSelectPosts"


export default function FirstPage() {
  const initialLimit = 7;
const initialIndex = 0;
  let location = useLocation();
  let [locationBoolean, setlocationBoolean] = useState(location.pathname);
  const [limit, setLimit] = useState(initialLimit);
  const [index, setIndex] = useState(initialIndex);
 const  status = locationBoolean.includes("lost")?false:locationBoolean.includes("found")?true:null;
  const { data, isLoading, error, count } = useSelectPosts(status, index, limit);
  

  useEffect(() => {
    setlocationBoolean(location.pathname);
  }, [location]);

  return (
    <>
      <p>{locationBoolean} page</p>

      {isLoading ? (
        <p>Data is currently loading...</p>
      ) : error ? (
        <p>There was an issue loading the articles.</p>
      ) : (
        <PostsList posts={data}/>
      )}
     
    </>
  )
}