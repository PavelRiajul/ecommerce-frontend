import React from 'react'
import {assets} from'../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} alt="" className='mb-5 w-32' />
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi modi eligendi eos sed aperiam dicta incidunt magni alias veritatis laudantium nobis expedita pariatur, optio illum omnis soluta nulla. Cumque, harum nemo corrupti, quam itaque velit deserunt officiis debitis accusamus ipsam atque quaerat ut dolorum omnis nobis molestias provident aspernatur.</p>
        </div>

        <div>
         <p className='text-xl font-medium mb-5'>COMPANY</p>
         <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
         </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-434-8492</li>
                <li>riajul@gmail.com</li>
            </ul>
        </div>
    </div>
    {/* copy right text */}
        <div>
           <hr />
           <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved.</p>
        </div>
    </div>

  )
}

export default Footer