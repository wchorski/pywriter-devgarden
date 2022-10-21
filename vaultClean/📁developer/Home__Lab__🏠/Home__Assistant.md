## [Home Assistant (home-assistant.io)](/vault/home-assistant.io))

> Open source home automation that puts local control and privacy first. Powered by a worldwide community of tinkerers and DIY enthusiasts.

installed on [Raspberry Pi 4 Model B  4GB](/vault/https://www.raspberrypi.com/products/raspberry-pi-4-model-b/) with Debian 11 64bit

---

### connections
- securely accessed via [PiVPN](/vault/%F0%9F%93%81developer/Home__Lab__%F0%9F%8F%A0/PiVPN.md) (I don't forward face any apps that I solo use)
- [Hyperion](/vault/%F0%9F%93%81developer/Home__Lab__%F0%9F%8F%A0/Hyperion.md)
- [WLED](/vault/%F0%9F%93%81developer/Home__Lab__%F0%9F%8F%A0/WLED.md)
- [Divoom Pixoo (divoom.com)](/vault/divoom.com)) digital sign (via bluetooth)
- [Glances](/vault/%F0%9F%93%81developer/Home__Lab__%F0%9F%8F%A0/Glances.md) - via Grafana & InfluxDB

### installation 
1. installation **Supervised** [](/vault/https://www.home-assistant.io/installation/linux#install-home-assistant-supervised)

### plugins
1. ESPHome
2. Grafana
3. InfluxDB
4. motionEye
5. Node-RED
6. Rhasspy Assistant
7. Samba Backup
8. Samba Share
9. VSCode
10. HACS

---

## troubleshooting 
> [!warning]
> I'm running the [home-assistant/supervised](/vault/https://github.com/home-assistant/supervised-installer) installation because I want to utilize my [Pi4](/vault/%F0%9F%93%81developer/Hardware/Pi4.md) for multiple apps.
> 
> I encountered a boot loop error from one of the Home Assistant services, effectively freezing any other service running on my [Pi4](/vault/%F0%9F%93%81developer/Hardware/Pi4.md)

```shell
... entered blocking state
... entered forwarding state
... entered disabled state
```

I don't update my Home Assistant very often so I thought why not reinstall it. The [reinstall](/vault/https://github.com/home-assistant/supervised-installer)  brought my **Home Assistant** back to life 😅. 