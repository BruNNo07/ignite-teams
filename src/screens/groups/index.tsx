import { Button } from '@components/button';
import { GroupCard } from '@components/groupCard';
import { Header } from '@components/header';
import { Highlight } from '@components/highlight';
import { ListEmpty } from '@components/listEmpty';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { GroupCreate } from '@storage/group/groupCreate';
import { groupsGetAll } from '@storage/group/groupGetAll';
import { useState, useEffect,useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoadingScreen } from '@components/loadingScreen';


export function Groups() {
  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<string[]>([])

  const {navigate} = useNavigation()
  
  function handleNewGroup(){
    navigate('new')
  }

  function handleOpenGroup (group: string){
    navigate('players', {group})
  }

  async function fetchGroups(){
    try {
      setIsLoading(true)
      const data = await groupsGetAll()
      setGroups(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  },[]))

  return (
    <SafeAreaView className='flex-1 bg-GRAY-600 p-6'>
      <Header />

      <Highlight title='Turmas' subtitle='Jogue com a sua turma'/>

      {
        isLoading ? <LoadingScreen /> : (
          <FlatList 
            data={groups}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <GroupCard 
                title={item}
                onPress={() => handleOpenGroup(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={groups.length === 0 && {flex: 1}}
            ListEmptyComponent={() => <ListEmpty message='Nenhuma turma cadastrada'/>}
            className='mb-2'
          />

        )
      }
      
      <Button variant='primary' text='Criar nova Turma' onPress={handleNewGroup}/>
    </SafeAreaView>
  )
}

function useCallBack(arg0: () => void, arg1: never[]): () => void | (() => void) | undefined {
  throw new Error('Function not implemented.');
}
