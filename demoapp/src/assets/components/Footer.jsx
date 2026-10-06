import React from 'react'

function Footer() {
  const hour = new Date().getHours()
  const opentHour = 8
  const closeHour = 22
  const isOpen = hour>=opentHour && hour<=closeHour
  return (
      <div className="bottom">
          <p>ចុចទីនេះ ដើម្បីចុះឈ្មោះ</p>

          <button>ចុះឈ្មោះ</button>
          {
            isOpen?<h1>shop open</h1>:
            <h1>shop open on {opentHour}:00AM - {closeHour}:00PM</h1>
          }
        </div>
  )
}

export default Footer