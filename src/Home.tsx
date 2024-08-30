import axios from "axios";
import { Button, SafeAreaView,TouchableOpacity, StyleSheet, Text, View } from "react-native";







const Home:React.FC=()=>{
      return (
            <SafeAreaView>
           <TouchableOpacity style={styles.cardButton}>
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>
      
            </SafeAreaView>
      );
}

const styles = StyleSheet.create({
      container: {
        flex: 1, // Takes up the full height of the screen
        justifyContent: 'center', // Centers the content vertically
        alignItems: 'center', // Centers the content horizontally
      },
      cardButton: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5, // Required for Android shadow
      },
      buttonText: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    });
    



export default Home;