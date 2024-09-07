import React,{useEffect,useState} from 'react';

export default function FAQ(){
    const [faqs,setFaqs] = useState([]);

    useEffect(()=>  
    {
        fetch('http://localhost:5000/api/faqs')
        .then(response=>response.json())
        .then(data=>setFaqs(data))
        .catch(error=> console.error('Error fetching data:',error));
    },
[]);

return (
    <div>
        <h1>Welcome to QuestBot</h1>
        <h3>Learn MERN</h3>
        <ul>
            {faqs.map((faq,index) =>(
              
             <p>{faq.question}</p>

               
            ))}
        </ul>
    </div>
);
}
