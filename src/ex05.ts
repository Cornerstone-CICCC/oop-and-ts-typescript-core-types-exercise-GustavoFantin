// Exercise: Create a function `setTheme` that accepts a parameter with the literal type 'dark' or 'light'.
// The function should return a string saying "Theme set to [theme]".

function setTheme(theme: 'dark' | 'light') {
    if (theme === 'dark') {
        return `Theme set to dark`
    } else {
        return `Theme set to light`
    }
}

console.log(setTheme('dark'));
// Expected output: "Theme set to dark"