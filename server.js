const express = require('express')
const app = express()

const universities = {
    
    "quaid-i-azam university" : {
        'World University Rankings (2024)' : 401,
        'Academic Ranking of World Universities (2023)' : 901,
        'QS World University Rankings (2024)' : 315,
        'Best Global Universities Rankings (2023' : 482,
        'Location' : 'Islamabad, Pakistan'
    },
    "consats university islamabad" : {
        'World University Rankings (2024)' : 601,
        'Academic Ranking of World Universities (2023)' : 501,
        'QS World University Rankings (2024)' : 651,
        'Best Global Universities Rankings (2023' : 441,
        'Location' : 'Rawalpindi, Pakistan'
    },
    "national university of sciences and technology" : {
        'World University Rankings (2024)' : 601,
        'Academic Ranking of World Universities (2023)' : 901,
        'QS World University Rankings (2024)' : 367,
        'Best Global Universities Rankings (2023' : 770,
        'Location' : 'Karachi, Pakistan'
    },
    "university of the punjab" : {
        'World University Rankings (2024)' : 801,
        'Academic Ranking of World Universities (2023)' : 701,
        'QS World University Rankings (2024)' : 741,
        'Best Global Universities Rankings (2023' : 1140,
        'Location' : 'Lahore, Pakistan'
    },
    "university of engineering and technology" : {
        'World University Rankings (2024)' : 1001,
        'Academic Ranking of World Universities (2023)' : 701,
        'QS World University Rankings (2024)' : 791,
        'Best Global Universities Rankings (2023' : 1417,
        'Location' : 'Lahore, Pakistan'
    },
    "university of peshawar" : {
        'World University Rankings (2024)' : 1001,
        'Academic Ranking of World Universities (2023)' : 'Not ranked',
        'QS World University Rankings (2024)' : 951,
        'Best Global Universities Rankings (2023' : 889,
        'Location' : 'Peshawar, Pakistan'
    },
    "government college university faisalabad" : {
        'World University Rankings (2024)' : 601,
        'Academic Ranking of World Universities (2023)' : 'Not ranked',
        'QS World University Rankings (2024)' : 'Not ranked',
        'Best Global Universities Rankings (2023' : 852,
        'Location' : 'Faisalabad, Pakistan'
    },
    "the university of lahore" : {
        'World University Rankings (2024)' : 801,
        'Academic Ranking of World Universities (2023)' : 901,
        'QS World University Rankings (2024)' :1001,
        'Best Global Universities Rankings (2023' : 1344,
        'Location' : 'Lahore, Pakistan'
    },
    "unknown" : {
        'unknown' : '000',
        'unkownn' : '000',
        'unkownn' : '000',
        'unkownn' : '000',
        'unkownn' : '000'
    }
}
const PORT = process.env.PORT || 8000;

app.get('/', (request,response)=> {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const university = request.params.name.toLowerCase()
    if(universities[university]){
        response.json(universities[university])
    }else{
        response.json(universities['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now runnig on ${PORT}! Betta Go catch it!`)
})