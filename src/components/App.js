// import logo from '../';
import React from 'react'
import AddNewItemForm from './AddNewItemForm'

function App() {
  
  // Set state to create the list.
  const [list, setList] = React.useState([])
  
  // Create a function to run when a new item is added.
  function handleNewItem(listItem) {
    // Create a new item and assign it a randomly generated ID.
    const newItem = {
      listItem,
      id: Crypto.randomUUID(),
    }

    // Spread the existing list and adding the new list item to create a new array.
    const newItemList = [...list, newItem]

    // Update the list state to the array with the new item.
    setList(newItemList)
  }

  return (
    
    <div className="wrapper">
      <div className="list-wrapper">
        <ol className="shopping-list">
          {/* Map through the list items, use the assigned ID as the key.*/}
          {list.map((listItem, id) => ( 
            <li key={id}>{listItem}</li>
          ))}
        </ol>
      </div>
      
      {/*    // Render the AddNewItemForm component and pass down the handleNewItem function.*/}
      <AddNewItemForm 
        handleNewItem={handleNewItem}
      />
    </div>
  );
}

export default App;