import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../Screens/Signup';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Products from '../Screens/Product';
import SingleProduct from '../Screens/SingleProduct';
import Task from '../Screens/Task';
import CreateTask from '../Screens/CreateTask';
import MyTasks from '../Screens/Task';
import SingleTask from '../Screens/SingleTask';
import Profile from '../Screens/Profile';
import BackendSignup from '../Screens/BackendSignup';
import BackendLogin from '../Screens/BackendLogin';
import ApiRoutes from '../Screens/ApiRoutes';
import secondScreen from '../Screens/secondScreen';
import ThirdScreen from '../Screens/ThirdScreen';
import ForthScreen from '../Screens/ForthScreen';
import ScreenEleven from '../Screens/Screeneleven';
import Project from '../Screens/Project';
import CreateTeam from '../Screens/CreateTeam';
import MyProjects from '../Screens/MyProjects';
import Singleproject from '../Screens/SingleProject';
import Members from '../Screens/Members';
// import UploadScreen from '../Screens/UploadScreen';


const Stack = createNativeStackNavigator();

function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Taskcy" component={Home} />
        <Stack.Screen name="CreateTeam" component={CreateTeam} />
        <Stack.Screen name="Team Members" component={Members} />
      <Stack.Screen name="Screen Eleven" component={ScreenEleven} />
      <Stack.Screen name="Single Project" component={Singleproject} />
      <Stack.Screen name="Add Project" component={Project} />
      <Stack.Screen name="My Project" component={MyProjects} />
      <Stack.Screen name="Create Team" component={CreateTeam} />
        <Stack.Screen name="Work Flow" component={secondScreen} />
        <Stack.Screen name="Task Quickly" component={ForthScreen} />
        {/* <Stack.Screen name="Backend Login" component={BackendLogin} /> */}
        <Stack.Screen name="Work More" component={ThirdScreen} />
        {/* <Stack.Screen name="Backend Signup" component={BackendSignup} /> */}
        <Stack.Screen name="CreateTask" component={CreateTask} />
        <Stack.Screen name="MyTasks" component={MyTasks} />
        <Stack.Screen name="ApiRoutes" component={ApiRoutes} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Single Task" component={SingleTask} />
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Your Profile" component={Profile} /> */}
        {/* <Stack.Screen name="Products" component={Products} /> */}
        {/* <Stack.Screen name="SingleProduct" component={SingleProduct} /> */}
        {/* <Stack.Screen name="SingleProduct" component={Profile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;