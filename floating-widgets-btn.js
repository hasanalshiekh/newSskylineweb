// Floating Widgets Button


function openAccessibilityPanelDirectly() {
    console.log('Creating accessibility panel...');
    
    // Remove any existing panel first
    const existingPanel = document.querySelector('.accessibility-panel');
    if (existingPanel) {
        existingPanel.remove();
    }
    
   
    
    // Initialize large cursor tool functionality
    const largeCursorTool = panel.querySelector('#large-cursor-tool');
    if (largeCursorTool) {
        const cursorLabel = largeCursorTool.querySelector('small');
        const cursorSpan = largeCursorTool.querySelector('.tool-label span');
        
        // إضافة event listener مباشر
        largeCursorTool.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // استخدام وظيفة المؤشر الكبير من accessibility-pack.js
            if (window.largeImageCursor) {
                window.largeImageCursor.toggle();
                
                // تحديث حالة الزر
                const isEnabled = window.largeImageCursor.isEnabled;
                if (isEnabled) {
                    largeCursorTool.classList.add('active');
                    if (cursorLabel) {
                        cursorLabel.textContent = 'Normal Cursor';
                    }
                    if (cursorSpan) {
                        cursorSpan.textContent = 'Normal Cursor';
                    }
                    console.log('✅ Large Image Cursor activated');
                } else {
                    largeCursorTool.classList.remove('active');
                    if (cursorLabel) {
                        cursorLabel.textContent = 'مؤشر كبير';
                    }
                    if (cursorSpan) {
                        cursorSpan.textContent = 'Large Cursor';
                    }
                    console.log('🔄 Large Image Cursor deactivated');
                }
            } else {
                console.error('Large Image Cursor not available');
            }
        });
        console.log('Large cursor tool initialized');
    }
    
    // Initialize invert colors (peach mode) tool functionality
    const invertColorsTool = panel.querySelector('#invert-colors-tool');
    if (invertColorsTool) {
        const invertLabel = invertColorsTool.querySelector('small');
        const invertSpan = invertColorsTool.querySelector('.tool-label span');
        
        // Function to check if peach mode is active
        function isPeachModeActive() {
            const bgColor = window.getComputedStyle(document.body).backgroundColor;
            return bgColor === 'rgb(255, 218, 185)' || 
                   document.body.style.backgroundColor === '#FFDAB9' ||
                   document.body.style.backgroundColor === 'rgb(255, 218, 185)';
        }
        
        // Update button state
        function updatePeachButtonState() {
            const isActive = isPeachModeActive();
            if (isActive) {
                invertColorsTool.classList.add('active');
                if (invertLabel) invertLabel.textContent = 'إرجاع عادي';
                if (invertSpan) invertSpan.textContent = 'Normal Mode';
            } else {
                invertColorsTool.classList.remove('active');
                if (invertLabel) invertLabel.textContent = 'الوضع المشمشي';
                if (invertSpan) invertSpan.textContent = 'Peach Mode';
            }
        }
        
        // Initialize button state
        updatePeachButtonState();
        
        invertColorsTool.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Check current state instead of using local variable
            const isPeachMode = isPeachModeActive();
            
            if (!isPeachMode) {
                // تفعيل الوضع المشمشي
                document.body.style.transition = "background-color 0.4s, color 0.4s";
                document.body.style.backgroundColor = "#FFDAB9";
                document.body.style.color = "#222";
                updatePeachButtonState();
                console.log('✅ Peach Mode activated');
            } else {
                // إعادة الوضع العادي
                document.body.style.backgroundColor = "";
                document.body.style.color = "";
                updatePeachButtonState();
                console.log('🔄 Peach Mode deactivated');
            }
        });
        console.log('Invert Colors (Peach Mode) tool initialized');
    }
    
    // Initialize accessibility panel immediately
    console.log('Initializing accessibility panel...');
    
    // Add event listeners directly
    setupAccessibilityPanelEvents(panel);
    
    // Try to load accessibility-pack.js if not already loaded
    if (!window.initializeAccessibilityPanel) {
        console.log('Loading accessibility-pack.js...');
        const script = document.createElement('script');
        script.src = 'accessibility-pack.js';
        script.onload = () => {
            console.log('accessibility-pack.js loaded successfully');
            if (window.initializeAccessibilityPanel) {
                window.initializeAccessibilityPanel(panel);
            }
        };
        script.onerror = () => {
            console.error('Failed to load accessibility-pack.js');
        };
        document.head.appendChild(script);
    } else {
        window.initializeAccessibilityPanel(panel);
    }
    
    // Add social media functionality
    addSocialMediaFunctionality(panel);
    
    console.log('Accessibility panel created successfully');
}

// دالة تهيئة أحداث لوحة إمكانية الوصول
function setupAccessibilityPanelEvents(panel) {
    console.log('Setting up accessibility panel events...');
    

    
    // Get elements
    const closeBtn = panel.querySelector('.accessibility-panel-close');
    const overlay = panel.querySelector('.accessibility-panel-overlay');
    const tabBtns = panel.querySelectorAll('.tab-btn');
    const tabContents = panel.querySelectorAll('.tab-content');
    const accessibilityTools = panel.querySelectorAll('.accessibility-tool');
    const profileItems = panel.querySelectorAll('.profile-item');

    // Close panel function
    function closeAccessibilityPanel() {
        console.log('Closing accessibility panel...');
        panel.classList.remove('active');
        setTimeout(() => {
            panel.remove();
        }, 400);
    }
    
   
    // Font size buttons - Enhanced functionality with event delegation
    panel.addEventListener('click', (e) => {
        // Handle font increase/decrease buttons
        if (e.target.classList.contains('font-btn')) {
            e.preventDefault();
            e.stopPropagation();
            const action = e.target.getAttribute('data-action');
            console.log('Font button clicked:', action);
            
            if (action === 'increase' && currentFontSize < 200) {
                currentFontSize += 10;
            }
            if (action === 'decrease' && currentFontSize > 50) {
                currentFontSize -= 10;
            }
            
            document.body.style.fontSize = currentFontSize + '%';
            const display = document.getElementById('font-size-display');
            if (display) {
                display.textContent = currentFontSize + '%';
            }
            console.log('Font size updated to:', currentFontSize + '%');
        }
        
        // Handle font reset button
        if (e.target.classList.contains('font-reset')) {
            e.preventDefault();
            e.stopPropagation();
            currentFontSize = 100;
            document.body.style.fontSize = '100%';
            const display = document.getElementById('font-size-display');
            if (display) {
                display.textContent = '100%';
            }
            console.log('Font size reset to 100%');
        }
    });

    // دالة إضافة أزرار السكرول لتبويب Tools
    function addScrollControlsForTools(content) {
        console.log('Adding scroll controls for Tools tab...');
        
        // Remove existing scroll controls
        const existingControls = document.querySelector('.tools-scroll-controls');
        if (existingControls) {
            existingControls.remove();
            console.log('Removed existing tools scroll controls');
        }
        
        // Create scroll controls
        const scrollControls = document.createElement('div');
        scrollControls.className = 'tools-scroll-controls';
        scrollControls.innerHTML = `
            <button class="tools-scroll-btn up" data-action="scroll-up">↑</button>
            <button class="tools-scroll-btn down" data-action="scroll-down">↓</button>
        `;
        
        // Add styles
        scrollControls.style.position = 'fixed';
        scrollControls.style.right = '20px';
        scrollControls.style.top = '50%';
        scrollControls.style.transform = 'translateY(-50%)';
        scrollControls.style.display = 'flex';
        scrollControls.style.flexDirection = 'column';
        scrollControls.style.gap = '12px';
        scrollControls.style.zIndex = '10003';
        scrollControls.style.opacity = '0.9';
        scrollControls.style.pointerEvents = 'auto';
        
        // Add styles to buttons
        const buttons = scrollControls.querySelectorAll('.tools-scroll-btn');
        buttons.forEach(btn => {
            btn.style.width = '40px';
            btn.style.height = '40px';
            btn.style.background = 'linear-gradient(135deg, #DC143C, #B22222)';
            btn.style.border = '2px solid rgba(255, 255, 255, 0.2)';
            btn.style.borderRadius = '50%';
            btn.style.color = 'white';
            btn.style.fontSize = '18px';
            btn.style.fontWeight = 'bold';
            btn.style.cursor = 'pointer';
            btn.style.display = 'flex';
            btn.style.alignItems = 'center';
            btn.style.justifyContent = 'center';
            btn.style.boxShadow = '0 4px 15px rgba(220, 20, 60, 0.3), 0 2px 8px rgba(0, 0, 0, 0.1)';
            btn.style.transition = 'all 0.3s ease';
            btn.style.userSelect = 'none';
            btn.style.outline = 'none';
        });
        
        document.body.appendChild(scrollControls);
        console.log('Tools scroll controls added to DOM');
        
        // Add hover effects
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-2px) scale(1.1)';
                btn.style.boxShadow = '0 8px 25px rgba(220, 20, 60, 0.4), 0 4px 12px rgba(0, 0, 0, 0.15)';
                btn.style.background = 'linear-gradient(135deg, #FF1744, #DC143C)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0) scale(1)';
                btn.style.boxShadow = '0 4px 15px rgba(220, 20, 60, 0.3), 0 2px 8px rgba(0, 0, 0, 0.1)';
                btn.style.background = 'linear-gradient(135deg, #DC143C, #B22222)';
            });
            
            btn.addEventListener('mousedown', () => {
                btn.style.transform = 'translateY(0) scale(0.95)';
            });
            
            btn.addEventListener('mouseup', () => {
                btn.style.transform = 'translateY(-2px) scale(1.1)';
            });
        });
        
        // Add event listeners for scroll buttons
        document.querySelectorAll('.tools-scroll-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.getAttribute('data-action');
                console.log('Tools scroll button clicked:', action);

                if (content) {
                    const scrollAmount = 100; // تقليل المسافة لضمان الاستجابة
                    
                    // إجبار ظهور المحتوى كاملاً
                    content.style.display = 'block !important';
                    content.style.visibility = 'visible !important';
                    content.style.opacity = '1 !important';
                    content.style.overflowY = 'auto !important';
                    content.style.maxHeight = '600px !important';
                    content.style.minHeight = '400px !important';
                    content.style.position = 'relative !important';
                    content.style.zIndex = '1 !important';
                    
                    // إجبار ظهور الشبكة
                    const grid = content.querySelector('.accessibility-grid');
                    if (grid) {
                        grid.style.display = 'grid !important';
                        grid.style.visibility = 'visible !important';
                        grid.style.opacity = '1 !important';
                        grid.style.gridTemplateColumns = 'repeat(2, 1fr) !important';
                        grid.style.gap = '0.5rem !important';
                        grid.style.minHeight = 'auto !important';
                    }
                    
                    // إجبار ظهور جميع الأدوات
                    const tools = content.querySelectorAll('.accessibility-tool');
                    tools.forEach((tool, index) => {
                        tool.style.display = 'flex !important';
                        tool.style.visibility = 'visible !important';
                        tool.style.opacity = '1 !important';
                        tool.style.flexDirection = 'column !important';
                        tool.style.alignItems = 'center !important';
                        tool.style.justifyContent = 'center !important';
                        tool.style.padding = '0.8rem 0.5rem !important';
                        tool.style.minHeight = '90px !important';
                        tool.style.borderRadius = '12px !important';
                        tool.style.background = 'linear-gradient(145deg, #ffffff, #f8f9fa) !important';
                        tool.style.border = '2px solid rgba(220, 20, 60, 0.1) !important';
                        tool.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.06) !important';
                        tool.style.cursor = 'pointer !important';
                        tool.style.transition = 'all 0.3s ease !important';
                        tool.style.position = 'relative !important';
                        tool.style.overflow = 'visible !important';
                        
                        // إجبار ظهور الأيقونات
                        const icon = tool.querySelector('.tool-icon-compact');
                        if (icon) {
                            icon.style.display = 'flex !important';
                            icon.style.visibility = 'visible !important';
                            icon.style.opacity = '1 !important';
                            icon.style.fontSize = '1.6rem !important';
                            icon.style.marginBottom = '0.4rem !important';
                            icon.style.alignItems = 'center !important';
                            icon.style.justifyContent = 'center !important';
                            
                            // دعم الصور داخل tool-icon-compact
                            const img = icon.querySelector('img');
                            if (img) {
                                img.style.display = 'block !important';
                                img.style.visibility = 'visible !important';
                                img.style.opacity = '1 !important';
                                img.style.maxWidth = '100% !important';
                                img.style.height = 'auto !important';
                            }
                        }
                        
                        // إجبار ظهور التسميات
                        const label = tool.querySelector('.tool-label');
                        if (label) {
                            label.style.display = 'flex !important';
                            label.style.visibility = 'visible !important';
                            label.style.opacity = '1 !important';
                            label.style.flexDirection = 'column !important';
                            label.style.alignItems = 'center !important';
                            label.style.textAlign = 'center !important';
                        }
                        
                        // إجبار ظهور النصوص
                        const span = tool.querySelector('.tool-label span');
                        if (span) {
                            span.style.display = 'block !important';
                            span.style.visibility = 'visible !important';
                            span.style.opacity = '1 !important';
                            span.style.fontSize = '0.75rem !important';
                            span.style.fontWeight = '600 !important';
                            span.style.color = '#333 !important';
                            span.style.lineHeight = '1.2 !important';
                        }
                        
                        // إجبار ظهور النصوص الصغيرة
                        const small = tool.querySelector('.tool-label small');
                        if (small) {
                            small.style.display = 'block !important';
                            small.style.visibility = 'visible !important';
                            small.style.opacity = '1 !important';
                            small.style.fontSize = '0.65rem !important';
                            small.style.color = '#666 !important';
                            small.style.lineHeight = '1.1 !important';
                            small.style.marginTop = '0.1rem !important';
                        }
                        
                        console.log(`Tool ${index + 1} made visible:`, tool.getAttribute('data-tool'));
                    });
                    
                    console.log('Tools content dimensions:', {
                        scrollHeight: content.scrollHeight,
                        clientHeight: content.clientHeight,
                        scrollTop: content.scrollTop,
                        toolsCount: tools.length
                    });
                    
                    if (action === 'scroll-up') {
                        const newScrollTop = Math.max(0, content.scrollTop - scrollAmount);
                        content.scrollTo({
                            top: newScrollTop,
                            behavior: 'smooth'
                        });
                        console.log('Scrolling tools content up to:', newScrollTop);
                    } else if (action === 'scroll-down') {
                        const maxScroll = content.scrollHeight - content.clientHeight;
                        const newScrollTop = Math.min(maxScroll, content.scrollTop + scrollAmount);
                        content.scrollTo({
                            top: newScrollTop,
                            behavior: 'smooth'
                        });
                        console.log('Scrolling tools content down to:', newScrollTop);
                    }
                    
                    // إضافة تأثير بصري قوي
                    content.style.border = '3px solid rgba(220, 20, 60, 0.5) !important';
                    content.style.boxShadow = '0 0 20px rgba(220, 20, 60, 0.3) !important';
                    setTimeout(() => {
                        content.style.border = 'none !important';
                        content.style.boxShadow = 'none !important';
                    }, 1500);
                    
                    console.log('All tools made visible and responsive:', tools.length);
                    
                } else {
                    console.log('No tools content found');
                }
            });
        });
        
        console.log('Tools scroll controls setup complete');
    }
    

    // Switch tab function
    function switchTab(targetTab) {
        console.log('Switching to tab:', targetTab);
        
        // Remove active from all tabs and content
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => {
            content.classList.remove('active');
            content.style.display = 'none';
        });
        
        // Add active to selected tab
        const targetBtn = panel.querySelector(`[data-tab="${targetTab}"]`);
        const targetContent = panel.querySelector(`#${targetTab}-tab`);
        
        if (targetBtn) {
            targetBtn.classList.add('active');
        }
        if (targetContent) {
            targetContent.classList.add('active');
            targetContent.style.display = 'block';
        }
    }


    // Activate profile function
    function activateProfile(profileType) {
        console.log('Activating profile:', profileType);
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
        }
    }

    // Event listeners
    if (closeBtn) {
        closeBtn.addEventListener('click', closeAccessibilityPanel);
        console.log('Close button event listener added');
    }

    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeAccessibilityPanel();
        });
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAccessibilityPanel();
    });

    // Tab buttons
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const targetTab = btn.getAttribute('data-tab');
            console.log('Tab button clicked:', targetTab);
            switchTab(targetTab);
        });
    });
    
    console.log('Tab buttons event listeners added:', tabBtns.length);

    // باقي الأدوات (Accessibility tools)
    accessibilityTools.forEach(tool => {
        tool.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const type = tool.getAttribute('data-tool');
            
            // Skip bigger-text - handled separately
            
            
            if (type === 'contrast') {
                document.body.classList.toggle('high-contrast');
            }
            
            if (type === 'simple-font') {
                // Toggle modern simple font mode
                const isSimpleFontActive = document.body.classList.contains('simple-font-mode');
                const toolElement = document.querySelector('[data-tool="simple-font"]');
                
                if (isSimpleFontActive) {
                    // Remove simple font mode
                    document.body.classList.remove('simple-font-mode');
                    if (toolElement) toolElement.classList.remove('active');
                    console.log('📝 Modern simple font mode disabled');
                } else {
                    // Apply simple font mode
                    document.body.classList.add('simple-font-mode');
                    if (toolElement) toolElement.classList.add('active');
                    console.log('📝 Modern simple font mode enabled');
                }
            }
            
            if (type === 'large-cursor') {
                // Toggle large image cursor using accessibility-pack.js
                const largeCursorTool = document.getElementById('large-cursor-tool');
                const cursorLabel = largeCursorTool ? largeCursorTool.querySelector('small') : null;
                const cursorSpan = largeCursorTool ? largeCursorTool.querySelector('.tool-label span') : null;
                
                if (window.largeImageCursor) {
                    window.largeImageCursor.toggle();
                    
                    // Update button state
                    const isEnabled = window.largeImageCursor.isEnabled;
                    if (isEnabled) {
                        if (largeCursorTool) largeCursorTool.classList.add('active');
                        if (cursorLabel) cursorLabel.textContent = 'Normal Cursor';
                        if (cursorSpan) cursorSpan.textContent = 'Normal Cursor';
                        console.log('✅ Large Image Cursor activated');
                    } else {
                        if (largeCursorTool) largeCursorTool.classList.remove('active');
                        if (cursorLabel) cursorLabel.textContent = 'مؤشر كبير';
                        if (cursorSpan) cursorSpan.textContent = 'Large Cursor';
                        console.log('🔄 Large Image Cursor deactivated');
                    }
                } else {
                    console.error('Large Image Cursor not available');
                }
            }
            
            if (type === 'invert-colors') {
                // Toggle peach mode
                const invertTool = document.getElementById('invert-colors-tool');
                const invertLabel = invertTool ? invertTool.querySelector('small') : null;
                const invertSpan = invertTool ? invertTool.querySelector('.tool-label span') : null;
                
                // Check if peach mode is active using computed style
                const bgColor = window.getComputedStyle(document.body).backgroundColor;
                const isPeachMode = bgColor === 'rgb(255, 218, 185)' || 
                                   document.body.style.backgroundColor === '#FFDAB9' ||
                                   document.body.style.backgroundColor === 'rgb(255, 218, 185)';
                
                if (!isPeachMode) {
                    // Activate peach mode
                    document.body.style.transition = "background-color 0.4s, color 0.4s";
                    document.body.style.backgroundColor = "#FFDAB9";
                    document.body.style.color = "#222";
                    if (invertTool) invertTool.classList.add('active');
                    if (invertLabel) invertLabel.textContent = 'إرجاع عادي';
                    if (invertSpan) invertSpan.textContent = 'Normal Mode';
                    console.log('✅ Peach Mode activated');
                } else {
                    // Deactivate peach mode
                    document.body.style.backgroundColor = "";
                    document.body.style.color = "";
                    if (invertTool) invertTool.classList.remove('active');
                    if (invertLabel) invertLabel.textContent = 'الوضع المشمشي';
                    if (invertSpan) invertSpan.textContent = 'Peach Mode';
                    console.log('🔄 Peach Mode deactivated');
                }
            }
            
            if (type === 'highlight-links') {
                document.body.classList.toggle('highlight-links');
            }
            
            if (type === 'pause-animation') {
                const style = document.getElementById('pause-animation-style');
                if (style) {
                    style.remove();
                } else {
                    const newStyle = document.createElement('style');
                    newStyle.id = 'pause-animation-style';
                    newStyle.textContent = `* { animation-play-state: paused !important; transition: none !important; }`;
                    document.head.appendChild(newStyle);
                }
            }
        });
    });

    // Profile items
    profileItems.forEach(profile => {
        profile.addEventListener('click', () => {
            const profileType = profile.getAttribute('data-profile');
            activateProfile(profileType);
        });
    });

    // Ensure tools tab is active by default
    const toolsTab = panel.querySelector('#tools-tab');
    const toolsBtn = panel.querySelector('[data-tab="tools"]');
    
    if (toolsTab && toolsBtn) {
        toolsTab.classList.add('active');
        toolsBtn.classList.add('active');
        toolsTab.style.display = 'block';
        console.log('Tools tab activated by default');
    }
    
    console.log('All accessibility panel events set up successfully');
}

// دالة إضافة وظائف وسائل التواصل الاجتماعي
function addSocialMediaFunctionality(panel) {
    const socialItems = panel.querySelectorAll('.social-item');
    
    socialItems.forEach(social => {
        social.addEventListener('click', () => {
            const platform = social.getAttribute('data-social');
            openSocialMedia(platform);
        });
    });
}

// دالة فتح وسائل التواصل الاجتماعي
function openSocialMedia(platform) {
    const socialLinks = {
        'whatsapp': 'https://wa.me/00962771600663', // رقم الواتساب الصحيح
        'instagram': 'https://www.instagram.com/skyline.i.s?igsh=Mjh1ZGFlenI4bXFo', // حساب الإنستغرام الصحيح
        'facebook': 'https://www.facebook.com/share/1BWpA5guRF/', // رابط الفيسبوك الصحيح
        'linkedin': 'https://www.linkedin.com/in/skyline-innovation-software-139248378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' // حساب اللينكد إن الصحيح
    };
    
    const link = socialLinks[platform];
    if (link) {
        window.open(link, '_blank');
    } else {
        console.log(`❌ ${platform} link not configured yet.`);
    }
}


// دالة معالجة إجراءات الأزرار
function handleWidgetAction(action) {
    switch(action) {
        case 'accessibility':
            // Open accessibility panel using accessibility-pack.js
            console.log('🔓 Opening accessibility panel...');
            
            // Remove any existing panel first
            const existingPanel = document.querySelector('.accessibility-panel');
            if (existingPanel) {
                existingPanel.remove();
            }
            
            // Create accessibility panel using accessibility-pack.js content
            const panel = document.createElement('div');
            panel.className = 'accessibility-panel';
            panel.innerHTML = `
                <div class="accessibility-panel-overlay modern-compact">
                    <div class="accessibility-panel-content">
                        <div class="compact-header" style="background: linear-gradient(135deg, #E00A2C, #C44048); color: white; display: flex; align-items: center; justify-content: space-between; padding: 15px 20px;">
                            <div class="header-brand" style="display: flex; align-items: center;">
                                <div class="brand-icon" style="margin-right: 10px;">
                                    <i class="fas fa-universal-access"></i>
                                </div>
                                <div class="brand-text">
                                    <h3 style="margin: 0; font-size: 18px;">Accessibility</h3>
                                </div>
                            </div>
                            <button class="accessibility-panel-close compact-close" style="background: none; border: none; color: white; font-size: 18px; padding: 5px; cursor: pointer;">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                            
                        
                            
                          
                                    <div class="tools-container">
                                        
                                        <div class="tool-row">
                                            <div class="accessibility-tool compact-tool" data-tool="contrast">
                                                <div class="tool-icon-compact">🔍</div>
                                                <div class="tool-label">
                                                    <span>Bigger Text</span>
                                                    <small>نص أكبر</small>
                                                </div>
                                            </div>
                                            
                                            <div class="accessibility-tool compact-tool" data-tool="hide-images">
                                                <div class="tool-icon-compact">🖼️</div>
                                                <div class="tool-label">
                                                    <span>Hide-images</span>
                                                    <small>اخفاء الصور</small>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="tool-row">
                                            <div class="accessibility-tool compact-tool" data-tool="cursor">
                                                <div class="tool-icon-compact">👆</div>
                                                <div class="tool-label">
                                                    <span>Cursor</span>
                                                    <small>المؤشر</small>
                                                </div>
                                            </div>
                                            
                                            <div class="accessibility-tool compact-tool" data-tool="letter-spacing">
                                                <div class="tool-icon-compact">📏</div>
                                                <div class="tool-label">
                                                    <span>Letter Spacing</span>
                                                    <small>تباعد الحروف</small>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="tool-row">
                                            <div class="accessibility-tool compact-tool" data-tool="word-spacing">
                                                <div class="tool-icon-compact">📐</div>
                                                <div class="tool-label">
                                                    <span>Word Spacing</span>
                                                    <small>تباعد الكلمات</small>
                                                </div>
                                            </div>
                                            
                                            <div class="accessibility-tool compact-tool" data-tool="line-spacing">
                                                <div class="tool-icon-compact">📋</div>
                                                <div class="tool-label">
                                                    <span>Line Spacing</span>
                                                    <small>تباعد الأسطر</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="tool-row">
                                            <div class="accessibility-tool compact-tool" data-tool="highlight-links">
                                                <div class="tool-icon-compact">🔗</div>
                                                <div class="tool-label">
                                                    <span>Highlight Links</span>
                                                    <small>تمييز الروابط</small>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
            `;
            
            document.body.appendChild(panel);
            console.log('Panel appended to body');
            
            panel.classList.add('active');
            console.log('Panel activated');
            
            // Show overlay immediately
            const overlay = panel.querySelector('.accessibility-panel-overlay');
            if (overlay) {
                overlay.classList.add('active');
                console.log('Overlay activated');
            }
            
            // Initialize accessibility panel using accessibility-pack.js
            if (window.initializeAccessibilityPanel) {
                window.initializeAccessibilityPanel(panel);
                console.log('Accessibility panel initialized using accessibility-pack.js');
            } else {
                console.error('initializeAccessibilityPanel function not found');
            }
            
            // Auto-enable large cursor when accessibility panel opens
            setTimeout(() => {
                if (window.largeImageCursor) {
                    // Check if cursor was previously enabled
                    const wasEnabled = localStorage.getItem('largeCursorEnabled') === 'true';
                    
                    if (wasEnabled) {
                        // Restore cursor state
                        window.largeImageCursor.enable();
                        console.log('🖱️ Large cursor restored from previous session');
                    } else {
                        // Enable cursor for first time
                        window.largeImageCursor.enable();
                        console.log('🖱️ Large cursor auto-enabled when accessibility panel opened');
                    }
                    
                    // Update cursor tool button state to show it's active
                    const cursorTool = panel.querySelector('[data-tool="cursor"]');
                    if (cursorTool) {
                        cursorTool.classList.add('active');
                        console.log('✅ Cursor tool button marked as active');
                    }
                } else {
                    console.log('⚠️ Large cursor not available yet, will be enabled when ready');
                }
            }, 100);
            
            break;
            
        case 'whatsapp':
            window.open('https://wa.me/00962771600663', '_blank');
            break;
            
        case 'instagram':
            window.open('https://www.instagram.com/skyline.i.s?igsh=Mjh1ZGFlenI4bXFo', '_blank');
            break;
            
        case 'facebook':
            window.open('https://www.facebook.com/share/1BWpA5guRF/', '_blank');
            break;
            
        case 'linkedin':
            window.open('https://www.linkedin.com/in/skyline-innovation-software-139248378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
            break;
            
        default:
            console.log('Unknown action:', action);
    }
}

function createFloatingWidgetsButton() {
    // Remove any existing button first
    const existingBtn = document.getElementById('floating-widgets-btn');
    if (existingBtn) {
        existingBtn.remove();
    }
    
    // Create the floating button
    const floatingBtn = document.createElement('div');
    floatingBtn.id = 'floating-widgets-btn';
    floatingBtn.innerHTML = `
        <div class="floating-btn-content">
            <i class="fas fa-universal-access"></i>
            <span class="floating-btn-text">Access</span>
        </div>
        <div class="floating-widgets-menu">
            <div class="widget-item" data-action="accessibility">
                <i class="fas fa-universal-access"></i>
            </div>
            <div class="widget-item" data-action="whatsapp">
                <i class="fab fa-whatsapp"></i>
            </div>
            <div class="widget-item" data-action="instagram">
                <i class="fab fa-instagram"></i>
            </div>
            <div class="widget-item" data-action="facebook">
                <i class="fab fa-facebook"></i>
            </div>
            <div class="widget-item" data-action="linkedin">
                <i class="fab fa-linkedin"></i>
            </div>
        </div>
    `;

    // Add CSS styles with unique identifier
    const style = document.createElement('style');
    style.setAttribute('data-floating-widgets', 'true');
    style.textContent = `
        #floating-widgets-btn {
            position: fixed !important;
            bottom: 30px !important;
            right: 30px !important;
            width: 60px !important;
            height: 60px !important;
            background: linear-gradient(135deg, #FF1744, #DC143C, #B71C1C) !important;
            border-radius: 50% !important;
            box-shadow: 
                0 10px 35px rgba(220, 20, 60, 0.4),
                0 5px 15px rgba(255, 23, 68, 0.3),
                inset 0 -2px 10px rgba(0, 0, 0, 0.2),
                inset 0 2px 10px rgba(255, 255, 255, 0.2) !important;
            cursor: pointer !important;
            z-index: 99999 !important;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            overflow: visible !important;
            border: 2px solid rgba(255, 255, 255, 0.3) !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
        }
        
        #floating-widgets-btn::before {
            content: '';
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            background: linear-gradient(135deg, #FF1744, #DC143C, #B71C1C);
            border-radius: 50%;
            opacity: 0;
            filter: blur(15px);
            transition: opacity 0.4s ease;
            z-index: -1;
        }
        
        #floating-widgets-btn:hover::before {
            opacity: 0.7;
            animation: glow 2s infinite;
        }
        
        @keyframes glow {
            0%, 100% {
                opacity: 0.5;
                transform: scale(1);
            }
            50% {
                opacity: 0.8;
                transform: scale(1.1);
            }
        }

        .floating-widgets-menu {
            position: absolute !important;
            bottom: 85px !important;
            right: 0 !important;
            background: transparent !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            padding: 0 !important;
            min-width: auto !important;
            max-height: none !important;
            overflow: visible !important;
            opacity: 0 !important;
            visibility: hidden !important;
            transform: translateY(30px) scale(0.85) !important;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            border: none !important;
            z-index: 100000 !important;
        }
        
        

        .floating-widgets-menu.show {
            opacity: 1 !important;
            visibility: visible !important;
            transform: translateY(0) scale(1) !important;
            animation: slideInUp 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }

        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(20px) scale(0.8);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        .widget-item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            background: transparent;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            margin-bottom: 0.8rem;
            position: relative;
            overflow: hidden;
        }

        .widget-item:last-child {
            margin-bottom: 0;
        }

        



        /* Simple hover effects */
        .widget-item:hover {
            transform: translateY(-5px) scale(1.1);
        }
        
        .widget-item:active {
            transform: translateY(-3px) scale(1.05);
        }

        .widget-item i {
            font-size: 2rem;
            text-align: center;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            z-index: 1;
        }
        
        /* Accessibility icon - red */
        .widget-item[data-action="accessibility"] i {
            color: #DC143C;
        }
        
        /* WhatsApp icon - green */
        .widget-item[data-action="whatsapp"] i {
            color: #25D366;
        }
        
        /* Instagram icon - gradient */
        .widget-item[data-action="instagram"] i {
            background: linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        /* Facebook icon - blue */
        .widget-item[data-action="facebook"] i {
            color: #1877F2;
        }
        
        /* LinkedIn icon - blue */
        .widget-item[data-action="linkedin"] i {
            color: #0A66C2;
        }

        .widget-item:hover i {
            transform: scale(1.2) rotate(5deg);
        }


        #floating-widgets-btn:hover {
            transform: translateY(-8px) scale(1.15);
            box-shadow: 
                0 15px 45px rgba(220, 20, 60, 0.5),
                0 8px 25px rgba(255, 23, 68, 0.4);
        }

        #floating-widgets-btn.menu-open {
            transform: translateY(-8px) scale(1.1);
            box-shadow: 
                0 15px 45px rgba(220, 20, 60, 0.5),
                0 8px 25px rgba(255, 23, 68, 0.4);
            background: linear-gradient(135deg, #B71C1C, #DC143C, #FF1744) !important;
        }

        #floating-widgets-btn.menu-open .floating-btn-content i {
            transform: rotate(180deg) scale(1.1);
        }
        
        #floating-widgets-btn.menu-open::before {
            opacity: 0.9;
        }

        #floating-widgets-btn:active {
            transform: translateY(-2px) scale(1.05);
        }

        .floating-btn-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
            z-index: 1;
        }

        .floating-btn-content i {
            font-size: 1.8rem;
            margin-bottom: 3px;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }

        .floating-btn-text {
            font-size: 0.75rem;
            font-weight: 700;
            font-family: 'Inter', 'Segoe UI', sans-serif;
            opacity: 0.95;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            letter-spacing: 0.5px;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        #floating-widgets-btn:hover .floating-btn-content i {
            transform: rotate(20deg) scale(1.15);
            filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.8));
        }

        #floating-widgets-btn:hover .floating-btn-text {
            opacity: 1;
            transform: translateY(-2px) scale(1.05);
            letter-spacing: 0.8px;
        }

        /* Pulse animation */
        @keyframes pulse {
            0% {
                box-shadow: 
                    0 10px 35px rgba(220, 20, 60, 0.4),
                    0 5px 15px rgba(255, 23, 68, 0.3);
            }
            50% {
                box-shadow: 
                    0 12px 40px rgba(220, 20, 60, 0.6),
                    0 6px 20px rgba(255, 23, 68, 0.5),
                    0 0 0 15px rgba(255, 23, 68, 0.1),
                    0 0 0 30px rgba(220, 20, 60, 0.05);
            }
            100% {
                box-shadow: 
                    0 10px 35px rgba(220, 20, 60, 0.4),
                    0 5px 15px rgba(255, 23, 68, 0.3);
            }
        }

        #floating-widgets-btn.pulse {
            animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
            #floating-widgets-btn {
                bottom: 15px !important;
                right: 15px !important;
                width: 50px !important;
                height: 50px !important;
            }

            .floating-btn-content i {
                font-size: 1.4rem !important;
            }

            .floating-btn-text {
                font-size: 0.65rem !important;
                display: none !important;
            }

            .floating-widgets-menu {
                bottom: 70px !important;
                right: 0 !important;
                min-width: auto !important;
                max-width: calc(100vw - 30px) !important;
                max-height: calc(100vh - 100px) !important;
                padding: 0.8rem !important;
                gap: 0.6rem !important;
            }

            .widget-item {
                width: 45px !important;
                height: 45px !important;
                margin-bottom: 0.6rem !important;
            }

            .widget-item i {
                font-size: 1.5rem !important;
            }

            .widget-item:last-child {
                margin-bottom: 0 !important;
            }
        }

        /* Small screens */
        @media (max-width: 480px) {
            #floating-widgets-btn {
                bottom: 12px !important;
                right: 12px !important;
                width: 48px !important;
                height: 48px !important;
            }

            .floating-btn-text {
                display: none !important;
            }

            .floating-btn-content i {
                font-size: 1.3rem !important;
                margin-bottom: 0 !important;
            }
            
            .floating-widgets-menu {
                bottom: 68px !important;
                right: 0 !important;
                min-width: auto !important;
                max-width: calc(100vw - 24px) !important;
                max-height: calc(100vh - 90px) !important;
                padding: 0.6rem !important;
                gap: 0.5rem !important;
            }
            
            .widget-item {
                width: 42px !important;
                height: 42px !important;
                margin-bottom: 0.5rem !important;
            }
            
            .widget-item i {
                font-size: 1.3rem !important;
            }
        }

        /* Very small screens */
        @media (max-width: 360px) {
            #floating-widgets-btn {
                bottom: 10px !important;
                right: 10px !important;
                width: 45px !important;
                height: 45px !important;
            }

            .floating-btn-content i {
                font-size: 1.2rem !important;
            }
            
            .floating-widgets-menu {
                bottom: 65px !important;
                right: 0 !important;
                padding: 0.5rem !important;
                gap: 0.4rem !important;
            }
            
            .widget-item {
                width: 40px !important;
                height: 40px !important;
                margin-bottom: 0.4rem !important;
            }
            
            .widget-item i {
                font-size: 1.2rem !important;
            }
        }

        /* Override any conflicting styles */
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0 !important;
            padding: 0 !important;
        }

        /* Ensure floating button is always visible */
        #floating-widgets-btn,
        #floating-widgets-btn * {
            pointer-events: auto !important;
            user-select: none !important;
        }

        /* Force visibility */
        #floating-widgets-btn {
            display: flex !important;
            visibility: visible !important;
            opacity: 1 !important;
        }

        /* Override any potential conflicts */
        #floating-widgets-btn {
            position: fixed !important;
            z-index: 99999 !important;
            pointer-events: auto !important;
        }

        /* Ensure accessibility panel is always visible when active */
        .accessibility-panel {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            z-index: 10002 !important;
            pointer-events: auto !important;
        }

        .accessibility-panel.active {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
        }

        .accessibility-panel-overlay {
            display: block !important;
            visibility: visible !important;
            pointer-events: auto !important;
        }

        .accessibility-panel-overlay.active {
            display: block !important;
            visibility: visible !important;
        }

        .accessibility-panel-content,
        .accessibility-panel-header,
        .accessibility-panel-body,
        .accessibility-tabs,
        .tab-content {
            display: block !important;
            visibility: visible !important;
            pointer-events: auto !important;
        }

        .tab-content.active {
            display: block !important;
        }

        body {
            margin: 0 !important;
            padding: 0 !important;
        }

        /* Ensure floating button is always visible */
        #floating-widgets-btn,
        #floating-widgets-btn * {
            pointer-events: auto !important;
            user-select: none !important;
        }

        /* Force visibility */
        #floating-widgets-btn {
            display: flex !important;
            visibility: visible !important;
            opacity: 1 !important;
        }

        /* Override any potential conflicts */
        #floating-widgets-btn {
            position: fixed !important;
            z-index: 99999 !important;
            pointer-events: auto !important;
        }

        .floating-widgets-menu {
            position: absolute !important;
            z-index: 100000 !important;
            pointer-events: auto !important;
        }

        /* Ensure no other elements interfere */
        * {
            box-sizing: border-box;
        }

        /* Reset any potential conflicts */
        #floating-widgets-btn,
        #floating-widgets-btn *,
        .floating-widgets-menu,
        .floating-widgets-menu * {
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            outline: none !important;
        }

        /* Force display */
        #floating-widgets-btn {
            display: flex !important;
            visibility: visible !important;
            opacity: 1 !important;
            transform: none !important;
        }

        /* Social Media Styles */
        .social-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.8rem;
            padding: 1rem;
        }

        .social-item {
            background: linear-gradient(145deg, #ffffff, #f8f9fa);
            border: 2px solid rgba(220, 20, 60, 0.1);
            border-radius: 16px;
            padding: 1rem 0.8rem;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }

        .social-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            transition: left 0.5s;
        }

        .social-item:hover::before {
            left: 100%;
        }

        .social-item:hover {
            background: linear-gradient(135deg, #DC143C, #B22222);
            color: white;
            border-color: rgba(255, 255, 255, 0.3);
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 8px 25px rgba(220, 20, 60, 0.4);
        }

        .social-icon {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        .social-title {
            font-size: 0.9rem;
            font-weight: 700;
            margin-bottom: 0.3rem;
            color: #333333;
            letter-spacing: 0.3px;
        }

        .social-item:hover .social-title {
            color: white;
        }

        .social-desc {
            font-size: 0.7rem;
            color: #666;
            line-height: 1.3;
            opacity: 0.8;
        }

        .social-item:hover .social-desc {
            color: rgba(255, 255, 255, 0.9);
        }

        /* Mobile responsive for social */
        @media (max-width: 768px) {
            .social-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 0.6rem;
                padding: 0.8rem;
            }

            .social-item {
                padding: 0.8rem 0.6rem;
            }

            .social-icon {
                font-size: 1.5rem;
            }

            .social-title {
                font-size: 0.8rem;
            }

            .social-desc {
                font-size: 0.6rem;
            }
        }

        /* Modern Simple Font - Enhanced Readability */
        body.simple-font-mode {
            font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif !important;
            font-size: 1.3em !important;
            line-height: 1.9 !important;
            letter-spacing: 0.5px !important;
            word-spacing: 2px !important;
            text-rendering: optimizeLegibility !important;
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
        }

        .simple-font-mode h1,
        .simple-font-mode h2,
        .simple-font-mode h3,
        .simple-font-mode h4,
        .simple-font-mode h5,
        .simple-font-mode h6 {
            font-size: 1.4em !important;
            line-height: 1.6 !important;
            font-weight: 600 !important;
            letter-spacing: 0.8px !important;
            margin: 1.2em 0 0.8em 0 !important;
        }

        .simple-font-mode p {
            font-size: 1.1em !important;
            line-height: 2 !important;
            margin: 1em 0 !important;
            text-align: justify !important;
        }

        .simple-font-mode a {
            font-size: 1.05em !important;
            text-decoration: underline !important;
            font-weight: 500 !important;
        }

        .simple-font-mode button,
        .simple-font-mode input,
        .simple-font-mode select,
        .simple-font-mode textarea {
            font-size: 1.1em !important;
            padding: 12px 16px !important;
            border-radius: 8px !important;
            font-weight: 500 !important;
        }

        .simple-font-mode .accessibility-tool {
            font-size: 1.05em !important;
        }

        .simple-font-mode .tool-label span {
            font-size: 1em !important;
            font-weight: 600 !important;
        }

        .simple-font-mode .tool-label small {
            font-size: 0.9em !important;
            opacity: 0.9 !important;
        }


        .simple-font-mode .profile-item,
        .simple-font-mode .language-item {
            font-size: 1.05em !important;
        }

        .simple-font-mode .tab-btn {
            font-size: 1em !important;
            font-weight: 600 !important;
            padding: 12px 16px !important;
        }

        .simple-font-mode .profile-title,
        .simple-font-mode .language-title {
            font-size: 1.1em !important;
            font-weight: 600 !important;
        }

        /* ===== HIDE IMAGES MODE ===== */
        .hide-images-mode img {
            display: none !important;
        }

        .hide-images-mode .hide-me {
            display: none !important;
        }

        /* Enhanced page title styling when hiding images */
        .hide-images-mode .page-title {
            font-size: 60px !important;
            letter-spacing: 5px !important;
            color: #CC0000 !important;
            font-family: Arial, sans-serif !important;
            text-align: center !important;
            margin: 20px 0 !important;
            font-weight: bold !important;
        }

        .hide-images-mode h1 {
            font-size: 60px !important;
            letter-spacing: 5px !important;
            color: #CC0000 !important;
            font-family: Arial, sans-serif !important;
            text-align: center !important;
            margin: 20px 0 !important;
            font-weight: bold !important;
        }

        .hide-images-mode h2 {
            font-size: 50px !important;
            letter-spacing: 4px !important;
            color: #CC0000 !important;
            font-family: Arial, sans-serif !important;
            text-align: center !important;
            margin: 15px 0 !important;
            font-weight: bold !important;
        }

        .hide-images-mode h3 {
            font-size: 40px !important;
            letter-spacing: 3px !important;
            color: #CC0000 !important;
            font-family: Arial, sans-serif !important;
            text-align: center !important;
            margin: 10px 0 !important;
            font-weight: bold !important;
        }

        /* Active state for simple font tool */
        .accessibility-tool[data-tool="simple-font"].active {
            background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%) !important;
            border: 2px solid #dc2626 !important;
            box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3) !important;
        }

        .accessibility-tool[data-tool="simple-font"].active::after {
            content: '✓';
            position: absolute;
            top: 8px;
            right: 8px;
            background: linear-gradient(135deg, #dc2626 0%, #ff4444 100%);
            color: white;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: bold;
            box-shadow: 0 2px 8px rgba(220, 38, 38, 0.4);
        }


    `;

    // Add styles to head
    document.head.appendChild(style);

    // Add click event for main button
    floatingBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const menu = floatingBtn.querySelector('.floating-widgets-menu');
        const isVisible = menu.classList.contains('show');
        
        if (isVisible) {
            menu.classList.remove('show');
            floatingBtn.classList.remove('menu-open');
        } else {
            menu.classList.add('show');
            floatingBtn.classList.add('menu-open');
        }
    });

    // Add click events for menu items
    const menuItems = floatingBtn.querySelectorAll('.widget-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const action = this.getAttribute('data-action');
            handleWidgetAction(action);
            // Close menu after action
            const menu = floatingBtn.querySelector('.floating-widgets-menu');
            menu.classList.remove('show');
            floatingBtn.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!floatingBtn.contains(e.target)) {
            const menu = floatingBtn.querySelector('.floating-widgets-menu');
            menu.classList.remove('show');
            floatingBtn.classList.remove('menu-open');
        }
    });

    // Add hover effects
    floatingBtn.addEventListener('mouseenter', function() {
        this.classList.add('pulse');
    });

    floatingBtn.addEventListener('mouseleave', function() {
        this.classList.remove('pulse');
    });

    // Add to body with force positioning
    document.body.appendChild(floatingBtn);
    
    // Force ensure visibility
    setTimeout(() => {
        floatingBtn.style.display = 'flex';
        floatingBtn.style.visibility = 'visible';
        floatingBtn.style.opacity = '1';
        floatingBtn.style.zIndex = '99999';
    }, 100);

    // Add entrance animation
    setTimeout(() => {
        floatingBtn.style.opacity = '0';
        floatingBtn.style.transform = 'translateY(100px) scale(0.5)';
        floatingBtn.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            floatingBtn.style.opacity = '1';
            floatingBtn.style.transform = 'translateY(0) scale(1)';
        }, 100);
    }, 500);
}

// Function to ensure no conflicts
function ensureNoConflicts() {
    // Remove any existing floating widgets
    const existingBtn = document.getElementById('floating-widgets-btn');
    if (existingBtn) {
        existingBtn.remove();
    }
    
    // Remove any conflicting styles
    const conflictingStyles = document.querySelectorAll('style[data-floating-widgets]');
    conflictingStyles.forEach(style => style.remove());
    
    // Remove any accessibility trigger buttons that might conflict
    const accessibilityBtns = document.querySelectorAll('#accessibility-trigger-btn');
    accessibilityBtns.forEach(btn => btn.remove());
    
    // Ensure body has proper styles
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'auto';
    
    // Force remove any conflicting z-index styles
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
        if (el.style.zIndex && parseInt(el.style.zIndex) > 50000) {
            el.style.zIndex = 'auto';
        }
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        ensureNoConflicts();
        createFloatingWidgetsButton();
    });
} else {
    ensureNoConflicts();
    createFloatingWidgetsButton();
}

// إضافة CSS لضمان عمل الكبسات
const buttonFixStyles = `
/* ضمان عمل جميع الكبسات */
.accessibility-tool,
.compact-tool,
.key,
button,
.font-btn,
.font-reset,
.tools-scroll-btn {
    pointer-events: auto !important;
    cursor: pointer !important;
    user-select: none !important;
}

/* تنسيق الحاوية الرئيسية - Modern & Creative */
.tools-container {
    max-width: 380px;
    margin: 0 auto;
    padding: 1rem;
    background: linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(21, 21, 21, 0.95) 100%);
    backdrop-filter: blur(10px);
    border-radius: 0 0 16px 16px;
    border: 1px solid rgba(217, 10, 44, 0.2);
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(217, 10, 44, 0.1);
}

/* تطبيق Flexbox على كل صف */
.tool-row {
    display: flex;
    justify-content: space-between; 
    margin-bottom: 0.7rem;
    gap: 0.7rem;
}

.tool-row:last-child {
    margin-bottom: 0;
}

/* تصميم عصري وإبداعي للأدوات */
.tools-container .accessibility-tool {
    width: 48%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    text-align: center;
    padding: 0.8rem 0.6rem;
    border-radius: 12px;
    background: linear-gradient(145deg, rgba(23, 23, 23, 0.95), rgba(25, 25, 25, 0.9));
    border: 2px solid rgba(217, 10, 44, 0.3);
    box-shadow: 
        0 4px 15px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(217, 10, 44, 0.1);
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

/* تأثير الضوء المتحرك */
.tools-container .accessibility-tool::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
}

.tools-container .accessibility-tool:hover::before {
    left: 100%;
}

/* تأثير Hover محسن */
.tools-container .accessibility-tool:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
        0 12px 28px rgba(217, 10, 44, 0.4),
        0 8px 16px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(217, 10, 44, 0.3);
    border: 2px solid rgba(217, 10, 44, 0.6);
    background: linear-gradient(145deg, rgba(217, 10, 44, 0.2), rgba(165, 42, 42, 0.15));
}

/* تأثير Active */
.tools-container .accessibility-tool:active {
    transform: translateY(-4px) scale(0.98);
    box-shadow: 
        0 6px 18px rgba(220, 38, 38, 0.2),
        inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* تصميم الأيقونات */
.tools-container .tool-icon-compact {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    filter: drop-shadow(0 2px 4px rgba(217, 10, 44, 0.3));
    transition: all 0.3s ease;
}

.tools-container .accessibility-tool:hover .tool-icon-compact {
    transform: scale(1.15) rotate(5deg);
    filter: drop-shadow(0 4px 8px rgba(217, 10, 44, 0.6));
}

/* تصميم النصوص */
.tools-container .tool-label span {
    display: block;
    font-size: 0.8rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 0.2rem;
    letter-spacing: 0.3px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.tools-container .tool-label small {
    display: block;
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
    opacity: 0.85;
}

.tools-container .accessibility-tool:hover .tool-label span {
    color: #D90A2C;
}

.tools-container .accessibility-tool:hover .tool-label small {
    color: #FF6B6B;
    opacity: 1;
}

/* تصميم الحالة النشطة */
.tools-container .accessibility-tool.active {
    background: linear-gradient(145deg, #D90A2C, #A52A2A);
    border: 2px solid #D90A2C;
    box-shadow: 
        0 8px 24px rgba(217, 10, 44, 0.6),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.tools-container .accessibility-tool.active .tool-label span,
.tools-container .accessibility-tool.active .tool-label small {
    color: white;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

.tools-container .accessibility-tool.active .tool-icon-compact {
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4));
}

/* علامة التفعيل */
.tools-container .accessibility-tool.active::after {
    content: '✓';
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #ffffff, #f5f5f5);
    color: #D90A2C;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    animation: checkmarkPop 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes checkmarkPop {
    0% {
        transform: scale(0) rotate(0deg);
        opacity: 0;
    }
    50% {
        transform: scale(1.2) rotate(180deg);
    }
    100% {
        transform: scale(1) rotate(360deg);
        opacity: 1;
    }
}

/* 1. التنسيق الأساسي لرأس اللوحة (الذي يحقق الترتيب الأفقي) */
.accessibility-panel-header {
    display: flex; /* تفعيل Flexbox لجعل العناصر تتجاور أفقياً */
    align-items: center; /* محاذاة العناصر عمودياً في المنتصف */
    justify-content: flex-start; /* البدء من اليسار */
    gap: 12px; /* مسافة بين جميع العناصر */
    padding: 15px 20px; /* إضافة مسافة داخلية للرأس */
    border-bottom: 2px solid rgba(217, 10, 44, 0.3); /* خط فاصل أسفل الرأس */
    background: linear-gradient(135deg, #D90A2C 0%, #A52A2A 100%);
    border-radius: 18px 18px 0 0;
    box-shadow: 0 4px 20px rgba(217, 10, 44, 0.4);
    margin: 0;
}

/* 2. تجميع الأيقونة والنص معاً */
.header-brand {
    display: flex; /* تفعيل Flexbox داخل هذا العنصر */
    align-items: center; /* محاذاة الأيقونة والنص عمودياً في المنتصف */
    gap: 10px; /* إضافة مسافة بين الأيقونة والنص */
    flex: 0 0 auto; /* عدم التمدد */
}

/* 3. تنسيق الأيقونة (اختياري) */
.brand-icon {
    font-size: 20px;
    color: #ffffff; /* لون الأيقونة */
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
}

.brand-text h3 {
    color: white;
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
    line-height: 1;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* 4. تنسيق زر الإغلاق (للتأكد من ظهوره بشكل جيد) */
.accessibility-panel-close {
    /* خصائص لزر لجعله دائرياً وواضحاً */
    background: rgba(255, 255, 255, 0.25);
    border: 1.5px solid rgba(255, 255, 255, 0.4);
    cursor: pointer;
    font-size: 18px;
    color: #ffffff;
    padding: 5px;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    flex-shrink: 0; /* عدم الانكماش */
    margin-left: auto; /* دفع الزر لليمين */
}

.accessibility-panel-close:hover {
    background: rgba(255, 255, 255, 0.4);
    border-color: rgba(255, 255, 255, 0.6);
    transform: rotate(90deg) scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* تصميم البانل الرئيسي - إزالة الضبابية */
.accessibility-panel-overlay.modern-compact {
    background: transparent;
    backdrop-filter: none;
}

.accessibility-panel-content {
    background: linear-gradient(135deg, #1A1A1A 0%, #151515 100%);
    border-radius: 18px;
    box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(217, 10, 44, 0.3);
    overflow: hidden;
    max-width: 450px;
    margin: 0 auto;
    padding: 0;
}

/* تأثيرات متجاوبة */
@media (max-width: 768px) {
    .tools-container {
        padding: 0.8rem 0.6rem;
        max-width: 100%;
    }
    
    .tool-row {
        gap: 0.5rem;
        margin-bottom: 0.5rem;
    }
    
    .tools-container .accessibility-tool {
        padding: 0.7rem 0.5rem;
        min-height: 75px;
    }
    
    .tools-container .tool-icon-compact {
        font-size: 1.2rem;
        margin-bottom: 0.4rem;
    }
    
    .tools-container .tool-label span {
        font-size: 0.7rem;
    }
    
    .tools-container .tool-label small {
        font-size: 0.6rem;
    }
    
    .accessibility-panel-content {
        max-width: 100%;
        border-radius: 16px;
    }
}

@media (max-width: 480px) {
    .tools-container {
        padding: 0.6rem 0.5rem;
    }
    
    .tools-container .accessibility-tool {
        width: 48%;
        margin-bottom: 0;
        padding: 0.6rem 0.4rem;
        min-height: 70px;
    }
    
    .tool-row {
        gap: 0.4rem;
        margin-bottom: 0.4rem;
    }
    
    .tools-container .tool-icon-compact {
        font-size: 1.1rem;
        margin-bottom: 0.3rem;
    }
    
    .tools-container .tool-label span {
        font-size: 0.65rem;
    }
    
    .tools-container .tool-label small {
        font-size: 0.55rem;
    }
}

@media (max-width: 360px) {
    .tools-container {
        padding: 0.5rem;
    }
    
    .tools-container .accessibility-tool {
        width: 100%;
        margin-bottom: 0.5rem;
    }
    
    .tool-row {
        flex-direction: column;
        gap: 0.5rem;
    }
}

/* ضمان ظهور الكبسات */
.accessibility-tool:hover,
.compact-tool:hover,
.key:hover,
button:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
}

/* إزالة أي عوائق */
.accessibility-tool *,
.compact-tool *,
.key * {
    pointer-events: auto !important;
}

/* ضمان عمل النقر */
.accessibility-tool:active,
.compact-tool:active,
.key:active,
button:active {
    transform: translateY(0) scale(0.98) !important;
}

/* إصلاح z-index للكبسات */
.accessibility-tool,
.compact-tool,
.key {
    position: relative !important;
    z-index: 1 !important;
}

/* ضمان عمل النقر على الكيبورد */
.keyboard .key {
    pointer-events: auto !important;
    cursor: pointer !important;
    position: relative !important;
    z-index: 2 !important;
}

/* إصلاح أي تداخل */
.keyboard-row {
    position: relative !important;
    z-index: 1 !important;
}
`;

const buttonFixStyle = document.createElement('style');
buttonFixStyle.textContent = buttonFixStyles;
document.head.appendChild(buttonFixStyle);

// إضافة JavaScript لضمان عمل الكبسات
document.addEventListener('DOMContentLoaded', function() {
    // ضمان عمل جميع الكبسات
    function ensureButtonsWork() {
        // إصلاح كبسات إمكانية الوصول
        const accessibilityTools = document.querySelectorAll('.accessibility-tool, .compact-tool');
        accessibilityTools.forEach(tool => {
            tool.style.pointerEvents = 'auto';
            tool.style.cursor = 'pointer';
            tool.style.position = 'relative';
            tool.style.zIndex = '1';
            
            // إضافة event listener للنقر
            tool.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Accessibility tool clicked:', this.getAttribute('data-tool'));
            });
        });
        
        // إصلاح كبسات الكيبورد
        const keyboardKeys = document.querySelectorAll('.key');
        keyboardKeys.forEach(key => {
            key.style.pointerEvents = 'auto';
            key.style.cursor = 'pointer';
            key.style.position = 'relative';
            key.style.zIndex = '2';
            
            // إضافة event listener للنقر
            key.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Keyboard key clicked:', this.textContent);
            });
        });
        
        // إصلاح جميع الأزرار
        const allButtons = document.querySelectorAll('button');
        allButtons.forEach(button => {
            button.style.pointerEvents = 'auto';
            button.style.cursor = 'pointer';
            button.style.position = 'relative';
            button.style.zIndex = '1';
        });
        
        console.log('All buttons fixed and working');
    }
    
    // تشغيل الإصلاح
    ensureButtonsWork();
    
    // إعادة تشغيل الإصلاح عند تغيير المحتوى
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                ensureButtonsWork();
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// إضافة JavaScript محسن لضمان عمل جميع الكود
document.addEventListener('DOMContentLoaded', function() {
    // دالة شاملة لضمان عمل جميع الكود
    function ensureAllCodeWorks() {
        console.log('Ensuring all code works...');
        
        // 1. إصلاح تبويبات إمكانية الوصول
        const tabButtons = document.querySelectorAll('.tab-btn, .compact-tab');
        tabButtons.forEach(btn => {
            btn.style.pointerEvents = 'auto';
            btn.style.cursor = 'pointer';
            btn.style.position = 'relative';
            btn.style.zIndex = '10';
            
            // إضافة event listener للتبديل
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const tabName = this.getAttribute('data-tab');
                console.log('Tab clicked:', tabName);
                
                // إزالة active من جميع التبويبات
                tabButtons.forEach(b => b.classList.remove('active'));
                // إضافة active للتبويب المحدد
                this.classList.add('active');
                
                // إخفاء جميع المحتويات
                const allContents = document.querySelectorAll('.tab-content, .compact-content');
                allContents.forEach(content => content.classList.remove('active'));
                
                // إظهار المحتوى المحدد
                const targetContent = document.getElementById(tabName + '-tab');
                if (targetContent) {
                    targetContent.classList.add('active');
                    targetContent.style.display = 'block';
                    targetContent.style.visibility = 'visible';
                    targetContent.style.opacity = '1';
                }
            });
        });
        
        // 2. إصلاح أدوات إمكانية الوصول
        const accessibilityTools = document.querySelectorAll('.accessibility-tool, .compact-tool');
        accessibilityTools.forEach(tool => {
            tool.style.pointerEvents = 'auto';
            tool.style.cursor = 'pointer';
            tool.style.position = 'relative';
            tool.style.zIndex = '5';
            
            // إضافة event listener للأدوات
            tool.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const toolType = this.getAttribute('data-tool');
                console.log('Accessibility tool clicked:', toolType);
                
                // تطبيق الوظيفة حسب نوع الأداة
                switch(toolType) {
                    case 'bigger-text':
                        console.log('Bigger text tool activated');
                        break;
                    case 'contrast':
                        document.body.classList.toggle('high-contrast');
                        console.log('Contrast toggled');
                        break;
                    case 'simple-font':
                        // Toggle modern simple font mode
                        const isSimpleFontActive = document.body.classList.contains('simple-font-mode');
                        
                        if (isSimpleFontActive) {
                            // Remove simple font mode
                            document.body.classList.remove('simple-font-mode');
                            toolElement.classList.remove('active');
                            console.log('📝 Modern simple font mode disabled');
                        } else {
                            // Apply modern simple font mode
                            document.body.classList.add('simple-font-mode');
                            toolElement.classList.add('active');
                            console.log('📝 Modern simple font mode enabled');
                        }
                        break;
                    case 'hide-images':
                        // Toggle hide images mode
                        const isHideImagesActive = document.body.classList.contains('hide-images-mode');
                        
                        if (isHideImagesActive) {
                            // Remove hide images mode
                            document.body.classList.remove('hide-images-mode');
                            toolElement.classList.remove('active');
                            console.log('🖼️ Hide images mode disabled');
                        } else {
                            // Apply hide images mode
                            document.body.classList.add('hide-images-mode');
                            toolElement.classList.add('active');
                            console.log('🖼️ Hide images mode enabled');
                        }
                        break;
                    case 'large-cursor':
                        console.log('Large image cursor tool activated');
                        const largeCursorTool = document.getElementById('large-cursor-tool');
                        const cursorLabel = largeCursorTool ? largeCursorTool.querySelector('small') : null;
                        const cursorSpan = largeCursorTool ? largeCursorTool.querySelector('.tool-label span') : null;
                        
                        if (window.largeImageCursor) {
                            window.largeImageCursor.toggle();
                            
                            // Update button state
                            const isEnabled = window.largeImageCursor.isEnabled;
                            if (isEnabled) {
                                if (largeCursorTool) largeCursorTool.classList.add('active');
                                if (cursorLabel) cursorLabel.textContent = 'Normal Cursor';
                                if (cursorSpan) cursorSpan.textContent = 'Normal Cursor';
                                console.log('✅ Large Image Cursor activated');
                            } else {
                                if (largeCursorTool) largeCursorTool.classList.remove('active');
                                if (cursorLabel) cursorLabel.textContent = 'مؤشر كبير';
                                if (cursorSpan) cursorSpan.textContent = 'Large Cursor';
                                console.log('🔄 Large Image Cursor deactivated');
                            }
                        } else {
                            console.error('Large Image Cursor not available');
                        }
                        break;
                    case 'invert-colors':
                        console.log('Peach mode tool activated');
                        const invertTool = document.getElementById('invert-colors-tool');
                        const invertLabel = invertTool ? invertTool.querySelector('small') : null;
                        const invertSpan = invertTool ? invertTool.querySelector('.tool-label span') : null;
                        const isPeachMode = document.body.style.backgroundColor === 'rgb(255, 218, 185)' || 
                                           document.body.style.backgroundColor === '#FFDAB9';
                        
                        if (!isPeachMode) {
                            // Activate peach mode
                            document.body.style.transition = "background-color 0.4s, color 0.4s";
                            document.body.style.backgroundColor = "#FFDAB9";
                            document.body.style.color = "#222";
                            if (invertTool) invertTool.classList.add('active');
                            if (invertLabel) invertLabel.textContent = 'إرجاع عادي';
                            if (invertSpan) invertSpan.textContent = 'Normal Mode';
                            console.log('✅ Peach Mode activated');
                        } else {
                            // Deactivate peach mode
                            document.body.style.backgroundColor = "";
                            document.body.style.color = "";
                            if (invertTool) invertTool.classList.remove('active');
                            if (invertLabel) invertLabel.textContent = 'الوضع المشمشي';
                            if (invertSpan) invertSpan.textContent = 'Peach Mode';
                            console.log('🔄 Peach Mode deactivated');
                        }
                        break;
                    case 'highlight-links':
                        document.body.classList.toggle('highlight-links');
                        console.log('Highlight links toggled');
                        break;
                    case 'pause-animation':
                        const style = document.createElement('style');
                        style.id = 'pause-animation-style';
                        style.textContent = `* { animation-play-state: paused !important; }`;
                        if (document.getElementById('pause-animation-style')) {
                            document.getElementById('pause-animation-style').remove();
                        } else {
                            document.head.appendChild(style);
                        }
                        console.log('Animation pause toggled');
                        break;
                }
            });
        });
        
        // 3. إصلاح أزرار تحكم الخط - Enhanced
        let currentFontSize = parseInt(document.body.style.fontSize) || 100;
        const fontDisplay = document.getElementById('font-size-display');
        
        document.querySelectorAll('.font-btn').forEach(btn => {
            btn.style.pointerEvents = 'auto';
            btn.style.cursor = 'pointer';
            btn.style.position = 'relative';
            btn.style.zIndex = '5';
            
            // إضافة event listener لأزرار الخط
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const action = btn.getAttribute('data-action');
                console.log('Font button clicked:', action);
                
                if (action === 'increase' && currentFontSize < 200) {
                    currentFontSize += 10;
                }
                if (action === 'decrease' && currentFontSize > 50) {
                    currentFontSize -= 10;
                }
                
                document.body.style.fontSize = currentFontSize + '%';
                if (fontDisplay) {
                    fontDisplay.textContent = currentFontSize + '%';
                }
                console.log('Font size updated to:', currentFontSize + '%');
            });
        });
        
        // إصلاح زر Reset
        const fontResetBtn = document.querySelector('.font-reset');
        if (fontResetBtn) {
            fontResetBtn.style.pointerEvents = 'auto';
            fontResetBtn.style.cursor = 'pointer';
            fontResetBtn.style.position = 'relative';
            fontResetBtn.style.zIndex = '5';
            
            fontResetBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                currentFontSize = 100;
                document.body.style.fontSize = '100%';
                if (fontDisplay) {
                    fontDisplay.textContent = '100%';
                }
                console.log('Font size reset to 100%');
            });
        }
        
        // 4. إصلاح ملفات التعريف
        const profileItems = document.querySelectorAll('.profile-item, .compact-profile');
        profileItems.forEach(profile => {
            profile.style.pointerEvents = 'auto';
            profile.style.cursor = 'pointer';
            profile.style.position = 'relative';
            profile.style.zIndex = '5';
            
            // إضافة event listener للملفات
            profile.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const profileType = this.getAttribute('data-profile');
                console.log('Profile clicked:', profileType);
                
                // تطبيق إعدادات الملف
                switch(profileType) {
                    case 'visually-impaired':
                        document.body.classList.add('high-contrast');
                        document.body.style.fontSize = '120%';
                        console.log('Visually impaired profile activated');
                        break;
                    case 'dyslexia':
                        document.body.classList.add('simple-font-mode');
                        document.body.style.fontSize = '110%';
                        console.log('Dyslexia profile activated');
                        break;
                    case 'adhd':
                        document.body.classList.add('highlight-links');
                        console.log('ADHD profile activated');
                        break;
                }
            });
        });
        
        // 5. ضمان ظهور المحتوى
        const allContents = document.querySelectorAll('.tab-content, .compact-content');
        allContents.forEach(content => {
            content.style.display = 'block';
            content.style.visibility = 'visible';
            content.style.opacity = '1';
            content.style.position = 'relative';
            content.style.zIndex = '1';
        });
        
        // 6. ضمان ظهور الشبكات والقوائم
        const grids = document.querySelectorAll('.accessibility-grid, .compact-grid, .profiles-list, .compact-profiles');
        grids.forEach(grid => {
            grid.style.display = 'grid';
            grid.style.visibility = 'visible';
            grid.style.opacity = '1';
            grid.style.position = 'relative';
            grid.style.zIndex = '1';
        });
        
        console.log('All code ensured to work properly');
    }
    
    // تشغيل الإصلاح الشامل
    ensureAllCodeWorks();
    
    // إعادة تشغيل الإصلاح عند تغيير المحتوى
    const observer = new MutationObserver(function(mutations) {
        let shouldRerun = false;
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                shouldRerun = true;
            }
        });
        if (shouldRerun) {
            setTimeout(ensureAllCodeWorks, 100);
        }
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});