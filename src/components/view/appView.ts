import News from './news/news';
import Sources from './sources/sources';

interface Data {
    data: {
        articles?: string,
        sources?: string,
    }
}

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: any) {
        const values: string | undefined | any[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: any) {
        const values: any = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
