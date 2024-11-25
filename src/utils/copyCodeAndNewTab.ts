const copyCodeAndNewTab = (code: string, url: string, target: string)  => {
    navigator.clipboard.writeText(code)
    if (target === 'no') {
        return
    }
    window.open(url, target)
}

export default copyCodeAndNewTab
