import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Payment = () => {
  return (
    <div className='bg-gray-200 pb-10'>
        <div className='bg-[url("https://static.investindia.gov.in/s3fs-public/2024-01/Ensuring%20Responsible%20and%20Trustworthy%20AI%20for%20All.png")] bg-center p-20 absolute mt-26 top-0 w-full'>
            <h1 className='text-5xl text-white font-bold'>Smart AI Payment Tracker</h1>
        </div>

        <div className='p-10 flex gap-3 pt-60 rounded-2xl px-50'>
            <div>
                <h2 className='text-3xl font-medium my-4'>Overview</h2>
                <p>This is a full stack project with machine learing model. Our team created this project in hackthon. In our team tasked to create smart AI payment tracker which sends Notifiations to customer some days before the due date if in past customer delayed the payment. So when customer do any transactions, that data provided to machine learing model. If customer delays the payment in past than notification is sent to user when due date is soon. So customer pays the bill on time.</p>
                <div className='flex gap-3 m-14'>
                    <p>See Project:</p>
                    <a className='text-blue-500 flex items-center gap-3' href="https://smart-payment-tracker-frontend.vercel.app">https://smart-payment-tracker-frontend.vercel.app <FaExternalLinkAlt /></a>
                </div>
            </div>
            <img className='rounded-2xl shadow-2xl' width={500} src="/payment.png" />
        </div>

        <div className='p-10 rounded-2xl px-50'>
            <h2 className='text-3xl font-medium my-4'>Model Training</h2>
            <p>First i ask ChatGPT "it is possible to train a model in TensorflowJS?". ChatGPT says yes and describe how to train the model in TensorflowJS. So i started writing code according to ChatGPT with every single line i ask "why you do this?". It shows me path to how train model using <strong>Feed-Forward Neural Network(FNN/MLP)</strong>. It creates four layers. One input layer, 2 hidden layers and one output layer. In input layer we give input to the model. In first dense layer it get 2 inputs with 10 neurons and use ReLU activation function. this first dense layer learns patterns/relations between two input numbers. after second dense layer extract features from the first layer it uses same ReLU activation function with 5 neurons. And last output layer uses Sigmoid function for <strong>binary classification</strong>. Output layer shows 0 if customer will pay on time otherwise 1.</p>
            <div className='flex gap-3 m-14'>
                <p>See Code:</p>
                <a className='text-blue-500 flex items-center gap-3' href="https://github.com/Joshijay1917/payment-prediction-model">https://github.com/Joshijay1917/payment-prediction-model <FaExternalLinkAlt /></a>
            </div>
        </div>

        <div className='p-10 flex gap-5 rounded-2xl px-50'>
            <div className='w-1/2'>
                <h2 className='text-3xl font-medium my-4'>Problem & Solution</h2>
                <h2 className='font-medium py-2'>Problems:</h2>
                <ul className='list-disc pl-6'>
                    <li>For SMEs (Small-medium Enterprises) it is hard to <strong>manage and track customers payment</strong>.</li>
                    <li>If any customers late his/her payment in past so it is <strong>hard to send messages to each customers</strong> through Whatsapp/SMS/Email.</li>
                </ul>
                <h2 className='font-medium py-2'>Solution:</h2>
                <ul className='list-disc pl-6'>
                    <li>Thorugh the <strong>modern fresh and clean UI Dashboard</strong> it is easy to manage and track customers payment.</li>
                    <li>We can train a <strong>Machine learing model</strong> which find customers who late the payment in past and through APIs we can direcly send messages to customers.</li>
                </ul>
            </div>
            <img className='rounded-2xl shadow-2xl' width={500} src="/pands.png" />
        </div>
    </div>
  )
}

export default Payment