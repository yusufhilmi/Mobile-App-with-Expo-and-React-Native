import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput
} from "react-native";
import StarRating from 'react-native-star-rating'
class Home extends Component {
    render() {
        return (
            <View style={{ width: this.props.width -80, height: this.props.width-20, borderWidth: 0.5, borderColor: '#dddddd',marginBottom:10 }}>
             <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}>{this.props.user}</Text>
                    <StarRating
                        disable={true}
                        maxStars={5}
                        rating={this.props.rating}
                        starSize={10}
                        fullStarColor={'purple'}/>
                    <Text style={{ fontSize: 12}}>{this.props.comment}</Text>
                             </View>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{ flex: 1, width:103, height:170, resizeMode: 'cover', marginLeft:30 }}
                        source={require('../../../assets/mkemal.jpg')} />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 10}}>{this.props.friendcomments}.1</Text>
                    <Text style={{ fontSize: 10}}>{this.props.friendcomments}.2</Text>
                    <Text style={{ fontSize: 10}}>{this.props.friendcomments}.33</Text>
                    <TextInput style={{height: 35, width:90, borderWidth:0.05, backgroundColor:'#f2f2f2', borderRadius:8  }}   placeholder=" Yorum Yap"></TextInput>
                </View>
            </View>
        );
    }
}
export default Home;