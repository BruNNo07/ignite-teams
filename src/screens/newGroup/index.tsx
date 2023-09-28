import { Button } from "@components/button";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Input } from "@components/input";
import { UsersThree } from "phosphor-react-native";
import { View } from "react-native";


export function NewGroup() {
  return(
    <View className="flex-1 bg-GRAY-600 p-6">
      <Header showBackButton />

      <View className="flex-1 justify-center items-center">
        <UsersThree size={56} color="#00875F"/>
        <Highlight 
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" placeholderTextColor={'#7C7C8A'}/>

        <Button text="Criar" style={{marginTop: 20}}/>
      </View>
    </View>
  )
}