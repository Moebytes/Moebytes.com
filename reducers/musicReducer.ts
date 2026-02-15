import {createSlice} from "@reduxjs/toolkit"
import {useSelector, useDispatch} from "react-redux"
import type {StoreState, StoreDispatch} from "../store"

const musicSlice = createSlice({
    name: "music",
    initialState: {
        currentAudio: ""
    },
    reducers: {
        setCurrentAudio: (state, action) => {state.currentAudio = action.payload}
    }    
})

const {
    setCurrentAudio
} = musicSlice.actions

export const useMusicSelector = () => {
    const selector = useSelector.withTypes<StoreState>()
    return {
        currentAudio: selector((state) => state.music.currentAudio)
    }
}

export const useMusicActions = () => {
    const dispatch = useDispatch.withTypes<StoreDispatch>()()
    return {
        setCurrentAudio: (state: string) => dispatch(setCurrentAudio(state))
    }
}

export default musicSlice.reducer