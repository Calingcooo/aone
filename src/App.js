import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLoading from './components/PageLoading'
import { Helmet } from 'react-helmet'

const LazyAbout = lazy(() => import('./pages/About'))
const LazyHome = lazy(() => import('./pages/Home'))


function App() {
  return (
    <div>
    <Helmet>
      {/*Primary Meta Tags*/}
      <meta name="description" content="Makati City Subway, Inc., a wholly-owned subsidiary of Philippine Infradev Holdings, Inc., is developing the company's first infrastructure project: an intracity subway system in Makati City. At least eight stations will be included in the 8-kilometer dual rail subway system. Complementing the subway system are transit-oriented developments (TOD’s) to support the operation." />

      {/*Open Graph / Facebook*/}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.aone.com.ph/" />
      <meta property="og:title" content="AOne" />
      <meta property="og:description" content="Makati City Subway, Inc., a wholly-owned subsidiary of Philippine Infradev Holdings, Inc., is developing the company's first infrastructure project: an intracity subway system in Makati City. At least eight stations will be included in the 8-kilometer dual rail subway system. Complementing the subway system are transit-oriented developments (TOD’s) to support the operation." />
      <meta property="og:image" content="https://ik.imagekit.io/vah26qifw/Home_9HVbr17sV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666213134522" />

      {/*Twitter*/}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.aone.com.ph/" />
      <meta property="twitter:title" content="AOne" />
      <meta property="twitter:description" content="Makati City Subway, Inc., a wholly-owned subsidiary of Philippine Infradev Holdings, Inc., is developing the company's first infrastructure project: an intracity subway system in Makati City. At least eight stations will be included in the 8-kilometer dual rail subway system. Complementing the subway system are transit-oriented developments (TOD’s) to support the operation." />
      <meta property="twitter:image" content="https://ik.imagekit.io/vah26qifw/Home_9HVbr17sV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666213134522" />
    </Helmet>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<PageLoading/>}>
              <LazyHome /> 
            </Suspense>
          }></Route>
          <Route path="/About-the-project" element={ 
            <Suspense fallback={<PageLoading/>}>
              <LazyAbout /> 
            </Suspense>
          }></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
