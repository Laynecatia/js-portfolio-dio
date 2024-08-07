

(async () => {
    const profileData = await fetchProfileData();
    if (profileData) {
        console.log(profileData);
      }
    })();