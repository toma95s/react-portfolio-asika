import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>



            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>CSS</h4>
                <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Javascript</h4>
                <small className='text-light'>Experienced</small></div>

            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>REACT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>  
              <h4>Documention</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Frameworks</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>APIs</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
          </div>
        </div>
        {/* end of FRONTEND  */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>  <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Express.js</h4>
                <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>jQuery</h4>
                <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>  <h4>Node</h4>
                <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Mern</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div> <h4>NOSql</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience