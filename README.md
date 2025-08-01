# AI-Folio Portfolio

A modern, responsive portfolio website built with React and TypeScript, showcasing AI/ML projects, skills, and professional experience.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth transitions and animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Sections**:
  - About Me
  - Resume with Education & Experience
  - Project Portfolio with filtering
  - Contact Form with EmailJS integration
- **Tech Stack Showcase**: Visual representation of technical skills
- **Project Filtering**: Categorize projects by type (AI/ML, Java, Web Design, etc.)
- **Contact Integration**: Integrated contact form with EmailJS for direct communication

## 🛠️ Technologies Used

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email Integration**: EmailJS
- **Deployment**: Vercel
- **Version Control**: Git

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Mohanty-Hitesh-4495/personal_portfolio_website.git
```

2. Navigate to the project directory:
```bash
cd personal_portfolio_website
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env` file in the root directory and add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Start the development server:
```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── AboutSection.tsx
│   ├── BlogSection.tsx
│   ├── ContactSection.tsx
│   ├── Navbar.tsx
│   ├── PortfolioSection.tsx
│   └── ResumeSection.tsx
├── hooks/
│   └── use-toast.ts
├── lib/
│   └── utils.ts
└── App.tsx
```

## 🎨 Customization

### Colors
The portfolio uses a custom color scheme defined in the Tailwind configuration. You can modify the colors in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      'portfolio-primary': '#4F46E5',
      'portfolio-dark': '#1F2937',
      'portfolio-text-light': '#6B7280',
      'portfolio-text-dark': '#374151',
    }
  }
}
```

### Content
- Update personal information in respective section components
- Modify project details in `PortfolioSection.tsx`
- Edit skills and experience in `ResumeSection.tsx`
- Customize contact information in `ContactSection.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile devices
- Tablets
- Desktop screens
- Large displays

## 🔧 Configuration

### EmailJS Setup
1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Create an email template
3. Get your Service ID, Template ID, and Public Key
4. Add them to your `.env` file

## 🚀 Deployment

The portfolio can be easily deployed to Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Mohanty-Hitesh-4495/personal_portfolio_website/blob/main/LICENSE) file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For any questions or suggestions, please reach out through:
- Email: mohantyhitesh4495@gmail.com

---

Made with ❤️ by Mohanty Hitesh
