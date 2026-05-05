import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Payment = () => {
    return (
        <div className='bg-slate-50 min-h-screen pb-20 text-slate-800'>
            {/* Hero Section */}
            <div className='relative h-[350px] md:h-[450px] w-full flex items-center justify-center overflow-hidden'>
                <Image
                    src="/aibg.png"
                    alt="AI Tracker Background"
                    fill
                    priority
                    className="object-cover object-center brightness-50"
                />
                <h1 className='text-3xl md:text-5xl text-white font-extrabold relative z-10 text-center px-4 tracking-tight'>
                    Smart AI Payment Tracker
                </h1>
            </div>

            <div className='max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-24'>

                {/* Overview Section */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-3xl md:text-4xl font-bold text-slate-900'>Overview</h2>
                        <p className='text-slate-600 text-sm md:text-base leading-relaxed'>
                            This is a full-stack project with a machine learning model. Our team created this project in a hackathon. We were tasked with creating a smart AI payment tracker that sends notifications to customers before the due date if they have delayed payments in the past. When a customer makes a transaction, the data is processed by the machine learning model to predict if the payment will be delayed, prompting an automated notification to ensure timely payment.
                        </p>

                        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2 p-5 bg-white border border-slate-100 rounded-xl shadow-sm'>
                            <span className='font-semibold text-slate-900'>See Project:</span>
                            <a
                                className='text-blue-600 font-medium flex items-center gap-3 hover:underline break-all text-sm md:text-base'
                                href="https://smart-payment-tracker-frontend.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://smart-payment-tracker-frontend.vercel.app <FaExternalLinkAlt className="text-xs" />
                            </a>
                        </div>
                    </div>

                    <div className="relative h-[280px] md:h-[340px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                        <Image
                            className='object-cover'
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            src="/payment.png"
                            alt="Payment Prediction"
                        />
                    </div>
                </div>

                {/* Model Training Section */}
                <div className='bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-sm'>
                    <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center md:text-left'>
                        Model Training
                    </h2>
                    <p className='text-slate-600 text-sm md:text-base leading-relaxed max-w-5xl mx-auto md:mx-0'>
                        I explored training a model in TensorFlow.js. By querying ChatGPT for guidance on the training process, I built a <strong>Feed-Forward Neural Network (FNN/MLP)</strong>. The architecture features four layers: an input layer, two hidden layers, and an output layer. The first dense layer takes 2 inputs with 10 neurons and uses the ReLU activation function to learn patterns and relationships. The second dense layer extracts features using ReLU with 5 neurons. The final output layer uses the Sigmoid function for <strong>binary classification</strong>, outputting 0 for on-time payment or 1 for a predicted delay.
                    </p>

                    <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10 p-5 bg-slate-50 border border-slate-100 rounded-xl max-w-3xl'>
                        <span className='font-semibold text-slate-900'>See Code:</span>
                        <a
                            className='text-blue-600 font-medium flex items-center gap-3 hover:underline break-all text-sm md:text-base'
                            href="https://github.com/Joshijay1917/payment-prediction-model"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://github.com/Joshijay1917/payment-prediction-model <FaExternalLinkAlt className="text-xs" />
                        </a>
                    </div>
                </div>

                {/* Problem & Solution Section */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-3xl md:text-4xl font-bold text-slate-900'>Problem & Solution</h2>
                        <p className='text-slate-600 text-sm md:text-base leading-relaxed'>
                            In this system, there are two core issues faced by small-to-medium enterprises:
                        </p>

                        <div className="flex flex-col gap-5">
                            <div>
                                <h3 className='font-bold text-red-600 text-base mb-1'>Problems:</h3>
                                <ul className='list-disc pl-6 text-slate-600 text-sm md:text-base space-y-2'>
                                    <li>For SMEs, it is difficult to manage and track customer payments manually.</li>
                                    <li>It is time-consuming to send reminder messages to each customer individually through WhatsApp, SMS, or Email.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className='font-bold text-green-600 text-base mb-1'>Solution:</h3>
                                <ul className='list-disc pl-6 text-slate-600 text-sm md:text-base space-y-2'>
                                    <li>A modern, clean, and intuitive dashboard makes it easy to track and manage customer payments.</li>
                                    <li>A machine learning model identifies customers likely to delay payments, and APIs automate the notification process.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[280px] md:h-[340px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                        <Image
                            className='object-cover'
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            src="/pands.png"
                            alt="Problem and Solution"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Payment;