
import krushibook from "./../assets/portfolioImages/krushibook.png";
import mario from "./../assets/portfolioImages/mario.png";
import hms from "./../assets/portfolioImages/hms.jpg";
import Page from "./../assets/portfolioImages/intropage.jpg";
// import AWS from "./../assets/portfolioImages/s3.PNG";

import tslogo from "./../assets/portfolioImages/tslogo.png"
// in progress projects

import akatsuki from './../assets/portfolioImages/akatsuki.jpg'
import landingPage from './../assets/portfolioImages/url.jpg'

const ProjectsData = [
  {
    id: "vanlife",
    img: tslogo,
    name: "TechSphere",
    stack: ["< Android Studio />", "< Firebase />"],
    live: "",
    source: "https://github.com/yess-wee/TechSphere",
    description:
      "TechSphere is a dynamic platform fostering seamless collaboration and resource sharing between students and faculty. It simplifies document management with easy PDF uploads and downloads while supporting a variety of file formats for faculty members. Students can utilize unique features like the CPI predictor module for academic forecasting and the scheduler module for task organization. With TechSphere, academic pursuits are streamlined, empowering users in their educational journey.",
  },
  {
    id: "fyp",
    img: akatsuki,
    name: "Akatsuki",
    stack: ["< React Js />"],
    live: "",
    source: "https://github.com/yess-wee/Akatsuki",
    description:
      "Akatsuki is a streamlined ReactJS-based web application tailored for testing GET and POST API requests. Developers can effortlessly configure URLs, set parameters, and analyze responses directly through its intuitive interface. The tool supports customization with headers and tokens, enhancing API integration and debugging tasks. Ideal for rapid development cycles, Akatsuki provides clear feedback on API behavior, improving efficiency in building and maintaining web services.",
  },
  {
    id: "rest-countries",
    img: krushibook,
    name: "KrushiBook",
    stack: ["< SpringBoot/>", "< MySQL />", "< React.js />"],
    live: "",
    source: "https://github.com/yess-wee/krushibookProject",
    description:
      "KrushiBook is a comprehensive full-stack website tailored for farmers, providing a platform to meticulously document their crop cultivation journey. Farmers can effortlessly log details of their crops grown, including variety, planting dates, and yield forecasts, enhancing productivity tracking and planning. With a user-friendly dashboard, stakeholders such as suppliers, buyers, and agricultural experts gain real-time insights into the farming activities, fostering transparency and collaboration. Additionally, the website facilitates direct communication channels, enabling stakeholders to engage with farmers seamlessly for inquiries or collaborations. KrushiBook revolutionizes farm management, bridging the gap between farmers and stakeholders for a thriving agricultural ecosystem.",
  },

  {
    id: "space-tourism",
    img: mario,
    name: "Mario - clone",
    stack: ["< JavaScript />", "< Html />","< Css />"],
    live: "https://react-space-tourism-website-alpha.vercel.app/",
    source: "https://github.com/rimshub/react-space-tourism-website",
    description:
      "Multi-page space tourism website provides relevent information for users. It has a responsive design and navigation. A large and complex project that required me to plan ahead and break down the work into smaller chunks. I used React.js to build the website and CSS3 for styling.",

  },
 

  {
    id: "advice-generator",
    img: hms,
    name: "Hotel Management System",
    stack: ["< Postgres />"],
    live: "",
    source: "https://github.com/yess-wee/Hotel-Management-System",
    description:
      "Our Hotel Management System DBMS project utilizes PostgreSQL to enhance hotel operations by integrating reservations, customer details, room services, and billing into a single database. PostgreSQL's reliability supports complex queries and ensures data integrity, which is crucial for real-time operational efficiency and improved service delivery. This system provides a comprehensive and streamlined approach to managing various hotel administrative tasks effectively.",
  },


];

const InprogressProjectsData = [

  {
    id: "url-short",
    img: landingPage,
    name: "URL shortening API landing page",
    stack: ["< JavaScript />", "< NodeJS />"],
    live: "",
    source: "https://github.com/yess-wee/portfolio",
    description:
      "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge",
  },

];

export default { ProjectsData, InprogressProjectsData }