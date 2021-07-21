import { SwipeableDrawer } from "@material-ui/core"
import { useState } from "react"
import TinderCard from "react-tinder-card"
import './TinderCards.css'

const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg',
        },
        {
            name: 'Jeff Bezos',
            url: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D509%26cropX2%3D1763%26cropY1%3D185%26cropY2%3D1440',
        }

    ])

    const swiped = (direction, nameToDelete) => {
        console.log(`removing: ${nameToDelete}`)
        // setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(`${name} left the screen`)
    }

    return (
        <div className='tinder__cards'>
            <div className='tinder__cards__container'>
                {people.map((person) => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up','down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={
                                {backgroundImage: `url(${person.url})`}
                            }
                            className='card'
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>  
        </div>
    )
}

export default TinderCards
