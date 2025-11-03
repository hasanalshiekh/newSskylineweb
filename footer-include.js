// Footer Include Script
// This script embeds the footer content directly and includes it in the current page

function includeFooter() {
    // Create a container for the footer
    const footerContainer = document.createElement('div');
    footerContainer.id = 'footer-container';
    
    // Add the footer styles to the head if they don't exist
    if (!document.querySelector('#footer-styles')) {
        const styleElement = document.createElement('style');
        styleElement.id = 'footer-styles';
        styleElement.textContent = getFooterStyles();
        document.head.appendChild(styleElement);
    }
    
    // Create the footer HTML
    const footerHTML = getFooterHTML();
    footerContainer.innerHTML = footerHTML;
    
    // Add the container to the body
    document.body.appendChild(footerContainer);
    
    // Initialize footer functionality
    initializeFooterFunctionality();
}

function getFooterStyles() {
    return `
        /* Footer - Modern & Creative */
        .footer {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            color: white;
            padding: 60px 0 30px;
            position: relative;
            overflow: hidden;
            direction: ltr !important;
            text-align: left !important;
        }

        .footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background:
                radial-gradient(circle at 20% 80%, rgba(139, 0, 0, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(196, 30, 58, 0.1) 0%, transparent 50%);
            pointer-events: none;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            position: relative;
            z-index: 2;
        }

        .footer-top {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .footer-column {
            text-align: left !important;
            direction: ltr !important;
        }

        .footer-icon {
            width: 50px;
            height: 50px;
            background: #8B0000;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            font-size: 1.2rem;
            color: white;
            transition: all 0.3s ease;
        }

        .footer-column:hover .footer-icon {
            transform: scale(1.1);
            box-shadow: 0 10px 20px rgba(139, 0, 0, 0.3);
        }

        .footer-column h3 {
            font-size: 1.3rem;
            font-weight: 700;
            color: white;
            margin-bottom: 1rem;
        }

        .footer-column p {
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.6;
            margin-bottom: 0.5rem;
            font-size: 0.95rem;
            direction: ltr !important;
            text-align: left !important;
            unicode-bidi: embed !important;
        }

        .footer-link {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: underline;
            font-size: 0.9rem;
            transition: color 0.3s ease;
        }

        .footer-link:hover {
            color: #8B0000;
        }

        /* Force numbers to stay in original order */
        .footer-column p strong {
            direction: ltr !important;
            unicode-bidi: embed !important;
            display: inline !important;
        }

        .footer-column p:has(strong) {
            direction: ltr !important;
            unicode-bidi: embed !important;
        }

        /* Specific protection for phone numbers */
        .footer-column p:contains("+962") {
            direction: ltr !important;
            unicode-bidi: embed !important;
        }

        /* Force all text content to LTR in footer */
        .footer * {
            direction: ltr !important;
            unicode-bidi: embed !important;
        }

        .newsletter-form {
            display: flex;
            gap: 0.5rem;
            margin-top: 1rem;
        }

        .newsletter-input {
            flex: 1;
            padding: 0.8rem 1rem;
            border: none;
            border-radius: 8px;
            background: white;
            color: #333;
            font-size: 0.9rem;
            outline: none;
        }

        .newsletter-btn {
            width: 45px;
            height: 45px;
            background: #8B0000;
            border: none;
            border-radius: 8px;
            color: white;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .newsletter-btn:hover {
            background: #A52A2A;
            transform: scale(1.05);
        }

        .footer-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            direction: ltr !important;
        }

        .footer-logo {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 1.5rem;
            font-weight: 700;
            text-decoration: none;
        }

        .footer-logo .logo-sky {
            color: #C41E3A;
            font-weight: 800;
            text-shadow: 0 0 10px rgba(196, 30, 58, 0.5);
        }

        .footer-logo .logo-yline {
            color: #fff;
            font-weight: 700;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        .footer-nav {
            display: flex;
            gap: 2rem;
            direction: ltr !important;
        }

        .footer-nav a {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.3s ease;
        }

        .footer-nav a:hover {
            color: #C41E3A;
        }

        .footer-copyright {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9rem;
        }

        @media (max-width: 768px) {
            .footer-top {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .footer-bottom {
                flex-direction: column;
                gap: 1.5rem;
                text-align: center;
            }

            .footer-nav {
                flex-wrap: wrap;
                justify-content: center;
                gap: 1rem;
            }

            .newsletter-form {
                flex-direction: column;
            }

            .newsletter-btn {
                width: 100%;
                height: 45px;
            }
        }

        @media (max-width: 480px) {
            .footer {
                padding: 60px 0 30px;
            }

            .footer-content {
                padding: 0 1rem;
            }

            .footer-bottom {
                gap: 1rem;
            }

            .footer-nav {
                flex-direction: column;
                gap: 0.5rem;
            }
        }
    `;
}

function getFooterHTML() {
    return `
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-top">
                    <div class="footer-column">
                        <div class="footer-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <h3 data-translate="footer-location-title">Location</h3>
                        <p data-translate="footer-address">3rd floor, Qaisar Complex, Queen Rania St., Amman, Jordan</p>
                        <a href="https://maps.app.goo.gl/M4Qm5LWraeWs64db8" class="footer-link" target="_blank" data-translate="footer-get-directions">Get Directions</a>
                    </div>

                    <div class="footer-column">
                        <div class="footer-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <h3 data-translate="footer-contact-title">Contact Us</h3>
                        <p><strong data-translate="footer-main-office">Main Office:</strong> +962 77 755 8888</p>
                        <p><strong data-translate="footer-sales">Sales:</strong> +962 77 160 0663</p>
                        <p>info@skyline-innovation.com</p>
                        <a href="tel:+962777558888" class="footer-link" data-translate="footer-call-main">Call Main Office</a>
                    </div>

                    <div class="footer-column">
                        <div class="footer-icon">
                            <i class="fas fa-paper-plane"></i>
                        </div>
                        <h3 data-translate="footer-newsletter-title">Newsletter Signup</h3>
                        <p data-translate="footer-newsletter-description">Don't miss our latest updates and news</p>
                        <div class="newsletter-form">
                            <input type="email" placeholder="Enter your email" class="newsletter-input" data-translate-placeholder="footer-newsletter-placeholder">
                            <button class="newsletter-btn">
                                <i class="fas fa-envelope"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <a href="index.html" class="footer-logo">
                        <span class="logo-sky">SK</span><span class="logo-yline">YLINE</span>
                    </a>

                 
                    <div class="footer-copyright" data-translate="footer-copyright">
                        © Copyright 2025 <span style="color: #C41E3A;">SKYLINE Innovation</span>
                    </div>
                </div>
            </div>
        </footer>
    `;
}

function getTranslation(key) {
    // Helper function to get translation from the translation system
    if (typeof window.translationSystem !== 'undefined' && window.translationSystem) {
        return window.translationSystem.getTranslation(key);
    }
    return null;
}

function initializeFooterFunctionality() {
    // Force footer numbers to stay in LTR order
    const footerParagraphs = document.querySelectorAll('.footer-column p');
    footerParagraphs.forEach(p => {
        p.style.direction = 'ltr';
        p.style.unicodeBidi = 'embed';
        p.style.textAlign = 'left';
        
        // Force strong elements (labels) to stay LTR
        const strongElements = p.querySelectorAll('strong');
        strongElements.forEach(strong => {
            strong.style.direction = 'ltr';
            strong.style.unicodeBidi = 'embed';
        });
    });

    // Newsletter form functionality
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterInput = document.querySelector('.newsletter-input');
    const newsletterBtn = document.querySelector('.newsletter-btn');

    if (newsletterForm && newsletterInput && newsletterBtn) {
        newsletterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const email = newsletterInput.value.trim();
            
            if (email && isValidEmail(email)) {
                // Here you would typically send the email to your server
                alert(getTranslation('footer-newsletter-success') || 'Thank you for subscribing to our newsletter!');
                newsletterInput.value = '';
            } else {
                alert(getTranslation('footer-newsletter-error') || 'Please enter a valid email address.');
            }
        });

        newsletterInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                newsletterBtn.click();
            }
        });
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Monitor and fix footer number order after translation
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' || mutation.type === 'characterData') {
                // Re-apply LTR direction to footer paragraphs
                const footerParagraphs = document.querySelectorAll('.footer-column p');
                footerParagraphs.forEach(p => {
                    p.style.direction = 'ltr';
                    p.style.unicodeBidi = 'embed';
                    p.style.textAlign = 'left';
                    
                    const strongElements = p.querySelectorAll('strong');
                    strongElements.forEach(strong => {
                        strong.style.direction = 'ltr';
                        strong.style.unicodeBidi = 'embed';
                    });
                });
            }
        });
    });

    // Start observing the footer for changes
    const footer = document.querySelector('.footer');
    if (footer) {
        observer.observe(footer, {
            childList: true,
            subtree: true,
            characterData: true
        });
    }
}

function createFallbackFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer style="background: #1a1a1a; color: white; padding: 40px 0; text-align: center;">
                <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
                    <div style="margin-bottom: 2rem;">
                        <a href="index.html" style="color: #C41E3A; text-decoration: none; font-size: 1.5rem; font-weight: bold;">
                            SKYLINE Innovation
                        </a>
                    </div>
                    <div style="margin-bottom: 2rem;">
                        <a href="index.html" style="color: white; text-decoration: none; margin: 0 1rem;">Home</a>
                        <a href="about.html" style="color: white; text-decoration: none; margin: 0 1rem;">About</a>
                        <a href="products&solutions.html" style="color: white; text-decoration: none; margin: 0 1rem;">Products & Solutions</a>
                        <a href="index.html#contact" style="color: white; text-decoration: none; margin: 0 1rem;">Contact</a>
                    </div>
                    <div style="color: rgba(255, 255, 255, 0.7); font-size: 0.9rem;">
                        © Copyright 2025 <span style="color: #C41E3A;">SKYLINE Innovation</span>
                    </div>
                </div>
            </footer>
            
            
        `;
    }
}

// Auto-include footer when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    includeFooter();
});
