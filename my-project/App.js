import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import HomepageHeader from './develop/homepage/HomepageHeader';
import HomepageContainer from './develop/homepage/HomepageContainer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ResourcesContainer from './develop/resources/ResourcesContainer';
import ChatContainer from './develop/chatbot/ChatContainer';
import Emojis from './develop/homepage/Emojis';
import ContactsModal from './develop/resources/modals/ContactsModal';
import AppIntroSlider from 'react-native-app-intro-slider';
import {COLORS, SIZES} from './src/constants/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Montserrat_600SemiBold, Montserrat_300Light } from '@expo-google-fonts/montserrat';
import {  Karla_400Regular, Karla_400Regular_Italic } from '@expo-google-fonts/karla';
import MoodCalendarScreen from './develop/moodcalendar/MoodCalendarScreen.js';
import { MoodProvider } from './develop//moodcalendar/MoodContext';


// const Stack = createStackNavigator();
const homeName = 'Home';
const resourcesName = 'ResourcesContainer';
const chatName = 'ChatContainer';
const calendarName = 'Mood Calendar';

const Tab = createBottomTabNavigator();

const Slides = [
  {
    id: 1,
    title: 'Mental health at work',
    description: "Approximately 1 in 6.8 people experience mental health problems in the workplace (14.7%) ",
    image: require('./src/assets/images/onboarding1.png')

  },
  {
    id: 2,
    title: 'MindMentor is an AI solution for the workplace',
    description: "Even on the best days, stress can prevent us from being fully focused and doing our best work. Too much of it can lead to burnout, disengagement, more sick days, and strained relationships in the workplace.",
    image: require('./src/assets/images/onboarding2.png')

  },
  {
    id: 3,
    title: 'Mental health more important than ever',
    description: "Nowadays, it's never been more critical for business and Human Resources leaders to address the mental well-being of their teams head-on. Enterprise-ready, MindMentor offers an AI solution to healthier organisations from the inside out.",
    image: require('./src/assets/images/onboarding3.png')

  }

]

export default function App() {

  const [showHomePage, setShowHomePage] = useState (false)

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_300Light,
    Karla_400Regular,
    Karla_400Regular_Italic,
    
  });
  if (!fontsLoaded) {
    return null;
  }

  const buttonLabel = (label) => {
    return(
      <View style={{
        padding: 12
      }} >
        <Text style={{
          color: COLORS.title,
          fontWeight: '600',
          fontSize: SIZES.h4,
          fontFamily: 'Montserrat_600SemiBold',
          

        }}>
          {label}
        </Text>
      </View>
    )
  }
  
  if(!showHomePage) {
    return (
      <AppIntroSlider
      data={Slides}
      renderItem={({item})=>{
        return(
          <View style={{
            flex: 1,
            alignItems: 'center',
            padding: 15,
            paddingTop:100,
          }}>
            <Image
            source={item.image}
            style={{
              width: SIZES.width - 80,
              height: 400,
            }}
            resizeMode="contain"
            />
            <Text style={{
             
              color: COLORS.title,
              fontSize: SIZES.h1,
              textAlign: 'center',
              fontFamily: 'Montserrat_600SemiBold',
            }}>
              {item.title}
            </Text>
            <Text style={{
              textAlign: 'center',
              paddingTop: 5,
              color: COLORS.title,
              fontFamily: 'Karla_400Regular'
            }}>
              {item.description}
            </Text>
          </View>
        )
      }}
      activeDotStyle={{
        backgroundColor: COLORS.primary,
        width: 30,
      }}
      showSkipButton
      renderNextButton={()=>buttonLabel("Next")}
      renderSkipButton={()=> buttonLabel("Skip")}
      renderDoneButton={()=> buttonLabel("Done")}
      onDone={()=>{
        setShowHomePage(true);
      }}
      />
    )
  }

  return (
    <MoodProvider>
    <NavigationContainer>
        <Tab.Navigator 
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarLabelStyle: {paddingBottom: 15, fontSize:10},
                tabBarStyle: {padding: 10, height: 70},
                tabBarActiveTintColor: COLORS.primary,
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let routeName = route.name;

                    if (routeName === homeName) {
                        iconName = focused ? 'home-sharp' : 'home-outline';
                    } else if (routeName === resourcesName) {
                        iconName = focused ? 'book' : 'book-outline';
                    } else if (routeName === chatName) {
                        iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                    } else if (routeName === calendarName) {
                        iconName = focused ? 'calendar-sharp' : 'calendar-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                }
            })}
        >
            <Tab.Screen name={homeName} component={HomepageContainer}/>
            <Tab.Screen name={chatName} component={ChatContainer}/>
            <Tab.Screen name={resourcesName} component={ResourcesContainer}/>
            <Tab.Screen name={calendarName} component={MoodCalendarScreen}/> 
        </Tab.Navigator>
    </NavigationContainer>
    </MoodProvider>
);


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
