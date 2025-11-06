import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const ArticleView = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);

  const article = {
    id: 1,
    title: 'ChatGPT-4: Революция в обработке естественного языка',
    author: {
      name: 'Александр Петров',
      avatar: 'АП',
      role: 'AI & ML Engineer',
      followers: 1567,
      articles: 47
    },
    date: '5 ноября 2025',
    readTime: '12 мин',
    tags: ['AI', 'ChatGPT', 'NLP', 'GPT-4'],
    rating: 4.8,
    ratingsCount: 156,
    views: 1847,
    likes: 234,
    commentsCount: 42,
    bookmarks: 89,
    gradient: 'from-purple-500 to-pink-500'
  };

  const comments = [
    {
      id: 1,
      author: 'Мария Иванова',
      avatar: 'МИ',
      date: '6 ноября 2025',
      text: 'Отличная статья! Особенно полезен раздел про оптимизацию промптов. Применил советы в своём проекте — результаты впечатляют.',
      likes: 12,
      replies: 2
    },
    {
      id: 2,
      author: 'Дмитрий Смирнов',
      avatar: 'ДС',
      date: '5 ноября 2025',
      text: 'Было бы интересно увидеть сравнение с Claude 3.5. У меня сложилось впечатление, что Claude лучше справляется с кодом.',
      likes: 8,
      replies: 1
    },
    {
      id: 3,
      author: 'Елена Козлова',
      avatar: 'ЕК',
      date: '5 ноября 2025',
      text: 'Спасибо за подробный разбор! Не знала про параметр temperature для контроля креативности ответов.',
      likes: 15,
      replies: 0
    }
  ];

  const relatedArticles = [
    {
      id: 2,
      title: 'Claude 3.5: Детальное сравнение с GPT-4',
      author: 'Елена Козлова',
      readTime: '10 мин',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 3,
      title: 'Prompt Engineering: Лучшие практики 2025',
      author: 'Мария Иванова',
      readTime: '15 мин',
      gradient: 'from-blue-500 to-cyan-500'
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

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-1 lg:sticky lg:top-24 h-fit">
            <div className="flex lg:flex-col gap-4 items-center">
              <button
                onClick={() => setLiked(!liked)}
                className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-muted transition-all"
              >
                <Icon 
                  name="Heart" 
                  size={24} 
                  className={`transition-all ${liked ? 'fill-red-500 text-red-500' : 'group-hover:text-red-500'}`} 
                />
                <span className={`text-sm font-bold ${liked ? 'text-red-500' : 'text-muted-foreground'}`}>
                  {liked ? article.likes + 1 : article.likes}
                </span>
              </button>

              <button
                onClick={() => setBookmarked(!bookmarked)}
                className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-muted transition-all"
              >
                <Icon 
                  name="Bookmark" 
                  size={24} 
                  className={`transition-all ${bookmarked ? 'fill-primary text-primary' : 'group-hover:text-primary'}`} 
                />
                <span className={`text-sm font-bold ${bookmarked ? 'text-primary' : 'text-muted-foreground'}`}>
                  {bookmarked ? article.bookmarks + 1 : article.bookmarks}
                </span>
              </button>

              <button className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-muted transition-all">
                <Icon name="MessageCircle" size={24} className="group-hover:text-accent transition-colors" />
                <span className="text-sm font-bold text-muted-foreground">{article.commentsCount}</span>
              </button>

              <button className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-muted transition-all">
                <Icon name="Share2" size={24} className="group-hover:text-secondary transition-colors" />
              </button>
            </div>
          </aside>

          <main className="lg:col-span-8">
            <article className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="flex gap-2 flex-wrap">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-sm">
                      #{tag}
                    </Badge>
                  ))}
                </div>

                <h1 className="text-5xl font-black leading-tight">
                  {article.title}
                </h1>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <Link to="/authors">
                      <Avatar className="h-14 w-14 cursor-pointer ring-2 ring-primary/20 hover:ring-primary/40 transition-all">
                        <AvatarFallback className="gradient-primary text-lg font-bold">
                          {article.author.avatar}
                        </AvatarFallback>
                      </Avatar>
                    </Link>
                    <div>
                      <Link to="/authors">
                        <p className="font-bold text-lg hover:text-primary transition-colors cursor-pointer">
                          {article.author.name}
                        </p>
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        {article.date} · {article.readTime} чтения
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
                  </div>
                </div>
              </div>

              <div className={`h-1 bg-gradient-to-r ${article.gradient} rounded-full`} />

              <div className="prose prose-invert prose-lg max-w-none">
                <h2>Введение</h2>
                <p>
                  GPT-4 стал значительным шагом вперёд в развитии больших языковых моделей. В этой статье я поделюсь 
                  практическим опытом работы с GPT-4, расскажу о его сильных сторонах и ограничениях.
                </p>

                <h2>Ключевые улучшения</h2>
                <p>
                  По сравнению с предыдущими версиями, GPT-4 демонстрирует существенные улучшения в нескольких областях:
                </p>

                <h3>1. Понимание контекста</h3>
                <p>
                  Модель способна удерживать контекст на протяжении значительно более длинных диалогов. Окно контекста 
                  увеличено до 128K токенов в расширенной версии, что открывает новые возможности для обработки больших документов.
                </p>

                <h3>2. Multimodal возможности</h3>
                <p>
                  GPT-4 может анализировать изображения и генерировать текстовые описания, что делает его универсальным 
                  инструментом для работы с разными типами контента.
                </p>

                <h3>3. Точность и надёжность</h3>
                <p>
                  Модель показывает значительно меньше галлюцинаций и более точно следует инструкциям в промптах.
                </p>

                <h2>Практические кейсы</h2>
                <p>
                  В нашей команде мы используем GPT-4 для различных задач:
                </p>

                <ul>
                  <li>Генерация и рефакторинг кода с детальными комментариями</li>
                  <li>Анализ технической документации и создание саммари</li>
                  <li>Помощь в дебаггинге сложных проблем</li>
                  <li>Создание тестовых сценариев и unit-тестов</li>
                </ul>

                <h2>Оптимизация промптов</h2>
                <p>
                  Один из ключевых навыков при работе с GPT-4 — умение правильно формулировать промпты. Вот несколько 
                  проверенных техник:
                </p>

                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// Пример структурированного промпта
{
  "role": "system",
  "content": "Ты опытный разработчик..."
}

// Использование параметра temperature
{
  "temperature": 0.2  // Для детерминированных результатов
}`}</code>
                </pre>

                <h2>Заключение</h2>
                <p>
                  GPT-4 действительно изменил подход к решению многих задач в разработке. Несмотря на высокую стоимость, 
                  инвестиции окупаются за счёт значительного повышения продуктивности команды.
                </p>
              </div>

              <Card className="p-6 border-primary/20 bg-primary/5">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Icon name="Star" size={18} />
                  Оцените статью
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Помогите другим читателям — поставьте оценку
                </p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className={`p-3 rounded-lg border-2 transition-all hover:scale-110 ${
                        rating && star <= rating
                          ? 'border-yellow-500 bg-yellow-500/20'
                          : 'border-border hover:border-yellow-500/50'
                      }`}
                    >
                      <Icon 
                        name="Star" 
                        size={24} 
                        className={star <= (rating || 0) ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground'} 
                      />
                    </button>
                  ))}
                </div>
                {rating && (
                  <p className="text-sm text-primary mt-4 animate-fade-in">
                    ✨ Спасибо за оценку!
                  </p>
                )}
              </Card>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">💬 Комментарии ({comments.length})</h3>
                  <Button 
                    onClick={() => setShowCommentForm(!showCommentForm)}
                    variant="outline"
                  >
                    <Icon name="MessageSquarePlus" size={16} className="mr-2" />
                    Написать
                  </Button>
                </div>

                {showCommentForm && (
                  <Card className="p-6 border-primary/20 animate-slide-up">
                    <textarea
                      placeholder="Поделитесь своим мнением..."
                      className="w-full h-32 px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                    <div className="flex gap-3 mt-4">
                      <Button className="gradient-primary">
                        <Icon name="Send" size={14} className="mr-2" />
                        Отправить
                      </Button>
                      <Button variant="ghost" onClick={() => setShowCommentForm(false)}>
                        Отмена
                      </Button>
                    </div>
                  </Card>
                )}

                <div className="space-y-4">
                  {comments.map((comment) => (
                    <Card key={comment.id} className="p-6 border-muted/50 hover:border-primary/20 transition-all">
                      <div className="flex gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="gradient-secondary text-sm">
                            {comment.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-bold">{comment.author}</p>
                              <p className="text-xs text-muted-foreground">{comment.date}</p>
                            </div>
                          </div>
                          <p className="text-muted-foreground">{comment.text}</p>
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                              <Icon name="ThumbsUp" size={14} />
                              <span>{comment.likes}</span>
                            </button>
                            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                              <Icon name="MessageCircle" size={14} />
                              <span>Ответить</span>
                              {comment.replies > 0 && ` (${comment.replies})`}
                            </button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="text-center pt-4">
                  <Button variant="outline">
                    Загрузить ещё комментарии
                    <Icon name="ChevronDown" size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </article>
          </main>

          <aside className="lg:col-span-3 space-y-6">
            <Card className="p-6 border-muted/50 sticky top-24">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Icon name="User" size={16} />
                    Об авторе
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="gradient-primary">
                        {article.author.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold">{article.author.name}</p>
                      <p className="text-xs text-muted-foreground">{article.author.role}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4 text-center">
                    <div>
                      <p className="text-lg font-bold text-primary">{article.author.articles}</p>
                      <p className="text-xs text-muted-foreground">Статей</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-secondary">{article.author.followers}</p>
                      <p className="text-xs text-muted-foreground">Подписчиков</p>
                    </div>
                  </div>
                  <Button className="w-full gradient-primary" size="sm">
                    <Icon name="UserPlus" size={14} className="mr-2" />
                    Подписаться
                  </Button>
                </div>

                <div className="pt-6 border-t border-border/50">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Icon name="Sparkles" size={16} />
                    Похожие статьи
                  </h3>
                  <div className="space-y-3">
                    {relatedArticles.map((related) => (
                      <Link key={related.id} to={`/article/${related.id}`}>
                        <Card className="p-4 border-muted/50 hover:border-primary/50 transition-all cursor-pointer group">
                          <div className={`h-1 bg-gradient-to-r ${related.gradient} rounded-full mb-3`} />
                          <h4 className="text-sm font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {related.title}
                          </h4>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>{related.author}</span>
                            <span>{related.readTime}</span>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
