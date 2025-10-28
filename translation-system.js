// Translation System for SKYLINE Innovation Software
// Comprehensive Arabic/English translation system

class TranslationSystem {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.translations = {
            en: {
                // Navigation
                'nav-home': 'Home',
                'nav-about': 'About Us',
                'nav-company-profile': 'Company Profile',
                'nav-vision-mission': 'Vision & Mission',
                'nav-leadership': 'Leadership Team',
                'nav-values': 'Our Values',
                'nav-partners': 'Strategic Partners',
                'nav-alliances': 'Strategic Alliances',
                'nav-clients': 'Our Clients',
                'nav-services': 'Services',
                'nav-products': 'Products & Solutions',
                'nav-portfolio': 'Portfolio',
                'nav-testimonials': 'Testimonials',
                'nav-events': 'Events & News',
                'nav-contact': 'Contact Us',
                'nav-download': 'Download Center',
                'nav-iso': 'ISO Consulting',
                'nav-saas': 'SaaS Programs',
                'nav-software-solutions': 'Software Solutions',
                'nav-demo': 'Book Your Demo',
                'nav-videos': 'Product Videos',
                'nav-client-portal': 'Client Portal',
                
                // Common Elements
                'logo-tagline': 'Innovation Software',
                'get-started': 'Get Started',
                'learn-more': 'Learn More',
                'read-more': 'Read More',
                'contact-us': 'Contact Us',
                'call-us': 'Call Us',
                'email-us': 'Email Us',
                'follow-us': 'Follow Us',
                'subscribe': 'Subscribe',
                'submit': 'Submit',
                'send': 'Send',
                'cancel': 'Cancel',
                'close': 'Close',
                'back': 'Back',
                'next': 'Next',
                'previous': 'Previous',
                'loading': 'Loading...',
                'error': 'Error',
                'success': 'Success',
                'warning': 'Warning',
                'info': 'Information',
                
                // Home Page
                'hero-title': 'Welcome to SKYLINE Innovation Software',
                'hero-subtitle': 'Transforming Ideas into Digital Reality',
                'hero-description': 'We are a leading software development company specializing in innovative solutions that drive business growth and digital transformation.',
                'hero-cta': 'Explore Our Services',
                'hero-cta-secondary': 'View Portfolio',
                
                // About Page
                'about-title': 'About SKYLINE Innovation Software',
                'about-subtitle': 'Your Trusted Technology Partner',
                'about-description': 'With years of experience in software development, we have helped numerous businesses achieve their digital goals through cutting-edge technology solutions.',
                
                // Services
                'services-title': 'Our Services',
                'services-subtitle': 'Comprehensive Technology Solutions',
                'web-development': 'Web Development',
                'web-development-desc': 'Custom websites and web applications built with modern technologies',
                'mobile-apps': 'Mobile Applications',
                'mobile-apps-desc': 'Native and cross-platform mobile apps for iOS and Android',
                'ai-ml': 'AI & Machine Learning',
                'ai-ml-desc': 'Intelligent solutions powered by artificial intelligence',
                'cybersecurity': 'Cybersecurity',
                'cybersecurity-desc': 'Protect your business with advanced security solutions',
                'cloud-infrastructure': 'Cloud Infrastructure',
                'cloud-infrastructure-desc': 'Scalable cloud solutions for modern businesses',
                
                // Contact
                'contact-title': 'Contact Us',
                'contact-subtitle': 'Get in Touch',
                'contact-description': 'Ready to start your project? Contact us today for a free consultation.',
                'contact-form-title': 'Send us a Message',
                'contact-form-name': 'Full Name',
                'contact-form-email': 'Email Address',
                'contact-form-phone': 'Phone Number',
                'contact-form-company': 'Company Name',
                'contact-form-message': 'Message',
                'contact-form-submit': 'Send Message',
                'contact-info-title': 'Contact Information',
                'contact-address-title': 'Our Office',
                'contact-phone-title': 'Phone',
                'contact-email-title': 'Email',
                'contact-hours-title': 'Business Hours',
                'contact-main-office': 'Main Office',
                'contact-sales': 'Sales',
                'contact-general': 'General',
                'contact-support': 'Support',
                'contact-sunday-thursday': 'Sunday - Thursday',
                'contact-hours': '9:00 AM - 5:00 PM (EST)',
                
                // Footer
                'footer-company-desc': 'Leading software development company specializing in innovative solutions for modern businesses.',
                'footer-quick-links': 'Quick Links',
                'footer-services': 'Services',
                'footer-company': 'Company',
                'footer-support': 'Support',
                'footer-legal': 'Legal',
                'footer-privacy': 'Privacy Policy',
                'footer-terms': 'Terms of Service',
                'footer-cookies': 'Cookie Policy',
                'footer-newsletter': 'Newsletter',
                'footer-newsletter-desc': 'Subscribe to our newsletter for the latest updates',
                'footer-newsletter-placeholder': 'Enter your email',
                'footer-newsletter-subscribe': 'Subscribe',
                'footer-copyright': '© 2024 SKYLINE Innovation Software. All rights reserved.',
                
                // AI Assistant
                'ai-assistant-title': 'AI Assistant',
                'ai-assistant-placeholder': 'Ask me anything about our services...',
                'ai-services-btn': 'Services',
                'ai-pricing-btn': 'Pricing',
                'ai-contact-btn': 'Contact',
                'ai-location-btn': 'Location',
                'ai-portfolio-btn': 'Portfolio',
                
                // Accessibility
                'accessibility-title': 'Accessibility Tools',
                'accessibility-font-size': 'Font Size',
                'accessibility-simple-font': 'Simple Font',
                'accessibility-high-contrast': 'High Contrast',
                'accessibility-screen-reader': 'Screen Reader',
                'accessibility-keyboard-nav': 'Keyboard Navigation',
                
                // Language Switcher
                'language-switch': 'العربية',
                'language-current': 'English',
                
                // Products & Solutions Page
                'products-hero-title': 'Our Products & Solutions',
                'products-hero-description': 'Discover a comprehensive suite of software solutions, SaaS platforms, and innovative tools designed to transform your business operations',
                'products-hero-cta': 'Book Your Demo',
                'products-section-title': 'Software Solutions',
                'products-section-subtitle': 'Comprehensive tools and platforms to drive your business forward',
                
                // Product Cards
                'erp-title': 'Enterprise Resource Planning System',
                'erp-description': 'Complete ERP solution for modern businesses',
                'erp-feature-1': 'Financial Management',
                'erp-feature-2': 'Inventory Control',
                'erp-feature-3': 'HR & Payroll',
                'erp-feature-4': 'Supply Chain',
                'erp-feature-5': 'Business Intelligence',
                
                'crm-title': 'Customer Relationship Management System',
                'crm-description': 'CRM platform to boost sales and customer satisfaction',
                'crm-feature-1': 'Lead Management',
                'crm-feature-2': 'Sales Pipeline',
                'crm-feature-3': 'Customer Support',
                'crm-feature-4': 'Analytics Dashboard',
                'crm-feature-5': 'Mobile App',
                
                'ecommerce-title': 'E-commerce Platform',
                'ecommerce-description': 'Full-featured e-commerce platform for online businesses',
                'ecommerce-feature-1': 'Product Management',
                'ecommerce-feature-2': 'Payment Gateway',
                'ecommerce-feature-3': 'Order Processing',
                'ecommerce-feature-4': 'Marketing Tools',
                'ecommerce-feature-5': 'Multi-store Support',
                
                'ai-title': 'AI Analytics',
                'ai-description': 'Smart analytics and AI-powered insights',
                'ai-feature-1': 'Predictive Analytics',
                'ai-feature-2': 'Data Visualization',
                'ai-feature-3': 'Machine Learning',
                'ai-feature-4': 'Real-time Reports',
                'ai-feature-5': 'Custom Dashboards',
                
                'cloud-title': 'Cloud Solutions',
                'cloud-description': 'Scalable cloud infrastructure and hosting solutions',
                'cloud-feature-1': 'Cloud Hosting',
                'cloud-feature-2': 'Data Backup',
                'cloud-feature-3': 'Load Balancing',
                'cloud-feature-4': 'Security & SSL',
                'cloud-feature-5': '24/7 Monitoring',
                'mobile-title': 'Mobile Applications',
                'mobile-description': 'Native and cross-platform mobile apps for iOS and Android',
                'mobile-feature-1': 'Native iOS Apps',
                'mobile-feature-2': 'Android Applications',
                'mobile-feature-3': 'Cross-platform Development',
                'mobile-feature-4': 'Push Notifications',
                'mobile-feature-5': 'Offline Support',
                'demo-software-title': 'Demo Software',
                'demo-software-subtitle': 'Download trial versions and demo software to test our solutions',
                'demo-card-1-title': 'SKYLINE ERP Demo',
                'demo-card-1-description': 'Full-featured demo version of our ERP system with sample data and configurations.',
                'demo-card-1-type': 'Windows Installer',
                'demo-card-2-title': 'SKYLINE CRM Trial',
                'demo-card-2-description': '30-day trial version of our CRM platform with full functionality and support.',
                'demo-card-2-type': 'Web Application',
                'demo-card-3-title': 'API Documentation & Examples',
                'demo-card-3-description': 'Complete API documentation with practical code examples and integration guides.',
                'demo-card-3-type': 'Documentation',
                'demo-card-4-title': 'Configuration Templates',
                'demo-card-4-description': 'Pre-built templates and sample configurations for quick setup.',
                'demo-card-4-type': 'Template Files',
                'download-erp-demo': 'Download ERP Demo',
                'download-crm-trial': 'Download CRM Trial',
                'download-api-docs': 'Download API Docs',
                'download-templates': 'Download Templates',
                'mobile-feature-3': 'Cross-platform',
                'mobile-feature-4': 'Push Notifications',
                'mobile-feature-5': 'Offline Support',
                
                // Download Center Translations
                'download-hero-title': 'Download Center',
                'download-hero-description': 'Access our comprehensive collection of resources, software, and documentation',
                'download-hero-badge': 'Free Downloads Available',
                'filter-all': 'All Resources',
                'filter-brochures': 'Brochures',
                'filter-whitepapers': 'Whitepapers',
                'filter-trials': 'Trial Versions',
                'filter-demos': 'Demo Software',
                'download-brochures-title': 'Brochures',
                'download-whitepapers-title': 'Whitepapers',
                'download-trials-title': 'Trial Versions',
                'download-demos-title': 'Demo Software',
                'download-stat-1': 'Downloads This Month',
                'download-stat-2': 'Available Resources',
                'download-stat-3': 'Download Support',
                'download-stat-4': 'Free Access',
                'download-started': 'Download started',
                'download-note': 'In a real implementation, this would initiate the actual download.',
                
                // Client Portal Translations
                'portal-hero-title': 'Client Portal Access',
                'portal-hero-description': 'Secure login for subscribed clients. Access your projects, documents, support tickets, and exclusive resources in one centralized dashboard.',
                'portal-login-title': 'Welcome Back',
                'portal-login-subtitle': 'Sign in to access your client dashboard',
                'portal-email-label': 'Email Address',
                'portal-email-placeholder': 'Enter your email',
                'portal-password-label': 'Password',
                'portal-password-placeholder': 'Enter your password',
                'portal-remember-me': 'Remember me',
                'portal-forgot-password': 'Forgot Password?',
                'portal-sign-in': 'Sign In',
                'portal-features-title': 'Portal Features',
                'portal-features-subtitle': 'Everything you need to manage your projects and stay connected with our team',
                'portal-feature-1-title': 'Project Dashboard',
                'portal-feature-1-description': 'Track project progress, milestones, and deliverables in real-time with interactive dashboards and detailed reports.',
                'portal-feature-2-title': 'Document Management',
                'portal-feature-2-description': 'Access all project documents, contracts, and resources in a secure, organized digital library.',
                'portal-feature-3-title': 'Support Center',
                'portal-feature-3-description': 'Submit support tickets, track resolution status, and access our knowledge base for instant help.',
                'portal-feature-4-title': 'Analytics & Reports',
                'portal-feature-4-description': 'View detailed analytics, performance metrics, and custom reports tailored to your business needs.',
                'portal-feature-5-title': 'Team Communication',
                'portal-feature-5-description': 'Direct messaging with your project team, file sharing, and collaborative workspace tools.',
                'portal-feature-6-title': 'Mobile Access',
                'portal-feature-6-description': 'Full mobile compatibility - access your portal from anywhere, anytime, on any device.',
                'portal-security-title': 'Enterprise-Grade Security',
                'portal-security-description': 'Your data is protected with industry-leading security measures and compliance standards',
                'portal-security-ssl': 'SSL Encryption',
                'portal-security-2fa': '2FA Authentication',
                'portal-security-soc2': 'SOC 2 Compliant',
                'portal-security-gdpr': 'GDPR Ready',
                'portal-help-need-help': 'Need Help?',
                'portal-help-watch-demo': 'Watch Demo',
                'portal-help-contact-support': 'Contact Support',
                'portal-help-user-guide': 'User Guide',
                'portal-login-success': 'Login successful! Redirecting to dashboard...',
                'portal-login-redirect': 'Demo: You would be redirected to the client dashboard now.',
                'portal-login-error': 'Invalid credentials. Try demo@skyline.com / demo123',
                
                'product-cta': 'Watch Demo',
                
                // Demo Software Section
                'demo-section-title': 'Demo Software',
                'demo-section-subtitle': 'Download interactive demos and resources to explore our solutions',
                'demo-card-1-title': 'Interactive Product Demo',
                'demo-card-1-description': 'Interactive demo of our leading software products and features.',
                'demo-card-1-type': 'Executable Demo',
                'demo-card-2-title': 'Video Tutorial Series',
                'demo-card-2-description': 'Comprehensive video tutorials covering all aspects of our software solutions.',
                'demo-card-2-type': 'Video Collection',
                'demo-card-3-title': 'API Documentation & Examples',
                'demo-card-3-description': 'Complete API documentation with practical code examples and integration guides.',
                'demo-card-3-type': 'Documentation',
                'demo-card-4-title': 'Configuration Templates',
                'demo-card-4-description': 'Pre-built templates and sample configurations for quick setup.',
                'demo-card-4-type': 'Template Files',
                'download-demo': 'Download Demo',
                'download-videos': 'Download Videos',
                'download-api-docs': 'Download API Docs',
                'download-templates': 'Download Templates',
                
                // Demo Booking Section
                'demo-booking-title': 'Book Your Demo',
                'demo-booking-subtitle': 'Test our solutions directly with a customized demo',
                'demo-booking-form-title': 'Schedule a Free Demo',
                'demo-booking-form-description': 'Our experts will guide you through our solutions and answer all your questions. Choose the time that works for you.',
                'demo-booking-button': 'Book Demo Now',
                
                // Form Fields
                'form-name-label': 'Full Name *',
                'form-name-placeholder': 'Enter your full name',
                'form-company-label': 'Company Name *',
                'form-company-placeholder': 'Enter your company name',
                'form-email-label': 'Email Address *',
                'form-email-placeholder': 'Enter your email address',
                'form-phone-label': 'Phone Number',
                'form-phone-placeholder': 'Enter your phone number',
                'form-product-label': 'Product of Interest *',
                'form-product-placeholder': 'Select Product',
                'form-date-label': 'Preferred Date *',
                'form-time-label': 'Preferred Time *',
                'form-time-placeholder': 'Select Time',
                'form-message-label': 'Additional Notes',
                'form-message-placeholder': 'Tell us about your specific needs or questions',
                
                // Time Options
                'time-09-00': '9:00 AM',
                'time-10-00': '10:00 AM',
                'time-11-00': '11:00 AM',
                'time-12-00': '12:00 PM',
                'time-14-00': '2:00 PM',
                'time-15-00': '3:00 PM',
                'time-16-00': '4:00 PM',
                
                // Videos Section
                'videos-section-title': 'Product Videos',
                'videos-section-subtitle': 'Watch detailed demos and tutorials for our solutions',
                'video-erp-title': 'SKYLINE ERP - Complete Overview',
                'video-erp-description': 'Learn how our ERP solution can streamline all your business operations from finance to inventory management.',
                'video-erp-duration': '15:30 minutes',
                'video-crm-title': 'SKYLINE CRM - Sales & Customer Management',
                'video-crm-description': 'Discover how our CRM platform can boost your sales performance and improve customer relationships.',
                'video-crm-duration': '12:45 minutes',
                'video-ecommerce-title': 'SKYLINE Commerce - E-store Setup',
                'video-ecommerce-description': 'Step-by-step guide to setting up your online store using our e-commerce platform.',
                'video-ecommerce-duration': '18:20 minutes',
                'video-ai-title': 'SKYLINE AI Analytics - Data Insights',
                'video-ai-description': 'Explore the power of AI-powered analytics and how it can transform your business decisions.',
                'video-ai-duration': '20:15 minutes',
                'video-cloud-title': 'SKYLINE Cloud - Infrastructure Overview',
                'video-cloud-description': 'Learn about our cloud hosting solutions and how they can scale with your business needs.',
                'video-cloud-duration': '14:30 minutes',
                'video-mobile-title': 'SKYLINE Mobile - App Development',
                'video-mobile-description': 'See how we create powerful mobile applications that work seamlessly across all devices.',
                'video-mobile-duration': '16:45 minutes',
                
                // Cards and Content
                'projects-completed': 'Projects Completed',
                'happy-clients': 'Happy Clients',
                'years-experience': 'Years Experience',
                'team-members': 'Team Members',
                'custom-software': 'Custom Software Development',
                'custom-software-desc': 'Tailored solutions built to meet your specific business requirements',
                'web-applications': 'Web Applications',
                'web-applications-desc': 'Modern, responsive web applications with cutting-edge technology',
                'mobile-solutions': 'Mobile Solutions',
                'mobile-solutions-desc': 'Native and cross-platform mobile applications',
                'ai-integration': 'AI Integration',
                'ai-integration-desc': 'Intelligent automation and machine learning solutions',
                'cloud-services': 'Cloud Services',
                'cloud-services-desc': 'Scalable cloud infrastructure and deployment',
                'cybersecurity': 'Cybersecurity Solutions',
                'cybersecurity-desc': 'Advanced security measures to protect your business',
                'expert-team': 'Expert Team',
                'expert-team-desc': 'Our experienced developers deliver high-quality solutions',
                'cutting-edge': 'Cutting-Edge Technology',
                'cutting-edge-desc': 'We use the latest technologies and frameworks',
                '24-7-support': '24/7 Support',
                '24-7-support-desc': 'Round-the-clock technical support and maintenance',
                'proven-track': 'Proven Track Record',
                'proven-track-desc': 'Successfully delivered 500+ projects across various industries',
                'innovative-solutions': 'Innovative Solutions',
                'innovative-solutions-desc': 'Creative approaches to complex business challenges',
                'client-focused': 'Client-Focused Approach',
                'client-focused-desc': 'We prioritize your business goals and requirements',
                'quality-assurance': 'Quality Assurance',
                'quality-assurance-desc': 'Rigorous testing and quality control processes',
                'timely-delivery': 'Timely Delivery',
                'timely-delivery-desc': 'We meet deadlines without compromising on quality',
                'competitive-pricing': 'Competitive Pricing',
                'competitive-pricing-desc': 'Cost-effective solutions that provide excellent value',
                'scalable-solutions': 'Scalable Solutions',
                'scalable-solutions-desc': 'Solutions that grow with your business needs',
                'industry-expertise': 'Industry Expertise',
                'industry-expertise-desc': 'Deep knowledge across multiple industry verticals',
                'modern-frameworks': 'Modern Frameworks',
                'modern-frameworks-desc': 'Built with the latest and most reliable technologies',
                'responsive-design': 'Responsive Design',
                'responsive-design-desc': 'Perfect experience across all devices and screen sizes',
                'seamless-integration': 'Seamless Integration',
                'seamless-integration-desc': 'Easy integration with your existing systems',
                'data-security': 'Data Security',
                'data-security-desc': 'Enterprise-grade security for your sensitive data',
                'performance-optimization': 'Performance Optimization',
                'performance-optimization-desc': 'Optimized for speed, efficiency, and reliability',
                'user-experience': 'User Experience',
                'user-experience-desc': 'Intuitive and engaging user interfaces',
                'business-automation': 'Business Automation',
                'business-automation-desc': 'Streamline your processes with intelligent automation',
                'digital-transformation': 'Digital Transformation',
                'digital-transformation-desc': 'Transform your business for the digital age',
                'consultation': 'Free Consultation',
                'consultation-desc': 'Get expert advice on your project requirements',
                'project-management': 'Project Management',
                'project-management-desc': 'Professional project management and delivery',
                'maintenance-support': 'Maintenance & Support',
                'maintenance-support-desc': 'Ongoing support and maintenance services',
                'training': 'Training & Documentation',
                'training-desc': 'Comprehensive training and documentation provided',
                'updates': 'Regular Updates',
                'updates-desc': 'Keep your software up-to-date with latest features',
                'monitoring': 'Performance Monitoring',
                'monitoring-desc': 'Continuous monitoring and optimization',
                'backup-recovery': 'Backup & Recovery',
                'backup-recovery-desc': 'Secure backup and disaster recovery solutions',
                'compliance': 'Compliance',
                'compliance-desc': 'Ensure compliance with industry standards and regulations',
                
                // Additional translations for index.html
                'who-we-are': 'Who We Are?',
                'about-description': 'Skyline Innovation is a leading provider of Enterprise Resource Planning (ERP) and software solutions in Jordan, dedicated to empowering businesses through cutting-edge technology and digital transformation. With a commitment to excellence, innovation, and customer satisfaction, we deliver tailored software solutions that streamline operations, enhance decision-making, and drive sustainable growth.',
                'about-expertise': 'Our expertise spans across multiple industries, enabling organizations to automate workflows, integrate systems, and optimize business processes with efficiency and accuracy.',
                'trusted-businesses': 'Trusted by 500+ Businesses',
                'expert-level': 'Expert Level',
                'custom-built': 'Custom Built',
                'future-ready': 'Future Ready',
                'user-centric': 'User Centric',
                'enterprise-grade': 'Enterprise Grade',
                'always-available': 'Always Available',
                'deep-market-knowledge': 'Deep Market Knowledge',
                'tailored-solutions': 'Tailored Solutions',
                'scalable-systems': 'Scalable Systems',
                'ai-machine-learning': 'AI & Machine Learning',
                'cloud-computing': 'Cloud Computing',
                'intuitive-design': 'Intuitive Design',
                'maximum-efficiency': 'Maximum Efficiency',
                'high-end-encryption': 'High-End Encryption',
                'industry-compliance': 'Industry Compliance',
                'training-programs': 'Training Programs',
                
                // Featured Solutions Badges
                'popular-badge': 'Popular',
                'featured-badge': 'Featured',
                'trending-badge': 'Trending',
                
                // AI & Machine Learning Features
                'predictive-analytics': 'Predictive Analytics',
                'natural-language-processing': 'Natural Language Processing',
                'computer-vision': 'Computer Vision',
                'recommendation-systems': 'Recommendation Systems',
                'explore-ai-solutions': 'Explore AI Solutions',
                
                // Custom Software Features
                'desktop-software': 'Desktop Software',
                'api-development': 'API Development',
                'start-your-project': 'Start Your Project',
                
                // Cloud Infrastructure Features
                'cloud-migration': 'Cloud Migration',
                'devops-automation': 'DevOps Automation',
                'microservices-architecture': 'Microservices Architecture',
                'serverless-solutions': 'Serverless Solutions',
                'go-cloud-native': 'Go Cloud Native',
                
                // Industries Section
                'industries-title-prefix': 'Industries',
                'industries-title-main': 'We Serve',
                'industries-description-start': 'Our ERP and software solutions cater to a diverse range of industries,',
                'transforming-businesses': 'transforming businesses',
                'industries-description-end': 'through innovative technology.',
                'trusted-companies': 'Trusted by 200+ Companies',
                
                // Industry Titles
                'manufacturing-title': 'Manufacturing',
                'retail-title': 'Retail & E-commerce',
                'healthcare-title': 'Healthcare',
                'finance-title': 'Finance & Banking',
                'logistics-title': 'Logistics & Supply Chain',
                'education-title': 'Education & Government',
                
                // Industry Descriptions
                'manufacturing-description': 'Production planning, inventory management, and quality control solutions.',
                'retail-description': 'Sales tracking, POS integration, and customer engagement solutions.',
                'healthcare-description': 'Patient records management, billing, and compliance tracking solutions.',
                'finance-description': 'Accounting, risk management, and financial reporting solutions.',
                'logistics-description': 'Fleet tracking, warehouse management, and procurement solutions.',
                'education-description': 'Student information systems, HR, and administrative automation solutions.',
                
                // Industry Features
                'production-planning': 'Production Planning',
                'quality-control': 'Quality Control',
                'pos-integration': 'POS Integration',
                'customer-analytics': 'Customer Analytics',
                'patient-records': 'Patient Records',
                'compliance-tracking': 'Compliance Tracking',
                'risk-management': 'Risk Management',
                'financial-reporting': 'Financial Reporting',
                'fleet-tracking': 'Fleet Tracking',
                'warehouse-management': 'Warehouse Management',
                'student-systems': 'Student Systems',
                'hr-automation': 'HR Automation',
                
                // Industry Stats
                'efficiency': 'Efficiency',
                'growth': 'Growth',
                'accuracy': 'Accuracy',
                'security': 'Security',
                'cost-reduction': 'Cost Reduction',
                'automation': 'Automation',
                
                // CTA Section
                'cta-description-start': 'Let\'s discuss how our innovative solutions can drive your business forward.',
                'cta-description-end': 'Get in touch with our expert team today.',
                
                // Footer
                'office-details': 'Office details',
                'visit-office': 'VISIT OFFICE',
                
                // About Page
                'about-title': 'About Us - SKYLINE Innovation Software',
                'about-hero-title': 'About SKYLINE Innovation Software',
                'about-hero-description': 'Your trusted technology partner for innovative software solutions that transform businesses and drive digital growth.',
                'about-company-title': 'SKYLINE Innovation Software',
                'ready-to-start': 'Ready to Start Your Project?',
                
                // ISO Page
                'iso-title': 'ISO Consulting - SKYLINE Innovation Software',
                
                // ISO Consulting Page
                'iso-hero-title': 'ISO Consulting',
                'iso-hero-description': 'Achieve international standards compliance with our specialized ISO consulting services. We help your organization implement, maintain, and improve quality management systems.',
                'iso-hero-cta': 'Explore ISO Standards',
                'iso-standards-section-title': 'ISO Standards',
                'iso-standards-section-subtitle': 'Comprehensive consulting services for all major ISO standards',
                
                // Category Filters
                'iso-filter-all': 'All Standards',
                'iso-filter-quality': 'Quality Management',
                'iso-filter-security': 'Security',
                'iso-filter-environmental': 'Environmental',
                'iso-filter-safety': 'Safety',
                
                // ISO 9001
                'iso-9001-badge': 'Popular',
                'iso-9001-subtitle': 'Quality Management Systems',
                'iso-9001-description': 'The world\'s most recognized quality management standard, helping organizations ensure consistent quality and customer satisfaction.',
                'iso-9001-feature-1': 'Quality Management System',
                'iso-9001-feature-2': 'Customer Satisfaction',
                'iso-9001-feature-3': 'Continuous Improvement',
                'iso-9001-feature-4': 'Process Optimization',
                'iso-9001-cta': 'Get ISO 9001 Consulting',
                
                // ISO 27001
                'iso-27001-badge': 'Security',
                'iso-27001-subtitle': 'Information Security Management',
                'iso-27001-description': 'The international standard for information security management systems, protecting sensitive company and customer information.',
                'iso-27001-feature-1': 'Information Security',
                'iso-27001-feature-2': 'Risk Management',
                'iso-27001-feature-3': 'Data Protection',
                'iso-27001-feature-4': 'Cybersecurity',
                'iso-27001-cta': 'Get ISO 27001 Consulting',
                
                // ISO 14001
                'iso-14001-badge': 'Environmental',
                'iso-14001-subtitle': 'Environmental Management Systems',
                'iso-14001-description': 'Help your organization reduce environmental impact and comply with environmental regulations.',
                'iso-14001-feature-1': 'Environmental Management',
                'iso-14001-feature-2': 'Waste Reduction',
                'iso-14001-feature-3': 'Energy Efficiency',
                'iso-14001-feature-4': 'Regulatory Compliance',
                'iso-14001-cta': 'Get ISO 14001 Consulting',
                
                // ISO 45001
                'iso-45001-badge': 'Safety',
                'iso-45001-subtitle': 'Occupational Health and Safety',
                'iso-45001-description': 'Occupational health and safety management systems to protect employees and create safer workplaces.',
                'iso-45001-feature-1': 'Workplace Safety',
                'iso-45001-feature-2': 'Risk Assessment',
                'iso-45001-feature-3': 'Accident Prevention',
                'iso-45001-feature-4': 'Employee Health',
                'iso-45001-cta': 'Get ISO 45001 Consulting',
                
                // ISO 20000
                'iso-20000-badge': 'IT Services',
                'iso-20000-subtitle': 'IT Service Management',
                'iso-20000-description': 'The international standard for IT service management, ensuring effective delivery of IT services to business and customers.',
                'iso-20000-feature-1': 'IT Service Management',
                'iso-20000-feature-2': 'Service Delivery',
                'iso-20000-feature-3': 'ITIL Alignment',
                'iso-20000-feature-4': 'Customer Satisfaction',
                'iso-20000-cta': 'Get ISO 20000 Consulting',
                
                // ISO 22000
                'iso-22000-badge': 'Food Safety',
                'iso-22000-subtitle': 'Food Safety Management',
                'iso-22000-description': 'Food safety management systems for organizations in the food chain, from farm to fork.',
                'iso-22000-feature-1': 'Food Safety Management',
                'iso-22000-feature-2': 'HACCP Integration',
                'iso-22000-feature-3': 'Supply Chain Safety',
                'iso-22000-feature-4': 'Risk Control',
                'iso-22000-cta': 'Get ISO 22000 Consulting',
                
                // ISO 13485
                'iso-13485-badge': 'Medical',
                'iso-13485-subtitle': 'Medical Device Quality',
                'iso-13485-description': 'Quality management systems for medical devices, ensuring safe and effective medical products.',
                'iso-13485-feature-1': 'Medical Device Quality',
                'iso-13485-feature-2': 'Regulatory Compliance',
                'iso-13485-feature-3': 'Risk Management',
                'iso-13485-feature-4': 'Product Safety',
                'iso-13485-cta': 'Get ISO 13485 Consulting',
                
                // ISO 50001
                'iso-50001-badge': 'Energy',
                'iso-50001-subtitle': 'Energy Management Systems',
                'iso-50001-description': 'Energy management systems to help organizations improve energy performance and reduce costs.',
                'iso-50001-feature-1': 'Energy Management',
                'iso-50001-feature-2': 'Cost Reduction',
                'iso-50001-feature-3': 'Carbon Footprint',
                'iso-50001-feature-4': 'Sustainability',
                'iso-50001-cta': 'Get ISO 50001 Consulting',
                
                // ISO 37001
                'iso-37001-badge': 'Anti-Bribery',
                'iso-37001-subtitle': 'Anti-Bribery Management',
                'iso-37001-description': 'Anti-bribery management systems to help organizations prevent, detect, and address bribery.',
                'iso-37001-feature-1': 'Anti-Bribery Controls',
                'iso-37001-feature-2': 'Compliance Culture',
                'iso-37001-feature-3': 'Risk Assessment',
                'iso-37001-feature-4': 'Ethics Management',
                'iso-37001-cta': 'Get ISO 37001 Consulting',
                
                // CTA Section
                'iso-cta-title': 'Ready to Get ISO Certified?',
                'iso-cta-description': 'Start your ISO certification journey today. Contact our experts for a free consultation and customized implementation plan.',
                'iso-cta-button-1': 'Contact Us Now',
                'iso-cta-button-2': 'Schedule Consultation',
                
                // Testimonials Page
                'testimonials-title': 'Testimonials & Case Studies - SKYLINE Innovation Software',
                
                // Testimonials & Case Studies Page
                'testimonials-hero-title': 'Success Stories',
                'testimonials-hero-description': 'Discover how SKYLINE has transformed businesses across industries through innovative software solutions and exceptional service delivery.',
                'testimonials-stat-1': 'Happy Clients',
                'testimonials-stat-2': 'Success Rate',
                'testimonials-stat-3': 'Years Experience',
                'testimonials-stat-4': 'Industries Served',
                'testimonials-section-title': 'Customer Testimonials',
                'testimonials-section-subtitle': 'Hear what our clients say about their experience working with SKYLINE',
                
                // Testimonials
                'testimonial-1-text': '"SKYLINE completely transformed our business operations with their ERP solutions. The implementation was seamless, and their support team is exceptional. We\'ve seen a 40% increase in efficiency since going live."',
                'testimonial-1-name': 'John Davidson',
                'testimonial-1-position': 'CEO, Tech Corp Industries',
                'testimonial-1-company': '🏢 Fortune 500 Company',
                'testimonial-2-text': '"The custom CRM system developed by SKYLINE revolutionized how we manage customer relationships. Our sales team productivity increased by 60%, and customer satisfaction scores are at an all-time high."',
                'testimonial-2-name': 'Sarah Mitchell',
                'testimonial-2-position': 'VP of Sales, Global Tech Solutions',
                'testimonial-2-company': '🚀 Tech Startup',
                'testimonial-3-text': '"SKYLINE\'s e-commerce platform helped us expand our digital presence globally. The scalable architecture and robust features supported our 300% growth over the past two years."',
                'testimonial-3-name': 'Michael Rodriguez',
                'testimonial-3-position': 'Founder, Retail Max',
                'testimonial-3-company': '🛒 E-commerce Leader',
                'testimonial-4-text': '"SKYLINE\'s AI-powered analytics solution gave us unprecedented insights into our operations. We optimized our supply chain and reduced costs by 25% while improving delivery times."',
                'testimonial-4-name': 'Lisa Wang',
                'testimonial-4-position': 'Operations Director, LogiFlow International',
                'testimonial-4-company': '📦 Logistics Giant',
                'testimonial-5-text': '"SKYLINE\'s mobile app development exceeded our expectations. The user-friendly interface and powerful features led to over one million downloads and a 4.8-star rating in app stores."',
                'testimonial-5-name': 'David Roberts',
                'testimonial-5-position': 'Product Manager, Finance App',
                'testimonial-5-company': '💰 FinTech Innovator',
                'testimonial-6-text': '"SKYLINE\'s cloud migration services were seamless and efficient. We reduced IT costs by 35% while significantly improving system reliability and performance."',
                'testimonial-6-name': 'Amanda Kim',
                'testimonial-6-position': 'CTO, HealthTech Solutions',
                'testimonial-6-company': '🏥 Healthcare Leader',
                
                // Case Studies
                'case-studies-section-title': 'Case Studies',
                'case-studies-section-subtitle': 'Detailed success stories showcasing our expertise and impact',
                'case-study-1-category': 'ERP Implementation',
                'case-study-1-title': 'Manufacturing Giant Streamlines Operations',
                'case-study-1-description': 'A leading manufacturing company with over 5,000 employees needed to integrate their fragmented systems. Our comprehensive ERP solutions unified their operations across 15 locations.',
                'case-study-1-metric-1': 'Cost Reduction',
                'case-study-1-metric-2': 'Efficiency Increase',
                'case-study-1-metric-3': 'User Adoption',
                'case-study-2-category': 'E-commerce Platform',
                'case-study-2-title': 'Retail Chain Goes Digital',
                'case-study-2-description': 'A traditional retail chain with over 200 stores wanted to establish a strong digital presence. Our custom e-commerce platform enabled seamless omnichannel experiences.',
                'case-study-2-metric-1': 'E-commerce Sales',
                'case-study-2-metric-2': 'New Customers',
                'case-study-2-metric-3': 'Revenue Growth',
                'case-study-3-category': 'AI & Analytics',
                'case-study-3-title': 'Predictive Analytics for Financial Services',
                'case-study-3-description': 'A major bank needed advanced analytics to improve risk assessment and fraud detection. Our AI-powered solutions process millions of transactions daily.',
                'case-study-3-metric-1': 'Fraud Reduction',
                'case-study-3-metric-2': 'Risk Improvement',
                'case-study-3-metric-3': 'Savings',
                'case-study-4-category': 'Mobile Application',
                'case-study-4-title': 'Healthcare App Reaches One Million Users',
                'case-study-4-description': 'A healthcare startup needed a comprehensive mobile app for patient management. Our solutions now serve over one million users across 20 countries.',
                'case-study-4-metric-1': 'Active Users',
                'case-study-4-metric-2': 'App Rating',
                'case-study-4-metric-3': 'Countries',
                'case-study-cta': 'Read Full Case Study',
                
                // Video Testimonials
                'video-testimonials-section-title': 'Video Testimonials',
                'video-testimonials-section-subtitle': 'Watch our clients share their success stories',
                'video-1-title': 'CEO Testimonial - Digital Transformation Success',
                'video-1-description': 'John Davidson, CEO of Tech Corp Industries, shares how SKYLINE\'s ERP solutions transformed their operations.',
                'video-1-author-name': 'John Davidson',
                'video-1-author-position': 'CEO, Tech Corp Industries',
                'video-2-title': 'CRM Success Story - Sales Team Transformation',
                'video-2-description': 'Sarah Mitchell explains how our custom CRM system boosted their sales productivity by 60%.',
                'video-2-author-name': 'Sarah Mitchell',
                'video-2-author-position': 'VP of Sales, Global Tech',
                'video-3-title': 'E-commerce Platform - Global Expansion',
                'video-3-description': 'Michael Rodriguez discusses how SKYLINE\'s e-commerce solutions enabled 300% growth.',
                'video-3-author-name': 'Michael Rodriguez',
                'video-3-author-position': 'Founder, Retail Max',
                
                // CTA Section
                'testimonials-cta-title': 'Ready to Write Your Success Story?',
                'testimonials-cta-description': 'Join hundreds of satisfied clients who have transformed their businesses with SKYLINE\'s innovative solutions.',
                'testimonials-cta-button-1': 'Start Your Project',
                'testimonials-cta-button-2': 'Schedule Consultation',
                
                // Footer
                'footer-location-title': 'Location',
                'footer-address': '3rd floor, Qaisar Complex, Queen Rania St., Amman, Jordan',
                'footer-get-directions': 'Get Directions',
                'footer-contact-title': 'Contact Us',
                'footer-main-office': 'Main Office:',
                'footer-sales': 'Sales:',
                'footer-call-main': 'Call Main Office',
                'footer-office-title': 'Office Details',
                'footer-office-address': '3rd floor, Qaisar Complex, Queen Rania St., Amman, Jordan',
                'footer-visit-office': 'Visit Office',
                'footer-newsletter-title': 'Newsletter Signup',
                'footer-newsletter-description': 'Don\'t miss our latest updates and news',
                'footer-newsletter-placeholder': 'Enter your email',
                'footer-newsletter-success': 'Thank you for subscribing to our newsletter!',
                'footer-newsletter-error': 'Please enter a valid email address.',
                'footer-nav-home': 'Home',
                'footer-nav-about': 'About',
                'footer-nav-products': 'Products & Solutions',
                'footer-nav-events': 'Events & News',
                'footer-nav-contact': 'Contact',
                'footer-copyright': '© Copyright 2025 SKYLINE Innovation',
                
                // Events & News Page
                'events-hero-title': 'Events & News',
                'events-hero-description': 'Stay updated with the latest news, events, and insights from SKYLINE Innovation Software',
                'events-timeline-title': 'Upcoming Events',
                'event-1-title': 'SKYLINE Tech Conference 2024',
                'event-1-description': 'Join us for our annual tech conference featuring industry leaders, innovative solutions, and networking opportunities with tech professionals from across the region.',
                'event-2-title': 'AI & Machine Learning Workshop',
                'event-2-description': 'A hands-on workshop exploring the latest developments in AI and machine learning, with practical applications for business solutions.',
                'event-3-title': 'Cloud Solutions Seminar',
                'event-3-description': 'Discover how cloud computing can transform your business operations through our comprehensive seminar on modern cloud solutions and best practices.',
                'event-4-title': 'Innovation Expo',
                'event-4-description': 'Experience the future of software development at our Innovation Expo, featuring cutting-edge technologies and revolutionary business solutions.',
                'news-grid-title': 'Latest News & Updates',
                'filter-all': 'All',
                'filter-news': 'News',
                'filter-updates': 'Updates',
                'filter-blog': 'Blog',
                'filter-events': 'Events',
                'news-category-1': 'News',
                'news-1-title': 'SKYLINE Launches New AI-Powered Analytics Platform',
                'news-1-excerpt': 'Our latest innovation combines machine learning with real-time data processing to provide businesses with unprecedented insights into their operations. This advanced platform revolutionizes how companies analyze their data, offering predictive analytics, automated reporting, and intelligent recommendations that drive strategic decision-making and improve overall business performance.',
                'news-1-back-title': 'AI Analytics Platform',
                'news-1-back-description': 'Discover how our advanced AI technology revolutionizes business analytics and delivers instant insights that drive growth and efficiency.',
                'news-category-2': 'Updates',
                'news-2-title': 'Enhanced Security Features in Latest Release',
                'news-2-excerpt': 'We have implemented advanced security protocols and multi-factor authentication to ensure your data remains protected at all times. Our comprehensive security framework includes end-to-end encryption, biometric authentication options, real-time threat detection, automated security auditing, and advanced firewall protection to provide enterprise-level security for all your sensitive business information and customer data.',
                'news-2-back-title': 'Security Enhancement',
                'news-2-back-description': 'Learn about our latest security updates including multi-factor authentication, advanced encryption, and comprehensive data protection measures.',
                'news-category-3': 'Blog',
                'news-3-title': 'Future of Software Development: Trends to Watch',
                'news-3-excerpt': 'Explore emerging trends in software development and how they\'re shaping the future of technology and business solutions. From AI integration to low-code platforms, microservices architecture, cloud-native development, and progressive web applications - discover the groundbreaking innovations that will define the next decade of software engineering and transform how businesses operate in the digital landscape.',
                'news-3-back-title': 'Future Trends',
                'news-3-back-description': 'Discover the latest trends in software development including AI integration, cloud computing, and emerging technologies that are transforming the industry.',
                'news-category-4': 'Events',
                'news-4-title': 'Success Story: Client Case Study Showcase',
                'news-4-excerpt': 'Learn how we helped a major retail company increase their operational efficiency by 40% through our comprehensive custom software solutions. This detailed case study showcases our proven digital transformation approach, including advanced process automation, intelligent inventory management optimization, enhanced customer experience, and real-time analytics implementation with data-driven strategic decision-making that resulted in significant cost savings and improved performance metrics.',
                'news-4-back-title': 'Success Story',
                'news-4-back-description': 'Discover how our innovative solutions helped a major retail company achieve 40% efficiency improvement and transform their business operations.',
                'news-category-5': 'News',
                'news-5-title': 'SKYLINE Wins Best Software Innovation Award 2024',
                'news-5-excerpt': 'We are proud to announce that SKYLINE has been recognized for excellence in software innovation at the prestigious annual Technology Awards ceremony. This distinguished award acknowledges our pioneering work in AI and advanced cloud computing solutions, machine learning implementations, and our unwavering commitment to delivering innovative software that transforms businesses across various industries and drives digital transformation initiatives.',
                'news-5-back-title': 'Award Recognition',
                'news-5-back-description': 'Celebrate with us as we receive the prestigious Best Software Innovation Award 2024, recognizing our commitment to excellence and innovation.',
                'news-category-6': 'Updates',
                'news-6-title': 'New Mobile App Features Available Now',
                'news-6-excerpt': 'Our mobile app has been comprehensively updated with exciting new features including offline capabilities, enhanced security protocols, and significantly improved user interface design. The latest release offers elegant dark mode support, advanced instant notification system, sophisticated biometric authentication, real-time data synchronization, and a completely redesigned dashboard that provides superior accessibility and exceptional user experience across all mobile devices and platforms.',
                'news-6-back-title': 'Mobile App Update',
                'news-6-back-description': 'Experience the latest mobile app features including offline mode, enhanced security, and a completely redesigned user interface for better performance.',
                'read-more': 'Read More',
                'view-case-study': 'View Case Study',
                'learn-more': 'Learn More',
                'download-now': 'Download Now',
                'newsletter-title': 'Stay Updated',
                'newsletter-description': 'Subscribe to our newsletter and don\'t miss the latest news and updates',
                'newsletter-placeholder': 'Enter your email address',
                'newsletter-subscribe': 'Subscribe',
                'newsletter-success': 'Thank you for subscribing to our newsletter!',
                
                // Contact Us Page
                'contact-hero-title': 'Contact Us',
                'contact-hero-description': 'Get in touch with our team. We\'re here to help you transform your business with innovative software solutions.',
                'contact-form-title': 'Send us a Message',
                'contact-form-name': 'Full Name *',
                'contact-form-name-placeholder': 'Enter your full name',
                'contact-form-email': 'Email Address *',
                'contact-form-email-placeholder': 'Enter your email address',
                'contact-form-phone': 'Phone Number',
                'contact-form-phone-placeholder': 'Enter your phone number',
                'contact-form-company': 'Company Name',
                'contact-form-company-placeholder': 'Enter your company name',
                'contact-form-subject': 'Subject *',
                'contact-form-subject-select': 'Select a subject',
                'contact-form-subject-general': 'General Inquiry',
                'contact-form-subject-sales': 'Sales Question',
                'contact-form-subject-support': 'Technical Support',
                'contact-form-subject-partnership': 'Partnership',
                'contact-form-subject-demo': 'Request Demo',
                'contact-form-subject-other': 'Other',
                'contact-form-message': 'Message *',
                'contact-form-message-placeholder': 'Tell us how we can help you...',
                'contact-form-submit': 'Send Message',
                'contact-form-error': 'Please fill in all required fields',
                'contact-form-success': 'Thank you for your message! We will get back to you within 24 hours.',
                'contact-office-title': 'Our Office',
                'contact-office-address-1': '3rd floor, Qaisar Complex',
                'contact-office-address-2': 'Queen Rania St.',
                'contact-office-address-3': 'Amman, Jordan',
                'contact-phone-title': 'Phone',
                'contact-phone-main': 'Main Office:',
                'contact-phone-sales': 'Sales:',
                'contact-email-title': 'Email',
                'contact-email-general': 'General:',
                'contact-email-sales': 'Sales:',
                'contact-email-support': 'Support:',
                'contact-hours-title': 'Business Hours',
                'contact-hours-weekdays': 'Sunday - Thursday:',
                'contact-hours-weekdays-time': '9:00 AM - 5:00 PM (EST)',
                'contact-hours-weekend': 'Friday - Saturday:',
                'contact-hours-weekend-time': 'Closed',
                'contact-map-title': 'Find Us',
                'contact-map-subtitle': 'Visit our office or get directions to our location',
                'contact-map-click': 'Click to Open in Google Maps',
                'contact-map-address': '3rd floor, Qaisar Complex, Queen Rania St., Amman, Jordan',
                'contact-map-directions': 'Get Directions',
                
                // Navbar Translations
                'logo-tagline': 'Innovation Software',
                'nav-industries': 'Industries',
                'nav-why-choose': 'Why Choose Us',
                'nav-iso': 'ISO Consulting',
                'nav-iso-all': 'All ISO Standards',
                'nav-iso-9001': 'ISO 9001 - Quality Management',
                'nav-iso-27001': 'ISO 27001 - Information Security',
                'nav-iso-14001': 'ISO 14001 - Environmental',
                'nav-iso-45001': 'ISO 45001 - Health & Safety',
                'nav-iso-consultation': 'Get Consultation',
                'nav-portal': 'Client Portal'
            },
            ar: {
                // Navigation
                'nav-home': 'الرئيسية',
                'nav-about': 'من نحن',
                'nav-company-profile': 'الملف التعريفي للشركة',
                'nav-vision-mission': 'الرؤية والرسالة',
                'nav-leadership': 'فريق القيادة',
                'nav-values': 'قيمنا',
                'nav-partners': 'الشركاء الاستراتيجيون',
                'nav-alliances': 'التحالفات الاستراتيجية',
                'nav-clients': 'عملاؤنا',
                'nav-services': 'الخدمات',
                'nav-products': 'المنتجات والحلول',
                'nav-portfolio': 'معرض الأعمال',
                'nav-testimonials': 'الشهادات',
                'nav-events': 'الأحداث والأخبار',
                'nav-contact': 'اتصل بنا',
                'nav-download': 'مركز التحميل',
                'nav-iso': 'استشارات الأيزو',
                'nav-saas': 'برامج الساس',
                'nav-software-solutions': 'حلول البرمجيات',
                'nav-demo': 'احجز عرضك التجريبي',
                'nav-videos': 'فيديوهات المنتجات',
                'nav-client-portal': 'بوابة العملاء',
                
                // Common Elements
                'logo-tagline': 'برمجيات الابتكار',
                'get-started': 'ابدأ الآن',
                'learn-more': 'اعرف المزيد',
                'read-more': 'اقرأ المزيد',
                'contact-us': 'اتصل بنا',
                'call-us': 'اتصل بنا',
                'email-us': 'راسلنا',
                'follow-us': 'تابعنا',
                'subscribe': 'اشترك',
                'submit': 'إرسال',
                'send': 'إرسال',
                'cancel': 'إلغاء',
                'close': 'إغلاق',
                'back': 'رجوع',
                'next': 'التالي',
                'previous': 'السابق',
                'loading': 'جاري التحميل...',
                'error': 'خطأ',
                'success': 'نجح',
                'warning': 'تحذير',
                'info': 'معلومات',
                
                // Home Page
                'hero-title': 'مرحباً بك في سكايلاين برمجيات الابتكار',
                'hero-subtitle': 'تحويل الأفكار إلى واقع رقمي',
                'hero-description': 'نحن شركة رائدة في تطوير البرمجيات متخصصة في الحلول المبتكرة التي تدفع نمو الأعمال والتحول الرقمي.',
                'hero-cta': 'استكشف خدماتنا',
                'hero-cta-secondary': 'عرض معرض الأعمال',
                
                // About Page
                'about-title': 'حول سكايلاين برمجيات الابتكار',
                'about-subtitle': 'شريكك الموثوق في التكنولوجيا',
                'about-description': 'مع سنوات من الخبرة في تطوير البرمجيات، ساعدنا العديد من الشركات في تحقيق أهدافها الرقمية من خلال حلول تكنولوجية متطورة.',
                
                // Services
                'services-title': 'خدماتنا',
                'services-subtitle': 'حلول تكنولوجية شاملة',
                'web-development': 'تطوير المواقع',
                'web-development-desc': 'مواقع وتطبيقات ويب مخصصة مبنية بأحدث التقنيات',
                'mobile-apps': 'تطبيقات الهواتف',
                'mobile-apps-desc': 'تطبيقات محمولة أصلية ومتعددة المنصات لنظامي iOS و Android',
                'ai-ml': 'الذكاء الاصطناعي والتعلم الآلي',
                'ai-ml-desc': 'حلول ذكية مدعومة بالذكاء الاصطناعي',
                'cybersecurity': 'الأمن السيبراني',
                'cybersecurity-desc': 'احم عملك بحلول أمنية متقدمة',
                'cloud-infrastructure': 'البنية التحتية السحابية',
                'cloud-infrastructure-desc': 'حلول سحابية قابلة للتوسع للشركات الحديثة',
                
                // Contact
                'contact-title': 'اتصل بنا',
                'contact-subtitle': 'تواصل معنا',
                'contact-description': 'مستعد لبدء مشروعك؟ اتصل بنا اليوم للحصول على استشارة مجانية.',
                'contact-form-title': 'أرسل لنا رسالة',
                'contact-form-name': 'الاسم الكامل',
                'contact-form-email': 'عنوان البريد الإلكتروني',
                'contact-form-phone': 'رقم الهاتف',
                'contact-form-company': 'اسم الشركة',
                'contact-form-message': 'الرسالة',
                'contact-form-submit': 'إرسال الرسالة',
                'contact-info-title': 'معلومات الاتصال',
                'contact-address-title': 'مكتبنا',
                'contact-phone-title': 'الهاتف',
                'contact-email-title': 'البريد الإلكتروني',
                'contact-hours-title': 'ساعات العمل',
                'contact-main-office': 'المكتب الرئيسي',
                'contact-sales': 'المبيعات',
                'contact-general': 'عام',
                'contact-support': 'الدعم',
                'contact-sunday-thursday': 'الأحد - الخميس',
                'contact-hours': '9:00 ص - 5:00 م (بتوقيت الأردن)',
                
                // Footer
                'footer-company-desc': 'شركة رائدة في تطوير البرمجيات متخصصة في الحلول المبتكرة للشركات الحديثة.',
                'footer-quick-links': 'روابط سريعة',
                'footer-services': 'الخدمات',
                'footer-company': 'الشركة',
                'footer-support': 'الدعم',
                'footer-legal': 'قانوني',
                'footer-privacy': 'سياسة الخصوصية',
                'footer-terms': 'شروط الخدمة',
                'footer-cookies': 'سياسة ملفات تعريف الارتباط',
                'footer-newsletter': 'النشرة الإخبارية',
                'footer-newsletter-desc': 'اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات',
                'footer-newsletter-placeholder': 'أدخل بريدك الإلكتروني',
                'footer-newsletter-subscribe': 'اشترك',
                'footer-copyright': '© 2024 سكايلاين برمجيات الابتكار. جميع الحقوق محفوظة.',
                
                // AI Assistant
                'ai-assistant-title': 'المساعد الذكي',
                'ai-assistant-placeholder': 'اسألني أي شيء عن خدماتنا...',
                'ai-services-btn': 'الخدمات',
                'ai-pricing-btn': 'الأسعار',
                'ai-contact-btn': 'اتصل بنا',
                'ai-location-btn': 'الموقع',
                'ai-portfolio-btn': 'معرض الأعمال',
                
                // Accessibility
                'accessibility-title': 'أدوات إمكانية الوصول',
                'accessibility-font-size': 'حجم الخط',
                'accessibility-simple-font': 'خط بسيط',
                'accessibility-high-contrast': 'تباين عالي',
                'accessibility-screen-reader': 'قارئ الشاشة',
                'accessibility-keyboard-nav': 'التنقل بلوحة المفاتيح',
                
                // Language Switcher
                'language-switch': 'English',
                'language-current': 'العربية',
                
                // Products & Solutions Page
                'products-hero-title': 'منتجاتنا وحلولنا',
                'products-hero-description': 'اكتشف مجموعة شاملة من حلول البرمجيات ومنصات SaaS والأدوات المبتكرة المصممة لتحويل عمليات عملك',
                'products-hero-cta': 'احجز عرضك التوضيحي',
                'products-section-title': 'حلول البرمجيات',
                'products-section-subtitle': 'أدوات ومنصات شاملة لدفع عملك نحو الأمام',
                
                // Product Cards
                'erp-title': 'نظام تخطيط موارد المؤسسة',
                'erp-description': 'حل تخطيط موارد المؤسسة الكامل للشركات الحديثة',
                'erp-feature-1': 'إدارة مالية',
                'erp-feature-2': 'تحكم في المخزون',
                'erp-feature-3': 'الموارد البشرية والرواتب',
                'erp-feature-4': 'سلسلة التوريد',
                'erp-feature-5': 'ذكاء الأعمال',
                
                'crm-title': 'نظام إدارة علاقات العملاء',
                'crm-description': 'منصة إدارة علاقات العملاء لتعزيز المبيعات ورضا العملاء',
                'crm-feature-1': 'إدارة العملاء المحتملين',
                'crm-feature-2': 'خط أنابيب المبيعات',
                'crm-feature-3': 'دعم العملاء',
                'crm-feature-4': 'لوحة تحليلات',
                'crm-feature-5': 'تطبيق محمول',
                
                'ecommerce-title': 'منصة التجارة الإلكترونية',
                'ecommerce-description': 'منصة تجارة إلكترونية كاملة الميزات للشركات عبر الإنترنت',
                'ecommerce-feature-1': 'إدارة المنتجات',
                'ecommerce-feature-2': 'بوابة الدفع',
                'ecommerce-feature-3': 'معالجة الطلبات',
                'ecommerce-feature-4': 'أدوات التسويق',
                'ecommerce-feature-5': 'دعم متعدد المتاجر',
                
                'ai-title': 'تحليلات الذكاء الاصطناعي',
                'ai-description': 'تحليلات ذكية ورؤى مدعومة بالذكاء الاصطناعي',
                'ai-feature-1': 'تحليلات تنبؤية',
                'ai-feature-2': 'تصور البيانات',
                'ai-feature-3': 'تعلم الآلة',
                'ai-feature-4': 'تقارير فورية',
                'ai-feature-5': 'لوحات تحكم مخصصة',
                
                'cloud-title': 'الحلول السحابية',
                'cloud-description': 'بنية تحتية سحابية قابلة للتوسع وحلول الاستضافة',
                'cloud-feature-1': 'استضافة سحابية',
                'cloud-feature-2': 'نسخ احتياطي للبيانات',
                'cloud-feature-3': 'موازنة الأحمال',
                'cloud-feature-4': 'الأمان و SSL',
                'cloud-feature-5': 'مراقبة 24/7',
                'mobile-feature-3': 'التطوير متعدد المنصات',
                'mobile-feature-4': 'الإشعارات الفورية',
                'mobile-feature-5': 'الدعم بدون اتصال',
                'demo-software-title': 'برامج تجريبية',
                'demo-software-subtitle': 'حمل النسخ التجريبية وبرامج العرض التوضيحي لاختبار حلولنا',
                'demo-card-1-title': 'عرض SKYLINE ERP',
                'demo-card-1-description': 'نسخة تجريبية كاملة الميزات من نظام ERP مع بيانات وتهيئات نموذجية.',
                'demo-card-1-type': 'مثبت Windows',
                'demo-card-2-title': 'تجربة SKYLINE CRM',
                'demo-card-2-description': 'نسخة تجريبية لمدة 30 يوماً من منصة CRM مع الوظائف الكاملة والدعم.',
                'demo-card-2-type': 'تطبيق ويب',
                'demo-card-3-title': 'وثائق API والأمثلة',
                'demo-card-3-description': 'وثائق API كاملة مع أمثلة عملية وأدلة التكامل.',
                'demo-card-3-type': 'وثائق',
                'demo-card-4-title': 'قوالب التكوين',
                'demo-card-4-description': 'قوالب مبنية مسبقاً وتكوينات نموذجية للإعداد السريع.',
                'demo-card-4-type': 'ملفات القوالب',
                'download-erp-demo': 'حمل عرض ERP',
                'download-crm-trial': 'حمل تجربة CRM',
                'download-api-docs': 'حمل وثائق API',
                'download-templates': 'حمل القوالب',
                
                // Download Center Arabic Translations
                'download-hero-title': 'مركز التحميل',
                'download-hero-description': 'الوصول إلى مجموعتنا الشاملة من الموارد والبرمجيات والوثائق',
                'download-hero-badge': 'تحميلات مجانية متاحة',
                'filter-all': 'جميع الموارد',
                'filter-brochures': 'الكتيبات',
                'filter-whitepapers': 'الأوراق البيضاء',
                'filter-trials': 'النسخ التجريبية',
                'filter-demos': 'برامج العرض التوضيحي',
                'download-brochures-title': 'الكتيبات',
                'download-whitepapers-title': 'الأوراق البيضاء',
                'download-trials-title': 'النسخ التجريبية',
                'download-demos-title': 'برامج العرض التوضيحي',
                'download-stat-1': 'تحميلات هذا الشهر',
                'download-stat-2': 'موارد متاحة',
                'download-stat-3': 'دعم التحميل',
                'download-stat-4': 'وصول مجاني',
                'download-started': 'بدأ التحميل',
                'download-note': 'في التطبيق الحقيقي، سيبدأ هذا التحميل الفعلي.',
                
                // Client Portal Arabic Translations
                'portal-hero-title': 'الوصول إلى بوابة العملاء',
                'portal-hero-description': 'تسجيل دخول آمن للعملاء المشتركين. الوصول إلى مشاريعك ومستنداتك وتذاكر الدعم والموارد الحصرية في لوحة تحكم مركزية واحدة.',
                'portal-login-title': 'مرحباً بعودتك',
                'portal-login-subtitle': 'سجل دخولك للوصول إلى لوحة تحكم العميل',
                'portal-email-label': 'عنوان البريد الإلكتروني',
                'portal-email-placeholder': 'أدخل بريدك الإلكتروني',
                'portal-password-label': 'كلمة المرور',
                'portal-password-placeholder': 'أدخل كلمة المرور',
                'portal-remember-me': 'تذكرني',
                'portal-forgot-password': 'نسيت كلمة المرور؟',
                'portal-sign-in': 'تسجيل الدخول',
                'portal-features-title': 'ميزات البوابة',
                'portal-features-subtitle': 'كل ما تحتاجه لإدارة مشاريعك والبقاء على اتصال مع فريقنا',
                'portal-feature-1-title': 'لوحة تحكم المشاريع',
                'portal-feature-1-description': 'تتبع تقدم المشاريع والمعالم والنتائج في الوقت الفعلي مع لوحات تحكم تفاعلية وتقارير مفصلة.',
                'portal-feature-2-title': 'إدارة المستندات',
                'portal-feature-2-description': 'الوصول إلى جميع مستندات المشروع والعقود والموارد في مكتبة رقمية آمنة ومنظمة.',
                'portal-feature-3-title': 'مركز الدعم',
                'portal-feature-3-description': 'إرسال تذاكر الدعم وتتبع حالة الحل والوصول إلى قاعدة المعرفة للحصول على مساعدة فورية.',
                'portal-feature-4-title': 'التحليلات والتقارير',
                'portal-feature-4-description': 'عرض تحليلات مفصلة ومقاييس الأداء وتقارير مخصصة مصممة لاحتياجات عملك.',
                'portal-feature-5-title': 'التواصل مع الفريق',
                'portal-feature-5-description': 'المراسلة المباشرة مع فريق مشروعك ومشاركة الملفات وأدوات مساحة العمل التعاونية.',
                'portal-feature-6-title': 'الوصول المحمول',
                'portal-feature-6-description': 'توافق كامل مع الأجهزة المحمولة - الوصول إلى بوابتك من أي مكان وفي أي وقت وعلى أي جهاز.',
                'portal-security-title': 'أمان على مستوى المؤسسات',
                'portal-security-description': 'بياناتك محمية بإجراءات أمان رائدة في الصناعة ومعايير الامتثال',
                'portal-security-ssl': 'تشفير SSL',
                'portal-security-2fa': 'المصادقة الثنائية',
                'portal-security-soc2': 'متوافق مع SOC 2',
                'portal-security-gdpr': 'جاهز لـ GDPR',
                'portal-help-need-help': 'تحتاج مساعدة؟',
                'portal-help-watch-demo': 'شاهد العرض التوضيحي',
                'portal-help-contact-support': 'اتصل بالدعم',
                'portal-help-user-guide': 'دليل المستخدم',
                'portal-login-success': 'تم تسجيل الدخول بنجاح! جاري التوجيه إلى لوحة التحكم...',
                'portal-login-redirect': 'عرض توضيحي: سيتم توجيهك إلى لوحة تحكم العميل الآن.',
                'portal-login-error': 'بيانات اعتماد غير صحيحة. جرب demo@skyline.com / demo123',
                
                'mobile-title': 'التطبيقات المحمولة',
                'mobile-description': 'تطبيقات محمولة أصلية لنظامي iOS و Android',
                'mobile-feature-1': 'تطوير iOS',
                'mobile-feature-2': 'تطوير Android',
                'mobile-feature-3': 'متعدد المنصات',
                'mobile-feature-4': 'إشعارات فورية',
                'mobile-feature-5': 'دعم بدون إنترنت',
                
                'product-cta': 'شاهد العرض التوضيحي',
                
                // Demo Software Section
                'demo-section-title': 'برامج تجريبية',
                'demo-section-subtitle': 'حمل العروض التوضيحية التفاعلية والموارد لاستكشاف حلولنا',
                'demo-card-1-title': 'عرض توضيحي تفاعلي للمنتج',
                'demo-card-1-description': 'عرض توضيحي تفاعلي لمنتجاتنا البرمجية الرائدة وميزاتها.',
                'demo-card-1-type': 'عرض قابل للتنفيذ',
                'demo-card-2-title': 'سلسلة دروس فيديو',
                'demo-card-2-description': 'دروس فيديو شاملة تغطي جميع جوانب حلولنا البرمجية.',
                'demo-card-2-type': 'مجموعة فيديو',
                'demo-card-3-title': 'وثائق API والأمثلة',
                'demo-card-3-description': 'وثائق API كاملة مع أمثلة كود عملية وأدلة التكامل.',
                'demo-card-3-type': 'وثائق',
                'demo-card-4-title': 'قوالب التكوين',
                'demo-card-4-description': 'قوالب مُعدة مسبقاً وتكوينات عينة للإعداد السريع.',
                'demo-card-4-type': 'ملفات القوالب',
                'download-demo': 'حمل العرض التوضيحي',
                'download-videos': 'حمل الفيديوهات',
                'download-api-docs': 'حمل وثائق API',
                'download-templates': 'حمل القوالب',
                
                // Demo Booking Section
                'demo-booking-title': 'احجز عرضك التوضيحي',
                'demo-booking-subtitle': 'اختبر حلولنا مباشرة مع عرض توضيحي مخصص',
                'demo-booking-form-title': 'جدولة عرض توضيحي مجاني',
                'demo-booking-form-description': 'سيقوم خبراؤنا بإرشادك عبر حلولنا والإجابة على جميع أسئلتك. اختر الوقت الذي يناسبك.',
                'demo-booking-button': 'احجز العرض التوضيحي الآن',
                
                // Form Fields
                'form-name-label': 'الاسم الكامل *',
                'form-name-placeholder': 'أدخل اسمك الكامل',
                'form-company-label': 'اسم الشركة *',
                'form-company-placeholder': 'أدخل اسم شركتك',
                'form-email-label': 'عنوان البريد الإلكتروني *',
                'form-email-placeholder': 'أدخل بريدك الإلكتروني',
                'form-phone-label': 'رقم الهاتف',
                'form-phone-placeholder': 'أدخل رقم هاتفك',
                'form-product-label': 'المنتج المهتم به *',
                'form-product-placeholder': 'اختر منتج',
                'form-date-label': 'التاريخ المفضل *',
                'form-time-label': 'الوقت المفضل *',
                'form-time-placeholder': 'اختر وقت',
                'form-message-label': 'ملاحظات إضافية',
                'form-message-placeholder': 'أخبرنا عن احتياجاتك أو أسئلتك المحددة',
                
                // Time Options
                'time-09-00': '9:00 صباحاً',
                'time-10-00': '10:00 صباحاً',
                'time-11-00': '11:00 صباحاً',
                'time-12-00': '12:00 ظهراً',
                'time-14-00': '2:00 مساءً',
                'time-15-00': '3:00 مساءً',
                'time-16-00': '4:00 مساءً',
                
                // Videos Section
                'videos-section-title': 'فيديوهات المنتجات',
                'videos-section-subtitle': 'شاهد العروض التوضيحية المفصلة والدروس التعليمية لحلولنا',
                'video-erp-title': 'SKYLINE ERP - جولة شاملة',
                'video-erp-description': 'تعلم كيف يمكن لحل ERP الخاص بنا تبسيط جميع عمليات عملك من المالية إلى إدارة المخزون.',
                'video-erp-duration': '15:30 دقيقة',
                'video-crm-title': 'SKYLINE CRM - المبيعات وإدارة العملاء',
                'video-crm-description': 'اكتشف كيف يمكن لمنصة CRM الخاصة بنا تعزيز أداء مبيعاتك وتحسين علاقات العملاء.',
                'video-crm-duration': '12:45 دقيقة',
                'video-ecommerce-title': 'SKYLINE Commerce - إعداد المتجر الإلكتروني',
                'video-ecommerce-description': 'دليل خطوة بخطوة لإعداد متجرك الإلكتروني باستخدام منصة التجارة الإلكترونية الخاصة بنا.',
                'video-ecommerce-duration': '18:20 دقيقة',
                'video-ai-title': 'SKYLINE AI Analytics - رؤى البيانات',
                'video-ai-description': 'استكشف قوة التحليلات المدعومة بالذكاء الاصطناعي وكيف يمكنها تحويل قرارات عملك.',
                'video-ai-duration': '20:15 دقيقة',
                'video-cloud-title': 'SKYLINE Cloud - نظرة عامة على البنية التحتية',
                'video-cloud-description': 'تعلم عن حلول الاستضافة السحابية الخاصة بنا وكيف يمكنها التوسع مع احتياجات عملك.',
                'video-cloud-duration': '14:30 دقيقة',
                'video-mobile-title': 'SKYLINE Mobile - تطوير التطبيقات',
                'video-mobile-description': 'شاهد كيف ننشئ تطبيقات محمولة قوية تعمل بسلاسة عبر جميع الأجهزة.',
                'video-mobile-duration': '16:45 دقيقة',
                
                // Cards and Content
                'projects-completed': 'مشاريع مكتملة',
                'happy-clients': 'عملاء راضون',
                'years-experience': 'سنوات خبرة',
                'team-members': 'أعضاء الفريق',
                'custom-software': 'تطوير برمجيات مخصصة',
                'custom-software-desc': 'حلول مصممة خصيصاً لتلبية متطلبات عملك المحددة',
                'web-applications': 'تطبيقات الويب',
                'web-applications-desc': 'تطبيقات ويب حديثة ومتجاوبة بأحدث التقنيات',
                'mobile-solutions': 'حلول الهواتف المحمولة',
                'mobile-solutions-desc': 'تطبيقات محمولة أصلية ومتعددة المنصات',
                'ai-integration': 'تكامل الذكاء الاصطناعي',
                'ai-integration-desc': 'حلول الأتمتة الذكية والتعلم الآلي',
                'cloud-services': 'الخدمات السحابية',
                'cloud-services-desc': 'بنية تحتية سحابية قابلة للتوسع والنشر',
                'cybersecurity': 'حلول الأمن السيبراني',
                'cybersecurity-desc': 'إجراءات أمنية متقدمة لحماية عملك',
                'expert-team': 'فريق خبير',
                'expert-team-desc': 'مطورونا ذوو الخبرة يقدمون حلولاً عالية الجودة',
                'cutting-edge': 'تقنيات متطورة',
                'cutting-edge-desc': 'نستخدم أحدث التقنيات والأطر',
                '24-7-support': 'دعم على مدار الساعة',
                '24-7-support-desc': 'دعم فني وصيانة على مدار الساعة',
                'proven-track': 'سجل حافل مثبت',
                'proven-track-desc': 'تم تسليم أكثر من 500 مشروع بنجاح عبر مختلف الصناعات',
                'innovative-solutions': 'حلول مبتكرة',
                'innovative-solutions-desc': 'نهج إبداعي للتحديات التجارية المعقدة',
                'client-focused': 'نهج يركز على العميل',
                'client-focused-desc': 'نعطي الأولوية لأهداف ومتطلبات عملك',
                'quality-assurance': 'ضمان الجودة',
                'quality-assurance-desc': 'عمليات اختبار ومراقبة جودة صارمة',
                'timely-delivery': 'تسليم في الوقت المحدد',
                'timely-delivery-desc': 'نلتزم بالمواعيد النهائية دون المساس بالجودة',
                'competitive-pricing': 'أسعار تنافسية',
                'competitive-pricing-desc': 'حلول فعالة من حيث التكلفة توفر قيمة ممتازة',
                'scalable-solutions': 'حلول قابلة للتوسع',
                'scalable-solutions-desc': 'حلول تنمو مع احتياجات عملك',
                'industry-expertise': 'خبرة صناعية',
                'industry-expertise-desc': 'معرفة عميقة عبر قطاعات صناعية متعددة',
                'modern-frameworks': 'أطر حديثة',
                'modern-frameworks-desc': 'مبني بأحدث وأكثر التقنيات موثوقية',
                'responsive-design': 'تصميم متجاوب',
                'responsive-design-desc': 'تجربة مثالية عبر جميع الأجهزة وأحجام الشاشات',
                'seamless-integration': 'تكامل سلس',
                'seamless-integration-desc': 'تكامل سهل مع أنظمتك الموجودة',
                'data-security': 'أمان البيانات',
                'data-security-desc': 'أمان على مستوى المؤسسات لبياناتك الحساسة',
                'performance-optimization': 'تحسين الأداء',
                'performance-optimization-desc': 'محسن للسرعة والكفاءة والموثوقية',
                'user-experience': 'تجربة المستخدم',
                'user-experience-desc': 'واجهات مستخدم بديهية وجذابة',
                'business-automation': 'أتمتة الأعمال',
                'business-automation-desc': 'تبسيط عملياتك بالأتمتة الذكية',
                'digital-transformation': 'التحول الرقمي',
                'digital-transformation-desc': 'حول عملك للعصر الرقمي',
                'consultation': 'استشارة مجانية',
                'consultation-desc': 'احصل على نصيحة خبير حول متطلبات مشروعك',
                'project-management': 'إدارة المشاريع',
                'project-management-desc': 'إدارة وتسليم مشاريع مهنية',
                'maintenance-support': 'الصيانة والدعم',
                'maintenance-support-desc': 'خدمات دعم وصيانة مستمرة',
                'training': 'التدريب والتوثيق',
                'training-desc': 'تدريب وتوثيق شامل مقدم',
                'updates': 'تحديثات منتظمة',
                'updates-desc': 'حافظ على برمجياتك محدثة بأحدث الميزات',
                'monitoring': 'مراقبة الأداء',
                'monitoring-desc': 'مراقبة وتحسين مستمر',
                'backup-recovery': 'النسخ الاحتياطي والاسترداد',
                'backup-recovery-desc': 'حلول نسخ احتياطي واسترداد آمنة من الكوارث',
                'compliance': 'الامتثال',
                'compliance-desc': 'ضمان الامتثال للمعايير واللوائح الصناعية',
                
                // Additional translations for index.html
                'who-we-are': 'من نحن؟',
                'about-description': 'سكايلاين للابتكار هي مزود رائد لحلول تخطيط موارد المؤسسات (ERP) والبرمجيات في الأردن، مكرسة لتمكين الشركات من خلال التكنولوجيا المتطورة والتحول الرقمي. مع التزام بالتميز والابتكار ورضا العملاء، نقدم حلول برمجية مخصصة تعمل على تبسيط العمليات وتحسين اتخاذ القرارات ودفع النمو المستدام.',
                'about-expertise': 'تمتد خبرتنا عبر صناعات متعددة، مما يمكن المنظمات من أتمتة سير العمل ودمج الأنظمة وتحسين العمليات التجارية بكفاءة ودقة.',
                'trusted-businesses': 'موثوق من قبل 500+ شركة',
                'expert-level': 'مستوى خبير',
                'custom-built': 'مبني مخصص',
                'future-ready': 'جاهز للمستقبل',
                'user-centric': 'مركز على المستخدم',
                'enterprise-grade': 'مستوى المؤسسات',
                'always-available': 'متاح دائماً',
                'deep-market-knowledge': 'معرفة عميقة بالسوق',
                'tailored-solutions': 'حلول مخصصة',
                'scalable-systems': 'أنظمة قابلة للتوسع',
                'ai-machine-learning': 'الذكاء الاصطناعي والتعلم الآلي',
                'cloud-computing': 'الحوسبة السحابية',
                'intuitive-design': 'تصميم بديهي',
                'maximum-efficiency': 'أقصى كفاءة',
                'high-end-encryption': 'تشفير عالي الجودة',
                'industry-compliance': 'امتثال صناعي',
                'training-programs': 'برامج التدريب',
                
                // Featured Solutions Badges
                'popular-badge': 'شائع',
                'featured-badge': 'مميز',
                'trending-badge': 'رائج',
                
                // AI & Machine Learning Features
                'predictive-analytics': 'التحليلات التنبؤية',
                'natural-language-processing': 'معالجة اللغة الطبيعية',
                'computer-vision': 'الرؤية الحاسوبية',
                'recommendation-systems': 'أنظمة التوصية',
                'explore-ai-solutions': 'استكشف حلول الذكاء الاصطناعي',
                
                // Custom Software Features
                'desktop-software': 'برامج سطح المكتب',
                'api-development': 'تطوير واجهات برمجة التطبيقات',
                'start-your-project': 'ابدأ مشروعك',
                
                // Cloud Infrastructure Features
                'cloud-migration': 'الانتقال إلى السحابة',
                'devops-automation': 'أتمتة DevOps',
                'microservices-architecture': 'هندسة الخدمات المصغرة',
                'serverless-solutions': 'الحلول الخادمية',
                'go-cloud-native': 'اذهب إلى السحابة الأصلية',
                
                // Industries Section
                'industries-title-prefix': 'الصناعات',
                'industries-title-main': 'التي نخدمها',
                'industries-description-start': 'حلولنا في تخطيط موارد المؤسسات والبرمجيات تخدم مجموعة متنوعة من الصناعات،',
                'transforming-businesses': 'تحويل الأعمال',
                'industries-description-end': 'من خلال التكنولوجيا المبتكرة.',
                'trusted-companies': 'موثوق من قبل 200+ شركة',
                
                // Industry Titles
                'manufacturing-title': 'التصنيع',
                'retail-title': 'التجارة الإلكترونية والتجزئة',
                'healthcare-title': 'الرعاية الصحية',
                'finance-title': 'المالية والمصرفية',
                'logistics-title': 'اللوجستيات وسلسلة التوريد',
                'education-title': 'التعليم والحكومة',
                
                // Industry Descriptions
                'manufacturing-description': 'حلول تخطيط الإنتاج وإدارة المخزون ومراقبة الجودة.',
                'retail-description': 'حلول تتبع المبيعات وتكامل نقاط البيع ومشاركة العملاء.',
                'healthcare-description': 'حلول إدارة سجلات المرضى والفواتير وتتبع الامتثال.',
                'finance-description': 'حلول المحاسبة وإدارة المخاطر والتقارير المالية.',
                'logistics-description': 'حلول تتبع الأسطول وإدارة المستودعات والمشتريات.',
                'education-description': 'حلول أنظمة معلومات الطلاب والموارد البشرية وأتمتة الإدارة.',
                
                // Industry Features
                'production-planning': 'تخطيط الإنتاج',
                'quality-control': 'مراقبة الجودة',
                'pos-integration': 'تكامل نقاط البيع',
                'customer-analytics': 'تحليلات العملاء',
                'patient-records': 'سجلات المرضى',
                'compliance-tracking': 'تتبع الامتثال',
                'risk-management': 'إدارة المخاطر',
                'financial-reporting': 'التقارير المالية',
                'fleet-tracking': 'تتبع الأسطول',
                'warehouse-management': 'إدارة المستودعات',
                'student-systems': 'أنظمة الطلاب',
                'hr-automation': 'أتمتة الموارد البشرية',
                
                // Industry Stats
                'efficiency': 'الكفاءة',
                'growth': 'النمو',
                'accuracy': 'الدقة',
                'security': 'الأمان',
                'cost-reduction': 'تقليل التكاليف',
                'automation': 'الأتمتة',
                
                // CTA Section
                'cta-description-start': 'دعنا نناقش كيف يمكن لحلولنا المبتكرة أن تدفع عملك إلى الأمام.',
                'cta-description-end': 'تواصل مع فريقنا الخبير اليوم.',
                
                // Footer
                'office-details': 'تفاصيل المكتب',
                'visit-office': 'زيارة المكتب',
                
                // About Page
                'about-title': 'من نحن - SKYLINE Innovation Software',
                'about-hero-title': 'حول سكايلاين برمجيات الابتكار',
                'about-hero-description': 'شريكك الموثوق في التكنولوجيا لحلول البرمجيات المبتكرة التي تحول الأعمال وتدفع النمو الرقمي.',
                'about-company-title': 'سكايلاين برمجيات الابتكار',
                'ready-to-start': 'هل أنت مستعد لبدء مشروعك؟',
                
                // ISO Page
                'iso-title': 'استشارات ISO - SKYLINE Innovation Software',
                
                // ISO Consulting Page
                'iso-hero-title': 'استشارات ISO',
                'iso-hero-description': 'احقق الامتثال للمعايير الدولية مع خدمات استشارات ISO المتخصصة لدينا. نساعد مؤسستك على تنفيذ وصيانة وتحسين أنظمة إدارة الجودة.',
                'iso-hero-cta': 'استكشف معايير ISO',
                'iso-standards-section-title': 'معايير ISO',
                'iso-standards-section-subtitle': 'خدمات استشارية شاملة لجميع معايير ISO الرئيسية',
                
                // Category Filters
                'iso-filter-all': 'جميع المعايير',
                'iso-filter-quality': 'إدارة الجودة',
                'iso-filter-security': 'الأمان',
                'iso-filter-environmental': 'البيئة',
                'iso-filter-safety': 'السلامة',
                
                // ISO 9001
                'iso-9001-badge': 'شائع',
                'iso-9001-subtitle': 'أنظمة إدارة الجودة',
                'iso-9001-description': 'معيار إدارة الجودة الأكثر اعترافاً في العالم، يساعد المؤسسات على ضمان الجودة المتسقة ورضا العملاء.',
                'iso-9001-feature-1': 'نظام إدارة الجودة',
                'iso-9001-feature-2': 'رضا العملاء',
                'iso-9001-feature-3': 'التحسين المستمر',
                'iso-9001-feature-4': 'تحسين العمليات',
                'iso-9001-cta': 'احصل على استشارات ISO 9001',
                
                // ISO 27001
                'iso-27001-badge': 'أمان',
                'iso-27001-subtitle': 'إدارة أمان المعلومات',
                'iso-27001-description': 'المعيار الدولي لأنظمة إدارة أمان المعلومات، يحمي المعلومات الحساسة للشركة والعملاء.',
                'iso-27001-feature-1': 'أمان المعلومات',
                'iso-27001-feature-2': 'إدارة المخاطر',
                'iso-27001-feature-3': 'حماية البيانات',
                'iso-27001-feature-4': 'الأمن السيبراني',
                'iso-27001-cta': 'احصل على استشارات ISO 27001',
                
                // ISO 14001
                'iso-14001-badge': 'بيئي',
                'iso-14001-subtitle': 'أنظمة الإدارة البيئية',
                'iso-14001-description': 'ساعد مؤسستك على تقليل التأثير البيئي والامتثال للوائح البيئية.',
                'iso-14001-feature-1': 'الإدارة البيئية',
                'iso-14001-feature-2': 'تقليل النفايات',
                'iso-14001-feature-3': 'كفاءة الطاقة',
                'iso-14001-feature-4': 'الامتثال التنظيمي',
                'iso-14001-cta': 'احصل على استشارات ISO 14001',
                
                // ISO 45001
                'iso-45001-badge': 'سلامة',
                'iso-45001-subtitle': 'الصحة والسلامة المهنية',
                'iso-45001-description': 'أنظمة إدارة الصحة والسلامة المهنية لحماية الموظفين وإنشاء أماكن عمل أكثر أماناً.',
                'iso-45001-feature-1': 'سلامة مكان العمل',
                'iso-45001-feature-2': 'تقييم المخاطر',
                'iso-45001-feature-3': 'منع الحوادث',
                'iso-45001-feature-4': 'صحة الموظفين',
                'iso-45001-cta': 'احصل على استشارات ISO 45001',
                
                // ISO 20000
                'iso-20000-badge': 'خدمات تقنية',
                'iso-20000-subtitle': 'إدارة الخدمات التقنية',
                'iso-20000-description': 'المعيار الدولي لإدارة الخدمات التقنية، يضمن تقديم فعال للخدمات التقنية للعمل والعملاء.',
                'iso-20000-feature-1': 'إدارة الخدمات التقنية',
                'iso-20000-feature-2': 'تقديم الخدمات',
                'iso-20000-feature-3': 'محاذاة ITIL',
                'iso-20000-feature-4': 'رضا العملاء',
                'iso-20000-cta': 'احصل على استشارات ISO 20000',
                
                // ISO 22000
                'iso-22000-badge': 'سلامة الغذاء',
                'iso-22000-subtitle': 'إدارة سلامة الغذاء',
                'iso-22000-description': 'أنظمة إدارة سلامة الغذاء للمؤسسات في سلسلة الغذاء، من المزرعة إلى المائدة.',
                'iso-22000-feature-1': 'إدارة سلامة الغذاء',
                'iso-22000-feature-2': 'تكامل HACCP',
                'iso-22000-feature-3': 'سلامة سلسلة التوريد',
                'iso-22000-feature-4': 'التحكم في المخاطر',
                'iso-22000-cta': 'احصل على استشارات ISO 22000',
                
                // ISO 13485
                'iso-13485-badge': 'طبي',
                'iso-13485-subtitle': 'جودة الأجهزة الطبية',
                'iso-13485-description': 'أنظمة إدارة الجودة للأجهزة الطبية، تضمن منتجات طبية آمنة وفعالة.',
                'iso-13485-feature-1': 'جودة الأجهزة الطبية',
                'iso-13485-feature-2': 'الامتثال التنظيمي',
                'iso-13485-feature-3': 'إدارة المخاطر',
                'iso-13485-feature-4': 'سلامة المنتج',
                'iso-13485-cta': 'احصل على استشارات ISO 13485',
                
                // ISO 50001
                'iso-50001-badge': 'طاقة',
                'iso-50001-subtitle': 'أنظمة إدارة الطاقة',
                'iso-50001-description': 'أنظمة إدارة الطاقة لمساعدة المؤسسات على تحسين أداء الطاقة وتقليل التكاليف.',
                'iso-50001-feature-1': 'إدارة الطاقة',
                'iso-50001-feature-2': 'تقليل التكاليف',
                'iso-50001-feature-3': 'البصمة الكربونية',
                'iso-50001-feature-4': 'الاستدامة',
                'iso-50001-cta': 'احصل على استشارات ISO 50001',
                
                // ISO 37001
                'iso-37001-badge': 'مكافحة الرشوة',
                'iso-37001-subtitle': 'إدارة مكافحة الرشوة',
                'iso-37001-description': 'أنظمة إدارة مكافحة الرشوة لمساعدة المؤسسات على منع وكشف ومعالجة الرشوة.',
                'iso-37001-feature-1': 'ضوابط مكافحة الرشوة',
                'iso-37001-feature-2': 'ثقافة الامتثال',
                'iso-37001-feature-3': 'تقييم المخاطر',
                'iso-37001-feature-4': 'إدارة الأخلاقيات',
                'iso-37001-cta': 'احصل على استشارات ISO 37001',
                
                // CTA Section
                'iso-cta-title': 'مستعد للحصول على شهادة ISO؟',
                'iso-cta-description': 'ابدأ رحلة شهادة ISO الخاصة بك اليوم. تواصل مع خبرائنا للحصول على استشارة مجانية وخطة تنفيذ مخصصة.',
                'iso-cta-button-1': 'تواصل معنا الآن',
                'iso-cta-button-2': 'جدولة استشارة',
                
                // Testimonials Page
                'testimonials-title': 'الشهادات ودراسات الحالة - SKYLINE Innovation Software',
                
                // Testimonials & Case Studies Page
                'testimonials-hero-title': 'قصص النجاح',
                'testimonials-hero-description': 'اكتشف كيف حولت SKYLINE الأعمال عبر الصناعات من خلال الحلول البرمجية المبتكرة وتقديم الخدمات الاستثنائية.',
                'testimonials-stat-1': 'عميل سعيد',
                'testimonials-stat-2': 'معدل النجاح',
                'testimonials-stat-3': 'سنة خبرة',
                'testimonials-stat-4': 'صناعة خدمت',
                'testimonials-section-title': 'شهادات العملاء',
                'testimonials-section-subtitle': 'استمع إلى ما يقوله عملاؤنا عن تجربتهم في العمل مع SKYLINE',
                
                // Testimonials
                'testimonial-1-text': '"حولت SKYLINE عملياتنا التجارية بالكامل بحلول ERP الخاصة بهم. كان التنفيذ سلساً، وفريق الدعم استثنائي. لقد شهدنا زيادة بنسبة 40% في الكفاءة منذ بدء التشغيل."',
                'testimonial-1-name': 'جون ديفيدسون',
                'testimonial-1-position': 'الرئيس التنفيذي، صناعات تيك كورب',
                'testimonial-1-company': '🏢 شركة فورتشن 500',
                'testimonial-2-text': '"نظام CRM المخصص الذي طورته SKYLINE أحدث ثورة في طريقة إدارة علاقات العملاء. زادت إنتاجية فريق المبيعات لدينا بنسبة 60%، ودرجات رضا العملاء في أعلى مستوياتها على الإطلاق."',
                'testimonial-2-name': 'سارة ميتشيل',
                'testimonial-2-position': 'نائب رئيس المبيعات، حلول جلوبال تيك',
                'testimonial-2-company': '🚀 شركة ناشئة تقنية',
                'testimonial-3-text': '"منصة التجارة الإلكترونية من SKYLINE ساعدتنا في توسيع حضورنا الإلكتروني عالمياً. المعمارية القابلة للتوسع والميزات القوية دعمت نمونا بنسبة 300% خلال العامين الماضيين."',
                'testimonial-3-name': 'مايكل رودريغيز',
                'testimonial-3-position': 'المؤسس، ريتيل ماكس',
                'testimonial-3-company': '🛒 رائد التجارة الإلكترونية',
                'testimonial-4-text': '"حل التحليلات بالذكاء الاصطناعي الذي قدمته SKYLINE أعطانا رؤى غير مسبوقة في عملياتنا. لقد حسنا سلسلة التوريد وقللنا التكاليف بنسبة 25% مع تحسين أوقات التسليم."',
                'testimonial-4-name': 'ليزا وانغ',
                'testimonial-4-position': 'مدير العمليات، لوجي فلو الدولية',
                'testimonial-4-company': '📦 عملاق اللوجستيات',
                'testimonial-5-text': '"تطوير التطبيق المحمول من SKYLINE تجاوز توقعاتنا. واجهة المستخدم سهلة الاستخدام والوظائف القوية أدت إلى أكثر من مليون تحميل وتقييم 4.8 نجمة في متاجر التطبيقات."',
                'testimonial-5-name': 'ديفيد روبرتس',
                'testimonial-5-position': 'مدير المنتج، فينانس أب',
                'testimonial-5-company': '💰 مبتكر التكنولوجيا المالية',
                'testimonial-6-text': '"خدمات الهجرة السحابية التي قدمتها SKYLINE كانت سلسة وفعالة. لقد قللنا تكاليف تقنية المعلومات بنسبة 35% مع تحسين موثوقية النظام والأداء بشكل كبير."',
                'testimonial-6-name': 'أماندا كيم',
                'testimonial-6-position': 'مدير التكنولوجيا، حلول هيلث تيك',
                'testimonial-6-company': '🏥 رائد الرعاية الصحية',
                
                // Case Studies
                'case-studies-section-title': 'دراسات الحالة',
                'case-studies-section-subtitle': 'قصص نجاح مفصلة تعرض خبرتنا وتأثيرنا',
                'case-study-1-category': 'تنفيذ ERP',
                'case-study-1-title': 'عملاق التصنيع يبسط العمليات',
                'case-study-1-description': 'شركة تصنيع رائدة تضم أكثر من 5000 موظف تحتاج إلى دمج أنظمتها المجزأة. حلول ERP الشاملة لدينا وحدت عملياتها عبر 15 موقعاً.',
                'case-study-1-metric-1': 'تقليل التكلفة',
                'case-study-1-metric-2': 'زيادة الكفاءة',
                'case-study-1-metric-3': 'اعتماد المستخدمين',
                'case-study-2-category': 'منصة التجارة الإلكترونية',
                'case-study-2-title': 'سلسلة تجزئة تتحول رقمياً',
                'case-study-2-description': 'سلسلة تجزئة تقليدية تضم أكثر من 200 متجر أرادت إنشاء حضور إلكتروني قوي. منصة التجارة الإلكترونية المخصصة لدينا مكنت تجارب متعددة القنوات سلسة.',
                'case-study-2-metric-1': 'المبيعات الإلكترونية',
                'case-study-2-metric-2': 'عملاء جدد',
                'case-study-2-metric-3': 'نمو الإيرادات',
                'case-study-3-category': 'الذكاء الاصطناعي والتحليلات',
                'case-study-3-title': 'التحليلات التنبؤية للخدمات المالية',
                'case-study-3-description': 'بنك كبير يحتاج إلى تحليلات متقدمة لتحسين تقييم المخاطر وكشف الاحتيال. حلولنا المدعومة بالذكاء الاصطناعي تعالج ملايين المعاملات يومياً.',
                'case-study-3-metric-1': 'تقليل الاحتيال',
                'case-study-3-metric-2': 'تحسين المخاطر',
                'case-study-3-metric-3': 'توفير التكاليف',
                'case-study-4-category': 'التطبيق المحمول',
                'case-study-4-title': 'تطبيق الرعاية الصحية يصل لمليون مستخدم',
                'case-study-4-description': 'شركة ناشئة في الرعاية الصحية تحتاج إلى تطبيق محمول شامل لإدارة المرضى. حلولنا تخدم الآن أكثر من مليون مستخدم عبر 20 دولة.',
                'case-study-4-metric-1': 'مستخدم نشط',
                'case-study-4-metric-2': 'تقييم التطبيق',
                'case-study-4-metric-3': 'دولة',
                'case-study-cta': 'اقرأ دراسة الحالة الكاملة',
                
                // Video Testimonials
                'video-testimonials-section-title': 'الشهادات المرئية',
                'video-testimonials-section-subtitle': 'شاهد عملاؤنا يشاركون قصص نجاحهم',
                'video-1-title': 'شهادة الرئيس التنفيذي - نجاح التحول الرقمي',
                'video-1-description': 'جون ديفيدسون، الرئيس التنفيذي لصناعات تيك كورب، يشارك كيف حولت حلول ERP من SKYLINE عملياتهم.',
                'video-1-author-name': 'جون ديفيدسون',
                'video-1-author-position': 'الرئيس التنفيذي، صناعات تيك كورب',
                'video-2-title': 'قصة نجاح CRM - تحول فريق المبيعات',
                'video-2-description': 'سارة ميتشيل تشرح كيف عزز نظام CRM المخصص لدينا إنتاجية مبيعاتهم بنسبة 60%.',
                'video-2-author-name': 'سارة ميتشيل',
                'video-2-author-position': 'نائب رئيس المبيعات، جلوبال تيك',
                'video-3-title': 'منصة التجارة الإلكترونية - التوسع العالمي',
                'video-3-description': 'مايكل رودريغيز يناقش كيف مكنت حلول التجارة الإلكترونية من SKYLINE نمواً بنسبة 300%.',
                'video-3-author-name': 'مايكل رودريغيز',
                'video-3-author-position': 'المؤسس، ريتيل ماكس',
                
                // CTA Section
                'testimonials-cta-title': 'مستعد لكتابة قصتك الناجحة؟',
                'testimonials-cta-description': 'انضم إلى مئات العملاء الراضين الذين حولوا أعمالهم بحلول SKYLINE المبتكرة.',
                'testimonials-cta-button-1': 'ابدأ مشروعك',
                'testimonials-cta-button-2': 'حدد استشارة',
                
                // Footer
                'footer-location-title': 'الموقع',
                'footer-address': 'الطابق الثالث، مجمع قيصر، شارع الملكة رانيا، عمان، الأردن',
                'footer-get-directions': 'الحصول على الاتجاهات',
                'footer-contact-title': 'اتصل بنا',
                'footer-main-office': 'المكتب الرئيسي:',
                'footer-sales': 'المبيعات:',
                'footer-call-main': 'اتصل بالمكتب الرئيسي',
                'footer-office-title': 'تفاصيل المكتب',
                'footer-office-address': 'الطابق الثالث، مجمع قيصر، شارع الملكة رانيا، عمان، الأردن',
                'footer-visit-office': 'زيارة المكتب',
                'footer-newsletter-title': 'اشتراك النشرة الإخبارية',
                'footer-newsletter-description': 'لا تفوت آخر التحديثات والأخبار',
                'footer-newsletter-placeholder': 'أدخل بريدك الإلكتروني',
                'footer-newsletter-success': 'شكراً لك على الاشتراك في نشرتنا الإخبارية!',
                'footer-newsletter-error': 'يرجى إدخال عنوان بريد إلكتروني صحيح.',
                'footer-nav-home': 'الرئيسية',
                'footer-nav-about': 'من نحن',
                'footer-nav-products': 'المنتجات والحلول',
                'footer-nav-events': 'الأحداث والأخبار',
                'footer-nav-contact': 'اتصل بنا',
                'footer-copyright': '© حقوق الطبع والنشر 2025 سكايلاين للابتكار',
                
                // Events & News Page
                'events-hero-title': 'الأحداث والأخبار',
                'events-hero-description': 'ابق على اطلاع بأحدث الأخبار والأحداث والرؤى من SKYLINE Innovation Software',
                'events-timeline-title': 'الأحداث القادمة',
                'event-1-title': 'مؤتمر SKYLINE التقني 2024',
                'event-1-description': 'انضم إلينا في مؤتمرنا التقني السنوي الذي يضم قادة الصناعة والحلول المبتكرة وفرص التواصل مع المهنيين التقنيين من جميع أنحاء المنطقة.',
                'event-2-title': 'ورشة الذكاء الاصطناعي وتعلم الآلة',
                'event-2-description': 'ورشة عملية تستكشف أحدث التطورات في الذكاء الاصطناعي وتعلم الآلة، مع التطبيقات العملية لحلول الأعمال.',
                'event-3-title': 'ندوة الحلول السحابية',
                'event-3-description': 'اكتشف كيف يمكن للحوسبة السحابية تحويل عمليات عملك من خلال ندوتنا الشاملة حول الحلول السحابية الحديثة وأفضل الممارسات.',
                'event-4-title': 'معرض الابتكار',
                'event-4-description': 'اختبر مستقبل تطوير البرمجيات في معرض الابتكار الخاص بنا، الذي يضم أحدث التقنيات والحلول التجارية الثورية.',
                'news-grid-title': 'أحدث الأخبار والتحديثات',
                'filter-all': 'الكل',
                'filter-news': 'أخبار',
                'filter-updates': 'تحديثات',
                'filter-blog': 'مدونة',
                'filter-events': 'أحداث',
                'news-category-1': 'أخبار',
                'news-1-title': 'SKYLINE تطلق منصة تحليلات جديدة مدعومة بالذكاء الاصطناعي',
                'news-1-excerpt': 'تجمع أحدث ابتكاراتنا بين تعلم الآلة ومعالجة البيانات في الوقت الفعلي لتزويد الشركات برؤى غير مسبوقة في عملياتها. تعمل هذه المنصة المتطورة على إحداث ثورة في كيفية تحليل الشركات لبياناتها، حيث تقدم تحليلات تنبؤية وتقارير آلية وتوصيات ذكية تدفع اتخاذ القرارات الاستراتيجية وتحسن الأداء التجاري الشامل.',
                'news-1-back-title': 'منصة تحليلات الذكاء الاصطناعي',
                'news-1-back-description': 'اكتشف كيف تعمل تقنية الذكاء الاصطناعي المتطورة لدينا على إحداث ثورة في تحليلات الأعمال وتقديم رؤى فورية تدفع النمو والكفاءة.',
                'news-category-2': 'تحديثات',
                'news-2-title': 'ميزات أمان محسنة في الإصدار الأحدث',
                'news-2-excerpt': 'لقد قمنا بتنفيذ بروتوكولات أمان متقدمة ومصادقة متعددة العوامل لضمان بقاء بياناتك محمية في جميع الأوقات. يشمل إطار الأمان الشامل لدينا التشفير من طرف إلى طرف وخيارات المصادقة البيومترية وكشف التهديدات في الوقت الفعلي ومراجعة الأمان الآلية وحماية الجدار الناري المتقدمة لتوفير أمان على مستوى المؤسسات لجميع معلومات عملك الحساسة وبيانات العملاء.',
                'news-2-back-title': 'تحسين الأمان',
                'news-2-back-description': 'تعرف على أحدث تحديثات الأمان لدينا بما في ذلك المصادقة متعددة العوامل والتشفير المتقدم وإجراءات حماية البيانات الشاملة.',
                'news-category-3': 'مدونة',
                'news-3-title': 'مستقبل تطوير البرمجيات: الاتجاهات التي يجب مراقبتها',
                'news-3-excerpt': 'استكشف الاتجاهات الناشئة في تطوير البرمجيات وكيف تشكل مستقبل التكنولوجيا وحلول الأعمال. من تكامل الذكاء الاصطناعي إلى منصات البرمجة منخفضة الكود وهندسة الخدمات المصغرة والتطوير السحابي الأصلي والتطبيقات الويب التقدمية - اكتشف الابتكارات الرائدة التي ستحدد العقد القادم من هندسة البرمجيات وتحول كيفية عمل الشركات في المشهد الرقمي.',
                'news-3-back-title': 'الاتجاهات المستقبلية',
                'news-3-back-description': 'اكتشف أحدث الاتجاهات في تطوير البرمجيات بما في ذلك تكامل الذكاء الاصطناعي والحوسبة السحابية والتقنيات الناشئة التي تحول الصناعة.',
                'news-category-4': 'أحداث',
                'news-4-title': 'قصة نجاح: عرض دراسة حالة العميل',
                'news-4-excerpt': 'تعلم كيف ساعدنا شركة تجزئة كبرى على زيادة كفاءتها التشغيلية بنسبة 40% من خلال حلولنا البرمجية المخصصة الشاملة. تظهر هذه الدراسة التفصيلية نهج التحول الرقمي المجرب لدينا، بما في ذلك أتمتة العمليات المتقدمة وتحسين إدارة المخزون الذكية وتعزيز تجربة العملاء وتنفيذ التحليلات في الوقت الفعلي واتخاذ القرارات الاستراتيجية القائمة على البيانات التي أدت إلى توفير كبير في التكاليف وتحسين مقاييس الأداء.',
                'news-4-back-title': 'قصة نجاح',
                'news-4-back-description': 'اكتشف كيف ساعدت حلولنا المبتكرة شركة تجزئة كبرى على تحقيق تحسن في الكفاءة بنسبة 40% وتحويل عملياتها التجارية.',
                'news-category-5': 'أخبار',
                'news-5-title': 'SKYLINE تفوز بجائزة أفضل ابتكار برمجي 2024',
                'news-5-excerpt': 'نحن فخورون بالإعلان عن أن SKYLINE تم الاعتراف بها للتميز في ابتكار البرمجيات في حفل جوائز التكنولوجيا السنوي المرموق. تعترف هذه الجائزة المميزة بعملنا الرائد في الذكاء الاصطناعي وحلول الحوسبة السحابية المتقدمة وتنفيذات تعلم الآلة والتزامنا الثابت بتقديم برمجيات مبتكرة تحول الشركات عبر مختلف الصناعات وتدفع مبادرات التحول الرقمي.',
                'news-5-back-title': 'اعتراف بالجائزة',
                'news-5-back-description': 'احتفل معنا بينما نتلقى جائزة أفضل ابتكار برمجي المرموقة 2024، معترفين بالتزامنا بالتميز والابتكار.',
                'news-category-6': 'تحديثات',
                'news-6-title': 'ميزات تطبيق محمول جديدة متاحة الآن',
                'news-6-excerpt': 'تم تحديث تطبيقنا المحمول بشكل شامل بميزات جديدة مثيرة بما في ذلك قدرات الوضع غير المتصل وبروتوكولات الأمان المحسنة وتصميم واجهة المستخدم المحسن بشكل كبير. يقدم الإصدار الأحدث دعم الوضع المظلم الأنيق ونظام الإشعارات الفورية المتقدم والمصادقة البيومترية المتطورة ومزامنة البيانات في الوقت الفعلي ولوحة تحكم معاد تصميمها بالكامل توفر إمكانية وصول فائقة وتجربة مستخدم استثنائية عبر جميع الأجهزة المحمولة والمنصات.',
                'news-6-back-title': 'تحديث التطبيق المحمول',
                'news-6-back-description': 'اختبر أحدث ميزات التطبيق المحمول بما في ذلك الوضع غير المتصل والأمان المحسن وواجهة مستخدم معاد تصميمها بالكامل لأداء أفضل.',
                'read-more': 'اقرأ المزيد',
                'view-case-study': 'عرض دراسة الحالة',
                'learn-more': 'تعرف على المزيد',
                'download-now': 'حمل الآن',
                'newsletter-title': 'ابق محدثاً',
                'newsletter-description': 'اشترك في نشرتنا الإخبارية ولا تفوت آخر الأخبار والتحديثات',
                'newsletter-placeholder': 'أدخل عنوان بريدك الإلكتروني',
                'newsletter-subscribe': 'اشترك',
                'newsletter-success': 'شكراً لك على الاشتراك في نشرتنا الإخبارية!',
                
                // Contact Us Page
                'contact-hero-title': 'اتصل بنا',
                'contact-hero-description': 'تواصل مع فريقنا. نحن هنا لمساعدتك في تحويل عملك بحلول برمجية مبتكرة.',
                'contact-form-title': 'أرسل لنا رسالة',
                'contact-form-name': 'الاسم الكامل *',
                'contact-form-name-placeholder': 'أدخل اسمك الكامل',
                'contact-form-email': 'عنوان البريد الإلكتروني *',
                'contact-form-email-placeholder': 'أدخل عنوان بريدك الإلكتروني',
                'contact-form-phone': 'رقم الهاتف',
                'contact-form-phone-placeholder': 'أدخل رقم هاتفك',
                'contact-form-company': 'اسم الشركة',
                'contact-form-company-placeholder': 'أدخل اسم شركتك',
                'contact-form-subject': 'الموضوع *',
                'contact-form-subject-select': 'اختر موضوعاً',
                'contact-form-subject-general': 'استفسار عام',
                'contact-form-subject-sales': 'سؤال مبيعات',
                'contact-form-subject-support': 'دعم فني',
                'contact-form-subject-partnership': 'شراكة',
                'contact-form-subject-demo': 'طلب عرض توضيحي',
                'contact-form-subject-other': 'أخرى',
                'contact-form-message': 'الرسالة *',
                'contact-form-message-placeholder': 'أخبرنا كيف يمكننا مساعدتك...',
                'contact-form-submit': 'إرسال الرسالة',
                'contact-form-error': 'يرجى ملء جميع الحقول المطلوبة',
                'contact-form-success': 'شكراً لك على رسالتك! سنتواصل معك خلال 24 ساعة.',
                'contact-office-title': 'مكتبنا',
                'contact-office-address-1': 'الطابق الثالث، مجمع قيصر',
                'contact-office-address-2': 'شارع الملكة رانيا',
                'contact-office-address-3': 'عمان، الأردن',
                'contact-phone-title': 'الهاتف',
                'contact-phone-main': 'المكتب الرئيسي:',
                'contact-phone-sales': 'المبيعات:',
                'contact-email-title': 'البريد الإلكتروني',
                'contact-email-general': 'عام:',
                'contact-email-sales': 'المبيعات:',
                'contact-email-support': 'الدعم:',
                'contact-hours-title': 'ساعات العمل',
                'contact-hours-weekdays': 'الأحد - الخميس:',
                'contact-hours-weekdays-time': '9:00 ص - 5:00 م (بتوقيت الأردن)',
                'contact-hours-weekend': 'الجمعة - السبت:',
                'contact-hours-weekend-time': 'مغلق',
                'contact-map-title': 'اعثر علينا',
                'contact-map-subtitle': 'قم بزيارة مكتبنا أو احصل على الاتجاهات إلى موقعنا',
                'contact-map-click': 'انقر لفتح في خرائط جوجل',
                'contact-map-address': 'الطابق الثالث، مجمع قيصر، شارع الملكة رانيا، عمان، الأردن',
                'contact-map-directions': 'الحصول على الاتجاهات',
                
                // Navbar Translations
                'logo-tagline': 'برمجيات الابتكار',
                'nav-industries': 'القطاعات',
                'nav-why-choose': 'لماذا تختارنا',
                'nav-iso': 'استشارات الأيزو',
                'nav-iso-all': 'جميع معايير الأيزو',
                'nav-iso-9001': 'الأيزو 9001 - إدارة الجودة',
                'nav-iso-27001': 'الأيزو 27001 - أمان المعلومات',
                'nav-iso-14001': 'الأيزو 14001 - البيئة',
                'nav-iso-45001': 'الأيزو 45001 - الصحة والسلامة',
                'nav-iso-consultation': 'احصل على استشارة',
                'nav-portal': 'بوابة العملاء',
                
                // About Page Translations
                'about-hero-title': 'من نحن - SKYLINE',
                'about-hero-description': 'اكتشف الملف التعريفي لشركتنا ورؤيتنا ورسالتنا وفريق القيادة والشراكات الاستراتيجية',
                'about-company-profile-title': 'الملف التعريفي للشركة',
                'about-company-profile-subtitle': 'شركة رائدة في ابتكار البرمجيات تحول الأعمال في جميع أنحاء الشرق الأوسط',
                'about-building-future-title': 'بناء مستقبل البرمجيات',
                'about-founding-story': 'تأسست شركة SKYLINE Innovation Software في عام 2020، مدفوعة برؤية لتحويل كيفية عمل الشركات في العصر الرقمي. بدأنا كفريق صغير من المطورين ورجال الأعمال المتحمسين الذين آمنوا أن التكنولوجيا يجب أن تكون في متناول الجميع وقوية ومحولة.',
                'about-current-status': 'اليوم، نحن فخورون بخدمة مئات الشركات في جميع أنحاء الشرق الأوسط وما بعده، وتقديم حلول برمجية متقدمة تحفز النمو والكفاءة والابتكار. تميزت رحلتنا بالتعلم المستمر والتكيف والالتزام الثابت بالتميز.',
                'about-company-belief': 'نؤمن أن كل شركة، بغض النظر عن حجمها، تستحق الوصول إلى حلول برمجية على مستوى المؤسسات. لهذا السبب بنينا منصتنا لتكون قابلة للتوسع وسهلة الاستخدام وفعالة من حيث التكلفة، مما يضمن أن الابتكار في متناول الجميع.',
                'about-stat-clients': 'عملاء نشطون',
                'about-stat-team': 'أعضاء الفريق',
                'about-stat-countries': 'دول نخدمها',
                'about-stat-satisfaction': 'رضا العملاء',
                'about-vision-title': 'رؤيتنا',
                'about-vision-description': 'أن نكون الشركة الرائدة في ابتكار البرمجيات في الشرق الأوسط، وتمكين الشركات من تحقيق التحول الرقمي والنمو المستدام من خلال الحلول التكنولوجية المتقدمة.',
                'about-mission-title': 'رسالتنا',
                'about-mission-description': 'تقديم حلول برمجية مبتكرة وقابلة للتوسع وسهلة الاستخدام تمكن الشركات من تبسيط العمليات وتعزيز الإنتاجية ودفع التحول الرقمي عبر جميع الصناعات.',
                'about-leadership-title': 'فريق القيادة',
                'about-leadership-subtitle': 'تعرف على القادة الرؤيويين الذين يقودون نجاح وابتكار SKYLINE',
                'about-leader-1-position': 'الرئيس التنفيذي والمؤسس',
                'about-leader-1-bio': 'قائد رؤيوي يتمتع بأكثر من 15 عاماً من الخبرة في تطوير البرمجيات واستراتيجية الأعمال. شغوف بتمكين الشركات من خلال التكنولوجيا والتحول الرقمي.',
                'about-leader-1-expertise-1': 'القيادة الاستراتيجية',
                'about-leader-1-expertise-2': 'تطوير الأعمال',
                'about-leader-1-expertise-3': 'الابتكار',
                'about-leader-2-position': 'مدير التكنولوجيا',
                'about-leader-2-bio': 'خبيرة تقنية متخصصة في هندسة السحابة وحلول الذكاء الاصطناعي. تقود فريق التطوير لدينا في إنشاء منتجات برمجية متقدمة وحلول مبتكرة.',
                'about-leader-2-expertise-1': 'هندسة السحابة',
                'about-leader-2-expertise-2': 'الذكاء الاصطناعي والتعلم الآلي',
                'about-leader-2-expertise-3': 'هندسة البرمجيات',
                'about-leader-3-position': 'مدير المنتج',
                'about-leader-3-bio': 'استراتيجي منتج يركز على تجربة المستخدم واحتياجات السوق. يضمن أن حلولنا تحل مشاكل الأعمال الحقيقية بشكل فعال وتقدم قيمة استثنائية.',
                'about-leader-3-expertise-1': 'استراتيجية المنتج',
                'about-leader-3-expertise-2': 'تجربة المستخدم',
                'about-leader-3-expertise-3': 'تحليل السوق',
                'about-leader-4-position': 'مدير العمليات',
                'about-leader-4-bio': 'خبيرة عمليات تتمتع بخبرة واسعة في تحسين عمليات الأعمال وإدارة علاقات العملاء. تضمن العمليات السلسة ورضا العملاء.',
                'about-leader-4-expertise-1': 'إدارة العمليات',
                'about-leader-4-expertise-2': 'علاقات العملاء',
                'about-leader-4-expertise-3': 'تحسين العمليات',
                'about-featured-solutions-title': 'حلولنا المميزة',
                'about-featured-solutions-subtitle': 'حلول تكنولوجية شاملة للشركات الحديثة',
                'about-solution-1-badge': 'شائع',
                'about-solution-1-title': 'الذكاء الاصطناعي والتعلم الآلي',
                'about-solution-1-description': 'حول عملك بالأتمتة الذكية والتحليلات التنبؤية والرؤى المستندة إلى البيانات.',
                'about-solution-1-feature-1': 'التحليلات التنبؤية',
                'about-solution-1-feature-2': 'معالجة اللغة الطبيعية',
                'about-solution-1-feature-3': 'رؤية الحاسوب',
                'about-solution-1-feature-4': 'أنظمة التوصية',
                'about-solution-1-cta': 'استكشف حلول الذكاء الاصطناعي',
                'about-solution-2-badge': 'مميز',
                'about-solution-2-title': 'تطوير البرمجيات المخصصة',
                'about-solution-2-description': 'بناء تطبيقات مبتكرة وقابلة للتوسع مصممة خصيصاً لاحتياجات ومتطلبات عملك.',
                'about-solution-2-feature-1': 'تطبيقات الويب',
                'about-solution-2-feature-2': 'تطبيقات الهاتف المحمول',
                'about-solution-2-feature-3': 'برامج سطح المكتب',
                'about-solution-2-feature-4': 'تطوير واجهات برمجة التطبيقات',
                'about-solution-2-cta': 'ابدأ مشروعك',
                'about-solution-3-badge': 'رائج',
                'about-solution-3-title': 'البنية التحتية السحابية',
                'about-solution-3-description': 'وسع عملياتك بحلول سحابية آمنة وموثوقة مصممة للشركات الحديثة.',
                'about-solution-3-feature-1': 'الانتقال إلى السحابة',
                'about-solution-3-feature-2': 'أتمتة DevOps',
                'about-solution-3-feature-3': 'معمارية الخدمات المصغرة',
                'about-solution-3-feature-4': 'حلول بدون خادم',
                'about-solution-3-cta': 'اذهب إلى السحابة الأصلية',
                'about-values-title': 'قيمنا',
                'about-values-subtitle': 'المبادئ التي توجه كل ما نقوم به',
                'about-value-1-title': 'الابتكار',
                'about-value-1-description': 'نواصل دفع الحدود واستكشاف التقنيات الجديدة لتقديم حلول متقدمة تبقي عملاءنا في المقدمة.',
                'about-value-2-title': 'الثقة',
                'about-value-2-description': 'بناء علاقات طويلة الأمد مبنية على الشفافية والموثوقية والوفاء بوعودنا هو جوهر أعمالنا.',
                'about-value-3-title': 'التعاون',
                'about-value-3-description': 'نؤمن بقوة العمل الجماعي، سواء داخل منظمتنا أو مع عملائنا، لتحقيق نتائج استثنائية.',
                'about-value-4-title': 'التميز',
                'about-value-4-description': 'نسعى للتميز في كل جانب من جوانب عملنا، من جودة الكود إلى خدمة العملاء وتجربة المستخدم.',
                'about-partners-title': 'الشركاء الاستراتيجيون',
                'about-partners-subtitle': 'التعاون مع قادة الصناعة لتقديم حلول استثنائية',
                'about-partner-1-description': 'شريك رسمي لـ Microsoft يقدم حلول سحابة Azure وخدمات تكامل البرمجيات المؤسسية.',
                'about-partner-2-description': 'شريك استشاري متقدم لـ AWS متخصص في الانتقال إلى السحابة والهندسة المعمارية وخدمات التحسين.',
                'about-partner-3-description': 'شريك Google Cloud يقدم حلول الذكاء الاصطناعي والتعلم الآلي وتحليلات البيانات وتطوير التطبيقات الحديثة.',
                'about-partner-4-description': 'شريك Oracle يقدم حلول قواعد البيانات المؤسسية وأنظمة ERP ومنصات ذكاء الأعمال.',
                'about-alliances-title': 'التحالفات الاستراتيجية',
                'about-alliances-subtitle': 'بناء شراكات قوية لتوسيع نطاق وصولنا وقدراتنا',
                'about-alliances-ecosystem-title': 'توسيع نظامنا البيئي',
                'about-alliances-ecosystem-description': 'أقامت SKYLINE تحالفات استراتيجية مع شركات التكنولوجيا الرائدة وجمعيات الصناعة والمؤسسات الأكاديمية لتعزيز عروض خدماتنا وتوسيع نطاق وصولنا إلى السوق.',
                'about-alliance-1-title': 'الشراكات الأكاديمية',
                'about-alliance-1-description': 'التعاون مع الجامعات الرائدة ومؤسسات البحث لدفع الابتكار وتطوير حلول متقدمة.',
                'about-alliance-2-title': 'جمعيات الصناعة',
                'about-alliance-2-description': 'أعضاء نشطون في جمعيات الصناعة الكبرى للبقاء في المقدمة من الاتجاهات التكنولوجية وأفضل الممارسات.',
                'about-alliance-3-title': 'الشبكات العالمية',
                'about-alliance-3-description': 'جزء من شبكات التكنولوجيا الدولية التي تمكننا من خدمة العملاء عبر مناطق وأسواق متعددة.',
                'about-clients-title': 'عملاؤنا',
                'about-clients-subtitle': 'موثوقون من قبل المنظمات الرائدة عبر مختلف الصناعات',
                'about-client-stat-1': 'عملاء نشطون',
                'about-client-stat-2': 'صناعات نخدمها',
                'about-client-stat-3': 'معدل الاحتفاظ بالعملاء',
                'about-client-stat-4': 'التقييم المتوسط',
                'about-client-category-1': 'عملاء المؤسسات',
                'about-client-category-2': 'عملاء الشركات الصغيرة والمتوسطة',
                'about-client-category-3': 'الشركات الناشئة',
                'about-testimonials-title': 'ما يقوله عملاؤنا',
                'about-testimonial-1-text': '"حولت SKYLINE عمليات أعمالنا بحلولها البرمجية المبتكرة. تجاوزت النتائج توقعاتنا."',
                'about-testimonial-1-author': 'الرئيس التنفيذي، البنك الأهلي التجاري',
                'about-testimonial-2-text': '"ساعدت خبرة فريقهم وتفانيهم في تحقيق أهداف التحول الرقمي لدينا أسرع مما توقعنا."',
                'about-testimonial-2-author': 'مدير التكنولوجيا، الاتصالات السعودية',
                'about-testimonial-3-text': '"حلول SKYLINE سهلة الاستخدام وقابلة للتوسع ومصممة بشكل مثالي لاحتياجات أعمالنا."',
                'about-testimonial-3-author': 'مدير، سابك'
            }
        };
        
        this.init();
    }
    
    init() {
        // Only apply language if it's stored in localStorage and is Arabic
        if (this.currentLanguage === 'ar' && localStorage.getItem('language') === 'ar') {
            this.applyLanguage(this.currentLanguage);
        } else {
            // Default to English
            this.currentLanguage = 'en';
            localStorage.setItem('language', 'en');
            document.documentElement.lang = 'en';
            document.documentElement.dir = 'ltr';
        }
        this.createLanguageSwitcher();
    }
    
    applyLanguage(language) {
        this.currentLanguage = language;
        localStorage.setItem('language', language);
        
        // Set document direction and language
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        
        // Apply translations
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (this.translations[language] && this.translations[language][key]) {
                element.textContent = this.translations[language][key];
            }
        });
        
        // Update placeholders
        const placeholders = document.querySelectorAll('[data-translate-placeholder]');
        placeholders.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (this.translations[language] && this.translations[language][key]) {
                element.placeholder = this.translations[language][key];
            }
        });
        
        // Update language switcher
        this.updateLanguageSwitcher();
    }
    
    createLanguageSwitcher() {
        // Check if switcher already exists
        if (document.querySelector('.language-switcher')) {
            return;
        }
        
        const switcher = document.createElement('div');
        switcher.className = 'language-switcher';
        switcher.innerHTML = `
            <button class="language-btn" id="language-switch-btn">
                <i class="fas fa-globe"></i>
                <span data-translate="language-switch">العربية</span>
            </button>
        `;
        
        // Add to navbar
        const navbar = document.querySelector('.navbar-nav') || document.querySelector('.nav-menu');
        if (navbar) {
            navbar.appendChild(switcher);
        }
        
        // Add event listener
        const btn = switcher.querySelector('#language-switch-btn');
        btn.addEventListener('click', () => {
            this.toggleLanguage();
        });
        
        // Add styles
        this.addLanguageSwitcherStyles();
    }
    
    addLanguageSwitcherStyles() {
        if (document.querySelector('#language-switcher-styles')) {
            return;
        }
        
        const style = document.createElement('style');
        style.id = 'language-switcher-styles';
        style.textContent = `
            .language-switcher {
                margin-left: 20px;
            }
            
            .language-btn {
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.3);
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 14px;
                font-weight: 500;
            }
            
            .language-btn:hover {
                background: rgba(255, 255, 255, 0.2);
                border-color: rgba(255, 255, 255, 0.5);
                transform: translateY(-2px);
            }
            
            .language-btn i {
                font-size: 16px;
            }
            
            /* RTL Support */
            [dir="rtl"] .language-switcher {
                margin-left: 0;
                margin-right: 20px;
            }
            
            [dir="rtl"] .language-btn {
                flex-direction: row-reverse;
            }
            
            /* Mobile responsive */
            @media (max-width: 768px) {
                .language-switcher {
                    margin: 10px 0;
                    width: 100%;
                }
                
                .language-btn {
                    width: 100%;
                    justify-content: center;
                }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    updateLanguageSwitcher() {
        const btn = document.querySelector('#language-switch-btn span');
        if (btn) {
            btn.textContent = this.currentLanguage === 'en' ? 'العربية' : 'English';
        }
    }
    
    toggleLanguage() {
        const newLanguage = this.currentLanguage === 'en' ? 'ar' : 'en';
        this.applyLanguage(newLanguage);
    }
    
    getTranslation(key, language = null) {
        const lang = language || this.currentLanguage;
        return this.translations[lang] && this.translations[lang][key] ? this.translations[lang][key] : key;
    }
}

// Initialize translation system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.translationSystem = new TranslationSystem();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TranslationSystem;
}
