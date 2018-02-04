import React, { Component } from 'react';
import { View, Stylesheet, Button, TouchableOpacity, FlatList, ListView } from 'react-native';
import { Container, Header, Body, Content, Form, Input, Label, Text, Item, ListItem, List, CheckBox} from 'native-base';

class MedicineInput extends Component {

	constructor(props) {
		super(props);
		this.state = {
			timestamp : '',
			meds : [], 
			medsList : [],
			checkBoxList: {
				"Lasix": false,
				"Lisinopril": false,
				"Aricept": false,
				"Seroquel": false,
				"Ativan": false
			},
			isRendered : false
		}
	}


	_keyExtractor = (item, index) => item.name;

	toggleCheckBox(n) {
		var curr = this.state;
		console.log(curr.checkBoxList);

		curr['checkBoxList'][n] = !curr['checkBoxList'][n];
		console.log(curr.checkBoxList);
		console.log('lmao');
		this.setState(curr);
	}

	componentDidMount() {
		return fetch('https://mangohacksflask.herokuapp.com/userMeds')
			.then((response) => {
				return response.json()})
			.then((responseJSON) => {
				console.log(responseJSON.meds);
				var m = responseJSON.meds.map((medicine) => {
						return <ListItem onPress={() => this.toggleCheckBox(medicine.name)}> 
										<Body>	
											<Text> {medicine.name} </Text>
										</Body>
										<CheckBox 
											checked={this.state.checkBoxList[medicine.name]}
											/>
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
							{this.state.medsList}

						<FlatList
							extraData={this.state}
							keyExtractor={(medicine, index) => medicine.id}
							data={this.state.medsList}
							renderItem={(medicine) => {
								<ListItem onPress={() => this.toggleCheckBox(medicine.name)}> 
										<Body>	
											<Text> {medicine.name} </Text>
										</Body>
										<CheckBox 
											checked={this.state.checkBoxList[medicine.name]}
											/>
									</ListItem>
							}}
						/>
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