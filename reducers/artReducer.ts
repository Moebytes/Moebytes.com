import {createSlice} from "@reduxjs/toolkit"
import {useSelector, useDispatch} from "react-redux"
import type {StoreState, StoreDispatch} from "../store"

const artSlice = createSlice({
    name: "art",
    initialState: {
        previewImg: ""
    },
    reducers: {
        setPreviewImg: (state, action) => {state.previewImg = action.payload}
    }    
})

const {
    setPreviewImg
} = artSlice.actions

export const useArtSelector = () => {
    const selector = useSelector.withTypes<StoreState>()
    return {
        previewImg: selector((state) => state.art.previewImg)
    }
}

export const useArtActions = () => {
    const dispatch = useDispatch.withTypes<StoreDispatch>()()
    return {
        setPreviewImg: (state: string) => dispatch(setPreviewImg(state))
    }
}

export default artSlice.reducer