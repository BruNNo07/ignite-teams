import { Button } from "@components/button";
import { ButtonIcon } from "@components/buttonIcon";
import { Filter } from "@components/filter";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Input } from "@components/input";
import { ListEmpty } from "@components/listEmpty";
import { LoadingScreen } from "@components/loadingScreen";
import { PlayerCard } from "@components/playerCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import { PlayerAddByGroup } from "@storage/players/playerAddByGroup";
import { playerGetByGroupAndTeam } from "@storage/players/playerGetByGroupAndTeam";
import { playerRemoveByGroup } from "@storage/players/playerRemoveByGroup";
import { playersGetByGroup } from "@storage/players/playersGetByGroup";
import { AppError } from "@utils/AppError";
import { useEffect, useState } from "react";
import { View, FlatList,Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type RouteParams = {
  group: string 
}

export function Players () {
  const [isLoading, setIsLoading] = useState(true)
  const [team, setTeam] = useState('Time A')
  const [players,setPlayers] = useState<PlayerStorageDTO[]>([])
  const [newPlayerName,setNewPlayerName] = useState('')

  const { params } = useRoute()
  const { group } = params as RouteParams
  const {navigate} = useNavigation()

  async function handleAddPlayer(){
    if(newPlayerName.trim().length === 0) {
      return Alert.alert('Novo Player', 'Digite o nome do novo player')
    }

    const newPlayer: PlayerStorageDTO = {
      name: newPlayerName,
      team
    }

    try {
      await PlayerAddByGroup(newPlayer, group)
      FetchPlayersByTeam()
      setNewPlayerName('')
    } catch (error) {
      if (error instanceof AppError){
        Alert.alert('Novo Player', error.message)
      } else{
        Alert.alert('Novo Player', 'Não foi possivel adicionar')
      }
    }
  } 

  async function FetchPlayersByTeam(){
    try {
      setIsLoading(true)

      const playersByTeam = await playerGetByGroupAndTeam(group, team)

      setPlayers(playersByTeam)
    } catch (error) {
      console.log(error)
      Alert.alert('Players', 'Não foi possivel carregar os players.')
    } finally {
      setIsLoading(false)
    }
  }

  async function handleRemovePlayer (playerName: string){
    try {
      await playerRemoveByGroup(playerName, group)
    } catch (error) {
      console.log(error)
      Alert.alert('Remover Player', 'Não foi possivel remover a pessoa selecionada.')
    }
  }

  async function removeGroup() {
    try {
      await groupRemoveByName(group)
      navigate('groups')
    } catch (error) {
      Alert.alert('Remover Grupo', 'não foi possivel remover o grupo.')
    }
  }

  async function handleRemoveGroup() {
    Alert.alert('Remover', 'Deseja remover o grupo?', [
      {
        text:'Não',
        style: 'cancel'
      },
      {
        text:'Sim',
        onPress: () => removeGroup()
      }
    ])
  }

  useEffect(()=>{
    FetchPlayersByTeam()
  },[team])

  return (
    <SafeAreaView className="flex-1 bg-GRAY-600 p-6">
      <Header showBackButton/>

      <Highlight
        title={group}
        subtitle="Adicione a galera e separe os times"
      />

      <View className=" bg-GRAY-700 flex-row justify-between rounded">
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          placeholderTextColor={'#7C7C8A'}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon onPress={handleAddPlayer}/>
      </View>

      <View className="flex-row items-center mt-8 mb-3">
        <FlatList 
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({item }) => (
            <Filter title={item} isActive={item === team && true} onPress={() => setTeam(item)}/>
          )}
          horizontal

        />
        <Text className="text-GRAY-200 font-bold text-sm">
          {players.length === 1 ? `${players.length } Player` : `${players.length} Players`}
        </Text>
      </View>
      
      {
        isLoading ? <LoadingScreen /> : (
          <FlatList 
            data={players}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <PlayerCard name={item.name} onRemove={() => handleRemovePlayer(item.name)}/>
            )}
            ListEmptyComponent={() => (
              <ListEmpty 
                message="Não há pessoas nesse time"
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              {paddingBottom: 100},
              players.length === 0 && { flex: 1 }
            ]}
          />
        )
      }
      

      <Button text="Remover Turma" variant="danger" onPress={handleRemoveGroup} />
      
    </SafeAreaView>
  )

}