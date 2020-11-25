const express = require('express')
const app = express()
const port = 8000

const users = [{
        "login": "nova",
        "password": "123456"
    },
    {
        "login": "nova",
        "password": "123456"
    },
    {
        "login": "nova",
        "password": "123456"
    },
    {
        "login": "nova",
        "password": "123456"
    }
]

const courses = [{
        "language": "C",
        "lessons": [{
                "name": "Lesson 1",
                "url": "vk.com",
                "image": "https://sun9-4.userapi.com/slQd-NSY0RHZilsEIj7RJdv9Kr5dejeCodMX0w/EZUG2Sw4MTg.jpg"
            },
            {
                "name": "Lesson 2",
                "url": "vk.com",
                "image": "https://sun9-4.userapi.com/slQd-NSY0RHZilsEIj7RJdv9Kr5dejeCodMX0w/EZUG2Sw4MTg.jpg"
            },
            {
                "name": "Lesson 3",
                "url": "vk.com",
                "image": "https://sun9-4.userapi.com/slQd-NSY0RHZilsEIj7RJdv9Kr5dejeCodMX0w/EZUG2Sw4MTg.jpg"
            },
        ]
    },
    {
        "language": "Java",
        "lessons": [{
                "name": "Lesson 1",
                "url": "vk.com",
                "image": "https://sun9-4.userapi.com/slQd-NSY0RHZilsEIj7RJdv9Kr5dejeCodMX0w/EZUG2Sw4MTg.jpg"
            },
            {
                "name": "Lesson 2",
                "url": "vk.com",
                "image": "https://sun9-4.userapi.com/slQd-NSY0RHZilsEIj7RJdv9Kr5dejeCodMX0w/EZUG2Sw4MTg.jpg"
            },
            {
                "name": "Lesson 3",
                "url": "vk.com",
                "image": "https://sun9-4.userapi.com/slQd-NSY0RHZilsEIj7RJdv9Kr5dejeCodMX0w/EZUG2Sw4MTg.jpg"
            }
        ]
    }
]

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log(`Example app at localhost`)
})

app.forza(port, () => {
    console.log(`Forza`)
})