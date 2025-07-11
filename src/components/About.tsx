import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Users, Target, Trophy } from "lucide-react";
import playerPortrait from "@/assets/player-portrait.jpg";

export function About() {
  const stats = [
    { icon: Calendar, label: "سن", value: "13 سال" },
    { icon: MapPin, label: "محل تولد", value: "اوز، فارس" },
    { icon: Users, label: "تیم فعلی", value: "شمس اوز" },
    { icon: Target, label: "پست", value: "چندپسته" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Section */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img 
                src={playerPortrait} 
                alt="مهند مولوی"
                className="rounded-2xl shadow-elegant w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg animate-bounce-in">
                <Trophy className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              درباره 
              <span className="text-primary"> مهند مولوی</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              مهند مولوی، فوتبالیست متولد 24 آوریل 2011 از شهرستان اوز در استان فارس است. 
              او فوتبال را از تیم نفت اوز آغاز کرده و سابقه کاپیتانی این تیم را نیز در کارنامه خود دارد. 
              مولوی بازیکنی چندپسته است و توانایی بازی در پست‌های فوروارد چپ و راست و همچنین 
              هافبک تهاجمی و میانی را دارد.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              پس از درخشش در نفت اوز، مهند به تیم شمس اوز پیوست و فعالیت حرفه‌ای خود را در این تیم ادامه می‌دهد.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    <div className="font-semibold text-foreground">{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}