
import { Link, Slot} from 'expo-router'
import React from 'react'

export default function () {
  return <>
            <header>
            <Link href="/(tab)/(one)/one">One</Link>
            <Link href="/(tab)/(two)/tow">Two</Link>
            </header>
            <Slot/>
         </>
}
