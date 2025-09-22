import { MetadataRoute } from 'next'
import { CATEGORIAS } from '../app/soluciones/CATEGORIAS'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tucsdigital.com'
  
  // Páginas estáticas principales
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/soluciones`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Páginas de soluciones dinámicas
  const solutionPages = CATEGORIAS.flatMap(categoria => 
    categoria.soluciones.map(solucion => ({
      url: `${baseUrl}/soluciones/${solucion.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  return [...staticPages, ...solutionPages]
}
