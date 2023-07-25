//for nested divs
const parent = React.createElement('div', { id: 'parent' },
    [React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'This is an h1 tag'), React.createElement('h2', {}, 'This is an h2 tag')]
    ),
    React.createElement('div', { id: 'child2' },
        [React.createElement('h1', {}, 'This is an h1 tag'), React.createElement('h2', {}, 'This is an h2 tag')]
    )]
)

const heading = React.createElement('h1', {id: 'heading'}, 'React Project');

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root.render(heading);
root2.render(parent);