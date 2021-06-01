type ThemeObject = {
    id: string
    background: string
    primary: string
    font: string
    link: string
    border: string
    borderActive: string
    disabledBtnBg: string
    disableBtn: string
}

export const light: ThemeObject = {
    id: "light",
    background: "#F8F8F8",
    primary: "#FFFFFF",
    font: "#333333",
    link: "#2042B8",
    border: "#E6E6E6",
    borderActive: "#2042B8",
    disabledBtnBg: "#E8E8E8",
    disableBtn: "#FFFFFF"
}
const dark: ThemeObject = {
    id: "dark",
    background: "#202020",
    primary: "#2A2A2A",
    font: "#FFFFFF",
    link: "#FF6600",
    border: "#6D6D6D",
    borderActive: "#FF6600",
    disabledBtnBg: "#333333",
    disableBtn: "#444444"
}


const themes = [
    light,
    dark
]
export default themes;