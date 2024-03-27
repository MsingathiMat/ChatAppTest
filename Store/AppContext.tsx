import { createContext, useContext, useState } from "react";
import { Socket, io, } from "socket.io-client";



type ChatData={

    ChatId:number,
    UserName:string,
    Message:string,
    TimeStamp:string,
    Reaction:React.ReactNode | null
}

const socket=io('http://192.168.0.104:543')
type ProviderProps={
    ChatData:ChatData[] ,
    SetChatData: React.Dispatch<React.SetStateAction<ChatData[]>>,
    socket: typeof socket
}

const AppContext = createContext<ProviderProps>(null)

const AppProvider = ({children}:{children:React.ReactNode})=>{

    const [ChatData,SetChatData] = useState<ChatData[] | null>(null)

return <AppContext.Provider value={{ChatData:ChatData,SetChatData:SetChatData,socket:socket}}>

{children}

</AppContext.Provider>

}

const useProvider=()=>{

    const ContextInstance= useContext(AppContext)

    if(ContextInstance){

const {ChatData,SetChatData,socket} = ContextInstance

return {ChatData,SetChatData,socket}
    }else{

        console.log('You are trying to use the Context outside a Provider')
    }
}

export {useProvider,AppProvider}