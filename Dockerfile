#pull base image
FROM ubuntu:18.04

# apply updates and install a bunch of things
RUN \
  sed -i 's/# \(.*multiverse$\)/\1/g' /etc/apt/sources.list && \
  apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y build-essential && \
  apt-get install -y software-properties-common && \
  apt-get install -y byobu curl git htop man unzip vim wget iputils-ping && \
  apt-get install -y nodejs npm

#install yarn and create a generic react-app project
WORKDIR /app
RUN npm install yarn -g
RUN yarn create react-app docker-react-website-starter

#copy the quick starter project to replace the generic react-app project
COPY src/ /app/docker-react-website-starter/src/
COPY public/ /app/docker-react-website-starter/public/

#run the server
EXPOSE 80
WORKDIR /app/docker-react-website-starter
CMD ["yarn","start"]
