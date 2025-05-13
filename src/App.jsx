import { useState } from 'react'

import MemberIcon from './assets/icons/memberIcon.svg';
import NationalIcon from './assets/icons/nationalIcon.png';
import groupsIcon from './assets/icons/groupsIcon.png';



import './App.css'
import Hero from './components/hero';
import Headline from './components/headline';
import CommunityCard from './components/CommunityCard';

export default function App() {


  return (
    <>
    <Hero />
    <section className='section__clients'>
    <Headline
    headline="Our Clients"
    text="We have been working with some Fortune 500+ clients"

     />
    </section>

   
    



    <section className='section__community'>
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
  
    </>
  )
}

