import React from 'react';
import Card from '../ui/Card';
import { motion } from 'framer-motion';
import { MessageSquareIcon } from '../ui/Icons';

const testimonials = [
    {
        name: "Dr. Priya Sharma",
        role: "Public Health Officer, Assam",
        content: "Wellness Wave has revolutionized how we monitor water quality in our region. The early warning system has helped us prevent several potential outbreaks.",
        avatar: "PS"
    },
    {
        name: "Rajesh Kumar",
        role: "ASHA Worker, Meghalaya",
        content: "The mobile reporting feature makes it so easy for us to submit water quality data from remote areas. The gamification aspect keeps us motivated.",
        avatar: "RK"
    },
    {
        name: "Dr. Anjali Patel",
        role: "Epidemiologist, National Institute of Health",
        content: "The AI predictions have proven remarkably accurate in our studies. This platform is a game-changer for public health surveillance.",
        avatar: "AP"
    }
];

const Testimonials: React.FC = () => {
    return (
        <div className="py-16">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                    Trusted by Health Professionals
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
                <p className="mt-6 text-base-content/80 max-w-3xl mx-auto text-lg">
                    Hear from those who are using Wellness Wave to make a difference in their communities.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full">
                            <div className="flex flex-col h-full">
                                <div className="mb-4 text-primary">
                                    <MessageSquareIcon className="h-8 w-8" />
                                </div>
                                <p className="text-base-content/80 mb-6 flex-grow">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center mt-auto pt-4 border-t border-base-200">
                                    <div className="bg-primary text-primary-content w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base-content">{testimonial.name}</h4>
                                        <p className="text-sm text-base-content/60">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;