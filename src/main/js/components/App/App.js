import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import CommandLine from '../CommandLine/CommandLine';
import Grid from '../Grid/Grid';
import axios from 'axios';

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

const gridSize = {
	columns: 5,
	rows: 5
}

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: {
				rotation: 0,
				coordinates: {
					x: 1,
					y: 1
				}
			}
		};

		this.submitCommands = this.submitCommands.bind(this);
	}

	componentDidMount() {
		axios.get('/api/position')
			.then(({ data }) => this.setState({ data }));
	}

	submitCommands(script) {
		axios.post('/api/script', script)
			.then(({ data }) => {
				this.setState({ data })
			});
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
					<CommandLine onSubmit={this.submitCommands}/>
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
