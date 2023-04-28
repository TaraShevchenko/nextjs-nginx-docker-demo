import React, { useEffect, useState } from 'react'
import Users, { IUser } from '../components/Users';
export default function UserCSR() {
   const [ data, setData ] = useState<IUser[] | null>(null)
   const fetchUserPosts = async () => {
      const response = await fetch('http://localhost:3001/users')
      const data = await response.json()
      setData(data)
   }

   useEffect(() => {
      fetchUserPosts()
   }, [])

   return <>{!!data?.length && <Users users={data} />}</>
}