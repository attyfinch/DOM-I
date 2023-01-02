const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

// this is where I put my code!

const logoImage = document.querySelector('#logo-img')
logoImage.src = siteContent['images']['logo-img']

const ctaImage = document.querySelector('#cta-img')
ctaImage.setAttribute('src', siteContent['images']['cta-img'])

const middleImage = document.querySelector('#middle-img')
middleImage.setAttribute('src', siteContent['images']['accent-img'])

const ctaHeadline = document.querySelector('.cta h1')
ctaHeadline.textContent = siteContent.cta.h1

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

const nav = Array.from(document.querySelectorAll('nav a'));
nav.forEach(item => item.className = 'italic');

const navText = document.querySelectorAll('nav a')
navText[0].textContent = siteContent['nav']['nav-item-1']
navText[1].textContent = siteContent['nav']['nav-item-2']
navText[2].textContent = siteContent['nav']['nav-item-3']
navText[3].textContent = siteContent['nav']['nav-item-4']
navText[4].textContent = siteContent['nav']['nav-item-5']
navText[5].textContent = siteContent['nav']['nav-item-6']

const footer = document.querySelector('footer a')
footer.className = 'bold'
footer.textContent = siteContent['footer']['copyright']

const contactHeadline = document.querySelector('.contact h4');
contactHeadline.textContent = siteContent['contact']['contact-h4']

const contactInfo = Array.from(document.querySelectorAll('.contact p'))
contactInfo[0].textContent = siteContent['contact']['address']
contactInfo[1].textContent = siteContent['contact']['phone']
contactInfo[2].textContent = siteContent['contact']['email']

const mainContentHeaders = Array.from(document.querySelectorAll('.text-content h4'))
mainContentHeaders[0].textContent = siteContent['main-content']['features-h4']
mainContentHeaders[1].textContent = siteContent['main-content']['about-h4']
mainContentHeaders[2].textContent = siteContent['main-content']['services-h4']
mainContentHeaders[3].textContent = siteContent['main-content']['product-h4']
mainContentHeaders[4].textContent = siteContent['main-content']['vision-h4']

const mainContentText = Array.from(document.querySelectorAll('.text-content p'))
mainContentText[0].textContent = siteContent['main-content']['features-content']
mainContentText[1].textContent = siteContent['main-content']['about-content']
mainContentText[2].textContent = siteContent['main-content']['services-content']
mainContentText[3].textContent = siteContent['main-content']['product-content']
mainContentText[4].textContent = siteContent['main-content']['vision-content']


