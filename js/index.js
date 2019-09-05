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
logo.setAttribute('src', siteContent["nav"]["img-src"])


// navbar
const navHeader = document.querySelectorAll('a');

for (let i = 0; i < navHeader.length; i++) {
  navHeader[i].style.color = 'green';
  navHeader[i].append(siteContent['nav'][`nav-item-${i + 1}`]);
}

// header
let cta = document.querySelector('h1');
cta.append(siteContent['cta']['h1']);
console.log(cta);

// button
let button = document.querySelector('button');
button.append(siteContent['cta']['button']);
console.log(button);

// header img
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

// top content
// features
let topText = document.querySelector('.top-content .text-content h4');
topText.append(siteContent['main-content']['features-h4'])

let topContent = document.querySelector('.top-content .text-content p');
topContent.append(siteContent['main-content']['features-content']);

// about
let topAbout = document.querySelector('.top-content .text-content:nth-child(2) h4');
topAbout.append(siteContent['main-content']['about-h4']);

let topAboutP = document.querySelector('.top-content .text-content:nth-child(2) p');
topAboutP.append(siteContent['main-content']['about-content']);

// middle img

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// bottom content 

// services 
let bottomServices = document.querySelector('.bottom-content .text-content h4');
bottomServices.append(siteContent['main-content']['services-h4'])


let servicesContent = document.querySelector('.bottom-content .text-content p');
servicesContent.append(siteContent['main-content']['services-content'])

// product

let bottomProduct = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
bottomProduct.append(siteContent['main-content']['product-h4'])


let productContent = document.querySelector('.bottom-content .text-content:nth-child(2) p');
productContent.append(siteContent['main-content']['product-content'])

// vision 

let bottomVision = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
bottomVision.append(siteContent['main-content']['vision-h4'])

let visionContent = document.querySelector('.bottom-content .text-content:nth-child(3) p');
visionContent.append(siteContent['main-content']['vision-content'])

// contact 
let contactHeader = document.querySelector('.contact h4');
contactHeader.append(siteContent['contact']['contact-h4']);

let contactContent = document.querySelector('.contact p');
contactContent.append(siteContent['contact']['address']);
let breakLine = document.createElement("br");
contactContent.append(breakLine);
contactContent.append(siteContent['contact']['phone']);
contactContent.append(siteContent['contact']['email']);

// footer 
let footerContent = document.querySelector('footer p');
footerContent.append(siteContent['footer']['copyright'])