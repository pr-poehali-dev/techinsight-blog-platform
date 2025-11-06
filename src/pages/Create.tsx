import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Create = () => {
  const [contentType, setContentType] = useState<'article' | 'review'>('article');
  const [title, setTitle] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const availableTags = [
    'AI', 'ChatGPT', 'React', 'TypeScript', 'Python', 
    'Design', 'Midjourney', 'DevOps', 'Next.js', 'Kubernetes',
    'NLP', 'Frontend', 'Backend', 'UI/UX', 'Productivity'
  ];

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

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
                <Link to="/authors" className="text-sm font-medium hover:text-primary transition-colors">Авторы</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost">
                <Icon name="Save" size={16} className="mr-2" />
                Сохранить черновик
              </Button>
              <Button variant="outline">Отмена</Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-12 border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-4 animate-fade-in">
              ✍️ Создать <span className="gradient-text">публикацию</span>
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-in">
              Поделись знаниями с сообществом
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-6 border-muted/50 animate-slide-up">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Icon name="FileType" size={18} />
              Тип контента
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setContentType('article')}
                className={`p-6 rounded-xl border-2 transition-all ${
                  contentType === 'article'
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <Icon name="FileText" size={32} className={`mb-3 ${contentType === 'article' ? 'text-primary' : 'text-muted-foreground'}`} />
                <h4 className="font-bold mb-1">Статья</h4>
                <p className="text-sm text-muted-foreground">
                  Образовательный материал, туториал или гайд
                </p>
              </button>

              <button
                onClick={() => setContentType('review')}
                className={`p-6 rounded-xl border-2 transition-all ${
                  contentType === 'review'
                    ? 'border-secondary bg-secondary/10'
                    : 'border-border hover:border-secondary/50'
                }`}
              >
                <Icon name="Star" size={32} className={`mb-3 ${contentType === 'review' ? 'text-secondary' : 'text-muted-foreground'}`} />
                <h4 className="font-bold mb-1">Обзор</h4>
                <p className="text-sm text-muted-foreground">
                  Оценка и отзыв о конкретном инструменте
                </p>
              </button>
            </div>
          </Card>

          <Card className="p-6 border-muted/50 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Icon name="Type" size={18} />
              Заголовок
            </h3>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Как я использую Claude для разработки веб-приложений"
              className="w-full px-4 py-3 bg-muted rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="text-xs text-muted-foreground mt-2">
              Хороший заголовок конкретный и понятный. Длина: {title.length}/100 символов
            </p>
          </Card>

          {contentType === 'review' && (
            <Card className="p-6 border-muted/50 animate-slide-up" style={{ animationDelay: '0.15s' }}>
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Icon name="Star" size={18} />
                Оценка
              </h3>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    className="p-4 rounded-lg border-2 border-border hover:border-primary transition-all hover:scale-110"
                  >
                    <Icon name="Star" size={24} className="fill-yellow-500 text-yellow-500" />
                    <p className="text-sm font-bold mt-1">{rating}.0</p>
                  </button>
                ))}
              </div>
            </Card>
          )}

          <Card className="p-6 border-muted/50 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Icon name="AlignLeft" size={18} />
              Содержание
            </h3>
            <div className="space-y-4">
              <textarea
                placeholder="Расскажи подробно о своём опыте, дай практические советы и примеры использования..."
                className="w-full h-96 px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                <Button variant="ghost" size="sm">
                  <Icon name="Bold" size={16} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Italic" size={16} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Link" size={16} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Image" size={16} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Code" size={16} />
                </Button>
                <div className="ml-auto text-xs text-muted-foreground">
                  Markdown поддерживается
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-muted/50 animate-slide-up" style={{ animationDelay: '0.25s' }}>
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Icon name="Tags" size={18} />
              Теги ({selectedTags.length}/5)
            </h3>
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  disabled={!selectedTags.includes(tag) && selectedTags.length >= 5}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedTags.includes(tag)
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                  } ${!selectedTags.includes(tag) && selectedTags.length >= 5 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  #{tag}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Выбери до 5 тегов, которые лучше всего описывают твою публикацию
            </p>
          </Card>

          {contentType === 'review' && (
            <Card className="p-6 border-muted/50 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Icon name="ListPlus" size={18} />
                Плюсы и минусы
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Plus" size={16} className="text-green-400" />
                    <p className="font-bold text-sm">Плюсы</p>
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <input
                        key={`pro-${i}`}
                        type="text"
                        placeholder={`Преимущество ${i}`}
                        className="w-full px-3 py-2 bg-muted rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Minus" size={16} className="text-red-400" />
                    <p className="font-bold text-sm">Минусы</p>
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <input
                        key={`con-${i}`}
                        type="text"
                        placeholder={`Недостаток ${i}`}
                        className="w-full px-3 py-2 bg-muted rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )}

          <div className="flex gap-4 justify-end pt-6 border-t border-border/50">
            <Button variant="outline" size="lg">
              <Icon name="Eye" size={16} className="mr-2" />
              Предпросмотр
            </Button>
            <Button size="lg" className="gradient-primary">
              <Icon name="Send" size={16} className="mr-2" />
              Опубликовать
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <Card className="max-w-4xl mx-auto p-8 border-primary/20 bg-primary/5">
          <div className="flex gap-6">
            <Icon name="Lightbulb" size={32} className="text-primary flex-shrink-0" />
            <div className="space-y-3">
              <h3 className="font-bold text-lg">Советы для хорошей публикации</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Структурируй текст заголовками, списками и примерами кода</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Добавляй скриншоты и визуальные примеры где возможно</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Пиши конкретно: делись реальным опытом, цифрами, кейсами</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Проверь орфографию и грамматику перед публикацией</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Create;
