import * as firebase from 'firebase';


  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database=firebase.database();

  export {firebase,database as default};

//   database.ref('expenses').set(null);

//   database.ref('expenses').push({
//       description:'Item 1',
//       note:'',
//       amount:'',
//       createdAt:''
// }
//   )

// database.ref('expenses').on('child_changed',(snapshot)=>{
// console.log(snapshot.key,snapshot.val());
// })

// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// })

//   database.ref('expenses').push({
//       description:'Item 9',
//       note:'',
//       amount:'',
//       createdAt:''
// }
//   )
// database.ref('expenses').on('value',(snapshot)=>{
//     const expenses=[];
// snapshot.forEach((childSnapsot)=>{

   
//     expenses.push({
//         id:childSnapsot.key,
//         ...childSnapsot.val()
//     });

// });
// console.log(expenses);
// })

//   database.ref().set({
//       name:'Bilal Iqbal',
//       age:25,
//       stressLevel:6,
//       job:{
//           title:'Software-Developer',
//           company:'Google'
//       },
     
//       location:{
//           city:'Lahore',
//           country:'Pakistan'
//       }
//   }).then(()=>{
//     console.log('Data is saved!')
//   }).catch((e)=>{
//     console.log('This failed.',e)
//   });

//   database.ref('age').set(25.5);

//   database.ref('location/city').set('New York');

//   database.ref('attributes').set({
//       height:180,
//       weight:67
//   }).then(()=>{
//       console.log('Then is running');
//   }).catch((e)=>{
//     console.log('This failed',e)
//   })

//database.ref().child('isSingle').remove();
// database.ref().update({
//     stressLevel:9,
//     'job/company':'Amazon',
//     'location/city':'Seattle'
// });

// const onValueChange=database.ref().on('value',(snapshot)=>{
// const data=snapshot.val();
// console.log(data.name+' is a '+data.job.title+' at '+data.job.company);

// },(e)=>{
//     console.log("Error in fetching data",e)

// });

// setTimeout(()=>{
// database.ref('name').set('Mr Bilal')
// },3000);

// setTimeout(()=>{
// database.ref().off('value',onValueChange);
// },3000);

// setTimeout(()=>{
// database.ref('name').set('Mr B')
// },3000);



