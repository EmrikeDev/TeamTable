const personContainer = document.getElementById('personContainer');
data.sort((a, b) => parseInt(a.id) - parseInt(b.id));
data.forEach(person => {
	const personCard = document.createElement('div');
	personCard.className = 'person-card';
	const personImageContainer = document.createElement('div');
	personImageContainer.className = 'person-image';
	const personImage = document.createElement('img');
	
	personImage.src = `https://www.example.com/${person.face}.jpg`;//Replace https://www.example.com to picture folder's url.
	
	personImage.alt = person.name;
	personImageContainer.appendChild(personImage);
	const personName = document.createElement('div');
	personName.className = 'person-name';
	personName.textContent = person.name;
	const personInfo = document.createElement('div');
	personInfo.className = 'person-info';
	personInfo.textContent = person.info;
	personCard.appendChild(personImageContainer);
	personCard.appendChild(personName);
	personCard.appendChild(personInfo);
	personCard.addEventListener('click', () => {
		const uid = person.uid;
		window.location.href = `https://space.bilibili.com/${uid}`;//You can replace this like Youtube or Niconico.
	});
	personContainer.appendChild(personCard);
});