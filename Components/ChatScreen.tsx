import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ChatBox, Showroom } from 'aphrica'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const ChatScreen = () => {
  return (

    <View style={{
        flex:1,
        paddingTop:20,
        width:'100%'
    }}>
   <ScrollView style={{backgroundColor:'green',width:'100%',flexDirection:'column' }}>

   <ChatBox Aligned='LEFT' SharpCorner="TopLeft"  MessageColor='white'   BackgroundColor='#626B87' 

Message='Contrary to popular belief, Lorem Ipsum is not simply random text. 

classical literature, discovered the undoubtable source. Lorem Ipsum comes 
' 
/>

<ChatBox ChatIndicator={<Ionicons name="checkmark-done-outline" size={18} color="green" />} TimeStampColor='white' TimeStamp='12:00' ReactionIcon={<Feather name="thumbs-up" size={18} color="black" />} Aligned='RIGHT' SharpCorner="TopRight"  MessageColor='white'   BackgroundColor='gray' 

Message='Contrary to popular belief, Lorem Ipsum is not simply random text. 

classical literature, discovered the undoubtable source. Lorem Ipsum comes 
' 
/>


   </ScrollView>
   </View>
  )
}

export default ChatScreen