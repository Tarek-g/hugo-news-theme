(function(){let e=null,t=null;async function s(){if(t)return t;try{const e=await fetch("/index.json");return t=await e.json(),t}catch(e){return console.error("Failed to load search index:",e),[]}}async function a(){if(e)return e;const t=await s();return e=new Fuse(t,{keys:[{name:"title",weight:.4},{name:"summary",weight:.3},{name:"content",weight:.2},{name:"category",weight:.05},{name:"tags",weight:.05}],threshold:.3,includeScore:!0,includeMatches:!0,minMatchCharLength:2,ignoreLocation:!0}),e}async function r(e){if(!e||e.length<2)return[];const t=await a(),n=t.search(e,{limit:10});return n.map(e=>e.item)}function c(e,t){if(!t)return;if(e.length===0){t.innerHTML=`
        <div class="text-center text-muted-foreground py-8">
          <p class="text-lg">لا توجد نتائج</p>
          <p class="text-sm mt-2">جرّب كلمات بحث مختلفة</p>
        </div>
      `;return}t.innerHTML=e.map(e=>`
      <a href="${e.permalink}" class="block p-4 rounded-lg hover:bg-secondary transition-colors border border-border">
        <div class="flex gap-4">
          ${e.image?`
            <div class="w-24 h-16 flex-shrink-0">
              <img src="${e.image}" alt="" class="w-full h-full object-cover rounded">
            </div>
          `:""}
          <div class="flex-1 min-w-0">
            <h4 class="font-bold text-foreground mb-1 line-clamp-1">${e.title}</h4>
            <p class="text-sm text-muted-foreground line-clamp-2">${e.summary}</p>
            ${e.category?`<span class="inline-block mt-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">${e.category}</span>`:""}
          </div>
        </div>
      </a>
    `).join("")}function o(){const e=document.getElementById("search-modal"),t=document.getElementById("search-input");e&&(e.classList.remove("hidden","opacity-0","pointer-events-none"),e.classList.add("opacity-100"),e.querySelector("div")?.classList.remove("scale-95"),e.querySelector("div")?.classList.add("scale-100"),document.body.style.overflow="hidden",setTimeout(()=>t?.focus(),100))}function n(){const e=document.getElementById("search-modal"),t=document.getElementById("search-input"),n=document.getElementById("search-results");e&&(e.classList.add("opacity-0","pointer-events-none"),e.classList.remove("opacity-100"),e.querySelector("div")?.classList.add("scale-95"),e.querySelector("div")?.classList.remove("scale-100"),setTimeout(()=>{e.classList.add("hidden"),document.body.style.overflow=""},300),t&&(t.value=""),n&&(n.innerHTML=""))}function l(e,t){let n;return function(...s){clearTimeout(n),n=setTimeout(()=>e.apply(this,s),t)}}function i(){const i=document.getElementById("search-toggle"),a=document.getElementById("search-close"),t=document.getElementById("search-modal"),d=document.getElementById("search-input"),e=document.getElementById("search-results");i?.addEventListener("click",o),a?.addEventListener("click",n),t?.addEventListener("click",e=>{e.target===t&&n()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&n(),(e.ctrlKey||e.metaKey)&&e.key==="k"&&(e.preventDefault(),o())});const u=l(async t=>{const n=await r(t);c(n,e)},300);d?.addEventListener("input",t=>{const n=t.target.value.trim();n.length>=2?u(n):e&&(e.innerHTML="")}),s()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",i):i()})()