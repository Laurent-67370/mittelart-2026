        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            const backToTop = document.getElementById('backToTop');
            
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
                backToTop.classList.add('visible');
            } else {
                navbar.classList.remove('scrolled');
                backToTop.classList.remove('visible');
            }
        });

        // Mobile menu toggle
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        }

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.about-grid, .programme-card, .lieu-grid, .contact-card, .partners-grid, .gallery-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s ease-out';
            observer.observe(el);
        });

        // ========== COUNTDOWN ==========
        const eventDate = new Date('2026-03-07T14:00:00').getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance < 0) {
                document.getElementById('countdown').innerHTML = '<div class="countdown-ended">🎨 L\'exposition a commencé !</div>';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);

        // ========== CALENDAR FUNCTIONS ==========
        const eventDetails = {
            title: "Mittel'art 2026 - Exposition Peintures & Sculptures",
            description: "14ème édition de l'exposition Mittel'art à Mittelhausbergen. Peintures et sculptures d'artistes régionaux.",
            location: "Espace Sportif et Culturel, Rue des Jardins, 67206 Mittelhausbergen",
            startDate: "2026-03-07",
            startTime: "14:00",
            endDate: "2026-03-08",
            endTime: "19:00"
        };

        function addToCalendar(type) {
            const start = eventDetails.startDate.replace(/-/g, '') + 'T' + eventDetails.startTime.replace(':', '') + '00';
            const end = eventDetails.endDate.replace(/-/g, '') + 'T' + eventDetails.endTime.replace(':', '') + '00';

            let url = '';

            switch(type) {
                case 'google':
                    url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${start}/${end}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;
                    window.open(url, '_blank');
                    break;

                case 'outlook':
                    url = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(eventDetails.title)}&body=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}&startdt=${eventDetails.startDate}T${eventDetails.startTime}:00&enddt=${eventDetails.endDate}T${eventDetails.endTime}:00`;
                    window.open(url, '_blank');
                    break;

                case 'apple':
                case 'ics':
                    const icsContent = [
                        'BEGIN:VCALENDAR',
                        'VERSION:2.0',
                        'PRODID:-//Mittelart//FR',
                        'BEGIN:VEVENT',
                        `DTSTART:${start}`,
                        `DTEND:${end}`,
                        `SUMMARY:${eventDetails.title}`,
                        `DESCRIPTION:${eventDetails.description}`,
                        `LOCATION:${eventDetails.location}`,
                        'END:VEVENT',
                        'END:VCALENDAR'
                    ].join('\r\n');

                    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = 'mittelart-2026.ics';
                    link.click();
                    showToast('Fichier calendrier téléchargé !');
                    break;
            }
        }

        // ========== SHARE FUNCTIONS ==========
        const shareUrl = window.location.href;
        const shareUrlWhatsApp = window.location.origin + window.location.pathname + '?v=2';
        const shareTitle = "Mittel'art 2026 - Exposition Peintures & Sculptures";
        const shareText = "Découvrez la 14ème édition de Mittel'art, exposition de peintures et sculptures à Mittelhausbergen les 7 & 8 mars 2026 !";

        function shareOn(platform) {
            let url = '';

            switch(platform) {
                case 'facebook':
                    url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
                    break;
                case 'twitter':
                    url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
                    break;
                case 'whatsapp':
                    url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrlWhatsApp)}`;
                    break;
                case 'email':
                    url = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`;
                    window.location.href = url;
                    return;
            }

            window.open(url, '_blank', 'width=600,height=400');
        }

        function copyLink() {
            navigator.clipboard.writeText(shareUrl).then(() => {
                showToast('Lien copié dans le presse-papier !');
            }).catch(() => {
                // Fallback for older browsers
                const input = document.createElement('input');
                input.value = shareUrl;
                document.body.appendChild(input);
                input.select();
                document.execCommand('copy');
                document.body.removeChild(input);
                showToast('Lien copié !');
            });
        }

        // ========== TOAST NOTIFICATION ==========
        function showToast(message) {
            // Remove existing toast
            const existingToast = document.querySelector('.toast');
            if (existingToast) existingToast.remove();

            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                ${message}
            `;
            document.body.appendChild(toast);

            setTimeout(() => toast.classList.add('show'), 10);
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 400);
            }, 3000);
        }

        // ========== LIGHTBOX GALLERY ==========
        const galleryImages = [
            { title: "Mittel'art 2025", desc: "13ème édition - Vue d'ensemble" },
            { title: "Sculptures", desc: "Œuvres 3D remarquables" },
            { title: "Vernissage", desc: "Moments de convivialité" },
            { title: "Peintures", desc: "Diversité des styles" },
            { title: "Les artistes", desc: "Rencontres et échanges" }
        ];

        let currentImageIndex = 0;
        let lightbox = null;

        function createLightbox() {
            lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <button class="lightbox-close" onclick="closeLightbox()">×</button>
                    <button class="lightbox-nav lightbox-prev" onclick="navigateLightbox(-1)">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div class="lightbox-image-container"></div>
                    <button class="lightbox-nav lightbox-next" onclick="navigateLightbox(1)">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <div class="lightbox-caption"></div>
                </div>
            `;
            document.body.appendChild(lightbox);

            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) closeLightbox();
            });

            document.addEventListener('keydown', handleLightboxKeys);
        }

        function handleLightboxKeys(e) {
            if (!lightbox || !lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
        }

        function openLightbox(index) {
            if (!lightbox) createLightbox();
            currentImageIndex = index;
            updateLightboxContent();
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            if (lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        function navigateLightbox(direction) {
            currentImageIndex = (currentImageIndex + direction + galleryImages.length) % galleryImages.length;
            updateLightboxContent();
        }

        function updateLightboxContent() {
            const container = lightbox.querySelector('.lightbox-image-container');
            const caption = lightbox.querySelector('.lightbox-caption');
            const item = galleryImages[currentImageIndex];

            // Clone the SVG from the gallery
            const galleryItem = document.querySelectorAll('.gallery-item')[currentImageIndex];
            const svgClone = galleryItem.querySelector('svg').cloneNode(true);
            svgClone.style.maxWidth = '80vw';
            svgClone.style.maxHeight = '70vh';
            svgClone.style.borderRadius = '12px';

            container.innerHTML = '';
            container.appendChild(svgClone);
            caption.innerHTML = `<strong>${item.title}</strong> - ${item.desc}`;
        }

        // ========== SCROLL ANIMATIONS ==========
        function initScrollAnimations() {
            // Ajouter les classes d'animation aux éléments
            const animateElements = [
                { selector: '.section-header', class: 'scroll-animate' },
                { selector: '.about-image', class: 'scroll-animate-left' },
                { selector: '.about-content', class: 'scroll-animate-right' },
                { selector: '.about-stats .stat-item', class: 'scroll-animate-scale' },
                { selector: '.programme-card', class: 'scroll-animate' },
                { selector: '.lieu-info', class: 'scroll-animate-left' },
                { selector: '.lieu-map', class: 'scroll-animate-right' },
                { selector: '.partner-item', class: 'scroll-animate-scale' },
                { selector: '.contact-card', class: 'scroll-animate' },
                { selector: '.retour-card', class: 'scroll-animate' },
                { selector: '.founder-section', class: 'scroll-animate' },
                { selector: '.artistes-stats .stat-category', class: 'scroll-animate-scale' },
                { selector: '.artiste-item', class: 'scroll-animate-scale' }
            ];

            animateElements.forEach(item => {
                document.querySelectorAll(item.selector).forEach((el, index) => {
                    el.classList.add(item.class);
                    // Ajouter un délai pour l'effet cascade
                    if (index > 0 && index < 5) {
                        el.classList.add('delay-' + index);
                    }
                });
            });

            // Observer pour déclencher les animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            // Observer tous les éléments animables
            document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale').forEach(el => {
                observer.observe(el);
            });
        }

        // Lancer les animations au chargement
        document.addEventListener('DOMContentLoaded', initScrollAnimations);

        // ========== DYNAMIC AVATAR COLORS ==========
        function generateAvatarColors() {
            const avatars = document.querySelectorAll('.artiste-avatar');

            avatars.forEach((avatar) => {
                const initials = avatar.getAttribute('data-initials');
                if (!initials) return;

                // Generate unique colors based on initials
                const hash = initials.split('').reduce((acc, char) => {
                    return char.charCodeAt(0) + ((acc << 5) - acc);
                }, 0);

                // Create two complementary hues for gradient
                const hue1 = Math.abs(hash % 360);
                const hue2 = (hue1 + 60) % 360; // Offset by 60 degrees for harmony

                // Use high saturation and medium-high lightness for vibrant colors
                const color1 = `hsl(${hue1}, 70%, 55%)`;
                const color2 = `hsl(${hue2}, 70%, 45%)`;

                // Apply gradient
                avatar.style.background = `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
            });
        }

        // Generate avatar colors on load
        document.addEventListener('DOMContentLoaded', generateAvatarColors);

        // ========== FLIP CARDS ON CLICK ==========
        function initFlipCards() {
            const artisteItems = document.querySelectorAll('.artiste-item');

            artisteItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    // Toggle flipped class
                    this.classList.toggle('flipped');
                });
            });
        }

        // Initialize flip cards on load
        document.addEventListener('DOMContentLoaded', initFlipCards);
