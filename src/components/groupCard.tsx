import { UsersThree } from "phosphor-react-native";
import {TouchableOpacity, View,Text, TouchableOpacityProps } from "react-native";

type GroupCardProps = TouchableOpacityProps & {
  title: string
}

export function GroupCard ({title, ...rest}: GroupCardProps) {
  return (
    <TouchableOpacity className="h-24 bg-GRAY-500 rounded flex-row items-center p-6 mb-4" {...rest}>
      <View className="mr-5">
        <UsersThree size={32} color="#00875F" weight="fill"/>
      </View>
      <Text className="text-md text-GRAY-200">{title}</Text>
    </TouchableOpacity>
  )
}