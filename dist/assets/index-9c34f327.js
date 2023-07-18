(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}})();const m=document.querySelector(".rules-btn"),i=document.querySelector(".rules-modal"),f=document.querySelector(".rules-modal__close-btn"),S=document.querySelector(".game"),h=document.querySelector(".game__background"),L=document.querySelectorAll(".game__text"),d=document.querySelector(".game__house");let n;const g=document.querySelectorAll(".game__icon");document.querySelector(".game__container");const _=document.querySelector(".result"),b=document.querySelector(".result__play-again-btn"),y=document.querySelector(".result__text"),v=document.querySelector(".score__value");let o,l=Number(sessionStorage.getItem("score"));Number(sessionStorage.getItem("score"))>0&&(v.textContent=sessionStorage.getItem("score"));const E=()=>{i==null||i.classList.add("active")},q=()=>{i==null||i.classList.remove("active")},p=r=>{n=r.target,n.classList.add("selected"),n.removeEventListener("click",p),n.style.margin="0 auto",d.style.margin="0 auto",g.forEach(e=>{if(!e.classList.contains("selected")){const c=e;c.style.display="none",h.style.display="none",L.forEach(a=>{var t;if(((t=a.parentElement)==null?void 0:t.style.display)!="none"){const s=a;s.style.display="block",d.style.display="flex",S.style.display="flex"}})}}),setTimeout(()=>{d.classList.remove("game__house"),d.classList.add(I());const e=Number(n.getAttribute("data-id"));if(_.classList.add("visible"),o==0&&e==0||o==1&&e==1||o==2&&e==2)y.textContent="draw";else if(o==0&&e==2||o==1&&e==0||o==2&&e==1){y.textContent="you lose",l>0&&l--,sessionStorage.setItem("score",`${l}`);const c=document.createElement("div");c.classList.add("circle-effect"),d.appendChild(c)}else if(o==0&&e==1||o==1&&e==2||o==2&&e==0){y.textContent="you win",l<=99&&l++,sessionStorage.setItem("score",`${l}`);const c=document.createElement("div");c.classList.add("circle-effect"),n.appendChild(c)}},1e3)},x=()=>{location.reload()},I=()=>{const r=Math.floor(Math.random()*3),e=g[r];return o=r,e.classList[0]};m==null||m.addEventListener("click",E);f==null||f.addEventListener("click",q);g.forEach(r=>{r.addEventListener("click",p)});b.addEventListener("click",x);
