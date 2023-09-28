import { TouchableOpacity,Text,TouchableOpacityProps } from "react-native"

type FilterProps = TouchableOpacityProps & {
  isActive?: boolean
  title: string
}

export function Filter({isActive = false, title, ...rest}:FilterProps) {
  return(
    <>
    {isActive ? (
      <TouchableOpacity {...rest}  className="border border-GREEN-700 rounded mr-3 h-9 w-16 items-center justify-center">
        <Text className="font-bold text-sm text-WHITE">
          {title}
        </Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity {...rest}  className="rounded mr-3 h-9 w-16 items-center justify-center">
        <Text className="font-bold text-sm text-WHITE">
          {title}
        </Text>
      </TouchableOpacity>
    )
  }
  </>
  )
  
  

}