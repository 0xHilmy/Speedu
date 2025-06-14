
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, User, Tag, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Tips Sukses Menghadapi Tes SKD CPNS 2024',
      excerpt: 'Strategi jitu untuk mempersiapkan diri menghadapi tes SKD dengan optimal dan meraih skor tinggi.',
      author: 'Tim Speedu',
      date: '12 Juni 2024',
      readTime: '5 min',
      category: 'Tips',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      title: 'Panduan Lengkap SKB Kemenkeu',
      excerpt: 'Memahami materi dan format tes SKB Kementerian Keuangan beserta tips persiapannya.',
      author: 'Dr. Sarah Wijaya',
      date: '10 Juni 2024',
      readTime: '8 min',
      category: 'Panduan',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Strategi Manajemen Waktu saat Ujian',
      excerpt: 'Teknik mengatur waktu yang efektif untuk mengerjakan soal-soal tes kedinasan.',
      author: 'Ahmad Pratama',
      date: '8 Juni 2024',
      readTime: '6 min',
      category: 'Strategi',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Motivasi dan Mental Juara ASN',
      excerpt: 'Membangun mindset yang kuat dan motivasi tinggi dalam perjalanan menjadi ASN.',
      author: 'Indira Sari',
      date: '6 Juni 2024',
      readTime: '4 min',
      category: 'Motivasi',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Analisis Soal TWK Terbaru',
      excerpt: 'Pembahasan mendalam tentang pola soal Tes Wawasan Kebangsaan terbaru.',
      author: 'Prof. Budi Santoso',
      date: '4 Juni 2024',
      readTime: '10 min',
      category: 'Analisis',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const categories = ['Semua', 'Tips', 'Panduan', 'Strategi', 'Motivasi', 'Analisis'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-speedu-blue to-speedu-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog Speedu</h1>
            <p className="text-xl text-blue-100 mb-8">
              Artikel, tips, dan panduan terbaru untuk membantu persiapan tes kedinasan Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-speedu-blue" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Artikel Unggulan</h2>
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-speedu-blue text-white px-3 py-1 rounded-full text-sm">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    {blogPosts[0].author} • {blogPosts[0].date}
                  </div>
                  <Button>
                    Baca Artikel <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Artikel Terbaru</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="w-4 h-4 text-speedu-blue" />
                    <span className="text-sm text-speedu-blue">{post.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-speedu-blue transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
