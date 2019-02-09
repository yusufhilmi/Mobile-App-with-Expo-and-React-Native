import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Chats extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Mesajlar</Text>
            </View>
        );
    }
}
export default Chats;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});