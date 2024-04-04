import { View, Text, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { AButton, ChatBox, Showroom } from 'aphrica'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MotiView } from 'moti';

import { Easing } from 'react-native-reanimated';
import { useProvider } from '../Store/AppContext';



type ChatDataType={

  ChatId:number,
  UserName:string,
  Message:string,
  TimeStamp:string,
  Reaction:number,
  
}


const ChatScreen = ({ChatData}:{ChatData:ChatDataType[]}) => {

 
  const [visible,setvisible]=useState(false)
  const {height,width}= Dimensions.get('screen')

  const [Convo, setconvo]= useState<number[] | null>([])

  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };
 

  const {UserName} = useProvider()
  useEffect(()=>{
  

   
  },[])
  return (

    <View style={{
      flex:1,
      paddingTop:20,
      width:'100%',
      backgroundColor:'white',
      height:height-210
  }}>
   <ScrollView style={{width:'100%', height:800,flexDirection:'column' }}
   
   
   ref={scrollViewRef}
      onContentSizeChange={scrollToBottom}
   >



{

ChatData?.map((Chat)=>(

 
<MotiView

key={Chat.ChatId}
    from={{  translateY:50, opacity:0}}
    animate={{ translateY:visible?0:0 , opacity:1}}
    transition={{ 
  
      type: 'timing',
 
 easing:Easing.ease,
    translateY:{
   
      type:'spring'
    }
    }}
  >
<ChatBox    ChatIndicator={<Ionicons name="checkmark-done-outline" size={18} color="green" />} TimeStampColor='white' TimeStamp={Chat.TimeStamp} ReactionIcon={0x0001F44D} Aligned={UserName==Chat.UserName?'LEFT':'RIGHT'} SharpCorner={UserName==Chat.UserName?'TopRight':'TopLeft'} MessageColor={UserName==Chat.UserName?'gray':'white'} BackgroundColor= {UserName==Chat.UserName?'#d5ebdd' :'#679dd6'}

Message={Chat.Message}
/>
</MotiView>


))
}


   
   </ScrollView>
   </View>
  )
}

export default ChatScreen