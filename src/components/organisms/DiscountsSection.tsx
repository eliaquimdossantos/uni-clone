import React from 'react'
import PageSection from '../templates/PageSection'
import ClientDiscounts from './ClientDiscounts'

export default function DiscountsSection() {
  return (
    <PageSection bgImageRounded="md" className="py-6" bgImage="/unimed-bg.webp">      
      <ClientDiscounts />
    </PageSection>
  )
}
