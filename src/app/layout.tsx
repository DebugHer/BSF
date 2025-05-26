import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scholarship Program",
  description: "Apply for our scholarship program and transform your future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p>Email: info@scholarshipprogram.com</p>
                <p>Phone: (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/about" className="hover:text-blue-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/apply" className="hover:text-blue-400">
                      Apply Now
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-blue-400">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-400">
                    Twitter
                  </a>
                  <a href="#" className="hover:text-blue-400">
                    LinkedIn
                  </a>
                  <a href="#" className="hover:text-blue-400">
                    Facebook
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p>&copy; {new Date().getFullYear()} Scholarship Program. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
