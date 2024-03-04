const Projects = [

    {
        name : "Weather Website",
        about : "Weather is the state of the atmosphere, describing for example the degree to which it is hot or cold, wet or dry, calm or stormy, clear or cloudy.",
        img : "https://play-lh.googleusercontent.com/znc7FD1BqyFR92b8n6hyROZrAR3FsTyV_ThO79hyuQG-Nb45z2qHFDTnf1HXH50DYg",
        blog : "",
        tech_stack : "HTML | CSS | JAVASCRIPT ",
        tech_stackicons : [
        `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
        `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
        `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
        ],
        project_link : "https://weatherproject-seven.vercel.app/",
        project_type : "Weather Project"
    },
    
    {
        name : "Clone of bigbasket",
        about : "This is the online grocery and shopping store website which is created by me.",
        img : "https://entrackr.com/storage/2023/06/Bigbasket-image-01-scaled.jpg",
        gitrepo : "https://stellar-puffpuff-c101f6.netlify.app/",
        blog : "",
        tech_stack : "HTML | CSS | JAVASCRIPT | API's",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            
        ],
        project_link : "https://stellar-puffpuff-c101f6.netlify.app/",
        project_type : "Clone Project"

    },
      {
        name : "Clone of ubuy.com",
        about : "This is an E-Commerce website which specialize in selling All kinds of projects like Electronics, Home goods, books, etc.",
        img : "https://i.ytimg.com/vi/PmOLTmaqUUk/maxresdefault.jpg",
        gitrepo : "https://sanketrmhatre.github.io/ubuyy/",
        blog : "",
        tech_stack : "HTML | CSS | JAVASCRIPT",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            
        ],
        project_link : "https://ubuyclone.vercel.app/",
        project_type : "Clone Project"

    },
    {
        name : "Clone of UpGrad",
        about : "Providing programs in Data Science, Technology, Management, and Law, to students, working professionals, and enterprises.",
        img : "https://images.moneycontrol.com/static-mcnews/2020/12/upGrad-logo-1.jpg?impolicy=website&width=1600&height=900",
        gitrepo : "https://sanketrmhatre.github.io/UpGrad/",
        blog : "",
        tech_stack : "HTML | CSS | JAVASCRIPT | React | Redux | MongoDB | Express | Nodejs",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
        ],
        project_link : "https://upgrad-clone-phi.vercel.app/",
        project_type : "Team Project"
    }
]



let projects__container = document.getElementById("projects--container");

Projects.forEach((pro, index) => {
  
    let main = document.createElement("div");
    main.setAttribute("class", "portfolio-item padd-15");
    main.innerHTML = `
      <div class="portfolio-item-inner shadow-dark">
        <div class="portfolio-img">
          <img src=${pro.img} alt="">
          <h3 class="project-name"><b>${pro.name}</b></h3> <br/>
          <h4 class="project-name project__about">${pro.about}</h4>
          <a href=${pro.project_link} target="_blank" class="see-project">Live💻</a>
         
        </div>
        <br/>
        <h3 class="project-name techcen"><b>Tech Stack</b></h3>
        <span>${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : ''}
          ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ''}
          ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ''}
          ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ''}
          ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ''}
          ${pro.tech_stackicons[5] ? pro.tech_stackicons[5] : ''}
          ${pro.tech_stackicons[6] ? pro.tech_stackicons[6] : ''}
          ${pro.tech_stackicons[7] ? pro.tech_stackicons[7] : ''}
          ${pro.tech_stackicons[8] ? pro.tech_stackicons[8] : ''}
          ${pro.tech_stackicons[9] ? pro.tech_stackicons[9] : ''}
        </span>
      </div>
    </div>`;
    projects__container.append(main);
  
});
