// Shared breed data used by the Animal Guide and the individual breed detail pages.
import girImage from "@/assets/animals/gir.jpg";
import sahiwalImage from "@/assets/animals/sahiwal.jpg";
import murrahImage from "@/assets/animals/murrah-buffalo.jpg";
import niliRaviImage from "@/assets/animals/nili-ravi-buffalo.jpg";
import surtiImage from "@/assets/animals/surti-buffalo.jpg";
import jafarabadiImage from "@/assets/animals/jafarabadi-buffalo.jpg";
import ongoleImage from "@/assets/animals/ongole.jpg";
import hallikarImage from "@/assets/animals/hallikar.jpg";
import malnadImage from "@/assets/animals/malnad.jpg";
import rathiImage from "@/assets/animals/rathi.jpg";
import redsindhiImage from "@/assets/animals/red-sindhi.jpg";
import kankrejImage from "@/assets/animals/kankrej.jpg";
import mehsanaImage from "@/assets/animals/mehsana.jpg";
import bhadawariImage from "@/assets/animals/bhadawari.jpg";
import todaImage from "@/assets/animals/toda.jpg";
import nagpuriImage from "@/assets/animals/nagpuri.jpg";

export type BreedType = "cow" | "buffalo";

export interface Breed {
  slug: string;
  type: BreedType;
  name: string;
  origin: string;
  characteristics: string;
  avgWeight: string;
  milkYield: string;
  lactationYield: string;
  fatContent: string;
  climate: string;
  image: string;
  specialty: string;
}

export const cowBreeds: Breed[] = [
  {
    slug: "ongole",
    type: "cow",
    name: "Ongole",
    origin: "Andhra Pradesh, India",
    characteristics: "High milk production, black and white markings, docile temperament",
    avgWeight: "600-700 kg",
    milkYield: "20-30 liters/day",
    lactationYield: "4,000-12,000 kg",
    fatContent: "3.5-4.0%",
    climate: "Cold to moderate",
    image: ongoleImage,
    specialty: "World's highest milk producer",
  },
  {
    slug: "hallikar",
    type: "cow",
    name: "Hallikar",
    origin: "Karnataka, India",
    characteristics: "High butterfat content, brown colored, large expressive eyes",
    avgWeight: "350-450 kg",
    milkYield: "15-20 liters/day",
    lactationYield: "4,000-6,000 kg",
    fatContent: "4.8-5.2%",
    climate: "Adaptable to various climates",
    image: hallikarImage,
    specialty: "Highest quality milk with rich cream",
  },
  {
    slug: "gir",
    type: "cow",
    name: "Gir",
    origin: "India (Gujarat)",
    characteristics: "Drought resistant, distinctive lyre-shaped horns, gentle nature",
    avgWeight: "300-400 kg",
    milkYield: "10-15 liters/day",
    lactationYield: "1,200-3,000 kg",
    fatContent: "4.5-5.0%",
    climate: "Hot and dry",
    image: girImage,
    specialty: "Heat tolerance and disease resistance",
  },
  {
    slug: "sahiwal",
    type: "cow",
    name: "Sahiwal",
    origin: "Pakistan/India",
    characteristics: "Heat tolerant, reddish brown color, well-developed udder",
    avgWeight: "400-500 kg",
    milkYield: "12-16 liters/day",
    lactationYield: "2,000-3,500 kg",
    fatContent: "4.2-4.8%",
    climate: "Hot and humid",
    image: sahiwalImage,
    specialty: "Excellent heat tolerance",
  },
  {
    slug: "malnad-gidda",
    type: "cow",
    name: "Malnad Gidda",
    origin: "Kannada region, India",
    characteristics: "Golden milk, fawn and white color, calm temperament",
    avgWeight: "450-500 kg",
    milkYield: "18-22 liters/day",
    lactationYield: "4,500-6,000 kg",
    fatContent: "4.5-5.0%",
    climate: "Moderate",
    image: malnadImage,
    specialty: "Golden-colored milk rich in beta-carotene",
  },
  {
    slug: "rathi",
    type: "cow",
    name: "Rathi",
    origin: "India (Rajasthan)",
    characteristics: "Large size, brown color, excellent longevity",
    avgWeight: "600-700 kg",
    milkYield: "20-25 liters/day",
    lactationYield: "6,000-8,000 kg",
    fatContent: "4.0-4.2%",
    climate: "Mountainous regions",
    image: rathiImage,
    specialty: "Excellent for cheese making",
  },
  {
    slug: "red-sindhi",
    type: "cow",
    name: "Red Sindhi",
    origin: "Rajasthan (Sindh)",
    characteristics: "Red color, heat resistant, good grazer",
    avgWeight: "300-400 kg",
    milkYield: "8-12 liters/day",
    lactationYield: "1,500-2,500 kg",
    fatContent: "4.5-5.2%",
    climate: "Arid and semi-arid",
    image: redsindhiImage,
    specialty: "Excellent heat and drought tolerance",
  },
  {
    slug: "kankrej",
    type: "cow",
    name: "Kankrej",
    origin: "India (Gujarat/Rajasthan)",
    characteristics: "Silver-grey color, lyre-shaped horns, dual purpose",
    avgWeight: "400-500 kg",
    milkYield: "8-10 liters/day",
    lactationYield: "1,500-2,000 kg",
    fatContent: "4.0-4.5%",
    climate: "Arid regions",
    image: kankrejImage,
    specialty: "Excellent draught power",
  },
];

export const buffaloBreeds: Breed[] = [
  {
    slug: "murrah",
    type: "buffalo",
    name: "Murrah",
    origin: "India (Haryana)",
    characteristics: "Curved horns, high milk yield, black color, well-developed udder",
    avgWeight: "450-650 kg",
    milkYield: "15-20 liters/day",
    lactationYield: "2,000-3,500 kg",
    fatContent: "7-8%",
    climate: "Sub-tropical",
    image: murrahImage,
    specialty: "Highest milk yielding buffalo breed",
  },
  {
    slug: "nili-ravi",
    type: "buffalo",
    name: "Nili-Ravi",
    origin: "Pakistan/India (Punjab)",
    characteristics: "Wall eyes, white markings on face and legs, tightly coiled horns",
    avgWeight: "450-600 kg",
    milkYield: "12-18 liters/day",
    lactationYield: "1,800-2,500 kg",
    fatContent: "6-8%",
    climate: "Semi-arid",
    image: niliRaviImage,
    specialty: "Excellent adaptability",
  },
  {
    slug: "surti",
    type: "buffalo",
    name: "Surti",
    origin: "India (Gujarat)",
    characteristics: "Compact size, sickle-shaped horns, wedge-shaped body",
    avgWeight: "350-450 kg",
    milkYield: "8-12 liters/day",
    lactationYield: "1,000-1,500 kg",
    fatContent: "6-8%",
    climate: "Semi-arid",
    image: surtiImage,
    specialty: "Ideal for small farms",
  },
  {
    slug: "jafarabadi",
    type: "buffalo",
    name: "Jafarabadi",
    origin: "India (Gujarat)",
    characteristics: "Large size, drooping ears, flat curved horns, black color",
    avgWeight: "500-800 kg",
    milkYield: "10-15 liters/day",
    lactationYield: "1,500-2,000 kg",
    fatContent: "7-9%",
    climate: "Coastal regions",
    image: jafarabadiImage,
    specialty: "Heaviest buffalo breed in India",
  },
  {
    slug: "mehsana",
    type: "buffalo",
    name: "Mehsana",
    origin: "India (Gujarat)",
    characteristics: "Cross between Murrah and Surti, black/grey color, white markings",
    avgWeight: "400-550 kg",
    milkYield: "12-16 liters/day",
    lactationYield: "1,500-2,000 kg",
    fatContent: "6-7%",
    climate: "Semi-arid",
    image: mehsanaImage,
    specialty: "Combines best traits of parent breeds",
  },
  {
    slug: "bhadawari",
    type: "buffalo",
    name: "Bhadawari",
    origin: "India (UP/MP)",
    characteristics: "Copper colored, medium size, well-adapted to local conditions",
    avgWeight: "350-450 kg",
    milkYield: "6-10 liters/day",
    lactationYield: "800-1,200 kg",
    fatContent: "8-12%",
    climate: "Sub-tropical",
    image: bhadawariImage,
    specialty: "Very high fat content milk",
  },
  {
    slug: "toda",
    type: "buffalo",
    name: "Toda",
    origin: "India (Tamil Nadu - Nilgiris)",
    characteristics: "Fawn colored, thick hair coat, semi-wild, sturdy build",
    avgWeight: "300-400 kg",
    milkYield: "4-8 liters/day",
    lactationYield: "400-600 kg",
    fatContent: "8%",
    climate: "Hilly regions",
    image: todaImage,
    specialty: "Adapted to hilly terrains",
  },
  {
    slug: "nagpuri",
    type: "buffalo",
    name: "Nagpuri",
    origin: "India (Maharashtra)",
    characteristics: "Dark grey color, sword-like horns, white facial patches",
    avgWeight: "400-500 kg",
    milkYield: "8-12 liters/day",
    lactationYield: "700-1,200 kg",
    fatContent: "7-8%",
    climate: "Semi-arid",
    image: nagpuriImage,
    specialty: "Good draught animal",
  },
];

export const allBreeds: Breed[] = [...cowBreeds, ...buffaloBreeds];

export const getBreed = (slug: string): Breed | undefined =>
  allBreeds.find((b) => b.slug === slug);

export const getRelatedBreeds = (breed: Breed): Breed[] =>
  allBreeds.filter((b) => b.type === breed.type && b.slug !== breed.slug).slice(0, 3);
