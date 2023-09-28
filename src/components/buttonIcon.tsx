import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'


type ButtonIconProps = TouchableOpacityProps & {
  variant?: 'add' | 'rem'
  // icon: keyof typeof MaterialIcons.glyphMap
}

export function ButtonIcon({variant = 'add', ...rest}:ButtonIconProps){
  return(
    <TouchableOpacity className="w-14 h-14 justify-center items-center" {...rest}>
      {variant === 'add' 
      ? <MaterialIcons name="add" color={'#00875F'} size={24}/> 
      : <MaterialIcons name="remove" color={'#F75A68'} size={24}/>}
    </TouchableOpacity>
  )
}