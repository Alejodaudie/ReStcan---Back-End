
# Project Name ReStcan

## Description

App where you have the databases of the menus of the Restaurants.

Then you arrive at the restaurant and in the bento / paper of the table you have the bar code Qr, where with ReStcan App you will scan it, and you will get the restaurant menu, and you can select what you want to eat.

By selecting it, you click "send" and it will arrive directly to the kitchen of the restaurant without the need of a waiter.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
-  **Home:** As an anon I can see a description of the App and the possiblity to go to the signup or login page.
-  **Signup:** As an anon I can sign up in the platform so I can start scanning the menu's restaurants.
-  **Login:** As a user I can login to the platform so I can scan the Qr code.
-  **Logout:** As a user I can logout from the platform so no one else can use it.
-  **Home Scan Page** As a user I can scan the Qr code and see the restaurant menu.
-  **Menu Page** As a user I can see the restaurant menu and select wich food I want to eat.
-  **Profile** As a user I can add, edit and delete my profile fields.

-  **Restaurants** As a user I can see the history of all the restaurants that I have gone with the dishes that I have been selecting from the menus.
-  **Delete Restaurant** As a user I can delete the restaurants from my history.

# Backlog
-  **Find** As a user I can find the restaurants that are in the App.
- **Update Order** A a user I can go back to my order and add more items.


# Routes

- `/`
  - HomePageComponent
  - public
  - anon only
  
- `/signup`
  - SignupPageComponent
  - anon only
  - signup form, link to login
  - navigate to homeScanPage after signup
- `/login`
  - LoginPageComponent
  - anon only
  - login form, link to signup
  - navigate to homeScanPage after login
- `/scan` 
  - HomeScanPageComponent
  - user only
  - shows the scanner, link to the menu page
- `/scan/menu` 
  - MenuSelectPageComponent
  - user only
  - request a new order by selecting the dishes user want
  - navigates to done page after send the request
  - if user doesn't exist, redirect to login.
- `/restaurants/:idMenu/done` 
  - DonePageComponent
  - user only
  - possibility to add more food, redirect to restaurants/:idMenu.
  - ask for the bill and redirect <!--to billgif--> restaurants.
  - if user doesn't exist, redirect to login.

- `/restaurants` 
  - RestaurantsPageComponent 
  - user only
  - appears the history of all the restaurants that I have gone with the dishes that I have been selecting from the menus.
  - possibility to delete the restaurants.
  - if user doesn't exist, redirect to login.  
- `/profile` 
  - ProfilePageComponent 
  - user only
  - Profile picture, name, password.
  - Edit button.
  - if user doesn't exist, redirect to login.
- `/profile/edit` 
  - ProfileEditPageComponent 
  - user only
  - Edit profile picture, name, password.
  - Accept button.
  - redirects to /profile.

## Backlog
- `/restaurants/:idMenu`
  - MenuEditPageComponent
  - user only
  - redirect to restaurants/:idMenu/done.
- `/find` 
  - FindPageComponent 
  - user only
  - search restaurants by name
  - if user doesn't exist, redirect to login.

- `**`
  - NotFoundPageComponent

## Components

- Login:
  - userFormComponent(title: string, button: string, onSubmit: function)
- Sign up:
  - userFormComponent(title: string, button: string, onSubmit: function)
- menu:
  - menuComponent (cardList: array => select, dishes, price, quantity)
- footer bar:
  - footerBarComponent (items: logo, Hello name!)
- nav bar:
  - navBarComponent (icons: restaurants, find, scan, profile, logout)
- profile:
  - profileComponent (personalInfo: name, last restaurants, change password, picture profile)

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Scan Service
  - scan.list()
  - scan.detail(idMenu)
  - scan.search({user: string, text: string})
  - scan.create({user})
  - scan.read(idChat)

# Server

## Models
 
__User model__
```
username - String // required
email - String // required & unique
password - String // required
myMenus - Array ObjectID - Ref: Menu

<!-- imageURL - String -->
```


__Restaurant model__
```
name - String
address - String
image - String
```


__Dishes model__
```
name,
category: String
description: String
quantity: Number
price: Number
restaurantID : ObjectID ref: Resturant
```


__Order model__
```
restaurantId - ObjectID ref: Restaurant
dishes - Array - ObjectID ref: Dishes
userId: 
timestamp
```


## API Endpoints (backend routes)

- GET /auth/me
  - 404 if no user in session
  - 200 with user object
- POST /auth/signup
  - 401 if user logged in
  - body:
    - username
    - email
    - password
  - validation
    - fields not empty (422)
    - user not exists (409)
  - create user with encrypted password
  - store user in session
  - 200 with user object
- POST /auth/login
  - 401 if user logged in
  - body:
    - username
    - password
  - validation
    - fields not empty (422)
    - user exists (404)
    - passdword matches (404)
  - store user in session
  - 200 with user object
- POST /auth/logout
  - body: (empty)
  - 204

<!-- Order CRUD -->

POST /order {data} 
  - 401 if no user in session
  - fields not empty (422)
- body:
  - create order

GET /orders
  - 401 if no user in session
- body:
  - list all my orders

PUT /order/:id {data} 
  - fields not empty (422)
  - 401 if no user in session
- body:
  - update and order

DELETE /order/:id
  - 401 if no user in session
- body:
  - delete and order



## Links

- 
- 
- 

### Kanban



### Git

The url to your repository and to your deployed project

[Deploy Link]()

### Slides
The url to your presentation slides
[Slides Link]()