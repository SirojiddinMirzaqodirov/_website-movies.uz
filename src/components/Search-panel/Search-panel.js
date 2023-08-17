import React from 'react'
import "./Search-panel.css"

const SearchPanel = () => {
  return (
    <form className="add-form d-flex" >
      <input type="text" className='form-control search-input' placeholder='Kinolarni qidirish..' />
      <button type="submit" className="btn btn-outline-dark">Qidirish</button>
    </form>
  )
  
}

export default SearchPanel