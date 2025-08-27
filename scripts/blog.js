// Blog Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const blogGrid = document.getElementById('blog-grid');
    const newsletterForm = document.getElementById('newsletter-form');
    
    let currentPage = 1;
    let isLoading = false;
    let hasMorePosts = true;

    // Sample blog posts data for infinite scroll
    const samplePosts = [
        {
            title: "The Future of Web Development",
            excerpt: "Exploring emerging technologies and trends that will shape the future of web development, from AI integration to advanced CSS features.",
            date: "February 10, 2024",
            category: "Technology",
            tags: ["Web Development", "Future", "AI"],
            image: "Future Tech"
        },
        {
            title: "Designing for Accessibility",
            excerpt: "Best practices for creating inclusive web experiences that work for everyone, regardless of their abilities or disabilities.",
            date: "February 5, 2024",
            category: "Design",
            tags: ["Accessibility", "UX", "Inclusive Design"],
            image: "Accessibility Design"
        },
        {
            title: "Optimizing Website Performance",
            excerpt: "Practical tips and techniques for improving website speed and performance, from image optimization to code splitting.",
            date: "January 30, 2024",
            category: "Development",
            tags: ["Performance", "Optimization", "Speed"],
            image: "Performance Optimization"
        },
        {
            title: "Building a Design System",
            excerpt: "How to create and maintain a comprehensive design system that ensures consistency across your projects and team.",
            date: "January 25, 2024",
            category: "Design",
            tags: ["Design System", "Consistency", "Components"],
            image: "Design System"
        },
        {
            title: "JavaScript Best Practices",
            excerpt: "Essential JavaScript patterns and practices that every developer should know for writing clean, maintainable code.",
            date: "January 20, 2024",
            category: "Development",
            tags: ["JavaScript", "Best Practices", "Code Quality"],
            image: "JavaScript Code"
        },
        {
            title: "The Psychology of Color in Design",
            excerpt: "Understanding how color choices influence user behavior and emotions in web design and branding.",
            date: "January 15, 2024",
            category: "Design",
            tags: ["Color Theory", "Psychology", "Branding"],
            image: "Color Psychology"
        }
    ];

    // Load More Posts Function
    function loadMorePosts() {
        if (isLoading || !hasMorePosts) return;

        isLoading = true;
        const btnText = loadMoreBtn.querySelector('.btn-text');
        const loadingSpinner = loadMoreBtn.querySelector('.loading-spinner');

        // Show loading state
        btnText.style.display = 'none';
        loadingSpinner.style.display = 'inline-block';
        loadMoreBtn.disabled = true;

        // Simulate API call delay
        setTimeout(() => {
            // Calculate which posts to show
            const startIndex = (currentPage - 1) * 6;
            const endIndex = startIndex + 6;
            const postsToShow = samplePosts.slice(startIndex, endIndex);

            if (postsToShow.length === 0) {
                hasMorePosts = false;
                loadMoreBtn.style.display = 'none';
                return;
            }

            // Add new posts to the grid
            postsToShow.forEach((post, index) => {
                const postElement = createBlogPost(post);
                postElement.classList.add('new-post');
                blogGrid.appendChild(postElement);

                // Trigger animation after a small delay
                setTimeout(() => {
                    postElement.classList.remove('new-post');
                }, index * 100);
            });

            currentPage++;
            isLoading = false;

            // Hide loading state
            btnText.style.display = 'inline';
            loadingSpinner.style.display = 'none';
            loadMoreBtn.disabled = false;

            // Check if we've loaded all posts
            if (endIndex >= samplePosts.length) {
                hasMorePosts = false;
                loadMoreBtn.style.display = 'none';
            }
        }, 1000);
    }

    // Create Blog Post Element
    function createBlogPost(post) {
        const article = document.createElement('article');
        article.className = 'blog-post';
        
        article.innerHTML = `
            <div class="post-image">
                <div class="placeholder">${post.image}</div>
            </div>
            <div class="post-content">
                <div class="post-meta">
                    <span class="post-date">${post.date}</span>
                    <span class="post-category">${post.category}</span>
                </div>
                <h2 class="post-title">${post.title}</h2>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;

        // Add click event for post interaction
        article.addEventListener('click', function() {
            // You can add navigation to full post here
            console.log('Clicked on post:', post.title);
        });

        return article;
    }

    // Load More Button Event Listener
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMorePosts);
    }

    // Newsletter Form Handling
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (!email) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Subscribing...';
            submitBtn.disabled = true;

            setTimeout(() => {
                showNotification('Thank you for subscribing! You\'ll receive updates soon.', 'success');
                emailInput.value = '';
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Notification System
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;

        // Set background color based on type
        if (type === 'success') {
            notification.style.background = '#28a745';
        } else if (type === 'error') {
            notification.style.background = '#dc3545';
        } else {
            notification.style.background = '#007bff';
        }

        // Add to page
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 5000);
    }

    // Intersection Observer for infinite scroll (alternative to button)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px 100px 0px'
    };

    const scrollObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && hasMorePosts && !isLoading) {
                loadMorePosts();
            }
        });
    }, observerOptions);

    // Observe the load more button for infinite scroll
    if (loadMoreBtn) {
        scrollObserver.observe(loadMoreBtn);
    }

    // Add hover effects for blog posts
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.blog-post')) {
            const post = e.target.closest('.blog-post');
            post.style.transform = 'translateY(-5px) scale(1.02)';
        }
    });

    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.blog-post')) {
            const post = e.target.closest('.blog-post');
            post.style.transform = 'translateY(0) scale(1)';
        }
    });

    // Add keyboard navigation for accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && document.activeElement.closest('.blog-post')) {
            const post = document.activeElement.closest('.blog-post');
            post.click();
        }
    });

    // Make blog posts focusable for keyboard navigation
    document.querySelectorAll('.blog-post').forEach(post => {
        post.setAttribute('tabindex', '0');
        post.setAttribute('role', 'button');
        post.setAttribute('aria-label', 'Read blog post: ' + post.querySelector('.post-title').textContent);
    });
});
