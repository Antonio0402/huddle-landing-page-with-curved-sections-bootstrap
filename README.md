# Frontend Mentor - Huddle landing page with curved sections solution

This is a solution to the [Huddle landing page with curved sections challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-curved-sections-5ca5ecd01e82137ec91a50f2).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Mobile Design](./screenshots/mobile-design.png)
![Desktop Design](./screenshots/desktop-design.png)

### Links

- Solution URL: [Click here](https://github.com/Antonio0402/huddle-landing-page-with-curved-sections-master)
- Live Site URL: [Click here](https://huddle-landing-page-bootstrap-5.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap 5
- SASS custom properties
- Mobile-first workflow
- Form Validations

### What I learned

- Building a webpage from scratch using Bootstrap custom properties base on the SASS Bootstrap 5 Library;
- How to use SASS functions to  generate utility classes as well as well as enable or modify the utilities.

Modify and enable the state or responsive in throught Bootstraps 5 's API

```scss
$utilities: map-merge(
  $utilities,
  (
    "color": map-merge(
      map-get($utilities, "color"), 
      (values: map-merge(
          map-get(map-get($utilities, "color"), "values"), (
            $custom-colors
          ),
        ),
      ),
    ),
    "line-height": map-merge(
      map-get($utilities, "line-height"),
      (values: map-merge(
          map-get(map-get($utilities, "line-height"), "values"), (
            md: $line-height-md,
          ),
        ),
      ),
    ),
    "letter-spacing": (
      property: letter-spacing,
      class: tracking,
      css-var: true,
      css-variable-name: tracking,
      responsive: true,
      values: $tracking
    ),
    "font-family": map-merge(
      map-get($utilities, "font-family"),
      (values: map-merge(
        map-get(map-get($utilities, "font-family"),
        "values"), (
          body: var(--font-body),
          heading: var(--font-heading),
        )
      ))
    ),
    "opacity": map-merge(
      map-get($utilities, "opacity"), 
        (state: hover)
    ),
    "width": map-merge(
      map-get($utilities, "width"), 
        (responsive: true)
    ),
  )
);
```

### Continued development

- I am going to keep trying to have a good grasp of using Bootstrap 5 class in advanced projects. 
- Fully comprehend the javascripts library 's Bootstrap 5 by applying advanced components in the future projects


### Useful resources

- [Bootstrap 5 - Documents](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
- [The Ninja Net - Bootstrap 5 Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR)


## Author

- Frontend Mentor - [@Antonio0402](https://www.frontendmentor.io/profile/Antonio0402)


## Acknowledgments

So much thanks specially to The Ninja Net Youtube Chanel for helping me get through this project as well as enlighten me a solution by using custom's SASS Functions to generate utilites classes.
