import { useRoute } from "@react-navigation/native";
import { BarcodeScanner, Showroom } from "aphrica";


function Scanner() {
  const Route = useRoute()

    return (
  
      // @ts-ignore  
  <BarcodeScanner Screen={Route.params.data} />
    );
  }

  export default Scanner