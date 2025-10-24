# SelfHosted_WebWallpaper
### A simple an easily configurable webpage based wallpaper. 


- Designed for use in Home Assitant to create a Google-like experience when casting dashboards to smart displays.
- Config options for using any album from your Immich library. Or use the default wildcard images.







### Easily configurable and simple to set up with any server supervisor such as TrueNAS and deployable with a basic Docker Compose file.


- If you're using TrueNAS I reccomend Dockge and FileBrowser as they make setup insanely simple.

___________________________________________________________________________________________________________

### FULL DISCLOSURE, MOST OF THIS CODE WAS AI GENERATED (I JUST NEEDED SOMETHING FAST SUE ME LOL). I DID HOWEVER SPEND ABOUT 8 HOURS TROUBLESHOOTING THIS SO I CAN HELP WITH BASIC ISSUES IF REQUIRED :)

________________________________________________________________________________________________________________


# Installation

Example File Path Structure in TrueNAS (or other hypervisor)


/mnt/BasePool/WebWallpaper/
├── 📄 index.html
│ └─ Main webpage UI and logic for wallpaper, weather, and Immich integration.
│
├── 🐋 docker-compose.yml
│ └─ Defines the Nginx static webserver and Node.js Immich proxy services.
│
├── 📂 immichproxy/
│ ├── 📄 server.js
│ │ └─ Express backend that handles Immich API requests.
│ ├── 📄 package.json
│ │ └─ Node project manifest (express + node-fetch dependencies).
│ ├── 📄 package-lock.json
│ │ └─ Auto-generated dependency lock file.
│
└── 📘 README.md
└─ Documentation and setup instructions for this project.

/mnt/poolname/webwallpaper/
│
├── index.html                # Main webpage (UI + logic for wallpaper, weather, config)
│
├── docker-compose.yml        # Runs the Nginx server and Immich proxy backend
│
├── immichproxy/              # Node.js backend proxy for Immich API requests
│   ├── server.js             # Express server (handles album + asset fetching)
│   ├── package.json          # Node project manifest (Express + node-fetch deps)
│   ├── package-lock.json     # Auto-generated dependency lock file (created automatically on launch, you will not manually create this)


_______________________________________________________________________________________________________________

- Setup any folders as datasets in your hypervisor, i found this made permission management a lot easier.

- You can create the files using file browser but i found using 'cat' commands in TrueNAS shell was more reliable for anything in the immichproxy folder likely due to permissions or something. Index.html i created with file browser though to make it easier to make small changes as required.
