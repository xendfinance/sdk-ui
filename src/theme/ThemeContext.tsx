import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
// import { retrieveTheme, updateThemeSelection } from "../methods/utils/theme-settings";
import themes, { light } from './themes';



interface Props {
    children: ReactNode
}

export const Context = React.createContext(['light', (id: string) => { }])


const ThemeContext = (props: Props) => {

    const [currentThemeId, setCurrentThemeId] = useState("light")
    const [theme, setTheme] = useState({})

    useEffect(() => {
        // const savedThemeId = retrieveTheme();
        // setCurrentThemeId(savedThemeId);

        let useTheme = light;
        for (let item of themes) {
            if (item.id === currentThemeId) {
                useTheme = { ...useTheme, ...item };
            }
        }
        setTheme(useTheme);
        // eslint-disable-next-line
    }, [])

    const changeTheme = (id: string) => {
        // updateThemeSelection(id);
        setCurrentThemeId(id);

        let useTheme = {};
        for (let item of themes) {
            if (item.id === id) {
                useTheme = { ...useTheme, ...item };
            }
        }
        Object.keys(useTheme).length > 0 && setTheme(useTheme);

    }

    return (
        <Context.Provider value={[currentThemeId, changeTheme]}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </Context.Provider>
    )
}

export default ThemeContext;