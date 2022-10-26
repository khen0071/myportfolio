import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import HomeScreen from './screens/HomeScreen';
import Certificates from './components/Certificates';

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/certificates' element={<Certificates />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default App;
