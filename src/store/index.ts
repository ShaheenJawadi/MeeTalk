 
import { configureStore } from '@reduxjs/toolkit'

 
import socket from './socket'
 

export const store = configureStore({
    reducer: { 
        socket
     
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
