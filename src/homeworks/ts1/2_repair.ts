/**
 * Здесь код с ошибками типов. Нужно их устранить
 * */

// Мы это не проходили, но по тексту ошибки можно понять, как это починить
export const getFakeApi = async (): Promise<void> => {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
    console.log(result);
};

// Мы это не проходили, но по тексту ошибки можно понять, как это починить
export class SomeClass {
    constructor() {
        this.set = new Set([1]);
        this.channel = new BroadcastChannel('test-broadcast-channel');
    }

    set: Set<number>;
    channel: BroadcastChannel;
}

export type Data = {
    type: 'Money' | 'Percent';
    value: DataValue;
};

export type DataValue = Money | Percent;

export type Money = {
    Currency: string;
    Amount: number;
};

export type Percent = {
    Percent: number;
};

// Здесь, возможно, нужно использовать as, возможно в switch передавать немного по-другому
const getDataAmount = (data: Data): number => {
    switch (data.type) {
        case 'Money':
            return (data.value as Money).Amount;

        default: {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars

            ((): never => {
                throw new Error(`unknown type: ${data.type}`);
            });
        }
    }
};
