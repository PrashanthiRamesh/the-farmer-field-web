import React from 'react'
import { Spotlight } from './ui/Spotlight'

function Welcome() {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="tff-harmony:warm-sand" />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vh]" fill="tff-harmony:soft-sage" />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="tff-harmony:forest-teal" />
            </div>
            <div className="h-screen w-full dark:bg-tff-harmony-forest-teal bg-tff-harmony-soft-linen  dark:bg-grid-tff-harmony-soft-linen/[0.3] bg-grid-tff-harmony-soft-sage/[0.2] relative flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-tff-harmony-forest-teal bg-tff-harmony-soft-linen [mask-image:radial-gradient(ellipse_at_center,transparent_1%,#A8BBA5)]" />
            </div>
        </div>
    )
}

export default Welcome