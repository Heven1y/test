import React from 'react'
import '../App.css'

type Props = {
    onClick(): void
}

const ButtonStart:React.FC<Props> = props => {
    return (
        <div className='btn-start' onClick={props.onClick}>
            Начать игру
        </div>
    )
}

export default ButtonStart