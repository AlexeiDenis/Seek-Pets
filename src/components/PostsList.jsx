import Post from "./Post";
export default function PostsList({posts}){
    
    const List = posts.map((x)=> <Post key={x.id} informations={x}/>)
 
  
   
  const showedList = Object.keys(List).length === 0?"No video to list yet!":List
    
    return(
    
       <div>{showedList}</div>
    )
}

// import React from 'react'; // Import React for use of JSX
// import Post from "./Post";

// export default function PostsList(posts) {
//   console.log(posts);

//   const renderPosts = () => {
//     if (Object.keys(posts.posts).length === 0) {
//       return null; // Return null if posts are unavailable
//     } else {     
//        posts.posts.map((x) => (
//         <Post key={x.id} informations={x} />
//       ))
   
//     }
//   };

//   return (
//     <div>{renderPosts()}</div> // Call the function to render its output
//   );
// }
