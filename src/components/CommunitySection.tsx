
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageCircle, 
  Users, 
  Star, 
  TrendingUp,
  Heart,
  Award
} from 'lucide-react';

const CommunitySection = () => {
  const testimonials = [
    {
      name: 'Sarah Putri',
      role: 'Lolos CPNS Kemenkeu 2024',
      content: 'Speedu benar-benar membantu saya mempersiapkan tes SKD dan SKB. Soal-soalnya sangat mirip dengan tes asli!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b72c5c95?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Ahmad Rizki',
      role: 'Lolos CPNS BPS 2024',
      content: 'Video pembelajaran di Speedu sangat mudah dipahami. Instrukturnya berpengalaman dan materinya lengkap.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Indira Sari',
      role: 'Lolos PPPK 2024',
      content: 'Tryout di Speedu sangat membantu mengukur kemampuan. Ranking nasionalnya membuat saya lebih termotivasi!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const stats = [
    { icon: Users, value: '15,000+', label: 'Active Members' },
    { icon: Award, value: '8,500+', label: 'Success Stories' },
    { icon: MessageCircle, value: '50,000+', label: 'Daily Discussions' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-speedu-blue to-speedu-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center text-white mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Speedu Community
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Bergabunglah dengan ribuan peserta lain yang sudah merasakan manfaat belajar di Speedu
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                  <stat.icon className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                </div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Success Stories from Our Community
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-speedu-blue">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <Heart className="w-12 h-12 text-pink-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-blue-100 mb-6">
              Join thousands of successful candidates who chose Speedu as their learning partner
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-speedu-blue hover:bg-gray-100 font-semibold">
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Community Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-speedu-blue font-semibold">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
