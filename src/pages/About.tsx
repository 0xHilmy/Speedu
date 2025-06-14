import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, Users, Award, Heart, Mail, Phone, MapPin } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Dr. Ahmad Supardi, M.Si',
      position: 'Founder & CEO',
      education: 'S3 Administrasi Publik UI',
      experience: '15+ tahun di bidang kedinasan',
      specialization: 'Strategi pembelajaran dan pengembangan kurikulum',
      achievements: 'Mantan Kepala Bagian SDM Kementerian, Penulis 5 buku tentang ASN',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Prof. Dr. Sarah Wijaya, M.Psi',
      position: 'Head of Academic',
      education: 'S3 Psikologi Pendidikan UGM',
      experience: 'Mantan Dosen & Asesor BKN',
      specialization: 'Psikotes dan analisis kepribadian untuk SKB',
      achievements: 'Trainer resmi BKN, Konsultan psikologi 500+ instansi',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b72c5c95?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Drs. Budi Santoso, M.M',
      position: 'Senior Instructor SKD',
      education: 'S2 Manajemen SDM Unpad',
      experience: '12+ tahun training ASN',
      specialization: 'TWK, TIU, dan TKP untuk berbagai formasi',
      achievements: 'Melatih 10.000+ peserta, Tingkat kelulusan 97%',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Ir. Maya Kusuma, M.T',
      position: 'Lead Instructor SKB',
      education: 'S2 Teknik Informatika ITB',
      experience: '10+ tahun sebagai PNS di Kemkominfo',
      specialization: 'SKB Teknis dan Manajerial berbagai bidang',
      achievements: 'Ahli sistem informasi pemerintahan, Instruktur bersertifikat',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Rizki Pratama, S.Kom',
      position: 'Head of Technology',
      education: 'S1 Ilmu Komputer UI',
      experience: '8+ tahun sebagai software engineer',
      specialization: 'Platform pembelajaran digital dan analisis data',
      achievements: 'Ex-Tech Lead di unicorn, Expert dalam EdTech innovation',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Fokus pada Hasil',
      description: 'Kami berkomitmen membantu setiap peserta mencapai target kelulusan dengan metode yang terbukti efektif.'
    },
    {
      icon: Users,
      title: 'Pembelajaran Kolaboratif',
      description: 'Membangun komunitas belajar yang saling mendukung dan berbagi pengalaman untuk kesuksesan bersama.'
    },
    {
      icon: Award,
      title: 'Kualitas Premium',
      description: 'Materi dan instruktur berkualitas tinggi dengan standar yang disesuaikan dengan kebutuhan tes kedinasan.'
    },
    {
      icon: Heart,
      title: 'Dedikasi Penuh',
      description: 'Mendampingi setiap langkah perjalanan Anda menuju cita-cita menjadi Aparatur Sipil Negara.'
    }
  ];

  const achievements = [
    { number: '25,000+', label: 'Alumni Sukses' },
    { number: '95%', label: 'Tingkat Kelulusan' },
    { number: '500+', label: 'Video Pembelajaran' },
    { number: '50+', label: 'Instansi Partner' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-speedu-blue to-speedu-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Speedu</h1>
            <p className="text-xl text-blue-100 mb-8">
              Platform pembelajaran kedinasan terdepan yang telah dipercaya ribuan calon ASN untuk meraih impian mereka.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Misi & Visi Kami</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-speedu-blue mb-4">Visi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi platform pembelajaran kedinasan terbaik di Indonesia yang menghasilkan ASN berkualitas dan berintegritas tinggi.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-speedu-blue mb-4">Misi</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-speedu-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Menyediakan materi pembelajaran berkualitas tinggi dan up-to-date
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-speedu-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Membangun komunitas belajar yang supportif dan kolaboratif
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-speedu-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Menggunakan teknologi terdepan untuk pengalaman belajar optimal
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-speedu-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Memberikan bimbingan personal untuk setiap peserta
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-speedu-blue text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pencapaian Kami</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-blue-200">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nilai-nilai Kami</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-speedu-blue/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-speedu-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Tim Ahli Kami</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Dipimpin oleh para ahli berpengalaman di bidangnya masing-masing untuk memberikan pembelajaran terbaik
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-speedu-blue font-medium mb-3">{member.position}</p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Pendidikan:</span>
                      <p className="text-gray-600">{member.education}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Pengalaman:</span>
                      <p className="text-gray-600">{member.experience}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Spesialisasi:</span>
                      <p className="text-gray-600">{member.specialization}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Prestasi:</span>
                      <p className="text-gray-600">{member.achievements}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Hubungi Kami</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-speedu-blue mr-3" />
                    <div>
                      <p className="text-gray-900 font-medium">Alamat</p>
                      <p className="text-gray-600">Jl. Pendidikan No. 123, Jakarta Selatan, 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-speedu-green mr-3" />
                    <div>
                      <p className="text-gray-900 font-medium">Telepon</p>
                      <p className="text-gray-600">+62 21 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-yellow-500 mr-3" />
                    <div>
                      <p className="text-gray-900 font-medium">Email</p>
                      <p className="text-gray-600">hello@speedu.id</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Jam Operasional</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Senin - Jumat</span>
                    <span className="text-gray-900 font-medium">08:00 - 17:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sabtu</span>
                    <span className="text-gray-900 font-medium">09:00 - 15:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Minggu</span>
                    <span className="text-gray-900 font-medium">Tutup</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Button size="lg" className="w-full">
                    <Mail className="w-5 h-5 mr-2" />
                    Kirim Pesan
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
