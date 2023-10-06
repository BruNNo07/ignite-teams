import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './app.routes'
import { View } from 'react-native'

export function Routes() {
  return(
    <View className='flex-1 bg-GRAY-600'>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>

  )
}