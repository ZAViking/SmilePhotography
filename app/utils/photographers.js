// app/utils/photographers.js

export const photographers = [
  {
    name: "John Doe",
    slug: "john-doe",
    specialty: "Landscape Photography",
    location: "New York, USA",
    bio: "Award-winning landscape photographer with over 10 years of experience capturing the beauty of nature.",
    email: "john@example.com",
    website: "https://johndoe.com",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop"
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
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&h=400&fit=crop"
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
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519066629447-267fffa62d4b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1534188753412-896958b60f64?w=600&h=400&fit=crop"
    ]
  }
]

// Helper function to get photographer by slug (case-insensitive)
export const getPhotographerBySlug = (slug) => {
  return photographers.find(photographer => 
    photographer.slug.toLowerCase() === slug.toLowerCase()
  )
}

// Helper function to get all photographers
export const getAllPhotographers = () => {
  return photographers
}