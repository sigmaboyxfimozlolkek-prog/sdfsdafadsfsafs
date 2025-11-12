import { MusicTrack, OsintTool } from './types';

// IMPORTANT: User must place their music files in the `public/music/` directory
// and update the `src` paths accordingly. These are placeholders.
export const musicTracks: MusicTrack[] = [
  { title: "KM_FUCKER", artist: "VIBE", src: "https://r2.guns.lol/c08dbc0d-cd2e-498b-a0d5-2990f6fb282a.mp3" },
];

export const socialLinks = [
    { name: 'Telegram', url: 'https://t.me/km_fucker', username: '@km_fucker' },
    { name: 'Telegram Bio', url: 'https://t.me/km_fucker_bio', username: 'Bio Channel' },
    { name: 'guns.lol', url: 'https://guns.lol/km_fucker', username: 'guns.lol Profile' },
    { name: 'GitHub', url: 'https://github.com/kmfuck', username: 'kmfuck' },
    { name: 'Signal', url: 'https://signal.me/#eu/km_fuck.23', username: 'km_fuck.23' },
    { name: 'Discord', url: '#', username: 'km_fucker' }, // Discord user profile links are not standard
    { name: 'Project', url: 'https://t.me/km_fuck', username: 'Project Channel' }
];

export const osintTools: OsintTool[] = [
  { name: 'Maltego', url: 'https://www.maltego.com/' },
  { name: 'Shodan', url: 'https://www.shodan.io/' },
  { name: 'theHarvester', url: 'https://github.com/laramies/theHarvester' },
  { name: 'Recon-ng', url: 'https://github.com/lanmaster53/recon-ng' },
  { name: 'SpiderFoot', url: 'https://www.spiderfoot.net/' },
  { name: 'OSINT Framework', url: 'https://osintframework.com/' },
  { name: 'TinEye', url: 'https://tineye.com/' },
  { name: 'BuiltWith', url: 'https://builtwith.com/' },
  { name: 'WiGLE', url: 'https://wigle.net/' },
  { name: 'Intelligence X', url: 'https://intelx.io/' }
];

export const trainingLink = {
  name: 'OSINT Training Pack',
  url: 'https://drive.google.com/drive/folders/1zOfllOww6x4Ese2R_2drvta5GyUroNZ0?usp=drive_link'
};