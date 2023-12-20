// Tech Stack imports
import pythonURL from "./assets/pixel_python.png";
import pytorchURL from "./assets/pixel_pytorch.png";
import javascriptURL from "./assets/pixel_javascript.png";
import threejsURL from "./assets/pixel_three.png";
import cURL from "./assets/pixel_c.png";
import cssURL from "./assets/pixel_css.png";
import javaURL from "./assets/pixel_java.png";
import reactURL from "./assets/pixel_reactjs.png";
import typescriptURL from "./assets/pixel_ts.png";

// Resume import
import resumeURL from './assets/Resume_Kedar_Sem5.pdf';

// Header
const titles = [
    {
        tag: "{ COMPUTER ENGINEER }",
        color: "#52A8FF"
    },
    {
        tag: "{ ML / DL ENGINEER }",
        color: "#8CABFF"
    },
    {
        tag: "{ FRONTEND DEVELOPER }",
        color: "#08b59e"
    },
    {
        tag: "{ UI / UX DESIGNER }",
        color: "#03C988"
    },
]

// Tech Header config
const defaultHeader = "&lt;<span class='highlight'> / </span>&gt;";
const animationTime = 120;

// Tech Stack config
const tech_stack = {
    tech_python: {
        tag: "Python",
        url: pythonURL,
        filter: "brightness(1.2)",
        color: "rgb(18, 159, 201)",
        noise: 0.1,

        saturation: 0,
        pixelationFactor: 8,
        image: new Image(),
    },
    
    tech_js: {
        tag: "Javascript",
        url: javascriptURL,
        filter: "brightness(1.2) contrast(1.1)",
        color: "rgb(196, 178, 16)",
        noise: 0.08,

        saturation: 0,
        pixelationFactor: 8,
        image: new Image(),
    },
    
    tech_css: {
        tag: "CSS styling",
        url: cssURL,
        filter: "brightness(1.25) contrast(1.1)",
        color: "rgb(30, 131, 214)",
        noise: 0.08,

        saturation: 0,
        pixelationFactor: 8,
        image: new Image(),
    },
    
    tech_react: {
        tag: "ReactJS",
        url: reactURL,
        filter: "brightness(1) ",
        color: "rgb(30, 192, 214)",
        noise: 0.2,

        saturation: 0,
        pixelationFactor: 8,
        image: new Image(),
    },
    
    tech_c: {
        tag: "C_programming",
        url: cURL,
        filter: "brightness(1.25)",
        color: "rgb(55, 63, 184)",
        noise: 0.08,

        saturation: 0,
        pixelationFactor: 8,
        image: new Image(),
    },
    
    tech_pytorch: {
        tag: "PyTorch",
        url: pytorchURL,
        filter: "brightness(1.25) contrast(1.25)",
        color: "rgb(240, 77, 28)",
        noise: 0.25,

        saturation: 0,
        pixelationFactor: 7,
        image: new Image(),
    },
    
    tech_threejs: {
        tag: "ThreeJS",
        url: threejsURL,
        filter: "brightness(0.825) contrast(1.4)",
        color: "rgb(161, 161, 161)",
        noise: 0.2,

        saturation: 0,
        pixelationFactor: 7,
        image: new Image(),
    },
    
    tech_java: {
        tag: "Java",
        url: javaURL,
        filter: "brightness(1.5) contrast(1.1)",
        color: "rgb(226, 137, 12)",
        noise: 0.2,

        saturation: 0,
        pixelationFactor: 9,
        image: new Image(),
    },
    
    tech_ts : {
        tag: "Typescript",
        url: typescriptURL,
        filter: "brightness(1.3) contrast(1.1)",
        color: "rgb(47, 117, 193)",
        noise: 0.08,

        saturation: 0,
        pixelationFactor: 8,
        image: new Image(),
    },
}

export {titles, defaultHeader, animationTime, tech_stack, resumeURL};