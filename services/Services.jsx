import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2> Services</h2>

      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>Documentation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Professionally trained to write clean, concise, and user-friendly documentations.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Great with wireframes and working in a team environment.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Expert knowledge of writing techniques.</p>
            </li>

          </ul>
        </article>

          {/* End of documentation */}
          <article className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Knowledgeable in both Backend and Frontend coding.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>UC Berkeley Certified Coder.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>20+ repositories on GitHub.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Creative with prototypes and conducting research to test designs.</p>
            </li>


          </ul>
        </article>

          {/* End of web development */}

          <article className="services">
          <div className="service__head">
            <h3>Logistics and Operations</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Over seven years of experience in managing a team tracking overe 10 million in shipments.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Well-versed working with high-profile clients such as Menard's, Home Depot, Public Government Warehouses, etc.  </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Comfortable presenting to large and small groups.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Personanable and innovative.</p>
            </li>

          </ul>
        </article>

          {/* End of content creation */}

      </div>
    </section>
  )
}

export default Services