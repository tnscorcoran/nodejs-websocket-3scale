# Nodejs Websocket 3scale

An example Websocket API protected by 3scale, deployed on OpenShift Container Platform
Based on git hub repo ajb413 nodejs-websocket-examples. Thanks guys.
### Prerequisites
- Access to an OpenShift Server. 
If you don't have one, you can install OpenShift Local on your laptop.
- Access to a 3scale instance. 
If you don't have one, you can install a community version, from the Operator Hub within your OpenShift instance

## Install API Locally

```
git clone https://github.com/tnscorcoran/nodejs-websocket-3scale
cd nodejs-websocket-3scale
export REPO_HOME=`pwd`
```

### Install NodeJs if necessary and install modules
```
npm install
```

### Start local server
```
node websocket-server.js
```
It will appear like this - listening for requests:
<img src="./images/server-terminal1.png" alt="drawing" width="600"/> 


### Modify client.html and call your local Node Js server
Open client.html, uncomment the line that calls *localhost* and save the file.
<img src="./images/client-html.png" alt="drawing" width="600"/> 

Drag client.html to a browser like Chrome. Right click and click ***Inspect***. Click ***Console***. You'll see every 4 seconds a new message from the web socket server.

<img src="./images/web browser.png" alt="drawing" width="600"/> 



Similarly, your server terminal will also be updating:
<img src="./images/server-terminal2.png" alt="drawing" width="600"/> 


Close your server by typing 
```
CTRL + c
```

## Install Websockets API on OpenShift

### Push to a public registry like Dockerhub
Do the following
 - If you don't have one, create a free account on a public registry like DockerHub. 
 - If necessary install a Docker client (or podman) on your laptop.
 - Start the Docker client on your laptop
 - Now login to Dockerhub on a terminal - with your credentials
```
docker login
``` 

Think of a name for your websockets server app, e.g. ***my-websockets-api***. Run the following, replacing ***my-websockets-api*** with your API name and ***mydockerusername*** with your actual username
```
docker build . -t mydockerusername/my-websockets-api:latest
docker tag mydockerusername/my-websockets-api:latest mydockerusername/my-websockets-api:latest
docker push mydockerusername/my-websockets-api:latest
```

After a few minutes, this should be pushed to Dockerhub where you will see it under the *Repositories* menu once logged in.

## Install and test your Websockets API on OpenShift

### Login to OpenShift and pull down your container from Dockerhub
Login to OpenShift and select the Developer perspective from the dropdown on the top left

<img src="./images/openshift-1-dev-admin-menu.png" alt="drawing" width="600"/> 

Click the Project dropdown and click Create Project. Name it something like *b-node-websockets* or whatever your preference is
<img src="./images/openshift-2-project-create.png" alt="drawing" width="600"/> 

Click **Add** then click **Container Images**
<img src="./images/openshift-3-add-container-images.png" alt="drawing" width="600"/>

Fill it in as follows
- pull in your value for ***my-websockets-api*** that you created earlier (in my case *tnscorcoran/node-websocket*)
- add it to an application called node-websocket
- ensure Route is not a Secure Route (Advanced Routing options)
- expose port - 8080

As shown in these two screenshots:
<img src="./images/openshift-4-deploy-1.png" alt="drawing" width="600"/>

<img src="./images/openshift-4-deploy-2.png" alt="drawing" width="600"/>


As soon as your deployment, represented by the circle on the canvas turns dark blue, as you see here, click the centre of the circle and scroll down to the route. That's your OpenShift Route to the WebSocket API. Copy it.


x

x

x

mydockerusername/my-websockets-api