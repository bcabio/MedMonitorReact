import React, { Component } from 'react';
import { View, Stylesheet, Button, TouchableOpacity, FlatList } from 'react-native';
import { Container, Header, Body, Content, Form, Input, Label, Text, Item, ListItem, List, CheckBox} from 'native-base';

class MedicineInput extends Component {

	constructor(props) {
		super(props);
		this.state = {
			timestamp : '',
			meds : [], 
			medsList : [],
			checkBoxList: {},
			isRendered : false
		}
	}


	_keyExtractor = (item, index) => item.name;

	componentDidMount() {
		return fetch('https://mangohacksflask.herokuapp.com/userMeds')
			.then((response) => {
				return response.json()})
			.then((responseJSON) => {
				console.log(responseJSON.meds);
				var m = responseJSON.meds.map((medicine) => {
						return <ListItem> 
										<Body>	
											<Text> {medicine.name} </Text>
										</Body>
										<CheckBox 
											checked={false}/>
									</ListItem>
				})
				console.log(m);
				this.setState({timestamp: new Date().toLocaleString(), meds: responseJSON.meds, medsList: m, isRendered: true});
			})
			.catch((error) => {
				console.error(error);
			});
	}




	render() {
		if(this.state.isRendered)
			return (
				<Container>
					<Content>
						<List>
							{this.state.medsList}
						</List>
					</Content>
				</Container>

				);
		return (
				<Container>
					<Content>
						<Text>
							Loading...
						</Text>
					</Content>
				</Container>
			);
	}
}

export default MedicineInput;