import { View,Image, TouchableOpacity  } from "react-native";
import {CaretLeft} from 'phosphor-react-native'
import logoImg from '@assets/logo.png'
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  showBackButton ?: boolean
}
export function Header ({showBackButton = false}: HeaderProps) {
  const {navigate} = useNavigation()

  function handleGoBack(){
    navigate('groups')
  }

  if(showBackButton) {
    return(
      <View className="flex-row items-center justify-between w-full">
        <TouchableOpacity onPress={handleGoBack}>
          <CaretLeft size={32} color="white" />
        </TouchableOpacity>
        <Image source={logoImg} />
      </View>
    )
  } else {
    return(
      <View className="flex-row items-center justify-center w-full">
        <Image source={logoImg} />
      </View>
    )
  }
    
}