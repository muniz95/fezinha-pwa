import { h, Component } from 'preact';
import style from './style';

class Home extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			selectedGame: ''
		}
		
		this.createResultsPanel = this.createResultsPanel.bind(this);
		this.generateNumbers = this.generateNumbers.bind(this);
		this.setGame = this.setGame.bind(this);
	}

	render() {
		const divSelectedGame = this.createResultsPanel(this.state.selectedGame);
		return (
			<div class={style.home}>
				<div class={style.title}>
					<p>Selecione o jogo:</p>
				</div>
				<div class={style.gameRow}>
					<div class={[style.gameCircle, style.megasena, style.lightFont].join(' ')}
						onClick={() => this.setGame('megasena')}>
						Mega Sena
					</div>
					<div class={[style.gameCircle, style.lotofacil, style.lightFont].join(' ')}
						onClick={() => this.setGame('lotofacil')}>
						Lotofácil
					</div>
					<div class={[style.gameCircle, style.quina, style.lightFont].join(' ')}
						onClick={() => this.setGame('quina')}>
						Quina
					</div>
					<div class={[style.gameCircle, style.lotomania, style.lightFont].join(' ')}
						onClick={() => this.setGame('lotomania')}>
						Lotomania
					</div>
					<div class={[style.gameCircle, style.timemania, style.darkFont].join(' ')}
						onClick={() => this.setGame('timemania')}>
						Timemania
					</div>
					<div class={[style.gameCircle, style.duplasena, style.lightFont].join(' ')}
						onClick={() => this.setGame('duplasena')}>
						Dupla Sena
					</div>
					<div class={[style.gameCircle, style.diaDeSorte, style.lightFont].join(' ')}
						onClick={() => this.setGame('diaDeSorte')}>
						Dia de Sorte
					</div>
				</div>
				{divSelectedGame}
			</div>
		);
	}
	
	createResultsPanel(selectedGame) {
		const numbers = this.generateNumbers(selectedGame);
		const divSelectedGame = (
			<div class={style.numbersRow}>
				<div>{numbers.join(' - ')}</div>
			</div>
		);
		return divSelectedGame;
	}
	
	generateNumbers(selectedGame) {
		const gameNumbersQuantity = {
			'megasena': {
				quantity: 6,
				range: 60
			},
			'lotofacil': {
				quantity: 15,
				range: 30
			},
			'quina': {
				quantity: 6,
				range: 30
			},
			'lotomania': {
				quantity: 6,
				range: 30
			},
			'timemania': {
				quantity: 6,
				range: 30
			},
			'duplasena': {
				quantity: 6,
				range: 30
			},
			'diaDeSorte': {
				quantity: 6,
				range: 30
			}
		}
		const numbers = new Set();
		const sortCriteria = (a, b) => a - b;
		
		if(selectedGame) {
			while(numbers.size < gameNumbersQuantity[selectedGame].quantity) {
				numbers.add(Math.floor(Math.random() * gameNumbersQuantity[selectedGame].range) + 1);
			}
		}
		
		return Array.from(numbers).sort(sortCriteria);
	}
	
	setGame(game) {
		console.log('jogo selecionado', game);
		this.setState({selectedGame: game});
	}
}

export default Home;
