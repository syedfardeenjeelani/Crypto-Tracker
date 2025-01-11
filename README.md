# KoinX - Frontend Intern Assignment

## Project Overview

This project is a submission for the KoinX Frontend Intern Assignment. It implements the Figma design provided in the assignment using **React.js** with **Next.js** framework. The application is designed to display cryptocurrency data dynamically, integrating data from the **CoinGecko API** and includes responsive components as specified.
 

## Key Features

### 1. **API Integrations**
- **Bitcoin Price Data**
  - Uses `/simple/price` endpoint from the **CoinGecko API** to fetch the price of Bitcoin in both **USD** and **INR**, along with the 24-hour percentage price change.
- **Trending Coins (24h)**
  - Integrates **CoinGecko's `/search/trending`** endpoint to display the top 3 trending cryptocurrencies.
- **Dynamic Price Graph**
  - Displays the price graph of trending coins using the `sparkline` property from the **Trending Coins** API response.

### 2. **TradingView Advanced Chart Widget**
- Embedded the **TradingView Advanced Chart Widget** for the BTC/USD chart with customization to match the Figma design.

### 3. **Responsive Design**
- Components are styled to be fully responsive, adhering to the specifications in the Figma design.
- Utilized **Tailwind CSS** for consistent styling and responsiveness.

### 4. **You May Also Like Section**
- Implemented a horizontally scrollable carousel displaying trending coins.
- Used **Swiper.js** for seamless carousel functionality and responsiveness.

### 5. **Scalability**
- The application uses **Redux Toolkit (RTK)** for state management, ensuring scalability and clean separation of concerns.
- Utilized **Chart.js** for rendering dynamic charts where necessary.

---

## Getting Started

### **Setup Instructions**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository/koinx-frontend-assignment.git
   cd koinx-frontend-assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add the following:
     ```env
     NEXT_PUBLIC_COINGECKO_APIKEY=your_coingecko_api_key
     ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open the application:
   - The app will be running at [http://localhost:3000](http://localhost:3000).

---

## Tools and Libraries Used

- **React.js** and **Next.js**: For building the frontend application.
- **Tailwind CSS**: For styling and ensuring responsive design.
- **Redux Toolkit (RTK)**: For efficient and scalable state management.
- **Chart.js**: For creating dynamic and interactive charts.
- **Swiper.js**: For implementing responsive carousels.
- **TradingView Widgets**: For embedding live cryptocurrency charts.

---

## Notes

- To replicate the setup locally, ensure you have a valid **CoinGecko API key** in the `.env.local` file.
- Codebase follows best practices for clean and maintainable code.
- Commits are structured and named clearly for better version control understanding.

---

### Future Improvements

- Extend the functionality to dynamically fetch data for any cryptocurrency based on the URL (e.g., `/bitcoin`, `/ethereum`).
- Add more comprehensive test coverage using **Jest** or **React Testing Library**.
- Optimize performance for larger datasets using server-side rendering (SSR) or static site generation (SSG).

---

Thank you for reviewing my submission! Feel free to reach out for any clarifications. 😊