import { Alert } from "react-native"
export const alert=({text})=>{
    return Alert.alert(text)
}
export const log =(text)=>{
    return console.log(text)
}