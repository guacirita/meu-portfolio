import Image from '../../Components/Image/eu.jpg'
import './about.styles.css'

function About(){
    return(
        <div className='bio'>
           <img className="imagem" src={Image} alt="imagem de Jacira"/> 
            <div>
                <h3>Prazer, Jacira</h3>
                    <p>Sou uma mulher em transição de carreira para a tecnologia.</p>
                    <p>Aqui você encontra um pouco dos meus projetos, eles foram desenvolvidos 
                        durante as aulas do curso da Pretalab.</p>
            </div>
        </div>
    )
}

export default About