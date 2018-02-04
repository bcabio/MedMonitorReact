import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { 
  Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  FooterTab,
  Text,
  Body,
  Left,
  Right,
  Icon,
  Badge,
  Card,
  CardItem
} from 'native-base';

class DayLog extends Component {
  render() {
    return (
      <Container>
        <Content>
        	<Card>
        		<CardItem header>
        			<Text> 9:14 am </Text>
        		</CardItem>
        		<CardItem>
        			<Body>
        				<Text>
        					1x Lasix{"\n"}
        					1x Aricept{"\n"}
        					1x Seroquel

        				</Text>
        			</Body>
        		</CardItem>
        	</Card>
        	<Card>
        		<CardItem header>
        			<Text> 1:37 pm </Text>
        		</CardItem>
        		<CardItem>
        			<Body>
	        			<Text>
	        				1x Ativan{"\n"}
	        				1x Lisinopril{"\n"}
	        			</Text>
        			</Body>
        		</CardItem>
        	</Card>
        	<Card>
        		<CardItem header>
        			<Text> 11:07 pm </Text>
        		</CardItem>
        		<CardItem>
        			<Body>
	        			<Text>
	        				None Taken
	        			</Text>
        			</Body>
        		</CardItem>
        	</Card>
        </Content>
      </Container>
    );
  }
}

export default DayLog;

