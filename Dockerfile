#pull base image
FROM ubuntu:18.04

# apply updates and install a bunch of things
RUN \
  apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y build-essential && \
  apt-get install -y software-properties-common && \
  apt-get install -y byobu curl git htop man unzip vim wget iputils-ping && \
  apt-get install -y nodejs npm

#install yarn and create a generic react-app project
WORKDIR /app
RUN npm install yarn -g
RUN yarn create react-app react-taskmanager-demo

#copy the taskmanager demo project to replace the generic react-app project
COPY src/ /app/react-taskmanager-demo/src/
COPY public/ /app/react-taskmanager-demo/public/

#copy the package manager file over, and install.
COPY package.json /app/react-taskmanager-demo/
WORKDIR /app/react-taskmanager-demo
RUN yarn install


#run the server
EXPOSE 80
CMD ["yarn","start"]
