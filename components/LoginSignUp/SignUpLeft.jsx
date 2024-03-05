import { GreenTick } from '@/utils/svg_icons'
import React from 'react'

const freePlan = [
    { id: 1, title: 'Up to 5 free users', },
    { id: 2, title: '1 GB of free storage', },
    { id: 3, title: 'Generate up to 5 tickets a month with AI', },
    { id: 4, title: '1 Projectspace', },
    { id: 5, title: '1000 Free tokens to chat with our smart AI', },
]

const SignUpLeft = () => {
  return (
    <>
        <h1 className='font-bold text-6xl text-center md:text-start'>Make work easier <br />with Genbai</h1>
        <p className="font-semibold text-3xl mt-8">Our free plan gets you:</p>
        {freePlan?.map(plan => (
            <div key={plan.id} className='flex items-center gap-2 mt-3'>
                <GreenTick />
                <p className='font-semibold'>{plan.title}</p>
            </div>
        ))}
    </>
  )
}

export default SignUpLeft
