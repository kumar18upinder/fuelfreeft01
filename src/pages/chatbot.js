import React, { useState, useEffect } from 'react';
import { SiGooglemessages } from "react-icons/si";
import './chatbot.css';

function Message() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  useEffect(() => {
    if (isOpen) {
      const initialMessage = {
        type: 'chatbot',
        text: 'What are you looking for?',
      };

      const categoryOptions = ['cycle', 'scooter', 'bike', 'car', 'auto', 'bus', 'loading', 'logistic-vehicle', 'luna' ];

      const categoryButtons = categoryOptions.map((category) => ({
        type: 'button',
        label: category,
        value: category,
      }));

      const initialMessageWithButtons = {
        type: 'buttons',
        text: initialMessage.text,
        options: categoryButtons,
      };

      setMessages([initialMessageWithButtons]);
    }
  }, [isOpen]);

  const handleUserMessage = (text) => {
    const newMessage = {
      type: 'user',
      text: text,
    };

    setMessages([...messages, newMessage]);

    if (!selectedCategory) {
      setSelectedCategory(text);

      const brandMessage = {
        type: 'chatbot',
        text: 'Please select a brand:',
      };

      const brandOptions = ['Tata', 'Ola', 'Kia', 'Hero', 'komaki', 'speego', 'kinatic', 'audi', 'MG', 'mahindra', 'Eicher', 'mercedes benz', 'pure-ev', 'hyndai', 'TVS', 'Volvo'];

      const brandButtons = brandOptions.map((brand) => ({
        type: 'button',
        label: brand,
        value: brand,
      }));

      const brandMessageWithButtons = {
        type: 'buttons',
        text: brandMessage.text,
        options: brandButtons,
      };

      setMessages([...messages, brandMessageWithButtons]);
    } else if (!selectedBrand) {
      setSelectedBrand(text);

      const priceMessage = {
        type: 'chatbot',
        text: 'Select your price range:',
      };

      const priceOptions = ['0-20,000', '20,000-40,000', '40,000-60,000', '60,000-80,000', '80,000-10,0000', 'Above 1 Lakh'];

      const priceButtons = priceOptions.map((price) => ({
        type: 'button',
        label: price,
        value: price,
      }));

      const priceMessageWithButtons = {
        type: 'buttons',
        text: priceMessage.text,
        options: priceButtons,
      };

      setMessages([...messages, priceMessageWithButtons]);
    } else if (!selectedPrice) {
      setSelectedPrice(text);

      const categoryLinks = {
        cycle: 'https://fuelfree.in/cycle',
        scooter: 'https://fuelfree.in/scooters',
        bike: 'https://fuelfree.in/bike',
        car: 'https://fuelfree.in/car/evcar',
        auto: 'https://fuelfree.in/electricauto',
        luna: 'https://fuelfree.in/electricluna',
        loading: 'https://fuelfree.in/loadingVehicle/loadingauto',
        loagistic: 'https://fuelfree.in/logisticsVehicle',
        bus: 'https://fuelfree.in/buses'
      };

      const selectedProductLink = categoryLinks[selectedCategory];

      const selectedProductMessage = {
        type: 'chatbot',
        text: 'For more details about your selected product, please visit:',
        link: selectedProductLink,
      };

      setMessages([...messages, selectedProductMessage]);
    } else {
      const infoMessage = {
        type: 'chatbot',
        text:
          'Hello, welcome to Fuelfree. Please Contact us on 7880088944/7880088955 or info@fuelfree.in. to know more about all type of electric vehicle services.' ,
      };

      setMessages([...messages, infoMessage]);
    }
  };

  const toggleChatbot = () => {
    if (!isOpen) {
      setMessages([]);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="header">
          <span className="title">Fuelfree</span>
          <button className="close-button" onClick={toggleChatbot}>
          <i class="fa fa-close"></i>

          </button>
        </div>
        <div className="message-window">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              {message.type === 'buttons' ? (
                <div className="button-options">
                  {message.text && <div className="message-text">{message.text}</div>}
                  {message.options.map((option, optionIndex) => (
                    <button key={optionIndex} onClick={() => handleUserMessage(option.value)}>
                      {option.label}
                    </button>
                  ))}
                </div>
              ) : (
                <div>
                  {message.text}
                  {message.link && (
                    <a href={message.link} target="_blank" rel="noopener noreferrer">
                      {message.link}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            placeholder="Type a message..."
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleUserMessage(event.target.value);
                event.target.value = '';
              }
            }}
          />
        </div>
      </div>
      <button className="message-icon" onClick={toggleChatbot}>
        <i className={`${isOpen ? ' open' : ''}`}><SiGooglemessages/></i>
      </button>
    </div>
  );
}

export default Message;
