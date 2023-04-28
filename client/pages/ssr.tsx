import React, { FC } from 'react';
import Users, { IUser } from '../components/Users';

export interface ISsrPage {
    data: IUser[]
}

const SsrPage:FC<ISsrPage> = ({ data }) => {
    return (
        <Users users={data} />
    );
};

export async function getServerSideProps() {
    try {
        const res = await fetch('http://auth-backend:3001/users')
        const data: IUser[] = await res.json()
     
        return { props: { data } }
    } catch {
        return { props: { data: [] } }
    }
 }

export default SsrPage;