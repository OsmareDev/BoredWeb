interface ActivityType {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
  image?: string;
}

interface FilterType {
  type: string;
  participants: number;
  minPrice: number;
  maxPrice: number;
  minAccesibility: number;
  maxAccesibility: number;
}