import '../styles/components/counter.scss'
const Counter = ({title, number}) =>{

    return(
        <div className='counter'>
            <p className='counter-number'>{number || "00"}</p>
            <h3 className='counter-text'>{title || "!"}</h3>
        </div>
    )
}

export default Counter;