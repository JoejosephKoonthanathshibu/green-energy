// resources
let resources = {
    p1: {
        title: 'Government Subsidies and Incentives: ',
        bodyText: 'Governments can offer various financial incentives, such as tax credits and rebates, to individuals and businesses that install renewable energy systems like solar panels, wind turbines, and geothermal systems. Additionally, providing low-interest loans and grants can help reduce the upfront costs associated with these installations. Policies like feed-in tariffs and net metering can allow consumers to sell excess energy generated from renewable sources back to the grid, further offsetting their costs.',
        url: 'images/i0ZxLtcYBhzBYMp8q8Uv1BbW4YxY6HbQlGgYoOgY.webp'
    },
    p2: {
        title: 'Advancements in Technology and Economies of Scale:',
        bodyText: 'Continued research and development in renewable energy technologies can lead to more efficient and cost-effective solutions, such as improved solar panel efficiency and better battery storage. Increasing the scale of production for renewable energy components can reduce costs through economies of scale, making these technologies more affordable. Furthermore, developing standardized and modular renewable energy systems can simplify installation and maintenance, reducing costs for consumers.',
        url: 'images/file5851269892090.webp'
    },
    p3: {
        title: 'Community-Based Energy Solutions:',
        bodyText: ' Establishing community-owned solar and wind projects allows multiple households to share the benefits and costs of renewable energy installations, making clean energy more accessible and affordable. Implementing microgrids and distributed energy resources can provide localized energy solutions that are more resilient and cost-effective, as these systems can operate independently or in conjunction with the main grid. Forming energy cooperatives, where members collectively invest in and benefit from renewable energy projects, can democratize access to clean energy and reduce costs through shared investments.',
        url: 'images/91ab5aec7fcf3b56017a8cbc2f0944be.webp'
    }
}

let buttons = document.querySelectorAll('#controls button');
let dc = document.getElementById('dynamic-content');

function selectPage(ev) {
    let currentButton = ev.target;

    dc.innerHTML = `
    <h2 id="title">${resources[currentButton.id].title}</h2> 
    <img src='${resources[currentButton.id].url}'>
    <p id="text">${resources[currentButton.id].bodyText}</p>
    `;

    buttons.forEach(button => button.classList.remove('active'));
    currentButton.classList.add('active');
}

// Registering buttons for click event
buttons.forEach(button => button.addEventListener('click', selectPage));

// Load the content of the first button by default
window.addEventListener('DOMContentLoaded', (event) => {
    buttons[0].classList.add('active');
    dc.innerHTML = `
    <h2>${resources.p1.title}</h2> 
    <img src='${resources.p1.url}'>
    <p>${resources.p1.bodyText}</p>
    `;
});