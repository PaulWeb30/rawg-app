import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useHttp } from '../../hooks/useHttp'

const initialState = {
	searchGames: [],
	searchGamesLoadingStatus: 'idle',
}
const { REACT_APP_API_KEY } = process.env
export const fetchSearchGames = createAsyncThunk(
	'games/fetchSeachGames',
	async search => {
		const { request } = useHttp()
		return await request(
			`https://api.rawg.io/api/games?key=${REACT_APP_API_KEY}&search=${search}`
		)
	}
)

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchSearchGames.pending, state => {
				state.searchGamesLoadingStatus = 'loading'
			})
			.addCase(fetchSearchGames.fulfilled, (state, action) => {
				state.searchGamesLoadingStatus = 'idle'
				state.searchGames = action.payload
			})
			.addCase(fetchSearchGames.rejected, state => {
				state.searchGamesLoadingStatus = 'error'
			})
			.addDefaultCase(() => {})
	},
})

const { reducer } = searchSlice

export default reducer

