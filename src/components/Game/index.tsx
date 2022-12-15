import './Game.scss'
import {game} from "./game";

const Game = () => {
  const canvas = document.getElementById('gameMap') as HTMLCanvasElement;
  const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

  console.log('ctx, ', ctx)

  game(ctx);

  return (
    <div className='game'>
      <canvas id="gameMap" className='map' width='1000' height='500'/>
    </div>
  )
}

export default Game;
