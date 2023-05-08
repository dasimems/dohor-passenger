import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { bauhs93, lato } from './fonts';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CameraContainer, Modal, Providers, ScreenContainer } from './components';
import { AddCard, ChatDetails, Chats, CreditDetails, ExtraRateDetails, GettingStarted, Login, Navigation, NewBank, Notifications, OTP, Profile, ProfileDetails, Rating, RefferalDetails, Transactions, TripDetails, Trips, Wallet, Withdraw } from './screens';
import { NavNames } from './data/general';
import RatingDetails from './screens/RatingDetails';


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

                <Stack.Screen name={NavNames.Navigation.name} component={Navigation} />
                <Stack.Screen name={NavNames.GettingStarted.name} component={GettingStarted} />
                <Stack.Screen name={NavNames.Login.name} component={Login} />
                <Stack.Screen name={NavNames.OTP.name} component={OTP} />
                <Stack.Screen name={NavNames.Trips.name} component={Trips} />
                <Stack.Screen name={NavNames.Profile.name} component={Profile} />
                <Stack.Screen name={NavNames.Notification.name} component={Notifications} />
                <Stack.Screen name={NavNames.Chat.name} component={Chats} />
                <Stack.Screen name={NavNames.ChatDetails.name} component={ChatDetails} />
                <Stack.Screen name={NavNames.Wallet.name} component={Wallet} />
                <Stack.Screen name={NavNames.CreditDetails.name} component={CreditDetails} />
                <Stack.Screen name={NavNames.Withdraw.name} component={Withdraw} />
                <Stack.Screen name={NavNames.NewBank.name} component={NewBank} />
                <Stack.Screen name={NavNames.Transactions.name} component={Transactions} />
                <Stack.Screen name={NavNames.Ratings.name} component={Rating} />
                <Stack.Screen name={NavNames.RatingDetails.name} component={RatingDetails} />
                <Stack.Screen name={NavNames.ExtraRatingDetails.name} component={ExtraRateDetails} />
                <Stack.Screen name={NavNames.TripsDetails.name} component={TripDetails} />
                <Stack.Screen name={NavNames.AddCard.name} component={AddCard} />
                <Stack.Screen name={NavNames.Referrer.name} component={RefferalDetails} />
                <Stack.Screen name={NavNames.ProfileSettings.name} component={ProfileDetails} options={{
                  animation: "slide_from_left"
                }} />

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
