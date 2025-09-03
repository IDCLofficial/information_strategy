module.exports = {
  apps: [{
    script: 'npm start',
    name: 'information-strategy',
    instances: 1,
    exec_mode: 'fork',
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      NEXT_PUBLIC_CONTENTFUL_SPACE_ID: 'g08mvfhb24ji',
      NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN: 'yZmq2UuZ1_8XDAKpc6zdstd8XtD4vEwTc5aqK-zPU-o',
      NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN: 'rlJ3RsWYOuYx4jdCjveT_2w5ekUNt4e14JuCHCdRfsw',
      NEXT_PUBLIC_MINISTRY_ID: '3AVAM45hTT76Kk9Yb5vyUh'
    }
  }],

  deploy: {
    production: {
      key: 'newi.pem',
      user: 'ubuntu',
      host: 'information',
      ref: 'origin/master',
      repo: 'git@github.com:IDCLofficial/information_strategy.git',
      path: '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && export NODE_OPTIONS="--max-old-space-size=2048" && export NEXT_PUBLIC_CONTENTFUL_SPACE_ID=g08mvfhb24ji && export NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=yZmq2UuZ1_8XDAKpc6zdstd8XtD4vEwTc5aqK-zPU-o && export NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN=rlJ3RsWYOuYx4jdCjveT_2w5ekUNt4e14JuCHCdRfsw && export NEXT_PUBLIC_MINISTRY_ID=3AVAM45hTT76Kk9Yb5vyUh && npm ci --production=false && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
