import { h, Component } from 'preact';
import style from './style';

class Home extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			selectedGame: ''
		}
		
		this.generateNumbers = this.generateNumbers.bind(this);
		this.setGame = this.setGame.bind(this);
	}

	render() {
		const divSelectedGame = this.generateNumbers(this.state.selectedGame);
		return (
			<div class={style.home}>
				<div class={style.title}>
					<p>Selecione o jogo:</p>
				</div>
				<div class={style.gameRow}>
					<div class={[style.gameCircle, style.megasena].join(' ')}
						onClick={() => this.setGame('megasena')}>
						Mega Sena
					</div>
					<div class={[style.gameCircle, style.lotofacil].join(' ')}
						onClick={() => this.setGame('lotofacil')}>
						Lotofácil
					</div>
					<div class={[style.gameCircle, style.quina].join(' ')}
						onClick={() => this.setGame('quina')}>
						Quina
					</div>
					<div class={[style.gameCircle, style.lotomania].join(' ')}
						onClick={() => this.setGame('lotomania')}>
						Lotomania
					</div>
					<div class={[style.gameCircle, style.timemania].join(' ')}
						onClick={() => this.setGame('timemania')}>
						Timemania
					</div>
					<div class={[style.gameCircle, style.duplasena].join(' ')}
						onClick={() => this.setGame('duplasena')}>
						Dupla Sena
					</div>
					<div class={[style.gameCircle, style.diaDeSorte].join(' ')}
						onClick={() => this.setGame('diaDeSorte')}>
						Dia de Sorte
					</div>
				</div>
				{divSelectedGame}
			</div>
		);
	}
	
	generateNumbers(selectedGame) {
		let divSelectedGame
		switch (selectedGame) {
			case 'megasena':
				divSelectedGame = <div class={style.numbersRow}>
					<div>01 - 02 - 03 - 04 - 05 - 06</div>
				</div>;
				break;
			case 'lotofacil':
				divSelectedGame = <div class={style.numbersRow}>
					<div>
						01 - 02 - 03 - 04 - 05 - 06 - 01 - 02 - 03 - 04 - 05 - 06 - 04 - 05 - 06
					</div>
				</div>;
				break;
			case 'quina':
				divSelectedGame = <div class={style.numbersRow}>
					<div>01 - 02 - 03 - 04 - 05 - 06</div>
				</div>;
				break;
			case 'lotomania':
				divSelectedGame = <div class={style.numbersRow}>
					<div>01 - 02 - 03 - 04 - 05 - 06</div>
				</div>;
				break;
			case 'timemania':
				divSelectedGame = <div class={style.numbersRow}>
					<div>01 - 02 - 03 - 04 - 05 - 06</div>
				</div>;
				break;
			case 'duplasena':
				divSelectedGame = <div class={style.numbersRow}>
					<div>01 - 02 - 03 - 04 - 05 - 06</div>
				</div>;
				break;
			case 'diaDeSorte':
				divSelectedGame = <div class={style.numbersRow}>
					<div>01 - 02 - 03 - 04 - 05 - 06 - 07</div>
				</div>;
				break;
			default:
				divSelectedGame = null;
		}
		return divSelectedGame;
	}
	
	setGame(game) {
		console.log('jogo selecionado', game);
		this.setState({selectedGame: game});
	}
}

export default Home;
