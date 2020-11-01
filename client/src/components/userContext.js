import React from 'react';


const UserContext= React.createContext();

const UserProvider=UserContext.UserProvider;
const UserConsumer=UserContext.UserConsumer;

export {UserProvider , UserConsumer};