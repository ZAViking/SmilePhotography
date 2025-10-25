<template>
  <div class="homepage">
    <section class="hero">
      <h1>Welcome to Smile Photography</h1>
      <p>Discover amazing photographers and their stunning work</p>
    </section>

    <section class="photographers-section">
      <h2>Our Photographers</h2>
      <div class="photographers-grid">
        <div 
          v-for="photographer in photographers" 
          :key="photographer.slug"
          class="photographer-card"
        >
          <NuxtLink :to="`/photographers/${photographer.slug}`" class="card-link">
            <div class="image-container">
            <img 
                :src="photographer.profileImage" 
                :alt="photographer.name"
                class="profile-image"
                @error="handleImageError"
            />
            </div>
            <div class="card-content">
              <h3>{{ photographer.name }}</h3>
              <p class="specialty">{{ photographer.specialty }}</p>
              <p class="location">{{ photographer.location }}</p>
              <p class="bio">{{ photographer.bio }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Photographers data - you can move this to a separate file later
const photographers = [
  {
    name: "John Doe",
    slug: "john-doe",
    specialty: "Landscape Photography",
    location: "New York, USA",
    bio: "Award-winning landscape photographer with over 10 years of experience capturing the beauty of nature.",
    email: "john@example.com",
    website: "https://johndoe.com",
    profileImage: "https://picsum.photos/400/400?random=1",
    gallery: [
        "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=400&fit=crop"
    ]
  },
  {
    name: "Jane Smith",
    slug: "jane-smith",
    specialty: "Portrait Photography",
    location: "Los Angeles, USA", 
    bio: "Creative portrait photographer specializing in fashion and editorial work with a unique eye for capturing personality.",
    email: "jane@example.com",
    website: "https://janesmith.com",
    profileImage: "https://picsum.photos/400/400?random=2",
    gallery: [
      "https://picsum.photos/600/400?random=2",
      "https://picsum.photos/600/400?random=3", 
      "https://picsum.photos/600/400?random=4"
    ]
  },
  {
    name: "Mike Johnson", 
    slug: "mike-johnson",
    specialty: "Wildlife Photography",
    location: "Colorado, USA",
    bio: "Passionate wildlife photographer dedicated to capturing animals in their natural habitats.",
    email: "mike@example.com", 
    website: "https://mikejohnson.com",
    profileImage: "https://picsum.photos/400/400?random=3",
    gallery: [
      "https://picsum.photos/600/400?random=2",
      "https://picsum.photos/600/400?random=3", 
      "https://picsum.photos/600/400?random=4"
    ]
  }
]

console.log('Photographers loaded:', photographers.length)

// Image error handler
const handleImageError = (event) => {
  console.log('Image failed to load:', event.target.src)
  // You can set a fallback image here
  event.target.src = '/placeholder.jpg'
}
</script>

<style scoped>
.homepage {
  padding: 2rem 0;
}

.hero {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  margin: -2rem -2rem 3rem -2rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.photographers-section {
  margin-bottom: 4rem;
}

.photographers-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.photographers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}

.photographer-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e5e5e5;
}

.photographer-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.image-container {
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

/* Fallback if image doesn't load */
.profile-image[src=""],
.profile-image:not([src]) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.profile-image:after {
  content: "No Image";
  color: white;
}

.photographer-card:hover .profile-image {
  transform: scale(1.05);
}

.card-content {
  padding: 1.5rem;
}

.card-content h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.4rem;
  color: #333;
}

.specialty {
  color: #667eea;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.location {
  color: #666;
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
}

.bio {
  color: #555;
  line-height: 1.5;
  margin: 0;
  font-size: 0.9rem;
}
</style>