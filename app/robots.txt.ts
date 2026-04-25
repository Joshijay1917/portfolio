import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // If you ever add an admin or private folder
        },
        sitemap: 'https://portfolio-jay-tau.vercel.app/sitemap.xml',
    }
}