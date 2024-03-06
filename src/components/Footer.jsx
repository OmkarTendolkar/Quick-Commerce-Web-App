import React from 'react'

function Footer() {
  return (
    <footer>
      <div className='border-t-[1px] flex  justify-center relative left-0 bottom-0 right-0'>
        <div className='py-10 w-[1200px]'>
          <div className='mb-6 font-bold'>Categories</div>
          <div className=' grid grid-cols-5 text-xs font-semibold gap-4'>
            <div>Fruits & Vegetables</div>
            <div>Atta, Rice, Oil & Dals</div>
            <div>Masala & Dry Fruits</div>
            <div>Sweet Cravings</div>
            <div>Frozen Food & Ice Creams</div>
            <div>Health & Baby Care</div>
            <div>Dairy, Bread & Eggs</div>
            <div>Cold Drinks & Juices</div>
            <div>Munchies</div>
            <div>Breakfast & Sauces</div>
            <div>Tea, Coffee & More</div>
            <div>Biscuits</div>
            <div>Home Needs</div>
            <div>Bath & Body</div>
            <div>Cleaning Essentials</div>
            <div>Electricals & Accessories</div>
            <div>Hygiene & Grooming</div>
          </div>

          <hr className='my-10 border rounded'  />

         { <div className='flex items-center justify-between'>

            <div>
              <img className='h-8' src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/9.1.1/images/logo.svg" alt="logo-img" />
              <div className='mt-4 flex h-5 space-x-6'>
                <img  src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/9.1.1/images/social-media/instagram.svg" alt="instagram-logo" />
                <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/9.1.1/images/social-media/twitter.svg" alt="twitter-logo" />
                <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/9.1.1/images/social-media/facebook.svg" alt="facebook-logo" />
                <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/9.1.1/images/social-media/linkedin.svg" alt="linkedin-logo" />
              </div>
            </div>

            <div className='text-xs font-semibold space-y-4'>
              <div>Home</div>
              <div>Delivery Areas</div>
              <div>Careers</div>
              <div>Customer Support</div>
              
            </div>
            
            <div className='text-xs font-semibold space-y-4'>
              <div>Press</div>
              <div>Privacy Policy</div>
              <div>Terms of Use</div>
              <div>Responsible Disclosure Policy</div>
            </div>

            <div className='text-xs font-semibold'>
              <div>Download App</div>
              <div className='mt-2 flex flex-col space-y-4'>
                <button className='border border-slate-300 px-10 py-3 rounded'>Get it on playstore</button>
                <button className='border border-slate-300 px-10 py-3 rounded'>Get it on app store</button>
              </div>
            </div>
          </div>}

        </div>
      </div>
    </footer>
  )
}

export default Footer