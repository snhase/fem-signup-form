import React from 'react'
import { Card } from './reusable-components/card.tsx'

export const SignupSuccess = () => {
    return (
        <Card>
            <div className='flex items-center justify-center'> 
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 stroke-[hsla(154,59%,51%,1)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            </span>
            <span className="text-center text-4xl capitalize m-4 text-[hsla(154,59%,51%,1)]"> Offer Claimed!</span>
            </div>
            <div className='m-8 text-lg'> Thanks for signing up! Your trial is valid for 7 days, thereafter you will be charged $20/month.
                <br/>
                <br/>
             We hope you have fun using our plaform. If you ever need support, please feel free to email us at support@loremcoding.com. </div>
        </Card>
    );
}

