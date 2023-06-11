import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: any) {
        super.getResp(
            {
                endpoint: 'sources',
                options: {}
            },
            callback
        );
    }

    getNews(e: Event, callback: any) {
        let target: any = e.target;
        const newsContainer: any = e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
