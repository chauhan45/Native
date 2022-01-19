import React from "react";
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, View, Modal, Text, ScrollView } from 'react-native';
import { Block, theme, Button } from 'galio-framework';
import Card from "../components/Card";

class ThreeLegged extends React.Component {


  render() {

    return (

      <View>
    <TouchableWithoutFeedback>
        <Modal isVisible>
          <View style={{ flex: 1 }}>
            <ScrollView>
              <View style={styles.container}>
              
                <Image
                  style={{ height: 400, width: 400, marginTop: 73 }}
                  source={require('../assets/imgs/yoga01.jpeg')}
                />
                <Text bold size={16} size={19} style={styles.title}> Three legged dog pose </Text>
                <Block flex center>
                  <Text small center color="info" style={{ marginTop: 50 ,marginLeft:20, marginRight:20 }} >
                  Step both feet together. Then, with your arms and legs straight, inhale and lift your
                   right leg straight back and up, high in the air. Flex your right foot and reach back 
                   through your heel. Internally rotate 
                  your lifted leg so your knee and the top of your foot point down toward the mat.
                  </Text>
                </Block>
              </View>
            </ScrollView>
          </View>
        </Modal>
        </TouchableWithoutFeedback>
      </View>
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


export default ThreeLegged;