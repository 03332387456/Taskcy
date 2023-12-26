import React from 'react'
import { Image, ScrollView, Text, View, TouchableOpacity, ToastAndroid } from 'react-native'
import { useState } from 'react'
import rncStyles from 'rncstyles'
import Button from '../Components/Buttons'
import { GetData } from '../FirebaseMethod.tsx/Firebase'


function CreateTeam({navigation , route} : any) {

  const [model, setModel] = useState<any>([])

  let CreateTeam = () => {
    GetData("Members And Team").then((res: any) => {
      setModel([...res])
      ToastAndroid.show("Your Team has been created", ToastAndroid.SHORT)
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })
  }




  return (
    <>
      <ScrollView>

        <View
          style={rncStyles.flexCenter}>
          <Image
            resizeMode='contain'
            style={[
              rncStyles.roundedPill,
              { width: 140, height: 140 }
            ]}
            source={{
              uri: 'https://w7.pngwing.com/pngs/243/461/png-transparent-computer-icons-learning-quizlet-school-team-members-business-area-technical-support-thumbnail.png'
            }}
          />
        </View>
        <Text style={[rncStyles.textCenter, rncStyles.py3, rncStyles.fs3, { color: "#CC7DFF" }, rncStyles.textBold,]} >
          Create Your Team
        </Text>
        <View style={rncStyles.pb1}>
         

          

        </View>

        <View style={[rncStyles.my1]}>
          <TouchableOpacity>
            <View style={[rncStyles.p1]}>
              <Button label="Add Members"onPress={() => {
                 navigation.navigate("Team Members")
              }} />
            </View>
          </TouchableOpacity>
          <Text style={[rncStyles.fs3 , rncStyles.p2]}>Your Team</Text>
        
        </View>

        {model.map((x: any) => {
          return (
            <View key={x.TeamName} style={[rncStyles.bgWhite, rncStyles.m1, rncStyles.p2, rncStyles.rounded, rncStyles.shadow3]}>
              <View>
                <Text numberOfLines={1} style={[rncStyles.fs4, rncStyles.textBold, rncStyles.textBlack]}>{x.TeamName}</Text>
                <Text numberOfLines={1} style={[rncStyles.fs5, rncStyles.textSecondary]}>{x.teamMember}</Text>
                {/* <IconBtn name='delete' onPress={dleteTeam} style={rncStyles.m2} /> */}
              </View>
            </View>
          )
        })}

        <TouchableOpacity onPress={CreateTeam}
          style={[rncStyles.btn, rncStyles.p2, rncStyles.my2, { color: "#000", backgroundColor: "#CC7DFF" },]}>
          <Text style={[rncStyles.f3, rncStyles.textBold, rncStyles.textCenter]}>Create Team</Text></TouchableOpacity>

      </ScrollView>
    </>
  )
}

export default CreateTeam
