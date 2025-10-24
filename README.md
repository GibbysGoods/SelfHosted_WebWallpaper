# SelfHosted_WebWallpaper
### A simple an easily configurable webpage based wallpaper. 


- Designed for use in Home Assitant to create a Google-like experience when casting dashboards to smart displays.
- Config options for using any album from your Immich library. Or use the default wildcard images.







### Easily configurable and simple to set up with any server supervisor such as TrueNAS and deployable with a basic Docker Compose file.


- If you're using TrueNAS I reccomend Dockge and FileBrowser as they make setup insanely simple.

___________________________________________________________________________________________________________

#### FULL DISCLOSURE, MOST OF THIS CODE WAS AI GENERATED (I JUST NEEDED SOMETHING FAST SUE ME LOL). I DID HOWEVER SPEND ABOUT 8 HOURS TROUBLESHOOTING THIS SO I CAN HELP WITH BASIC ISSUES IF REQUIRED :)

________________________________________________________________________________________________________________


# Installation

Example File Path Structure in TrueNAS (or other hypervisor)



```text
/mnt/poolname/webwallpaper/
├── 📄 index.html
│   └─ Main webpage (UI + logic for wallpaper, weather, config)
│
├── 🐋 docker-compose.yml
│   └─ Defines the Nginx static webserver and Node.js Immich proxy services.
│
├── 📂 immichproxy/
│   ├── 📄 server.js
│   │   └─ Node.js backend proxy for Immich API requests. (handles album + asset fetching)
│   ├── 📄 package.json
│   │   └─ Node project manifest (express + node-fetch dependencies).
│   ├── 📄 package-lock.json
│   │   └─ Auto-generated dependency lock file. (created automatically on launch, you will not manually create this)
│
└── 📘 README.md
    └─ Documentation and setup instructions for this project.
```


_______________________________________________________________________________________________________________

- Setup any folders as datasets in your hypervisor, I found this made permission management a lot easier.

- You can create the files using file browser but I found using 'cat' commands in TrueNAS shell was more reliable for anything in the immichproxy folder likely due to permissions or something. The index.html I created with file browser though to make it easier to make small changes as required.

- Click and hold on weather/time box to get to the config screen.

- Create an API key in Immich settings and paste it into the config along with the server URL the way it is shown in the tooltip.

- You can also set a redirect URL that fires off when you click or tap anywhere in the screen area.



# Gallery


<img width="1919" height="918" alt="image" src="https://github.com/user-attachments/assets/096fa776-2e6f-466a-9ebf-b6ac64375c40" />

<img width="1915" height="915" alt="image" src="https://github.com/user-attachments/assets/48088783-45a0-4068-8a60-2a0b58905536" />



