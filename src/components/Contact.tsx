import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      }, 1500);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-kunalpink" size={20} />,
      label: "Email",
      value: "kunalvishwakarma208@gmail.com",
      link: "mailto:kunalvishwakarma208@gmail.com",
    },
    {
      icon: <Phone className="text-kunalblue" size={20} />,
      label: "Phone",
      value: "+91 7985177849",
      link: "tel:+917985177849",
    },
    {
      icon: <Github className="text-kunalpink" size={20} />,
      label: "GitHub",
      value: "github.com/dashboard",
      link: "https://github.com/dashboard",
    },
    {
      icon: <Linkedin className="text-kunalblue" size={20} />,
      label: "LinkedIn",
      value: "Kunal Vishwakarma",
      link: "https://www.linkedin.com/in/kunal-vishwakarma-975b26326",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-kunalblack"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-heading">Connect</span> With Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-gray-900/80 rounded-2xl p-6 border border-gray-800 h-full">
                <h3 className="text-2xl font-semibold mb-8 gradient-heading">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div
                      key={item.label}
                      className={`flex items-start transition-all ${
                        isVisible ? "animate-fade-in" : "opacity-0"
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="mr-4 bg-gray-800 p-3 rounded-lg">{item.icon}</div>
                      <div>
                        <h4 className="text-gray-400 mb-1">{item.label}</h4>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-kunalpink transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <h3 className="text-2xl font-semibold mb-6 gradient-heading">
                    Follow Me
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      aria-label="GitHub"
                    >
                      <Github className="text-white" size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kunal-vishwakarma-975b26326"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0A66C2] hover:bg-[#0A66C2]/80 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="text-white" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-gray-900/80 rounded-2xl p-6 border border-gray-800 h-full">
                <h3 className="text-2xl font-semibold mb-8 gradient-heading">
                  Send Me a Message
                </h3>

                {submitSuccess ? (
                  <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 text-center animate-fade-in">
                    <p className="text-green-400 mb-2">Message sent successfully!</p>
                    <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-gray-800 border ${
                          errors.name ? "border-red-500" : "border-gray-700"
                        } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-kunalpink`}
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
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-gray-800 border ${
                          errors.email ? "border-red-500" : "border-gray-700"
                        } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-kunalpink`}
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
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full bg-gray-800 border ${
                          errors.message ? "border-red-500" : "border-gray-700"
                        } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-kunalpink resize-none`}
                        placeholder="Enter your message"
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 rounded-lg font-medium flex items-center justify-center transition-all ${
                        isSubmitting
                          ? "bg-gray-700 cursor-not-allowed"
                          : "bg-gradient-to-r from-kunalpink to-kunalblue hover:shadow-[0_0_20px_rgba(245,66,152,0.5)] hover:scale-[1.02]"
                      }`}
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
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
