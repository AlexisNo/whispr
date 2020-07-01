(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{362:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("h2",{attrs:{id:"setup-with-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-with-docker"}},[t._v("#")]),t._v(" Setup with Docker")]),t._v(" "),s("p",[t._v("Requirements:")]),t._v(" "),s("ul",[s("li",[t._v("Have Docker installed")])]),t._v(" "),s("h3",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("p",[t._v("To configure the application, you need to provide a "),s("code",[t._v("local.env")]),t._v(" file.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Help")]),t._v(" "),s("p",[t._v("You can create your "),s("code",[t._v("local.env")]),t._v(" file from the "),s("code",[t._v("example.env")]),t._v(" file.")])]),t._v(" "),s("h3",{attrs:{id:"initialize-the-containers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initialize-the-containers"}},[t._v("#")]),t._v(" Initialize the containers")]),t._v(" "),s("p",[t._v("On the first start up you need to open a bash and type in the following")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ docker-compose up -d\n$ docker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it localmongo1 mongo\n")])])]),s("p",[t._v("Once in the mongoshell, run the following command to initiate the cluster.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("rs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initiate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    _id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rs0'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    members"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" _id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mongo1:27017"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" _id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mongo2:27017"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nexit\n")])])]),s("h3",{attrs:{id:"running-the-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-the-app"}},[t._v("#")]),t._v(" Running the app")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ docker-compose up\n")])])]),s("h2",{attrs:{id:"installation-without-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-without-docker"}},[t._v("#")]),t._v(" Installation without Docker")]),t._v(" "),s("h3",{attrs:{id:"install-the-whispr-node-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-the-whispr-node-application"}},[t._v("#")]),t._v(" Install the whispr node application")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("h3",{attrs:{id:"install-redis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-redis"}},[t._v("#")]),t._v(" Install Redis:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" upgrade\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" redis-server\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Troubleshooting : Windows")]),t._v(" "),s("p",[t._v("On Windows you have to install WSL Ubuntu before running the install commands")])]),t._v(" "),s("p",[t._v("Then start the server")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("redis-server\n")])])]),s("h3",{attrs:{id:"initialize-mongodb-as-a-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initialize-mongodb-as-a-cluster"}},[t._v("#")]),t._v(" Initialize MongoDB as a cluster:")]),t._v(" "),s("p",[t._v("Install current version of MongoDB from: https://www.mongodb.com/download-center/.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# In an elevated cmd:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" C:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Program Files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MongoDB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("bin\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("srv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("mongodb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("rs0-0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("srv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("mongodb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("rs0-1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmongod --replSet rs0 --port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v(" --bind_ip localhost --dbpath ./srv/mongodb/rs0-0\nmongod --replSet rs0 --port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27018")]),t._v(" --bind_ip localhost --dbpath ./srv/mongodb/rs0-1\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Connect to the first replicaset:")]),t._v("\nmongo --port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v("\n")])])]),s("p",[t._v("In the mongo shell Create the following config:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("rsconf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  _id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rs0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  members"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      _id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost:27017"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      _id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost:27018"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nrs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initiate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" rsconf "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("For all later startups of the database:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# In an elevated cmd or create a .bat File:")]),t._v("\nstart cmd.exe /k "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cd C:\\Program Files\\MongoDB\\Server'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\4"}},[t._v("\\4")]),t._v(".2"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[t._v("\\b")]),t._v('in & mongod --replSet rs0 --port 27017 --bind_ip localhost --dbpath ./srv/mongodb/rs0-0"')]),t._v("\n\nstart cmd.exe /k "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cd C:\\Program Files\\MongoDB\\Server'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\4"}},[t._v("\\4")]),t._v(".2"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[t._v("\\b")]),t._v('in & mongod --replSet rs0 --port 27018 --bind_ip localhost --dbpath ./srv/mongodb/rs0-1"')]),t._v("\n\nstart cmd.exe /k "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wsl redis-server"')]),t._v("\n")])])]),s("h3",{attrs:{id:"create-a-file-named-local-env-in-the-project-root-folder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-file-named-local-env-in-the-project-root-folder"}},[t._v("#")]),t._v(" Create a file named 'local.env' in the project root folder:")]),t._v(" "),s("p",[t._v("To configure the application, you need to provide a "),s("code",[t._v("local.env")]),t._v(" file.")]),t._v(" "),s("p",[t._v("You can create your "),s("code",[t._v("local.env")]),t._v(" file from the "),s("code",[t._v("example.env")]),t._v(" file. Most of the configuration is already done, however you will need to change the following lines.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("MONGOOSE_HOST = localhost\nMONGOOSE_HOST_READ = localhost\nMONGOOSE_PORT = 27017\nMONGOOSE_PORT_READ = 27018\n\nREDIS_HOST = localhost\nREDIS_HOST_READ = localhost\n")])])]),s("h3",{attrs:{id:"setup-a-local-aws-instance-with-localstack-optional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-a-local-aws-instance-with-localstack-optional"}},[t._v("#")]),t._v(" Setup a local AWS instance with localstack (optional)")]),t._v(" "),s("p",[t._v("If you want to work with a local file storage instead of AWS use this:")]),t._v(" "),s("ul",[s("li",[t._v("Install Docker: https://www.docker.com/products/docker-desktop")]),t._v(" "),s("li",[t._v("Install Python: https://www.python.org/downloads/")]),t._v(" "),s("li",[t._v("Install Localstack: https://github.com/localstack/localstack")]),t._v(" "),s("li",[t._v("Install AWS CLI: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# run the following parts in different shells")]),t._v("\nlocalstack start\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# wait until the first command is finished")]),t._v("\naws --endpoint-url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://localhost:4572 s3 mb s3://demo-bucket\naws --endpoint-url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://localhost:4572 s3api put-bucket-acl --bucket demo-bucket --acl public-read\n")])])]),s("p",[t._v("Add to your "),s("code",[t._v("local.env")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("AWS_S3_ENDPOINT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http://localhost:4572/\nAWS_BUCKET_NAME "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" demo-bucket\n")])])]),s("h3",{attrs:{id:"running-the-app-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-the-app-2"}},[t._v("#")]),t._v(" Running the app")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# development")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run start\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# watch mode")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run start:dev\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# production mode")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run start:prod\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);