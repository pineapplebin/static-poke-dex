import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'git@github.com:pineapplebin/static-poke-dex.git', // Update to point to your repository
    user: {
      name: 'pineapplebin', // update to use your name
      email: 'pineapplewing@126.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);
