
// Simple email service using EmailJS
// For production, consider using a more robust solution or a backend service

type EmailData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // In a real implementation, you would integrate with an email service like EmailJS, SendGrid, etc.
    // For now, we'll simulate the API call with a delay
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return { success: false, message: "Please enter a valid email address." };
    }
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return { success: false, message: "Please fill in all required fields." };
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Email sent with data:", data);
    
    // In a real implementation, you would return the actual response from the email service
    return { 
      success: true, 
      message: "Your message has been sent successfully! We'll get back to you soon." 
    };
    
    /* 
    // Example implementation with EmailJS:
    const response = await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      },
      'YOUR_PUBLIC_KEY'
    );
    
    return { 
      success: response.status === 200, 
      message: response.status === 200 
        ? "Your message has been sent successfully! We'll get back to you soon."
        : "Failed to send message. Please try again later."
    };
    */
  } catch (error) {
    console.error("Error sending email:", error);
    return { 
      success: false, 
      message: "Failed to send message. Please try again later." 
    };
  }
};
