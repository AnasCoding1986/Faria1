const fs = require('fs-extra');
const path = require('path');
const url = require('url');
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function copyModels() {
  try {
    console.log('Starting 3D model placeholder creation...');
    
    const baseDir = __dirname;
    console.log(`Base directory: ${baseDir}`);

    const publicDir = path.join(baseDir, 'public');
    const desktopPcDir = path.join(publicDir, 'desktop_pc');
    const planetDir = path.join(publicDir, 'planet');

    console.log(`Ensuring directories exist...`);
    await fs.ensureDir(publicDir);
    await fs.ensureDir(desktopPcDir);
    await fs.ensureDir(planetDir);

    const placeholderContent = 'This is a placeholder for the 3D model.';
    
    console.log(`Creating placeholder files...`);
    await fs.writeFile(
      path.join(desktopPcDir, 'scene.gltf'),
      placeholderContent
    );

    await fs.writeFile(
      path.join(planetDir, 'scene.gltf'),
      placeholderContent
    );

    console.log('Verifying created files...');
    const desktopPcFiles = await fs.readdir(desktopPcDir);
    const planetFiles = await fs.readdir(planetDir);

    console.log('Desktop PC directory files:', desktopPcFiles);
    console.log('Planet directory files:', planetFiles);

    console.log('3D model placeholders created successfully!');
  } catch (err) {
    console.error('Error creating 3D model placeholders:', err);
    console.error('Error details:', {
      message: err.message,
      stack: err.stack,
      code: err.code
    });
    process.exit(1);
  }
}

copyModels();
