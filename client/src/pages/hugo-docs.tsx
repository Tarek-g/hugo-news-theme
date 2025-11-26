import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { FileCode, FolderOpen } from "lucide-react";

export default function HugoDocs() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-black mb-8">Hugo Theme Export</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl font-serif text-muted-foreground mb-8">
            تم تجهيز ملفات القالب لتتوافق مع Hugo. يمكنك العثور على الملفات في مجلد 
            <code className="bg-secondary px-2 py-1 rounded text-sm mx-1">public/hugo-theme</code>
          </p>

          <div className="bg-secondary p-6 rounded-lg border border-border mb-8">
            <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
              <FolderOpen className="h-6 w-6" />
              Structure
            </h3>
            <ul className="space-y-2 font-mono text-sm dir-ltr text-left">
              <li className="flex items-center gap-2"><FileCode className="h-4 w-4" /> layouts/_default/baseof.html</li>
              <li className="flex items-center gap-2"><FileCode className="h-4 w-4" /> layouts/_default/single.html</li>
              <li className="flex items-center gap-2"><FileCode className="h-4 w-4" /> layouts/_default/list.html</li>
              <li className="flex items-center gap-2"><FileCode className="h-4 w-4" /> layouts/index.html</li>
              <li className="flex items-center gap-2"><FileCode className="h-4 w-4" /> layouts/partials/head.html</li>
              <li className="flex items-center gap-2"><FileCode className="h-4 w-4" /> layouts/partials/header.html</li>
              <li className="flex items-center gap-2"><FileCode className="h-4 w-4" /> layouts/partials/footer.html</li>
              <li className="flex items-center gap-2"><FileCode className="h-4 w-4" /> static/css/style.css</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4">كيفية الاستخدام</h2>
          <ol className="list-decimal list-inside space-y-4 marker:font-bold">
            <li>قم بنسخ محتويات مجلد <code className="text-sm">hugo-theme</code> إلى مجلد القوالب في مشروع Hugo الخاص بك (مثلاً <code className="text-sm">themes/my-news-theme</code>).</li>
            <li>تأكد من إعداد ملف <code className="text-sm">hugo.toml</code> لاستخدام القالب.</li>
            <li>لقد تم استخدام Tailwind CSS عبر CDN لسهولة الاستخدام، ولكن يمكنك إعداد build pipeline خاص بك إذا أردت.</li>
          </ol>

          <div className="mt-8">
            <Button asChild variant="outline" className="gap-2">
              <a href="/hugo-theme/layouts/index.html" target="_blank">
                معاينة ملف index.html
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
