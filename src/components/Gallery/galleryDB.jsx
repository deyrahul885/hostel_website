import dhnJn from '../../assets/dhn_jn.jpg'
import sslnt from '../../assets/sslnt.jpg'
import pkRoy from '../../assets/pkRoy.webp'
import GNCollege from '../../assets/gnCollege.jpg'
import Birsa from '../../assets/birsaPark.jpg'
import BekarBand from '../../assets/bekarband.jpg'
import GolfGround from '../../assets/golfGround.jpg'

const places =[
    {
    type:'Railway Station',
    details:[{
                name:'Dhanbad Railway Station',
                distance:'1',
                image:`${dhnJn}`
                }]
    },
    {
    type:'College And Library',
    details:[
            {
                name:'SSLNT college',
                distance:'1',
                image:`${sslnt}`
            },
            {
            name:'P K Roy College',
            distance:'1.5',
            image:`${pkRoy}`
            },
            {
            name:'Guru Nanak College',
            distance:'3',
            image:`${GNCollege}`
            }
        ]
    },
    {
    type:'Parks And Entertainment',
    details:[
            {
                name:'Birsa Munda Park',
                distance:'3',
                image:`${Birsa}`
            },
            {
            name:'BekarBand Park',
            distance:'1.2',
            image:`${BekarBand}`
            },
            {
            name:'Golf Gound',
            distance:'0.5',
            image:`${GolfGround}`
            }
        ]
    },
    ]

    export default places