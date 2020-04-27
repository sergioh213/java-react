import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import CommandLine from '../CommandLine/CommandLine';

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
const Grid = styled.div`
	height: 80%;
	width: 80%;
	background-color: white;

	@media only screen and (max-width: 495px) {
    width: 100vw;
  }
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
					{coordinates &&
						<Grid>
							<div>{'X: ' + coordinates.x}</div>
							<div>{'Y: ' + coordinates.y}</div>
						</Grid>
					}
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
