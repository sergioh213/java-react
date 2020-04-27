import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Logo from './Logo';

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
	justify-content: center;
	align-items: center;
`;
const Grid = styled.div`
	height: 80%;
	width: 80%;
	background-color: white;
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
				</ContentArea>

				<Footer>
					<TopStripe></TopStripe>
					<BottomStripe></BottomStripe>
				</Footer>
			</Page>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
);
