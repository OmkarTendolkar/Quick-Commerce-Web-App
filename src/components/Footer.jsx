import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

function Footer() {
  return (
    <footer>
      <div className='border-t-[1px] flex  justify-center relative left-0 bottom-0 right-0'>
        <div className='py-10 w-[1200px]'>
          <div className='mb-6 font-bold'>Categories</div>
          <div className=' grid grid-cols-4 text-xs font-semibold gap-4'>
            <Link to={'/category/grocery'}>Grocery</Link>
            <Link to={'/category/dairy-and-beverages'}>Dairy & Beverages</Link>
            <Link to={'/category/home-and-kitchen'}>Home & Kitchen</Link>
            <Link to={'/category/personal-care'}>Personal Care</Link>
            <Link to={'/category/packaged-food'}>Packaged Food</Link>
            <Link to={'/category/electronic-appliances'}>Electronic Appliances</Link>
            <Link to={'/category/home-utility-and-organiser'}>Home Utility & Organisers</Link>
          </div>

          <hr className='my-10 border rounded'  />

         <div className='flex items-center justify-between'>

            <div>
              <Link to={'/'}>
                <div className='flex items-center' to={'/'}>
                  <img className='h-[50px]' src={Logo} alt="" />
                  <div className='text-xl font-semibold'>Quick Mart</div>
                </div>
              </Link>
              <div className='mt-4 ml-3 flex h-5 space-x-6'>
                <img  src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/9.1.1/images/social-media/instagram.svg" alt="instagram-logo" />
                <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/9.1.1/images/social-media/twitter.svg" alt="twitter-logo" />
                <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/9.1.1/images/social-media/facebook.svg" alt="facebook-logo" />
                <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/9.1.1/images/social-media/linkedin.svg" alt="linkedin-logo" />
              </div>
            </div>

            <div className='text-xs font-semibold space-y-4'>
              <Link to={'/'}>Home</Link>
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
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer