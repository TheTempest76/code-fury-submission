'use client'
import Link from 'next/link'
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    
    <div className="text-center relative">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-zinc-400">Welcome to Relief Compass</h1>
        <p className="text-xl mb-8 text-zinc-400">Stay informed, find help, and make a difference.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/news" className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:bg-blue-600 transition">
            <h2 className="text-2xl font-semibold mb-2">Latest News</h2>
            <p>Stay updated on current disasters and relief efforts.</p>
          </Link>
          <Link href="/map" className="bg-green-500 text-white p-6 rounded-lg shadow-md hover:bg-green-600 transition">
            <h2 className="text-2xl font-semibold mb-2">Emergency Services</h2>
            <p>Find nearby NGOs, hospitals, and shelters.</p>
          </Link>
          <Link href="/volunteer" className="bg-yellow-500 text-white p-6 rounded-lg shadow-md hover:bg-yellow-600 transition">
            <h2 className="text-2xl font-semibold mb-2">Volunteer</h2>
            <p>Sign up to help those in need.</p>
          </Link>
          <Link href="/guide" className="bg-red-500 text-white p-6 rounded-lg shadow-md hover:bg-red-600 transition">
            <h2 className="text-2xl font-semibold mb-2">Guides</h2>
            <p>Learn how to volunteer and prepare for disasters.</p>
          </Link>
        </div>
        <div className="mt-6 flex justify-center">
          <Link href="/disaster_prediction" className="bg-yellow-500 text-white p-6 rounded-lg shadow-md hover:bg-yellow-600 transition">
            <h2 className="text-2xl font-semibold mb-2">Identify risky areas</h2>
            <p>find out the risk level of an area for the next month using forecast data</p>
          </Link>
        </div>
      </div>
      <div>
        <CarouselD />
      </div>
      
      {/* Floating arrow button */}
      <button 
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition"
        onClick={() => setIsChatbotOpen(!isChatbotOpen)}
      >
        {isChatbotOpen ? '▼' : '▲'}
      </button>

      {/* Chatbot iframe */}
      {isChatbotOpen && (
        <div className="fixed bottom-16 right-4 w-96 h-96 bg-white shadow-lg rounded-lg overflow-hidden">
          <iframe 
            src="https://chat-flask-app-xnxbb73wka-uc.a.run.app/" 
            className="w-full h-full border-none"
            title="Chatbot"
          />
        </div>
      )}
    </div>
  )
}


export function CarouselD() {
  const pics = ['/carouselImages/im1.jpg', '/carouselImages/im2.jpeg', '/carouselImages/im3.webp', '/carouselImages/i4.webp', '/carouselImages/i5.jpg', '/carouselImages/i6.webp' , '/carouselImages/i6.jpg'];

  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <h2 className="text-3xl font-bold text-zinc-400 mb-6">Be a Beacon of Hope</h2>
      <p className="text-lg text-zinc-500 mb-6">Explore the world of relief efforts and discover how you can make a difference.</p>
      <Carousel
        opts={{
          align: "center",
          loop: true,
          autoplay: true,
        }}
        className="w-full max-w-4xl"
      >
        <CarouselContent className="flex">
          {pics.map((pic, index) => (
            <CarouselItem key={index} className="flex-1">
              <div className="p-1">
                <Card className="rounded-lg shadow-lg overflow-hidden bg-white">
                  <CardContent className="flex items-center justify-center p-1">
                    <img
                      src={pic}
                      alt={`Carousel image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition" />
      </Carousel>
    </div>
  );
}
