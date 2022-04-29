import React, {useState} from 'react';
import { cardList } from './cardList';
import '../skils/Skills.css';
import './Portfolio.css';

let selectedIndex = 0;
let cardN = 0;

export default function PortfolioComp(){

    const [carousel, setCarousel] = useState({transform:''})
    const [numCard, setNumCard] = useState(0)

    const effects = {
        animation: '1.0s ease-out 0s 1 slideInFromRight forwards'
    }
    
    let cellCount = 6;
    let screenW = window.innerWidth;
    

    const handlePrevButton = () => {
        selectedIndex --;
        let angle = selectedIndex / cellCount * -360;
        
        setCarousel({ transform:`translateZ(${screenW > 900 ? ('-173px'):('-86.6px')}) rotateY( ${angle}deg)`})
        cardN = (selectedIndex - (6 * (Math.trunc(selectedIndex/6)))) 

        setCard(cardN)
    }

    const handleNextButton = () => {
        selectedIndex ++;
        let angle = selectedIndex / cellCount * -360;

        setCarousel({ transform:`translateZ(${screenW > 900 ? ('-173px'):('-86.6px')}) rotateY( ${angle}deg)`})
        cardN = (selectedIndex - (6 * (Math.trunc(selectedIndex/6)))) 

        setCard(cardN)
    }

    const setCard = (n: number) => {
        if(n < 0){
            const num = 6 + cardN;
            setNumCard(num);
        }else{
            setNumCard(n);
        }
    }
    
    const card = cardList[numCard]

    return(
        <div className='skills-container'>
            <div className='clip-skill' style={effects} />
            <div className='skills-subcontainer'>
                <h1 className="title-skills" >Portfolio </h1>
                <div className='back' />
                <div className='portfolio-container'>
                    <div className='card-info'>
                        <h2>{card.name}</h2>
                        <p>{card.description}</p>
                        <a href={card.github}> Wach the code on Github</a>
                    </div>
                    <div className="portfolio-subcontainer">
                        <div className="scene">
                            <div className="carousel" style={carousel}>
                                {cardList.map((card)=> {
                                    return(
                                        <div className="carousel__cell"  key={cardList.indexOf(card)}>
                                            <div className="carousel__img"   style={{background: `url(${card.img})  no-repeat center top/100%`}}></div>
                                            <a href={card.link}>Go to {card.name}</a>
                                            
                                        </div>
                                    )})}
                            </div>
                        </div>
                        <div className='buttons'>
                            <button  onClick={handlePrevButton} >Previous</button>
                            <button  onClick={handleNextButton} >Next</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}