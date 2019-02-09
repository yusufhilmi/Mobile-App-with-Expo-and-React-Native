import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class MyBooks extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>My Books</Text>
            </View>
        );
    }
}
export default MyBooks;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});