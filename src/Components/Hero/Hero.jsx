import './Hero.css'

export default function Hero() {
    return (
        <div className='Hero'>
            <div className='Title'>
                <h1>
                    <h1>The Canadian</h1>
                    <span className='span1'></span>
                    <span className='span2'></span>
                </h1>
                <h2>Academy</h2>
                <p><span>Master Languages, Connect Globally</span> At The Canadian Academy, we make language learning simple, engaging, and tailored to your journey. Learn from expert teachers, practice real-world communication, and discover new cultures — all in one vibrant community.</p>
                <div className='Buttons'>
                    <button>Contact Us</button>
                    <button>Explore Our Courses</button>
                </div>
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
