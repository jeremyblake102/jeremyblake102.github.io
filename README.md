# Jeremy Blake - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a clean design that works seamlessly on both desktop and mobile devices.

## 🌟 Features

- **Responsive Design**: Optimized for all screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Multiple Pages**: Home, About, Work, and Blog sections
- **Interactive Elements**: Hover effects, smooth scrolling, and animations
- **Project Filtering**: Filter projects by category on the Work page
- **Infinite Scroll**: Tumblr-style blog with load more functionality
- **Newsletter Signup**: Email subscription form
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Accessibility**: Keyboard navigation and screen reader support

## 📁 Project Structure

```
portfolio/
├── index.html              # Home page
├── about.html              # About page
├── work.html               # Work/Projects page
├── blog.html               # Blog page
├── styles/
│   ├── main.css           # Main stylesheet
│   ├── about.css          # About page styles
│   ├── work.css           # Work page styles
│   └── blog.css           # Blog page styles
├── scripts/
│   ├── main.js            # Main JavaScript functionality
│   ├── work.js            # Work page functionality
│   └── blog.js            # Blog page functionality
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Git (for version control)

### Installation

1. **Clone or Download the Project**
   ```bash
   git clone <your-repository-url>
   cd portfolio
   ```

2. **Open in Browser**
   - Double-click `index.html` to open in your default browser
   - Or use a local server for better development experience

3. **Local Development Server** (Optional)
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

## 🎨 Customization

### Personal Information

1. **Update Personal Details**
   - Edit `index.html` to change your name, title, and description
   - Update the hero section with your own introduction
   - Replace placeholder text with your actual content

2. **Add Your Photo**
   - Replace the placeholder divs with actual images
   - Recommended size: 300x300px for hero image, 250x250px for about page
   - Use formats: JPG, PNG, or WebP for best performance

3. **Update Contact Information**
   - Replace placeholder email addresses and social media links
   - Update the contact section with your actual information

### Projects and Work

1. **Add Your Projects**
   - Edit `work.html` to add your actual projects
   - Replace placeholder images with project screenshots
   - Update project descriptions, technologies used, and links

2. **Customize Project Categories**
   - Modify the filter buttons in `work.html`
   - Update the `data-category` attributes on project cards
   - Adjust the filtering logic in `scripts/work.js` if needed

### Blog Content

1. **Add Blog Posts**
   - Edit `blog.html` to add your actual blog posts
   - Replace placeholder content with your articles
   - Update the sample posts array in `scripts/blog.js`

2. **Customize Blog Categories**
   - Modify the post categories and tags
   - Update the newsletter form functionality if needed

### Styling

1. **Color Scheme**
   - Edit CSS variables in `styles/main.css`
   - Primary colors are defined in the `:root` selector
   - Update gradients and accent colors as needed

2. **Typography**
   - The site uses Inter font from Google Fonts
   - You can change the font by updating the Google Fonts link in HTML files
   - Adjust font sizes and weights in the CSS files

## 🌐 Deployment

### GitHub Pages

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click Save

3. **Custom Domain** (Optional)
   - In the Pages settings, add your custom domain
   - Create a `CNAME` file in the root directory with your domain
   - Update your domain's DNS settings to point to GitHub Pages

### Other Hosting Options

- **Netlify**: Drag and drop the folder to deploy
- **Vercel**: Connect your GitHub repository for automatic deployment
- **Firebase Hosting**: Use Firebase CLI to deploy
- **Traditional Web Hosting**: Upload files via FTP

## 📱 Mobile Optimization

The website is fully responsive and optimized for mobile devices:

- **Touch-friendly navigation**
- **Optimized images and layouts**
- **Fast loading times**
- **Accessible design**

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them with the community!

## 📞 Support

If you have any questions or need help customizing your portfolio:

1. Check the comments in the code files
2. Review the customization section above
3. Open an issue in the repository

## 🎯 Next Steps

After setting up your portfolio:

1. **Add Real Content**: Replace all placeholder text and images
2. **Optimize Images**: Compress images for faster loading
3. **Add Analytics**: Integrate Google Analytics or similar
4. **SEO Optimization**: Add meta tags and structured data
5. **Performance**: Optimize CSS and JavaScript files
6. **Testing**: Test on different devices and browsers

---

**Happy coding! 🚀**
