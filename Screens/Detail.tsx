import { Route, useRoute } from "@react-navigation/native";
import { View,Text } from "react-native";


function Detail() {
    const Route = useRoute()


  return (

<View>


  <Text>{
  /** @ts-ignore */
  Route.params.ScannedDigits
  
  }</Text>
</View>
  );
}

export default Detail