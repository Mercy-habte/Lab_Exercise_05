/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/

// Define UI Variables  here
const info = document.querySelectorAll(".collection"); // All collection classes
// location Information
const locationInfo = info[0]; // The first collection class
const locationInfoChildren = locationInfo.querySelectorAll(".collection-item"); // all collection-item classes in the 1st collection class
const hrefLink = locationInfoChildren[0];
const protocolLink = locationInfoChildren[1];
const hostLink = locationInfoChildren[2];
const portLink = locationInfoChildren[3];
const hostNameLink = locationInfoChildren[4];
// Browser Information
const browserInfo = info[1]; // the second collection class
const browserInfoChildren = browserInfo.querySelectorAll(".collection-item"); // all collection-item classes in the 2nd collection class
const appNameLink = browserInfoChildren[0];
const appVersionLink = browserInfoChildren[1];
const platformLink = browserInfoChildren[2];
const languageLink = browserInfoChildren[3];
const cookieEnabledLink = browserInfoChildren[4];
// Screen Information
const screenInfo = info[2]; // The third collection class
const screenInfoChildren = screenInfo.querySelectorAll(".collection-item"); // all collection-item classes in the 3rd collection class
const heightLink = screenInfoChildren[0];
const widthLink = screenInfoChildren[1];
const pixelDepthLink = screenInfoChildren[2];
// Browsing History Information
const historyInfo = info[3]; // The fourth collection class
const historyInfoChildren = historyInfo.querySelectorAll(".collection-item"); // all collection-item classes in the 4th collection class
const lengthLink = historyInfoChildren[0];
const stateLink = historyInfoChildren[1];

const reloadIcon = document.querySelector(".fa"); // the reload button at the top right of navigation
// Reload Page Function [BOM Object Event]
function reloadPage() {
  // using the reload fun on location object
  location.reload();
}
// Event Listener for reload
reloadIcon.addEventListener("click", reloadPage);

hrefLink.firstElementChild.innerText = location.href;
protocolLink.firstElementChild.innerText = location.protocol;
hostLink.firstElementChild.innerText = location.host;
portLink.firstElementChild.innerText = location.port;
hostNameLink.firstElementChild.innerText = location.hostname;
appNameLink.firstElementChild.innerText = navigator.appName;
appVersionLink.firstElementChild.innerText = navigator.appVersion;
platformLink.firstElementChild.innerText = navigator.platform;
languageLink.firstElementChild.innerText = navigator.language;
cookieEnabledLink.firstElementChild.innerText = navigator.cookieEnabled;
heightLink.firstElementChild.innerText = screen.height;
widthLink.firstElementChild.innerText = screen.width;
pixelDepthLink.firstElementChild.innerText = screen.pixelDepth;
lengthLink.firstElementChild.innerText = history.length;
stateLink.firstElementChild.removeChild(stateLink.firstElementChild.firstChild);
stateLink.firstElementChild.appendChild(document.createTextNode(history.state));
// stateLink.firstElementChild.innerText = history.state;
