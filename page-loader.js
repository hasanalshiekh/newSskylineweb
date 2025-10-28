/**
 * Page Loader - SKYLINE Innovation Software
 * Provides smooth loading transitions between pages
 */

class PageLoader {
    constructor() {
        this.loadingDuration = 3000; // 3 seconds = 3000ms
        this.fadeOutDuration = 500; // 0.5 seconds for fade out
        this.isLoading = false;

        this.init();
    }

    init() {
        // Intercept all internal links
        this.interceptLinks();

        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            if (!this.isLoading) {
                this.showLoading();
            }
        });

        // Handle page refresh
        window.addEventListener('beforeunload', () => {
            this.showLoading();
        });
    }

    interceptLinks() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');

            if (link && this.isInternalLink(link)) {
                e.preventDefault();
                this.navigateToPage(link.href);
            }
        });
    }

    isInternalLink(link) {
        // Check if it's an internal link (same domain)
        const linkUrl = new URL(link.href, window.location.origin);
        const currentUrl = new URL(window.location.href);

        return linkUrl.origin === currentUrl.origin &&
            link.href !== window.location.href &&
            !link.target && // Not opening in new tab
            !link.hasAttribute('data-no-loader'); // Allow opt-out
    }

    navigateToPage(url) {
        if (this.isLoading) return;

        this.isLoading = true;
        this.showLoading(url);
    }

    showLoading(targetUrl = null) {
        // Create loading overlay
        const loadingOverlay = document.createElement('div');
        loadingOverlay.id = 'page-loader-overlay';
        loadingOverlay.innerHTML = this.getLoadingHTML();

        // Add to page
        document.body.appendChild(loadingOverlay);

        // Animate in
        setTimeout(() => {
            loadingOverlay.classList.add('active');

            // Start percentage counter
            this.animatePercentage(loadingOverlay);
        }, 10);

        // Navigate after loading duration
        setTimeout(() => {
            if (targetUrl) {
                window.location.href = targetUrl;
            } else {
                // For back/forward navigation, let browser handle it
                loadingOverlay.remove();
                this.isLoading = false;
            }
        }, this.loadingDuration);
    }

    animatePercentage(overlay) {
        const percentageElement = overlay.querySelector('.progress-percentage');
        if (!percentageElement) return;

        let currentPercentage = 0;
        const increment = 100 / (this.loadingDuration / 20); // Update every 20ms

        const counter = setInterval(() => {
            currentPercentage += increment;
            if (currentPercentage >= 100) {
                currentPercentage = 100;
                clearInterval(counter);
            }
            percentageElement.textContent = Math.floor(currentPercentage) + '%';
        }, 20);
    }

    getLoadingHTML() {
        return `
            <div class="page-loader-container">
                <!-- Animated Background -->
                <div class="page-loader-bg">
                    <div class="bg-particle"></div>
                    <div class="bg-particle"></div>
                    <div class="bg-particle"></div>
                    <div class="bg-particle"></div>
                    <div class="bg-particle"></div>
                </div>
                
                <!-- Geometric Shapes -->
                <div class="geometric-shapes">
                    <div class="shape shape-1"></div>
                    <div class="shape shape-2"></div>
                    <div class="shape shape-3"></div>
                    <div class="shape shape-4"></div>
                </div>
                
                <!-- Main Content -->
                <div class="page-loader-content">
                    <!-- Logo with Pulse Effect -->
                    <div class="page-loader-logo">
                        <div class="logo-container">
                            <div class="logo-pulse-ring"></div>
                            <div class="logo-pulse-ring delay-1"></div>
                            <div class="logo-pulse-ring delay-2"></div>
                            <div class="logo-icon">
                                <div class="logo-inner"></div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Brand Text with Typewriter Effect -->
                    <div class="brand-text">
                        <span class="brand-skyline">SKYLINE</span>
                        <span class="brand-subtitle">Innovation Software</span>
                    </div>
                    
                    <!-- Modern Progress Bar -->
                    <div class="progress-container">
                        <div class="progress-track">
                            <div class="progress-fill"></div>
                            <div class="progress-glow"></div>
                        </div>
                        <div class="progress-percentage">0%</div>
                    </div>
                    
                    <!-- Loading Dots -->
                    <div class="loading-dots">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
            </div>
            
            <style>
                #page-loader-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(ellipse at center, #1a0a0a 0%, #000000 100%);
                    z-index: 9999;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }
                
                #page-loader-overlay.active {
                    opacity: 1;
                }
                
                .page-loader-container {
                    position: relative;
                    text-align: center;
                    color: white;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                /* Animated Background */
                .page-loader-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }
                
                .bg-particle {
                    position: absolute;
                    background: radial-gradient(circle, rgba(196, 30, 58, 0.6) 0%, rgba(139, 0, 0, 0.3) 50%, transparent 100%);
                    border-radius: 50%;
                    animation: particleFloat 8s ease-in-out infinite;
                }
                
                .bg-particle:nth-child(1) {
                    width: 120px;
                    height: 120px;
                    top: 10%;
                    left: 15%;
                    animation-delay: 0s;
                }
                
                .bg-particle:nth-child(2) {
                    width: 80px;
                    height: 80px;
                    top: 70%;
                    right: 20%;
                    animation-delay: 1.5s;
                }
                
                .bg-particle:nth-child(3) {
                    width: 60px;
                    height: 60px;
                    bottom: 20%;
                    left: 10%;
                    animation-delay: 2s;
                }
                
                .bg-particle:nth-child(4) {
                    width: 100px;
                    height: 100px;
                    top: 30%;
                    right: 10%;
                    animation-delay: 4.5s;
                }
                
                .bg-particle:nth-child(5) {
                    width: 40px;
                    height: 40px;
                    top: 50%;
                    left: 80%;
                    animation-delay: 6s;
                }
                
                @keyframes particleFloat {
                    0%, 100% {
                        transform: translateY(0px) translateX(0px) scale(1);
                        opacity: 0.4;
                    }
                    33% {
                        transform: translateY(-30px) translateX(20px) scale(1.1);
                        opacity: 0.7;
                    }
                    66% {
                        transform: translateY(20px) translateX(-15px) scale(0.9);
                        opacity: 0.5;
                    }
                }
                
                /* Geometric Shapes */
                .geometric-shapes {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }
                
                .shape {
                    position: absolute;
                    border: 2px solid rgba(196, 30, 58, 0.3);
                    animation: shapeRotate 6s linear infinite;
                }
                
                .shape-1 {
                    width: 60px;
                    height: 60px;
                    top: 20%;
                    left: 70%;
                    transform: rotate(45deg);
                    animation-delay: 0s;
                }
                
                .shape-2 {
                    width: 40px;
                    height: 40px;
                    bottom: 30%;
                    right: 15%;
                    border-radius: 50%;
                    animation-delay: 2s;
                }
                
                .shape-3 {
                    width: 80px;
                    height: 80px;
                    top: 60%;
                    left: 20%;
                    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                    animation-delay: 4s;
                }
                
                .shape-4 {
                    width: 50px;
                    height: 50px;
                    top: 15%;
                    right: 25%;
                    transform: rotate(30deg);
                    animation-delay: 2s;
                }
                
                @keyframes shapeRotate {
                    0% {
                        transform: rotate(0deg) scale(1);
                        opacity: 0.3;
                    }
                    50% {
                        transform: rotate(180deg) scale(1.2);
                        opacity: 0.6;
                    }
                    100% {
                        transform: rotate(360deg) scale(1);
                        opacity: 0.3;
                    }
                }
                
                /* Main Content */
                .page-loader-content {
                    position: relative;
                    z-index: 10;
                }
                
                /* Logo with Pulse Effect */
                .page-loader-logo {
                    margin-bottom: 2rem;
                }
                
                .logo-container {
                    position: relative;
                    width: 120px;
                    height: 120px;
                    margin: 0 auto;
                }
                
                .logo-pulse-ring {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 120px;
                    height: 120px;
                    border: 2px solid rgba(196, 30, 58, 0.6);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    animation: pulsate 2s ease-in-out infinite;
                }
                
                .logo-pulse-ring.delay-1 {
                    animation-delay: 0.2s;
                    border-color: rgba(196, 30, 58, 0.4);
                }
                
                .logo-pulse-ring.delay-2 {
                    animation-delay: 0.6s;
                    border-color: rgba(196, 30, 58, 0.2);
                }
                
                @keyframes pulsate {
                    0% {
                        transform: translate(-50%, -50%) scale(0.8);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(1.4);
                        opacity: 0;
                    }
                }
                
                .logo-icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #C41E3A, #8B0000);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 0 30px rgba(196, 30, 58, 0.5);
                    animation: logoSpin 2s ease-in-out infinite;
                }
                
                .logo-inner {
                    width: 40px;
                    height: 40px;
                    background: url('img/favicon.svg') no-repeat center;
                    background-size: contain;
                    filter: brightness(0) invert(1);
                }
                
                @keyframes logoSpin {
                    0%, 100% {
                        transform: translate(-50%, -50%) rotate(0deg) scale(1);
                    }
                    50% {
                        transform: translate(-50%, -50%) rotate(180deg) scale(1.1);
                    }
                }
                
                /* Brand Text */
                .brand-text {
                    margin-bottom: 2.5rem;
                }
                
                .brand-skyline {
                    display: block;
                    font-size: 2.5rem;
                    font-weight: 800;
                    background: linear-gradient(135deg, #fff, #C41E3A, #fff);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin-bottom: 0.5rem;
                    animation: textGlow 2s ease-in-out infinite alternate;
                    letter-spacing: 3px;
                }
                
                .brand-subtitle {
                    display: block;
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.7);
                    font-weight: 300;
                    letter-spacing: 2px;
                    animation: fadeInUp 2s ease-out 0.5s both;
                }
                
                @keyframes textGlow {
                    0% {
                        text-shadow: 0 0 20px rgba(196, 30, 58, 0.5);
                    }
                    100% {
                        text-shadow: 0 0 30px rgba(196, 30, 58, 0.8), 0 0 40px rgba(196, 30, 58, 0.4);
                    }
                }
                
                @keyframes fadeInUp {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                /* Modern Progress Bar */
                .progress-container {
                    margin-bottom: 2rem;
                    animation: fadeInUp 2s ease-out 1s both;
                }
                
                .progress-track {
                    position: relative;
                    width: 300px;
                    height: 6px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    margin: 0 auto 1rem;
                    overflow: hidden;
                }
                
                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #C41E3A, #ff4d6d, #C41E3A);
                    border-radius: 10px;
                    width: 0%;
                    animation: progressFill 2s ease-out forwards;
                    position: relative;
                }
                
                .progress-glow {
                    position: absolute;
                    top: -2px;
                    left: 0;
                    height: 10px;
                    width: 0%;
                    background: linear-gradient(90deg, transparent, rgba(196, 30, 58, 0.8), transparent);
                    border-radius: 10px;
                    animation: progressFill 1s ease-out forwards, glowMove 2s ease-in-out infinite;
                }
                
                @keyframes progressFill {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }
                
                @keyframes glowMove {
                    0%, 100% {
                        box-shadow: 0 0 10px rgba(196, 30, 58, 0.5);
                    }
                    50% {
                        box-shadow: 0 0 20px rgba(196, 30, 58, 0.8);
                    }
                }
                
                .progress-percentage {
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: #fff;
                    animation: countUp 2s ease-out forwards;
                }
                
                @keyframes countUp {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }
                
                /* Loading Dots */
                .loading-dots {
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                    animation: fadeInUp 1s ease-out 1.5s both;
                }
                
                .dot {
                    width: 8px;
                    height: 8px;
                    background: #C41E3A;
                    border-radius: 50%;
                    animation: dotBounce 1.4s ease-in-out infinite both;
                }
                
                .dot:nth-child(1) { animation-delay: 0s; }
                .dot:nth-child(2) { animation-delay: 0.16s; }
                .dot:nth-child(3) { animation-delay: 0.32s; }
                
                @keyframes dotBounce {
                    0%, 80%, 100% {
                        transform: scale(0.8);
                        opacity: 0.5;
                    }
                    40% {
                        transform: scale(1.2);
                        opacity: 1;
                    }
                }
                
                /* Responsive Design */
                @media (max-width: 768px) {
                    .logo-container {
                        width: 100px;
                        height: 100px;
                    }
                    
                    .logo-pulse-ring {
                        width: 100px;
                        height: 100px;
                    }
                    
                    .logo-icon {
                        width: 60px;
                        height: 60px;
                    }
                    
                    .logo-inner {
                        width: 30px;
                        height: 30px;
                    }
                    
                    .brand-skyline {
                        font-size: 2rem;
                        letter-spacing: 2px;
                    }
                    
                    .brand-subtitle {
                        font-size: 0.9rem;
                        letter-spacing: 1px;
                    }
                    
                    .progress-track {
                        width: 250px;
                        height: 4px;
                    }
                    
                    .bg-particle {
                        display: none;
                    }
                    
                    .shape {
                        display: none;
                    }
                }
            </style>
        `;
    }
}

// Initialize page loader when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    new PageLoader();
});

// Export for use in other scripts
window.PageLoader = PageLoader;
