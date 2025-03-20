// Define Vue components
const Home = { 
    template: `
        <section class="content-section">
            <div class="container">
                <h2>Welcome to the Utah Wildlife Center</h2>
                <p>Dedicated to the conservation and rehabilitation of native wildlife in Utah. We provide care for injured and orphaned animals, conduct research, and educate the public about wildlife conservation.</p>
                <div class="hero-stats">
                    <div class="stat-card">
                        <h3>0</h3>
                        <p>Animals Rehabilitated</p>
                    </div>
                    <div class="stat-card">
                        <h3>0</h3>
                        <p>Species Helped</p>
                    </div>
                    <div class="stat-card">
                        <h3>0</h3>
                        <p>Students Educated</p>
                    </div>
                </div>
                <button class="cta-button">Learn More</button>
            </div>
        </section>
    `
};

const About = { 
    template: `
        <section class="content-section">
            <div class="container">
                <h2>About Us</h2>
                <p>The Utah Wildlife Center was established in 2025 with a mission to protect and preserve Utah's native wildlife. Our team of dedicated professionals work to ensure the well-being of our state's wildlife population.</p>
                <div class="team-section">
                    <h3>Our Team</h3>
                    <div class="team-grid">
                        <div class="team-member">
                            <img src="https://placehold.co/150x150" alt="Becca">
                            <h4>Becca</h4>
                            <p>Board Member & Founder</p>
                        </div>
                        <div class="team-member">
                            <img src="https://placehold.co/150x150" alt="Peter">
                            <h4>Peter</h4>
                            <p>Board Member</p>
                        </div>
                        <div class="team-member">
                            <img src="https://placehold.co/150x150" alt="Damon">
                            <h4>Damon</h4>
                            <p>Web Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};

const Mission = { 
    template: `
        <section class="content-section">
            <div class="container">
                <h2>Our Mission</h2>
                <p>Our mission is to protect and preserve the wildlife of Utah through education, conservation, and rehabilitation efforts. We believe in the importance of wildlife conservation and the enjoyment of wildlife and nature.</p>
                <div class="mission-goals">
                    <div class="goal-card">
                        <ion-icon name="heart-outline"></ion-icon>
                        <h3>Rehabilitation</h3>
                        <p>Provide expert care for injured and orphaned wildlife</p>
                    </div>
                    <div class="goal-card">
                        <ion-icon name="school-outline"></ion-icon>
                        <h3>Education</h3>
                        <p>Promote wildlife conservation through public education</p>
                    </div>
                    <div class="goal-card">
                        <ion-icon name="leaf-outline"></ion-icon>
                        <h3>Conservation</h3>
                        <p>Protect and restore wildlife habitats</p>
                    </div>
                </div>
            </div>
        </section>
    `
};

const Services = { 
    template: `
        <section class="content-section">
            <div class="container">
                <h2>Our Services</h2>
                <div class="card-container">
                    <div class="card">
                        <ion-icon name="medical-outline"></ion-icon>
                        <h3>Wildlife Rehabilitation</h3>
                        <p>Professional care for injured and orphaned wildlife, including medical treatment, rehabilitation, and release back into the wild.</p>
                        <button class="service-button">Learn More</button>
                    </div>
                    <div class="card">
                        <ion-icon name="school-outline"></ion-icon>
                        <h3>Educational Programs</h3>
                        <p>Interactive programs for schools and community groups to learn about wildlife conservation and environmental stewardship.</p>
                        <button class="service-button">Learn More</button>
                    </div>
                    <div class="card">
                        <ion-icon name="leaf-outline"></ion-icon>
                        <h3>Conservation Projects</h3>
                        <p>Active participation in habitat restoration and species protection initiatives throughout Utah.</p>
                        <button class="service-button">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    `
};

const Events = { 
    template: `
        <section class="content-section">
            <div class="container">
                <h2>Upcoming Events</h2>
                <div class="events-grid">
                    <div class="event-card">
                        <div class="event-date">TBD</div>
                        <h3>Wildlife Photography Workshop</h3>
                        <p>Join us for a day of learning about wildlife photography techniques.</p>
                        <button class="event-button">Register</button>
                    </div>
                    <div class="event-card">
                        <div class="event-date">mid-April to mid-May</div>
                        <h3>Spring Bird Migration</h3>
                        <p>Get outside and observe migratory birds as they pass through Utah on their way North from Central and South America.</p>
                        <button class="event-button">Register</button>
                    </div>
                </div>
            </div>
        </section>
    `
};

const Gallery = { template: '<section class="content-section"><div class="container"><h2>Image Gallery</h2><div class="gallery"><img src="https://example.com/image1.jpg" alt="Wildlife Image 1"><img src="https://example.com/image2.jpg" alt="Wildlife Image 2"><img src="https://example.com/image3.jpg" alt="Wildlife Image 3"></div></div></section>' };
const Testimonials = { template: '<section class="content-section"><div class="container"><h2>Testimonials</h2><div class="testimonial"><p>"The Utah Wildlife Center is an amazing place! They do incredible work for the native wildlife." - Jane Doe</p></div><div class="testimonial"><p>"I learned so much about wildlife conservation through their educational programs." - John Smith</p></div></div></section>' };

const Contact = { 
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: ''
            },
            loading: false,
            success: false,
            error: null
        }
    },
    template: `
        <section class="content-section">
            <div class="container">
                <h2>Contact Us</h2>
                <div class="contact-grid">
                    <div class="contact-info">
                        <h3>Get in Touch</h3>
                        <p><ion-icon name="location-outline"></ion-icon>Provo, Utah 84606</p>
                        <p><ion-icon name="call-outline"></ion-icon> (555) 555-5555</p>
                        <p><ion-icon name="mail-outline"></ion-icon> info@utahwildlifecenter.org</p>
                    </div>
                    <form @submit.prevent="submitForm" class="contact-form">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" id="name" v-model="formData.name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" v-model="formData.email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message:</label>
                            <textarea id="message" v-model="formData.message" required></textarea>
                        </div>
                        <button type="submit" :disabled="loading">
                            <span v-if="loading">Sending...</span>
                            <span v-else>Send Message</span>
                        </button>
                        <div v-if="success" class="success-message">
                            Thank you for your message! We'll get back to you soon.
                        </div>
                        <div v-if="error" class="error-message">
                            {{ error }}
                        </div>
                    </form>
                </div>
                <div id="map"></div>
            </div>
        </section>
    `,
    methods: {
        async submitForm() {
            this.loading = true;
            this.error = null;
            this.success = false;
            
            try {
                const mailtoLink = `mailto:info@utahwildlifecenter.org?subject=Contact Form Submission from ${this.formData.name}&body=Name: ${this.formData.name}%0AEmail: ${this.formData.email}%0A%0AMessage:%0A${this.formData.message}`;
                window.location.href = mailtoLink;
                this.success = true;
                this.formData = { name: '', email: '', message: '' };
            } catch (err) {
                this.error = 'Failed to send message. Please try again.';
            } finally {
                this.loading = false;
            }
        }
    }
};

const Newsletter = { 
    data() {
        return {
            email: '',
            loading: false,
            success: false,
            error: null
        }
    },
    template: `
        <section class="content-section">
            <div class="container">
                <h2>Stay Updated</h2>
                <p>Subscribe to our newsletter to receive updates about our work, upcoming events, and ways to get involved.</p>
                <form @submit.prevent="submitForm" class="newsletter-form">
                    <div class="form-group">
                        <label for="newsletter-email">Email:</label>
                        <input type="email" id="newsletter-email" v-model="email" required>
                    </div>
                    <button type="submit" :disabled="loading">
                        <span v-if="loading">Subscribing...</span>
                        <span v-else>Subscribe</span>
                    </button>
                    <div v-if="success" class="success-message">
                        Thank you for subscribing to our newsletter!
                    </div>
                    <div v-if="error" class="error-message">
                        {{ error }}
                    </div>
                </form>
            </div>
        </section>
    `,
    methods: {
        async submitForm() {
            this.loading = true;
            this.error = null;
            this.success = false;
            
            try {
                const mailtoLink = `mailto:info@utahwildlifecenter.org?subject=Newsletter Signup&body=Please add ${this.email} to the newsletter list.`;
                window.location.href = mailtoLink;
                this.success = true;
                this.email = '';
            } catch (err) {
                this.error = 'Failed to subscribe. Please try again.';
            } finally {
                this.loading = false;
            }
        }
    }
};

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
    routes,
    linkActiveClass: 'router-link-active',
    linkExactActiveClass: 'router-link-exact-active'
});

// Create and mount the root instance
new Vue({
    el: '#app',
    router,
    data: {
        title: 'Welcome to the Utah Wildlife Center',
        isMenuOpen: false
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        }
    },
    watch: {
        '$route'() {
            this.closeMenu();
        }
    }
});