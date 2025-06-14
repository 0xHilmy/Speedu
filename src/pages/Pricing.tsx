
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'Rp 99.000',
      period: '/bulan',
      description: 'Cocok untuk pemula yang ingin mulai belajar',
      features: [
        'Akses 1.000+ soal latihan SKD',
        'Video pembelajaran dasar',
        '2 kali tryout per bulan',
        'Forum diskusi komunitas',
        'Materi pembelajaran PDF'
      ],
      icon: Star,
      popular: false,
      buttonText: 'Pilih Basic'
    },
    {
      name: 'Premium',
      price: 'Rp 199.000',
      period: '/bulan',
      description: 'Pilihan terpopuler untuk persiapan optimal',
      features: [
        'Akses 5.000+ soal latihan SKD & SKB',
        'Video pembelajaran lengkap & premium',
        'Tryout unlimited',
        'Bimbingan personal mentor',
        'Live class mingguan',
        'Analisis hasil tryout detail',
        'Bank soal update terbaru'
      ],
      icon: Zap,
      popular: true,
      buttonText: 'Pilih Premium'
    },
    {
      name: 'Pro',
      price: 'Rp 299.000',
      period: '/bulan',
      description: 'Untuk yang serius ingin lolos dengan nilai terbaik',
      features: [
        'Semua fitur Premium',
        'Konsultasi 1-on-1 dengan ahli',
        'Prediksi soal berdasarkan trend',
        'Akses early ke materi baru',
        'Sertifikat kelulusan',
        'Grup belajar eksklusif',
        'Simulasi interview SKB',
        'Garansi uang kembali'
      ],
      icon: Crown,
      popular: false,
      buttonText: 'Pilih Pro'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-speedu-blue to-speedu-green text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pilih Paket Belajar Terbaik</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Investasi terbaik untuk masa depan karir Anda sebagai ASN. Mulai dari Rp 99.000/bulan.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto">
            <p className="text-lg font-semibold">🎯 Tingkat Kelulusan 95%</p>
            <p className="text-sm text-blue-200">Lebih dari 25.000 alumni sukses</p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-speedu-blue border-2 scale-105' : ''} hover:shadow-lg transition-all`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-speedu-blue text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Paling Populer
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    plan.popular ? 'bg-speedu-blue' : 'bg-gray-100'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-speedu-blue'}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-speedu-blue">
                    {plan.price}
                    <span className="text-base text-gray-600 font-normal">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-speedu-green mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-speedu-blue hover:bg-speedu-blue-dark' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* FAQ Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pertanyaan Sering Diajukan</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Apakah bisa cancel kapan saja?</h3>
                <p className="text-gray-600">Ya, Anda bisa membatalkan langganan kapan saja tanpa biaya tambahan.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Bagaimana cara pembayaran?</h3>
                <p className="text-gray-600">Kami menerima transfer bank, e-wallet, dan kartu kredit untuk kemudahan Anda.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ada garansi uang kembali?</h3>
                <p className="text-gray-600">Paket Pro memiliki garansi uang kembali 100% jika tidak puas dalam 30 hari.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Berapa lama akses berlaku?</h3>
                <p className="text-gray-600">Akses berlaku sesuai periode berlangganan yang Anda pilih dan dapat diperpanjang.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
