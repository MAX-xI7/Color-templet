// Created by The Boy Who Lived

window.addEventListener('DOMContentLoaded', () => {
    const vibes = {
      galaxy: ["#1B0035", "#4B0082", "#7D5BA6", "#2D1E40", "#8A2BE2", "#3F1B59", "#A28FC5"],
      forest: ["#013220", "#2E8B57", "#228B22", "#006400", "#355E3B", "#0B3D02", "#3A5F0B"],
      ocean: ["#003366", "#0077BE", "#1CA9C9", "#4682B4", "#5B92E5", "#00CED1", "#2E8BC0"],
      candy: ["#FFC0CB", "#FFD1DC", "#FFA6C9", "#FF69B4", "#FFB6C1", "#FDB9C8", "#FF85A1"],
      desert: ["#EDC9AF", "#C19A6B", "#E1A95F", "#F4A460", "#DEB887", "#D2B48C", "#BC987E"],
      ice: ["#E0FFFF", "#D8F3FF", "#B0E0E6", "#AFEEEE", "#CFFAFE", "#E5F9F6", "#ADD8E6"],
      fire: ["#FF4500", "#FF6347", "#FF2400", "#FF7F50", "#FF6F61", "#D2691E", "#E25822"],
      wood: ["#5C4033", "#8B4513", "#A0522D", "#CD853F", "#D2B48C", "#C19A6B", "#DEB887"],
      sky: ["#87CEEB", "#00BFFF", "#1E90FF", "#ADD8E6", "#B0E0E6", "#87CEFA", "#4682B4"],
      storm: ["#778899", "#708090", "#2F4F4F", "#696969", "#A9A9A9", "#B0C4DE", "#C0C0C0"],
      fruit: ["#FF6347", "#FFA500", "#FFFF00", "#ADFF2F", "#32CD32", "#00FA9A", "#FF69B4"],
      orange: ["#FFA500", "#FF8C00", "#FF7F50", "#FF6F00", "#FFD580", "#FFB347", "#FF9F00"],
      moon: ["#F0E68C", "#E5E4E2", "#C0C0C0", "#D3D3D3", "#F5F5F5", "#DCDCDC", "#B0C4DE"],
      icecream: ["#FFF0F5", "#FFDAB9", "#FAFAD2", "#F5DEB3", "#E6E6FA", "#FFEFD5", "#FFFACD"],
      lava: ["#CF1020", "#FF2400", "#E34234", "#B22222", "#DC143C", "#D1001C", "#A40000"],
      shadow: ["#1C1C1C", "#2F2F2F", "#3E3E3E", "#4D4D4D", "#5C5C5C", "#6B6B6B", "#0A0A0A"],
      neon: ["#39FF14", "#FF073A", "#00FFFF", "#FF00FF", "#FFFF00", "#FF6EC7", "#0FF0FC"],
      twilight: ["#6A5ACD", "#9370DB", "#8A2BE2", "#9400D3", "#BA55D3", "#D8BFD8", "#DDA0DD"],
      emerald: ["#50C878", "#2E8B57", "#3CB371", "#228B22", "#66CDAA", "#98FB98", "#8FBC8F"],
sakura: [ "#FADADD", "#FFB7C5", "#FF69B4", "#FFC0CB", "#FDB2D1", "#FFF0F5", "#FFD3E0" ],
  mocha: [ "#3B2F2F", "#4B3621", "#7B3F00", "#A9746E", "#C9A38D", "#D2B48C", "#C2B280" ],
  steel: [ "#43464B", "#5E5F60", "#6C7A89", "#8A8F99", "#A2A9B0", "#C0C0C0", "#D3D3D3" ],
  rainforest: [ "#014421", "#228B22", "#006400", "#2E8B57", "#3CB371", "#556B2F", "#4F7942" ],
  cyberpunk: [ "#FF00C8", "#00FFE5", "#FCEE09", "#FF3CAC", "#833AB4", "#00F0FF", "#F20089" ],
  sunset: [ "#FF7E5F", "#FD5E53", "#FF6F61", "#FFB347", "#FDB813", "#FFA07A", "#FA8072" ],
  arctic: [ "#E0FFFF", "#AFEEEE", "#B0E0E6", "#D6F5F5", "#CDEDF6", "#F0FFFF", "#E6F7FF" ],
  velvet: [ "#800020", "#8B0000", "#A52A2A", "#B22222", "#C71585", "#9932CC", "#581845" ],
  clay: [ "#B66E41", "#D2691E", "#A0522D", "#CD853F", "#8B4513", "#DEB887", "#C19A6B" ],
  ash: [ "#B2BEB5", "#A9A9A9", "#888C8D", "#D3D3D3", "#A0A0A0", "#BEBEBE", "#B0C4DE" ],
  candy: [ "#FF69B4", "#FFB6C1", "#FFD700", "#FF1493", "#FF82AB", "#FF85A1", "#FF6EC7" ],
  amber: [ "#FFBF00", "#FF9F00", "#FF8C00", "#FFA500", "#FFC107", "#E49B0F", "#E07B00" ],
  denim: [ "#1560BD", "#1E3F66", "#2B547E", "#3A5FCD", "#4682B4", "#5B92E5", "#6A5ACD" ],
  peach: [ "#FFE5B4", "#FFCC99", "#FFB07C", "#FFDAB9", "#FFD1A9", "#FAD6BF", "#FDD5B1" ],
  swamp: [ "#4C6444", "#6B8E23", "#556B2F", "#8A9A5B", "#708238", "#7D8F4E", "#9DAC6B" ],
  frostbite: [ "#E0F7FA", "#B2EBF2", "#81D4FA", "#4DD0E1", "#00BCD4", "#00ACC1", "#0097A7" ],
  mint: [ "#98FF98", "#AAF0D1", "#BDFCC9", "#A0D6B4", "#C7FCEC", "#D0F0C0", "#9FE2BF" ],
  eclipse: [ "#0D0D0D", "#1C1C1C", "#2E2E2E", "#3B3B3B", "#4D4D4D", "#2F2F4F", "#191970" ],
  bubblegum: [ "#FFC1CC", "#FFB6C1", "#FF69B4", "#FF85A1", "#FDAEAE", "#FCDFFF", "#F5A9BC" ],
  smoke: [ "#D3D3D3", "#BEBEBE", "#A9A9A9", "#8E8E8E", "#7E7E7E", "#6E6E6E", "#585858" ],
  moss: [ "#8A9A5B", "#6B8E23", "#4B5320", "#556B2F", "#667C26", "#A9BA9D", "#717A5B" ],
  flame: [ "#FF6F00", "#FF8C00", "#FF4500", "#FF3C00", "#E25822", "#D9381E", "#B22222" ],
  grape: [ "#6F2DA8", "#8E44AD", "#A569BD", "#9B59B6", "#B87FD1", "#C084FC", "#7A378B" ],
  daisy: [ "#FFF8DC", "#FFFACD", "#FAFAD2", "#FFFFE0", "#F0E68C", "#FFE4B5", "#FFEFD5" ],
  glacier: [ "#E0FFFF", "#AFEEEE", "#B0E0E6", "#ADD8E6", "#87CEEB", "#87CEFA", "#D6F5F5" ],
  ink: [ "#000000", "#1B1B1B", "#2E2E2E", "#3A3A3A", "#4F4F4F", "#1A1A1A", "#111111" ],
  sandstorm: [ "#EDC9Af", "#FFD39B", "#FFDAB9", "#E3A857", "#F4A460", "#DEB887", "#F5DEB3" ],
  skyfall: [ "#87CEEB", "#00BFFF", "#1E90FF", "#4682B4", "#5DADE2", "#82CAFA", "#B0E0E6" ],
  berry: [ "#8B0000", "#A52A2A", "#B22222", "#C71585", "#DC143C", "#8B008B", "#BA55D3" ],
  petrol: [ "#003B46", "#07575B", "#66A5AD", "#96C8A2", "#254E58", "#326273", "#607D8B" ],
  fog: [ "#D6D6D6", "#EDEDED", "#C0C0C0", "#B0BEC5", "#ECEFF1", "#CFD8DC", "#DCDCDC" ],
  blossom: [ "#FFD1DC", "#FFB7C5", "#FF9AA2", "#E6A9EC", "#F4C2C2", "#FADADD", "#F2B2AE" ],
  rust: [ "#B7410E", "#8B4000", "#A0522D", "#C1440E", "#C65D57", "#D2691E", "#BC4A3C" ],
  pearl: [ "#F8F8FF", "#FFFFF0", "#FAF0E6", "#FFF5EE", "#F5F5DC", "#FFFAFA", "#FDFEFE" ],
  jungle: [ "#1C352D", "#355E3B", "#2E8B57", "#3B5323", "#1A4314", "#5A6351", "#476A34" ],
  frost: [ "#E0FFFF", "#F0FFFF", "#D6EAF8", "#AED6F1", "#D1F2EB", "#D5F5E3", "#F5FFFA" ],
  cloud: [ "#F5F5F5", "#E0E0E0", "#D3D3D3", "#CCCCCC", "#B0C4DE", "#F8F8FF", "#E6E6FA" ],
  rustedGold: [ "#B8860B", "#CD853F", "#DAA520", "#C9AE5D", "#B87333", "#A67B5B", "#D2B48C" ],
  caramel: [ "#FFDDA0", "#FFCBA4", "#FFB347", "#D2B48C", "#B5651D", "#C68642", "#8B5C29" ],
  honey: [ "#FFC30B", "#FFD700", "#FFB90F", "#FADA5E", "#E6BE8A", "#FFDB58", "#F9A602" ],
  foggyBlue: [ "#B0C4DE", "#A9CCE3", "#D6EAF8", "#D1DCE5", "#BDCFEF", "#C2DFFF", "#DDEEFF" ],
  blush: [ "#FF6F61", "#FFB6C1", "#F88379", "#FFD1DC", "#FFC0CB", "#FF5E78", "#FF91A4" ],
  flameberry: [ "#DC143C", "#FF6347", "#FF4500", "#E34234", "#FF4040", "#E30B5D", "#B22222" ],
  coconut: [ "#FFF5E1", "#FAF0E6", "#F8F8FF", "#FFFFF0", "#FFF8DC", "#FFFACD", "#F5F5DC" ],
  denimSky: [ "#7EC8E3", "#6CA0DC", "#4682B4", "#6699CC", "#87CEEB", "#A2C2E2", "#9DC3E6" ],
  cave: [ "#4B4B4B", "#383838", "#2F2F2F", "#3E3E3E", "#5C5C5C", "#292421", "#2A2A2A" ],
  mintchoco: [ "#98FF98", "#AAF0D1", "#BDFCC9", "#A0D6B4", "#D2B48C", "#8B5C29", "#5D3A00" ],
  lemonade: [ "#FFF44F", "#FFFACD", "#FAFAD2", "#FDFD96", "#F5FF8D", "#FFFE7A", "#FFFF99" ],
  granite: [ "#7F7F7F", "#8B8C89", "#A9A9A9", "#848884", "#696969", "#5F5F5F", "#707070" ],
  jadeWhisper: [ "#00A86B", "#50C878", "#7FFFD4", "#66CDAA", "#2E8B57", "#32CD32", "#3EB489" ],
  asphalt: [ "#2C2C2C", "#3B3B3B", "#4F4F4F", "#5E5E5E", "#444444", "#282828", "#383838" ],
  rosewood: [ "#65000B", "#7E2811", "#8B1A1A", "#A52A2A", "#B22222", "#C04000", "#8A0707" ],
  vaporwave: [ "#FF77FF", "#FFB6C1", "#FF69B4", "#8A2BE2", "#00FFFF", "#E0B0FF", "#FFA6FF" ],
  canyonDust: [ "#EDC9AF", "#C19A6B", "#DEB887", "#D2B48C", "#E3A857", "#C49E73", "#B68F40" ],
  pinecone: [ "#5E4B3C", "#704214", "#8B5E3C", "#7B3F00", "#6F4E37", "#A67B5B", "#4B3621" ],
  sapphireNight: [ "#0F52BA", "#082567", "#191970", "#1D2951", "#2C2D75", "#283A90", "#27408B" ],
  vintagePeach: [ "#FFDAB9", "#FAD6BF", "#F9CBBE", "#FFBCB3", "#FFB07C", "#FFE5B4", "#FFCBA4" ],
  thunder: [ "#3B3C36", "#43464B", "#2E2E2E", "#585858", "#3F3F3F", "#49423D", "#5D5D5D" ],
  lilacBloom: [ "#C8A2C8", "#D8BFD8", "#E6E6FA", "#DCD0FF", "#B497BD", "#A288A6", "#F3E5F5" ],
  mossStone: [ "#8A9A5B", "#A2B14C", "#7C9A02", "#6B8E23", "#556B2F", "#708238", "#87986A" ],
  inkspill: [ "#0A0A0A", "#1A1A1A", "#202124", "#2B2B2B", "#141414", "#1C1C1C", "#2E2E2E" ],
  cherrywood: [ "#8E3A59", "#A52A2A", "#B94E48", "#8B0000", "#912F40", "#70193D", "#5D1F1F" ],
  aurora: [ "#DA70D6", "#BA55D3", "#9370DB", "#7B68EE", "#00FFEF", "#E0FFFF", "#F4BBFF" ],
  terracotta: [ "#E2725B", "#D96C52", "#C1440E", "#B7410E", "#BC544B", "#FF6347", "#D36E70" ],
  linenBook: [ "#FAF0E6", "#F5F5DC", "#FFF8DC", "#ECE5C7", "#E6D8AD", "#EEDC82", "#FCF6DB" ],
  oxidizedCopper: [ "#4A646C", "#56806F", "#607D8B", "#5B7F87", "#4E6E81", "#6C7D8A", "#4C6A74" ],
  cornflowerField: [ "#6495ED", "#B0E0E6", "#ADD8E6", "#89CFF0", "#6CA0DC", "#A2C2E2", "#9BB7D4" ],
  mintFog: [ "#E0F8F7", "#C2F9FB", "#D1FFFA", "#B2F7EF", "#CFFFE5", "#CCFFE5", "#E6FFFA" ],
  astralbeam: ["#3C1361", "#5E239D", "#8547C6", "#C792E9", "#EBD5FF", "#9A5AC5", "#460B64"],
  sakuradrift: ["#F9E3E3", "#FAC8D0", "#F99CA4", "#E67A89", "#CC6A87", "#A85A72", "#6E394B"],
  metalvoid: ["#1A1A1A", "#3B3B3B", "#595959", "#7C7C7C", "#A6A6A6", "#C2C2C2", "#E0E0E0"],
  frostbyte: ["#DFFFFF", "#C6F6FF", "#A4E2F7", "#6FC2E6", "#3CA9D1", "#1C8FB8", "#007A9E"],
  duneghost: ["#F2E9DC", "#E0C097", "#D8B384", "#C49A6C", "#AB7E5C", "#946C4A", "#7C5C3B"],
  dreampop: ["#E6ADEC", "#C383F2", "#A459F5", "#7D47D8", "#523EA6", "#352F6E", "#1F1B3A"],
  junglejuice: ["#004D40", "#00695C", "#00796B", "#26A69A", "#80CBC4", "#B2DFDB", "#E0F2F1"],
  infernoblush: ["#FF6F61", "#FF5A36", "#FF3E00", "#E62E00", "#B22222", "#8B1A1A", "#5C0A0A"],
  claystorm: ["#B2675E", "#CE7B6D", "#D88C74", "#E19C7E", "#E9AC8D", "#F2BFA1", "#FBD1B7"],
  oceanmist: ["#DFF6F0", "#BEEBE5", "#9EDFD9", "#7FD3CC", "#60C7BF", "#41BBB3", "#22AFA6"],
  neonhoney: ["#FFEC99", "#FFD54F", "#FFCA28", "#FFC107", "#FFB300", "#FFA000", "#FF8F00"],
  gravebloom: ["#403233", "#5C3D3D", "#7D4E4E", "#9C5F5F", "#B97D7D", "#D6A2A2", "#F2CCCC"],
  denimsunset: ["#22356F", "#324A9B", "#4A63B7", "#7288D1", "#A4ADEB", "#C3CAF7", "#E2E7FF"],
  coffeecream: ["#4B3832", "#854442", "#A67B5B", "#D9B382", "#EFD9B4", "#F7E7CE", "#FFF8E7"],
  poisonberry: ["#2D033B", "#810CA8", "#C147E9", "#E5B8F4", "#FDE2F3", "#A555EC", "#7A08FA"],
  smokesky: ["#CDD0CB", "#A3B5A8", "#8B9E91", "#6F8375", "#596C60", "#424F49", "#2B3430"],
  terracrush: ["#A97155", "#BF8464", "#D89C74", "#EABF9F", "#F2D2B6", "#F9E5CE", "#FFF9ED"],
  glitchpunk: ["#0FF0FC", "#FF4ECD", "#FF6EC7", "#39FF14", "#FF073A", "#FFAE00", "#00F0FF"],
  sourmelon: ["#A8E6CF", "#DCEDC1", "#FFD3B6", "#FFAAA5", "#FF8B94", "#FFB6B9", "#FFDAC1"],
  midnightcocoa: ["#2B1B17", "#3B2F2F", "#5C4033", "#704214", "#8B5E3C", "#A67B5B", "#C9A38D"],
  ghostorchid: ["#F8F4FF", "#E4DAF1", "#CBB8E2", "#AD92CF", "#8D6BB9", "#6F4CA5", "#4E2D88"],
  bloodorange: ["#FF6B35", "#FF9234", "#FFB347", "#FFD56B", "#FFE29A", "#FFF3C7", "#FFFFEA"],
  dirtydiesel: ["#1C1C1C", "#2D2D2D", "#3F3F3F", "#595959", "#7A7A7A", "#9D9D9D", "#BEBEBE"],
  mushroomcloud: ["#F4F1ED", "#E2DBCF", "#CFC3B0", "#BCAA93", "#A3927A", "#867861", "#6B604B"],
  sapphirewave: ["#102542", "#1D3557", "#26466D", "#3A5A86", "#5580A0", "#89A8C3", "#BDD3E3"],
  paprikaheat: ["#6E1E0C", "#952D0A", "#B7420F", "#DA5A1B", "#FF7F3F", "#FFA66F", "#FFD1A7"],
  moonmilk: ["#FCFCFA", "#EAE8E0", "#D5D2C8", "#C1BEAF", "#ADA995", "#98937D", "#857E67"],
  emeraldtox: ["#00332D", "#00594C", "#007D5E", "#00A06F", "#00C285", "#00E5A1", "#00FFB9"],
  cherrybomb: ["#4E0000", "#730202", "#990505", "#BF0A0A", "#E61919", "#FF5C5C", "#FF9999"],
  vinylnights: ["#1A1A2E", "#2E2E3E", "#45455A", "#6A6A80", "#8E8EA4", "#B1B1C6", "#D4D4E5"],
  cloudpeach: ["#FFF1EB", "#FFE0D2", "#FFCCB6", "#FFB199", "#FF927A", "#FF7360", "#FF544B"],
  rosemarymint: ["#EDF5EC", "#D4E8D2", "#B9D9B8", "#9ECBA0", "#82BD87", "#65AF6E", "#459F55"],
  winterplum: ["#281C2D", "#3D2E41", "#563F57", "#6F526E", "#8D6B88", "#AC87A4", "#CBA4C3"],
  neondreams: ["#00FFE7", "#00C9FF", "#0094FF", "#4C67FF", "#B547F5", "#FF3CAC", "#FF5370"],
  sandstorm: ["#F4E2B9", "#E9D3A7", "#DFC392", "#D2B27B", "#C39F62", "#B18B4B", "#9C7536"],
  sourberry: ["#D7F9F1", "#B6EADA", "#97DCC3", "#75CEAD", "#4EC199", "#23B587", "#00AA77"],
  dirtylemon: ["#F8F32B", "#E8E226", "#D8D11F", "#C7C018", "#B7AF10", "#A69E09", "#969E00"],
  arcticdusk: ["#F0F8FF", "#D6EAF8", "#AED6F1", "#85C1E9", "#5DADE2", "#3498DB", "#2E86C1"],
  hazygrape: ["#ECE1F0", "#DAC8E9", "#C8AFE2", "#B696DC", "#A47DD6", "#9366D0", "#814FCA"],
  inkmoss: ["#122620", "#223D33", "#325646", "#43795D", "#5A9E76", "#7BC49C", "#A2EBC0"],
  velvetdrip: ["#1B0A1F", "#310F3B", "#50175C", "#71227C", "#93349D", "#B654BF", "#DA7EE2"],
  goldenashes: ["#332C1D", "#4F442D", "#6B5C3D", "#88744D", "#A58D5E", "#C2A76F", "#E0C181"],
  icedmatcha: ["#F0FFF4", "#D0F1D4", "#AFE3B4", "#8FD495", "#6EC776", "#4EBB58", "#33A43D"],
  noirrose: ["#2A2A2A", "#3E2D32", "#54323C", "#6B3949", "#854258", "#A44E6A", "#C55C7E"],
  cyberlime: ["#202820", "#384D2A", "#569D3C", "#7FE94C", "#ADFF65", "#D9FF9D", "#F1FFCD"],
  lavendervoid: ["#241E3B", "#3B2D56", "#53407B", "#6B53A0", "#8571BE", "#A394D9", "#C5B9EF"],
  crimsonchai: ["#330000", "#590909", "#7C1B1B", "#A02F2F", "#C54A4A", "#E86B6B", "#FF9A9A"],
  solarblush: ["#FFECE0", "#FFD3C2", "#FFBAA3", "#FFA183", "#FF8965", "#FF7048", "#F55433"],
  icedcobalt: ["#F0F8FF", "#D0E5F9", "#AFCFF1", "#8EB9EA", "#6CA3E2", "#488DD9", "#1F75CF"],
  wildfig: ["#362A2F", "#533B47", "#715061", "#8E667C", "#AC7C98", "#C693B4", "#E0AACE"],
  aquaacid: ["#002F2F", "#005D5D", "#008C8C", "#00BABA", "#00EAEA", "#5FFBFB", "#AFFFFF"],
  mossmood: ["#223324", "#3A553C", "#577D5A", "#75A579", "#93CD99", "#B3F4BA", "#D4FFDB"],
  bittercream: ["#F9F5F0", "#EDE3D9", "#E1D1C3", "#D5C0AD", "#C9AF98", "#BD9E83", "#B18D6E"],
  plumburn: ["#25002E", "#43064F", "#610C70", "#801092", "#9F16B4", "#C01BD8", "#DE63F3"],
  lemonink: ["#FFFDD0", "#FAF37C", "#EAEF3E", "#D0D820", "#B5C005", "#9AA800", "#808F00"],
  burntpearl: ["#3F2C30", "#5D3D42", "#7C4F55", "#9B6169", "#BA7380", "#DA8698", "#FA9AB0"],
  ozoneglitch: ["#000000", "#1A1A40", "#2E2E80", "#3F3FBB", "#4F4FF0", "#7A7AFF", "#B5B5FF"],
  softember: ["#FFF6EC", "#FFE8D1", "#FFD9B7", "#FFCB9D", "#FFBD84", "#FFAE6A", "#FF9E50"],
  hazeamber: ["#4D2C1B", "#694225", "#865A30", "#A3733C", "#C08D48", "#DDA956", "#FBC668"],
  electricfog: ["#E9EAFB", "#C2C6F7", "#9DA3F4", "#7981F0", "#565FEC", "#373DE7", "#2121E3"],
  midnightgelato: ["#0B0C10", "#1F2833", "#2D3E50", "#45A29E", "#66FCF1", "#C5C6C7", "#FFFFFF"],
  moltenberry: ["#210022", "#3D003C", "#5A0057", "#790072", "#99008F", "#C300B2", "#F000D8"],
  desertwine: ["#3F2B1B", "#5C3F2D", "#7A5341", "#976757", "#B47B6E", "#D28F86", "#F0A39E"],
  glitchmelon: ["#00312F", "#005D5A", "#008A87", "#00B7B4", "#2AE4E1", "#74FFFF", "#B8FFFF"],
  hazedmint: ["#F8FFFA", "#E0F4E8", "#C8E9D6", "#B0DFC4", "#98D4B2", "#80CAA0", "#68BF8F"],
  caramelmyst: ["#2C1B0F", "#4E3224", "#70593A", "#927050", "#B58766", "#D79E7D", "#FAC694"],
  bluevenom: ["#0A0A23", "#12124D", "#1B1B80", "#2323B3", "#2C2CE6", "#6666FF", "#AFAFFF"],
  velvetnectar: ["#3B1E27", "#5A2F3D", "#794155", "#99526D", "#BA6486", "#DA759E", "#FA86B7"],
  prismvoid: ["#110022", "#2A004B", "#430075", "#5C00A0", "#7500CA", "#8E00F5", "#AC47FF"],
  wildguava: ["#FFFBF1", "#FFE7D4", "#FFD3B8", "#FFBF9B", "#FFAB7E", "#FF9762", "#FF8345"],
  greyshock: ["#111111", "#2C2C2C", "#474747", "#626262", "#7E7E7E", "#999999", "#B4B4B4"],
  tealstorm: ["#062E30", "#0C5C5F", "#129A90", "#18D8C0", "#43F0D1", "#7AFAE1", "#B1FFF0"],
  flamecookie: ["#220F00", "#402100", "#613300", "#844700", "#A95B00", "#CE7000", "#F38600"],
  lilacbreath: ["#F9F5FF", "#E6DFFF", "#D3CAFF", "#C0B4FF", "#AD9EFF", "#9A89FF", "#8773FF"],
  toxiclavish: ["#12001B", "#29003D", "#410060", "#590082", "#7100A5", "#8900C7", "#A100EA"],
  papayaglow: ["#FFF8F2", "#FFE6CF", "#FFD4AD", "#FFC28A", "#FFB068", "#FF9F45", "#FF8D23"],
  dreamyink: ["#1A1A2E", "#282850", "#363672", "#454594", "#5353B6", "#6262D8", "#7070FA"],
  peachstone: ["#291B15", "#4A2D25", "#6B3F35", "#8C5145", "#AD6355", "#CE7565", "#EF8775"],
  mintgalaxy: ["#E6FFF9", "#C0F1E3", "#9AE2CD", "#74D4B7", "#4EC6A1", "#28B78B", "#00A975"],
  chromacold: ["#000814", "#001D3D", "#003566", "#00509D", "#2A6FCD", "#6A8FDB", "#AAB0E8"],
  honeydrip: ["#2C1E11", "#4B311F", "#6A452E", "#89693C", "#A78C4A", "#C6AF59", "#E5D367"],
  ghostsakura: ["#FFF9FC", "#FCE5EF", "#F8D2E2", "#F4BED5", "#F0ABC8", "#EC97BB", "#E883AE"],
  staticblush: ["#0F0F0F", "#1E1E2C", "#3C2E4F", "#5B3E73", "#794E96", "#985EBA", "#B76EDD"],
  tundradream: ["#E1F5FF", "#B3DBF2", "#86C2E5", "#58A8D8", "#2B8FCB", "#0075BE", "#005A91"],
  papercoral: ["#F3F2EF", "#F0D9CE", "#EDC1AD", "#EAA98C", "#E7906B", "#E4784A", "#E16029"],
  venomcherry: ["#180012", "#320024", "#4B0036", "#650048", "#7F005A", "#99006C", "#B3007E"],
  peachesice: ["#FFFAF2", "#FFE6D1", "#FFD2B0", "#FFBE8F", "#FFAA6E", "#FF964D", "#FF822C"],
  drowsyrain: ["#C7D5D8", "#A8BCC0", "#89A4A9", "#6A8B91", "#4B737A", "#2C5A62", "#0D424B"],
  neonbrunch: ["#FFE27B", "#FFBD59", "#FF9A38", "#FF7716", "#F75900", "#D44A00", "#B13C00"],
  ashjam: ["#0C0C0C", "#2A2A2A", "#474747", "#656565", "#828282", "#A0A0A0", "#BDBDBD"],
  frostberry: ["#F6F9FB", "#E3EDF5", "#D0E1EF", "#BDD5E9", "#AAC9E3", "#97BDDD", "#84B1D7"],
  bubblevoid: ["#FDF5FF", "#E8CCF4", "#D3A3EA", "#BE7AE0", "#A951D6", "#9428CC", "#7F00C2"],
  sandtwist: ["#F9F1E7", "#E9D7BE", "#D9BD96", "#C9A36D", "#B98945", "#A96F1C", "#995C00"],
  abyssmint: ["#00130D", "#003322", "#005238", "#00724D", "#009263", "#00B179", "#00D18E"],
  hazenectar: ["#FFFBF2", "#FDEED6", "#FBE2B9", "#F9D59D", "#F7C880", "#F5BB64", "#F3AF47"],
  parmacandy: ["#FFF5FC", "#F2D1F4", "#E6AEEE", "#D98AE7", "#CD66E0", "#C042DA", "#B41ED3"],
  inkymoss: ["#101C13", "#1E3727", "#2C5240", "#3A6D58", "#488871", "#56A38A", "#64BEA2"],
  skybone: ["#EAF2F5", "#CFE0E7", "#B5CED9", "#9ABCCA", "#80AABC", "#6598AE", "#4B86A0"],
  sweetlava: ["#1A0000", "#3A0A00", "#5A1500", "#7A1F00", "#9A2A00", "#BA3400", "#DA3F00"],
  lucidlime: ["#FBFFF4", "#E6F8CB", "#D1F1A2", "#BCE979", "#A7E250", "#92DB27", "#7DD300"]
    };

    const container = document.getElementById("paletteContainer");
    const searchBox = document.getElementById("searchBox");

    function renderVibes(filter = "") {
      container.innerHTML = "";
      Object.entries(vibes).forEach(([vibe, colors]) => {
        if (!vibe.includes(filter.toLowerCase())) return;

        const card = document.createElement("div");
        card.className = "card";

        const title = document.createElement("h2");
        title.textContent = vibe;
        card.appendChild(title);

        const colorRow = document.createElement("div");
        colorRow.className = "color-row";

        colors.forEach(color => {
          const box = document.createElement("div");
          box.className = "color-box";
          box.style.backgroundColor = color;
          box.title = `Click to copy ${color}`;

          box.addEventListener("click", () => {
  function fallbackCopy(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      const success = document.execCommand("copy");
      if (success) alert(`${text} copied!`);
      else alert(`Failed to copy ${text}`);
    } catch (err) {
      alert("Copy not supported");
    }
    document.body.removeChild(textarea);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(color).then(() => {
      alert(`${color} copied!`);
    }).catch(() => {
      fallbackCopy(color);
    });
  } else {
    fallbackCopy(color);
  }
});


          colorRow.appendChild(box);
        });

        card.appendChild(colorRow);
        container.appendChild(card);
      });
    }

    searchBox.addEventListener("input", e => {
      renderVibes(e.target.value);
    });

    renderVibes();
});