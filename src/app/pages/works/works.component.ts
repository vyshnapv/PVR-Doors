import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Header Banner similar to services page -->
    <section class="relative bg-industrial-dark text-white py-24 pt-32 overflow-hidden metal-texture">
      <div class="absolute inset-0 z-0 industrial-grid-dark opacity-10 pointer-events-none"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <span class="text-safety-orange font-bold tracking-widest text-sm uppercase">Our Portfolio</span>
        <h1 class="text-5xl md:text-7xl font-black text-white mt-3 font-sans">
          Our Works
        </h1>
        <p class="text-gray-300 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
          Explore flagship projects that showcase P V R Metals' precision engineering and heavy‑duty fabrication expertise.
        </p>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        <ng-container *ngFor="let project of projects">
          <div class="group flex flex-col bg-industrial-charcoal/80 border border-industrial-gray/30 rounded-xl overflow-hidden backdrop-blur-sm shadow-lg hover:border-safety-orange/50 hover:-translate-y-1 transition-all duration-300">
            <div class="overflow-hidden h-52 flex-shrink-0">
              <img [src]="project.image" [alt]="project.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h2 class="text-xl font-bold text-white mb-3 group-hover:text-safety-orange transition-colors">
                {{ project.title }}
              </h2>
              <p class="text-sm text-gray-300 leading-relaxed flex-grow">
                {{ project.description }}
              </p>
            </div>
          </div>
        </ng-container>
      </div>
    </section>


    <!-- Call to Action -->
    <section class="bg-safety-orange text-white py-12">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-extrabold mb-4">Ready to start your next project?</h2>
        <p class="mb-6">Get a free consultation and see how our expertise can turn your vision into reality.</p>
        <a routerLink="/contact" class="inline-flex items-center bg-white text-safety-orange font-bold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition-colors">
          Contact Us
          <span class="material-icons-round text-sm ml-2">arrow_forward</span>
        </a>
      </div>
    </section>
  `,
  styles: [
    `
      :host { display: block; background: var(--industrial-dark, #111); min-height: 100vh; }
      .material-icons-round { vertical-align: middle; }
      .animate-fade-in-down { animation: fadeInDown 0.8s ease forwards; }
      .animate-fade-in-up { animation: fadeInUp 0.8s ease forwards; }
      @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    `
  ]
})
export class WorksComponent {
  projects: Project[] = [
    {
      title: 'Heavy Steel Warehouse',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop',
      description: 'A massive 5000 sq ft warehouse with reinforced steel frames and insulated roofing.',
      link: '/works/warehouse'
    },
    {
      title: 'Custom CNC Fabrication',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop',
      description: 'Precision CNC‑cut components for an automotive assembly line, tolerance ±0.01 mm.',
      link: '/works/cnc-fabrication'
    },
    {
      title: 'Industrial Gate System',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop',
      description: 'Automated safety gate with stainless steel panels and IoT monitoring.',
      link: '/works/gate-system'
    },
    {
      title: 'Structural Steel Framework',
      image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=800&auto=format&fit=crop',
      description: 'Multi-story structural steel framework for a commercial complex, engineered for seismic resistance.',
      link: '/works/structural-framework'
    },
    {
      title: 'Pipeline & Piping Systems',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
      description: 'High-pressure stainless steel piping systems for an oil & gas refinery facility.',
      link: '/works/pipeline-systems'
    },
    {
      title: 'Metal Roofing Installation',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop',
      description: 'Industrial-grade metal roofing over a 10,000 sq ft manufacturing plant with thermal insulation.',
      link: '/works/metal-roofing'
    }
  ];
}
