import { Button } from '@/components/ui/button';
import { FlipWords } from '@/components/ui/flip-words';
import { Input } from '@/components/ui/input';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Sparkle } from 'lucide-react';
import Image from 'next/image';

import React from 'react';

const words = `🎥 Create AI Video Ads in Just one second`
const list : string[]  = ['instantly', 'effortlessly', 'seamlessly', 'quickly', 'easily', 'without editing skills!']
const CreateAd = () => {
  return (
    <div className='mt-32 flex flex-col items-center justify-center w-full'>
        <div>
 <Image 
  src="/adsAI.png" 
  alt="Icon" 
  width={280} 
  height={280} 
  className="border-0 shadow-none"
 />

</div>

      <h2 className='font-bold text-[30px] text-center '>
        <TextGenerateEffect words={words} />
         </h2>
      <p className='mt-3 text-[20px] text-gray-500 lg:text-[20px] md:text-[13px] sm:text-[11px]'>
        Turn your ideas into stunning, scroll-stopping videos - <FlipWords words={list} /></p>

        <Input placeholder='Enter the topic or product info' className={'w-lg text-lg mt-5'} />

        <Button className={'mt-5 flex justify-end'} ><Sparkle /> Generate</Button>
    </div>
  )
}

export default CreateAd
