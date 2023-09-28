import { Text, View } from "react-native";

type ListEmptyProps = {
  message: string
}

export function ListEmpty ({message}:ListEmptyProps) {
  return(
  <View className="flex-1 justify-center items-center">
    <Text className="text-center text-sm text-GRAY-300">
      {message}
    </Text>
  </View>
  )
}