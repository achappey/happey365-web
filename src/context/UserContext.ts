import React from 'react'

const UserContext = React.createContext<any>(undefined)

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext