module.exports = {
  siteTitle: 'Speckled - Making better product decisions', // <title>
  manifestName: 'Speckled',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#F8B500',
  manifestThemeColor: '#F8B500',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
   // pathPrefix: `/gatsby-starter-eventually/`, This path is subpath of your hosting https://domain/portfolio
  // social
  heading: 'Speckled is a better way to make product decisions.',
  subHeading:
    "Get on the launch list and be the first to get access.",
  socialLinks: [
    // {
    //   icon: 'fa-github',
    //   name: 'Github',
    //   url: 'https://github.com/anubhavsrivastava',
    // },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/getspeckled',
    },
    {
      icon: 'fa-facebook',
      name: 'Facebook',
      url: 'https://facebook.com/getspeckled',
    },
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'mailto:hello@getspeckled.com',
    },
  ],
plugins: [
    {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: 'https://getspeckled.us20.list-manage.com/subscribe/post?u=0f9da1f175b82fa0601dea5c3&amp;id=ccd3356148', // add your MC list endpoint here; see instructions below
        },
    },
],
};

