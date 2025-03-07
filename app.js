// Define Vue components
const Home = { template: '<section class="content-section"><div class="container"><h2>Welcome to the Utah Wildlife Center</h2><p>Dedicated to the conservation and rehabilitation of native wildlife.</p><button>Learn More</button></div></section>' };
const About = { template: '<section class="content-section"><div class="container"><h2>About Us</h2><p>The Utah Wildlife Center is dedicated to the conservation and rehabilitation of native wildlife.</p></div></section>' };
const Mission = { template: '<section class="content-section"><div class="container"><h2>Our Mission</h2><p>Our mission is to protect and preserve the wildlife of Utah through education, conservation, and rehabilitation efforts.</p></div></section>' };
const Services = { template: '<section class="content-section"><div class="container"><h2>Services</h2><div class="card-container"><div class="card"><h3>Rehabilitation</h3><p>We provide rehabilitation services for injured and orphaned wildlife.</p></div><div class="card"><h3>Education</h3><p>We offer educational programs to promote wildlife conservation.</p></div><div class="card"><h3>Conservation</h3><p>We work on various conservation projects to protect wildlife habitats.</p></div></div></div></section>' };
const Events = { template: '<section class="content-section"><div class="container"><h2>Events</h2><p>Join us for our upcoming events and activities.</p></div></section>' };
const Gallery = { template: '<section class="content-section"><div class="container"><h2>Image Gallery</h2><div class="gallery"><img src="https://example.com/image1.jpg" alt="Wildlife Image 1"><img src="https://example.com/image2.jpg" alt="Wildlife Image 2"><img src="https://example.com/image3.jpg" alt="Wildlife Image 3"></div></div></section>' };
const Testimonials = { template: '<section class="content-section"><div class="container"><h2>Testimonials</h2><div class="testimonial"><p>"The Utah Wildlife Center is an amazing place! They do incredible work for the native wildlife." - Jane Doe</p></div><div class="testimonial"><p>"I learned so much about wildlife conservation through their educational programs." - John Smith</p></div></div></section>' };
const Contact = { template: '<section class="content-section"><div class="container"><h2>Contact Us</h2><form><label for="name">Name:</label><input type="text" id="name" name="name" required><label for="email">Email:</label><input type="email" id="email" name="email" required><label for="message">Message:</label><textarea id="message" name="message" required></textarea><button type="submit">Send</button></form><div id="map"></div></div></section>' };
const Newsletter = { template: '<section class="content-section"><div class="container"><h2>Newsletter Signup</h2><form><label for="newsletter-email">Email:</label><input type="email" id="newsletter-email" name="newsletter-email" required><button type="submit">Sign Up</button></form></div></section>' };

// Set up Vue Router
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/mission', component: Mission },
  { path: '/services', component: Services },
  { path: '/events', component: Events },
  { path: '/gallery', component: Gallery },
  { path: '/testimonials', component: Testimonials },
  { path: '/contact', component: Contact },
  { path: '/newsletter', component: Newsletter }
];

const router = new VueRouter({
  routes
});

// Create and mount the root instance
new Vue({
  el: '#app',
  router,
  data: {
    title: 'Welcome to the Utah Wildlife Center'
  }
});