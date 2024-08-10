'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export default function NewsPage() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://api.reliefweb.int/v1/reports', {
          params: {
            appname: 'your_app_name',
            'filter[field]': 'country.name',
            'filter[value]': 'India',
            'sort[]': 'date:desc',
            limit: 20
          }
        })

        // Fetch additional details (description and image) for each news item
        const enrichedNews = await Promise.all(
          response.data.data.map(async (item) => {
            const details = await fetchMoreNews(item.href);
            return {
              ...item,
              description: details.description,
              thumbnail: details.thumbnail,
              source_link : details.source_link
            };
          })
        );

        setNews(enrichedNews)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching news:', error)
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  const fetchMoreNews = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data.data[0];  // Assuming the first item in the data array is what we want
      return {
        description: data.fields.body ? data.fields.body.substring(0, 100) + '...' : 'Description not available',
        thumbnail: data.fields.file && data.fields.file.length > 0 ? data.fields.file[0].preview.url : '',
        source_link : data.fields.url 
      };
    } catch (error) {
      console.error('Error fetching more news:', error);
      return {
        description: 'Description not available',
        thumbnail: ''
      };
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="flex justify-center text-3xl font-bold mb-8 text-white">Latest News from South Asia</h1>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full mt-2" />
                <Skeleton className="h-4 w-2/3 mt-2" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-8 w-24" />
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((item) => (
            <Card 
              key={item.id} 
              className="transition transform hover:scale-105 hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle>{item.fields.title}</CardTitle>
                <CardDescription>
                
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={item.source_link} target="" rel="noopener noreferrer">Read More</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
