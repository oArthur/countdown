import '../styles/components/containerdaysleft.scss'

const ContainerDaysLeft = (props) => {
    return(
        <div className='container'>
            <div className="calendar">
                <div className="top-calendar">
                    <h2>Days Left</h2>
                </div>
                <h2 id='dias'>{props.dias || "?!"}</h2>
            </div>
        </div>
    )
}

export default ContainerDaysLeft