
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Play, Clock, Star, Users, BookOpen, Video } from 'lucide-react';

const VideoLearning = () => {
  const courses = [
    {
      title: 'Masterclass TWK - Pancasila & UUD 1945',
      instructor: 'Dr. Ahmad Supardi',
      duration: '12 jam',
      lessons: 24,
      rating: 4.9,
      students: 1250,
      price: 'Rp 299.000',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      level: 'Pemula - Menengah'
    },
    {
      title: 'Strategi Jitu TIU - Logika & Matematika',
      instructor: 'Prof. Sarah Wijaya',
      duration: '15 jam',
      lessons: 30,
      rating: 4.8,
      students: 980,
      price: 'Rp 399.000',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      level: 'Menengah - Lanjut'
    },
    {
      title: 'TKP Mastery - Kepribadian ASN',
      instructor: 'Drs. Budi Santoso',
      duration: '8 jam',
      lessons: 16,
      rating: 4.9,
      students: 1100,
      price: 'Rp 199.000',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      level: 'Semua Level'
    }
  ];

  const freeVideos = [
    {
      title: 'Pengenalan Tes SKD CPNS',
      duration: '15:30',
      views: 25000,
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Tips Mengerjakan Soal TWK',
      duration: '22:45',
      views: 18500,
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Strategi Time Management',
      duration: '18:20',
      views: 32000,
      thumbnail: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Motivasi Jadi ASN',
      duration: '12:15',
      views: 15000,
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const stats = [
    { label: 'Video Pembelajaran', value: '500+', icon: Video },
    { label: 'Jam Konten', value: '1,200+', icon: Clock },
    { label: 'Siswa Aktif', value: '15,000+', icon: Users },
    { label: 'Rating Rata-rata', value: '4.8/5', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-speedu-blue to-speedu-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Video Pembelajaran</h1>
            <p className="text-xl text-blue-100 mb-8">
              Belajar dengan instruktur berpengalaman melalui video berkualitas tinggi dan materi terstruktur.
            </p>
            <Button size="lg" className="bg-white text-speedu-blue hover:bg-gray-100">
              <Play className="w-5 h-5 mr-2" />
              Mulai Belajar Gratis
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-speedu-blue/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-speedu-blue" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Courses */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Kursus Premium
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full">
                      <Play className="w-6 h-6 text-speedu-blue" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-speedu-blue text-white px-2 py-1 rounded text-sm">
                    {course.level}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <p className="text-gray-600">oleh {course.instructor}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm">{course.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm">{course.students}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </span>
                    <span className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {course.lessons} pelajaran
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-speedu-blue">{course.price}</span>
                    <Button>Daftar Sekarang</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Videos */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Video Gratis
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {freeVideos.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white/90 p-2 rounded-full">
                      <Play className="w-4 h-4 text-speedu-blue" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600">{video.views.toLocaleString()} views</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Lihat Semua Video Gratis
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VideoLearning;
