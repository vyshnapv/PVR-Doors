import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Header Hero banner -->
    <section class="relative bg-industrial-dark text-white py-24 pt-32 overflow-hidden metal-texture">
      <div class="absolute inset-0 z-0 industrial-grid-dark opacity-10 pointer-events-none"></div>
      
      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <span class="text-safety-orange font-bold tracking-widest text-sm uppercase">Our Legacy</span>
        <h1 class="text-4xl md:text-6xl font-black text-white mt-3 font-sans">
          Engineering the Future of Steel
        </h1>
        <p class="text-gray-300 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
          For over 14 years, P V R Metals has stood as a symbol of structural strength, reliability, and engineering accuracy in the heavy metal fabrication industry.
        </p>
      </div>
    </section>

    <!-- Legacy & Profile Description -->
    <section class="py-24 bg-industrial-offwhite relative">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">
        <!-- Left Side: Images Grid -->
        <div class="md:col-span-6 relative">
          <!-- Main Image -->
          <div class="relative bg-white p-3 rounded-lg shadow-xl border border-gray-100 z-10">
            <img 
              src="assets/steel_beams_cnc.png" 
              alt="Heavy Steel Structures" 
              class="w-full h-96 object-cover rounded"
            />
          </div>
          <!-- Accentuating Orange box behind -->
          <div class="absolute -top-6 -left-6 w-32 h-32 bg-safety-orange/10 rounded-lg pointer-events-none -z-0"></div>
          <!-- Decorative metal grid lines -->
          <div class="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-industrial-dark/10 pointer-events-none"></div>
        </div>

        <!-- Right Side: Content -->
        <div class="md:col-span-6 space-y-6">
          <div class="inline-flex items-center space-x-2 bg-industrial-dark/5 px-3 py-1 rounded-full text-industrial-dark text-xs font-bold tracking-wider uppercase">
            <span>Established 2012</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-black text-industrial-dark leading-tight">
            A Strong Legacy in Metal Manufacturing & Structural Builders
          </h2>
          <p class="text-industrial-slate leading-relaxed">
            Founded with a commitment to bring world-class precision to metal manufacturing in Kerala, <strong>P V R Metals</strong> has grown from a local workshop into a leading name in industrial-scale structural builds. Our facility houses cutting-edge machinery and is powered by certified fabrication experts.
          </p>
          <p class="text-industrial-slate leading-relaxed">
            Whether fabricating dense multi-ton load-bearing columns for warehouses, designing high-end custom metal solutions, or conducting specialized welding job works, we deliver structural excellence that strictly complies with modern safety codes.
          </p>

          <!-- Core Values Mini-Grid -->
          <div class="grid grid-cols-2 gap-4 pt-4">
            <div class="flex items-start space-x-3">
              <span class="material-icons-round text-safety-orange mt-0.5">verified_user</span>
              <div>
                <h4 class="font-bold text-industrial-dark">Quality Assured</h4>
                <p class="text-xs text-gray-500">Strict metal thickness checks and weld tests.</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <span class="material-icons-round text-safety-orange mt-0.5">query_stats</span>
              <div>
                <h4 class="font-bold text-industrial-dark">Engineering Precision</h4>
                <p class="text-xs text-gray-500">Highly accurate CAD mapping and machine setup.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Statistics Banner -->
    <section class="py-16 bg-industrial-dark text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-safety-orange/5 to-transparent"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <span class="block text-4xl md:text-5xl font-black text-safety-orange">14+</span>
          <span class="block text-xs uppercase tracking-widest text-gray-400 mt-2 font-bold">Years of Trust</span>
        </div>
        <div>
          <span class="block text-4xl md:text-5xl font-black text-safety-orange">500+</span>
          <span class="block text-xs uppercase tracking-widest text-gray-400 mt-2 font-bold">Projects Completed</span>
        </div>
        <div>
          <span class="block text-4xl md:text-5xl font-black text-safety-orange">15+</span>
          <span class="block text-xs uppercase tracking-widest text-gray-400 mt-2 font-bold">Expert Fabricators</span>
        </div>
        <div>
          <span class="block text-4xl md:text-5xl font-black text-safety-orange">4.3★</span>
          <span class="block text-xs uppercase tracking-widest text-gray-400 mt-2 font-bold">Google Rating</span>
        </div>
      </div>
    </section>

    <!-- Quality Standards & Methodology -->
    <section class="py-24 bg-white relative">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-safety-orange font-bold tracking-widest text-sm uppercase">Our Standards</span>
          <h2 class="text-3xl md:text-4xl font-black text-industrial-dark mt-2">
            Rigid Quality Control & Industrial Capabilities
          </h2>
          <p class="text-industrial-slate mt-4 font-light">
            We don't compromise. Every batch of metal we procure and every joint we weld is validated using established metallurgical testing.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="border border-gray-100 bg-industrial-offwhite/50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <span class="text-3xl font-black text-safety-orange">01</span>
            <h3 class="text-xl font-bold text-industrial-dark mt-4">Raw Material Inspection</h3>
            <p class="text-sm text-industrial-slate mt-3 leading-relaxed">
              We source high-grade structural carbon steel, mild steel, and stainless steel directly from verified manufacturers. We check thickness, strength, and composition.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="border border-gray-100 bg-industrial-offwhite/50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <span class="text-3xl font-black text-safety-orange">02</span>
            <h3 class="text-xl font-bold text-industrial-dark mt-4">Advanced Welding & Fabrication</h3>
            <p class="text-sm text-industrial-slate mt-3 leading-relaxed">
              Using state-of-the-art MIG, TIG, and ARC welding, our certified operators execute high-stress joints. We maintain uniform weld penetration and minimal metal distortion.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="border border-gray-100 bg-industrial-offwhite/50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <span class="text-3xl font-black text-safety-orange">03</span>
            <h3 class="text-xl font-bold text-industrial-dark mt-4">Corrosion Protection & Finishing</h3>
            <p class="text-sm text-industrial-slate mt-3 leading-relaxed">
              Applying specialized anti-corrosive primer, powder coatings, and hot-dip galvanizing to ensure the metal withstands humid coastal conditions and heavy industrial operations.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-industrial-dark text-white relative overflow-hidden metal-texture">
      <div class="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-6">
        <h2 class="text-3xl md:text-4xl font-black text-white">
          Need a Professional Steel Fabrication Partner?
        </h2>
        <p class="text-gray-300 max-w-xl mx-auto font-light">
          We handle projects of all scales—from individual home gate panels to vast industrial warehouse steel frames. Let's discuss your requirements.
        </p>
        <div class="pt-4">
          <a 
            routerLink="/contact" 
            class="inline-flex items-center justify-center bg-safety-orange hover:bg-safety-amber text-white font-bold px-8 py-4 rounded transition-all duration-300 border border-safety-orange"
          >
            Get in Touch With Our Team
            <span class="material-icons-round ml-2">mail</span>
          </a>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
