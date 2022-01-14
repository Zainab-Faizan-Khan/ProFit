import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './main';
import Feedback from './feedback';
import exerciseAll from './exerciseAll';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const mainName = "Main";
const feedbackName = "Feedback";
const allexerciseName = "allexercise";

const Tab = createBottomTabNavigator();
const Tabs = () =>{
    return (
        <NavigationContainer>
        <Tab.Navigator
          initialRouteName={mainName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;
  
              if (rn === mainName) {
                iconName = focused ? 'Main' : 'Main-outline';
  
              } else if (rn === feedbackName) {
                iconName = focused ? 'Feedback' : 'Feedback-outline';
  
              } else if (rn === allexerciseName) {
                iconName = focused ? 'allexercise' : 'allexercise-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70}
          }}>
  
          <Tab.Screen name={Main} component={Main} />
          <Tab.Screen name={Feedback} component={Feedback} />
          <Tab.Screen name={exerciseAll} component={exerciseAll} />
  
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  export default Tabs;