import React from 'react'
import Navbar from './Navbar'


// images
import img1 from "../assets/image1.png"

// lang img
import js from "../assets/programmin-language-images/js.png"
import ts from "../assets/programmin-language-images/ts.png"
import python from "../assets/programmin-language-images/python.png"
import c_sharp from "../assets/programmin-language-images/csharp.png"
import c_plusp from "../assets/programmin-language-images/c++.png"
import html from "../assets/programmin-language-images/html.png"
import java from "../assets/programmin-language-images/java.png"
import json from "../assets/programmin-language-images/json.png"
import php from "../assets/programmin-language-images/php.png"
import markd from "../assets/programmin-language-images/markdown.png"
import powers from "../assets/programmin-language-images/powershell.png"
import yaml from "../assets/programmin-language-images/yaml.png"


// buttons
import { Button } from './ui/button'

const Main = () => {
    return (
        <div className='h-screen w-full space-y-4 text-white'>
            <div>
                <Navbar />
            </div>


            <div className='bg-gradient-to-b from-[#0e0e0e] to-[#151515] border-b-[0.50px] border-gray-600'>
                <div className='flex justify-center items-center text-sm text-gray-300 my-5'>
                    <p> <a href="">Version 1.9.2</a> is now available! Read about the new features and fixes from July.</p>
                </div>
                {/* left side */}                
                <div className='text-white  ml-[70px] mr-[70px] flex flex-row justify-between pt-12 pb-16'>
                    <div className='flex flex-col space-y-5'>
                        <div className='bg-[#242424] text-gray-400 rounded-2xl px-2 py-2 items-center'>
                            <p>Free. Built on open source. Runs everywhere.</p>
                        </div>

                        <div className='text-5xl font-bold space-y-4'>
                            <p>Code</p>
                            <p>Editing.</p>
                            <p>Redefined.</p>
                        </div>

                        <div className=''>
                            <Button className="h-12 font-bold bg-[#0069b9] hover:bg-[#005da3]">Download for Windows</Button>
                        </div>

                        <div className='text-sm font-semibold text-gray-400'>
                            <p><a href="">Web</a>, <a href="">Insiders edition</a>, or <a href="">other platforms</a></p>
                        </div>

                        <div className='text-gray-400 text-[11px]'>
                            <p>By using VS Code, you agree to its <a href="">license</a> and <a href="">privacy statement</a>.</p>
                        </div>
                    </div>

                    {/* right side */}
                    <div>
                        <img className='h-[30rem]' src={img1} alt="" />
                    </div>
                </div>
            </div>


            <div className='bg-gradient-to-b from-[#0e0e0e] to-[#151515] border-b-[0.50px] border-gray-600'>
                {/* part 1 main */}
                <div className='text-white  ml-[70px] mr-[70px] flex flex-col justify-between pt-12 pb-16'>

                    {/* first part */}
                    <div className='flex flex-row space-x-10 justify-between mr-20'>
                        
                        <div className='space-y-3'>
                            <h1 className='font-semibold text-2xl'>Code in any language</h1>
                            <p className='text-gray-400 font-semibold text-sm'>VS Code supports almost every major programming <br /> language. Several ship in the box, like JavaScript, <br /> TypeScript, CSS, and HTML, but extensions for others <br />can be found in the VS Code Marketplace.</p>
                        </div>

                        <div className='flex flex-col w-3/5 text-gray-400 text-sm'>
                            {/* one */}
                            <div className='flex justify-between'>
                                <div className='flex items-center justify-center'>
                                    <img className='h-10 w-10' src={js} alt="" />
                                    <p>Javascript</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <img className='h-10 w-10' src={ts} alt="" />
                                    <p>TypeScript</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <img className='h-10 w-10' src={python} alt="" />
                                    <p>Python</p>
                                </div>
                            </div>
                            {/* two */}
                            <div className='flex justify-between'>
                                <div className='flex items-center justify-center'>
                                    <img className='h-10 w-10' src={c_sharp} alt="" />
                                    <p>C#</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <img className='h-10 w-10' src={c_plusp} alt="" />
                                    <p>C++</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <img className='h-10 w-10' src={html} alt="" />                                
                                    <p>HTML</p>
                                </div>
                            </div >
                            {/* three */}
                            <div className="flex justify-between">
                                <div className='flex items-center justify-center'>
                                    <img className='h-10 w-10' src={java} alt="" />                                
                                    <p>Java</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <img className='h-10 w-10' src={json} alt="" />                                
                                    <p>JSON</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <img className='h-10 w-10' src={php} alt="" />                                
                                    <p>PHP</p>
                                </div>
                            </div>
                            {/* four */}
                            <div className="flex justify-between">
                                <div className='flex items-center justify-center'>
                                    <img className='h-10 w-10' src={markd} alt="" />                                
                                    <p>MarkDown</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <img className='h-10 w-10' src={powers} alt="" />                                
                                    <p>Powershell</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <img className='h-10 w-10' src={yaml} alt="" />                                                        
                                    <p>YAML</p>
                                </div>
                            </div>

                        </div>
                    </div>



                    {/* second part */}

                    {/* third part */}

                    {/* fourth part */}

                    {/* fifth part */}
                </div>

                {/* part 2 main */}
            </div>

        </div>
    )
}

export default Main
