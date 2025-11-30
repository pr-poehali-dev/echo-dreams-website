import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-[#1A1F2C] to-[#0F1419]">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/d71baa46-e307-4114-9692-d892137b440d.jpg" 
              alt="Эхо Мечты" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-bold text-primary">Эхо Мечты</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['home', 'about', 'services', 'experiences', 'reviews', 'portfolio', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'about' && 'О компании'}
                {section === 'services' && 'Услуги'}
                {section === 'experiences' && 'Впечатления'}
                {section === 'reviews' && 'Отзывы'}
                {section === 'portfolio' && 'Портфолио'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>

          <Button 
            onClick={() => scrollToSection('contacts')}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Связаться
          </Button>
        </nav>
      </header>

      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsIDE3NSwgNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="mb-8">
              <img 
                src="https://cdn.poehali.dev/files/d71baa46-e307-4114-9692-d892137b440d.jpg" 
                alt="Эхо Мечты" 
                className="h-32 w-32 object-contain mx-auto mb-6"
              />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              Эхо Мечты
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 mb-4">
              Превращаем ваши фантазии в ощутимую реальность
            </p>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Погрузитесь в миры любимых фильмов, сериалов, книг и сказок. 
              Мы создаём уникальные, персонализированные иммерсивные впечатления для взрослых.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
              >
                Наши услуги
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('experiences')}
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
              >
                Впечатления
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-6 text-primary">О компании</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
            
            <div className="space-y-8 text-lg text-foreground/80">
              <p className="leading-relaxed">
                Корпорация <span className="text-primary font-semibold">"Эхо Мечты"</span> — это инновационная компания, 
                специализирующаяся на создании уникальных, персонализированных иммерсивных впечатлений для взрослых, 
                позволяющих им полностью погрузиться в миры любимых фильмов, сериалов, книг, художественных произведений и сказок.
              </p>
              
              <p className="leading-relaxed">
                Мы превращаем фантазии в ощутимую реальность, предлагая не просто развлечение, 
                а глубокий, эмоционально насыщенный опыт.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <Card className="bg-muted border-primary/20 hover:border-primary transition-colors">
                  <CardContent className="pt-6">
                    <Icon name="Sparkles" className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-primary">Персонализация</h3>
                    <p className="text-foreground/70">Каждое впечатление создаётся специально под ваши предпочтения</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-muted border-primary/20 hover:border-primary transition-colors">
                  <CardContent className="pt-6">
                    <Icon name="Heart" className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-primary">Эмоции</h3>
                    <p className="text-foreground/70">Глубокий эмоционально насыщенный опыт на всех уровнях</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-muted border-primary/20 hover:border-primary transition-colors">
                  <CardContent className="pt-6">
                    <Icon name="Star" className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-primary">Качество</h3>
                    <p className="text-foreground/70">Высочайший уровень реализации каждой детали</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 relative bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-6 text-primary">Наши услуги</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: 'Palette', title: 'Декорации', desc: 'Создание атмосферных декораций и локаций из ваших любимых историй' },
              { icon: 'Shirt', title: 'Костюмы', desc: 'Профессиональные костюмы и образы персонажей' },
              { icon: 'FileText', title: 'Сценарии', desc: 'Разработка уникальных сценариев взаимодействия' },
              { icon: 'Users', title: 'Актёры', desc: 'Подбор профессиональных актёров и персонала' },
              { icon: 'PartyPopper', title: 'Мероприятия', desc: 'Организация тематических вечеринок и фестивалей' },
              { icon: 'Map', title: 'Туры', desc: 'Квесты и туры по культовым местам съёмок' }
            ].map((service, idx) => (
              <Card 
                key={idx}
                className="bg-background border-primary/20 hover:border-primary transition-all hover:scale-105 duration-300"
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-primary">{service.title}</h3>
                  <p className="text-foreground/70">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="experiences" className="py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-6 text-primary">Впечатления</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-xl text-center text-foreground/80 mb-12">
              Полная персонализация впечатлений под ваши предпочтения — 
              от выбора сюжета до мельчайших деталей атмосферы
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-muted to-background border-primary/20 overflow-hidden group">
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name="Film" className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-primary">Кино и Сериалы</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Станьте частью культовых фильмов и сериалов. 
                    Проживите ключевые сцены и испытайте эмоции главных героев.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-muted to-background border-primary/20 overflow-hidden group">
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name="Book" className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-primary">Книги и Сказки</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Оживите страницы любимых книг. 
                    Погрузитесь в волшебные миры литературных шедевров.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-muted to-background border-primary/20 overflow-hidden group">
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name="Paintbrush" className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-primary">Искусство</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Войдите в мир художественных произведений. 
                    Почувствуйте себя частью великих картин и инсталляций.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-muted to-background border-primary/20 overflow-hidden group">
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name="Wand2" className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-primary">Индивидуальное</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Создадим уникальный мир специально для вас. 
                    Воплотим любую вашу фантазию в реальность.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 relative bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-6 text-primary">Отзывы</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Анна С.',
                text: 'Невероятный опыт! Я всегда мечтала оказаться в мире Гарри Поттера, и команда "Эхо Мечты" воплотила это в жизнь. Каждая деталь была продумана до мелочей.',
                stars: 5
              },
              {
                name: 'Дмитрий К.',
                text: 'Организовали для меня квест по мотивам "Игры престолов". Это было потрясающе! Профессиональные актёры, шикарные костюмы и декорации. Рекомендую!',
                stars: 5
              },
              {
                name: 'Елена М.',
                text: 'Подарила мужу путешествие в мир "Властелина колец" на день рождения. Он был в восторге! Спасибо за незабываемые эмоции и внимание к деталям.',
                stars: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="bg-background border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex mb-3">
                    {[...Array(review.stars)].map((_, i) => (
                      <Icon key={i} name="Star" className="w-5 h-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-primary">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-6 text-primary">Портфолио</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Мир Средиземья',
                desc: 'Иммерсивный квест по мотивам "Властелина колец" с профессиональными актёрами',
                icon: 'Mountain'
              },
              {
                title: 'Хогвартс Экспресс',
                desc: 'Тематическая вечеринка в стиле вселенной Гарри Поттера с магическими эффектами',
                icon: 'Wand2'
              },
              {
                title: 'Вестерос',
                desc: 'Банкет в стиле "Игры престолов" с исторически точными костюмами и декорациями',
                icon: 'Crown'
              },
              {
                title: 'Алиса в Стране Чудес',
                desc: 'Сюрреалистичное погружение в безумный мир Льюиса Кэрролла',
                icon: 'Coffee'
              }
            ].map((project, idx) => (
              <Card 
                key={idx}
                className="bg-gradient-to-br from-background to-muted border-primary/20 hover:border-primary transition-all hover:scale-105 duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Icon name={project.icon} className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-primary">{project.title}</h3>
                  <p className="text-foreground/70">{project.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 relative bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-6 text-primary">Контакты</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-background border-primary/20">
              <CardContent className="p-8">
                <p className="text-center text-foreground/80 mb-8">
                  Свяжитесь с нами, чтобы обсудить ваше будущее незабываемое впечатление
                </p>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">Имя</label>
                    <Input 
                      placeholder="Ваше имя" 
                      className="bg-muted border-primary/20 focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-muted border-primary/20 focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">Телефон</label>
                    <Input 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67" 
                      className="bg-muted border-primary/20 focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашей мечте..." 
                      className="bg-muted border-primary/20 focus:border-primary min-h-32"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                  >
                    Отправить заявку
                  </Button>
                </form>
                
                <div className="mt-8 pt-8 border-t border-primary/20">
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Icon name="Mail" className="w-5 h-5 text-primary" />
                      <span>info@echodreams.ru</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Phone" className="w-5 h-5 text-primary" />
                      <span>+7 (495) 123-45-67</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-primary/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/d71baa46-e307-4114-9692-d892137b440d.jpg" 
                alt="Эхо Мечты" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold text-primary">Эхо Мечты</span>
            </div>
            
            <p className="text-foreground/60 text-sm">
              © 2024 Корпорация "Эхо Мечты". Превращаем мечты в реальность.
            </p>
            
            <div className="flex gap-4">
              <Icon name="Facebook" className="w-6 h-6 text-foreground/60 hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Instagram" className="w-6 h-6 text-foreground/60 hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Twitter" className="w-6 h-6 text-foreground/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
