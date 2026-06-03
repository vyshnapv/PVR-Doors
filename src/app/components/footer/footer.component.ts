import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-industrial-charcoal border-t border-gray-800 text-gray-400 py-16 relative overflow-hidden">
      <!-- Structural grid effect -->
      <div class="absolute inset-0 z-0 industrial-grid-dark opacity-5 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <!-- Logo and Short Description (4 cols) -->
        <div class="md:col-span-4 space-y-4">
          <a routerLink="/" class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-safety-orange flex items-center justify-center rounded">
              <span class="material-icons-round text-white text-2xl font-black">precision_manufacturing</span>
            </div>
            <div>
              <span class="text-xl font-black text-white tracking-tight uppercase block leading-none">P V R Metals</span>
              <span class="text-[9px] tracking-widest text-safety-orange uppercase block font-bold mt-1">Steel Fabrication</span>
            </div>
          </a>
          <p class="text-xs text-gray-400 mt-4 leading-relaxed font-light">
            We are premier metal builders and bespoke engineers, fabricating high-strength industrial structures and custom metal panels. Rooted in safety, accuracy, and longevity.
          </p>
          <!-- Social Icons -->
          <div class="flex items-center space-x-4 pt-2">
            <a href="#" class="text-gray-500 hover:text-safety-orange transition-colors" title="Facebook">
              <span class="material-icons-round text-lg">public</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-safety-orange transition-colors" title="LinkedIn">
              <span class="material-icons-round text-lg">corporate_fare</span>
            </a>
            <a href="#" class="text-gray-500 hover:text-safety-orange transition-colors" title="Instagram">
              <span class="material-icons-round text-lg">camera</span>
            </a>
          </div>
        </div>

        <!-- Address and Contact Details (4 cols) -->
        <div class="md:col-span-4 space-y-4">
          <h4 class="text-white font-extrabold uppercase tracking-widest text-xs border-b border-gray-800 pb-3">
            Facility Address
          </h4>
          <p class="text-xs leading-relaxed font-light">
            cherali i oc, NH Padikkal,<br/>
            P.O. Velimukku, Malappuram - 676317,<br/>
            Kerala, India
          </p>
          <div class="space-y-1.5 pt-2 text-xs font-light">
            <div class="flex items-center text-gray-300">
              <span class="material-icons-round text-sm text-safety-orange mr-2">phone</span>
              <span>+91 98471 23456</span>
            </div>
            <div class="flex items-center text-gray-300">
              <span class="material-icons-round text-sm text-safety-orange mr-2">email</span>
              <span>info&#64;pvrmetals.com</span>
            </div>
          </div>
        </div>

        <!-- Links & Operational Hours (4 cols) -->
        <div class="md:col-span-4 grid grid-cols-2 gap-8">
          <!-- Links -->
          <div class="space-y-4">
            <h4 class="text-white font-extrabold uppercase tracking-widest text-xs border-b border-gray-800 pb-3">
              Quick Links
            </h4>
            <nav class="flex flex-col space-y-2 text-xs">
              <a routerLink="/" class="hover:text-white transition-colors">Home</a>
              <a routerLink="/about" class="hover:text-white transition-colors">About Us</a>
              <a routerLink="/services" class="hover:text-white transition-colors">Services</a>
              <a routerLink="/contact" class="hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

          <!-- Operational Hours -->
          <div class="space-y-4">
            <h4 class="text-white font-extrabold uppercase tracking-widest text-xs border-b border-gray-800 pb-3">
              Hours
            </h4>
            <p class="text-xs leading-relaxed font-light">
              Mon – Sat:<br/>
              08:30 AM – 08:00 PM
            </p>
            <span class="inline-block text-[10px] text-safety-orange font-bold uppercase tracking-wider bg-safety-orange/5 border border-safety-orange/20 px-2 py-0.5 rounded">
              Open until 8 PM
            </span>
          </div>
        </div>
      </div>

      <!-- Copyright Sub-bar -->
      <div class="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>&copy; 2026 P V R Metals. All rights reserved.</span>
        <div class="space-x-4">
          <a href="#" class="hover:underline">Privacy Policy</a>
          <span>&middot;</span>
          <a href="#" class="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
