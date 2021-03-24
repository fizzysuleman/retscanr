import React, { Component } from 'react';
import { View ,Dimensions} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';



var { height, width } = Dimensions.get('window')

let products = [
  {
      "image":require("../assets/productImages/honeygarlic.jpg"),
      "store": "Walmart",
      "name": "VH Honey Garlic Sauce",
  },
  {
    "image":require("../assets/productImages/ps5.jpg"),
    "store": "BestBuy",
    "name": "PlayStation 5",
},
{
  "image":require("../assets/productImages/airjordan.jpg"),
  "store": "Footlocker",
  "name": "Nike air jordan",
},
{
  "image":require("../assets/productImages/boots.jpg"),
  "store": "Sport chek",
  "name": "Nike Phantom GT Elite",
},
{
  "image":require("../assets/productImages/airpodpro.jpg"),
  "store": "The Source",
  "name": "AirPods Pro",
},
{
  "image":require("../assets/productImages/airpodsmax.jpg"),
  "store": "Sport chek",
  "name": "AirPods Max",
},
{
  "image":require("../assets/productImages/croctop.jpg"),
  "store": "Winners",
  "name": "Calvin klein Croc Top",
},
{
  "image":require("../assets/productImages/fan.jpg"),
  "store": "The Home Depot",
  "name": "Binatone Standing fan",
},
{
  "image":require("../assets/productImages/teddybear.jpg"),
  "store": "Walmart",
  "name": "Teddy Bear 50 in.",
},
{
  "image":require("../assets/productImages/readingtable.jpeg"),
  "store": "The Home Depot",
  "name": "Wooden Reading Table",
},
  
]

export default class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderList=()=>{

    return  products.map((product,index)=>{ 
          return(
            <List key={index}>
            <ListItem avatar>
                <Left>
                    <Thumbnail style={{ width: 50, height: 50 }} source={product.image} />
                </Left>
                <Body>
                    <Text>{product.name}</Text>
                    <Text note>Available In :{product.store}</Text>
                </Body>
                <Right>
                    <Text note>3:43 pm</Text>
                </Right>
            </ListItem>
        </List>
          )
      })
  }

  render() {
    return (
      <Container>
        <View style={{ backgroundColor: "#cccccc", width: width, padding: 10 }}>
          <Text style={{ marginLeft: 'auto', marginRight: 'auto',color:"#404040" }}>New Releases based on items you have scanned</Text>
        </View>
        <Content>
                 {this.renderList()}  
        </Content>
      </Container>
    );
  }
}
