import sharp from 'sharp';
// import fs from 'fs'; // Not used in this script
import path from 'path';

const iconSizes = [
  { size: 72, name: 'icon-72x72.png' },
  { size: 96, name: 'icon-96x96.png' },
  { size: 128, name: 'icon-128x128.png' },
  { size: 144, name: 'icon-144x144.png' },
  { size: 152, name: 'icon-152x152.png' },
  { size: 192, name: 'icon-192x192.png' },
  { size: 384, name: 'icon-384x384.png' },
  { size: 512, name: 'icon-512x512.png' }
];

async function generateIcons() {
  console.log('🎨 Generating PWA icons...');
  
  // Create a simple gradient icon as placeholder
  const iconBuffer = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 59, g: 130, b: 246, alpha: 1 } // Blue gradient base
    }
  })
  .composite([
    {
      input: Buffer.from(`
        <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="512" height="512" fill="url(#grad)" rx="80"/>
          <text x="256" y="300" font-family="Arial, sans-serif" font-size="120" font-weight="bold" text-anchor="middle" fill="white">A</text>
        </svg>
      `),
      top: 0,
      left: 0
    }
  ])
  .png()
  .toBuffer();

  // Generate all icon sizes
  for (const icon of iconSizes) {
    await sharp(iconBuffer)
      .resize(icon.size, icon.size)
      .png()
      .toFile(path.join('public', icon.name));
    
    console.log(`✅ Generated ${icon.name}`);
  }

  // Generate favicon
  await sharp(iconBuffer)
    .resize(32, 32)
    .png()
    .toFile('public/favicon-32x32.png');

  await sharp(iconBuffer)
    .resize(16, 16)
    .png()
    .toFile('public/favicon-16x16.png');

  console.log('✅ Generated favicons');
  console.log('🎉 All icons generated successfully!');
}

generateIcons().catch(console.error);
