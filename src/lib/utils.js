import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
export const reliefLocations = [
  { id: 1, name: "Red Cross Shelter", type: "Shelter", lat: 19.0760, lng: 72.8777 }, // Mumbai
  { id: 2, name: "NGO Disaster Relief", type: "NGO", lat: 28.6139, lng: 77.2090 }, // Delhi
  { id: 3, name: "Emergency Medical Center", type: "Hospital", lat: 13.0827, lng: 80.2707 }, // Chennai
  { id: 4, name: "Community Aid Center", type: "NGO", lat: 22.5726, lng: 88.3639 }, // Kolkata
  { id: 5, name: "Temporary Housing Facility", type: "Shelter", lat: 17.3850, lng: 78.4867 }, // Hyderabad
  { id: 6, name: "Flood Relief Camp", type: "Shelter", lat: 12.9716, lng: 77.5946 }, // Bangalore
  { id: 7, name: "Earthquake Relief Center", type: "NGO", lat: 23.0225, lng: 72.5714 }, // Ahmedabad
  { id: 8, name: "Medical Relief Point", type: "Hospital", lat: 26.9124, lng: 75.7873 }, // Jaipur
  { id: 9, name: "Cyclone Shelter", type: "Shelter", lat: 16.5062, lng: 80.6480 }, // Vijayawada
  { id: 10, name: "Emergency Aid Center", type: "NGO", lat: 15.3173, lng: 75.7139 }, // Hubli
  { id: 11, name: "Relief Resource Hub", type: "NGO", lat: 21.1458, lng: 79.0882 }, // Nagpur
  { id: 12, name: "Medical Response Unit", type: "Hospital", lat: 25.5941, lng: 85.1376 }, // Patna
  { id: 13, name: "Disaster Shelter", type: "Shelter", lat: 11.0168, lng: 76.9558 }, // Coimbatore
  { id: 14, name: "Flood Assistance Center", type: "NGO", lat: 27.1767, lng: 78.0081 }, // Agra
  { id: 15, name: "Earthquake Medical Relief", type: "Hospital", lat: 32.7266, lng: 74.8570 }, // Jammu
  { id: 16, name: "Cyclone Relief Shelter", type: "Shelter", lat: 20.2961, lng: 85.8245 }, // Bhubaneswar
  { id: 17, name: "Community Support Center", type: "NGO", lat: 9.9312, lng: 76.2673 }, // Kochi
  { id: 18, name: "Emergency Medical Facility", type: "Hospital", lat: 26.8467, lng: 80.9462 }, // Lucknow
  { id: 19, name: "NGO Aid Hub", type: "NGO", lat: 21.1702, lng: 72.8311 }, // Surat
  { id: 20, name: "Disaster Response Shelter", type: "Shelter", lat: 28.4595, lng: 77.0266 }, // Gurgaon
  { id: 21, name: "Flood Relief Support", type: "NGO", lat: 10.8505, lng: 76.2711 }, // Thrissur
  { id: 22, name: "Emergency Care Unit", type: "Hospital", lat: 18.5204, lng: 73.8567 }, // Pune
  { id: 23, name: "Cyclone Protection Center", type: "Shelter", lat: 11.9416, lng: 79.8083 }, // Pondicherry
  { id: 24, name: "Community Relief Camp", type: "NGO", lat: 19.9975, lng: 73.7898 }, // Nashik
  { id: 25, name: "Medical Response Center", type: "Hospital", lat: 18.1124, lng: 79.0193 }, // Warangal
  { id: 26, name: "Earthquake Safety Shelter", type: "Shelter", lat: 24.5854, lng: 73.7125 }, // Udaipur
  { id: 27, name: "Disaster Aid Station", type: "NGO", lat: 26.1445, lng: 91.7362 }, // Guwahati
  { id: 28, name: "Emergency Response Unit", type: "Hospital", lat: 22.3072, lng: 73.1812 }, // Vadodara
  { id: 29, name: "Flood Protection Shelter", type: "Shelter", lat: 12.2958, lng: 76.6394 }, // Mysore
  { id: 30, name: "Community Health Center", type: "NGO", lat: 15.8281, lng: 78.0373 }, // Kurnool
  { id: 31, name: "Medical Relief Facility", type: "Hospital", lat: 24.7914, lng: 85.0002 }, // Gaya
  { id: 32, name: "NGO Relief Hub", type: "NGO", lat: 23.3342, lng: 85.2960 }, // Ranchi
  { id: 33, name: "Cyclone Safety Camp", type: "Shelter", lat: 17.6868, lng: 83.2185 }, // Visakhapatnam
  { id: 34, name: "Earthquake Response Center", type: "NGO", lat: 30.3165, lng: 78.0322 }, // Dehradun
  { id: 35, name: "Disaster Medical Unit", type: "Hospital", lat: 13.6288, lng: 79.4192 }, // Tirupati
  { id: 36, name: "Flood Safety Center", type: "Shelter", lat: 28.7041, lng: 77.1025 }, // New Delhi
  { id: 37, name: "Community Aid Station", type: "NGO", lat: 21.1458, lng: 79.0882 }, // Nagpur
  { id: 38, name: "Emergency Relief Hub", type: "Hospital", lat: 19.2183, lng: 72.9781 }, // Thane
  { id: 39, name: "Disaster Relief Camp", type: "Shelter", lat: 22.7196, lng: 75.8577 }, // Indore
  { id: 40, name: "NGO Support Center", type: "NGO", lat: 26.4499, lng: 74.6399 }, // Ajmer
  { id: 41, name: "Medical Aid Point", type: "Hospital", lat: 19.9975, lng: 73.7898 }, // Nashik
  { id: 42, name: "Earthquake Relief Shelter", type: "Shelter", lat: 22.9734, lng: 78.6569 }, // Bhopal
  { id: 43, name: "Flood Response Unit", type: "NGO", lat: 13.0827, lng: 80.2707 }, // Chennai
  { id: 44, name: "Community Medical Center", type: "Hospital", lat: 22.2587, lng: 71.1924 }, // Gujarat
  { id: 45, name: "Cyclone Relief Facility", type: "Shelter", lat: 9.9312, lng: 76.2673 }, // Kochi
  { id: 46, name: "Disaster Medical Support", type: "Hospital", lat: 12.9716, lng: 77.5946 }, // Bangalore
  { id: 47, name: "NGO Relief Station", type: "NGO", lat: 23.2599, lng: 77.4126 }, // Bhopal
  { id: 48, name: "Emergency Health Center", type: "Hospital", lat: 18.5204, lng: 73.8567 }, // Pune
  { id: 49, name: "Earthquake Relief Facility", type: "Shelter", lat: 27.2046, lng: 77.4977 }, // Mathura
  { id: 50, name: "Flood Aid Shelter", type: "Shelter", lat: 26.8467, lng: 80.9462 }, // Lucknow
  { id: 51, name: "Urban Aid Shelter", type: "Shelter", lat: 19.2183, lng: 72.9781 }, // Thane
  { id: 52, name: "Rural Relief Center", type: "NGO", lat: 24.5854, lng: 73.7125 }, // Udaipur
  { id: 53, name: "Medical Support Camp", type: "Hospital", lat: 22.7196, lng: 75.8577 }, // Indore
  { id: 54, name: "Emergency Response Shelter", type: "Shelter", lat: 28.6139, lng: 77.2090 }, // Delhi
  { id: 55, name: "Flood Evacuation Center", type: "Shelter", lat: 12.2958, lng: 76.6394 }, // Mysore
  { id: 56, name: "Cyclone Medical Unit", type: "Hospital", lat: 16.5062, lng: 80.6480 }, // Vijayawada
  { id: 57, name: "Disaster Relief Shelter", type: "Shelter", lat: 11.0168, lng: 76.9558 }, // Coimbatore
  { id: 58, name: "Community Medical Hub", type: "Hospital", lat: 21.1702, lng: 72.8311 }, // Surat
  { id: 59, name: "Earthquake Response Shelter", type: "Shelter", lat: 32.7266, lng: 74.8570 }, // Jammu
  { id: 60, name: "Flood Assistance Hub", type: "NGO", lat: 9.9312, lng: 76.2673 }, // Kochi
  { id: 61, name: "Emergency Health Shelter", type: "Shelter", lat: 26.9124, lng: 75.7873 }, // Jaipur
  { id: 62, name: "Cyclone Evacuation Center", type: "Shelter", lat: 11.9416, lng: 79.8083 }, // Pondicherry
  { id: 63, name: "Disaster Medical Hub", type: "Hospital", lat: 21.1458, lng: 79.0882 }, // Nagpur
  { id: 64, name: "Flood Relief Center", type: "Shelter", lat: 26.8467, lng: 80.9462 }, // Lucknow
  { id: 65, name: "Earthquake Evacuation Shelter", type: "Shelter", lat: 24.7914, lng: 85.0002 }, // Gaya
  { id: 66, name: "Cyclone Aid Station", type: "NGO", lat: 17.6868, lng: 83.2185 }, // Visakhapatnam
  { id: 67, name: "Community Relief Center", type: "NGO", lat: 23.0225, lng: 72.5714 }, // Ahmedabad
  { id: 68, name: "Disaster Aid Camp", type: "Shelter", lat: 28.4595, lng: 77.0266 }, // Gurgaon
  { id: 69, name: "Flood Relief Hub", type: "NGO", lat: 10.8505, lng: 76.2711 }, // Thrissur
  { id: 70, name: "Medical Response Camp", type: "Hospital", lat: 18.5204, lng: 73.8567 }, // Pune
  { id: 71, name: "Urban Relief Shelter", type: "Shelter", lat: 13.0827, lng: 80.2707 }, // Chennai
  { id: 72, name: "Emergency Shelter Hub", type: "Shelter", lat: 19.0760, lng: 72.8777 }, // Mumbai
  { id: 73, name: "Cyclone Relief Shelter", type: "Shelter", lat: 22.5726, lng: 88.3639 }, // Kolkata
  { id: 74, name: "Flood Medical Unit", type: "Hospital", lat: 23.2599, lng: 77.4126 }, // Bhopal
  { id: 75, name: "Disaster Health Center", type: "Hospital", lat: 12.9716, lng: 77.5946 }, // Bangalore
  { id: 76, name: "Community Support Shelter", type: "Shelter", lat: 28.7041, lng: 77.1025 }, // New Delhi
  { id: 77, name: "NGO Medical Relief", type: "NGO", lat: 19.9975, lng: 73.7898 }, // Nashik
  { id: 78, name: "Cyclone Relief Center", type: "Shelter", lat: 15.3173, lng: 75.7139 }, // Hubli
  { id: 79, name: "Flood Protection Shelter", type: "Shelter", lat: 13.6288, lng: 79.4192 }, // Tirupati
  { id: 80, name: "Earthquake Evacuation Camp", type: "Shelter", lat: 23.3342, lng: 85.2960 }, // Ranchi
  { id: 81, name: "Medical Aid Hub", type: "Hospital", lat: 21.1458, lng: 79.0882 }, // Nagpur
  { id: 82, name: "Flood Assistance Center", type: "NGO", lat: 13.0827, lng: 80.2707 }, // Chennai
  { id: 83, name: "Cyclone Medical Support", type: "Hospital", lat: 22.2587, lng: 71.1924 }, // Gujarat
  { id: 84, name: "Disaster Relief Center", type: "Shelter", lat: 11.9416, lng: 79.8083 }, // Pondicherry
  { id: 85, name: "Flood Response Camp", type: "Shelter", lat: 22.9734, lng: 78.6569 }, // Bhopal
  { id: 86, name: "Community Health Shelter", type: "NGO", lat: 18.1124, lng: 79.0193 }, // Warangal
  { id: 87, name: "Cyclone Protection Shelter", type: "Shelter", lat: 15.8281, lng: 78.0373 }, // Kurnool
  { id: 88, name: "Earthquake Relief Hub", type: "NGO", lat: 19.2183, lng: 72.9781 }, // Thane
  { id: 89, name: "Medical Relief Station", type: "Hospital", lat: 25.5941, lng: 85.1376 }, // Patna
  { id: 90, name: "Flood Protection Camp", type: "Shelter", lat: 23.2599, lng: 77.4126 }, // Bhopal
  { id: 91, name: "Community Medical Center", type: "Hospital", lat: 24.5854, lng: 73.7125 }, // Udaipur
  { id: 92, name: "Cyclone Assistance Shelter", type: "Shelter", lat: 20.2961, lng: 85.8245 }, // Bhubaneswar
  { id: 93, name: "Disaster Response Shelter", type: "Shelter", lat: 26.9124, lng: 75.7873 }, // Jaipur
  { id: 94, name: "Flood Evacuation Hub", type: "NGO", lat: 28.6139, lng: 77.2090 }, // Delhi
  { id: 95, name: "Medical Support Center", type: "Hospital", lat: 13.0827, lng: 80.2707 }, // Chennai
  { id: 96, name: "Community Relief Shelter", type: "Shelter", lat: 28.4595, lng: 77.0266 }, // Gurgaon
  { id: 97, name: "Cyclone Medical Response", type: "Hospital", lat: 11.0168, lng: 76.9558 }, // Coimbatore
  { id: 98, name: "Disaster Assistance Hub", type: "Shelter", lat: 17.3850, lng: 78.4867 }, // Hyderabad
  { id: 99, name: "Flood Medical Shelter", type: "Hospital", lat: 16.5062, lng: 80.6480 }, // Vijayawada
  { id: 100, name: "Earthquake Response Camp", type: "Shelter", lat: 19.9975, lng: 73.7898 }, // Nashik
];
