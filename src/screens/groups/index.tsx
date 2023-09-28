import { Button } from '@components/button';
import { GroupCard } from '@components/groupCard';
import { Header } from '@components/header';
import { Highlight } from '@components/highlight';
import { ListEmpty } from '@components/listEmpty';
import { useState } from 'react';
import { View, FlatList } from 'react-native';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera do Ignite', 'Amigos','Familia'])

  return (
    <View className='flex-1 bg-GRAY-600 p-6'>
      <Header />

      <Highlight title='Turmas' subtitle='Jogue com a sua turma'/>

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupCard 
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => <ListEmpty message='Nenhuma turma cadastrada'/>}
      />

      <Button variant='primary' text='Criar nova Turma'/>
    </View>
  )
}