import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-8 border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Column 1 */}
          <div>
            <h5 className="font-bold text-gray-800 dark:text-white mb-4">Midgard</h5>
            <ul>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">Alfheim</li>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">Helheim</li>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">Muspelheim</li>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">Niflheim</li>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">Asgard</li>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">Vanaheim</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h5 className="font-bold text-gray-800 dark:text-white mb-4">Battle Preparations</h5>
            <ul>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">Weapons & Armor</li>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">Skills & Abilities</li>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">Rune Crafting</li>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">Valkyrie Challenges</li>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">Boss Strategies</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h5 className="font-bold text-gray-800 dark:text-white mb-4">Legendary Tales</h5>
            <ul>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">Lore & Mythology</li>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">The Saga of Kratos</li>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">Gods & Beasts</li>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">Prophecies & Secrets</li>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">The World Tree</li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h5 className="font-bold text-gray-800 dark:text-white mb-4">The Journey</h5>
            <ul>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">News & Updates</li>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">Meet the Creators</li>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">Join the Community</li>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">Events & Competitions</li>
              <li className="mb-2 hover:text-gray-800 dark:hover:text-white">Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 God of War Universe. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/" className="text-sm hover:underline">Privacy Policy</a>
              <a href="/" className="text-sm hover:underline">Terms of Use</a>
              <a href="/" className="text-sm hover:underline">Legal</a>
              <a href="/" className="text-sm hover:underline">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
