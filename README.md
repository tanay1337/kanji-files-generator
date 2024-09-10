# Kanji Files Generator

This script parses the `kanji.json` file (about 26K entries) in the `data` folder to create individual JSON files for each kanji entry in the `generated_files` folder. By default, the script will generate entries for only the first 100 characters, which can be updated in the `index.js` file.

You can then use this data to display a random kanji character at regular intervals with Waybar (Linux) or SketchyBar (macOS). You can check out my dotfiles [here](https://github.com/tanay1337/.dotfiles/).


## Setup

Run the following commands:
```
mkdir generated_files
node index.js
```

You should then move these generated files to the correct location. For me, it's `Documents/kanji`.