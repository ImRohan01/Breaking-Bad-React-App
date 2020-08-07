import React, {useState} from 'react'

function Search( {getQuery}) {
    const [text,setText] = useState('')

    function onChange(q){
        setText(q)
        getQuery(q)
    }
    return (
        <section className="search">
            <form>
                <input
                    type='text'
                    className='form-control'
                    placeholder="Search Characters"
                    value={text}
                    onChange={(e)=>{onChange(e.target.value)}}
                    autoFocus></input>
            </form>
        </section>
    )
}

export default Search
