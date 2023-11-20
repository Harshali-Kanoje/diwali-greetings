import React, { useState } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom';
import './Home.css';
import DiwaliLamp from './diwali-lamp.png'

const Home = () => {

  const [SearchParams] = useSearchParams();

  const Greeting = [
    "फुलांचा सुगंध कोणी चोरू शकत नाही,सूर्याची किरणे कोणी लपवू शकत नाही,तुम्ही आमच्यापासून कितीही दूर असलात तरी,दिपावली सारख्या मंगल प्रसंगीतुम्हाला आम्ही विसरू शकत नाही.शुभ दिपावली!",
    "लक्ष लक्ष दिव्यांनी उजळुन निघो ही निशा घेऊनि येवो नवी उमेद नवी आशा,सोबत आमच्या लक्ष लक्ष शुभेच्छा!",
    "तेजोमय झाला आजचा प्रकाश, जुना कालचा काळोख,लुकलुकणार्‍या चांदण्याला किरणांचा सोनेरी अभिषेक,सारे रोजचे तरीही भासे नवा सहवास, सोन्यासारख्या लोकांसाठी खास,दिवाळीच्या हार्दिक शुभेच्छा!",
    "माझ्याकडून आणि माझ्या परिवाराकडूनआपणास आणि आपल्या परिवारास दीपावलीच्या हार्दिक शुभेच्छा!",
    "स्नेहाचा सुगंध दरवळला,आनंदाचा सण आला.विनंती आमची परमेश्वराला,सौख्य, समृध्दी लाभो तुम्हाला.दिवाळीच्या हार्दिक शुभेच्छा!"
  ]

  const [to, setTo] = useState(SearchParams.get('to'));
  const [from, setFrom] = useState(SearchParams.get('from'));
  const [greeting, setGreeting] = useState(SearchParams.get('g') > Greeting.length ? 0 : SearchParams.get('g') || 0);
  const [themeNumber, setThemeNumber] = useState(SearchParams.get('t'));


  return (
    <div className='greet-container'>

      <div className={`greeting ${`theme-${themeNumber}`}`}>
        <div className='greet-head'>
          <img src={DiwaliLamp} />
          <span>Happy Diwali</span>
          <img src={DiwaliLamp} />
        </div>
        <h1 className='heading'>Dear {to} 💖💖💖</h1>
        <p>{Greeting[greeting]}</p>
        <p>
          "May the divine light of Diwali bring endless joy and prosperity to our relationship. Wishing you a very Happy Diwali, my dearest."</p>
        <span className='sender'>Your {from} 💖💖💖</span>
      </div>
      <p className=' message'> Do You Want To Costimized Your Own Diwali Greetings?Costmise here👇</p>
      <p className='url' onClick={() => {
        const url = `${import.meta.env.VITE_BASE_URL}?to=${to}&from=${from}&t=${themeNumber}`
        navigator.clipboard.writeText(url)
        alert("Copied to Clipboard")
      }}>
        {import.meta.env.VITE_BASE_URL}?to={to}&from={from}&t={themeNumber}
      </p>
      <div className='input-container'>
        <input type='text'
          placeholder='To'
          value={to}
          onChange={(e) => {
            setTo(e.target.value)
          }}
          className='input' />

        <input type='text'
          placeholder='From'
          value={from}
          onChange={(e) => {
            setFrom(e.target.value)
          }}
          className='input' />

        <select value={themeNumber} onChange={(e) => {
          setGreeting(e.target.value)
        }}
          className='input'>
          
          <option value="1">Theme 1</option>
          <option value="2">Theme 2</option>
          <option value="3">Theme 3</option>
          <option value="4">Theme 4</option>
          <option value="0">Theme 5</option>
          
        </select>

        <select value={themeNumber} onChange={(e) => {
          setThemeNumber(e.target.value)
        }}
          className='input'>
          <option value="1">Theme 1</option>
          <option value="2">Theme 2</option>
          <option value="3">Theme 3</option>
          <option value="4">Theme 4</option>
          <option value="5">Theme 5</option>
        </select>
      </div>

    </div>

  )
}

export default Home
