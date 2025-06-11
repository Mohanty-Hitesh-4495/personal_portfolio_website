import React, { useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
        duration: 5000,
      });
      formRef.current.reset();
    })
    .catch((error) => {
      toast({
        title: "Oops! Something went wrong.",
        description: error.text,
        duration: 5000,
      });
    });
  };

  return (
    <div className="section-transition max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-portfolio-dark mb-2">Contact</h2>
        <div className="w-24 h-1 bg-portfolio-primary mx-auto"></div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/** Contact Cards */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-portfolio-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="text-portfolio-primary w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-portfolio-dark mb-2">Phone</h3>
          <a href="tel:+917205374495" className="block text-portfolio-text-light break-all hover:text-portfolio-primary transition-colors duration-200">+91 7205374495</a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-portfolio-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="text-portfolio-primary w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-portfolio-dark mb-2">Email</h3>
          <a href="mailto:mohantyhitesh4495@gmail.com" className="block text-portfolio-text-light break-words hover:text-portfolio-primary transition-colors duration-200">
            mohantyhitesh4495@gmail.com
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
          <div className="w-12 h-12 bg-portfolio-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="text-portfolio-primary w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-portfolio-dark mb-2">Location</h3>
          <p className="text-portfolio-text-light">Bhubaneswar, Odisha, India</p>
        </div>
      </section>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-portfolio-dark mb-6 text-center">Get In Touch</h3>

        <form onSubmit={handleSubmit} ref={formRef} className="contact-form space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-portfolio-text-dark mb-1">Name</label>
              <input 
                type="text" id="name" name="from_name" required
                className="form-input w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-portfolio-primary"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-portfolio-text-dark mb-1">Email</label>
              <input 
                type="email" id="email" name="from_email" required
                className="form-input w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-portfolio-primary"
                placeholder="Your Email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-portfolio-text-dark mb-1">Subject</label>
            <input 
              type="text" id="subject" name="subject" required
              className="form-input w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-portfolio-primary"
              placeholder="Subject"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-portfolio-text-dark mb-1">Message</label>
            <textarea 
              id="message" name="message" rows={5} required
              className="form-input w-full border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-portfolio-primary"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className="text-center">
            <button 
              type="submit"
              className="inline-flex items-center justify-center bg-portfolio-primary text-white px-6 py-3 rounded-md hover:bg-portfolio-primary/90 transition-colors">
              <span>Send Message</span>
              <Send className="ml-2 w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
