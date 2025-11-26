import { Layout } from "@/components/layout";
import { Separator } from "@/components/ui/separator";

// Mock Data
const FEATURED_STORY = {
  category: "سياسة",
  title: "قمة المناخ تخرج بتوصيات تاريخية للحفاظ على البيئة",
  excerpt: "بعد مفاوضات استمرت لأسبوعين، توصل قادة العالم إلى اتفاق شامل يهدف إلى خفض الانبعاثات الكربونية بنسبة 50% بحلول عام 2030. الاتفاق يُعد خطوة محورية في جهود مكافحة التغير المناخي.",
  author: "أحمد محمد",
  date: "منذ ساعتين"
};

const SUB_FEATURED = [
  {
    category: "اقتصاد",
    title: "البنك المركزي يرفع أسعار الفائدة للمرة الثالثة هذا العام",
    excerpt: "في محاولة لكبح جماح التضخم، أعلن البنك المركزي اليوم عن رفع جديد لأسعار الفائدة، مما أثار ردود فعل متباينة في الأوساط الاقتصادية.",
    date: "منذ 4 ساعات"
  },
  {
    category: "تكنولوجيا",
    title: "إطلاق جيل جديد من المعالجات الذكية يغير قواعد اللعبة",
    excerpt: "الشركة الرائدة في مجال التكنولوجيا تكشف عن رقاقة جديدة تعتمد على الذكاء الاصطناعي لتحسين الأداء وتقليل استهلاك الطاقة.",
    date: "منذ 6 ساعات"
  }
];

const OPINION_PIECES = [
  { author: "د. سارة علي", title: "مستقبل التعليم في عصر الذكاء الاصطناعي" },
  { author: "خالد عبدالله", title: "لماذا نحتاج إلى إعادة التفكير في التخطيط العمراني؟" },
  { author: "مريم حسن", title: "الفن كأداة للتغيير الاجتماعي" },
  { author: "يوسف كريم", title: "أزمة المياه العالمية: حلول مقترحة" },
];

const LATEST_NEWS = [
  { category: "رياضة", title: "الفريق الوطني يستعد للمباراة الحاسمة", time: "10:30 ص" },
  { category: "ثقافة", title: "معرض الكتاب الدولي يفتح أبوابه للزوار", time: "09:15 ص" },
  { category: "محليات", title: "افتتاح مشروع النقل العام الجديد", time: "08:45 ص" },
  { category: "صحة", title: "دراسة جديدة تربط بين النوم والصحة العقلية", time: "08:00 ص" },
  { category: "علوم", title: "ناسا تكتشف كوكباً جديداً صالحاً للحياة", time: "أمس" },
];

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        
        {/* Top Section: Hero + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Main Featured Story (8 cols) */}
          <div className="lg:col-span-8">
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-bold rounded-sm">{FEATURED_STORY.category}</span>
                <span className="text-muted-foreground text-sm">{FEATURED_STORY.date}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6 group-hover:text-primary transition-colors">
                {FEATURED_STORY.title}
              </h2>
              <p className="text-xl md:text-2xl font-serif text-muted-foreground leading-relaxed mb-4">
                {FEATURED_STORY.excerpt}
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-primary">
                <span>بقلـم: {FEATURED_STORY.author}</span>
              </div>
            </div>

            <Separator className="my-12" />

            {/* Sub Featured Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SUB_FEATURED.map((story, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary border border-primary px-2 py-0.5 rounded-sm">{story.category}</span>
                    <span className="text-muted-foreground text-xs">{story.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 leading-snug group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground font-serif leading-relaxed">
                    {story.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar / Latest News (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-12 border-r border-border pr-0 lg:pr-12">
            
            {/* Opinion Section */}
            <div>
              <h4 className="text-2xl font-black mb-6 pb-2 border-b-4 border-primary inline-block">آراء ومقالات</h4>
              <div className="space-y-6">
                {OPINION_PIECES.map((piece, idx) => (
                  <div key={idx} className="group cursor-pointer border-b border-border pb-4 last:border-0">
                    <h5 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {piece.title}
                    </h5>
                    <span className="text-sm text-muted-foreground font-serif italic">
                      {piece.author}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest News List */}
            <div className="bg-secondary/50 p-6 rounded-sm border border-border">
              <h4 className="text-xl font-black mb-6 text-primary">آخر الأخبار</h4>
              <div className="space-y-4">
                {LATEST_NEWS.map((news, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-4 group cursor-pointer">
                    <div>
                      <span className="text-xs font-bold text-primary/80 block mb-1">{news.category}</span>
                      <h6 className="font-medium leading-snug group-hover:text-primary transition-colors">{news.title}</h6>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap font-mono mt-1">{news.time}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 border border-primary text-primary py-3 text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-colors uppercase tracking-widest rounded-sm">
                المزيد من الأخبار
              </button>
            </div>

          </div>
        </div>

        {/* Full Width Banner/Statement */}
        <div className="border-y-4 border-primary/20 py-16 text-center my-20 bg-secondary/10">
          <h3 className="text-3xl md:text-5xl font-black leading-tight max-w-4xl mx-auto text-primary">
            "الحقيقة هي الضحية الأولى في الحرب، ولكن هنا.. الحقيقة هي سلاحنا الوحيد."
          </h3>
        </div>

        {/* Grid Layout for Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {['تكنولوجيا', 'علوم', 'صحة'].map((cat) => (
            <div key={cat}>
              <h4 className="text-2xl font-black mb-6 pb-2 border-b border-border flex justify-between items-end">
                {cat}
                <span className="text-sm font-normal text-muted-foreground cursor-pointer hover:text-primary transition-colors">عرض الكل</span>
              </h4>
              <div className="space-y-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="group cursor-pointer">
                    <h5 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-snug">عنوان خبر طويل ومفصل يتعلق بقسم {cat} يعطي فكرة واضحة عن المحتوى</h5>
                    <p className="text-muted-foreground text-sm font-serif line-clamp-2">
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى...
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
}
