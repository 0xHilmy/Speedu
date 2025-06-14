
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Database, Search, Filter, BookOpen, Clock, Trophy, Target } from 'lucide-react';

const DatabaseSoal = () => {
  const categories = [
    {
      title: 'Tes Wawasan Kebangsaan (TWK)',
      total: 1250,
      difficulty: 'Menengah',
      description: 'Soal-soal seputar Pancasila, UUD 1945, NKRI, dan Bhinneka Tunggal Ika',
      icon: BookOpen,
      color: 'bg-blue-500'
    },
    {
      title: 'Tes Intelegensi Umum (TIU)',
      total: 980,
      difficulty: 'Sulit',
      description: 'Soal logika, matematika, bahasa Indonesia, dan kemampuan analisis',
      icon: Target,
      color: 'bg-green-500'
    },
    {
      title: 'Tes Karakteristik Pribadi (TKP)',
      total: 750,
      difficulty: 'Mudah',
      description: 'Soal yang mengukur karakter dan kepribadian calon ASN',
      icon: Trophy,
      color: 'bg-purple-500'
    }
  ];

  const recentSets = [
    {
      title: 'Paket Soal TWK - Pancasila dan Ideologi',
      questions: 50,
      duration: '60 menit',
      difficulty: 'Menengah',
      attempts: 1240
    },
    {
      title: 'Paket Soal TIU - Logika Matematika',
      questions: 40,
      duration: '45 menit',
      difficulty: 'Sulit',
      attempts: 890
    },
    {
      title: 'Paket Soal TKP - Integritas dan Kejujuran',
      questions: 35,
      duration: '30 menit',
      difficulty: 'Mudah',
      attempts: 1580
    }
  ];

  const stats = [
    { label: 'Total Soal', value: '2,980+', icon: Database },
    { label: 'Pengguna Aktif', value: '15,000+', icon: BookOpen },
    { label: 'Paket Soal', value: '150+', icon: Target },
    { label: 'Tingkat Akurasi', value: '95%', icon: Trophy }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-speedu-blue to-speedu-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Database Soal</h1>
            <p className="text-xl text-blue-100 mb-8">
              Koleksi lengkap soal-soal SKD dan SKB dari berbagai instansi untuk persiapan optimal Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-speedu-blue hover:bg-gray-100">
                <Search className="w-5 h-5 mr-2" />
                Cari Soal
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-speedu-blue">
                <Filter className="w-5 h-5 mr-2" />
                Filter Kategori
              </Button>
            </div>
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

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Kategori Soal SKD
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`${category.color} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Total Soal</span>
                    <span className="font-semibold text-speedu-blue">{category.total}</span>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm text-gray-500">Tingkat Kesulitan</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      category.difficulty === 'Sulit' ? 'bg-red-100 text-red-800' :
                      category.difficulty === 'Menengah' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {category.difficulty}
                    </span>
                  </div>
                  <Button className="w-full">Mulai Latihan</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Sets */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Paket Soal Terpopuler
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recentSets.map((set, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{set.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Jumlah Soal</span>
                      <span className="font-medium">{set.questions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durasi</span>
                      <span className="font-medium flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {set.duration}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Kesulitan</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        set.difficulty === 'Sulit' ? 'bg-red-100 text-red-800' :
                        set.difficulty === 'Menengah' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {set.difficulty}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sudah Dicoba</span>
                      <span className="font-medium text-speedu-blue">{set.attempts}x</span>
                    </div>
                  </div>
                  <Button className="w-full">Kerjakan Sekarang</Button>
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

export default DatabaseSoal;
