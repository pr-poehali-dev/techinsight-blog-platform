import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [sortBy, setSortBy] = useState('recent');

  const categories = ['Все', 'AI & ML', 'Frontend', 'Backend', 'DevOps', 'Design'];

  const articles = [
    {
      id: 1,
      title: 'ChatGPT-4: Революция в обработке естественного языка',
      excerpt: 'Подробный разбор архитектуры GPT-4, новых возможностей multimodal режима и практические кейсы использования в продакшене',
      author: 'Александр Петров',
      avatar: 'АП',
      date: '5 ноября 2025',
      readTime: '12 мин',
      tags: ['AI', 'ChatGPT', 'NLP'],
      rating: 4.8,
      comments: 42,
      views: 1847,
      category: 'AI & ML',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Midjourney v6: Новая эра генерации изображений',
      excerpt: 'Обзор последних обновлений Midjourney: улучшенная точность промптов, новые параметры стилизации и сравнение с конкурентами',
      author: 'Мария Иванова',
      avatar: 'МИ',
      date: '4 ноября 2025',
      readTime: '8 мин',
      tags: ['AI', 'Midjourney', 'Design'],
      rating: 4.9,
      comments: 38,
      views: 2103,
      category: 'Design',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Next.js 15: Что нового для разработчиков',
      excerpt: 'Полный гайд по Server Components, новой системе кеширования, Turbopack и другим фичам Next.js 15',
      author: 'Дмитрий Смирнов',
      avatar: 'ДС',
      date: '3 ноября 2025',
      readTime: '15 мин',
      tags: ['React', 'Next.js', 'Frontend'],
      rating: 4.7,
      comments: 56,
      views: 3241,
      category: 'Frontend',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      title: 'Kubernetes в продакшене: Чек-лист безопасности',
      excerpt: 'Проверенные практики настройки K8s кластера: RBAC, Network Policies, Pod Security Standards и мониторинг',
      author: 'Игорь Волков',
      avatar: 'ИВ',
      date: '2 ноября 2025',
      readTime: '20 мин',
      tags: ['Kubernetes', 'DevOps', 'Security'],
      rating: 4.6,
      comments: 29,
      views: 1567,
      category: 'DevOps',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'TypeScript 5.3: Новые возможности типизации',
      excerpt: 'Разбираем Import Attributes, narrowing improvements и другие улучшения системы типов',
      author: 'Елена Козлова',
      avatar: 'ЕК',
      date: '1 ноября 2025',
      readTime: '10 мин',
      tags: ['TypeScript', 'JavaScript', 'Frontend'],
      rating: 4.5,
      comments: 34,
      views: 1923,
      category: 'Frontend',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'LangChain: Строим AI-агента с памятью',
      excerpt: 'Пошаговое руководство по созданию интеллектуального агента с использованием векторных баз данных',
      author: 'Ольга Сидорова',
      avatar: 'ОС',
      date: '31 октября 2025',
      readTime: '18 мин',
      tags: ['AI', 'LangChain', 'Python'],
      rating: 4.9,
      comments: 67,
      views: 2876,
      category: 'AI & ML',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  const filteredArticles = selectedCategory === 'Все' 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

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
                <Link to="/articles" className="text-sm font-medium text-primary">Статьи</Link>
                <Link to="/reviews" className="text-sm font-medium hover:text-primary transition-colors">Обзоры</Link>
                <Link to="/authors" className="text-sm font-medium hover:text-primary transition-colors">Авторы</Link>
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-black mb-4 animate-fade-in">
              📚 Все <span className="gradient-text">статьи</span>
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Образовательные материалы от экспертов сообщества
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 space-y-6">
            <Card className="p-6 border-muted/50 sticky top-24">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Icon name="Filter" size={16} />
                Категории
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                      selectedCategory === cat
                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-primary font-medium'
                        : 'hover:bg-muted text-muted-foreground'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Icon name="ArrowUpDown" size={16} />
                  Сортировка
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSortBy('recent')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                      sortBy === 'recent'
                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-primary font-medium'
                        : 'hover:bg-muted text-muted-foreground'
                    }`}
                  >
                    Новые
                  </button>
                  <button
                    onClick={() => setSortBy('popular')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                      sortBy === 'popular'
                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-primary font-medium'
                        : 'hover:bg-muted text-muted-foreground'
                    }`}
                  >
                    Популярные
                  </button>
                  <button
                    onClick={() => setSortBy('top')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                      sortBy === 'top'
                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-primary font-medium'
                        : 'hover:bg-muted text-muted-foreground'
                    }`}
                  >
                    Топ рейтинг
                  </button>
                </div>
              </div>
            </Card>
          </aside>

          <main className="flex-1">
            <div className="space-y-6">
              {filteredArticles.map((article, index) => (
                <Card
                  key={article.id}
                  className="group overflow-hidden hover:scale-[1.01] transition-all duration-300 cursor-pointer border-muted/50 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className={`md:w-48 h-48 md:h-auto bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                        📄
                      </div>
                    </div>
                    
                    <div className="flex-1 p-6 space-y-4">
                      <div className="flex gap-2 flex-wrap">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-muted-foreground line-clamp-2">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="text-xs gradient-primary">
                              {article.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{article.author}</p>
                            <p className="text-xs text-muted-foreground">
                              {article.date} · {article.readTime}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Icon name="Eye" size={16} />
                            <span>{article.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Star" size={16} className="fill-yellow-500 text-yellow-500" />
                            <span>{article.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="MessageCircle" size={16} />
                            <span>{article.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button variant="outline" size="lg" className="gap-2">
                Загрузить ещё
                <Icon name="ChevronDown" size={16} />
              </Button>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Articles;
