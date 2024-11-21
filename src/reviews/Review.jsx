import React from 'react';
import { cyberImg, review } from './cyberpunk';
import { DDimg, DDreview } from './dogma';
import './review.css'

import ImageCarousel from './cyberSlide';
import { useActiveContent } from '../ActiveContentContext';

import background from '../images/background.jpg';

function Review() {
    const { activeContent, setActiveContent } = useActiveContent();

    const toggleContent = (section) => {
        setActiveContent(prevState => prevState === section ? null : section);
    };

  return (
    <div className='mt-4 mb-4'>
       <ul className="flex space-x-4 justify-center items-center mb-4">
        <li onClick={() => toggleContent('cyberpunk')}
            className="cursor-pointer hover:text-blue-500"
        >
            Cyberpunk 2077
        </li>
        <li onClick={() => toggleContent('DragonsDogma')}
            className="cursor-pointer hover:text-blue-500"
        >
            Dragon's Dogma
        </li>
       </ul>

        <div>
            {activeContent === 'cyberpunk' && (
                <div className=" justify-center ">
                    <div className="flex custom-width">
                    <p className='par'>{review.CP01}</p>
                    <img src={cyberImg[0].src} alt="CyberPunk 2077" className="ml-4 w-48 cus-hw" />
                    </div>
                    <div className="flex custom-width">
                        <img src={cyberImg[2].src} alt='Songbird' className="ml-4 w-48 cus-hw"/>
                        <p className='par ml-4'>{review.CP02} <br/><br/> - Phantom Liberty DLC <br/>Mini Chang as Songbird <br/>Idris Elba as Solomon Reed</p>
                    </div>
                    <div>
                    <ImageCarousel />
                    </div>
                    <div className="flex custom-width">
                        <p className='par mt-2'>{review.CP03}</p>
                    </div>
                    <div className="flex custom-width">
                        <p className='mr-4 cus-review'>Personal Review: 10</p>
                        <p className='mr-4 cus-review'>metacritic 86</p>
                        <p className='mr-4 cus-review'>IGN: 9/10</p>
                        <p className='mr-4 cus-review'>Steam: 9/10</p>
                    </div>
                </div>
                
            )}

            {activeContent === 'DragonsDogma' && (
                <div className="justify-center">
                    <div className="flex custom-width dd2">  
                        <p>Dragon’s Dogma 2: A Fantasy Adventure Awaits <br></br><br></br>
                            {DDreview.DDR00}
                        </p>
                        <img src={DDimg[9].src} alt='fan art' className='dd-fA' />
                    </div>
                    <div className="custom-width">
                        <p>{DDreview.DDR01}</p>
                        <br></br>
                        <p>{DDreview.DDR02}</p>
                    </div>
                    <div className="custom-width flex">
                        <img src={DDimg[0].src} alt='ocean view' className='dd-view'/>
                        <img src={DDimg[2].src} alt='ocean view 2' className='dd-view'/>
                    </div>
                </div>
            )}
        </div>
            {activeContent === null && <img src={background} alt="Background" />}
    </div>
  )
}

export default Review