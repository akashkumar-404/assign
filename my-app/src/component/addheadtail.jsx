import React, { useState } from 'react'

const Addheadtail = ({handleItem}) => {
 

    const [currentOption, setCurrentOption] = useState('')
  
    const changeOption = (e) => {
      
      setCurrentOption(e)
      
    }
    return (
        <>
      <form>
        <select value={currentOption}  onChange={(event) => changeOption(event.target.value)}>
        <option value="">Select value</option>
          <option value="T">T</option>
          <option value="H">H</option>
        </select>
        <button  onClick={(event) =>{ event.preventDefault() 
            changeOption(event.target.value) ;console.log(currentOption);handleItem(currentOption)}}>SUBMIT</button>
      </form>
      <div>
        
      </div>
      </>
    )
}

export default Addheadtail