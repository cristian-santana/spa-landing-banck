"use client"

import React from 'react'
import { BackgroundRadialLeft } from '../BackgroundRadialLeft'
import { Reveal } from '../Reveal/Reveal'
import Link from 'next/link'
import { dataFeaturesBusiness } from './BestBusiness.data'
import Image from 'next/image'

export function BestBusiness() {
  return (
    <div className='relative px-6 py-20 md:py-64' id='features'>
      <BackgroundRadialLeft />
      <div className='grid max-w-5xl mx-auto md:grid-cols-2'>
        <div>
            <Reveal>
                <h2 className='text-5xl font-semibold'>
                    <span className='block degradedBlue bg-blueLight'>Tu haces el negocio</span>
                    nosotros manejamos <br />
                    el dinero
                </h2>
            </Reveal>
            <Reveal>
                <p className='max-w-md mt-10'>Con la tarjeta de credito adecuada, puede mejorar su vida financiera generando crèdito, obteniendo recompenzas y ahorrando dinero. Pero con cientos de tarjetas en el mercado.</p>
                <Reveal>
                    <div className="my-8">
                        <Link href="#clients" className="px-4 py-3 rounded-md bg-blueRadial">
                            Elige tu plan
                        </Link>
                    </div>
                </Reveal>
            </Reveal>
        </div>
         <div className="grid items-center py-5 md:p-8">
            {dataFeaturesBusiness.map(({id, icon, title, description}) =>(
                <Reveal key={id}>
                    <div className="rid grid-flow-col gap-105 px-4 py2 rouded-3xl group hover:bg-radialBlack">
                        <Image src={`/assets/${icon}.png`} alt={title} width={40} height={40}/>
                        <div>
                            <h4 className="text-primary">{title}</h4>
                            <p className='text-primaryDarck'>{description}</p>
                        </div>
                    </div>
                </Reveal>
            ))}
         </div>
      </div>
    </div>
  )
}
