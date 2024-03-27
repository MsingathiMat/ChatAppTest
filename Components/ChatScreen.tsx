import { View, Text, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { AButton, ChatBox, Showroom } from 'aphrica'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MotiView } from 'moti';
import { io } from 'socket.io-client';
import { Easing } from 'react-native-reanimated';
const ChatScreen = () => {

  const [visible,setvisible]=useState(false)
  const {height,width}= Dimensions.get('screen')

  const [Convo, setconvo]= useState<number[] | null>([])

  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };
  let socket = io('http://192.168.0.104:543')

  useEffect(()=>{
  

    socket.on('mobile',(data)=>{

      setconvo(prevArray => [...prevArray, prevArray.length+1]);
    })

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

Convo.map((index)=>(

 
<MotiView

key={index}
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
<ChatBox   ChatIndicator={<Ionicons name="checkmark-done-outline" size={18} color="green" />} TimeStampColor='white' TimeStamp={new Date().getSeconds().toString()+" ago"} ReactionIcon={<Feather name="thumbs-up" size={18} color="black" />} Aligned={index%2==0?'LEFT':'RIGHT'} SharpCorner={index%2==0?'TopRight':'TopLeft'} MessageColor={index%2==0?'gray':'white'} BackgroundColor= {index%2==0?'#d5ebdd' :'#eda726'}

Message='Contrary to popular belief, Lorem Ipsum is not simply random text. 

classical literature, discovered the undoubtable source. Lorem Ipsum comes 
' 
/>
</MotiView>


))
}


   
   </ScrollView>
   </View>
  )
}

export default ChatScreen