import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <!-- Header Banner -->
    <section class="relative bg-industrial-dark text-white py-24 pt-32 overflow-hidden metal-texture">
      <div class="absolute inset-0 z-0 industrial-grid-dark opacity-10 pointer-events-none"></div>
      
      <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <span class="text-safety-orange font-bold tracking-widest text-sm uppercase">Get in Touch</span>
        <h1 class="text-4xl md:text-6xl font-black text-white mt-3 font-sans">
          Request a Quote & Enquiry
        </h1>
        <p class="text-gray-300 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
          Contact our fabrication facility in Malappuram, Kerala, to discuss pricing, designs, and project timelines.
        </p>
      </div>
    </section>

    <!-- Main Contact Section -->
    <section class="py-24 bg-industrial-offwhite relative">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Left Side: Contact Form (7 cols) -->
        <div class="lg:col-span-7 bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100">
          <h2 class="text-2xl font-black text-industrial-dark mb-2">Send an Enquiry</h2>
          <p class="text-sm text-industrial-slate mb-8 font-light">Fill out the form below. Our engineering team will review and respond within 24 business hours.</p>
          
          @if (formSubmitted && contactForm.valid) {
            <!-- Success Message -->
            <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center space-y-4 animate-fade-in">
              <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <span class="material-icons-round text-4xl">check_circle</span>
              </div>
              <h3 class="text-xl font-bold text-emerald-950">Thank You! Enquiry Sent.</h3>
              <p class="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                Your message has been successfully received. We have logged your request for <strong>{{ contactForm.value.service }}</strong> and will contact you at <strong>{{ contactForm.value.phone }}</strong> shortly.
              </p>
              <button 
                (click)="resetForm()" 
                class="mt-4 px-6 py-2.5 bg-industrial-dark hover:bg-industrial-charcoal text-white font-semibold text-xs uppercase tracking-wider rounded transition-colors"
              >
                Send Another Message
              </button>
            </div>
          } @else {
            <!-- Contact Form -->
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Name Field -->
                <div>
                  <label for="name" class="block text-xs font-bold uppercase tracking-wider text-industrial-dark mb-2">Full Name <span class="text-safety-orange">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    formControlName="name"
                    placeholder="Enter your name"
                    class="w-full px-4 py-3 rounded border bg-industrial-offwhite text-sm focus:outline-none focus:ring-1 focus:ring-safety-orange focus:border-safety-orange transition-all"
                    [ngClass]="{'border-red-500 ring-1 ring-red-500': submitted && f['name'].errors}"
                  />
                  @if (submitted && f['name'].errors) {
                    <span class="text-xs text-red-500 mt-1 block">Name is required (min 2 characters).</span>
                  }
                </div>

                <!-- Email Field -->
                <div>
                  <label for="email" class="block text-xs font-bold uppercase tracking-wider text-industrial-dark mb-2">Email Address <span class="text-safety-orange">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    formControlName="email"
                    placeholder="name@example.com"
                    class="w-full px-4 py-3 rounded border bg-industrial-offwhite text-sm focus:outline-none focus:ring-1 focus:ring-safety-orange focus:border-safety-orange transition-all"
                    [ngClass]="{'border-red-500 ring-1 ring-red-500': submitted && f['email'].errors}"
                  />
                  @if (submitted && f['email'].errors) {
                    <span class="text-xs text-red-500 mt-1 block">Please enter a valid email address.</span>
                  }
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Phone Field -->
                <div>
                  <label for="phone" class="block text-xs font-bold uppercase tracking-wider text-industrial-dark mb-2">Phone Number <span class="text-safety-orange">*</span></label>
                  <input 
                    type="tel" 
                    id="phone" 
                    formControlName="phone"
                    placeholder="10-digit number"
                    class="w-full px-4 py-3 rounded border bg-industrial-offwhite text-sm focus:outline-none focus:ring-1 focus:ring-safety-orange focus:border-safety-orange transition-all"
                    [ngClass]="{'border-red-500 ring-1 ring-red-500': submitted && f['phone'].errors}"
                  />
                  @if (submitted && f['phone'].errors) {
                    <span class="text-xs text-red-500 mt-1 block">Please enter a valid 10-digit mobile number.</span>
                  }
                </div>

                <!-- Service Field -->
                <div>
                  <label for="service" class="block text-xs font-bold uppercase tracking-wider text-industrial-dark mb-2">Service Required <span class="text-safety-orange">*</span></label>
                  <select 
                    id="service" 
                    formControlName="service"
                    class="w-full px-4 py-3 rounded border bg-industrial-offwhite text-sm focus:outline-none focus:ring-1 focus:ring-safety-orange focus:border-safety-orange transition-all"
                    [ngClass]="{'border-red-500 ring-1 ring-red-500': submitted && f['service'].errors}"
                  >
                    <option value="" disabled selected>Select a Service</option>
                    @for (svc of serviceOptions; track svc) {
                      <option [value]="svc">{{ svc }}</option>
                    }
                  </select>
                  @if (submitted && f['service'].errors) {
                    <span class="text-xs text-red-500 mt-1 block">Please select a service.</span>
                  }
                </div>
              </div>

              <!-- Message Field -->
              <div>
                <label for="message" class="block text-xs font-bold uppercase tracking-wider text-industrial-dark mb-2">Message Description <span class="text-safety-orange">*</span></label>
                <textarea 
                  id="message" 
                  formControlName="message"
                  rows="5"
                  placeholder="Describe your design, sizing, metal thickness, or project specifications..."
                  class="w-full px-4 py-3 rounded border bg-industrial-offwhite text-sm focus:outline-none focus:ring-1 focus:ring-safety-orange focus:border-safety-orange transition-all"
                  [ngClass]="{'border-red-500 ring-1 ring-red-500': submitted && f['message'].errors}"
                ></textarea>
                @if (submitted && f['message'].errors) {
                  <span class="text-xs text-red-500 mt-1 block">Message is required (min 10 characters).</span>
                }
              </div>

              <div class="pt-2">
                <button 
                  type="submit" 
                  class="w-full md:w-auto inline-flex items-center justify-center bg-safety-orange hover:bg-safety-amber text-white font-bold px-8 py-4 rounded shadow-lg hover:shadow-safety-orange/20 transition-all duration-300"
                >
                  Send Enquiry
                  <span class="material-icons-round ml-2">send</span>
                </button>
              </div>
            </form>
          }
        </div>

        <!-- Right Side: Sidebar Info (5 cols) -->
        <div class="lg:col-span-5 space-y-8">
          
          <!-- Address & Hours Sidebar Card -->
          <div class="bg-industrial-dark text-white p-8 rounded-lg shadow-xl border-l-4 border-safety-orange relative overflow-hidden metal-texture">
            <h2 class="text-xl font-bold tracking-tight mb-6">P V R Metals</h2>
            
            <div class="space-y-6">
              <!-- Location -->
              <div class="flex items-start space-x-4">
                <div class="bg-safety-orange/10 p-2.5 rounded text-safety-orange mt-1">
                  <span class="material-icons-round text-2xl">location_on</span>
                </div>
                <div>
                  <h4 class="text-xs font-bold uppercase tracking-widest text-gray-400">Our Address</h4>
                  <p class="text-sm text-gray-200 mt-1 font-light leading-relaxed">
                    cherali i oc, NH Padikkal,<br/>
                    P.O. Velimukku, Malappuram - 676317,<br/>
                    Kerala, India
                  </p>
                </div>
              </div>

              <!-- Hours -->
              <div class="flex items-start space-x-4">
                <div class="bg-safety-orange/10 p-2.5 rounded text-safety-orange mt-1">
                  <span class="material-icons-round text-2xl">schedule</span>
                </div>
                <div>
                  <h4 class="text-xs font-bold uppercase tracking-widest text-gray-400">Operational Hours</h4>
                  <p class="text-sm text-gray-200 mt-1 font-light">
                    Monday – Saturday: 08:30 AM – 08:00 PM<br/>
                    <span class="text-safety-orange font-semibold">Open until 8:00 PM</span>
                  </p>
                </div>
              </div>

              <!-- Phone Action -->
              <div class="flex items-start space-x-4">
                <div class="bg-safety-orange/10 p-2.5 rounded text-safety-orange mt-1">
                  <span class="material-icons-round text-2xl">call</span>
                </div>
                <div>
                  <h4 class="text-xs font-bold uppercase tracking-widest text-gray-400">Phone Contact</h4>
                  
                  <div class="mt-2 flex items-center space-x-3">
                    <span class="text-lg font-black tracking-tight text-white transition-all duration-300">
                      {{ phoneVisible ? '+91 98471 23456' : '+91 9847X XXXX' }}
                    </span>
                    <button 
                      (click)="togglePhone()" 
                      class="px-3 py-1 bg-safety-orange hover:bg-safety-amber text-white text-[10px] uppercase font-bold tracking-widest rounded transition-colors"
                    >
                      {{ phoneVisible ? 'Hide' : 'Reveal' }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick WhatsApp Sidebar Card -->
          <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center space-y-4">
            <div class="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <span class="material-icons-round text-2xl">chat</span>
            </div>
            <h3 class="text-lg font-bold text-industrial-dark">Direct WhatsApp Chat</h3>
            <p class="text-xs text-industrial-slate leading-relaxed font-light">
              Skip forms entirely! Chat instantly with our lead engineer on WhatsApp. Send images, drawings, or voice notes.
            </p>
            <a 
              href="https://wa.me/919847123456?text=Hi%20PVR%20Metals,%20I'd%20like%20to%20enquire%20about%20your%20services." 
              target="_blank"
              class="w-full inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 rounded transition-all duration-200 text-sm shadow-md shadow-emerald-500/10"
            >
              Start WhatsApp Chat
              <span class="material-icons-round ml-2 text-base">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Floating Action items (sticky bar) -->
    <div class="fixed bottom-6 right-6 z-50 flex flex-col sm:flex-row items-end sm:items-center gap-3">
      <!-- Quick Contact Number Panel (Expands when visible) -->
      @if (floatExpanded) {
        <div class="bg-industrial-charcoal text-white p-4 rounded-lg shadow-2xl border border-safety-orange/30 flex items-center space-x-3 transition-all duration-300 animate-slide-in">
          <div class="text-xs">
            <span class="block text-gray-400 font-bold uppercase tracking-widest text-[9px]">PVR Hotline</span>
            <span class="text-sm font-black">+91 98471 23456</span>
          </div>
          <a href="tel:+919847123456" class="p-2 bg-safety-orange rounded text-white hover:bg-safety-amber">
            <span class="material-icons-round text-sm">call</span>
          </a>
        </div>
      }
      
      <!-- Action buttons row -->
      <div class="flex items-center space-x-2">
        <button 
          (click)="toggleFloatPanel()" 
          class="flex items-center justify-center w-12 h-12 bg-industrial-dark text-white rounded-full hover:bg-industrial-slate shadow-xl border border-gray-700/50 transition-colors"
          title="Show Hotline Number"
        >
          <span class="material-icons-round">{{ floatExpanded ? 'close' : 'call' }}</span>
        </button>

        <button 
          (click)="scrollToForm()" 
          class="flex items-center justify-center w-12 h-12 bg-safety-orange text-white rounded-full hover:bg-safety-amber shadow-xl transition-colors"
          title="Scroll to Enquiry Form"
        >
          <span class="material-icons-round">edit_note</span>
        </button>

        <a 
          href="https://wa.me/919847123456?text=Hello%20PVR%20Metals" 
          target="_blank"
          class="flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-full hover:bg-[#20ba5a] shadow-xl transition-colors"
          title="WhatsApp Support"
        >
          <span class="material-icons-round">chat</span>
        </a>
      </div>
    </div>
  `
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  formSubmitted = false;
  phoneVisible = false;
  floatExpanded = false;

  serviceOptions = [
    'Structural Metal Fabricators',
    'Bespoke Metal Solutions',
    'Custom Fabrication Solutions',
    'Industrial Metal Builders',
    'Metal Component Production',
    'Metal Engineering & Fabrication',
    'Metal Manufacturing Specialists',
    'Metallic Construction Experts',
    'Sheet Metal Workers',
    'Assembly Services',
    'Welding Job Works'
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Build reactive form
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

    // Check query params for service pre-selection
    this.route.queryParams.subscribe(params => {
      const selectedService = params['service'];
      if (selectedService && this.serviceOptions.includes(selectedService)) {
        this.contactForm.patchValue({ service: selectedService });
      }
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  togglePhone() {
    this.phoneVisible = !this.phoneVisible;
  }

  toggleFloatPanel() {
    this.floatExpanded = !this.floatExpanded;
  }

  scrollToForm() {
    const el = document.getElementById('name');
    if (el) {
      el.focus();
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    // Success simulation
    this.formSubmitted = true;
  }

  resetForm() {
    this.contactForm.reset({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    this.submitted = false;
    this.formSubmitted = false;
  }
}
