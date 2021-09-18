import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@/src/Link';
import Copyright from '@/src/Copyright';

const source = `永和九年，歲在癸丑，暮春之初，會於會稽山陰之蘭亭，脩禊事也。群賢畢至，少長咸集。此地有崇山峻領（嶺），茂林脩竹；又有清流激湍，映帶左右，引以為流觴曲水，列坐其次。雖無絲竹管弦之盛，一觴一詠，亦足以暢敘幽情。

是日也，天朗氣清，惠風和暢。仰觀宇宙之大，俯察品類之盛。所以遊目騁懷，足以極視聽之娛，信可樂也。

夫人之相與，俯仰一世，或取諸懷抱，悟言一室之內；或因寄所託，放浪形骸之外。雖趣（取/趨）舍萬殊，靜躁不同，當其欣於所遇，蹔得於己，怏然自足，不知老之將至；及其所之既倦，情隨事遷，感慨係之矣。向之所欣，俯仰之間，以（已）為陳跡，猶不能不以之興懷；況脩短隨化，終期於盡。古人云：「死生亦大矣。」豈不痛哉！

每攬（覽）昔人興感之由，若合一契，未嘗不臨文嗟悼，不能喻之於懷。固知一死生為虛誕，齊彭殤為妄作。後之視今，亦由（猶）今之視昔，悲夫！故列敘時人，錄其所述，雖世殊事異，所以興懷，其致一也。後之攬（覽）者，亦將有感於斯文。`;

const chapters = [
  `永和九年，歲在癸丑，暮春之初，會於會稽山陰之蘭亭，脩禊事也。群賢畢至，少長咸集。此地有崇山峻領（嶺），茂林脩竹；又有清流激湍，映帶左右，引以為流觴曲水，列坐其次。雖無絲竹管弦之盛，一觴一詠，亦足以暢敘幽情。`,
  `是日也，天朗氣清，惠風和暢。仰觀宇宙之大，俯察品類之盛。所以遊目騁懷，足以極視聽之娛，信可樂也。`,
  `夫人之相與，俯仰一世，或取諸懷抱，悟言一室之內；或因寄所託，放浪形骸之外。雖趣（取/趨）舍萬殊，靜躁不同，當其欣於所遇，蹔得於己，怏然自足，不知老之將至；及其所之既倦，情隨事遷，感慨係之矣。向之所欣，俯仰之間，以（已）為陳跡，猶不能不以之興懷；況脩短隨化，終期於盡。古人云：「死生亦大矣。」豈不痛哉！`,
  `每攬（覽）昔人興感之由，若合一契，未嘗不臨文嗟悼，不能喻之於懷。固知一死生為虛誕，齊彭殤為妄作。後之視今，亦由（猶）今之視昔，悲夫！故列敘時人，錄其所述，雖世殊事異，所以興懷，其致一也。後之攬（覽）者，亦將有感於斯文。`,
];
const FONT_SIZE = 24;
const styles: React.CSSProperties = {
  fontFamily: `'EB Garamond', 'Noto Serif TC', serif`,
  lineHeight: 1.75,
  fontSize: FONT_SIZE,
  fontWeight: 500,
  textIndent: FONT_SIZE * 2,
};

export default function Index() {
  return (
    <Container style={{ padding: 0 }}>
      <Box sx={{ p: 8 }}>
        <Typography
          variant="h4"
          style={{ fontFamily: styles.fontFamily }}
          // fontSize={48}
          component="h1"
          sx={{ ml: 8 }}
        >
          蘭亭集序
        </Typography>
        <Box sx={{ ml: 8 }}>
          {chapters.map((ch, i) => (
            <Typography key={i} style={styles} component="p">
              {ch}
            </Typography>
          ))}
        </Box>
        <Box sx={{ ml: 8 }}>
          {chapters.map((ch, i) => (
            <Typography key={i} style={styles} component="p">
              {ch}
            </Typography>
          ))}
        </Box>
        <Box sx={{ ml: 8 }}>
          {chapters.map((ch, i) => (
            <Typography key={i} style={styles} component="p">
              {ch}
            </Typography>
          ))}
        </Box>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <Box sx={{ mx: 4 }} />
        <Copyright />
      </Box>
    </Container>
  );
}
