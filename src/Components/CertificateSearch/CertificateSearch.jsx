import { useState } from 'react';
import './CertificateSearch.css';

export default function CertificateSearch() {
    const [certNumber, setCertNumber] = useState('');
    const [showCertificate, setShowCertificate] = useState(true);

    const handleSearch = () => {
        const cleaned = certNumber.trim(); // يشيل الفراغات
        if (cleaned === '12345') {
            setShowCertificate(true);
        } else {
            setShowCertificate(false);
        }
    };

    return (
        <div className="certificate-search">
            <h2>Search for Your Certificate</h2>

            <div className="search-bar">
                <img src="/Iconssrrin.svg" alt="Input Icon" className="input-icon" />
                <input
                    type="text"
                    placeholder="Type the Certification Number ........"
                    value={certNumber}
                    onChange={(e) => setCertNumber(e.target.value)}
                />
                <button className="search-button" onClick={handleSearch}>
                    <img src="/arrow-right.svg" alt="Search Icon" />
                </button>
            </div>

            {!showCertificate && certNumber && (
                <p className="not-found">No certificate found.</p>
            )}

            {showCertificate && (
                <div className="certificate-image-wrapper">
                    <img
                        src="/images/Certificate Image.png"
                        alt="Certificate"
                        className="certificate-image"
                    />
                </div>
            )}
        </div>
    );
}
