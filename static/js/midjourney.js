(function () {
  'use strict';

  // ===== i18n =====
  var i18n = {
    en: {
      title: 'Gallery',
      subtitle: 'AI-generated artworks with Midjourney',
      epigraph: 'The Work of Art in the Age of Mechanical Reproduction',
      prompt: 'Prompt',
      copy: 'Copy',
      copied: 'Copied',
      back: 'Home',
      footer: 'Yuxin Jin — Midjourney Artworks',
      sortLabel: 'Sort',
      sortOptions: { curated: 'Curated', newest: 'Newest', liked: 'Most Liked' },
      publishedIn: 'Originally published in',
      readArticle: 'Read article',
      descriptions: {
        1: 'A British Shorthair silver shaded cat with pure white undercoat and smoky blue-tipped fur, creating a signature shimmering silver look. Blue-green eyes glow under dramatic back-lighting.',
        2: 'The same silver shaded British Shorthair, captured with adjusted lighting ratios — the edge and rim lights create a softer, more intimate portrait feel.',
        3: 'A playful cat leaping through a persimmon tree, reaching for the fruit hanging high above. Bright orange meets misty white in a Japanese manga-inspired illustration.',
        4: 'Same cat-and-persimmon theme reimagined in a whimsical cartoon style, inspired by the works of Pierre Pellegrini and Skottie Young.',
        5: 'A silver shaded British cat leaps playfully among persimmon branches — the cover image bridging the cat portrait series with the whimsical tree scenes.',
        6: 'Flowers blooming in night darkness, forming a cat of deep beauty. Dark golden and light white tones, aggressive digital illustration style with Kodak Gold color grading and glass texture.',
        7: 'A variant of the night-blooming flowers — same ethereal cat silhouette rendered in glass, with subtle differences in composition.',
        8: 'A boy and girl at a summer festival — she in a sunflower yukata, he in a white t-shirt, on a hill overlooking the village fair. Fireworks, silhouettes, and the luminous mystery of a summer night.',
        9: 'A boy jumping rope while watching a flying duck. Tenebrism style inspired by Caravaggio and Gentileschi — dark cyan and amber, chiaroscuro mastery meets joyful optimism.',
        10: 'Dong ErQian pushes open the window and raises the spyglass. His eye reflects thick smoke. The road ahead is closed and the way back lost — luminous portraits in photo-realistic hyperbole.',
        11: 'An aerial view of the athlete cat gliding through clouds — reimagining the cloud-skiing scene from a bird\'s-eye perspective.',
        12: 'McCrispy Chicken rendered in food magazine photography style — professional color grading, soft shadows, and sharp focus elevate fast food into art.',
        13: 'Cats frolicking in a golden wheat field tall enough to hide them. Cinematic still shot with motion blur, early morning light, and a dreamy atmosphere.',
        14: 'An athlete cat skiing through a soft ocean of clouds, drawn in cute naive art style inspired by Japanese manga — whimsical and full of wonder.',
        15: 'A fairy bestowing good dreams upon a sleeping child. Rendered in Cinema4D style with influences from Ilya Kuvshinov, Thiago Valdi, and Skottie Young — soft edges and miniature illumination.',
        16: 'A person dwarfed by a massive orange cat sculpture — chrome reflections, pop art vibes, and Irving Penn-inspired composition.',
        17: 'A dramatic collision between a light-coloured Buick and a semitrailer truck, rendered in unpredictable photo-realistic hyperbole. The truck tilts sharply mid-swerve, smashing the Buick\'s front.',
        18: 'The world reimagined as a giant euphonium — a single poetic prompt yielding a surreal, music-infused landscape.',
        19: 'A Maine Coon standing atop a tall wardrobe, shot in analog lo-fi style. Chinese room décor, sunlit afternoon light, desaturated tones, and soft focus create a nostalgic mood.',
        20: 'Carnation arrangements in two vases — pink-bordeaux and yellow-white — captured in ethereal minimalism. Shot on Fujifilm GFX 50R with Kodak Tri-X 400 film stock.',
        21: 'A Chinese girl sitting on door steps with her cute cat — illustrated in the warm, gentle style of Raymond Briggs.',
        22: 'Tokyo skyline bathed in golden sky with epic colours. A tonalist, ethereally still composition in baby blue and gold — an award-winning photograph with no people.',
        23: 'A high school wind orchestra rehearsal room for 55 musicians — black collapsible chairs, music stands, instruments waiting to be played. Grey carpets and sunlight filtering through heavy curtains.',
        24: 'A cat rendered in expressionist Bromoil print — ablaze colors colliding across watercolor, oil painting, and pastel textures. Abstract art meets hyper-realism.',
        25: 'Another variant of the girl and cat on door steps — same Raymond Briggs-inspired prompt, with subtle compositional differences.',
        26: 'A variant of the dream fairy — same Cinema4D style with Kuvshinov, Valdi, and Young influences.',
        27: 'An innocent little girl slouching over her desk, grading homework on an iPad, with a cat sleeping lazily on the carpet. Vector flat icon style with bold lines and vibrant colors.',
        28: 'A folded white Japanese sailor uniform resting on a wooden desk with light blue accessories — anime-style classroom scene with soft natural light and tachisme influences.',
        29: 'Multiple views of a cat holding a ball of string — full body, foreshortening perspective, rendered as a pencil sketch.',
        30: 'Two anthropomorphic Chinese cats worshiping the Kitchen God and eating sesame-sprinkled maltose strips — Pixar-style 3D, festive Spring Festival atmosphere in red.',
        31: 'Tiny little people trying not to get stepped on at a cat\'s feet — ultra-realistic, high detail.',
        32: 'Post-apocalyptic Nanjing where trees and vegetation have reoccupied human-built streets. Shot in Ricoh FF-9D style with cubist shattered planes and structured chaos.',
        33: 'The world reimagined as a giant euphonium — another variant of this poetic prompt, yielding a different surreal composition.',
        34: 'Tiny people scrambling beneath a giant cat\'s paws.',
        35: 'A man in a black trench coat stands in a sandy grassy field, gun in hand, aiming at a battered boy on a distant leafless tree. Cinematic detail shot with contour lighting.',
        36: 'A cat wearing a crash helmet in near-darkness — Wong Kar Wai and Michael Eastman style, chinapunk elegance.',
        37: 'Lotus flowers captured in ethereal lighting with graceful balance. Shot on Fujifilm GFX 50R with Kodak Tri-X 400 film stock.',
        38: 'A Chinese bald old man dancing in a nightclub — cinematic Wes Anderson symmetry with Hasselblad film grain.',
        39: 'A Chinese baby in mother\'s arms, looking fearfully at a syringe in the doctor\'s hand. Intimate portrait photography.',
        40: 'A cat in a construction site helmet, shrouded in darkness — Wong Kar Wai style with chinapunk aesthetics, low-key illumination and exquisite details.',
        41: 'A cat in a stock exchange with green-lit negative trends.',
        42: 'A Chinese woman crying while eating stir-fried pork with cauliflower in near-darkness — Wong Kar Wai and Michael Eastman\'s chinapunk elegance.',
        43: 'Under-exposure portrait of a Chinese young girl walking along a river, luminous and dreamlike in widescreen.',
        44: 'A cat in coloring book style — black and white vector lines with detailed botanical background. Adult coloring book aesthetics.',
        45: 'Same cat-and-stock-exchange prompt — green-lit negative trends, a different compositional variant.',
        46: '"A cat."',
        47: 'A cat wearing a helmet in near-darkness — another Wong Kar Wai chinapunk piece, this time with a generic helmet instead of a specific type.',
        48: '"A cat."',
        49: 'A very strong cat rendered in Chinese brush painting — black and white ink style, close-up, raw power captured in traditional aesthetics.',
        50: 'A crowded and tense pre-war meeting of cats — cinematic lighting, black and white sketch in Dadaist style with high detail.',
        51: 'The same Chinese brush painting cat prompt — a variant showcasing ink-washed feline power in black and white.',
        52: 'A cheetah family basking in golden hour light against vast mountainous landscapes — the decisive moment of serenity and grandeur.',
        53: 'An elderly white cat with sage-like demeanor — long white hair, kind eyes full of vitality, seated in a chair before a Taoist temple, shot at 800mm.',
        54: 'A very strong cat in Chinese brush painting — black and white close-up, raw power captured in traditional ink wash aesthetics.',
        55: 'A cat rendered as a coloring book page — vector lines, detailed botanical background, black and white adult illustration style.',
        56: 'A cat wearing a Chinese dragon hat — Japanese anime-style New Year painting in dark cyan and gold, pop-inspired imagery with free-flowing lines.',
        57: 'A stretch of spring lake with majestic mountains in the distance — white clouds reflected on the water, mist and sunrise captured in HDR raw style.',
        58: 'AI-generated Chinese family portrait — nine family members standing in snowy northern China fields with New Year-inspired rural houses, sunny bright day.',
        59: 'Many koi fish swimming together — a vibrant, densely stylized composition at maximum stylization.',
        60: 'Happy New Year Chinese dragon painting — Japanese anime style green dragon in dark cyan and gold, pop-inspired with colorful free-flowing lines.',
        61: 'Mickey Mouse ice sculpture competition in the sun — minimalistic sculptures, front view, high and short depth of field, Miyazaki Hayao style, 4K hyper quality.',
        62: 'Panda eating in a painting on the ground — Heian period style, gold and green, Song dynasty aesthetics.',
        63: 'Cat wearing a Chinese dragon-style hat — Japanese animation green dragon, dark cyan and gold, pop-inspired imagery, colorful free-flowing lines.',
        64: 'The short-haired girl in the white dress looking down and sniffing at the flowers in her hand — made of glass, aquamarine, romantic, emphasis on light and color, aggressive digital illustration.',
        65: 'A cat under a tree, in the style of ethereal lighting and graceful balance. Shot on Fujifilm GFX 50R with Kodak Tri-X 400 film stock.',
        66: 'A white beckoning cat (Maneki-neko) as Chinese god of wealth — 3D cute style, red and gold, festive, gold ingots, red envelopes, Fú character, prosperous New Year mood.',
        67: 'Award-winning close-up of pink blossoms on a branch in spring — snow-scene style, Chinese traditional art influence, dark white and white, blown-off-roof perspective, soft and dreamy.',
        68: 'Risograph-style print of an Indian man tuning a piano — influences from Chinese art and Maud Lewis, full-body view, simple lines, deep forest green, rust orange, stone gray, muddy brown on white.',
        69: 'Cat and lilies with a cosmic dark background — ethereal and serene.',
        70: 'A teenager and a young girl, hands interlocked on their chests, foreheads pressed together, eyes closed in prayer, falling headfirst backwards through the clouds — dreamy, supernatural, Makoto Shinkai romanticism, fabulous natural backgrounds.',
        75: 'A variant of the Chinese female boxer — same analog film grain and cinematic masterpiece prompt.',
        71: 'Unmistakable from a photograph — analog film grain, mottled bluish gray backdrop. A 24-year-old rough-looking Chinese female boxer with bruises, fists at chin level, dry skin texture, micro pores, cinematic masterpiece.',
        72: 'A silhouette of a green-blue bird flying out the door — Medieval country house, forest outside, open empty birdcage, tipped basket of berries, a blue feather falling. Expressive manga style, light and bright. Liz and the Blue Bird.',
        73: 'Folk art cute cat in a Paeonia field — soft and dreamy.',
        74: 'A girl — simple and evocative.',
        76: 'Heavy snow day — a vast Beijing cityscape in grayscale, a cat flying in the sky, sharp contrast.',
        77: 'A photorealistic glass window on a rainy, foggy day — water droplets, a simple flower shape as if dripping, blurry rainy scenery behind.',
        78: 'Chinese dragon with golden eyes, full-body, ethereal, Chinese epic style — turning in the sea, lightning and thunder, smoke, hazy white background.',
        79: 'People often revere what they don\'t understand — like a cat flying across the Beijing sky.',
        80: 'Full-body portrait of a woman in red cheongsam — street style realism, monochromatic, aurorapunk, mori kei, decadent beauty, golden age aesthetics.',
        81: 'two characters waving hello, cute anime style, Miyazaki Hayao, warm and friendly.',
        82: 'Coconut flavored eggroll roll popcorn — cute style, Petros Afshar, traditional animation, graffiti, study place, white background.',
        83: 'A young Japanese man kneels in prayer, his wife on his lap whom he has just killed with his own hands — handdraw, Japanese comics, anime style.',
        84: 'A girl in a window seat, hand propping her chin, looking at the handsome boys in the distance — Miyazaki Hayao style, spotlight on girl.',
        85: 'The boy stuck pins in the Muppet figurines and cursed his classmates to go out and fall on their feet — Miyazaki Hayao style, handdraw, Japanese comics.',
        86: 'A young Chinese girl in glasses and a grumpy cat — 3D digital illustration, warm color palette, sharp & vivid colors.',
        87: 'A young Chinese girl in glasses stuffed in a squirrel\'s mouth — 3D digital illustration, lovely character designs, warm and vivid colors.',
        88: 'A three-panel realistic comic book page: a couple happy together, the boy kills the smiling girl, and he kneels in prayer for her to reach heaven.',
        89: 'A painting of a boy with a dead heart — traditional Chinese landscape meets misty gothic, plush doll art, luminous reflections, serene faces.',
        90: 'An angry cat at the desk — children\'s book illustration, whimsical and simple aesthetic, bright colors, in the style of Clémence Guillemaud.',
        91: 'White flowers and a white cat — ethereal minimalism, soft light, delicate illustration.',
        92: 'One two three scarecrow — an orange cat in a golden wheat field, whimsical children\'s book style.',
        93: 'An Egyptian cat and the cosmos.',
        94: 'A fairy in pink — bestowing good dreams, Cinema4D style, Kuvshinov, Valdi, Skottie Young.',
        95: 'Shanghai skyline — a Tokyo variant.',
        96: '📈 — Cat and stock chart, red K-lines.',
        97: 'Empty mountains after new rain — Chinese landscape, misty peaks, traditional ink wash, serene.',
        98: 'Close-up with jade green eyes — ethereal, luminous portrait, fine detail.',
        99: 'Gothic sister — dark lace, dramatic lighting, Victorian gothic, haunting beauty.',
        100: 'A little dream fairy — small spirit bestowing good dreams, soft illumination, whimsical.',
        101: 'Cat family celebrating Chinese New Year with a New Year\'s Eve dinner at home — hyperdetailed, maximalist, couture animation style.',
        102: 'A handsome cat in a trench coat — cinematic portrait, Fuji film, soft light.',
        103: 'A cute little Chinese girl at a table dealing with a puzzle, staring at the desk — 50mm, Fuji film, soft light, bright environment.',
        104: 'A zebra walking in the middle of a blurred Beijing street crowd — Fuji film.',
        105: 'A cute milky white long-haired dwarf cat typing on a laptop keyboard, writing a book.',
        106: 'On a big windy day, a cute pig flying in the sky, hugging a large dandelion stem.',
        107: 'Blue sky and white clouds, a patch of grass, an elephant with a bird on its head — Mandy Disher style, purple and pink, impressionistic watercolor.',
        108: 'A caricature of a young female Crypt Dwarf who\'s going to die of heat on a sunny day — stylize 250.',
        109: 'Cinematic extreme close-up on two clean plums on trees, bright light behind — style raw.',
        110: 'Baby calico cat running in a sunny forest — 16-bit video game, chibi, cute pixel art.',
        111: 'A little girl with no life to lose looks at a rope loop dangling from the sky.',
        112: 'Raccoon in a sea of flowers.',
        113: 'A woman with a lot of blooming peonies on her head.',
        114: 'A colorful parrot working as a speech therapist.',
        115: 'A cute cartoon calico cat against a blue brushstroke background — simple line-drawing style.',
        116: 'A red world tree glowing in a transparent terrarium at the belly of an anime girl, full body, nightcore, studio lighting.',
        117: 'A young Chinese girl in a yellow cheongsam — Wong Kar-Wai movie style, 1960s–90s Chinese poster, romantic, soft focus.',
        118: 'Multi-layer yellow flower blooming from a rock crevice on the mountaintop, sunrise, Sony A7R IV style.',
        119: 'A huge tiger gazes at an Indian man in tattered clothes in the rainforest.',
        120: 'Low angle shot of a cute Maine Coon facing the camera.',
        125: 'A cat swimming in the water — summer mood, sunlight.',
        121: 'A cute baby Chinese dragon in a suit holding a "Hello" sign and waving.',
        122: 'Two little Chinese kids by the rice fields on a summer night watching fireflies.',
        123: 'Documentary photo of a lotus pond in the rain.',
        124: 'A boy in a wheat field playing hide-and-seek; his friends have grown up and left.',
        126: 'Cats surrounding a red balloon with "I LOVE CAT!" on it.',
        127: 'Double exposure of a young girl and her grandfather on white.',
        128: 'Two black swans and three gray cygnets in a lotus pond.',
        129: 'A man and a woman typing on phones — Picasso-style canvas of steel plates and iron wire, gold.',
        130: 'Minimalist aerial view: red water left, white water right, one man rowing between.',
        131: 'A cute cat playing underwater, chasing a jellyfish — captured from below the surface.',
        132: 'Beatrix Potter–style: mother rabbit reading a fairy tale to baby rabbit in bed, flower-patterned pajamas.',
        133: 'Dogs lying happily together.',
        134: 'Framed photo: wedding of humanoid tomato in suit and humanoid egg in wedding dress.',
        135: 'White cat with green eyes at the North Pole with northern lights.',
        136: 'An attempt at character consistency with "Gothic Sister".',
        137: 'A teenager sits in front of the computer, facing the camera, with green light from the screen illuminating his profile, conveying a message of safety.',
        138: 'A concrete visualization of the harm cyberbullying does to the human mind.',
        139: 'A lover dead in one\'s own hands — Japanese style.',
        140: 'Full-body portrait of a woman in a black cheongsam — street style realism, monochromatic, aurorapunk, mori kei, decadent beauty, golden age aesthetics.',
        141: 'A free horse — bird\'s eye view.',
        142: 'A girl with a gun against a ruins background.',
      },
      titles: {
        1: 'Silver Shaded',
        2: 'Hello',
        3: 'On the Tree',
        4: 'Fruitful',
        5: 'Persimmon Cat',
        6: 'Flower',
        7: 'Night Bloom',
        8: 'Fated Love',
        9: 'Jumping Rope',
        10: 'Hundred Thousand Hippies',
        11: 'Cloud Surfer',
        12: 'McCrispy Chicken',
        13: 'Wheat Field',
        14: 'The Athlete',
        15: 'Dream Fairy',
        16: 'Cat Sculpture',
        17: 'The Perpetrator',
        18: 'Euphonium',
        19: 'Cat King',
        20: 'Carnation',
        21: 'Best Friends',
        22: 'Tokyo',
        23: 'Wind Orchestra',
        24: 'Expressionism',
        25: 'Best Friends II',
        26: 'Dream Fairy II',
        27: 'Grading Homework',
        28: 'Sailor Uniform',
        29: 'Sketch',
        30: 'Kitchen God Candy',
        31: 'Catzilla',
        32: 'We Live in Nanjing',
        33: 'Parallel Universe',
        34: 'Catzilla II',
        35: 'Goodnight Shot',
        36: 'Cat Sister',
        37: 'Lotus',
        38: 'The Uncle',
        39: 'About to Get a Shot',
        40: 'Cat Sister II',
        41: 'Bear Market',
        42: 'Summer Night',
        43: 'Always Quiet',
        44: 'Picture Book',
        45: 'Bear Market II',
        46: 'The General',
        47: 'The Pilot',
        48: 'The General II',
        49: 'Leap',
        50: 'Pre-war Meeting',
        51: 'Ink Cat',
        52: 'The Cheetah Family',
        53: 'Cat Elder of Tianshan',
        54: 'A Glance and a Smile',
        55: 'A Hundred Charms',
        56: 'Dragon Hat Cat',
        57: 'Memories of Shang Lake',
        58: 'Family Portrait',
        59: 'Koi Fish',
        60: 'Leaping Over the Dragon Gate',
        61: 'Mickey Mouse',
        62: 'Iron-Eater',
        63: 'Totoro',
        64: 'Looking Down',
        65: 'Cat Under a Tree',
        66: 'God of Wealth Cat',
        67: 'Pink Blossoms',
        68: 'The Tuner',
        69: 'A Glance Eternal',
        70: 'Prayer in the Clouds',
        75: 'Ready to Fight',
        71: 'Ready to Fight II',
        72: 'Liz and the Blue Bird',
        73: 'Cloud Flowers',
        74: 'A Girl',
        76: 'Wind',
        77: 'Rainy Day',
        78: 'Dragon King',
        79: 'Wind II',
        80: 'Cheongsam',
        81: 'Let\'s Be Friends',
        82: 'Coconut Eggroll Popcorn',
        83: 'Wedding Ring',
        84: 'Looking at the Boys',
        85: 'The Curse',
        86: 'Miss Matsuko & Grumpy Cat',
        87: 'Miss Matsuko',
        88: 'The Story',
        89: 'Misandrist',
        90: 'I\'m Not Happy',
        91: 'White Flowers & White Cat',
        92: 'One Two Three, Scarecrow',
        93: 'Pyramid',
        94: 'Pink Fairy',
        95: 'Shanghai',
        96: '📈',
        97: 'After Rain in Empty Mountains',
        98: 'Jade Eyes',
        99: 'Gothic Sister',
        100: 'Little Dream Fairy',
        101: 'Reunion for the New Year',
        102: 'Cat in Trench Coat',
        103: 'Puzzle',
        104: 'Zebra, Zebra',
        105: 'Shakespeare',
        106: 'Flying to the Sky',
        107: 'Under the Blue Sky',
        108: 'In Those Sunny Days',
        109: 'When the Plums Ripen',
        110: 'Pixel Little Gift',
        111: 'A Girl Named Xi Shi Decides to Die',
        112: 'Starship',
        113: 'Peonies',
        114: 'You\'re Right About Everything',
        115: 'Calico Cat',
        116: 'World Tree',
        117: 'Myriad Blossoms',
        118: 'There Is Light',
        119: 'The Beast Within',
        120: 'Maine Coon',
        125: 'Summer Sunbeams',
        121: 'Hello',
        122: 'Fireflies',
        123: 'Lotus in Summer Rain',
        124: 'Childhood',
        126: 'I Love Cat',
        127: 'Chet',
        128: 'Three Little Cuties',
        129: 'Handoff',
        130: 'In Fortune',
        131: 'Overcoming Fear',
        132: 'The Bed',
        133: 'Simple Joy',
        134: 'A Perfect Couple',
        135: 'Miracle Moment',
        136: 'Déjà Vu',
        137: 'AP',
        138: 'Cyberbullying',
        139: 'Under the Shrine',
        140: 'Cheongsam II',
        141: 'Gallop',
        142: 'A Girl II',
      },
    },
    zh: {
      title: '画 廊',
      subtitle: 'Midjourney AI 艺术作品',
      epigraph: '机械复制时代的艺术作品',
      prompt: '提示词',
      copy: '复制',
      copied: '已复制',
      back: '主页',
      footer: 'Yuxin Jin — Midjourney 作品集',
      sortLabel: '排序',
      sortOptions: { curated: '精选', newest: '最新', liked: '最多赞' },
      publishedIn: '最初发布于',
      readArticle: '阅读原文',
      descriptions: {
        1: '英国短毛银渐层猫，纯白底毛搭配烟灰蓝色毛尖，呈现出标志性的银色光泽。蓝绿色瞳孔在背光、边缘光与轮廓光的映衬下熠熠生辉。',
        2: '同一只银渐层，调整了灯光权重比例——边缘光与轮廓光营造出更柔和、更亲密的肖像氛围。',
        3: '猫咪在柿子树上跳跃嬉戏，试图抓住高挂的柿子。明亮的橙色与朦胧的白色交织，日式漫画风格的可爱插画。',
        4: '同样的猫与柿子树主题，换成了异想天开的卡通风格——灵感来自 Pierre Pellegrini 和 Skottie Young 的画风。',
        5: '银渐层猫咪在柿子树间跳跃嬉戏——将猫咪肖像系列与柿子树场景巧妙衔接。',
        6: '夜色中绽放的花朵，汇聚成一只深邃之美的猫。暗金与浅白色调，激进的数字插画风格，柯达金色调加玻璃质感。',
        7: '夜之花的另一个变体——同样的玻璃质感猫咪剪影，构图微妙不同。',
        8: '夏日祭的少年少女——她穿着向日葵浴衣，他穿白色T恤，站在俯瞰整个村庄集市的山丘上。烟花、剪影、夏夜的浪漫迷幻。',
        9: '跳绳的少年，目送一只飞翔的鸭子。明暗对比法风格，灵感源自卡拉瓦乔与真蒂莱斯基——深青与琥珀色，光影大师遇上乐观主义。',
        10: '大梦一场的董二千先生，推开窗户，举起望远镜，眼底映出一阵浓烟。前已无通路，后不见归途。——超写实夸张风格的发光肖像。',
        11: '运动员猫咪穿越云海的鸟瞰视角——从高空俯瞰重新诠释了云间滑行的场景。',
        12: '麦麦脆汁鸡，以美食杂志摄影风格呈现——专业调色、柔和阴影、锐利对焦，将快餐升华为艺术。',
        13: '猫咪在金色麦田中嬉戏打闹，麦浪高得足以将它们藏起来。电影般的静态镜头，运动模糊，清晨光线，梦幻氛围。',
        14: '一只运动员猫咪在柔软的云海中滑行，可爱的稚拙艺术风格，灵感源自日式漫画——充满童趣与奇幻。',
        15: '仙子正在为孩子送去美梦。Cinema4D风格渲染，融合了Ilya Kuvshinov、Thiago Valdi和Skottie Young的画风——柔和边缘与微缩光照。',
        16: '一个人站在巨大的橙色猫咪雕塑旁——铬面反光、波普艺术气息、Irving Penn式构图。',
        17: '一辆浅色别克与一辆半挂卡车的剧烈碰撞，以超写实夸张风格呈现。卡车急转弯几乎侧翻，将别克的前脸撞得粉碎。',
        18: '世界被重新想象为一把巨大的上低音号——一条简洁的诗意提示词，生成超现实的、充满音乐感的风景。',
        19: '一只缅因猫站在高大衣柜顶端面对镜头，以胶片lo-fi风格拍摄。中式房间装饰、午后阳光、去饱和色调与柔焦营造出怀旧氛围。',
        20: '两个花瓶中的康乃馨插花——粉色配波尔多红、黄色配白色——以空灵极简主义捕捉。使用富士GFX 50R搭配柯达Tri-X 400胶片拍摄。',
        21: '一个中国女孩和她可爱的猫咪坐在门阶上——以Raymond Briggs温暖柔和的画风呈现。',
        22: '东京天际线沐浴在金色天空中，色彩壮丽。色调主义、空灵的静谧构图，婴儿蓝与金色交织——一张没有人物的获奖级摄影作品。',
        23: '容纳55人的高中管乐团排练室——黑色折叠椅、每个座位前的乐谱架、等待被演奏的乐器。灰色地毯与透过厚重窗帘缝隙洒入的微弱阳光。',
        24: '一只以表现主义溴油印画法呈现的猫——炽烈的色彩在水彩、油画和粉彩质感间碰撞。抽象艺术与超写实主义的交融。',
        25: '女孩与猫在门阶上的另一个变体——同样的Raymond Briggs风格提示词，构图上有微妙差异。',
        26: '梦仙子的另一个变体——同样的Cinema4D风格，融合Kuvshinov、Valdi和Young的画风。',
        27: '一个天真的小女孩趴在桌上用iPad批改作业，旁边一只猫懒洋洋地睡在地毯上。矢量扁平图标风格，粗线条与鲜艳色彩。',
        28: '一件白色日本水手服放在木桌上，旁边是浅蓝色配饰——动漫风格的教室场景，柔和的自然光与不定形主义的影响。',
        29: '一只抱着毛线球的猫的多角度视图——全身、透视缩短法，以铅笔素描风格呈现。',
        30: '两只拟人化的中国猫咪笑着祭灶神、吃裹满芝麻的长条麦芽糖——皮克斯风格3D，红色背景，浓浓的中国年节氛围。',
        31: '小小的人们在猫爪下拼命闪躲——超写实、高细节。',
        32: '后末日南京——树木与植被重新占据了曾经人类建造的街道与建筑。Ricoh FF-9D风格，立体主义碎裂面与结构性混沌。',
        33: '世界被重新想象为一把巨大的上低音号——这条诗意提示词的另一个变体，生成了不同的超现实构图。',
        34: '巨猫脚下仓皇奔逃的微缩人类。',
        35: '一个穿黑色风衣的男人站在沙质草地上，手持枪械，瞄准远处一棵枯树上衣衫褴褛的瘦弱少年。电影级细节镜头，轮廓照明。',
        36: '一只戴着安全头盔的猫在近乎全暗的环境中——王家卫与Michael Eastman风格，中国朋克美学。',
        37: '荷花在空灵光线中绽放，优雅平衡。使用富士GFX 50R搭配柯达Tri-X 400胶片拍摄。',
        38: '一个中国秃头大叔在夜店跳舞——韦斯·安德森式的电影对称构图，哈苏相机的胶片颗粒感。',
        39: '一个中国宝宝在妈妈怀里，恐惧地看着医生手中的注射器。亲密的人像摄影。',
        40: '一只戴着工地安全帽的猫，沉浸在黑暗中——王家卫风格与中国朋克美学，低调照明与精致服装细节。',
        41: '猫咪在绿光闪烁的股票交易所中。',
        42: '一个中国女人在近乎全暗的环境中边哭边吃花菜炒肉——王家卫与Michael Eastman的中国朋克美学。',
        43: '欠曝肖像——一个中国年轻女孩沿着河边行走，发光且如梦似幻的宽银幕画面。',
        44: '涂色书风格的猫——黑白矢量线条与精细的植物背景。成人涂色书美学。',
        45: '同一猫咪股票交易所提示词——绿光中的下跌走势，不同的构图变体。',
        46: '"一只猫。"',
        47: '一只戴头盔的猫在近乎全暗的环境中。',
        48: '"一只猫。"',
        49: '一只非常强壮的猫以中国水墨画风格呈现——黑白墨色，特写，传统美学中蕴含的原始力量。',
        50: '一场拥挤而紧张的猫咪战前会议——电影级打光，达达主义风格的黑白素描，高细节。',
        51: '同一中国水墨画猫咪提示词——变体，展现墨色渲染的猫之力量。',
        52: '猎豹大家族沐浴在黄金时刻的光芒中——壮阔山景前宁静与壮丽的决定性瞬间。',
        53: '一只年迈的白猫，智者风范——长白毛，慈祥的眼睛充满活力，坐在道观前的椅子上，800mm长焦拍摄。',
        54: '中国水墨画中的强壮猫咪——黑白特写，传统水墨美学中的原始力量。',
        55: '猫咪以涂色书风格呈现——矢量线条，精细植物背景，成人黑白插画风格。',
        56: '头戴中国龙帽的猫咪——日式动画风格新年画，暗青与金色，流行艺术意象与自由流畅的线条。',
        57: '一片春日湖泊与远处的壮丽山脉——白云倒映水面，薄雾与日出，HDR原始风格捕捉。',
        58: 'AI生成的中国家庭合影——九位家庭成员站在北方雪原，新年风格的农村房屋背景，阳光灿烂。',
        59: '许多锦鲤一同游弋——色彩鲜艳、密集风格化的构图。',
        60: '新年快乐中国龙画——日式动画风格的绿色龙，暗青与金色，流行艺术风格与多彩自由线条。',
        61: '阳光下的米老鼠冰雕——极简雕塑风格，正面视角，高而浅的景深。',
        62: '画中的食铁兽——平安时代风格，金绿配色，宋代美学。',
        63: '头戴中国龙风格帽子的猫——日式动画绿龙，暗青与金色，流行意象与自由线条。',
        64: '白衣短发女孩低头轻嗅手中的花——玻璃质感，青绿色，浪漫，强调光与色，激进数字插画风格。',
        65: '一只猫在树下，空灵光线与优雅平衡的风格。使用富士 GFX 50R 搭配柯达 Tri-X 400 胶片拍摄。',
        66: '招财猫扮财神，3D 可爱风格，红金配色，元宝红包福字，新年喜庆氛围。',
        67: '获奖级特写：春日枝头只见粉色的花——雪景风格、中国传统艺术影响、暗白与白、掀顶视角、柔和梦幻。',
        68: '调音师：Risograph 风格印刷，中国艺术与 Maud Lewis 画风，印度男子调钢琴全身像，简练线条，深林绿、锈橙、石灰、泥褐衬白底。',
        69: '猫与百合，宇宙般深色背景——空灵静谧。',
        70: '少年与少女十指交握抵在胸前，额相贴、闭目祈愿，头朝后坠入云中——梦幻、超自然、新海诚式浪漫与自然背景。',
        75: '中国女拳手变体——同样的模拟胶片颗粒与电影级提示词。',
        71: '如摄影般无可置疑——模拟胶片颗粒、斑驳的浅蓝灰背景。24岁粗粝感中国女拳手，伤痕、抱拳于颌下，干燥肌肤质感、微毛孔，电影级。',
        72: '青蓝色鸟的剪影飞出门口——中世纪乡村宅邸、门外森林、敞开的空鸟笼、打翻的浆果篮与飘落的蓝羽。表现力十足的漫画风格，明亮轻快。利兹与青鸟。',
        73: '民间艺术风格的可爱猫咪置身芍药花田——柔和梦幻。',
        74: '一个女孩——简洁动人。',
        76: '大雪天——灰度的北京城景，一只猫飞在天上，强烈对比。',
        77: '雨雾天的写实玻璃窗——水珠、简单的花朵形状似在滴水，背后模糊的雨景。',
        78: '金龙眼中国龙全身，空灵中国史诗风格——在海中翻腾、雷电与烟、朦胧白底。',
        79: '人们总是对自己不熟悉的东西保持敬畏，比如飞在北京天上的猫。',
        80: '红色旗袍女子全身像——街头写实、单色调、极光朋克、森系、颓废美、黄金时代美学。',
        81: '交个朋友吧——两个角色挥手问好，可爱动画风，宫崎骏式温暖友好。',
        82: '椰子蛋卷卷爆米花——可爱风格，Petros Afshar，传统动画，涂鸦，书房，白底。',
        83: '年轻日本男子跪地祈祷，妻子躺于膝上、被他亲手所杀——手绘，日漫动画风格。',
        84: '少女坐窗边托腮，望向远处帅哥们——宫崎骏风格， spotlight on girl。',
        85: '男孩在布偶上扎针诅咒同学出门摔跤——宫崎骏风格，手绘，日漫动画。',
        86: '戴眼镜的中国少女与不高兴的猫——3D数字插画，温暖色调，锐利明亮。',
        87: '戴眼镜的中国少女被塞进松鼠嘴里——3D数字插画，可爱角色设计，温暖色调。',
        88: '三格美式写实漫画：一对幸福的情侣、男孩亲手杀死对他微笑的女孩、男孩跪地虔诚祈祷她能升入天堂。',
        89: '一个心死的男孩——传统中国山水风格，朦胧哥特，毛绒玩偶艺术，光泽反射，宁静面孔。',
        90: '桌前愤怒的猫——儿童绘本风格，异想天开的简约美学，明亮色彩，Clémence Guillemaud 风格。',
        91: '白猫与白色芍药——儿童插画。',
        92: '一二三，稻草人——金色麦田里的橘猫，童书般异想天开。',
        93: '埃及猫与宇宙。',
        94: '粉色的妖精——赐予美梦的仙子，梦仙子变体，Cinema4D 风格，Kuvshinov、Valdi、Skottie Yung。',
        95: '上海天际线——东京变体。',
        96: '📈——猫与股票图，红色 K 线。',
        97: '空山新雨后——中国山水、静谧之美。',
        98: '翡翠眼睛——猫眼，空灵、莹润、细腻。',
        99: '哥特风姐姐——黑色蕾丝、维多利亚哥特。',
        100: '小梦仙——赐予美梦的小精灵，奇趣梦幻。',
        101: '猫家庭在家吃年夜饭庆新年——超细节、极繁、时装动画风格。',
        102: '穿风衣的帅猫——电影感肖像，富士胶片，柔光。',
        103: '可爱中国小女孩在桌前拼拼图，凝视桌面——50mm、富士胶片、柔光、明亮环境。',
        104: '斑马走在模糊的北京街头人群中——富士胶片。',
        105: '奶白色长毛矮脚猫在笔记本键盘上打字写书。',
        106: '大风天里可爱的小猪飞上天空，抱着随风飘起的大蒲公英茎——民间艺术。',
        107: '蓝天下白云，一片草地，草地上大象头顶一只小鸟——Mandy Disher 风格，紫粉印象派水彩。',
        108: '阳光灿烂的日子里快要热死的少女——Crypt Dwarf 的 caricature 形象。',
        109: '电影感极特写：两枚干净的李子挂在树上，背光明亮。',
        110: '三花小猫在阳光森林里奔跑——16 bit 游戏风，Q 版像素。',
        111: '一个叫西施的女孩了无牵挂，望着天上垂下的绳圈。',
        112: '花海中的浣熊。',
        113: '头上开满芍药的女人。',
        114: '一只彩色鹦鹉担任言语治疗师。',
        115: '可爱的卡通三花猫，蓝色笔触背景--简笔画风格。',
        116: '透明生态球中的红色世界树发光，腹部长着透明生态球的动漫少女凝视前方，全身，nightcore，棚拍灯光。',
        117: '穿黄色旗袍的年轻中国女孩——王家卫电影风、六〇至九〇年代中国电影海报、浪漫柔焦。',
        118: '山顶岩缝中绽放的多层花瓣黄花，日出背景，柔焦长茎绿叶，高分辨率摄影风格。',
        119: '雨林中猛虎凝视衣衫褴褛的印度男子。',
        120: '低角度拍摄，可爱的缅因猫正面朝向镜头。',
        125: '猫在水中游泳，夏日氛围，阳光照射。',
        121: '穿西装的可爱中国龙宝宝举着「你们好」牌子挥手。',
        122: '两个中国小孩夏夜坐在稻田边看萤火虫起飞。',
        123: '雨中的莲池——纪录片风格。',
        124: '男孩站在麦田里把头埋进麦堆玩捉迷藏，伙伴们却都已长大离去。',
        126: '猫猫围着一只红色的气球，有"I LOVE CAT!"字样。',
        127: '少女与祖父的双重曝光，纯白背景。',
        128: '两只黑天鹅与三只毛茸茸灰色小天鹅在莲池中。',
        129: '一男一女低头玩手机——毕加索风格钢板铁丝画，金色。',
        130: '极简航拍：左半红水右半白水，一人在中间划长船。',
        131: '一只可爱的猫在水下嬉戏、追逐水母，从水下视角捕捉。',
        132: '兔妈妈和兔宝宝在床上读童话，碎花睡衣——毕翠克丝·波特风格。',
        133: '狗狗们开心地躺在一起。',
        134: '穿三件套的番茄人与穿婚纱的鸡蛋人的婚礼。',
        135: '北极极光下绿眼睛的白猫——皮克斯动画风格。',
        136: '对《哥特风姐姐》人物一致性的尝试。',
        137: '青少年坐在电脑前，面对镜头，屏幕发出的绿光映着他的侧脸，传递着安全的信息。',
        138: '具像化体现网络霸凌对人心灵的危害。',
        139: '爱人死在自己手里——日式风格。',
        140: '黑色旗袍女子全身像——街头写实、单色调、极光朋克、森系、颓废美、黄金时代美学。',
        141: '自由的马——鸟瞰。',
        142: '持枪少女，断壁残垣背景。',
      },
      titles: {
        1: '银渐层',
        2: '你好',
        3: '在树上',
        4: '硕果累累',
        5: '柿子猫',
        6: '花',
        7: '夜之花',
        8: '良缘',
        9: '跳绳',
        10: '十万嬉皮',
        11: '云上冲浪',
        12: '麦麦脆汁鸡',
        13: '麦田',
        14: '运动员',
        15: '梦仙子',
        16: '猫雕塑',
        17: '肇事者',
        18: '上低音号',
        19: '猫王',
        20: '康乃馨',
        21: '最好的朋友',
        22: '东京',
        23: '吹奏乐部',
        24: '表现主义',
        25: '最好的朋友 II',
        26: '梦仙子 II',
        27: '批作业',
        28: '水手服',
        29: '素描',
        30: '吃灶糖',
        31: '喵斯拉',
        32: '我们生活在南京',
        33: '平行宇宙',
        34: '喵斯拉 II',
        35: '这一枪叫做晚安',
        36: '宇航员',
        37: '荷花',
        38: '大叔',
        39: '准备打针',
        40: '小喵阿姐',
        41: '这下完了',
        42: '夏夜',
        43: '一直很安静',
        44: '图画书',
        45: '这下完了 II',
        46: '贵族',
        47: '飞行员',
        48: '将军',
        49: '跃',
        50: '战前会议',
        51: '墨猫',
        52: '猎豹大家族',
        53: '天山猫姥',
        54: '回眸一笑',
        55: '百媚生',
        56: '龙帽猫',
        57: '忆尚湖',
        58: '合照',
        59: '鲤鱼',
        60: '跃龙门',
        61: '米老鼠',
        62: '食铁兽',
        63: '龙猫',
        64: '低头',
        65: '树下',
        66: '招财猫',
        67: '粉色的花',
        68: '调音师',
        69: '一眼万万年',
        70: '云中祈',
        75: '准备战斗',
        71: '准备战斗 II',
        72: '利兹与青鸟',
        73: '云花',
        74: 'A girl',
        76: '风',
        77: '雨天',
        78: '龙王',
        79: '风 II',
        80: '旗袍',
        81: '交个朋友吧',
        82: '椰子蛋卷卷爆米花',
        83: '婚戒',
        84: '看帅哥',
        85: '诅咒',
        86: '松子姑娘与不笑猫',
        87: '松子姑娘',
        88: '故事',
        89: '厌男',
        90: '我不高兴',
        91: '白花与白猫',
        92: '一二三，稻草人',
        93: '金字塔',
        94: '粉色的妖精',
        95: '上海',
        96: '📈',
        97: '空山新雨后',
        98: '翡翠眼睛',
        99: '哥特风姐姐',
        100: '小梦仙',
        101: '团团圆圆过新年',
        102: '穿风衣的猫',
        103: '拼拼图',
        104: '斑马，斑马',
        105: '莎士比亚',
        106: '飞天',
        107: '蓝天下',
        108: '在那阳光灿烂的日子里',
        109: '李子成熟时',
        110: '像素小礼物',
        111: '一个叫西施的女孩决定去死',
        112: '星舰',
        113: '芍药',
        114: '说得都对',
        115: '三花猫',
        116: '世界树',
        117: '万千花蕊',
        118: '有光',
        119: '心中的野兽',
        120: '缅因猫',
        125: '夏日阳光',
        121: '你们好',
        122: '萤火虫',
        123: '夏雨莲',
        124: '垂髫',
        126: 'I Love Cat',
        127: 'Chet',
        128: '三只小可爱',
        129: '接头',
        130: '在福',
        131: '恐惧是动力',
        132: '床',
        133: '简单的快乐',
        134: '一对璧人',
        135: '奇迹瞬间',
        136: '似曾相识',
        137: '通过',
        138: '网络霸凌',
        139: '在神社下',
        140: '旗袍II',
        141: '奔驰',
        142: 'A Girl II',
      },
    },
  };

  // ===== Articles (WeChat) =====
  var articles = {
    1: {
      url: 'https://mp.weixin.qq.com/s/sYf_0FfYybozjgWe7sEGig',
      account: '等待戈多的银渐层',
      title: { en: 'The Persimmons Are Ripe', zh: '柿子已经熟了' },
    },
    2: {
      url: 'https://mp.weixin.qq.com/s/dEzdI0zaUJ0quZ8rphvQ7Q',
      account: '等待戈多的银渐层',
      title: { en: 'Almost Failed', zh: '差一点就失败了' },
    },
    3: {
      url: 'https://mp.weixin.qq.com/s/q6c2tuAMzHjrPEp5JUZV8w',
      account: '等待戈多的银渐层',
      title: { en: 'The Cat Fell Asleep', zh: '猫咪进入了梦乡' },
    },
    4: {
      url: 'https://mp.weixin.qq.com/s/Szi9xtMxnFzLjj3wpd_08g',
      account: '等待戈多的银渐层',
      title: { en: 'What Is the Flower Language of Cat Flowers?', zh: '猫猫花的花语是什么？' },
    },
    5: {
      url: 'https://mp.weixin.qq.com/s/TAX5H11F1FkMay9LxRdL5g',
      account: '等待戈多的银渐层',
      title: { en: 'Leave Time to the Black Cat', zh: '把时间留给黑猫' },
    },
    6: {
      url: 'https://mp.weixin.qq.com/s/WNfTz4x0Bj5YTvzfTBdj1w',
      account: '等待戈多的银渐层',
      title: { en: 'Today Is Little New Year in the North', zh: '今天是北方的小年' },
    },
    7: {
      url: 'https://mp.weixin.qq.com/s/qhXUFQ1nQTOh3d1mauDuSw',
      account: '等待戈多的银渐层',
      title: { en: 'The World Never Belonged to Humans', zh: '世界不曾属于人类' },
    },
    8: {
      url: 'https://mp.weixin.qq.com/s/v4Ksc0Dh9AM0Y6q_9IKNwQ',
      account: '等待戈多的银渐层',
      title: { en: 'I Am My Own Harbor', zh: '我是我自己的码头' },
    },
    9: {
      url: 'https://mp.weixin.qq.com/s/IYy855wvqlXvooRi5ndRPg',
      account: '等待戈多的银渐层',
      title: { en: 'The Stocks Look Pretty Green', zh: '股票绿得挺好看啊' },
    },
    10: {
      url: 'https://mp.weixin.qq.com/s/YGGlfYB9EmpglmxMDKWPPg',
      account: '等待戈多的银渐层',
      title: { en: 'Witnessing You Complete That Jump', zh: '目击你完成了那一跳' },
    },
    11: {
      url: 'https://mp.weixin.qq.com/s/gyxJ4HIs9zgfpZT3xOS_Yg',
      account: '等待戈多的银渐层',
      title: { en: "Today Is Still the Cat's Show", zh: '今天还是猫的专场' },
    },
    12: {
      url: 'https://mp.weixin.qq.com/s/3hIjX0NyOw1PqBg16qh8fg',
      account: '等待戈多的银渐层',
      title: { en: 'The First Painting of the Year of the Dragon', zh: 'Loong年的第一次绘画' },
    },
    13: {
      url: 'https://mp.weixin.qq.com/s/uu84bLVHzDMwuwS0coL58g',
      account: '等待戈多的银渐层',
      title: { en: 'Midjourney Niji Practice', zh: 'Midjourney niji 练习' },
    },
    14: {
      url: 'https://mp.weixin.qq.com/s/LYBhG5PMTXmwM4zjQanQCQ',
      account: '等待戈多的银渐层',
      title: { en: 'The Brightest on the Street', zh: '整条街上最亮的仔' },
    },
    15: {
      url: 'https://mp.weixin.qq.com/s/1WNIkgMe7nKwoI-wdFeX8Q',
      account: '等待戈多的银渐层',
      title: { en: 'Welcome to Teaching Week', zh: '欢迎来到教学周' },
    },
    16: {
      url: 'https://mp.weixin.qq.com/s/dL1SHdT1mANDhQjIYd2OrQ',
      account: '等待戈多的银渐层',
      title: { en: 'World Reference Truth', zh: '世界参考真相' },
    },
    17: {
      url: 'https://mp.weixin.qq.com/s/1jL32ltDJiLGWGGdWVtkxg',
      account: '等待戈多的银渐层',
      title: { en: 'Hey, Let\'s Be Friends', zh: '嘿，交个朋友吧' },
    },
    18: {
      url: 'https://mp.weixin.qq.com/s/l1VtfQAq5RHWwAeD-uLpvA',
      account: '等待戈多的银渐层',
      title: { en: 'Miss Matsuko & the Grumpy Cat', zh: '松子姑娘与不笑猫' },
    },
    19: {
      url: 'https://mp.weixin.qq.com/s/fa2SVM9zFJSH7htotvcO9w',
      account: '等待戈多的银渐层',
      title: { en: 'Special Edition — Some Unpublished Images', zh: '特别编——一些并未发出来的图片' },
    },
    20: {
      url: 'https://mp.weixin.qq.com/s/ahV7XJyPZoXH1bk0h0ug3g',
      account: '等待戈多的银渐层',
      title: { en: 'Reunion for the New Year', zh: '团团圆圆过新年' },
    },
    21: {
      url: 'https://mp.weixin.qq.com/s/scMn_A-DrVulwyh7j4gSiA',
      account: '等待戈多的银渐层',
      title: { en: 'Cats in Trench Coats Are All Handsome', zh: '穿风衣的猫都是帅猫' },
    },
    22: {
      url: 'https://mp.weixin.qq.com/s/uvx1ZZtviaNwi32zoOEkog',
      account: '等待戈多的银渐层',
      title: { en: 'Waiting in Midsummer', zh: '在盛夏等待' },
    },
    23: {
      url: 'https://mp.weixin.qq.com/s/AgA7elVxwCy_nWSugrX4cg',
      account: '等待戈多的银渐层',
      title: { en: 'Imitating Xi Shi', zh: '西施效颦' },
    },
    24: {
      url: 'https://mp.weixin.qq.com/s/oGP20oeri5kCgaHyDrEe7A',
      account: '等待戈多的银渐层',
      title: { en: 'So Beautiful Is the World', zh: '世界如此绮丽' },
    },
    25: {
      url: 'https://mp.weixin.qq.com/s/FPeiA9zZVZzm3RBiHBOlQg',
      account: '等待戈多的银渐层',
      title: { en: 'Memories of Summer', zh: '关于夏天的记忆' },
    },
    26: {
      url: 'https://mp.weixin.qq.com/s/y9t-2pKBh70byrNATVLeTw',
      account: '等待戈多的银渐层',
      title: { en: 'Perfect Strangers', zh: '完美的陌生人' },
    },
    27: {
      url: 'https://mp.weixin.qq.com/s/qyoah_b2aUhdHhe4H8-Msw',
      account: '等待戈多的银渐层',
      title: { en: 'Scrambled Eggs with Tomatoes', zh: '西红柿炒鸡蛋' },
    },
  };

  // ===== Artwork Data =====
  var artworks = [
    {
      id: 1,
      articleId: 1,
      order: 1,
      featured: true,
      image: 'static/assets/midjourney/yuxin.jin_A_British_Shorthair_whose_undercoat_is_pure_white_wit_b739a2aa-edcb-4c57-9b24-40cd9827a118.png',
      date: '2024.01.27',
      prompt: 'A British Shorthair whose undercoat is pure white, with the tips of the coat on the back, ribs, head, and tail sufficiently dyed smoke, grey, and blue to give a characteristically shimmering silvery appearance, with slight shadings of dyed tips of the coat on the limbs, and with the cheeks, ear tufts, belly, and chest pure white, and with the eyes blue-green, back lighting::4 , Edge light::3 , Rim light --style raw --v 6.0',
      params: { version: 'V6.0', style: 'Raw', lighting: 'Back · Edge · Rim' },
    },
    {
      id: 2,
      articleId: 1,
      order: 4,
      featured: false,
      image: 'static/assets/midjourney/yuxin.jin_A_British_Shorthair_whose_undercoat_is_pure_white_wit_8d2f2bda-d2ab-4acf-8150-cc34b87237b5.png',
      date: '2024.01.27',
      prompt: 'A British Shorthair whose undercoat is pure white, with the tips of the coat on the back, ribs, head, and tail sufficiently dyed smoke, grey, and blue to give a characteristically shimmering silvery appearance, with slight shadings of dyed tips of the coat on the limbs, and with the cheeks, ear tufts, belly, and chest pure white, and with the eyes blue-green, back lighting ::4 , Edge light ::3 , Rim light ::1 --style raw --v 6',
      params: { version: 'V6', style: 'Raw', lighting: 'Back(4) · Edge(3) · Rim(1)' },
    },
    {
      id: 3,
      articleId: 1,
      order: 2,
      featured: false,
      image: 'static/assets/midjourney/yuxin.jin_a_cat_is_jumping_and_playing_in_the_tree_trying_to_ca_038c9f14-04cb-4a8d-b56b-62466d3bca8e.png',
      date: '2024.01.27',
      prompt: 'a cat is jumping and playing in the tree, trying to catch the persimmons hanging high up, and the persimmon tree seems to be taking part in this game, with its branches gently swinging as if teasing the cat.Bright orange and misty white, cute naive art, 2d, cute details, in the Style of Japanese Manga, Edge light ::3 , Rim light ::1 --ar 3:2 --style raw --v 6',
      params: { version: 'V6', aspect: '3:2', style: 'Raw · Manga' },
    },
    {
      id: 4,
      articleId: 1,
      order: 5,
      featured: false,
      image: 'static/assets/midjourney/yuxin.jin_a_cat_is_jumping_and_playing_in_the_tree_trying_to_ca_337b7dfe-1c51-406f-a9f9-2debff47d623.png',
      date: '2024.01.27',
      prompt: 'a cat is jumping and playing in the tree, trying to catch the persimmons hanging high up, and the persimmon tree seems to be taking part in this game, with its branches gently swinging as if teasing the cat.Bright orange and misty white, cute naive art, 2d, cute details, in the style of pierre pellegrini, skottie young, whimsical cartoons --ar 3:2 --style raw --v 6',
      params: { version: 'V6', aspect: '3:2', style: 'Raw · Whimsical' },
    },
    {
      id: 5,
      articleId: 1,
      order: 3,
      featured: false,
      image: 'static/assets/midjourney/yuxin.jin_a_silver_shaded_color_of_British_cat_is_jumping_and_773d92a3-42e0-43e2-9c68-9602cba0dda2_0.png',
      date: '2024.01.27',
      prompt: 'a silver shaded color of British cat is jumping and playing in the tree, trying to catch the persimmons hanging high up --style raw --v 6',
      params: { version: 'V6', style: 'Raw' },
    },
    {
      id: 6,
      articleId: 2,
      order: 6,
      featured: true,
      image: 'static/assets/midjourney/yuxin.jin_Flowers_bloom_in_the_darkness_of_the_night_and_they_30d12821-dd00-469e-b035-86766737b698_2.png',
      date: '2024.02.15',
      prompt: 'Flowers bloom in the darkness of the night, and they form a cat of deep beauty, dark golden and light white in the style of aggressive digital illustration, kodak gold, made of glass, --style raw --ar 2:3 --v 6',
      params: { version: 'V6', aspect: '2:3', style: 'Raw', mood: 'Kodak Gold · Glass' },
    },
    {
      id: 7,
      articleId: 2,
      order: 9,
      featured: false,
      image: 'static/assets/midjourney/yuxin.jin_Flowers_bloom_in_the_darkness_of_the_night_and_they_c2562227-5df6-414f-b0f1-af3ef54f7ee7_1.png',
      date: '2024.02.15',
      prompt: 'Flowers bloom in the darkness of the night, and they form a cat of deep beauty, dark golden and light white in the style of aggressive digital illustration, kodak gold, made of glass, --style raw --ar 2:3 --v 6',
      params: { version: 'V6', aspect: '2:3', style: 'Raw', mood: 'Kodak Gold · Glass' },
    },
    {
      id: 8,
      articleId: 2,
      order: 7,
      featured: false,
      image: 'static/assets/midjourney/yuxin.jin_junior_high_school_boy_and_girl_the_girl_wears_a_trad_fa06fcc3-d99c-4ca3-a431-140afd9ef774.png',
      date: '2024.02.15',
      prompt: 'junior high school boy and girl, the girl wears a traditional Japanese yukata with a sunflower print and the boy wears a white t-shirt, standing on a hill overlooking the entire village fair, the girl leans forward and jumps on the boy and hugs him face to face, in the background there are fireworks from the summer festival, silhouettes that evoke the viewer\'s imagination, close-up, movie still, summer night, junko mizuno, romantic mystery full of desire background, luminous, layered, wide-angle and long-focal-length lenses --style raw --v 6',
      params: { version: 'V6', style: 'Raw', artist: 'Junko Mizuno' },
    },
    {
      id: 9,
      articleId: 2,
      order: 8,
      featured: false,
      image: 'static/assets/midjourney/yuxin.jin_portrait_of_a_boy_jumping_ropewatching_a_flying_duck__e4d57b7d-130c-4994-b316-b15ae64bba41.png',
      date: '2024.02.15',
      prompt: 'portrait of a boy jumping rope, watching a flying duck, in the style of tenebrism, Caravaggio, Artemisia Gentileschi, dark cyan and amber, romantic academia, chiaroscuro mastery, cartoon violence, brutalist, joyful and optimistic, characterised animals, captivating figures, award-winning --ar 9:16 --style raw --v 6',
      params: { version: 'V6', aspect: '9:16', style: 'Raw · Tenebrism', artists: 'Caravaggio · Gentileschi' },
    },
    {
      id: 10,
      articleId: 2,
      order: 10,
      featured: false,
      image: 'static/assets/midjourney/yuxin.jin_Dong_ErQian_of_the_lofty_dreams_pushes_open_the_windo_10e3529a-b40d-44ae-9bdd-00456902e2df.png',
      date: '2024.02.15',
      prompt: 'Dong ErQian of the lofty dreams pushes open the window and raises the spyglass. His eye reflects a cloud of thick smoke. The road ahead is closed and that leading back is lost from light, luminous portraits, unpredictable, photo-realistic hyperbole, --ar 8:5 --v 6',
      params: { version: 'V6', aspect: '8:5', mood: 'Luminous · Hyperbole' },
    },
    {
      id: 11,
      articleId: 3,
      order: 11,
      featured: true,
      image: 'static/assets/midjourney/yuxin_jin_aerial_photography_A_athlete_cat_skiing_through_a_sof_53f0f9c9-599a-4e74-8e5e-8cc5c3b596ec.png',
      date: '2024.03.01',
      prompt: 'aerial photography, A athlete cat skiing through a soft ocean of clouds, cute naive art, 2d, cute details, in the Style of Japanese Manga --style raw --v 6',
      params: { version: 'V6', style: 'Raw · Manga' },
    },
    {
      id: 12,
      articleId: 3,
      order: 12,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_McCrispy_Chicken_professional_color_grading_soft_sh_d3a499ef-ca9a-4aec-abde-2eb2e22036a0_0.png',
      date: '2024.03.01',
      prompt: 'McCrispy Chicken, professional color grading, soft shadows, clean sharp focus, high-end retouching, food magazine photography --ar 4:3 --stylize 250 --v 6',
      params: { version: 'V6', aspect: '4:3', stylize: '250' },
    },
    {
      id: 13,
      articleId: 3,
      order: 13,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_Cats_frolicking_in_a_golden_wheat_field_that_could_hi_7fd91a43-857e-4f1b-be2f-509db354f6df.png',
      date: '2024.03.01',
      prompt: 'Cats frolicking in a golden wheat field that could hide them, cinematic still shot, motion blur, early morning, cinematic lighting, soft lighting, dreamy mood, --ar 16:9 --v 6',
      params: { version: 'V6', aspect: '16:9', mood: 'Cinematic · Dreamy' },
    },
    {
      id: 14,
      articleId: 3,
      order: 14,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_A_athlete_cat_skiing_through_a_soft_ocean_of_clouds_c_f5425e03-1933-4435-8fc1-ed4550ab50c9.png',
      date: '2024.03.01',
      prompt: 'A athlete cat skiing through a soft ocean of clouds, cute naive art, 2d, cute details, in the Style of Japanese Manga --ar 5:8 --style raw --v 6',
      params: { version: 'V6', aspect: '5:8', style: 'Raw · Manga' },
    },
    {
      id: 15,
      articleId: 3,
      order: 15,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_The_fairy_is_giving_the_child_good_dreams_in_the_styl_db8e29af-43da-486c-ba06-fc56f277971c.png',
      date: '2024.03.01',
      prompt: 'The fairy is giving the child good dreams, in the style of rendered in cinema4d, ilya kuvshinov, thiago valdi, soft edges and blurred details, skottie young, miniature illumination --v 6',
      params: { version: 'V6', artists: 'Kuvshinov · Valdi · Young', style: 'Cinema4D' },
    },
    {
      id: 16,
      articleId: 4,
      order: 16,
      featured: true,
      image: 'static/assets/midjourney/yuxin_jin_a_person_standing_near_a_large_orange_cat_sculpture_i_8caf5023-253e-4133-9a66-153fb48d11da.png',
      date: '2024.01.30',
      prompt: 'a person standing near a large orange cat sculpture, in the style of minimalistic felidae sculptures, chrome reflections, irving penn, red and bronze, playful cartoons, pop inspo, shiny/glossy --v 6',
      params: { version: 'V6', artist: 'Irving Penn', mood: 'Pop · Chrome' },
    },
    {
      id: 17,
      articleId: 4,
      order: 17,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_A_light-coloured_Buick_and_a_semitrailer_truck_are_in_718d4514-15c2-4b3d-896e-398370491cfc.png',
      date: '2024.01.30',
      prompt: 'A light-coloured Buick and a semitrailer truck are involved in a collision in which the truck nearly rolled over because it swerved sharply to avoid an oncoming vehicle, creating a large tilt between its head and the cargo box, and smashing the front face of the Buick to pieces, unpredictable, photo-realistic hyperbole, --ar 8:5 --stylize 150 --v 6',
      params: { version: 'V6', aspect: '8:5', stylize: '150', mood: 'Photo-realistic Hyperbole' },
    },
    {
      id: 18,
      articleId: 4,
      order: 18,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_The_world_is_a_giant_euphonium._--v_6_a80c2178-6fe5-40ae-89bc-58545d283c7a.png',
      date: '2024.01.30',
      prompt: 'The world is a giant euphonium. --v 6',
      params: { version: 'V6' },
    },
    {
      id: 19,
      articleId: 4,
      order: 19,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_nalog_photography_in_lo-fi_style_A_Maine_Coon_stands__75dd125c-9ecd-4adb-9e44-dcd4ba127697.png',
      date: '2024.01.30',
      prompt: 'analog photography in lo-fi style, A Maine Coon stands on top of a tall wardrobe facing the camera, Chinese room decoration, sunlit window sill, close-up, afternoon, soft and diffused natural light, upward angle, overhead, desaturated tones, soft focus, simple composition, --ar 2:3 --style raw --v 6',
      params: { version: 'V6', aspect: '2:3', style: 'Raw · Lo-fi Analog' },
    },
    {
      id: 20,
      articleId: 4,
      order: 20,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_Carnation_arrangement_in_two_vases_one_pink_and_borde_d533d368-d599-4d81-9af1-aaeb0fe1f23f.png',
      date: '2024.01.30',
      prompt: 'Carnation arrangement in two vases, one pink and bordered orange-red, one yellow and white, minimalism, in the style of ethereal lighting, whitewashed, graceful balance:: shot on Fujifilm GFX 50R with Kodak Tri-X 400 film stock --style raw --v 6.0 --ar 16:9',
      params: { version: 'V6.0', aspect: '16:9', style: 'Raw', film: 'Fujifilm GFX 50R · Kodak Tri-X 400' },
    },
    {
      id: 21,
      articleId: 5,
      order: 21,
      featured: true,
      image: 'static/assets/midjourney/yuxin_jin_chinese_girl_with_her_cute_cat_sitting_on_door_steps__f19314e6-fbf6-4623-9506-5b0596d3caba.png',
      date: '2024.02.20',
      prompt: 'chinese girl with her cute cat sitting on door steps by Raymond Briggs --v 6',
      params: { version: 'V6', artist: 'Raymond Briggs' },
    },
    {
      id: 22,
      articleId: 5,
      order: 22,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_Award_winning_photograph_Tokyo_skyline_golden_sky_epi_da8e9132-141c-4bec-a614-8cebc5d15f0c.png',
      date: '2024.02.20',
      prompt: 'Award winning photograph, Tokyo skyline, golden sky, epic colours, ethereal portraiture, tonalist color scheme, pensive stillness, baby blue and gold --no people --ar 16:9 --style raw --v 6',
      params: { version: 'V6', aspect: '16:9', style: 'Raw', mood: 'Tonalist · Ethereal' },
    },
    {
      id: 23,
      articleId: 5,
      order: 23,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_Award_winning_photograph_Rehearsal_room_for_a_high_sc_2548a829-4931-4739-891a-ad3c5abf513c.png',
      date: '2024.02.20',
      prompt: 'Award winning photograph, Rehearsal room for a high school Wind Orchestra that can accommodate a 55-piece Wind Orchestra, with black collapsible chairs, music stands placed in front of each seat, and instruments beside it, waiting to be played, with grey carpets, with a little sunlight filtering in through the gaps between the heavy curtains --no people and string instrument --ar 16:9 --style raw --v 6',
      params: { version: 'V6', aspect: '16:9', style: 'Raw' },
    },
    {
      id: 24,
      articleId: 5,
      order: 24,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_cat_expressionismus_Bromoil_print_ablaze_colors_abstr.png',
      date: '2024.02.20',
      prompt: 'cat expressionismus, Bromoil print, ablaze colors, abstract art, watercolor, oil painting, pastels, monochrom, hyper realism --chaos 20 --ar 3:4 --v 6.0',
      params: { version: 'V6.0', aspect: '3:4', chaos: '20', style: 'Expressionism · Bromoil' },
    },
    {
      id: 25,
      articleId: 5,
      order: 25,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_chinese_girl_with_her_cute_cat_sitting_on_door_steps__901dcd7b-2509-4325-b273-461072fad39e.png',
      date: '2024.02.20',
      prompt: 'chinese girl with her cute cat sitting on door steps by Raymond Briggs --v 6',
      params: { version: 'V6', artist: 'Raymond Briggs' },
    },
    {
      id: 26,
      articleId: 6,
      order: 26,
      featured: true,
      image: 'static/assets/midjourney/yuxin_jin_The_fairy_who_gives_children_good_dreams_in_the_sty_28459037-a577-4f63-bcfa-1ab84a5cc0ec_2.png',
      date: '2024.02.02',
      prompt: 'The fairy who gives children good dreams, in the style of rendered in cinema4d, ilya kuvshinov, thiago valdi, soft edges and blurred details, skottie young, miniature illumination --v 6',
      params: { version: 'V6', artists: 'Kuvshinov · Valdi · Young', style: 'Cinema4D' },
    },
    {
      id: 27,
      articleId: 6,
      order: 27,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_An_innocent_little_girl_with_her_eyes_open_slouchin_423b62c3-b0c0-4951-b673-fff52cfe1f40_1.png',
      date: '2024.02.02',
      prompt: 'An innocent little girl with her eyes open slouching over the desk grading someone else\'s homework on her ipad, next to a cat lazily sleeping on the carpet, vector flat icon illustration, Modern Line Icon, bold lines, vibrant color, linear patterns, isolate on white --v 6',
      params: { version: 'V6', style: 'Vector · Flat Icon' },
    },
    {
      id: 28,
      articleId: 6,
      order: 28,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_an_anime_picture_shows_only_one_folded_white_Japanese_39c92dac-ed70-4327-9fe7-895f2a7ea204 (1).png',
      date: '2024.02.02',
      prompt: 'an anime picture shows only one folded white Japanese sailor uniform on a wooden desk, and light blue accessories next it, in the classroom, in anime style, soft and diffused natural light, tachisme, everyday life --ar 3:4 --v 6',
      params: { version: 'V6', aspect: '3:4', style: 'Anime · Tachisme' },
    },
    {
      id: 29,
      articleId: 6,
      order: 29,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_different_views_of_a_cat_holding_a_ball_of_string_of__aa9f79fb-c8ba-4770-a56f-c34b5631deba.png',
      date: '2024.02.02',
      prompt: 'different views of a cat holding a ball of string, of the whole body, foreshortening perspective, sketch --ar 3:4 --style raw --v 6',
      params: { version: 'V6', aspect: '3:4', style: 'Raw · Sketch' },
    },
    {
      id: 30,
      articleId: 6,
      order: 30,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_Two_anthropomorphic_Chinese_cats_smiling_and_Worship.png',
      date: '2024.02.02',
      prompt: 'Two anthropomorphic Chinese cats, smiling and Worshiping Kitchen God and eating Long strips of maltesers sprinkled with sesame seeds, Pixar style, red background, Chinese Spring Festival, Chinese festive atmosphere, 3D, C4D, OC renderer --ar 4:3 --stylize 150 --v 6',
      params: { version: 'V6', aspect: '4:3', stylize: '150', style: 'Pixar · C4D' },
    },
    {
      id: 31,
      articleId: 7,
      order: 31,
      featured: true,
      image: 'static/assets/midjourney/yuxin_jin_lots_of_tiny_little_people_trying_to_not_get_stepped__9ed6fbbe-aabb-4849-a3bc-89bd1bfa5f40.png',
      date: '2024.02.25',
      prompt: 'lots of tiny little people trying to not get stepped on at the feet of a cat, ultra realistic, high detail --style raw --v 6',
      params: { version: 'V6', style: 'Raw' },
    },
    {
      id: 32,
      articleId: 7,
      order: 32,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_In_post-apocalyptic_Nanjing_trees_and_vegetation_have_cd72a12d-df76-4eec-a913-e31e26fd214d.png',
      date: '2024.02.25',
      prompt: 'In post-apocalyptic Nanjing, trees and vegetation have reoccupied the streets and buildings that were once built by humans, in the style of ricoh ff-9d, structured chaos, cubist shattered planes, dau-al-set, milleniwave, dansaekhwa, raw, epic, contemporary cinematic --ar 16:9 --stylize 250 --no people --v 6',
      params: { version: 'V6', aspect: '16:9', stylize: '250', style: 'Ricoh FF-9D · Cubist' },
    },
    {
      id: 33,
      articleId: 7,
      order: 33,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_The_world_is_a_giant_euphonium._--v_6_830814f7-8553-44ed-b380-043abbec939d_3.png',
      date: '2024.02.25',
      prompt: 'The world is a giant euphonium. --v 6',
      params: { version: 'V6' },
    },
    {
      id: 34,
      articleId: 7,
      order: 34,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_lots_of_tiny_little_people_trying_to_not_get_stepped__6a01131f-76e3-4c1f-96eb-76f0f00f9da6.png',
      date: '2024.02.25',
      prompt: 'lots of tiny little people trying to not get stepped on at the feet of a cat, ultra realistic, high detail --style raw --v 6',
      params: { version: 'V6', style: 'Raw' },
    },
    {
      id: 35,
      articleId: 7,
      order: 35,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_a_man_with_black_hair_and_black_pupils_wearing_a_blac_1c82613e-01a1-4055-90ee-d9ddbe1d2ff4.png',
      date: '2024.02.25',
      prompt: 'a man with black hair and black pupils, wearing a black trench coat, he stands in a sanded grassy field with a gun in one hand, and aims a battered skinny boy hanging on a tree with no leaf very far away, The lens is focused on the man\'s back, Cinematic - detail - shot, cinematic - contour - lighting, highly detailed --ar 7:3 --stylize 250 --v 6',
      params: { version: 'V6', aspect: '7:3', stylize: '250', mood: 'Cinematic · Detail Shot' },
    },
    {
      id: 36,
      articleId: 8,
      order: 36,
      featured: true,
      image: 'static/assets/midjourney/yuxin_jin_close-upmovie_still_A_cat_in_a_crash_helmet_almost_no_ac10a763-242a-4ee4-9d4c-241ed48e882e.png',
      date: '2024.03.10',
      prompt: 'close-up, movie still, A cat in a crash helmet, almost no light, Wong Kar Wai style, exquisite clothing details, summer night, michael eastman, classic elegance, chinapunk, wide-angle and long-focal-length lenses, low-key illumination, dim light --ar 7:3 --v 6',
      params: { version: 'V6', aspect: '7:3', artists: 'Wong Kar Wai · Eastman', mood: 'Chinapunk' },
    },
    {
      id: 37,
      articleId: 8,
      order: 37,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_lotus_flowers_in_the_style_of_ethereal_lighting_grace_6bb237cf-6f6f-4e0a-93bd-ccf0127a1387.png',
      date: '2024.03.10',
      prompt: 'lotus flowers, in the style of ethereal lighting, graceful balance ::1 shot on Fujifilm GFX 50R with Kodak Tri-X 400 film stock ::1 --ar 16:9 --style raw --v 6',
      params: { version: 'V6', aspect: '16:9', style: 'Raw', film: 'Fujifilm GFX 50R · Kodak Tri-X 400' },
    },
    {
      id: 38,
      articleId: 8,
      order: 38,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_cinematic_shot_of_Chinese_fat_old_bald_guy_dancing_in_c36946d5-b74b-4f8d-9da2-12e3601774da.png',
      date: '2024.03.10',
      prompt: 'cinematic shot of Chinese fat old bald guy dancing in night club, Style Wes Anderson, symmetry, film grain, hasselblad --ar 7:3 --v 6',
      params: { version: 'V6', aspect: '7:3', artist: 'Wes Anderson', camera: 'Hasselblad' },
    },
    {
      id: 39,
      articleId: 8,
      order: 39,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_Portrait_photography_The_Chinese_baby_is_in_his_mothe_9431e5c9-6b48-4d96-9f87-0d68e6b23129.png',
      date: '2024.03.10',
      prompt: 'Portrait photography, The Chinese baby is in his mother\'s arms, looking fearfully at the syringe in doctor\'s hand --ar 9:16 --v 6',
      params: { version: 'V6', aspect: '9:16' },
    },
    {
      id: 40,
      articleId: 8,
      order: 40,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_close-upmovie_still_A_cat_in_a_construction_site_helm_dfb963b2-7cf2-4092-b41e-b9e50ce3751f.png',
      date: '2024.03.10',
      prompt: 'close-up, movie still, A cat in a construction site helmet, almost no light, Wong Kar Wai style, exquisite clothing details, summer night, michael eastman, classic elegance, chinapunk. wide-angle and long-focal-length lenses, low-key illumination, dim light, --ar 7:3 --v 6',
      params: { version: 'V6', aspect: '7:3', artists: 'Wong Kar Wai · Eastman', mood: 'Chinapunk' },
    },
    {
      id: 41,
      articleId: 9,
      order: 41,
      featured: true,
      image: 'static/assets/midjourney/yuxin_jin_cat_Stock_exchange_negative_trend_green_light_Backgro_d7c94c7a-b728-4d92-9512-bb675d6cae05.png',
      date: '2024.03.20',
      prompt: 'cat, Stock exchange, negative trend, green light, Background picture --ar 9:16 --v 6',
      params: { version: 'V6', aspect: '9:16' },
    },
    {
      id: 42,
      articleId: 9,
      order: 42,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_close-upmovie_still_A_Chinese_woman_cries_while_eatin_1706db99-d974-4ddd-9299-0b48eb643527.png',
      date: '2024.03.20',
      prompt: 'close-up, movie still, A Chinese woman cries while eating stir-fried sliced Pork with cauliflower, almost no light, Wong Kar Wai style, michael eastman, classic elegance, chinapunk. wide-angle and long-focal-length lenses, low-key illumination, dim light, --ar 7:3 --v 6',
      params: { version: 'V6', aspect: '7:3', artists: 'Wong Kar Wai · Eastman', mood: 'Chinapunk' },
    },
    {
      id: 43,
      articleId: 9,
      order: 43,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_under_exposure_portrait_a_Chinese_young_girl_walking__9ca1a43a-82a8-41a4-bd57-2bc6452be391.png',
      date: '2024.03.20',
      prompt: 'under exposure portrait, a Chinese young girl walking along the river, luminous, --ar 16:9 --v 6',
      params: { version: 'V6', aspect: '16:9', mood: 'Under Exposure · Luminous' },
    },
    {
      id: 44,
      articleId: 9,
      order: 44,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_Cat_style_of_coloring_book_vector_lines_detailed_adul_22c6007d-defc-4345-8ecd-2a1b75b4bfd8.png',
      date: '2024.03.20',
      prompt: 'Cat style of coloring book, vector lines, detailed, adult, black and white, botanical background --ar 17:22 --v 6',
      params: { version: 'V6', aspect: '17:22', style: 'Coloring Book · Vector' },
    },
    {
      id: 45,
      articleId: 9,
      order: 45,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_cat_Stock_exchange_negative_trend_green_light_Backgro_4b6d4fbc-0e57-47b8-ab02-89c258c877c4.png',
      date: '2024.03.20',
      prompt: 'cat, Stock exchange, negative trend, green light, Background picture --ar 9:16 --v 6',
      params: { version: 'V6', aspect: '9:16' },
    },
    {
      id: 46,
      articleId: 10,
      order: 46,
      featured: true,
      image: 'static/assets/midjourney/yuxin_jin_a_cat_e4962c68-6083-4cd9-a631-41dc4be2cc19.png',
      date: '2024.04.01',
      prompt: 'a cat. --ar 1:1 --v 6',
      params: { version: 'V6', aspect: '1:1' },
    },
    {
      id: 47,
      articleId: 10,
      order: 47,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_close-upmovie_still_A_cat_in_a_helmet_almost_no_light_7150a1d4-9efe-4317-a95e-9ffbeff94edd.png',
      date: '2024.04.01',
      prompt: 'close-up, movie still, A cat in a helmet, almost no light, Wong Kar Wai style, summer night, michael eastman, classic elegance, chinapunk. wide-angle and long-focal-length lenses, low-key illumination, dim light, --ar 7:3 --v 6',
      params: { version: 'V6', aspect: '7:3', artists: 'Wong Kar Wai · Eastman', mood: 'Chinapunk' },
    },
    {
      id: 48,
      articleId: 10,
      order: 48,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_a_cat_2becbcd2-faa0-40b0-be6c-f4a2611b8b93.png',
      date: '2024.04.01',
      prompt: 'a cat. --ar 1:1 --v 6',
      params: { version: 'V6', aspect: '1:1' },
    },
    {
      id: 49,
      articleId: 10,
      order: 49,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_a_very_strong_cat_Chinese_brush_painting_in_the_style_de6ae991-d4a3-4bd4-ab23-783729bbe4ad.png',
      date: '2024.04.01',
      prompt: 'close up, a very strong cat, Chinese brush painting, in the style of black and white, --ar 3:4 --v 6',
      params: { version: 'V6', aspect: '3:4', style: 'Chinese Brush · B&W' },
    },
    {
      id: 50,
      articleId: 10,
      order: 50,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_Pre-war_meeting_of_the_cats_which_was_crowded_and_ten_d3c89d2d-6f40-4fe6-8753-74d044c61653.png',
      date: '2024.04.01',
      prompt: 'Pre-war meeting of the cats, which was crowded and tense, cinematic lighting, black and white sketch, Dadaism, high detail --ar 4:3 --v 6.0',
      params: { version: 'V6.0', aspect: '4:3', style: 'Dadaism · B&W Sketch' },
    },
    {
      id: 51,
      articleId: 11,
      order: 51,
      featured: true,
      image: 'static/assets/midjourney/close up, a very strong cat, Chinese brush painting, in the style of black and white, --ar 34 --v 6 (2).png',
      date: '2024.04.27',
      prompt: 'close up, a very strong cat, Chinese brush painting, in the style of black and white, --ar 3:4 --v 6',
      params: { version: 'V6', aspect: '3:4', style: 'Chinese Brush · B&W' },
    },
    {
      id: 52,
      articleId: 11,
      order: 52,
      featured: false,
      image: 'static/assets/midjourney/Capture the Decisive Moment of a cheetahs family immersed in golden hour light, reflecting upon vast mountainous landscapes while conveying a sense of serenity amidst the grandeur, wide-angle a.png',
      date: '2024.04.27',
      prompt: 'Capture the Decisive Moment of a cheetahs family immersed in golden hour light, reflecting upon vast mountainous landscapes while conveying a sense of serenity amidst the grandeur, wide-angle and long-focal-length lenses --ar 7:3 --v 6',
      params: { version: 'V6', aspect: '7:3', mood: 'Golden Hour · Serenity' },
    },
    {
      id: 53,
      articleId: 11,
      order: 53,
      featured: false,
      image: 'static/assets/midjourney/An_old_white_cat_long_white_hair_sage_like_type_sitting_in_a_chair_with_a_smile_facing_the_camera_kind_eyes_full_of_vitality_Taoist_temple_background_800mm_ar_4-3_v_6.png',
      date: '2024.04.27',
      prompt: 'An old white cat, long white hair, sage like type, sitting in a chair with a smile, facing the camera, kind eyes, full of vitality, Taoist temple background. Facing the camera directly, with a shooting distance of 800mm. --ar 4:3 --v 6',
      params: { version: 'V6', aspect: '4:3', lens: '800mm' },
    },
    {
      id: 54,
      articleId: 11,
      order: 54,
      featured: false,
      image: 'static/assets/midjourney/close up, a very strong cat, Chinese brush painting, in the style of black and white, --ar 34 --v 6.png',
      date: '2024.04.27',
      prompt: 'close up, a very strong cat, Chinese brush painting, in the style of black and white, --ar 3:4 --v 6',
      params: { version: 'V6', aspect: '3:4', style: 'Chinese Brush · B&W' },
    },
    {
      id: 55,
      articleId: 11,
      order: 55,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_beautiful_cat_style_of_coloring_book_vector_lines_det_19502bef-7846-4fb1-80c3-b0a58b3371d4.png',
      date: '2024.04.27',
      prompt: 'Cat style of coloring book, vector lines, detailed, adult, black and white, botanical background --ar 17:22 --v 6',
      params: { version: 'V6', aspect: '17:22', style: 'Coloring Book · Vector' },
    },
    {
      id: 56,
      articleId: 12,
      order: 56,
      featured: true,
      image: 'static/assets/midjourney/cat wearing a Chinese dragon hat painting, japanese animation Chinese green dragon pintrest by jaywon, in the style of dark cyan and gold, pop-inspired imagery, animated gifs, close up, colorfu.png',
      date: '2024.02.10',
      prompt: 'cat wearing a Chinese dragon hat painting, japanese animation Chinese green dragon pintrest by jaywon, in the style of dark cyan and gold, pop-inspired imagery, animated gifs, close up, colorful drawings, free-flowing lines, yellow and aquamarine --ar 4:5 --stylize 180 --v 6',
      params: { version: 'V6', aspect: '4:5', stylize: '180', style: 'Pop · Anime' },
    },
    {
      id: 57,
      articleId: 12,
      order: 57,
      featured: false,
      image: 'static/assets/midjourney/stretch of spring lake with a majestic mountain range in the distance, White clouds reflected on water surface, mist, sunrise, HDR,.png',
      date: '2024.02.10',
      prompt: 'stretch of spring lake with a majestic mountain range in the distance, White clouds reflected on water surface, mist, sunrise, HDR, --style raw --ar 16:9 --v 6',
      params: { version: 'V6', aspect: '16:9', style: 'Raw', mood: 'Sunrise · HDR' },
    },
    {
      id: 58,
      articleId: 12,
      order: 58,
      featured: false,
      image: 'static/assets/midjourney/Family closeup portrait photo of 9 sitting and standing Vast snowy fields and Chinese New Year-inspired rural houses in northern China. Chinese parents in their 70s with 3 men and 2 women of va.png',
      date: '2024.02.10',
      prompt: 'Family closeup portrait photo of 9 sitting and standing Vast snowy fields and Chinese New Year-inspired rural houses in northern China. Chinese parents in their 70s with 3 men and 2 women of various ages, 1 boy and 1 girl wearing all plain beige coat polo shirt dress pants sweater jeans, sunny bright day, looking straight --no beard --ar 2:1 --stylize 250 --v 6',
      params: { version: 'V6', aspect: '2:1', stylize: '250' },
    },
    {
      id: 59,
      articleId: 12,
      order: 59,
      featured: false,
      image: 'static/assets/midjourney/many koi fish.png',
      date: '2024.02.10',
      prompt: 'many koi fish --ar 16:9 --s 1000 --v 6',
      params: { version: 'V6', aspect: '16:9', stylize: '1000' },
    },
    {
      id: 60,
      articleId: 12,
      order: 60,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_happy_new_year_Chinese_dragon_painting_japanese_anima_35db923f-cd1c-40bd-a613-11fb2623f79c.png',
      date: '2024.02.10',
      prompt: 'happy new year Chinese dragon painting, japanese animation Chinese green dragon pintrest by jaywon, in the style of dark cyan and gold, pop-inspired imagery, animated gifs, close up, colorful drawings, free-flowing lines, yellow and aquamarine --ar 4:5 --stylize 180 --v 6',
      params: { version: 'V6', aspect: '4:5', stylize: '180', style: 'Pop · Anime' },
    },
    {
      id: 65,
      articleId: 13,
      order: 60.5,
      featured: true,
      image: 'static/assets/midjourney/cat under a tree, in the style of ethereal lighting, graceful balance 1 shot on Fujifilm GFX 50R with Kodak Tri-X 400 film stock 1.png',
      date: '2024.02.13',
      prompt: 'cat under a tree, in the style of ethereal lighting, graceful balance ::1 shot on Fujifilm GFX 50R with Kodak Tri-X 400 film stock ::1 --ar 16:9 --niji 6 --style raw',
      params: { version: 'Niji 6', aspect: '16:9', style: 'Raw', mood: 'Ethereal' },
    },
    {
      id: 61,
      articleId: 13,
      order: 61,
      featured: false,
      image: 'static/assets/midjourney/Mickey Mouse Ice Sculpture Competition in the Sun, in the style of minimalistic sculptures, Front view, High and short depth of field, Miyazaki Hayao style, 4K, hyper quality --ar 34 --style ra.png',
      date: '2024.02.13',
      prompt: 'Mickey Mouse Ice Sculpture Competition in the Sun, in the style of minimalistic sculptures, Front view, High and short depth of field, Miyazaki Hayao style, 4K, hyper quality --ar 3:4 --style raw --v 6',
      params: { version: 'V6', aspect: '3:4', style: 'Raw', mood: 'Miyazaki Hayao' },
    },
    {
      id: 62,
      articleId: 13,
      order: 62,
      featured: false,
      image: 'static/assets/midjourney/Panda eating in a painting on the ground, in the style of heian period, gold and green, song dynasty --ar 169 --v 6.png',
      date: '2024.02.13',
      prompt: 'Panda eating in a painting on the ground, in the style of heian period, gold and green, song dynasty --ar 16:9 --v 6',
      params: { version: 'V6', aspect: '16:9', style: 'Heian · Song dynasty' },
    },
    {
      id: 63,
      articleId: 13,
      order: 63,
      featured: false,
      image: 'static/assets/midjourney/cat wearing a Chinese dragon-style hat painting, japanese animation Chinese green dragon pintrest by jaywon, in the style of dark cyan and gold, pop-inspired imagery, animated gifs, close up, c.png',
      date: '2024.02.13',
      prompt: 'cat wearing a Chinese dragon-style hat painting, japanese animation Chinese green dragon pintrest by jaywon, in the style of dark cyan and gold, pop-inspired imagery, animated gifs, close up, colorful drawings, free-flowing lines, yellow and aquamarine --ar 4:5 --stylize 180 --v 6',
      params: { version: 'V6', aspect: '4:5', stylize: '180', style: 'Pop · Anime' },
    },
    {
      id: 64,
      articleId: 13,
      order: 64,
      featured: false,
      image: 'static/assets/midjourney/The short-haired girl in the white dress looking down and sniffing lightly at the flowers she holds in her hand, made of glass, aquamarine, romantic, emphasis on light and color, in the style o.png',
      date: '2024.02.13',
      prompt: 'The short-haired girl in the white dress looking down and sniffing lightly at the flowers she holds in her hand, made of glass, aquamarine, romantic, emphasis on light and color, in the style of aggressive digital illustration, wide-angle and long-focal-length lenses --ar 7:3 --stylize 1000 --niji 6',
      params: { version: 'Niji 6', aspect: '7:3', stylize: '1000', style: 'Digital illustration · Glass' },
    },
    {
      id: 66,
      articleId: 14,
      order: 65,
      featured: false,
      image: 'static/assets/midjourney/Chinese_god_of_wealth_Lynx_cat_66.png',
      date: '2024.02.20',
      prompt: 'Chinese god of wealth, god of wealth and a Lynx cat, 3D render, cute Maneki-neko style, red and gold, festive, gold ingots, red envelopes, Fú character, soft lighting --ar 2:3 --v 6',
      params: { version: 'V6', aspect: '2:3', style: 'God of Wealth · Maneki-neko' },
    },
    {
      id: 67,
      articleId: 14,
      order: 66,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_Award_winning_photograph_close_up_pink_is_all_that_is_759eb12f-5698-4893-b649-c1dc7729f70b.png',
      date: '2024.02.20',
      prompt: 'Award winning photograph, close up, pink is all that is showing on a branch in spring tussy, in the style of snow scenes, Chinese traditional art influence, dark white and white, blown-off-roof perspective, documentary travel photography, soft and dreamy atmosphere --ar 9:16 --v 6',
      params: { version: 'V6', aspect: '9:16', style: 'Documentary · Chinese traditional' },
    },
    {
      id: 68,
      articleId: 14,
      order: 67,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_an_image_in_the_style_of_a_Risograph_print_with_influ_502e11fb-5e2b-4997-bc6b-ab17006f520a.png',
      date: '2024.02.20',
      prompt: 'an image in the style of a Risograph print with influences from Chinese art and Maud Lewis\' painting style. Illustration is Indian man tuning a piano, Full-body, view from head to toe, The perspective should be scaled to include all extremities, avoiding any focus on a specific area. simple lines. The color scheme Deep Forest Green, Rust Orange, Stone Gray, Muddy Brown, set against a white background, 18k --chaos 30 --ar 16:9 --style raw --stylize 750 --v 6',
      params: { version: 'V6', aspect: '16:9', style: 'Risograph · Maud Lewis', stylize: '750', chaos: '30' },
    },
    {
      id: 69,
      articleId: 14,
      order: 68,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_cat_and_lilies_flowers_with_cosmic_dark_background_--_e7c80fbe-5bd4-4b0a-8ca2-93071c9c5ff9.png',
      date: '2024.02.20',
      prompt: 'cat and lilies flowers with cosmic dark background --ar 3:4 --stylize 750 --niji 6',
      params: { version: 'Niji 6', aspect: '3:4', stylize: '750', style: 'Cosmic' },
    },
    {
      id: 70,
      articleId: 14,
      order: 64.5,
      featured: true,
      image: 'static/assets/midjourney/yuxin_jin_A_teenager_and_a_young_girl_with_their_hands_interloc_ac3ab739-f776-4acb-ab64-4265183ffa15.png',
      date: '2024.02.20',
      prompt: 'A teenager and a young girl with their hands interlocked with their fingers on their chests, their foreheads pressed together, eyes closed in prayer, falling headfirst backwards through the clouds, dreamy atmosphere, focus on the portrayal of the environment, the figures are very small in the picture, supernatural, Makoto Shinkai, Romanticism, fabulous natural backgrounds --stylize 850 --niji 6 --ar 8:5',
      params: { version: 'Niji 6', aspect: '8:5', stylize: '850', style: 'Makoto Shinkai · Romanticism' },
    },
    {
      id: 75,
      articleId: 15,
      order: 69.3,
      featured: true,
      image: 'static/assets/midjourney/yuxin_jin_unmistakable_from_a_photograph_analog_film_grain_mott_27e4809a-5fcc-45b5-ba0a-70fb8ed471dc.png',
      date: '2024.02.26',
      prompt: 'unmistakable from a photograph, analog film grain, mottled light bluish gray backdrop, 24 year old rough looking chinese female boxer with bruises on skin holding the fists, round head with square jawline, realistic high resolution dry skin texture, realistic variations of matte skin tone and matte color, micro pores, minor skin imperfections, micro skin abrasions, very short dark hair, kickboxer with fists at chin level, cinematic masterpiece, --ar 8:5 --v 6',
      params: { version: 'V6', aspect: '8:5', style: 'Cinematic · Analog' },
    },
    {
      id: 71,
      articleId: 15,
      order: 69.5,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_unmistakable_from_a_photograph_analog_film_grain_mott_34b2fccb-d4c0-467c-874f-b647066f0056.png',
      date: '2024.02.26',
      prompt: 'unmistakable from a photograph, analog film grain, mottled light bluish gray backdrop, 24 year old rough looking chinese female boxer with bruises on skin holding the fists, round head with square jawline, realistic high resolution dry skin texture, realistic variations of matte skin tone and matte color, micro pores, minor skin imperfections, micro skin abrasions, very short dark hair, kickboxer with fists at chin level, cinematic masterpiece, --ar 8:5 --v 6',
      params: { version: 'V6', aspect: '8:5', style: 'Cinematic · Analog' },
    },
    {
      id: 72,
      articleId: 15,
      order: 70,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_a_silhouette_of_a_green-blue_bird_facing_away_from_th_e92a098e-c866-4dd2-a8a0-3320615e8beb.png',
      date: '2024.02.26',
      prompt: 'a silhouette of a green-blue bird facing away from the camera flying out the door, Medieval country house with forest outside the door and an open empty birdcage by the door, In front of the door a basket with berries tipped over, the berries tumbled out, and a blue feather fluttered down from the bird\'s body, expressive manga style, light and bright colour --no people --ar 3:4 --stylize 800 --niji 6',
      params: { version: 'Niji 6', aspect: '3:4', stylize: '800', style: 'Liz and the Blue Bird' },
    },
    {
      id: 73,
      articleId: 15,
      order: 71,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_folk_art_cute_cat_in_Paeonia_feild_--ar_12_--niji_6_c83df1a8-8ed1-45d3-9c05-41b7f8e9c787.png',
      date: '2024.02.26',
      prompt: 'folk art cute cat in Paeonia feild, --niji 6 --ar 1:2',
      params: { version: 'Niji 6', aspect: '1:2', style: 'Folk art' },
    },
    {
      id: 74,
      articleId: 15,
      order: 72,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_a_girl_Kyoto_Animation_--niji_6_f1c3d315-1cfa-4b4a-a23a-6a5af41c03d7.png',
      date: '2024.02.26',
      prompt: 'a girl, Kyoto Animation --niji 6',
      params: { version: 'Niji 6', style: 'Kyoto Animation' },
    },
    {
      id: 76,
      articleId: 16,
      order: 72.3,
      featured: true,
      image: 'static/assets/midjourney/yuxin_jin_close-up_heavy_snow_day_A_vast_Beijing_city_landscape_9e56846c-b7c6-4540-9158-4bda0f342e97.png',
      date: '2024.03.06',
      prompt: 'close-up, heavy snow day, A vast Beijing city landscape in grayscale. The scene is punctuated by a single, a cat is flying in the sky, creating a sharp contrast --ar 16:9 --v 6',
      params: { version: 'V6', aspect: '16:9', style: 'Photorealistic · Grayscale' },
    },
    {
      id: 77,
      articleId: 16,
      order: 72.5,
      featured: false,
      image: 'static/assets/midjourney/A photorealistic image of a glass window on a rainy, foggy day. The window is covered with water droplets. In the center, flower shape is drawn in a simple manner. The shape appears as if it is.png',
      date: '2024.03.06',
      prompt: 'A photorealistic image of a glass window on a rainy, foggy day. The window is covered with water droplets. In the center, flower shape is drawn in a simple manner. The shape appears as if it is dripping water drops naturally, enhancing the realistic, natural feel of a rainy day. The background behind the glass shows the blurry, rainy scenery, contributing to the overall mood of the image. The rainy and foggy background enhances the realistic feel of a rainy day. --ar 32:31 --v 6',
      params: { version: 'V6', aspect: '32:31', style: 'Photorealistic' },
    },
    {
      id: 78,
      articleId: 16,
      order: 73,
      featured: false,
      image: 'static/assets/midjourney/Chinese dragon with golden eyes, full-body, ethereal, Chinese epic style, turning in the sea, lightning and thunder, smoke,Chinese dragons, ethereal and hazy, white background, no watermark --a.png',
      date: '2024.03.06',
      prompt: 'Chinese dragon with golden eyes, full-body, ethereal, Chinese epic style, turning in the sea, lightning and thunder, smoke, Chinese dragons, ethereal and hazy, white background, no watermark --ar 3:4 --stylize 1000 --v 6',
      params: { version: 'V6', aspect: '3:4', stylize: '1000', style: 'Chinese epic' },
    },
    {
      id: 79,
      articleId: 16,
      order: 74,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_close-up_heavy_snow_day_A_vast_Beijing_city_landscape_7453d05d-f9a0-4b79-b7c2-61d5c25f318e.png',
      date: '2024.03.06',
      prompt: 'close-up, heavy snow day, A vast Beijing city landscape in grayscale. The scene is punctuated by a single, a cat is flying in the sky, creating a sharp contrast --ar 16:9 --v 6',
      params: { version: 'V6', aspect: '16:9', style: 'Photorealistic · Grayscale' },
    },
    {
      id: 80,
      articleId: 16,
      order: 75,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_full_body_portrait_of_womens_red_cheongsam_dress_in_t_0eb02acc-0f8f-4a68-8703-66d34def679a.png',
      date: '2024.03.06',
      prompt: 'full body portrait of women\'s red cheongsam dress, in the style of street style realism, monochromatic color scheme, monochromatic compositions, aurorapunk, mori kei, decadent beauty, golden age aesthetics --ar 35:47 --style raw --v 6',
      params: { version: 'V6', aspect: '35:47', style: 'Street realism · Mori kei' },
    },
    {
      id: 81,
      articleId: 17,
      order: 75.3,
      featured: true,
      image: 'static/assets/midjourney/微信图片_2026-03-05_190839_869.png',
      date: '2024.03.10',
      prompt: 'Let\'s be friends, two characters waving hello, cute anime style, Miyazaki Hayao, warm and friendly, handdraw, Japanese comics --niji 6 --ar 3:4',
      params: { version: 'Niji 6', aspect: '3:4', style: 'Miyazaki · Cute' },
    },
    {
      id: 82,
      articleId: 17,
      order: 75.5,
      featured: false,
      image: 'static/assets/midjourney/Coconut Flavored Eggroll Roll Popcorn, cute style, petros afshar, dtraditional animation, graffiti, studyplace, white background --ar 34.png',
      date: '2024.03.10',
      prompt: 'Coconut Flavored Eggroll Roll Popcorn, cute style, petros afshar, traditional animation, graffiti, studyplace, white background --ar 3:4 --v 6',
      params: { version: 'V6', aspect: '3:4', style: 'Petros Afshar · Cute' },
    },
    {
      id: 83,
      articleId: 17,
      order: 76,
      featured: false,
      image: 'static/assets/midjourney/A young Japanese man kneels in prayer, his wife is lying on his lap, whom he has just killed with his own hands, handdraw, Japanese comics, anime style --ar 169 --stylize 1000 --niji 6.png',
      date: '2024.03.10',
      prompt: 'A young Japanese man kneels in prayer, his wife is lying on his lap, whom he has just killed with his own hands, handdraw, Japanese comics, anime style --ar 16:9 --stylize 1000 --niji 6',
      params: { version: 'Niji 6', aspect: '16:9', stylize: '1000', style: 'Japanese comics' },
    },
    {
      id: 84,
      articleId: 17,
      order: 77,
      featured: false,
      image: 'static/assets/midjourney/A girl sits in a window seat with her hand on her desk propping up her chin, looking at the handsome boys in the distance, Miyazaki Hayao style, Boys as Prospects, Spotlight on Girl, handdraw, .png',
      date: '2024.03.10',
      prompt: 'A girl sits in a window seat with her hand on her desk propping up her chin, looking at the handsome boys in the distance, Miyazaki Hayao style, Boys as Prospects, Spotlight on Girl, handdraw, Japanese comics, anime style --niji 6 --s 1000 --ar 16:9',
      params: { version: 'Niji 6', aspect: '16:9', stylize: '1000', style: 'Miyazaki Hayao' },
    },
    {
      id: 85,
      articleId: 17,
      order: 78,
      featured: false,
      image: 'static/assets/midjourney/The boy stuck pins in the Muppet figurines and cursed his classmates to go out and fall on their feet, Miyazaki Hayao style, handdraw, Japanese comics, anime style --ar 169 --stylize 1000 --nij.png',
      date: '2024.03.10',
      prompt: 'The boy stuck pins in the Muppet figurines and cursed his classmates to go out and fall on their feet, Miyazaki Hayao style, handdraw, Japanese comics, anime style --ar 16:9 --stylize 1000 --niji 6',
      params: { version: 'Niji 6', aspect: '16:9', stylize: '1000', style: 'Miyazaki Hayao' },
    },
    {
      id: 86,
      articleId: 18,
      order: 79.3,
      featured: true,
      image: 'static/assets/midjourney/微信图片_2026-03-05_190839_869.png',
      date: '2024.04.02',
      prompt: 'young Chinese girl in glasses and a grumpy cat, 3D digital illustration, in the style of lovely character designs, warm color palette, sharp & vivid colors --stylize 250 --v 6.0 --ar 4:5',
      params: { version: 'V6.0', aspect: '4:5', stylize: '250', style: '3D Illustration' },
    },
    {
      id: 87,
      articleId: 18,
      order: 79.5,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_young_Chinese_girl_in_glasses_is_stuffed_in_a_squirre_bcbecd57-5e74-47cc-98f0-d9c7065e2abf (1).png',
      date: '2024.04.02',
      prompt: 'young Chinese girl in glasses is stuffed in a squirrel\'s mouth, in 3d digital illustration 2, in the style of lovely character designs, warm color palette, sharp & vivid colors --stylize 250 --v 6.0 --ar 4:5',
      params: { version: 'V6.0', aspect: '4:5', stylize: '250', style: '3D Illustration' },
    },
    {
      id: 88,
      articleId: 18,
      order: 80,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_Create_a_three-panel_realistic_comic_book_page._The_6419fa60-6de6-4fb0-bbab-25a1ae6b88b0_1.png',
      date: '2024.04.02',
      prompt: 'Create a three-panel realistic comic book page. The first panel should depict A scene of a couple happy together. The second panel needs to show The boy himself kills the girl who is smiling at him. The third panel illustrates a refreshing moment of The boy was on his knees, the dead girl lying on his lap, and he prayed devoutly that she would go to heaven --ar 16:9 --v 6',
      params: { version: 'V6', aspect: '16:9', style: 'Realistic Comic' },
    },
    {
      id: 89,
      articleId: 18,
      order: 81,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_a_painting_of_a_boy_with_a_dead_heart_in_the_style_of_1b1d853b-ad74-444a-a0ca-deaff391f732.png',
      date: '2024.04.02',
      prompt: 'a painting of a boy with a dead heart, in the style of traditional chinese landscape, misty gothic, plush doll art, luminous reflections, colorized, children\'s book illustrations, serene faces --ar 4:5 --v 6',
      params: { version: 'V6', aspect: '4:5', style: 'Traditional Chinese · Gothic' },
    },
    {
      id: 90,
      articleId: 18,
      order: 82,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_illustration_of_angry_cat_at_the_desk_childrens_book__ba56c1b5-a407-4915-93d4-d2e53c1b67cf.png',
      date: '2024.04.02',
      prompt: 'illustration of angry cat at the desk, children\'s book illustration, whimsical and simple illustration aesthetic, bright colors, in the style of Clémence Guillemaud --ar 3:2 --v 6.0',
      params: { version: 'V6.0', aspect: '3:2', style: 'Clémence Guillemaud' },
    },
    {
      id: 91,
      articleId: 19,
      order: 83.3,
      featured: false,
      image: 'static/assets/midjourney/微信图片_2026-03-05_192100_456.png',
      date: '2024.04.19',
      prompt: 'white flowers and a white cat, ethereal minimalism, soft light, delicate illustration, in the style of Kodak Gold and glass texture --ar 4:5 --v 6',
      params: { version: 'V6', aspect: '4:5', style: 'Ethereal' },
    },
    {
      id: 92,
      articleId: 19,
      order: 83.5,
      featured: false,
      image: 'static/assets/midjourney/微信图片_2026-03-05_192112_527.png',
      date: '2024.04.19',
      prompt: 'one two three scarecrow, three scarecrows in a golden wheat field, whimsical, children\'s book illustration, warm sunset --ar 16:9 --v 6',
      params: { version: 'V6', aspect: '16:9', style: 'Children\'s Book' },
    },
    {
      id: 93,
      articleId: 19,
      order: 84,
      featured: false,
      image: 'static/assets/midjourney/微信图片_2026-03-05_192119_104.png',
      date: '2024.04.19',
      prompt: 'Egyptian pyramid at sunset, minimalist landscape, vast desert, golden hour, cinematic wide shot --ar 16:9 --v 6',
      params: { version: 'V6', aspect: '16:9', style: 'Minimalist Landscape' },
    },
    {
      id: 94,
      articleId: 19,
      order: 85,
      featured: false,
      image: 'static/assets/midjourney/微信图片_2026-03-05_192123_182.png',
      date: '2024.04.19',
      prompt: 'A fairy in pink, bestowing good dreams upon a sleeping child, in the style of Cinema4D, Ilya Kuvshinov, Thiago Valdi, Skottie Young, soft edges and miniature illumination --ar 3:4 --v 6',
      params: { version: 'V6', aspect: '3:4', style: 'Dream Fairy' },
    },
    {
      id: 95,
      articleId: 19,
      order: 86,
      featured: false,
      image: 'static/assets/midjourney/微信图片_2026-03-05_192130_756.png',
      date: '2024.04.19',
      prompt: 'Shanghai skyline, the Bund at night, neon lights, wet streets reflection, cinematic, Wong Kar Wai mood --ar 16:9 --v 6',
      params: { version: 'V6', aspect: '16:9', style: 'Cinematic' },
    },
    {
      id: 96,
      articleId: 19,
      order: 87,
      featured: false,
      image: 'static/assets/midjourney/微信图片_2026-03-05_192133_981.png',
      date: '2024.04.19',
      prompt: 'stock chart going up, green candlesticks, minimalist infographic, financial growth, clean vector style, positive trend --ar 16:9 --v 6',
      params: { version: 'V6', aspect: '16:9', style: 'Infographic' },
    },
    {
      id: 97,
      articleId: 19,
      order: 88,
      featured: false,
      image: 'static/assets/midjourney/微信图片_2026-03-05_192138_131.png',
      date: '2024.04.19',
      prompt: 'empty mountains after new rain, Chinese landscape painting, misty peaks, traditional ink wash meets digital, serene, in the style of Song dynasty --ar 16:9 --v 6',
      params: { version: 'V6', aspect: '16:9', style: 'Chinese Landscape' },
    },
    {
      id: 98,
      articleId: 19,
      order: 89,
      featured: false,
      image: 'static/assets/midjourney/微信图片_2026-03-05_192141_293.png',
      date: '2024.04.19',
      prompt: 'close-up portrait with jade green eyes, ethereal, luminous, fine detail, delicate skin texture --ar 4:5 --v 6',
      params: { version: 'V6', aspect: '4:5', style: 'Portrait' },
    },
    {
      id: 99,
      articleId: 19,
      order: 90,
      featured: false,
      image: 'static/assets/midjourney/微信图片_2026-03-05_192144_385.png',
      date: '2024.04.19',
      prompt: 'gothic sister, dark lace, dramatic lighting, Victorian gothic, portrait, haunting beauty, misty and luminous --ar 3:4 --v 6',
      params: { version: 'V6', aspect: '3:4', style: 'Gothic' },
    },
    {
      id: 100,
      articleId: 19,
      order: 91,
      featured: false,
      image: 'static/assets/midjourney/微信图片_2026-03-05_192147_227.png',
      date: '2024.04.19',
      prompt: 'A little dream fairy, small spirit bestowing good dreams, in the style of Cinema4D, Ilya Kuvshinov, soft illumination, whimsical --ar 4:5 --v 6',
      params: { version: 'V6', aspect: '4:5', style: 'Dream Fairy' },
    },
    {
      id: 101,
      articleId: 20,
      order: 92,
      featured: false,
      image: 'static/assets/midjourney/微信图片_2026-03-05_192612_992.png',
      images: [
        'static/assets/midjourney/微信图片_2026-03-05_192612_992.png',
        'static/assets/midjourney/微信图片_2026-03-05_192619_535.png',
        'static/assets/midjourney/微信图片_2026-03-05_192624_801.png',
        'static/assets/midjourney/微信图片_2026-03-05_192629_369.png',
        'static/assets/midjourney/微信图片_2026-03-05_192633_797.png',
      ],
      date: '2024.02.09',
      prompt: 'cat family celebrating Chinese New Year with a New Year\'s Eve dinner at home, hyperdetailed, maximalist, cutour animation style --no watermark --ar 4:5 --stylize 250 --niji 6',
      params: { version: 'Niji 6', aspect: '4:5', stylize: '250', style: 'Couture Animation' },
    },
    {
      id: 102,
      articleId: 21,
      order: 92.5,
      featured: true,
      image: 'static/assets/midjourney/微信图片_2026-03-05_195933_338.png',
      date: '2024.05.01',
      prompt: 'a handsome cat in a trench coat, cinematic portrait, fuji film, soft light --ar 16:9 --v 6',
      params: { version: 'V6', aspect: '16:9', style: 'Cinematic' },
    },
    {
      id: 103,
      articleId: 21,
      order: 93,
      featured: false,
      image: 'static/assets/midjourney/微信图片_2026-03-05_195911_091.png',
      date: '2024.05.01',
      prompt: 'A cute little Chinese girl siting at a table and dealing with puzzle, staring at the desk, 50mm, fuji film, soft light, bright environment, color photo --ar 16:9',
      params: { version: 'V6', aspect: '16:9', style: 'Fuji Film' },
    },
    {
      id: 104,
      articleId: 21,
      order: 94,
      featured: false,
      image: 'static/assets/midjourney/微信图片_2026-03-05_195917_206.png',
      date: '2024.05.01',
      prompt: 'photo of a zebra walking in the middle of a blurred Beijing street crowd, fuji film --ar 16:9 --sref https://s.mj.run/hFv1XDoZkMk --sw 1000',
      params: { version: 'V6', aspect: '16:9', style: 'Fuji Film' },
    },
    {
      id: 105,
      articleId: 21,
      order: 95,
      featured: false,
      image: 'static/assets/midjourney/微信图片_2026-03-05_195923_068.png',
      date: '2024.05.01',
      prompt: 'a cute milky white long-haired Dwarf cat attempting to type on a laptop keyboard for writting a book --ar 16:9',
      params: { version: 'V6', aspect: '16:9', style: 'Cute' },
    },
    {
      id: 106,
      articleId: 21,
      order: 96,
      featured: false,
      image: 'static/assets/midjourney/微信图片_2026-03-05_195927_577.png',
      date: '2024.04.27',
      prompt: 'On a big windy day, a cute pig fly in the sky, hugging a large dandelion stem that floats up with the wind, folk art --ar 1:2 --style raw --niji 6',
      params: { version: 'Niji 6', aspect: '1:2', style: 'Folk Art · Raw' },
    },
    {
      id: 107,
      articleId: 22,
      order: 96.5,
      featured: true,
      image: 'static/assets/midjourney/yuxin_jin_The_background_is_blue_sky_and_white_clouds._Below_is_6ce838b3-e490-4edc-81a1-87f45e3dfe15.png',
      date: '2024.05.14',
      prompt: 'The background is blue sky and white clouds. Below is a patch of grass. In the grass is an elephant with a bird on its head, in the style of mandy disher, purple and pink, impressionistic landscape scenes, digitally enhanced, sam toft, vibrant stage backdrops, watercolor --ar 2:1 --sref https://s.mj.run/hNbY3pXFO-0',
      params: { version: 'V6', aspect: '2:1', style: 'Impressionistic · Watercolor' },
    },
    {
      id: 108,
      articleId: 22,
      order: 97,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_a_caricature_image_of_a_young_female_Crypt_Dwarf_whos_aeeee30e-6462-4eb9-b846-dbca4b4d62d9.png',
      date: '2024.05.14',
      prompt: 'a caricature image of a young female Crypt Dwarf who\'s going to die of heat of the sunny day --ar 16:9 --stylize 250',
      params: { version: 'V6', aspect: '16:9', stylize: '250', style: 'Caricature' },
    },
    {
      id: 109,
      articleId: 22,
      order: 98,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_httpss.mj.runUn1GiLk2TVQ_Cinematic_extreme_close_up_o_930a8848-d91e-4aaa-8832-4f408339c187.png',
      date: '2024.05.14',
      prompt: 'https://s.mj.run/Un1GiLk2TVQ Cinematic, extreme close up on two clean plums hanging on trees, different lighting plums, bright light behind --no drip --ar 16:9 --style raw',
      params: { version: 'V6', aspect: '16:9', style: 'Raw · Cinematic' },
    },
    {
      id: 110,
      articleId: 22,
      order: 99,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_baby_calico_cat_running_in_a_sunny_forest_16_bit_vi_3f48db4f-3528-4ff9-8f8a-c92b599e49ab_1.png',
      date: '2024.05.14',
      prompt: 'baby calico cat running in a sunny forest, 16 bit video game, chibi, cute pixel art, large pixels --stylize 200',
      params: { version: 'V6', stylize: '200', style: 'Pixel Art' },
    },
    {
      id: 111,
      articleId: 23,
      order: 99.5,
      featured: true,
      image: 'static/assets/midjourney/yuxin_jin_httpss.mj.runfxtNnXzLOpA_A_little_girl_with_no_life_t_614e7fab-82e3-42de-93f1-caa5f4222b3d.png',
      date: '2024.05.27',
      prompt: 'https://s.mj.run/fxtNnXzLOpA A little girl with no life to lose looks at a rope loop dangling from the sky --ar 6:5 --stylize 0 --weird 3000',
      params: { version: 'V6', aspect: '6:5', stylize: '0', weird: '3000', style: 'Weird' },
    },
    {
      id: 112,
      articleId: 23,
      order: 100,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_raccoon_in_a_sea_of_flowers_--ar_34_--sref_httpss.m_b02d5064-7f94-4a90-bc4a-fa9ba446df63_2.png',
      date: '2024.05.27',
      prompt: 'raccoon in a sea of flowers --ar 3:4 --sref https://s.mj.run/TlzsJz8ELhc --stylize 1000',
      params: { version: 'V6', aspect: '3:4', stylize: '1000', style: 'Style Ref' },
    },
    {
      id: 113,
      articleId: 23,
      order: 101,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_httpss.mj.runaqjRvaMJg_M_A_woman_with_a_lot_of_bloomi_b2c2e26b-aee7-4124-a5ae-31a7d70d5180 (1).png',
      date: '2024.05.27',
      prompt: 'https://s.mj.run/aqjRvaMJg_M A woman with a lot of blooming peonies on her head',
      params: { version: 'V6', style: 'Peonies' },
    },
    {
      id: 114,
      articleId: 23,
      order: 102,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_A_picture_of_a_colorful_parrot_working_as_a_speech__ffd64197-66ec-417d-895c-f6add5077a1a_3.png',
      date: '2024.05.27',
      prompt: 'A picture of a colorful parrot working as a speech therapist --ar 6:5 --stylize 0 --weird 3000',
      params: { version: 'V6', aspect: '6:5', stylize: '0', weird: '3000', style: 'Weird' },
    },
    {
      id: 115,
      articleId: 23,
      order: 102.5,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_httpss.mj.runILxu41Xav04_A_cute_cartoon_calico_cat__60fb42fe-29b3-40c0-a7d7-45351f7b3fcb_1.png',
      date: '2024.05.27',
      prompt: 'https://s.mj.run/ILxu41Xav04 A cute cartoon calico cat',
      params: { version: 'V6', style: 'Cartoon · Calico' },
    },
    {
      id: 120,
      articleId: 24,
      order: 102.5,
      featured: true,
      image: 'static/assets/midjourney/yuxin_jin_Low_angle_shot._a_cute_Maine_Coon_facing_the_camera_i_0d652945-ed32-4b5a-8175-47ea7c4f102c.png',
      date: '2024.06.16',
      prompt: 'Low angle shot, a cute Maine Coon facing the camera',
      params: { version: 'V6', style: 'Portrait' },
    },
    {
      id: 116,
      articleId: 24,
      order: 102.8,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_httpss.mj.run9j1d2RGjGic_httpss.mj.runYeWr0voDDNw_h_5db5c4ab-1198-49f5-aad3-056a2a45735a_0.png',
      date: '2024.06.16',
      prompt: 'https://s.mj.run/9j1d2RGjGic https://s.mj.run/YeWr0voDDNw https://s.mj.run/79Yi2BcpLj4 a red world tree glow within the transparent terrarium at the belly, a beautiful anime girl with belly made of a transparent terrarium, looking at her belly, full body shot, nightcore, studio lighting --chaos 10 --ar 9:16 --stylize 1000',
      params: { version: 'V6', aspect: '9:16', chaos: '10', stylize: '1000', style: 'Anime · Terrarium' },
    },
    {
      id: 117,
      articleId: 24,
      order: 103,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_A_Chinese_girl_young_fashionable_wearing_a_yellow_c_132f4852-ef8a-4edb-9436-b18bf382ae2f_3.png',
      date: '2024.06.16',
      prompt: 'A Chinese girl, young, fashionable, wearing a yellow cheongsam, Medium shot, Wong Kar-Wai movie style, Chinese movie posters from the 1960s to the 1990s, romantic and elegant, soft focus, realistic technique, 8K wallpaper --ar 9:16 --stylize 250',
      params: { version: 'V6', aspect: '9:16', stylize: '250', style: 'Wong Kar-Wai · Poster' },
    },
    {
      id: 118,
      articleId: 24,
      order: 104,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_httpss.mj.runURDQ3CxJdXM_A_Beautiful_multi-layer_peta_d78a9560-6f51-46cf-9d70-9904462a0e39.png',
      date: '2024.06.16',
      prompt: 'https://s.mj.run/URDQ3CxJdXM A Beautiful multi-layer petals yellow flower blooming from the crevice of a rock on the mountaintop, with a background of sunrise, blurred background, long stem, green leaves, using high-resolution photography style, professional color grading, soft shadows, no contrast, and clear focus in digital photography. This photo was taken with the Sony A7R IV camera, which has an extreme close-up perspective, wide-angle lens, and an f/28 aperture. 8k, HD --ar 2:3 --sref https://s.mj.run/URDQ3CxJdXM --stylize 800',
      params: { version: 'V6', aspect: '2:3', stylize: '800', style: 'Photography · Flower' },
    },
    {
      id: 119,
      articleId: 24,
      order: 105,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_httpss.mj.rune44_5xeGbks_A_huge_tiger_gazes_at_an_Ind_2efa805a-4cc3-471f-bdaf-edaa1d8c5033.png',
      date: '2024.06.16',
      prompt: 'https://s.mj.run/e44_5xeGbks A huge tiger gazes at an Indian man with only tattered clothes in the rainforest --chaos 10 --ar 5:6 --stylize 1000',
      params: { version: 'V6', aspect: '5:6', chaos: '10', stylize: '1000', style: 'Rainforest' },
    },
    {
      id: 125,
      articleId: 25,
      order: 105.2,
      featured: true,
      image: 'static/assets/midjourney/yuxin_jin_advertising_photography_Summer_sunbeams_dance_casti_f406ab78-7ce7-4f0d-b2e0-950cf23428ce_0.png',
      date: '2024.07.11',
      prompt: 'advertising photography, Summer sunbeams dance',
      params: { version: 'V6', style: 'Advertising · Summer' },
    },
    {
      id: 121,
      articleId: 25,
      order: 105.5,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_a_cute_baby_Chinese_dragon_in_suit_hold_a_sign_says_H_e206cc01-96a2-45fe-8616-60b501456cef.png',
      date: '2024.07.11',
      prompt: 'a cute baby Chinese dragon in suit hold a sign says "Hello" and waving with one hand. --chaos 20 --ar 5:6 --stylize 200',
      params: { version: 'V6', aspect: '5:6', chaos: '20', stylize: '200', style: 'Cute' },
    },
    {
      id: 122,
      articleId: 25,
      order: 106,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_illustration_of_2_little_cute_Chinese_kids_Sitting_by_7aefbdfd-f40b-4af8-aa7c-a58888930397.png',
      date: '2024.07.11',
      prompt: 'illustration of 2 little cute Chinese kids, Sitting by the rice fields on a summer night and watching fireflies take off, Al Capp style, cartoon, vivid colors, --chaos 20 --ar 16:9 --stylize 640',
      params: { version: 'V6', aspect: '16:9', chaos: '20', stylize: '640', style: 'Al Capp · Cartoon' },
    },
    {
      id: 123,
      articleId: 25,
      order: 107,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_documentary_photo_lotus_pond_in_the_rain_--ar_23_--st_9e8eaa4b-a5da-4c71-a7b7-449a638dffd8.png',
      date: '2024.07.11',
      prompt: 'documentary photo, lotus pond in the rain --ar 2:3 --style raw --sref 6102024 --sw 50 --stylize 500',
      params: { version: 'V6', aspect: '2:3', stylize: '500', style: 'Raw · Documentary' },
    },
    {
      id: 124,
      articleId: 25,
      order: 108,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_A_boy_stands_in_a_field_covering_his_head_in_a_pile_o_bf713fcf-f694-4248-9dca-efa0ff03bb3c.png',
      date: '2024.07.11',
      prompt: 'A boy stands in a field, covering his head in a pile of wheat, playing hide-and-seek with his friends. But as he counts, his friends have all grown up. They walk away, dressed in their professional attire, leaving no one to play hide-and-seek in the field with the boy anymore. --chaos 20 --ar 16:9 --stylize 1000',
      params: { version: 'V6', aspect: '16:9', chaos: '20', stylize: '1000', style: 'Nostalgic' },
    },
    {
      id: 126,
      articleId: 26,
      order: 108.5,
      featured: true,
      image: 'static/assets/midjourney/yuxin_jin_A_tiny_stick_figure_girl_holding_a_oversized_red_ball_563a0f06-b82a-446f-a791-0af161d51de4.png',
      date: '2024.07.25',
      prompt: 'A tiny stick figure girl holding an oversized red ball',
      params: { version: 'V6', style: 'Cover' },
    },
    {
      id: 127,
      articleId: 26,
      order: 109,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_Double_exposure_of_a_young_girl_and_her_grandfather_i_689cea21-b144-44b2-8c8d-62fb6e47255e.png',
      date: '2024.07.25',
      prompt: 'Double exposure of a young girl and her grandfather, isolated white background --ar 9:16 --cref https://s.mj.run/CI_hMU-963s --stylize 300',
      params: { version: 'V6', aspect: '9:16', stylize: '300', style: 'Double Exposure' },
    },
    {
      id: 128,
      articleId: 26,
      order: 110,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_Two_black_swans_along_with_three_fluffy_cute_and_gray_43b21b7a-299a-4c5b-91d6-8881d3393bdb.png',
      date: '2024.07.25',
      prompt: 'Two black swans, along with three fluffy, cute and gray cygnets, are swimming in a lotus pond, delicate and graceful, photo taken with a long-shot lens from above to capture the entire view, showcasing its beauty and tranquility, simple colors beautiful light and shadows, creating natural beauty, --ar 3:4 --sref https://s.mj.run/r-2mZn3lpvw --stylize 1000',
      params: { version: 'V6', aspect: '3:4', stylize: '1000', style: 'Lotus Pond · Swans' },
    },
    {
      id: 129,
      articleId: 26,
      order: 111,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_a_man_and_a_woman_typing_on_their_phones_On_Canvas_by_7f727b1c-50bd-4913-846c-dfcb9b70245d.png',
      date: '2024.07.25',
      prompt: 'a man and a woman typing on their phones, On Canvas by Pablo Picasso Painting made of steel plates and iron wire, gold --chaos 20 --ar 2:3 --sref https://s.mj.run/647TDP9GDDk --stylize 300',
      params: { version: 'V6', aspect: '2:3', chaos: '20', stylize: '300', style: 'Picasso · Steel' },
    },
    {
      id: 130,
      articleId: 26,
      order: 112,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_A_minimalist_photo_of_an_aerial_view_of_the_left_half_c658e4c6-7ea5-45a7-98c0-7e4863e48be0.png',
      date: '2024.07.25',
      prompt: 'A minimalist photo of an aerial view of the left half being red water and the right half being white water, with one man rowing a small long boat in between the two colors, real sea, in the style of minimalism. --ar 1:7 --stylize 400',
      params: { version: 'V6', aspect: '1:7', stylize: '400', style: 'Minimalist' },
    },
    {
      id: 131,
      articleId: 27,
      order: 112.5,
      featured: true,
      image: 'static/assets/midjourney/微信图片_2026-03-05_202814_261.png',
      date: '2024.10.03',
      prompt: 'Cute cat is playing in water and chasing a jellyfish, captured from under water. --ar 6:5 --v 6.1 --stylize 400',
      params: { version: 'V6.1', aspect: '6:5', stylize: '400', style: 'Underwater' },
    },
    {
      id: 132,
      articleId: 27,
      order: 113,
      featured: false,
      image: 'static/assets/midjourney/微信图片_2026-03-05_202748_153.png',
      date: '2024.10.03',
      prompt: 'beatrix potter, Cozy, warm, cozy illustrations, a mother rabbit reading a fairy tale book with a baby rabbit in bed. and flower-patterned pajamas --ar 5:6 --v 6.1',
      params: { version: 'V6.1', aspect: '5:6', style: 'Beatrix Potter' },
    },
    {
      id: 133,
      articleId: 27,
      order: 114,
      featured: false,
      image: 'static/assets/midjourney/微信图片_2026-03-05_202752_282.png',
      date: '2024.10.03',
      prompt: 'https://s.mj.run/wX4x8_UMnR0 Dogs lying happily together --ar 4:3 --v 6.1',
      params: { version: 'V6.1', aspect: '4:3', style: 'Dogs' },
    },
    {
      id: 134,
      articleId: 27,
      order: 115,
      featured: false,
      image: 'static/assets/midjourney/微信图片_2026-03-05_202756_442.png',
      date: '2024.10.03',
      prompt: 'framed photograph of the wedding ceremony of a couple composed of a humanoid tomato in a three-piece suit and a humanoid egg in a white wedding dress, happy atmosphere, charming character, Nikon FE, shot on Kodak Optra 400 film, light from front, meticulous detail, --ar 16:9 --v 6.1',
      params: { version: 'V6.1', aspect: '16:9', style: 'Wedding · Film' },
    },
    {
      id: 135,
      articleId: 27,
      order: 116,
      featured: false,
      image: 'static/assets/midjourney/微信图片_2026-03-05_202759_830.png',
      date: '2024.10.03',
      prompt: 'a white cat with green eyes, in the north pole with the northern lights, pixar animation style --ar 16:9 --stylize 200 --v 6.1',
      params: { version: 'V6.1', aspect: '16:9', stylize: '200', style: 'Pixar' },
    },
    {
      id: 136,
      order: 89.5,
      featured: false,
      image: 'static/assets/midjourney/Woman_in_dress_ar1_2_cw100_v6.png',
      date: '2024.04.21',
      prompt: 'A woman in a dress. ar1:2 cw100 v6',
      params: { version: 'V6', aspect: '1:2', cw: '100', style: 'Character' },
    },
    {
      id: 137,
      order: 88,
      featured: false,
      image: 'static/assets/midjourney/Cyberbullying_Effects_Poster_Illustration_ar16_9_raw_v6.png',
      date: '2024.04.08',
      prompt: 'A poster illustration of the effects of cyberbullying on teenagers, black background, a teenager faces the camera and smiles as he sits in front of his computer, which reveals a green light in the middle of the night. in the style of tenebrism, Caravaggio, Artemisia Gentileschi, dark cyan and amber, romantic academia, chiaroscuro mastery, joyful and optimistic, cartoon violence, brutalist, award-winning ar16:9 raw v6',
      params: { version: 'V6', aspect: '16:9', style: 'Raw' },
    },
    {
      id: 138,
      order: 87.5,
      featured: false,
      image: 'static/assets/midjourney/Cyberbullying_Effects_Poster_Illustration_ar16_9_raw_v6.png',
      date: '2024.04.08',
      prompt: 'A poster illustration of the effects of cyberbullying on teenagers, black background, a teenager faces the camera and smiles as he sits in front of his computer, which reveals a green light in the middle of the night. in the style of tenebrism, Caravaggio, Artemisia Gentileschi, dark cyan and amber, romantic academia, chiaroscuro mastery, joyful and optimistic, cartoon violence, brutalist, award-winning ar16:9 raw v6',
      params: { version: 'V6', aspect: '16:9', style: 'Raw' },
    },
    {
      id: 139,
      order: 86,
      featured: false,
      image: 'static/assets/midjourney/Japanese_Man_Praying_ar16_9_niji6_stylize1000.png',
      date: '2024.03.10',
      prompt: 'A Japanese man kneels in prayer, his wife is lying on his lap, whom he has just killed with his own hands, handdraw, Japanese comics, anime style ar16:9 niji6 stylize 1000',
      params: { version: 'Niji 6', aspect: '16:9', stylize: '1000', style: 'Anime' },
    },
    {
      id: 140,
      order: 85,
      featured: false,
      image: 'static/assets/midjourney/Cheongsam_II_ar35_47_raw_v6.png',
      date: '2024.03.06',
      prompt: 'full body portrait of women\'s red cheongsam dress, in the style of street style realism, monochromatic color scheme, monochromatic compositions, aurorapunk, mori kei, decadent beauty, golden age aesthetics --ar 35:47 --style raw --v 6',
      params: { version: 'V6', aspect: '35:47', style: 'Raw' },
    },
    {
      id: 141,
      order: 84,
      featured: false,
      image: 'static/assets/midjourney/Steppe_Wild_Horse_Top_View_ar16_9_v6.png',
      date: '2024.04.24',
      prompt: 'top view of steppe, with a wild horse is running wild, the horse appears to be a point in the wide steppe. --no people --ar 16:9 --v 6',
      params: { version: 'V6', aspect: '16:9', style: 'Top View' },
    },
    {
      id: 142,
      order: 83,
      featured: false,
      image: 'static/assets/midjourney/Cool_girl_Wasteland_Style_Dress_ar16_9_niji6.png',
      date: '2024.03.14',
      prompt: 'Cool girl, Wasteland Style Dress --ar 16:9 --niji 6',
      params: { version: 'Niji 6', aspect: '16:9', style: 'Wasteland' },
    },
  ];

  // ===== Likes：全局统计（Firebase）+ 本机「已赞」状态（localStorage） =====
  var LIKED_KEY = 'mj-liked';
  /** 全局点赞数（来自 Firebase），格式 { "1": 5, "2": 3 }。未配置 Firebase 时为空对象，回退到仅本机。 */
  var globalLikes = {};
  /**
   * 启用全局点赞统计时在此填写 Firebase 配置（从 Firebase 控制台 → 项目设置 → 您的应用 复制）。
   * 留空则仅使用本机 localStorage，不统计跨用户。
   * 需在 Firebase 控制台创建 Realtime Database，规则示例：".read": true, ".write": true（测试用）。
   */
  var FIREBASE_CONFIG = {
    apiKey: "AIzaSyBNlmEtDGjwW5pNMRmiIuoeC4WEk3XW6hk",
    authDomain: "yuxinjin-gallery.firebaseapp.com",
    projectId: "yuxinjin-gallery",
    storageBucket: "yuxinjin-gallery.firebasestorage.app",
    messagingSenderId: "657153159460",
    appId: "1:657153159460:web:4e7399ff13ca70f9a8c3b1",
    measurementId: "G-M9JWSVG729",
    databaseURL:"https://yuxinjin-gallery-default-rtdb.firebaseio.com"
  };
  function getLikedList() {
    try { return JSON.parse(localStorage.getItem(LIKED_KEY) || '[]'); }
    catch (e) { return []; }
  }

  function isLiked(id) {
    return getLikedList().indexOf(id) !== -1;
  }

  /** 展示用的点赞数：有 Firebase 用全局，否则用本机（旧逻辑兼容）。 */
  function getLikeCount(id) {
    if (typeof globalLikes[id] === 'number') return globalLikes[id];
    try {
      var local = JSON.parse(localStorage.getItem('mj-likes') || '{}');
      return local[id] || 0;
    } catch (e) { return 0; }
  }

  function initFirebaseLikes(done) {
    if (!FIREBASE_CONFIG || !window.firebase) {
      if (typeof done === 'function') done();
      return;
    }
    var called = false;
    function finish() {
      if (called) return;
      called = true;
      if (typeof done === 'function') done();
    }
    var timeout = setTimeout(finish, 4000);
    try {
      if (!window.firebase.apps || !window.firebase.apps.length) {
        window.firebase.initializeApp(FIREBASE_CONFIG);
      }
      var db = window.firebase.database();
      var ref = db.ref('likes');
      ref.once('value', function (snap) {
        clearTimeout(timeout);
        var val = snap.val();
        if (val && typeof val === 'object') {
          for (var k in val) if (Object.prototype.hasOwnProperty.call(val, k)) globalLikes[k] = val[k];
        }
        finish();
      }, function () {
        clearTimeout(timeout);
        finish();
      });
    } catch (e) {
      clearTimeout(timeout);
      finish();
    }
  }

  function incrementFirebaseLike(id, callback) {
    if (!FIREBASE_CONFIG || !window.firebase) {
      if (typeof callback === 'function') callback(0);
      return;
    }
    try {
      var db = window.firebase.database();
      var ref = db.ref('likes/' + id);
      ref.transaction(function (n) { return (n || 0) + 1; }, function (err, committed, snap) {
        var count = (snap && snap.val()) || 0;
        globalLikes[id] = count;
        if (typeof callback === 'function') callback(count);
      });
    } catch (e) {
      if (typeof callback === 'function') callback(getLikeCount(id));
    }
  }

  function decrementFirebaseLike(id, callback) {
    if (!FIREBASE_CONFIG || !window.firebase) {
      if (typeof callback === 'function') callback(0);
      return;
    }
    try {
      var db = window.firebase.database();
      var ref = db.ref('likes/' + id);
      ref.transaction(function (n) { return Math.max((n || 0) - 1, 0); }, function (err, committed, snap) {
        var count = (snap && snap.val()) || 0;
        globalLikes[id] = count;
        if (typeof callback === 'function') callback(count);
      });
    } catch (e) {
      if (typeof callback === 'function') callback(getLikeCount(id));
    }
  }

  function toggleLike(id) {
    var liked = getLikedList();
    var idx = liked.indexOf(id);
    var nowLiked;
    if (idx === -1) {
      liked.push(id);
      nowLiked = true;
      if (FIREBASE_CONFIG && window.firebase) {
        incrementFirebaseLike(id, function (count) { syncLikeButtons(id, true, count); });
        globalLikes[id] = (globalLikes[id] || 0) + 1;
      } else {
        var local = {};
        try { local = JSON.parse(localStorage.getItem('mj-likes') || '{}'); } catch (e) {}
        local[id] = (local[id] || 0) + 1;
        globalLikes[id] = local[id];
        try { localStorage.setItem('mj-likes', JSON.stringify(local)); } catch (e) {}
      }
      try { localStorage.setItem(LIKED_KEY, JSON.stringify(liked)); } catch (e) {}
      return { liked: true, count: getLikeCount(id) };
    } else {
      liked.splice(idx, 1);
      nowLiked = false;
      if (FIREBASE_CONFIG && window.firebase) {
        decrementFirebaseLike(id, function (count) { syncLikeButtons(id, false, count); });
        globalLikes[id] = Math.max((globalLikes[id] || 0) - 1, 0);
      } else {
        var local = {};
        try { local = JSON.parse(localStorage.getItem('mj-likes') || '{}'); } catch (e) {}
        local[id] = Math.max((local[id] || 0) - 1, 0);
        globalLikes[id] = local[id];
        try { localStorage.setItem('mj-likes', JSON.stringify(local)); } catch (e) {}
      }
      try { localStorage.setItem(LIKED_KEY, JSON.stringify(liked)); } catch (e) {}
      return { liked: false, count: getLikeCount(id) };
    }
  }

  function syncLikeButtons(id, liked, count) {
    var selectors = '.like-btn[data-id="' + id + '"], .modal-like[data-id="' + id + '"]';
    document.querySelectorAll(selectors).forEach(function (btn) {
      btn.classList.toggle('liked', liked);
      var c = btn.querySelector('.like-count');
      if (c) c.textContent = count > 0 ? count : '';
    });
  }

  // ===== Recommendations (implicit tags + tag-based similarity) =====
  var tagKeywords = {
    cat: ['cat', 'kitten', 'feline', '猫', '喵'],
    dog: ['dog', 'puppy', '犬', '狗'],
    fantasy: ['fantasy', 'fairy', 'dream', '仙', '梦'],
    portrait: ['portrait', 'girl', 'boy', 'woman', 'man', '姐姐', '少女', '少年', '人物'],
    urban: ['city', 'street', 'shanghai', 'urban', '上海', '街头'],
    nature: ['mountain', 'flower', 'lotus', 'rain', 'snow', 'forest', 'field', '山', '花', '雨', '雪', '麦田', '莲'],
    gothic: ['gothic', 'dark', 'noir', '哥特'],
    anime: ['anime', 'niji', 'miyazaki', 'pixar', 'animation', '动画', '宫崎'],
    chinese: ['chinese', 'dragon', 'ink', '水墨', '中国', '龙', '旗袍', '中式'],
    cute: ['cute', 'chibi', 'fluffy', '可爱', '萌'],
    cinematic: ['cinematic', 'movie', 'film', '电影', '镜头'],
    minimal: ['minimalist', 'minimal', 'simple', '极简', '简约'],
    photo: ['photo', 'photography', 'documentary', 'nikon', 'kodak', '摄影', '写真'],
    painting: ['painting', 'watercolor', 'oil', 'canvas', '画', '水彩', '油画'],
    animal: ['rabbit', 'swan', 'tiger', 'elephant', 'parrot', 'zebra', 'pig', '兔', '天鹅', '虎', '象', '鹦鹉', '斑马', '猪'],
    wedding: ['wedding', 'marry', '婚礼', '婚纱'],
    child: ['child', 'kids', 'baby', '小孩', '儿童', '宝宝'],
  };
  var _tagCache = {};

  function getArtworkTags(id) {
    if (_tagCache[id]) return _tagCache[id];
    var art = artworks.find(function (a) { return a.id === id; });
    if (!art) return [];
    var tags = {};
    var prompt = (art.prompt || '').toLowerCase();

    Object.keys(tagKeywords).forEach(function (k) {
      var keys = tagKeywords[k];
      if (keys.some(function (kw) { return prompt.indexOf(kw) !== -1; })) tags[k] = true;
    });

    Object.keys(art.params || {}).forEach(function (k) {
      var val = String(art.params[k] || '').toLowerCase();
      if (val) tags[k + ':' + val] = true;
    });
    if (art.params && art.params.style) {
      var style = String(art.params.style).toLowerCase();
      if (style) tags['style:' + style.replace(/\s*[·\-]\s*/g, '_')] = true;
    }
    if (art.params && art.params.aspect) {
      var ar = (art.params.aspect || '').toString();
      if (ar.indexOf('16:9') !== -1 || ar.indexOf('2:1') !== -1) tags['aspect:landscape'] = true;
      else if (ar.indexOf('9:16') !== -1 || ar.indexOf('3:4') !== -1 || ar.indexOf('5:6') !== -1) tags['aspect:portrait'] = true;
    }
    tags['article:' + art.articleId] = true;
    if (art.images && art.images.length > 1) tags.series = true;

    var arr = Object.keys(tags);
    _tagCache[id] = arr;
    return arr;
  }

  function getRecommendations(currentId, count) {
    var n = count || 4;
    var forceId = (currentId === 136 ? 99 : currentId === 99 ? 136 : null);
    var currentArt = artworks.find(function (x) { return x.id === currentId; });
    var currentArticleId = currentArt ? currentArt.articleId : null;
    var base = getArtworkTags(currentId);
    var baseSet = {};
    base.forEach(function (t) { baseSet[t] = true; });

    var scored = base.length
      ? artworks.filter(function (a) { return a.id !== currentId; }).map(function (a) {
          var tags = getArtworkTags(a.id);
          if (!tags.length) return { id: a.id, score: 0 };
          var inter = 0;
          tags.forEach(function (t) { if (baseSet[t]) inter++; });
          var union = Object.keys(baseSet).length;
          tags.forEach(function (t) { if (!baseSet[t]) union++; });
          var score = union ? (inter / union) : 0;
          if (currentArticleId && a.articleId === currentArticleId) score += 0.02;
          return { id: a.id, score: score };
        }).filter(function (x) { return x.score > 0; })
      : [];

    scored.sort(function (a, b) { return b.score - a.score; });
    var recIds = scored.slice(0, n).map(function (x) { return x.id; });
    if (forceId) {
      recIds = [forceId].concat(recIds.filter(function (id) { return id !== forceId; })).slice(0, n);
    }
    if (recIds.length < n && currentArt) {
      var fallback = artworks.filter(function (a) { return a.id !== currentId && recIds.indexOf(a.id) === -1; });
      if (currentArticleId != null) {
        var sameArticle = fallback.filter(function (a) { return a.articleId === currentArticleId; });
        sameArticle.sort(function (a, b) { return Math.abs(a.order - currentArt.order) - Math.abs(b.order - currentArt.order); });
        fallback = sameArticle.concat(fallback.filter(function (a) { return a.articleId !== currentArticleId; }));
      }
      fallback.sort(function (a, b) { return Math.abs(a.order - currentArt.order) - Math.abs(b.order - currentArt.order); });
      for (var i = 0; i < fallback.length && recIds.length < n; i++) recIds.push(fallback[i].id);
    }
    return recIds;
  }

  function showRecommendations(currentId) {
    var holder = modal.querySelector('#recommend-inline');
    if (!holder) return;
    var recIds = getRecommendations(currentId, 4);
    if (!recIds.length) {
      holder.innerHTML = '';
      return;
    }
    var label = lang === 'zh' ? '你可能还会喜欢' : 'You might also like';
    holder.innerHTML = '<span class="recommend-title">' + label + '</span>' +
      recIds.map(function (id) {
        var art = artworks.find(function (a) { return a.id === id; });
        if (!art) return '';
        return '<button type="button" class="rec-thumb" data-id="' + id + '" title="' + (i18n[lang].titles[id] || '') + '">' +
          '<img src="' + getThumb(art.image) + '" alt="">' +
          '</button>';
      }).join('');
    holder.querySelectorAll('.rec-thumb').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        openModal(parseInt(this.dataset.id, 10));
      });
    });
  }

  // ===== Share Config =====
  var SHARE_SVG = '<svg viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>';

  var sharePlatforms = {
    en: [
      { name: 'Facebook', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>', url: function(u,t){ return 'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(u); } },
      { name: 'X', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>', url: function(u,t){ return 'https://twitter.com/intent/tweet?url='+encodeURIComponent(u)+'&text='+encodeURIComponent(t); } },
      { name: 'Pinterest', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/></svg>', url: function(u,t){ return 'https://pinterest.com/pin/create/button/?url='+encodeURIComponent(u)+'&description='+encodeURIComponent(t); } },
      { name: 'Tumblr', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.168z"/></svg>', url: function(u,t){ return 'https://www.tumblr.com/widgets/share/tool?canonicalUrl='+encodeURIComponent(u)+'&title='+encodeURIComponent(t); } },
      { name: 'Email', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>', url: function(u,t){ return 'mailto:?subject='+encodeURIComponent(t)+'&body='+encodeURIComponent(u); } },
    ],
    zh: [
      { name: '微博', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02c-.259-2.609 2.759-5.047 6.74-5.441c3.979-.394 7.413 1.404 7.671 4.018c.259 2.6-2.759 5.049-6.737 5.439zM9.05 17.219c-.384.616-1.208.884-1.829.602c-.612-.279-.793-.991-.406-1.593c.379-.595 1.176-.861 1.793-.601c.622.263.82.972.442 1.592m1.27-1.627c-.141.237-.449.353-.689.253c-.236-.09-.313-.361-.177-.586c.138-.227.436-.346.672-.24c.239.09.315.36.18.601zm.176-2.719c-1.893-.493-4.033.45-4.857 2.118c-.836 1.704-.026 3.591 1.886 4.21c1.983.64 4.318-.341 5.132-2.179c.8-1.793-.201-3.642-2.161-4.149m7.563-1.224c-.346-.105-.57-.18-.405-.615c.375-.977.42-1.804 0-2.404c-.781-1.112-2.915-1.053-5.364-.03c0 0-.766.331-.571-.271c.376-1.217.315-2.224-.27-2.809c-1.338-1.337-4.869.045-7.888 3.08C1.309 10.87 0 13.273 0 15.348c0 3.981 5.099 6.395 10.086 6.395c6.536 0 10.888-3.801 10.888-6.82c0-1.822-1.547-2.854-2.915-3.284zm1.908-5.092a3.1 3.1 0 0 0-2.96-.962a.786.786 0 0 0-.616.932a.79.79 0 0 0 .932.602a1.51 1.51 0 0 1 1.442.465c.376.421.466.977.316 1.473a.786.786 0 0 0 .51.992a.813.813 0 0 0 .992-.512a3.11 3.11 0 0 0-.646-3.035zm2.418-2.195c-1.576-1.757-3.905-2.419-6.054-1.968a.91.91 0 0 0-.706 1.081a.91.91 0 0 0 1.082.707a4.5 4.5 0 0 1 4.296 1.383a4.53 4.53 0 0 1 .947 4.416a.91.91 0 0 0 .586 1.157c.479.165.991-.104 1.157-.586a6.39 6.39 0 0 0-1.338-6.235z"/></svg>', url: function(u,t){ return 'https://service.weibo.com/share/share.php?url='+encodeURIComponent(u)+'&title='+encodeURIComponent(t); } },
      { name: '微信', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213c0 .163.13.295.29.295a.33.33 0 0 0 .167-.054l1.903-1.114a.86.86 0 0 1 .717-.098a10.2 10.2 0 0 0 2.837.403c.276 0 .543-.027.811-.05c-.857-2.578.157-4.972 1.932-6.446c1.703-1.415 3.882-1.98 5.853-1.838c-.576-3.583-4.196-6.348-8.596-6.348M5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178a1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18m5.34 2.867c-1.797-.052-3.746.512-5.28 1.786c-1.72 1.428-2.687 3.72-1.78 6.22c.942 2.453 3.666 4.229 6.884 4.229c.826 0 1.622-.12 2.361-.336a.72.72 0 0 1 .598.082l1.584.926a.3.3 0 0 0 .14.047c.134 0 .24-.111.24-.247c0-.06-.023-.12-.038-.177l-.327-1.233a.6.6 0 0 1-.023-.156a.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983a.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983a.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982"/></svg>', url: function(u,t){ return null; } },
      { name: '小红书', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.405 9.879c.002.016.01.02.07.019h.725a.797.797 0 0 0 .78-.972a.794.794 0 0 0-.884-.618a.795.795 0 0 0-.692.794c0 .101-.002.666.001.777m-11.509 4.808c-.203.001-1.353.004-1.685.003a2.5 2.5 0 0 1-.766-.126a.025.025 0 0 0-.03.014L7.7 16.127a.025.025 0 0 0 .01.032c.111.06.336.124.495.124c.66.01 1.32.002 1.981 0q.017 0 .023-.015l.712-1.545a.025.025 0 0 0-.024-.036zM.477 9.91c-.071 0-.076.002-.076.01l-.01.08c-.027.397-.038.495-.234 3.06c-.012.24-.034.389-.135.607c-.026.057-.033.042.003.112c.046.092.681 1.523.787 1.74c.008.015.011.02.017.02c.008 0 .033-.026.047-.044q.219-.282.371-.606c.306-.635.44-1.325.486-1.706c.014-.11.021-.22.03-.33l.204-2.616l.022-.293c.003-.029 0-.033-.03-.034zm7.203 3.757a1.4 1.4 0 0 1-.135-.607c-.004-.084-.031-.39-.235-3.06a.4.4 0 0 0-.01-.082c-.004-.011-.052-.008-.076-.008h-1.48c-.03.001-.034.005-.03.034l.021.293q.114 1.473.233 2.946c.05.4.186 1.085.487 1.706c.103.215.223.419.37.606c.015.018.037.051.048.049c.02-.003.742-1.642.804-1.765c.036-.07.03-.055.003-.112m3.861-.913h-.872a.126.126 0 0 1-.116-.178l1.178-2.625a.025.025 0 0 0-.023-.035l-1.318-.003a.148.148 0 0 1-.135-.21l.876-1.954a.025.025 0 0 0-.023-.035h-1.56q-.017 0-.024.015l-.926 2.068c-.085.169-.314.634-.399.938a.5.5 0 0 0-.02.191a.46.46 0 0 0 .23.378a1 1 0 0 0 .46.119h.59c.041 0-.688 1.482-.834 1.972a.5.5 0 0 0-.023.172a.47.47 0 0 0 .23.398c.15.092.342.12.475.12l1.66-.001q.017 0 .023-.015l.575-1.28a.025.025 0 0 0-.024-.035m-6.93-4.937H3.1a.032.032 0 0 0-.034.033c0 1.048-.01 2.795-.01 6.829c0 .288-.269.262-.28.262h-.74c-.04.001-.044.004-.04.047c.001.037.465 1.064.555 1.263c.01.02.03.033.051.033c.157.003.767.009.938-.014c.153-.02.3-.06.438-.132c.3-.156.49-.419.595-.765c.052-.172.075-.353.075-.533q.003-3.495-.007-6.991a.03.03 0 0 0-.032-.032zm11.784 6.896q-.002-.02-.024-.022h-1.465c-.048-.001-.049-.002-.05-.049v-4.66c0-.072-.005-.07.07-.07h.863c.08 0 .075.004.075-.074V8.393c0-.082.006-.076-.08-.076h-3.5c-.064 0-.075-.006-.075.073v1.445c0 .083-.006.077.08.077h.854c.075 0 .07-.004.07.07v4.624c0 .095.008.084-.085.084c-.37 0-1.11-.002-1.304 0c-.048.001-.06.03-.06.03l-.697 1.519s-.014.025-.008.036s.013.008.058.008q2.622.003 5.243.002c.03-.001.034-.006.035-.033zm4.177-3.43q0 .021-.02.024c-.346.006-.692.004-1.037.004q-.021-.003-.022-.024q-.006-.651-.01-1.303c0-.072-.006-.071.07-.07l.733-.003c.041 0 .081.002.12.015c.093.025.16.107.165.204c.006.431.002 1.153.001 1.153m2.67.244a1.95 1.95 0 0 0-.883-.222h-.18c-.04-.001-.04-.003-.042-.04V10.21q.001-.198-.025-.394a1.8 1.8 0 0 0-.153-.53a1.53 1.53 0 0 0-.677-.71a2.2 2.2 0 0 0-1-.258c-.153-.003-.567 0-.72 0c-.07 0-.068.004-.068-.065V7.76c0-.031-.01-.041-.046-.039H17.93s-.016 0-.023.007q-.008.008-.008.023v.546c-.008.036-.057.015-.082.022h-.95c-.022.002-.028.008-.03.032v1.481c0 .09-.004.082.082.082h.913c.082 0 .072.128.072.128v1.148s.003.117-.06.117h-1.482c-.068 0-.06.082-.06.082v1.445s-.01.068.064.068h1.457c.082 0 .076-.006.076.079v3.225c0 .088-.007.081.082.081h1.43c.09 0 .082.007.082-.08v-3.27c0-.029.006-.035.033-.035l2.323-.003a.7.7 0 0 1 .28.061a.46.46 0 0 1 .274.407c.008.395.003.79.003 1.185c0 .259-.107.367-.33.367h-1.218c-.023.002-.029.008-.028.033q.276.655.57 1.303a.05.05 0 0 0 .04.026c.17.005.34.002.51.003c.15-.002.517.004.666-.01a2 2 0 0 0 .408-.075c.59-.18.975-.698.976-1.313v-1.981q.001-.191-.034-.38c0 .078-.029-.641-.724-.998"/></svg>', url: function(u,t){ return null; } },
      { name: 'QQ', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.395 15.035a40 40 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a39 39 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673c.54.065 2.103-2.472 2.103-2.472c0 1.469.756 3.387 2.394 4.771c-.612.188-1.363.479-1.845.835c-.434.32-.379.646-.301.778c.343.578 5.883.369 7.482.189c1.6.18 7.14.389 7.483-.189c.078-.132.132-.458-.301-.778c-.483-.356-1.233-.646-1.846-.836c1.637-1.384 2.393-3.302 2.393-4.771c0 0 1.563 2.537 2.103 2.472c.251-.03.581-1.39-.438-4.673"/></svg>', url: function(u,t){ return 'https://connect.qq.com/widget/shareqq/index.html?url='+encodeURIComponent(u)+'&title='+encodeURIComponent(t); } },
      { name: '邮件', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>', url: function(u,t){ return 'mailto:?subject='+encodeURIComponent(t)+'&body='+encodeURIComponent(u); } },
    ],
  };

  // ===== State =====
  var lang = localStorage.getItem('mj-lang') || 'en';
  var sortMode = 'curated';

  // ===== DOM =====
  var galleryEl = document.getElementById('gallery');
  var overlay = document.getElementById('modal-overlay');
  var modal = overlay.querySelector('.modal');
  var closeBtn = overlay.querySelector('.modal-close');
  var closeBtnHideTimeout = null;
  var headerTitle = document.getElementById('header-title');
  var headerSub = document.getElementById('header-sub');
  var headerEpigraph = document.getElementById('header-epigraph');
  var backLink = document.getElementById('back-link');
  var footerText = document.getElementById('footer-text');
  var btnEn = document.getElementById('btn-en');
  var btnZh = document.getElementById('btn-zh');
  var sortBar = document.getElementById('sort-bar');

  // ===== Language =====
  function setLang(l) {
    lang = l;
    localStorage.setItem('mj-lang', l);
    btnEn.classList.toggle('active', l === 'en');
    btnZh.classList.toggle('active', l === 'zh');
    var t = i18n[l];
    headerTitle.textContent = t.title;
    headerSub.textContent = t.subtitle;
    headerEpigraph.textContent = t.epigraph;
    backLink.querySelector('.back-text').textContent = t.back;
    footerText.textContent = t.footer;
    buildSortBar();
    renderGallery();
  }

  btnEn.addEventListener('click', function () { setLang('en'); });
  btnZh.addEventListener('click', function () { setLang('zh'); });

  // ===== Theme =====
  var themeBtn = document.getElementById('theme-toggle');
  var savedTheme = localStorage.getItem('mj-theme') || 'light';

  function applyTheme(theme) {
    savedTheme = theme;
    localStorage.setItem('mj-theme', theme);
    document.body.classList.toggle('light', theme === 'light');
  }

  themeBtn.addEventListener('click', function () {
    applyTheme(savedTheme === 'dark' ? 'light' : 'dark');
  });

  applyTheme(savedTheme);

  // ===== Sort =====
  function buildSortBar() {
    var t = i18n[lang];
    var modes = ['curated', 'newest', 'liked'];
    sortBar.innerHTML = modes.map(function (m) {
      return '<button class="sort-btn' + (m === sortMode ? ' active' : '') +
        '" data-sort="' + m + '">' + t.sortOptions[m] + '</button>';
    }).join('');
    sortBar.querySelectorAll('.sort-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        sortMode = this.dataset.sort;
        buildSortBar();
        renderGallery();
      });
    });
  }

  var _galleryCols = getGalleryColumns();
  window.addEventListener('resize', function () {
    var cols = getGalleryColumns();
    if (cols !== _galleryCols) {
      _galleryCols = cols;
      renderGallery();
    }
  });

  function getSorted() {
    var arr = artworks.slice();
    if (sortMode === 'curated') {
      // 混合算法：以手动 order 为主，同 order 时按点赞数降序，再按日期稳定
      arr.sort(function (a, b) {
        if (a.order !== b.order) return a.order - b.order;
        var likesA = getLikeCount(a.id), likesB = getLikeCount(b.id);
        if (likesA !== likesB) return likesB - likesA;
        return (b.date || '').localeCompare(a.date || '') || a.id - b.id;
      });
    } else if (sortMode === 'newest') {
      arr.sort(function (a, b) { return b.date.localeCompare(a.date) || b.id - a.id; });
    } else if (sortMode === 'liked') {
      arr.sort(function (a, b) { return getLikeCount(b.id) - getLikeCount(a.id) || a.order - b.order; });
    }
    return arr;
  }

  // ===== Card Sizing (by implicit tags / prompt) =====
  var _sizePromoteTags = ['cinematic', 'dark', 'portrait', 'nature', 'fantasy', 'urban', 'photograph', 'photo'];
  var _sizeDemoteTags = ['cute', 'bw', 'anime', 'vector', 'icon', 'sketch'];

  function getCardSize(id) {
    var art = artworks.find(function (a) { return a.id === id; });
    if (!art) return 'md';
    var p = (art.prompt || '').toLowerCase();
    var promote = _sizePromoteTags.some(function (tag) { return p.indexOf(tag) !== -1; });
    var demote = _sizeDemoteTags.some(function (tag) { return p.indexOf(tag) !== -1; });
    if (promote && !demote && p.length > 80) return 'lg';
    if (demote && p.length < 120) return 'sm';
    return 'md';
  }

  /** 用于列平衡：卡片预估高度权重，越小越短 */
  function getCardHeightWeight(id) {
    var size = getCardSize(id);
    var art = artworks.find(function (a) { return a.id === id; });
    var isMulti = art && art.images && art.images.length > 1;
    if (size === 'sm') return 0.7;
    if (size === 'lg') return 1.5;
    return isMulti ? 1.2 : 1;
  }

  function getGalleryColumns() {
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 520px)').matches) return 1;
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches) return 2;
    return 3;
  }

  /** 由原图路径得到缩略图路径：static/assets/midjourney/foo.png -> .../midjourney/thumbs/foo.png */
  function getThumb(fullSrc) {
    if (!fullSrc || fullSrc.indexOf('midjourney/') === -1) return fullSrc;
    return fullSrc.replace('midjourney/', 'midjourney/thumbs/');
  }

  function renderGallery() {
    var sorted = getSorted();
    var cols = getGalleryColumns();
    var t = i18n[lang];
    function cardHtml(art) {
      var liked = isLiked(art.id);
      var count = getLikeCount(art.id);
      var size = getCardSize(art.id);
      var isMulti = art.images && art.images.length > 1;
      var imgs = isMulti ? art.images : [art.image];
      var cls = 'card card-' + size + (isMulti ? ' card-multi' : '');
      var imgWrapHtml;
      if (isMulti) {
        imgWrapHtml = '<div class="card-img-wrap card-multi-wrap">' +
          imgs.map(function (src) { return '<img src="' + getThumb(src) + '" data-full="' + src + '" alt="" loading="lazy">'; }).join('') +
          '</div>';
      } else {
        imgWrapHtml = '<div class="card-img-wrap"><img src="' + getThumb(art.image) + '" data-full="' + art.image + '" alt="" loading="lazy"></div>';
      }
      return '<div class="' + cls + '" data-id="' + art.id + '">' +
        imgWrapHtml +
        '<div class="card-overlay">' +
          '<span class="card-title-text">' + (t.titles[art.id] || '') + (isMulti ? ' <span class="card-multi-badge">' + imgs.length + '</span>' : '') + '</span>' +
          '<div style="display:flex;gap:10px;align-items:center">' +
            '<button class="share-btn" data-id="' + art.id + '">' + SHARE_SVG + '</button>' +
            '<button class="like-btn' + (liked ? ' liked' : '') + '" data-id="' + art.id + '">' +
              '<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
              '<span class="like-count">' + (count > 0 ? count : '') + '</span>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    }
    var colHtml = [];
    var colHeights = [];
    for (var c = 0; c < cols; c++) { colHtml[c] = []; colHeights[c] = 0; }
    sorted.forEach(function (art) {
      var c = 0;
      for (var i = 1; i < cols; i++) { if (colHeights[i] < colHeights[c]) c = i; }
      colHtml[c].push(cardHtml(art));
      colHeights[c] += getCardHeightWeight(art.id);
    });
    galleryEl.innerHTML = colHtml.map(function (arr) {
      return '<div class="gallery-col">' + arr.join('') + '</div>';
    }).join('');

    galleryEl.querySelectorAll('img[data-full]').forEach(function (img) {
      img.addEventListener('error', function () { this.src = this.getAttribute('data-full') || this.src; });
    });

    galleryEl.querySelectorAll('.card').forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.closest('.like-btn') || e.target.closest('.share-btn')) return;
        openModal(parseInt(this.dataset.id));
      });
    });

    galleryEl.querySelectorAll('.share-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var id = parseInt(this.dataset.id);
        var t = i18n[lang];
        var title = t.titles[id] || 'Midjourney Artwork';
        openSharePopup(title);
      });
    });

    galleryEl.querySelectorAll('.like-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var id = parseInt(this.dataset.id);
        var result = toggleLike(id);
        syncLikeButtons(id, result.liked, result.count);
        this.classList.add('pop');
        var self = this;
        setTimeout(function () { self.classList.remove('pop'); }, 600);
      });
    });
  }

  // ===== Modal =====
  function openModal(id) {
    var art = artworks.find(function (a) { return a.id === id; });
    if (!art) return;
    var t = i18n[lang];
    var title = t.titles[id] || '';
    var desc = t.descriptions[id] || '';
    var liked = isLiked(id);
    var count = getLikeCount(id);

    var paramsHtml = '<div class="params-row">';
    Object.keys(art.params).forEach(function (key) {
      paramsHtml +=
        '<div class="param-item">' +
        '<span class="param-key">' + key + '</span>' +
        '<span class="param-val">' + art.params[key] + '</span>' +
        '</div>';
    });
    paramsHtml += '</div>';

    var articleHtml = '';
    var article = articles[art.articleId];
    if (article) {
      var articleTitle = article.title[lang] || article.title.zh;
      articleHtml =
        '<a class="article-card" href="' + article.url + '" target="_blank" rel="noopener noreferrer">' +
          '<div class="article-card-icon">' +
            '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213c0 .163.13.295.29.295a.33.33 0 0 0 .167-.054l1.903-1.114a.86.86 0 0 1 .717-.098a10.2 10.2 0 0 0 2.837.403c.276 0 .543-.027.811-.05c-.857-2.578.157-4.972 1.932-6.446c1.703-1.415 3.882-1.98 5.853-1.838c-.576-3.583-4.196-6.348-8.596-6.348M5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178a1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18m5.34 2.867c-1.797-.052-3.746.512-5.28 1.786c-1.72 1.428-2.687 3.72-1.78 6.22c.942 2.453 3.666 4.229 6.884 4.229c.826 0 1.622-.12 2.361-.336a.72.72 0 0 1 .598.082l1.584.926a.3.3 0 0 0 .14.047c.134 0 .24-.111.24-.247c0-.06-.023-.12-.038-.177l-.327-1.233a.6.6 0 0 1-.023-.156a.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983a.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983a.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982"/></svg>' +
          '</div>' +
          '<div class="article-card-body">' +
            '<span class="article-card-label">' + t.publishedIn + '</span>' +
            '<span class="article-card-title">《' + articleTitle + '》</span>' +
            '<span class="article-card-account">' + article.account + '</span>' +
          '</div>' +
          '<div class="article-card-arrow">' +
            '<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>' +
          '</div>' +
        '</a>';
    }

    var imageBlock;
    if (art.images && art.images.length > 1) {
      var n = art.images.length;
      imageBlock = '<div class="modal-carousel">' +
        '<div class="modal-carousel-stage">' +
          '<div class="modal-carousel-track" style="width:' + (n * 100) + '%">' +
            art.images.map(function (src) { return '<img class="modal-image modal-carousel-img" src="' + src + '" alt="" style="flex:0 0 ' + (100 / n) + '%">'; }).join('') +
          '</div>' +
        '</div>' +
        '<button type="button" class="modal-carousel-prev" aria-label="Previous"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>' +
        '<button type="button" class="modal-carousel-next" aria-label="Next"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></button>' +
        '<div class="modal-carousel-dots">' +
          art.images.map(function (_, i) { return '<button type="button" class="modal-carousel-dot' + (i === 0 ? ' active' : '') + '" data-idx="' + i + '"></button>'; }).join('') +
        '</div>' +
      '</div>';
    } else {
      imageBlock = '<img class="modal-image" src="' + art.image + '" alt="">';
    }
    var modalInner = modal.querySelector('.modal-inner');
    if (modalInner) modalInner.innerHTML =
      imageBlock +
      '<div class="modal-content">' +
        '<div class="modal-header">' +
          '<div><h2 class="modal-title">' + title + '</h2>' +
          '<span class="modal-date">' + art.date + '</span></div>' +
          '<div class="modal-actions">' +
            '<button class="share-btn modal-share" data-id="' + id + '">' + SHARE_SVG + '</button>' +
            '<button class="like-btn modal-like' + (liked ? ' liked' : '') + '" data-id="' + id + '">' +
              '<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
              '<span class="like-count">' + (count > 0 ? count : '') + '</span>' +
            '</button>' +
            '<div id="recommend-inline" class="recommend-inline"></div>' +
          '</div>' +
        '</div>' +
        '<div class="modal-divider"></div>' +
        '<p class="modal-description">' + desc + '</p>' +
        '<div class="prompt-section">' +
          '<div class="prompt-label"><span>' + t.prompt + '</span>' +
          '<button class="copy-btn" id="copy-prompt">' + t.copy + '</button></div>' +
          '<div class="prompt-text">' + escapeHtml(art.prompt) + '</div>' +
        '</div>' +
        paramsHtml +
        articleHtml +
      '</div>';

    if (art.images && art.images.length > 1) {
      var track = modal.querySelector('.modal-carousel-track');
      var dots = modal.querySelectorAll('.modal-carousel-dot');
      var numImgs = art.images.length;
      var currentIdx = 0;
      function goTo(i) {
        currentIdx = (i + numImgs) % numImgs;
        track.style.transform = 'translateX(-' + (currentIdx * (100 / numImgs)) + '%)';
        dots.forEach(function (d, j) { d.classList.toggle('active', j === currentIdx); });
      }
      modal.querySelector('.modal-carousel-prev').addEventListener('click', function (e) { e.stopPropagation(); goTo(currentIdx - 1); });
      modal.querySelector('.modal-carousel-next').addEventListener('click', function (e) { e.stopPropagation(); goTo(currentIdx + 1); });
      dots.forEach(function (d) { d.addEventListener('click', function (e) { e.stopPropagation(); goTo(parseInt(this.dataset.idx, 10)); }); });
    }

    // Copy
    var copyBtn = modal.querySelector('#copy-prompt');
    copyBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      navigator.clipboard.writeText(art.prompt).then(function () {
        copyBtn.textContent = t.copied;
        copyBtn.classList.add('copied');
        setTimeout(function () { copyBtn.textContent = t.copy; copyBtn.classList.remove('copied'); }, 1500);
      });
    });

    // Modal share
    var modalShareBtn = modal.querySelector('.modal-share');
    modalShareBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      openSharePopup(title);
      showRecommendations(id);
    });

    // Modal like
    var modalLike = modal.querySelector('.modal-like');
    modalLike.addEventListener('click', function (e) {
      e.stopPropagation();
      var result = toggleLike(id);
      syncLikeButtons(id, result.liked, result.count);
      if (result.liked) showRecommendations(id);
      this.classList.add('pop');
      var self = this;
      setTimeout(function () { self.classList.remove('pop'); }, 600);
    });

    showRecommendations(id);

    var scrollY = window.scrollY || window.pageYOffset;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    overlay.dataset.scrollY = scrollY;
    closeBtn.classList.remove('visible');
  }

  function closeModal() {
    if (closeBtnHideTimeout) { clearTimeout(closeBtnHideTimeout); closeBtnHideTimeout = null; }
    var scrollY = overlay.dataset.scrollY != null ? parseInt(overlay.dataset.scrollY, 10) : 0;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (scrollY >= 0) {
      requestAnimationFrame(function () { window.scrollTo(0, scrollY); });
    }
    delete overlay.dataset.scrollY;
    renderGallery();
  }

  function escapeHtml(str) {
    var d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });

  function onModalScroll() {
    if (!overlay.classList.contains('open')) return;
    closeBtn.classList.add('visible');
    if (closeBtnHideTimeout) clearTimeout(closeBtnHideTimeout);
    closeBtnHideTimeout = setTimeout(function () {
      closeBtn.classList.remove('visible');
      closeBtnHideTimeout = null;
    }, 1800);
  }
  overlay.addEventListener('scroll', onModalScroll, { passive: true });
  overlay.addEventListener('touchmove', onModalScroll, { passive: true });
  closeBtn.addEventListener('mouseenter', function () {
    if (closeBtnHideTimeout) { clearTimeout(closeBtnHideTimeout); closeBtnHideTimeout = null; }
    closeBtn.classList.add('visible');
  });
  closeBtn.addEventListener('mouseleave', function () {
    if (!overlay.classList.contains('open')) return;
    closeBtnHideTimeout = setTimeout(function () {
      closeBtn.classList.remove('visible');
      closeBtnHideTimeout = null;
    }, 1800);
  });

  // ===== Share Popup =====
  var shareOverlay = document.getElementById('share-overlay');
  var shareCloseBtn = document.getElementById('share-close');
  var shareIconsEl = document.getElementById('share-icons');
  var shareLinkInput = document.getElementById('share-link-input');
  var shareLinkCopy = document.getElementById('share-link-copy');

  function openSharePopup(title) {
    var pageUrl = window.location.href;
    var platforms = sharePlatforms[lang] || sharePlatforms.en;

    shareIconsEl.innerHTML = platforms.map(function (p) {
      return '<button class="share-icon-btn" data-name="' + p.name + '" title="' + p.name + '">' +
        p.icon + '</button>';
    }).join('');

    shareLinkInput.value = pageUrl;

    shareIconsEl.querySelectorAll('.share-icon-btn').forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        var p = platforms[i];
        var url = p.url(pageUrl, title);
        if (url) {
          window.open(url, '_blank', 'width=600,height=500');
        } else {
          navigator.clipboard.writeText(pageUrl);
          shareLinkCopy.classList.add('copied');
          shareLinkCopy.innerHTML = '<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';
          setTimeout(function () {
            shareLinkCopy.classList.remove('copied');
            shareLinkCopy.innerHTML = '<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
          }, 2000);
        }
      });
    });

    shareOverlay.classList.add('open');
  }

  function closeSharePopup() {
    shareOverlay.classList.remove('open');
  }

  shareCloseBtn.addEventListener('click', closeSharePopup);
  shareOverlay.addEventListener('click', function (e) {
    if (e.target === shareOverlay) closeSharePopup();
  });

  shareLinkCopy.addEventListener('click', function () {
    navigator.clipboard.writeText(shareLinkInput.value);
    this.classList.add('copied');
    this.innerHTML = '<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';
    var self = this;
    setTimeout(function () {
      self.classList.remove('copied');
      self.innerHTML = '<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
    }, 2000);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && shareOverlay.classList.contains('open')) closeSharePopup();
  });

  // ===== Init =====
  initFirebaseLikes(function () { setLang(lang); });
})();

