(function () {
  'use strict';

  // ===== i18n =====
  var i18n = {
    en: {
      title: 'Gallery',
      subtitle: 'AI-generated artworks with Midjourney',
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
        7: 'A variant of the night-blooming flowers — same ethereal cat silhouette rendered in glass, with subtle differences in composition. The cover piece for the second collection.',
        8: 'A boy and girl at a summer festival — she in a sunflower yukata, he in a white t-shirt, on a hill overlooking the village fair. Fireworks, silhouettes, and the luminous mystery of a summer night.',
        9: 'A boy jumping rope while watching a flying duck. Tenebrism style inspired by Caravaggio and Gentileschi — dark cyan and amber, chiaroscuro mastery meets joyful optimism.',
        10: 'Dong ErQian pushes open the window and raises the spyglass. His eye reflects thick smoke. The road ahead is closed and the way back lost — luminous portraits in photo-realistic hyperbole.',
        11: 'An aerial view of the athlete cat gliding through clouds — the cover piece for the third collection, reimagining the cloud-skiing scene from a bird\'s-eye perspective.',
        12: 'McCrispy Chicken rendered in food magazine photography style — professional color grading, soft shadows, and sharp focus elevate fast food into art.',
        13: 'Cats frolicking in a golden wheat field tall enough to hide them. Cinematic still shot with motion blur, early morning light, and a dreamy atmosphere.',
        14: 'An athlete cat skiing through a soft ocean of clouds, drawn in cute naive art style inspired by Japanese manga — whimsical and full of wonder.',
        15: 'A fairy bestowing good dreams upon a sleeping child. Rendered in Cinema4D style with influences from Ilya Kuvshinov, Thiago Valdi, and Skottie Young — soft edges and miniature illumination.',
        16: 'A person dwarfed by a massive orange cat sculpture — chrome reflections, pop art vibes, and Irving Penn-inspired composition. The cover piece for the fourth collection.',
        17: 'A dramatic collision between a light-coloured Buick and a semitrailer truck, rendered in unpredictable photo-realistic hyperbole. The truck tilts sharply mid-swerve, smashing the Buick\'s front.',
        18: 'The world reimagined as a giant euphonium — a single poetic prompt yielding a surreal, music-infused landscape.',
        19: 'A Maine Coon standing atop a tall wardrobe, shot in analog lo-fi style. Chinese room décor, sunlit afternoon light, desaturated tones, and soft focus create a nostalgic mood.',
        20: 'Carnation arrangements in two vases — pink-bordeaux and yellow-white — captured in ethereal minimalism. Shot on Fujifilm GFX 50R with Kodak Tri-X 400 film stock.',
        21: 'A Chinese girl sitting on door steps with her cute cat — illustrated in the warm, gentle style of Raymond Briggs. The cover piece for the fifth collection.',
        22: 'Tokyo skyline bathed in golden sky with epic colours. A tonalist, ethereally still composition in baby blue and gold — an award-winning photograph with no people.',
        23: 'A high school wind orchestra rehearsal room for 55 musicians — black collapsible chairs, music stands, instruments waiting to be played. Grey carpets and sunlight filtering through heavy curtains.',
        24: 'A cat rendered in expressionist Bromoil print — ablaze colors colliding across watercolor, oil painting, and pastel textures. Abstract art meets hyper-realism.',
        25: 'Another variant of the girl and cat on door steps — same Raymond Briggs-inspired prompt, with subtle compositional differences.',
        26: 'A variant of the dream fairy — same Cinema4D style with Kuvshinov, Valdi, and Young influences. The cover piece for the sixth collection.',
        27: 'An innocent little girl slouching over her desk, grading homework on an iPad, with a cat sleeping lazily on the carpet. Vector flat icon style with bold lines and vibrant colors.',
        28: 'A folded white Japanese sailor uniform resting on a wooden desk with light blue accessories — anime-style classroom scene with soft natural light and tachisme influences.',
        29: 'Multiple views of a cat holding a ball of string — full body, foreshortening perspective, rendered as a pencil sketch.',
        30: 'Two anthropomorphic Chinese cats worshiping the Kitchen God and eating sesame-sprinkled maltose strips — Pixar-style 3D, festive Spring Festival atmosphere in red.',
        31: 'Tiny little people trying not to get stepped on at a cat\'s feet — ultra-realistic, high detail. A variant used as the cover for the seventh collection.',
        32: 'Post-apocalyptic Nanjing where trees and vegetation have reoccupied human-built streets. Shot in Ricoh FF-9D style with cubist shattered planes and structured chaos.',
        33: 'The world reimagined as a giant euphonium — another variant of this poetic prompt, yielding a different surreal composition.',
        34: 'Tiny people scrambling beneath a giant cat\'s paws — the same ultra-realistic prompt as the cover, with different compositional choices.',
        35: 'A man in a black trench coat stands in a sandy grassy field, gun in hand, aiming at a battered boy on a distant leafless tree. Cinematic detail shot with contour lighting.',
        36: 'A cat wearing a crash helmet in near-darkness — Wong Kar Wai and Michael Eastman style, chinapunk elegance. The cover piece for the eighth collection.',
        37: 'Lotus flowers captured in ethereal lighting with graceful balance. Shot on Fujifilm GFX 50R with Kodak Tri-X 400 film stock.',
        38: 'A Chinese bald old man dancing in a nightclub — cinematic Wes Anderson symmetry with Hasselblad film grain.',
        39: 'A Chinese baby in mother\'s arms, looking fearfully at a syringe in the doctor\'s hand. Intimate portrait photography.',
        40: 'A cat in a construction site helmet, shrouded in darkness — Wong Kar Wai style with chinapunk aesthetics, low-key illumination and exquisite details.',
        41: 'A cat in a stock exchange with green-lit negative trends — the cover piece for the ninth collection, a variant of the same prompt.',
        42: 'A Chinese woman crying while eating stir-fried pork with cauliflower in near-darkness — Wong Kar Wai and Michael Eastman\'s chinapunk elegance.',
        43: 'Under-exposure portrait of a Chinese young girl walking along a river, luminous and dreamlike in widescreen.',
        44: 'A cat in coloring book style — black and white vector lines with detailed botanical background. Adult coloring book aesthetics.',
        45: 'Same cat-and-stock-exchange prompt — green-lit negative trends, a different compositional variant.',
        46: 'The most minimal prompt possible: "a cat." — and Midjourney delivers. A variant used as the cover for the tenth collection.',
        47: 'A cat wearing a helmet in near-darkness — another Wong Kar Wai chinapunk piece, this time with a generic helmet instead of a specific type.',
        48: 'Just "a cat." — the ultimate minimalist prompt. Midjourney\'s own interpretation of feline majesty, unguided by style or composition cues.',
        49: 'A very strong cat rendered in Chinese brush painting — black and white ink style, close-up, raw power captured in traditional aesthetics.',
        50: 'A crowded and tense pre-war meeting of cats — cinematic lighting, black and white sketch in Dadaist style with high detail.',
        51: 'The same Chinese brush painting cat prompt — a cover variant showcasing ink-washed feline power in black and white.',
        52: 'A cheetah family basking in golden hour light against vast mountainous landscapes — the decisive moment of serenity and grandeur.',
        53: 'An elderly white cat with sage-like demeanor — long white hair, kind eyes full of vitality, seated in a chair before a Taoist temple, shot at 800mm.',
        54: 'A very strong cat in Chinese brush painting — black and white close-up, raw power captured in traditional ink wash aesthetics.',
        55: 'A cat rendered as a coloring book page — vector lines, detailed botanical background, black and white adult illustration style.',
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
      },
    },
    zh: {
      title: '画 廊',
      subtitle: 'Midjourney AI 艺术作品',
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
        5: '银渐层猫咪在柿子树间跳跃嬉戏——封面图，将猫咪肖像系列与柿子树场景巧妙衔接。',
        6: '夜色中绽放的花朵，汇聚成一只深邃之美的猫。暗金与浅白色调，激进的数字插画风格，柯达金色调加玻璃质感。',
        7: '夜之花的另一个变体——同样的玻璃质感猫咪剪影，构图微妙不同。第二期文章的封面。',
        8: '夏日祭的少年少女——她穿着向日葵浴衣，他穿白色T恤，站在俯瞰整个村庄集市的山丘上。烟花、剪影、夏夜的浪漫迷幻。',
        9: '跳绳的少年，目送一只飞翔的鸭子。明暗对比法风格，灵感源自卡拉瓦乔与真蒂莱斯基——深青与琥珀色，光影大师遇上乐观主义。',
        10: '大梦一场的董二千先生，推开窗户，举起望远镜，眼底映出一阵浓烟。前已无通路，后不见归途。——超写实夸张风格的发光肖像。',
        11: '运动员猫咪穿越云海的鸟瞰视角——第三期文章的封面，从高空俯瞰重新诠释了云间滑行的场景。',
        12: '麦麦脆汁鸡，以美食杂志摄影风格呈现——专业调色、柔和阴影、锐利对焦，将快餐升华为艺术。',
        13: '猫咪在金色麦田中嬉戏打闹，麦浪高得足以将它们藏起来。电影般的静态镜头，运动模糊，清晨光线，梦幻氛围。',
        14: '一只运动员猫咪在柔软的云海中滑行，可爱的稚拙艺术风格，灵感源自日式漫画——充满童趣与奇幻。',
        15: '仙子正在为孩子送去美梦。Cinema4D风格渲染，融合了Ilya Kuvshinov、Thiago Valdi和Skottie Young的画风——柔和边缘与微缩光照。',
        16: '一个人站在巨大的橙色猫咪雕塑旁——铬面反光、波普艺术气息、Irving Penn式构图。第四期文章的封面。',
        17: '一辆浅色别克与一辆半挂卡车的剧烈碰撞，以超写实夸张风格呈现。卡车急转弯几乎侧翻，将别克的前脸撞得粉碎。',
        18: '世界被重新想象为一把巨大的上低音号——一条简洁的诗意提示词，生成超现实的、充满音乐感的风景。',
        19: '一只缅因猫站在高大衣柜顶端面对镜头，以胶片lo-fi风格拍摄。中式房间装饰、午后阳光、去饱和色调与柔焦营造出怀旧氛围。',
        20: '两个花瓶中的康乃馨插花——粉色配波尔多红、黄色配白色——以空灵极简主义捕捉。使用富士GFX 50R搭配柯达Tri-X 400胶片拍摄。',
        21: '一个中国女孩和她可爱的猫咪坐在门阶上——以Raymond Briggs温暖柔和的画风呈现。第五期文章的封面。',
        22: '东京天际线沐浴在金色天空中，色彩壮丽。色调主义、空灵的静谧构图，婴儿蓝与金色交织——一张没有人物的获奖级摄影作品。',
        23: '容纳55人的高中管乐团排练室——黑色折叠椅、每个座位前的乐谱架、等待被演奏的乐器。灰色地毯与透过厚重窗帘缝隙洒入的微弱阳光。',
        24: '一只以表现主义溴油印画法呈现的猫——炽烈的色彩在水彩、油画和粉彩质感间碰撞。抽象艺术与超写实主义的交融。',
        25: '女孩与猫在门阶上的另一个变体——同样的Raymond Briggs风格提示词，构图上有微妙差异。',
        26: '梦仙子的另一个变体——同样的Cinema4D风格，融合Kuvshinov、Valdi和Young的画风。',
        27: '一个天真的小女孩趴在桌上用iPad批改作业，旁边一只猫懒洋洋地睡在地毯上。矢量扁平图标风格，粗线条与鲜艳色彩。',
        28: '一件叠好的白色日本水手服放在木桌上，旁边是浅蓝色配饰——动漫风格的教室场景，柔和的自然光与不定形主义的影响。',
        29: '一只抱着毛线球的猫的多角度视图——全身、透视缩短法，以铅笔素描风格呈现。',
        30: '两只拟人化的中国猫咪笑着祭灶神、吃裹满芝麻的长条麦芽糖——皮克斯风格3D，红色背景，浓浓的中国年节氛围。',
        31: '小小的人们在猫爪下拼命闪躲——超写实、高细节。',
        32: '后末日南京——树木与植被重新占据了曾经人类建造的街道与建筑。Ricoh FF-9D风格，立体主义碎裂面与结构性混沌。',
        33: '世界被重新想象为一把巨大的上低音号——这条诗意提示词的另一个变体，生成了不同的超现实构图。',
        34: '巨猫脚下仓皇奔逃的微缩人类——与封面相同的超写实提示词，构图有所不同。',
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
        46: '"a cat."',
        47: '一只戴头盔的猫在近乎全暗的环境中。',
        48: '"a cat."',
        49: '一只非常强壮的猫以中国水墨画风格呈现——黑白墨色，特写，传统美学中蕴含的原始力量。',
        50: '一场拥挤而紧张的猫咪战前会议——电影级打光，达达主义风格的黑白素描，高细节。',
        51: '同一中国水墨画猫咪提示词——封面变体，展现墨色渲染的猫之力量。',
        52: '猎豹大家族沐浴在黄金时刻的光芒中——壮阔山景前宁静与壮丽的决定性瞬间。',
        53: '一只年迈的白猫，智者风范——长白毛，慈祥的眼睛充满活力，坐在道观前的椅子上，800mm长焦拍摄。',
        54: '中国水墨画中的强壮猫咪——黑白特写，传统水墨美学中的原始力量。',
        55: '猫咪以涂色书风格呈现——矢量线条，精细植物背景，成人黑白插画风格。',
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
      prompt: 'nalog photography in lo-fi style, A Maine Coon stands on top of a tall wardrobe facing the camera, Chinese room decoration, sunlit window sill, close-up, afternoon, soft and diffused natural light, upward angle, overhead, desaturated tones, soft focus, simple composition, --ar 2:3 --style raw --v 6',
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
      prompt: 'a cat.',
      params: { version: 'V6' },
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
      prompt: 'a cat.',
      params: { version: 'V6' },
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
      prompt: 'Pre-war meeting of the cats, which was crowded and tense, Ciematic lighting, black and white sketch, Dadaism, high detail --ar 4:3 --v 6.0',
      params: { version: 'V6.0', aspect: '4:3', style: 'Dadaism · B&W Sketch' },
    },
    {
      id: 51,
      articleId: 11,
      order: 51,
      featured: true,
      image: 'static/assets/midjourney/close up, a very strong cat, Chinese brush painting, in the style of black and white, --ar 34 --v 6 (2).png',
      date: '2024.05.01',
      prompt: 'close up, a very strong cat, Chinese brush painting, in the style of black and white, --ar 3:4 --v 6',
      params: { version: 'V6', aspect: '3:4', style: 'Chinese Brush · B&W' },
    },
    {
      id: 52,
      articleId: 11,
      order: 52,
      featured: false,
      image: 'static/assets/midjourney/Capture the Decisive Moment of a cheetahs family immersed in golden hour light, reflecting upon vast mountainous landscapes while conveying a sense of serenity amidst the grandeur, wide-angle a.png',
      date: '2024.05.01',
      prompt: 'Capture the Decisive Moment of a cheetahs family immersed in golden hour light, reflecting upon vast mountainous landscapes while conveying a sense of serenity amidst the grandeur, wide-angle and long-focal-length lenses --ar 7:3 --v 6',
      params: { version: 'V6', aspect: '7:3', mood: 'Golden Hour · Serenity' },
    },
    {
      id: 53,
      articleId: 11,
      order: 53,
      featured: false,
      image: 'static/assets/midjourney/An_old_white_cat_long_white_hair_sage_like_type_sitting_in_a_chair_with_a_smile_facing_the_camera_kind_eyes_full_of_vitality_Taoist_temple_background_800mm_ar_4-3_v_6.png',
      date: '2024.05.01',
      prompt: 'An old white cat, long white hair, sage like type, sitting in a chair with a smile, facing the camera, kind eyes, full of vitality, Taoist temple background. Facing the camera directly, with a shooting distance of 800mm. --ar 4:3 --v 6',
      params: { version: 'V6', aspect: '4:3', lens: '800mm' },
    },
    {
      id: 54,
      articleId: 11,
      order: 54,
      featured: false,
      image: 'static/assets/midjourney/close up, a very strong cat, Chinese brush painting, in the style of black and white, --ar 34 --v 6.png',
      date: '2024.05.01',
      prompt: 'close up, a very strong cat, Chinese brush painting, in the style of black and white, --ar 3:4 --v 6',
      params: { version: 'V6', aspect: '3:4', style: 'Chinese Brush · B&W' },
    },
    {
      id: 55,
      articleId: 11,
      order: 55,
      featured: false,
      image: 'static/assets/midjourney/yuxin_jin_beautiful_cat_style_of_coloring_book_vector_lines_det_19502bef-7846-4fb1-80c3-b0a58b3371d4.png',
      date: '2024.05.01',
      prompt: 'Cat style of coloring book, vector lines, detailed, adult, black and white, botanical background --ar 17:22 --v 6',
      params: { version: 'V6', aspect: '17:22', style: 'Coloring Book · Vector' },
    },
  ];

  // ===== Likes (localStorage) =====
  var LIKES_KEY = 'mj-likes';

  function getLikes() {
    try { return JSON.parse(localStorage.getItem(LIKES_KEY)) || {}; }
    catch (e) { return {}; }
  }

  function setLike(id) {
    var likes = getLikes();
    likes[id] = (likes[id] || 0) + 1;
    localStorage.setItem(LIKES_KEY, JSON.stringify(likes));
    return likes[id];
  }

  function getLikeCount(id) {
    return getLikes()[id] || 0;
  }

  function isLiked(id) {
    var liked = JSON.parse(localStorage.getItem('mj-liked') || '[]');
    return liked.indexOf(id) !== -1;
  }

  function markLiked(id) {
    var liked = JSON.parse(localStorage.getItem('mj-liked') || '[]');
    if (liked.indexOf(id) === -1) liked.push(id);
    localStorage.setItem('mj-liked', JSON.stringify(liked));
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
  var headerTitle = document.getElementById('header-title');
  var headerSub = document.getElementById('header-sub');
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
    backLink.querySelector('.back-text').textContent = t.back;
    footerText.textContent = t.footer;
    buildSortBar();
    renderGallery();
  }

  btnEn.addEventListener('click', function () { setLang('en'); });
  btnZh.addEventListener('click', function () { setLang('zh'); });

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

  function getSorted() {
    var arr = artworks.slice();
    if (sortMode === 'curated') {
      arr.sort(function (a, b) { return a.order - b.order; });
    } else if (sortMode === 'newest') {
      arr.sort(function (a, b) { return b.date.localeCompare(a.date) || b.id - a.id; });
    } else if (sortMode === 'liked') {
      arr.sort(function (a, b) { return getLikeCount(b.id) - getLikeCount(a.id) || a.order - b.order; });
    }
    return arr;
  }

  // ===== Gallery =====
  function renderGallery() {
    var sorted = getSorted();
    var t = i18n[lang];
    galleryEl.innerHTML = sorted.map(function (art, idx) {
      var liked = isLiked(art.id);
      var count = getLikeCount(art.id);
      var cls = 'card' + (art.featured && sortMode === 'curated' ? ' card-featured' : '');
      return '<div class="' + cls + '" data-id="' + art.id + '">' +
        '<div class="card-img-wrap"><img src="' + art.image + '" alt="" loading="lazy"></div>' +
        '<div class="card-overlay">' +
          '<span class="card-title-text">' + (t.titles[art.id] || '') + '</span>' +
          '<div style="display:flex;gap:10px;align-items:center">' +
            '<button class="share-btn" data-id="' + art.id + '">' + SHARE_SVG + '</button>' +
            '<button class="like-btn' + (liked ? ' liked' : '') + '" data-id="' + art.id + '">' +
              '<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
              '<span class="like-count">' + (count > 0 ? count : '') + '</span>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');

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
        if (isLiked(id)) return;
        markLiked(id);
        var newCount = setLike(id);
        this.classList.add('liked', 'pop');
        this.querySelector('.like-count').textContent = newCount;
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

    modal.innerHTML =
      '<img class="modal-image" src="' + art.image + '" alt="">' +
      '<div class="modal-content">' +
        '<div class="modal-header">' +
          '<div><h2 class="modal-title">' + title + '</h2>' +
          '<span class="modal-date">' + art.date + '</span></div>' +
          '<div style="display:flex;gap:12px;align-items:center">' +
            '<button class="share-btn modal-share" data-id="' + id + '">' + SHARE_SVG + '</button>' +
            '<button class="like-btn modal-like' + (liked ? ' liked' : '') + '" data-id="' + id + '">' +
              '<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
              '<span class="like-count">' + (count > 0 ? count : '') + '</span>' +
            '</button>' +
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
    });

    // Modal like
    var modalLike = modal.querySelector('.modal-like');
    modalLike.addEventListener('click', function (e) {
      e.stopPropagation();
      if (isLiked(id)) return;
      markLiked(id);
      var n = setLike(id);
      this.classList.add('liked', 'pop');
      this.querySelector('.like-count').textContent = n;
      var self = this;
      setTimeout(function () { self.classList.remove('pop'); }, 600);
    });

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
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
  setLang(lang);
})();
