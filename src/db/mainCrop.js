
import { randomUUID } from 'expo-crypto';
import tomato from '../assets/images/tomato.png';
import Brinjal from '../assets/images/brinjal.png';
import Capsicum from '../assets/images/capsicum.png';
import Cucumber from '../assets/images/cucumber.png';
import Carrot from '../assets/images/carrot.png';
import Mango from '../assets/images/mango.png';
import Capsicum1 from '../assets/images/capsicum1.png';
import Mushrooms from '../assets/images/mushrooms.png';
import Radish from '../assets/images/radish.png';


export const mainCrop = [
  {id:randomUUID() , name:'Tomato', icon:tomato},
  {id:randomUUID() , name:'Brinjal', icon:Brinjal},
  {id:randomUUID() , name:'Capsicum', icon:Capsicum},
  {id:randomUUID() , name:'Cucumber', icon:Cucumber},
  {id:randomUUID() , name:'Carrot', icon:Carrot},
  {id:randomUUID() , name:'Mango', icon:Mango},
  {id:randomUUID() , name:'Capsicum', icon:Capsicum1},
  {id:randomUUID() , name:'Mushrooms', icon:Mushrooms},
  {id:randomUUID() , name:'Radish', icon:Radish},
];