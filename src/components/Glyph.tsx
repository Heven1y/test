import React from "react";
import '../App.css'

type GlyphGame = {
    id: number
    parts: number[]
}

type Props = {
    onDivision(): void,
    onLose(): void,
    glyphsGlobal: GlyphGame[],
    glyphs: GlyphGame[],
    setGlyphs(glyphs: GlyphGame[]): void

}

const Glyph:React.FC<Props> = props => {

    const chooseGlyph = (id: number) => {
        const findGlyph:GlyphGame | undefined = props.glyphs.find((glyph) => glyph.id === id)
        console.log(findGlyph);
        
        if (findGlyph && findGlyph.parts.length > 0) {
            props.onDivision()
            const resultParts: GlyphGame[] = props.glyphs.filter(glyph => glyph.id !== findGlyph.id)
            findGlyph.parts.forEach(part => {
                const resultFind = props.glyphsGlobal.find(glyph => glyph.id === part)
                console.log(resultFind);
                if (resultFind) {
                    resultParts.push(resultFind)
                }
            })
            props.setGlyphs(resultParts)
            return
        }
        props.onLose()

    }

    return (
        <>
        {props.glyphs.map((glyph) => {
            const scale = 1 - (props.glyphs.length + 2)  / 10
            return (
                <div className="container-glyph" onClick={() => chooseGlyph(glyph.id)} style={{transform: `scale(${scale})`}}>
                    {glyph.id}
                </div>
            )
        })}
        </>
    )
}

export default Glyph