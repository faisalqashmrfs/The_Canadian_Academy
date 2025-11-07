import CertificateSearch from '../../Components/CertificateSearch/CertificateSearch'
import Hero from '../../Components/Hero/Hero'
import './Certificate.css'

export default function Certificate() {
    return (
        <div>
            <Hero
                inrole={true}
                sing={true}
                title1="Get Your"
                title2="Certificate"
                p=""
            />

            <div className='section5'>
                <CertificateSearch />
            </div>
        </div>
    )
}
