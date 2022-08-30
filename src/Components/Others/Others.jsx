import { useState, useEffect } from 'react'
import Title from '../Title/Title'
import './others.styles.css'

function Others(){
    const [repositorios, setRepositorios] = useState ([])

    useEffect(() => {
       async function getData(){
            const response = await fetch('https://api.github.com/users/guacirita/repos')
            const data = await response.json()
            
            setRepositorios(data)
        }

        getData()    
    }, [])

    return(
        <>
            <div className='repo'>
                <Title info='Outro projetos no GitHub' />
                {repositorios.map(item => {
                    return (
                        <div>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <a href={item.html_url}>Ver repo</a>
                    </div>

                )
                })}
            </div>
        </>
    )
}

export default Others