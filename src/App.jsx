import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './components/data'

function App() {
  const elements = data.map(item => {
    return (
        <Card
          key = {item.id}
          img = {item.image}
          country = {item.country}
          location = {item.location}
          date = {item.date}
          desc = {item.description}
        />
    )
  }) 
  
  return (
    <div id='body'>
      <Navbar />
      {elements}
    </div>
  )
}

export default App
