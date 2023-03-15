// import logo from '../';
import React from 'react'
import AddNewItemForm from './AddNewItemForm'

function App() {

  const [listItem, setListItem] = React.useState('')
  
  const [list, setList] = React.useState([])
  
  return (
    <div className="wrapper">
      <div className="list-wrapper">
        <ol className="shopping-list">
          {list.map((item, index) => (
            // I know we aren't supposed to use the index, but I was stuck :( 
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
      <AddNewItemForm 
        listItem={listItem}
        setListItem={setListItem}
        list={list}
        setList={setList}
      />
    </div>
  );
}

export default App;