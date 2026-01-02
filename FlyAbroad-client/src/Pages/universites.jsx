import React, { useMemo, useState } from "react";
import Universities from "../Components/Universities/Universities.json";
import { 
  Search, 
  MapPin, 
  Shield, 
  DollarSign, 
  Filter, 
  GraduationCap, 
  Star, 
  Info, 
  GraduationCap as School,
  Stethoscope,
  Cpu,
  Palette,
  Briefcase,
  Scale,
  Sprout,
  ChevronRight,
  MoreHorizontal
} from "lucide-react";


const UNIVERSITY_DATA = [
  {
    id: "msu",
    name: "Lomonosov Moscow State University",
    city: "Moscow",
    region: "Moscow",
    country: "Russia",
    categories: ["engineering", "it", "arts", "business"],
    tags: ["top", "research"],
    image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "high",
    safetyLevel: "high",
  },
  {
    id: "abakan-state-institute-of-education",
    name: "Abakan State Institute of Education",
    city: "Abakan",
    region: "Republic of Khakassia",
    country: "Russia",
    categories: ["arts"],
    tags: ["safest"],
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "low",
    safetyLevel: "high"
  },
  {
    id: "abakan-state-university-of-pedagogy",
    name: "Abakan State University of Pedagogy",
    city: "Abakan",
    region: "Republic of Khakassia",
    country: "Russia",
    categories: ["arts"],
    tags: ["safest"],
    image: "https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "low",
    safetyLevel: "high"
  },
  {
    id: "khakassian-state-university",
    name: "Khakassian State University",
    city: "Abakan",
    region: "Republic of Khakassia",
    country: "Russia",
    categories: ["arts", "business"],
    tags: ["cheapest", "safest"],
    image: "https://images.pexels.com/photos/207682/pexels-photo-207682.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "low",
    safetyLevel: "high"
  },
  {
    id: "angarsk-state-technical-academy",
    name: "Angarsk State Technical Academy",
    city: "Angarsk",
    region: "Irkutsk Oblast",
    country: "Russia",
    categories: ["engineering", "it"],
    tags: ["cheapest"],
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "low",
    safetyLevel: "medium"
  },
  {
    id: "arkhangelsk-state-technical-university",
    name: "Arkhangelsk State Technical University",
    city: "Arkhangelsk",
    region: "Arkhangelsk Oblast",
    country: "Russia",
    categories: ["engineering"],
    tags: [],
    image: "https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "medium",
    safetyLevel: "medium"
  },
  {
    id: "northern-arctic-federal-university",
    name: "Northern (Arctic) Federal University",
    city: "Arkhangelsk",
    region: "Arkhangelsk Oblast",
    country: "Russia",
    categories: ["engineering", "it", "arts", "business"],
    tags: ["top", "research"],
    image: "https://images.pexels.com/photos/3803855/pexels-photo-3803855.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "medium",
    safetyLevel: "medium"
  },
  {
    id: "northern-state-medical-university",
    name: "Northern State Medical University",
    city: "Arkhangelsk",
    region: "Arkhangelsk Oblast",
    country: "Russia",
    categories: ["medical"],
    tags: [],
    image: "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "medium",
    safetyLevel: "medium"
  },
  {
    id: "armavir-state-pedagogical-university",
    name: "Armavir State Pedagogical University",
    city: "Armavir",
    region: "Krasnodar Krai",
    country: "Russia",
    categories: ["arts"],
    tags: ["cheapest"],
    image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "low",
    safetyLevel: "medium"
  },
  {
    id: "astrakhan-state-technical-university",
    name: "Astrakhan State Technical University",
    city: "Astrakhan",
    region: "Astrakhan Oblast",
    country: "Russia",
    categories: ["engineering"],
    tags: ["cheapest"],
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "low",
    safetyLevel: "medium"
  },
  {
    id: "astrakhan-state-university",
    name: "Astrakhan State University",
    city: "Astrakhan",
    region: "Astrakhan Oblast",
    country: "Russia",
    categories: ["arts", "business"],
    tags: ["cheapest"],
    image: "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "low",
    safetyLevel: "medium"
  },
  {
    id: "astrakhan-state-medical-academy",
    name: "Astrakhan State Medical Academy",
    city: "Astrakhan",
    region: "Astrakhan Oblast",
    country: "Russia",
    categories: ["medical"],
    tags: ["cheapest"],
    image: "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "low",
    safetyLevel: "medium"
  },
  {
    id: "altai-state-technical-university",
    name: "Altai State Technical University",
    city: "Barnaul",
    region: "Altai Krai",
    country: "Russia",
    categories: ["engineering", "it"],
    tags: ["cheapest"],
    image: "https://images.pexels.com/photos/159539/library-la-trobe-study-students-159539.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "low",
    safetyLevel: "medium"
  },
  {
    id: "belgorod-state-technological-university",
    name: "Belgorod State Technological University",
    city: "Belgorod",
    region: "Belgorod Oblast",
    country: "Russia",
    categories: ["engineering"],
    tags: [],
    image: "https://images.pexels.com/photos/159775/library-book-bookshelf-read-159775.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "medium",
    safetyLevel: "medium"
  },
  {
    id: "sechenov-med-moscow",
    name: "Sechenov First Moscow State Medical University",
    city: "Moscow",
    region: "Moscow",
    country: "Russia",
    categories: ["medical"],
    tags: ["top", "research"],
    image: "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    costLevel: "high",
    safetyLevel: "high"
  },
  {
    id: "itmo-uni-spb",
    name: "ITMO University",
    city: "Saint Petersburg",
    region: "Saint Petersburg",
    country: "Russia",
    categories: ["it", "engineering"],
    tags: ["top", "research"],
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    costLevel: "high",
    safetyLevel: "high"
  },
  {
    id: "spb-state-university",
    name: "Saint Petersburg State University",
    city: "Saint Petersburg",
    region: "Saint Petersburg",
    country: "Russia",
    categories: ["engineering", "it", "arts", "business"],
    tags: ["top", "research"],
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    costLevel: "high",
    safetyLevel: "high"
  },
  
  {
    id: "abakan-state-institute-of-education",
    name: "Abakan State Institute of Education",
    city: "Abakan",
    region: "Republic of Khakassia",
    country: "Russia",
    categories: ["arts"],
    tags: ["safest"],
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800",
    costLevel: "low",
    safetyLevel: "high"
  },
  {
    "id": "abakan-state-university-of-pedagogy",
    "name": "Abakan State University of Pedagogy",
    "city": "Abakan",
    "region": "Republic of Khakassia",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "high"
  },
  {
    "id": "khakassian-state-university",
    "name": "Khakassian State University",
    "city": "Abakan",
    "region": "Republic of Khakassia",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/207682/pexels-photo-207682.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "high"
  },
  {
    "id": "angarsk-state-technical-academy",
    "name": "Angarsk State Technical Academy",
    "city": "Angarsk",
    "region": "Irkutsk Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "arkhangelsk-state-technical-university",
    "name": "Arkhangelsk State Technical University",
    "city": "Arkhangelsk",
    "region": "Arkhangelsk Oblast",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "northern-arctic-federal-university",
    "name": "Northern (Arctic) Federal University",
    "city": "Arkhangelsk",
    "region": "Arkhangelsk Oblast",
    "country": "Russia",
    "categories": ["engineering", "it", "arts", "business"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/3803855/pexels-photo-3803855.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "northern-state-medical-university",
    "name": "Northern State Medical University",
    "city": "Arkhangelsk",
    "region": "Arkhangelsk Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": [],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "armavir-state-pedagogical-university",
    "name": "Armavir State Pedagogical University",
    "city": "Armavir",
    "region": "Krasnodar Krai",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "astrakhan-state-technical-university",
    "name": "Astrakhan State Technical University",
    "city": "Astrakhan",
    "region": "Astrakhan Oblast",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "astrakhan-state-university",
    "name": "Astrakhan State University",
    "city": "Astrakhan",
    "region": "Astrakhan Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "astrakhan-state-medical-academy",
    "name": "Astrakhan State Medical Academy",
    "city": "Astrakhan",
    "region": "Astrakhan Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "balakovo-institute-of-engineering-and-technology",
    "name": "Balakovo Institute of Engineering and Technology",
    "city": "Balakovo",
    "region": "Saratov Oblast",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "altai-state-technical-university",
    "name": "Altai State Technical University",
    "city": "Barnaul",
    "region": "Altai Krai",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/159539/library-la-trobe-study-students-159539.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "altai-state-university",
    "name": "Altai State University",
    "city": "Barnaul",
    "region": "Altai Krai",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/207675/pexels-photo-207675.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "altai-state-medical-university",
    "name": "Altai State Medical University",
    "city": "Barnaul",
    "region": "Altai Krai",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "altai-state-pedagogical-academy",
    "name": "Altai State Pedagogical Academy",
    "city": "Barnaul",
    "region": "Altai Krai",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "barnaul-law-institute",
    "name": "Barnaul Law Institute",
    "city": "Barnaul",
    "region": "Altai Krai",
    "country": "Russia",
    "categories": ["law"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/4427811/pexels-photo-4427811.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "belgorod-state-technological-university",
    "name": "Belgorod State Technological University",
    "city": "Belgorod",
    "region": "Belgorod Oblast",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/159775/library-book-bookshelf-read-159775.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "belgorod-state-university",
    "name": "Belgorod State University",
    "city": "Belgorod",
    "region": "Belgorod Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1309581/pexels-photo-1309581.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "belgorod-state-agricultural-academy",
    "name": "Belgorod State Agricultural Academy",
    "city": "Belgorod",
    "region": "Belgorod Oblast",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "biysk-technological-institute",
    "name": "Biysk Technological Institute",
    "city": "Biysk",
    "region": "Altai Krai",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/256540/pexels-photo-256540.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "high"
  },
  {
    "id": "amur-state-university",
    "name": "Amur State University",
    "city": "Blagoveshchensk",
    "region": "Amur Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/207681/pexels-photo-207681.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "amur-state-medical-academy",
    "name": "Amur State Medical Academy",
    "city": "Blagoveshchensk",
    "region": "Amur Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "amur-state-pedagogical-university",
    "name": "Amur State Pedagogical University",
    "city": "Blagoveshchensk",
    "region": "Amur Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "bryansk-state-technical-university",
    "name": "Bryansk State Technical University",
    "city": "Bryansk",
    "region": "Bryansk Oblast",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "bryansk-state-university",
    "name": "Bryansk State University",
    "city": "Bryansk",
    "region": "Bryansk Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "bryansk-state-academy-of-engineering-and-technology",
    "name": "Bryansk State Academy of Engineering and Technology",
    "city": "Bryansk",
    "region": "Bryansk Oblast",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/159775/library-book-bookshelf-read-159775.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "chuvash-state-university",
    "name": "Chuvash State University",
    "city": "Cheboksary",
    "region": "Chuvash Republic",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/256467/pexels-photo-256467.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "chuvash-state-pedagogical-university",
    "name": "Chuvash State Pedagogical University",
    "city": "Cheboksary",
    "region": "Chuvash Republic",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "chuvash-state-agricultural-academy",
    "name": "Chuvash State Agricultural Academy",
    "city": "Cheboksary",
    "region": "Chuvash Republic",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "south-ural-state-university",
    "name": "South Ural State University",
    "city": "Chelyabinsk",
    "region": "Chelyabinsk Oblast",
    "country": "Russia",
    "categories": ["engineering", "it", "business"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "chelyabinsk-state-university",
    "name": "Chelyabinsk State University",
    "city": "Chelyabinsk",
    "region": "Chelyabinsk Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1309581/pexels-photo-1309581.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "chelyabinsk-state-pedagogical-university",
    "name": "Chelyabinsk State Pedagogical University",
    "city": "Chelyabinsk",
    "region": "Chelyabinsk Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "chelyabinsk-state-medical-academy",
    "name": "Chelyabinsk State Medical Academy",
    "city": "Chelyabinsk",
    "region": "Chelyabinsk Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": [],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "chelyabinsk-state-institute-of-culture",
    "name": "Chelyabinsk State Institute of Culture",
    "city": "Chelyabinsk",
    "region": "Chelyabinsk Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "cherepovets-state-university",
    "name": "Cherepovets State University",
    "city": "Cherepovets",
    "region": "Vologda Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/256362/pexels-photo-256362.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "high"
  },
  {
    "id": "karachay-cherkess-state-university",
    "name": "Karachay-Cherkess State University",
    "city": "Cherkessk",
    "region": "Karachay-Cherkess Republic",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/256495/pexels-photo-256495.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "transbaikal-state-university",
    "name": "Transbaikal State University",
    "city": "Chita",
    "region": "Zabaykalsky Krai",
    "country": "Russia",
    "categories": ["engineering", "arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "chita-state-medical-academy",
    "name": "Chita State Medical Academy",
    "city": "Chita",
    "region": "Zabaykalsky Krai",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },

  {
    "id": "derbent-state-university",
    "name": "Derbent State University",
    "city": "Derbent",
    "region": "Republic of Dagestan",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "high"
  },
  {
    "id": "dimitrovgrad-engineering-and-technology-institute",
    "name": "Dimitrovgrad Engineering and Technology Institute",
    "city": "Dimitrovgrad",
    "region": "Ulyanovsk Oblast",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "moscow-institute-of-physics-and-technology-dolgoprudny",
    "name": "Moscow Institute of Physics and Technology (MIPT)",
    "city": "Dolgoprudny",
    "region": "Moscow Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/256302/pexels-photo-256302.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "high",
    "safetyLevel": "medium"
  },
  {
    "id": "university-of-dubna",
    "name": "University of Dubna",
    "city": "Dubna",
    "region": "Moscow Oblast",
    "country": "Russia",
    "categories": ["engineering", "it", "arts"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "joint-institute-for-nuclear-research-jinr-educational-programs",
    "name": "Joint Institute for Nuclear Research (JINR) — Educational Programs",
    "city": "Dubna",
    "region": "Moscow Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "ural-federal-university",
    "name": "Ural Federal University (UrFU)",
    "city": "Ekaterinburg",
    "region": "Sverdlovsk Oblast",
    "country": "Russia",
    "categories": ["engineering", "it", "arts", "business"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/373488/pexels-photo-373488.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "ural-state-university-of-economics",
    "name": "Ural State University of Economics",
    "city": "Ekaterinburg",
    "region": "Sverdlovsk Oblast",
    "country": "Russia",
    "categories": ["business"],
    "tags": [],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "ural-state-medical-university",
    "name": "Ural State Medical University",
    "city": "Ekaterinburg",
    "region": "Sverdlovsk Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": [],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "ural-state-pedagogical-university",
    "name": "Ural State Pedagogical University",
    "city": "Ekaterinburg",
    "region": "Sverdlovsk Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "ural-state-mining-university",
    "name": "Ural State Mining University",
    "city": "Ekaterinburg",
    "region": "Sverdlovsk Oblast",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/159775/library-book-bookshelf-read-159775.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "ural-state-law-university",
    "name": "Ural State Law University",
    "city": "Ekaterinburg",
    "region": "Sverdlovsk Oblast",
    "country": "Russia",
    "categories": ["law"],
    "tags": [],
    "image": "https://images.pexels.com/photos/4427811/pexels-photo-4427811.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "ural-state-forestry-engineering-university",
    "name": "Ural State Forestry Engineering University",
    "city": "Ekaterinburg",
    "region": "Sverdlovsk Oblast",
    "country": "Russia",
    "categories": ["engineering", "agriculture"],
    "tags": [],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "ural-state-university-of-railway-transport",
    "name": "Ural State University of Railway Transport",
    "city": "Ekaterinburg",
    "region": "Sverdlovsk Oblast",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1178689/pexels-photo-1178689.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "ural-state-conservatory",
    "name": "Ural State Conservatory",
    "city": "Ekaterinburg",
    "region": "Sverdlovsk Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/256540/pexels-photo-256540.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "ural-state-academy-of-architecture-and-arts",
    "name": "Ural State Academy of Architecture and Arts",
    "city": "Ekaterinburg",
    "region": "Sverdlovsk Oblast",
    "country": "Russia",
    "categories": ["arts", "engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "kalmyk-state-university",
    "name": "Kalmyk State University",
    "city": "Elista",
    "region": "Republic of Kalmykia",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "high"
  },
  {
    "id": "elista-state-university-of-humanities",
    "name": "Elista State University of Humanities",
    "city": "Elista",
    "region": "Republic of Kalmykia",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "high"
  },
  {
    "id": "feodosia-polytechnic-institute",
    "name": "Feodosia Polytechnic Institute",
    "city": "Feodosia",
    "region": "Crimea",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/256540/pexels-photo-256540.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "fryazino-branch-of-miet",
    "name": "Fryazino Branch of Moscow Institute of Electronic Technology",
    "city": "Fryazino",
    "region": "Moscow Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "gorno-altai-state-university",
    "name": "Gorno-Altai State University",
    "city": "Gorno-Altaysk",
    "region": "Altai Republic",
    "country": "Russia",
    "categories": ["arts", "agriculture"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/256495/pexels-photo-256495.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "high"
  },
  {
    "id": "chechen-state-university",
    "name": "Chechen State University",
    "city": "Grozny",
    "region": "Chechen Republic",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": [],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "low"
  },
  {
    "id": "grozny-state-oil-technical-university",
    "name": "Grozny State Oil Technical University",
    "city": "Grozny",
    "region": "Chechen Republic",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/256540/pexels-photo-256540.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "low"
  },
  {
    "id": "chechen-state-pedagogical-university",
    "name": "Chechen State Pedagogical University",
    "city": "Grozny",
    "region": "Chechen Republic",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "low",
    "safetyLevel": "low"
  },
  {
    "id": "gatchina-institute-of-economics-and-law",
    "name": "Gatchina Institute of Economics and Law",
    "city": "Gatchina",
    "region": "Leningrad Oblast",
    "country": "Russia",
    "categories": ["business", "law"],
    "tags": [],
    "image": "https://images.pexels.com/photos/4427811/pexels-photo-4427811.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "pacific-national-university",
    "name": "Pacific National University",
    "city": "Khabarovsk",
    "region": "Khabarovsk Krai",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "far-eastern-state-transport-university",
    "name": "Far Eastern State Transport University",
    "city": "Khabarovsk",
    "region": "Khabarovsk Krai",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1178689/pexels-photo-1178689.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "far-eastern-state-medical-university",
    "name": "Far Eastern State Medical University",
    "city": "Khabarovsk",
    "region": "Khabarovsk Krai",
    "country": "Russia",
    "categories": ["medical"],
    "tags": [],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "khabarovsk-state-institute-of-culture",
    "name": "Khabarovsk State Institute of Culture",
    "city": "Khabarovsk",
    "region": "Khabarovsk Krai",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "khabarovsk-state-academy-of-economics-and-law",
    "name": "Khabarovsk State Academy of Economics and Law",
    "city": "Khabarovsk",
    "region": "Khabarovsk Krai",
    "country": "Russia",
    "categories": ["business", "law"],
    "tags": [],
    "image": "https://images.pexels.com/photos/4427811/pexels-photo-4427811.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "yugra-state-university",
    "name": "Yugra State University",
    "city": "Khanty-Mansiysk",
    "region": "Khanty-Mansi Autonomous Okrug",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/159539/library-la-trobe-study-students-159539.jpeg?auto=compress&cs=tinysrgb&w=800",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "ivanovo-state-university",
    "name": "Ivanovo State University",
    "city": "Ivanovo",
    "region": "Ivanovo Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    "costLevel": "low",
    "safetyLevel": "high"
  },
  {
    "id": "ivanovo-state-power-engineering-university",
    "name": "Ivanovo State Power Engineering University",
    "city": "Ivanovo",
    "region": "Ivanovo Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "ivanovo-state-university-of-chemistry-and-technology",
    "name": "Ivanovo State University of Chemistry and Technology",
    "city": "Ivanovo",
    "region": "Ivanovo Oblast",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/256540/pexels-photo-256540.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "ivanovo-state-medical-academy",
    "name": "Ivanovo State Medical Academy",
    "city": "Ivanovo",
    "region": "Ivanovo Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "low",
    "safetyLevel": "high"
  },
  {
    "id": "ivanovo-state-textile-academy",
    "name": "Ivanovo State Textile Academy",
    "city": "Ivanovo",
    "region": "Ivanovo Oblast",
    "country": "Russia",
    "categories": ["arts", "engineering"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },

  {
    "id": "udmurt-state-university",
    "name": "Udmurt State University",
    "city": "Izhevsk",
    "region": "Udmurt Republic",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "izhevsk-state-technical-university",
    "name": "Izhevsk State Technical University",
    "city": "Izhevsk",
    "region": "Udmurt Republic",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "izhevsk-state-agricultural-academy",
    "name": "Izhevsk State Agricultural Academy",
    "city": "Izhevsk",
    "region": "Udmurt Republic",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "izhevsk-state-medical-academy",
    "name": "Izhevsk State Medical Academy",
    "city": "Izhevsk",
    "region": "Udmurt Republic",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },




  
  {
    "id": "immanuel-kant-baltic-federal-university",
    "name": "Immanuel Kant Baltic Federal University",
    "city": "Kaliningrad",
    "region": "Kaliningrad Oblast",
    "country": "Russia",
    "categories": ["arts", "business", "engineering", "it"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "kaliningrad-state-technical-university",
    "name": "Kaliningrad State Technical University",
    "city": "Kaliningrad",
    "region": "Kaliningrad Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "kaluga-state-university",
    "name": "Kaluga State University",
    "city": "Kaluga",
    "region": "Kaluga Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "kaluga-branch-bauman-mstu",
    "name": "Kaluga Branch of Bauman Moscow State Technical University",
    "city": "Kaluga",
    "region": "Kaluga Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/256540/pexels-photo-256540.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "kamyshin-technological-institute",
    "name": "Kamyshin Technological Institute",
    "city": "Kamyshin",
    "region": "Volgograd Oblast",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "kazan-federal-university",
    "name": "Kazan Federal University",
    "city": "Kazan",
    "region": "Republic of Tatarstan",
    "country": "Russia",
    "categories": ["engineering", "it", "arts", "business"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "kazan-national-research-technical-university",
    "name": "Kazan National Research Technical University",
    "city": "Kazan",
    "region": "Republic of Tatarstan",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "kazan-state-medical-university",
    "name": "Kazan State Medical University",
    "city": "Kazan",
    "region": "Republic of Tatarstan",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "low",
    "safetyLevel": "high"
  },
  {
    "id": "kazan-state-power-engineering-university",
    "name": "Kazan State Power Engineering University",
    "city": "Kazan",
    "region": "Republic of Tatarstan",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/256540/pexels-photo-256540.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "kazan-state-university-of-architecture-and-engineering",
    "name": "Kazan State University of Architecture and Engineering",
    "city": "Kazan",
    "region": "Republic of Tatarstan",
    "country": "Russia",
    "categories": ["engineering", "arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "kazan-state-agrarian-university",
    "name": "Kazan State Agrarian University",
    "city": "Kazan",
    "region": "Republic of Tatarstan",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "low",
    "safetyLevel": "high"
  },
  {
    "id": "kazan-state-conservatory",
    "name": "Kazan State Conservatory",
    "city": "Kazan",
    "region": "Republic of Tatarstan",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["top"],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "kazan-state-institute-of-culture",
    "name": "Kazan State Institute of Culture",
    "city": "Kazan",
    "region": "Republic of Tatarstan",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/207681/pexels-photo-207681.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "kemerovo-state-university",
    "name": "Kemerovo State University",
    "city": "Kemerovo",
    "region": "Kemerovo Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/1309581/pexels-photo-1309581.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "kemerovo-state-medical-university",
    "name": "Kemerovo State Medical University",
    "city": "Kemerovo",
    "region": "Kemerovo Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "kemerovo-institute-of-food-industry",
    "name": "Kemerovo Institute of Food Industry",
    "city": "Kemerovo",
    "region": "Kemerovo Oblast",
    "country": "Russia",
    "categories": ["engineering", "agriculture"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },





  {
    "id": "pacific-national-university",
    "name": "Pacific National University",
    "city": "Khabarovsk",
    "region": "Khabarovsk Krai",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "far-eastern-state-transport-university",
    "name": "Far Eastern State Transport University",
    "city": "Khabarovsk",
    "region": "Khabarovsk Krai",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1178689/pexels-photo-1178689.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "far-eastern-state-medical-university",
    "name": "Far Eastern State Medical University",
    "city": "Khabarovsk",
    "region": "Khabarovsk Krai",
    "country": "Russia",
    "categories": ["medical"],
    "tags": [],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "khabarovsk-state-institute-of-culture",
    "name": "Khabarovsk State Institute of Culture",
    "city": "Khabarovsk",
    "region": "Khabarovsk Krai",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "khabarovsk-state-academy-of-economics-and-law",
    "name": "Khabarovsk State Academy of Economics and Law",
    "city": "Khabarovsk",
    "region": "Khabarovsk Krai",
    "country": "Russia",
    "categories": ["business", "law"],
    "tags": [],
    "image": "https://images.pexels.com/photos/4427811/pexels-photo-4427811.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "yugra-state-university",
    "name": "Yugra State University",
    "city": "Khanty-Mansiysk",
    "region": "Khanty-Mansi Autonomous Okrug",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/159539/library-la-trobe-study-students-159539.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "vyatka-state-university",
    "name": "Vyatka State University",
    "city": "Kirov",
    "region": "Kirov Oblast",
    "country": "Russia",
    "categories": ["arts", "business", "it"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "vyatka-state-agricultural-academy",
    "name": "Vyatka State Agricultural Academy",
    "city": "Kirov",
    "region": "Kirov Oblast",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "kirov-state-medical-academy",
    "name": "Kirov State Medical Academy",
    "city": "Kirov",
    "region": "Kirov Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "kislovodsk-institute-of-economics-and-law",
    "name": "Kislovodsk Institute of Economics and Law",
    "city": "Kislovodsk",
    "region": "Stavropol Krai",
    "country": "Russia",
    "categories": ["business", "law"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/4427811/pexels-photo-4427811.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "kostroma-state-university",
    "name": "Kostroma State University",
    "city": "Kostroma",
    "region": "Kostroma Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "low",
    "safetyLevel": "high"
  },
  {
    "id": "kostroma-state-agricultural-academy",
    "name": "Kostroma State Agricultural Academy",
    "city": "Kostroma",
    "region": "Kostroma Oblast",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "low",
    "safetyLevel": "high"
  },
  {
    "id": "kostroma-state-technological-university",
    "name": "Kostroma State Technological University",
    "city": "Kostroma",
    "region": "Kostroma Oblast",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "low",
    "safetyLevel": "high"
  },

  {
    "id": "kuban-state-university",
    "name": "Kuban State University",
    "city": "Krasnodar",
    "region": "Krasnodar Krai",
    "country": "Russia",
    "categories": ["arts", "business", "it"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/1309581/pexels-photo-1309581.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "kuban-state-technological-university",
    "name": "Kuban State Technological University",
    "city": "Krasnodar",
    "region": "Krasnodar Krai",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "kuban-state-agrarian-university",
    "name": "Kuban State Agrarian University",
    "city": "Krasnodar",
    "region": "Krasnodar Krai",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "low",
    "safetyLevel": "high"
  },
  {
    "id": "kuban-state-medical-university",
    "name": "Kuban State Medical University",
    "city": "Krasnodar",
    "region": "Krasnodar Krai",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "krasnodar-state-institute-of-culture",
    "name": "Krasnodar State Institute of Culture",
    "city": "Krasnodar",
    "region": "Krasnodar Krai",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "siberian-federal-university",
    "name": "Siberian Federal University",
    "city": "Krasnoyarsk",
    "region": "Krasnoyarsk Krai",
    "country": "Russia",
    "categories": ["engineering", "it", "arts", "business"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "krasnoyarsk-state-medical-university",
    "name": "Krasnoyarsk State Medical University",
    "city": "Krasnoyarsk",
    "region": "Krasnoyarsk Krai",
    "country": "Russia",
    "categories": ["medical"],
    "tags": [],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "krasnoyarsk-state-pedagogical-university",
    "name": "Krasnoyarsk State Pedagogical University",
    "city": "Krasnoyarsk",
    "region": "Krasnoyarsk Krai",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "reshetnev-siberian-state-university-of-science-and-technology",
    "name": "Reshetnev Siberian State University of Science and Technology",
    "city": "Krasnoyarsk",
    "region": "Krasnoyarsk Krai",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },

  {
    "id": "kurgan-state-university",
    "name": "Kurgan State University",
    "city": "Kurgan",
    "region": "Kurgan Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "kurgan-state-agricultural-academy",
    "name": "Kurgan State Agricultural Academy",
    "city": "Kurgan",
    "region": "Kurgan Oblast",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "kurgan-state-medical-academy",
    "name": "Kurgan State Medical Academy",
    "city": "Kurgan",
    "region": "Kurgan Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },

  {
    "id": "kursk-state-university",
    "name": "Kursk State University",
    "city": "Kursk",
    "region": "Kursk Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/1309581/pexels-photo-1309581.jpeg",
    "costLevel": "low",
    "safetyLevel": "high"
  },
  {
    "id": "kursk-state-medical-university",
    "name": "Kursk State Medical University",
    "city": "Kursk",
    "region": "Kursk Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "low",
    "safetyLevel": "high"
  },
  {
    "id": "kursk-state-agricultural-academy",
    "name": "Kursk State Agricultural Academy",
    "city": "Kursk",
    "region": "Kursk Oblast",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "low",
    "safetyLevel": "high"
  },
  {
    "id": "lipetsk-state-technical-university",
    "name": "Lipetsk State Technical University",
    "city": "Lipetsk",
    "region": "Lipetsk Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "lipetsk-state-pedagogical-university",
    "name": "Lipetsk State Pedagogical University",
    "city": "Lipetsk",
    "region": "Lipetsk Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },

  {
    "id": "lobnya-institute-of-economics-and-law",
    "name": "Lobnya Institute of Economics and Law",
    "city": "Lobnya",
    "region": "Moscow Oblast",
    "country": "Russia",
    "categories": ["business", "law"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/4427811/pexels-photo-4427811.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "lysva-polytechnic-institute",
    "name": "Lysva Polytechnic Institute",
    "city": "Lysva",
    "region": "Perm Krai",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/256540/pexels-photo-256540.jpeg",
    "costLevel": "low",
    "safetyLevel": "high"
  }, 


  {
    "id": "north-eastern-state-university",
    "name": "North-Eastern State University",
    "city": "Magadan",
    "region": "Magadan Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "magnitogorsk-state-technical-university",
    "name": "Magnitogorsk State Technical University",
    "city": "Magnitogorsk",
    "region": "Chelyabinsk Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "magnitogorsk-state-conservatory",
    "name": "Magnitogorsk State Conservatory",
    "city": "Magnitogorsk",
    "region": "Chelyabinsk Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "dagestan-state-university",
    "name": "Dagestan State University",
    "city": "Makhachkala",
    "region": "Republic of Dagestan",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": [],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    "costLevel": "low",
    "safetyLevel": "low"
  },
  {
    "id": "dagestan-state-technical-university",
    "name": "Dagestan State Technical University",
    "city": "Makhachkala",
    "region": "Republic of Dagestan",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "low",
    "safetyLevel": "low"
  },
  {
    "id": "dagestan-state-medical-university",
    "name": "Dagestan State Medical University",
    "city": "Makhachkala",
    "region": "Republic of Dagestan",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "low",
    "safetyLevel": "low"
  },
  {
    "id": "dagestan-state-pedagogical-university",
    "name": "Dagestan State Pedagogical University",
    "city": "Makhachkala",
    "region": "Republic of Dagestan",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "low",
    "safetyLevel": "low"
  },
  {
    "id": "dagestan-state-agricultural-university",
    "name": "Dagestan State Agricultural University",
    "city": "Makhachkala",
    "region": "Republic of Dagestan",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "low",
    "safetyLevel": "low"
  },
  {
    "id": "miass-branch-south-ural-state-university",
    "name": "Miass Branch of South Ural State University",
    "city": "Miass",
    "region": "Chelyabinsk Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "north-caucasus-institute-of-humanities-and-technology",
    "name": "North Caucasus Institute of Humanities and Technology",
    "city": "Mineralnye Vody",
    "region": "Stavropol Krai",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },



  {
    "id": "lomonosov-moscow-state-university",
    "name": "Lomonosov Moscow State University (MSU)",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["engineering", "it", "arts", "business"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "higher-school-of-economics",
    "name": "National Research University Higher School of Economics (HSE)",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["business", "it", "arts"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/1309581/pexels-photo-1309581.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-institute-of-physics-and-technology",
    "name": "Moscow Institute of Physics and Technology (MIPT)",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "national-research-nuclear-university-mephi",
    "name": "National Research Nuclear University MEPhI",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/256540/pexels-photo-256540.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "bauman-moscow-state-technical-university",
    "name": "Bauman Moscow State Technical University",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "mgimo",
    "name": "Moscow State Institute of International Relations (MGIMO)",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["business", "law", "arts"],
    "tags": ["top"],
    "image": "https://images.pexels.com/photos/4427811/pexels-photo-4427811.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-aviation-institute",
    "name": "Moscow Aviation Institute (MAI)",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1178689/pexels-photo-1178689.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-power-engineering-institute",
    "name": "Moscow Power Engineering Institute (MPEI)",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-state-technical-university-of-civil-aviation",
    "name": "Moscow State Technical University of Civil Aviation",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-state-university-of-railway-engineering",
    "name": "Moscow State University of Railway Engineering",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1178689/pexels-photo-1178689.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },




  
  {
    "id": "sechenov-first-moscow-state-medical-university",
    "name": "Sechenov First Moscow State Medical University",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "pirogov-russian-national-research-medical-university",
    "name": "Pirogov Russian National Research Medical University",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-state-university-of-medicine-and-dentistry",
    "name": "Moscow State University of Medicine and Dentistry",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["medical"],
    "tags": [],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "financial-university-under-government-of-russia",
    "name": "Financial University under the Government of Russia",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["business", "law"],
    "tags": ["top"],
    "image": "https://images.pexels.com/photos/1309581/pexels-photo-1309581.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "plekhanov-russian-university-of-economics",
    "name": "Plekhanov Russian University of Economics",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["business"],
    "tags": ["top"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "russian-state-university-of-trade-and-economics",
    "name": "Russian State University of Trade and Economics",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["business"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1309581/pexels-photo-1309581.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "russian-state-university-of-justice",
    "name": "Russian State University of Justice",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["law"],
    "tags": [],
    "image": "https://images.pexels.com/photos/4427811/pexels-photo-4427811.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "russian-customs-academy",
    "name": "Russian Customs Academy",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["law", "business"],
    "tags": [],
    "image": "https://images.pexels.com/photos/4427811/pexels-photo-4427811.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "moscow-state-linguistic-university",
    "name": "Moscow State Linguistic University",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["top"],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-state-pedagogical-university",
    "name": "Moscow State Pedagogical University",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-state-institute-of-culture",
    "name": "Moscow State Institute of Culture",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-state-university-of-culture-and-arts",
    "name": "Moscow State University of Culture and Arts",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "russian-state-university-for-the-humanities",
    "name": "Russian State University for the Humanities",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "gnessin-russian-academy-of-music",
    "name": "Gnessin Russian Academy of Music",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["top"],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "gerasimov-institute-of-cinematography-vgik",
    "name": "Gerasimov Institute of Cinematography (VGIK)",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["top"],
    "image": "https://images.pexels.com/photos/207681/pexels-photo-207681.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "stroganov-moscow-state-academy-of-arts-and-industry",
    "name": "Stroganov Moscow State Academy of Arts and Industry",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["arts", "engineering"],
    "tags": ["top"],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },






  {
    "id": "moscow-state-technological-university-stankin",
    "name": "Moscow State Technological University (STANKIN)",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-state-university-of-geodesy-and-cartography",
    "name": "Moscow State University of Geodesy and Cartography",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-state-mining-university",
    "name": "Moscow State Mining University",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/256540/pexels-photo-256540.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-state-university-of-environmental-engineering",
    "name": "Moscow State University of Environmental Engineering",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["engineering", "agriculture"],
    "tags": [],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-state-university-of-instrument-engineering-and-computer-science",
    "name": "Moscow State University of Instrument Engineering and Computer Science",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "ranepa",
    "name": "Russian Presidential Academy of National Economy and Public Administration (RANEPA)",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["business", "law", "arts"],
    "tags": ["top"],
    "image": "https://images.pexels.com/photos/1309581/pexels-photo-1309581.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "diplomatic-academy-mfa",
    "name": "Diplomatic Academy of the Ministry of Foreign Affairs",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["law", "arts", "business"],
    "tags": ["top"],
    "image": "https://images.pexels.com/photos/4427811/pexels-photo-4427811.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "fsb-academy",
    "name": "Academy of the Federal Security Service (FSB Academy)",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["law"],
    "tags": ["top"],
    "image": "https://images.pexels.com/photos/4427811/pexels-photo-4427811.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "academy-of-the-ministry-of-internal-affairs",
    "name": "Academy of the Ministry of Internal Affairs",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["law"],
    "tags": [],
    "image": "https://images.pexels.com/photos/4427811/pexels-photo-4427811.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "military-university-ministry-of-defense",
    "name": "Military University of the Ministry of Defense",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["law", "arts"],
    "tags": ["top"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },

  {
    "id": "moscow-city-university",
    "name": "Moscow City University",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": [],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-polytechnic-university",
    "name": "Moscow Polytechnic University",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-state-university-of-printing-arts",
    "name": "Moscow State University of Printing Arts",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["arts", "engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-state-university-of-design-and-technology",
    "name": "Moscow State University of Design and Technology",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["arts", "engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-state-university-of-economics-statistics-and-informatics",
    "name": "Moscow State University of Economics, Statistics and Informatics",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["business", "it"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1309581/pexels-photo-1309581.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-state-university-of-management",
    "name": "Moscow State University of Management",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["business"],
    "tags": [],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-state-university-of-psychology-and-education",
    "name": "Moscow State University of Psychology and Education",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-state-forest-university",
    "name": "Moscow State Forest University",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["agriculture", "engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "moscow-state-university-of-food-production",
    "name": "Moscow State University of Food Production",
    "city": "Moscow",
    "region": "Moscow",
    "country": "Russia",
    "categories": ["agriculture", "engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },







  {
    "id": "kabardino-balkarian-state-university",
    "name": "Kabardino-Balkarian State University",
    "city": "Nalchik",
    "region": "Kabardino-Balkarian Republic",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "kabardino-balkarian-state-agricultural-university",
    "name": "Kabardino-Balkarian State Agricultural University",
    "city": "Nalchik",
    "region": "Kabardino-Balkarian Republic",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },

  {
    "id": "ingush-state-university",
    "name": "Ingush State University",
    "city": "Nazran",
    "region": "Republic of Ingushetia",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "low",
    "safetyLevel": "low"
  },

  {
    "id": "neftekamsk-branch-bashkir-state-university",
    "name": "Neftekamsk Branch of Bashkir State University",
    "city": "Neftekamsk",
    "region": "Bashkortostan",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/207681/pexels-photo-207681.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },

  {
    "id": "nerjungry-technical-institute",
    "name": "Nerjungry Technical Institute",
    "city": "Nerjungry",
    "region": "Sakha Republic (Yakutia)",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },

  {
    "id": "nizhnevartovsk-state-university",
    "name": "Nizhnevartovsk State University",
    "city": "Nizhnevartovsk",
    "region": "Khanty-Mansi Autonomous Okrug",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/1309581/pexels-photo-1309581.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "lobachevsky-state-university-of-nizhny-novgorod",
    "name": "Lobachevsky State University of Nizhny Novgorod",
    "city": "Nizhny Novgorod",
    "region": "Nizhny Novgorod Oblast",
    "country": "Russia",
    "categories": ["arts", "business", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "nizhny-novgorod-state-technical-university",
    "name": "Nizhny Novgorod State Technical University",
    "city": "Nizhny Novgorod",
    "region": "Nizhny Novgorod Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "nizhny-novgorod-state-medical-academy",
    "name": "Nizhny Novgorod State Medical Academy",
    "city": "Nizhny Novgorod",
    "region": "Nizhny Novgorod Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": [],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "nizhny-novgorod-state-pedagogical-university",
    "name": "Nizhny Novgorod State Pedagogical University",
    "city": "Nizhny Novgorod",
    "region": "Nizhny Novgorod Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "nizhny-novgorod-state-agricultural-academy",
    "name": "Nizhny Novgorod State Agricultural Academy",
    "city": "Nizhny Novgorod",
    "region": "Nizhny Novgorod Oblast",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": [],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "nizhny-novgorod-state-linguistic-university",
    "name": "Nizhny Novgorod State Linguistic University",
    "city": "Nizhny Novgorod",
    "region": "Nizhny Novgorod Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "novokuznetsk-institute-of-technology",
    "name": "Novokuznetsk Institute of Technology",
    "city": "Novokuznetsk",
    "region": "Kemerovo Oblast",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "novokuznetsk-state-institute-of-arts",
    "name": "Novokuznetsk State Institute of Arts",
    "city": "Novokuznetsk",
    "region": "Kemerovo Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "novokuznetsk-state-pedagogical-institute",
    "name": "Novokuznetsk State Pedagogical Institute",
    "city": "Novokuznetsk",
    "region": "Kemerovo Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },

  {
    "id": "admiral-ushakov-maritime-state-university",
    "name": "Admiral Ushakov Maritime State University",
    "city": "Novorossiysk",
    "region": "Krasnodar Krai",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1178689/pexels-photo-1178689.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "novosibirsk-state-university",
    "name": "Novosibirsk State University",
    "city": "Novosibirsk",
    "region": "Novosibirsk Oblast",
    "country": "Russia",
    "categories": ["engineering", "it", "arts", "business"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "novosibirsk-state-technical-university",
    "name": "Novosibirsk State Technical University",
    "city": "Novosibirsk",
    "region": "Novosibirsk Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "novosibirsk-state-medical-university",
    "name": "Novosibirsk State Medical University",
    "city": "Novosibirsk",
    "region": "Novosibirsk Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": [],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "novosibirsk-state-agricultural-university",
    "name": "Novosibirsk State Agricultural University",
    "city": "Novosibirsk",
    "region": "Novosibirsk Oblast",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": [],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "novosibirsk-state-pedagogical-university",
    "name": "Novosibirsk State Pedagogical University",
    "city": "Novosibirsk",
    "region": "Novosibirsk Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "siberian-state-university-of-water-transport",
    "name": "Siberian State University of Water Transport",
    "city": "Novosibirsk",
    "region": "Novosibirsk Oblast",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1178689/pexels-photo-1178689.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "siberian-state-university-of-geosystems-and-technologies",
    "name": "Siberian State University of Geosystems and Technologies",
    "city": "Novosibirsk",
    "region": "Novosibirsk Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },




  {
    "id": "obninsk-institute-for-nuclear-power-engineering",
    "name": "Obninsk Institute for Nuclear Power Engineering",
    "city": "Obninsk",
    "region": "Kaluga Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "omsk-state-university",
    "name": "Omsk State University",
    "city": "Omsk",
    "region": "Omsk Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": [],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "omsk-state-technical-university",
    "name": "Omsk State Technical University",
    "city": "Omsk",
    "region": "Omsk Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "omsk-state-medical-university",
    "name": "Omsk State Medical University",
    "city": "Omsk",
    "region": "Omsk Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": [],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "omsk-state-pedagogical-university",
    "name": "Omsk State Pedagogical University",
    "city": "Omsk",
    "region": "Omsk Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "omsk-state-transport-university",
    "name": "Omsk State Transport University",
    "city": "Omsk",
    "region": "Omsk Oblast",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1178689/pexels-photo-1178689.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "omsk-state-agrarian-university",
    "name": "Omsk State Agrarian University",
    "city": "Omsk",
    "region": "Omsk Oblast",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": [],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },

  {
    "id": "orenburg-state-university",
    "name": "Orenburg State University",
    "city": "Orenburg",
    "region": "Orenburg Oblast",
    "country": "Russia",
    "categories": ["arts", "business", "it"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/207681/pexels-photo-207681.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "orenburg-state-medical-university",
    "name": "Orenburg State Medical University",
    "city": "Orenburg",
    "region": "Orenburg Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "orenburg-state-pedagogical-university",
    "name": "Orenburg State Pedagogical University",
    "city": "Orenburg",
    "region": "Orenburg Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "orenburg-state-agrarian-university",
    "name": "Orenburg State Agrarian University",
    "city": "Orenburg",
    "region": "Orenburg Oblast",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },

  {
    "id": "orekhovo-zuevo-state-pedagogical-institute",
    "name": "Orekhovo-Zuevo State Pedagogical Institute",
    "city": "Orekhovo-Zuevo",
    "region": "Moscow Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "oryol-state-university",
    "name": "Oryol State University",
    "city": "Oryol",
    "region": "Oryol Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "oryol-state-technical-university",
    "name": "Oryol State Technical University",
    "city": "Oryol",
    "region": "Oryol Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "oryol-state-agricultural-university",
    "name": "Oryol State Agricultural University",
    "city": "Oryol",
    "region": "Oryol Oblast",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },

  {
    "id": "penza-state-university",
    "name": "Penza State University",
    "city": "Penza",
    "region": "Penza Oblast",
    "country": "Russia",
    "categories": ["arts", "business", "it"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "penza-state-technological-university",
    "name": "Penza State Technological University",
    "city": "Penza",
    "region": "Penza Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "penza-state-university-of-architecture-and-construction",
    "name": "Penza State University of Architecture and Construction",
    "city": "Penza",
    "region": "Penza Oblast",
    "country": "Russia",
    "categories": ["engineering", "arts"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "penza-state-agricultural-academy",
    "name": "Penza State Agricultural Academy",
    "city": "Penza",
    "region": "Penza Oblast",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },

  {
    "id": "perm-state-university",
    "name": "Perm State University",
    "city": "Perm",
    "region": "Perm Krai",
    "country": "Russia",
    "categories": ["arts", "business", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "perm-national-research-polytechnic-university",
    "name": "Perm National Research Polytechnic University",
    "city": "Perm",
    "region": "Perm Krai",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research", "top"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "perm-state-medical-university",
    "name": "Perm State Medical University",
    "city": "Perm",
    "region": "Perm Krai",
    "country": "Russia",
    "categories": ["medical"],
    "tags": [],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "perm-state-pedagogical-university",
    "name": "Perm State Pedagogical University",
    "city": "Perm",
    "region": "Perm Krai",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "perm-state-institute-of-culture",
    "name": "Perm State Institute of Culture",
    "city": "Perm",
    "region": "Perm Krai",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "perm-state-agricultural-academy",
    "name": "Perm State Agricultural Academy",
    "city": "Perm",
    "region": "Perm Krai",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": [],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },

  {
    "id": "petrozavodsk-state-university",
    "name": "Petrozavodsk State University",
    "city": "Petrozavodsk",
    "region": "Republic of Karelia",
    "country": "Russia",
    "categories": ["arts", "business", "it"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "petrozavodsk-state-conservatory",
    "name": "Petrozavodsk State Conservatory",
    "city": "Petrozavodsk",
    "region": "Republic of Karelia",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "pyatigorsk-state-university",
    "name": "Pyatigorsk State University",
    "city": "Pyatigorsk",
    "region": "Stavropol Krai",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/207681/pexels-photo-207681.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "pyatigorsk-medical-and-pharmaceutical-institute",
    "name": "Pyatigorsk Medical and Pharmaceutical Institute",
    "city": "Pyatigorsk",
    "region": "Stavropol Krai",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "pyatigorsk-state-linguistic-university",
    "name": "Pyatigorsk State Linguistic University",
    "city": "Pyatigorsk",
    "region": "Stavropol Krai",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },


  {
    "id": "southern-federal-university",
    "name": "Southern Federal University",
    "city": "Rostov-on-Don",
    "region": "Rostov Oblast",
    "country": "Russia",
    "categories": ["engineering", "it", "arts", "business"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "rostov-state-university-of-economics",
    "name": "Rostov State University of Economics",
    "city": "Rostov-on-Don",
    "region": "Rostov Oblast",
    "country": "Russia",
    "categories": ["business"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1309581/pexels-photo-1309581.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "rostov-state-medical-university",
    "name": "Rostov State Medical University",
    "city": "Rostov-on-Don",
    "region": "Rostov Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": [],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "don-state-technical-university",
    "name": "Don State Technical University",
    "city": "Rostov-on-Don",
    "region": "Rostov Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "rostov-state-transport-university",
    "name": "Rostov State Transport University",
    "city": "Rostov-on-Don",
    "region": "Rostov Oblast",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1178689/pexels-photo-1178689.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "rostov-state-conservatory",
    "name": "Rostov State Conservatory",
    "city": "Rostov-on-Don",
    "region": "Rostov Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },

  {
    "id": "ryazan-state-university",
    "name": "Ryazan State University",
    "city": "Ryazan",
    "region": "Ryazan Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "ryazan-state-medical-university",
    "name": "Ryazan State Medical University",
    "city": "Ryazan",
    "region": "Ryazan Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "ryazan-state-radio-engineering-university",
    "name": "Ryazan State Radio Engineering University",
    "city": "Ryazan",
    "region": "Ryazan Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "ryazan-state-agricultural-university",
    "name": "Ryazan State Agricultural University",
    "city": "Ryazan",
    "region": "Ryazan Oblast",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },

  {
    "id": "rubtsovsk-industrial-institute",
    "name": "Rubtsovsk Industrial Institute",
    "city": "Rubtsovsk",
    "region": "Altai Krai",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "low",
    "safetyLevel": "high"
  },


  {
    "id": "southern-federal-university",
    "name": "Southern Federal University",
    "city": "Rostov-on-Don",
    "region": "Rostov Oblast",
    "country": "Russia",
    "categories": ["engineering", "it", "arts", "business"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "rostov-state-university-of-economics",
    "name": "Rostov State University of Economics",
    "city": "Rostov-on-Don",
    "region": "Rostov Oblast",
    "country": "Russia",
    "categories": ["business"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1309581/pexels-photo-1309581.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "rostov-state-medical-university",
    "name": "Rostov State Medical University",
    "city": "Rostov-on-Don",
    "region": "Rostov Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": [],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "don-state-technical-university",
    "name": "Don State Technical University",
    "city": "Rostov-on-Don",
    "region": "Rostov Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "rostov-state-transport-university",
    "name": "Rostov State Transport University",
    "city": "Rostov-on-Don",
    "region": "Rostov Oblast",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1178689/pexels-photo-1178689.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "rostov-state-conservatory",
    "name": "Rostov State Conservatory",
    "city": "Rostov-on-Don",
    "region": "Rostov Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },

  {
    "id": "ryazan-state-university",
    "name": "Ryazan State University",
    "city": "Ryazan",
    "region": "Ryazan Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "ryazan-state-medical-university",
    "name": "Ryazan State Medical University",
    "city": "Ryazan",
    "region": "Ryazan Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "ryazan-state-radio-engineering-university",
    "name": "Ryazan State Radio Engineering University",
    "city": "Ryazan",
    "region": "Ryazan Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "ryazan-state-agricultural-university",
    "name": "Ryazan State Agricultural University",
    "city": "Ryazan",
    "region": "Ryazan Oblast",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },

  {
    "id": "rubtsovsk-industrial-institute",
    "name": "Rubtsovsk Industrial Institute",
    "city": "Rubtsovsk",
    "region": "Altai Krai",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "low",
    "safetyLevel": "high"
  },

  {
    "id": "saint-petersburg-state-university",
    "name": "Saint Petersburg State University",
    "city": "Saint Petersburg",
    "region": "Saint Petersburg",
    "country": "Russia",
    "categories": ["engineering", "it", "arts", "business"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "itmo-university",
    "name": "ITMO University",
    "city": "Saint Petersburg",
    "region": "Saint Petersburg",
    "country": "Russia",
    "categories": ["it", "engineering"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "peter-the-great-st-petersburg-polytechnic-university",
    "name": "Peter the Great St. Petersburg Polytechnic University",
    "city": "Saint Petersburg",
    "region": "Saint Petersburg",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/256540/pexels-photo-256540.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "saint-petersburg-state-electrotechnical-university",
    "name": "Saint Petersburg State Electrotechnical University (LETI)",
    "city": "Saint Petersburg",
    "region": "Saint Petersburg",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "saint-petersburg-state-university-of-aerospace-instrumentation",
    "name": "Saint Petersburg State University of Aerospace Instrumentation",
    "city": "Saint Petersburg",
    "region": "Saint Petersburg",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1178689/pexels-photo-1178689.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "saint-petersburg-mining-university",
    "name": "Saint Petersburg Mining University",
    "city": "Saint Petersburg",
    "region": "Saint Petersburg",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/256540/pexels-photo-256540.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "saint-petersburg-state-marine-technical-university",
    "name": "Saint Petersburg State Marine Technical University",
    "city": "Saint Petersburg",
    "region": "Saint Petersburg",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1178689/pexels-photo-1178689.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "saint-petersburg-state-university-of-architecture-and-civil-engineering",
    "name": "Saint Petersburg State University of Architecture and Civil Engineering",
    "city": "Saint Petersburg",
    "region": "Saint Petersburg",
    "country": "Russia",
    "categories": ["engineering", "arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "saint-petersburg-state-medical-university",
    "name": "Saint Petersburg State Medical University",
    "city": "Saint Petersburg",
    "region": "Saint Petersburg",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["top"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "north-western-state-medical-university",
    "name": "North-Western State Medical University",
    "city": "Saint Petersburg",
    "region": "Saint Petersburg",
    "country": "Russia",
    "categories": ["medical"],
    "tags": [],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "saint-petersburg-state-university-of-economics",
    "name": "Saint Petersburg State University of Economics",
    "city": "Saint Petersburg",
    "region": "Saint Petersburg",
    "country": "Russia",
    "categories": ["business"],
    "tags": ["top"],
    "image": "https://images.pexels.com/photos/1309581/pexels-photo-1309581.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "saint-petersburg-state-university-of-finance-and-economics",
    "name": "Saint Petersburg State University of Finance and Economics",
    "city": "Saint Petersburg",
    "region": "Saint Petersburg",
    "country": "Russia",
    "categories": ["business"],
    "tags": [],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "saint-petersburg-state-university-of-culture",
    "name": "Saint Petersburg State University of Culture",
    "city": "Saint Petersburg",
    "region": "Saint Petersburg",
    "country": "Russia",
    "categories": ["arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "saint-petersburg-state-theatre-arts-academy",
    "name": "Saint Petersburg State Theatre Arts Academy",
    "city": "Saint Petersburg",
    "region": "Saint Petersburg",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["top"],
    "image": "https://images.pexels.com/photos/207681/pexels-photo-207681.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },
  {
    "id": "saint-petersburg-state-conservatory",
    "name": "Saint Petersburg State Conservatory",
    "city": "Saint Petersburg",
    "region": "Saint Petersburg",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["top"],
    "image": "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    "costLevel": "high",
    "safetyLevel": "high"
  },

  {
    "id": "samara-state-university",
    "name": "Samara State University",
    "city": "Samara",
    "region": "Samara Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": [],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "samara-state-aerospace-university",
    "name": "Samara State Aerospace University",
    "city": "Samara",
    "region": "Samara Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research", "top"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "samara-state-technical-university",
    "name": "Samara State Technical University",
    "city": "Samara",
    "region": "Samara Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": [],
    "image": "https://images.pexels.com/photos/256540/pexels-photo-256540.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },

  {
    "id": "saratov-state-university",
    "name": "Saratov State University",
    "city": "Saratov",
    "region": "Saratov Oblast",
    "country": "Russia",
    "categories": ["arts", "business", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "saratov-state-technical-university",
    "name": "Saratov State Technical University",
    "city": "Saratov",
    "region": "Saratov Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "saratov-state-medical-university",
    "name": "Saratov State Medical University",
    "city": "Saratov",
    "region": "Saratov Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": [],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },

  {
    "id": "smolensk-state-university",
    "name": "Smolensk State University",
    "city": "Smolensk",
    "region": "Smolensk Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "smolensk-state-medical-university",
    "name": "Smolensk State Medical University",
    "city": "Smolensk",
    "region": "Smolensk Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },

  {
    "id": "sochi-state-university",
    "name": "Sochi State University",
    "city": "Sochi",
    "region": "Krasnodar Krai",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/1309581/pexels-photo-1309581.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "stavropol-state-university",
    "name": "Stavropol State University",
    "city": "Stavropol",
    "region": "Stavropol Krai",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/207681/pexels-photo-207681.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "stavropol-state-medical-university",
    "name": "Stavropol State Medical University",
    "city": "Stavropol",
    "region": "Stavropol Krai",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "surgut-state-university",
    "name": "Surgut State University",
    "city": "Surgut",
    "region": "Khanty-Mansi Autonomous Okrug",
    "country": "Russia",
    "categories": ["arts", "business", "it"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "syktyvkar-state-university",
    "name": "Syktyvkar State University",
    "city": "Syktyvkar",
    "region": "Komi Republic",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/207681/pexels-photo-207681.jpeg",
    "costLevel": "low",
    "safetyLevel": "high"
  },


  {
    "id": "taganrog-institute-of-technology",
    "name": "Taganrog Institute of Technology",
    "city": "Taganrog",
    "region": "Rostov Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },

  {
    "id": "tambov-state-university",
    "name": "Tambov State University",
    "city": "Tambov",
    "region": "Tambov Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "tambov-state-technical-university",
    "name": "Tambov State Technical University",
    "city": "Tambov",
    "region": "Tambov Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "tambov-state-agricultural-university",
    "name": "Tambov State Agricultural University",
    "city": "Tambov",
    "region": "Tambov Oblast",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },

  {
    "id": "tver-state-university",
    "name": "Tver State University",
    "city": "Tver",
    "region": "Tver Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/207681/pexels-photo-207681.jpeg",
    "costLevel": "low",
    "safetyLevel": "high"
  },
  {
    "id": "tver-state-medical-university",
    "name": "Tver State Medical University",
    "city": "Tver",
    "region": "Tver Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "low",
    "safetyLevel": "high"
  },

  {
    "id": "tomsk-state-university",
    "name": "Tomsk State University",
    "city": "Tomsk",
    "region": "Tomsk Oblast",
    "country": "Russia",
    "categories": ["arts", "business", "it"],
    "tags": ["research", "top"],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "tomsk-polytechnic-university",
    "name": "Tomsk Polytechnic University",
    "city": "Tomsk",
    "region": "Tomsk Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research", "top"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "siberian-state-medical-university",
    "name": "Siberian State Medical University",
    "city": "Tomsk",
    "region": "Tomsk Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "tula-state-university",
    "name": "Tula State University",
    "city": "Tula",
    "region": "Tula Oblast",
    "country": "Russia",
    "categories": ["engineering", "arts", "business"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "tula-state-pedagogical-university",
    "name": "Tula State Pedagogical University",
    "city": "Tula",
    "region": "Tula Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },

  {
    "id": "tyumen-state-university",
    "name": "Tyumen State University",
    "city": "Tyumen",
    "region": "Tyumen Oblast",
    "country": "Russia",
    "categories": ["arts", "business", "it"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/207681/pexels-photo-207681.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "tyumen-state-medical-university",
    "name": "Tyumen State Medical University",
    "city": "Tyumen",
    "region": "Tyumen Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "tyumen-industrial-university",
    "name": "Tyumen Industrial University",
    "city": "Tyumen",
    "region": "Tyumen Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  }, 

  {
    "id": "bashkir-state-university",
    "name": "Bashkir State University",
    "city": "Ufa",
    "region": "Republic of Bashkortostan",
    "country": "Russia",
    "categories": ["arts", "business", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "ufa-state-aviation-technical-university",
    "name": "Ufa State Aviation Technical University",
    "city": "Ufa",
    "region": "Republic of Bashkortostan",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research", "top"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "bashkir-state-medical-university",
    "name": "Bashkir State Medical University",
    "city": "Ufa",
    "region": "Republic of Bashkortostan",
    "country": "Russia",
    "categories": ["medical"],
    "tags": [],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "ufa-state-petroleum-technological-university",
    "name": "Ufa State Petroleum Technological University",
    "city": "Ufa",
    "region": "Republic of Bashkortostan",
    "country": "Russia",
    "categories": ["engineering"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/256540/pexels-photo-256540.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },

  {
    "id": "buryat-state-university",
    "name": "Buryat State University",
    "city": "Ulan-Ude",
    "region": "Republic of Buryatia",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/207681/pexels-photo-207681.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "east-siberian-state-university-of-technology-and-management",
    "name": "East Siberian State University of Technology and Management",
    "city": "Ulan-Ude",
    "region": "Republic of Buryatia",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "buryat-state-agricultural-academy",
    "name": "Buryat State Agricultural Academy",
    "city": "Ulan-Ude",
    "region": "Republic of Buryatia",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },

  {
    "id": "ulyanovsk-state-university",
    "name": "Ulyanovsk State University",
    "city": "Ulyanovsk",
    "region": "Ulyanovsk Oblast",
    "country": "Russia",
    "categories": ["arts", "business", "it"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "ulyanovsk-state-technical-university",
    "name": "Ulyanovsk State Technical University",
    "city": "Ulyanovsk",
    "region": "Ulyanovsk Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "ulyanovsk-state-pedagogical-university",
    "name": "Ulyanovsk State Pedagogical University",
    "city": "Ulyanovsk",
    "region": "Ulyanovsk Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["safest"],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "far-eastern-federal-university",
    "name": "Far Eastern Federal University",
    "city": "Vladivostok",
    "region": "Primorsky Krai",
    "country": "Russia",
    "categories": ["engineering", "it", "arts", "business"],
    "tags": ["top", "research"],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "vladivostok-state-university-of-economics-and-service",
    "name": "Vladivostok State University of Economics and Service",
    "city": "Vladivostok",
    "region": "Primorsky Krai",
    "country": "Russia",
    "categories": ["business", "arts"],
    "tags": [],
    "image": "https://images.pexels.com/photos/1309581/pexels-photo-1309581.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "pacific-state-medical-university",
    "name": "Pacific State Medical University",
    "city": "Vladivostok",
    "region": "Primorsky Krai",
    "country": "Russia",
    "categories": ["medical"],
    "tags": [],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },

  {
    "id": "vladimir-state-university",
    "name": "Vladimir State University",
    "city": "Vladimir",
    "region": "Vladimir Oblast",
    "country": "Russia",
    "categories": ["arts", "business", "it"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "low",
    "safetyLevel": "high"
  },
  {
    "id": "vladimir-state-university-for-the-humanities",
    "name": "Vladimir State University for the Humanities",
    "city": "Vladimir",
    "region": "Vladimir Oblast",
    "country": "Russia",
    "categories": ["arts"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
    "costLevel": "low",
    "safetyLevel": "high"
  },

  {
    "id": "volgograd-state-university",
    "name": "Volgograd State University",
    "city": "Volgograd",
    "region": "Volgograd Oblast",
    "country": "Russia",
    "categories": ["arts", "business", "it"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/207681/pexels-photo-207681.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "volgograd-state-technical-university",
    "name": "Volgograd State Technical University",
    "city": "Volgograd",
    "region": "Volgograd Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "medium"
  },
  {
    "id": "volgograd-state-medical-university",
    "name": "Volgograd State Medical University",
    "city": "Volgograd",
    "region": "Volgograd Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },
  {
    "id": "volgograd-state-agricultural-university",
    "name": "Volgograd State Agricultural University",
    "city": "Volgograd",
    "region": "Volgograd Oblast",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": ["cheapest"],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "low",
    "safetyLevel": "medium"
  },

  {
    "id": "vologda-state-university",
    "name": "Vologda State University",
    "city": "Vologda",
    "region": "Vologda Oblast",
    "country": "Russia",
    "categories": ["arts", "business"],
    "tags": ["cheapest", "safest"],
    "image": "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "costLevel": "low",
    "safetyLevel": "high"
  },

  {
    "id": "voronezh-state-university",
    "name": "Voronezh State University",
    "city": "Voronezh",
    "region": "Voronezh Oblast",
    "country": "Russia",
    "categories": ["arts", "business", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "voronezh-state-technical-university",
    "name": "Voronezh State Technical University",
    "city": "Voronezh",
    "region": "Voronezh Oblast",
    "country": "Russia",
    "categories": ["engineering", "it"],
    "tags": ["research"],
    "image": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "voronezh-state-medical-university",
    "name": "Voronezh State Medical University",
    "city": "Voronezh",
    "region": "Voronezh Oblast",
    "country": "Russia",
    "categories": ["medical"],
    "tags": [],
    "image": "https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  },
  {
    "id": "voronezh-state-agricultural-university",
    "name": "Voronezh State Agricultural University",
    "city": "Voronezh",
    "region": "Voronezh Oblast",
    "country": "Russia",
    "categories": ["agriculture"],
    "tags": [],
    "image": "https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg",
    "costLevel": "medium",
    "safetyLevel": "high"
  }


  





  





  











];

// Combine provided lists and sort alphabetically by name
const ALL_UNIVERSITIES = [...UNIVERSITY_DATA].sort((a, b) => a.name.localeCompare(b.name));

const CATEGORY_OPTIONS = [
  { id: "medical", label: "Medical", icon: Stethoscope },
  { id: "engineering", label: "Engineering", icon: School },
  { id: "it", label: "IT & Tech", icon: Cpu },
  { id: "arts", label: "Arts & Humanities", icon: Palette },
  { id: "business", label: "Business", icon: Briefcase },
  { id: "law", label: "Law", icon: Scale },
  { id: "agriculture", label: "Agriculture", icon: Sprout },
];

const TAG_OPTIONS = ["cheapest", "safest", "top", "research"];
const COST_LEVELS = ["low", "medium", "high"];
const SAFETY_LEVELS = ["low", "medium", "high"];

// -----------------------
// 2. Components
// -----------------------

const Badge = ({ children, variant = "default" }) => {
  const variants = {
    default: "bg-slate-100 text-slate-700",
    accent: "bg-[#0B7077]/10 text-[#0B7077]",
  };
  return (
    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${variants[variant]}`}>
      {children}
    </span>
  );
};

const UniversityCard = ({ university }) => (
  <div className="group relative flex flex-col rounded-2xl border-2 border-transparent bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#0B7077] hover:shadow-xl overflow-hidden">
    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
      <img
        src={university.image}
        alt={university.name}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        onError={(e) => { e.target.src = "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg"; }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </div>

    <div className="flex flex-1 flex-col p-5">
      <div className="mb-2">
        <h3 className="line-clamp-2 text-md font-extrabold leading-tight text-slate-900 group-hover:text-[#0B7077]">
          {university.name}
        </h3>
        <div className="mt-2 flex items-center gap-1 text-sm text-slate-500">
          <MapPin className="h-3.5 w-3.5 text-[#0B7077]" />
          <span className="truncate">{university.city}, {university.region}</span>
        </div>
      </div>

      <div className="mb-4 mt-2 flex flex-wrap gap-1.5">
        {university.categories.map((cat) => (
          <Badge key={cat}>{cat}</Badge>
        ))}
        {university.tags.map((tag) => (
          <Badge key={tag} variant="accent">{tag}</Badge>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold">
        <div className="flex items-center gap-1.5 text-slate-600">
          <DollarSign className="h-3.5 w-3.5 text-[#0B7077]" />
          <span className="capitalize">{university.costLevel}</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-600">
          <Shield className="h-3.5 w-3.5 text-[#0B7077]" />
          <span className="capitalize">{university.safetyLevel}</span>
        </div>
      </div>
    </div>
  </div>
);

// -----------------------
// 3. Main App
// -----------------------

export default function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCost, setSelectedCost] = useState(null);
  const [selectedSafety, setSelectedSafety] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredData = useMemo(() => {
    return ALL_UNIVERSITIES.filter((uni) => {
      const query = searchTerm.toLowerCase().trim();
      const matchesSearch = !query || 
        uni.name.toLowerCase().includes(query) || 
        uni.city.toLowerCase().includes(query) ||
        uni.region.toLowerCase().includes(query);

      const matchesCat = selectedCategories.length === 0 || 
        selectedCategories.every(cat => uni.categories.includes(cat));

      const matchesTag = selectedTags.length === 0 || 
        selectedTags.every(tag => uni.tags.includes(tag));

      const matchesCost = !selectedCost || uni.costLevel === selectedCost;
      const matchesSafety = !selectedSafety || uni.safetyLevel === selectedSafety;

      return matchesSearch && matchesCat && matchesTag && matchesCost && matchesSafety;
    });
  }, [searchTerm, selectedCategories, selectedTags, selectedCost, selectedSafety]);

  const toggle = (list, set, val) => set(list.includes(val) ? list.filter(v => v !== val) : [...list, val]);

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-900">

      {/* Hero Section with Search Bar */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0B7077]/5 px-4 py-1.5 text-[#0B7077]">
              <Star className="h-3.5 w-3.5 fill-[#0B7077]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Verified Partner Institutions</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Search Your <span className="text-[#0B7077]">Ideal University</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
              Access the complete directory of Russian higher education. Filter by city, safety, and tuition levels.
            </p>
          </div>

          {/* Main Search Bar */}
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-[#0B7077] to-[#085a61] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative flex items-center bg-white rounded-2xl shadow-xl overflow-hidden p-1">
                <div className="flex items-center flex-1 px-4">
                  <Search className="h-6 w-6 text-slate-300" />
                  <input 
                    type="text" 
                    placeholder="Enter university name, city or region..."
                    className="w-full border-none bg-transparent py-4 px-4 text-lg font-medium outline-none placeholder:text-slate-300"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                  />
                </div>
                <button className="hidden sm:flex items-center gap-2 bg-[#FD661F] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#f57e47] cursor-pointer transition-all">
                  Search <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs font-bold text-slate-400">
              <span>Popular:</span>
              <button onClick={() => setSearchTerm("Moscow")} className="text-[#0B7077] hover:underline">Moscow</button>
              <button onClick={() => setSearchTerm("Medical")} className="text-[#0B7077] hover:underline">Medical</button>
              <button onClick={() => setSearchTerm("ITMO")} className="text-[#0B7077] hover:underline">ITMO</button>
            </div>
          </div>
        </div>
      </section>

      {/* Category List Navigation */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-6">
            <button 
              onClick={() => setSelectedCategories([])}
              className={`flex flex-col items-center gap-2 min-w-25 p-4 rounded-2xl transition-all ${selectedCategories.length === 0 ? 'bg-[#0B7077] text-white shadow-lg' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
            >
              <div className="p-2 rounded-xl bg-white/20">
                <School className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold">All Fields</span>
            </button>
            {CATEGORY_OPTIONS.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategories.includes(cat.id);
              return (
                <button 
                  key={cat.id}
                  onClick={() => toggle(selectedCategories, setSelectedCategories, cat.id)}
                  className={`flex flex-col items-center gap-2 min-w-25 p-4 rounded-2xl transition-all ${isActive ? 'bg-[#0B7077] text-white shadow-lg' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                >
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20' : 'bg-white shadow-sm'}`}>
                    <Icon className={`h-6 w-6 ${isActive ? 'text-white' : 'text-[#0B7077]'}`} />
                  </div>
                  <span className="text-xs font-bold whitespace-nowrap">{cat.label}</span>
                </button>
              );
            })}
            {/* See More Icon Button */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="flex flex-col items-center gap-2 min-w-25 p-4 rounded-2xl transition-all bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-[#0B7077]"
            >
              <div className="p-2 rounded-xl bg-white shadow-sm">
                <MoreHorizontal className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold whitespace-nowrap">See More</span>
            </button>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">
          
          {/* Sidebar Filters */}
          <aside className={`${isSidebarOpen ? 'block' : 'hidden'} fixed inset-0 z-50 bg-white p-6 lg:relative lg:z-0 lg:block lg:bg-transparent lg:p-0 overflow-y-auto`}>
            <div className="flex items-center justify-between lg:hidden mb-6">
              <h2 className="text-xl font-bold">Refine Results</h2>
              <button onClick={() => setIsSidebarOpen(false)} className="rounded-lg p-2 bg-slate-100 text-slate-600">✕</button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-slate-400">Field of Study (Advanced)</h3>
                <div className="grid grid-cols-1 gap-2">
                  {CATEGORY_OPTIONS.map(opt => (
                    <label key={opt.id} className="flex cursor-pointer items-center gap-3 text-sm text-slate-600 hover:text-[#0B7077]">
                      <input 
                        type="checkbox" 
                        className="h-4 w-4 rounded border-slate-300 text-[#0B7077] focus:ring-[#0B7077]"
                        checked={selectedCategories.includes(opt.id)}
                        onChange={() => toggle(selectedCategories, setSelectedCategories, opt.id)}
                      />
                      <span className="capitalize">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-slate-400">Institutional Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {TAG_OPTIONS.map(opt => (
                    <button 
                      key={opt}
                      onClick={() => toggle(selectedTags, setSelectedTags, opt)}
                      className={`rounded-full border px-3 py-1 text-xs font-bold capitalize transition-all ${selectedTags.includes(opt) ? 'border-[#0B7077] bg-[#0B7077] text-white' : 'border-slate-200 text-slate-500 hover:border-[#0B7077]'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-slate-400">Tuition Range</h3>
                <div className="flex gap-2">
                  {COST_LEVELS.map(opt => (
                    <button 
                      key={opt}
                      onClick={() => setSelectedCost(selectedCost === opt ? null : opt)}
                      className={`flex-1 rounded-lg border py-2 text-xs font-bold capitalize transition-all ${selectedCost === opt ? 'border-[#0B7077] bg-[#0B7077]/10 text-[#0B7077]' : 'border-slate-200 text-slate-400 hover:border-[#0B7077]'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0B7077]/5 border border-[#0B7077]/10">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="h-4 w-4 text-[#0B7077]" />
                  <span className="text-xs font-bold text-[#0B7077]">Safety Note</span>
                </div>
                <p className="text-[11px] leading-relaxed text-[#0B7077]/70">
                  Data updated for 2025. All "Safest" tags are verified against regional security indexes.
                </p>
              </div>

              <button 
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedTags([]);
                  setSelectedCost(null);
                  setSelectedSafety(null);
                  setSearchTerm("");
                }}
                className="w-full rounded-xl border border-slate-200 py-3 text-xs font-bold text-slate-400 hover:bg-slate-50 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Results Grid */}
          <section>
            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Showing <span className="text-slate-900">{filteredData.length}</span> Results
              </h2>
            </div>

            {filteredData.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 py-24 text-center">
                <Search className="mb-4 h-12 w-12 text-slate-200" />
                <h3 className="text-xl font-bold text-slate-900">No match found</h3>
                <p className="mt-2 text-slate-500">Broaden your search or reset filters.</p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 cursor-pointer">
                {filteredData.map(uni => (
                  <UniversityCard key={uni.id} university={uni} />
                ))}
              </div>
            )}
          </section>

        </div>
      </main>
    </div>
  );
}