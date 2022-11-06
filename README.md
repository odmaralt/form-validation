# React Project

This project was made to practice using react,
external libraries like axios, CRUD method and more.

Link to website: <b><a>https://reactproject-one.web.app/</a></b>

![My animated logo](assets/img.png)

## How to Install 📲

1. Go to terminal and paste this code

```sh
git clone ‘URL of github repository’
```

2. Go into the project

```sh
cd my-cloned-app
```

3. Install npm

```sh
npm install
```

4. Open the project

```sh
npm start
```

## Motivation 🙌

- The main purpose for this project is to learn and practice

> - **React.js**
> - **External Servers**
> - **CRUD Method**
> - **React Router**
> - **React Hooks**
> - **React Modals**

## Problems & Solutions 💭

**Some problems you may run into and how to solve them:**

> **Implementing CRUD:**
>
> 1. Create: ✏️
>
> > - Read the documentation for how to create
> > - Find which fields are required
> > - Get the app-id
> > - Sent the new post/user to the API
>
> 2. Read: 📖
>
> > - Get the data from the API
> > - Read the documentation for how to read
> > - Make sure to use app-id
> > - Console.log the data to see if you're getting it
>
> 3. Update: 💻
>
> > - Get the data from your API
> > - Read the documentation for how to update
> > - Create an initial values that contains each field and their value
> > - Create a state to update the initial values
>
> 4. Delete: 🗑
>
> > - Read the documentation for delete
> > - Delete the post/user by getting it by it's id

> **Creating a search bar 🔍:**
>
> 1. Get the data from your API
> 2. Save it in a state
> 3. Filter your data

> **Using Routers:** make sure you have a element and a path for each router and use Navigate to navigate to each page

> **Creating success messages:** use mui for components you can copy and paste into your code

> **Making a Modal:** create a different function for opening and closing each modal

## Features 📝

- Create a post
- Delete a post
- Update a post
- Create a user
- Delete a user
- Update a user
- Search blogs, posts, and users
- Log in and Log out
- Sign up
- Contact page

## What makes this project stand out 📌

This project uses React.js which:

- Uses components that make code less repetitive
- Uses props
- Is more user interective
- Uses CRUD method
- Simplifies your code
- Uses API more effectively

## Repository overview 🗂

- [components/](./src/components)
  - [Form-Inputs/](./src/components/Form-Inputs)
    - [Age.js](./src/components/Form-Inputs/Age.js)
    - [Button.js](./src/components/Form-Inputs/Button.js)
    - [Dob.js](./src/components/Form-Inputs/Dob.js)
    - [Email.js](./src/components/Form-Inputs/Email.js)
    - [Name.js](./src/components/Form-Inputs/Name.js)
    - [Password.js](./src/components/Form-Inputs/Password.js)
    - [TitleDropdown.js](./src/components/Form-Inputs/TitleDropdown.js)
    - [UsersDropdown.js](./src/components/Form-Inputs/UsersDropdown.js)
    - [index.js](./src/components/Form-Inputs/index.js)
  - [Icons/](./src/components/Icons)
    - [BlogAvatar.js](./src/components/Icons/BlogAvatar.js)
    - [BlogManAvatar.js](./src/components/Icons/BlogManAvatar.js)
    - [Calendar3.js](./src/components/Icons/Calendar3.js)
    - [CalendarIcon.js](./src/components/Icons/CalendarIcon.js)
    - [CloseIcon.js](./src/components/Icons/CloseIcon.js)
    - [Event.js](./src/components/Icons/Event.js)
    - [Event2.js](./src/components/Icons/Event2.js)
    - [Event3.js](./src/components/Icons/Event3.js)
    - [MeetingsIcon.js](./src/components/Icons/MeetingsIcon.js)
    - [NotificationIcon.js](./src/components/Icons/NotificationIcon.js)
    - [Star.js](./src/components/Icons/Star.js)
    - [Team.js](./src/components/Icons/Team.js)
    - [index.js](./src/components/Icons/index.js)
  - [Post/](./src/components/Post)
    - [CreatePostModal.js](./src/components/Post/CreatePostModal.js)
    - [DeletePostModal.js](./src/components/Post/DeletePostModal.js)
    - [UpdatePostModal.js](./src/components/Post/UpdatePostModal.js)
  - [User/](./src/components/User)
    - [UserCreateModal.js](./src/components/User/UserCreateModal.js)
    - [UserDeleteModal.js](./src/components/User/UserDeleteModal.js)
    - [UserUpdateModal.js](./src/components/User/UserUpdateModal.js)
  - [BlogCard.js](./src/components/BlogCard.js)
  - [Footer.js](./src/components/Footer.js)
  - [Header.js](./src/components/Header.js)
  - [Notification.js](./src/components/Notification.js)
  - [SearchBar.js](./src/components/SearchBar.js)
  - [index.js](./src/components/index.js)
- [pages/](./src/pages)
  - [ArticlePage/](./src/pages/ArticlePage)
    - [ArticlePage.css](./src/pages/ArticlePage/ArticlePage.css)
    - [ArticlePage.js](./src/pages/ArticlePage/ArticlePage.js)
  - [BlogPage/](./src/pages/BlogPage)
    - [BlogPage.css](./src/pages/BlogPage/BlogPage.css)
    - [BlogPage.js](./src/pages/BlogPage/BlogPage.js)
  - [ContactPage/](./src/pages/ContactPage)
    - [ContactPage.css](./src/pages/ContactPage/ContactPage.css)
    - [ContactPage.js](./src/pages/ContactPage/ContactPage.js)
  - [LandingPage/](./src/pages/LandingPage)
    - [LandingPage.css](./src/pages/LandingPage/LandingPage.css)
    - [LandingPage.js](./src/pages/LandingPage/LandingPage.js)
  - [ProductsPage/](./src/pages/ProductsPage)
    - [Product.js](./src/pages/ProductsPage/Product.js)
    - [ProductsPage.css](./src/pages/ProductsPage/ProductsPage.css)
    - [ProductsPage.js](./src/pages/ProductsPage/ProductsPage.js)
    - [Theme.js](./src/pages/ProductsPage/Theme.js)
  - [SignInPage/](./src/pages/SignInPage)
    - [SignIn.css](./src/pages/SignInPage/SignIn.css)
    - [SignIn.js](./src/pages/SignInPage/SignIn.js)
  - [SignUp/](./src/pages/SignUp)
    - [CreatedAccount/](./src/pages/SignUp/CreatedAccount)
      - [CreatedAccountBox.css](./src/pages/SignUp/CreatedAccount/CreatedAccountBox.css)
      - [CreatedAccountBox.js](./src/pages/SignUp/CreatedAccount/CreatedAccountBox.js)
    - [SignUp.css](./src/pages/SignUp/SignUp.css)
    - [SignUp.js](./src/pages/SignUp/SignUp.js)
    - [SignUpValidation.js](./src/pages/SignUp/SignUpValidation.js)
  - [UsersPage/](./src/pages/UsersPage)
    - [UsersPage.css](./src/pages/UsersPage/UsersPage.css)
    - [UsersPage.js](./src/pages/UsersPage/UsersPage.js)
- [404.html](./src/404.html)
- [App.css](./src/App.css)
- [App.js](./src/App.js)
- [data.js](./src/data.js)
- [firebase.js](./src/firebase.js)
- [index.css](./src/index.css)
- [index.html](./src/index.html)
- [index.js](./src/index.js)

## More resources 📃

- **<a href="https://reactjs.org/docs/create-a-new-react-app.html">Create a new react app</a>**
- **<a href="https://www.codecademy.com/learn/react-101">Learn React</a>**
- **<a href="https://www.freecodecamp.org/news/crud-operations-explained/">CRUD method</a>**
- **<a href="https://www.npmjs.com/package/axios">How to install axios</a>**
- **<a href="https://reactjs.org/docs/hooks-state.html">Using State Hook</a>**

## Acknowledgements 🤝

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
