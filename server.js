import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

const PORT = process.env.PORT || 4030;

// --- Get albums (single Immich URL param) ---
app.get("/albums", async (req, res) => {
  try {
    const { immichUrl, immichKey } = req.query;
    if (!immichUrl || !immichKey) {
      return res.status(400).json({ error: "Missing Immich connection info" });
    }

    const response = await fetch(`${immichUrl}/albums`, {
      headers: { "x-api-key": immichKey },
    });

    if (!response.ok) throw new Error(`Immich /albums failed: ${response.status}`);
    const albums = await response.json();

    const simplified = Array.isArray(albums)
      ? albums.map(a => ({
          id: a.id,
          albumName: a.albumName || a.name || "Untitled Album",
        }))
      : [];

    res.json(simplified);
  } catch (e) {
    console.error("Error fetching albums:", e);
    res.status(500).json({ error: "Failed to fetch albums" });
  }
});

// --- Get album images (single Immich URL param) ---
app.get("/album/:id", async (req, res) => {
  try {
    const { immichUrl, immichKey } = req.query;
    const albumId = req.params.id;

    if (!immichUrl || !immichKey || !albumId) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    const response = await fetch(`${immichUrl}/albums/${albumId}`, {
      headers: { "x-api-key": immichKey },
    });

    if (!response.ok) throw new Error(`Immich /albums/${albumId} failed: ${response.status}`);
    const album = await response.json();

    const assets = album?.assets || [];
    const imageUrls = assets.map(a => {
      const base = immichUrl.replace(/\/api$/, "");
      return `${base}/api/assets/${a.id}/original?x-api-key=${immichKey}`;
    });

    res.json(imageUrls);
  } catch (e) {
    console.error("Error fetching album images:", e);
    res.status(500).json({ error: "Failed to fetch album images" });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Immich proxy running on port ${PORT}`);
});
