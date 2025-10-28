// Accessibility Pack - CSS and JavaScript functionality for the accessibility panel

// Add accessibility panel styles - Enhanced and Organized
const accessibilityStyles = document.createElement('style');
accessibilityStyles.textContent = `
    /* ===== MAIN PANEL CONTAINER ===== */
    .accessibility-panel-overlay {
        position: fixed;
        bottom: 20px;
        right: -400px;
        width: 380px;
        height: 500px;
        background: linear-gradient(135deg, 
            rgba(15, 15, 15, 0.96) 0%,
            rgba(30, 30, 30, 0.96) 25%,
            rgba(139, 0, 0, 0.85) 50%,
            rgba(40, 40, 40, 0.96) 75%,
            rgba(20, 20, 20, 0.96) 100%);
        border-radius: 24px;
        box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.5),
            0 12px 25px rgba(220, 38, 38, 0.2),
            inset 0 1px 2px rgba(255, 255, 255, 0.08);
        z-index: 10001;
        transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        overflow: hidden;
        border: 1px solid rgba(60, 60, 60, 0.5);
        backdrop-filter: blur(20px) saturate(110%);
        -webkit-backdrop-filter: blur(20px) saturate(110%);
    }

    .accessibility-panel-overlay.active {
        right: 20px;
        animation: slideInFromRight 0.4s ease-out;
    }

    /* ===== PANEL CONTENT ===== */
    .accessibility-panel-content {
        background: transparent;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        position: relative;
        border-radius: 24px;
    }

    /* ===== HEADER SECTION ===== */
    .accessibility-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem;
        // background: linear-gradient(135deg, 
        //     rgba(255, 255, 255, 0.12) 0%,
        //     rgba(255, 255, 255, 0.06) 100%);
        color: white;
        position: sticky;
        top: 0;
        z-index: 100;
        border-radius: 24px 24px 0 0;
        backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    }

    .accessibility-panel-header h3 {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #1a1a1a;
        text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
    }

    .accessibility-panel-close {
        background: rgba(255, 255, 255, 0.15);
        border: none;
        font-size: 1.2rem;
        color: white;
        cursor: pointer;
        padding: 0;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }

    .accessibility-panel-close:hover {
        background: rgba(255, 255, 255, 0.25);
        transform: rotate(90deg) scale(1.1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    /* ===== BODY SECTION ===== */
    .accessibility-panel-body {
        padding: 0;
        background: transparent;
    }

    /* ===== TABS SECTION ===== */
    .accessibility-tabs {
        display: flex;
        background: rgba(255, 255, 255, 0.08);
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        position: sticky;
        top: 90px;
        z-index: 99;
        gap: 0.5rem;
        padding: 0.8rem;
        backdrop-filter: blur(10px);
    }

    .tab-btn {
        flex: 1;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        cursor: pointer;
        font-size: 0.85rem;
        font-weight: 700;
        color: #2a2a2a;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        position: relative;
        overflow: hidden;
        border-radius: 14px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .tab-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }

    .tab-btn:hover::before {
        left: 100%;
    }

    .tab-btn.active {
        background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.3) 0%,
            rgba(240, 240, 240, 0.3) 50%,
            rgba(255, 255, 255, 0.3) 100%);
        color: #000000;
        border-color: rgba(60, 60, 60, 0.5);
        box-shadow: 
            0 4px 12px rgba(0, 0, 0, 0.3),
            0 2px 6px rgba(220, 38, 38, 0.15),
            inset 0 1px 4px rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
    }

    .tab-btn:hover:not(.active) {
        background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.16) 0%,
            rgba(240, 240, 240, 0.16) 50%,
            rgba(255, 255, 255, 0.16) 100%);
        color: #1a1a1a;
        border-color: rgba(60, 60, 60, 0.4);
        transform: translateY(-1px);
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
    }

    /* ===== TAB CONTENT ===== */
    .tab-content {
        display: none;
        padding: 1.2rem;
        animation: fadeIn 0.3s ease-in;
    }
    
    .tab-content.active {
        display: block;
    }
    
    /* ===== TOOLS GRID ===== */
    .accessibility-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.8rem;
    }

    .accessibility-tool {
        background: rgba(255, 255, 255, 0.12);
        border: 1px solid rgba(60, 60, 60, 0.4);
        border-radius: 18px;
        padding: 1.2rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 
            0 4px 15px rgba(0, 0, 0, 0.3),
            inset 0 1px 2px rgba(255, 255, 255, 0.1);
        min-height: 90px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        backdrop-filter: blur(8px);
        color: #1a1a1a;
    }

    .accessibility-tool::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.2) 0%,
            rgba(230, 230, 230, 0.25) 50%,
            rgba(255, 255, 255, 0.2) 100%);
        opacity: 0;
        transition: opacity 0.3s ease;
        border-radius: 16px;
    }

    .accessibility-tool:hover::before {
        opacity: 1;
    }

    .accessibility-tool:hover {
        color: #000000;
        border-color: rgba(40, 40, 40, 0.6);
        transform: translateY(-4px) scale(1.02);
        box-shadow: 
            0 12px 25px rgba(0, 0, 0, 0.4),
            0 6px 12px rgba(220, 38, 38, 0.15),
            inset 0 1px 3px rgba(255, 255, 255, 0.2);
    }
    
    .accessibility-tool.active {
        background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.25) 0%,
            rgba(240, 240, 240, 0.3) 50%,
            rgba(255, 255, 255, 0.25) 100%);
        color: #000000;
        border-color: rgba(40, 40, 40, 0.7);
        box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.35),
            0 4px 10px rgba(220, 38, 38, 0.15),
            inset 0 1px 4px rgba(255, 255, 255, 0.25);
        transform: translateY(-2px);
    }

    .accessibility-tool.active::after {
        content: '✓';
        position: absolute;
        top: 8px;
        right: 8px;
        width: 24px;
        height: 24px;
        background: linear-gradient(135deg, 
            rgba(220, 38, 38, 0.95) 0%, 
            rgba(185, 28, 28, 0.95) 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: bold;
        color: white;
        box-shadow: 0 2px 8px rgba(220, 38, 38, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.3);
        z-index: 10;
    }
    
    .accessibility-tool:active {
        transform: translateY(0) scale(0.98);
        box-shadow: 0 4px 8px rgba(220, 38, 38, 0.2);
    }

    .tool-icon {
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
        position: relative;
        z-index: 1;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    }

    .tool-title {
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1.4;
        color: #1a1a1a;
        position: relative;
        z-index: 1;
        text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
    }

    .accessibility-tool:hover .tool-title {
        color: #000000;
        text-shadow: 0 1px 3px rgba(255, 255, 255, 0.5);
    }
    
    /* ===== PROFILES & LANGUAGES LISTS ===== */
    .profiles-list, .language-list {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }

    .profile-item, .language-item {
        background: rgba(255, 255, 255, 0.12);
        border: 1px solid rgba(60, 60, 60, 0.4);
        border-radius: 14px;
        padding: 1rem 1.2rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 
            0 3px 10px rgba(0, 0, 0, 0.3),
            inset 0 1px 2px rgba(255, 255, 255, 0.1);
        position: relative;
        overflow: hidden;
        backdrop-filter: blur(8px);
        color: #1a1a1a;
    }

    .profile-item::before, .language-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
        transition: left 0.5s;
    }

    .profile-item:hover::before, .language-item:hover::before {
        left: 100%;
    }

    .profile-item:hover, .language-item:hover {
        background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.22) 0%,
            rgba(240, 240, 240, 0.2) 50%,
            rgba(230, 230, 230, 0.22) 100%);
        color: #000000;
        border-color: rgba(40, 40, 40, 0.6);
        transform: translateX(8px) scale(1.02);
        box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.35),
            0 4px 10px rgba(220, 38, 38, 0.12),
            inset 0 1px 3px rgba(255, 255, 255, 0.2);
    }

    .language-item.active {
        background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.25) 0%,
            rgba(240, 240, 240, 0.25) 50%,
            rgba(230, 230, 230, 0.25) 100%);
        color: #000000;
        border-color: rgba(40, 40, 40, 0.7);
        box-shadow: 
            0 6px 15px rgba(0, 0, 0, 0.4),
            0 3px 8px rgba(220, 38, 38, 0.15),
            inset 0 1px 3px rgba(255, 255, 255, 0.22);
    }

    .profile-icon, .language-flag {
        font-size: 1.5rem;
        position: relative;
        z-index: 1;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    }

    .profile-title, .language-title {
        font-size: 0.85rem;
        font-weight: 700;
        color: #1a1a1a;
        position: relative;
        z-index: 1;
        text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
    }

    .profile-item:hover .profile-title,
    .language-item:hover .language-title {
        color: #000000;
        text-shadow: 0 1px 3px rgba(255, 255, 255, 0.5);
    }

    /* ===== LETTER SPACING MODE ===== */
    .letter-spacing-mode {
        font-family: Arial, sans-serif !important;
    }

    .letter-spacing-mode h1,
    .letter-spacing-mode h2,
    .letter-spacing-mode h3,
    .letter-spacing-mode h4,
    .letter-spacing-mode h5,
    .letter-spacing-mode h6 {
        letter-spacing: 5px !important;
        padding-right: 0.05em !important;
        font-family: Arial, sans-serif !important;
    }

    .letter-spacing-mode p,
    .letter-spacing-mode span,
    .letter-spacing-mode div {
        letter-spacing: 2px !important;
        font-family: Arial, sans-serif !important;
    }

    .letter-spacing-mode a {
        letter-spacing: 1.5px !important;
        font-family: Arial, sans-serif !important;
    }

    .letter-spacing-mode button,
    .letter-spacing-mode input,
    .letter-spacing-mode select,
    .letter-spacing-mode textarea {
        letter-spacing: 1px !important;
        font-family: Arial, sans-serif !important;
    }

    .letter-spacing-mode .accessibility-tool {
        letter-spacing: 1px !important;
        font-family: Arial, sans-serif !important;
    }

    .letter-spacing-mode .tool-label span {
        letter-spacing: 1.5px !important;
        font-family: Arial, sans-serif !important;
    }

    .letter-spacing-mode .tab-btn {
        letter-spacing: 1px !important;
        font-family: Arial, sans-serif !important;
    }

    .letter-spacing-mode .profile-item,
    .letter-spacing-mode .language-item {
        letter-spacing: 1px !important;
        font-family: Arial, sans-serif !important;
    }

    .letter-spacing-mode .profile-title,
    .letter-spacing-mode .language-title {
        letter-spacing: 2px !important;
        font-family: Arial, sans-serif !important;
    }

    /* ===== HIGHLIGHT LINKS MODE ===== */
    .highlight-links-mode a {
        color: #1E90FF !important;
        text-decoration: underline !important;
        font-weight: 600 !important;
    }

    .highlight-links-mode a:hover {
        color: #4169E1 !important;
        text-decoration: underline !important;
    }

    .highlight-links-mode a:visited {
        color: #1E90FF !important;
        text-decoration: underline !important;
    }

    .highlight-links-mode a:active {
        color: #1E90FF !important;
        text-decoration: underline !important;
    }

    /* ===== ANIMATIONS ===== */
    @keyframes slideInFromRight {
        from { 
            transform: translateX(100%);
            opacity: 0;
        }
        to { 
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes fadeIn {
        from { 
            opacity: 0;
            transform: translateY(10px);
        }
        to { 
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
            box-shadow: 0 0 4px rgba(102, 126, 234, 0.5);
        }
        50% {
            transform: scale(1.05);
            box-shadow: 0 0 12px rgba(102, 126, 234, 0.8);
        }
        100% {
            transform: scale(1);
            box-shadow: 0 0 4px rgba(102, 126, 234, 0.5);
        }
    }

    /* ===== SCROLLBAR STYLING ===== */
    .accessibility-panel-content::-webkit-scrollbar {
        width: 6px;
    }

    .accessibility-panel-content::-webkit-scrollbar-track {
        background: rgba(102, 126, 234, 0.1);
        border-radius: 3px;
    }

    .accessibility-panel-content::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 3px;
    }

    .accessibility-panel-content::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #5a6fd8, #6a4190);
    }

    /* ===== RESPONSIVE DESIGN ===== */
    @media (max-width: 768px) {
        .accessibility-panel-overlay {
            bottom: 10px;
            right: -100%;
            width: calc(100vw - 20px);
            height: 350px;
            border-radius: 16px;
        }
        
        .accessibility-panel-overlay.active {
            right: 10px;
        }
        
        .accessibility-panel-overlay.active::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.3);
            z-index: -1;
            backdrop-filter: blur(5px);
        }
        
        .accessibility-panel-content {
            width: 100%;
            max-height: 100%;
        }

        .accessibility-panel-header {
            padding: 1rem 1.2rem;
        }

        .accessibility-panel-header h3 {
            font-size: 1rem;
        }

        .tab-content {
            padding: 1rem;
        }

        .accessibility-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.6rem;
        }

        .accessibility-tool {
            padding: 0.8rem;
            min-height: 75px;
        }

        .tool-icon {
            font-size: 1.2rem;
        }

        .tool-title {
            font-size: 0.65rem;
        }

        .tab-btn {
            padding: 0.7rem 0.8rem;
            font-size: 0.75rem;
            gap: 0.3rem;
        }
        
        .accessibility-tabs {
            gap: 0.3rem;
            padding: 0.3rem;
        }

        .profile-item, .language-item {
            padding: 0.6rem 0.8rem;
        }

        .profile-title, .language-title {
            font-size: 0.75rem;
        }
    }

    @media (max-width: 480px) {
        .accessibility-grid {
            grid-template-columns: 1fr;
            gap: 0.5rem;
        }
        
        .accessibility-tool {
            min-height: 65px;
        }
    }
`;

// Accessibility functionality
function initializeAccessibilityPanel(panel) {
    document.head.appendChild(accessibilityStyles);

    // Get elements
    const closeBtn = panel.querySelector('.accessibility-panel-close');
    const overlay = panel.querySelector('.accessibility-panel-overlay');
    const tabBtns = panel.querySelectorAll('.tab-btn');
    const tabContents = panel.querySelectorAll('.tab-content');
    const accessibilityTools = panel.querySelectorAll('.accessibility-tool');
    const profileItems = panel.querySelectorAll('.profile-item');

    function closeAccessibilityPanel() {
        panel.classList.remove('active');
        
        // Keep large cursor enabled when panel closes (user choice persists)
        // The cursor will remain active across all pages due to localStorage
        console.log('🖱️ Large cursor remains active across all pages');
        
        setTimeout(() => {
            panel.remove();
            accessibilityStyles.remove();
        }, 400);
    }

    function switchTab(targetTab) {
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        document.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');
        document.getElementById(`${targetTab}-tab`).classList.add('active');
    }

    function activateTool(toolType, toolElement) {
        toolElement.classList.toggle('active');
        
        switch(toolType) {
           
            case 'contrast':
                // Toggle letter spacing mode
                const isLetterSpacingActive = document.body.classList.contains('letter-spacing-mode');
                
                if (isLetterSpacingActive) {
                    // Remove letter spacing mode
                    document.body.classList.remove('letter-spacing-mode');
                    toolElement.classList.remove('active');
                    console.log('📏 Letter spacing mode disabled');
                } else {
                    // Apply letter spacing mode
                    document.body.classList.add('letter-spacing-mode');
                    toolElement.classList.add('active');
                    console.log('📏 Letter spacing mode enabled');
                }
                break;
            case 'cursor':
                // Toggle large image cursor
                if (window.largeImageCursor) {
                    window.largeImageCursor.toggle();
                    toolElement.classList.toggle('active', window.largeImageCursor.isEnabled);
                } else {
                    initializeLargeCursor();
                    window.largeImageCursor.enable();
                    toolElement.classList.toggle('active', true);
                }
                break;
            case 'simple-font':
                document.body.style.fontFamily = document.body.style.fontFamily ? '' : 'Arial, sans-serif';
                break;
            case 'saturation':
                document.body.style.filter = document.body.style.filter.includes('saturate') ? '' : 'saturate(150%)';
                break;
            case 'letter-spacing':
                document.body.style.letterSpacing = document.body.style.letterSpacing ? '' : '2px';
                break;
            case 'word-spacing':
                document.body.style.wordSpacing = document.body.style.wordSpacing ? '' : '5px';
                break;
            case 'line-spacing':
                document.body.style.lineHeight = document.body.style.lineHeight ? '' : '2';
                break;
            case 'bigger-text':
                document.body.style.fontSize = document.body.style.fontSize ? '' : '1.2em';
                break;
            case 'highlight-links':
                // Toggle highlight links mode
                const isHighlightActive = document.body.classList.contains('highlight-links-mode');
                
                if (isHighlightActive) {
                    // Remove highlight mode
                    document.body.classList.remove('highlight-links-mode');
                    toolElement.classList.remove('active');
                    console.log('🔗 Highlight links mode disabled');
                } else {
                    // Apply highlight mode
                    document.body.classList.add('highlight-links-mode');
                    toolElement.classList.add('active');
                    console.log('🔗 Highlight links mode enabled');
                }
                break;
            case 'pause-animation':
                const allElements = document.querySelectorAll('*');
                allElements.forEach(el => {
                    el.style.animationPlayState = el.style.animationPlayState === 'paused' ? 'running' : 'paused';
                });
                break;
            case 'text-align':
                document.body.style.textAlign = document.body.style.textAlign === 'center' ? '' : 'center';
                break;
            
            case 'hide-images':
                const images = document.querySelectorAll('img');
                images.forEach(img => {
                    img.style.display = img.style.display === 'none' ? '' : 'none';
                });
                break;
        }
    }

    function activateProfile(profileType) {
        // Reset all styles first
        document.body.style.cssText = '';
        
        switch(profileType) {
            case 'visually-impaired':
                document.body.style.filter = 'contrast(150%) brightness(120%)';
                document.body.style.fontSize = '1.3em';
                alert('👁️ Visually Impaired profile activated!');
                break;
            case 'dyslexia':
                document.body.style.fontFamily = 'Arial, sans-serif';
                document.body.style.letterSpacing = '1px';
                document.body.style.lineHeight = '1.8';
                alert('🧠 Dyslexia-friendly profile activated!');
                break;
            case 'adhd':
                const allElements = document.querySelectorAll('*');
                allElements.forEach(el => {
                    el.style.animationPlayState = 'paused';
                });
                alert('🎯 ADHD-friendly profile activated!');
                break;
            case 'seizure-epilepsy':
                document.body.style.filter = 'saturate(50%)';
                const allElementsSeizure = document.querySelectorAll('*');
                allElementsSeizure.forEach(el => {
                    el.style.animationPlayState = 'paused';
                });
                alert('🧠 Seizure-safe profile activated!');
                break;
            case 'color-blind':
                document.body.style.filter = 'grayscale(100%) contrast(120%)';
                alert('👁️ Color Blind friendly profile activated!');
                break;
            case 'cognitive-education':
                document.body.style.fontSize = '1.2em';
                document.body.style.lineHeight = '2';
                alert('🧩 Cognitive Education profile activated!');
                break;
            case 'impaired-mobility':
                alert('♿ Impaired Mobility profile activated!');
                break;
        }
    }


    // Event listeners
    closeBtn.addEventListener('click', closeAccessibilityPanel);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeAccessibilityPanel();
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAccessibilityPanel();
    });

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });

    accessibilityTools.forEach(tool => {
        tool.addEventListener('click', () => {
            const toolType = tool.getAttribute('data-tool');
            activateTool(toolType, tool);
        });
    });

    profileItems.forEach(profile => {
        profile.addEventListener('click', () => {
            const profileType = profile.getAttribute('data-profile');
            activateProfile(profileType);
        });
    });

}

// Large Image Cursor Class
class LargeImageCursor {
    constructor() {
        this.isEnabled = false;
        this.customCursor = null;
        this.customCursorImage = null;
        this.mouseMoveHandler = null;
        this.init();
    }

    init() {
        this.createCustomCursor();
        this.addStyles();
        this.setupEventListeners();
        this.restoreState();
    }

    restoreState() {
        const wasEnabled = localStorage.getItem('largeCursorEnabled') === 'true';
        if (wasEnabled) {
            this.enable();
        }
    }

    createCustomCursor() {
        this.customCursor = document.createElement('div');
        this.customCursor.id = 'custom-cursor';
        this.customCursor.style.display = 'none';
        this.customCursor.style.position = 'fixed';
        this.customCursor.style.zIndex = '9999';
        this.customCursor.style.top = '-100px';
        this.customCursor.style.left = '-100px';
        this.customCursor.style.transition = 'transform 0.05s ease-out';
        this.customCursor.style.pointerEvents = 'none';
        
        this.customCursorImage = document.createElement('img');
        this.customCursorImage.src = '/img/cursor-black.png';
        this.customCursorImage.alt = 'Custom Cursor';
        this.customCursorImage.style.width = '64px';
        this.customCursorImage.style.height = 'auto';
        this.customCursorImage.style.display = 'block';
        this.customCursorImage.style.transform = 'translate(-0%, -0%)';
        this.customCursorImage.style.transition = 'transform 0.1s ease-out';
        
        this.customCursor.appendChild(this.customCursorImage);
        document.body.appendChild(this.customCursor);
    }

    addStyles() {
        const style = document.createElement('style');
        style.id = 'large-image-cursor-styles';
        style.textContent = `
            /* Large Image Cursor - Always stays large on all elements */
            .large-cursor-enabled {
                cursor: none !important;
            }

            .large-cursor-enabled * {
                cursor: none !important;
            }

            #custom-cursor {
                position: fixed;
                z-index: 9999;
                top: -100px;
                left: -100px;
                transition: transform 0.05s ease-out;
                pointer-events: none;
            }

            #custom-cursor img {
                width: 64px;
                height: auto;
                display: block;
                transform: translate(-0%, -0%);
                transition: transform 0.1s ease-out;
            }

            /* Hover effects for interactive elements */
            .large-cursor-enabled a:hover ~ #custom-cursor img,
            .large-cursor-enabled button:hover ~ #custom-cursor img,
            .large-cursor-enabled .btn:hover ~ #custom-cursor img,
            .large-cursor-enabled .card:hover ~ #custom-cursor img,
            .large-cursor-enabled .navbar:hover ~ #custom-cursor img,
            .large-cursor-enabled nav:hover ~ #custom-cursor img,
            .large-cursor-enabled .nav:hover ~ #custom-cursor img,
            .large-cursor-enabled [class*="btn"]:hover ~ #custom-cursor img,
            .large-cursor-enabled [class*="card"]:hover ~ #custom-cursor img,
            .large-cursor-enabled [class*="nav"]:hover ~ #custom-cursor img {
                transform: translate(-0%, -0%) scale(1.2);
            }
        `;
        document.head.appendChild(style);
    }

    setupEventListeners() {
        this.mouseMoveHandler = (e) => {
            if (!this.isEnabled || !this.customCursor) return;
            
            this.customCursor.style.left = `${e.clientX}px`;
            this.customCursor.style.top = `${e.clientY}px`;
        };

        document.addEventListener('click', (e) => {
            if (this.isEnabled && this.customCursorImage) {
                this.customCursorImage.style.transform = 'translate(-0%, -0%) scale(0.8)';
                setTimeout(() => {
                    this.customCursorImage.style.transform = 'translate(-0%, -0%) scale(1)';
                }, 150);
            }
        });
    }

    enable() {
        if (this.isEnabled) return;
        
        this.isEnabled = true;
        document.body.classList.add('large-cursor-enabled');
        this.customCursor.style.display = 'block';
        document.addEventListener('mousemove', this.mouseMoveHandler);
        localStorage.setItem('largeCursorEnabled', 'true');
    }

    disable() {
        if (!this.isEnabled) return;
        
        this.isEnabled = false;
        document.body.classList.remove('large-cursor-enabled');
        this.customCursor.style.display = 'none';
        document.removeEventListener('mousemove', this.mouseMoveHandler);
        localStorage.removeItem('largeCursorEnabled');
    }

    toggle() {
        if (this.isEnabled) {
            this.disable();
        } else {
            this.enable();
        }
    }
}

// Initialize large cursor function
function initializeLargeCursor() {
    if (!window.largeImageCursor) {
        window.largeImageCursor = new LargeImageCursor();
    }
}

// Auto-restore cursor state on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check if cursor was enabled in previous session
    const wasEnabled = localStorage.getItem('largeCursorEnabled') === 'true';
    
    if (wasEnabled) {
        // Initialize cursor and restore state
        initializeLargeCursor();
        console.log('🖱️ Large cursor state restored on page load');
        
        // Update cursor tool button state if accessibility panel exists
        setTimeout(() => {
            const cursorTool = document.querySelector('[data-tool="cursor"]');
            if (cursorTool) {
                cursorTool.classList.add('active');
                console.log('✅ Cursor tool button state restored');
            }
        }, 500);
    }
});

// Export the initialization function
window.initializeAccessibilityPanel = initializeAccessibilityPanel;
window.initializeAccessibilityPanel = initializeAccessibilityPanel;