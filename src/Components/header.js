//Import libraries to make use of components

import React from 'react';
import {Text, View} from 'react-native';

//create a header component

const Header = ({headerText}) => {
    const { textStyle, viewStyle } = styles;
    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.4,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000'
    }

}

//make the component available to other parts of the app

export default Header;