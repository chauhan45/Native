import React from 'react';
import image from '../assets/imgs/yoga2.png'
import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, View, ScrollView } from 'react-native';
import { Block, Text, theme, Button } from 'galio-framework';


class Yoga extends React.Component {
    render() {

        return (
            <>
            
                <ScrollView>
                    <View style={styles.container}>
                        <Image
                            style={{ height: 400, width: 400, marginTop: 73 }}
                            source={require('../assets/imgs/yoga.png')}
                        />
                        <Text bold size={16} style={styles.title}> Yoga  </Text>
                        <Block flex center>
                            <Button small center color="info" style={styles.optionsButton}>
                                More
                            </Button>
                        </Block>
                    </View>
                    <View style={styles.container}>
                        <Image
                            style={{ height: 500, width: 500, marginTop: 73 }}
                            source={require('../assets/imgs/yoga.png')}
                            
                        />
                        <Block flex center>
                            <Button small center color="info" style={styles.optionsButton}>
                                More
                            </Button>
                        </Block>
                    </View>

                </ScrollView>
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

export default withNavigation(Yoga);