import './sources.css';

class Sources {
    draw(data: any[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: any = document.querySelector('#sourceItemTemp');

        data.forEach((item: any) => {
            const sourceClone: any = sourceItemTemp.content.cloneNode(true);

            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        // @ts-ignore
        document.querySelector('.sources').append(fragment);
    }
}

export default Sources;
