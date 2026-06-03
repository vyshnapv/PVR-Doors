import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ServiceItem {
  id: number;
  title: string;
  category: 'industrial' | 'bespoke' | 'welding';
  categoryLabel: string;
  icon: string;
  description: string;
  details: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Header Banner -->
    <section class="relative bg-industrial-dark text-white py-24 pt-32 overflow-hidden metal-texture">
      <div class="absolute inset-0 z-0 industrial-grid-dark opacity-10 pointer-events-none"></div>
      
      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <span class="text-safety-orange font-bold tracking-widest text-sm uppercase">What We Offer</span>
        <h1 class="text-4xl md:text-6xl font-black text-white mt-3 font-sans">
          Metal Fabrication Catalog
        </h1>
        <p class="text-gray-300 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
          Explore our 11 core steel services, categorized into heavy industrial work, bespoke structural designs, and precision welding solutions.
        </p>
      </div>
    </section>

    <!-- Filter & Grid Section -->
    <section class="py-24 bg-industrial-offwhite min-h-[60vh]">
      <div class="max-w-7xl mx-auto px-6">
        
        <!-- Category Filters -->
        <div class="flex flex-wrap justify-center items-center gap-3 mb-16">
          <button 
            (click)="setFilter('all')" 
            [class]="getFilterClass('all')"
          >
            All Services (11)
          </button>
          <button 
            (click)="setFilter('industrial')" 
            [class]="getFilterClass('industrial')"
          >
            Industrial Solutions
          </button>
          <button 
            (click)="setFilter('bespoke')" 
            [class]="getFilterClass('bespoke')"
          >
            Bespoke & Custom
          </button>
          <button 
            (click)="setFilter('welding')" 
            [class]="getFilterClass('welding')"
          >
            Welding & Assembly
          </button>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (service of filteredServices; track service.id) {
            <div class="bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:border-safety-orange/30">
              <div>
                <!-- Top Badge & Icon -->
                <div class="flex items-center justify-between mb-6">
                  <div class="w-12 h-12 bg-safety-orange/10 rounded flex items-center justify-center text-safety-orange group-hover:scale-110 transition-transform duration-300">
                    <span class="material-icons-round text-3xl">{{ service.icon }}</span>
                  </div>
                  <span class="text-xs font-bold uppercase tracking-wider bg-industrial-dark/5 px-2.5 py-1 rounded text-industrial-slate">
                    {{ service.categoryLabel }}
                  </span>
                </div>

                <!-- Title & Description -->
                <h3 class="text-xl font-black text-industrial-dark group-hover:text-safety-orange transition-colors">
                  {{ service.title }}
                </h3>
                <p class="text-sm text-industrial-slate mt-3 leading-relaxed">
                  {{ service.description }}
                </p>

                <!-- Bullet Details -->
                <ul class="mt-6 space-y-2 border-t border-gray-100 pt-6">
                  @for (bullet of service.details; track bullet) {
                    <li class="flex items-center text-xs text-industrial-slate">
                      <span class="material-icons-round text-safety-orange text-sm mr-2">check_circle_outline</span>
                      <span>{{ bullet }}</span>
                    </li>
                  }
                </ul>
              </div>

              <!-- Button linking to Contact -->
              <div class="mt-8 pt-4">
                <a 
                  [routerLink]="['/contact']" 
                  [queryParams]="{ service: service.title }"
                  class="inline-flex items-center text-xs font-bold uppercase tracking-wider text-safety-orange group-hover:text-safety-amber"
                >
                  Request Quote 
                  <span class="material-icons-round text-sm ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Quick CTA Section -->
    <section class="py-20 bg-industrial-dark text-white relative overflow-hidden metal-texture">
      <div class="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-6">
        <h2 class="text-3xl md:text-4xl font-black">
          Need a Custom Fabricated Component?
        </h2>
        <p class="text-gray-300 max-w-xl mx-auto font-light">
          Submit your blueprint or specification details. Our design engineers will review your files and provide a complete quotation.
        </p>
        <div class="pt-4">
          <a 
            routerLink="/contact" 
            class="inline-flex items-center justify-center bg-safety-orange hover:bg-safety-amber text-white font-bold px-8 py-4 rounded transition-all duration-300 border border-safety-orange"
          >
            Get a Custom Quote Now
            <span class="material-icons-round ml-2">receipt_long</span>
          </a>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {
  currentFilter: 'all' | 'industrial' | 'bespoke' | 'welding' = 'all';

  services: ServiceItem[] = [
    {
      id: 1,
      title: 'Structural Metal Fabricators',
      category: 'industrial',
      categoryLabel: 'Industrial',
      icon: 'apartment',
      description: 'Engineering and fabrication of robust structural frameworks, building skeletons, roof trusses, and load-bearing columns.',
      details: ['Carbon & mild steel structures', 'Built for warehouse & high-rises', 'Certified to safety codes']
    },
    {
      id: 2,
      title: 'Bespoke Metal Solutions',
      category: 'bespoke',
      categoryLabel: 'Custom',
      icon: 'brush',
      description: 'Elegant architectural pieces, designer gates, custom staircases, handrails, and customized metal grill works.',
      details: ['Stainless steel & brass work', 'Custom designer finishing', 'Perfect fit measurement guarantees']
    },
    {
      id: 3,
      title: 'Custom Fabrication Solutions',
      category: 'bespoke',
      categoryLabel: 'Custom',
      icon: 'design_services',
      description: 'One-off specialized fabrications, machine guard components, custom heavy brackets, and metal furniture frameworks.',
      details: ['Custom CAD modeling inputs', 'High-accuracy custom tolerances', 'Specialized mounting assemblies']
    },
    {
      id: 4,
      title: 'Industrial Metal Builders',
      category: 'industrial',
      categoryLabel: 'Industrial',
      icon: 'store',
      description: 'Erecting factory structures, agricultural storage sheds, industrial boundary structures, and heavy machinery platforms.',
      details: ['Turnkey fabrication & erection', 'Corrosion-resistant primers', 'Optimized for high-strength load']
    },
    {
      id: 5,
      title: 'Metal Component Production',
      category: 'industrial',
      categoryLabel: 'Industrial',
      icon: 'layers',
      description: 'Precision batch production of structural plates, anchor plates, brackets, and laser/plasma cut elements.',
      details: ['High precision cutting & stamping', 'Batch consistency checks', 'Fast turnaround deliveries']
    },
    {
      id: 6,
      title: 'Metal Engineering & Fabrication',
      category: 'industrial',
      categoryLabel: 'Industrial',
      icon: 'engineering',
      description: 'Engineering support for steel designs, structural stability review, heavy machinery base frames, and industrial installations.',
      details: ['Professional blueprint drafting', 'Load capacity computations', 'Structural joints optimization']
    },
    {
      id: 7,
      title: 'Metal Manufacturing Specialists',
      category: 'industrial',
      categoryLabel: 'Industrial',
      icon: 'precision_manufacturing',
      description: 'Comprehensive sheet and structural steel forming, high-tonnage bending, metal punching, and steel rolling services.',
      details: ['Heavy-gauge bending capacity', 'Exact curvature specifications', 'Complete in-house operations']
    },
    {
      id: 8,
      title: 'Metallic Construction Experts',
      category: 'industrial',
      categoryLabel: 'Industrial',
      icon: 'architecture',
      description: 'Erection of metallic infrastructure including site-assembled steel bridges, structural pipe racks, and overhead gantries.',
      details: ['On-site project management', 'High-tensile bolt connection layouts', 'High-altitude erection specialists']
    },
    {
      id: 9,
      title: 'Sheet Metal Workers',
      category: 'welding',
      categoryLabel: 'Welding & Assembly',
      icon: 'view_in_ar',
      description: 'Precise cutting, bending, and folding of sheet metal panels, customized metal trunks, ducting, and clean air ducts.',
      details: ['High-accuracy sheet bending', 'Galvanized iron & aluminum sheets', 'Aesthetic seam joints']
    },
    {
      id: 10,
      title: 'Assembly Services',
      category: 'welding',
      categoryLabel: 'Welding & Assembly',
      icon: 'build',
      description: 'Full-scale mechanical assemblies, integrating sheet parts with heavy joints, and mounting hardware components.',
      details: ['Complete product kit assembly', 'Quality check certifications', 'Ready-to-install items delivery']
    },
    {
      id: 11,
      title: 'Welding Job Works',
      category: 'welding',
      categoryLabel: 'Welding & Assembly',
      icon: 'hardware',
      description: 'Certified job works using ARC, MIG, and TIG welding for repair works, frame reinforcement, and leak-proof steel welding.',
      details: ['TIG welding for SS & aluminum', 'High-strength load joints welding', 'Ultra-clean weld finishings']
    }
  ];

  get filteredServices(): ServiceItem[] {
    if (this.currentFilter === 'all') {
      return this.services;
    }
    return this.services.filter(s => s.category === this.currentFilter);
  }

  setFilter(filter: 'all' | 'industrial' | 'bespoke' | 'welding') {
    this.currentFilter = filter;
  }

  getFilterClass(filter: 'all' | 'industrial' | 'bespoke' | 'welding'): string {
    const base = "px-6 py-2.5 font-bold text-xs uppercase tracking-wider rounded transition-all duration-200 border";
    if (this.currentFilter === filter) {
      return `${base} bg-safety-orange border-safety-orange text-white shadow-lg shadow-safety-orange/20`;
    }
    return `${base} bg-white border-gray-200 text-industrial-slate hover:bg-gray-50 hover:border-gray-300`;
  }
}
