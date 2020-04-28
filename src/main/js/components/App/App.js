import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import CommandLine from '../CommandLine/CommandLine';
import Grid from '../Grid/Grid';

const Page = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const NavBar = styled.div`
	background-color: #0A3761;
	display: flex;
	justify-content: center;
`;
const ContentArea = styled.div`
	height: 100%;
	width: 100%;
	background-color: #F0F0F0;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px 0px;
`;
const Footer = styled.div`

`;
const TopStripe = styled.div`
	background-color: #A0BED9;
	height: 30px;
`;
const BottomStripe = styled.div`
	background-color: #0F3C64;
	height: 90px;
`;

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			coordinates: null
		};
	}

	componentDidMount() {
		fetch('/api/coordinates').then(response => response.json())
			.then(coordinates => this.setState({ coordinates }));
	}

	render() {
		const { coordinates } = this.state;
		return (
			<Page>
				<NavBar>
					<Logo />
				</NavBar>

				<ContentArea>
					<Grid coordinates={coordinates} />
					<CommandLine />
				</ContentArea>

				<Footer>
					<TopStripe></TopStripe>
					<BottomStripe></BottomStripe>
				</Footer>
			</Page>
		);
	}
}

export default App;
