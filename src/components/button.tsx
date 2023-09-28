import {TouchableOpacity,Text, TouchableOpacityProps} from 'react-native'

type ButtonProps = TouchableOpacityProps & {
  variant?: 'primary' | 'danger'
  text: string
}

export function Button ({variant = 'primary', text, ...rest}:ButtonProps){
  if( variant == 'primary'){
    return (
      <TouchableOpacity className='flex-1 w-full min-h-[56px] rounded items-center justify-center mb-4 max-h-[56px] bg-GREEN-700' {...rest}>
        <Text className='text-md text-white font-bold'>
          {text}
        </Text>
      </TouchableOpacity>
    )
  }else {
    return (
      <TouchableOpacity className='flex-1 w-full min-h-[56px] rounded items-center justify-center mb-4 max-h-[56px] bg-RED-DARK' {...rest}>
        <Text className='text-md text-white font-bold'>
          {text}
        </Text>
      </TouchableOpacity>
    )
  }

}