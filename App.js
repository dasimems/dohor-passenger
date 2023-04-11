import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { bauhs93, lato } from './fonts';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CameraContainer, Modal, Providers, ScreenContainer } from './components';
import { ChatDetails, Chats, GettingStarted, Login, Navigation, OTP, Profile, Trips } from './screens';
import { NavNames } from './data/general';


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    [lato.regular.default]: require("./fonts/Lato-Regular.ttf"),
    [lato.regular.italic]: require("./fonts/Lato-Italic.ttf"),
    [lato.black.default]: require("./fonts/Lato-Black.ttf"),
    [lato.black.italic]: require("./fonts/Lato-BlackItalic.ttf"),
    [lato.bold.default]: require("./fonts/Lato-Bold.ttf"),
    [lato.bold.italic]: require("./fonts/Lato-BoldItalic.ttf"),
    [bauhs93]: require("./fonts/BAUHS93.ttf"),
  });

  return (
    <>

      {fontsLoaded && <Providers>

        <Modal />

        <ScreenContainer>

          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Group screenOptions={{
                  animation:"slide_from_right",
                  headerShown: false

                }}>

                <Stack.Screen name={NavNames.GettingStarted.name} component={GettingStarted} />
                <Stack.Screen name={NavNames.Navigation.name} component={Navigation} />
                <Stack.Screen name={NavNames.Login.name} component={Login} />
                <Stack.Screen name={NavNames.OTP.name} component={OTP} />
                <Stack.Screen name={NavNames.Trips.name} component={Trips} />
                <Stack.Screen name={NavNames.Profile.name} component={Profile} />
                <Stack.Screen name={NavNames.Chat.name} component={Chats} />
                <Stack.Screen name={NavNames.ChatDetails.name} component={ChatDetails} />

              </Stack.Group>
            </Stack.Navigator>
          </NavigationContainer>

        </ScreenContainer>

        

          <CameraContainer />

        
        
        </Providers>}
    
    </>
  );
}

const styles = StyleSheet.create({});
