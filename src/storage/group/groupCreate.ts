import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupGetAll";
import { AppError } from "@utils/AppError";

export async function GroupCreate (newGroup: string) {
  try{
    const storageGroups = await groupsGetAll()

    const groupAlreadyExists = storageGroups.includes(newGroup)

    if(groupAlreadyExists) {
      throw new AppError('Ja existe um grupo com esse nome.')
    }

    const newGroups = JSON.stringify([...storageGroups, newGroup])
    await AsyncStorage.setItem(GROUP_COLLECTION, newGroups)

  }catch(error){
    throw error
  }
}