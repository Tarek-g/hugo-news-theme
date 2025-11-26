import { Link } from "wouter";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const currentDate = new Date().toLocaleDateString('ar-EG', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      {/* Top Bar */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 h-12 flex items-center justify-between text-sm text-muted-foreground">
          <span>{currentDate}</span>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-foreground">عن الصحيفة</span>
            <span className="cursor-pointer hover:text-foreground">اتصل بنا</span>
          </div>
        </div>
      </header>

      {/* Main Header */}
      <div className="border-b border-border py-8">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          
          <Link href="/">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter cursor-pointer">الصحيفة</h1>
          </Link>
          
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50 hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center gap-8 py-4 text-lg font-medium">
            {['الرئيسية', 'سياسة', 'اقتصاد', 'رياضة', 'ثقافة', 'تكنولوجيا', 'آراء'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline decoration-2 underline-offset-4 decoration-black">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Ticker */}
      <div className="bg-black text-white py-2 overflow-hidden whitespace-nowrap relative">
        <div className="animate-marquee inline-block px-4">
          <span className="mx-4">🔴 عاجل: الأسواق العالمية تغلق على ارتفاع قياسي</span>
          <span className="mx-4">🔴 وزارة الصحة تعلن عن إجراءات جديدة</span>
          <span className="mx-4">🔴 فوز المنتخب الوطني في المباراة الودية</span>
        </div>
      </div>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border mt-20 py-12 bg-secondary">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">الصحيفة</h2>
            <p className="text-muted-foreground max-w-md leading-relaxed font-serif text-lg">
              منصة إخبارية مستقلة تهدف إلى تقديم الخبر بدقة وموضوعية. نؤمن بقوة الكلمة وأهمية المعرفة في بناء المجتمع.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">أقسام</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">سياسة</a></li>
              <li><a href="#" className="hover:text-foreground">اقتصاد</a></li>
              <li><a href="#" className="hover:text-foreground">تكنولوجيا</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">تابعنا</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">تويتر</a></li>
              <li><a href="#" className="hover:text-foreground">فيسبوك</a></li>
              <li><a href="#" className="hover:text-foreground">لينكد إن</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} الصحيفة. جميع الحقوق محفوظة.
          <span className="mx-2">|</span>
          <a href="/hugo" className="hover:underline">Hugo Theme</a>
        </div>
      </footer>
    </div>
  );
}
