const config = {
  header: {
    name: 'Abhimanyu Singh Tanwar',
    menu: ['ABOUT','SKILLS','EXPERIENCE','PROJECTS','CERTIFICATES','EDUCATION']
  },
  github: {
    username: 'abhimanyud3dx', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    github: 'abhimanyud3dx',
    trailhead: 'abhimanyudx',
    linkedin: 'abhimanyud3dx',
    twitter: 'abhimanyud3dx',
    facebook: 'abhimanyud3dx',
    instagram: 'abhimanyud3dx',
    medium: 'abhimanyud3dx',
    dev: 'abhimanyud3dx',
    stackoverflow: '4438108/abhimanyud3dx', // format: userid/username
    website: 'https://abhimanyud3dx.github.io/',
    phone: '+918852055355',
    email: 'abhimanyud3dx@gmail.com',
  },
  resume: 'https://docs.google.com/document/d/1b7hrWGT0XFhhfg3ZEHZ1lMDdTgpjMXgkFXvUPBO5fUA/edit',
  // Empty fileUrl will hide the `Download Resume` button.
  skills: [
    'Salesforce',
    'LWC',
    'Aura',
    'Visualforce',
    'Apex',
    'SOQL',
    'Node.js',
    'Git',
    'MongoDB',
    'CSS',
  ],
  experiences: [
    {
      name: 'TEKSystems',
      title: 'Module Lead',
      from: 'April 2019',
      to: 'Present',
      link: 'https://teksystems.com/',
      location: 'Hyderabad, Telangana',
      description: 'Working as a Salesforce tech lead and architect.'
    },
    {
      name: 'Appirio - A Wipro Company',
      title: 'Consultant',
      from: 'April 2016',
      to: 'April 2019',
      link: 'https://www.appirio.com/',
      location: 'Jaipur, Rajasthan',
      description: 'joined as intern and laddered up to Consultant'
    },
  ],
  certifications: [
    {
      icon: 'https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000BB2nq&oid=00DF0000000gZsu&lastMod=1638349821000',
      title: 'Sharing and Visibility Designer',
      year: 'August 2021',
      link: 'https://trailhead.salesforce.com/credentials/sharingandvisibilityarchitect'
    },
    {
      icon: 'https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5MtX&oid=00DF0000000gZsu&lastMod=1617267315000',
      title: 'Salesforce JavaScript Developer I',
      year: 'December 2020',
      link: 'https://trailhead.salesforce.com/credentials/javascriptdeveloperi'
    },
    {
      icon: 'https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu6&oid=00DF0000000gZsu&lastMod=1617274648000',
      title: 'Salesforce Certified Tableau CRM and Einstein Discovery Consultant',
      year: 'June 2020',
      link: 'https://trailhead.salesforce.com/credentials/tableaucrmandeinsteindiscoveryconsultant'
    },
    {
      icon: 'https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu4&oid=00DF0000000gZsu&lastMod=1617275568000',
      title: 'Salesforce Experience Cloud Consultant',
      year: 'October 2019',
      link: 'https://trailhead.salesforce.com/credentials/experiencecloudconsultant'
    },
    {
      icon: 'https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtn&oid=00DF0000000gZsu&lastMod=1617268355000',
      title: 'Salesforce Service Cloud Consultant',
      year: 'October 2019',
      link: 'https://trailhead.salesforce.com/credentials/servicecloudconsultant'
    },
    {
      icon: 'https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mth&oid=00DF0000000gZsu&lastMod=1617268556000',
      title: 'Salesforce Platform Developer II',
      year: 'April 2019',
      link: 'https://trailhead.salesforce.com/credentials/platformdeveloperii'
    },
    {
      icon: 'https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtz&oid=00DF0000000gZsu&lastMod=1617268528000',
      title: 'Salesforce Platform Developer I ',
      year: 'June 2018',
      link: 'https://trailhead.salesforce.com/credentials/platformdeveloperi'
    },
    {
      icon: 'https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mtl&oid=00DF0000000gZsu&lastMod=1617268490000',
      title: 'Salesforce Platform App Builder',
      year: 'March 2018',
      link: 'https://trailhead.salesforce.com/credentials/platformappbuilder'
    },
    {
      icon: 'https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu5&oid=00DF0000000gZsu&lastMod=1617267801000',
      title: 'Salesforce Admin',
      year: 'September 2017',
      link: 'https://trailhead.salesforce.com/credentials/administrator'
    },
  ],
  education: [
    {
      name: 'JECRC University',
      title: 'Masters in Computer Application',
      from: 'July 2014',
      to: 'April 2016',
      location: 'Jaipur, Rajasthan'
    },
    {
      name: 'S.S Jain Subodh PG College',
      title: 'Bachelor in Computer Application',
      from: 'July 2011',
      to: 'April 2014',
      location: 'Jaipur, Rajasthan'
    },
  ],
  // To hide the `My Projects` section, keep it empty.
  projects: [
    {
      title: 'Salesforce Header Creator',
      description:
        'Instant Header Creator for LinkedIn and Twitter to show off your certifications and badges',
      imageUrl: 'https://www.superqbit.com/resources/images/logo.svg',
      link: 'https://www.superqbit.com/app?id=SalesforceHeaderCreator',
    },
    {
      title: 'Salesforce Trailblazer Leaderboard',
      description: 'Salesforce Trailblazer Leaderboard',
      imageUrl: 'https://www.superqbit.com/resources/images/logo.svg',
      link: 'https://www.superqbit.com/app?id=trailhead-leaderboard',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'abhimanyudx', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'UA-31274040-4', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  formspree: {
    id: 'xqkopjzr', // Formspree Id for Contact us Form (https://formspree.io)
  },
  themeConfig: {
    defaultTheme: 'light', // default for stock theme
    light: {
      primary: '#eef4ff',
      primaryText: '#2b2826',
      baseText: '#2b2826',
      baseL1:'#fff',
    },
    aqua: {
      primary: '#E3E3ED',  
      primaryText: '#219aaf',    
      baseL1: '#78b0fd',
      baseL2: '#fc055b',
      highlight: 'rgb(27, 150, 255)',      
      baseText:'#fff',
      roundedbox: '4px',
      roundedbtn: '4px',
    },
    dark: {
      primary: '#282828',  
      primaryText: '#fff',    
      baseL1: '#141414',
      baseL2: '#080707',
      highlight: '#f3f2f2',      
      baseText:'#fff',
      roundedbox: '0px',
      roundedbtn: '0px',
    },
  },
  footer: 'By: Abhimanyud3dx, built with 💯% pure ⚡ <a href="https://lwc.dev/"  target="_blank">LWC</a> & <a href="https://www.lightningdesignsystem.com/" target="_blank">SLDS</a> and ❤️'
};

export { config };
