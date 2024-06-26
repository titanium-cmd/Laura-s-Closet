"use client";

import React from 'react';
import Header from "../components/header";
import PromotionalBanner from '../components/promotional-banner';
import Section from '../components/section';

const StorePage: React.FC = () => {
  return (
    <>
      <Header />
      <br />
      <main>
        <Section>
          <PromotionalBanner readMoreLink='erererer' type={'1'} message={'Slash Sales begins in April. Get up to 80% Discount on all products'} title={'Ladies Top'} />
        </Section>
      </main>
    </>
  )
}

export default StorePage
