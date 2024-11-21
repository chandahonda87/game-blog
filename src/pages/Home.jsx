import React from 'react'
import { Link } from 'react-router-dom';
import './home.css'
import { review } from '../reviews/cyberpunk';
import { useActiveContent } from '../ActiveContentContext';
import Lizzy from '../images/CP01.jpg';
import Songbird from '../images/CPSB.jpg';

function Home() {
  const { setActiveContent } = useActiveContent();

  return (
    <div className='cus-wd'>
      <div className='cus-animate mx-auto flex'>
        <img src={Lizzy} alt='Lizzy' className='img-wd ml-4' />
        <p className='mt-2 ml-2'>Cyperpunk 2077 Review <br></br><br></br>{review.CP00}
        <br></br><br></br>
        <Link to='review' onClick={() => setActiveContent('cyberpunk')}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >read more...</Link></p>

        <p className="text-center f-a">
        <img src={Songbird} className='img-sb fade-in mt-4'/>
        Fan Art
        </p>
      </div>
        <Link to='review'>
        <h1 className="text-center mt-4 rv">Check out My Reviews</h1>
        </Link>
        <div className='wrapper'>
          <div className='container'>
            <input type='radio' name='slide' id='cd1' checked/>
            <label for='cd1' className='card'>
              <div className='row'>
                <div className='icon'>1</div>
                <div className='description'>
                  <Link to='review' onClick={() => setActiveContent('cyberpunk')}>
                  <h4>Cyberpunk 2077</h4>
                  </Link>
                  <p>PS5</p>
                </div>
              </div>
            </label>

            <input type='radio' name='slide' id='cd2' checked/>
            <label for='cd2' className='card'>
              <div className='row'>
                <div className='icon'>2</div>
                <div className='description'>
                  <h4>Dragon's Dogma 2</h4>
                  <p>PS5</p>
                </div>
              </div>
            </label>

            <input type='radio' name='slide' id='cd3' checked/>
            <label for='cd3' className='card'>
              <div className='row'>
                <div className='icon'>3</div>
                <div className='description'>
                  <h4>Sword and Fairy</h4>
                  <p>PS5</p>
                </div>
              </div>
            </label>

            <input type='radio' name='slide' id='cd4' checked/>
            <label for='cd4' className='card'>
              <div className='row'>
                <div className='icon'>4</div>
                <div className='description'>
                  <h4>Fnal Fantasy VII</h4>
                  <p>PS5</p>
                </div>
              </div>
            </label>

          </div>
        </div>
    </div>
  )
}

export default Home