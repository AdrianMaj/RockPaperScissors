(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const u=document.querySelector(".rules-btn"),c=document.querySelector(".rules-modal"),d=document.querySelector(".rules-modal__close-btn");document.querySelector(".game");const p=document.querySelector(".game__background"),h=document.querySelectorAll(".game__text"),m=document.querySelector(".game__house");let f;const g=document.querySelectorAll(".game__icon"),L=document.querySelector(".result"),_=document.querySelector(".result__play-again-btn"),y=document.querySelector(".result__text");let s,a=0;const b=()=>{c==null||c.classList.add("active")},S=()=>{c==null||c.classList.remove("active")};g.forEach(n=>{n.addEventListener("click",r=>{f=r.target,f.classList.add("selected"),g.forEach(t=>{if(!t.classList.contains("selected")){const i=t;i.style.display="none",p.style.display="none",h.forEach(e=>{var o;if(((o=e.parentElement)==null?void 0:o.style.display)!="none"){const l=e;l.style.display="block",m.style.display="flex"}})}}),setTimeout(()=>{m.classList.remove("game__house"),m.classList.add(v());const t=Number(f.getAttribute("data-id"));L.classList.add("visible"),s==0&&t==0||s==1&&t==1||s==2&&t==2?y.textContent="draw":s==0&&t==2||s==1&&t==0||s==2&&t==1?(y.textContent="you lose",a--,console.log(a)):(s==0&&t==1||s==1&&t==2||s==2&&t==0)&&(y.textContent="you win",a++,console.log(a))},1e3)})});const q=()=>{location.reload()},v=()=>{const n=Math.floor(Math.random()*3),r=g[n];return s=n,r.classList[0]};u==null||u.addEventListener("click",b);d==null||d.addEventListener("click",S);_.addEventListener("click",q);