interface Options {
    apiKey: string,
}

interface Endpoint {
    endpoint: string,
    options: {
        sources?: any
    }
}

class Loader {
    private readonly baseLink: string;
    private readonly options: Options;

    constructor(baseLink: string, {apiKey}: Options) {
        this.baseLink = baseLink;
        this.options = {apiKey};
    }

    getResp(
        {endpoint, options = {}}: Endpoint,
        callback = (): any => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', callback, {endpoint, options});
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl({endpoint, options = {}}: Endpoint) {
        const urlOptions: any = {...this.options, ...options};
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, callback: any, {endpoint, options = {}}: Endpoint,) {
        // @ts-ignore
        fetch(this.makeUrl({endpoint, options}))
            .then(this.errorHandler)
            .then((res:Response) => res.json())
            .then((data: string): string => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
