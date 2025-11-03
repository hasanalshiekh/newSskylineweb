// Navbar Include Script
// This script embeds the navbar content directly and includes it in the current page

function includeNavbar() {
    // Add Font Awesome CDN if not already present
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fontAwesomeLink = document.createElement('link');
        fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
        fontAwesomeLink.rel = 'stylesheet';
        fontAwesomeLink.crossOrigin = 'anonymous';
        document.head.appendChild(fontAwesomeLink);
    }

    // Add Translation System
    if (!document.querySelector('script[src*="translation-system.js"]')) {
        const translationScript = document.createElement('script');
        translationScript.src = 'translation-system.js';
        translationScript.defer = true;
        document.head.appendChild(translationScript);
    }

    // Create a container for the navbar
    const navbarContainer = document.createElement('div');
    navbarContainer.id = 'navbar-container';

    // Add the navbar styles to the head if they don't exist
    if (!document.querySelector('#navbar-styles')) {
        const styleElement = document.createElement('style');
        styleElement.id = 'navbar-styles';
        styleElement.textContent = getNavbarStyles();
        document.head.appendChild(styleElement);
    }

    // Create the navbar HTML
    const navbarHTML = getNavbarHTML();
    navbarContainer.innerHTML = navbarHTML;

    // Add the container to the body at the beginning
    document.body.insertBefore(navbarContainer, document.body.firstChild);

    // Initialize navbar functionality
    initializeNavbarFunctionality();

    // Initialize language switcher
    initializeLanguageSwitcher();

    // Ensure mobile sidenav is hidden on page load
    setTimeout(() => {
        const mobileSidenav = document.querySelector('.mobile-sidenav');
        const mobileOverlay = document.querySelector('.mobile-overlay');

        if (mobileSidenav) {
            mobileSidenav.classList.remove('active');
            mobileSidenav.style.visibility = 'hidden';
            mobileSidenav.style.opacity = '0';
            
            // Set initial position based on current direction
            const currentDir = document.documentElement.dir || 'ltr';
            if (currentDir === 'rtl') {
                mobileSidenav.style.right = '-320px';
                mobileSidenav.style.left = 'auto';
            } else {
                mobileSidenav.style.left = '-320px';
                mobileSidenav.style.right = 'auto';
            }
            console.log('✅ Mobile sidenav hidden on page load');
        }

        if (mobileOverlay) {
            mobileOverlay.classList.remove('active');
            mobileOverlay.style.visibility = 'hidden';
            mobileOverlay.style.opacity = '0';
            console.log('✅ Mobile overlay hidden on page load');
        }
    }, 100);
}

function getNavbarStyles() {
    return `
        /* Header - Same as index.html */
        .header {
            background: linear-gradient(135deg, rgba(25, 25, 25, 0.95) 0%, rgba(26, 26, 26, 0.95) 30%, rgba(26, 26, 26, 0.95) 70%, rgba(27, 27, 26, 0.95) 100%);
            backdrop-filter: blur(20px);
            border: none;
            color: #D60A28;
            padding: 1rem 0;
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 99999;
            transition: all 0.3s ease;
            box-shadow: none;
            overflow: visible;
        }
        
        /* Logo Direction Fix - Keep logo always LTR */
        .logo,
        .logo *,
        .logo-sky,
        .logo-yline,
        .logo-tagline {
            direction: ltr !important;
            text-align: left !important;
            unicode-bidi: normal !important;
        }

        /* RTL/LTR Support for Navbar */
        [dir="rtl"] .nav-menu {
            direction: rtl;
        }

        [dir="rtl"] .nav-menu a {
            text-align: right;
        }

        [dir="ltr"] .nav-menu {
            direction: ltr;
        }

        [dir="ltr"] .nav-menu a {
            text-align: left;
        }

        /* Mobile Navigation RTL/LTR Support */
        [dir="rtl"] .mobile-sidenav {
            right: -320px;
            left: auto;
        }

        [dir="rtl"] .mobile-sidenav.active {
            right: 0;
            left: auto;
        }

        [dir="ltr"] .mobile-sidenav {
            left: -320px;
            right: auto;
        }

        [dir="ltr"] .mobile-sidenav.active {
            left: 0;
            right: auto;
        }





        
        /* Logo Scroll Effect - Same as yline */
        .logo-tagline {
            color: #E3616E;
            font-weight: 500;
            font-size: 1rem;
            text-shadow:
                0 0 10px rgba(211, 10, 40, 0.3),
                0 0 15px rgba(227, 97, 110, 0.2),
                0 2px 4px rgba(0, 0, 0, 0.3);
            transition: all 0.4s ease;
        }
        
        .header.scrolled .logo-tagline {
            color: #D60A28 !important;
            text-shadow:
                0 1px 3px rgba(211, 10, 40, 0.3),
                0 0 12px rgba(211, 10, 40, 0.2),
                0 0 20px rgba(176, 13, 42, 0.4),
                0 2px 4px rgba(0, 0, 0, 0.3);
        }

        /* Navbar hidden state */
        .header.hidden {
            transform: translateY(-100%);
        }

        .header.scrolled {
            background: linear-gradient(135deg, rgba(25, 25, 25, 0.95) 0%, rgba(26, 26, 26, 0.95) 30%, rgba(26, 26, 26, 0.95) 70%, rgba(27, 27, 26, 0.95) 100%);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            box-shadow: none !important;
            border: none;
            color: #D60A28 !important;
        }

        .header.scrolled .nav-menu a {
            color: rgba(0, 0, 0, 0.9) !important;
            text-shadow: 
                0 1px 2px rgba(255, 255, 255, 0.8),
                0 0 8px rgba(255, 255, 255, 0.6) !important;
            font-weight: 600 !important;
            opacity: 1;
            transition: all 0.3s ease;
        }

        .header.scrolled .nav-menu a:hover {
            color: #D60A28 !important;
            text-shadow: 
                0 0 15px rgba(255, 255, 255, 0.9), 
                0 1px 3px rgba(255, 255, 255, 0.8),
                0 0 10px rgba(255, 255, 255, 0.7) !important;
            background: rgba(0, 0, 0, 0.1) !important;
            transform: translateY(-1px);
        }

        .header.scrolled .logo {
            opacity: 0.95;
            transition: opacity 0.3s ease;
        }

        .header.scrolled .portal-btn {
            opacity: 0.9;
            transition: opacity 0.3s ease;
        }

        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg,
                    transparent,
                    rgba(255, 255, 255, 0.1),
                    transparent);
            animation: navbarShimmer 4s ease-in-out infinite;
        }

        .header::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg,
                    transparent,
                    #fff,
                    rgba(255, 255, 255, 0.5),
                    #fff,
                    transparent);
            animation: borderGlow 3s ease-in-out infinite;
        }

        @keyframes navbarShimmer {
            0% {
                left: -100%;
            }

            50% {
                left: 100%;
            }

            100% {
                left: 100%;
            }
        }

        @keyframes borderGlow {
            0%, 100% {
                opacity: 0.3;
            }

            50% {
                opacity: 1;
            }
        }

      .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex
;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
    overflow: visible;
}

        /* Portal Access Button */
        .portal-access {
            margin-left: 1rem;
        }

        .portal-btn {
            display: flex !important;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            background: linear-gradient(135deg, #FF6B6B, #DC143C);
            border-radius: 50%;
            color: #D60A28 !important;
            text-decoration: none;
            font-size: 1.2rem;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            box-shadow: 0 4px 15px rgba(196, 30, 58, 0.3);
            position: relative;
            overflow: hidden;
        }

        .portal-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
            border-radius: 50%;
            opacity: 0;
            transform: scale(0.8);
            transition: all 0.3s ease;
        }

        .portal-btn:hover {
            transform: translateY(-3px) scale(1.1);
            box-shadow: 0 8px 25px rgba(196, 30, 58, 0.5);
            background: linear-gradient(135deg, #FF8E8E, #DC143C);
        }


        .portal-btn:hover::before {
            opacity: 1;
            transform: scale(1);
        }


        .portal-btn:active {
            transform: translateY(-1px) scale(1.05);
        }


        .portal-btn i {
            z-index: 2;
            position: relative;
        }

        /* Language Button Design */
        .language-switcher {
            margin-left: 15px;
        }

        .language-btn {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #D90A2C;
            padding: 0.6rem 1rem;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
            font-weight: 500;
            text-decoration: none;
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .language-btn:hover {
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
            color: #D90A2C;
            box-shadow: 0 4px 15px #D90A2C;
        }

        .language-btn i {
            color: #D90A2C;
            font-size: 0.9rem;
            transition: all 0.3s ease;
        }

        .language-btn:hover i {
            color: #D90A2C;
            transform: rotate(15deg);
        }

        /* RTL Support */
        [dir="rtl"] .language-switcher {
            margin-left: 0;
            margin-right: 15px;
        }

        [dir="rtl"] .language-btn {
            flex-direction: row-reverse;
        }

        /* Language button color change on scroll - White when navbar is black */
        .navbar.scrolled .language-btn {
            color: #D60A28;
            background: rgba(0, 0, 0, 0.1);
            border-color: rgba(0, 0, 0, 0.2);
        }

        .navbar.scrolled .language-btn:hover {
            color: #D60A28;
            background: rgba(0, 0, 0, 0.2);
            border-color: rgba(0, 0, 0, 0.3);
        }

        .navbar.scrolled .language-btn i {
            color: #D60A28;
        }

        .navbar.scrolled .language-btn:hover i {
            color: #D60A28;
        }

        
        /* Portal Mobile Link */
        .portal-mobile-link {
            background: linear-gradient(135deg, rgba(196, 30, 58, 0.2), rgba(139, 0, 0, 0.2)) !important;
            border: 2px solid rgba(196, 30, 58, 0.3) !important;
            border-radius: 15px !important;
            margin: 0.5rem 1rem !important;
        }

        .portal-mobile-link:hover {
            background: linear-gradient(135deg, rgba(196, 30, 58, 0.3), rgba(139, 0, 0, 0.3)) !important;
            border-color: rgba(196, 30, 58, 0.6) !important;
            transform: translateX(12px) scale(1.05) !important;
        }

        .portal-mobile-link .icon {
            background: linear-gradient(135deg, #FF6B6B, #DC143C);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            filter: drop-shadow(0 2px 4px rgba(196, 30, 58, 0.4));
        }

        /* Mobile Menu Button - Same as index.html */
        .mobile-menu-btn {
            display: none !important;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 48px;
            height: 48px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            cursor: pointer;
            padding: 8px;
            z-index: 10001;
            position: relative;
            border-radius: 8px;
            transition: all 0.3s ease;
            gap: 4px;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }

        .mobile-menu-btn:hover {
            transform: scale(1.1);
            background: linear-gradient(135deg, rgba(220, 20, 60, 0.3), rgba(0, 0, 0, 0.3));
            border-color: rgba(220, 20, 60, 0.5);
            box-shadow: 0 4px 15px rgba(220, 20, 60, 0.3);
        }

        .mobile-menu-btn span {
            width: 24px;
            height: 3px;
            background: white;
            border-radius: 2px;
            transition: all 0.3s ease;
            display: block;
            position: relative;
        }

        /* تأثيرات السكرول للهامبرغر */
        .mobile-menu-btn.scrolled {
            background: linear-gradient(135deg, rgba(220, 20, 60, 0.4), rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.4));
            border: 1px solid rgba(220, 20, 60, 0.6);
            box-shadow: 0 6px 20px rgba(220, 20, 60, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
        }

        .mobile-menu-btn.scrolled:hover {
            background: linear-gradient(135deg, rgba(220, 20, 60, 0.6), rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.5));
            border-color: rgba(220, 20, 60, 0.8);
            box-shadow: 0 8px 25px rgba(220, 20, 60, 0.5), 0 4px 12px rgba(0, 0, 0, 0.4);
            transform: scale(1.15);
        }

        .mobile-menu-btn.scrolled span {
            background: linear-gradient(90deg, #DC143C, #FFFFFF, #000000);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }

        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }

        /* تأثيرات السكرول للهامبرغر النشط */
        .mobile-menu-btn.active.scrolled span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
            background: linear-gradient(90deg, #DC143C, #FFFFFF, #000000);
        }

        .mobile-menu-btn.active.scrolled span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
            background: linear-gradient(90deg, #DC143C, #FFFFFF, #000000);
        }

        /* Mobile Side Navigation - Same as index.html */
        .mobile-sidenav {
            display: none !important;
            position: fixed;
            top: 0;
            left: -320px;
            width: 320px;
            height: 100vh;
            background: linear-gradient(135deg, rgba(220, 20, 60, 0.95) 0%, rgba(139, 0, 0, 0.95) 30%, rgba(0, 0, 0, 0.95) 70%, rgba(0, 0, 0, 0.98) 100%);
            backdrop-filter: blur(20px);
            z-index: 99998;
            transition: all 0.4s ease;
            padding-top: 80px;
            box-shadow: 2px 0 20px rgba(220, 20, 60, 0.3);
            overflow-y: auto;
            visibility: hidden !important;
            opacity: 0 !important;
        }

        .mobile-sidenav.active {
            left: 0 !important;
            visibility: visible !important;
            opacity: 1 !important;
        }

        .mobile-sidenav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
        }

        .mobile-sidenav li {
            margin: 0;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
        }

        .mobile-sidenav a {
            display: flex !important;
            align-items: center;
            padding: 1.2rem 1.5rem;
            color: #D60A28;
            text-decoration: none;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            margin: 0.5rem 1rem;
            border-radius: 15px;
            border-left: 3px solid transparent;
            background: linear-gradient(135deg, rgba(220, 20, 60, 0.1), rgba(0, 0, 0, 0.2));
            visibility: visible !important;
            opacity: 1 !important;
        }

        .mobile-sidenav a::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transition: left 0.5s ease;
        }

        .mobile-sidenav a:hover {
            background: linear-gradient(135deg, rgba(220, 20, 60, 0.3), rgba(0, 0, 0, 0.4));
            transform: translateX(8px);
            border-left-color: #DC143C;
            box-shadow: 0 4px 15px rgba(220, 20, 60, 0.2);
        }

        .mobile-sidenav a:hover::before {
            left: 100%;
        }

        .mobile-sidenav .icon {
            font-size: 1.8rem;
            width: 45px;
            text-align: center;
            flex-shrink: 0;
            transition: all 0.3s ease;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
            display: inline-block !important;
            visibility: visible !important;
            opacity: 1 !important;
        }

        /* تأثيرات hover للأيقونات في الموبايل مثل index.html */
        .mobile-sidenav a:hover .icon {
            transform: scale(1.2) rotate(5deg);
            filter: drop-shadow(0 4px 8px rgba(220, 20, 60, 0.6));
        }

        .mobile-sidenav .label {
            font-size: 1rem;
            font-weight: 700;
            margin-left: 0.8rem;
            opacity: 1;
            transform: translateX(0);
            transition: all 0.3s ease;
            white-space: nowrap;
            color: #D60A28;
            display: inline-block !important;
            visibility: visible !important;
        }

        /* تأثيرات hover للنصوص في الموبايل مثل index.html */
        .mobile-sidenav a:hover .label {
            color: #D60A28;
            transform: translateX(3px);
            text-shadow: 0 0 10px rgba(220, 20, 60, 0.5);
        }

        /* Mobile Overlay - Same as index.html */
        .mobile-overlay {
            display: none !important;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.6);
            z-index: 99997;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            pointer-events: none;
        }

        .mobile-overlay.active {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }

        .logo {
            font-size: 2rem;
            font-weight: 700;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            position: relative;
            z-index: 3;
        }

        .logo-sky {
            color: #D90A2C;
            font-weight: 800;
            font-size: 2.2rem;
            text-shadow:
                0 0 10px rgba(217, 10, 44, 0.5),
                0 0 20px rgba(217, 10, 44, 0.3),
                0 2px 4px rgba(0, 0, 0, 0.3);
            animation: logoGlow 2s ease-in-out infinite alternate;
        }

        .logo-yline {
            color: #fff;
            font-weight: 700;
            font-size: 2.2rem;
            text-shadow:
                0 0 10px rgba(255, 255, 255, 0.3),
                0 0 15px rgba(255, 255, 255, 0.2),
                0 2px 4px rgba(0, 0, 0, 0.3);
            transition: all 0.4s ease;
        }

        .header.scrolled .logo-yline {
            color: #000 !important;
            text-shadow:
                0 1px 3px rgba(255, 255, 255, 0.9),
                0 0 12px rgba(255, 255, 255, 0.8),
                0 0 20px rgba(255, 255, 255, 0.6),
                0 0 6px rgba(255, 255, 255, 0.7) !important;
            font-weight: 700 !important;
        }


        .logo-tagline {
            font-size: 0.6rem;
            color: rgba(255, 255, 255, 0.8);
            font-weight: 400;
            margin-left: 0.5rem;
            writing-mode: vertical-rl;
            text-orientation: mixed;
            line-height: 1.2;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
        }

        @keyframes logoGlow {
            0% {
                text-shadow:
                    0 0 10px rgba(139, 0, 0, 0.5),
                    0 0 20px rgba(139, 0, 0, 0.3),
                    0 2px 4px rgba(0, 0, 0, 0.3);
            }

            100% {
                text-shadow:
                    0 0 15px rgba(139, 0, 0, 0.8),
                    0 0 25px rgba(139, 0, 0, 0.5),
                    0 2px 4px rgba(0, 0, 0, 0.3);
            }
        }

        .nav-menu {
            display: flex !important;
            list-style: none;
            gap: 0rem;
            position: relative;
            z-index: 3;
            overflow: visible;
            visibility: visible !important;
            opacity: 1 !important;
            align-items: center;
        }

        .nav-menu li {
            position: relative;
            overflow: visible;
            display: flex !important;
            align-items: center;
            visibility: visible !important;
            opacity: 1 !important;
        }

        .nav-menu a {
            color: rgba(255, 255, 255, 0.9);
            text-decoration: none;
            font-weight: 600;
            font-size: 1rem;
            padding: 0.5rem 1rem;
            border-radius: 25px;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .nav-menu a::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
            border-radius: 25px;
            opacity: 0;
            transform: scale(0.8);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            will-change: opacity, transform;
        }

        .nav-menu a:hover {
            color: #D60A28;
            transform: translateY(-2px);
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
            box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
        }

        .nav-menu a:hover::before {
            opacity: 1;
            transform: scale(1);
        }

        /* تحسين رابط Home - Same as index.html */
        .home-link {
            background: none !important;
            border: none !important;
            font-weight: 700 !important;
            position: relative;
            overflow: hidden;
            display: inline-block !important;
            visibility: visible !important;
            opacity: 1 !important;
            color: rgba(255, 255, 255, 0.9) !important;
            text-decoration: none !important;
            font-size: 1rem !important;
            padding: 0.5rem 1rem !important;
            border-radius: 25px !important;
            transition: all 0.4s ease !important;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3) !important;
        }

        .home-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s ease;
        }

        .home-link:hover::before {
            left: 100%;
        }

        .home-link:hover {
            background: none !important;
            border: none !important;
            transform: translateY(-2px) scale(1.05) !important;
            box-shadow: none !important;
        }

        /* Dropdown Styles */
        .dropdown {
            position: relative;
            overflow: visible;
        }

        .dropdown-toggle {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 600;
            font-size: 1rem;
            padding: 0.5rem 1rem;
            border-radius: 25px;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .header.scrolled .dropdown-toggle {
            color: rgba(0, 0, 0, 0.9) !important;
            text-shadow: 
                0 1px 2px rgba(255, 255, 255, 0.8),
                0 0 8px rgba(255, 255, 255, 0.6) !important;
            font-weight: 600 !important;
        }

        .header.scrolled .dropdown:hover .dropdown-toggle {
            color: #D60A28 !important;
            text-shadow: 
                0 0 15px rgba(255, 255, 255, 0.9), 
                0 1px 3px rgba(255, 255, 255, 0.8),
                0 0 10px rgba(255, 255, 255, 0.7) !important;
            background: rgba(0, 0, 0, 0.1) !important;
            transform: translateY(-1px);
        }

        .dropdown-toggle i {
            font-size: 0.8rem;
            transition: transform 0.3s ease;
        }

        .dropdown:hover .dropdown-toggle {
            color: #D60A28;
            transform: translateY(-2px);
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
            box-shadow: none;
        }

        .dropdown:hover .dropdown-toggle i {
            transform: rotate(180deg);
        }

        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            background: linear-gradient(135deg, rgba(139, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.95) 100%);
            backdrop-filter: blur(20px);
            border-radius: 15px;
            padding: 1rem 0;
            margin: 0.5rem 0 0 0;
            min-width: 250px;
            box-shadow:
                0 10px 30px rgba(0, 0, 0, 0.3),
                0 0 20px rgba(139, 0, 0, 0.2);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            z-index: 10005;
            border: 1px solid rgba(255, 255, 255, 0.1);
            pointer-events: none;
            list-style: none;
        }

        .dropdown:hover .dropdown-menu,
        .dropdown.show .dropdown-menu {
            opacity: 1 !important;
            visibility: visible !important;
            transform: translateY(0) !important;
            pointer-events: auto !important;
        }

        .dropdown-menu li {
            margin: 0;
            list-style: none;
        }

        .dropdown-menu a {
            display: block;
            padding: 0.8rem 1.5rem;
            color: rgba(255, 255, 255, 0.9) !important;
            text-decoration: none;
            font-weight: 500;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            border-radius: 0;
            position: relative;
            overflow: hidden;
            white-space: nowrap;
        }

        .dropdown-menu a:hover {
            background: rgba(255, 255, 255, 0.1);
            color: #D60A28 !important;
            transform: translateX(5px);
            padding-left: 2rem;
            text-decoration: none;
        }

        /* Force dropdown menu content to always be white */
        .dropdown-menu,
        .dropdown-menu *,
        .dropdown-menu a,
        .dropdown-menu li,
        .dropdown-menu span,
        .header .dropdown-menu,
        .header .dropdown-menu *,
        .header .dropdown-menu a,
        .header .dropdown-menu li,
        .header .dropdown-menu span,
        .header.scrolled .dropdown-menu,
        .header.scrolled .dropdown-menu *,
        .header.scrolled .dropdown-menu a,
        .header.scrolled .dropdown-menu li,
        .header.scrolled .dropdown-menu span {
            color: rgba(255, 255, 255, 0.9) !important;
        }

        .dropdown-menu a:hover::after {
            content: '';
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: #C41E3A;
            font-weight: bold;
        }

        /* Additional force for all dropdown menu states */
        .dropdown-menu a,
        .dropdown-menu a:visited,
        .dropdown-menu a:active,
        .dropdown-menu a:focus,
        .dropdown-menu a:hover,
        .header .dropdown-menu a,
        .header .dropdown-menu a:visited,
        .header .dropdown-menu a:active,
        .header .dropdown-menu a:focus,
        .header .dropdown-menu a:hover,
        .header.scrolled .dropdown-menu a,
        .header.scrolled .dropdown-menu a:visited,
        .header.scrolled .dropdown-menu a:active,
        .header.scrolled .dropdown-menu a:focus,
        .header.scrolled .dropdown-menu a:hover {
            color: rgba(255, 255, 255, 0.9) !important;
        }


        /* Mobile Dropdown Styles */
        .mobile-dropdown {
            position: relative;
        }

        .mobile-dropdown-toggle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: all 0.3s ease;
            border-radius: 8px;
            margin: 0.2rem 0;
            cursor: default;
            position: relative;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
            pointer-events: none;
            touch-action: manipulation;
            z-index: 10;
        }

        /* تأثيرات hover للأزرار المنسدلة في الموبايل مثل index.html */
        .mobile-dropdown-toggle:hover {
            background: rgba(255, 255, 255, 0.05);
        }

        .mobile-dropdown.active .mobile-dropdown-toggle {
            background: rgba(196, 30, 58, 0.1);
            color: #C41E3A;
        }
        
        .mobile-dropdown-toggle a {
            pointer-events: auto;
            flex: 1;
            text-decoration: none;
        }

        .dropdown-arrow {
            font-size: 0.8rem;
            transition: all 0.3s ease;
            cursor: pointer;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
            pointer-events: auto;
            touch-action: manipulation;
            padding: 0.4rem;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.15);
            color: rgba(255, 255, 255, 0.9);
            min-width: 32px;
            min-height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.2);
            position: relative;
            z-index: 10;
        }

        /* تأثيرات hover للأسهم المنسدلة في الموبايل مثل index.html */
        .dropdown-arrow:hover {
            background: rgba(255, 255, 255, 0.25);
            color: #C41E3A;
            transform: scale(1.1);
            border-color: rgba(196, 30, 58, 0.3);
        }

        .dropdown-arrow:active {
            transform: scale(0.95);
            background: rgba(196, 30, 58, 0.2);
        }

        .mobile-dropdown.active .dropdown-arrow {
            transform: rotate(180deg);
            color: #C41E3A;
            background: rgba(196, 30, 58, 0.2);
            border-color: rgba(196, 30, 58, 0.4);
        }

        .mobile-dropdown-menu {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease, opacity 0.3s ease;
            background: rgba(0, 0, 0, 0.25);
            margin: 0.5rem 1rem 0;
            border-radius: 10px;
            border-left: 3px solid #DC143C;
            opacity: 0;
            visibility: hidden;
            backdrop-filter: blur(15px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .mobile-dropdown.active .mobile-dropdown-menu {
            max-height: 300px;
            opacity: 1;
            visibility: visible;
            overflow-y: auto;
            overflow-x: hidden;
        }

        .mobile-dropdown-menu li {
            margin: 0;
        }

        .mobile-dropdown-menu a {
            padding: 0.8rem 1rem 0.8rem 2.5rem;
            margin: 0.2rem 0.5rem;
            border-radius: 8px;
            font-size: 0.85rem;
            background: rgba(255, 255, 255, 0.08);
            border-left: 3px solid transparent;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            min-height: 38px;
            color: rgba(255, 255, 255, 0.9);
            text-decoration: none;
            /* تحسينات للتفاعل مع اللمس */
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        /* تأثيرات hover للقوائم المنسدلة في الموبايل مثل index.html */
        .mobile-dropdown-menu a:hover {
            background: rgba(196, 30, 58, 0.1);
            border-left-color: #C41E3A;
            transform: translateX(3px);
            color: #C41E3A;
        }

        /* تحسين رابط Home في الموبايل - Same as index.html */
        .home-mobile-item .home-mobile-link {
            background: linear-gradient(135deg, rgba(196, 30, 58, 0.2), rgba(139, 0, 0, 0.2)) !important;
            border: 2px solid rgba(196, 30, 58, 0.3) !important;
            font-weight: 700 !important;
            display: flex !important;
            visibility: visible !important;
            opacity: 1 !important;
            color: #D60A28 !important;
            text-decoration: none !important;
            padding: 1.2rem 1.5rem !important;
            margin: 0.5rem 1rem !important;
            border-radius: 15px !important;
            border-left: 3px solid transparent !important;
            transition: all 0.4s ease !important;
        }

        /* تأثيرات hover لرابط Home في الموبايل مثل index.html */
        .home-mobile-item .home-mobile-link:hover {
            background: linear-gradient(135deg, rgba(196, 30, 58, 0.3), rgba(139, 0, 0, 0.3)) !important;
            border-color: rgba(196, 30, 58, 0.6) !important;
            transform: translateX(8px) scale(1.02) !important;
        }

        .home-mobile-item .home-mobile-link .icon {
            background: linear-gradient(135deg, #FF6B6B, #DC143C);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            filter: drop-shadow(0 2px 4px rgba(196, 30, 58, 0.4));
        }

        /* Custom Scrollbar for Mobile Dropdown */
        .mobile-dropdown-menu::-webkit-scrollbar {
            width: 6px;
        }

        .mobile-dropdown-menu::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 3px;
        }

        .mobile-dropdown-menu::-webkit-scrollbar-thumb {
            background: rgba(139, 0, 0, 0.6);
            border-radius: 3px;
        }

        .mobile-dropdown-menu::-webkit-scrollbar-thumb:hover {
            background: rgba(139, 0, 0, 0.8);
        }

        /* Large Desktop */
        @media (max-width: 1200px) {
            .nav-menu {
                gap: 1.5rem;
            }
            
            .nav-menu a {
                padding: 0.7rem 1.1rem;
                font-size: 0.95rem;
            }
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
            .nav-menu {
                gap: 1.2rem;
            }
            
            .nav-menu a {
                padding: 0.6rem 1rem;
                font-size: 0.9rem;
            }
        }

        /* Small Tablet */
        @media (max-width: 900px) {
            .nav-menu {
                gap: 1rem;
            }
            
            .nav-menu a {
                padding: 0.5rem 0.8rem;
                font-size: 0.85rem;
            }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
            .nav-menu {
                display: none !important;
            }

            .mobile-menu-btn {
                display: flex !important;
            }

            .mobile-sidenav {
                display: block !important;
                visibility: hidden !important;
                opacity: 0 !important;
                left: -320px !important;
            }

            .mobile-sidenav.active {
                visibility: visible !important;
                opacity: 1 !important;
                left: 0 !important;
            }

            .mobile-overlay {
                display: none !important;
                pointer-events: none;
            }

            .mobile-overlay.active {
                display: block !important;
                pointer-events: auto;
            }

            .logo {
                font-size: 1.5rem;
            }

            .logo-sky, .logo-yline {
                font-size: 1.8rem;
            }

            .logo-tagline {
                display: none;
            }
            
            /* تحسينات إضافية للموبايل */
            .nav-container {
                padding: 0 1rem;
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                width: 100% !important;
            }
            
            .header {
                display: block !important;
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                width: 100% !important;
                z-index: 9999 !important;
                visibility: visible !important;
                opacity: 1 !important;
            }
            
            /* تحسين حجم زر الموبايل */
            .mobile-menu-btn {
                width: 35px;
                height: 30px;
            }
            
            .mobile-menu-btn span {
                height: 3px;
            }
            
            /* تقليل ارتفاع الهيدر الإجمالي */
            .header {
                min-height: 60px;
            }
        }
        
        /* تحسينات للشاشات الصغيرة جداً */
        @media (max-width: 480px) {
            .nav-container {
                padding: 0.2rem 0.6rem !important;
            }
            
            .logo {
                font-size: 1.1rem !important;
            }
            
            .logo-sky, .logo-yline {
                font-size: 1.3rem !important;
            }
            
            .mobile-sidenav {
                width: 260px !important;
                left: -260px !important;
                padding-top: 3px !important;
            }
            
            .mobile-menu-btn {
                width: 35px !important;
                height: 30px !important;
            }
            
            .mobile-menu-btn span {
                width: 18px !important;
                height: 2px !important;
            }
            
            /* تقليل المسافة العلوية أكثر للشاشات الصغيرة */
            body {
                padding-top: 50px !important;
            }
            
            .header {
                padding: 0.3rem 0 !important;
                min-height: 45px !important;
            }
        }
        
        /* تحسينات للشاشات المتوسطة (تابلت) */
        @media (min-width: 769px) and (max-width: 1024px) {
            .nav-menu {
                gap: 1.5rem;
            }
            
            .nav-menu a {
                padding: 0.6rem 1rem;
                font-size: 0.9rem;
            }
            
            .logo {
                font-size: 1.8rem;
            }
            
            .logo-sky, .logo-yline {
                font-size: 2rem;
            }
        }

        /* Add padding to body to account for fixed header */
        body {
            padding-top: 80px;
        }

        /* Reduce top padding on mobile for better content visibility */
        @media (max-width: 768px) {
            body {
                padding-top: 60px !important;
            }
            
            /* النافبار المحمول ثابت وتفاعلي */
            .header {
                position: fixed !important;
                top: 0 !important;
                padding: 0.4rem 0 !important;
                min-height: 50px !important;
            }
            
            .mobile-sidenav {
                width: 320px !important;
                padding-top: 20px !important;
                max-height: calc(100vh - 40px) !important;
            }
            
            /* تحسين زر Home */
            .mobile-sidenav .nav-link[href*="index"] {
                background: linear-gradient(135deg, #DC143C, #B22222) !important;
                color: #D60A28 !important;
                border-radius: 8px !important;
                margin: 5px 0 !important;
                padding: 12px 15px !important;
                font-weight: 600 !important;
                box-shadow: 0 4px 12px rgba(220, 20, 60, 0.3) !important;
                transition: all 0.3s ease !important;
            }
            
            .mobile-sidenav .nav-link[href*="index"]:hover {
                transform: translateY(-2px) !important;
                box-shadow: 0 6px 20px rgba(220, 20, 60, 0.4) !important;
            }
            
            /* تحسين dropdown toggles */
            .mobile-sidenav .dropdown-toggle {
                background: linear-gradient(135deg, rgba(220, 20, 60, 0.2), rgba(0, 0, 0, 0.3)) !important;
                border: 1px solid rgba(220, 20, 60, 0.4) !important;
                pointer-events: auto !important;
                box-shadow: 0 2px 8px rgba(220, 20, 60, 0.1) !important;
            }
            
            /* تحسين dropdown menus */
            .mobile-sidenav .dropdown-menu {
                background: linear-gradient(135deg, rgba(220, 20, 60, 0.95) 0%, rgba(0, 0, 0, 0.95) 100%) !important;
                max-height: 400px !important;
                overflow-y: auto !important;
                border-radius: 8px !important;
                margin-top: 5px !important;
                border: 1px solid rgba(220, 20, 60, 0.3) !important;
                box-shadow: 0 4px 15px rgba(220, 20, 60, 0.2) !important;
            }
            
            /* تحسين أحجام الأيقونات والخطوط */
            .mobile-sidenav .dropdown-menu .nav-link {
                padding: 10px 15px !important;
                font-size: 0.9rem !important;
                white-space: nowrap !important;
                text-overflow: ellipsis !important;
                overflow: hidden !important;
            }
            
            .mobile-sidenav .dropdown-menu .fas {
                font-size: 1rem !important;
                width: 20px !important;
            }
            
            /* تقليل المسافة العلوية للكونتينر */
            .nav-container {
                padding: 0.3rem 1rem !important;
            }
            
            /* تحسين عرض المحتوى */
            .logo {
                font-size: 1.2rem !important;
            }
            
            /* إزالة الكارد من عناصر النافبار المحمول */
            .mobile-sidenav .nav-link {
                box-shadow: none !important;
                background: linear-gradient(135deg, rgba(220, 20, 60, 0.05), rgba(0, 0, 0, 0.1)) !important;
                border: 1px solid rgba(220, 20, 60, 0.1) !important;
                margin: 2px 0 !important;
                border-radius: 6px !important;
                white-space: nowrap !important;
                text-overflow: ellipsis !important;
                overflow: hidden !important;
            }
            
            .mobile-sidenav .nav-link:hover {
                background: linear-gradient(135deg, rgba(220, 20, 60, 0.2), rgba(0, 0, 0, 0.3)) !important;
                border-radius: 6px !important;
                border-color: rgba(220, 20, 60, 0.4) !important;
                box-shadow: 0 2px 8px rgba(220, 20, 60, 0.1) !important;
            }
            
            /* تحسين التخطيط العام */
            .mobile-sidenav {
                overflow-y: auto !important;
                scrollbar-width: thin !important;
                scrollbar-color: rgba(255, 255, 255, 0.3) transparent !important;
            }
            
            .mobile-sidenav::-webkit-scrollbar {
                width: 6px !important;
            }
            
            .mobile-sidenav::-webkit-scrollbar-track {
                background: transparent !important;
            }
            
            .mobile-sidenav::-webkit-scrollbar-thumb {
                background: linear-gradient(135deg, rgba(220, 20, 60, 0.6), rgba(0, 0, 0, 0.8)) !important;
                border-radius: 3px !important;
            }
            
            .logo-sky, .logo-yline {
                font-size: 1.4rem !important;
            }
            
            /* تحسين زر الموبايل */
            .mobile-menu-btn {
                width: 40px !important;
                height: 35px !important;
            }
            
            .mobile-menu-btn span {
                width: 20px !important;
                height: 2px !important;
            }
        }
        
        /* تحسينات للشاشات التي تدعم اللمس */
        .touch-device .mobile-menu-btn {
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0.1);
        }
        
        .touch-device .mobile-sidenav a {
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0.1);
        }
        
        .touch-device .dropdown-arrow {
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0.1);
        }
        
        /* تحسينات للشاشات عالية الدقة */
        .high-dpi .mobile-menu-btn span {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
        }
        
        .high-dpi .mobile-sidenav {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
        }
        
        /* تحسينات للأداء */
        .mobile-menu-btn,
        .mobile-sidenav,
        .mobile-overlay {
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -webkit-perspective: 1000;
            perspective: 1000;
        }
    `;
}

function getNavbarHTML() {
    return `
        <!-- Header -->
        <header class="header">
            <nav class="nav-container">
                <a href="index.html" class="logo">
                    <span class="logo-sky">SK</span><span class="logo-yline">YLINE</span>
                    <span class="logo-tagline" data-translate="logo-tagline">Innovation Software</span>
                </a>

                <ul class="nav-menu">
                    <li><a href="index.html" class="home-link" data-translate="nav-home">Home</a></li>
                    <li class="dropdown">
                        <a href="abouts.html" class="dropdown-toggle" data-translate="nav-about">About <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="abouts.html#company-profile" data-translate="nav-company-profile">Company Profile</a></li>
                            <li><a href="abouts.html#vision-mission" data-translate="nav-vision-mission">Vision & Mission</a></li>
                            <li><a href="abouts.html#leadership" data-translate="nav-leadership">Leadership Team</a></li>
                            <li><a href="abouts.html#values" data-translate="nav-values">Our Values</a></li>
                            <li><a href="abouts.html#partners" data-translate="nav-partners">Strategic Partners</a></li>
                            <li><a href="abouts.html#alliances" data-translate="nav-alliances">Strategic Alliances</a></li>
                            <li><a href="abouts.html#clients" data-translate="nav-clients">Our Clients</a></li>
                            <li><a href="testimonials-case-studies.html" data-translate="nav-testimonials">Testimonials & Case Studies</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="products&solutions.html" class="dropdown-toggle" data-translate="nav-products">Products & Solutions <i
                                class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="products&solutions.html" data-translate="nav-products">Our Products & Solutions</a></li>
                            
                            <li><a href="products&solutions.html#demo" data-translate="nav-products">Book Your Demo</a></li>
                            
                            
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="iso-consulting.html" class="dropdown-toggle" data-translate="nav-iso">ISO Consulting <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="iso-consulting.html" data-translate="nav-iso-all">All ISO Standards</a></li>
                            <li><a href="iso-consulting.html#iso-9001" data-translate="nav-iso-9001">ISO 9001 - Quality Management</a></li>
                            <li><a href="iso-consulting.html#iso-27001" data-translate="nav-iso-27001">ISO 27001 - Information Security</a></li>
                            <li><a href="iso-consulting.html#iso-14001" data-translate="nav-iso-14001">ISO 14001 - Environmental</a></li>
                            <li><a href="iso-consulting.html#iso-45001" data-translate="nav-iso-45001">ISO 45001 - Health & Safety</a></li>
                            <li><a href="iso-consulting.html#contact" data-translate="nav-iso-consultation">Get Consultation</a></li>
                        </ul>
                    </li>
                    <li><a href="contact-us.html" data-translate="nav-contact">Contact Us</a></li>
                    <li class="portal-access">
                       
                    </li>
                    <li class="language-switcher">
                        <button class="language-btn" id="language-switch-btn">
                            <i class="fas fa-globe"></i>
                            <span data-translate="language-switch">العربية</span>
                        </button>
                    </li>
                </ul>

                <!-- Mobile Menu Button -->
                <div class="mobile-menu-btn" id="mobileMenuBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>

        <!-- Mobile Side Navigation -->
        <aside class="mobile-sidenav" id="mobileSidenav">
            <ul>
                <li class="mobile-dropdown home-mobile-item">
                    <div class="mobile-dropdown-toggle">
                        <a href="index.html" class="dropdown-link home-mobile-link"><span class="icon">🏠</span><span
                                class="label" data-translate="nav-home">Home</span></a>
                        <span class="dropdown-arrow">▼</span>
                    </div>
                    <ul class="mobile-dropdown-menu">
                        <li><a href="index.html#industries"><span class="icon">🏢</span><span
                                    class="label" data-translate="nav-industries">Industries</span></a></li>
                        <li><a href="index.html#services"><span class="icon">💡</span><span class="label" data-translate="nav-why-choose">Why Choose
                                    Us</span></a></li>
                    </ul>
                </li>
                <li class="mobile-dropdown">
                    <div class="mobile-dropdown-toggle">
                        <a href="abouts.html" class="dropdown-link"><span class="icon">👥</span><span class="label" data-translate="nav-about">About</span></a>
                        <span class="dropdown-arrow">▼</span>
                    </div>
                    <ul class="mobile-dropdown-menu">
                        <li><a href="abouts.html#company-profile"><span class="icon">🏢</span><span class="label" data-translate="nav-company-profile">Company Profile</span></a></li>
                        <li><a href="abouts.html#vision-mission"><span class="icon">🎯</span><span class="label" data-translate="nav-vision-mission">Vision & Mission</span></a></li>
                        <li><a href="abouts.html#leadership"><span class="icon">👑</span><span class="label" data-translate="nav-leadership">Leadership Team</span></a></li>
                        <li><a href="abouts.html#values"><span class="icon">💎</span><span class="label" data-translate="nav-values">Our Values</span></a></li>
                        <li><a href="abouts.html#partners"><span class="icon">🤝</span><span class="label" data-translate="nav-partners">Strategic Partners</span></a></li>
                        <li><a href="abouts.html#alliances"><span class="icon">⚡</span><span class="label" data-translate="nav-alliances">Strategic Alliances</span></a></li>
                        <li><a href="abouts.html#clients"><span class="icon">👥</span><span class="label" data-translate="nav-clients">Our Clients</span></a></li>
                        <li><a href="testimonials-case-studies.html"><span class="icon">⭐</span><span class="label" data-translate="nav-testimonials">Testimonials & Case Studies</span></a></li>
                    </ul>
                </li>
                <li class="mobile-dropdown products-dropdown">
                    <div class="mobile-dropdown-toggle">
                        <a href="products&solutions.html" class="dropdown-link"><span class="icon">🛠️</span><span
                                class="label" data-translate="nav-products">Products & Solutions</span></a>
                        <span class="dropdown-arrow">▼</span>
                    </div>
                    <ul class="mobile-dropdown-menu">
                        <li><a href="products&solutions.html"><span class="icon">📦</span><span class="label" data-translate="nav-products">Our Products &
                                    Solutions</span></a></li>
                        <li><a href="products&solutions.html#software-solutions"><span class="icon">💻</span><span
                                    class="label" data-translate="nav-products">Software Solutions</span></a></li>
                        <li><a href="saas-programs.html"><span class="icon">☁️</span><span class="label" data-translate="nav-saas">SaaS Programs</span></a></li>
                        <li><a href="pricing.html"><span class="icon">💰</span><span class="label" data-translate="nav-pricing">Pricing</span></a></li>
                        <li><a href="products&solutions.html#demo"><span class="icon">🎬</span><span class="label" data-translate="nav-products">Book Your
                                    Demo</span></a></li>
                        <li><a href="products&solutions.html#videos"><span class="icon">🎥</span><span class="label" data-translate="nav-products">Product
                                    Videos</span></a></li>
                        <li><a href="download-center.html"><span class="icon">⬇️</span><span class="label" data-translate="nav-download">Download
                                    Center</span></a></li>
                    </ul>
                </li>
                <li class="mobile-dropdown">
                    <div class="mobile-dropdown-toggle">
                        <a href="iso-consulting.html" class="dropdown-link"><span class="icon">🏆</span><span class="label" data-translate="nav-iso">ISO Consulting</span></a>
                        <span class="dropdown-arrow">▼</span>
                    </div>
                    <ul class="mobile-dropdown-menu">
                        <li><a href="iso-consulting.html"><span class="icon">📋</span><span class="label" data-translate="nav-iso-all">All ISO Standards</span></a></li>
                        <li><a href="iso-consulting.html#iso-9001"><span class="icon">🥇</span><span class="label" data-translate="nav-iso-9001">ISO 9001 - Quality</span></a></li>
                        <li><a href="iso-consulting.html#iso-27001"><span class="icon">🔒</span><span class="label" data-translate="nav-iso-27001">ISO 27001 - Security</span></a></li>
                        <li><a href="iso-consulting.html#iso-14001"><span class="icon">🌱</span><span class="label" data-translate="nav-iso-14001">ISO 14001 - Environmental</span></a></li>
                        <li><a href="iso-consulting.html#iso-45001"><span class="icon">⛑️</span><span class="label" data-translate="nav-iso-45001">ISO 45001 - Safety</span></a></li>
                        <li><a href="iso-consulting.html#contact"><span class="icon">💬</span><span class="label" data-translate="nav-iso-consultation">Get Consultation</span></a></li>
                    </ul>
                </li>
                <li><a href="contact-us.html"><span class="icon">📞</span><span class="label" data-translate="nav-contact">Contact Us</span></a></li>
                <li><a href="client-portal-access.html" class="portal-mobile-link"><span class="icon">🔐</span><span class="label" data-translate="nav-portal">Client Portal</span></a></li>
            </ul>
        </aside>

        <!-- Mobile Overlay -->
        <div class="mobile-overlay" id="mobileOverlay"></div>
    `;
}

function initializeLanguageSwitcher() {
    const languageBtn = document.querySelector('#language-switch-btn');
    if (languageBtn) {
        languageBtn.addEventListener('click', () => {
            if (window.translationSystem) {
                window.translationSystem.toggleLanguage();
                
                // Update document direction based on current language
                const currentLang = document.documentElement.lang;
                if (currentLang === 'ar') {
                    document.documentElement.dir = 'rtl';
                    document.body.style.direction = 'rtl';
                    document.body.style.textAlign = 'right';
                } else {
                    document.documentElement.dir = 'ltr';
                    document.body.style.direction = 'ltr';
                    document.body.style.textAlign = 'left';
                }
            }
        });
    }
}

function initializeNavbarFunctionality() {
    // Mobile navigation functionality
    const mobileSidenav = document.getElementById('mobileSidenav');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');

    function toggleMobileSidenav() {
        if (!mobileSidenav || !mobileOverlay || !mobileMenuBtn) {
            console.error('Mobile menu elements not found');
            console.log('mobileSidenav:', mobileSidenav);
            console.log('mobileOverlay:', mobileOverlay);
            console.log('mobileMenuBtn:', mobileMenuBtn);
            return;
        }

        const isActive = mobileSidenav.classList.contains('active');
        console.log('Toggling mobile menu. Current state:', isActive ? 'open' : 'closed');

        if (isActive) {
            // Close menu
            mobileSidenav.classList.remove('active');
            mobileOverlay.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.classList.remove('mobile-menu-open');

            // Force hide based on direction
            mobileSidenav.style.visibility = 'hidden';
            mobileSidenav.style.opacity = '0';
            const currentDir = document.documentElement.dir || 'ltr';
            if (currentDir === 'rtl') {
                mobileSidenav.style.right = '-320px';
                mobileSidenav.style.left = 'auto';
            } else {
                mobileSidenav.style.left = '-320px';
                mobileSidenav.style.right = 'auto';
            }

            // Close all mobile dropdowns when closing menu
            mobileDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
            console.log('Mobile menu closed');
        } else {
            // Open menu
            mobileSidenav.classList.add('active');
            mobileOverlay.classList.add('active');
            mobileMenuBtn.classList.add('active');
            document.body.classList.add('mobile-menu-open');

            // Force visibility based on direction
            mobileSidenav.style.visibility = 'visible';
            mobileSidenav.style.opacity = '1';
            const currentDir = document.documentElement.dir || 'ltr';
            if (currentDir === 'rtl') {
                mobileSidenav.style.right = '0';
                mobileSidenav.style.left = 'auto';
            } else {
                mobileSidenav.style.left = '0';
                mobileSidenav.style.right = 'auto';
            }

            console.log('Mobile menu opened');
        }
    }

    // Mobile menu button click
    if (mobileMenuBtn) {
        console.log('Mobile menu button found, adding event listeners');

        // إضافة مستمعي الأحداث للتفاعل مع اللمس والنقر
        mobileMenuBtn.addEventListener('click', function (e) {
            console.log('Mobile menu button clicked');
            e.preventDefault();
            e.stopPropagation();
            toggleMobileSidenav();
        });

        // إضافة دعم للتفاعل مع اللمس
        mobileMenuBtn.addEventListener('touchstart', function (e) {
            e.preventDefault();
            e.stopPropagation();
        });

        mobileMenuBtn.addEventListener('touchend', function (e) {
            console.log('Mobile menu button touched');
            e.preventDefault();
            e.stopPropagation();
            toggleMobileSidenav();
        });

        // منع التمرير عند الضغط على الزر
        mobileMenuBtn.addEventListener('touchmove', function (e) {
            e.preventDefault();
        });

        // إضافة دعم للماوس
        mobileMenuBtn.addEventListener('mousedown', function (e) {
            e.preventDefault();
            e.stopPropagation();
        });

        mobileMenuBtn.addEventListener('mouseup', function (e) {
            console.log('Mobile menu button mouse up');
            e.preventDefault();
            e.stopPropagation();
            toggleMobileSidenav();
        });
    } else {
        console.error('Mobile menu button not found');
    }

    // Mobile overlay click - close menu when clicking on overlay
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileSidenav();
        });
    }

    // Mobile dropdown functionality
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');

    mobileDropdowns.forEach((dropdown, index) => {
        const toggle = dropdown.querySelector('.mobile-dropdown-toggle');
        if (toggle) {
            // Allow the link to navigate normally when clicking on the link text
            const link = toggle.querySelector('a');
            if (link) {
                link.addEventListener('click', function (e) {
                    // Allow normal navigation - don't prevent default
                    // Just close any open dropdowns
                    mobileDropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                });
            }

            // Only add click listener to the arrow specifically
            const arrow = toggle.querySelector('.dropdown-arrow');
            if (arrow) {
                // Define the event handlers
                const handleArrowClick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dropdown.classList.toggle('active');

                    // Close other dropdowns when opening a new one
                    mobileDropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                };

                const handleArrowTouch = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dropdown.classList.toggle('active');

                    // Close other dropdowns when opening a new one
                    mobileDropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                };

                // Remove any existing event listeners first
                arrow.removeEventListener('click', handleArrowClick);
                arrow.removeEventListener('touchstart', handleArrowTouch);

                // Add event listeners
                arrow.addEventListener('click', handleArrowClick);
                arrow.addEventListener('touchstart', handleArrowTouch);

                // Also add mousedown for better mobile support
                arrow.addEventListener('mousedown', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                });
            }
        }
    });

    // Close mobile menu when clicking navigation links
    if (mobileSidenav) {
        const sidenavLinks = mobileSidenav.querySelectorAll('a');
        sidenavLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileSidenav.classList.remove('active');
                mobileOverlay.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.classList.remove('mobile-menu-open');
            });
        });
    }

    // Close on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileSidenav && mobileSidenav.classList.contains('active')) {
            toggleMobileSidenav();
        }
    });

    // Close mobile menu when clicking outside (but not on the hamburger)
    document.addEventListener('click', function (e) {
        if (mobileSidenav && mobileSidenav.classList.contains('active')) {
            // Check if click is outside the mobile menu and not on the hamburger button
            if (!mobileSidenav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                toggleMobileSidenav();
            }
        }
    });

    // Header scroll effect with performance optimization
    const header = document.querySelector('.header');
    if (header) {
        let ticking = false;

        function updateHeader() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
                header.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 25%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.08) 75%, rgba(255, 255, 255, 0.15) 100%)';
                header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1), 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 0 20px rgba(0, 0, 0, 0.08)';
                header.style.backdropFilter = 'blur(20px) saturate(180%) brightness(110%)';
                header.style.webkitBackdropFilter = 'blur(20px) saturate(180%) brightness(110%)';
                header.style.border = '1px solid rgba(255, 255, 255, 0.3)';
                header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.4)';
            } else {
                header.classList.remove('scrolled');
                header.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 20, 0.95) 30%, rgba(20, 20, 20, 0.95) 70%, rgba(0, 0, 0, 0.95) 100%)';
                header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)';
                header.style.backdropFilter = 'blur(20px)';
                header.style.webkitBackdropFilter = 'blur(20px)';
                header.style.border = 'none';
                header.style.borderBottom = '2px solid rgba(255, 255, 255, 0.1)';
            }
            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestTick, { passive: true });
    }

    // Debug function to check mobile menu elements
    function debugMobileMenu() {
        console.log('Mobile Menu Debug:');
        console.log('Mobile Menu Button:', mobileMenuBtn);
        console.log('Mobile Sidenav:', mobileSidenav);
        console.log('Mobile Overlay:', mobileOverlay);
        console.log('Mobile Dropdowns:', mobileDropdowns.length);
        console.log('Window width:', window.innerWidth);
        console.log('Is mobile breakpoint:', window.innerWidth <= 768);
        console.log('User Agent:', navigator.userAgent);
        console.log('Touch Support:', 'ontouchstart' in window);
    }

    // Run debug on mobile devices
    if (window.innerWidth <= 768) {
        debugMobileMenu();
    }

    // إضافة دعم للشاشات التي تدعم اللمس
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }

    // إضافة دعم للشاشات عالية الدقة
    if (window.devicePixelRatio > 1) {
        document.body.classList.add('high-dpi');
    }

    // تحسين النافبار المحمول
    applyMobileScrollBehavior();

    // تفعيل النافبار التفاعلي
    initializeSmartNavbar();

    console.log('Navbar loaded successfully');
}

// تحسين سلوك النافبار المحمول
function applyMobileScrollBehavior() {
    console.log('🔧 Applying mobile scroll behavior...');

    try {
        const header = document.querySelector('.header');
        if (!header) {
            console.log('⚠️ Header not found, retrying...');
            setTimeout(applyMobileScrollBehavior, 500);
            return;
        }

        const isMobile = window.innerWidth <= 768;
        console.log('📱 Is mobile:', isMobile);

        if (isMobile) {
            // في الموبايل: النافبار ثابت وتفاعلي أيضاً
            header.style.position = 'fixed';
            header.style.top = '0';
            console.log('✅ Mobile: Navbar set to fixed position');

            // إضافة padding-top للbody في الموبايل
            document.body.style.paddingTop = '60px';
            console.log('✅ Mobile: Body padding-top added');

            // تفعيل النافبار التفاعلي في الموبايل أيضاً
            console.log('✅ Mobile: Smart navbar enabled');
        } else {
            // في الديسكتوب: النافبار ثابت وتفاعلي
            header.style.position = 'fixed';
            header.style.top = '0';
            console.log('✅ Desktop: Navbar set to fixed position');

            // إضافة padding-top للbody في الديسكتوب
            document.body.style.paddingTop = '80px';
            console.log('✅ Desktop: Body padding-top added');

            // تفعيل النافبار التفاعلي في الديسكتوب
            console.log('✅ Desktop: Smart navbar enabled');
        }

        console.log('✅ Mobile scroll behavior applied successfully');

    } catch (error) {
        console.error('❌ Error applying mobile scroll behavior:', error);

        // Retry after a delay
        setTimeout(() => {
            console.log('🔄 Retrying mobile scroll behavior...');
            applyMobileScrollBehavior();
        }, 1000);
    }
}

// تحسين الدروب داون للبقاء مفتوحة عند التمرير
function enhanceDropdownBehavior() {
    console.log('🔧 Enhancing dropdown behavior...');

    const dropdowns = document.querySelectorAll('.dropdown');
    let currentDropdown = null;
    let hideTimeout = null;

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');

        if (!toggle || !menu) return;

        // عند التمرير على الدروب داون
        dropdown.addEventListener('mouseenter', () => {
            console.log('🖱️ Mouse enter dropdown');

            // إلغاء إخفاء الدروب داون
            if (hideTimeout) {
                clearTimeout(hideTimeout);
                hideTimeout = null;
            }

            // إخفاء الدروب داون الحالي إذا كان مختلفاً
            if (currentDropdown && currentDropdown !== dropdown) {
                currentDropdown.classList.remove('show');
                const currentMenu = currentDropdown.querySelector('.dropdown-menu');
                if (currentMenu) {
                    currentMenu.classList.remove('show');
                }
            }

            // إظهار الدروب داون الحالي
            dropdown.classList.add('show');
            menu.classList.add('show');
            currentDropdown = dropdown;
        });

        // عند مغادرة الدروب داون
        dropdown.addEventListener('mouseleave', () => {
            console.log('🖱️ Mouse leave dropdown');

            // تأخير إخفاء الدروب داون
            hideTimeout = setTimeout(() => {
                dropdown.classList.remove('show');
                menu.classList.remove('show');

                if (currentDropdown === dropdown) {
                    currentDropdown = null;
                }
            }, 300); // تأخير 300ms
        });

        // عند النقر على عنصر في الدروب داون
        const menuItems = menu.querySelectorAll('a');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                console.log('🖱️ Menu item clicked');

                // إخفاء الدروب داون فوراً
                dropdown.classList.remove('show');
                menu.classList.remove('show');
                currentDropdown = null;

                // إلغاء أي timeout معلق
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                    hideTimeout = null;
                }
            });
        });
    });

    console.log('✅ Dropdown behavior enhanced');
}

// النافبار الذكي التفاعلي مع السكرول
function initializeSmartNavbar() {
    console.log('🧠 Initializing Smart Navbar...');

    const header = document.querySelector('.header');
    if (!header) {
        console.log('⚠️ Header not found for smart navbar');
        return;
    }

    // تعمل في جميع الصفحات - ديسكتوب وموبايل
    console.log('🌐 Smart navbar enabled for all pages');

    let lastScrollTop = 0;
    let scrollTimeout;

    // دالة التحكم في النافبار - النافبار يبقى ظاهر دائماً
    function handleScroll() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // إبقاء النافبار ظاهر دائماً في جميع الصفحات
        header.classList.remove('hidden');
        console.log('📍 Navbar always visible (no hiding on scroll)');

        // إضافة/إزالة تأثير السكرول للهامبرغر
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        if (mobileMenuBtn) {
            if (currentScrollTop > 50) {
                mobileMenuBtn.classList.add('scrolled');
                console.log('🍔 Hamburger scrolled effect applied');
            } else {
                mobileMenuBtn.classList.remove('scrolled');
                console.log('🍔 Hamburger normal state');
            }
        }

        lastScrollTop = currentScrollTop;
    }

    // إضافة event listener للسكرول
    window.addEventListener('scroll', handleScroll, { passive: true });

    // إضافة event listener لـ resize
    window.addEventListener('resize', () => {
        // إعادة تعيين النافبار عند تغيير حجم الشاشة
        header.classList.remove('hidden');
        console.log('📱 Navbar reset on resize');
    });

    // إضافة event listener للـ mouse movement - النافبار يبقى ظاهر دائماً
    document.addEventListener('mousemove', () => {
        // إبقاء النافبار ظاهر دائماً
        header.classList.remove('hidden');
        console.log('🖱️ Navbar always visible (mouse movement)');
    });

    // إبقاء النافبار ظاهر عند النقر في أي مكان
    document.addEventListener('click', () => {
        header.classList.remove('hidden');
        console.log('🖱️ Navbar always visible (click detected)');
    });

    console.log('✅ Smart Navbar initialized for all pages');
}


// Initialize scroll effect for logo
function initializeScrollEffect() {
    console.log('🎨 Initializing scroll effect for logo...');

    const header = document.querySelector('.header');
    const logoTagline = document.querySelector('.logo-tagline');
    const logo = document.querySelector('.logo');

    if (!header || !logoTagline) {
        console.warn('⚠️ Header or logo tagline not found');
        return;
    }




    let isScrolled = false;

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 50 && !isScrolled) {
            // Add scrolled class
            header.classList.add('scrolled');
            isScrolled = true;
            console.log('🎨 Logo tagline effect applied (scrolled) - same as yline');
        } else if (scrollTop <= 50 && isScrolled) {
            // Remove scrolled class
            header.classList.remove('scrolled');
            isScrolled = false;
            console.log('🎨 Logo tagline effect removed (not scrolled) - same as yline');
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    // Additional check after a short delay
    setTimeout(() => {
        handleScroll();
    }, 100);


    console.log('✅ Scroll effect initialized successfully');
}

// Auto-include navbar when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    includeNavbar();

    // تطبيق تحسينات الدروب داون بعد تحميل النافبار
    setTimeout(() => {
        enhanceDropdownBehavior();
    }, 1000);

    // إضافة تأثير السكرول على الشعار
    setTimeout(() => {
        initializeScrollEffect();
    }, 1500);

    // إضافة تأثير السكرول مرة أخرى للتأكد
    setTimeout(() => {
        initializeScrollEffect();
    }, 3000);

});