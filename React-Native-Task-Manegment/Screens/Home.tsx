// import { Text, View } from "react-native";
// import rncStyles from 'rncstyles';
// import Button from "../Components/Buttons";
// import IconBtn from "../Components/IconBtn";

// export default function Home({ navigation, route }: any) {
//   const { user } = route.params || {}; // Access user information from route.params

//   return (
//     <>
//       <View style={[rncStyles.flexRow, rncStyles.justifyContentEnd , rncStyles.p1]}>
//         {user ? (
//           <>
//           <Text style={[rncStyles.textBlack, rncStyles.textBold, rncStyles.fs2, rncStyles.py1]}>
//             {user.fullName} {/* Replace with the actual field containing the username */}
//           </Text>
//           <IconBtn onPress={() => { navigation.navigate("Your Profile" , {user})}} size={35} name="handshake" />
//           </>

//         ) : (
//           <IconBtn onPress={() => { navigation.navigate("Login")}} size={35} name="person" />
//         )}
//       </View>

//       <View>
//         <Text style={[rncStyles.textBlack, rncStyles.textCenter, rncStyles.py3, rncStyles.textBold, rncStyles.fs2]}>
//           Task Management App
//         </Text>
//       </View>
//       <View style={rncStyles.p2}>
//         <Button onPress={() => { navigation.navigate("CreateTask") }} label="Add Task" />
//       </View>
//       <View style={rncStyles.p2}>
//         <Button onPress={() => { navigation.navigate("MyTasks") }} label="My Tasks" />
//       </View>
//     </>
//   );
// }


import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

import rncStyles from 'rncstyles';
import Button from '../Components/Buttons';
import secondScreen from './secondScreen';

const Home = ({navigation } : any ) => {
  return (
    <>
      <Image
        style={[rncStyles.h50, rncStyles.w100]}
        source={{ uri: 'https://mlu1pc3gbyl1.i.optimole.com/BUAxv5M.GwQJ~22534/w:800/h:556/q:mauto/rt:fill/g:ce/https://runwebco.com/wp-content/uploads/2021/08/4.png' }}
      />
      <View style={[rncStyles.border, rncStyles.bgWhite, rncStyles.h75, rncStyles.w100]}>
        <Text style={[rncStyles.fsL, rncStyles.bgWhite, { color: "#CC7DFF" }, rncStyles.textBold, rncStyles.textCenter]}>Taskcy</Text>
        <Text style={[rncStyles.fsL, rncStyles.bgWhite, { color: "#000" }, rncStyles.textBold, rncStyles.textCenter]}>Building better WorkPLace </Text>
        <TouchableOpacity  onPress={() => {navigation.navigate("Work Flow")}}
        style={[rncStyles.btn  , rncStyles.p2, rncStyles.my2, { color: "#000" , backgroundColor: "#CC7DFF"  }, ]}>
          <Text style={[rncStyles.f3 ,rncStyles.textBold, rncStyles.textCenter]}>get Started</Text></TouchableOpacity>
      </View>
      
    </>


  );
};



export default Home;


