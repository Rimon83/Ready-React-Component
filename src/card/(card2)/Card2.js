import React from 'react'
import "./Card2.css"

const Card2 = () => {
  return (
    <section className="card2_container">
     <section className="card2_header">
       <h1>Staff members</h1>
       <nav>
         <a href="#profile1">John</a>
         <a href="#profile2">Ana</a>
         <a href="#profile3">David</a>
       </nav>
     </section>
     <section className="card2">
       <article id="profile1" className="card_info">
         <figure>
           <img src="/images/card2/profile2.jpg" alt="web developer" width="500" height="500" />
           <figcaption>John Smith</figcaption>
         </figure>
         <p><q>I'm web developer</q></p>
       </article>
       <article id="profile2" className="card_info">
         <figure>
           <img src="/images/card2/profile1.png" alt="designer" width="500" height="500"/>
           <figcaption>Ana Leo</figcaption>
         </figure>
         <p><q>I'm designer</q></p>
       </article>
       <article id="profile3" className="card_info">
         <figure>
           <img src="/images/card2/profile3.png" alt="instructor" width="500" height="500"/>
           <figcaption>David Mark</figcaption>
         </figure>
         <p><q>I'm instructor</q></p>
       </article>
     </section>
    </section>
  )
}

export default Card2