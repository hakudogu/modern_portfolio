import React, { Component } from 'react'
import './letter.css'
import img1 from './sunflower.png'
import img2 from './sttherese.png'
import { Link } from 'react-router-dom'
export class Letter extends Component {
  render() {
    return (
    
      <div className='relative'>
        <img className=' opacity-60 absolute'src={img1} alt='sunflower'/>
        <div className='letter justify-center flex mx-auto w-1/2 sm:4/5'>

        <h1  className='text-black mx-auto  font-semibold container text-2xl '>
       <h1 className='font-semibold  py-6'>
        Dear Isay,
        </h1> 
        <br/>
        
<p className='text-black z-10'>
  
Hi Koy, Kumusta ka? I hope you are doing well 
and that you&apos;re happy. Me? I am doing fine as well.
 Our time in the past has no question one of the best times
  of my life and I thank you for it. I regret nothing, 
     we did our best shots, limited and fragile as we were.
     <br/>
</p>
     <p>

      Now that we have decided to walk on separate paths, 
      to be honest I still got a fight in me, I want to part with you leaving
      these words, I love you! If I am being honest, kung magkakabalikan
      tayo kapag nagmakaawa ako sayo gagawin ko, ganon kaimportante sakin ang pinagsamahan natin,
      but on the other hand I know you have shouldered too much responsibilities
      including convincing me that we made the right decision to be LDR in the first place,
      something that I have not been able to wrap my head around because I am too busy
      thinking about myself. Ganon paman, ayaw kitang pilitin sa kahit na ano, Kung
      dumating man ang panahon na magkaroon ka ng ibang mamahalin, I will stop 
      from carrying you in my mind and in my heart, I will never disturb you again.
      Pero kung sakali man na dumating ang time na I know I am deserving of your love,
      kaya ko ng mag provide para sa future, stable career, na alam ko na at ginagawa 
      ang dapat kong ginagawa, sana ay hindi ako mahuli pag dumating ang panahon na iyon,
      hahanapin at pupuntahan kita kahit nasan ka, mamahalin kita ng buong buo,
       at hindi ko na hahayaang maging anxious ka at mahirapan kang mag isip.
     </p>
      <br/> 
      Peace out koy! thanks.
       <p className=''>
        </p>
      yours,
      Carlo
      {/* I urge you (as I urge myself) to keep the important 
      lessons we learned, I know you will be at a better 
      place because I know you constantly seek a better
      place and a better self. As for myself, I will strive
      to be best at the endeavors that I chose to do. 
      I will seek a better place for me as well always, 
      a better coming to terms with myself, a better path 
      of life. I will always strive to become a better man.
      There is nothing stopping me from achieving my dreams. 
      The past me and my present self still has a place for
      you in my heart, there is no question about that, in 
      the future when the time comes that we meet again, I 
      still want to be able to speak to you, as a friend who
      did not see you for a long time, when I meet you we
    might have our lives sorted */}

        </h1>
    </div>
    <Link to='/prayer'>
      <img className='w-12'src={img2} alt='st therese pray for us'/>
    </Link>
         </div>
    )
  }
}

export default Letter