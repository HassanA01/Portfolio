import BizReach from "../../assets/projects/bizreach.png";
import FriendServer from "../../assets/projects/friendserver.png";
import ThreeMusk from "../../assets/projects/three_musks.jpg";
import Portfolio from "../../assets/projects/portfolio.png"
import BizReach2 from "../../assets/realestate.jpg";

import { Link } from "react-scroll";
export const data=[
    {
        id:1,
        name:"BizReach Marketplace",
        image:BizReach,
        github:"https://github.com/HassanA01/final-project-s23-cd-users-baddies",
        live:"",
    },
    {
        id:2,
        name:"Social Media CLI",
        image:FriendServer,
        github:"https://github.com/HassanA01/FriendServer",
        live:"",
    },
    {
        id:3,
        name:"Three Musketeers Board Game",
        image:ThreeMusk,
        github:"https://github.com/HassanA01/ThreeMusketeersGame",
        live:"",
    },
    {
        id:4,
        name:"My Portfolio",
        image:Portfolio,
        github:"",
        live: `${<Link to="home" smooth={true} duration={500}></Link>}`,
    },
    // {
    //     id:5,
    //     name:"React JS Application",
    //     image:BizReach2,
    //     github:"",
    //     live:"",
    // },
    // {
    //     id:6,
    //     name:"React JS Application",
    //     image:BizReach2,
    //     github:"",
    //     live:"",
    // },


]