# RemoveBG - AI Background Removal Tool

A modern web application for instant background removal, powered by AI and running entirely in your browser.

## 🔴 [Live Demo](https://removebg-mu-ten.vercel.app/)

## Features

- 🚀 Instant background removal
- 🔒 100% client-side processing - your images never leave your device
- 🌗 Dark/Light mode with system preference detection
- 📱 Fully responsive design
- 🆓 No signup required
- ⚡ Powered by WebAssembly for native-like performance

## Tech Stack

- **Frontend Framework:** React 18 with Vite
- **Styling:** TailwindCSS
- **Routing:** React Router v6
- **Icons:** React Icons
- **Image Processing:**
  - @imgly/background-removal
  - ONNX Runtime Web
- **Deployment:** Vercel

## Local Development

```bash
# Clone the repository
git clone [your-repo-url]

# Navigate to project directory
cd bg-Remover

# Install dependencies
npm install

# Start development server
npm run dev
```

## Performance Considerations

The application uses WebAssembly and requires Cross-Origin Isolation for optimal performance. This is configured in the Vite development server and should be maintained in production deployments.

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)

Requires WebAssembly support for core functionality.

## Credits

Built with ❤️ using open-source technologies.

## License

MIT License - feel free to use this project as you wish.
