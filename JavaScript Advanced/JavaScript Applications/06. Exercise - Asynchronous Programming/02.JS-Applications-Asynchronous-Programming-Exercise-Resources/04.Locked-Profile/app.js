function lockedProfile() {

    document.addEventListener('DOMContentLoaded', () => {
        const profilesContainer = document.getElementById('profiles');

        fetch('http://localhost:3030/jsonstore/advanced/profiles')
            .then(response => response.json())
            .then(data => {
                Object.values(data).forEach(profile => {
                    const profileCard = createProfileCard(profile);
                    profilesContainer.appendChild(profileCard);
                });
            })
            .catch(error => console.error('Error fetching profiles:', error));
    });

    function createProfileCard(profile) {
        const profileCard = document.createElement('div');
        profileCard.classList.add('profile');

        const username = document.createElement('div');
        username.classList.add('username');
        username.textContent = profile.username;

        const email = document.createElement('div');
        email.classList.add('email');
        email.textContent = profile.email;

        const age = document.createElement('div');
        age.classList.add('age');
        age.textContent = `Age: ${profile.age}`;

        const locked = document.createElement('div');
        locked.classList.add('locked');
        locked.textContent = `Locked: ${profile.locked ? 'Yes' : 'No'}`;

        const additionalInfo = document.createElement('div');
        additionalInfo.classList.add('additional-info');
        additionalInfo.style.display = 'none';

        const showMoreButton = document.createElement('button');
        showMoreButton.textContent = 'Show more';
        showMoreButton.addEventListener('click', () => {
            if (!profile.locked) {
                additionalInfo.style.display = 'block';
                showMoreButton.disabled = true;
            }
        });

        const hideItButton = document.createElement('button');
        hideItButton.textContent = 'Hide it';
        hideItButton.addEventListener('click', () => {
            if (!profile.locked) {
                additionalInfo.style.display = 'none';
                showMoreButton.disabled = false;
            }
        });

        additionalInfo.appendChild(age);
        additionalInfo.appendChild(locked);
        additionalInfo.appendChild(hideItButton);

        profileCard.appendChild(username);
        profileCard.appendChild(email);
        profileCard.appendChild(showMoreButton);
        profileCard.appendChild(additionalInfo);

        return profileCard;
    }

}