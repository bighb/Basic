function getApi (params) {
    return 22
  };
  function getName(async () => {
    const a = await  getApi()
    return a+1
  })
  getName()
  