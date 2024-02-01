import './Card.css'

export const Card = ({card}) => {
  const color = card[0] === 'r' ? 'red' : card[0] === 'g' ? 'green' :
    card[0] === 'b' ? 'blue': 'yellow'
  
  const icon = card[1]

  return (
    <div className={`card ${color}`}>
        <h3 className='icon-tl white'>{icon}</h3>
        <h1 className='icon-center white'>{icon}</h1>
        <h3 className='icon-br white'>{icon}</h3>
    </div>
  )
}
