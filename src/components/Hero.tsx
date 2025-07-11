import { Button } from "@/components/ui/button";
import { ChevronDown, Star, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-football.jpg";

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            مهند
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent"> مولوی</span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-6 text-lg sm:text-xl">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent" />
              <span>بازیکن چندپسته</span>
            </div>
            <div className="w-1 h-1 bg-accent rounded-full"></div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-accent" />
              <span>تیم شمس اوز</span>
            </div>
          </div>
          
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            فوتبالیست جوان ایرانی از استان فارس با سابقه کاپیتانی و توانایی بازی در پست‌های مختلف
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" onClick={scrollToAbout}>
              بیشتر بدانید
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              تماس با من
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-white hover:text-accent transition-colors">
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}