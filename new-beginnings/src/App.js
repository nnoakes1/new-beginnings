import './App.css';
import React from 'react';

import { getUsers, updateUser } from './mockApi';
import { UserTable } from './components/userTable';

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

  const editUser = async (id) => {
    const user = users.find((user) => user.id === id);
    console.log(user);

    try {
      await updateUser(id, { });
      await refetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  if (!users) {
    return null;
  }

  return (
    <div className="App">
      <header className="new-beginnings-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Welcome to New Beginnings!</p>
      </header>
      <div className="main-body">
        <div className="user-table">
          <UserTable users={users}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
