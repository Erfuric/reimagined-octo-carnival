# MixMate

[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Project Summary

To build both the back-end and front-end of a music playlist creation and sharing platform web application.  This will require extensive coding, and configuring a working 
Express.js API using Sequelize to interact with a MySQl database. The application will use Express-session to maintain security through log-in functionality and a hash password.  

The functionality will include:
- Users log-in.
- Create playlists (Song Title-Artist-Genre).
- Ability to create/edit playlists.
- Ability to view other user playlists.

## Project Team

- Alyshia Kandler: Project Manager
- Tom Parker:
- Callum Mackintosh:
- Neale Chapman:

## Packages Used

|          Package               |                                      Description                                                                             |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Node.js                        |Executes JavaScript code outside a web browser.                                                                               |
| MySql                          |A relational databse management system based on structured query language (SQL).                                              |              
| Sequelize                      |A modern TypeScript and Node.js Object Relational Mapping (ORM) that offers solid transaction support.                        |
| Connect-Session-Sequelize      |A session store for connecting a session using sequelize.                                                                     |
| Express.js                     |A Node.js web application framework providing broad features to build web & mobile application.                               |
| Express.Handlebars             |A simple template language to generate HTML or other text formats, includes embedded Handlebar expressions.                   |
| Express-Session                |Stores the session data on the client in a cookie. Will expires & require logging in again if site left idle for set-time.    |
| dotenv                         |Used to store environment variables data used by the operating system and other programs (DB_Name, DB_User, B_PW).            |             
| Bcrypt                        |A password hashing function.                                                                                                  |
| Insomnia AAPI Design Platform  |A collaborative API client and Design Tool.                                                                                   |
| Tailwind CSS                   |A utility-first CSS framework designed to enable users to create a completely custom component design within their HTML.      |         
| Date-fns.org                   |Provides the most comprehensive yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.   |

## MixMate

The MixMate web application is an easy to use application to create music playlists and share them. It is a fun way to store and enjoy your favourite songs for both you and your family & friends enjoyment. It has been purposely designed to meet a number of non-functional requirements including functionality, inviting aesthetics and a secure environment where users are required to login using a username and a password that is hashed for extra security.

## Project Description
 
The main objective of this project was for a project team to build the back-end and front-end of an application from scratch. This included but was not limited to coding the following main file types and linking them:

- connection.js
- Multiple routes
- schema.sql
- Models
- Multiple Javascript files
- Seeds
- auth.js, helpers.js
- Eight handlebar files
- Server.js

The project also required loading a range of software packages and pushing work completed to Github by creating branches, with submitted work being approved before being loaded to Github.

## Usage

To access the MixMate web application homepage at the command-line the following commands are entered:

- mysql -u root-p
- Enter password
- USE mixmate_db
- quit or \n to leave 'sql'
- npm run seeds
- node server.js

Upon successfully entering these commands the sentence **"App listening on port 3001!"** is displayed.

At this point the user either navigates to insomnia or the web browser and enters "localhost:3001", then presses send or enter based on which application.

The home page of the MixMate application is displayed and the user logs in.  Upon successful log-in the user uses a horizontal menu bar to either create, update or share their playlist.

## Deployed Application and Screenshots

Link: https://mixmate.herokuapp.com/login

### Screenshots

![image](https://user-images.githubusercontent.com/115671306/225545309-94bd4115-5dd0-400d-868c-c12f35758de9.png)

![image](https://user-images.githubusercontent.com/115671306/225545399-0387ef61-92cc-4731-a35b-a00001ae5b84.png)

![image](https://user-images.githubusercontent.com/115671306/225545460-b570608c-52e8-4634-93ae-5c8041c6a935.png)

![image](https://user-images.githubusercontent.com/115671306/225545518-ca7ff50e-7635-4307-98c9-c76dd711dcee.png)

## License

MIT 
