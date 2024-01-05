import { View } from 'react-native';
import React from 'react';
import { Button, H3, H4 } from '@components';
import { addDoc,collection, getDocs ,deleteDoc,doc, setDoc} from 'firebase/firestore';
import { database, fireStore } from 'src/config/firebase';
import { ref, set,child, get,remove } from 'firebase/database';
import { collectionName } from 'src/constants/firebase';

export default function Firebase() {

  // handle firebase fire store 
  // add data to firebase
  const addDataFirebase = async ()=>{
    try {
      const docRef = await addDoc(collection(fireStore, collectionName.USER), {
        age: '12',
        id: '2341324',
        name: 'jamal'
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  // read data to firebase
  const readDataFirebase = async()=>{
    const querySnapshot = await getDocs(collection(fireStore, collectionName.USER));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  };

  // delete doc to firebase
  const deleteData = async () =>{
    try {
      const result= await deleteDoc(doc(fireStore, collectionName.USER,'lwGZOOLG3n1rro70UqDb'));
      console.log(result);
    } catch (error) {
      console.log(error); 
    }
  };


  // update doc to firebase 
  const updateData = async ()=>{
    try {
      await setDoc(doc(fireStore, collectionName.USER, 'ZfECyKi2HTZb4q7yobzt'), {
        name: 'Los Angeles',
        state: 'CA',
        country: 'USA'
      });
    } catch (error) {
      console.log(error);
    }
    
  };



  // firebase realtime database 
  //add data
  const addDataRealtime = async () => {
    try {
      await set(ref( database, `${collectionName.USER}/3`),{
        name:'rejaul',
        age:'120',
      });
    } catch (error) {
      console.log(error);
    }
   
  };

  // read data from realtime database 
  const readDataRealtime = () => {
    get(child(ref(database), `${collectionName.USER}/2`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log('No data available');
      }
    }).catch((error) => {
      console.error(error);
    });
  };

  // update data to realtime database
  const updateDataRealtime = () => {
    set(ref(database, `${collectionName.USER}/1`), {
      age:'123213214',
      name:'kamal'
    })
      .then(() => {
        console.log('Data saved successfully!');
   
      })
      .catch((error) => {
        console.log(error);

      });
  };

  // delete data to realtime database
  const deleteDataRealtime = async () => {
    try {
      const result = await remove(ref(database,`${collectionName.USER}/1` ));
      console.log(result);
    } catch (error) {
      console.log(error);
    }

  };







  return (
    <View>
      <H3 className='text-center'> Handle Firebase FireStore </H3> 
      <H4 className='text-center'> Add data fire Store </H4> 
      <Button onPress={addDataFirebase} text='Add Data' className='mb-6' />

      <H4 className='text-center'> Read data fire Store </H4> 
      <Button onPress={readDataFirebase} text='Read Data' className='mb-6' />

      <H4 className='text-center'> Delete data fire Store </H4> 
      <Button onPress={deleteData} text='Delete Data' className='mb-6' />

      <H4 className='text-center'> Update data fire Store </H4> 
      <Button onPress={updateData} text='Update Data' className='mb-6' />

      <H3 className='text-center'> Handle Firebase Realtime database </H3> 
      <H4 className='text-center'> Add data realtime database  </H4> 
      <Button onPress={addDataRealtime} text='Add Data' className='mb-6' />

      <H4 className='text-center'> Read data realtime database  </H4> 
      <Button onPress={readDataRealtime} text='Read Data' className='mb-6' />

      <H4 className='text-center'> Update data realtime database  </H4> 
      <Button onPress={updateDataRealtime} text='Update Data' className='mb-6' />

      <H4 className='text-center'> delete data realtime database  </H4> 
      <Button onPress={deleteDataRealtime} text='Delete Data' className='mb-6' />

    </View>
  );
}
