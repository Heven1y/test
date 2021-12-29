import React from 'react'
import '../App.css'

type Props = {
    styleTitle: number
}

const Title:React.FC<Props> = props => {
    if (props.styleTitle === 1) {
        return (
             <div className='container-title'>
                <div className='title-start'>Ты проиграл</div>
                <div className='title-under'>Хочешь начать заново?</div>
            </div>
        )
    }
    if (props.styleTitle === 2) {
        return (
             <div className='container-title'>
                <div className='title-start'>Ты победил! Ура!</div>
                <div className='title-under'>Хочешь начать заново?</div>
            </div>
        )
    }
    return (
        <div className='container-title'>
            <div className='title-start'>ИГРА В ИЕРОГЛИФЫ</div>
            <div className='title-under'>Чтобы начать игру нажмите на кнопку ниже</div>
        </div>
    )
}

export default Title