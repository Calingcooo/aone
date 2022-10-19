import { BrowserRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { Helmet } from 'react-helmet'



function App() {
  return (
    <>
    <Helmet>
      {/*Primary Meta Tags*/}
      <title>Aone</title>
      <meta name="title" content="Aone" />
      <meta name="description" content="Makati City Subway, Inc., a wholly-owned subsidiary of Philippine Infradev Holdings, Inc., is developing the company's first infrastructure project: an intracity subway system in Makati City. At least eight stations will be included in the 8-kilometer dual rail subway system. Complementing the subway system are transit-oriented developments (TOD’s) to support the operation." />

      {/*Open Graph / Facebook*/}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.aone.com.ph/" />
      <meta property="og:title" content="Aone" />
      <meta property="og:description" content="Makati City Subway, Inc., a wholly-owned subsidiary of Philippine Infradev Holdings, Inc., is developing the company's first infrastructure project: an intracity subway system in Makati City. At least eight stations will be included in the 8-kilometer dual rail subway system. Complementing the subway system are transit-oriented developments (TOD’s) to support the operation." />
      <meta property="og:image" content="" />

      {/*Twitter*/}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.aone.com.ph/" />
      <meta property="twitter:title" content="Aone" />
      <meta property="twitter:description" content="Makati City Subway, Inc., a wholly-owned subsidiary of Philippine Infradev Holdings, Inc., is developing the company's first infrastructure project: an intracity subway system in Makati City. At least eight stations will be included in the 8-kilometer dual rail subway system. Complementing the subway system are transit-oriented developments (TOD’s) to support the operation." />
      <meta property="twitter:image" content="" />
    </Helmet>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/About-the-project" element={ <About /> }></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
