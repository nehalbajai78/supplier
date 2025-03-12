import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base:"/partner/ui"
  // server: {
  //   proxy: {
  //     "/partner/api": {
  //       target: "http://localhost:8081",
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:8080",
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
  // server: {
  //   port: 5174, // Ensure you know your frontend port
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:8081", // Backend API
  //       changeOrigin: true,
  //       secure: false,
  //       // rewrite: (path) => path.replace(/^\/api/, "/api"),
  //     },
  //   },
  // },
})
