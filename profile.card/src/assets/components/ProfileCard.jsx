import React from 'react'

function ProfileCard({img}) {

  return (
     <div className="profile-card">
            <img
              src={img}
              alt="Adobe After Effects"
            />

            <div className="product-info">
              <h2>{title}</h2>

              <p>
                {des}
              </p>

              <span>${price}</span>
            </div>
          </div>

  )
}

export default ProfileCard