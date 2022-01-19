import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, PhasenModal, Button } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { argonTheme } from '../constants';
import ThreeLegged from '../description/ThreeLegged';
import Namaste from '../description/Namaste';


class Card extends React.Component {
  state = {
    visible: false
  };

  ThreeLeggedHandler = () => {
    this.setState(({ visible }) => ({ visible: !visible }));
  };
  ThreeLeggedHandler1 = () => {
    this.setState(({ visible1 }) => ({ visible1: !visible1 }));
  };

  render() {
    const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = this.props;

    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [styles.imageContainer,
    horizontal ? styles.horizontalStyles : styles.verticalStyles,
    styles.shadow
    ];

    return (
      // <Block row={horizontal} card flex style={cardContainer}>
      //   <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
      //     <Block flex style={imgContainer}>
      //       <Image source={{uri: item.image}} style={imageStyles} />
      //     </Block>
      //   </TouchableWithoutFeedback>
      //   <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
      //     <Block flex space="between" style={styles.cardDescription}>
      //       <Text size={14} style={styles.cardTitle}>{item.title}</Text>
      //       <Text size={12} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} bold>{item.cta}</Text>
      //     </Block>
      //   </TouchableWithoutFeedback>
      // </Block>
      <>
        {/* 1 section */}
        <Block row={horizontal} card flex style={cardContainer}>
          <TouchableWithoutFeedback
            // onPress={() => navigation.navigate('Pro')}
            onPress={this.ThreeLeggedHandler}
          >
            <Block flex style={imgContainer}>
              <Image
                style={imageStyles}
                source={require('../assets/imgs/yoga01.jpeg')}
              />
              <Text bold size={10} size={14} style={styles.cardTitle}>Three legged dog pose</Text>

              {this.state.visible && <ThreeLegged />}
            </Block>
          </TouchableWithoutFeedback>

          {/* 2 section */}

          <TouchableWithoutFeedback
            onPress={this.ThreeLeggedHandler1}
          >
            <Block flex space="between" style={styles.cardDescription} >
              <Image
                style={imageStyles}
                source={require('../assets/imgs/yoga02.jpg')}
              />
              <Text bold size={10} size={14} style={styles.cardTitle}>Namaste pose</Text>
              {this.state.visible1 && <Namaste />}
            </Block>
          </TouchableWithoutFeedback>
        </Block>



        {/* 3 section */}

        <Block row={horizontal} card flex style={cardContainer}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
            <Block flex style={imgContainer}>
              {/* <Image source={{ uri: item.image }} style={imageStyles} /> */}
              <Image
                style={imageStyles}
                source={require('../assets/imgs/yoga03.jpg')}
              />
            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
            <Block flex space="between" style={styles.cardDescription}>
              <Text bold size={10} size={14} style={styles.cardTitle}>Plough pose</Text>
              <Button
                title="Description"
              // onPress={this.ThreeLeggedHandler1}
              />
              {/* {this.state.visible && <Namaste />} */}
            </Block>
          </TouchableWithoutFeedback>
        </Block>

        {/* 4 section */}

        <Block row={horizontal} card flex style={cardContainer}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
            <Block flex style={imgContainer}>
              {/* <Image source={{ uri: item.image }} style={imageStyles} /> */}
              <Image
                style={imageStyles}
                source={require('../assets/imgs/yoga04.jpg')}
              />
            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
            <Block flex space="between" style={styles.cardDescription}>
              <Text bold size={10} size={14} style={styles.cardTitle}>Intense leg stretch pose</Text>
              <Button
                title="Description"
              // onPress={this.ThreeLeggedHandler1}
              />
              {/* {this.state.visible && <Namaste />} */}
            </Block>
          </TouchableWithoutFeedback>
        </Block>


        {/* 5 section */}

        <Block row={horizontal} card flex style={cardContainer}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
            <Block flex style={imgContainer}>
              {/* <Image source={{ uri: item.image }} style={imageStyles} /> */}
              <Image
                style={imageStyles}
                source={require('../assets/imgs/yoga05.png')}
              />
            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
            <Block flex space="between" style={styles.cardDescription}>
              <Text bold size={10} size={14} style={styles.cardTitle}>Tree pose</Text>
              <Button
                title="Description"
              // onPress={this.ThreeLeggedHandler1}
              />
              {/* {this.state.visible && <Namaste />} */}
            </Block>
          </TouchableWithoutFeedback>
        </Block>

        {/* 6 section */}

        <Block row={horizontal} card flex style={cardContainer}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
            <Block flex style={imgContainer}>
              {/* <Image source={{ uri: item.image }} style={imageStyles} /> */}
              <Image
                style={imageStyles}
                source={require('../assets/imgs/yoga06.jpg')}
              />
            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
            <Block flex space="between" style={styles.cardDescription}>
              <Text bold size={10} size={14} style={styles.cardTitle}>Dancer pose</Text>
              <Button
                title="Description"
              // onPress={this.ThreeLeggedHandler1}
              />
              {/* {this.state.visible && <Namaste />} */}
            </Block>
          </TouchableWithoutFeedback>
        </Block>

        {/* 7 section */}

        <Block row={horizontal} card flex style={cardContainer}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
            <Block flex style={imgContainer}>
              {/* <Image source={{ uri: item.image }} style={imageStyles} /> */}
              <Image
                style={imageStyles}
                source={require('../assets/imgs/yoga07.jpg')}
              />
            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
            <Block flex space="between" style={styles.cardDescription}>
              <Text bold size={10} size={14} style={styles.cardTitle}>Plank pose</Text>
              <Button
                title="Description"
              // onPress={this.ThreeLeggedHandler1}
              />
              {/* {this.state.visible && <Namaste />} */}
            </Block>
          </TouchableWithoutFeedback>
        </Block>

        {/* 8 section */}

        <Block row={horizontal} card flex style={cardContainer}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
            <Block flex style={imgContainer}>
              {/* <Image source={{ uri: item.image }} style={imageStyles} /> */}
              <Image
                style={imageStyles}
                source={require('../assets/imgs/yoga08.jpg')}
              />
            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
            <Block flex space="between" style={styles.cardDescription}>
              <Text bold size={10} size={14} style={styles.cardTitle}>Easy pose</Text>
              <Button
                title="Description"
              // onPress={this.ThreeLeggedHandler1}
              />
              {/* {this.state.visible && <Namaste />} */}
            </Block>
          </TouchableWithoutFeedback>
        </Block>

        {/* 9 section */}

        <Block row={horizontal} card flex style={cardContainer}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
            <Block flex style={imgContainer}>
              {/* <Image source={{ uri: item.image }} style={imageStyles} /> */}
              <Image
                style={imageStyles}
                source={require('../assets/imgs/yoga09.jpg')}
              />
            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
            <Block flex space="between" style={styles.cardDescription}>
              <Text bold size={10} size={14} style={styles.cardTitle}>Side plank pose </Text>
              <Button
                title="Description"
              // onPress={this.ThreeLeggedHandler1}
              />
              {/* {this.state.visible && <Namaste />} */}
            </Block>
          </TouchableWithoutFeedback>
        </Block>
        {/* 10 section */}

        <Block row={horizontal} card flex style={cardContainer}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
            <Block flex style={imgContainer}>
              {/* <Image source={{ uri: item.image }} style={imageStyles} /> */}
              <Image
                style={imageStyles}
                source={require('../assets/imgs/yoga10.jpg')}
              />
            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
            <Block flex space="between" style={styles.cardDescription}>
              <Text bold size={10} size={14} style={styles.cardTitle}> Warrior-1 pose </Text>
              <Button
                title="Description"
              // onPress={this.ThreeLeggedHandler1}
              />
              {/* {this.state.visible && <Namaste />} */}
            </Block>
          </TouchableWithoutFeedback>
        </Block>

        {/* 11 section */}

        <Block row={horizontal} card flex style={cardContainer}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
            <Block flex style={imgContainer}>
              {/* <Image source={{ uri: item.image }} style={imageStyles} /> */}
              <Image
                style={imageStyles}
                source={require('../assets/imgs/yoga11.jpg')}
              />
            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
            <Block flex space="between" style={styles.cardDescription}>
              <Text bold size={10} size={14} style={styles.cardTitle}> Wheel pose </Text>
              <Button
                title="Description"
              // onPress={this.ThreeLeggedHandler1}
              />
              {/* {this.state.visible && <Namaste />} */}
            </Block>
          </TouchableWithoutFeedback>
        </Block>

        {/* 11 section */}

        <Block row={horizontal} card flex style={cardContainer}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
            <Block flex style={imgContainer}>
              {/* <Image source={{ uri: item.image }} style={imageStyles} /> */}
              <Image
                style={imageStyles}
                source={require('../assets/imgs/yoga12.jpg')}
              />
            </Block>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}>
            <Block flex space="between" style={styles.cardDescription}>
              <Text bold size={10} size={14} style={styles.cardTitle}> Half lord of the fishes pose </Text>
              <Button
                title="Description"
              // onPress={this.ThreeLeggedHandler1}
              />
              {/* {this.state.visible && <Namaste />} */}
            </Block>
          </TouchableWithoutFeedback>
        </Block>
      </>

    );
  }
}

Card.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 10
  },
  c4rdTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 215
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  cardTitle: {
    padding:20
  }


});

export default withNavigation(Card);