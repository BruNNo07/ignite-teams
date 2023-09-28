import {TextInput, TextInputProps} from 'react-native'

type InputProps = TextInputProps & {

}

export function Input ({ ...rest}:InputProps){
  return(
    <TextInput {...rest} className='text-md text-GRAY-300 min-h-[56px] bg-GRAY-700 rounded p-4'/>
  )
}