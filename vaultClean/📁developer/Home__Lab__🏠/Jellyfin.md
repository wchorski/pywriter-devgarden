#music #media #player #itunes #bash #powershell

## [Jellyfin](/vault/https://jellyfin.org/)
The Free Software Media System.

I use this exclusively for music hosting because [Plex.tv](/vault/%F0%9F%93%81developer/Home__Lab__%F0%9F%8F%A0/Plex.tv.md) has more restrictions on client music playback. Plus, with a little shell magic -> [iTunes playlist Sync](/vault/#iTunes__playlist__Sync)

---

### Connections
- [Home Assistant](/vault/%F0%9F%93%81developer/Home__Lab__%F0%9F%8F%A0/Home__Assistant.md)
- Android Phone (Galaxy s9)

## installation
### [Docker](/vault/%F0%9F%93%81developer/Home__Lab__%F0%9F%8F%A0/Docker.md)
1. `./compose.yml`
```yaml
version: "3.7"

services:

  jellyfin:
    image: jellyfin/jellyfin:latest
    container_name: jellyfin
    restart: unless-stopped
    ports:
      - 8096:8096
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/Chicago
    volumes:
      - ./config:/config
      - ./cache:/cache
      - /mnt/<externalDrive>/jellyfin/media:/media:ro #:ro = read-only

# networks:
#   default:
#     external:
#       name: nginx-prox-mgmt-3_default
```

---

## iTunes playlist Sync
1. powershell script that exports iTunes playlist from **.xml** -> **.m3u**
```powershell
put_script_here
```
2. copy files over to jellyfin's media folder via [FreeFileSync](/vault/%F0%9F%93%81developer/Home__Lab__%F0%9F%8F%A0/FreeFileSync.md). Connected through a [SAMBA](/vault/%F0%9F%93%81developer/Home__Lab__%F0%9F%8F%A0/SAMBA.md) share
3. **Bash** script that cleans up the **.m3u** files from _absolute path_ -> _relative path_
```bash
put_script_here
```
4. Jellyfin takes care of the rest, reading the updated **.m3u** and populated media library


---
[Home Lab 🏠](/vault/%F0%9F%93%81developer/Home__Lab__%F0%9F%8F%A0/Home__Lab__%F0%9F%8F%A0.md)