import './Card.css'

export const Card = ({color}) => {
  return (
    <div className={`card ${color}`}>
        <h3 className='icon-tl white'>1</h3>
        <h1 className='icon-center white'>1</h1>
        <h3 className='icon-br white'>1</h3>
    </div>
  )
}
