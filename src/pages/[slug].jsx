import PageBanner from '@/components/page-banner/pageBanner'
import React from 'react'
import { QCaseStudies, QCaseStudySingle } from '../../sanity/lib/query'
import { client } from '../../sanity/lib/client'
import Image from 'next/image'
import BlockContent from "@sanity/block-content-to-react";

const CaseStudiesSlug = ({ caseStudiesRes }) => {
  return (
    <>
      <PageBanner title={caseStudiesRes.title} />
      <div className='p-3'>
        <figure className='overflow-hidden flex justify-center -mt-20 mb-4'>
          <Image src={caseStudiesRes.image.asset.url} width={1000} height={800} alt={caseStudiesRes.title} className='scale-y-[1.2]  max-w-[1000px] mx-auto' />
        </figure>
      </div>
      <div className='max-w-[1000px] mx-auto px-3 mb-20 md:px-0 _contnet'>
        <BlockContent blocks={caseStudiesRes?.content} />
      </div>
    </>
  )
}

export default CaseStudiesSlug



export async function getServerSideProps(context) {
  const { params } = context
  const caseStudiesRes = await client.fetch(QCaseStudySingle, { slug: params.slug });
  return {
    props: {
      caseStudiesRes,
      preview: true
    }
  };
}