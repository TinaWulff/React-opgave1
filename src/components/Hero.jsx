import illustration from '../assets/illustration.svg';
import './hero.scss';

import Button from './button';

export default function Hero() {

  return (
    <>
    <section className='hero'>
    <h1>Lessons and insights <br /> <span className='green'>from 8 years</span></h1>
    <p>Where to grow your business as a photographer: site or social media?</p>

    <Button>Register</Button>

    <img className='hero-illustration' src={illustration} alt="illustration" />
    </section>
    </>
  )
}