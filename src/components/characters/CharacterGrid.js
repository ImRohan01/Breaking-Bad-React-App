import React from 'react'
import Spinner from '../ui/Spinner.js'
import CharacterItem from './CharacterItem.js'

//The parameters contains the props
//We can also use 'props' as the parameter, but we would have to
//Store them seperately using props.items and props.isLoading
function CharacterGrid({items,isLoading}){
    return isLoading?<Spinner />:<section className="cards">
        {items.map((item)=>(
            <CharacterItem key = {item.char_id} item={item}/>
        ))}
    </section>
}

export default CharacterGrid
