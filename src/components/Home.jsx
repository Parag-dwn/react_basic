import React from 'react'
import vg from "../assets/2.webp"
import {AiFillAmazonCircle
  ,AiFillGoogleCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id="home">
      <main>
        <h1>
        AiStar
        </h1>
        <p>optimal Solution provider using machine learning</p>
      </main>
    </div>

    <div className="home2">
    <img src={vg} alt="Graphics"/>
    <div>
    <p>
    A machine learning solution is a complete set of intellectual property, tools, and software for AI development across a vast array of devices. 
    A complete ML solution can power all types of ML required for AI, including supervised learning, unsupervised learning, semi-supervised learning, and reinforcement learning.
    </p>
    
    </div>
      
    </div>


    <div className="home3" id="about">
    <div>
      <h1>who we are? </h1>
      <p>
      A Human Algorithm: How Artificial Intelligence Is Redefining Who We Are is a 2019 non-fiction book by American 
      international human rights attorney Flynn Coleman. It argues that, in order to manage the power shift from humans 
      to increasingly advanced artificial intelligence, it will be necessary to instill human values into artificial intelligence, and to proactively develop oversight mechanisms.
      </p>
    </div>
      
    </div>

    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay: "0.3s",
          }}>
          <AiFillGoogleCircle/>
          <p>Google</p>
          </div>
          <div style={{
            animationDelay: "0.5s",
          }}>
          <AiFillAmazonCircle/>
          <p>Amazon</p>
          </div>

          <div style={{
            animationDelay: "0.6s",
          }}>
          <AiFillYoutube/>
          <p>Youtube</p>
          </div>
          <div style={{
            animationDelay: "01s",
          }}>
          <AiFillInstagram/>
          <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>

    </>
  )
}

export default Home
