import { h } from 'preact';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<p>Selecione o jogo:</p>
		<div class={style.gameRow}>
			<div class={[style.gameCircle, style.megasena].join(' ')}>1</div>
			<div class={[style.gameCircle, style.lotofacil].join(' ')}>2</div>
			<div class={[style.gameCircle, style.quina].join(' ')}>3</div>
			<div class={[style.gameCircle, style.lotomania].join(' ')}>4</div>
			<div class={[style.gameCircle, style.timemania].join(' ')}>5</div>
			<div class={[style.gameCircle, style.duplasena].join(' ')}>6</div>
			<div class={[style.gameCircle, style.diaDeSorte].join(' ')}>7</div>
		</div>
	</div>
);

export default Home;
