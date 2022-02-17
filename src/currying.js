const curryFunction = (tag) => {
    function trimContent(text) {
        return text.replace('<', 'lgt;').replace('>','rgt;')
    }
    return (content) => {
        console.log(`<${tag}>${trimContent(content)}</${tag}>`)
    } 
}

curryFunction("div")("this is test")