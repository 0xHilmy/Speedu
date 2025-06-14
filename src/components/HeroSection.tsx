
import { Button } from '@/components/ui/button';
import { PlayCircle, BookOpen, Users, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-speedu-blue via-blue-600 to-speedu-green min-h-[600px] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-white/10" style={{
          backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(255,255,255,0.15) 2px, transparent 2px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">#1 Platform Pembelajaran Kedinasan</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">Speedu</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl text-blue-200 font-normal">
                ngebut belajar kedinasan
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Platform pembelajaran terlengkap untuk persiapan tes SKD dan SKB. 
              Raih impian menjadi ASN dengan bimbingan terbaik dari Speedu!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-white text-speedu-blue hover:bg-gray-100 font-semibold px-8 py-3 text-lg"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Mulai Belajar Sekarang
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-speedu-blue font-semibold px-8 py-3 text-lg"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Tonton Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">10K+</div>
                <div className="text-sm text-blue-200">Siswa Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">5K+</div>
                <div className="text-sm text-blue-200">Soal Latihan</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">95%</div>
                <div className="text-sm text-blue-200">Tingkat Kelulusan</div>
              </div>
            </div>
          </div>
          
          {/* Image/Illustration */}
          <div className="relative animate-scale-in">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Pembelajaran Online"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
              <div className="absolute -top-4 -right-4 bg-speedu-green text-white p-3 rounded-full shadow-lg">
                <Users className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-speedu-blue p-3 rounded-full shadow-lg">
                <BookOpen className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
