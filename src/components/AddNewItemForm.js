import React from 'react';

// Pass the handleNewItem function in.
function AddNewItemForm({ handleNewItem }) {

  // Set state for individual list items.
  const [listItem, setListItem] = React.useState('')

  // Create a function to generate the list when the form is submitted.
  function generateList(event) {  
    // Prevent the default action of refreshing the page.
    event.preventDefault();
    // Run the handleNewItem function on the listItem.
    handleNewItem(listItem)
    // Reset the listItem state to blank out the submission field after an item has been entered.
    setListItem('')
  }
  
  return (
    <div className="new-list-item-form">
      <form
        // Run the generateList function when the form is submitted. 
        onSubmit={generateList}
      >
        <div className="row">
          <input
            id="new-list-form-input"
            type="text"
            placeholder="Task"
            // Assign the value to the listItem.
            value={listItem}
            // When the input is changed, set the listItem to what's entered.
            onChange={(event) => {
          setListItem(event.target.value);
          }}
          />
          <button className="btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewItemForm;