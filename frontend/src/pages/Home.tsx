import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Home() {

  const { user } = useAuthContext();
  
  return (
    <div>{user?.email}</div>
  )
}
