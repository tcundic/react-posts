export const Component1 = () => <div>Component1</div>;
export const Component2 = () => <div>Component2</div>;
export const Component3 = () => <div>Component3</div>;

export default [
    {title: 'Item1', url: '/item1', component: Component1, isInHeader: true},
    {title: 'Item2', url: '/item2', component: Component2, isInHeader: true},
    {title: 'Item2', url: '/item2', component: Component2, isInHeader: false}
];
