import {createSlice} from "@reduxjs/toolkit"
import {useSelector, useDispatch} from "react-redux"
import type {StoreState, StoreDispatch} from "../store"

const layoutSlice = createSlice({
    name: "layout",
    initialState: {
        mobile: false
    },
    reducers: {
        setMobile: (state, action) => {state.mobile = action.payload}
    }
})

const {
    setMobile
} = layoutSlice.actions

export const useLayoutSelector = () => {
    const selector = useSelector.withTypes<StoreState>()
    return {
        mobile: selector((state) => state.layout.mobile)
    }
}

export const useLayoutActions = () => {
    const dispatch = useDispatch.withTypes<StoreDispatch>()()
    return {
        setMobile: (state: boolean) => dispatch(setMobile(state))
    }
}

export default layoutSlice.reducer