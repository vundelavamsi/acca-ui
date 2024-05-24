import React from 'react';
import Header from './components/Header';
import BecomeACCA from './components/BecomeACCA';
import WhyChooseUs from './components/WhyChooseUs';
import WhatWillYouLearn from './components/WhatWillYouLearn';
import PlacementAssistance from './components/PlacementAssistance';
import IndigoLearn from './components/IndigoLearn';

function App() {
  return (
    <div className="App">
      <Header />
      <BecomeACCA />
      <WhyChooseUs />
      <WhatWillYouLearn />
      <PlacementAssistance />
      <IndigoLearn />
    </div>
  );
}

export default App;
