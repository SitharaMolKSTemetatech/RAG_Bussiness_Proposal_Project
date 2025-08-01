import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Generator from './Pages/Generator';
import LoginSignUp from './Pages/LoginSignUp';
import BookDemo from './Pages/BookDemo';
import Createworkspace from './Pages/createworkspace';
import FirstPage from './Pages/FirstPage';
import CreateDocument from './Pages/CreateDocument';
import CreateLibrary from './Pages/CreateLibrary';
import ClientsPage from './Pages/ClientsPage';
import IntegrationPage from './Pages/IntegrationPage';
import SettingsPage from './Pages/SettingsPage';
import CompanySettingsPage from './Pages/CompanySettingsPage';
import UserPage from './Pages/UserPage';
import BillingPage from './Pages/BillingPage';
import FontPage from './Pages/FontPage';
import TermsAndConditions from './Pages/TermsAndConditions';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Contact from './Pages/Contact';

import TemplatesPages from './Pages/TemplatesPages';
import BlueTemplate from './Pages/BlueTemplate';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/loginsignup" element={<LoginSignUp />} />
        <Route path="/bookdemo" element={<BookDemo />} />
        <Route path="/createworkspace" element={<Createworkspace/>}/>
        <Route path="/firstpage" element={<FirstPage/>}/>
        <Route path="/createdocument" element={<CreateDocument/>}/>
        <Route path="/createlibrary" element={<CreateLibrary/>}/>
        
        <Route path="/clientspage" element={<ClientsPage/>}/>
        <Route path="/integrationpage" element={<IntegrationPage/>}/>
        <Route path="/settingspage" element={<SettingsPage/>}/>
        <Route path="/companysettingspage" element={<CompanySettingsPage/>}/>
        <Route path="/userpage" element={<UserPage/>}/>
        <Route path="/billingpage" element={<BillingPage/>}/>
        <Route path="/fontpage" element={<FontPage/>}/>
        <Route path="/termsandconditions" element={<TermsAndConditions/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/templatespages" element={<TemplatesPages/>}/>

         <Route path="/bluetemplate" element={<BlueTemplate/>}/>
        <Route path="*" element={<div style={{ color: 'white', padding: '20px' }}>404 - Page not found</div>} />
      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
