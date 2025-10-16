import './Hero.css'

export default function Hero({title1 , title2 , span ,  p , buttom}) {
    return (
        <div className='Hero'>
            <div className='Title'>
                <h1>
                    <h1>{title1}</h1>
                    <span className='span1'></span>
                    <span className='span2'></span>
                </h1>
                <h2>{title2}</h2>
                <p><span>{span}</span>{p}</p>
                { buttom && 
                    <div className='Buttons'>
                        <button>Contact Us</button>
                        <button>Explore Our Courses</button>
                    </div>
                }
            </div>
            <div className='Contact-FolowingBox'>
                <div className='Icons'>
                    <span>x</span>
                    <span>x</span>
                    <span>x</span>
                    <span>x</span>
                    <span>x</span>
                </div>
                <p><h4>Chat With US</h4></p>
            </div>
        </div>
    )
}
