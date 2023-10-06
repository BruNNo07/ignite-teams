import { Button } from "@components/button";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Input } from "@components/input";
import { useNavigation } from "@react-navigation/native";
import { GroupCreate } from "@storage/group/groupCreate";
import { groupsGetAll } from "@storage/group/groupGetAll";
import { AppError } from "@utils/AppError";
import { UsersThree } from "phosphor-react-native";
import { useState } from "react";
import { Alert, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function NewGroup() {
  const [group, setGroup] = useState('')

  const {navigate} = useNavigation()

  async function handleNewGroup(){
    try {
      if(group.trim().length === 0 ) return Alert.alert('Novo grupo', 'Digite o nome do grupo.')
      await GroupCreate(group)
      navigate('players',{ group })
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Novo grupo', error.message)
      }else{
        Alert.alert('Novo grupo', 'Não foi possivel criar o grupo.' )
        console.log(error)
      }
    }
  }

  return(
    <SafeAreaView className="flex-1 bg-GRAY-600 p-6">
      <Header showBackButton />

      <View className="flex-1 justify-center items-center">
        <UsersThree size={56} color="#00875F"/>
        <Highlight 
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input 
          placeholder="Nome da turma" 
          onChangeText={setGroup}
          placeholderTextColor={'#7C7C8A'}
          className="w-full"
        />

        <Button text="Criar" style={{marginTop: 20}} onPress={handleNewGroup}/>
      </View>
    </SafeAreaView>
  )
}