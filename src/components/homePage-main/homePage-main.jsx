import "./homePage-main.css"
import { useRef } from "react";

function HomePageMain ({serverData, setSelectedCertificate}) {
    const dropdownRef = useRef(null);
    const handleSelect = (data) => {
        setSelectedCertificate(data);
        if (dropdownRef.current) {
            dropdownRef.current.style.display = 'none';
        }
    };

    const toggleDropdown = () => {
        if (dropdownRef.current) {
            dropdownRef.current.style.display = dropdownRef.current.style.display === 'block' ? 'none' : 'block';
        }
    };

    return (
        <main>
            <div className="dropdown">
                <button className="dropbtn" onClick={toggleDropdown}>Выберите сертификат:</button>
                <div className="dropdown-content" ref={dropdownRef}>
                {serverData.data && serverData.data.map((data) => {
                    return <span key={data.ID} onClick={() => handleSelect(data)}>{data.NAME}</span>
                })}
                </div>
            </div>
        </main>
    );
}

export default HomePageMain;
