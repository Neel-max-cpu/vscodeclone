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
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";



// icons
import x from "../assets/icons/x-twitter-brands-solid.svg"
import gh from "../assets/icons/github-brands-solid.svg"
import yt from "../assets/icons/youtube-brands-solid.svg"
import wi from "../assets/icons/windows-brands-solid.svg"

const Main = () => {
    return (
        <div className='h-screen w-full space-y-4 text-white'>
            <div>
                <Navbar />
            </div>


            <div className='bg-gradient-to-b from-[#0e0e0e] to-[#151515] border-b-[0.50px] border-gray-600'>
                <div className='flex justify-center items-center text-sm text-gray-300 my-5'>
                    <p> <a className='text-blue-400 font-bold underline' href="https://code.visualstudio.com/updates/v1_92">Version 1.9.2</a> is now available! Read about the new features and fixes from July.</p>
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
                            <p><a className='text-blue-400 font-bold underline' href="https://vscode.dev/">Web</a>, <a className='text-blue-400 font-bold underline' href="https://code.visualstudio.com/insiders/">Insiders edition</a>, or <a className='text-blue-400 font-bold underline' href="https://code.visualstudio.com/Download">other platforms</a></p>
                        </div>

                        <div className='text-gray-400 text-[11px]'>
                            <p>By using VS Code, you agree to its <a className='text-blue-400 font-bold underline' href="https://code.visualstudio.com/license">license</a> and <a className='text-blue-400 font-bold underline' href="https://www.microsoft.com/en-us/privacy/privacystatement">privacy statement</a>.</p>
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
                <div className='text-white space-y-32  ml-[70px] mr-[70px] flex flex-col justify-between pt-12 pb-16'>

                    {/* first part */}
                    <div className='flex flex-row space-x-10 justify-between mr-20'>

                        <div className='space-y-6'>
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
                            <div className="flex flex-row space-x-60">
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
                            <div className="flex flex-row space-x-52">
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
                    <div className='flex flex-row space-x-10 justify-between mr-10'>
                        <div className='space-y-6'>
                            <h1 className='font-semibold text-2xl'>Code with extensions</h1>
                            <p className='text-gray-400 font-semibold text-sm'>Whether you're a beginner or an expert, we've got you<br /> covered. Choose from hundreds of extensions to power<br /> up your VS Code experience.</p>
                            <p><a className='text-blue-400 font-bold underline' href="https://code.visualstudio.com/docs/editor/extension-marketplace">Learn more about extensions</a></p>
                        </div>


                        <div className='flex flex-col w-3/5 text-gray-400 text-sm '>
                            <div className='space-y-3'>


                                {/* one */}
                                <div className='flex flex-row space-x-5'>
                                    {/* card 1 */}
                                    <Card onClick={()=>window.open("https://marketplace.visualstudio.com/items?itemName=ms-python.python", "blank")} className="hover:cursor-pointer bg-[#1a1a1a] text-white p-2 rounded-lg h-24 w-80 border border-gray-700">
                                        <CardContent className="flex justify-start items-start space-x-3 p-0 py-1 px-1">
                                            <img className='h-8 w-8' src="https://ms-python.gallerycdn.vsassets.io/extensions/ms-python/python/2024.13.2024080201/1722595354230/Microsoft.VisualStudio.Services.Icons.Default" alt="" />
                                            <div className='flex flex-col'>
                                                <p className='font-bold text-gray-300'>Python</p>
                                                <p className='text-gray-400 text-[13px] font-semibold'>Adds rich language support for Python</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    {/* card 2 */}
                                    <Card onClick={()=>windows.open("https://marketplace.visualstudio.com/items?itemName=GitHub.copilot", "blank")} className="hover:cursor-pointer bg-[#1a1a1a] text-white p-2 rounded-lg h-24 w-80 border border-gray-700">
                                        <CardContent className="flex justify-start items-start space-x-3 p-0 py-1 px-1">
                                            <img className='h-8 w-8' src="https://github.gallerycdn.vsassets.io/extensions/github/copilot/1.219.1028/1722632718305/Microsoft.VisualStudio.Services.Icons.Default" alt="" />
                                            <div className='flex flex-col'>
                                                <p className='font-bold text-gray-300'>GitHub Copilot</p>
                                                <p className='text-gray-400 text-[13px] font-semibold'>Your AI pair programmer</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    {/* card 3 */}
                                    <Card onClick={()=>windows.open("https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools", "blank")} className="hover:cursor-pointer bg-[#1a1a1a] text-white p-2 rounded-lg h-24 w-80 border border-gray-700">
                                        <CardContent className="flex justify-start items-start space-x-3 p-0 py-1 px-1">
                                            <img className='h-8 w-8' src="https://ms-vscode.gallerycdn.vsassets.io/extensions/ms-vscode/cpptools/1.21.5/1722450531264/Microsoft.VisualStudio.Services.Icons.Default" alt="" />
                                            <div className='flex flex-col'>
                                                <p className='font-bold text-gray-300'>C/C++</p>
                                                <p className='text-gray-400 text-[13px] font-semibold'>Adds rich language support for C/C++</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* two */}
                                <div className='flex flex-row space-x-5'>
                                    {/* card 1 */}
                                    <Card onClick={()=>windows.open("https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter", "blank")} className="hover:cursor-pointer bg-[#1a1a1a] text-white p-2 rounded-lg h-24 w-80 border border-gray-700">
                                        <CardContent className="flex justify-start items-start space-x-3 p-0 py-1 px-1">
                                            <img className='h-8 w-8' src="https://ms-toolsai.gallerycdn.vsassets.io/extensions/ms-toolsai/jupyter/2024.8.2024080201/1722591547763/Microsoft.VisualStudio.Services.Icons.Default" alt="" />
                                            <div className='flex flex-col'>
                                                <p className='font-bold text-gray-300'>Jupyter</p>
                                                <p className='text-gray-400 text-[13px] font-semibold'>Language support for Jupyter</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    {/* card 2 */}
                                    <Card onClick={()=>windows.open("https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens", "blank")} className="hover:cursor-pointer bg-[#1a1a1a] text-white p-2 rounded-lg h-24 w-80 border border-gray-700">
                                        <CardContent className="flex justify-start items-start space-x-3 p-0 py-1 px-1">
                                            <img className='h-8 w-8' src="https://eamodio.gallerycdn.vsassets.io/extensions/eamodio/gitlens/2024.8.305/1722676092892/Microsoft.VisualStudio.Services.Icons.Default" alt="" />
                                            <div className='flex flex-col'>
                                                <p className='font-bold text-gray-300'>GitLens</p>
                                                <p className='text-gray-400 text-[13px] font-semibold'>Superchange your Git experience</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    {/* card 3 */}
                                    <Card onClick={()=>windows.open("https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit", "blank")} className="hover:cursor-pointer bg-[#1a1a1a] text-white p-2 rounded-lg h-24 w-80 border border-gray-700">
                                        <CardContent className="flex justify-start items-start space-x-3 p-0 py-1 px-1">
                                            <img className='h-8 w-8' src="https://ms-dotnettools.gallerycdn.vsassets.io/extensions/ms-dotnettools/csdevkit/1.9.53/1722444798974/Microsoft.VisualStudio.Services.Icons.Default" alt="" />
                                            <div className='flex flex-col'>
                                                <p className='font-bold text-gray-300'>C# Dev Kit</p>
                                                <p className='text-gray-400 text-[13px] font-semibold'>Powerful tool for your C# environment</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* three */}
                                <div className='flex flex-row space-x-5'>
                                    {/* card 1 */}
                                    <Card onClick={()=>windows.open("https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces", "blank")} className="hover:cursor-pointer bg-[#1a1a1a] text-white p-2 rounded-lg h-24 w-80 border border-gray-700">
                                        <CardContent className="flex justify-start items-start space-x-3 p-0 py-1 px-1">
                                            <img className='h-8 w-8' src="https://github.gallerycdn.vsassets.io/extensions/github/codespaces/1.17.2/1721326959295/Microsoft.VisualStudio.Services.Icons.Default" alt="" />
                                            <div className='flex flex-col'>
                                                <p className='font-bold text-gray-300'>GitHub Codespace</p>
                                                <p className='text-gray-400 text-[13px] font-semibold'>Full configured dev environments in the cloud</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    {/* card 2 */}
                                    <Card onClick={()=>windows.open("https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github", "blank")} className="hover:cursor-pointer bg-[#1a1a1a] text-white p-2 rounded-lg h-24 w-80 border border-gray-700">
                                        <CardContent className="flex justify-start items-start space-x-3 p-0 py-1 px-1">
                                            <img className='h-8 w-8' src="https://github.gallerycdn.vsassets.io/extensions/github/vscode-pull-request-github/0.95.2024080212/1722601132118/Microsoft.VisualStudio.Services.Icons.Default" alt="" />
                                            <div className='flex flex-col'>
                                                <p className='font-bold text-gray-300'>GitHub Pull Requests</p>
                                                <p className='text-gray-400 text-[13px] font-semibold'>Collaborate on issues and pull requests</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    {/* card 3 */}
                                    <Card onClick={()=>windows.open("https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack", "blank")} className="hover:cursor-pointer bg-[#1a1a1a] text-white p-2 rounded-lg h-24 w-80 border border-gray-700">
                                        <CardContent className="flex justify-start items-start space-x-3 p-0 py-1 px-1">
                                            <img className='h-8 w-8' src="https://ms-vscode-remote.gallerycdn.vsassets.io/extensions/ms-vscode-remote/vscode-remote-extensionpack/0.25.0/1701252518317/Microsoft.VisualStudio.Services.Icons.Default" alt="" />
                                            <div className='flex flex-col'>
                                                <p className='font-bold text-gray-300'>Remote Development</p>
                                                <p className='text-gray-400 text-[13px] font-semibold'>Open folders in a container on a remote machine</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div className='bg-gradient-to-b from-[#323232] to-[#0e0e0e] flex items-end justify-center w-full h-10'>
                                <p className='font-semibold text-xs'>View 50k+ extensions in the <a className='text-blue-400 font-bold underline' href="https://marketplace.visualstudio.com/vscode">Extension Marketplace</a></p>
                            </div>
                        </div>

                    </div>


                    {/* third part */}
                    <div className='flex flex-col space-y-4'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex space-x-4'>
                                {/* or  */}
                                {/* onClick={()=>windows.location.href=""} */}
                                <img onClick={()=>window.open("https://x.com/OGhostiii", "blank")} className='h-6 y-6' src={x} alt="" />
                                <img onClick={()=>window.open("https://github.com/Neel-max-cpu", "blank")} className='h-6 y-6' src={gh} alt="" />
                                <img onClick={()=>window.open("https://www.youtube.com/@itzhippy", "blank")} className='h-6 y-6' src={yt} alt="" />
                            </div>
                            <div>
                                <img onClick={()=>window.open("https://www.microsoft.com/en-in/", "blank")} className='h-6 y-6' src={wi} alt="" />
                            </div>
                        </div>

                        <div className='flex space-x-8 text-gray-400 text-xs font-semibold'>
                            <p onClick={()=>window.open("https://login.microsoftonline.com/common/oauth2/authorize?client_id=9ed4cd8c-9a98-405f-966b-38ab1b0c24a3&redirect_uri=https%3A%2F%2Fsupport.serviceshub.microsoft.com%2F&resource=9ed4cd8c-9a98-405f-966b-38ab1b0c24a3&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DxQhfRkdNDwFTeOYJuk5CIBsks41F3B8GVWgAsRpNGH-UkAz-8QCMarwzVaIZo5yM3DKRdJIVO_x9NoRWAHMBL6DJjnGpiBenMu9CNX2M9-I4Xnq2l_Jk399RWoBNoRhy6rRvJ2LPiQjI-266Mbjrjt0Z75mtrXnCip27GUVcJH1ql_2TkbLU3_A1nje0_QXG0g0G-6oV632yvo9I0NuCZ8wLpNHMVrYqEvvjpGrEtedrwWnroVV1LXwd_h_ODp5_Y7hahuJA91-wVGuuqk3Z3w&response_mode=form_post&nonce=638583744240788754.MGUyNWE0MDQtMWNiNS00MzUyLTg4NjAtY2Q3YzhjN2JkNGNlMDc2NmFhOWMtZjc5Yi00NmVhLWFhZDktNDhjMjcwZDM1NTk3&instance_aware=true&x-client-SKU=ID_NET472&x-client-ver=7.4.0.0", "blank")}>Support</p>
                            <p onClick={()=>window.open("https://www.microsoft.com/en-us/privacy/privacystatement", "blank")}>Privacy</p>
                            <p onClick={()=>window.open("https://www.microsoft.com/en-us/legal/terms-of-use?oneroute=true", "blank")}>Terms of Use</p>
                            <p onClick={()=>window.open("https://code.visualstudio.com/License", "blank")}>License</p>
                        </div>

                    </div>

                </div>

                {/* part 2 main */}
            </div>

        </div>
    )
}

export default Main
