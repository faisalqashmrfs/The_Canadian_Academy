import { useEffect, useState } from 'react'
import './RealExperiences.css'

export default function RealExperiences() {

    const [buttons , setbuttons] = useState(0)

    const [widthscreen, setWidthscreen] = useState(window.innerWidth);
  const [widtharia, setWidtharia] = useState(60);

  const handleResize = () => {
    setWidthscreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(widthscreen);
    if (widthscreen <= 555) {
      setWidtharia(99);
    } else if(widthscreen <= 774)
    {
      setWidtharia(89);
    }
    else {
      setWidtharia(60); 
    }
  }, [widthscreen]);



    useEffect((widthscreen) => {
        console.log(widthscreen);
    } , [widthscreen])

    const x = "Studying at The Canadian Academy was one of the best experiences I’ve ever had. The teachers were so kind and professional—they really pushed me to improve. I became much more confident speaking English, and now I can easily communicate with people from all around the world. Thank you for helping me reach this level!"
    const x1 = "When I first came here, I could barely speak English. But step by step, my teachers helped me a lot. The classes were fun and full of activities, so I was never bored! I learned new words every day, and now I can talk with confidence. I’m really proud of myself and thankful to my teachers."
    const x2 = "My journey at The Canadian Academy was amazing! I met people from many countries, and we became like a family. The teachers always encouraged me to speak and practice more, and that helped me improve fast. I’ll never forget the good memories we made here!"
    const x3= "This was my first time studying abroad, and I was nervous at the beginning. But everyone here made me feel comfortable. I learned a lot in a short time, and now I understand English much better. The atmosphere was friendly, and I really enjoyed every class."
    const x4 = "I had such a wonderful time learning at The Canadian Academy! The lessons were creative and full of energy. I especially liked the speaking sessions and games that made learning so enjoyable. I improved my English and made great friends from different countries. Thank you for everything!"
  return (
    <section className='RealExperiences'>
        <div className='Infoslide'>
            <h2>Real Experiences,</h2>
            <h3>Real Results</h3>
            <p>“Discover how students around the world improved their skills and achieved their goals with The Canadian Academy.</p>
            <div className='sLIDEaREA'>
                {buttons == 0 &&<h4>Hi there! I’m Will Nenghua</h4>}
                {buttons == 1 &&<h4>Hi there! I’m Najah Nur</h4>}
                {buttons == 2 &&<h4>Hi there! I’m Ali Saeed</h4>}
                {buttons == 3 &&<h4>Hi there! I’m Ophelia Zhang</h4>}
                {buttons == 4 &&<h4>Hi there! I’m Guo Yici</h4>}
                <div className='slidewindows'>
                    <p style={{transform:`translateX(-${widtharia * buttons}vw)`}}>
                    <div>{x}</div>
                    <div>{x1}</div>
                    <div>{x2}</div>
                    <div>{x3}</div>
                    <div>{x4}</div>
                    </p>
                </div>
                <div className='buttonsslide'>
                    <button className={buttons == 0 ? 'activbuttons' : 'disbuttons'} onClick={() => setbuttons(0)}></button>
                    <button className={buttons == 1 ? 'activbuttons' : 'disbuttons'} onClick={() => setbuttons(1)}></button>
                    <button className={buttons == 2 ? 'activbuttons' : 'disbuttons'} onClick={() => setbuttons(2)}></button>
                    <button className={buttons == 3 ? 'activbuttons' : 'disbuttons'} onClick={() => setbuttons(3)}></button>
                    <button className={buttons == 4 ? 'activbuttons' : 'disbuttons'} onClick={() => setbuttons(4)}></button>
                </div>
            </div>
        </div>
        <div className='StudentLife'></div>
    </section>
  )
}
