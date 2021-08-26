import React, { useEffect } from 'react';

import Header from '../components/Header';

const App = ({ greeting }: { greeting: string }) => {

  useEffect(() => console.log(`${greeting} ${App.name}`));

  return (
    <div className="container">
      <Header greeting={greeting} />
    </div>
  );
}

export default App;
