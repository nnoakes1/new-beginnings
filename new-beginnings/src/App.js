import './App.css';
import React from 'react';

import { getUsers, updateUser, deleteUser } from './mockApi';
import { UserTable } from './components/userTable';
import { Header } from './components/header';

function App() {
  const [users, setUsers] = React.useState(null);


  const callGetUsers = React.useCallback(async () => {
    try {
      const result = await getUsers();
      setUsers(result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  React.useEffect(() => {
    callGetUsers();
  }, [callGetUsers]);

  const refetchUsers = async () => {
    await callGetUsers();
  };

  const editUser = async (id, data) => {

    try {
      await updateUser(id, data);
      await refetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const removeUser = async (id) => {
    try {
      await deleteUser(id);
      await refetchUsers();
    } catch (error) {
      console.log(error);
    }
  }

  if (!users) {
    return null;
  }

  return (
    <div className="App">
      <Header/>
      <div className="main-body">
        <div className="user-table">
          <UserTable users={users} updateUser={editUser} deleteUser={removeUser}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
