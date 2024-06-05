"use client"

import Image from "next/image";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal/Reveal";

export function ControlBilling() {
  return (
    <div className="p-4 py-20 md:py-64">
        <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
            <MotionTransition  className="flex-1 p-6 md:p-8" >
                   <Image  src="/assets/control-business.png" alt="Control Business" width="580" height={411} className="w-full h-auto"/>
            </MotionTransition>
            <div className="flex-1 p-6 md:p-8">
                <Reveal>
                    <h2 className="text-5xl font-semibold">
                        Controla facilmente <br/>
                        tu facturacion
                    </h2>
                </Reveal>
                <Reveal>
                    <p className="max-w-md mt-10">
                        Con la tarjeta de credito adecuada, puede
                        finaciera generar credito, obteniendo recompenzas y 
                        ahorrando dinero. Pero cientos de tarjetas de credito en
                        el mercado
                    </p>
                </Reveal>
            </div>
        </div>
    </div>
  )
}
