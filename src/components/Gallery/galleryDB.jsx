import dhnJn from '../../assets/dhn_jn.jpg'
import sslnt from '../../assets/sslnt.jpg'
import pkRoy from '../../assets/pkRoy.webp'
import GNCollege from '../../assets/gnCollege.jpg'
import Library from '../../assets/library.jpg'

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
                name:'SSLNT College',
                distance:'1.3',
                image:`${sslnt}`
            },
            {
            name:'P K Roy College',
            distance:'2.4',
            image:`${pkRoy}`
            },
            {
            name:'Guru Nanak College',
            distance:'3.8',
            image:`${GNCollege}`
            },
            {
            name:'State Library',
            distance:'0.5',
            image:`${Library}`
            }
        ]
    },
    ]

    export default places