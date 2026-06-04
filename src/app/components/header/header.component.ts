import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header 
      [ngClass]="{ 
        'bg-gradient-to-r from-industrial-charcoal to-industrial-dark border-b border-safety-orange/20': variant === 'alternative', 
        'bg-industrial-dark/95 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3 border-b border-white/10 backdrop-blur-md': isScrolled && variant === 'default', 
        'bg-industrial-dark/75 py-5 border-b border-white/5 backdrop-blur-sm': !isScrolled && variant === 'default' 
      }"
      class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    >
      <!-- Glowing safety accent bar at the top -->
      <div class="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-safety-orange via-safety-amber to-safety-orange shadow-[0_1px_15px_rgba(255,107,0,0.5)] z-50"></div>

      <div class="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        
        <!-- Logo (Horizontal layout, sleek and bold) -->
        <a routerLink="/" class="flex items-center space-x-3 group relative leading-none">
          <!-- Stylized industrial steel badge -->
          <div class="relative flex items-center justify-center">
            <!-- Hexagonal or skewed steel plate look -->
            <div class="px-4 py-2 bg-gradient-to-r from-safety-orange to-safety-amber text-white font-extrabold text-2xl tracking-wider rounded-md transform -skew-x-12 shadow-lg shadow-safety-orange/20 group-hover:scale-105 group-hover:shadow-safety-orange/40 transition-all duration-300">
              PVR
            </div>
            <!-- Accent dot -->
            <div class="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full border border-industrial-dark animate-pulse"></div>
          </div>
          <div class="flex flex-col justify-start leading-none">
            <span class="text-xl font-black tracking-widest text-white group-hover:text-safety-orange transition-colors duration-300">METALS</span>
            <span class="text-[8px] tracking-[0.3em] text-gray-400 font-semibold uppercase mt-0.5">ESTD. 2012</span>
          </div>
        </a>

        <!-- Desktop Navigation Links (Industrial Premium Style) -->
        <nav class="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <a routerLink="/" routerLinkActive="text-safety-orange" [routerLinkActiveOptions]="{exact: true}" class="relative text-xs font-bold text-gray-300 hover:text-white uppercase tracking-widest transition-colors py-2 cursor-pointer group/nav">
            Home
            <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-safety-orange transition-all duration-300 group-hover/nav:w-full"></span>
          </a>

          <a routerLink="/services" routerLinkActive="text-safety-orange" class="relative text-xs font-bold text-gray-300 hover:text-white uppercase tracking-widest transition-colors py-2 cursor-pointer group/nav">
            Services
            <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-safety-orange transition-all duration-300 group-hover/nav:w-full"></span>
          </a>
          <a routerLink="/works" routerLinkActive="text-safety-orange" class="relative text-xs font-bold text-gray-300 hover:text-white uppercase tracking-widest transition-colors py-2 cursor-pointer group/nav">
            Our Works
            <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-safety-orange transition-all duration-300 group-hover/nav:w-full"></span>
          </a>
          <a routerLink="/about" routerLinkActive="text-safety-orange" class="relative text-xs font-bold text-gray-300 hover:text-white uppercase tracking-widest transition-colors py-2 cursor-pointer group/nav">
            Who We Are
            <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-safety-orange transition-all duration-300 group-hover/nav:w-full"></span>
          </a>
          <a routerLink="/contact" routerLinkActive="text-safety-orange" class="relative text-xs font-bold text-gray-300 hover:text-white uppercase tracking-widest transition-colors py-2 cursor-pointer group/nav">
            Contact
            <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-safety-orange transition-all duration-300 group-hover/nav:w-full"></span>
          </a>
        </nav>
        <!-- Right Side Desktop Group (CTA) -->
        <div class="hidden lg:flex items-center space-x-4">
          <a 
            routerLink="/contact" 
            class="inline-flex items-center justify-center bg-gradient-to-r from-safety-orange to-safety-amber text-white font-extrabold text-[10px] tracking-widest uppercase px-5 py-2.5 rounded-lg shadow-md hover:shadow-safety-orange/20 transition-all duration-300 hover:-translate-y-0.5 border border-safety-orange/30">
            <span>Get a Quote</span>
            <span class="material-icons-round text-xs ml-1.5">arrow_forward</span>
          </a>
        </div>


        <!-- Right Side Mobile Group (Search + Hamburger) -->
        <div class="flex lg:hidden items-center space-x-2">

          
          <!-- Mobile Menu Trigger Button -->
          <button 
            (click)="toggleMobileMenu()" 
            class="text-white flex items-center justify-center p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <span class="material-icons-round text-2xl block">
              {{ isMobileMenuOpen ? 'close' : 'menu' }}
            </span>
          </button>
        </div>

        <!-- Inline Search bar overlay -->
        @if (isSearchOpen) {
          <div class="absolute right-6 lg:right-48 top-1/2 -translate-y-1/2 bg-industrial-dark border border-white/20 rounded-lg flex items-center px-3 py-1.5 z-50 animate-fade-in shadow-2xl">
            <input 
              #searchInput
              type="text" 
              placeholder="Search site..." 
              class="bg-transparent text-xs text-white placeholder-gray-400 focus:outline-none w-36 md:w-48 py-0.5 px-1"
              (keyup.enter)="executeSearch(searchInput.value)"
            />
            <button (click)="toggleSearch()" class="text-gray-400 hover:text-white ml-2 flex items-center justify-center">
              <span class="material-icons-round text-sm">close</span>
            </button>
          </div>
        }
      </div>

      <!-- Mobile Navigation Drawer -->
      @if (isMobileMenuOpen) {
        <div class="lg:hidden bg-industrial-dark/98 backdrop-blur-xl border-t border-white/10 py-6 px-6 space-y-6 animate-fade-in absolute w-full left-0 top-[100%] shadow-2xl">
          <nav class="flex flex-col space-y-4">
            <a routerLink="/" (click)="closeMobileMenu()" routerLinkActive="text-safety-orange" [routerLinkActiveOptions]="{exact: true}" class="text-xs font-bold text-gray-300 hover:text-white uppercase tracking-widest py-2 border-b border-white/5 transition-colors">Home</a>
            


            <a routerLink="/services" (click)="closeMobileMenu()" routerLinkActive="text-safety-orange" class="text-xs font-bold text-gray-300 hover:text-white uppercase tracking-widest py-2 border-b border-white/5 transition-colors">Services</a>
            <a routerLink="/works" (click)="closeMobileMenu()" routerLinkActive="text-safety-orange" class="text-xs font-bold text-gray-300 hover:text-white uppercase tracking-widest py-2 border-b border-white/5 transition-colors">Our Works</a>
            <a routerLink="/about" (click)="closeMobileMenu()" routerLinkActive="text-safety-orange" class="text-xs font-bold text-gray-300 hover:text-white uppercase tracking-widest py-2 border-b border-white/5 transition-colors">Who We Are</a>
            <a routerLink="/contact" (click)="closeMobileMenu()" routerLinkActive="text-safety-orange" class="text-xs font-bold text-gray-300 hover:text-white uppercase tracking-widest py-2 border-b border-white/5 transition-colors">Contact</a>
          </nav>
          
          <!-- Mobile CTA Button -->
          <div class="pt-2">
            <a 
              routerLink="/contact" 
              (click)="closeMobileMenu()"
              class="w-full inline-flex items-center justify-center bg-gradient-to-r from-safety-orange to-safety-amber text-white font-extrabold text-xs tracking-widest uppercase py-3.5 rounded-lg shadow-lg"
            >
              <span>Get a Free Quote</span>
              <span class="material-icons-round text-sm ml-2">arrow_forward</span>
            </a>
          </div>
        </div>
      }
    </header>
  `
})
export class HeaderComponent {
  @Input() variant: 'default' | 'alternative' = 'default';
  isScrolled = false;
  isMobileMenuOpen = false;
  isSearchOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  executeSearch(val: string) {
    if (val.trim()) {
      alert('Searching site for: "' + val + '"');
      this.isSearchOpen = false;
    }
  }
}

