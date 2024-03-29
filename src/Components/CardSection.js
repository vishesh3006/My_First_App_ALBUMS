
import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}

const styles = {
    containerStyle: {
        borderBottomWidth: 2,
        padding: 5,
        borderColor: '#ddd',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#fff',
        position: 'relative'
    }
}

export default CardSection;