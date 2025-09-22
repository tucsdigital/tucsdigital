import { generateOrganizationSchema, generateLocalBusinessSchema, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo'

interface StructuredDataProps {
  type: 'organization' | 'localBusiness' | 'service' | 'faq' | 'breadcrumb'
  data?: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let schema

  switch (type) {
    case 'organization':
      schema = generateOrganizationSchema()
      break
    case 'localBusiness':
      schema = generateLocalBusinessSchema()
      break
    case 'service':
      schema = generateServiceSchema(data)
      break
    case 'faq':
      schema = generateFAQSchema(data)
      break
    case 'breadcrumb':
      schema = generateBreadcrumbSchema(data)
      break
    default:
      return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
