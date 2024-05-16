import React from 'react'
import IrctcCard from './IrctcCard'

function Irctc() {
  return (
    <div
    style = {{
     display :"flex",
     flexWrap:"wrap"
   }}>
      <IrctcCard imageUrl="https://www.irctc.co.in/nget/assets/images/exterior.jpg"
            title="Maharajas' Express "
            about="Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years"
            readMore="https://www.the-maharajas.com/"
        />
         <IrctcCard imageUrl="https://www.irctc.co.in/nget/assets/images/Thailand.jpg"
            title=" International Packages"
            about="Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience."
            readMore="https://www.irctctourism.com/"
        />
         <IrctcCard imageUrl="https://www.irctc.co.in/nget/assets/images/Kashmir.jpg"
            title="Domestic Air Packages "
            about="Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!"
            readMore="https://www.irctctourism.com/"
        />
         <IrctcCard imageUrl="https://www.irctc.co.in/nget/assets/images/Bharat_Gaurav.jpg"
            title="Bharat Gaurav Tourist Train "
            about="IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India’s rich cultural heritage."
            readMore="https://www.irctctourism.com/bharatgaurav"
        />     

        <IrctcCard imageUrl="https://www.irctc.co.in/nget/assets/images/Manali.jpg"
            title="Rail Tour Packages"
            about="IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available."
            readMore="https://www.irctctourism.com/"
        />
    </div>
  )
}

export default Irctc
