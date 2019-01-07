import { h } from 'preact';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<p>Selecione o jogo:</p>
		<div class={style.gameRow}>
			<div class={style.gameCircle}>1</div>
			<div class={style.gameCircle}>2</div>
			<div class={style.gameCircle}>3</div>
			<div class={style.gameCircle}>4</div>
			<div class={style.gameCircle}>5</div>
		</div>
	</div>
);

export default Home;
