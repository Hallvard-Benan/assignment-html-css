# Links

Link to github:
https://github.com/Hallvard-Benan/assignment-html-css

Link to deployed website:

https://unique-sawine-7f2812.netlify.app

Figma links:

Square eyes v1:
https://www.figma.com/file/SU3zoEsaskjSG5S1GS7EuA/Square-eyes-v1?node-id=17%3A239&t=wZbZ2xVbk0ZeOIgN-1

Square eyes v2:
https://www.figma.com/file/tXIGmGJL3oea9klOh8PDY6/Square-eyes-v2?node-id=0%3A1&t=H5TDPwQ9iSQ5CzLR-1

Report:
I chose this site because I felt it had the most potential for improvement out of my previous assignments.

There were many points to address with the previous version of this site. Firstly, the spacing which is an essential part of interaction design. The original site had many issues with it. Specifically, everything was too close together.

Another issue I received feedback on was that the movie cards were too big on mobile view. I reduced the size of the images on mobile but kept them the same size on desktop view.

I had the opposite problem with buttons and links, which were too small on mobile. I increased their size to at least 45px in accordance with accessibility guidelines.

I also added hover effects to the movie cards and "add-to-cart" functionality. The "add-to-cart" functionality works the same way as with our last assignment, where each card is generated using an object in JavaScript. When the button is clicked, the title value of the movie is stored in an array, and the number of items in that array gets displayed in the cart item in the nav-bar. When the cart button is pressed, it navigates you to the checkout page, which displays the items you have added, as well as a checkout form. I made this using query-params, the same way as with our JavaScript API-assignment.

The contact form now has JavaScript-validation, which displays error messages and adds a red border to the input. This occurs both on blur and on submit events.

Navigation items now have active states, with an underline to show the user where they are on the page.

For accessibility, I added ARIA-labels to buttons without text, as well as alt text for images.

My initial plan was to redesign and rebuild the entire website, but I decided not to do this because of time constraints. I made a redesign in Figma, which I am still working on.

In the redesign, I added a landing page for when you are not logged in, as well as carousel buttons for the posters, which are still missing in Square Eyes v1. I am trying to build a full comprehensive design system, including components and style guides with color palettes and typography, to make everything look less generic and more consistent.

My biggest challenge during this assignment was time management, as my ambition was too high compared to my abilities. I ended up editing the v1 version of the site instead of doing everything from scratch. However, I will finish Square Eyes v2, hopefully during the Easter break, which will eventually replace this site.

I have included a link to the Figma design file for version 2 in the README.
