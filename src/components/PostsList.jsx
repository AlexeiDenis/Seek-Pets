import Post from "./Post";
export default function PostsList({posts}){
    
    const List = posts.map((x)=> <Post key={x.id} informations={x}/>)
 
  
   
  const showedList = Object.keys(List).length === 0?"No video to list yet!":List
    
    return(
    
       <div>{showedList}</div>
    )
}