import { useState } from 'react'
import './App.css'



function App() {
 
  const [newItem, setNewItem]= useState('');
   const[items, setItems] = useState([]);



 


function AddItem(){

  if(!newItem){
    alert("Enter task...")
    return;
  }
 
  let item = {
    id: Math.floor(Math.random() * 10),
    value:newItem
  };

  setItems( oldList=>[...oldList, item]);
  
  setNewItem('');
  console.log(items);
}

function deleteItem(id){
 const newArray = items.filter(item => item.id !== id);
 setItems(newArray); 
}
    

  return (
    <>
     <div className="container">
     <div className="block">
      <h1>All Tasks</h1>
      <input onChange={ e => setNewItem(e.target.value)} value={newItem} type="text" placeholder='Add a new task insdie ‘All’ category'/>
  <button className='button' onClick={()=> AddItem()}>Add</button>
    <div className="table">
      <ul>
        {items.map(item =>{
        return(
          <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>❌</button></li>
        )
        }) }
        
       
      </ul>
    </div>
     </div>
     </div>


    </>
  )
}

export default App



// // App.js
// import { useState } from "react";
// import './App.css';
// function App() {
//     const [key, setkey] = useState();
//     const keyUp = (event) => {
//         setkey(event.key)
//     }
//     return (
//         <div className="App">
//             <h1>GeeksforGeeks</h1>
//             {key ? <h2>Key UP : {key}</h2> : null}
//             <input type='text'
//                    onKeyUp={keyUp} 
//                    placeholder='Press & Release Key here...' />
//         </div>
//     );
// }
// export default App;