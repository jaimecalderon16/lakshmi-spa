const c=document.getElementById("menu"),t=document.getElementById("burger"),e=document.querySelector(".overlay");t&&e&&(t.addEventListener("click",()=>{c.classList.add("is-active"),e.classList.toggle("is-active")}),e.addEventListener("click",()=>{c.classList.remove("is-active"),e.classList.toggle("is-active")}));document.querySelectorAll(".menu-link").forEach(l=>{l.addEventListener("click",()=>{c.classList.remove("is-active"),e.classList.remove("is-active")})});const s=document.querySelector(".search-block"),i=document.querySelector(".search-toggle"),a=document.querySelector(".search-cancel");i&&a&&(i.addEventListener("click",()=>{s.classList.add("is-active")}),a.addEventListener("click",()=>{s.classList.remove("is-active")}));
