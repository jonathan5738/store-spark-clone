import React from 'react'
import '../css/Landing/ProjectIdea.css'

function ProjectIdea() {
  return (
     <section className="project-idea-container">
         <div className="project-idea-text">
             <h3>Project ideas for your store</h3>
         </div>
         <div className="project-idea-grid">
             <div className="project-idea-card">
                  <h3>Complete Shopify store setup using a theme</h3>
                  <span className="bagde">Essentials</span>
             </div>

             <div className="project-idea-card">
                  <h3>Email marketing tool integration</h3>
                  <span className="bagde apps">Apps</span>
             </div>

             <div className="project-idea-card">
                  <h3>Add customer login using social media accounts</h3>
                  <span className="bagde apps">Apps</span>
             </div>

             <div className="project-idea-card">
                  <h3>Set up back in stock notifications</h3>
                  <span className="bagde apps">Apps</span>
             </div>

             <div className="project-idea-card">
                  <h3>Create sticky add to cart button element</h3>
                  <span className="bagde">Custom</span>
             </div>

             <div className="project-idea-card">
                  <h3>Complete Shopify store audit</h3>
                  <span className="bagde">Essentials</span>
             </div>

         </div>
     </section>
  )
}

export default ProjectIdea