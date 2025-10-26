# Harmony PG - Premium Student Accommodation Website

![Hero Banner](asset/image/hero-bg.jpg)

A modern, responsive website for Harmony PG, providing premium paying guest (PG) accommodation for students. Built with HTML5, CSS3, TailwindCSS, and vanilla JavaScript, this site features interactive room selection, image galleries, and seamless contact forms.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/badge/Website-Live-blue)](https://omupadhyay-git.github.io/Paying-Guest-Accommodation)

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## About the Project

Harmony PG is a student-focused accommodation website designed to showcase premium PG facilities near universities. It helps students find comfortable, secure, and affordable living spaces with features like high-speed WiFi, AC rooms, 24/7 security, and nutritious meals.

This project was built as part of a web development exercise/hackathon submission, demonstrating responsive design, interactive UI components, and modern web practices. The site is fully functional and can be deployed to GitHub Pages or any static hosting service.

### Built With

- HTML5 - Semantic markup for accessibility
- CSS3 - Custom styles with TailwindCSS for utility-first design
- JavaScript (ES6+) - Interactive features like tabs, lightbox, and smooth scrolling
- Font Awesome - Icons for enhanced UX
- Google Forms - Backend for contact and booking inquiries

## Features

- **Responsive Navigation**: Mobile-friendly hamburger menu with smooth transitions
- **Hero Section**: Eye-catching landing page with call-to-action buttons
- **Interactive Room Tabs**: Switch between single, double, and triple sharing options with dynamic content loading
- **Feature Highlights**: Cards showcasing WiFi, meals, AC, and security amenities
- **Image Gallery**: Lightbox modal for enlarged room and facility photos
- **Multi-Page Structure**: Separate pages for About, Gallery, and Contact
- **Smooth Scrolling**: Anchor link navigation with native browser support
- **Contact Integration**: Google Forms for room bookings and inquiries
- **SEO-Friendly**: Semantic HTML with alt texts and meta tags
- **Performance Optimized**: Clean code, minimal dependencies, fast loading

## Demo

View the live site: [https://omupadhyay-git.github.io/Paying-Guest-Accommodation](https://omupadhyay-git.github.io/Paying-Guest-Accommodation)

### Screenshots

| Home Page | Room Selection | Gallery Lightbox |
|-----------|----------------|------------------|
| ![Home](asset/image/single-deluxe.jpg) | ![Rooms](asset/image/double-premium.jpg) | ![Gallery](asset/image/gallery-room1.jpg) |

## Getting Started

### Prerequisites

- Web browser (Chrome, Firefox, Safari, Edge)
- VS Code or any code editor for development
- Live Server extension (for local preview)
- Git for version control

### Installation

1. **Clone the repository**
git clone https://github.com/OmUpadhyay-git/Paying-Guest-Accommodation.git
cd "Paying-Guest-Accommodation"

2. **Open in VS Code**
- Launch VS Code
- File > Open Folder > Select the project folder

3. **Install Live Server (VS Code Extension)**
- Go to Extensions (Ctrl+Shift+X)
- Search "Live Server".
- Install and reload

4. **Run Locally**
- Right-click `index.html` in Explorer
- Select "Open with Live Server"
- Site opens at `http://127.0.0.1:5500`

5. **Deploy to GitHub Pages** (Optional)
- Repo Settings > Pages > Source: "Deploy from branch" > main > / (root)
- Live URL: `https://omupadhyay-git.github.io/Paying-Guest-Accommodation`

## Usage

1. **Browse Rooms**: Use the tabbed interface on the home page to explore single (₹9,500-12,000), double (₹8,500), and triple (₹6,000) sharing options.

2. **View Gallery**: Click the Gallery nav link to see room photos with lightbox zoom.

3. **Book a Room**: Navigate to Contact > Fill Google Form for inquiries (replace form URL in `contact.html` with your own).

4. **Customize**:
- Update images in `asset/image/`
- Modify colors in `css/main.css` (variables: `--primary: #FF914D`)
- Add more rooms by duplicating card HTML in `index.html`

### Example: Adding a New Room Type

In `index.html`, add to the rooms section:
<div id="quad-room" class="hidden"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="bg-white rounded-lg overflow-hidden shadow-lg room-card"> <img src="asset/image/quad-shared.jpg" alt="Quad sharing room" class="w-full h-64 object-cover"> <div class="p-6"> <h3 class="text-xl font-bold mb-2">Quad Sharing</h3> <p class="text-gray-600 mb-4">Budget-friendly option for 4 students.</p> <div class="flex justify-between items-center"> <span class="text-xl font-bold text-primary">₹4,500<small>/month</small></span> <a href="contact.html#book-now" class="bg-primary text-white px-4 py-2 rounded-full">Book Now</a> </div> </div> </div> </div> </div> ```
Update tabs and JS accordingly.

│       ├── navigation.js     # Mobile menu toggle
│       ├── rooms.js          # Tab switching
│       ├── gallery.js        # Lightbox functionality
│       └── form.js           # Form handling
└── docs/                     # Additional docs (optional)
    └── README.md             # Extended documentation
