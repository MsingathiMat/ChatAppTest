import { AButton, AInput, AvatarAndDetail, CreateQrCode, GenerateRandomDigits, Showroom } from "aphrica";
import { Image, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import 'react-native-reanimated'
import 'react-native-gesture-handler'
import publicIP from 'react-native-public-ip';
import { io } from "socket.io-client";
import { FontAwesome } from '@expo/vector-icons';
import * as Network from 'expo-network';


import ChatScreen from "../Components/ChatScreen";
import { useProvider } from "../Store/AppContext";
function HomeScreen({navigation}) {

    const [IsConnected,SetIsConnected]= useState<boolean>(false)
    const [InPutText,SetInPutText]= useState<string>("")

    const [GroupCode,SetGroupCode]= useState(0)

   const {ChatData,SetChatData,socket,UserName,SetUserName} = useProvider()

   const ChatD = [
    {
      ChatId: 0,
      UserName: "Alice",
      Message: "Hey there!",
      TimeStamp: "12:00",
      Reaction: null,
    },
    {
      ChatId: 1,
      UserName: "Bob",
      Message: "Hi Alice! How are you?",
      TimeStamp: "12:05",
      Reaction: null,
    },
    {
      ChatId: 2,
      UserName: "Alice",
      Message: "I'm doing great, thanks for asking!",
      TimeStamp: "12:10",
      Reaction: null,
    },
    {
      ChatId: 3,
      UserName: "Bob",
      Message: "That's good to hear!",
      TimeStamp: "12:15",
      Reaction: null,
    },
    {
      ChatId: 4,
      UserName: "Bob",
      Message: "What have you been up to lately?",
      TimeStamp: "12:20",
      Reaction: null,
    },
    {
      ChatId: 5,
      UserName: "Alice",
      Message: "Not much, just working on some projects. How about you?",
      TimeStamp: "12:25",
      Reaction: null,
    }
  ];

  
    useEffect(()=>{


      
        socket.emit('greet', {AppType:'web',id:7403})
 
        socket.on('server',(data)=>{
    
            SetIsConnected(true)
          })

          socket.on('mobile',(data)=>{
    
       
          })

          socket.on("disconnect", () => {
            SetIsConnected(false)
          });

          SetUserName("Alice")


          SetChatData(ChatD);
          SetGroupCode(GenerateRandomDigits(4))

    },[])
    return (
  
   <View style={{ flex:1}}>

        <View style={{

            height:110,
            width:'100%',
            elevation:20,
            backgroundColor:'#eff0ed',
            paddingHorizontal:20,
            paddingTop:10,
          
         
         
        }}>
   <SafeAreaView style={{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
   }}>
  <AvatarAndDetail CallBackFunc={()=>{}} AvatarScale={1} RingScale={1.1} AvatarRing={true}  BottomLine='The greatest' LastSeen='12:00' Title={UserName} ImageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7La67pwXxpB3SRfeDWGvS_6ZHWA4pWIpmvPnmHotqQZEgDbFIXBWFybdQ_ADy6twwrTIl'/>

<View style={{

    justifyContent:'center',
    alignItems:'center'
}}>


<Text style={{fontSize:20, fontWeight:'bold', color:'orange'}}>{GroupCode}</Text>
<Text style={{fontSize:11}}>Group Code</Text>
</View>

<TouchableOpacity onPress={()=>{ navigation.navigate('Scanner',{data:"Detail"})}}>
<View style={{backgroundColor:'orange', width:40, height:40, justifyContent:'center', alignItems:'center', borderRadius:10}}>

<Ionicons name="qr-code-outline" size={24} color="white" />

</View>
</TouchableOpacity>
  </SafeAreaView>
        </View>

<View style={{

    flex:1,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    gap:0,
    backgroundColor:'orange',
  
}}>

{

   ! IsConnected? 
   
   <>

 

   <View style={{backgroundColor:'white', padding:10, borderRadius:5}}>
    
    <CreateQrCode size={140}value="matthew" />
    </View>
 
    
    <Text>Ask your friend to scan and join your CORD</Text>
    </>
    :
  
    <ChatScreen ChatData={ChatData}/>
//  <>
 
//   <LottieView
//      source={require('../assets/appAssets/disconnected.json')}
//       style={{width: "80%", height: "80%"}}
//       autoPlay
//       loop
//     />
//  </>
  
}
</View>


<View style={{backgroundColor:'white', height:100, flexDirection:'row', gap:20, alignItems:'center', justifyContent:'center'} }>

<AInput  BackgroundColor="#f2f6fc" Width={260} Height={50} InPutText={InPutText} SetInPutText={SetInPutText} />

<TouchableOpacity style={{

    width:50,
    height:50,
    backgroundColor:'#02d7de',
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center'
}}>

<FontAwesome name="paper-plane" size={20} color="white" style={{right:3}}/>
</TouchableOpacity>

</View>
   </View>
    );
  }

  export default HomeScreen


