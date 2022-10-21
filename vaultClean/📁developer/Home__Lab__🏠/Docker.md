## [Home - Docker](/vault/https://www.docker.com/)
fast, easy and portable application development through containerization 

If I haven't figured out a way to [containerize](/vault/[What is a Container? - Docker](/vault/https://www.docker.com/resources/what-container/)) an app, I will find a way. Pretty much the backbone of how I deploy and maintain many services.    

---

### connections
- [portainer](/vault/portainer.md)
- [Nginx Proxy Manager](/vault/Nginx__Proxy__Manager.md)
- [Nextcloud](/vault/Nextcloud.md)
- [PhotoPrism](/vault/PhotoPrism.md)
- [Wordpress](/vault/Wordpress.md)
- [NextJS](/vault/NextJS.md)
- [ReactJS](/vault/ReactJS.md)
- [vaultwarden](/vault/vaultwarden.md)
- [Jellyfin](/vault/Jellyfin.md)
- [Plex.tv](/vault/Plex.tv.md)
- pretty much any of my microservices. Especially if it's public facing 

### installation
1. [Install Docker Desktop on Linux](/vault/https://docs.docker.com/desktop/install/linux-install/)

---
## Tips & Tricks
specifiy a file other than `docker-compose.yml` or `compose.yml`
```bash
docker-compose -f docker-compose.test.yml up
```


#todo 
- [ ] try out watchtower  to auto update containers [Docker Compose File For Watchtower | JamesCoyle.net Limited](/vault/https://www.jamescoyle.net/how-to/docker-compose-files/3323-docker-compose-file-for-watchtower#:~:text=Create__a__new__directory__and__save__the__above,from__the__moment__you__start__the__Watchtower__container.)