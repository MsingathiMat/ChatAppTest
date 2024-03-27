import { AButton, AvatarAndDetail, CreateQrCode, GenerateRandomDigits, Showroom } from "aphrica";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import LottieView from "lottie-react-native";

import { io } from "socket.io-client";

import QRCode from "react-native-qrcode-svg";
import ChatScreen from "../Components/ChatScreen";
function HomeScreen({navigation}) {

    const [IsConnected,SetIsConnected]= useState<boolean>(false)

   
    let socket = io('http://192.168.110.22:543')

const QrGenerator = (QrData:string)=>{



}

    useEffect(()=>{

        socket.emit('greet', {AppType:'web',id:7403})
 
        socket.on('server',(data)=>{
    
            SetIsConnected(true)
          })

         

          socket.on("disconnect", () => {
            SetIsConnected(false)
          });

    //    GenerateQrCode({Text:"https://www.npmjs.com/package/qrcode",Callback:QrGenerator})


    },[])
    return (
  
   <View style={{ flex:1}}>

        <View style={{

            height:110,
            width:'100%',
            elevation:10,
            backgroundColor:'white',
            paddingHorizontal:20,
            paddingTop:10
         
         
        }}>
   <SafeAreaView style={{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
   }}>
  <AvatarAndDetail CallBackFunc={()=>{}} AvatarScale={1} RingScale={1.1} AvatarRing={true}  BottomLine='The greatest' LastSeen='12:00' Title="Matthew" ImageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7La67pwXxpB3SRfeDWGvS_6ZHWA4pWIpmvPnmHotqQZEgDbFIXBWFybdQ_ADy6twwrTIl'/>

<View style={{

    justifyContent:'center',
    alignItems:'center'
}}>


<Text style={{fontSize:20, fontWeight:'bold', color:'orange'}}>{GenerateRandomDigits(4)}</Text>
<Text style={{fontSize:11}}>Group Code</Text>
</View>

<View style={{backgroundColor:'orange', width:40, height:40, justifyContent:'center', alignItems:'center', borderRadius:10}}>

<Ionicons name="qr-code-outline" size={24} color="white" />
</View>
  </SafeAreaView>
        </View>

<View style={{

    flex:1,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    gap:30
}}>

{

    IsConnected?  <>

    <View style={{backgroundColor:'white', padding:10, borderRadius:5}}>
    
    <CreateQrCode size={140}value="matthew" />
    </View>
    
    <Text>Ask your friend to scan and join your CORD</Text>
    </>
    :
  
    <ChatScreen/>
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


<View style={{backgroundColor:'white', height:100}}>

<Text>Footer</Text>
</View>
   </View>
    );
  }

  export default HomeScreen


