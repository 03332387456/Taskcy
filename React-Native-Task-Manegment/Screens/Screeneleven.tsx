import { ScrollView, Text, View } from "react-native";
import rncStyles from 'rncstyles';
import Button from "../Components/Buttons";
import IconBtn from "../Components/IconBtn";

export default function ScreenEleven({ navigation, route }: any) {
  const { user } = route.params || {}; // Access user information from route.params

  return (

    <ScrollView>
  {/* <View style={[rncStyles.flexRow, rncStyles.justifyContentEnd , rncStyles.p1]}>
        {user ? (
          <>
          <Text style={[rncStyles.textBlack, rncStyles.textBold, rncStyles.fs2, rncStyles.py1]}>
            {user.fullName} 
          </Text>
          <IconBtn onPress={() => { navigation.navigate("Your Profile" , {user})}} size={35} name="handshake" />
          </>

        ) : (
          <IconBtn onPress={() => { navigation.navigate("Login")}} size={35} name="person" />
        )}
      </View> */}

      <View>
        <Text style={[ rncStyles.textCenter, rncStyles.py3, rncStyles.textBold, rncStyles.fs1]}>
          Taskcy Tracker App 
        </Text>
      </View>
      <View style={rncStyles.p2}>
        <Button onPress={() => { navigation.navigate("CreateTask") }} label="Add Task" />
      </View>
      <View style={rncStyles.p2}>
        <Button onPress={() => { navigation.navigate("MyTasks") }} label="My Tasks" />
      </View>
      <View style={rncStyles.p2}>
        <Button onPress={() => { navigation.navigate("Add Project") }} label="Add Projects" />
      </View>
      <View style={rncStyles.p2}>
        <Button onPress={() => { navigation.navigate("My Project") }} label="My Projects" />
      </View>
      <View style={rncStyles.p2}>
        <Button onPress={() => { navigation.navigate("Create Team") }} label="Create Team" />
      </View> 
      <View style={rncStyles.p2}>
        <Button onPress={() => { navigation.navigate("Login") }} label="Login Your Account" />
      </View>
    </ScrollView>
  
    
   
  );
}
