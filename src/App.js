import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUser';
import EditUserForm from './forms/EditUser';
import './App.css';

const App = () => {
    const usersData = [
        { id: 1, name: 'Tania', username: 'floppydiskette', phonenumber: '123-456-7890', age: 29 },
        { id: 2, name: 'Craig', username: 'siliconeidolon', phonenumber: '987-654-3210', age: 35 },
        { id: 3, name: 'Ben', username: 'benisphere', phonenumber: '555-555-5555', age: 40 },
    ];

    const initialFormState = { id: null, name: '', username: '', phonenumber: '', age: '' };
    const [currentUser, setCurrentUser] = useState(initialFormState);
    const [users, setUsers] = useState(usersData);
    const [editing, setEditing] = useState(false);

    const editRow = (user) => {
        setEditing(true);
        setCurrentUser({
            id: user.id,
            name: user.name,
            username: user.username,
            phonenumber: user.phonenumber,
            age: user.age,
        });
    };

    const addUser = (user) => {
        user.id = users.length + 1;
        setUsers([...users, user]);
    };

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const updateUser = (id, updatedUser) => {
        setEditing(false);
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    };

    return (
        <div className="container">
            <h1 className="text-center">CRUD App with Hooks</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <div>
                            <h2 className="text-center">Edit user</h2>
                            <EditUserForm
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                        <div>
                            <h2 className="text-center">Add user</h2>
                            <AddUserForm addUser={addUser} />
                        </div>
                    )}
                </div>
                <div className="flex-large">
                    <h2 className="text-center">View users</h2>
                    <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
                </div>
            </div>
        </div>
    );
};

export default App;
