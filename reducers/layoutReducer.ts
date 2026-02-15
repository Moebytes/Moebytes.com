import {createSlice} from "@reduxjs/toolkit"
import {useSelector, useDispatch} from "react-redux"
import type {StoreState, StoreDispatch} from "../store"

const layoutSlice = createSlice({
    name: "layout",
    initialState: {
        mobile: false,
        tablet: false
    },
    reducers: {
        setMobile: (state, action) => {state.mobile = action.payload},
        setTablet: (state, action) => {state.tablet = action.payload}
    }
})

const {
    setMobile, setTablet
} = layoutSlice.actions

export const useLayoutSelector = () => {
    const selector = useSelector.withTypes<StoreState>()
    return {
        mobile: selector((state) => state.layout.mobile),
        tablet: selector((state) => state.layout.tablet)
    }
}

export const useLayoutActions = () => {
    const dispatch = useDispatch.withTypes<StoreDispatch>()()
    return {
        setMobile: (state: boolean) => dispatch(setMobile(state)),
        setTablet: (state: boolean) => dispatch(setTablet(state))
    }
}

export default layoutSlice.reducer