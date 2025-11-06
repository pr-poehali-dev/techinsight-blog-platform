import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Authors = () => {
  const [sortBy, setSortBy] = useState('followers');

  const authors = [
    {
      id: 1,
      name: 'Александр Петров',
      avatar: 'АП',
      role: 'AI & ML Engineer',
      bio: 'Специализируюсь на NLP и LLM. Работал с GPT, Claude, LangChain. Делюсь практическим опытом внедрения AI в продакшн.',
      articles: 47,
      reviews: 12,
      followers: 1567,
      following: 234,
      tags: ['AI', 'Python', 'LangChain'],
      gradient: 'from-purple-500 to-pink-500',
      verified: true,
      joined: 'Январь 2024'
    },
    {
      id: 2,
      name: 'Мария Иванова',
      avatar: 'МИ',
      role: 'UX/UI Designer & AI Artist',
      bio: 'Дизайнер с фокусом на AI-генерации. Эксперт по Midjourney, Stable Diffusion. Обучаю работе с промптами.',
      articles: 38,
      reviews: 18,
      followers: 1340,
      following: 189,
      tags: ['Design', 'Midjourney', 'AI Art'],
      gradient: 'from-blue-500 to-cyan-500',
      verified: true,
      joined: 'Февраль 2024'
    },
    {
      id: 3,
      name: 'Дмитрий Смирнов',
      avatar: 'ДС',
      role: 'Senior Frontend Developer',
      bio: 'Fullstack разработчик со стажем 10+ лет. Пишу про React, Next.js, TypeScript и современные инструменты разработки.',
      articles: 52,
      reviews: 15,
      followers: 1823,
      following: 312,
      tags: ['React', 'TypeScript', 'Next.js'],
      gradient: 'from-green-500 to-teal-500',
      verified: true,
      joined: 'Декабрь 2023'
    },
    {
      id: 4,
      name: 'Елена Козлова',
      avatar: 'ЕК',
      role: 'Tech Lead & AI Enthusiast',
      bio: 'Руковожу командой разработки. Изучаю AI-ассистенты для программирования. Тестирую Claude, Cursor, Copilot.',
      articles: 29,
      reviews: 24,
      followers: 1156,
      following: 167,
      tags: ['AI Tools', 'Leadership', 'DevEx'],
      gradient: 'from-orange-500 to-red-500',
      verified: true,
      joined: 'Март 2024'
    },
    {
      id: 5,
      name: 'Игорь Волков',
      avatar: 'ИВ',
      role: 'DevOps Engineer',
      bio: 'Автоматизирую всё, что можно автоматизировать. Kubernetes, CI/CD, Infrastructure as Code. Пишу про DevOps практики.',
      articles: 34,
      reviews: 9,
      followers: 987,
      following: 145,
      tags: ['DevOps', 'Kubernetes', 'CI/CD'],
      gradient: 'from-indigo-500 to-purple-500',
      verified: false,
      joined: 'Апрель 2024'
    },
    {
      id: 6,
      name: 'Ольга Сидорова',
      avatar: 'ОС',
      role: 'Product Manager & AI Researcher',
      bio: 'Исследую применение AI в продуктах. Notion AI, ChatGPT, автоматизация процессов. Помогаю командам внедрять AI.',
      articles: 41,
      reviews: 21,
      followers: 1234,
      following: 278,
      tags: ['Product', 'AI', 'Productivity'],
      gradient: 'from-pink-500 to-rose-500',
      verified: true,
      joined: 'Январь 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/">
                <h1 className="text-3xl font-black gradient-text cursor-pointer">TechInsight</h1>
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Главная</Link>
                <Link to="/articles" className="text-sm font-medium hover:text-primary transition-colors">Статьи</Link>
                <Link to="/reviews" className="text-sm font-medium hover:text-primary transition-colors">Обзоры</Link>
                <Link to="/authors" className="text-sm font-medium text-primary">Авторы</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Link to="/create">
                <Button className="gradient-primary hover:opacity-90 transition-opacity">
                  <Icon name="PenSquare" size={16} className="mr-2" />
                  Создать
                </Button>
              </Link>
              <Button variant="outline">Войти</Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-16 border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-purple-500/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-black mb-4 animate-fade-in">
              👥 <span className="gradient-text">Авторы</span> платформы
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Эксперты и практики, которые делятся знаниями
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex gap-3">
            <Button
              variant={sortBy === 'followers' ? "default" : "outline"}
              onClick={() => setSortBy('followers')}
              className={sortBy === 'followers' ? "gradient-primary" : ""}
            >
              <Icon name="Users" size={16} className="mr-2" />
              По подписчикам
            </Button>
            <Button
              variant={sortBy === 'articles' ? "default" : "outline"}
              onClick={() => setSortBy('articles')}
              className={sortBy === 'articles' ? "gradient-primary" : ""}
            >
              <Icon name="FileText" size={16} className="mr-2" />
              По статьям
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            {authors.length} авторов в сообществе
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {authors.map((author, index) => (
            <Card
              key={author.id}
              className="group relative overflow-hidden hover:scale-[1.01] transition-all duration-300 cursor-pointer border-muted/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${author.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-20 w-20 border-4 border-primary/20 ring-2 ring-primary/10">
                    <AvatarFallback className={`text-2xl font-bold bg-gradient-to-br ${author.gradient}`}>
                      {author.avatar}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {author.name}
                      </h3>
                      {author.verified && (
                        <Icon name="BadgeCheck" size={18} className="text-primary" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{author.role}</p>
                    <p className="text-sm text-muted-foreground">{author.bio}</p>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {author.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-4 gap-4 pt-4 border-t border-border/50">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{author.articles}</p>
                    <p className="text-xs text-muted-foreground">Статей</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-secondary">{author.reviews}</p>
                    <p className="text-xs text-muted-foreground">Обзоров</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">{author.followers}</p>
                    <p className="text-xs text-muted-foreground">Подписчиков</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-muted-foreground">{author.following}</p>
                    <p className="text-xs text-muted-foreground">Подписок</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground">
                    На платформе с {author.joined}
                  </p>
                  <Button size="sm" className="gradient-primary">
                    <Icon name="UserPlus" size={14} className="mr-2" />
                    Подписаться
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="gap-2">
            Показать больше авторов
            <Icon name="ChevronDown" size={16} />
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <Card className="relative overflow-hidden border-muted/50">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
          <div className="relative p-12 text-center space-y-6">
            <Icon name="Zap" size={48} className="mx-auto text-primary animate-float" />
            <h3 className="text-3xl font-black">Присоединяйся к авторам!</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Делись опытом, помогай сообществу расти и получай признание за свою экспертизу
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gradient-primary">
                <Icon name="PenSquare" size={16} className="mr-2" />
                Стать автором
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Info" size={16} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Authors;
