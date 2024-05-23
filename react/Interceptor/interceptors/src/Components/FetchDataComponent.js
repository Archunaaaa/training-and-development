import React, { useState } from 'react';
import { postData } from './ApiService'; 

function App() {
  const [responseData, setResponseData] = useState(null); // State to store response data

  const handlePostData = async () => {
    try {
      const postDataResponse = await postData({ /* Your data object */ }); // Call the postData function
      setResponseData(postDataResponse); // Update state with response data
    } catch (error) {
      console.error('Error posting data:', error);
      // Handle error if necessary
    }
  };

  return (
    <div>
      {/* Button to trigger the postData function */}
      <button onClick={handlePostData}>Post Data</button>

      {/* Display the response data  */}
      {responseData && (
        <div>
          <h2>Response Data:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
