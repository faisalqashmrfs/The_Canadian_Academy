import { Link } from 'react-router-dom'
import './RightCourse.css'

export default function RightCourse({btn}) {
    return (
        <section className='RightCourse'>
            {btn && <h2 className='Title'>Discover the Right Course for You</h2>}
            {btn && <p className='Discription'>Each course is a doorway to new cultures, opportunities, and global connections. <span>Start your journey today.</span></p>}
            <div className='CardsContainer'>
                <div className="card">
                    <img src="/Courses.png" alt="" />
                    <div className='bodyCard'>
                        <div className='TitleCard'>
                            <h3 className='subTitle'>English For Kids</h3>
                            <div className='SpansInfo'><span>Flexibility in timing</span><span>7–14 years</span></div>
                        </div>
                        <p className='discrip'>At The Canadian Academy, we make learning English an exciting adventure for children aged 7–14. Our English for Kids program combines fun, interactive activities with effective teaching methods, helping ...</p>
                        <div className='Buttonss'>
                            <Link to={"/Inroll"}><button className='Inrorll'>Enroll Now</button></Link>
                            <Link to={"/Courses"}><button className='SeeNow'style={{backgroundColor : "black"}}>See More</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="/Courses.png" alt="" />
                    <div className='bodyCard'>
                        <div className='TitleCard'>
                            <h3 className='subTitle'>English For Kids</h3>
                            <div className='SpansInfo'><span>Flexibility in timing</span><span>7–14 years</span></div>
                        </div>
                        <p className='discrip'>At The Canadian Academy, we make learning English an exciting adventure for children aged 7–14. Our English for Kids program combines fun, interactive activities with effective teaching methods, helping ...</p>
                        <div className='Buttonss'>
                            <Link to={"/Inroll"}><button className='Inrorll'>Enroll Now</button></Link>
                            <Link to={"/Courses"}><button className='SeeNow'style={{backgroundColor : "black"}}>See More</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="/Courses.png" alt="" />
                    <div className='bodyCard'>
                        <div className='TitleCard'>
                            <h3 className='subTitle'>English For Kids</h3>
                            <div className='SpansInfo'><span>Flexibility in timing</span><span>7–14 years</span></div>
                        </div>
                        <p className='discrip'>At The Canadian Academy, we make learning English an exciting adventure for children aged 7–14. Our English for Kids program combines fun, interactive activities with effective teaching methods, helping ...</p>
                        <div className='Buttonss'>
                            <Link to={"/Inroll"}><button className='Inrorll'>Enroll Now</button></Link>
                            <Link to={"/Courses"}><button className='SeeNow'style={{backgroundColor : "black"}}>See More</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="/Courses.png" alt="" />
                    <div className='bodyCard'>
                        <div className='TitleCard'>
                            <h3 className='subTitle'>English For Kids</h3>
                            <div className='SpansInfo'><span>Flexibility in timing</span><span>7–14 years</span></div>
                        </div>
                        <p className='discrip'>At The Canadian Academy, we make learning English an exciting adventure for children aged 7–14. Our English for Kids program combines fun, interactive activities with effective teaching methods, helping ...</p>
                        <div className='Buttonss'>
                            <Link to={"/Inroll"}><button className='Inrorll'>Enroll Now</button></Link>
                            <Link to={"/Courses"}><button className='SeeNow'style={{backgroundColor : "black"}}>See More</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src="/Courses.png" alt="" />
                    <div className='bodyCard'>
                        <div className='TitleCard'>
                            <h3 className='subTitle'>English For Kids</h3>
                            <div className='SpansInfo'><span>Flexibility in timing</span><span>7–14 years</span></div>
                        </div>
                        <p className='discrip'>At The Canadian Academy, we make learning English an exciting adventure for children aged 7–14. Our English for Kids program combines fun, interactive activities with effective teaching methods, helping ...</p>
                        <div className='Buttonss'>
                            <Link to={"/Inroll"}><button className='Inrorll'>Enroll Now</button></Link>
                            <Link to={"/Courses"}><button className='SeeNow'style={{backgroundColor : "black"}}>See More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
                <Link to="/Courses">
                    {btn && <button className='ExploreMoreCourses'>{btn}</button>}
                </Link>
        </section>
    )
}
