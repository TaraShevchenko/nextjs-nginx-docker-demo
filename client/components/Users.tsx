import React, { FC } from 'react';

export interface IUser {
    id: number;
    name: string,
    username: string,
    email: string,
}

export interface IUsers {
    users: IUser[]
}

const Users:FC<IUsers> = ({users}) => {
    return (
        <div>
            {users.map(el => (
                <div key={el.id}>
                    <div>name: {el.name}</div>
                    <div>username: {el.username}</div>
                    <div>email: {el.email}</div>
                </div>
            ))}
        </div>
    );
};

export default Users;