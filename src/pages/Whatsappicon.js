import React from 'react';

const WhatsAppIcon = ({ number }) => {
  const handleWhatsAppClick = () => {
    // Replace the 'number' variable with your actual WhatsApp number
    window.open(`https://wa.me/${6266485444}`);
  };

  return (
    <div>
      {/* Replace the 'Your Icon Component' with your actual icon component */}
      <YourIconComponent onClick={handleWhatsAppClick} />
    </div>
  );
};

export default WhatsAppIcon;
