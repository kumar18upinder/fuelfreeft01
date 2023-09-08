import React, { useEffect, useState } from 'react';

const PrivacyPolicyPage = () => {
  const [privacyPolicyUrl, setPrivacyPolicyUrl] = useState('');

  useEffect(() => {
    // Fetch the privacy policy URL from the company's API or any other data source
    // Update the `privacyPolicyUrl` state with the received URL
    // For demonstration purposes, we'll use a mock URL
    const fetchPrivacyPolicyUrl = async () => {
      try {
        const response = await fetch('https://www.privacypolicygenerator.info/live.php?token=g2GGB84vuPiYZ1iCDGeDlv3q4qIogd5J');
        const data = await response.json();
        setPrivacyPolicyUrl(data.url);
      } catch (error) {
        console.error('Error fetching privacy policy URL:', error);
      }
    };

    fetchPrivacyPolicyUrl();
  }, []);

  return (
    <div>
      <h1>Privacy Policy</h1>
      {privacyPolicyUrl ? (
        <a href={privacyPolicyUrl} target="_blank" rel="noopener noreferrer">
          Read our Privacy Policy
        </a>
      ) : (
        <p>Loading privacy policy...</p>
      )}
    </div>
  );
};

export default PrivacyPolicyPage;