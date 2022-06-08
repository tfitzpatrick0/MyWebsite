# MyWebsite

Hosting on DigitalOcean

Domain through NameCheap

SSL Certificate generated with Certbot

- https://certbot.eff.org/instructions?ws=apache&os=ubuntubionic

VPS hosted on DigitalOcean: `ssh root@your_server_ip`

- View server info on DigitalOcean

Setting up Apache on Ubuntu: https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-18-04

Check firewall status with `ufw status`

Connect to the server: http://your_server_ip

Restart apache server with: `sudo systemctl restart apache2`

Update website by running: `npm run build` and then restarting the server

Went into /etc/apache2/sites-enabled/000-default-le-ssl.conf to change the website root to the build inside of our repo

- Want to config the SSL site because this is being served with the secure connection
- Restarted server after
