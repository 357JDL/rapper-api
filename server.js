const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage' : {
        'age': 29,
        'birthName': 'Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'eminem': {
        'age': 43,
        'birthName': 'Marshal Mathers',
        'birthLocation': 'Chicago, IL'
    },
    'dylan' : {
        'age': 0,
        'birthName': 'Unknown',
        'birthLocation': 'Unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if( rappers[rapperName] ){
        response.json(rappers[rapperName])
    } else {
        response.json( rappers['dylan'] )
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running')
})