const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/data', (req, res) => {
  res.json(data)
})

app.post('/api/data/', (req, res) => {
  
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`))

//mock data
const data = 
    [
        {
          "_id": "5c1d6cdfcefb864dd5d220e6",
          "index": 0,
          "guid": "2e26cdb7-9a6a-4d9a-bb4c-3b9e91d1d47f",
          "isActive": true,
          "balance": "$3,373.32",
          "picture": "http://placehold.it/32x32",
          "age": 22,
          "eyeColor": "blue",
          "name": "Lillie Anderson",
          "gender": "female",
          "company": "INSOURCE",
          "email": "lillieanderson@insource.com",
          "phone": "+1 (903) 504-2966",
          "address": "212 Strong Place, Gerton, Georgia, 7831",
          "about": "Est irure laboris dolor voluptate laborum nostrud. Culpa esse eu incididunt do nulla non esse amet quis tempor irure. Occaecat aliquip labore et qui nulla amet eu sint ea ullamco veniam ullamco. Cillum aliquip in ea voluptate ad pariatur aute ex. Velit ipsum ex mollit est. Labore veniam sit consectetur commodo mollit. Esse ut dolore et occaecat magna exercitation sint.\r\n",
          "registered": "2017-08-29T09:20:25 +07:00",
          "latitude": -81.105358,
          "longitude": -128.53684,
          "tags": [
            "officia",
            "ipsum",
            "amet",
            "cillum",
            "ipsum",
            "proident",
            "laborum"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Carissa Little"
            },
            {
              "id": 1,
              "name": "Patsy Puckett"
            },
            {
              "id": 2,
              "name": "Darla Dawson"
            }
          ],
          "greeting": "Hello, Lillie Anderson! You have 9 unread messages.",
          "favoriteFruit": "apple"
        },
        {
          "_id": "5c1d6cdf0167e8d2af0574f2",
          "index": 1,
          "guid": "b2d39898-8c5d-4c59-a8f5-7db87d089ad2",
          "isActive": false,
          "balance": "$2,707.81",
          "picture": "http://placehold.it/32x32",
          "age": 34,
          "eyeColor": "blue",
          "name": "Hancock Carter",
          "gender": "male",
          "company": "UXMOX",
          "email": "hancockcarter@uxmox.com",
          "phone": "+1 (941) 549-3275",
          "address": "972 Farragut Road, Derwood, Maryland, 9526",
          "about": "Non pariatur dolore culpa est pariatur. Esse aliqua nulla magna consectetur cupidatat occaecat nostrud ex. Pariatur exercitation sit commodo nisi commodo consectetur occaecat.\r\n",
          "registered": "2016-02-21T10:20:07 +08:00",
          "latitude": -41.09211,
          "longitude": -114.798589,
          "tags": [
            "sit",
            "ad",
            "est",
            "laboris",
            "consectetur",
            "ex",
            "eiusmod"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Rebekah Williams"
            },
            {
              "id": 1,
              "name": "Snider Head"
            },
            {
              "id": 2,
              "name": "Villarreal Pitts"
            }
          ],
          "greeting": "Hello, Hancock Carter! You have 3 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "5c1d6cdfe232904e06d463f5",
          "index": 2,
          "guid": "14ed0ccc-7756-4e64-8b69-7c9dd00e451b",
          "isActive": false,
          "balance": "$1,250.57",
          "picture": "http://placehold.it/32x32",
          "age": 38,
          "eyeColor": "blue",
          "name": "Leta Stokes",
          "gender": "female",
          "company": "PLUTORQUE",
          "email": "letastokes@plutorque.com",
          "phone": "+1 (854) 592-3413",
          "address": "289 Monroe Street, Winesburg, Nebraska, 8529",
          "about": "Excepteur laboris dolor adipisicing non veniam consectetur duis enim irure enim ullamco nisi laborum. Exercitation consequat reprehenderit proident commodo incididunt reprehenderit. Esse laboris veniam laborum sit quis et nisi anim enim ipsum. Est aute eiusmod aute aliquip aute non velit aliqua ea esse cillum. Eu id adipisicing nisi aliquip culpa adipisicing elit ullamco in. Magna nostrud amet eu proident labore cupidatat deserunt aute elit.\r\n",
          "registered": "2016-11-24T05:13:02 +08:00",
          "latitude": 37.295375,
          "longitude": 179.257216,
          "tags": [
            "ut",
            "id",
            "nisi",
            "amet",
            "do",
            "qui",
            "aute"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Dixie Banks"
            },
            {
              "id": 1,
              "name": "Patrick Hudson"
            },
            {
              "id": 2,
              "name": "Patty Burton"
            }
          ],
          "greeting": "Hello, Leta Stokes! You have 4 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5c1d6cdfa90cad3680ff9f75",
          "index": 3,
          "guid": "6e32d8da-34a8-4055-99a9-118ebd2f773f",
          "isActive": true,
          "balance": "$2,632.36",
          "picture": "http://placehold.it/32x32",
          "age": 37,
          "eyeColor": "green",
          "name": "Carole Garcia",
          "gender": "female",
          "company": "PATHWAYS",
          "email": "carolegarcia@pathways.com",
          "phone": "+1 (927) 534-2769",
          "address": "900 Norwood Avenue, Rosburg, Indiana, 4452",
          "about": "Dolor deserunt tempor Lorem incididunt culpa in esse laboris dolore minim non. Ut proident reprehenderit ut quis cillum eu minim labore dolor nostrud eiusmod. Esse exercitation fugiat eu et ullamco dolore laboris cupidatat est laborum. Esse id consectetur nostrud id dolor incididunt commodo reprehenderit tempor pariatur nostrud adipisicing aliqua est. Amet elit voluptate aliquip irure non mollit commodo in sit consectetur. Qui sit et amet officia. Ex labore ut consequat elit cillum.\r\n",
          "registered": "2016-09-11T08:53:49 +07:00",
          "latitude": -38.15035,
          "longitude": 129.03254,
          "tags": [
            "non",
            "commodo",
            "do",
            "nostrud",
            "Lorem",
            "amet",
            "sit"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Kent Best"
            },
            {
              "id": 1,
              "name": "Sophie Park"
            },
            {
              "id": 2,
              "name": "Marva Owens"
            }
          ],
          "greeting": "Hello, Carole Garcia! You have 7 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5c1d6cdf38e2593fe2764396",
          "index": 4,
          "guid": "132d9bfc-2e4f-43ab-bb21-5f15e342c626",
          "isActive": true,
          "balance": "$3,259.52",
          "picture": "http://placehold.it/32x32",
          "age": 21,
          "eyeColor": "blue",
          "name": "Wynn Downs",
          "gender": "male",
          "company": "POLARAX",
          "email": "wynndowns@polarax.com",
          "phone": "+1 (909) 401-2555",
          "address": "646 Porter Avenue, Chaparrito, North Dakota, 8083",
          "about": "Esse eu tempor adipisicing aliquip commodo commodo aliquip esse laborum veniam veniam deserunt dolor. Deserunt Lorem ipsum in officia magna ex voluptate ut pariatur proident. Ad qui et ex nostrud incididunt consectetur ad non cupidatat et.\r\n",
          "registered": "2017-06-21T12:36:44 +07:00",
          "latitude": -22.116258,
          "longitude": -130.71731,
          "tags": [
            "culpa",
            "irure",
            "aliqua",
            "et",
            "aliqua",
            "culpa",
            "commodo"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Jillian Landry"
            },
            {
              "id": 1,
              "name": "Massey Tran"
            },
            {
              "id": 2,
              "name": "Sonja Hays"
            }
          ],
          "greeting": "Hello, Wynn Downs! You have 5 unread messages.",
          "favoriteFruit": "apple"
        },
        {
          "_id": "5c1d6cdf542578601bedadbf",
          "index": 5,
          "guid": "98571441-9775-4786-abf4-ad3ee0fa16cc",
          "isActive": true,
          "balance": "$1,976.85",
          "picture": "http://placehold.it/32x32",
          "age": 25,
          "eyeColor": "brown",
          "name": "Foster Roman",
          "gender": "male",
          "company": "STRALUM",
          "email": "fosterroman@stralum.com",
          "phone": "+1 (816) 418-2945",
          "address": "581 Oxford Walk, Starks, Washington, 3676",
          "about": "Aliquip ut incididunt mollit eiusmod incididunt. Ut labore mollit eiusmod laborum veniam incididunt dolor anim et tempor enim eu. Lorem non elit consequat do dolore fugiat anim dolor proident mollit excepteur est ad cupidatat. Voluptate labore minim duis amet esse occaecat duis.\r\n",
          "registered": "2016-03-24T07:46:02 +07:00",
          "latitude": -33.373196,
          "longitude": 16.425104,
          "tags": [
            "pariatur",
            "fugiat",
            "proident",
            "do",
            "pariatur",
            "esse",
            "commodo"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Parker Wood"
            },
            {
              "id": 1,
              "name": "Wilson Peters"
            },
            {
              "id": 2,
              "name": "Bryan Fisher"
            }
          ],
          "greeting": "Hello, Foster Roman! You have 6 unread messages.",
          "favoriteFruit": "apple"
        }
      ]
    