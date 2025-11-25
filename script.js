* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
body {
font-family: Arial, sans-serif;
background: linear-gradient(#0a0f3c, #1b114d);
color: white;
}


/* Background video */
#video-background {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
z-index: -1;
}


/* Navbar */
.navbar {
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
}
.nav-links {
display: none;
list-style: none;
flex-direction: column;
gap: 10px;
}
.nav-links.open {
display: flex;
}
.menu-toggle {
font-size: 32px;
background: none;
border: none;
color: white;
}


/* Skills using flex */
.skills-container {
display: flex;
gap: 20px;
padding: 1rem;
flex-wrap: wrap;
}
.skill {
background: #4b3b88;
padding: 10px 20px;
border-radius: 8px;
}


/* Projects using GRID */
#projects-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 1.5rem;
padding: 2rem;
}
.project-card img {
width: 100%;
border-radius: 8px;
}
}