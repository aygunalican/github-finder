import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Users from './components/Users';
import React from 'react';
import axios from 'axios';
import { ThreeDots } from '@agney/react-loading';
import Swal from 'sweetalert2';
import './assets/css/app.css'; 
const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

const [lastResultEmpty, setLastResultEmpty] = useState(false);

const UserSearching = (keyboard) => {
  if (!keyboard) return;

  setLoading(true);

  axios
    .get(`https://imdb.iamidiotareyoutoo.com/search?q=${keyboard}`)
    .then((res) => {
      const isEmpty = res.data.description.length === 0;
      setUsers(res.data.description);


      if (isEmpty && !lastResultEmpty) {
        Swal.fire({
          title: "No users found!",
          width: 400,
          padding: "2em",
          color: "#1d0202",
          background: "url('https://i.pinimg.com/736x/ac/0e/29/ac0e29c0edac7c99bd5772abde4ccc1a.jpg') no-repeat center/cover",
          backdrop: `rgba(0,0,0,0.4)`,
        });
      }

      setLastResultEmpty(isEmpty); 
    })
    .catch((err) => console.error(err))
    .finally(() => setLoading(false));
};


  return (
    <div className="app">
      <div className="app-content">
        <Header />
        <Search sendKeyboard={UserSearching} />
        <Users sendUsers={users} />
      </div>

      {loading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255,255,255,0.4)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <ThreeDots 
            variant="brick-stack" 
            color="#32CD32" 
            size="small"
            style={{ transform: 'scale(0.2)' }}
          />
        </div>
      )}
    </div>
  );
};

export default App;
