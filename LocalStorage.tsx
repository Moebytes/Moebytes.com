import React, {useEffect} from "react"
import {useThemeSelector, useThemeActions} from "./store"
import {Themes} from "./reducers/themeReducer"

const lightColorList = {
    "--background": "#ffffff",
    "--textColor": "#000000",
    "--headingColor": "#ff3b9d",
    "--navColor": "#ffe6f0",
    "--musicPlayerColor": "#ff5faa",
    "--navButtonBorder": "#ff33A3",
    "--navButton": "#ff6bb5"
}

const darkColorList = {
    "--background": "#000000",
    "--textColor": "#ffffff",
    "--headingColor": "#ff3bba",
    "--navColor": "#230d29",
    "--musicPlayerColor": "#f93dab",
    "--navButtonBorder": "#ff33A3",
    "--navButton": "#ff6bb5"
}

const LocalStorage: React.FunctionComponent = () => {
    const {theme} = useThemeSelector()
    const {setTheme} = useThemeActions()

    useEffect(() => {
        if (typeof window === "undefined") return
        const colorList = theme.includes("light") ? lightColorList : darkColorList
        for (let i = 0; i < Object.keys(colorList).length; i++) {
            const key = Object.keys(colorList)[i]
            const color = Object.values(colorList)[i]
            document.documentElement.style.setProperty(key, color)
        }
    }, [theme])

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme) setTheme(savedTheme as Themes)
    }, [])

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    return null
}

export default LocalStorage