import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>Blog {`-JusticeHouse`}</title>
            </Helmet>
            <div>
                <h1 className='text-green-500 text-5xl font-bold text-center'>Blog</h1>
            </div>
            <div className='border-2 border-indigo-600 rounded-lg mx-5 mb-5 p-9'>
                <div className='pb-3 my-7'>
                    <h3 className='font-bold'>Q.1: What is the difference between SQL and NoSQL?</h3>
                    <p>Ans: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
                <div className='pb-3 my-7'>
                    <h3 className='font-bold'>Q.2: What is JWT, and how does it work ?</h3>
                    <p>Ans: What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                </div>
                <div className='pb-3 my-7'>
                    <h3 className='font-bold'>Q.3: What is the difference between javascript and NodeJS ?</h3>
                    <p>Ans: JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                </div>
                <div className='pb-3 my-7'>
                    <h3 className='font-bold'>Q.4: How does NodeJS handle multiple requests at the same time ?</h3>
                    <p>Ans: How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;