import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Groups } from '@screens/groups'
import { NewGroup } from '@screens/newGroup'
import { Players } from '@screens/players'

const { Screen,Navigator }= createNativeStackNavigator()

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen 
        name='groups'
        component={Groups}
      />

      <Screen 
        name='players'
        component={Players}
      />

      <Screen 
        name='new'
        component={NewGroup}
      />

    </Navigator>
  )
}