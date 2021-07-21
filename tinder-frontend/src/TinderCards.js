import { SwipeableDrawer } from "@material-ui/core"
import { useState } from "react"
import TinderCard from "react-tinder-card"
import './TinderCards.css'

const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: 'Emily Ratajkowski',
            url: 'https://www.mensjournal.com/wp-content/uploads/mf/_main_emily2.jpg?quality=86&strip=all',
        },
        {
            name: 'Megan Fox',
            url: 'https://www.hellomagazine.com/imagenes/celebrities/20210714117519/megan-fox-jaw-dropping-must-see-pictures/0-569-69/megan-fox-shower-selfie-z.jpg',
        },
        {
            name: 'Kendall Jenner',
            url: 'https://styles.redditmedia.com/t5_2swnp/styles/communityIcon_wfreylpcyp461.jpg',
        },
        {
            name: 'Bella Hadid',
            url: 'https://www.beautycrew.com.au/media/39620/bella.jpg'
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
