import React from 'react';
import { Redirect } from 'expo-router';

export default function index() {
  return <Redirect href={'/(drawer)/(tab)/webinar/'} />;
  // return <Redirect href={'/(drawer)/(tab)/farm/farms'} />;
}