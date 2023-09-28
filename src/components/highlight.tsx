import { View, Text } from "react-native";

interface HighlightProps {
  title: string
  subtitle: string
}

export function Highlight({subtitle, title}:HighlightProps){
  return(
    <View className="w-full py-8">
      <Text className="text-center font-bold text-xl text-white">
        {title}
      </Text>
      <Text className="text-center text-md text-GRAY-300">
        {subtitle}
      </Text>
    </View>
  )
}