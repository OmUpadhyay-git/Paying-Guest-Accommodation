<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Harmony PG - Premium Student Accommodation</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #FF914D;
            --secondary: #5A8F7B;
            --dark: #2C3E50;
            --light: #F8F9FA;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            scroll-behavior: smooth;
        }
        
        .hero {
            background: linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.7)), url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c96eef34-cfa2-432d-94de-77bfca946d44.png');
            background-size: cover;
            background-position: center;
        }
        
        .nav-transparent {
            background-color: rgba(44, 62, 80, 0.8);
        }
        
        .btn-primary {
            background-color: var(--primary);
            transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
            background-color: #e07e3d;
            transform: translateY(-2px);
        }
        
        .icon-box {
            width: 60px;
            height: 60px;
            background-color: rgba(90, 143, 123, 0.1);
        }
        
        .room-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .active-tab {
            background-color: var(--primary) !important;
            color: white !important;
        }
        
        .accordion-item {
            transition: all 0.3s ease;
        }
        
        .accordion-item:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .gallery-item {
            transition: all 0.3s ease;
        }
        
        .gallery-item:hover {
            transform: scale(1.03);
        }
        
        .testimonial-card {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }
        
        .testimonial-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .lightbox {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }
        
        .lightbox img {
            max-width: 90%;
            max-height: 90%;
        }
        
        .lightbox-close {
            position: absolute;
            top: 20px;
            right: 30px;
            color: white;
            font-size: 2rem;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <header class="fixed w-full z-50 transition-all duration-300 nav-transparent">
        <div class="container mx-auto px-4 py-3">
            <div class="flex justify-between items-center">
                <div class="text-white text-2xl font-bold">
                    <span class="text-primary">Sunshine</span>PG
                </div>
                
                <nav class="hidden md:block">
                    <ul class="flex space-x-8">
                        <li><a href="#home" class="text-white hover:text-primary transition">Home</a></li>
                        <li><a href="#about" class="text-white hover:text-primary transition">About</a></li>
                        <li><a href="#rooms" class="text-white hover:text-primary transition">Rooms</a></li>
                        <li><a href="#gallery" class="text-white hover:text-primary transition">Gallery</a></li>
                        <li><a href="#contact" class="text-white hover:text-primary transition">Contact</a></li>
                        <li><a href="#book-now" class="bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition">Book Now</a></li>
                    </ul>
                </nav>
                
                <button id="mobile-menu-button" class="md:hidden text-white text-2xl">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden md:hidden mt-4">
                <ul class="flex flex-col space-y-4">
                    <li><a href="#home" class="block text-white hover:text-primary transition">Home</a></li>
                    <li><a href="#about" class="block text-white hover:text-primary transition">About</a></li>
                    <li><a href="#rooms" class="block text-white hover:text-primary transition">Rooms</a></li>
                    <li><a href="#gallery" class="block text-white hover:text-primary transition">Gallery</a></li>
                    <li><a href="#contact" class="block text-white hover:text-primary transition">Contact</a></li>
                    <li><a href="#book-now" class="block bg-primary text-white px-4 py-2 rounded-full text-center hover:bg-opacity-90 transition">Book Now</a></li>
                </ul>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero min-h-screen flex items-center pt-20">
        <div class="container mx-auto px-4">
            <div class="max-w-2xl">
                <h1 class="text-white text-4xl md:text-6xl font-bold mb-6">Premium PG Accommodation for Students</h1>
                <p class="text-white text-xl mb-8">Modern, comfortable living spaces designed for your academic success and personal growth.</p>
                <div class="flex space-x-4">
                    <a href="#book-now" class="btn-primary text-white px-6 py-3 rounded-full font-medium">Book Now</a>
                    <a href="#rooms" class="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-dark transition">View Rooms</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-dark mb-4">Why Choose Harmony PG?</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">We provide more than just accommodation - we create a community that supports your educational journey</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-white p-8 rounded-lg shadow-md text-center">
                    <div class="icon-box rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-wifi text-2xl text-secondary"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">High-Speed WiFi</h3>
                    <p class="text-gray-600">Uninterrupted internet access for your studies and entertainment</p>
                </div>
                
                <div class="bg-white p-8 rounded-lg shadow-md text-center">
                    <div class="icon-box rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-utensils text-2xl text-secondary"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Delicious Meals</h3>
                    <p class="text-gray-600">Nutritious, homely meals prepared with care and hygiene</p>
                </div>
                
                <div class="bg-white p-8 rounded-lg shadow-md text-center">
                    <div class="icon-box rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-fan text-2xl text-secondary"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">AC Rooms</h3>
                    <p class="text-gray-600">Comfortable temperature-controlled living spaces</p>
                </div>
                
                <div class="bg-white p-8 rounded-lg shadow-md text-center">
                    <div class="icon-box rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-shield-alt text-2xl text-secondary"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">24/7 Security</h3>
                    <p class="text-gray-600">CCTV surveillance and security personnel for your safety</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row items-center">
                <div class="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
                    <h2 class="text-3xl font-bold text-dark mb-6">About Harmony PG</h2>
                    <p class="text-gray-600 mb-4">Founded in 2015, Harmony PG has been providing premium student accommodation with a focus on community, comfort, and convenience. Our mission is to create a supportive environment that helps students thrive academically and socially.</p>
                    <p class="text-gray-600 mb-6">Located just minutes from major universities and colleges, we offer quality living spaces with all essential amenities to make your student life comfortable and productive.</p>
                    <div class="flex space-x-4">
                        <div class="bg-primary bg-opacity-10 p-4 rounded-lg">
                            <h3 class="text-primary font-bold text-xl">150+</h3>
                            <p class="text-gray-600">Happy Students</p>
                        </div>
                        <div class="bg-secondary bg-opacity-10 p-4 rounded-lg">
                            <h3 class="text-secondary font-bold text-xl">8+</h3>
                            <p class="text-gray-600">Years Experience</p>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/2">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f3eb35e5-16f1-45ed-b9b4-be8d285e909f.png" alt="Group of diverse students studying together in a modern common area with comfortable seating and natural lighting" class="rounded-lg shadow-lg">
                </div>
            </div>
        </div>
    </section>

   
<!-- Rooms Section -->
    <section id="rooms" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-dark mb-4">Our Room Options</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Choose from our range of comfortable living spaces designed to suit different needs and budgets</p>
            </div>
            
            <div class="flex justify-center mb-8">
                <div class="inline-flex rounded-md shadow-sm">
                    <button onclick="changeRoomTab('single')" class="px-6 py-3 text-sm font-medium rounded-l-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 room-tab">
                        Single Room
                    </button>
                    <button onclick="changeRoomTab('double')" class="px-6 py-3 text-sm font-medium border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50 room-tab">
                        Double Sharing
                    </button>
                    <button onclick="changeRoomTab('triple')" class="px-6 py-3 text-sm font-medium rounded-r-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 room-tab active-tab">
                        Triple Sharing
                    </button>
                </div>
            </div>
            
            <div id="single-room" class="hidden">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-lg overflow-hidden shadow-lg room-card transition duration-300">
                        <div class="h-64 overflow-hidden">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/14b23d75-56f6-4616-b654-eeb343aac4b7.png" alt="Spacious single student room with a wooden desk, bookshelf, single bed, and large window for natural light" class="w-full h-full object-cover">
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Deluxe Single Room</h3>
                            <div class="flex items-center text-yellow-500 mb-4">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <span class="text-gray-600 ml-2 text-sm">(24 reviews)</span>
                            </div>
                            <p class="text-gray-600 mb-4">Private space with study desk, wardrobe, and attached bathroom.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-xl font-bold text-primary">₹12,000<small class="text-gray-500 text-sm font-normal">/month</small></span>
                                <a href="#book-now" class="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition">Book Now</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-lg overflow-hidden shadow-lg room-card transition duration-300">
                        <div class="h-64 overflow-hidden">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7d9a2e10-1697-4760-b870-621703ea3e34.png" alt="Compact single student room with modern furnishings, study space, and built-in wardrobe with natural lighting" class="w-full h-full object-cover">
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Standard Single Room</h3>
                            <div class="flex items-center text-yellow-500 mb-4">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                                <span class="text-gray-600 ml-2 text-sm">(18 reviews)</span>
                            </div>
                            <p class="text-gray-600 mb-4">Compact and efficient space with all necessary amenities.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-xl font-bold text-primary">₹9,500<small class="text-gray-500 text-sm font-normal">/month</small></span>
                                <a href="#book-now" class="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="double-room" class="hidden">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-lg overflow-hidden shadow-lg room-card transition duration-300">
                        <div class="h-64 overflow-hidden">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5216aa0e-91b0-4c79-ad95-3231c3a32e44.png" alt="Modern double-sharing student room with two beds, study desks, wardrobes, and ample natural light" class="w-full h-full object-cover">
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Premium Double Sharing</h3>
                            <div class="flex items-center text-yellow-500 mb-4">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <span class="text-gray-600 ml-2 text-sm">(32 reviews)</span>
                            </div>
                            <p class="text-gray-600 mb-4">Spacious room with separate study areas and shared bathroom.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-xl font-bold text-primary">₹8,500<small class="text-gray-500 text-sm font-normal">/month</small></span>
                                <a href="#book-now" class="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition">Book Now</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-lg overflow-hidden shadow-lg room-card transition duration-300">
                        <div class="h-64 overflow-hidden">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/787179db-6300-43b9-9978-8ae6411c12d9.png" alt="Cozy double-sharing student room with bunk beds, shared study table, and wardrobe space" class="w-full h-full object-cover">
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Standard Double Sharing</h3>
                            <div class="flex items-center text-yellow-500 mb-4">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <span class="text-gray-600 ml-2 text-sm">(26 reviews)</span>
                            </div>
                            <p class="text-gray-600 mb-4">Comfortable shared space with essential furnishings.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-xl font-bold text-primary">₹7,000<small class="text-gray-500 text-sm font-normal">/month</small></span>
                                <a href="#book-now" class="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="triple-room">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-lg overflow-hidden shadow-lg room-card transition duration-300">
                        <div class="h-64 overflow-hidden">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9391fe3d-f99e-4be4-a009-7cfa51b5bddc.png" alt="Spacious triple-sharing student room with three beds, individual study spaces, and large windows" class="w-full h-full object-cover">
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Premium Triple Sharing</h3>
                            <div class="flex items-center text-yellow-500 mb-4">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <span class="text-gray-600 ml-2 text-sm">(41 reviews)</span>
                            </div>
                            <p class="text-gray-600 mb-4">Large room with ample space and individual storage.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-xl font-bold text-primary">₹6,500<small class="text-gray-500 text-sm font-normal">/month</small></span>
                                <a href="#book-now" class="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition">Book Now</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-lg overflow-hidden shadow-lg room-card transition duration-300">
                        <div class="h-64 overflow-hidden">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/668518ea-5031-4cb4-bb79-804f806efb14.png" alt="Economical triple-sharing student room with bunk beds and shared study area with personal lockers" class="w-full h-full object-cover">
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Standard Triple Sharing</h3>
                            <div class="flex items-center text-yellow-500 mb-4">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <span class="text-gray-600 ml-2 text-sm">(35 reviews)</span>
                            </div>
                            <p class="text-gray-600 mb-4">Budget-friendly option with essential amenities.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-xl font-bold text-primary">₹5,500<small class="text-gray-500 text-sm font-normal">/month</small></span>
                                <a href="#book-now" class="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-dark mb-4">Gallery</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Take a virtual tour of Harmony PG and our facilities</p>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div class="gallery-item overflow-hidden rounded-lg shadow-md cursor-pointer" onclick="openLightbox('https://placehold.co/1200x800')">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/00f8ae6c-c7c9-4249-8b6f-f917b741ba2f.png" alt="Modern student lounge area with comfortable sofas, coffee table, and bookshelves" class="w-full h-64 object-cover hover:scale-105 transition">
                </div>
                
                <div class="gallery-item overflow-hidden rounded-lg shadow-md cursor-pointer" onclick="openLightbox('https://placehold.co/1200x800')">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/309fe571-fc25-411a-a2a3-d0a53270dd3e.png" alt="Clean and well-organized shared kitchen with modern appliances and dining area" class="w-full h-64 object-cover hover:scale-105 transition">
                </div>
                
                <div class="gallery-item overflow-hidden rounded-lg shadow-md cursor-pointer" onclick="openLightbox('https://placehold.co/1200x800')">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7881eb44-5e3d-4d98-8e29-f37ec8975917.png" alt="Study room with individual desks, ample lighting, and charging stations" class="w-full h-64 object-cover hover:scale-105 transition">
                </div>
                
                <div class="gallery-item overflow-hidden rounded-lg shadow-md cursor-pointer" onclick="openLightbox('https://placehold.co/1200x800')">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1d6d2db9-1624-4fae-b417-93c54e639299.png" alt="Outdoor seating area with garden view and comfortable chairs for relaxation" class="w-full h-64 object-cover hover:scale-105 transition">
                </div>
                
                <div class="gallery-item overflow-hidden rounded-lg shadow-md cursor-pointer" onclick="openLightbox('https://placehold.co/1200x800')">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/21029f44-016e-4ef8-8038-c172f70b0066.png" alt="Modern laundry room with washing machines and drying area" class="w-full h-64 object-cover hover:scale-105 transition">
                </div>
                
                <div class="gallery-item overflow-hidden rounded-lg shadow-md cursor-pointer" onclick="openLightbox('https://placehold.co/1200x800')">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5bae4b2d-5279-413d-938c-772d29608d2c.png" alt="Cafeteria area serving healthy breakfast options with students dining together" class="w-full h-64 object-cover hover:scale-105 transition">
                </div>
                
                <div class="gallery-item overflow-hidden rounded-lg shadow-md cursor-pointer" onclick="openLightbox('https://placehold.co/1200x800')">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/57b7a481-581a-4fad-963f-2552d75dd2f0.png" alt="Indoor games area with table tennis and board games for recreation" class="w-full h-64 object-cover hover:scale-105 transition">
                </div>
                
                <div class="gallery-item overflow-hidden rounded-lg shadow-md cursor-pointer" onclick="openLightbox('https://placehold.co/1200x800')">
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5cc5b724-a4a4-4790-b539-4cdb1df3d6e5.png" alt="Well-maintained bathroom with modern fixtures and clean shower area" class="w-full h-64 object-cover hover:scale-105 transition">
                </div>
            </div>
            
            <!-- Lightbox -->
            <div id="lightbox" class="lightbox">
                <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
                <img id="lightbox-image" src="" alt="Enlarged gallery image" src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/338f88f0-d1b9-4f62-8f6d-f9a5d8eaf66f.png">
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-dark mb-4">What Our Students Say</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Hear from students who have experienced life at Harmony PG</p>
            </div>
            
            <div class="relative max-w-5xl mx-auto">
                <div id="testimonials" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="testimonial-card bg-white p-6 rounded-lg">
                        <div class="flex items-center mb-4">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6d7c222e-69d0-4889-ba68-f65c4d079195.png" alt="Portrait of Priya Sharma, computer science student" class="w-12 h-12 rounded-full object-cover">
                            <div class="ml-4">
                                <h4 class="font-bold">Priya Sharma</h4>
                                <p class="text-gray-500 text-sm">Computer Science Student</p>
                            </div>
                        </div>
                        <p class="text-gray-600 mb-4">"Harmony PG has been my home away from home. The facilities are excellent and the management is very supportive."</p>
                        <div class="flex text-yellow-500">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    
                    <div class="testimonial-card bg-white p-6 rounded-lg">
                        <div class="flex items-center mb-4">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c66ef0dd-b492-4aaf-ac75-ce81329f6056.png" alt="Portrait of Rahul Verma, engineering student" class="w-12 h-12 rounded-full object-cover">
                            <div class="ml-4">
                                <h4 class="font-bold">Rahul Verma</h4>
                                <p class="text-gray-500 text-sm">Engineering Student</p>
                            </div>
                        </div>
                        <p class="text-gray-600 mb-4">"The study environment here is perfect. I've made great friends and my grades have improved significantly."</p>
                        <div class="flex text-yellow-500">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                    
                    <div class="testimonial-card bg-white p-6 rounded-lg">
                        <div class="flex items-center mb-4">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7e0281aa-451e-4af9-9db0-4564de17c691.png" alt="Portrait of Anjali Patel, medical student" class="w-12 h-12 rounded-full object-cover">
                            <div class="ml-4">
                                <h4 class="font-bold">Anjali Patel</h4>
                                <p class="text-gray-500 text-sm">Medical Student</p>
                            </div>
                        </div>
                        <p class="text-gray-600 mb-4">"As a medical student with erratic schedules, the 24/7 access to kitchen and study areas is a lifesaver!"</p>
                        <div class="flex text-yellow-500">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>
                
                <button id="prev-testimonial" class="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                    <i class="fas fa-chevron-left text-gray-700"></i>
                </button>
                <button id="next-testimonial" class="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                    <i class="fas fa-chevron-right text-gray-700"></i>
                </button>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-4 max-w-4xl">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about Harmony PG</p>
            </div>
            
            <div class="space-y-4">
                <div class="accordion-item bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <button class="accordion-btn flex justify-between items-center w-full p-5 text-left font-medium text-dark hover:bg-gray-50 transition">
                        <span>What is included in the monthly rent?</span>
                        <i class="fas fa-chevron-down transition-transform duration-300"></i>
                    </button>
                    <div class="accordion-content hidden p-5 border-t border-gray-200">
                        <p class="text-gray-600">The monthly rent includes accommodation, WiFi, electricity, housekeeping, maintenance, and three meals per day (breakfast, lunch, and dinner).</p>
                    </div>
                </div>
                
                <div class="accordion-item bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <button class="accordion-btn flex justify-between items-center w-full p-5 text-left font-medium text-dark hover:bg-gray-50 transition">
                        <span>Are visitors allowed in the rooms?</span>
                        <i class="fas fa-chevron-down transition-transform duration-300"></i>
                    </button>
                    <div class="accordion-content hidden p-5 border-t border-gray-200">
                        <p class="text-gray-600">Visitors are allowed in common areas between 9 AM to 9 PM. For security reasons, visitors are not permitted in individual rooms.</p>
                    </div>
                </div>
                
                <div class="accordion-item bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <button class="accordion-btn flex justify-between items-center w-full p-5 text-left font-medium text-dark hover:bg-gray-50 transition">
                        <span>What is the security deposit amount?</span>
                        <i class="fas fa-chevron-down transition-transform duration-300"></i>
                    </button>
                    <div class="accordion-content hidden p-5 border-t border-gray-200">
                        <p class="text-gray-600">A refundable security deposit equivalent to one month's rent is required at the time of admission. This is refunded at the end of your stay after deducting for any damages.</p>
                    </div>
                </div>
                
                <div class="accordion-item bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <button class="accordion-btn flex justify-between items-center w-full p-5 text-left font-medium text-dark hover:bg-gray-50 transition">
                        <span>Is there a curfew at the PG?</span>
                        <i class="fas fa-chevron-down transition-transform duration-300"></i>
                    </button>
                    <div class="accordion-content hidden p-5 border-t border-gray-200">
                        <p class="text-gray-600">No, there is no strict curfew, but we expect all residents to be considerate of others and maintain reasonable hours. The main gate remains locked after 11 PM, but residents can access with their key cards.</p>
                    </div>
                </div>
                
                <div class="accordion-item bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <button class="accordion-btn flex justify-between items-center w-full p-5 text-left font-medium text-dark hover:bg-gray-50 transition">
                        <span>Can I get my own room after starting with shared accommodation?</span>
                        <i class="fas fa-chevron-down transition-transform duration-300"></i>
                    </button>
                    <div class="accordion-content hidden p-5 border-t border-gray-200">
                        <p class="text-gray-600">Yes, if single rooms become available, current residents get first priority to upgrade. Additional charges will apply based on the room type.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-dark mb-4">Contact Us</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Have questions? We're here to help you find the perfect student accommodation</p>
            </div>
            
            <div class="flex flex-col lg:flex-row gap-12">
                <div class="lg:w-1/2">
                    <form id="contact-form" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" class="space-y-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input type="text" id="name" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
                        </div>
                        
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input type="tel" id="phone" name="phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
                        </div>
                        
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea id="message" name="message" rows="4" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"></textarea>
                        </div>
                        
                        <button type="submit" class="btn-primary text-white px-6 py-3 rounded-full font-medium w-full">Send Message</button>
                    </form>
                    
                    <div id="form-success" class="hidden mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                        Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </div>
                    
                    <div id="form-error" class="hidden mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                        There was an error submitting your form. Please try again or contact us directly.
                    </div>
                </div>
                
                <div class="lg:w-1/2">
                    <div class="bg-white p-8 rounded-lg shadow-md h-full">
                        <h3 class="text-xl font-bold mb-6">Get In Touch</h3>
                        
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="icon-box rounded-full flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-map-marker-alt text-secondary"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-dark mb-1">Address</h4>
                                    <p class="text-gray-600">123 Student Street, Academic Nagar, Pune - 411001</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="icon-box rounded-full flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-phone-alt text-secondary"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-dark mb-1">Phone</h4>
                                    <p class="text-gray-600">+91 9876543210</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="icon-box rounded-full flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-envelope text-secondary"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-dark mb-1">Email</h4>
                                    <p class="text-gray-600">info@harmonypg.com</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="icon-box rounded-full flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-clock text-secondary"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-dark mb-1">Office Hours</h4>
                                    <p class="text-gray-600">Monday - Saturday: 9AM - 7PM</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-8">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1108081810526!2d73.83040931472393!3d18.569557737863657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07f9d8e5c97%3A0x6a13092e346a029e!2sPune%20University!5e0!3m2!1sen!2sin!4v1673873043302!5m2!1sen!2sin" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded-lg"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Book Now Section -->
    <section id="book-now" class="py-20 bg-primary text-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold mb-4">Ready to Book Your Stay?</h2>
                <p class="max-w-2xl mx-auto">Complete the form below to reserve your room or schedule a visit</p>
            </div>
            
            <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <form id="booking-form" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" class="space-y-6 p-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="booking-name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input type="text" id="booking-name" name="booking-name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
                        </div>
                        
                        <div>
                            <label for="booking-email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" id="booking-email" name="booking-email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="booking-phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input type="tel" id="booking-phone" name="booking-phone" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
                        </div>
                        
                        <div>
                            <label for="booking-date" class="block text-sm font-medium text-gray-700 mb-1">Preferred Move-in Date</label>
                            <input type="date" id="booking-date" name="booking-date" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
                        </div>
                    </div>
                    
                    <div>
                        <label for="booking-room" class="block text-sm font-medium text-gray-700 mb-1">Room Preference</label>
                        <select id="booking-room" name="booking-room" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary">
                            <option value="">Select Room Type</option>
                            <option value="Deluxe Single Room">Deluxe Single Room</option>
                            <option value="Standard Single Room">Standard Single Room</option>
                            <option value="Premium Double Sharing">Premium Double Sharing</option>
                            <option value="Standard Double Sharing">Standard Double Sharing</option>
                            <option value="Premium Triple Sharing">Premium Triple Sharing</option>
                            <option value="Standard Triple Sharing">Standard Triple Sharing</option>
                        </select>
                    </div>
                    
                    <div>
                        <label for="booking-message" class="block text-sm font-medium text-gray-700 mb-1">Additional Requirements</label>
                        <textarea id="booking-message" name="booking-message" rows="3" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"></textarea>
                    </div>
                    
                    <div class="flex items-center">
                        <input type="checkbox" id="booking-visit" name="booking-visit" class="rounded text-primary focus:ring-primary">
                        <label for="booking-visit" class="ml-2 text-sm text-gray-700">I would like to schedule a visit</label>
                    </div>
                    
                    <button type="submit" class="btn-primary text-white px-6 py-3 rounded-full font-medium w-full">Submit Booking Request</button>
                </form>
                
                <div id="booking-success" class="hidden p-8 bg-green-100 text-green-700">
                    <h3 class="font-bold text-lg mb-2">Booking Request Received!</h3>
                    <p>Thank you for your interest in Harmony PG. We've received your booking request and will contact you within 24 hours to confirm availability and next steps.</p>
                </div>
            </div>
        </div>
    </section>


<!-- Footer -->
    <footer class="bg-dark text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4"><span class="text-primary">Harmony</span>PG</h3>
                    <p class="text-gray-400">Premium student accommodation designed to support your academic success and personal growth.</p>
                </div>
                
                <div>
                    <h4 class="font-bold mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="#home" class="text-gray-400 hover:text-white transition">Home</a></li>
                        <li><a href="#about" class="text-gray-400 hover:text-white transition">About Us</a></li>
                        <li><a href="#rooms" class="text-gray-400 hover:text-white transition">Rooms</a></li>
                        <li><a href="#gallery" class="text-gray-400 hover:text-white transition">Gallery</a></li>
                        <li><a href="#contact" class="text-gray-400 hover:text-white transition">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-bold mb-4">Amenities</h4>
                    <ul class="space-y-2">
                        <li class="text-gray-400">High-Speed WiFi</li>
                        <li class="text-gray-400">Nutritious Meals</li>
                        <li class="text-gray-400">Study Rooms</li>
                        <li class="text-gray-400">Laundry Facilities</li>
                        <li class="text-gray-400">24/7 Security</li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-bold mb-4">Connect With Us</h4>
                    <div class="flex space-x-4 mb-6">
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    
                    <h4 class="font-bold mb-2">Subscribe to Newsletter</h4>
                    <form class="flex">
                        <input type="email" placeholder="Your email" class="px-4 py-2 rounded-l-lg focus:outline-none text-dark">
                        <button type="submit" class="bg-primary px-4 py-2 rounded-r-lg hover:bg-opacity-90 transition">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-400 mb-4 md:mb-0">© 2023 Harmony PG. All rights reserved.</p>
                <div class="flex space-x-6">
                    <a href="#" class="text-gray-400 hover:text-white transition">Privacy Policy</a>
                    <a href="#" class="text-gray-400 hover:text-white transition">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Back to Top Button -->
    <a href="#home" id="back-to-top" class="fixed bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl opacity-0 invisible transition-all duration-300 transform translate-y-4 hover:bg-opacity-90">
        <i class="fas fa-arrow-up"></i>
    </a>

    <script>
        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Room Tabs
        function changeRoomTab(roomType) {
            // Hide all room sections
            document.getElementById('single-room').classList.add('hidden');
            document.getElementById('double-room').classList.add('hidden');
            document.getElementById('triple-room').classList.add('hidden');
            
            // Show selected room section
            document.getElementById(`${roomType}-room`).classList.remove('hidden');
            
            // Update active tab styling
            const tabs = document.querySelectorAll('.room-tab');
            tabs.forEach(tab => {
                tab.classList.remove('active-tab', 'bg-primary', 'text-white');
            });
            
            // Update clicked tab style
            const activeTab = document.querySelector(`button[onclick="changeRoomTab('${roomType}')"]`);
            activeTab.classList.add('active-tab');
        }
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });
        
        // Scroll detection for header and back-to-top button
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            const backToTopButton = document.getElementById('back-to-top');
            
            if (window.scrollY > 100) {
                header.classList.remove('nav-transparent');
                header.classList.add('bg-dark', 'shadow-md');
                backToTopButton.classList.remove('opacity-0', 'invisible', 'translate-y-4');
                backToTopButton.classList.add('opacity-100', 'visible', 'translate-y-0');
            } else {
                header.classList.add('nav-transparent');
                header.classList.remove('bg-dark', 'shadow-md');
                backToTopButton.classList.add('opacity-0', 'invisible', 'translate-y-4');
                backToTopButton.classList.remove('opacity-100', 'visible', 'translate-y-0');
            }
        });
        
        // Accordion functionality
        const accordionButtons = document.querySelectorAll('.accordion-btn');
        
        accordionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const accordionContent = button.nextElementSibling;
                const icon = button.querySelector('i');
                
                accordionContent.classList.toggle('hidden');
                icon.classList.toggle('rotate-180');
            });
        });
        
        // Testimonial carousel
        let currentTestimonial = 0;
        const testimonials = document.getElementById('testimonials').children;
        const totalTestimonials = testimonials.length;
        
        function showTestimonial(index) {
            for (let i = 0; i < totalTestimonials; i++) {
                testimonials[i].classList.add('hidden');
            }
            
            testimonials[index].classList.remove('hidden');
            currentTestimonial = index;
        }
        
        document.getElementById('next-testimonial').addEventListener('click', () => {
            let nextIndex = currentTestimonial + 1;
            if (nextIndex >= totalTestimonials) nextIndex = 0;
            showTestimonial(nextIndex);
        });
        
        document.getElementById('prev-testimonial').addEventListener('click', () => {
            let prevIndex = currentTestimonial - 1;
            if (prevIndex < 0) prevIndex = totalTestimonials - 1;
            showTestimonial(prevIndex);
        });
        
        // Initialize carousel
        showTestimonial(0);
        
        // Lightbox functionality
        function openLightbox(src) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImage = document.getElementById('lightbox-image');
            
            lightboxImage.src = src;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        
        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // Close lightbox when clicking outside image
        document.getElementById('lightbox').addEventListener('click', (e) => {
            if (e.target === document.getElementById('lightbox')) {
                closeLightbox();
            }
        });
        
        // Form handling
        const contactForm = document.getElementById('contact-form');
        const bookingForm = document.getElementById('booking-form');
        const formSuccess = document.getElementById('form-success');
        const formError = document.getElementById('form-error');
        const bookingSuccess = document.getElementById('booking-success');
        
        if (contactForm) {
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                try {
                    const formData = new FormData(contactForm);
                    const response = await fetch(contactForm.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    
                    if (response.ok) {
                        contactForm.reset();
                        formSuccess.classList.remove('hidden');
                        formError.classList.add('hidden');
                        setTimeout(() => {
                            formSuccess.classList.add('hidden');
                        }, 5000);
                    } else {
                        throw new Error('Form submission failed');
                    }
                } catch (error) {
                    formError.classList.remove('hidden');
                    setTimeout(() => {
                        formError.classList.add('hidden');
                    }, 5000);
                }
            });
        }
        
        if (bookingForm) {
            bookingForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                try {
                    const formData = new FormData(bookingForm);
                    const response = await fetch(bookingForm.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    
                    if (response.ok) {
                        bookingForm.classList.add('hidden');
                        bookingSuccess.classList.remove('hidden');
                    } else {
                        throw new Error('Booking submission failed');
                    }
                } catch (error) {
                    alert('There was an error submitting your booking. Please try again or contact us directly.');
                }
            });
        }
        
        // Initialize room tabs
        changeRoomTab('triple');
    </script>
</body>
</html>

