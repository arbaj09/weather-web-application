
import './input.css'
const Input=(props)=>{
 

    return(
    <>
    <div className="Input-Wraper">
        <div className="Form-control">
            <input type='text ' placeholder='Enter Your City' onChange={ props.onInputChangeHandler}  />
            
            <button onClick={ props.onSearchHanler}>Search</button>
        </div>
    </div>
    </>)
}
export default Input
