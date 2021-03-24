import React, { Component } from 'react';
import { View, Image, Dimensions,TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';


var { height, width } = Dimensions.get('window')

export default class ScannedItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <Image resizeMode='contain' style={{ height: (width / 2) - 12.5, width: (width / 2) - 12.5, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }} source={require("../assets/storeIcons/teriyaki.jpg")} />
                <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                    <Text style={{ fontSize: 18 }}>Consumer's Rating: </Text>
                    <Rating
                        showRating={false}
                        type="star"
                        fractions={1}
                        startingValue={4}
                        readonly
                        imageSize={20}
                        style={{}}
                    />
                </View>
                <View style={{ backgroundColor: "#cccccc", width: width, padding: 10, marginTop: 10 }}>
                    <Text style={{ marginLeft: 'auto', marginRight: 'auto' }}>Reviews</Text>
                </View>
                <Content>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail style={{ width: 30, height: 30 }} source={require('../assets/storeIcons/user.png')} />
                            </Left>
                            <Body>
                                <Text>Kumar Pratik</Text>
                                <Text note>Taste Really good, would totally recommend</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail style={{ width: 30, height: 30 }} source={require('../assets/storeIcons/user.png')} />
                            </Left>
                            <Body>
                                <Text>Ryan Greyjoy</Text>
                                <Text note>I love the taste of VH products, good one</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail style={{ width: 30, height: 30 }} source={require('../assets/storeIcons/user.png')} />
                            </Left>
                            <Body>
                                <Text>Sikum Nisan</Text>
                                <Text note>Taste Really good, would totally recommend</Text>
                            </Body>
                            <Right>
                                <Text note>3:45 pm</Text>
                            </Right>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail style={{ width: 30, height: 30 }} source={require('../assets/storeIcons/user.png')} />
                            </Left>
                            <Body>
                                <Text>Khash Neat</Text>
                                <Text note>Taste Really good, would totally recommend</Text>
                            </Body>
                            <Right>
                                <Text note>3:46 pm</Text>
                            </Right>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail style={{ width: 30, height: 30 }} source={require('../assets/storeIcons/user.png')} />
                            </Left>
                            <Body>
                                <Text>Bayo Link</Text>
                                <Text note>Taste Really good, would totally recommend</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail style={{ width: 30, height: 30 }} source={require('../assets/storeIcons/user.png')} />
                            </Left>
                            <Body>
                                <Text>Faizal Suleman</Text>
                                <Text note>Taste Really good, would totally recommend</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>


                </Content>
                <TouchableOpacity onPress={() => {
       this.props.navigation.goBack();
      }} style={{  backgroundColor: '#f9aa33', width: width, height: 50, marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}>
                    <Text style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto', color: 'white', fontSize: 18 }} >Go back!</Text>
                </TouchableOpacity>
            </Container >
        );
    }
}
