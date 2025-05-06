
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "rajiv-sharma",
    name: "Rajiv Sharma",
    position: "Founder & CEO",
    bio: "Rajiv founded Ativa World with a vision to connect Indian artisans and sustainable manufacturers with global markets. With over 15 years of experience in international trade and sustainable business practices, he leads our global strategy and partnerships. Rajiv holds an MBA from the Indian Institute of Management and is passionate about creating business models that benefit both communities and the environment.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: "amrita-patel",
    name: "Amrita Patel",
    position: "Creative Director",
    bio: "Amrita brings her expertise in product design and sustainable materials to Ativa World. With a background in industrial design and traditional crafts, she works closely with our artisan partners to develop products that blend functionality with cultural heritage. Her work has been recognized internationally for its innovative use of sustainable materials and support of traditional craft communities.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: "vikram-singh",
    name: "Vikram Singh",
    position: "Head of Operations",
    bio: "Vikram oversees our supply chain and ensures that all of our products meet both international quality standards and our strict sustainability criteria. With a background in logistics and sustainable supply chain management, he has streamlined our operations while reducing our environmental footprint. Vikram is committed to transparent sourcing and fair trade practices across our entire product line.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
];
