import React, { FC } from 'react';
import Users, { IUser } from '../components/Users';

export interface ISsgPage {
    data: IUser[]
}

const SsgPage:FC<ISsgPage> = ({ data }) => {
    return (
        <Users users={data} />
    );
};

export async function getStaticProps() {
    try {
        const res = await fetch('http://auth-backend:3001/users')
        const data: IUser[] = await res.json()
     
        return { props: { data } }
    } catch {
        return { props: { data: [] } }
    }
 }

export default SsgPage;