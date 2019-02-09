import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Home from './components/Explore/Home'
import StarRating from 'react-native-star-rating'


const { height, width } = Dimensions.get('window')

class Explore extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: 85, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <Icon name="ios-search" size={20} style={{ marginRight: 10, marginTop:4, }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="  Kitap arayın"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                            />
                        </View>
                    </View>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700',color:'purple', paddingHorizontal: 20,justifyContent:'center'  }}>
                                    {"SocialBooq'a Hoşgeldiniz"}
                            </Text>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 0.01,fontSize:16 , fontWeight: '400'}} multiline={true}placeholder='Kitap İsmi Girin' numberOfLines={4} />
                                <View style={{width:90, paddingTop: 20}}>
                                  <StarRating
                        disable={false}
                        maxStars={5}
                        rating={0}
                        starSize={10}
                        fullStarColor={'purple'}/>
                        
                                </View>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <TextInput style={{height:100, borderColor: 'gray', borderWidth: 0.01,fontSize:12 , fontWeight: '400'}} multiline={true}placeholder='Okuduğun Kitap  Hakkındaki Düşüncelerini  Arkadaşlarınla Paylaş!!' numberOfLines={14} />
                                    <TouchableOpacity
               style = {styles.submitButton}
              >
               <Text style = {styles.submitButtonText}>{"Paylaş"}</Text>
            </TouchableOpacity>
        
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                               {"Arkadaşlarının Paylaşımları"}
                            </Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 20}}>
                                <Home width={width}
                                    comment="Kitap 2500 liradan satılmaya başladı ayık olun!"
                                    user="Yusuf Hilmi "
                                    rating={4.5}
                                    friendcomments='Arkadas yorumları'
                                />
                                 <Home width={width}
                                    comment="Kitap 2500 liradan satılmaya başladı ayık olun!"
                                    user="Yusuf Hilmi "
                                    rating={4.5}
                                    friendcomments='Arkadas yorumları'
                                />
                                 <Home width={width}
                                    comment="Kitap 2500 liradan satılmaya başladı ayık olun!"
                                    user="Yusuf Hilmi "
                                    rating={4.5}
                                    friendcomments='Arkadas yorumları'
                                />
                                 <Home width={width}
                                    comment="Kitap 2500 liradan satılmaya başladı ayık olun!"
                                    user="Yusuf Hilmi "
                                    rating={4.5}
                                    friendcomments='Arkadas yorumları'
                                /> 
                                <Home width={width}
                                    comment="Kitap 2500 liradan satılmaya başladı ayık olun!"
                                    user="Yusuf Hilmi "
                                    rating={4.5}
                                    friendcomments='Arkadas yorumlxcarı'
                                />



                            </View>
                        </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default Explore;

const styles = StyleSheet.create({
  submitButton: {
      backgroundColor: '#7a42f4',
      paddingTop: 7,
      borderRadius:20,
      paddingHorizontal:20,
      margin: 15,
      height: 30,
      width: 80,
      justifyContent: 'flex-start',
      
   },
   submitButtonText:{
      color: 'white',
      fontSize:12
   }
});
