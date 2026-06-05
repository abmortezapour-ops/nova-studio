const projects = [
{
title:"Luxury Brand Website",
category:"Web Design",
img:"https://images.unsplash.com/photo-1547658719-da2b51169166"
},
{
title:"Startup Landing Page",
category:"UI / UX",
img:"https://images.unsplash.com/photo-1559028012-481c04fa702d"
},
{
title:"Mobile App Interface",
category:"App Design",
img:"https://images.unsplash.com/photo-1519389950473-47ba0277781c"
},
{
title:"Creative Agency Site",
category:"Web Design",
img:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8"
},
{
title:"Ecommerce Experience",
category:"UX Design",
img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085"
},
{
title:"Modern Dashboard",
category:"Product Design",
img:"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d"
},
{
title:"Tech Brand Identity",
category:"Branding",
img:"https://images.unsplash.com/photo-1522199710521-72d69614c702"
},
{
title:"Creative Portfolio",
category:"Web Design",
img:"https://images.unsplash.com/photo-1492724441997-5dc865305da7"
}
];

const portfolioGrid = document.getElementById("portfolio-grid");

function loadProjects(){

if(!portfolioGrid) return;

portfolioGrid.innerHTML = projects.map(project => `
<div class="portfolio-card">

<img src="${project.img}" alt="${project.title}">

<div class="portfolio-overlay">
<h3>${project.title}</h3>
<p>${project.category}</p>
<a href="#" class="view-btn">View Case Study</a>
</div>

</div>
`).join("");

}

document.addEventListener("DOMContentLoaded",loadProjects);
