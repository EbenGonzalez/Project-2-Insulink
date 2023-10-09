# API

### Authentication Endpoints

The Authentication flow for the application is:

### User Signup/Login

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | user | User Signup              | `firstName`,`lastName`, `email`, `password`, `phone`, `birth_Date` , `debut_date`  | { token: `token` }
POST   | /auth/login      | -     | user | User Login               | `email`, `password`                             | { token: `token` }

### User Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /user            | YES   | doctor | Get All Users            |  `query params`                            | [{user}]
GET    | /user/me    | YES   | user | Get Own Profile          |                                                |  {user}
GET    | /user/:userId        | YES   | doctor | Get One User             |                                             |  {user}
POST   | /user            | YES   | admin | Create one user         |`firstName`,`lastName`, `email`, `password`, `phone`, `birth_Date` , `debut_date` | {user}
PUT    | /user/me    | YES   | user | Update own profile       |`firstName`,`lastName`, `email`, `password`, `phone`, `birth_Date` , `debut_date` | {message: 'Profile updated'}
PUT    | /user/password   | YES   | user  | Reset password          | `newPassword` `repeatPassword`                                    | { message: 'Password updated }
PUT    | /user/:userId       | YES   | admin | Update one user         |  `firstName`,`lastName`, `email`, `password`, `phone`, `birth_Date` , `debut_date` | {message: 'User updated'}
DELETE | /user/:userId      | YES   | admin | Delete one user         |                                                   | {message: 'User deleted'}
DELETE | /user/me   | YES   | user | Delete own profile       |                                                    | { message: 'Profile deleted' }

### Device Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /device/me            | YES   | user | See my Device Info         |                             | { device }
GET    | /device/:userId    | YES   | doctor | See any Device Info          |                                            | { device }
GET    | /device/all            | YES   | doctor | See all Device Info          |    `query params`                     | [{device}]
POST   | /device     | YES      | user | Create Own Device Info             |  | {device}
POST   | /device/:userId     | YES      | doctor | Create a specific Device Info             |  | {device}
PUT   | /device/me    | YES      | user | Update own Device Info             |                            | {message: 'Device Info have been updated'}
PUT   | /device/:userId    | YES      | doctor | Update a specific Device Info             |                            | {message: 'Device Info have been updated'}
DELETE   | /device/me    | YES      | user | Delete own Device Info          |                            | {message: 'Device Info have been deleted'}
DELETE   | /device/:userId    | YES      | doctor | Delete a specific Device Info          |                            | {message: 'Device Info have been deleted'}

### Medical Info Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /medical     | YES   | doctor | Get All Users Medical Info           |  `query params`                          | [{medical_info}]
GET    | /medical/me   | YES   | user | Get Own Medical Info         |                                                |  {medical_info}
GET    | /medical/:userId        | YES   | doctor | Get One User Medical Info            |                                             |  {medical_info}
POST   | /medical            | YES   | user | Create own Medical Info        |`pump_model`, `basal_insulin`, `bolus_insulin`, `good_sv`, `high_sv`, `low_sv` , `breakfast`, `luch`, `snack`, `dinner`, `extra` | {medical_info}
POST   | /medical/:userId           | YES   | doctor | Create one user Medical Info        |`pump_model`, `basal_insulin`, `bolus_insulin`, `good_sv`, `high_sv`, `low_sv` , `breakfast`, `luch`, `snack`, `dinner`, `extra` | {medical_info}
PUT    | /medical/me    | YES   | user | Update own Medical Info       |`pump_model`, `basal_insulin`, `bolus_insulin`, `good_sv`, `high_sv`, `low_sv` , `breakfast`, `luch`, `snack`, `dinner`, `extra`| {message: 'Medical info updated'}
PUT    | /medical/:userId       | YES   | doctor | Update one user Medical Info       |`pump_model`, `basal_insulin`, `bolus_insulin`, `good_sv`, `high_sv`, `low_sv` , `breakfast`, `luch`, `snack`, `dinner`, `extra` | {message: 'Medical_info updated'}
DELETE | /medical/:userId      | YES   | doctor | Delete one user Medical Info       |                                                   | {message: 'Medical_info deleted'}
DELETE | /medical/me    | YES   | user | Delete own Medical Info       |                                                    | { message: 'Medical_info deleted' }

### Comment Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------|-------------------------------------------------|--------------------
GET   | /comment     | YES     | doctor | Get all Comments              |  `query params`  | [{comments}]
GET   | /comment/me     | YES      | user | Get own Comments               |                            | [{comments}]
GET   | /comment/:userId     | YES      | doctor | Get user id Comments               |                            | [{comments}]
POST   | /comment     | YES      | user | Create a comment              |  | {comment}
POST   | /comment/:userId   | YES      | doctor | Create a comment              |  | {comment}
PUT   | /comment/me/:commentId    | YES      | user | Update own comment              |                            | {message: 'Your comment have been updated'}
PUT   | /comment/:commentId    | YES      | doctor | Update a specific comment              |                            | {message: 'The comment have been updated'}
DELETE   | /comment/me/:commentId    | YES      | user | Delete own comment             |                            | {message: 'Comment deleted'}
DELETE   | /comment/:commentId     | YES      | doctor | Delete a specific comment             |                            | {message: 'Comment deleted'}

### Objetive Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------|-------------------------------------------------|--------------------
GET    | /objetive/me            | YES   | user | Calculate own objetive          |                             | { message: + Objetive Image }
GET    | /objetive/:userId    | YES   | doctor | Calculate user id objetive         |                                            | { message: + Objetive Image }
GET    | /objetive/all            | YES   | user | See the current objective of all users          |                        | [{user_objetive}]
GET    | /objetive/all/?            | YES   | user | See the current objective of all users filtered          |    `query params`              | [{user_objetive}]
POST   | /objetive     | YES      | doctor | Create a Objetive             |  | {objetive}
PUT   | /objetive/:objetiveId    | YES      | doctor | Update an Objetive             |                            | {message: 'Objetive have been updated'}
DELETE   | /objetive/:objetiveId    | YES      | doctor | Delete a specific Objetive          |                            | {message: 'Objetive deleted'}

### Utilities Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /insulin/me            | YES   | user | Calculate own total insulin          |                             | { message: "Your total insulin is:" }
GET    | /insulin/:userId    | YES   | doctor | Calculate user id total insulin          |                                            | { message: "User id total insulin is:" }
GET    | /ratio/me            | YES   | user | Calculate own ratio          |                             | { message: "Your ratio is:" }
GET    | /ratio/:userId    | YES   | doctor | Calculate user id ratio          |                                            | { message: "User id ratio is:" }
GET    | /resistance/me       | YES   | user | Calculate own insulin resistance          |                                            | { message: "Your insulin resistance is:" }
GET    | /resistance/:userId    | YES   | doctor | Calculate user id insulin resistance   |                                            |  { message: "User id insulin resistance is:" }
GET    | /ch/me            | YES   | user | Calculate total CH          |                             | { message: "The carbohydrates you have consumed are:" }
GET    | /ch/id    | YES   | doctor | Calculate user id total CH          |                                            | { message: "The carbohydrates user id have consumed are:" }
GET    | /time/me            | YES   | user | Calculate how long user have been receiving treatment         |                             | { message: "You have been receiving treatment for:" }
GET    | /time/:userId    | YES   | doctor | Calculate how long (user id) have been receiving treatment|                                            | { message: "User id have been receiving treatment for:" }

