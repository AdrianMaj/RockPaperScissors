(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const g=document.querySelector(".rules-btn"),u=document.querySelector(".rules-modal"),f=document.querySelector(".rules-modal__close-btn"),h=document.querySelector(".rules-background"),y=document.querySelector(".game"),v=document.querySelector(".game__background"),L=document.querySelectorAll(".game__text"),c=document.querySelector(".game__house");let l;const b=document.querySelectorAll(".game__icon");document.querySelector(".game__container");const i=document.querySelector(".game__house-photo"),S=document.querySelector(".result"),q=document.querySelector(".result__play-again-btn"),p=document.querySelector(".result__text"),E=document.querySelector(".score__value");let r,a=Number(sessionStorage.getItem("score"));Number(sessionStorage.getItem("score"))>0&&(E.textContent=sessionStorage.getItem("score"));const k=()=>{u==null||u.classList.add("active"),h.classList.add("background-visible")},x=()=>{u==null||u.classList.remove("active"),h.classList.remove("background-visible")},_=n=>{l=n.target,l.classList.add("selected"),l.removeEventListener("click",_),c.removeEventListener("click",_),l.style.margin="0 auto",c.style.margin="0 auto",b.forEach(e=>{if(!e.classList.contains("selected")){const o=e;o.style.display="none",v.style.display="none",L.forEach(d=>{var t;if(((t=d.parentElement)==null?void 0:t.style.display)!="none"){const s=d;s.style.display="block",c.style.display="flex",y.style.gridTemplateColumns="1fr 2fr 2fr 1fr",y.style.gridTemplateRows="1fr 1.2fr"}})}}),setTimeout(()=>{c.classList.remove("game__house"),c.classList.add(I()),c.classList.contains("game__paper")?(i.style.display="block",i.setAttribute("src","./src/img/icon-paper.svg")):c.classList.contains("game__scissors")?(i.style.display="block",i.setAttribute("src","./src/img/icon-scissors.svg")):c.classList.contains("game__rock")&&(i.style.display="block",i.setAttribute("src","./src/img/icon-rock.svg"));const e=Number(l.getAttribute("data-id"));if(S.classList.add("visible"),y.style.gap="15em",r==0&&e==0||r==1&&e==1||r==2&&e==2)p.textContent="draw";else if(r==0&&e==2||r==1&&e==0||r==2&&e==1){p.textContent="you lose",a>0&&a--,sessionStorage.setItem("score",`${a}`);const o=document.createElement("div");o.classList.add("circle-effect"),c.appendChild(o),setTimeout(()=>{c.removeChild(o)},2e3)}else if(r==0&&e==1||r==1&&e==2||r==2&&e==0){p.textContent="you win",a<=99&&a++,sessionStorage.setItem("score",`${a}`);const o=document.createElement("div");o.classList.add("circle-effect"),l.appendChild(o),setTimeout(()=>{l.removeChild(o)},2e3)}},1e3)},C=()=>{location.reload()},I=()=>{const n=Math.floor(Math.random()*3),e=b[n];return r=n,e.classList[0]};g==null||g.addEventListener("click",k);f==null||f.addEventListener("click",x);b.forEach(n=>{n.addEventListener("click",_)});q.addEventListener("click",C);
