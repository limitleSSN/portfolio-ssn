
import { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      try {
        // Save message to Supabase with better error handling
        const { data, error: supabaseError } = await supabase
          .from('messages')
          .insert({
            name: formData.name,
            email: formData.email,
            message: formData.message
          });
          
        console.log("Supabase response:", data, supabaseError);
        
        if (supabaseError) {
          console.error("Supabase insertion error:", supabaseError);
          throw supabaseError;
        }
        
        // Email sending step using FormSubmit service
        try {
          const formSubmitEndpoint = "https://formsubmit.co/ajax/kunalvishwakarma208@gmail.com";
          
          const response = await fetch(formSubmitEndpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              message: formData.message,
              _subject: "New Contact Form Submission",
              _captcha: "false",
            }),
          });
          
          const responseData = await response.json();
          
          if (!response.ok) {
            console.error("Email submission error:", responseData);
            // Even if email fails, we already saved to database, so don't throw here
          } else {
            console.log("Email submission success:", responseData);
          }
        } catch (emailError) {
          console.error("Error sending email:", emailError);
          // Even if email fails, we've saved to database, so continue with success flow
        }
        
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        toast({
          title: "Message sent!",
          description: "Your message has been saved successfully. I'll get back to you soon!",
          variant: "default",
        });
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      } catch (error) {
        console.error("Error sending message:", error);
        toast({
          title: "Error",
          description: "Failed to send your message. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <motion.div 
      className="bg-gray-900/80 rounded-2xl p-6 border border-gray-800 h-full perspective-1000 transform-3d"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, rotate: 0 }}
    >
      <h3 className="text-2xl font-semibold mb-8 gradient-heading relative">
        Send Me a Message
        <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-kunalpink to-kunalblue"></span>
      </h3>

      {submitSuccess ? (
        <motion.div 
          className="bg-green-500/20 border border-green-500 rounded-lg p-4 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-green-400 mb-2">Message sent successfully!</p>
          <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-400 mb-2">
              Your Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#f54298" }}
              transition={{ duration: 0.2 }}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full bg-gray-800 border ${
                errors.name ? "border-red-500" : "border-gray-700"
              } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-kunalpink shadow-lg`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-400 mb-2">
              Email Address
            </label>
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#f54298" }}
              transition={{ duration: 0.2 }}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-gray-800 border ${
                errors.email ? "border-red-500" : "border-gray-700"
              } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-kunalpink shadow-lg`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-400 mb-2">
              Message
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.02, borderColor: "#f54298" }}
              transition={{ duration: 0.2 }}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full bg-gray-800 border ${
                errors.message ? "border-red-500" : "border-gray-700"
              } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-kunalpink resize-none shadow-lg`}
              placeholder="Enter your message"
            ></motion.textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-medium flex items-center justify-center transition-all ${
              isSubmitting
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-gradient-to-r from-kunalpink to-kunalblue hover:shadow-[0_0_20px_rgba(245,66,152,0.5)]"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <>
                <Send size={18} className="mr-2" />
                Send Message
              </>
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;
