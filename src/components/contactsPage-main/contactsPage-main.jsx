import "./contactsPage-main.css";
import { useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import InputMask from 'react-input-mask';

import { fetchOSSale } from '../../api/api';


function ContactsPageMain({ selectedCertificate }) {  
  const initialFormData = {
    "ApiKey": "011ba11bdcad4fa396660c2ec447ef14",
    "MethodName": "OSSale",  
    "Id": selectedCertificate.ID,
    "TableName": selectedCertificate.TABLENAME,
    "PrimaryKey": selectedCertificate.PRIMARYKEY,
    "Price": selectedCertificate.PRICE,
    "Summa": selectedCertificate.SUMMA,
    "PaymentTypeId": '2',
    "UseDelivery": '0',
    "DeliveryAddress": '',
    "IsGift": '0',
    "ClientName": '', 
    "Phone": '', 
    "Email": '', 
    "MsgText": '',
    "PName": '',
    "PPhone": '',
    "Data": {
      "CertNumber": selectedCertificate.ID
    }
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false); 

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    
    setFormData((prevData) => ({
      ...prevData,
      [inputName]: inputValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      await fetchOSSale(formData);
      setFormData(initialFormData);
      setSubmitted(true); 
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

  if (submitted) {
    return <Navigate to="/payment"/>; 
  }

  return (
    <main>
      <form onSubmit={handleSubmit}> 
        <div className="contact-form">
          <h1 className="form-text">Сертификат на {selectedCertificate.PRICE - (selectedCertificate.PRICE * selectedCertificate.DISCOUNT) / 100}₽</h1>
          <div className="input-group">
            <label className="label-text" htmlFor="name">ФИО:</label>
            <input 
              type="text" 
              id="name" 
              name="ClientName" 
              onChange={handleInputChange} 
              value={formData.ClientName}
              required 
            />
          </div>
          <div className="input-group">
            <label className="label-text" htmlFor="tel">Телефон:</label>
            <InputMask 
              mask="+7 (999) 999-9999" 
              id="tel" 
              name="Phone" 
              onChange={handleInputChange} 
              value={formData.Phone}
              required 
            />
          </div>
          <div className="input-group">
            <label className="label-text" htmlFor="message">Сообщение:</label>
            <textarea 
              id="message" 
              name="MsgText" 
              rows="4" 
              onChange={handleInputChange} 
              value={formData.MsgText} 
              required>
            </textarea>
          </div>
          <div className="input-group">
            <label className="label-text" htmlFor="email">Почта:</label>
            <input 
              type="email" 
              id="email" 
              name="Email" 
              onChange={handleInputChange} 
              value={formData.Email}
              required 
            />
          </div>
        </div>
        <div className="button-group">
          <Link to="/">
            <button className="button-text" type="button">Назад</button>
          </Link>
          <button className="button-text" type="submit">Перейти к оплате</button> 
        </div>
      </form>
    </main>
  );
}

export default ContactsPageMain;
