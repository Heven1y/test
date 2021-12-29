import React from 'react'
import '../App.css'
import Glyph from './Glyph'

type PropsGame = {
    loseGame(): void
    winGame(): void
}

type GlyphGame = {
    id: number
    parts: number[]
}

const glyphsGlobal: GlyphGame[] = [{id: 1, parts: [2, 3]}, {id: 2, parts: [4, 5]}, {id: 3, parts: [6, 7]}, {id: 4, parts: []}, {id: 5, parts: []}, {id: 6, parts: []}, {id: 7, parts: []}]



const Game:React.FC<PropsGame> = props => {

    const [glyphs, setGlyphs] = React.useState<GlyphGame[]>([{id: 1, parts: [2, 3]}])

    const [inter, setInter] = React.useState<any>(null)

    const [count, setCount] = React.useState(6)

    const resultMassive: GlyphGame[] = [{id: 4, parts: []}, {id: 5, parts: []}, {id: 6, parts: []}, {id: 7, parts: []}]

     React.useEffect(() => {
        if (count < 0) {
            props.loseGame()
            clearInterval(inter)
            return
        }
    }, [count])

    const finish = () => {
        const mas1:number[] = glyphs.map(glyph => glyph.id)
        const mas2:number[] = resultMassive.map(glyph => glyph.id)
        if(mas1.sort().toString() === mas2.sort().toString()){
            props.winGame()
            clearInterval(inter)
            return
        }
        else {
            props.loseGame()
            clearInterval(inter)
            return
        }
    }

    const division = () => {
        setCount(5)
        if (inter !== null){ 
            clearInterval(inter)
            setInter(null)
        }
        setInter(setInterval(() => {
            setCount(count => count - 1)
        }, 1000))
    }

    return (
        <>
        <div className='timer'>
                {count === 6 ? 'Нажмите на глиф чтобы начать игру' : count}
            </div>
        <div className='field-game'>
            <Glyph onDivision={division} onLose={() => setCount(-5)} glyphsGlobal={glyphsGlobal} glyphs={glyphs} setGlyphs={setGlyphs}/>
        </div>
        {inter !== null ? <div className='btn-finish' onClick={finish}>Остановиться</div> : null}
        </>
    )
}

export default Game