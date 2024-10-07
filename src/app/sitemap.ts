import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://vishnu-prasad-korada.vercel.app',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        }, 
        {
            url: 'https://vishnu-prasad-korada.vercel.app/design',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        }
    ]
}