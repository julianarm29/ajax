document.addEventListener('DOMContentLoaded', function() {
    const username = 'ogiansouza'; // Substitua pelo nome de usuário do GitHub desejado

    async function fetchGitHubProfile(username) {
        const url = `https://api.github.com/users/${username}`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Erro ao buscar dados do GitHub');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro:', error);
            return null;
        }
    }

    async function updateProfile(username) {
        const profileData = await fetchGitHubProfile(username);

        if (profileData) {
            document.getElementById('profile-avatar').src = profileData.avatar_url;
            document.getElementById('profile-name').textContent = profileData.name;
            document.getElementById('profile-username').textContent = `@${profileData.login}`;
            document.getElementById('repo-count').textContent = profileData.public_repos;
            document.getElementById('followers-count').textContent = profileData.followers;
            document.getElementById('following-count').textContent = profileData.following;
            document.getElementById('profile-link').href = profileData.html_url;
        } else {
            console.error('Erro ao atualizar perfil');
        }
    }

    updateProfile(username);
});
