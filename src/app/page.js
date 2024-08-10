import Link from 'next/link'
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8 text-zinc-400">Welcome to the Disaster Relief </h1>
      <p className="text-xl mb-8 text-zinc-400" >Stay informed, find help, and make a difference.</p>
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
        <Link href="/guides" className="bg-red-500 text-white p-6 rounded-lg shadow-md hover:bg-red-600 transition">
          <h2 className="text-2xl font-semibold mb-2">Guides</h2>
          <p>Learn how to volunteer and prepare for disasters.</p>
        </Link>
      </div>
      
    </div>
  )
}

export function CarouselD() {
  const pics = ['']
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
