import { Link } from 'react-router-dom'
import './RightCourse.css'

export default function RightCourse({ btn, englesh }) {
    return (
        <section className='RightCourse'>
            {btn && <h2 className='Title'>Discover the Right Course for You</h2>}
            {btn && <p className='Discription'>Each course is a doorway to new cultures, opportunities, and global connections. <span>Start your journey today.</span></p>}
            <div className='CardsContainer'>
                {englesh.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={`/${card.image}`} alt="" />
                        <div className='bodyCard'>
                            <div className='TitleCard'>
                                <h3 className='subTitle'>{card.title}</h3>
                                {/* <div className='SpansInfo'><span>{card.span1}</span><span>{card.span2}</span></div> */}
                            </div>
                            <p className='discrip'>{card.description}</p>
                            <div className='Buttonss'>
                                <Link to={`/Inroll/${card.id}`}><button className='Inrorll'>Enroll Now</button></Link>
                                <Link to={`/course-details/${(card.id)}`}><button className='SeeNow' style={{ backgroundColor: "black" }}>See More <img src="/arrow-right.svg" alt="" /></button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/Courses">
                {btn && <button className='ExploreMoreCourses'>{btn}</button>}
            </Link>
        </section>
    )
}
