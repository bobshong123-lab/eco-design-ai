// 自然建筑知识库 - 泥土建筑技术
export const knowledgeBase = {
  // 土团房 (Cob House)
  cob: {
    name: "土团房 (Cob House)",
    description: "土团房是一种古老的自然建筑技术，使用泥土、沙子和稻草混合成土团来建造墙体。",
    materials: [
      "泥土: 砂质黏土，含沙量约70%",
      "沙子: 粗砂，增加结构强度",
      "稻草: 作为加固纤维",
      "水: 适量，保持混合湿度"
    ],
    ratio: "泥土:沙子:稻草 = 3:3:1 (体积比)",
    pros: [
      "材料成本低，就地取材",
      "良好的热容和湿度调节",
      "可塑性强，可建造曲线形态",
      "防火、隔音效果好"
    ],
    cons: [
      "施工周期较长",
      "需要较高技术",
      "墙体较厚，占地面积大",
      "不适合潮湿地区"
    ],
    construction: [
      "1. 土壤测试：取土与沙混合，加水捏成球状，从1米高处落下不散开即可",
      "2. 制作土团：将混合料堆成锥形，边踩踏边加水至适当湿度",
      "3. 建造墙体：从基础开始，逐层铺设土团，每层充分压实",
      "4. 预留干燥时间：每层建完后需要2-3天干燥",
      "5. 开设门窗：使用木板或模板预留开口",
      "6. 表面处理：使用石灰浆或泥土砂浆抹面"
    ],
    climate: "适合温带至亚热带，干燥地区优先",
    budget: "材料成本约200-400元/平方米"
  },

  // 土袋房 (Earthbag House)
  earthbag: {
    name: "土袋房 (Earthbag House)",
    description: "使用聚丙烯编织袋填充当地土壤，层层堆叠形成的建筑结构。",
    materials: [
      "聚丙烯编织袋: 25-50kg 规格",
      "当地土壤: 优先使用含一定黏土的土",
      "铁丝: 用于加固层",
      "barbed wire: 防盗刺铁丝"
    ],
    pros: [
      "施工简单，可自学",
      "充分利用当地材料",
      "优秀的抗震性能",
      "建造速度快"
    ],
    cons: [
      "需要购买编织袋",
      "对土壤类型有要求",
      "外观较朴素",
      "需要专业指导"
    ],
    construction: [
      "1. 地基处理：清理地面，铺设碎石垫层",
      "2. 放置底层袋子：铺设一层袋子，用夯实",
      "3. 添加铁丝：在每层之间放置铁丝增加粘结",
      "4. 层层堆叠：逐层填充、夯实、放置铁丝",
      "5. 制作拱顶：使用曲线模板建造圆顶",
      "6. 防水处理：外表面涂刷石灰浆或水泥砂浆"
    ],
    climate: "适合各种气候，尤其地震多发区",
    budget: "材料成本约300-500元/平方米"
  },

  // 夯土墙 (Rammed Earth)
  rammedEarth: {
    name: "夯土墙 (Rammed Earth)",
    description: "将湿润的土料分层倒入模板中，每层夯实后形成坚固的墙体。",
    materials: [
      "当地土壤: 含砂量60-70%的砂质土",
      "石灰: 少量添加增加耐久性",
      "水: 适量"
    ],
    ratio: "砂:黏土:石灰 = 70:25:5",
    pros: [
      "结构强度高，耐久性好",
      "美观自然，可添加颜料",
      "良好的热惯性",
      "可回收再利用"
    ],
    cons: [
      "需要模板设备",
      "施工强度大",
      "需要压实设备",
      "受天气影响"
    ],
    construction: [
      "1. 土壤配比测试：找到最佳含水率",
      "2. 制作模板：使用木板或金属板",
      "3. 倒入土料：每层15-20cm",
      "4. 夯实：使用气夯或人力夯",
      "5. 逐层建造：每层充分夯实后再加下一层",
      "6. 拆模养护：28天后拆除模板"
    ],
    climate: "适合干燥地区，温差大的地方",
    budget: "材料成本约400-800元/平方米"
  },

  // 土砖 (Adobe)
  adobe: {
    name: "土砖 (Adobe)",
    description: "使用土模具制成的太阳晒干砖，是最古老的建筑材料之一。",
    materials: [
      "黏土: 含黏土量30-40%",
      "沙子: 粗砂，防止开裂",
      "稻草: 切断成5-10cm长度",
      "水: 适量"
    ],
    ratio: "黏土:沙子:稻草 = 4:4:2",
    pros: [
      "制作简单，可DIY",
      "成本最低",
      "可制作各种尺寸",
      "良好的保温性能"
    ],
    cons: [
      "需要大量人工",
      "受天气限制",
      "抗压强度较低",
      "需要防水处理"
    ],
    construction: [
      "1. 配料：按比例混合所有材料",
      "2. 加水搅拌：浸泡24小时后搅拌",
      "3. 制作砖坯：将泥浆倒入模具，夯实",
      "4. 晾晒：避免阳光直射，自然干燥7-14天",
      "5. 堆砌：使用泥浆作为粘合剂",
      "6. 防水：外墙涂刷石灰浆或防水涂层"
    ],
    climate: "适合干旱至半干旱地区",
    budget: "材料成本约100-200元/平方米"
  },

  // 竹编泥墙 (Wattle and Daub)
  wattleAndDaub: {
    name: "竹编泥墙 (Wattle and Daub)",
    description: "使用竹条或树枝编织成墙体骨架，再填充泥土灰泥的建筑方式。",
    materials: [
      "竹子: 竹片或细竹条",
      "树枝: 直径1-3cm",
      "泥土: 砂质土",
      "稻草或麦草: 作为纤维"
    ],
    pros: [
      "材料来源广泛",
      "施工灵活",
      "通风良好",
      "可修复性强"
    ],
    cons: [
      "耐久性相对较低",
      "防火性能差",
      "需要定期维护",
      "防虫处理必要"
    ],
    construction: [
      "1. 制作框架：先立柱子，安装横梁",
      "2. 编织墙骨：将竹条或树枝编织成网格",
      "3. 第一次抹灰：使用较稀的泥浆填充",
      "4. 干燥：待第一层干燥后",
      "5. 第二次抹灰：使用加稻草的稠泥浆",
      "6. 表面处理：使用石灰浆或腻子"
    ],
    climate: "适合热带、亚热带湿润地区",
    budget: "材料成本约150-300元/平方米"
  },

  // 火箭炕/火箭炉
  rocketStove: {
    name: "火箭炕/火箭炉 (Rocket Stove)",
    description: "高效燃烧木材的炉灶系统，热效率可达普通炉灶的5倍以上。",
    materials: [
      "砖块: 耐火砖或普通砖",
      "黄土: 炉体主要材料",
      "沙子: 作为隔热材料",
      "金属管: 烟囱用"
    ],
    pros: [
      "热效率高，节省燃料",
      "燃烧充分，污染小",
      "结构简单，易建造",
      "可做饭、取暖、热水"
    ],
    cons: [
      "需要一定的技术",
      "烟囱位置要求高",
      "清理灰烬较麻烦",
      "不适合大型建筑"
    ],
    construction: [
      "1. 基础：使用砖块或石头铺设",
      "2. 燃烧室：用耐火砖砌筑J型通道",
      "3. 烟道：连接燃烧室与烟囱",
      "4. 烟囱：使用金属管或砖砌，高度至少3米",
      "5. 灶台：用砖和泥土找平",
      "6. 测试：先小火烧试，观察排烟情况"
    ],
    climate: "适合所有需要取暖的地区",
    budget: "材料成本约300-600元/套"
  },

  // 面包窑
  breadOven: {
    name: "面包窑 (Bread Oven)",
    description: "厚土建造的蓄热型烤窑，可以烤面包、披萨，也可作为热源。",
    materials: [
      "砖块: 耐火砖",
      "黄土: 窑体结构",
      "沙子: 隔热层",
      "稻草: 增加强度"
    ],
    pros: [
      "保温效果好",
      "烤出的食物风味独特",
      "可作为热源",
      "使用寿命长"
    ],
    cons: [
      "升温较慢",
      "需要技巧操作",
      "占用空间较大",
      "建造要求高"
    ],
    construction: [
      "1. 基础：混凝土或砖石基础",
      "2. 底座：红砖砌筑，填充隔热材料",
      "3. 窑室：用耐火砖拱形砌筑",
      "4. 隔热层：珍珠岩或陶粒",
      "5. 外壳：用黄土夯实或砖砌",
      "6. 烟囱：后部设置排烟口"
    ],
    climate: "适合温带至寒带",
    budget: "材料成本约800-1500元/座"
  }
};

// 根据用户问题检索相关知识
export function retrieveKnowledge(query: string): string[] {
  const queryLower = query.toLowerCase();
  const relevantDocs: string[] = [];

  for (const [key, value] of Object.entries(knowledgeBase)) {
    // 检查是否匹配关键字
    if (
      queryLower.includes(key) ||
      queryLower.includes(value.name) ||
      queryLower.includes('泥土') && ['cob', 'earthbag', 'rammedEarth', 'adobe', 'wattleAndDaub'].includes(key) ||
      queryLower.includes('火') && ['rocketStove', 'breadOven'].includes(key) ||
      queryLower.includes('炉') && key === 'rocketStove' ||
      queryLower.includes('窑') && key === 'breadOven'
    ) {
      relevantDocs.push(formatKnowledge(key, value));
    }
  }

  // 如果没有精确匹配，返回所有知识
  if (relevantDocs.length === 0) {
    // 随机返回2-3个建筑类型的知识
    const keys = Object.keys(knowledgeBase);
    const shuffled = keys.sort(() => 0.5 - Math.random()).slice(0, 3);
    return shuffled.map(key => formatKnowledge(key, knowledgeBase[key as keyof typeof knowledgeBase]));
  }

  return relevantDocs;
}

function formatKnowledge(key: string, data: any): string {
  return `
## ${data.name}

### 简介
${data.description}

### 材料
${data.materials.map((m: string) => `- ${m}`).join('\n')}

### 优点
${data.pros.map((p: string) => `- ${p}`).join('\n')}

### 缺点
${data.cons.map((c: string) => `- ${c}`).join('\n')}

### 施工要点
${data.construction.map((c: string) => `- ${c}`).join('\n')}

### 适用气候
${data.climate}

### 预算参考
${data.budget}
`;
}

// 气候与建筑类型匹配建议
export const climateRecommendations: Record<string, string[]> = {
  "寒带": ["夯土墙", "土团房", "火箭炕", "面包窑"],
  "温带": ["土团房", "土袋房", "土砖", "竹编泥墙", "火箭炕"],
  "热带": ["竹编泥墙", "土袋房", "土砖"],
  "干旱": ["土砖", "夯土墙", "土袋房", "火箭炕"],
  "湿润": ["土袋房", "竹编泥墙", "需要做好防潮处理"]
};

// 地形与基础建议
export const terrainAdvice: Record<string, string> = {
  "平地": "可直接做条形基础，建议深度30-50cm，宽度40-60cm",
  "斜坡": "需要阶梯式基础，考虑挡土墙设计，基础深度需超过冻土层",
  "山地": "需要专业勘察，重点处理排水，建议使用钢筋混凝土基础",
  "软地": "需要换填或打桩，建议基础深度进入硬土层至少1米"
};

export default knowledgeBase;
