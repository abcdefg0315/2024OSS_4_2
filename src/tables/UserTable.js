import React from 'react';

const UserTable = (props) => (
    <table>
        <thead>
        <tr>
            <th className="name-column">Name</th>
            <th className="username-column">Username</th>
            <th className="phonenumber-column">Phone Number</th>
            <th className="age-column">Age</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {props.users.length > 0 ? (
            props.users.map(user => (
                <tr key={user.id}>
                    <td className="name-column">{user.name}</td>
                    <td className="username-column">{user.username}</td>
                    <td className="phonenumber-column">{user.phonenumber}</td>
                    <td className="age-column">{user.age}</td>
                    <td>
                        <button className="button muted-button" onClick={() => {
                            props.editRow(user);
                        }}>
                            Edit
                        </button>
                        <button className="button muted-button" onClick={() => props.deleteUser(user.id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={5}>No users</td>
            </tr>
        )}
        </tbody>
    </table>
);

export default UserTable;
