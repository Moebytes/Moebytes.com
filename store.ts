import {configureStore} from "@reduxjs/toolkit"
import themeReducer, {useThemeSelector, useThemeActions} from "./reducers/themeReducer"
import layoutReducer, {useLayoutSelector, useLayoutActions} from "./reducers/layoutReducer"
import artReducer, {useArtSelector, useArtActions} from "./reducers/artReducer"
import musicReducer, {useMusicSelector, useMusicActions} from "./reducers/musicReducer"

const store = configureStore({
    reducer: {
        theme: themeReducer,
        layout: layoutReducer,
        art: artReducer,
        music: musicReducer
    },
})

export type StoreState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch

export {
    useThemeSelector, useThemeActions,
    useArtSelector, useArtActions,
    useMusicSelector, useMusicActions,
    useLayoutSelector, useLayoutActions
}

export default store