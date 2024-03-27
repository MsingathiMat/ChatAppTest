import { createContext, useContext, useState } from "react";


type ChatData={

    ChatId:number,
    UserName:string,
    Message:string,
    TimeStamp:string,
    Reaction:React.ReactNode | null
}

type ProviderProps={
    ChatData:ChatData[] ,
    SetChatData: React.Dispatch<React.SetStateAction<ChatData[]>>
}

const AppContext = createContext<ProviderProps>(null)

const AppProvider = ({children}:{children:React.ReactNode})=>{

    const [ChatData,SetChatData] = useState<ChatData[] | null>(null)

return <AppContext.Provider value={{ChatData:ChatData,SetChatData:SetChatData}}>

{children}

</AppContext.Provider>

}

const useProvider=()=>{

    const ContextInstance= useContext(AppContext)

    if(ContextInstance){

const {ChatData,SetChatData} = ContextInstance

return {ChatData,SetChatData}
    }else{

        console.log('You are trying to use the Context outside a Provider')
    }
}

export {useProvider,AppProvider}