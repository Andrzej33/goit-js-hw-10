const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),l=document.querySelector("body");t.disabled=!0;let d=null;e.addEventListener("click",(()=>{d||(t.disabled=!1,e.disabled=!0,d=setInterval((()=>{l.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,console.log("start")}),1e3))})),t.addEventListener("click",(()=>{t.disabled=!0,e.disabled=!1,clearInterval(d),d=null}));
//# sourceMappingURL=01-color-switcher.bd6297e1.js.map
