import { filterConstant } from "../constants/filterConstant";
import { initialState } from "../constants/initialState";
export default function Filter(props) {
    const updatedValueSelected = new Set(props.filters);
    function handleChange(ev) {
      
        if (updatedValueSelected.has(ev.target.value)) {
            if (updatedValueSelected.size < 2) { return } else {
                updatedValueSelected.delete(ev.target.value);
            }
        } else {
            updatedValueSelected.add(ev.target.value)
        }  
        props.setFilter("filterBy", updatedValueSelected);
        props.resetPage("page", initialState.page)
    }
  

    return (

        <div>
            {filterConstant.map(item => (
                <section key={item.id}>
                    <input type="checkbox" id="checkbox" key={item.id} value={item.value} checked={updatedValueSelected.has(item.value)} onChange={handleChange} />
                    <label htmlFor="checkbox">{item.value}</label>
                </section>


            ))}
        </div>

    )
}