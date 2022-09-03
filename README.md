# Nodejs Websocket 3scale

An example Websocket API protected by 3scale, deployed on OpenShift Container Platform
Based on git hub repo ajb413 nodejs-websocket-examples. Thanks guys.

## Install API Locally

```
git clone https://github.com/tnscorcoran/nodejs-websocket-3scale
cd nodejs-websocket-3scale
export REPO_HOME=`pwd`
```

#### Install NodeJs if necessary and install modules
```
npm install
```

#### Start local server
```
node websocket-server.js
```
It will appear like this - listening for requests:
<img src="./images/server-terminal1.png" alt="drawing" width="600"/> 


#### Modify client.html and call your local Node Js server
Open client.html, uncomment the line that calls *localhost* and save the file.
<img src="./images/client-html.png" alt="drawing" width="600"/> 

Drag client.html to a browser like Chrome. Right click and click ***Inspect***. Click ***Console***
<img src="./images/web browser.png" alt="drawing" width="600"/> 

You'll see every 4 seconds a new message from the web socket server.

Similarly, your server terminal will also be updating:
<img src="./images/server-terminal2.png" alt="drawing" width="600"/> 


Close your server by typing 
```
CTRL + c
```
