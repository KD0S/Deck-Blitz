import { useState } from 'react'
import { Card } from '../../Components/Card/Card'
import './Main.css'

const Main = () => {
    const cards = ['r1', 'r2', 'g1', 'b2', 'y4', 'g3', 'g6', 'g9',
        'g8', 'b4', 'b5', 'b9', 'r2', 'g1', 'b2', 'y4', 'g3', 'b2']

    const [currIdx, setCurrIdx] = useState(0)

    const handleRight = () => {
        setCurrIdx((currIdx + 1) % cards.length)
    }

    const handleLeft = () => {
        if (currIdx === 0) setCurrIdx(0)
        else setCurrIdx(currIdx - 1)
    }

    return (
        <div className='main'>
            <div className='player-ui'>
                <button onClick={handleLeft}>L</button>
                <div className='cards-wrapper'>
                    <div className='cards-container'>
                        {cards.slice(currIdx, currIdx + 10).map((item, index) => (
                            <Card key={index} card={item}>
                            </Card>
                        ))}
                    </div>
                </div>
                <button onClick={handleRight}>R</button>
            </div>
        </div>
    )
}

export default Main