import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View, TextInput } from 'react-native'
import { GetData } from '../FirebaseMethod.tsx/Firebase'
import rncStyles from 'rncstyles'
import IconBtn from '../Components/IconBtn'

function MyProjects({ navigation, route }: any) {

  const [Tasklist, setTaskList] = useState<any>([])
  const [filter, Setfilter] = useState<any>([])

  let get = () => {
    GetData("Project").then((res: any) => {
      setTaskList([...res])
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      get()
    });

    return unsubscribe;
  }, [])

  return (
    <View style={[rncStyles.h100, rncStyles.p2]}>


      <View>
        <TextInput
          onChangeText={(e: any) => {
            if (e.trim() === '') {
              // If the search text is empty, reset the filter
              Setfilter([]);
            } else {
              // If the search text is not empty, perform the filtering logic
              let arr = Tasklist.filter((x: any) => {
                return (
                  x.title.toLowerCase().includes(e.toLowerCase()) ||
                  x.taskVal.toLowerCase().includes(e.toLowerCase())
                );
              });
              Setfilter(arr);
            }
          }}
          placeholder="Search Task"
          placeholderTextColor="black"
          style={[rncStyles.input, rncStyles.border1, rncStyles.my3]}
        /></View>



      <ScrollView>
        {filter.length > 0 ? filter.map((x: any) =>
          <View style={[rncStyles.bgWhite, rncStyles.m1, rncStyles.p2, rncStyles.rounded, rncStyles.shadow3]}>
            <View>
              <Text style={[rncStyles.fs4, rncStyles.textBold, rncStyles.textBlack]}>{x.title}</Text>
              <Text style={[rncStyles.fs5, rncStyles.textSecondary]}>{x.taskVal}</Text>
            </View>
          </View>) : Tasklist.map((x: any) =>
            <View style={[rncStyles.bgWhite, rncStyles.m1, rncStyles.p2, rncStyles.rounded, rncStyles.shadow3]}>
              <View>
                <Text numberOfLines={1} style={[rncStyles.fs4, rncStyles.textBold, rncStyles.textBlack]}>{x.title}</Text>
                <Text numberOfLines={1} style={[rncStyles.fs5, rncStyles.textSecondary]}>{x.taskVal}</Text>
                <View style={[rncStyles.pt1, rncStyles.flexRow]}>
                  <IconBtn onPress={() => { navigation.navigate("Single Project", x) }} name='info' />
                  {x.isDone && <IconBtn name='done' style={rncStyles.m2} />}
                  {!x.isDone && <IconBtn name='timer' style={rncStyles.m2} />}
                </View>
              </View>
            </View>)}
      </ScrollView>
    </View>
  )
}

export default MyProjects






