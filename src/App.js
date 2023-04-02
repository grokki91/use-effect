import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Details from './components/Details';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
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

  const getInfoByUser = () => {
      if (user) {
        console.log(user, ' === user');
        const postUser = {
          id : user.id,
          name: user.name
        }
  
        const options = {
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          host: 'http://localhost:3000/',
          origin: 'https://raw.githubusercontent.com/',
          body: JSON.stringify(postUser)
        }
  
        fetch(`${url}${user.id}.json`, options).then(response => {
          response.json()
        })
      }
  }

  const getUserHandle = (e) => {
    const currentUser = e.target.outerText;

    users.filter(el => {
      if (el.name === currentUser) {
        setUser(el);
      }
    })
}

  return (
    <div className="App">
      {isLoading ? <div>Loading...</div> : <List users={users} click={getUserHandle}/>}
      {user ? <Details info={getInfoByUser} user={user}/> : ''}
    </div>
  );
}

export default App;
