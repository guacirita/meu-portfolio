import projetos from './Data'
import Title from '../Title/Title'
import './projects.styles.css'

function Projects(){
    return(
        <>
            <div className='principal'>
                <Title info='Quatro projetos no Pretalab' />
                {projetos.map(item => {
                    return(
                        <div key={item.id}>
                            <h2>{item.nome}</h2>
                            <p>{item.descricao}</p>
                            <img src={item.imagem} />
                            <a href={item.link}></a>
                        </div>
                    )
        
                })}
            </div>
        </>
    )
}

export default Projects