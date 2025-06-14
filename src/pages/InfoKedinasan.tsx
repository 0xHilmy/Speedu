
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Info, Calendar, MapPin, Users, FileText, ExternalLink } from 'lucide-react';

const InfoKedinasan = () => {
  const announcements = [
    {
      title: 'Pendaftaran CPNS 2024 Dibuka',
      date: '15 Juni 2024',
      category: 'CPNS',
      excerpt: 'Pemerintah membuka pendaftaran CPNS 2024 untuk berbagai kementerian dan lembaga.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Update Formasi PPPK Guru 2024',
      date: '10 Juni 2024',
      category: 'PPPK',
      excerpt: 'Kemendikbud mengumumkan formasi terbaru untuk PPPK Guru tahun 2024.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Jadwal SKB Kemenkeu 2024',
      date: '5 Juni 2024',
      category: 'SKB',
      excerpt: 'Kementerian Keuangan mengumumkan jadwal pelaksanaan SKB untuk seleksi CPNS 2024.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const quickInfo = [
    { icon: Calendar, title: 'Timeline CPNS 2024', desc: 'Jadwal lengkap seleksi CPNS' },
    { icon: MapPin, title: 'Lokasi Tes', desc: 'Info lokasi tes SKD & SKB' },
    { icon: Users, title: 'Formasi Terbuka', desc: 'Daftar formasi yang tersedia' },
    { icon: FileText, title: 'Persyaratan', desc: 'Syarat pendaftaran lengkap' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-speedu-blue to-speedu-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Info Kedinasan</h1>
            <p className="text-xl text-blue-100 mb-8">
              Dapatkan informasi terkini seputar seleksi CPNS, PPPK, dan berbagai peluang karir di instansi pemerintah.
            </p>
            <Button size="lg" className="bg-white text-speedu-blue hover:bg-gray-100">
              <Info className="w-5 h-5 mr-2" />
              Lihat Info Terbaru
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {quickInfo.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <item.icon className="w-12 h-12 text-speedu-blue mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Announcements */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pengumuman Terbaru
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {announcements.map((announcement, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={announcement.image} 
                  alt={announcement.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-speedu-blue text-white px-2 py-1 rounded">
                      {announcement.category}
                    </span>
                    <span className="text-xs text-gray-500">{announcement.date}</span>
                  </div>
                  <CardTitle className="text-lg">{announcement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{announcement.excerpt}</p>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Baca Selengkapnya
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

export default InfoKedinasan;
