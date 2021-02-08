const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Create selectors
const navBarItems = document.querySelectorAll('a');
const navBar = document.querySelector('.container nav')
const headingOne = document.querySelector('.cta-text h1');
const buttonText = document.querySelector('button');
const imgCta = document.querySelector('#cta-img');
const headingFour = document.querySelectorAll('.text-content h4');
const pargraphContent = document.querySelectorAll('.text-content p');
const middleImage = document.querySelector('#middle-img');
const contactHeading = document.querySelector('.contact h4');
const contactText = document.querySelectorAll('.contact p');
const footerText = document.querySelector('footer p')

console.log(navBarItems);
//Update the HTML with the JSON data

// assuming nav bar and heading have the same length... except for the image of course
const navHeadings = siteContent['nav'];
const navKeys = Object.keys(navHeadings);
for (let i = 0; i < navKeys.length - 1; i++) {
  navBarItems[i].textContent = navHeadings[navKeys[i]];
}
headingOne.textContent = siteContent['cta']['h1'];
buttonText.textContent = siteContent['cta']['button'];
imgCta.setAttribute('src', siteContent['cta']['img-src']);

headingFour[0].textContent = siteContent['main-content']['features-h4'];
pargraphContent[0].textContent = siteContent['main-content']['features-content'];
headingFour[1].textContent = siteContent['main-content']['about-h4'];
pargraphContent[1].textContent = siteContent['main-content']['about-content'];

middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

headingFour[2].textContent = siteContent['main-content']['services-h4'];
pargraphContent[2].textContent = siteContent['main-content']['services-content'];
headingFour[3].textContent = siteContent['main-content']['product-h4'];
pargraphContent[3].textContent = siteContent['main-content']['product-content'];
headingFour[4].textContent = siteContent['main-content']['vision-h4'];
pargraphContent[4].textContent = siteContent['main-content']['vision-content'];
contactHeading.textContent = siteContent['contact']['contact-h4'];
contactText[0].textContent = siteContent['contact']['address'];
contactText[1].textContent = siteContent['contact']['phone'];
contactText[2].textContent = siteContent['contact']['email'];
footerText.textContent = siteContent['footer']['copyright']
// add new content
navBarItems.forEach( ink => ink.style.color = "green" );


const newNavOne = document.createElement('a');
const newNavTwo = document.createElement('a');
newNavOne.textContent = 'Home';
newNavOne.style.color = 'green'
newNavTwo.textContent = 'Feedback';
newNavTwo.style.color = 'green';
navBar.prepend(newNavOne);
navBar.appendChild(newNavTwo);
