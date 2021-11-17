import { useState, useEffect, useRef } from 'react'
import './App.css';

function App() {
  const [data, updateData] = useState([]);
  const [Item, addItem] = useState("");


  const addItems = (e) => {
    e.preventDefault();
    if (Item) {
      const newItem = { id: new Date().getTime().toString(), Item }

      updateData((d) => {
        return [...d, newItem]
      })
      addItem("");

    }
  }

  const remove = (id) => {
    const remdata = data.filter((d) => id != d.id);
    updateData(remdata);
  }

  const clearAll = () => {
    updateData([]);
  }

  const inputfoc = useRef(null)
  useEffect(() => {
    inputfoc.current.focus();
  }, [data])

  return (
    <div className="App">
      <h1>TODO-LIST</h1>
      <form onSubmit={addItems}>
        <input value={Item} onChange={(e) => addItem(e.target.value)} placeholder="Enter The Task" minLength="2" maxLength="30" ref={inputfoc} />
        <button type="submit" className="btn">ADD ITEM</button>
      </form>

      {data.map((dt) => {
        return (
          <div className="list" key={dt.id} className="item">
            <h2>{dt.Item}</h2>
            <a onClick={() => remove(dt.id)}>remove</a>
          </div>
        )
      })}
      <button className="btn" onClick={clearAll}>Clear All</button>

    </div>
  );
}

export default App;
