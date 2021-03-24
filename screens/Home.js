import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { Card } from 'native-base';
import { Rating } from 'react-native-ratings';


var { height, width } = Dimensions.get('window')
 // const navigation = useNavigation();


let stores = [
    {
        "image":require("../assets/storeIcons/walmart.jpg"),
        "name": "Walmart",
        "rating": 4.9,
    },
    {
        "image": require("../assets/storeIcons/bestbuy.jpg"),
        "name": "BestBuy",
        "rating": 4.2,
    },
    
    {
        "image": require("../assets/storeIcons/sportchek.jpg"),
        "name": "Sport Chek",
        "rating": 3.5,
    },
    {
        "image": require("../assets/storeIcons/thesource.png"),
        "name": "The Source",
        "rating": 3.8,  
    },
    {
        "image": require("../assets/storeIcons/homedepot.jpg"),
        "name": "The Home Depot",
        "rating": 4, 
    },
    {
        "image": require("../assets/storeIcons/winners.png"),
        "name": "Winners",
        "rating": 3.2,
    },
    {
        "image": require("../assets/storeIcons/footlocker.png"),
        "name": "Footlocker",
        "rating": 3.6,
    },
    {
        "image": require("../assets/storeIcons/canadiantire.png"),
        "name": "Canadian Tire",
        "rating": 4.7,
    },
   
]

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderCard=()=>{

      return  stores.map((store,index)=>{ 
            return(
                <Card key={index} style={[{ height: width / 1.7, width: (width / 2) - 12.5, borderColor: 'white', borderWidth: 0.5, borderRadius: 5, backgroundColor: 'white' }]}>
                    <View>
                        <TouchableOpacity onPress={() =>this.props.navigation.navigate('BarcodeScanner') }>
                            <View >
                                <Image resizeMode='contain' style={{ height: (width / 2) - 12.5, width: (width / 2) - 12.5, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} source={store.image} />
                            </View>
                            <View style={{ marginLeft: 'auto', marginRight: 'auto', paddingTop: 'auto', paddingBottom: 'auto' }} >
                                <Text style={{ fontSize: 20 }}>{store.name}</Text>

                            </View>
                            <View style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                                <Rating
                                    showRating={false}
                                    type="star"
                                    fractions={1}
                                    startingValue={store.rating}
                                    readonly
                                    imageSize={15}
                                    style={{ paddingHorizontal: 1 }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </Card>
            )
        })
    }

    render() {
        return (
            <ScrollView>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', backgroundColor: '#e8e8e8' }}>
            
            <View style={{backgroundColor:'white',width:width,height:40}}>
                <Text style={{fontSize:20,marginLeft:'auto',marginRight:'auto',marginTop:'auto',marginBottom:'auto'}}>Please select the store to scan an item</Text>
            </View>
                {/* items */}
            {this.renderCard()}             


            </View>
            </ScrollView>
            );
    }
}
