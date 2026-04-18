import { useEffect, useState } from 'react'
import './App.css'
import TodoList from './components/Todolist'

function App() {
  const [data, setData] = useState([])

  const [searchValue, setsearchValue] = useState('')

  const [dataFilter, setDataFilter] = useState([])
  var url = "https://jsonplaceholder.typicode.com/posts"

  useEffect(() => {
    async function fetchdata() {
      var res = await fetch(url);
      var data = await res.json();
      console.log(data);
      setData(data);
      setDataFilter(data);
    }
    fetchdata();
  }, [])

  function handelSearch(e) {
    setsearchValue(e.target.value)
    var filter = data.filter((item) => {
      return item.title.includes(e.target.value)
    })
    setDataFilter(filter)
  }


  return (
    <>
      <TodoList />
      <hr />

      <input type="text" value={searchValue} placeholder='nhap vao de tim kiem' onChange={handelSearch} />

      {
        dataFilter.map((item) => {
          return <div key={item.id}>
            <h2>
              {item.title}
            </h2>
            <h2>{item.body}</h2>
          </div>
        }
        )
      }

      <hr />

      {
        data.map((item) => {
          return <div key={item.id}>
            <h2>
              {item.title}
            </h2>
            <h2>{item.body}</h2>
          </div>
        }
        )
      }


    </>
  )
}

export default App
