var _banpick = (function () {
    var t = "nekoLBPSim",
        e = "en";
    null !== typeof curLang && (e = curLang);
    var n = "assets/img/site_assets/",
        i = [
            { nid: "almeda", names: { en: "almeda", cn: "艾梅达", tw: "艾梅達" }, thumbnail: "3_almeda.png" },
            { nid: "bernhardt", names: { en: "bernhardt", cn: "巴恩哈特", tw: "巴恩哈特" }, thumbnail: "0_bernhardt.png" },
            { nid: "leon", names: { en: "leon", cn: "利昂", tw: "利昂" }, thumbnail: "0_leon.png" },
            { nid: "matthew", names: { en: "matthew", cn: "马修", tw: "馬修" }, thumbnail: "3_matthew.png" },
            { nid: "ledin", names: { en: "ledin", cn: "雷丁", tw: "雷丁" }, thumbnail: "0_ledin.png" },
            { nid: "grenier", names: { en: "grenier", cn: "格尼尔", tw: "格尼爾" }, thumbnail: "3_grenier.png" },
            { nid: "lana", names: { en: "lana", cn: "拉娜", tw: "拉娜" }, thumbnail: "0_lana.png" },
            { nid: "lewin", names: { en: "lewin", cn: "路因", tw: "路因" }, thumbnail: "2_lewin.png" },
            { nid: "dieharte", names: { en: "dieharte", cn: "迪哈尔特", tw: "迪哈爾特" }, thumbnail: "0_dieharte.png" },
            { nid: "freya", names: { en: "freya", cn: "芙蕾雅", tw: "芙蕾雅" }, thumbnail: "1_freya.png" },
            { nid: "cherie", names: { en: "cherie", cn: "雪莉", tw: "雪莉" }, thumbnail: "0_cherie.png" },
            { nid: "narm", names: { en: "narm", cn: "娜姆", tw: "娜姆" }, thumbnail: "1_narm.png" },
            { nid: "hein", names: { en: "hein", cn: "海恩", tw: "海恩" }, thumbnail: "1_hein.png" },
            { nid: "altemuller", names: { en: "altemuller", cn: "亚鲁特缪拉", tw: "亞魯特繆拉" }, thumbnail: "0_altemuller.png" },
            { nid: "sigma", names: { en: "sigma", cn: "西格玛", tw: "西格瑪" }, thumbnail: "0_sigma.png" },
            { nid: "elwin", names: { en: "elwin", cn: "艾尔文", tw: "艾爾文" }, thumbnail: "0_elwin.png" },
            { nid: "lanford", names: { en: "lanford", cn: "兰芳特", tw: "蘭芳特" }, thumbnail: "0_lanford.png" },
            { nid: "tiaris", names: { en: "tiaris", cn: "蒂亚莉丝", tw: "蒂亞莉絲" }, thumbnail: "0_tiaris.png" },
            { nid: "landius", names: { en: "landius", cn: "兰迪乌斯", tw: "蘭迪烏斯" }, thumbnail: "0_landius.png" },
            { nid: "empty2", names: { en: "empty2", cn: "empty2", tw: "empty2" }, thumbnail: "000_default.png" },
            { nid: "empty3", names: { en: "empty3", cn: "empty3", tw: "empty3" }, thumbnail: "000_default.png" },

            { nid: "Abishai", names: { en: "Abishai", cn: "阿布沙伊特", tw: "阿佈沙伊特" }, thumbnail: "37_Abishai.png" },
            { nid: "Lukhmaan", names: { en: "Lukhmaan", cn: "鲁克曼", tw: "鲁克曼" }, thumbnail: "37_Lukhmaan.png" },
            { nid: "Gazesuccubus", names: { en: "Gazesuccubus", cn: "幽瞳幻惑使", tw: "幽瞳幻惑使" }, thumbnail: "36_Gazesuccubus.png" },
            { nid: "Shem", names: { en: "Shem", cn: "塞姆", tw: "塞姆" }, thumbnail: "35_Shem.png" },
            { nid: "Macaera", names: { en: "Macaera", cn: "玛卡艾拉", tw: "瑪卡艾拉" }, thumbnail: "35_Macaera.png" },
            { nid: "Sylrna", names: { en: "Sylrna", cn: "席尔娜", tw: "席爾娜" }, thumbnail: "34_Sylrna.png" },
            { nid: "Kasumi", names: { en: "Kasumi", cn: "霞", tw: "霞" }, thumbnail: "34_Kasumi.png" },
            { nid: "Nyotengu", names: { en: "Nyotengu", cn: "女天狗", tw: "女天狗" }, thumbnail: "34_Nyotengu.png" },
            { nid: "MarieRose", names: { en: "Marie Rose", cn: "玛莉萝丝", tw: "瑪莉蘿絲" }, thumbnail: "34_MarieRose.png" },
            { nid: "Randele", names: { en: "Randele", cn: "兰黛尔", tw: "蘭黛爾" }, thumbnail: "33_Randele.png" },
            { nid: "Hibiscus", names: { en: "Hibiscus", cn: "断翼鸟", tw: "斷翼鳥" }, thumbnail: "33_Hibiscus.png" },
            { nid: "DragonSlayer", names: { en: "DragonSlayer", cn: "炎龙破灭者", tw: "炎龍破滅者" }, thumbnail: "32_DragonSlayer.png" },
            { nid: "Safreen", names: { en: "Safreen", cn: "萨芙琳", tw: "薩芙琳" }, thumbnail: "31_Safreen.png" },
            { nid: "Nornorin", names: { en: "Nornorin", cn: "诺诺琳", tw: "諾諾琳" }, thumbnail: "31_Nornorin.png" },
            { nid: "Ilia", names: { en: "Ilia", cn: "伊莉娅", tw: "伊莉婭" }, thumbnail: "30_Ilia.png" },
            { nid: "Alia", names: { en: "Alia", cn: "阿莉娅", tw: "阿莉婭" }, thumbnail: "30_Alia.png" },
            { nid: "Enya", names: { en: "Enya", cn: "恩雅", tw: "恩雅" }, thumbnail: "30_Enya.png" },
            { nid: "MackGinzu", names: { en: "Mack&Ginzu", cn: "马克&忍者", tw: "馬克&忍者" }, thumbnail: "29_MackGinzu.png" },
            { nid: "CaptainBaby", names: { en: "Captain&Baby", cn: "队长&婴儿", tw: "隊長&嬰兒" }, thumbnail: "29_CaptainBaby.png" },
            { nid: "shion", names: { en: "Shion", cn: "席昂", tw: "席昂" }, thumbnail: "28_shion.png" },
            { nid: "tiana", names: { en: "Tiana", cn: "缇雅娜", tw: "緹雅娜" }, thumbnail: "28_tiana.png" },
            { nid: "brightsummoner", names: { en: "Brightsummoner", cn: "辉耀圣召使", tw: "輝耀聖召使" }, thumbnail: "27_brightsummoner.png" },
            { nid: "seraphina", names: { en: "Seraphina", cn: "塞拉菲娜", tw: "塞拉菲娜" }, thumbnail: "26_seraphina.png" },
            { nid: "virelia", names: { en: "Virelia", cn: "薇莉娅", tw: "薇莉婭" }, thumbnail: "26_virelia.png" },
            { nid: "celica", names: { en: "Celica", cn: "赛利卡", tw: "賽利卡" }, thumbnail: "25_celica.png" },
            { nid: "ymir", names: { en: "Ymir", cn: "尤弥尔", tw: "尤彌尔" }, thumbnail: "25_ymir.png" },
            { nid: "tabres", names: { en: "Tabres", cn: "塔布莉丝", tw: "塔佈莉絲" }, thumbnail: "24_tabres.png" },
            { nid: "tyrantel", names: { en: "Tyrantel", cn: "泰兰提尔", tw: "泰蘭提爾" }, thumbnail: "24_tyrantel.png" },
            { nid: "sovereignoficeabyss", names: { en: "IceAbyss", cn: "冰渊凌御者", tw: "冰淵淩禦者" }, thumbnail: "23_sovereignoficeabyss.png" },
            { nid: "sho", names: { en: "Sho", cn: "深町晶", tw: "深町晶" }, thumbnail: "22_sho.png" },
            { nid: "archanfel", names: { en: "Archanfel", cn: "阿卡菲尔", tw: "阿卡菲爾" }, thumbnail: "22_archanfel.png" },
            { nid: "agito", names: { en: "Agito", cn: "卷岛颚人", tw: "卷島顎人" }, thumbnail: "22_agito.png" },
            { nid: "patricia", names: { en: "Patricia", cn: "帕特里夏", tw: "帕特裏夏" }, thumbnail: "21_patricia.png" },
            { nid: "gunn", names: { en: "Gunn", cn: "古恩", tw: "古恩" }, thumbnail: "21_gunn.png" },
            { nid: "jayce", names: { en: "Jayce", cn: "杰斯", tw: "傑斯" }, thumbnail: "20_jayce.png" },
            { nid: "isolde", names: { en: "Isolde", cn: "伊索尔德", tw: "伊索爾德" }, thumbnail: "20_isolde.png" },
            { nid: "hoffman", names: { en: "Hoffman", cn: "霍夫曼", tw: "霍夫曼" }, thumbnail: "19_hoffman.png" },
            { nid: "eshean", names: { en: "Eshean", cn: "艾希恩", tw: "艾希恩" }, thumbnail: "19_eshean.png" },
            { nid: "nemia", names: { en: "Nemia", cn: "奈米娅", tw: "奈米婭" }, thumbnail: "18_nemia.png" },
            { nid: "andriole", names: { en: "Andriole", cn: "安德里奥", tw: "安德里奧" }, thumbnail: "18_andriole.png" },
            { nid: "apotheosis", names: { en: "Apotheosis", cn: "神降者", tw: "神降者" }, thumbnail: "17_apotheosis.png" },
            { nid: "blackjack", names: { en: "BlackJack", cn: "杰克船长", tw: "傑克船長" }, thumbnail: "17_blackjack.png" },
            { nid: "lina", names: { en: "Lina", cn: "莉娜", tw: "莉娜" }, thumbnail: "16_lina.png" },
            { nid: "zelgadiss", names: { en: "Zelgadiss", cn: "杰路刚帝士", tw: "傑路剛帝士" }, thumbnail: "16_zelgadiss.png" },
            { nid: "gourry", names: { en: "Gourry", cn: "高里", tw: "高里" }, thumbnail: "16_gourry.png" },
            { nid: "precia", names: { en: "Precia", cn: "普蕾茜娅", tw: "普蕾茜婭" }, thumbnail: "15_precia.png" },
            { nid: "roland", names: { en: "Roland", cn: "罗兰", tw: "羅蘭" }, thumbnail: "15_roland.png" },
            { nid: "tourmilk", names: { en: "Tourmilk", cn: "托米尔克", tw: "托米爾克" }, thumbnail: "14_tourmilk.png" },
            { nid: "elise", names: { en: "Elise", cn: "伊莉丝", tw: "伊莉絲" }, thumbnail: "14_elise.png" },
            { nid: "tatalia", names: { en: "Tatalia", cn: "塔塔利亚", tw: "塔塔利亞" }, thumbnail: "13_tatalia.png" },
            { nid: "nymph", names: { en: "Nymph", cn: "宁芙", tw: "寧芙" }, thumbnail: "13_nymph.png" },
            { nid: "kirika", names: { en: "Kirika", cn: "雾香", tw: "霧香" }, thumbnail: "12_kirika.png" },
            { nid: "sonia", names: { en: "Sonia", cn: "桑妮雅", tw: "桑妮雅" }, thumbnail: "12_sonia.png" },
            { nid: "excela", names: { en: "Excela", cn: "爱克雪拉", tw: "愛克雪拉" }, thumbnail: "12_excela.png" },
            { nid: "amadeus", names: { en: "Amadeus", cn: "阿玛迪斯", tw: "阿瑪迪斯" }, thumbnail: "11_amadeus.png" },
            { nid: "sagny", names: { en: "Sagny", cn: "萨格尼", tw: "薩格尼" }, thumbnail: "11_sagny.png" },
            { nid: "awakener", names: { en: "Awakener", cn: "醒觉者", tw: "醒覺者" }, thumbnail: "11_awakener.png" },
            { nid: "agnes", names: { en: "Agnès", cn: "亚妮艾丝", tw: "亞妮艾絲" }, thumbnail: "10_agnes.png" },
            { nid: "van", names: { en: "Van", cn: "范恩", tw: "范恩" }, thumbnail: "10_van.png" },
            { nid: "elaine", names: { en: "Elaine", cn: "艾蕾因", tw: "艾蕾因" }, thumbnail: "10_elaine.png" },
            { nid: "grenshiel", names: { en: "Grenshiel", cn: "格伦希尔", tw: "格倫希爾" }, thumbnail: "9_grenshiel.png" },
            { nid: "yoaconna", names: { en: "Yoa & Conna", cn: "琼&康娜", tw: "瓊&康娜" }, thumbnail: "9_yoaconna.png" },
            { nid: "polyal", names: { en: "Polyal", cn: "波莉阿鲁", tw: "波莉阿魯" }, thumbnail: "9_polyal.png" },
            { nid: "lugner", names: { en: "Lugner", cn: "卢古耐尔", tw: "盧古耐爾" }, thumbnail: "9_lugner.png" },
            { nid: "theon", names: { en: "Theon", cn: "席恩", tw: "席恩" }, thumbnail: "9_theon.png" },
            { nid: "riobec", names: { en: "Riobec", cn: "里奥贝克", tw: "里奧貝克" }, thumbnail: "9_riobec.png" },
            { nid: "swordoflightshadow", names: { en: "Sword of Light & Shadow", cn: "光影剑魄", tw: "光影劍魄" }, thumbnail: "9_swordoflightshadow.png" },
            { nid: "girlinshell", names: { en: "Girl in Shell", cn: "壳中少女", tw: "殼中少女" }, thumbnail: "9_girlinshell.png" },
            { nid: "lightbringer", names: { en: "Light Bringer", cn: "光佑使徒", tw: "光佑使徒" }, thumbnail: "9_lightbringer.png" },
            { nid: "adankelmo", names: { en: "Adankelmo", cn: "亚德凯摩", tw: "亞德凱摩" }, thumbnail: "9_adankelmo.png" },
            { nid: "gintoki", names: { en: "Gintoki Sakata", cn: "坂田银时", tw: "坂田銀時" }, thumbnail: "9_gintoki.png" },
            { nid: "kagura", names: { en: "Kagura", cn: "神乐", tw: "神樂" }, thumbnail: "9_kagura.png" },
            { nid: "ricky", names: { en: "Ricky", cn: "里奇", tw: "里奇" }, thumbnail: "9_ricky.png" },
            { nid: "mcclaine", names: { en: "McClaine", cn: "马库雷", tw: "馬庫雷" }, thumbnail: "9_mcclaine.png" },
            { nid: "julian", names: { en: "Julian", cn: "朱利安", tw: "朱利安" }, thumbnail: "0_julian.webp" },
            { nid: "wanderduel", names: { en: "Wandering Duelist", cn: "漂逐斗客", tw: "漂逐鬥客" }, thumbnail: "0_wanderingduelist.webp" },
            { nid: "rostam", names: { en: "Rostam", cn: "洛斯塔姆", tw: "洛斯塔姆" }, thumbnail: "0_rostam.webp" },
            { nid: "ashumere", names: { en: "Ashumere", cn: "亚莎梅尔", tw: "亞莎梅爾" }, thumbnail: "0_ashumere.webp" },
            { nid: "kaguya", names: { en: "Kaguya", cn: "辉夜", tw: "輝夜" }, thumbnail: "0_kaguya.webp" },
            { nid: "carolian", names: { en: "Carolian", cn: "卡洛莉安", tw: "卡洛莉安" }, thumbnail: "0_carolian.webp" },
            { nid: "azusa", names: { en: "Azusa", cn: "梓", tw: "梓" }, thumbnail: "0_azusa.webp" },
            { nid: "oboro", names: { en: "Oboro", cn: "胧", tw: "朧" }, thumbnail: "0_oboro.webp" },
            { nid: "alicia", names: { en: "Alicia", cn: "亚莉希雅", tw: "亞莉希雅" }, thumbnail: "0_alicia.webp" },
            { nid: "selvari", names: { en: "Selvaria", cn: "塞贝莉雅", tw: "塞貝莉雅" }, thumbnail: "0_selvari.webp" },
            { nid: "isara", names: { en: "Isara", cn: "伊莎拉", tw: "伊莎拉" }, thumbnail: "1_isara.webp" },
            { nid: "theconsul", names: { en: "The Consul", cn: "月之执政官", tw: "月之執政官" }, thumbnail: "0_consul.webp" },
            { nid: "ironchancellor", names: { en: "Iron Chancellor", cn: "铁血总帅", tw: "鐵血總帥" }, thumbnail: "0_ironchancellor.webp" },
            { nid: "michelle", names: { en: "Michelle", cn: "米歇尔", tw: "米歇爾" }, thumbnail: "0_michelle.webp" },
            { nid: "gustav", names: { en: "Gustav", cn: "古斯塔夫", tw: "古斯塔夫" }, thumbnail: "0_gustav.webp" },
            { nid: "liza", names: { en: "Liza", cn: "丽莎", tw: "麗莎" }, thumbnail: "1_liza.webp" },
            { nid: "emperorlovina", names: { en: "Emperor Lovina", cn: "洛维奈尔大帝", tw: "洛維奈爾大帝" }, thumbnail: "0_emperor.webp" },
            { nid: "arksaint", names: { en: "Saintess of the Ark", cn: "方舟圣女", tw: "方舟聖女" }, thumbnail: "0_arksaint.webp" },
            { nid: "elma", names: { en: "Elma", cn: "艾尔玛", tw: "艾爾瑪" }, thumbnail: "0_elma.webp" },
            { nid: "kertesz", names: { en: "Kertesz", cn: "凯尔蒂斯", tw: "凱爾蒂斯" }, thumbnail: "0_kertesz.webp" },
            { nid: "wehttam", names: { en: "Wehttam", cn: "维坦", tw: "維坦" }, thumbnail: "0_wetham.webp" },
            { nid: "verner", names: { en: "Verner", cn: "维尔纳", tw: "維爾納" }, thumbnail: "0_verner.webp" },
            { nid: "mariandel", names: { en: "Mariandel", cn: "玛丽安蒂尔", tw: "瑪麗安蒂爾" }, thumbnail: "0_mariandel.webp" },
            { nid: "transcendent", names: { en: "Transcend Giz", cn: "超越之人", tw: "超越之人" }, thumbnail: "0_transcendent.webp" },
            { nid: "alpha", names: { en: "Alpha", cn: "阿尔法", tw: "阿爾法" }, thumbnail: "0_alpha.webp" },
            { nid: "christiane", names: { en: "Christiane", cn: "克里斯蒂安妮", tw: "克里斯蒂安妮" }, thumbnail: "0_christiane.png" },
            { nid: "suzette", names: { en: "Suzette", cn: "修杰特", tw: "修傑特" }, thumbnail: "0_suzette.png" },
            { nid: "mu", names: { en: "Mu (Jasmine)", cn: "茉", tw: "茉" }, thumbnail: "0_mu.png" },
            { nid: "epsilon", names: { en: "Epsilon", cn: "伊普西龙", tw: "伊普西龍" }, thumbnail: "0_epsilon.png" },
            { nid: "lucretia", names: { en: "Lucretia", cn: "卢克蕾蒂娅", tw: "盧克蕾蒂婭" }, thumbnail: "0_lucretia.png" },
            { nid: "autokrato", names: { en: "Autokrato IV", cn: "奥托克拉托四世", tw: "奧托克拉托四世" }, thumbnail: "0_autokrato.png" },
            { nid: "ryou", names: { en: "Ryou Sanada", cn: "真田辽", tw: "真田遼" }, thumbnail: "0_ryou.png" },
            { nid: "kayura", names: { en: "Lady Kayura", cn: "迦游罗", tw: "迦游罗" }, thumbnail: "0_kayura.png" },
            { nid: "touma", names: { en: "Touma Hashiba", cn: "羽柴当麻", tw: "羽柴當麻" }, thumbnail: "1_touma.png" },
            { nid: "sissiwhite", names: { en: "Sissi White", cn: "怀特·茜茜", tw: "懷特·茜茜" }, thumbnail: "0_sissiwhite.png" },
            { nid: "clord", names: { en: "Crimson Lord", cn: "红月之王", tw: "紅月之王" }, thumbnail: "0_crimsonlord.png" },
            { nid: "patsyr", names: { en: "Patsyr", cn: "帕希尔", tw: "帕希爾" }, thumbnail: "0_patsyr.png" },
            { nid: "towa", names: { en: "Towa", cn: "托娃", tw: "托娃" }, thumbnail: "0_towa.png" },
            { nid: "kreuger", names: { en: "Kreuger", cn: "邪神库鲁加", tw: "邪神庫魯加" }, thumbnail: "0_kreuger.png" },
            { nid: "vincent", names: { en: "Vincent", cn: "文森特", tw: "文森特" }, thumbnail: "0_vincent.png" },
            { nid: "wataru", names: { en: "Ikusabe Wataru", cn: "战部渡", tw: "戰部渡" }, thumbnail: "0_wataru.png" },
            { nid: "himiko", names: { en: "Shinobibe Himiko", cn: "忍部火美子", tw: "忍部火美子" }, thumbnail: "0_himiko.png" },
            { nid: "shibaraku", names: { en: "Tsurugibe Shibaraku", cn: "剑部武一郎", tw: "劍部武一郎" }, thumbnail: "1_shibaraku.png" },
            { nid: "hilda", names: { en: "Hilda", cn: "希尔达", tw: "希爾達" }, thumbnail: "0_hilda.png" },
            { nid: "werner", names: { en: "Werner", cn: "沃尔纳", tw: "沃爾納" }, thumbnail: "0_werner.png" },
            { nid: "lolijess", names: { en: "Light of Genesis", cn: "降生之光", tw: "降生之光" }, thumbnail: "0_lolijess.png" },
            { nid: "mariel", names: { en: "Mariel", cn: "玛丽埃尔", tw: "瑪麗埃爾" }, thumbnail: "0_mariel.png" },
            { nid: "rozenciel", names: { en: "Rozenciel", cn: "罗泽希尔", tw: "羅澤希爾" }, thumbnail: "0_rozenciel.png" },
            { nid: "clotaire", names: { en: "Clotaire", cn: "克洛泰尔", tw: "克洛泰爾" }, thumbnail: "0_clotaire.png" },
            { nid: "ainz", names: { en: "ainz", cn: "安兹·乌尔·恭", tw: "安茲·烏爾·恭" }, thumbnail: "0_ainz.png" },
            { nid: "aka", names: { en: "akaya", cn: "阿卡娅", tw: "阿卡婭" }, thumbnail: "0_aka.png" },
            { nid: "albedo", names: { en: "albedo", cn: "雅儿贝德", tw: "雅兒貝德" }, thumbnail: "0_albedo.png" },
            { nid: "alustriel", names: { en: "alustriel", cn: "艾拉斯卓", tw: "艾拉斯卓" }, thumbnail: "0_alustriel.png" },
            { nid: "angelina", names: { en: "angelina", cn: "安洁丽娜", tw: "安潔麗娜" }, thumbnail: "0_angelina.png" },
            { nid: "ares", names: { en: "ares", cn: "阿雷斯", tw: "阿雷斯" }, thumbnail: "0_ares.png" },
            { nid: "arianrhod", names: { en: "arianrhod", cn: "阿瑞安赫德", tw: "阿瑞安赫德" }, thumbnail: "0_arianrhod.png" },
            { nid: "ashram", names: { en: "ashram", cn: "亚修拉姆", tw: "亞修拉姆" }, thumbnail: "0_ashram.png" },
            { nid: "betty", names: { en: "betty", cn: "贝蒂", tw: "貝蒂" }, thumbnail: "0_betty.png" },
            { nid: "bozel", names: { en: "bozel", cn: "波赞鲁", tw: "波贊魯" }, thumbnail: "0_bozel.png" },
            { nid: "brenda", names: { en: "brenda", cn: "布琳达", tw: "布琳達" }, thumbnail: "0_brenda.png" },
            { nid: "clarett", names: { en: "clarett", cn: "克拉蕾特", tw: "克拉蕾特" }, thumbnail: "0_clarett.png" },
            { nid: "deedlit", names: { en: "deedlit", cn: "蒂德莉特", tw: "蒂德莉特" }, thumbnail: "0_deedlit.png" },
            { nid: "emilia", names: { en: "emilia", cn: "艾米莉亚", tw: "艾米莉亞" }, thumbnail: "0_emilia.png" },
            { nid: "estelle", names: { en: "estelle", cn: "艾丝蒂尔", tw: "艾絲蒂爾" }, thumbnail: "0_estelle.png" },
            { nid: "florentia", names: { en: "florentia", cn: "弗洛朗蒂娅", tw: "弗洛朗蒂婭" }, thumbnail: "0_florentia.png" },
            { nid: "gerald_layla", names: { en: "gerald & layla", cn: "杰利奥鲁 & 蕾拉", tw: "傑利奧魯 & 蕾拉" }, thumbnail: "0_gerald_layla.png" },
            { nid: "gizarof", names: { en: "gizarof", cn: "基扎洛夫", tw: "基扎洛夫" }, thumbnail: "0_gizarof.png" },
            { nid: "helena", names: { en: "helena", cn: "海伦娜", tw: "海倫娜" }, thumbnail: "0_helena.png" },
            { nid: "hiei", names: { en: "hiei", cn: "飞影", tw: "飛影" }, thumbnail: "0_hiei.png" },
            { nid: "ilucia", names: { en: "ilucia", cn: "伊露希亚", tw: "伊露希亞" }, thumbnail: "0_ilucia.png" },
            { nid: "joshua", names: { en: "joshua", cn: "约修亚", tw: "約修亞" }, thumbnail: "0_joshua.png" },
            { nid: "jugler", names: { en: "jugler", cn: "古巨拉", tw: "古巨拉" }, thumbnail: "0_jugler.png" },
            { nid: "knight_of_mystery", names: { en: "knight of mystery", cn: "谜之骑士", tw: "謎之騎士" }, thumbnail: "0_knight_of_mystery.png" },
            { nid: "kurama", names: { en: "kurama", cn: "藏马", tw: "藏馬" }, thumbnail: "0_kurama.png" },
            { nid: "lambda", names: { en: "lambda", cn: "拉姆达", tw: "拉姆達" }, thumbnail: "0_lambda.png" },
            { nid: "leonhardt", names: { en: "leonhardt", cn: "莱恩哈特", tw: "莱恩哈特" }, thumbnail: "0_leonhardt.png" },
            { nid: "liana", names: { en: "liana", cn: "莉亚娜", tw: "莉亞娜" }, thumbnail: "0_liana.png" },
            { nid: "licorice", names: { en: "licorice", cn: "丽可丽丝", tw: "麗可麗絲" }, thumbnail: "0_licorice.png" },
            { nid: "listell", names: { en: "listell", cn: "妮丝蒂尔", tw: "妮絲蒂爾" }, thumbnail: "0_listell.png" },
            { nid: "luna", names: { en: "luna", cn: "露娜", tw: "露娜" }, thumbnail: "0_luna.png" },
            { nid: "maiya", names: { en: "maiya", cn: "梅雅", tw: "梅雅" }, thumbnail: "0_maiya.png" },
            { nid: "noemi", names: { en: "noemi", cn: "诺埃米", tw: "諾埃米" }, thumbnail: "0_noemi.png" },
            { nid: "omega", names: { en: "omega", cn: "欧米伽", tw: "歐米伽" }, thumbnail: "0_omega.png" },
            { nid: "rachel", names: { en: "rachel", cn: "蕾伽尔", tw: "蕾伽爾" }, thumbnail: "0_rachel.png" },
            { nid: "rainforce", names: { en: "rainforce", cn: "雷因法鲁斯", tw: "雷因法魯斯" }, thumbnail: "0_rainforce.png" },
            { nid: "rean", names: { en: "rean", cn: "黎恩", tw: "黎恩" }, thumbnail: "0_rean.png" },
            { nid: "renata", names: { en: "renata", cn: "蕾娜塔", tw: "蕾娜塔" }, thumbnail: "0_renata.png" },
            { nid: "renne", names: { en: "renne", cn: "玲", tw: "玲" }, thumbnail: "0_renne.png" },
            { nid: "rosalia", names: { en: "rozalia", cn: "罗莎莉娅", tw: "羅莎莉婭" }, thumbnail: "0_rosalia.png" },
            { nid: "sage_of_yggdrasil", names: { en: "sage of yggdrasil", cn: "树之贤者", tw: "樹之賢者" }, thumbnail: "0_sage_of_yggdrasil.png" },
            { nid: "sakura", names: { en: "sakura", cn: "真宫寺樱", tw: "真宮寺櫻" }, thumbnail: "0_sakura.png" },
            { nid: "shaltear", names: { en: "shaltear", cn: "夏提雅", tw: "夏提雅" }, thumbnail: "0_shaltear.png" },
            { nid: "shelaniel", names: { en: "shelfaniel", cn: "雪露法妮尔", tw: "雪露法妮爾" }, thumbnail: "0_shelaniel.png" },
            { nid: "shilinka", names: { en: "shilinka", cn: "希琳卡", tw: "希琳卡" }, thumbnail: "0_shilinka.png" },
            { nid: "sumire", names: { en: "sumire", cn: "神崎堇", tw: "神崎堇" }, thumbnail: "0_sumire.png" },
            { nid: "togurobros", names: { en: "toguro bros", cn: "户愚吕兄弟", tw: "戶愚呂兄弟" }, thumbnail: "0_togurobros.png" },
            { nid: "tsubame", names: { en: "tsubame", cn: "燕", tw: "燕" }, thumbnail: "0_tsubame.png" },
            { nid: "virash", names: { en: "virash", cn: "维拉玖", tw: "维拉玖" }, thumbnail: "0_virash.png" },
            { nid: "wiler", names: { en: "wiler", cn: "威拉", tw: "威拉" }, thumbnail: "0_wiler.png" },
            { nid: "young_jessica", names: { en: "young jessica", cn: "女神化身", tw: "女神化身" }, thumbnail: "0_young_jessica.png" },
            { nid: "yulia", names: { en: "yulia", cn: "尤利娅", tw: "尤利娅" }, thumbnail: "0_yulia.png" },
            { nid: "yuusuke", names: { en: "yuusuke", cn: "浦饭幽助", tw: "浦飯幽助" }, thumbnail: "0_yuusuke.png" },
            { nid: "zerida", names: { en: "zerida", cn: "泽瑞达", tw: "澤瑞達" }, thumbnail: "0_zerida.png" },
            { nid: "alfred", names: { en: "alfred", cn: "阿尔弗雷德", tw: "阿爾弗雷德" }, thumbnail: "1_alfred.png" },
            { nid: "altina", names: { en: "altina", cn: "亚尔缇娜", tw: "亞爾緹娜" }, thumbnail: "1_altina.png" },
            { nid: "angelica", names: { en: "angelica", cn: "安杰丽卡", tw: "安傑麗卡" }, thumbnail: "1_angelica.png" },
            { nid: "chris", names: { en: "chris", cn: "克丽丝", tw: "克麗絲" }, thumbnail: "1_chris.png" },
            { nid: "egbert", names: { en: "egbert", cn: "埃格贝尔特", tw: "埃格貝爾特" }, thumbnail: "1_egbert.png" },
            { nid: "emerick", names: { en: "emerick", cn: "艾马林克", tw: "艾馬林克" }, thumbnail: "1_emerick.png" },
            { nid: "feraquea", names: { en: "feraquea", cn: "弗拉基亚", tw: "弗拉基亞" }, thumbnail: "1_feraquea.png" },
            { nid: "imelda", names: { en: "imelda", cn: "伊梅尔达", tw: "伊梅爾達" }, thumbnail: "1_imelda.png" },
            { nid: "iris", names: { en: "iris", cn: "爱丽丝", tw: "愛麗絲" }, thumbnail: "1_iris.png" },
            { nid: "kirikaze", names: { en: "kirikaze", cn: "雾风", tw: "霧風" }, thumbnail: "1_kirikaze.png" },
            { nid: "klose", names: { en: "klose", cn: "科洛丝", tw: "科洛絲" }, thumbnail: "1_klose.png" },
            { nid: "kuwabara", names: { en: "kuwabara", cn: "桑原和真", tw: "桑原和真" }, thumbnail: "1_kuwabara.png" },
            { nid: "lance", names: { en: "lance", cn: "兰斯", tw: "蘭斯" }, thumbnail: "1_lance.png" },
            { nid: "liffany", names: { en: "liffany", cn: "莉法妮", tw: "莉法妮" }, thumbnail: "1_liffany.png" },
            { nid: "melenia", names: { en: "melania", cn: "梅露帕妮", tw: "梅露帕妮" }, thumbnail: "1_melenia.png" },
            { nid: "oliver_brat", names: { en: "oliver brat", cn: "奥利佛", tw: "奧利佛" }, thumbnail: "1_oliver_brat.png" },
            { nid: "olivier", names: { en: "olivier", cn: "奥利维尔", tw: "奧利維爾" }, thumbnail: "1_olivier.png" },
            { nid: "parn", names: { en: "parn", cn: "帕恩", tw: "帕恩" }, thumbnail: "1_parn.png" },
            { nid: "pirotess", names: { en: "pirotess", cn: "比萝蒂丝", tw: "比蘿蒂絲" }, thumbnail: "1_pirotess.png" },
            { nid: "serena", names: { en: "serena", cn: "塞蕾娜", tw: "塞蕾娜" }, thumbnail: "1_serena.png" },
            { nid: "silverwolf", names: { en: "silverwolf", cn: "银狼", tw: "銀狼" }, thumbnail: "1_silverwolf.png" },
            { nid: "sonya", names: { en: "sonya", cn: "索尼娅", tw: "索尼婭" }, thumbnail: "1_sonya.png" },
            { nid: "sophia", names: { en: "sophia", cn: "索菲亚", tw: "索菲亞" }, thumbnail: "1_sophia.png" },
            { nid: "vargas", names: { en: "vargas", cn: "巴尔加斯", tw: "巴爾加斯" }, thumbnail: "1_vargas.png" },
            { nid: "varna", names: { en: "varna", cn: "法娜", tw: "法娜" }, thumbnail: "1_varna.png" },
            { nid: "aaron", names: { en: "aaron", cn: "阿伦", tw: "阿倫" }, thumbnail: "2_aaron.png" },
            { nid: "anna", names: { en: "anna", cn: "安娜", tw: "安娜" }, thumbnail: "2_anna.png" },
            { nid: "dios", names: { en: "dios", cn: "迪欧斯", tw: "迪歐斯" }, thumbnail: "2_dios.png" },
            { nid: "jessica", names: { en: "jessica", cn: "杰西卡", tw: "傑西卡" }, thumbnail: "2_jessica.png" },
            { nid: "keith", names: { en: "keith", cn: "基斯", tw: "基斯" }, thumbnail: "2_keith.png" },
            { nid: "laird", names: { en: "laird", cn: "利亚特", tw: "利亞特" }, thumbnail: "2_laird.png" },
            { nid: "lester", names: { en: "lester", cn: "利斯塔", tw: "利斯塔" }, thumbnail: "2_lester.png" },
            { nid: "leticia", names: { en: "leticia", cn: "蕾蒂西亚", tw: "蕾蒂西亞" }, thumbnail: "2_leticia.png" },
            { nid: "pierre", names: { en: "pierre", cn: "皮耶鲁", tw: "皮耶魯" }, thumbnail: "2_pierre.png" },
            { nid: "rohga", names: { en: "rohga", cn: "洛加", tw: "洛加" }, thumbnail: "2_rohga.png" },
            { nid: "scott", names: { en: "scott", cn: "斯科特", tw: "斯科特" }, thumbnail: "2_scott.png" },
        ],
        r = [],
        o = !1,
        a = !1,
        s = "",
        l = 0,
        u = 0,
        c = [
            { target: 1, type: "ban", amt: 1, label: "first", text: { en: "Ban 1 unit from Player 1's Box", cn: "从P1 Ban 1 位人物", tw: "從P1 Ban 1 位人物" } },
            { target: 2, type: "ban", amt: 1, label: "first", text: { en: "Ban 1 unit from Player 2's Box", cn: "从P2 Ban 1 位人物", tw: "從P2 Ban 1 位人物" } },
            { target: 1, type: "pick", amt: 1, label: "first", text: { en: "Player 1 Picks 1 unit", cn: "P1 Pick 1 位人物", tw: "P1 Pick 1 位人物" } },
            { target: 1, type: "ban", amt: 2, label: "second", text: { en: "Ban 2 units from Player 1's Box", cn: "从P1 Ban 2 位人物", tw: "從P1 Ban 2 位人物" } },
            { target: 2, type: "pick", amt: 1, label: "first", text: { en: "Player 2 Picks 1 unit", cn: "P2 Pick 1 位人物", tw: "P2 Pick 1 位人物" } },
            { target: 2, type: "ban", amt: 2, label: "second", text: { en: "Ban 2 units from Player 2's Box", cn: "从P2 Ban 2 位人物", tw: "從P2 Ban 2 位人物" } },
            { target: 1, type: "pick", amt: 1, label: "second", text: { en: "Player 1 Picks 1 unit", cn: "P1 Pick 1 位人物", tw: "P1 Pick 1 位人物" } },
            { target: 1, type: "ban", amt: 2, label: "third", text: { en: "Ban 2 units from Player 1's Box", cn: "从P1 Ban 2 位人物", tw: "從P1 Ban 2 位人物" } },
            { target: 2, type: "pick", amt: 1, label: "second", text: { en: "Player 2 Picks 1 unit", cn: "P2 Pick 1 位人物", tw: "P2 Pick 1 位人物" } },
            { target: 2, type: "ban", amt: 2, label: "third", text: { en: "Ban 2 units from Player 2's Box", cn: "从P2 Ban 2 位人物", tw: "從P2 Ban 2 位人物" } },
            { target: 1, type: "pick", amt: 1, label: "third", text: { en: "Player 1 Picks 1 unit", cn: "P1 Pick 1 位人物", tw: "P1 Pick 1 位人物" } },
            { target: 1, type: "ban", amt: 2, label: "fourth", text: { en: "Ban 2 units from Player 1", cn: "从P1 Ban 2 位人物", tw: "從P1 Ban 2 位人物" } },
            { target: 2, type: "pick", amt: 1, label: "third", text: { en: "Player 2 Picks 1 unit", cn: "P2 Pick 1 位人物", tw: "P2 Pick 1 位人物" } },
            { target: 2, type: "ban", amt: 2, label: "fourth", text: { en: "Ban 2 units from Player 2's Box", cn: "从P2 Ban 2 位人物", tw: "從P2 Ban 2 位人物" } },
            { target: 1, type: "pick", amt: 1, label: "fourth", text: { en: "Player 1 Picks 1 unit", cn: "P1 Pick 1 位人物", tw: "P1 Pick 1 位人物" } },
            { target: 1, type: "ban", amt: 2, label: "fifth", text: { en: "Ban 2 units from Player 1's Box", cn: "从P1 Ban 2 位人物", tw: "從P1 Ban 2 位人物" } },
            { target: 2, type: "pick", amt: 1, label: "fourth", text: { en: "Player 2 Picks 1 unit", cn: "P2 Pick 1 位人物", tw: "P2 Pick 1 位人物" } },
            { target: 2, type: "ban", amt: 2, label: "fifth", text: { en: "Ban 2 units from Player 2's Box", cn: "从P2 Ban 2 位人物", tw: "從P2 Ban 2 位人物" } },
            { target: 1, type: "pick", amt: 1, label: "fifth", text: { en: "Player 1 Picks 1 unit", cn: "P1 Pick 1 位人物", tw: "P1 Pick 1 位人物" } },
            { target: 2, type: "pick", amt: 1, label: "fifth", text: { en: "Player 2 Picks 1 unit", cn: "P2 Pick 1 位人物", tw: "P2 Pick 1 位人物" } },
        ],
        p = { en: "Please Add a box", cn: "请添加 BOX", tw: "請添加 BOX" },
        d = { en: "Please select 15 characters for your box", cn: "请为您的BOX选择15位人物", tw: "請為您的BOX選擇15位人物" },
        f = { en: "End of Ban/Pick", cn: "Ban/Pick 完结", tw: "Ban/Pick 完結" },
        h = { en: "Match Map", cn: "对峙战地", tw: "對峙戰地" };
    function m() {
        !(function () {
            if (null === localStorage.getItem(t)) localStorage.setItem(t, "[]");
            else {
                var e = localStorage.getItem(t);
                try {
                    var n = JSON.parse(e);
                    if (n && "object" == typeof n) {
                        r = n;
                        for (var i = 0; i < r.length; i++) void 0 === r[i].bid && (r[i].bid = y());
                    }
                } catch { }
            }
        })(),
            (function () {
                for (var t = "", o = 0; o < i.length; o++) {
                    var a = i[o].names[e];
                    var heroFactionClassName = 'faction-' + i[o].nid;
                    t += '<div class="char-node ' + heroFactionClassName + '" data-name="' + i[o].nid + '"><div class="img"><img src="' + n + i[o].thumbnail + '"/></div><div class="title">' + a + "</div></div>";
                }
                $("#char_selectlist").html(t),
                    $("#box_maker").popup({ opacity: 0.7, transition: "all 0.3s" }),
                    $("#panel_import").popup({ opacity: 0.7, transition: "all 0.3s" }),
                    $("#panel_export").popup({
                        opacity: 0.7,
                        transition: "all 0.3s",
                        closetransitionend: function () {
                            $("#export_datatext").val("");
                        },
                    }),
                    $("#panel_mapchoice").popup({ opacity: 0.7, transition: "all 0.3s", escape: !1, blur: !1 }),
                    b(),
                    $(".char-node").on("click", function (t) {
                        t.preventDefault(), t.stopPropagation();
                        var e = $(".char-node.selected").length;
                        !$(this).hasClass("selected") && e < 15 ? $(this).addClass("selected") : $(this).removeClass("selected"), b();
                    }),
                    $("#box_clear").on("click", function (t) {
                        t.preventDefault(), t.stopPropagation(), w();
                    }),
                    $("#box_save").on("click", function (t) {
                        t.preventDefault(),
                            t.stopPropagation(),
                            $("#box_name, .box-actionlink > label").removeClass("form-err"),
                            (function () {
                                for (
                                    var t = $(".char-node.selected"),
                                    e = $("#box_name")
                                        .val()
                                        .replace(/[&\/\\#,+()$~%'":*?<>{}|]/g, "")
                                        .substring(0, 20),
                                    n = [],
                                    i = 0;
                                    i < t.length;
                                    i++
                                )
                                    n.push($(t[i]).attr("data-name"));
                                if ("" == s) {
                                    var o = {};
                                    (o.name = e), (o.bid = y()), (o.units = n), r.push(o);
                                } else {
                                    var a = null;
                                    for (i = 0; i < r.length; i++) r[i].bid == s && (a = i);
                                    null != a && ((r[a].name = e), (r[a].units = n));
                                }
                                k(), w(), $("#box_maker").popup("hide");
                            })();
                    });
            })(),
            $("#box_add").on("click", function (t) {
                t.preventDefault(), t.stopPropagation(), w(), (s = ""), A(), $("#box_maker").popup("show");
            }),
            $("#box_import").on("click", function (t) {
                t.preventDefault(), t.stopPropagation(), $("#import_datatext").val(""), $("#panel_import").popup("show");
            }),
            $("#import_abox").on("click", function (t) {
                t.preventDefault(),
                    t.stopPropagation(),
                    (function (t) {
                        if ("" != t) {
                            var e = LZString.decompressFromBase64(t);
                            if (null != e)
                                try {
                                    var n = JSON.parse(e);
                                    n && "object" == typeof n && void 0 !== n.name && void 0 !== n.units && Array.isArray(n.units) && (x(n, !0), $("#panel_import").popup("hide"), A(), $("#box_maker").popup("show"));
                                } catch { }
                        }
                    })($("#import_datatext").val());
            }),
            $("#box_clearp12").on("click", function (t) {
                t.preventDefault(), t.stopPropagation(), A();
            }),
            $("#box_matchp12").on("click", function (t) {
                t.preventDefault(),
                    t.stopPropagation(),
                    (l = 0),
                    (u = 0),
                    _matchStats.clearTimeline(),
                    $(".bp-sim").addClass("matched"),
                    $(".bp-sim").removeClass("active end"),
                    $(".bpchar-node").removeClass("ban pick first second third fourth fifth"),
                    $("#match_mapcontent").empty(),
                    $("#panel_mapchoice").popup("show"),
                    $("#site_saveimage").hide();
            }),
            $("#site_saveimage").on("click", function (t) {
                t.preventDefault(),
                    t.stopPropagation(),
                    $("#boxlist_container, .button, #match_ntext").hide(),
                    window.scrollTo(0, 0),
                    domtoimage.toBlob(document.getElementById("pickban_site")).then(function (t) {
                        saveAs(t, "langrisser-pickban.png"), $("#boxlist_container, .button, #match_ntext").show();
                    });
            }),
            $(".apexmap").on("click", function (t) {
                t.preventDefault(), t.stopPropagation();
                var n = $(this).attr("data-type");
                $("#match_mapcontent").html("<h4>" + h[e] + '</h4><div class="cmatchmap" data-type="' + n + '"></div>'), $("#panel_mapchoice").popup("hide"), P();
            }),
            $("#box_list").on("click", ".bn-assign1", function (t) {
                var e = $(this).closest(".box-node").attr("data-bid");
                $(".bn-assign1").removeClass("toggle"), $(this).addClass("toggle"), T("p1", e), C();
            }),
            $("#box_list").on("click", ".bn-assign2", function (t) {
                var e = $(this).closest(".box-node").attr("data-bid");
                $(".bn-assign2").removeClass("toggle"), $(this).addClass("toggle"), T("p2", e), C();
            }),
            $("#box_list").on("click", ".bn-edit", function (t) {
                var e = v($(this).closest(".box-node").attr("data-bid"))[0];
                A(), x(e, !1), $("#box_maker").popup("show");
            }),
            $("#box_list").on("click", ".bn-export", function (t) {
                var e,
                    n,
                    i,
                    r = v($(this).closest(".box-node").attr("data-bid"))[0];
                (e = r), (n = JSON.stringify(e)), (i = LZString.compressToBase64(n)), $("#export_datatext").val(i), $("#panel_export").popup("show");
            }),
            $("#box_list").on("click", ".bn-delete", function (t) {
                var e = $(this).closest(".box-node").attr("data-bid");
                A(),
                    (function (t) {
                        for (var e = null, n = 0; n < r.length; n++) r[n].bid == t && (e = n);
                        null != e && r.splice(e, 1), k();
                    })(e);
            }),
            $(".bp-sim").on("click", ".bpchar-node", function (t) {
                var e = c[l];
                $(this).addClass(e.type + " " + e.label), ++u >= e.amt && ((u = 0), l++, P());
            }),
            k();
    }
    function g(t) {
        return i.filter(function (e) {
            return e.nid == t;
        });
    }
    function v(t) {
        return r.filter(function (e) {
            return e.bid == t;
        });
    }
    function y() {
        return "nlan_" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    function b() {
        var t = $(".char-node.selected").length;
        15 == t
            ? ($(".char-node:not(.selected)").addClass("dim"),
                "cn" == e || "tw" == e ? $("#char_selectcount").html("以选 " + t + " 位人物") : $("#char_selectcount").html(t + " Character(s) selected."),
                $("#box_save, #box_name").removeClass("disable"))
            : 0 == t
                ? ($("#char_selectcount").html(d[e]), _())
                : ($(".char-node.dim").removeClass("dim"), "cn" == e || "tw" == e ? $("#char_selectcount").html("以选 " + t + " 位人物") : $("#char_selectcount").html(t + " Character(s) selected."), _());
    }
    function _() {
        $("#box_save, #box_name").addClass("disable");
    }
    function w() {
        $("#box_name, .box-actionlink > label").removeClass("form-err"), $(".char-node").removeClass("selected dim"), $("#box_name").val(""), b();
    }
    function x(t, e) {
        w(), (s = e ? "" : t.bid);
        for (var n = 0; n < t.units.length; n++) $('#box_maker .char-node[data-name="' + t.units[n] + '"]').addClass("selected");
        $("#box_name").val(t.name), b();
    }
    function k() {
        if (($("#box_list").empty(), $("#box_matchp12, #box_clearp12").addClass("disable"), 0 == r.length)) $(".bp-sim").empty(), $("#box_list").html(p[e]);
        else if (r.length >= 1) {
            $("#box_clearp12").removeClass("disable");
            for (var n = "", i = 0; i < r.length; i++)
                n +=
                    '<div class="box-node" data-bid="' +
                    r[i].bid +
                    '"><div class="bn-name">' +
                    r[i].name +
                    '</div><div class="bn-actions"><div class="bn-assign1 button">P1</div><div class="bn-assign2 button">P2</div><div class="bn-edit button"></div><div class="bn-export button"></div><div class="bn-delete button"></div></div></div>';
            $("#box_list").html(n);
        }
        var o;
        r.length >= 10 ? $("#box_add").addClass("disable") : $("#box_add").removeClass("disable"), (o = JSON.stringify(r)), localStorage.setItem(t, o);
    }
    function T(t, e) {
        for (var i = '<div class="bp-playerbox">', r = v(e)[0], s = 0; s < r.units.length; s++) {
            var l = g(r.units[s]);
            i += '<div class="bpchar-node" data-name="' + l[0].nid + '"><div class="img"><img src="' + n + l[0].thumbnail + '"/></div></div>';
        }
        (i += "</div>"), $("#box_" + t).html(i), $("#box_" + t).attr("data-box_name", r.name), $("#box_" + t).attr("data-box_bid", r.bid), "p1" == t && (o = !0), "p2" == t && (a = !0);
    }
    function C() {
        o && a ? $("#box_matchp12").removeClass("disable") : $("#box_matchp12").addClass("disable");
    }
    function P() {
        if (l >= c.length)
            $("#match_ntext").html(f[e]),
                $(".bp-sim").removeClass("matched active"),
                $(".bp-sim").addClass("end"),
                $("#site_saveimage").show(),
                (function () {
                    for (var t = {}, e = ["first", "second", "third", "fourth", "fifth"], n = [], i = [], r = [], o = [], a = $("#box_p1"), s = $("#box_p2"), l = 0; l < 5; l++)
                        (n[l] = S("p1", ".ban." + e[l])), (i[l] = S("p1", ".pick." + e[l])), (r[l] = S("p2", ".ban." + e[l])), (o[l] = S("p2", ".pick." + e[l]));
                    (t.p1 = { boxname: a.attr("data-box_name"), boxid: a.attr("data-box_bid"), bans: n, picks: i, remain: S("p1", ":not(.ban):not(.pick)") }),
                        (t.p2 = { boxname: s.attr("data-box_name"), boxid: s.attr("data-box_bid"), bans: r, picks: o, remain: S("p2", ":not(.ban):not(.pick)") }),
                        (t.mapid = $("#match_mapcontent .cmatchmap").attr("data-type")),
                        _matchStats.createTimeline(t);
                })();
        else {
            var t = c[l];
            $("#match_ntext").html(t.text[e]), $(".bp-sim").removeClass("active"), $("#box_p" + t.target).addClass("active");
        }
    }
    function A() {
        (l = 0),
            (u = 0),
            (o = !1),
            (a = !1),
            $("#match_ntext").empty(),
            $(".bn-assign1, .bn-assign2").removeClass("toggle"),
            $(".bp-sim").empty(),
            $(".bp-sim").removeClass("matched active"),
            $(".bp-sim").attr("data-box_name", ""),
            $(".bp-sim").attr("data-box_bid", ""),
            $("#box_matchp12").addClass("disable"),
            $("#match_mapcontent").empty(),
            $("#site_saveimage").hide(),
            _matchStats.clearTimeline();
    }
    function S(t, e) {
        for (var n = [], i = $("#box_" + t + " .bpchar-node" + e), r = 0; r < i.length; r++) n.push(i.eq(r).attr("data-name"));
        return n;
    }
    return (
        m(),
        {
            init: m,
            destroy: function () { },
            getboxes: function () {
                console.log(r);
            },
            getChar: g,
        }
    );
})(),
    _matchStats = (function () {
        function t() {
            $(".button.button-timelineec").on("click", function (t) {
                t.preventDefault(), t.stopPropagation(), $("#match_stats").toggleClass("expand");
            });
        }
        function e(t) {
            return (imglinkObj = _banpick.getChar(t)[0]), "assets/img/site_assets/" + imglinkObj.thumbnail;
        }
        return (
            t(),
            {
                init: t,
                destroy: function () { },
                createTimeline: function (t) {
                    for (var n = "", i = 1; i <= 5; i++) {
                        for (var r = "", o = "", a = "", s = "", l = 0; l < t.p1.bans[i - 1].length; l++) r += '<div class="mtl-charnode"><img src="' + e(t.p1.bans[i - 1][l]) + '"/></div>';
                        for (l = 0; l < t.p2.bans[i - 1].length; l++) o += '<div class="mtl-charnode"><img src="' + e(t.p2.bans[i - 1][l]) + '"/></div>';
                        for (l = 0; l < t.p1.picks[i - 1].length; l++) a += '<div class="mtl-charnode"><img src="' + e(t.p1.picks[i - 1][l]) + '"/></div>';
                        for (l = 0; l < t.p2.picks[i - 1].length; l++) s += '<div class="mtl-charnode"><img src="' + e(t.p2.picks[i - 1][l]) + '"/></div>';
                        (n += '<div class="mtl-group m-ban" data-seq="' + i + '">'),
                            (n += '<div class="mtl-node m-p1"><div class="mtl-label">Ban</div><div class="mtl-chars">' + r + "</div></div>"),
                            (n += '<div class="mtl-node m-p2"><div class="mtl-label">Ban</div><div class="mtl-chars">' + o + "</div></div>"),
                            (n += "</div>"),
                            (n += '<div class="mtl-group m-pick" data-seq="' + i + '">'),
                            (n += '<div class="mtl-node m-p1"><div class="mtl-label">Pick</div><div class="mtl-chars">' + a + "</div></div>"),
                            (n += '<div class="mtl-node m-p2"><div class="mtl-label">Pick</div><div class="mtl-chars">' + s + "</div></div>"),
                            (n += "</div>");
                    }
                    (n +=
                        '<div class="mtl-group m-left">        <div class="mtl-node m-p1">            <div class="mtl-chars"><div class="mtl-charnode"><img src="' +
                        e(t.p1.remain[0]) +
                        '"/></div></div>        </div>        <div class="mtl-node m-p2">            <div class="mtl-chars"><div class="mtl-charnode"><img src="' +
                        e(t.p2.remain[0]) +
                        '"/></div></div>        </div>        </div>'),
                        $("#matchstats_timeline").html(n),
                        $("#match_statscontainer").show();
                },
                clearTimeline: function () {
                    $("#match_statscontainer").hide();
                },
            }
        );
    })();
window.addEventListener("pageshow", function () {
    TweenMax.to("#transition_bg", 1.4, {
        autoAlpha: 0,
        onComplete: function () {
            document.body.classList.add("init-animate"), (document.querySelector("#transition_bg").style.display = "none");
        },
    });
}),
    $(function () { });
