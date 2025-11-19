import { useEffect, useState } from 'react';
import './CertificateSearch.css';
import { QRCodeSVG } from 'qrcode.react';
import LogoImage from '/Logo1.png';

export default function CertificateSearch() {

    const [certNumber, setCertNumber] = useState('');
    const [certificateData, setCertificateData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const API_URL = 'https://api.thecanadianacademy.edu.my/api/certificate/';
    const [qrSize, setQrSize] = useState(206);

    const handleSearch = async () => {
        const cleanedCertNumber = certNumber.trim();
        if (!cleanedCertNumber) {
            setError('Please enter a certificate number.');
            setCertificateData(null);
            return;
        }
        setCertificateData(null);
        setError(null);
        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}${cleanedCertNumber}`);
            if (!response.ok) {
                throw new Error('Certificate not found or server error.');
            }

            const data = await response.json();
            setCertificateData(data)
            console.log(data);
            

            if (data && data.certificate_id) {
                setCertificateData(data);
            }

        } catch (err) {
            console.error('Fetch error:', err);
            setError(err.message === 'Certificate not found or server error.' ||
                err.message === 'No valid certificate data received.'
                ? 'No certificate found with this number.'
                : 'An error occurred while searching. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const fullUrl = `${API_URL}${certificateData?.id}`;
    const primaryColor = '#B88A00'; // اللون الذهبي
    const bgColor = '#FFFFFF';


    const getQrSize = (windowWidth) => {
        if (windowWidth <= 400) {
            return 45;
        }
        if (windowWidth <= 650) {
            return 50;
        }
        if (windowWidth <= 960) {
            return 70;
        }
        if (windowWidth <= 1400) {
            return 150;
        }
        // الحجم الافتراضي أو لعرض أكبر من 1400 بيكسل
        return 206; 
    };

    // useEffect للاستماع لحدث تغيير حجم الشاشة
    useEffect(() => {
        // دالة تحديث الحجم
        const handleResize = () => {
            setQrSize(getQrSize(window.innerWidth));
        };

        // تعيين الحجم الأولي عند تحميل المكون
        handleResize(); 

        // إضافة مستمع لحدث تغيير الحجم
        window.addEventListener('resize', handleResize);

        // تنظيف (Cleanup) عند إزالة المكون لمنع تسرب الذاكرة
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
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
                <button
                    className="search-button"
                    onClick={handleSearch}
                    disabled={isLoading}
                >
                    <img src="/arrow-right.svg" alt="Search Icon" />
                </button>
            </div>

            {isLoading && (
                <p className="loading-message">Searching for certificate... ⏳</p>
            )}

            {error && (
                <p className="not-found error-message">⚠️ {error}</p>
            )}
            {certificateData &&
                <div className='PhotoforCertificate'>
                    <div className='centerimages'>
                        <h2 className='titlename'>{certificateData?.name}</h2>
                        <h2 className='titlelevel'>{certificateData?.level} {certificateData?.lang}</h2>
                        <h2 className='titleDate'>Date : {certificateData.timereg?.split('T')[0]}</h2>
                        <h2 className='titleno'>Certificate No : {certificateData?.no}</h2>
                        <h2 className='titleQR'>
                            <div style={{display: 'inline-block', padding: '10px'}}>
                                <QRCodeSVG
                                    value={fullUrl}      
                                    size={qrSize}      
                                    level="H"             
                                    bgColor={bgColor}       
                                    fgColor={primaryColor}

                                    imageSettings={{
                                        src: LogoImage,         
                                        x: undefined,            
                                        y: undefined,            
                                        height: qrSize * 0.2,    
                                        width: qrSize * 0.2,     
                                        excavate: true,
                                    }}
                                />
                            </div>
                        </h2>
                    </div>
                </div>}
            {!certificateData &&
                <div className='PhotoforCertificate'>
                    <div className='centerimages'>
                        <h2 className='titlename'>Student Name</h2>
                        <h2 className='titlelevel'>LEVEL</h2>
                    </div>
                </div>}
        </div>
    );
}