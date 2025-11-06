import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Reviews = () => {
  const [selectedFilter, setSelectedFilter] = useState('Все');

  const filters = ['Все', 'AI ассистенты', 'Редакторы кода', 'Дизайн', 'Продуктивность'];

  const reviews = [
    {
      id: 1,
      tool: 'Claude 3.5 Sonnet',
      rating: 5.0,
      author: 'Елена Козлова',
      avatar: 'ЕК',
      date: '5 ноября 2025',
      summary: 'Лучший ассистент для программирования на данный момент',
      description: 'Claude превосходит конкурентов в понимании контекста и генерации чистого кода. Особенно впечатляет работа с React и TypeScript.',
      pros: ['Отличное понимание контекста', 'Чистый код', 'Быстрые ответы'],
      cons: ['Ограничение по запросам', 'Высокая цена'],
      category: 'AI ассистенты',
      gradient: 'from-orange-500 to-red-500',
      verified: true,
      likes: 234,
      comments: 45
    },
    {
      id: 2,
      tool: 'Cursor IDE',
      rating: 4.5,
      author: 'Игорь Волков',
      avatar: 'ИВ',
      date: '4 ноября 2025',
      summary: 'Революция в написании кода с AI',
      description: 'Cursor интегрирует AI прямо в процесс разработки. Composer режим позволяет редактировать множество файлов одновременно.',
      pros: ['AI в редакторе', 'Composer режим', 'Быстрая индексация'],
      cons: ['Нестабильность', 'Требует подписки'],
      category: 'Редакторы кода',
      gradient: 'from-indigo-500 to-purple-500',
      verified: true,
      likes: 189,
      comments: 38
    },
    {
      id: 3,
      tool: 'Notion AI',
      rating: 4.3,
      author: 'Ольга Сидорова',
      avatar: 'ОС',
      date: '3 ноября 2025',
      summary: 'Идеально для организации знаний и заметок',
      description: 'Notion AI помогает структурировать информацию, генерировать саммари и улучшать тексты прямо в workspace.',
      pros: ['Интеграция с Notion', 'Хорошие саммари', 'Улучшение текстов'],
      cons: ['Только для Notion', 'Медленная работа'],
      category: 'Продуктивность',
      gradient: 'from-pink-500 to-rose-500',
      verified: false,
      likes: 156,
      comments: 29
    },
    {
      id: 4,
      tool: 'Midjourney v6',
      rating: 4.9,
      author: 'Мария Иванова',
      avatar: 'МИ',
      date: '2 ноября 2025',
      summary: 'Новый стандарт качества AI-изображений',
      description: 'V6 значительно улучшил точность промптов и реалистичность. Особенно хорош для профессионального дизайна.',
      pros: ['Фотореалистичность', 'Точность промптов', 'Стили'],
      cons: ['Дорогая подписка', 'Очереди'],
      category: 'Дизайн',
      gradient: 'from-blue-500 to-cyan-500',
      verified: true,
      likes: 312,
      comments: 67
    },
    {
      id: 5,
      tool: 'GitHub Copilot',
      rating: 4.4,
      author: 'Дмитрий Смирнов',
      avatar: 'ДС',
      date: '1 ноября 2025',
      summary: 'Проверенный инструмент для ежедневной разработки',
      description: 'Copilot стал надёжным помощником для рутинных задач. Особенно полезен для написания тестов и документации.',
      pros: ['Интеграция с VS Code', 'Хорошие автодополнения', 'Стабильность'],
      cons: ['Слабее конкурентов', 'Иногда неточные подсказки'],
      category: 'Редакторы кода',
      gradient: 'from-green-500 to-teal-500',
      verified: true,
      likes: 198,
      comments: 52
    },
    {
      id: 6,
      tool: 'Perplexity AI',
      rating: 4.7,
      author: 'Александр Петров',
      avatar: 'АП',
      date: '31 октября 2025',
      summary: 'Лучшая альтернатива поисковикам',
      description: 'Perplexity превосходно справляется с исследовательскими задачами, предоставляя структурированные ответы с источниками.',
      pros: ['Точные ответы', 'Источники', 'Быстрый поиск'],
      cons: ['Ограничения бесплатной версии', 'Иногда устаревшие данные'],
      category: 'AI ассистенты',
      gradient: 'from-purple-500 to-pink-500',
      verified: false,
      likes: 167,
      comments: 34
    }
  ];

  const filteredReviews = selectedFilter === 'Все' 
    ? reviews 
    : reviews.filter(r => r.category === selectedFilter);

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
                <Link to="/reviews" className="text-sm font-medium text-primary">Обзоры</Link>
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
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-purple-500/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-black mb-4 animate-fade-in">
              ⭐ <span className="gradient-text">Обзоры</span> инструментов
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Честные оценки и практический опыт использования
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="mb-8 flex gap-3 flex-wrap">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? "default" : "outline"}
              onClick={() => setSelectedFilter(filter)}
              className={selectedFilter === filter ? "gradient-primary" : ""}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {filteredReviews.map((review, index) => (
            <Card
              key={review.id}
              className="group relative overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer border-muted/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${review.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold">{review.tool}</h3>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-400 border-green-500/30">
                          <Icon name="CheckCircle" size={12} className="mr-1" />
                          Проверено
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{review.category}</p>
                  </div>
                  
                  <div className="flex items-center gap-1 bg-yellow-500/20 px-3 py-1.5 rounded-lg">
                    <Icon name="Star" size={16} className="fill-yellow-500 text-yellow-500" />
                    <span className="text-lg font-bold">{review.rating}</span>
                  </div>
                </div>

                <p className="text-lg font-semibold text-primary">
                  {review.summary}
                </p>

                <p className="text-muted-foreground">
                  {review.description}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div>
                    <p className="text-xs font-bold text-green-400 mb-2 flex items-center gap-1">
                      <Icon name="Plus" size={12} />
                      Плюсы
                    </p>
                    <ul className="space-y-1">
                      {review.pros.map((pro, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-1">
                          <span className="text-green-400">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-xs font-bold text-red-400 mb-2 flex items-center gap-1">
                      <Icon name="Minus" size={12} />
                      Минусы
                    </p>
                    <ul className="space-y-1">
                      {review.cons.map((con, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-1">
                          <span className="text-red-400">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className={`text-xs bg-gradient-to-br ${review.gradient}`}>
                        {review.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{review.author}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <Icon name="ThumbsUp" size={14} />
                      <span>{review.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <Icon name="MessageCircle" size={14} />
                      <span>{review.comments}</span>
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="gap-2">
            Показать больше обзоров
            <Icon name="ChevronDown" size={16} />
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <Card className="relative overflow-hidden border-muted/50">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
          <div className="relative p-12 text-center space-y-6">
            <Icon name="Sparkles" size={48} className="mx-auto text-primary animate-float" />
            <h3 className="text-3xl font-black">Написать свой обзор</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Поделитесь опытом использования инструмента и помогите сообществу сделать правильный выбор
            </p>
            <Button size="lg" className="gradient-primary">
              <Icon name="PenSquare" size={16} className="mr-2" />
              Создать обзор
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Reviews;
