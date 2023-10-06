import { View,Text } from "react-native";
import {MaterialIcons} from '@expo/vector-icons'
import { ButtonIcon } from "./buttonIcon";

type PlayerCardProps = {
  name: string
  onRemove: () => void
}

export function PlayerCard ({name, onRemove}:PlayerCardProps){
  return(
    <View className="rounded-lg h-14 bg-GRAY-500 flex-row items-center justify-center mb-4">
      <View className="mx-2">
        <MaterialIcons 
          name="person" 
          color={'#C4C4CC'} 
          size={24}
        />
      </View>
      <Text className="flex-1 text-GRAY-200 text-md">
        {name}
      </Text>

      <ButtonIcon 
        variant="rem"
        onPress={onRemove}
      />
    </View>
  )
}