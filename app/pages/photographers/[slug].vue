<script setup>
const route = useRoute()

// Import from shared data file using relative path
import { getPhotographerBySlug, getAllPhotographers } from '../../utils/photographers.js'

// Get the slug from route params and normalize it
const currentSlug = String(route.params.slug).toLowerCase().trim()
console.log('Normalized slug:', currentSlug)

// Debug: Log all available slugs and the current route slug
const allPhotographers = getAllPhotographers()
const availableSlugs = allPhotographers.map(p => p.slug)
console.log('All available slugs:', availableSlugs)
console.log('Current route slug:', route.params.slug)
console.log('Normalized slug for search:', currentSlug)

// Find the photographer by slug
const photographer = getPhotographerBySlug(currentSlug)

// Debug: Log the search result
console.log('Found photographer:', photographer)

// If photographer not found, show available options
if (!photographer) {
  console.log('Photographer not found. Available slugs:', availableSlugs)
}

// Image error handlers
const handleImageError = (event) => {
  console.log('Profile image failed to load:', event.target.src)
  event.target.src = 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=400&h=400&fit=crop'
}

const handleGalleryError = (event) => {
  console.log('Gallery image failed to load:', event.target.src)
  event.target.src = 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&h=400&fit=crop'
}
</script>

<template>
  <div class="photographer-page" v-if="photographer">
    <div class="profile-header">
      <div class="profile-image">
        <img 
          :src="photographer.profileImage" 
          :alt="photographer.name"
          @error="handleImageError"
        />
      </div>
      <div class="profile-info">
        <h1>{{ photographer.name }}</h1>
        <p class="specialty">{{ photographer.specialty }}</p>
        <p class="location">{{ photographer.location }}</p>
        <p class="bio">{{ photographer.bio }}</p>
        
        <div class="contact-info">
          <a :href="`mailto:${photographer.email}`" class="contact-link">
            {{ photographer.email }}
          </a>
          <a v-if="photographer.website" :href="photographer.website" target="_blank" class="contact-link">
            Visit Website
          </a>
        </div>
      </div>
    </div>

    <section class="gallery" v-if="photographer.gallery && photographer.gallery.length > 0">
      <h2>Gallery</h2>
      <div class="gallery-grid">
        <div 
          v-for="(image, index) in photographer.gallery" 
          :key="index"
          class="gallery-item"
        >
          <img 
            :src="image" 
            :alt="`${photographer.name} - Photo ${index + 1}`"
            loading="lazy"
            @error="handleGalleryError"
          />
        </div>
      </div>
    </section>
  </div>

  <div v-else class="error">
    <h2>Photographer not found</h2>
    <p>Looking for slug: "{{ currentSlug }}"</p>
    <p>Available photographers: {{ availableSlugs.join(', ') }}</p>
    <NuxtLink to="/">← Back to home</NuxtLink>
  </div>
</template>

<style scoped>
.photographer-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
}

.profile-header {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  align-items: start;
}

.profile-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.specialty {
  font-size: 1.5rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.location {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.bio {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #555;
}

.contact-info {
  margin-bottom: 1.5rem;
}

.contact-link {
  display: inline-block;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;
}

.contact-link:hover {
  background: #5a6fd8;
}

.gallery {
  margin-top: 4rem;
}

.gallery h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.gallery-item {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.gallery-item:hover {
  transform: scale(1.02);
}

.gallery-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
}

.error {
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
}

.error h2 {
  margin-bottom: 1rem;
}

.error a {
  color: #667eea;
  text-decoration: none;
}

@media (max-width: 768px) {
  .profile-header {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .profile-image {
    justify-self: center;
  }
}
</style>