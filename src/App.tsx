import React from 'react';
import { FetchingData } from "./components/api/Api";
function App() {
  const data= FetchingData() 
  return (
    <div>
     Quiz App
         {/* {console.log(FetchingData())} */}
         {console.log(data)}
    </div>
  );
}

export default App;
