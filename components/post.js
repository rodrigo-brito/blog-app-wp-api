import React from "react"
import {
    Alert,
    AppRegistry,
    Button,
    StyleSheet, 
    View, 
    Text, 
    Image, 
    ScrollView 
} from 'react-native';
import {
	Card,
	CardImage,
	CardTitle,
	CardContent,
	CardAction,
} from 'react-native-card-view';

export default class Post extends React.Component {
    render(){
        return(
            <View style={styles.card}>
                <View>
                    {this.props.image && <Image
                        style={{width: this.props.image.width, height: this.props.image.height }}
                        source={{uri: this.props.image.source_url}}
                    />}
                </View>
                <View>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>						
                <View style={styles.content}>
                    <Text>{this.props.text}</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 60,
		marginBottom: 60
	},
	title: {
        fontSize: 25,
        padding: 10,
		backgroundColor: 'transparent'
    },
    content :{
        padding: 10
    },
	card: {
        elevation: 2,
        width: 'auto',
        marginLeft: 10,
        marginRight: 10,
		borderRadius: 2,
		shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: '#000',
        shadowOffset: { height: 0, width: 0 },
        backgroundColor: '#fff',
        marginBottom: 20,
	}
});