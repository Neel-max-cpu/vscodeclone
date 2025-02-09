import React from 'react'
import { Button } from './ui/button'

import { Search } from 'lucide-react';

// Image
import img from "../assets/logo.png"
import light from "../assets/light.svg"

// icon
import { Input } from './ui/input';

const Navbar = () => {
    return (
        <div className=' h-[55px] items-center border-b-[0.50px] border-gray-600 w-full flex justify-between'>
            {/* left navigation */}
            <div className='text-white ml-[70px] flex space-x-6'>
                <div className='flex items-center space-x-2'>
                    <img className='h-6 w-6' src={img} alt="" />
                    <a href='' className='text-lg font-semibold'>Visual Studio Code</a>
                </div>
                <div className='flex items-center text-sm font-semibold text-gray-400 space-x-4 justify-center'>
                    <a href="https://code.visualstudio.com/docs">Docs</a>
                    <a href="https://code.visualstudio.com/updates/v1_92">Updates</a>
                    <a href="https://code.visualstudio.com/blogs/2024/06/24/extensions-are-all-you-need">Blog</a>
                    <a href="https://code.visualstudio.com/api">API</a>
                    <a href="https://marketplace.visualstudio.com/VSCode">Extensions</a>
                    <a href="https://code.visualstudio.com/docs/supporting/faq">FAQ</a>
                    <a href="https://code.visualstudio.com/docs/getstarted/getting-started">Learn</a>
                </div>
            </div>

            {/* right navigation */}
            <div className='item-center justify-center text-white flex space-x-3 mr-[70px]'>
                <img src={light} alt="" />
                <div className='flex relative'>
                    <Search className='text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2  h-4 w-4' />
                    <Input className="pl-8 py-none border-gray-600 text-gray-400 font-semibold placeholder:font-semibold placeholder:text-gray-400" type="text" placeholder="Search Docs"></Input>
                </div>
                <Button className="bg-[#0069b9] hover:bg-[#005da3] px-2 py-4 text-base font-semibold">Download</Button>
            </div>
        </div>
    )
}

export default Navbar
