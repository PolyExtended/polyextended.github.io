       // Fetch the PolyExtended user's avatar from GitHub API
        fetch('https://api.github.com/users/PolyExtended')
            .then(response => response.json())
            .then(data => {
                // Extract the avatar URL from the API response
                const avatarUrl = data.avatar_url;
                const twitterImage = document.getElementById('twitter-image');
                twitterImage.content = avatarUrl;
                // Update the href attribute of the favicon link
                const favicon = document.getElementById('favicon');
                favicon.href = avatarUrl;
            })
            .catch(error => {
                console.error('Error fetching avatar:', error);
            });
