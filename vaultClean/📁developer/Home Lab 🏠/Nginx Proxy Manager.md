
> Expose your services easily and securely [https://nginxproxymanager.com/](https://nginxproxymanager.com/)

Gotta be honest, writing Nginx code was always a headache, but once I found this I never want to go back. This makes **routing**  **SSL** certificates, and **websockets** a breeze.  

---

## App Network Routing
```mermaid
flowchart TB

%% Hardware
%% rpi("Raspberry Pi ๐") 
%% ice("Micro services Server")
%% mint("Media Server ๐ป")
router("Router โ")
internet("ISP ๐")

%% Apps
pihole("Pi-Hole ๐ณ")
vpn("PiVPN ๐")
ha("Home Assistant ๐ค")

nginx("Nginx Proxy Manager")
nextcloud("NextCloud โ")
vaultwarden("Vaultwarden ๐ก")
wordp("Wordpress ๐ธ")

plex("Plex.tv ๐บ")
jelly("Jellyfin ๐")


subgraph Router
	router
end

subgraph "Raspberry Pi 4 ๐"

	pihole <-.-> router
	vpn -.-> pihole
	ha -.-> vpn
end

subgraph Intel NUC

	nginx -.-> pihole
	nextcloud -.-> nginx
	vaultwarden -.-> nginx
	wordp -.-> nginx
end

subgraph Ryzen 9 

	plex -.-> nginx
	jelly -.-> nginx
end


router <-- fiber 400mbps --> internet


```

### connections
- [Pi-hole](๐developer/Home%20Lab%20๐ /Pi-hole.md) for local DNS. Make pretty URLs for local or public services

### installation
1. `compose.yml` via [Docker](๐developer/Home%20Lab%20๐ /Docker.md) 
```yaml
version: '3'
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    ports:
      - '80:80'
      - '81:81'
      - '443:443'
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
```

Default Admin User:
```
Email:    admin@example.com
Password: changeme
```

---

## Publicly Facing App
1. 

## Pretty URLs for Local Apps
1. [Pi-hole](๐developer/Home%20Lab%20๐ /Pi-hole.md) DNS setup
2. **Nginx** to link Port number 

## Leveraging Docker's Internal DNS routing
for example [vaultwarden](๐developer/Home%20Lab%20๐ /vaultwarden.md) I do *not* specify a `port` number. instead I use the `container_name: vaultwarden` as a DNS entry I can use in **Nginx Proxy Manager** 

---

#todo 
- [ ] explain how you set up router to forward port 80 & 443
- [ ] explain using domain name and IP address
- [ ] show how to connect pi-hole to give any service a pretty URL
- [ ] finish "publicly facing app"
- [ ] finish "pretty urls for ..."