import { Button } from "@components/button";
import { ButtonIcon } from "@components/buttonIcon";
import { Filter } from "@components/filter";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Input } from "@components/input";
import { ListEmpty } from "@components/listEmpty";
import { PlayerCard } from "@components/playerCard";
import { useState } from "react";
import { View, FlatList,Text } from "react-native";

export function Players () {
  const [team, setTeam] = useState('Time A')
  const [players,setPlayers] = useState([])

  return (
    <View className="flex-1 bg-GRAY-600 p-6">
      <Header showBackButton/>

      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <View className=" bg-GRAY-700 flex-row justify-between rounded">
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          placeholderTextColor={'#7C7C8A'}
        />
        <ButtonIcon />
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

      <FlatList 
        data={players}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <PlayerCard name={item} />
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

      <Button text="Remover Turma" variant="danger" />
      
    </View>
  )

}