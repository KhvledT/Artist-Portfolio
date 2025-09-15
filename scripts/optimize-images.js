import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../src/assets/images');
const outputDir = path.join(__dirname, '../src/assets/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image optimization settings
const optimizationSettings = {
  jpeg: {
    quality: 85,
    progressive: true,
    mozjpeg: true
  },
  png: {
    quality: 85,
    compressionLevel: 9,
    adaptiveFiltering: true
  },
  webp: {
    quality: 80,
    effort: 6
  }
};

async function optimizeImage(inputPath, outputDir) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const _ext = path.extname(inputPath).toLowerCase();
  
  try {
    let image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Resize if image is too large
    if (metadata.width > 1920) {
      image = image.resize(1920, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    // Generate optimized JPEG
    await image
      .jpeg(optimizationSettings.jpeg)
      .toFile(path.join(outputDir, `${filename}.jpg`));
    
    // Generate WebP version
    await image
      .webp(optimizationSettings.webp)
      .toFile(path.join(outputDir, `${filename}.webp`));
    
    // Generate responsive sizes
    const sizes = [640, 1024, 1920];
    for (const size of sizes) {
      if (metadata.width > size) {
        await image
          .resize(size, null, { withoutEnlargement: true, fit: 'inside' })
          .jpeg(optimizationSettings.jpeg)
          .toFile(path.join(outputDir, `${filename}-${size}.jpg`));
        
        await image
          .resize(size, null, { withoutEnlargement: true, fit: 'inside' })
          .webp(optimizationSettings.webp)
          .toFile(path.join(outputDir, `${filename}-${size}.webp`));
      }
    }
    
    console.log(`✅ Optimized: ${filename}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${filename}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🚀 Starting image optimization...');
  
  const directories = [
    'projects/Digital Art',
    'projects/Mixed Media', 
    'projects/Painting',
    'projects/Photography'
  ];
  
  for (const dir of directories) {
    const fullPath = path.join(inputDir, dir);
    if (fs.existsSync(fullPath)) {
      const files = fs.readdirSync(fullPath);
      const imageFiles = files.filter(file => 
        /\.(jpg|jpeg|png)$/i.test(file)
      );
      
      for (const file of imageFiles) {
        await optimizeImage(path.join(fullPath, file), outputDir);
      }
    }
  }
  
  // Also optimize root images
  const rootFiles = fs.readdirSync(inputDir).filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file)
  );
  
  for (const file of rootFiles) {
    await optimizeImage(path.join(inputDir, file), outputDir);
  }
  
  console.log('🎉 Image optimization complete!');
}

optimizeAllImages().catch(console.error);
