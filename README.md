# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)

- [My process](#📌-my-process)
  - [Built with](#built-with)
  - [What I learned](#✅-what-i-learned)
  - [Continued development](#🚀-continued-development)
  - [Useful resources](#🔗-useful-resources)
- [Author](#author)

  ## Overview

  ### The challenge

  Users should be able to:

  - View the optimal layout for the site depending on their device's screen size
  - See hover states for all interactive elements on the page
  - Receive an error message when the newsletter form is submitted if:
    - The input field is empty
    - The email address is not formatted correctly

  ### Screenshot

  ![Bookmark landing page desktop preview](https://github.com/Rgit915/bookmark-landing-page/blob/master/src/assets/screenshots/bookmark-landing-page-desktop-solution-preview.png)

  ### Links

  - Solution URL: [Github Repo](https://github.com/Rgit915/bookmark-landing-page)
  - Live Site URL: [Live site](https://bookmark-landing-page-rora.netlify.app/)

 ## 📌 My Process

I started by structuring the layout using React components and Tailwind CSS for styling. I focused on building a responsive design that works well on both small and larger screens. After setting up the base components (Hero, Features, Download, Contact, etc.), I worked on interactivity such as:

- Tabbed slides with different content per tab
- FAQ toggle behavior (expand/collapse answers)
- A validated contact form with real-time error states

---

## ✅ What I Learned

- ✅ **Email validation in React** using controlled inputs and regular expressions
- ✅ **Managing component state** using `useState` to show/hide error messages and slide contents
- ✅ **Conditional rendering** of icons, input styles, and messages
- ✅ **FAQ toggle functionality** using active index logic to open/collapse answers

---

## 🚀 Continued Development

Going forward, I plan to:

- Improve **accessibility** with proper ARIA labels and keyboard navigation
- Integrate form submission to an actual backend or third-party service (e.g., Formspree or Firebase)
- Add **animations** to FAQ toggles and tab content transitions using Framer Motion
- Implement unit tests for the form and toggle logic

### Built with

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## 🔗 Useful Resources

- [TailwindCSS Documentation](https://tailwindcss.com/docs) – For utility-first styling
- [React Docs](https://reactjs.org/docs/getting-started.html) – To structure the component logic
- [Vite Guide](https://vitejs.dev/guide/) – For setting up fast development

## Author

- GitHub - [Rgit915](https://github.com/Rgit915)
- Frontend Mentor - [@Rgit915](https://www.frontendmentor.io/profile/Rgit915)
