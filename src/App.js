import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Details from './components/Details';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const [id, setId] = useState();
  const [isLoading, setLoading] = useState(true)
  const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    fetch(`${url}users.json`).then(response => response.json()).then(response => {
      setUsers(response)
      setLoading(false)
    })
  }

  const getInfoByUser = async () => {
    console.log(id);
      if (id) {
        const response = await fetch(`${url}${id}.json`);
        if (response.ok) {
          const json = await response.json()
          setUser(json)
        }
      }
  }

  const getUserHandle = (e) => {
    const currentUser = e.target.outerText;

    users.filter(el => {
      if (el.name === currentUser) {
        setId(el.id);
        getInfoByUser()
      }
    })
}

  return (
    <div className="App">
      {isLoading ? <div>Loading...</div> : <List users={users} click={getUserHandle}/>}
      {user ? <Details info={user} /> : ''}
    </div>
  );
}

export default App;
