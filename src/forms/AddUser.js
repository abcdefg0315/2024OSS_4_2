import React, { useState } from 'react';

const AddUsers = (props) => {
    const initialFormState = { id: null, name: '', username: '', phonenumber: '', age: '' };
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                if (!user.name || !user.username || !user.phonenumber || !user.age) return;
                props.addUser(user);
                setUser(initialFormState);
            }}
        >
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <label>Phone Number</label>
            <input type="text" name="phonenumber" value={user.phonenumber} onChange={handleInputChange} />
            <label>Age</label>
            <input type="number" name="age" value={user.age} onChange={handleInputChange} />
            <button>Add new user</button>
        </form>
    );
};

export default AddUsers;
