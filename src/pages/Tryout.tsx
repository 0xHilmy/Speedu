
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, Clock, Users, Trophy, Play, BarChart3, Medal } from 'lucide-react';

const Tryout = () => {
  const tryouts = [
    {
      title: 'Tryout SKD Nasional #15',
      type: 'SKD Komprehensif',
      status: 'Berlangsung',
      participants: 2340,
      timeLeft: '2 hari 14 jam',
      duration: '100 menit',
      questions: 100,
      difficulty: 'Sesuai Standar',
      prize: 'Sertifikat + Analisis',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Tryout SKB Kemenkeu',
      type: 'SKB Spesifik',
      status: 'Segera Dimulai',
      participants: 890,
      timeLeft: '5 hari 8 jam',
      duration: '120 menit',
      questions: 80,
      difficulty: 'Tinggi',
      prize: 'Ranking Nasional',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Tryout PPPK Guru',
      type: 'PPPK Pendidikan',
      status: 'Pendaftaran',
      participants: 1560,
      timeLeft: '1 minggu',
      duration: '90 menit',
      questions: 75,
      difficulty: 'Menengah',
      prize: 'E-Certificate',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const myResults = [
    {
      test: 'Tryout SKD Nasional #14',
      score: 420,
      maxScore: 500,
      rank: 156,
      totalParticipants: 2180,
      date: '10 Juni 2024',
      percentage: 84
    },
    {
      test: 'Tryout SKB BPS',
      score: 385,
      maxScore: 450,
      rank: 89,
      totalParticipants: 1240,
      date: '5 Juni 2024',
      percentage: 85.5
    },
    {
      test: 'Tryout SKD Mini #8',
      score: 190,
      maxScore: 250,
      rank: 203,
      totalParticipants: 1890,
      date: '1 Juni 2024',
      percentage: 76
    }
  ];

  const stats = [
    { label: 'Total Tryout', value: '150+', icon: Target },
    { label: 'Peserta Aktif', value: '25,000+', icon: Users },
    { label: 'Tryout Selesai', value: '120+', icon: Trophy },
    { label: 'Akurasi Prediksi', value: '94%', icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-speedu-blue to-speedu-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tryout SKD & SKB</h1>
            <p className="text-xl text-blue-100 mb-8">
              Uji kemampuan Anda dengan simulasi tes yang akurat dan dapatkan ranking nasional bersama ribuan peserta lainnya.
            </p>
            <Button size="lg" className="bg-white text-speedu-blue hover:bg-gray-100">
              <Play className="w-5 h-5 mr-2" />
              Ikuti Tryout Sekarang
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

      {/* Active Tryouts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tryout Tersedia
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tryouts.map((tryout, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={tryout.image} 
                    alt={tryout.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
                    tryout.status === 'Berlangsung' ? 'bg-green-500 text-white' :
                    tryout.status === 'Segera Dimulai' ? 'bg-yellow-500 text-white' :
                    'bg-blue-500 text-white'
                  }`}>
                    {tryout.status}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {tryout.type}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{tryout.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Peserta</span>
                      <span className="font-medium flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {tryout.participants}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Waktu Tersisa</span>
                      <span className="font-medium text-speedu-blue">{tryout.timeLeft}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durasi</span>
                      <span className="font-medium flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tryout.duration}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Jumlah Soal</span>
                      <span className="font-medium">{tryout.questions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tingkat Kesulitan</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        tryout.difficulty === 'Tinggi' ? 'bg-red-100 text-red-800' :
                        tryout.difficulty === 'Menengah' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {tryout.difficulty}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hadiah</span>
                      <span className="font-medium text-purple-600">{tryout.prize}</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    {tryout.status === 'Berlangsung' ? 'Ikuti Sekarang' : 'Daftar'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* My Results */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Hasil Tryout Saya
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {myResults.map((result, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Medal className="w-5 h-5 mr-2 text-speedu-blue" />
                    {result.test}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{result.date}</p>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-speedu-blue mb-1">
                      {result.score}
                    </div>
                    <div className="text-gray-600">dari {result.maxScore}</div>
                    <div className="text-lg font-semibold text-green-600 mt-2">
                      {result.percentage}%
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Peringkat</span>
                      <span className="font-medium">#{result.rank}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Peserta</span>
                      <span className="font-medium">{result.totalParticipants}</span>
                    </div>
                    <div className="mt-4">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-speedu-blue h-2 rounded-full"
                          style={{ width: `${result.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Lihat Detail Hasil
                  </Button>
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

export default Tryout;
