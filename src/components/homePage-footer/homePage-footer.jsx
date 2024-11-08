import "./homePage-footer.css"
import { Link } from 'react-router-dom';

function HomePageFooter ({selectedCertificate}) {

    return (
        <footer> 
            {selectedCertificate && 
            <div>
                <p>Цена - {selectedCertificate.PRICE - (selectedCertificate.PRICE * selectedCertificate.DISCOUNT) / 100}₽</p>
                <Link to="/contacts">
                    <button>Купить сертификат</button>
                </Link>
            </div>}
        </footer>
    );
}

export default HomePageFooter;