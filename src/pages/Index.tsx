import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const trendingArticles = [
    {
      id: 1,
      title: 'ChatGPT-4: Революция в обработке естественного языка',
      excerpt: 'Разбираемся в новых возможностях GPT-4 и его влиянии на индустрию ИИ',
      author: 'Александр Петров',
      avatar: 'AP',
      date: '5 ноября 2025',
      tags: ['AI', 'ChatGPT', 'NLP'],
      rating: 4.8,
      comments: 42,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Midjourney v6: Новая эра генерации изображений',
      excerpt: 'Обзор последних обновлений и практические примеры использования',
      author: 'Мария Иванова',
      avatar: 'МИ',
      date: '4 ноября 2025',
      tags: ['AI', 'Midjourney', 'Design'],
      rating: 4.9,
      comments: 38,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Next.js 15: Что нового для разработчиков',
      excerpt: 'Полный гайд по новым фичам и оптимизации производительности',
      author: 'Дмитрий Смирнов',
      avatar: 'ДС',
      date: '3 ноября 2025',
      tags: ['React', 'Next.js', 'Frontend'],
      rating: 4.7,
      comments: 56,
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  const reviews = [
    {
      id: 1,
      tool: 'Claude 3.5',
      rating: 5,
      author: 'Елена Козлова',
      avatar: 'ЕК',
      summary: 'Лучший ассистент для программирования',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 2,
      tool: 'Cursor IDE',
      rating: 4.5,
      author: 'Игорь Волков',
      avatar: 'ИВ',
      summary: 'Революция в написании кода',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 3,
      tool: 'Notion AI',
      rating: 4.3,
      author: 'Ольга Сидорова',
      avatar: 'ОС',
      summary: 'Идеально для организации знаний',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  const topAuthors = [
    { name: 'Александр Петров', articles: 47, followers: 1240, avatar: 'АП' },
    { name: 'Мария Иванова', articles: 38, followers: 980, avatar: 'МИ' },
    { name: 'Дмитрий Смирнов', articles: 52, followers: 1567, avatar: 'ДС' },
    { name: 'Елена Козлова', articles: 29, followers: 756, avatar: 'ЕК' }
  ];

  const popularTags = [
    { name: 'AI', count: 342, color: 'from-purple-400 to-pink-400' },
    { name: 'ChatGPT', count: 256, color: 'from-blue-400 to-cyan-400' },
    { name: 'React', count: 198, color: 'from-green-400 to-teal-400' },
    { name: 'Design', count: 167, color: 'from-orange-400 to-red-400' },
    { name: 'DevOps', count: 143, color: 'from-indigo-400 to-purple-400' },
    { name: 'Python', count: 189, color: 'from-yellow-400 to-orange-400' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-3xl font-black gradient-text">TechInsight</h1>
              <nav className="hidden md:flex gap-6">
                {['Главная', 'Статьи', 'Обзоры', 'Авторы'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveSection(item.toLowerCase())}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button className="gradient-primary hover:opacity-90 transition-opacity">
                <Icon name="PenSquare" size={16} className="mr-2" />
                Создать
              </Button>
              <Button variant="outline">Войти</Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-black leading-tight">
              Твой путеводитель в мире{' '}
              <span className="gradient-text">технологий</span> и{' '}
              <span className="gradient-text">ИИ</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Образовательные статьи, честные обзоры и опыт использования современных инструментов от сообщества практиков
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gradient-primary hover:opacity-90 transition-opacity text-lg px-8">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Начать читать
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Users" size={20} className="mr-2" />
                Стать автором
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-4xl font-black mb-2">🔥 Тренды недели</h3>
            <p className="text-muted-foreground">Самые обсуждаемые статьи</p>
          </div>
          <Button variant="ghost" className="gap-2">
            Все статьи
            <Icon name="ArrowRight" size={16} />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingArticles.map((article, index) => (
            <Card
              key={article.id}
              className="group overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer border-muted/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${article.gradient}`} />
              <div className="p-6 space-y-4">
                <div className="flex gap-2 flex-wrap">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h4 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs gradient-primary">
                        {article.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{article.author}</p>
                      <p className="text-xs text-muted-foreground">{article.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={14} className="fill-yellow-500 text-yellow-500" />
                      <span>{article.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="MessageCircle" size={14} />
                      <span>{article.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-4xl font-black mb-2">⭐ Обзоры инструментов</h3>
            <p className="text-muted-foreground">Честные оценки от практиков</p>
          </div>
          <Button variant="ghost" className="gap-2">
            Все обзоры
            <Icon name="ArrowRight" size={16} />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className="group relative overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer border-muted/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${review.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="relative p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h4 className="text-2xl font-bold">{review.tool}</h4>
                  <div className="flex items-center gap-1 bg-yellow-500/20 px-2 py-1 rounded-lg">
                    <Icon name="Star" size={14} className="fill-yellow-500 text-yellow-500" />
                    <span className="text-sm font-bold">{review.rating}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{review.summary}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                  <Avatar className="h-7 w-7">
                    <AvatarFallback className={`text-xs bg-gradient-to-br ${review.gradient}`}>
                      {review.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-medium">{review.author}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-4xl font-black mb-2">👥 Топ авторов</h3>
                <p className="text-muted-foreground">Эксперты платформы</p>
              </div>
            </div>

            <div className="grid gap-4">
              {topAuthors.map((author, index) => (
                <Card
                  key={index}
                  className="group hover:scale-[1.01] transition-all duration-300 cursor-pointer border-muted/50"
                >
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-14 w-14 border-2 border-primary/20">
                        <AvatarFallback className="gradient-primary font-bold">
                          {author.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-lg group-hover:text-primary transition-colors">
                          {author.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {author.articles} статей · {author.followers} подписчиков
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Icon name="UserPlus" size={14} className="mr-2" />
                      Подписаться
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="text-4xl font-black mb-2">🏷️ Популярные теги</h3>
              <p className="text-muted-foreground">Найди интересное</p>
            </div>

            <Card className="p-6 border-muted/50">
              <div className="flex flex-wrap gap-3">
                {popularTags.map((tag, index) => (
                  <button
                    key={index}
                    className={`group px-4 py-2 rounded-xl bg-gradient-to-r ${tag.color} hover:scale-110 transition-transform duration-300 animate-float`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <span className="font-bold text-white drop-shadow-lg">
                      #{tag.name}
                    </span>
                    <span className="ml-2 text-xs text-white/80">{tag.count}</span>
                  </button>
                ))}
              </div>
            </Card>

            <Card className="mt-6 p-6 border-muted/50 bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="space-y-4">
                <Icon name="Sparkles" size={32} className="text-primary" />
                <h4 className="text-xl font-bold">Стань автором!</h4>
                <p className="text-sm text-muted-foreground">
                  Делись опытом, помогай другим и получай признание в сообществе
                </p>
                <Button className="w-full gradient-primary">
                  Начать писать
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 mt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h5 className="text-2xl font-black gradient-text">TechInsight</h5>
              <p className="text-sm text-muted-foreground">
                Платформа для обмена знаниями о современных технологиях и ИИ-инструментах
              </p>
            </div>
            <div>
              <h6 className="font-bold mb-4">Разделы</h6>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Статьи</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Обзоры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Авторы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Теги</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold mb-4">Сообщество</h6>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О проекте</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold mb-4">Подписка</h6>
              <p className="text-sm text-muted-foreground mb-4">
                Получай лучшие статьи на почту
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-3 py-2 bg-muted rounded-lg text-sm"
                />
                <Button size="sm" className="gradient-primary">
                  <Icon name="Send" size={14} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            © 2025 TechInsight. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
