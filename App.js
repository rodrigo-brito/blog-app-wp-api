import React from 'react';
import { Alert, AppRegistry, StyleSheet, View, ScrollView } from 'react-native';
import Post from './components/post'
import NavigationBar from 'react-native-navbar';
const POST_ENDPOINT = "https://rodrigobrito.net/wp-json/wp/v2/posts"

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {posts: []}
	}

	componentWillMount(){
		fetch(POST_ENDPOINT).then((response) => {
			if (response.ok) {
				response.json().then(data => {
					this.setState({posts: data})
				})
			}else{
				throw new Error("Request fail");
			}
		}, (error) => {
			console.log(error.status, error)
		})
	}

	getPosts() {
		return this.state.posts.map(post => {
			return <Post key={post.id} title={post.title.rendered}
				text={post.excerpt.rendered}
				image={post.better_featured_image.media_details.sizes.medium}/>
		})
	}

	render() {
		return (
			<View>
				<NavigationBar containerStyle={styles.navigator}
					title={{title: 'WordPress Example', tintColor: "#fff"}} statusBar={{hidden: true}} />
				<ScrollView>
					<View style={styles.container}>
						{this.getPosts()}
					</View>
				</ScrollView>			
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		marginBottom: 60,
		marginRight: 20,
		marginLeft: 20
	},
	navigator: {
		paddingTop: 30,
		paddingBottom: 10,
        backgroundColor: '#2A1DAC',
	}
});
