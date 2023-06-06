const root = document.getElementById('root');

window.addEventListener('load', async () => {
    const dishes = await fetch('http://localhost:5000/data').then((res) =>
        res.json()
    );

    const ul = document.createElement('ul');

    dishes.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <p>Name: ${item.name}</p>
        <p>Cuisine: ${item.cuisine}</p>
        <p>Price: $${item.price}</p>
        `;
        ul.appendChild(li);
    });

    root.appendChild(ul);
});
