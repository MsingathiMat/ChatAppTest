import { createContext, useContext, useState } from "react";
import {  io, } from "socket.io-client";
import { ChatDataTypes, ProviderProps } from "../Types/Types";







const socket=io('https://ioserver.adaptable.app')

// const socket=io('https://ioserver-three.vercel.app:543')



const AppContext = createContext<ProviderProps>(null)

const AppProvider = ({children}:{children:React.ReactNode})=>{

    const [ChatData,SetChatData] = useState<ChatDataTypes[] | null>(null)
    const [UserName,SetUserName] = useState<string>("")

return <AppContext.Provider value={{ChatData:ChatData,SetChatData:SetChatData,socket:socket,UserName:UserName,SetUserName:SetUserName}}>

{children}

</AppContext.Provider>

}

const useProvider=()=>{

    const ContextInstance= useContext(AppContext)

    if(ContextInstance){

const {ChatData,SetChatData,socket,UserName,SetUserName} = ContextInstance

return {ChatData,SetChatData,socket,UserName,SetUserName}
    }else{

        console.log('You are trying to use the Context outside a Provider')
    }
}

export {useProvider,AppProvider}