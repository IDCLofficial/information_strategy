module.exports = {
  apps: [{
    script: 'npm start',
  }],

  deploy: {
    production: {
      key: 'information.pem',
      user: 'ubuntu',
      host: 'information',
      ref: 'origin/master',
      repo: 'git@github.com:IDCLofficial/information_strategy.git',
      path: '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
