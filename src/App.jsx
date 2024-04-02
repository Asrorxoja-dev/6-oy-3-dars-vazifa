import { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);



  
  function AddItem() {
    if (!newItem.trim()) {
      alert("Enter task...");
      return;
    }

    let item = {
      id: Math.random(),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem('');

    const music = new Audio("./add-sound.mp3");
    music.play();

    
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
    const music = new Audio("./delete-sound.mp3");
    music.play();
  }

  return (
    <>
      <div className="container">
        <div className="todo-wrapper">
          <div className="block">
            <h1>Todo List</h1>
            <input
              className='input'
              onChange={e => setNewItem(e.target.value)}
              value={newItem}
              type="text"
              placeholder='Add a new task'
            />
            <button id='button' onClick={AddItem}>Add</button>
           
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    <p>{item.value}</p>
                    <button className='deleteButton' onClick={() => deleteItem(item.id)}>
                      <img
                        width="20px"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/red-trash-can-icon.png"
                        alt=""
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default App;
