(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();const c=[{tag:"{ COMPUTER ENGINEER }",color:"#52A8FF"},{tag:"{ ML / DL ENGINEER }",color:"#8CABFF"},{tag:"{ FRONTEND DEVELOPER }",color:"#08b59e"},{tag:"{ UI / UX DESIGNER }",color:"#03C988"}],S="&lt;<span class='highlight'> / </span>&gt;",n=120,R={tech_python:{tag:"Python",url:"./assets/pixel_python.png",filter:"brightness(1.2)",color:"rgb(18, 159, 201)",noise:.1,saturation:0,pixelationFactor:8,image:new Image},tech_js:{tag:"Javascript",url:"./assets/pixel_javascript.png",filter:"brightness(1.2) contrast(1.1)",color:"rgb(196, 178, 16)",noise:.08,saturation:0,pixelationFactor:8,image:new Image},tech_css:{tag:"CSS styling",url:"./assets/pixel_css.png",filter:"brightness(1.25) contrast(1.1)",color:"rgb(30, 131, 214)",noise:.08,saturation:0,pixelationFactor:8,image:new Image},tech_react:{tag:"ReactJS",url:"./assets/pixel_reactjs.png",filter:"brightness(1) ",color:"rgb(30, 192, 214)",noise:.2,saturation:0,pixelationFactor:8,image:new Image},tech_c:{tag:"C_programming",url:"./assets/pixel_c.png",filter:"brightness(1.25)",color:"rgb(55, 63, 184)",noise:.08,saturation:0,pixelationFactor:8,image:new Image},tech_pytorch:{tag:"PyTorch",url:"./assets/pixel_pytorch.png",filter:"brightness(1.25) contrast(1.25)",color:"rgb(240, 77, 28)",noise:.25,saturation:0,pixelationFactor:7,image:new Image},tech_threejs:{tag:"ThreeJS",url:"./assets/pixel_three.png",filter:"brightness(0.825) contrast(1.4)",color:"rgb(161, 161, 161)",noise:.2,saturation:0,pixelationFactor:7,image:new Image},tech_java:{tag:"Java",url:"./assets/pixel_java.png",filter:"brightness(1.5) contrast(1.1)",color:"rgb(226, 137, 12)",noise:.2,saturation:0,pixelationFactor:9,image:new Image},tech_ts:{tag:"Typescript",url:"./assets/pixel_ts.png",filter:"brightness(1.3) contrast(1.1)",color:"rgb(47, 117, 193)",noise:.08,saturation:0,pixelationFactor:8,image:new Image}};function j(e){return e.reduce((r,s)=>r+s,0)/e.length}function C(e){const t=e.image,r=e.element.querySelector("canvas"),s=r.getContext("2d",{willReadFrequently:!0}),o=e.saturation,a=e.pixelationFactor,m=e.noise,g=t.width,y=t.height,H=g,F=y;r.width=H,r.height=F,s.clearRect(0,0,H,F),s.drawImage(t,0,0,g,y);const L=s.getImageData(0,0,g,y).data;for(let u=0;u<y;u+=a)for(let p=0;p<g;p+=a){const x=(p+u*g)*4;let v=1;//! RANDOM NOISE STRENGTH = SATURATION * NOISE FRACTION
Math.random()<o*m&&(v=2);let b=[L[x]/v,L[x+1]/v,L[x+2]/v],T=j(b),w;Math.random()<o?w=`rgb(
                ${b[0]},
                ${b[1]},
                ${b[2]}
            )`:w=`rgb(${T}, ${T}, ${T})`,s.fillStyle=w,s.fillRect(p,u,a,a),s.strokeSyle="black",s.strokeRect(p,u,a,a)}}function q(e){clearInterval(e.animationInterval),e.animationInterval=setInterval(()=>{e.saturation+=.3,e.saturation=Math.min(e.saturation,1),C(e)},120)}function B(e){clearInterval(e.animationInterval),e.animationInterval=setInterval(()=>{e.saturation-=.3,e.saturation<=0&&(e.saturation=Math.max(e.saturation,0),clearInterval(e.animationInterval)),C(e)},120)}function D(e){e.image.src=e.url,e.element.querySelector("canvas").style.filter=e.filter,e.image.onload=()=>{C(e),e.element.addEventListener("mouseenter",()=>{_=!0,M(e),q(e)}),e.element.addEventListener("mouseleave",()=>{_=!1,setTimeout(()=>{_||Y()},n*2),B(e)})}}function O(){let e=document.createElement("span");return e.classList.add("tech-header-span"),J.appendChild(e),e}function M(e){let t=O();t.innerHTML=e.tag,t.style.color=e.color,t.style.transformOrigin="top",t.style.transform="scaleY(0)",t.style.opacity=0,t.style.transition=`transform ${n}ms linear, opacity ${n}ms ease-in`,setTimeout(()=>{t.style.transform="scaleY(1)",t.style.opacity=1},10),i.style.transition=`transform ${n}ms linear, opacity ${n}ms ease-in`,i.style.transformOrigin="bottom",i.style.transform="scaleY(0)",i.style.opacity=0,setTimeout(()=>{i.remove(),i=t},n)}function Y(){M({tag:S,color:"white"})}function A(){i=O(),i.innerHTML=S,i.style.color="white";for(let t=0;t<9;t++){const r=document.createElement("div");r.classList.add("tech-icon");const s=document.createElement("canvas");s.classList.add("tech-img"),r.appendChild(s),document.getElementById("tech").append(r)}let e=0;for(const[t,r]of Object.entries(R))r.element=document.getElementsByClassName("tech-icon")[e+1],D(r),e++}let i,_=!1;const J=document.getElementById("tech-header-container");A();function I(e,t){let r=document.createElement("div");r.classList.add("cross"),r.classList.add(`cross-${e}`);let s=document.createElement("div");s.classList.add("cross-half-vertical");let o=document.createElement("div");o.classList.add("cross-half-horizontal"),r.appendChild(s),r.appendChild(o),t.appendChild(r)}function G(e){I("top-left",e),I("bottom-right",e)}function U(e){I("top-right",e),I("bottom-left",e)}document.querySelectorAll(".cross-section").forEach(e=>{G(e)});document.querySelectorAll(".cross-section-reverse").forEach(e=>{U(e)});const N=document.getElementById("hero-subtitle");function V(e){let t=document.createElement("span");return t.classList.add("hero-subtitle-span"),t.classList.add("hero-subtitle-span-up"),t.innerHTML=e,t}let h=0,l=N.querySelector("span");l.style.color=c[0].color;document.querySelector(":root").style.setProperty("--highlight-color",c[0].color);setInterval(()=>{h=(h+1)%c.length;let e=c[h];document.querySelector(":root").style.setProperty("--highlight-color",c[(h+1)%c.length].color);let t=V(e.tag);N.appendChild(t),t.style.transformOrigin="top",t.style.transform="scaleY(0)",t.style.opacity=0,t.style.color=e.color,t.style.transition=`transform ${n}ms linear, opacity ${n}ms ease-in`,setTimeout(()=>{t.style.transform="scaleY(1)",t.style.opacity=1,P(d[h])},10),l.style.transition=`transform ${n}ms linear, opacity ${n}ms ease-in`,l.style.transformOrigin="bottom",l.style.transform="scaleY(0)",l.style.opacity=0,setTimeout(()=>{l.remove(),l=t},n)},4e3);const d=document.getElementsByClassName("about-code");let z="&emsp;&emsp;&emsp;&emsp;&emsp;";for(let e=0;e<d.length;e++)d[e].style.color=c[e].color,d[e].innerHTML=`${z}${d[e].innerHTML}`;let E=document.createElement("span");E.classList.add("editor-pointer");E.innerHTML="&nbsp;|";function P(e){E.remove(),e.appendChild(E)}P(d[0]);const $=document.getElementById("bottom-vignette");window.addEventListener("scroll",e=>{window.scrollY>=80?$.style.opacity=.2:$.style.opacity=1});const f=document.getElementsByClassName("project-container"),W=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?t.target.classList.add("show"):t.target.classList.remove("show")})});for(let e=0;e<f.length;e++){W.observe(f[e]);let t=document.createElement("div");e%2?t.classList.add("project-divider-right"):t.classList.add("project-divider-left"),f[e].appendChild(t)}f[f.length-1].style.borderBottom="none";
