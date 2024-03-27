import { io } from "socket.io-client";


const socket=io('http://192.168.0.104:543')

type ChatDataTypes={

    ChatId:number,
    UserName:string,
    Message:string,
    TimeStamp:string,
    Reaction:React.ReactNode | null,
    
}

type ProviderProps={
    ChatData:ChatDataTypes[] ,
    SetChatData: React.Dispatch<React.SetStateAction<ChatDataTypes[]>>,
    socket: typeof socket,
    UserName:string,
    SetUserName: React.Dispatch<React.SetStateAction<string>>
}

export {ProviderProps,ChatDataTypes}