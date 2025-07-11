import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Star, Calendar } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      title: "نایب قهرمانی مسابقات زیر ۱۲ سال",
      description: "کسب مقام دوم در مسابقات شهرستان اوز",
      year: "۱۴۰۲",
      team: "نفت اوز",
      icon: Trophy,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      title: "بهترین بازیکن مسابقات",
      description: "دریافت تندیس بهترین بازیکن در مسابقات شهرستان",
      year: "۱۴۰۲", 
      team: "نفت اوز",
      icon: Star,
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "مقام سوم مسابقات زیر ۱۲ سال",
      description: "کسب مقام سوم در مسابقات شهرستان اوز",
      year: "۱۴۰۱",
      team: "نفت اوز", 
      icon: Medal,
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            افتخارات و 
            <span className="text-primary"> دستاوردها</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            مجموعه‌ای از افتخارات و دستاوردهای کسب شده در مسیر فوتبال
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg leading-tight">{achievement.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
                
                <div className="flex items-center justify-center gap-3">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {achievement.year}
                  </Badge>
                  <Badge variant="outline" className="text-primary border-primary">
                    {achievement.team}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">3</div>
            <div className="text-muted-foreground">جوایز کسب شده</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2</div>
            <div className="text-muted-foreground">سال فعالیت</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1</div>
            <div className="text-muted-foreground">عنوان بهترین بازیکن</div>
          </div>
        </div>
      </div>
    </section>
  );
}