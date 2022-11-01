import { View, Text, StyleSheet,  TouchableOpacity,
  FlatList, Image, Alert } from 'react-native'
import React, { useContext } from 'react'
import styled from 'styled-components/native';
import { GlobalContext } from '../../../App';
import { Button } from 'react-native-paper';

const Container = styled.View`
height:100%;
background-color:#ffffff; 
`;


const NoItemContainer = styled.View`
padding: 20px;
margin-top: 150px;
`;
const NoItemText = styled.Text`
font-size : 26px;
color:#2a17d4;
align-self: center;
align-content: center;
font-weight: bold;
`;
const NoItemText2 = styled.Text`
align-self: center;
align-content: center;
`;
const ButtonContainer = styled.View`
margin: 14px;
margin-top:20px;

`;
const YourCart = ({navigation}) => {
  const NoItemComponent = () => {

    return (<View>
      <NoItemContainer><NoItemText>Opps!! Look like you have no  items in your cart</NoItemText></NoItemContainer>
    <View><NoItemText2>Please add items in your cart to checkout</NoItemText2></View>
    </View>
    );
  }

  const {cart, setcart}= useContext(GlobalContext);

  deleteProductFromCart = () => {

    Alert.alert('Success', 'The product has been deleted from your cart');

  }
  return (<>
    {
      cart.length == 0 ? <Container><NoItemComponent></NoItemComponent></Container>: <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={cart}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
               
               <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton} onPress={() => this.deleteProductFromCart()}>
                        
                        <Text style={[styles.socialBarLabel, styles.buyNow]}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                      <Text style={styles.socialBarLabel}>Quantity : </Text>
                        <Text style={styles.socialBarLabel}>1</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                
              </View>
            )
          }}/>
          <ButtonContainer>
        <Button  mode="contained" >Check Out</Button>
        </ButtonContainer>
      </View>
    }
  </>
)
}

export default YourCart;

 
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  },
  price:{
    fontSize:16,
    color: "green",
    marginTop: 5
  },
  buyNow:{
    color: "purple",
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});  