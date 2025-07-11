import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Instagram, Send } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "محل سکونت",
      value: "اوز، استان فارس",
      color: "text-blue-500"
    },
    {
      icon: Mail,
      title: "ایمیل",
      value: "molavimohend@gmail.com",
      color: "text-green-500"
    },
    {
      icon: Phone,
      title: "تماس",
      value: "در صورت نیاز تماس بگیرید",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            تماس 
            <span className="text-primary"> با من</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            برای همکاری، پیشنهادات یا سوالات با من در ارتباط باشید
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center ${info.color}`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Instagram className="w-5 h-5 text-primary" />
                  شبکه‌های اجتماعی
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  برای دیدن آخرین اخبار و عکس‌های ورزشی من را در شبکه‌های اجتماعی دنبال کنید
                </p>
                <Button variant="outline" className="w-full">
                  <Instagram className="w-4 h-4 mr-2" />
                  دنبال کردن در اینستاگرام
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">پیام بفرستید</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">نام و نام خانوادگی</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background text-foreground"
                  placeholder="نام خود را وارد کنید"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">ایمیل</label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background text-foreground"
                  placeholder="ایمیل خود را وارد کنید"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">موضوع</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background text-foreground"
                  placeholder="موضوع پیام خود را وارد کنید"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">پیام</label>
                <textarea 
                  rows={5}
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-background text-foreground resize-none"
                  placeholder="پیام خود را بنویسید..."
                ></textarea>
              </div>
              
              <Button variant="hero" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                ارسال پیام
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}