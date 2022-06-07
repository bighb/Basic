const list = [
    "武汉科学技术馆（新馆）",
    "东湖观光氦气球",
    "武科大",
    "武汉科技大学"
  ];
  const regex = new RegExp("东?湖?氦?气?球");
  
  for (const index in list) {
    console.log(index + ". " + list[index].match(regex)?.[0]);
  }