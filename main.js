const projects = [
	{
		name: 'fylo-landing-page',
		github:
			'https://github.com/Aishwarya-Dhuri/Frontend-mentor-challenges/tree/master/fylo-landing-page'
	},
    {
		name: 'Countries-RestApi-JsApp',
		github:
			'https://github.com/Aishwarya-Dhuri/Frontend-mentor-challenges/tree/master/Countries-RestApi-JsApp'
	},
	{
		name: 'four-card-feature-section-master',
		github:
			'https://github.com/Aishwarya-Dhuri/Frontend-mentor-challenges/tree/master/four-card-feature-section-master'
	},
    {
		name: 'pricing-toggle-component',
		github:
			'https://github.com/Aishwarya-Dhuri/Frontend-mentor-challenges/tree/master/pricing-toggle-component'
	},
	{
		name: 'testimonials-grid-section',
		github:
			'https://github.com/Aishwarya-Dhuri/Frontend-mentor-challenges/tree/master/testimonials-grid-section'
	},
	{
		name: 'interactive-pricing-component',
		github:
			'https://github.com/Aishwarya-Dhuri/Frontend-mentor-challenges/tree/master/interactive-pricing-component'
	},
	{
		name: 'interactive-rating-component',
		github:
			'https://github.com/Aishwarya-Dhuri/Frontend-mentor-challenges/tree/master/interactive-rating-component'
	},
	{
		name: 'bharatpae-teams-section',
		github:
			'https://github.com/Aishwarya-Dhuri/Frontend-mentor-challenges/tree/master/bharatpae-teams-section'
	},
	
];

const list = document.getElementById('list');

projects.forEach(({ name, github }, i) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="${name}/index.html">
			<img src="${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>
		<div class="links-container">
			<a href="./${name}/index.html" class="blue">
				<i class="fas fa-eye"></i>
			</a>
			<a href="${github}" class="github">
				<i class="fab fa-github"></i>
			</a>
		</div>
	`;

	list.appendChild(listItem);
});

function formatProjectName(name) {
	return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}