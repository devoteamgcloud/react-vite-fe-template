import fs from 'fs';
import path from 'path';
import 'dotenv/config';

const sheetDbUrl = process.env.VITE_SHEET_DB_URL;

const SHEETDB_API = sheetDbUrl ?? '';
const OUTPUT_DIR = path.join(
  process.cwd(),
  'src',
  'integrations',
  'i18n',
  'locales'
);

interface Translation {
    translation_key: string
    EN: string
}

async function fetchTranslations() {
  try {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    console.log('Fetching translations from SheetDB...');
    const response = await fetch(SHEETDB_API);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const translations: Translation[] = await response.json();

    const enTranslations: { [key: string]: string } = {};
    const noTranslations: { [key: string]: string } = {};

    translations.forEach((item) => {
      if (item.translation_key) {
        enTranslations[item.translation_key] = item.EN;
      } else {
        console.error(
          `Skipping translation with undefined key: ${JSON.stringify(item)}`
        );
      }
    });

    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'en.json'),
      JSON.stringify(enTranslations, null, 2)
    );

    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'no.json'),
      JSON.stringify(noTranslations, null, 2)
    );

    console.log('✅ Translations updated successfully!');
    console.log(`📁 Files written to: ${OUTPUT_DIR}`);
    console.log(
      `📝 Total translations: ${Object.keys(enTranslations).length}`
    );
  } catch (error) {
    console.error('❌ Error fetching translations:', error);
    process.exit(1);
  }
}

fetchTranslations();
