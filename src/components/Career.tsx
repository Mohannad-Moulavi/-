import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Calendar, Users } from "lucide-react";
import trainingImage from "@/assets/training-action.jpg";

export function Career() {
  const careerPath = [
    {
      period: "۱۴۰۰ - ۱۴۰۲",
      team: "نفت اوز",
      role: "بازیکن و کاپیتان",
      location: "اوز، فارس",
      achievements: ["کاپیتانی تیم", "نایب قهرمانی مسابقات زیر ۱۲ سال", "بهترین بازیکن مسابقات"],
      status: "completed"
    },
    {
      period: "۱۴۰۲ - اکنون",
      team: "شمس اوز",
      role: "بازیکن حرفه‌ای",
      location: "اوز، فارس", 
      achievements: ["فعالیت حرفه‌ای", "ادامه رشد و پیشرفت"],
      status: "current"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Career Timeline */}
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              مسیر
              <span className="text-primary"> شغلی</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              سفر فوتبالی از ابتدا تا امروز
            </p>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
              
              {careerPath.map((career, index) => (
                <div key={index} className="relative mb-12 last:mb-0">
                  {/* Timeline Dot */}
                  <div className={`absolute right-6 w-4 h-4 rounded-full border-4 ${
                    career.status === 'current' 
                      ? 'bg-primary border-primary shadow-glow' 
                      : 'bg-background border-primary'
                  }`}></div>
                  
                  <Card className="mr-16 hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-foreground">{career.team}</h3>
                        <Badge variant={career.status === 'current' ? 'default' : 'secondary'}>
                          {career.status === 'current' ? 'فعلی' : 'گذشته'}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{career.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>{career.role}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{career.location}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">دستاوردها:</h4>
                        <ul className="space-y-1">
                          {career.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="animate-slide-up">
            <div className="relative">
              <img 
                src={trainingImage} 
                alt="تمرین فوتبال"
                className="rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">تیم شمس اوز</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}