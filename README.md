
**DOCKER-REACT-WEBSITE-STARTER**

******************************************************************************

TLDR: This is intended to be a quick starter for getting a node/react website (template for a brick-and-mortar retail establishment) up and running in a docker container.

******************************************************************************

Here is a website that runs from a docker container on localhost port 80, utilizing yarn, node, and react. 

The docker container uses a robust installation of Ubuntu 18.04 with several common tools (such as htop and vim) installed. The node/React website itself is of low-medium complexity, built for a ficticious business, featuring a home page with several menu items and navigation, some images, and a method for supporting multiple languages (configured for English/Spanish in this example).


**Prerequisites**

1) docker needs to be installed.

2) 'doit' is a LINUX script. If you are not running linux then deconstruct this script for your docker commands as appropriate.

**To Run**

Run the script "doit" (options b, then r) to build and then run this website. Shortly after the container has started running, the website should be accessible via the browser at 'localhost'.
 
**Notes**
1) The first time is probably going to take several minutes, and the install may even appear to hang after the "Happy hacking! Done in xx.xxs." messages. Hang in there. After the first time things should go MUCH quicker.
2) After running the container, make sure to give yarn a few seconds to start up the server, before checking the output on your browser at localhost.
3) The footer in the Services and Testimonials screens drops into the right place after content is added.
4) To use your own project (which was created by create react-app or create-react-app), replace the src and public folders with your own. Depending on the complexity of your site, you may need to add additional steps to the Dockerfile (e.g.: copy package.json file, RUN yarn install).

**Known Issues**
1) On the docker image build there are some warnings on the yarn calls, related to typescript/react-scripts. Installing the latest version of typescript in the Dockerfile before the call to "yarn create react-app" does not alleviate the issue. There is also a warning related to sha.js. If anyone can help make these go away, please advise.

************************************************

Here is a screenshot: https://imgur.com/a/uenB4vn

*(this page last updated: 20200116)*
