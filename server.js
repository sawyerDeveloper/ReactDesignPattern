const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/users', (req, res) => {
  res.json(users)
})

app.get('/api/posts', (req, res) => {
  res.json(posts)
})

app.post('/api/data/', (req, res) => {

})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`))

//mock data
const posts =
  [
    {
      "_id": "5c1eaeaed94929e757897492",
      "user": "Chandra Best",
      "text": "Commodo veniam in incididunt officia. Aliqua aliqua in incididunt in officia. Qui magna culpa occaecat eu culpa do ex pariatur fugiat. Laboris anim minim pariatur culpa ad sunt deserunt. Voluptate dolor ex exercitation minim fugiat nisi. Minim culpa aliqua ut exercitation cillum anim veniam pariatur.\r\n",
      "posted": "2015-10-16T05:48:31",
      "tags": [
        "aliquip",
        "ullamco",
        "aliqua",
        "ullamco",
        "excepteur",
        "eiusmod",
        "nisi"
      ]
    },
    {
      "_id": "5c1eaeaeb38b1c2c6c8c9ee7",
      "user": "Anna Burris",
      "text": "Ex veniam consequat pariatur laboris. Fugiat incididunt excepteur mollit sint voluptate laboris. Exercitation irure quis ullamco reprehenderit sint proident consequat elit. Elit deserunt sit consectetur adipisicing dolor tempor aute sint ad commodo id. Excepteur minim velit occaecat laboris mollit ipsum cillum sint sint velit duis Lorem. Et est pariatur in in laborum sit in.\r\n",
      "posted": "2016-01-27T10:55:10",
      "tags": [
        "incididunt",
        "commodo",
        "deserunt",
        "nisi",
        "eiusmod",
        "exercitation",
        "ad"
      ]
    },
    {
      "_id": "5c1eaeae405ab6e27b5dd1f6",
      "user": "Wiggins Dejesus",
      "text": "Consectetur ea aute consequat do sit amet dolor ipsum culpa eiusmod aliqua dolore. Aute minim minim id dolore et. Ullamco commodo commodo do tempor cupidatat aute voluptate adipisicing deserunt veniam ea. Ex irure veniam proident ex eiusmod sunt anim. Aliquip enim pariatur exercitation sit laboris nisi ut aliqua cillum.\r\n",
      "posted": "2016-08-03T11:58:38",
      "tags": [
        "ea",
        "aliquip",
        "ad",
        "nulla",
        "reprehenderit",
        "officia",
        "voluptate"
      ]
    },
    {
      "_id": "5c1eaeae77f3432cd28264d2",
      "user": "Galloway Goff",
      "text": "Ullamco ad et irure et sunt consequat Lorem consectetur do Lorem. Amet proident ea reprehenderit magna eu. Amet amet duis elit cillum aliqua laborum quis elit in laboris. Consectetur nostrud sit mollit fugiat tempor nisi nulla irure ullamco ex ea. Duis magna aliqua duis ut tempor elit reprehenderit commodo. Ex deserunt fugiat mollit incididunt nisi ipsum ad enim enim.\r\n",
      "posted": "2017-04-12T12:25:44",
      "tags": [
        "elit",
        "incididunt",
        "voluptate",
        "et",
        "velit",
        "dolor",
        "enim"
      ]
    },
    {
      "_id": "5c1eaeae6479f94ca67b9fdd",
      "user": "Sharon Kent",
      "text": "Velit consequat ut mollit aute elit elit id cillum cupidatat. Ad proident ipsum ad ad ullamco officia eu nulla do ea officia. Mollit proident anim amet elit aliqua consectetur magna ut Lorem id ex.\r\n",
      "posted": "2017-02-09T04:59:35",
      "tags": [
        "qui",
        "veniam",
        "sint",
        "est",
        "nulla",
        "qui",
        "dolore"
      ]
    },
    {
      "_id": "5c1eaeae9167a0bd7a342d2a",
      "user": "Ina Montgomery",
      "text": "Qui eu excepteur sint sit dolor. Ex aliquip excepteur est incididunt magna sint ex excepteur. Voluptate ut adipisicing do cupidatat consectetur irure nulla fugiat qui Lorem. Aute pariatur adipisicing deserunt non ad cillum Lorem id deserunt fugiat laborum eiusmod.\r\n",
      "posted": "2018-03-09T07:06:29",
      "tags": [
        "adipisicing",
        "sunt",
        "amet",
        "est",
        "ut",
        "veniam",
        "cupidatat"
      ]
    },
    {
      "_id": "5c1eaeaed1017bf26c1f53bb",
      "user": "Barton Tucker",
      "text": "Culpa in id commodo ea ut ad incididunt ut anim. Aute excepteur minim ea nulla velit aliquip velit. Adipisicing nisi exercitation mollit incididunt nisi sit esse ex quis Lorem eu laboris ut eiusmod. Nisi dolor aliqua aliqua exercitation aliquip nisi officia et qui voluptate incididunt elit. Anim cillum mollit velit amet nostrud excepteur adipisicing ea ex.\r\n",
      "posted": "2016-05-31T08:30:40",
      "tags": [
        "et",
        "sit",
        "enim",
        "eiusmod",
        "nulla",
        "velit",
        "consectetur"
      ]
    },
    {
      "_id": "5c1eaeae62bd27c5cfba65bb",
      "user": "Lillie Cooley",
      "text": "Do voluptate adipisicing id non labore velit fugiat incididunt labore. Est sint aliqua ad nisi eiusmod cupidatat esse tempor cupidatat aliqua. Ipsum voluptate commodo dolore cillum elit consequat aliqua ea proident. Eu dolore qui eiusmod nostrud aliqua sunt nisi nulla ipsum eiusmod magna labore mollit.\r\n",
      "posted": "2018-06-29T09:21:49",
      "tags": [
        "velit",
        "elit",
        "adipisicing",
        "consectetur",
        "exercitation",
        "adipisicing",
        "aliqua"
      ]
    },
    {
      "_id": "5c1eaeae83888faea272d28c",
      "user": "Lawanda Gray",
      "text": "Excepteur exercitation dolore fugiat aute est velit excepteur nisi deserunt exercitation. Quis elit laboris id fugiat magna et ullamco adipisicing excepteur qui laborum laboris voluptate. Irure in consectetur nisi sint id anim elit ea sunt irure ut duis. Minim eiusmod cillum dolor nostrud mollit eu irure esse. Laboris amet ut irure excepteur incididunt laborum officia consequat. Reprehenderit cillum minim laborum irure elit reprehenderit labore anim cillum irure fugiat. Dolore deserunt dolor incididunt ea laborum ipsum dolore dolore Lorem tempor.\r\n",
      "posted": "2017-04-21T09:01:07",
      "tags": [
        "aute",
        "ea",
        "aliqua",
        "excepteur",
        "fugiat",
        "irure",
        "nulla"
      ]
    },
    {
      "_id": "5c1eaeae023273efaed84426",
      "user": "Karyn Callahan",
      "text": "Quis ea mollit nisi tempor duis nostrud non nisi pariatur sit. Ad dolor in velit id et aliquip. Officia laborum reprehenderit eu sit sit. Ex id sint velit minim duis dolore non sit deserunt sunt sint quis nostrud amet. Esse id minim tempor esse non. Consectetur adipisicing magna ullamco reprehenderit reprehenderit.\r\n",
      "posted": "2014-03-04T11:23:58",
      "tags": [
        "adipisicing",
        "aliqua",
        "esse",
        "ex",
        "esse",
        "aliqua",
        "adipisicing"
      ]
    },
    {
      "_id": "5c1eaeaecb1baa49ae3d022a",
      "user": "Francis Reed",
      "text": "Ad sunt cupidatat sit eu dolore laboris magna do consequat nisi tempor qui. Exercitation commodo Lorem sint eiusmod cillum dolore est ullamco commodo minim esse. Ut cupidatat dolore officia cillum. Incididunt cillum sit quis eiusmod in et ea incididunt magna anim amet. Amet veniam quis enim ad cupidatat velit sit ea.\r\n",
      "posted": "2016-04-10T02:03:02",
      "tags": [
        "occaecat",
        "ullamco",
        "nulla",
        "consequat",
        "laboris",
        "elit",
        "culpa"
      ]
    },
    {
      "_id": "5c1eaeaee206172775cdb547",
      "user": "Berger Reilly",
      "text": "Do laboris voluptate officia ea ea eiusmod occaecat consequat do velit laborum aliquip quis aliqua. Do consectetur esse fugiat dolore culpa dolor anim pariatur ad velit velit quis. Labore dolor occaecat ut excepteur proident do sint id dolor eiusmod magna. Aliqua commodo sunt incididunt minim. Deserunt sunt occaecat aliquip dolore laboris eiusmod nulla enim ipsum do irure deserunt. Voluptate anim Lorem veniam cupidatat exercitation id qui nostrud culpa in occaecat. Nisi laboris culpa adipisicing dolore ad.\r\n",
      "posted": "2015-02-20T09:00:36",
      "tags": [
        "dolor",
        "mollit",
        "dolor",
        "duis",
        "ex",
        "exercitation",
        "duis"
      ]
    },
    {
      "_id": "5c1eaeaecf38a370f9cde88c",
      "user": "Underwood Franks",
      "text": "Anim eiusmod eiusmod est mollit fugiat aute. Labore eu non eiusmod ex aute officia proident. Commodo consequat cupidatat voluptate est laborum aliqua dolor occaecat in consequat ullamco irure aliqua. Est velit id ea cupidatat aliquip in laborum pariatur dolore occaecat duis. Quis officia exercitation excepteur aute proident magna est pariatur consequat culpa.\r\n",
      "posted": "2016-02-01T03:55:13",
      "tags": [
        "sit",
        "in",
        "quis",
        "nostrud",
        "ullamco",
        "anim",
        "proident"
      ]
    },
    {
      "_id": "5c1eaeae8e0496baa7aec641",
      "user": "Abigail Mays",
      "text": "Voluptate reprehenderit minim in id laboris veniam tempor velit velit. Consequat laborum in exercitation magna consectetur laboris ea mollit Lorem aliquip culpa laborum quis. Aliquip officia officia nostrud id esse reprehenderit officia ea elit deserunt est in. Sit elit id esse reprehenderit tempor labore proident. Amet consectetur labore eu duis tempor in aliqua laboris ea enim elit tempor. Magna esse id sunt labore aliqua et sint voluptate in occaecat esse cupidatat culpa eiusmod.\r\n",
      "posted": "2014-01-01T06:19:58",
      "tags": [
        "nulla",
        "excepteur",
        "et",
        "laboris",
        "minim",
        "minim",
        "tempor"
      ]
    },
    {
      "_id": "5c1eaeae7b93f9302b427da0",
      "user": "Mia Stevens",
      "text": "Cillum aliqua esse voluptate ad nulla adipisicing culpa. Elit id quis sunt sit eu labore sit elit. Commodo reprehenderit in consectetur deserunt consectetur aliqua aliqua. Duis tempor deserunt minim enim nisi consequat ad officia. Eiusmod ea labore duis magna in.\r\n",
      "posted": "2017-01-11T10:41:27",
      "tags": [
        "occaecat",
        "dolore",
        "aute",
        "do",
        "fugiat",
        "amet",
        "eiusmod"
      ]
    },
    {
      "_id": "5c1eaeae8d328eb04b8cc329",
      "user": "Lea Lloyd",
      "text": "Irure nostrud sunt enim adipisicing ut. Sit nisi officia Lorem elit labore laboris culpa. Est consequat do ea eu. Laboris veniam aliquip ut aliqua reprehenderit est dolore sit exercitation duis anim culpa excepteur magna. Amet mollit voluptate do quis quis excepteur et et veniam mollit. Labore dolore cupidatat ex laborum dolore deserunt.\r\n",
      "posted": "2018-08-21T10:46:47",
      "tags": [
        "exercitation",
        "sunt",
        "dolore",
        "ad",
        "ad",
        "adipisicing",
        "anim"
      ]
    },
    {
      "_id": "5c1eaeaef1186158a887873a",
      "user": "England Hayes",
      "text": "Ex enim velit mollit ut laborum officia non fugiat anim qui. Ipsum consequat est fugiat sint. Duis irure aliqua proident proident elit sit mollit fugiat sint nisi nulla pariatur exercitation consequat. Elit dolore occaecat deserunt sint qui aute ipsum. Sunt fugiat ad culpa adipisicing cillum labore. Deserunt veniam sunt exercitation magna occaecat nulla esse nostrud exercitation qui ipsum ut ex esse. Elit nostrud eiusmod occaecat commodo duis consequat nisi sunt incididunt do irure Lorem in.\r\n",
      "posted": "2015-11-07T08:04:13",
      "tags": [
        "fugiat",
        "magna",
        "fugiat",
        "duis",
        "id",
        "labore",
        "ea"
      ]
    },
    {
      "_id": "5c1eaeaef78d100124843c51",
      "user": "Nora Byers",
      "text": "Minim ex et dolor fugiat consequat eiusmod mollit sint do dolore reprehenderit ipsum et ipsum. Sunt id ad voluptate ullamco consequat. Laborum sint consequat et commodo nulla reprehenderit excepteur ipsum. Amet occaecat consectetur deserunt cillum irure reprehenderit ut in consectetur. Ex qui laborum sunt eiusmod laboris nostrud. Incididunt nisi ipsum sint id. Fugiat amet incididunt enim officia commodo minim commodo non voluptate esse.\r\n",
      "posted": "2014-09-06T03:08:08",
      "tags": [
        "consequat",
        "elit",
        "dolor",
        "dolore",
        "non",
        "laboris",
        "culpa"
      ]
    },
    {
      "_id": "5c1eaeae6b1afc74d6475f8b",
      "user": "Mildred Warren",
      "text": "Sint consectetur exercitation culpa nulla commodo consectetur pariatur non et aliquip ex eiusmod consequat do. Occaecat fugiat in tempor velit officia do eu culpa pariatur in cupidatat nulla sit. Occaecat id deserunt cupidatat consectetur dolore fugiat. Amet voluptate est ut ipsum culpa consequat do nisi occaecat. Esse aute nostrud mollit excepteur quis anim amet quis dolor mollit labore ullamco adipisicing.\r\n",
      "posted": "2018-12-08T12:42:51",
      "tags": [
        "enim",
        "sit",
        "in",
        "nostrud",
        "esse",
        "et",
        "duis"
      ]
    },
    {
      "_id": "5c1eaeaee40bd1224960e763",
      "user": "Norma Washington",
      "text": "Sunt dolore laboris ex ullamco. Tempor fugiat culpa Lorem elit incididunt mollit tempor laborum qui deserunt do anim velit. Tempor enim quis ex excepteur labore tempor veniam magna deserunt elit. Est sit irure esse velit magna.\r\n",
      "posted": "2014-12-14T04:49:09",
      "tags": [
        "minim",
        "aute",
        "incididunt",
        "est",
        "exercitation",
        "fugiat",
        "sint"
      ]
    }
  ]
const users =
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
      "registered": "2017-08-29T09:20:25",
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
      "registered": "2016-02-21T10:20:07",
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
      "registered": "2016-11-24T05:13:02",
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
      "registered": "2016-09-11T08:53:49",
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
      "registered": "2017-06-21T12:36:44",
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
      "registered": "2016-03-24T07:46:02",
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
