import { View, TextInput, TouchableOpacity, Text, ScrollView, ToastAndroid } from 'react-native'
import rncStyles from 'rncstyles'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { useState } from 'react';


export default function SignUp({ navigation }: any) {

    const [model, setModel] = useState<any>({})

const noAcc = () => {
    navigation.navigate("Login")
}

    const SignupUser = () => {
        auth()
            .createUserWithEmailAndPassword(model.email, model.password)
            .then((res) => {
                console.log('User account created & signed in!');
                let id = res.user.uid
                database().ref(`users/${id}`).set(model).then((res) => {
                    ToastAndroid.show(`Hi ${model.fullName} your Account has been created Successfully`, ToastAndroid.SHORT)
                    navigation.navigate("Login")
                }).catch((err) => {
                    console.log(err);
                })
            })
            .catch(error => {
                console.error(error);
            });
    }

    return <>
        <View
            style={[
                rncStyles.h100,
                rncStyles.bgWhite
            ]}>
            <View
                style={[
                    rncStyles.h100,
                    rncStyles.p2,
                    rncStyles.justifyContentCenter
                ]}>
                <View
                    style={rncStyles.py5}>
                    <Text
                        style={[
                            rncStyles.fs1,
                            rncStyles.textPrimary,
                            rncStyles.textBold,
                            rncStyles.mb1
                        ]}
                    >Sign Up</Text>
                    <Text
                        style={[
                            rncStyles.fs5,
                            rncStyles.textSecondary
                        ]}
                    >Please Enter Your Information and create Acount.</Text>
                </View>
                <ScrollView >
                    <View style={rncStyles.pb1}>
                        <Text style={[rncStyles.textPrimary, rncStyles.p1]}>Full Name</Text>
                        <TextInput
                            value={model.fullName}
                            onChangeText={(e) => setModel({ ...model, fullName: e })}
                            style={[
                                rncStyles.input,
                                rncStyles.bgWhite,
                                rncStyles.rounded,
                                rncStyles.border1,
                                rncStyles.borderPrimary,
                            ]}
                            placeholder="eg. Muhammad Zaid"
                        />
                    </View>
              
                    <View style={rncStyles.pb1}>
                        <Text style={[rncStyles.textPrimary, rncStyles.p1]}>Email</Text>
                        <TextInput
                            value={model.email}
                            onChangeText={(e) => setModel({ ...model, email: e })}
                            keyboardType="email-address"
                            style={[
                                rncStyles.input,
                                rncStyles.bgWhite,
                                rncStyles.rounded,
                                rncStyles.border1,
                                rncStyles.borderPrimary,
                            ]}
                            placeholder="example@abc.com"
                        />
                    </View>
                    <View style={rncStyles.pb1}>
                        <Text style={[rncStyles.textPrimary, rncStyles.p1]}>Password</Text>
                        <TextInput
                            value={model.password}
                            onChangeText={(e) => setModel({ ...model, password: e })}
                            secureTextEntry={true}
                            style={[
                                rncStyles.input,
                                rncStyles.bgWhite,
                                rncStyles.rounded,
                                rncStyles.border1,
                                rncStyles.borderPrimary,
                            ]}
                            placeholder="Enter Password at least 6 characters"
                        />
                    </View>
                    <View
                        style={rncStyles.py2}
                    >
                        <TouchableOpacity
                            onPress={SignupUser}
                            style={[
                                rncStyles.btnPrimary,
                                rncStyles.rounded
                            ]}
                        >
                            <Text
                                style={[
                                    rncStyles.fs5,
                                    rncStyles.textWhite,
                                    rncStyles.textCenter
                                ]}
                            >Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View
                    style={[
                        rncStyles.py2,
                        rncStyles.flexRow,
                        rncStyles.justifyContentCenter
                    ]}
                >
                    <Text
                        style={[
                            rncStyles.textBold,
                            rncStyles.textSecondary,
                            rncStyles.fs5
                        ]}
                    >Have an Account?</Text>
                    <TouchableOpacity onPress={noAcc} >
                        <Text
                            style={[
                                rncStyles.textBold,
                                rncStyles.fs5,
                                rncStyles.ms1,
                                rncStyles.textPrimary
                            ]}
                        >Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
}

