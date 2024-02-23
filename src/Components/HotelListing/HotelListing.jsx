import React from 'react'
import './HotelListing.css'

const HotelListing = () => {
  return (
    <div className='HotelListingbody'>

      <div className='Searchbar'>  </div>

      <div className='HotelNumber'></div>

    <div className='Bookingholder'>

      <div className='Hotel1'>

        <div className='Roompictureholder'>
          <img src="src/assets/hotel 1.svg" alt="" width={"100%"} height={"100%"} />
        </div>

        <div className='Hotelname'>

          <div className='Name'>
            <h2>Rivira Resort, Lekki</h2>
          </div>

          <div className='Hotelrating'>

            <div className='Location'>
              <div className='icon'> 
              <img src="src/assets/icons8-location-50-removebg-preview.png" alt="" width={"50%"} height={"100%"}/>
              </div>
              <h4>LEKKI LAGOS</h4>
            </div>

            <div className='Starholder'>
              <div className='Star'><img src="src/assets/STAR.svg" alt="" /></div>
              <div className='Star'><img src="src/assets/STAR.svg" alt="" /></div>
              <div className='Star'><img src="src/assets/STAR.svg" alt="" /></div>
              <div className='Star'><img src="src/assets/STAR.svg" alt="" /></div>
              
            </div>

            <div className='Good'>
              <div className='Perrate'>
                <ul>4.2</ul>
              </div>

              <div className='comment'>
                  <h5>Very Good</h5>
                </div>
            </div>
          </div>

        </div>

        <div className='HotelBooknow'>
          
          <div className='Hotelamount'>
            <h6>₦20,000.00/night</h6>
          </div>

          <div className='Booknowbutton'>
          <button onClick={() => alert('This is a demo website')}>BOOK NOW</button>
          </div>
        </div>

      </div>

      <div className='Hotel2'>
      <div className='Roompictureholder'>
          <img src="src/assets/hotel 1.svg" alt="" width={"100%"} height={"100%"} />
        </div>

        <div className='Hotelname'>

          <div className='Name'>
            <h2>Rivira Resort, Lekki</h2>
          </div>

          <div className='Hotelrating'>

            <div className='Location'>
              <div className='icon'> 
              <img src="src/assets/icons8-location-50-removebg-preview.png" alt="" width={"50%"} height={"100%"}/>
              </div>
              <h4>LEKKI LAGOS</h4>
            </div>

            <div className='Starholder'>
              <div className='Star'><img src="src/assets/STAR.svg" alt="" /></div>
              <div className='Star'><img src="src/assets/STAR.svg" alt="" /></div>
              <div className='Star'><img src="src/assets/STAR.svg" alt="" /></div>
              <div className='Star'><img src="src/assets/STAR.svg" alt="" /></div>
              
            </div>

            <div className='Good'>
              <div className='Perrate'>
                <ul>4.2</ul>
              </div>

              <div className='comment'>
                  <h5>Very Good</h5>
                </div>
            </div>
          </div>

        </div>

        
        <div className='HotelBooknow'>
          
          <div className='Hotelamount'>
            <h6>₦20,000.00/night</h6>
          </div>

          <div className='Booknowbutton'>
          <button onClick={() => alert('This is a demo website')}>BOOK NOW</button>
          </div>
        </div>



        
        

        
        
      </div>

      <div className='Book3'></div>

    </div>

     



      
    </div>
    
    

  )
}

export default HotelListing