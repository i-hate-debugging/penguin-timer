// Set the target date: August 2nd, 2025 at 1:00 PM PST
const targetDate = new Date('August 2, 2025 13:00:00 PST').getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the display
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // Add pulse animation to seconds for extra effect
    const secondsElement = document.getElementById('seconds');
    secondsElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        secondsElement.style.transform = 'scale(1)';
    }, 100);

    // If the countdown is finished
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        
        // Show celebration message
        const content = document.querySelector('.content');
        content.innerHTML = `
            <div class="celebration">
                <h1 class="title">🎉 It's Time! 🎉</h1>
                <p class="subtitle">The moment we've been waiting for has arrived!</p>
                <div class="love-message">
                    <p>PizzaPenguin, I love you! 💕</p>
                </div>
            </div>
        `;
    }
}, 1000);

// Add some extra romantic effects
document.addEventListener('DOMContentLoaded', function() {
    // Add sparkle effect to the title
    const title = document.querySelector('.title');
    title.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    title.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    // Add click effect to countdown items
    const countdownItems = document.querySelectorAll('.countdown-item');
    countdownItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
        });
    });

    // Create additional floating hearts on click
    document.addEventListener('click', function(e) {
        if (e.target.closest('.container')) return; // Don't create hearts when clicking on main content
        
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.fontSize = '2rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.animation = 'clickHeart 1s ease-out forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            document.body.removeChild(heart);
        }, 1000);
    });
});

// Add CSS for click heart animation
const style = document.createElement('style');
style.textContent = `
    @keyframes clickHeart {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    .celebration {
        text-align: center;
        padding: 2rem;
    }
    
    .celebration .title {
        font-size: 4rem;
        margin-bottom: 2rem;
        animation: celebrate 1s ease-in-out infinite alternate;
    }
    
    @keyframes celebrate {
        from { transform: scale(1) rotate(-2deg); }
        to { transform: scale(1.1) rotate(2deg); }
    }
`;
document.head.appendChild(style); 