import { paginatorSelect } from "../constants/paginatorSelect"
import { initialState } from "../constants/initialState";
export default function Paginator(props) {
    console.log(props.index, props.totalPages)
    function handleChange(event) {
        props.setLimit("limit", event.target.value);
        props.setPage("page", initialState.page);
      }

      function nextPage(){
        if(props.index === props.totalPages) return;
        props.setPage("page", props.index + 1)
      }

      function previousPage(){
        if(props.index === 0) return;
        props.setPage("page", props.index - 1)
      }
    return (
        <> 
        <label htmlFor="selectLimit">Items per page:</label>
        <select id="selectLimit" value={props.limit} onChange={handleChange}>
        {paginatorSelect.map((item) => (
          <option key={item.id} value={item.value} disabled={item.value > props.count}>
            {item.value}
          </option>
        ))}
        </select>
        <p>
           Page: {props.index} -  {props.totalPages}
        </p>
        <button onClick={previousPage} disabled={props.index === 0? true:false}>Previous</button>
        <button onClick={nextPage} disabled={props.index === props.totalPages? true:false}>Next</button>
       
        </>
    )
}