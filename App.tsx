
import { Groups } from '@screens/groups';
import  {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { LoadingScreen } from '@components/loadingScreen';
import { StatusBar } from 'react-native';
import { NewGroup } from '@screens/newGroup';
import { Players } from '@screens/players';
import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  
  return (
    <>
      {
        fontsLoaded ? <Routes /> : <LoadingScreen /> 
      }
      <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'} />
    </>
  )
}
