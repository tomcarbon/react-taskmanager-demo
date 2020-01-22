REACT-TASKMANAGER-DEMO (dockerized 20200121)

******************************************************

ScreenShots: [link](https://imgur.com/a/C0HCGSL)

This project is a node/React webpage, a simple Task Manager application. It demonstrates several key React functionalities and other ideas, including:

    Lifting State up
    Using modals
    Session Storage

This application allows for the creation, editing, deletion and prioritization of tasks (high, medium, low). The program will not retain memory between sessions -- Refreshing the browser (e.g. F5) will delete any entered task data.

The program is easy to install if you're running linux: first install docker. Then run the 'doit' script (options b, then r). Finally, after a minute, check localhost on your browser.

Notes

1) The first time is probably going to take several minutes, a couple warnings, and the install may even appear to hang after the "Happy hacking! Done in xx.xxs." messages. Hang in there. After the first time things should go much quicker. Also, the first time, if you get a timeout error (esp. with yarn install), run option 'b' again and that should resolve the issue.
2) After running the container, make sure to give yarn about a minute to start up the server, before checking the output on your browser at localhost.
3) 'doit' is a LINUX script. If you are not running linux then deconstruct this script to determine your build and run docker commands.
4) If you do not wish to run docker, you can run npm install and npm start from the react-taskmanager-demo directory.

******************************************************

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), also the [docker-react-website-starter](https://github.com/tomcarbon/docker-react-website-starter).

