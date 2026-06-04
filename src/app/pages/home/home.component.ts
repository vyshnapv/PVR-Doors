import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Slide {
  image: string;
  category: string;
  title: string;
  subtitle: string;
  actionText: string;
  link: string;
  tabLabel: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Redesigned Hero Section (New Premium Glassmorphic style) -->
    <section class="relative h-[90vh] flex items-center overflow-hidden bg-black text-white pt-16">
      
      <!-- Carousel Slides with Slow-Motion transitions & Ken Burns zoom -->
      <div class="absolute inset-0 z-0">
        @for (slide of slides; track $index) {
          <div 
            class="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
            [ngClass]="activeSlideIndex === $index ? 'opacity-100 z-10' : 'opacity-0 z-0'"
          >
            <img 
              [src]="slide.image" 
              [alt]="slide.title" 
              class="w-full h-full object-cover opacity-60 transition-transform duration-[5000ms] ease-out"
              [ngClass]="activeSlideIndex === $index ? 'scale-110' : 'scale-100'"
            />
            <!-- Dark Vignette Overlays for readability -->
            <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-black/30"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        }
      </div>

      <!-- Structural Grid Accents -->
      <div class="absolute inset-0 z-10 industrial-grid-dark opacity-10 pointer-events-none"></div>

      <!-- Content Container -->
      <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full flex items-center py-12">
        
        <!-- Premium Glassmorphic Content Card -->
        <div class="max-w-2xl bg-black/40 backdrop-blur-xl border border-white/10 p-8 sm:p-12 rounded-2xl shadow-2xl space-y-6 relative overflow-hidden border-t-4 border-t-safety-orange animate-fade-in">
          
          <!-- Glowing category dot and tag -->
          <div class="flex items-center space-x-2.5 text-xs sm:text-sm font-extrabold tracking-widest text-safety-orange uppercase">
            <span class="w-2.5 h-2.5 rounded-full bg-safety-orange shadow-[0_0_10px_#FF6B00] animate-pulse"></span>
            <span>{{ slides[activeSlideIndex].category }}</span>
          </div>
          
          <!-- Large Heading -->
          <h1 class="text-3xl sm:text-5xl font-black text-white leading-tight font-sans tracking-tight drop-shadow-lg">
            {{ slides[activeSlideIndex].title }}
          </h1>
          
          <!-- Subtitle / Description -->
          <p class="text-sm sm:text-base text-gray-300 font-normal leading-relaxed drop-shadow">
            {{ slides[activeSlideIndex].subtitle }}
          </p>
          
          <!-- CTA Button -->
          <div class="pt-2">
            <a 
              [routerLink]="slides[activeSlideIndex].link" 
              class="inline-flex items-center justify-center bg-safety-orange hover:bg-safety-amber text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 rounded-lg shadow-lg hover:shadow-safety-orange/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>{{ slides[activeSlideIndex].actionText }}</span>
              <span class="material-icons-round text-sm ml-2">arrow_forward</span>
            </a>
          </div>
          
        </div>
      </div>



      <!-- Bottom Slider Navigation Overlay -->
      <div class="absolute bottom-8 left-6 right-6 md:left-12 md:right-12 z-30 flex items-end justify-between border-t border-white/10 pt-6">
        <div class="flex items-center space-x-6 md:space-x-12 overflow-x-auto pb-2 scrollbar-none">
          @for (slide of slides; track $index) {
            <button 
              (click)="setSlide($index)" 
              class="text-left group focus:outline-none flex-shrink-0"
            >
              <span 
                class="block text-xs font-black uppercase tracking-widest transition-colors duration-300"
                [ngClass]="activeSlideIndex === $index ? 'text-safety-orange' : 'text-gray-400 group-hover:text-white'"
              >
                0{{ $index + 1 }} / {{ slide.tabLabel }}
              </span>
              <div class="mt-2 w-24 sm:w-32 md:w-40 h-[3px] bg-white/10 rounded-full overflow-hidden relative">
                <!-- Active progress bar filling up over 5 seconds -->
                @if (activeSlideIndex === $index) {
                  <div 
                    class="absolute top-0 left-0 h-full bg-safety-orange"
                    [ngClass]="isPlaying ? 'progress-fill-active' : 'w-full'"
                  ></div>
                } @else {
                  <div class="absolute top-0 left-0 h-full bg-safety-orange w-0"></div>
                }
              </div>
            </button>
          }
        </div>

      </div>
    </section>

    <!-- Trust Factors & Features -->
    <section class="relative z-20 -mt-16 max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Feature 1 -->
        <div class="glass-panel-dark text-white p-8 rounded-lg shadow-xl border-l-4 border-safety-orange flex items-start space-x-4 transform hover:-translate-y-1 transition-all duration-300">
          <div class="bg-safety-orange/10 p-3 rounded text-safety-orange">
            <span class="material-icons-round text-3xl">construction</span>
          </div>
          <div>
            <h3 class="text-2xl font-bold tracking-tight text-white">14+ Years</h3>
            <p class="text-sm text-gray-400 mt-1 uppercase tracking-wider font-semibold">Of Business Legacy</p>
            <p class="text-gray-300 text-xs mt-2 leading-relaxed">Delivering reliable structure layouts, heavy industrial setups, and trusted local builds since 2012.</p>
          </div>
        </div>
        
        <!-- Feature 2 -->
        <div class="glass-panel-dark text-white p-8 rounded-lg shadow-xl border-l-4 border-safety-orange flex items-start space-x-4 transform hover:-translate-y-1 transition-all duration-300">
          <div class="bg-safety-orange/10 p-3 rounded text-safety-orange">
            <span class="material-icons-round text-3xl">star_rate</span>
          </div>
          <div>
            <h3 class="text-2xl font-bold tracking-tight text-white">4.3 Star Rating</h3>
            <p class="text-sm text-gray-400 mt-1 uppercase tracking-wider font-semibold">Customer Rated Service</p>
            <div class="flex items-center space-x-1 mt-1 text-safety-orange">
              <span class="material-icons-round text-sm">star</span>
              <span class="material-icons-round text-sm">star</span>
              <span class="material-icons-round text-sm">star</span>
              <span class="material-icons-round text-sm">star</span>
              <span class="material-icons-round text-sm">star_half</span>
            </div>
            <p class="text-gray-300 text-xs mt-2 leading-relaxed">High ratings for quality assurance, welding strength, and prompt custom deliveries across Kerala.</p>
          </div>
        </div>
        
        <!-- Feature 3 -->
        <div class="glass-panel-dark text-white p-8 rounded-lg shadow-xl border-l-4 border-safety-orange flex items-start space-x-4 transform hover:-translate-y-1 transition-all duration-300">
          <div class="bg-safety-orange/10 p-3 rounded text-safety-orange">
            <span class="material-icons-round text-3xl">verified</span>
          </div>
          <div>
            <h3 class="text-2xl font-bold tracking-tight text-white">Precision QA</h3>
            <p class="text-sm text-gray-400 mt-1 uppercase tracking-wider font-semibold">Industrial Quality Control</p>
            <p class="text-gray-300 text-xs mt-2 leading-relaxed">Every weld, cut, and structural joint passes rigid inspection protocols to guarantee lifetime endurance.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Intro & About Summary Section -->
    <section class="py-24 bg-industrial-offwhite relative overflow-hidden">
      <!-- Background structural line -->
      <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200/50 -translate-y-1/2 pointer-events-none"></div>
      
      <div class="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <span class="text-safety-orange font-bold tracking-widest text-sm uppercase">Engineered for Strength</span>
          <h2 class="text-3xl md:text-5xl font-black text-industrial-dark leading-tight">
            Building Heavy Industrial Structures That Last Generations.
          </h2>
          <p class="text-industrial-slate leading-relaxed">
            At <strong>P V R Metals</strong>, we process industrial steel with raw precision. Located in Malappuram, Kerala, our operations cover all dimensions of metallic construction, heavy machinery installation frames, bespoke metal gates, and architectural designs.
          </p>
          <p class="text-industrial-slate leading-relaxed">
            Our engineers design solutions that match high quality standards, utilizing premium materials and expert-level welding techniques to handle projects of any scale.
          </p>
          <div class="pt-4">
            <a 
              routerLink="/about" 
              class="inline-flex items-center text-safety-orange hover:text-safety-amber font-bold transition-all duration-200 group"
            >
              More About Our Legacy 
              <span class="material-icons-round ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>
        
        <div class="relative">
          <div class="absolute -inset-4 bg-safety-orange/10 rounded-lg -rotate-2"></div>
          <div class="relative bg-white p-4 rounded-lg shadow-xl border border-gray-100">
            <img 
              src="assets/steel_beams_cnc.png" 
              alt="Structural Steel Stock" 
              class="w-full h-80 object-cover rounded"
            />
            <div class="absolute bottom-8 right-8 bg-industrial-dark text-white p-6 rounded shadow-2xl border-l-4 border-safety-orange">
              <span class="text-3xl font-black text-safety-orange">100%</span>
              <p class="text-xs uppercase tracking-wider text-gray-400 mt-1">Accurate Fabrication</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Services Showcase -->
    <section class="py-24 bg-industrial-dark text-white relative metal-texture">
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span class="text-safety-orange font-bold tracking-widest text-sm uppercase">Our Offerings</span>
            <h2 class="text-3xl md:text-5xl font-black text-white mt-2">Fabrication Services</h2>
          </div>
          <a 
            routerLink="/services" 
            class="mt-4 md:mt-0 inline-flex items-center justify-center bg-safety-orange hover:bg-safety-amber text-white font-bold px-6 py-3 rounded transition-all duration-300 border border-safety-orange"
          >
            Explore All 11 Services
            <span class="material-icons-round ml-2">category</span>
          </a>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="bg-industrial-charcoal border border-industrial-gray/50 rounded-lg p-8 flex flex-col justify-between hover:border-safety-orange/50 transition-all duration-300 group">
            <div>
              <div class="w-12 h-12 bg-safety-orange/10 rounded flex items-center justify-center text-safety-orange group-hover:scale-110 transition-transform duration-300 mb-6">
                <span class="material-icons-round text-3xl">apartment</span>
              </div>
              <h3 class="text-xl font-bold text-white group-hover:text-safety-orange transition-colors">Structural Metal Fabricators</h3>
              <p class="text-gray-400 text-sm mt-3 leading-relaxed">
                Industrial building skeletons, warehouse arches, roof trusses, and heavy load-bearing steel frameworks engineered to custom safety specifications.
              </p>
            </div>
            <a routerLink="/services" class="mt-8 inline-flex items-center text-safety-orange text-sm font-semibold hover:text-safety-amber">
              Read Details <span class="material-icons-round text-xs ml-1">chevron_right</span>
            </a>
          </div>

          <!-- Card 2 -->
          <div class="bg-industrial-charcoal border border-industrial-gray/50 rounded-lg p-8 flex flex-col justify-between hover:border-safety-orange/50 transition-all duration-300 group">
            <div>
              <div class="w-12 h-12 bg-safety-orange/10 rounded flex items-center justify-center text-safety-orange group-hover:scale-110 transition-transform duration-300 mb-6">
                <span class="material-icons-round text-3xl">design_services</span>
              </div>
              <h3 class="text-xl font-bold text-white group-hover:text-safety-orange transition-colors">Bespoke Metal Solutions</h3>
              <p class="text-gray-400 text-sm mt-3 leading-relaxed">
                Tailored components designed for unique residential and commercial requirements, ranging from decorative facades to robust machine housings.
              </p>
            </div>
            <a routerLink="/services" class="mt-8 inline-flex items-center text-safety-orange text-sm font-semibold hover:text-safety-amber">
              Read Details <span class="material-icons-round text-xs ml-1">chevron_right</span>
            </a>
          </div>

          <!-- Card 3 -->
          <div class="bg-industrial-charcoal border border-industrial-gray/50 rounded-lg p-8 flex flex-col justify-between hover:border-safety-orange/50 transition-all duration-300 group">
            <div>
              <div class="w-12 h-12 bg-safety-orange/10 rounded flex items-center justify-center text-safety-orange group-hover:scale-110 transition-transform duration-300 mb-6">
                <span class="material-icons-round text-3xl">precision_manufacturing</span>
              </div>
              <h3 class="text-xl font-bold text-white group-hover:text-safety-orange transition-colors">Metal Component Production</h3>
              <p class="text-gray-400 text-sm mt-3 leading-relaxed">
                Bulk production of accurate metal parts, plates, brackets, and fixtures utilizing modern shearing, bending, and finishing machines.
              </p>
            </div>
            <a routerLink="/services" class="mt-8 inline-flex items-center text-safety-orange text-sm font-semibold hover:text-safety-amber">
              Read Details <span class="material-icons-round text-xs ml-1">chevron_right</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick CTA Section -->
    <section class="py-20 bg-safety-orange text-white relative overflow-hidden">
      <!-- Diagonal steel block overlay -->
      <div class="absolute -right-24 -bottom-24 w-96 h-96 bg-safety-amber opacity-30 rotate-45 pointer-events-none"></div>
      <div class="absolute -left-12 -top-12 w-48 h-48 bg-safety-amber opacity-30 rounded-full pointer-events-none"></div>

      <div class="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-6">
        <h2 class="text-3xl md:text-5xl font-black text-white">
          Have an Industrial Project in Mind?
        </h2>
        <p class="text-lg text-white/90 max-w-xl mx-auto font-light">
          Get in touch with our engineering team today for an accurate estimation and consultation for your fabrication requirements.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a 
            routerLink="/contact" 
            class="inline-flex items-center justify-center bg-industrial-dark hover:bg-industrial-charcoal text-white font-bold px-8 py-4 rounded shadow-2xl transition-all duration-300"
          >
            Send Enquiry
            <span class="material-icons-round ml-2">mail</span>
          </a>
          <a 
            href="https://wa.me/9207045332?text=Hi%20PVR%20Metals,%20I'd%20like%20to%20get%20a%20fabrication%20quote." 
            target="_blank"
            class="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-safety-orange font-bold px-8 py-4 rounded shadow-2xl transition-all duration-300"
          >
            Chat on WhatsApp
            <span class="material-icons-round ml-2">chat</span>
          </a>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  slides: Slide[] = [
    {
      image: 'assets/carousel_heavy_fabrication.png',
      category: 'PRECISION FABRICATION',
      title: 'Precision Engineering. Heavy Metal Fabrication.',
      subtitle: 'Leading industrial metal manufacturing and custom fabrication specialist in Kerala. We build steel structures designed to withstand time and pressure.',
      actionText: 'EXPLORE SERVICES',
      link: '/services',
      tabLabel: 'Heavy Fabrication'
    },
    {
      image: 'assets/carousel_cnc_laser.png',
      category: 'CNC TECHNOLOGY',
      title: 'Advanced CNC Laser Cutting & Processing',
      subtitle: 'Equipped with heavy-duty machinery for precision bending, shearing, and custom component manufacturing to exact tolerances.',
      actionText: 'READ OUR STORY',
      link: '/about',
      tabLabel: 'Precision CNC'
    },
    {
      image: 'assets/carousel_structural_steel.png',
      category: 'STRUCTURAL STEEL',
      title: 'Enduring Steel Structures Built for Generations',
      subtitle: 'Providing commercial warehouse arches, industrial factory layouts, roof trusses, and heavy load-bearing steel frameworks.',
      actionText: 'REQUEST A QUOTE',
      link: '/contact',
      tabLabel: 'Structural Steel'
    }
  ];

  activeSlideIndex = 0;
  isPlaying = true;
  private intervalId: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    this.stopCarousel();
    this.intervalId = setInterval(() => {
      if (this.isPlaying) {
        this.nextSlide();
      }
    }, 5000); // changes image in each 5 seconds
  }

  stopCarousel() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
  }

  setSlide(index: number) {
    this.activeSlideIndex = index;
    // Reset timer to give full duration to the clicked slide
    if (this.isPlaying) {
      this.startCarousel();
    }
  }

  togglePlayPause() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.startCarousel();
    } else {
      this.stopCarousel();
    }
  }
}
