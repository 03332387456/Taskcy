import React from 'react'
import { View, ToastAndroid, TextInput, Text, TouchableOpacity } from 'react-native'
import { AddDataOrPostData } from '../FirebaseMethod.tsx/Firebase'
import { useState } from 'react'
import rncStyles from 'rncstyles'

function Members({navigation } : any ){

    const [Member, setMember] = useState<any>({})


    let AddMembers = () => {
        AddDataOrPostData("Members And Team", Member).then((res) :any => {
            ToastAndroid.show("team and Members Added Successfully", ToastAndroid.SHORT)
            // console.log(res);
            // console.log(Member);
        }).catch((err) => {
            console.warn(err);

        })
    }

    return (

        <>

            <View>
                <Text style ={[rncStyles.py2 , rncStyles.fs2 , rncStyles.textBold  , rncStyles.textSecondary, rncStyles.textCenter]}>
                 Add Team members in your team 
                </Text>
            </View>
            <View style={[rncStyles.h100, rncStyles.p2, rncStyles.bgLight]}>
                <TextInput
                multiline={true}
                numberOfLines={4}
                    value={Member.teamMember}
                    onChangeText={(e) => setMember({ ...Member, teamMember: e })}
                    style={[rncStyles.input, rncStyles.border1 ,  rncStyles.textStart ,rncStyles.p2]}
                    placeholder="Enter Team Member Name"
                    placeholderTextColor={rncStyles.textSecondary.color}
                />
                  <TextInput
                    value={Member.TeamName}
                    onChangeText={(e) => setMember({ ...Member, TeamName: e })}
                    style={[rncStyles.input, rncStyles.border1 , rncStyles.mt2 ,rncStyles.p2]}
                    placeholder="Enter Team Name"
                    placeholderTextColor={rncStyles.textSecondary.color}
                />
                <TouchableOpacity  onPress={AddMembers}
        style={[rncStyles.btn  , rncStyles.p2, rncStyles.my2, { color: "#FFFFFF" , backgroundColor: "#6600FF"  }, ]}>
          <Text style={[rncStyles.f3 ,rncStyles.textBold, rncStyles.textCenter]}>Done</Text></TouchableOpacity>
            </View>
            
            
            
        </>
    )
}

export default Members
