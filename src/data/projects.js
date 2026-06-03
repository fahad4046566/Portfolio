import recipe from "../assets/Recipe.png";
import budget from "../assets/budget.png";
import weather from "../assets/weather.png";
import ecommerce2 from "../assets/ecommerce-catalog.png";
import movie from "../assets/movie.png";
import recipe2 from "../assets/recipe2.png";
import budget2 from "../assets/budget2.png";
import weather2 from "../assets/weather2.png";
import movie2 from "../assets/movie2.png";
export const projects = [
  {
    id: 1,
    title: "Full-Stack E-commerce with Stripe Payments",
    description: "Complete payment-ready online store with cart, orders, and webhooks",
    longDescription: "Built a production-ready e-commerce platform using React frontend, Laravel backend, and Stripe payment gateway. Features include user authentication, product management, shopping cart, order processing, and Stripe webhooks for payment confirmation. This project demonstrates full-stack capabilities from UI to database to payment integration.",
    image: ecommerce2,
    fullImage: ecommerce2,
    techStack: ["React", "Laravel", "Stripe API", "MySQL", "REST API", "Webhooks"],
    features: [
      "User authentication (register/login)",
      "Product listing with dynamic cart",
      "Order placement & checkout flow",
      "Stripe payment integration (test mode)",
      "Webhook handling for payment confirmation",
      "Admin panel for product management (from blog project)"
    ],
    featured: true,
},
 {
    id: 2,
    title: "Movie Explorer",
    description: "Discover movies with TMDb API, featuring search and details...",
    longDescription: "Detailed description for modal/detail view with more info about the project, challenges faced, and solutions implemented.",
    image: movie,
      fullImage: movie2,
    techStack: ["React", "TMDb API","Tailwind CSS", "Daisy UI", "Context API", "useReducer","Motion Framer" , "React Router","Axios","React Icons","Infinite Scroll"],
    features: [
      "Search movies by title",
      "View detailed movie information",
      "Responsive design for all devices",
      "Infinite scrolling for movie lists",
      "Smooth animations with Framer Motion",
      "Client-side routing with React Router",
      "API integration with Axios",
      "Favorite movies management with Context",
      "Dark mode toggle with Tailwind CSS"    
    ],
    liveUrl: "https://movie-search-dbo9nnibx-fahad-bashirs-projects-0a697a81.vercel.app/",
    githubUrl: "https://github.com/fahad4046566/movie-search-app"    
 },
 {
    id: 3,
    title: "Recipe Manager",
    description: "Manage your favorite recipes with easy search and filtering...",
    longDescription: "Detailed description for modal/detail view...",
    image: recipe,
    fullImage: recipe2,
    techStack: ["React", "Context API", "useReducer", "LocalStorage"],
    features: [
      "Search recipes by name",
      "View detailed recipe information",
      "Save favorite recipes",
      "Responsive design for all devices",
      "Make new recipes and add to the list"
    ],
    liveUrl: "https://recipe-manager-3d7q.vercel.app/",
    githubUrl: "https://github.com/fahad4046566/Recipe-Manager"
  },{
    id: 4,
    title: "Smart budget manager",
    description: "Manage your budget with ease, track expenses and visualize spending...",
    longDescription: "Detailed description for modal/detail view with more info about the project, challenges faced, and solutions implemented.",
    image: budget,
    fullImage: budget2,
    techStack: ["React", "Context API", "useReducer", "LocalStorage"],
    features: [
      "Track expenses and income",
      "Visualize spending",
      "Set budget limits and receive alerts",
      "Responsive design for all devices"
    ],
    liveUrl: "https://smart-budget-manager-beta.vercel.app/",
    githubUrl: "https://github.com/fahad4046566/smart-budget-manager"
  },
  {
    id: 6,
    title: "Weather App",
    description: "You can see live weather for any place in just one search...",
    longDescription: "Detailed description for modal/detail view with more info about the project, challenges faced, and solutions implemented.",
    image: weather,
    fullImage: weather2,
    techStack: ["React", "Weather API"],
    features: [
      "Weather Data",
      "Rain Prediction",
      "Humidity percentage",
      "Responsive design for all devices"
    ],
    liveUrl: "https://fahad4046566.github.io/ReactWeather/",
    githubUrl: "https://github.com/fahad4046566/ReactWeather"
  }
]
