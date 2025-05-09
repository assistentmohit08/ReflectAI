
const VALID_DOMAINS = [
    'gmail.com',
    'outlook.com',
    'yahoo.com',
  ];
  
  /**
   * Validates if the email has a permitted domain
   * @param email - Email to validate
   * @returns Object with validation result and error message if invalid
   */
  export const validateEmail = (email: string): { isValid: boolean; errorMessage?: string } => {
    // Check if email is empty
    if (!email) {
      return { isValid: false, errorMessage: 'Email is required' };
    }
  
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { isValid: false, errorMessage: 'Please enter a valid email format' };
    }
  
    // Extract domain from email
    const domain = email.split('@')[1].toLowerCase();
    
    // Check if domain is in the allowed list
    if (!VALID_DOMAINS.includes(domain)) {
      return { 
        isValid: false, 
        errorMessage: `Only emails from these domains are allowed: ${VALID_DOMAINS.join(', ')}` 
      };
    }
  
    return { isValid: true };
  };