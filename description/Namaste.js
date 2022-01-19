import React from "react";
// import { View,Modal } from "react-native";
import Card from "../components/Card";
import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, View, Modal, Text, ScrollView } from 'react-native';
import { Block, theme, Button } from 'galio-framework';
import { Header } from "../components";

class Namaste extends React.Component {
  render() {

    return (
      <>  
      <View>    
        <Modal isVisible>
          <View style={{ flex: 1 }}>
            <ScrollView>
            <Header />
              <View style={styles.container}>
                <Image
                  style={{ height: 400, width: 400, marginTop: 73 }}
                  source={require('../assets/imgs/yoga02.jpg')}
                />
                <Text bold size={16} size={19} style={styles.title}> Namaste pose </Text>
                <Block flex center>
                  <Text small center color="info" style={{ marginTop: 50 ,marginLeft:20, marginRight:20 }} >
                  Begin standing at the centre of the mat, with feet a few inches apart for better
                   support and balance, and join the palms in Namaste placing them at the centre of 
                   the chest in Mountain Pose Namaste. Begin slow breathing and 
                  with awareness go on up to 8 breaths, watching the flow of energy into the body.
                  </Text>
                </Block>
              </View>
            </ScrollView>
          </View>
        </Modal>
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center'
  },
  button: {
    justifyContent: 'center'

  }
});


export default Namaste;