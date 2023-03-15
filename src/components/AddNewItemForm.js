import React from 'react';

function AddNewItemForm({ listItem, setListItem, list, setList }) {

  function generateList(event) {  
    event.preventDefault();
    
    const newList = [...list]
    newList.push(listItem)
    setList(newList)

    setListItem('')
  }
  
  return (
    <div className="new-list-item-form">
      <form
        onSubmit={generateList}
      >
       
        <label htmlFor="new-list-form-input">
          New item:
        </label>
        
        <div className="row">
          <input
            id="new-list-form-input"
            type="text"
            value={listItem}
            onChange={(event) => {
          setListItem(event.target.value);
          }}
          />
          <button>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewItemForm;