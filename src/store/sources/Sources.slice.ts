import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISourceInitState, TSource } from './Sources.types'

const initialState: ISourceInitState = {
	sources: [],
	sourcesTotal: 10,
	sourceToEdit: null,
	sourceDrawer: false,
}

const SourcesSlice = createSlice({
	name: 'SourcesSlice',
	initialState,
	reducers: {
		setSources(state, { payload }: PayloadAction<TSource[]>) {
			state.sources = payload
		},
		setSourcesTotal(state, { payload }: PayloadAction<number>) {
			state.sourcesTotal = payload
		},
		setSourceToEdit(state, { payload }: PayloadAction<TSource>) {
			state.sourceToEdit = payload
		},
		setSourceDrawer(state, { payload }: PayloadAction<boolean>) {
			state.sourceDrawer = payload
		},
	},
})

export const { reducer, actions } = SourcesSlice
