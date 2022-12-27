# [Project : pagination](https://pagination-three.vercel.app/)
## Table of contents

  - [The challenge](#the-challenge)
  - [Problem Statement](#problem-statement)
  - [Screenshot](#screenshot)
  - [Project Information](#project-information)
  - [Lesson Learned](#lesson-learned)
  - [Useful resources](#useful-resources)



## The challenge
Project focuses on showing github followers in a paginated structure

## Problem Statement

- Develop an app receiving github followers from github API, write a function to divide followers into pages, represent followers to users in a structure which allows users to navigate between pages
<hr>




## Screenshot
<p align="center">
<a href="https://pagination-three.vercel.app/"><img src="pagination.gif" alt="gif"></a>
</p>





### Project Information
- Pagination app is made by using Raect,
- For showing designated number of followers at each page I've used Javascript Array.from method,
- I've created a useFetch custom hook and got loading, error, repos from useFetch custom hook,
- User can navigate between pages by either clicking page numbers or next, previous buttons.




------
I used;
- React
- Async functions
- Custom, useState, useEffect hooks.





## Lesson Learned

- Javascript Array.from method is quite useful for turning an array into array of arrays. After exporting my array of arrays to Repos component I needed a two dependencies at my useEffect hook in order to rerender the page. By using loading ( comes from useFetch custom hook) and page states I've managed to rerender the page.

### Useful resources

- [W3 Schools](https://www.w3schools.com/) 
- [MDN](https://developer.mozilla.org/en-US/) 
- [GOOGLE FONTS](https://fonts.google.com/) 
- [REACT](https://reactjs.org/) 












<center> &#8987; Happy Coding  &#9997; </center>
