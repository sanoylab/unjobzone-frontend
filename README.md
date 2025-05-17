# UN Job Zone Frontend

A modern, responsive web application for browsing and applying to United Nations job opportunities. Built with React and designed to provide a seamless experience for job seekers.

## 🚀 Features

- **Job Listings**: Browse through available UN job opportunities
- **Detailed Job Views**: Comprehensive job descriptions with all necessary information
- **Application Tracking**: Clear visibility of application deadlines and status
- **Organization Profiles**: View department/organization details
- **Social Sharing**: Share job opportunities across various platforms
- **Responsive Design**: Optimized for all device sizes
- **Real-time Status**: Visual indicators for application deadlines (Ending Soon, Expired)

## 🛠️ Tech Stack

- React
- React Router
- Marked (for Markdown rendering)
- Font Awesome Icons
- Modern CSS (with inline styles for component-specific styling)
- Environment Variables (Vite)

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/unjobzone-frontend.git
cd unjobzone-frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
VITE_APP_URI=your_api_base_url
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` (or your configured port).

## 🏗️ Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── Api.js         # API integration
└── ...
```

## 🎨 Features in Detail

### Job Listings
- Browse available positions
- Filter and search capabilities
- Clear categorization of jobs

### Job Details
- Comprehensive job descriptions
- Application deadlines with visual indicators
- Organization information
- Direct application links
- Social sharing options

### User Experience
- Clean, modern interface
- Responsive design for all devices
- Intuitive navigation
- Clear status indicators for job postings

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- United Nations for providing the job data
- All contributors who have helped shape this project
