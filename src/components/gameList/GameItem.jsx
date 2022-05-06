import React from 'react'
import AddToWhiteList from './AddToWhiteList'
import { Link } from 'react-router-dom'
const GameItem = ({item, addToWhitelistFunc}) => {
	return (
		<div  className='gameList__games_block'>
			<Link to={`/game/${item.slug}`}>
				<img src={item.background_image} alt='game' />
			</Link>
			<p className='gameList__name'> 🎮{item.name}🎮</p>

			<div className='gameList__block'>
				<p className='gameList__textAleft'>
					Год випуска: {item.released} <br />
					Жанри:{item.genres.slice(0, 2).map(item => ` ${item.name}`)}
				</p>
				<AddToWhiteList item={item} addToWhitelistFunc={addToWhitelistFunc} />
			</div>
		</div>
	)
}

export default GameItem