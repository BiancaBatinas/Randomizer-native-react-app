import React from "react";
import { View, Text, Button,StyleSheet, TouchableOpacity } from "react-native";
import colors from "./constants/colors";
const ButtonMain = (props) => {
return (
    <TouchableOpacity  activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>
                {props.children}
            </Text>
        </View>
    </TouchableOpacity>
);
    
};

const styles=StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 15
    },
    buttonText: {
                color: 'white',
                fontSize: 15,
    }
});

export default ButtonMain;