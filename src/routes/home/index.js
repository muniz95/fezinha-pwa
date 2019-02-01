import { h } from 'preact';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<p>Selecione o jogo:</p>
		<div class={style.gameRow}>
			<div class={[style.gameCircle, style.megasena].join(' ')}>Mega Sena</div>
			<div class={[style.gameCircle, style.lotofacil].join(' ')}>Lotofácil</div>
			<div class={[style.gameCircle, style.quina].join(' ')}>Quina</div>
			<div class={[style.gameCircle, style.lotomania].join(' ')}>Lotomania</div>
			<div class={[style.gameCircle, style.timemania].join(' ')}>Timemania</div>
			<div class={[style.gameCircle, style.duplasena].join(' ')}>Dupla Sena</div>
			<div class={[style.gameCircle, style.diaDeSorte].join(' ')}>Dia de Sorte</div>
		</div>
	</div>
);

export default Home;
