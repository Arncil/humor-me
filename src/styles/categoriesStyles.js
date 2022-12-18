const background = [
    { background: 'linear-gradient(180deg, hsl(0, 80%, 50%), hsl(0, 80%, 10%))' },
    { background: 'linear-gradient(180deg, hsl(30, 80%, 50%), hsl(30, 80%, 10%))' },
    { background: 'linear-gradient(180deg, hsl(300, 80%, 50%), hsl(300, 80%, 10%))' },
    { background: 'linear-gradient(180deg, hsl(260, 80%, 50%), hsl(260, 80%, 10%))' },
    { background: 'linear-gradient(180deg, hsl(120, 80%, 50%), hsl(120, 80%, 10%))' },
    { background: 'linear-gradient(180deg, hsl(210, 80%, 50%), hsl(210, 80%, 10%))' }]

const color = [
    { color: 'hsl(0, 80%, 10%)' },
    { color: 'hsl(30, 80%, 10%)' },
    { color: 'hsl(300, 80%, 10%)' },
    { color: 'hsl(260, 80%, 10%)' },
    { color: 'hsl(120, 80%, 10%)' },
    { color: 'hsl(210, 80%, 10%)' }]

export const styleBackground = index => {
    switch(index) {
        case 'Programming': return background[0]
        case 'Spooky': return background[1]
        case 'Pun': return background[2]
        case 'Dark': return background[3]
        case 'Christmas': return background[4]
        case 'Misc': return background[5]
        default: return { background: '#fff'}
    }
}

export const styleColor = index => {
    switch(index) {
        case 'Programming': return color[0]
        case 'Spooky': return color[1]
        case 'Pun': return color[2]
        case 'Dark': return color[3]
        case 'Christmas': return color[4]
        case 'Misc': return color[5]
        default: return { color: '#fff'}
    }
}
