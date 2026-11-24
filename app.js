const examples = [
  ['Horizonte', 'Película de ejemplo', '#a21f35'],
  ['Última parada', 'Serie de ejemplo', '#25426d'],
  ['Fuera de órbita', 'Documental de ejemplo', '#5b376b'],
  ['La señal', 'Corto de ejemplo', '#6c5123']
];

document.querySelector('#cards').innerHTML = examples.map(([title, type, tone]) => `
  <article class="card" tabindex="0" style="--tone:${tone}">
    <b>${title}</b><span>${type}</span>
  </article>
`).join('');
