import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'

import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'
import IMG9 from '../../assets/portfolio9.png'

import IMG10 from '../../assets/portfolio10.png'
import IMG11 from '../../assets/portfolio11.png'
import IMG12 from '../../assets/portfolio12.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* item 1 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>          
            </div>
          <h3>Weather App</h3>
          <div className="portfolio__item-cta">
          <a href="https://toma95s.github.io/Weather-App/" target="_blank" className='btn btn-primary'>Live Site</a>
          </div>
        </article>
        {/* item 2 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt=""/>          
            </div>
          <h3>The CODE QUIZ</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/toma95s/codequiz" target="_blank" className='btn'>Github</a>
          <a href="https://toma95s.github.io/codequiz/" target="_blank" className='btn btn-primary'>Live Site</a>
          </div>
        </article>
        {/* item 3 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt=""/>          
            </div>
          <h3>social-network-api</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/toma95s/social-network-api" target="_blank" className='btn'>Github</a>
          <a href="https://drive.google.com/file/d/1LheE2e7HxS6eelY9h87ymHn7WKjnUCKJ/view" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
         {/* item 4 */}
         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt=""/>          
            </div>
          <h3>Password Generator</h3>
          <div className="portfolio__item-cta">
          <a href=" https://toma95s.github.io/passwordgenerator/" target="_blank" className='btn btn-primary'>Live Site</a>
          </div>
        </article>
        {/* item 5 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt=""/>          
            </div>
          <h3>Laaw-Investment-Tracker</h3>
          <div className="portfolio__item-cta">
          <a href="https://atmason90.github.io/laaw-investment-tracker/" target="_blank" className='btn btn-primary'>Live Site</a>
          </div>
        </article>
        {/* item 6 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt=""/>          
            </div>
          <h3>Note Taker</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/toma95s/notetaker" target="_blank" className='btn'>Github</a>
          <a href="https://serene-waters-18927.herokuapp.com/notes" target="_blank" className='btn btn-primary'>Live Site</a>
          </div>
        </article>
                 {/* item 7 */}
                 <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG7} alt=""/>          
            </div>
          <h3>SIMS Awaken</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/toma95s/sims_awaken" target="_blank" className='btn btn-primary'>GitHub</a>
          </div>
        </article>
        {/* item 8 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG8} alt=""/>          
            </div>
          <h3>Day Planner</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/toma95s/DayPlanner" target="_blank" className='btn btn-primary'>Live Site</a>
          </div>
        </article>
        {/* item 9 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG9} alt=""/>          
            </div>
          <h3>Professional ReadMe</h3>
          <div className="portfolio__item-cta">
          <a href="https://drive.google.com/file/d/1kD9a69dL2x7CkK4QSVyS4mJ1xaUwM04s/view" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        {/* item 11 */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG12} alt=""/>          
            </div>
          <h3>Team Tracker</h3>
          <div className="portfolio__item-cta">
          <a href="https://drive.google.com/file/d/11t1k-ULjBIDFwU65meHZTzxMz8EhV9SO/view" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio