import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/homePage";
import ContactsPage  from "./pages/contactsPage"
import PaymentPage from "./pages/paymentPage"
import { fetchGetGoodList } from "./api/api"


function App() {
const [serverData, setServerData] = useState([]);
const [selectedCertificate, setSelectedCertificate] = useState('');

useEffect(() => {
  const getData = async () => {
    try{
      const data = await fetchGetGoodList();
      setServerData(data)
    } catch (error){
      console.error('Ошибка при получении данных:', error)
    }
  };
  getData();
}, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage serverData={serverData} selectedCertificate={selectedCertificate} setSelectedCertificate={setSelectedCertificate}/>}/>
      <Route path="/contacts" element={selectedCertificate !== '' ? (<ContactsPage selectedCertificate={selectedCertificate}/>) : (<Navigate to="/"/>)}/>
      <Route path="/payment" element={<PaymentPage/>}/> 
    </Routes>
  );
}

export default App;
