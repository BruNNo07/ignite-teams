import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { playersGetByGroup } from "./playersGetByGroup";
export async function PlayerAddByGroup (newPlayer: PlayerStorageDTO, group:string){
  try {
    const storagePlayers = await playersGetByGroup(group)

    const playersAlreadyExists = storagePlayers.filter(player => player.name === newPlayer.name)

    if(playersAlreadyExists.length > 0){
      throw new AppError('Essa pessoa já está no time')
    }

    const storage = JSON.stringify([...storagePlayers, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  } catch (error) {
    throw error
  }
}