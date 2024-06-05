"use client"
import 'swiper/css';
import 'swiper/css/effect-cards';
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { Reveal } from "../Reveal/Reveal";
import { MotionTransition } from '../MotionTransition';

export function ChooseYourCards() {
  return (
    <div className="relative px-6 py-20 md:p7y-64" id="tarjetas">
      <BackgroundRadialRight />
      <div className="block max-5xl mx-auto md:grid md:grid-cols-2">
        <Reveal>
          <h2 className="text-5xl font-semibold mb-4">Elige la tarjeta que mas
            <span className="block degradedBlue bg-blueLight">se adapta a tus necesidades</span>
          </h2>
        </Reveal>
        <div className="max-w-auto">
          <MotionTransition>
         <img src='assets/card-1.png'/>
          </MotionTransition>
        </div>
      </div>
    </div>
  )
}
