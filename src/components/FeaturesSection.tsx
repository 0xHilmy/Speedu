
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Target, 
  Users, 
  Info,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      id: 'info',
      icon: Info,
      title: 'Informasi Kedinasan',
      description: 'Update terbaru seputar penerimaan CPNS, PPPK, dan informasi kedinasan lainnya.',
      items: ['Pengumuman CPNS Terbaru', 'Tips & Trik Pendaftaran', 'Panduan Formasi'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'blog',
      icon: FileText,
      title: 'Blog Pembelajaran',
      description: 'Artikel berkualitas untuk mendukung persiapan tes kedinasan Anda.',
      items: ['Strategi Pembelajaran', 'Materi SKD & SKB', 'Motivasi & Tips'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'soal',
      icon: BookOpen,
      title: 'Database Soal',
      description: 'Ribuan soal SKD dan SKB dengan pembahasan lengkap dan up-to-date.',
      items: ['5000+ Soal SKD', '3000+ Soal SKB', 'Pembahasan Detail'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'video',
      icon: Video,
      title: 'Video Pembelajaran',
      description: 'Video pembelajaran interaktif dari instruktur berpengalaman.',
      items: ['HD Quality Videos', 'Expert Instructors', 'Interactive Learning'],
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'tryout',
      icon: Target,
      title: 'Tryout SKD & SKB',
      description: 'Simulasi ujian yang mirip dengan tes sesungguhnya untuk mengukur kemampuan.',
      items: ['Simulasi Real Test', 'Ranking Nasional', 'Analisis Performa'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'about',
      icon: Users,
      title: 'About Us',
      description: 'Kenali tim profesional di balik kesuksesan Speedu dalam dunia pembelajaran.',
      items: ['Expert Team', 'Proven Track Record', 'Student Success Stories'],
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fitur Lengkap untuk Kesuksesan Anda
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Speedu menyediakan semua yang Anda butuhkan untuk mempersiapkan diri menghadapi tes kedinasan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card 
              key={feature.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-speedu-blue transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {feature.items.map((item, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-speedu-green mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-speedu-blue group-hover:text-white group-hover:border-speedu-blue transition-all"
                >
                  Explore More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
