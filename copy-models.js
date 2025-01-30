import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function copyModels() {
  try {
    // Create the directories if they don't exist
    await fs.ensureDir(path.join(__dirname, 'public', 'desktop_pc'));
    await fs.ensureDir(path.join(__dirname, 'public', 'planet'));

    // Create placeholder files if models don't exist
    const placeholderContent = 'This is a placeholder for the 3D model.';
    
    await fs.writeFile(
      path.join(__dirname, 'public', 'desktop_pc', 'scene.gltf'),
      placeholderContent
    );

    await fs.writeFile(
      path.join(__dirname, 'public', 'planet', 'scene.gltf'),
      placeholderContent
    );

    console.log('3D model placeholders created successfully!');
  } catch (err) {
    console.error('Error creating 3D model placeholders:', err);
    process.exit(1);
  }
}

copyModels();
