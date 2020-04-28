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

const initialCommands = [
	{
		// sets the position of the robot, pointing east
		action: 'POSITION',
		coordinates: {
			x: 1,
			y: 2,
		}
	},
	{
		// sets the robot pointing east
		action: 'EAST',
	},
	{
		// lets the robot do 3 steps forward
		action: 'FORWARD',
		value: 3
	},
	{
		// lets the robot do nothing
		action: 'WAIT',
		value: null
	},
	{
		// lets the robot turn around
		action: 'TURNAROUND',
	},
	{
		// lets the robot do 1 step forward
		action: 'FORWARD',
		value: 1
	},
	{
		// lets the robot turn right
		action: 'RIGHT',
	},
	{
		// lets the robot do 2 steps forward
		action: 'FORWARD',
		value: 2
	}
];

const gridSize = {
	columns: 5,
	rows: 5
}

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			commands: initialCommands,
			data: {
				rotation: 90,
				coordinates: {
					x: 1,
					y: 1
				}
			}
		};
	}

	componentDidMount() {
		fetch('/api/coordinates').then(response => response.json())
			.then(data => this.setState({
				data: {
					rotation: 90,
					coordinates: {
						x: 1,
						y: 3
					}
				}
			}));
	}

	submitCommands() {

	}

	render() {
		const { data } = this.state;
		return (
			<Page>
				<NavBar>
					<Logo />
				</NavBar>

				<ContentArea>
					<Grid
						data={data}
						numberOfColumns={gridSize.columns}
						numberOfRows={gridSize.rows}
					/>
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
