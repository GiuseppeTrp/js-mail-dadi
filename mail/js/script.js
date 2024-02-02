const userEmail = 'sam@gimail.com';

const emailArray = [
    'alice@gimail.com',
    'bob@gimail.com',
    'charlie@gimail.com',
    'david@gimail.com',
    'emma@gimail.com',
    'frank@gimail.com',
    'grace@gimail.com',
    'henry@gimail.com',
    'isabel@gimail.com',
    'jack@gimail.com',
    'kate@gimail.com',
    'leo@gimail.com',
    'maya@gimail.com',
    'nathan@gimail.com',
    'olivia@gimail.com',
    'peter@gimail.com',
    'quinn@gimail.com',
    'rachel@gimail.com',
    'sam@gimail.com',
    'tara@gimail.com',
    'ulysses@gimail.com',
    'violet@gimail.com',
    'winston@gimail.com',
    'xena@gimail.com',
    'yuri@gimail.com',
    'zara@gimail.com',
    'adam@gimail.com',
    'bella@gimail.com',
    'carter@gimail.com',
    'daisy@gimail.com',
    'elijah@gimail.com',
    'fiona@gimail.com',
    'gavin@gimail.com',
    'hannah@gimail.com',
    'ian@gimail.com',
    'jenna@gimail.com',
    'kevin@gimail.com',
    'lily@gimail.com',
    'mason@gimail.com',
    'nora@gimail.com',
    'oliver@gimail.com',
    'pam@gimail.com'
  ];
  

let mailFound;

for(let i = 0; i < emailArray.length; i++){
     if(emailArray[i] == userEmail){
         mailFound = true;
         document.getElementById("result").innerHTML =  "la tua mail è presente nel database!"
     }

    
    
}

