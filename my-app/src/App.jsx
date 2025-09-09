import './App.css'

function App() {

  function downloadCV() {
    const a = document.createElement('a')
    const url = './CV.pdf'
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <>
      <div className="header">
        <div className="name">
          <h2>Eleonora Diakonova</h2>
        </div>
        <div className="info">
          Hi! I'm a recent grad interested in data analysis, software and web development, algorithms, and networks.  
        </div>
        <div className="contact">
          <button onClick={downloadCV}>
            <i className="icon-download"></i> 
            CV
          </button>
          <a href="http://linkedin.com/in/el-diak"><i className="icon-linkedin"></i></a>
          <a href="http://github.com/diakel"><i className="icon-git"></i></a>
          <p style={{display: "inline-block", width: "25%", minWidth: "13em"}}> 
            <a href="mailto:el.diak00@gmail.com"><i className="icon-mail"></i>el.diak00@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="projects" style={{padding: "5px"}}>
        <p>
          Some of my projects: 
        </p>
        <div className="projectVertical">
        <div className="project"> 
          <div className="projectName">Image Upload Website</div>
          <div className="info" style={{marginBottom: "5px"}}>Website that allows users to upload their photos, sketches, AI-generated images into the virtual environment. 
            Part of the beehive project. 
          </div>
          <div className="techStack">
            <span className="tag">React</span> <span className="tag">Node.js</span> <span className="tag">AWS</span>
          </div>
          <div style={{textAlign: "center", marginTop: "15px"}}>
          <video width="100%" height="100%" controls>
          <source src="web_demo.mp4" type="video/mp4"/>
          </video>
          </div>
        </div>
        </div>
        <div className="projectVerticalSecond">
          <div className="project"> 
            <div className="projectName">Beehive Project</div>
            <div className="info" style={{marginBottom: "5px"}}>Public art installation idea developed collaboratively for a real estate firm. The project was showcased in VR. 
            </div>
            <div className="techStack">
              <span className="tag">Unreal Engine</span>
            </div>
            <video width="100%" height="100%" controls>
            <source src="trailer_new.mp4" type="video/mp4"/>
            </video>
          </div>
          <div className="project"> 
            <div className="projectName">Book Bans in the US</div>
            <div className="info" style={{marginBottom: "5px"}}>Data visualization that allows users to find banned books by state, genre, and date.
            </div>
            <div className="techStack">
              <span className="tag">D3.js</span> <span className="tag">Python</span>
            </div>
            <video width="100%" height="100%" controls>
            <source src="bans_demo.mp4" type="video/mp4"/>
            </video>
          </div>
        </div>
        <div className="projectVerticalLast">
        <div className="projectVerticalInsideOne">
        <div className="project"> 
          <div className="projectName">Economics Undergraduate Thesis</div>
          <div className="info" style={{marginBottom: "5px"}}>Research examining the effect of language commonality on trade, using post-Soviet countries as a case study.
          </div>
          <div className="techStack">
            <span className="tag">Stata</span> <span className="tag">Python</span> <span className="tag">Tableau</span>
          </div>
          <div style={{textAlign: "center"}}>
            <img width="100%" height="100%" src="poster_thesis.jpg" alt="poster"/>
          </div>
        </div>
        </div>
        <div className="projectVerticalInside">
        <div className="project"> 
          <div className="projectName">The UEFA Champions League Database</div>
          <div className="info" style={{marginBottom: "5px"}}>Website that tracks one season of the UEFA Champions League, containing tables with information about the players,
clubs, teams, coaches, sponsors, agents, stadiums, and games involved. Users can modify and filter this information.
          </div>
          <div className="techStack">
            <span className="tag">SQL</span> <span className="tag">PHP</span> <span className="tag">Oracle</span>
          </div>
        </div>
        <div className="project"> 
          <div className="projectName">ML Rock Classifier</div>
          <div className="info" style={{marginBottom: "5px"}}>Model for stratigraphy and lithology classification using random forests.
          </div>
          <div className="techStack">
            <span className="tag">Python</span> <span className="tag">scikit-learn</span>
          </div>
        </div>
        </div>
        </div>
      </div>
      <div style={{color: "#9a9a9aff", fontSize: "0.85rem", marginTop: "5px"}}>
        Woman icon is by <a href="https://soco-st.com/?ref=svgrepo.com" target="_blank">Soco St</a> in CC Attribution License via <a href="https://www.svgrepo.com/" target="_blank">SVG Repo</a> <br/>
        Download, mail icons are from <a href="https://www.figma.com/community/file/1380235722331273046">Figma's Simple Design System UI Kit</a>, licensed by <a href="https://www.figma.com/">Figma</a> under CC BY 4.0.
      </div>
    </>
  )
}

export default App
