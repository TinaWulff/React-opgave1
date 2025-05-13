import { useState } from 'react'

//ICONS
import MemberIcon from './assets/icons/memberIcon.svg';
import NationalIcon from './assets/icons/nationalIcon.png';
import groupsIcon from './assets/icons/groupsIcon.png';

//LOGOS
import logo1 from './assets/logos/logo1.png';
import logo2 from './assets/logos/logo2.png';
import logo3 from './assets/logos/logo3.png';
import logo4 from './assets/logos/logo4.png';
import logo5 from './assets/logos/logo5.png';
import logo6 from './assets/logos/logo6.png';

//ILLUSTRATIONS
import IllustrationRafiki from './assets/rafiki.svg';
import IllustrationPana from './assets/pana.svg';

import './App.css'
import Hero from './components/hero';
import Headline from './components/headline';
import CommunityCard from './components/CommunityCard';
import IconLink from './components/IconLink';
import Button from './components/button';

export default function App() {


  return (
    <>
    <Hero />

    <section className='section__clients'>
      <Headline
      headline="Our Clients"
      text="We have been working with some Fortune 500+ clients"
      />
       <div>
      <IconLink link="#" icon={logo1}/>
      <IconLink link="#" icon={logo2}/>
      <IconLink link="#" icon={logo3}/>
      <IconLink link="#" icon={logo4}/>
      <IconLink link="#" icon={logo5}/>
      <IconLink link="#" icon={logo6}/>
      <IconLink link="#" icon={logo3}/>
      </div>
    </section>

    <section className='section__communityCards'>
      <Headline
      headline="Manage your entire community in a single system"
      text="Who is Nextcent suitable for?"
      />

      <CommunityCard
      image={MemberIcon}
      headline="Membership Organisations"
      text="Our membership management software provides full automation of membership renewals and payments"
      >
      // eventuelle children
      </CommunityCard>

      <CommunityCard
      image={NationalIcon}
      headline="National Associations"
      text="Our membership management software provides full automation of membership renewals and payments"
      >
      </CommunityCard>

      <CommunityCard
      image= {groupsIcon}
      headline="Clubs And Groups"
      text="Our membership management software provides full automation of membership renewals and payments"
      >
      </CommunityCard>
    </section>

    <section className='section__Artikel'>
      <CommunityCard
      image={IllustrationRafiki}
      headline="The unseen of spending three years at Pixelgrade"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.
      Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta.
      Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
      Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
      >
      </CommunityCard>
      <Button>Learn More</Button>
    </section>

    <section className='section__helping'>
      <Headline
      headline= "Helping a local "
      text="We reached here with our hard work and dedication"
      >
        business reinvent itself
      </Headline>

      <div>
        ikoner og tal(componenter)
      </div>
    </section>


     <section className='section__Artikel'>
      <CommunityCard
      image={IllustrationPana}
      headline="How to design your site footer like we did"
      text="Donec a eros justo. Fusce egestas tristique ultrices.
      Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu,
      at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
      In hac habitasse platea dictumst. Vivamus vehicula leo dui,
      at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies,
      non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa.
      Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
      Donec consectetur faucibus ipsum id gravida."
      >
      </CommunityCard>
      <Button>Learn More</Button>
    </section>

    <section className='section__product-gallery'>
    
    </section>
  
    </>
  )
}

