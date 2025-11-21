# Export Images from Figma

To add the images to your portfolio, you need to export them from Figma and save them in the `images/` folder.

## Steps to Export Images from Figma:

1. **Open your Figma file**: https://www.figma.com/design/q417AMaMPqU3n3V7KOXNXT/Design-System?node-id=1-21&m=dev

2. **Select each element** and export as PNG:

### Headshot Image
- Select the profile picture (circular headshot) - Node ID: `1:135`
- Right-click → **Export** → Select **PNG** → Export
- Save as: `images/headshot.png`
- Recommended size: 240x240px (or 2x for retina: 480x480px)

### Logo Images (Export as SVG)

#### Rippling Logo
- Find the Rippling logo in the timeline cards - Node ID: `11:733`
- Right-click → **Export** → Select **SVG** → Export
- Save as: `images/logo-rippling.svg`

#### Zenefits Logo
- Find the Zenefits logo in the timeline cards - Node ID: `11:336`
- Right-click → **Export** → Select **SVG** → Export
- Save as: `images/logo-zenefits.svg`

#### SigFig Logo
- Find the SigFig logo in the timeline cards - Node ID: `11:743`
- Right-click → **Export** → Select **SVG** → Export
- Save as: `images/logo-sigfig.svg`

### Education Icon (Export as SVG)
- Find the education/graduation icon - Node ID: `15:1752`
- Right-click → **Export** → Select **SVG** → Export
- Save as: `images/icon-education.svg`

### Background Image (Optional)
- If there's a background watermark/image - Node ID: `1:134`
- Export as PNG
- Save as: `images/background.png`

## Quick Export Method:

### For Photos (Headshot):
1. In Figma, select the element
2. Look at the right panel → **Export** section
3. Click **+** to add an export setting
4. Choose **PNG** format
5. Select appropriate size (1x for standard, 2x for retina displays)
6. Click **Export** button
7. Save to the `images/` folder with the correct filename

### For Vector Graphics (Logos & Icons):
1. In Figma, select the element
2. Look at the right panel → **Export** section
3. Click **+** to add an export setting
4. Choose **SVG** format (better for logos and icons - scalable and crisp at any size)
5. Click **Export** button
6. Save to the `images/` folder with the correct filename

## Alternative: Batch Export

If you want to export multiple images at once:
1. Select all the elements you want to export (Shift+Click)
2. Use the **Export** panel in Figma
3. Export all at once
4. Organize them into the `images/` folder with the correct names

## File Structure After Export:

```
matthewwager.github.io/
├── images/
│   ├── headshot.png          (photo - PNG format)
│   ├── logo-rippling.svg     (vector - SVG format)
│   ├── logo-zenefits.svg     (vector - SVG format)
│   ├── logo-sigfig.svg       (vector - SVG format)
│   └── icon-education.svg    (vector - SVG format)
├── index.html
└── styles.css
```

After exporting and saving the images, refresh your browser to see them in the portfolio!

