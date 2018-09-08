const FtpDeploy = require('ftp-deploy');

const ftpDeploy = new FtpDeploy();

const config = {
  host: '196988.w88.wedos.net',
  port: 21,
  user: 'w196988',
  localRoot: `${__dirname}/dist`,
  remoteRoot: '/www/subdom/new/',
  include: ['*', '**/*'],
  exclude: [],
};

ftpDeploy.deploy(config)
  .then(() => console.log('Finished!'))
  .catch(err => console.log(err));
