export const config = {
    env: process.env.NODE_ENV,
    baseURI: 'https://hacker-news.firebaseio.com',
    versionURI: 'v0'
  };

export const apiRoutes = {
    news: {
        ids: `${config.baseURI}/${config.versionURI}/askstories.json`,
        item: (id) => `${config.baseURI}/${config.versionURI}/item/${id}.json`,
    },
}